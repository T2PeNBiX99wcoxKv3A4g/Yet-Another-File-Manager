using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using System.Text;
using SharpCompress.Common;
using SharpCompress.Writers;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Interop;
using PhotinoNetUtils.Localization;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Interop;
using YetAnotherFileManager.Messaging;
using SevenZipSharpBase = SevenZip.SevenZipBase;
using SevenZipSharpCompressor = SevenZip.SevenZipCompressor;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The file operations a context menu offers: clipboard paths, paste, delete, rename, new folder
///     and the shell dialogs. Long-running shell work runs on the STA pool so its own progress and
///     conflict dialogs get a message pump.
/// </summary>
internal static partial class FileOperations
{
    /// <summary>Text previews stop here, so a huge log cannot freeze the details panel.</summary>
    private const int MaxTextPreviewBytes = 256 * 1024;

    static FileOperations() => Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

    /// <summary>
    ///     Pastes files when the clipboard has them; otherwise creates a text or image file from the
    ///     clipboard's text or bitmap. Files win, then images, then text.
    /// </summary>
    public static async Task<bool> PasteAsync(string directory)
    {
        if (!OperatingSystem.IsWindows() && !OperatingSystem.IsLinux()) return false;
        if (!Directory.Exists(directory)) return false;

        var (paths, move, read) = ClipboardService.ReadFiles();
        if (read && paths.Count > 0)
            return await PasteFilesAsync(directory, paths, move);

        return await PasteContentAsync(directory);
    }

    private static async Task<bool> PasteFilesAsync(string directory, List<string> paths, bool move)
    {
        var (step, created) = await CopyIntoAsync(paths, directory, move);
        if (!step.Ok)
            return false;

        // A move consumes the clipboard; a copy stays so the same files can be pasted again.
        if (move)
            ClipboardService.Clear();

        if (created.Count == 0)
            return true;

        var current = created;
        var sources = paths.ToList();

        FileHistory.Instance.Record(move ? $"Move {sources.Count} item(s)" : $"Copy {sources.Count} item(s)",
            paths: current,
            undo: () => move
                ? MoveBackAsync(current, sources)
                : DeleteCoreAsync(current, false),
            redo: async () =>
            {
                var (redoStep, made) = await CopyIntoAsync(sources, directory, move);
                if (redoStep.Ok)
                    current = made;

                return redoStep;
            });

        return true;
    }

    /// <summary>Turns clipboard text or a bitmap into a real file when no files were copied.</summary>
    private static async Task<bool> PasteContentAsync(string directory)
    {
        if (ClipboardService.ReadImagePng() is { Length: > 0 } image)
            return await CreatePastedFileAsync(directory, PastedName("Pasted image", "Pasted image"), ".png", image,
                "Paste image");

        if (ClipboardService.ReadText() is { Length: > 0 } text)
            return await CreatePastedFileAsync(directory, PastedName("Pasted text", "Pasted text"), ".txt",
                Encoding.UTF8.GetBytes(text), "Paste text");

        return false;
    }

    /// <summary>The file name stem in the current UI language, safe for a real file name.</summary>
    private static string PastedName(string key, string fallback)
    {
        var name = Localization.Get(key).Trim();

        foreach (var invalid in Path.GetInvalidFileNameChars())
            name = name.Replace(invalid, '_');

        return name.Length > 0 ? name : fallback;
    }

    private static async Task<bool> CreatePastedFileAsync(string directory, string baseName, string extension,
        byte[] content, string label)
    {
        var path = UniqueName(directory, baseName, extension);

        try
        {
            await File.WriteAllBytesAsync(path, content);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not create {Path}", path);
            return false;
        }

        FileHistory.Instance.Record(label,
            paths: [path],
            undo: () => DeleteFileAsync(path),
            redo: () => WritePastedFileAsync(path, content));

        return true;
    }

    private static Task<FileHistory.Step> WritePastedFileAsync(string path, byte[] content) =>
        Task.Run(() =>
        {
            try
            {
                File.WriteAllBytes(path, content);
                return new FileHistory.Step(true, ParentsOf([path]));
            }
            catch (Exception ex)
            {
                return new FileHistory.Step(false, ParentsOf([path]), ex.Message);
            }
        });

    /// <summary>Runs a paste and reports the paths it actually created.</summary>
    private static async Task<(FileHistory.Step Step, List<string> Created)> CopyIntoAsync(
        IReadOnlyList<string> sources, string directory, bool move)
    {
        var (ok, error, created) = await FileTransfer.RunAsync(sources, directory, move);

        return ok && error is null
            ? (new FileHistory.Step(true, [directory]), created)
            : (new FileHistory.Step(ok, [directory], error ?? "The files could not be copied."), created);
    }

    /// <summary>Copies or moves a set of paths into a folder, for the tray's drag and drop.</summary>
    public static async Task<TransferResultPayload> TransferAsync(TransferRequest? request)
    {
        if (request is null || request.Paths.Count == 0 || string.IsNullOrWhiteSpace(request.Target))
            return new TransferResultPayload(false, Localization.Get("Nothing to transfer."), []);

        var (ok, error, created) = await FileTransfer.RunAsync(request.Paths, request.Target, request.Move);

        if (created.Count > 0)
        {
            var sources = request.Paths.ToList();
            var current = created;
            var move = request.Move;

            FileHistory.Instance.Record(move ? $"Move {sources.Count} item(s)" : $"Copy {sources.Count} item(s)",
            paths: current,
                undo: () => move
                    ? MoveBackAsync(current, sources)
                    : DeleteCoreAsync(current, false),
                redo: async () =>
                {
                    var (redoOk, redoError, made) = await FileTransfer.RunAsync(sources, request.Target, move);
                    if (redoOk)
                        current = made;

                    return new FileHistory.Step(redoOk, ParentsOf(sources),
                        redoOk ? null : redoError ?? "The transfer could not be repeated.");
                });
        }

        return new TransferResultPayload(ok, error, created);
    }

    /// <summary>Describes paths for the tray without reading the clipboard.</summary>
    public static PathsInfoPayload InspectPaths(IReadOnlyList<string> paths) => new(PathEntries.Describe(paths));

    /// <summary>Moves the entries a cut created back to the names they had before.</summary>
    private static Task<FileHistory.Step> MoveBackAsync(IReadOnlyList<string> created, IReadOnlyList<string> sources) =>
        Task.Run(() =>
        {
            var remaining = sources.ToList();
            var moved = 0;
            string? error = null;

            foreach (var entry in created)
            {
                var source = FindSourceFor(entry, remaining);

                if (source is null)
                {
                    error = "Could not match a moved entry with its original path.";
                    continue;
                }

                remaining.Remove(source);

                try
                {
                    if (File.Exists(source) || Directory.Exists(source))
                        throw new IOException($"'{source}' already exists.");

                    if (Directory.Exists(entry))
                        Directory.Move(entry, source);
                    else
                        File.Move(entry, source);

                    moved++;
                }
                catch (Exception ex)
                {
                    error = ex.Message;
                    Log.Warning(ex, "Could not move {Path} back to {Source}", entry, source);
                }
            }

            var paths = ParentsOf(created.Concat(sources).ToList());
            return new FileHistory.Step(moved == created.Count, paths, moved == created.Count ? null : error);
        });

    private static string? FindSourceFor(string createdPath, List<string> sources)
    {
        var name = Path.GetFileName(createdPath);
        var exact = sources.FirstOrDefault(source =>
            string.Equals(Path.GetFileName(source), name, StringComparison.OrdinalIgnoreCase));

        return exact ?? sources.FirstOrDefault(source => SameName(name, Path.GetFileName(source)));
    }

    /** Whether a shell-renamed copy ("file (2).txt") still names the original entry. */
    private static bool SameName(string candidate, string source)
    {
        if (string.Equals(candidate, source, StringComparison.OrdinalIgnoreCase))
            return true;

        var dot = candidate.LastIndexOf('.');
        var stem = dot > 0 ? candidate[..dot] : candidate;
        var extension = dot > 0 ? candidate[dot..] : "";
        var open = stem.LastIndexOf(" (", StringComparison.Ordinal);

        if (open <= 0 || !stem.EndsWith(')'))
            return false;

        var number = stem[(open + 2)..^1];

        return number.Length > 0 && number.All(char.IsDigit)
            && string.Equals(stem[..open] + extension, source, StringComparison.OrdinalIgnoreCase);
    }

    private static List<string> ParentsOf(IEnumerable<string> paths) =>
        paths.Select(path => Path.GetDirectoryName(path))
            .Where(path => !string.IsNullOrEmpty(path))
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .Cast<string>()
            .ToList();

    /// <summary>Renames one entry in place.</summary>
    public static async Task<PathOperationPayload> RenameAsync(string path, string name)
    {
        var trimmed = name.Trim();

        if (trimmed.Length == 0 || trimmed is "." or ".." || trimmed.IndexOfAny(Path.GetInvalidFileNameChars()) >= 0)
            return new PathOperationPayload(false, null, Localization.Get("That name is not valid."));

        var directory = Path.GetDirectoryName(path);
        if (directory is null)
            return new PathOperationPayload(false, null, Localization.Get("The entry has no parent folder."));

        var target = Path.Combine(directory, trimmed);

        if (string.Equals(path, target, StringComparison.OrdinalIgnoreCase))
            return new PathOperationPayload(true, path, null);

        var step = await RenameCoreAsync(path, target);

        if (step.Ok)
            FileHistory.Instance.Record($"Rename {Path.GetFileName(path)}",
                paths: [target],
                undo: () => RenameCoreAsync(target, path),
                redo: () => RenameCoreAsync(path, target));

        return new PathOperationPayload(step.Ok, step.Ok ? target : null, step.Error);
    }

    private static Task<FileHistory.Step> RenameCoreAsync(string source, string target) =>
        Task.Run(() =>
        {
            if (File.Exists(target) || Directory.Exists(target))
                return new FileHistory.Step(false, ParentsOf([source]), Localization.Get("An entry with that name already exists."));

            try
            {
                if (Directory.Exists(source))
                    Directory.Move(source, target);
                else if (File.Exists(source))
                    File.Move(source, target);
                else
                    return new FileHistory.Step(false, ParentsOf([source]), Localization.Get("The entry is no longer there."));

                return new FileHistory.Step(true, ParentsOf([source]));
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "Could not rename {Path}", source);
                return new FileHistory.Step(false, ParentsOf([source]), ex.Message);
            }
        });

    /// <summary>Creates the next free "New folder" name in a directory.</summary>
    public static async Task<PathOperationPayload> NewFolderAsync(string directory, bool caseSensitive = false)
    {
        if (!Directory.Exists(directory))
            return new PathOperationPayload(false, null, Localization.Get("The folder is no longer there."));

        try
        {
            var path = UniqueName(directory, "New folder", "");
            Directory.CreateDirectory(path);

            // Windows only turns the flag on while the folder is still empty.
            if (caseSensitive)
                CaseFolders.MarkNew(path);

            FileHistory.Instance.Record("New folder",
                paths: [path],
                undo: () => DeleteEmptyFolderAsync(path),
                redo: () => CreateFolderAsync(path));

            return new PathOperationPayload(true, path, null);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not create a folder in {Directory}", directory);
            return new PathOperationPayload(false, null, ex.Message);
        }
    }

    /// <summary>Creates the next free "New file.txt" name in a directory.</summary>
    public static async Task<PathOperationPayload> NewFileAsync(string directory, string? extension = null)
    {
        if (!Directory.Exists(directory))
            return new PathOperationPayload(false, null, Localization.Get("The folder is no longer there."));

        var suffix = NormalizeExtension(extension);

        try
        {
            var path = UniqueName(directory, "New file", suffix);
            await File.WriteAllTextAsync(path, "");

            FileHistory.Instance.Record("New file",
                paths: [path],
                undo: () => DeleteFileAsync(path),
                redo: () => CreateEmptyFileAsync(path));

            return new PathOperationPayload(true, path, null);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not create a file in {Directory}", directory);
            return new PathOperationPayload(false, null, ex.Message);
        }
    }

    /// <summary>A short, safe suffix; anything unusual falls back to <c>.txt</c>.</summary>
    private static string NormalizeExtension(string? extension)
    {
        var value = extension?.Trim() ?? "";

        if (value.Length == 0)
            return ".txt";

        if (!value.StartsWith('.'))
            value = $".{value}";

        return value.Length <= 12 && value[1..].All(char.IsLetterOrDigit)
            ? value.ToLowerInvariant()
            : ".txt";
    }

    /// <summary>Reads the start of a text file for the details pane; binary data is refused.</summary>
    public static async Task<TextPreviewPayload> PreviewTextAsync(string path)
    {
        if (string.IsNullOrWhiteSpace(path) || !File.Exists(path))
            return new TextPreviewPayload(null, false, "The file is no longer there.");

        try
        {
            var info = new FileInfo(path);
            var take = (int)Math.Min(info.Length, MaxTextPreviewBytes);
            var buffer = new byte[take];

            await using (var stream = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite,
                             16 * 1024, FileOptions.Asynchronous | FileOptions.SequentialScan))
            {
                var offset = 0;

                while (offset < buffer.Length)
                {
                    var read = await stream.ReadAsync(buffer.AsMemory(offset, buffer.Length - offset));
                    if (read == 0)
                        break;

                    offset += read;
                }

                if (offset < buffer.Length)
                    Array.Resize(ref buffer, offset);
            }

            var utf16 = buffer.Length >= 2
                        && ((buffer[0] == 0xFF && buffer[1] == 0xFE) || (buffer[0] == 0xFE && buffer[1] == 0xFF));

            if (!utf16 && Array.IndexOf(buffer, (byte)0) >= 0)
                return new TextPreviewPayload(null, false, "This looks like a binary file.");

            var text = DecodeText(buffer);
            return new TextPreviewPayload(text, info.Length > MaxTextPreviewBytes, null);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not preview the text of {Path}", path);
            return new TextPreviewPayload(null, false, ex.Message);
        }
    }

    /// <summary>Decodes text with BOM first, then the legacy code pages common on Windows.</summary>
    private static string DecodeText(byte[] buffer)
    {
        if (buffer.Length >= 3 && buffer[0] == 0xEF && buffer[1] == 0xBB && buffer[2] == 0xBF)
            return Encoding.UTF8.GetString(buffer, 3, buffer.Length - 3);

        if (buffer.Length >= 2 && buffer[0] == 0xFF && buffer[1] == 0xFE)
            return Encoding.Unicode.GetString(buffer, 2, buffer.Length - 2);

        if (buffer.Length >= 2 && buffer[0] == 0xFE && buffer[1] == 0xFF)
            return Encoding.BigEndianUnicode.GetString(buffer, 2, buffer.Length - 2);

        foreach (var codePage in new[] { 65001, 932, 936, 950, 949, 1252, 1250, 1251, 1254, 1253, 1256, 1255, 1257, 874 })
        {
            // A code page that cannot explain the bytes is simply not the right one.
            var text = Try.Run(() =>
            {
                var encoding = Encoding.GetEncoding(codePage, EncoderFallback.ExceptionFallback,
                    DecoderFallback.ExceptionFallback);
                return encoding.GetString(buffer).TrimStart('\uFEFF');
            }).GetOrNull();

            if (text is not null)
                return text;
        }

        return Encoding.UTF8.GetString(buffer);
    }

    private static Task<FileHistory.Step> DeleteFileAsync(string path) =>
        Task.Run(() =>
        {            try
            {
                if (!File.Exists(path))
                    return new FileHistory.Step(false, ParentsOf([path]), "The file is no longer there.");

                File.Delete(path);
                return new FileHistory.Step(true, ParentsOf([path]));
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "Could not remove the new file {Path}", path);
                return new FileHistory.Step(false, ParentsOf([path]), ex.Message);
            }
        });

    private static Task<FileHistory.Step> CreateEmptyFileAsync(string path) =>
        Task.Run(() =>
        {
            try
            {
                using (File.Create(path))
                {
                    // An empty placeholder; the user renames and fills it in.
                }

                return new FileHistory.Step(true, ParentsOf([path]));
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "Could not recreate the file {Path}", path);
                return new FileHistory.Step(false, ParentsOf([path]), ex.Message);
            }
        });

    private static Task<FileHistory.Step> DeleteEmptyFolderAsync(string path) =>
        Task.Run(() =>
        {
            try
            {
                if (!Directory.Exists(path))
                    return new FileHistory.Step(false, ParentsOf([path]), Localization.Get("The folder is no longer there."));

                if (Directory.EnumerateFileSystemEntries(path).Any())
                    return new FileHistory.Step(false, ParentsOf([path]),
                        "The folder is no longer empty, so it was left in place.");

                Directory.Delete(path);
                return new FileHistory.Step(true, ParentsOf([path]));
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "Could not remove the new folder {Path}", path);
                return new FileHistory.Step(false, ParentsOf([path]), ex.Message);
            }
        });

    private static Task<FileHistory.Step> CreateFolderAsync(string path) =>
        Task.Run(() =>
        {
            try
            {
                Directory.CreateDirectory(path);
                return new FileHistory.Step(true, ParentsOf([path]));
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "Could not recreate the folder {Path}", path);
                return new FileHistory.Step(false, ParentsOf([path]), ex.Message);
            }
        });

    /// <summary>Packs selected paths using the requested format, level, name and destination.</summary>
    public static async Task<PathOperationPayload> CompressAsync(CompressRequest? request)
    {
        if (request is null)
            return new PathOperationPayload(false, null, Localization.Get("There is nothing to compress."));

        var entries = request.Paths.Where(path => File.Exists(path) || Directory.Exists(path)).ToList();
        if (entries.Count == 0)
            return new PathOperationPayload(false, null, Localization.Get("There is nothing to compress."));

        if (!Directory.Exists(request.Directory))
            return new PathOperationPayload(false, null, Localization.Get("The destination folder is no longer there."));

        if (NeedsSevenZipCompressor(request))
            return await CompressWithSevenZipAsync(request, entries);

        var (archiveType, compression, extension) = request.Format.ToLowerInvariant() switch
        {
            "zip" => (ArchiveType.Zip, request.Level == 0 ? CompressionType.None : CompressionType.Deflate, ".zip"),
            "7z" => (ArchiveType.SevenZip, CompressionType.LZMA2, ".7z"),
            "tar" => (ArchiveType.Tar, CompressionType.None, ".tar"),
            "tar.gz" => (ArchiveType.Tar, CompressionType.GZip, ".tar.gz"),
            "tar.bz2" => (ArchiveType.Tar, CompressionType.BZip2, ".tar.bz2"),
            _ => (ArchiveType.Zip, (CompressionType?)null, ""),
        };

        if (compression is null)
            return new PathOperationPayload(false, null, Localization.Get("That archive format is not supported."));

        var baseName = request.Name.Trim();
        if (baseName.EndsWith(extension, StringComparison.OrdinalIgnoreCase))
            baseName = baseName[..^extension.Length];

        if (baseName.Length == 0 || baseName is "." or ".."
            || baseName.IndexOfAny(Path.GetInvalidFileNameChars()) >= 0
            || Path.GetFileName(baseName) != baseName)
            return new PathOperationPayload(false, null, Localization.Get("That archive name is not valid."));

        var output = UniquePath(request.Directory, baseName, extension);
        var sources = entries.ToList();

        var compressionLevel = compression.Value is CompressionType.BZip2 or CompressionType.Xz or CompressionType.LZMA2
            ? 0
            : Math.Clamp(request.Level, 0, 9);
        var result = await Task.Run(() => CompressCore(entries, output, archiveType, compression.Value,
            compressionLevel));

        if (!result.Ok || result.Path is not { } archivePath)
            return result;

        var currentPath = archivePath;
        FileHistory.Instance.Record($"Compress {Path.GetFileName(archivePath)}",
            paths: [archivePath],
            undo: () => DeleteFileStepAsync(currentPath),
            redo: async () =>
            {
                var redoPath = UniquePath(request.Directory, baseName, extension);
                var redo = await Task.Run(() => CompressCore(sources, redoPath, archiveType, compression.Value,
                    compressionLevel));
                if (redo.Ok && redo.Path is { } newPath) currentPath = newPath;
                return new FileHistory.Step(redo.Ok, ParentsOf(sources), redo.Error);
            });

        return result;
    }

    private static bool NeedsSevenZipCompressor(CompressRequest request)
    {
        var format = request.Format.ToLowerInvariant();
        var method = (request.Method ?? "").ToLowerInvariant();
        var encryption = (request.Encryption ?? "none").ToLowerInvariant();
        var split = request.SplitSize ?? 0;

        if (format == "zipx")
            return true;

        if (format is not ("zip" or "7z"))
            return false;

        if (split > 0)
            return format is "zip" or "7z";

        if (encryption is not ("none" or ""))
            return true;

        return format == "zip" && method is not ("" or "default" or "deflate");
    }

    private static async Task<PathOperationPayload> CompressWithSevenZipAsync(CompressRequest request,
        List<string> entries, bool recordHistory = true)
    {
        var format = request.Format.ToLowerInvariant();
        var extension = format switch
        {
            "zip" => ".zip",
            "zipx" => ".zipx",
            "7z" => ".7z",
            _ => "",
        };

        if (extension.Length == 0)
            return new PathOperationPayload(false, null, Localization.Get("That format cannot be encrypted or split."));

        var split = request.SplitSize ?? 0;
        var method = (request.Method ?? "").ToLowerInvariant();
        var cli = format is "zip" or "zipx" && (method == "xz" || split > 0 && format == "zip");

        var baseName = request.Name.Trim();
        if (baseName.EndsWith(extension, StringComparison.OrdinalIgnoreCase))
            baseName = baseName[..^extension.Length];

        if (baseName.Length == 0 || baseName is "." or ".."
            || baseName.IndexOfAny(Path.GetInvalidFileNameChars()) >= 0
            || Path.GetFileName(baseName) != baseName)
            return new PathOperationPayload(false, null, Localization.Get("That archive name is not valid."));

        var output = UniquePath(request.Directory, baseName, extension);
        var files = ArchiveFiles(entries);
        if (files.Count == 0)
            return new PathOperationPayload(false, null, Localization.Get("There is nothing to compress."));

        try
        {
            if (cli)
            {
                await CompressWithSevenZipCliAsync(request, entries, output);
            }
            else
            {
                SevenZipSharpBase.SetLibraryPath(Archives.SevenZipLibraryPath);

                var compressor = new SevenZipSharpCompressor
                {
                    ArchiveFormat = format == "7z" ? SevenZip.OutArchiveFormat.SevenZip : SevenZip.OutArchiveFormat.Zip,
                    CompressionMethod = MethodOf(format, request.Method),
                    CompressionLevel = LevelOf(request.Level),
                    IncludeEmptyDirectories = true,
                    VolumeSize = split,
                };

                var encryption = (request.Encryption ?? "none").ToLowerInvariant();
                var password = request.Password;

                if (format is "zip" or "zipx" && encryption is not ("none" or ""))
                {
                    compressor.ZipEncryptionMethod = encryption switch
                    {
                        "aes128" => SevenZip.ZipEncryptionMethod.Aes128,
                        "aes192" => SevenZip.ZipEncryptionMethod.Aes192,
                        "aes256" => SevenZip.ZipEncryptionMethod.Aes256,
                        _ => SevenZip.ZipEncryptionMethod.ZipCrypto,
                    };
                }

                var encrypted = password is { Length: > 0 } && encryption is not ("none" or "");
                await Task.Run(() => compressor.CompressFileDictionary(files, output, encrypted ? password : null));
            }
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not create {Archive}", output);
            Try.Run(() => File.Delete(output));
            return new PathOperationPayload(false, null, ex.Message);
        }

        if (recordHistory)
            FileHistory.Instance.Record($"Compress {Path.GetFileName(output)}",
                paths: [output],
                undo: () => DeleteFileStepAsync(output),
                redo: async () =>
                {
                    var redoPath = UniquePath(request.Directory, baseName, extension);
                    var redo = await CompressWithSevenZipAsync(
                        request with {Name = Path.GetFileNameWithoutExtension(redoPath)}, entries, false);
                    if (redo.Ok && redo.Path is { } newPath) output = newPath;
                    return new FileHistory.Step(redo.Ok, ParentsOf(entries), redo.Error);
                });

        // A split 7z has no base file; the first volume is the one the user opens.
        var resultPath = split > 0 && !File.Exists(output) && File.Exists(output + ".001")
            ? output + ".001"
            : output;

        return new PathOperationPayload(true, resultPath, null);
    }

    private static Dictionary<string, string> ArchiveFiles(IReadOnlyList<string> entries)
    {
        var files = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

        foreach (var entry in entries)
        {
            if (File.Exists(entry))
            {
                files[Path.GetFileName(entry)] = entry;
                continue;
            }

            if (!Directory.Exists(entry))
                continue;

            var root = entry.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
            var baseName = Path.GetFileName(root);

            foreach (var file in Directory.EnumerateFiles(root, "*", SearchOption.AllDirectories))
            {
                var relative = Path.GetRelativePath(root, file).Replace('\\', '/');
                files[$"{baseName}/{relative}"] = file;
            }
        }

        return files;
    }

    private static SevenZip.CompressionMethod MethodOf(string format, string? method)
    {
        var wanted = (method ?? "").ToLowerInvariant();

        if (wanted == "store") return SevenZip.CompressionMethod.Copy;
        if (wanted == "bzip2") return SevenZip.CompressionMethod.BZip2;
        if (wanted == "lzma") return SevenZip.CompressionMethod.Lzma;
        if (wanted == "ppmd") return SevenZip.CompressionMethod.Ppmd;
        if (wanted == "deflate64") return SevenZip.CompressionMethod.Deflate64;
        if (wanted == "lzma2") return SevenZip.CompressionMethod.Lzma2;

        return format == "7z"
            ? SevenZip.CompressionMethod.Lzma2
            : format == "zipx" ? SevenZip.CompressionMethod.Lzma : SevenZip.CompressionMethod.Deflate;
    }

    private static SevenZip.CompressionLevel LevelOf(int level) => level switch
    {
        0 => SevenZip.CompressionLevel.None,
        <= 1 => SevenZip.CompressionLevel.Fast,
        <= 5 => SevenZip.CompressionLevel.Normal,
        <= 7 => SevenZip.CompressionLevel.High,
        _ => SevenZip.CompressionLevel.Ultra,
    };

    private static async Task CompressWithSevenZipCliAsync(CompressRequest request, IReadOnlyList<string> entries,
        string output)
    {
        var executable = Path.Combine(AppContext.BaseDirectory, "7z", "7z.exe");
        if (!File.Exists(executable))
            throw new FileNotFoundException("The bundled 7z.exe is missing.");

        var roots = entries.Select(entry => Directory.Exists(entry)
            ? Path.GetDirectoryName(entry.TrimEnd(Path.DirectorySeparatorChar))!
            : Path.GetDirectoryName(entry)!).ToList();
        var common = roots[0];

        while (roots.Any(root => !root.Equals(common, StringComparison.OrdinalIgnoreCase)
                   && !root.StartsWith(common.TrimEnd(Path.DirectorySeparatorChar) + Path.DirectorySeparatorChar,
                       StringComparison.OrdinalIgnoreCase)))
                common = Path.GetDirectoryName(common) ?? Path.GetPathRoot(common)!;

        var start = new ProcessStartInfo(executable)
        {
            UseShellExecute = false,
            CreateNoWindow = true,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            WorkingDirectory = common,
        };

        start.ArgumentList.Add("a");
        start.ArgumentList.Add("-tzip");
        start.ArgumentList.Add($"-mm={(request.Method?.Equals("xz", StringComparison.OrdinalIgnoreCase) == true ? "XZ" : "Deflate")}");
        start.ArgumentList.Add($"-mx={Math.Clamp(request.Level, 0, 9)}");
        start.ArgumentList.Add("-y");

        var encryption = (request.Encryption ?? "none").ToLowerInvariant();
        if (request.Password is { Length: > 0 } && encryption is not ("none" or ""))
        {
            start.ArgumentList.Add($"-p{request.Password}");
            if (encryption == "aes256") start.ArgumentList.Add("-mem=AES256");
        }

        if (request.SplitSize is > 0)
            start.ArgumentList.Add($"-v{request.SplitSize}b");

        start.ArgumentList.Add(output);
        foreach (var entry in entries)
            start.ArgumentList.Add(Path.GetRelativePath(common, entry));

        using var process = Process.Start(start) ?? throw new InvalidOperationException("Could not start 7z.exe.");
        var error = await process.StandardError.ReadToEndAsync();
        await process.WaitForExitAsync();

        if (process.ExitCode != 0)
            throw new IOException(error.Trim());
    }

    private static PathOperationPayload CompressCore(IReadOnlyList<string> paths, string output,
        ArchiveType archiveType, CompressionType compression, int level)
    {
        var taskId = TaskCenter.Instance.Start("compress", $"Compress {Path.GetFileName(output)}");
        var total = (int)Math.Min(paths.Sum(path => Directory.Exists(path)
            ? Directory.EnumerateFiles(path, "*", SearchOption.AllDirectories).LongCount()
            : 1), int.MaxValue);
        TaskCenter.Instance.UpdateTotal(taskId, total, 0);

        // The native writer is much faster for the common ZIP setting and works in parallel; the
        // streaming SharpCompress path below handles alternate levels, formats and very large files.
        if (archiveType == ArchiveType.Zip && compression == CompressionType.Deflate && level == 5)
        {
            var native = Try.Run(() => RustNative.Compress(paths, output))
                .OnFailure(ex => Log.Warning(ex, "The native ZIP writer failed; using the streaming writer"))
                .GetOrNull();

            if (native == RustNative.ZipResult.Ok)
            {
                TaskCenter.Instance.Complete(taskId);
                return new PathOperationPayload(true, output, null);
            }

            Try.Run(() => File.Delete(output));
        }

        try
        {
            var options = new WriterOptions(compression, level)
            {
                ArchiveEncoding = new ArchiveEncoding {Default = Encoding.UTF8, Forced = Encoding.UTF8}
            };
            using var writer = WriterFactory.OpenWriter(output, archiveType, options);
            var done = 0;

            foreach (var path in paths)
            {
                var name = Directory.Exists(path) ? new DirectoryInfo(path).Name : Path.GetFileName(path);
                WriteArchivePath(writer, path, name, ref done, total, taskId);
            }

            TaskCenter.Instance.Complete(taskId);
            return new PathOperationPayload(true, output, null);
        }
        catch (Exception ex)
        {
            Try.Run(() => File.Delete(output));
            TaskCenter.Instance.Fail(taskId, ex.Message);
            Log.Warning(ex, "Could not compress {Count} entries", paths.Count);
            return new PathOperationPayload(false, null, ex.Message);
        }
    }

    private static void WriteArchivePath(IWriter writer, string path, string archiveName,
        ref int done, int total, string taskId)
    {
        var attributes = File.GetAttributes(path);
        if ((attributes & FileAttributes.ReparsePoint) != 0)
            return;

        if ((attributes & FileAttributes.Directory) != 0)
        {
            var directory = new DirectoryInfo(path);
            writer.WriteDirectory(archiveName.TrimEnd('/') + "/", directory.LastWriteTime);
            var children = Directory.EnumerateFileSystemEntries(path).ToList();

            foreach (var child in children)
                WriteArchivePath(writer, child, $"{archiveName.TrimEnd('/')}/{Path.GetFileName(child)}",
                    ref done, total, taskId);

            return;
        }

        var info = new FileInfo(path);
        using var stream = File.OpenRead(path);
        writer.Write(archiveName.Replace('\\', '/'), stream, info.LastWriteTime);
        TaskCenter.Instance.Progress(taskId, ++done, 0);
    }

    private static Task<FileHistory.Step> DeleteFileStepAsync(string path) =>
        Task.Run(() =>
        {
            try
            {
                if (!File.Exists(path))
                    return new FileHistory.Step(false, ParentsOf([path]), "The file is no longer there.");

                File.Delete(path);
                return new FileHistory.Step(true, ParentsOf([path]));
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "Could not remove {Path}", path);
                return new FileHistory.Step(false, ParentsOf([path]), ex.Message);
            }
        });

    private static string UniquePath(string directory, string baseName, string extension) =>
        UniqueName(directory, baseName, extension);

    /// <summary>The first free "name", "name (2)" … in a folder; a GUID fallback avoids an endless loop.</summary>
    private static string UniqueName(string directory, string baseName, string extension)
    {
        for (var attempt = 1; attempt < 1000; attempt++)
        {
            var name = attempt == 1 ? $"{baseName}{extension}" : $"{baseName} ({attempt}){extension}";
            var path = Path.Combine(directory, name);

            if (!File.Exists(path) && !Directory.Exists(path))
                return path;
        }

        return Path.Combine(directory, $"{baseName} {Guid.NewGuid():N}{extension}");
    }

    /// <summary>Opens the shell's properties sheet for the first selected entry.</summary>
    public static Task ShowPropertiesAsync(IReadOnlyList<string> paths) =>
        Task.Run(() =>
        {
            if (!OperatingSystem.IsWindows() || paths.Count == 0)
                return;

            ShowWindowsProperties(paths[0]);
        });

    [SupportedOSPlatform("windows")]
    private static void ShowWindowsProperties(string path)
    {
        // SHObjectProperties is the shell's own entry point and does not depend on a registered
        // "properties" verb, which Process.Start needs and which several file types lack.
        var shown = Try.Run(() => StaThread.RunAsync(() =>
                SHObjectProperties(WindowManager.Instance.WindowHandle, ShopFilepath, path, null))
            .GetAwaiter().GetResult()).GetOrElse(_ => false);

        if (shown)
            return;

        Try.Run(() => Process.Start(new ProcessStartInfo(path)
        {
            UseShellExecute = true,
            Verb = "properties"
        })).OnFailure(ex => Log.Warning(ex, "Could not show properties for {Path}", path));
    }

    private const uint ShopFilepath = 0x00000002;

    [LibraryImport("shell32.dll", StringMarshalling = StringMarshalling.Utf16)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool SHObjectProperties(IntPtr window, uint objectType, string objectName,
        string? propertyPage);

    /// <summary>Opens Windows' "How do you want to open this file?" dialog.</summary>
    public static Task OpenWithAsync(string path) =>
        Task.Run(() =>
        {
            if (!OperatingSystem.IsWindows() || !File.Exists(path))
                return;

            // The path must be its own argument. Passing one quoted command line to rundll32 makes
            // OpenWith.exe receive the quotes as part of the file name, and Windows shows nothing.
            var startInfo = new ProcessStartInfo("rundll32.exe")
            {
                UseShellExecute = false
            };

            startInfo.ArgumentList.Add("shell32.dll,OpenAs_RunDLL");
            startInfo.ArgumentList.Add(path);

            Try.Run(() => Process.Start(startInfo))
                .OnFailure(ex => Log.Warning(ex, "Could not open {Path} with another app", path));
        });

    /// <summary>Opens a terminal in a folder, with the platform's own terminal.</summary>
    public static Task OpenTerminalAsync(string directory) =>
        Task.Run(() =>
        {
            if (!Directory.Exists(directory))
                return;

            if (OperatingSystem.IsLinux())
            {
                // xdg-terminal-exec is the freedesktop way; the common terminals cover the desktop
                // images that have not adopted it yet.
                if (TryStartTerminal("xdg-terminal-exec", directory))
                    return;

                if (TryStartTerminal("konsole", directory, "--workdir", directory)
                    || TryStartTerminal("gnome-terminal", directory, "--working-directory", directory)
                    || TryStartTerminal("x-terminal-emulator", directory)
                    || TryStartTerminal("xterm", directory))
                    return;

                Log.Warning("No terminal application could be started in {Directory}", directory);
                return;
            }

            if (!OperatingSystem.IsWindows())
                return;

            var terminal = Try.Run(() => Process.Start(new ProcessStartInfo("wt.exe")
            {
                UseShellExecute = true,
                ArgumentList = { "-d", directory }
            })).GetOrNull();

            if (terminal is not null)
                return;

            var quoted = directory.Replace("'", "''");

            Try.Run(() => Process.Start(new ProcessStartInfo("powershell.exe",
                $"-NoExit -Command Set-Location -LiteralPath '{quoted}'")
            {
                UseShellExecute = true
            })).OnFailure(ex => Log.Warning(ex, "Could not open a terminal in {Directory}", directory));
        });

    /// <summary>Starts a terminal with the folder as its working directory; false when it is missing.</summary>
    private static bool TryStartTerminal(string program, string directory, params string[] arguments) =>
        Try.Run(() =>
        {
            var info = new ProcessStartInfo(program)
            {
                UseShellExecute = false,
                WorkingDirectory = directory
            };

            foreach (var argument in arguments)
                info.ArgumentList.Add(argument);

            return Process.Start(info) is not null;
        }).GetOrElse(_ => false);

    /// <summary>Reveals a path in Explorer, or opens its folder elsewhere.</summary>
    public static Task ShowInExplorerAsync(string path) =>
        Task.Run(() =>
        {
            if (OperatingSystem.IsWindows())
            {
                Try.Run(() => Process.Start(new ProcessStartInfo("explorer.exe", $"/select,\"{path}\"")
                {
                    UseShellExecute = true
                })).OnFailure(ex => Log.Warning(ex, "Could not reveal {Path}", path));
                return;
            }

            var directory = Directory.Exists(path) ? path : Path.GetDirectoryName(path);

            if (OperatingSystem.IsLinux() && directory is not null)
                Try.Run(() => Process.Start(new ProcessStartInfo("xdg-open", $"\"{directory}\"")
                {
                    UseShellExecute = true
                })).OnFailure(ex => Log.Warning(ex, "Could not open {Directory}", directory));
        });
}
