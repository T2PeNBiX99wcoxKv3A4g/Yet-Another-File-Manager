using System.Diagnostics;
using System.IO.Compression;
using System.Runtime.InteropServices;
using System.Text;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Interop;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The file operations a context menu offers: clipboard paths, paste, delete, rename, new folder
///     and the shell dialogs. Long-running shell work runs on the STA pool so its own progress and
///     conflict dialogs get a message pump.
/// </summary>
internal static partial class FileOperations
{
    private const uint CfHDrop = 15;
    private const uint GmemMoveable = 0x0002;
    private const uint FoMove = 0x0001;
    private const uint FoCopy = 0x0002;
    private const uint FoDelete = 0x0003;
    private const ushort FofAllowUndo = 0x0040;
    private const ushort FofNoConfirmation = 0x0010;
    private const ushort FofNoConfirmMkdir = 0x0200;

    private static readonly string PreferredDropEffect = "Preferred DropEffect";

    /// <summary>Puts the paths on the clipboard as files, with the effect Explorer uses for cut/copy.</summary>
    public static bool CopyToClipboard(IReadOnlyList<string>? paths, bool cut)
    {
        if (!OperatingSystem.IsWindows()) return false;

        var files = paths?.Where(path => path.Length > 0).Distinct(StringComparer.OrdinalIgnoreCase).ToList() ?? [];
        if (files.Count == 0) return false;

        if (!OpenClipboard())
            return false;

        try
        {
            EmptyClipboard();
            return WriteDropFiles(files) && WriteDropEffect(cut ? 2u : 1u);
        }
        finally
        {
            NativeMethods.CloseClipboard();
        }
    }

    /// <summary>Whether the clipboard currently carries files that can be pasted.</summary>
    public static bool ClipboardHasFiles()
    {
        if (!OperatingSystem.IsWindows()) return false;

        if (!IsClipboardFormatAvailable(CfHDrop) || !OpenClipboard())
            return false;

        NativeMethods.CloseClipboard();
        return true;
    }

    /// <summary>Copies or moves the files on the clipboard into a folder.</summary>
    public static async Task<bool> PasteAsync(string directory)
    {
        if (!OperatingSystem.IsWindows()) return false;

        var (paths, move) = ReadClipboardFiles();
        if (paths.Count == 0 || !Directory.Exists(directory))
            return false;

        var (step, created) = await CopyIntoAsync(paths, directory, move);
        if (!step.Ok)
            return false;

        // A move consumes the clipboard; a copy stays so the same files can be pasted again.
        if (move)
            ClearClipboard();

        if (created.Count == 0)
            return true;

        var current = created;
        var sources = paths.ToList();

        FileHistory.Instance.Record(move ? $"Move {sources.Count} item(s)" : $"Copy {sources.Count} item(s)",
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
            return new TransferResultPayload(false, "Nothing to transfer.", []);

        var (ok, error, created) = await FileTransfer.RunAsync(request.Paths, request.Target, request.Move);

        if (created.Count > 0)
        {
            var sources = request.Paths.ToList();
            var current = created;
            var move = request.Move;

            FileHistory.Instance.Record(move ? $"Move {sources.Count} item(s)" : $"Copy {sources.Count} item(s)",
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

    /// <summary>The files on the clipboard, with just enough detail for the tray to draw them.</summary>
    public static ClipboardPathsPayload ReadClipboardPayload()
    {
        if (!OperatingSystem.IsWindows())
            return new ClipboardPathsPayload([], false, 0);

        var (paths, move) = ReadClipboardFiles();
        return new ClipboardPathsPayload(Describe(paths), move, GetClipboardSequenceNumber());
    }

    /// <summary>Describes paths for the tray without reading the clipboard.</summary>
    public static PathsInfoPayload InspectPaths(IReadOnlyList<string> paths) => new(Describe(paths));

    private static List<ClipboardEntry> Describe(IReadOnlyList<string> paths) =>
        paths
            .Where(path => path.Length > 0)
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .Select(path => new ClipboardEntry(
                path,
                Path.GetFileName(path.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar)),
                Directory.Exists(path)))
            .ToList();

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

    private static void ClearClipboard()
    {
        if (!OpenClipboard())
            return;

        EmptyClipboard();
        NativeMethods.CloseClipboard();
    }

    /// <summary>Sends the paths to the recycle bin, or deletes them permanently when asked.</summary>
    public static async Task<bool> DeleteAsync(IReadOnlyList<string> paths, bool permanent = false)
    {
        var deletedAt = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        var step = await DeleteCoreAsync(paths, permanent);

        if (!step.Ok || permanent || paths.Count == 0)
            return step.Ok;

        var deleted = paths.ToList();
        FileHistory.Instance.Record($"Delete {deleted.Count} item(s)",
            undo: () => RestoreFromRecycleAsync(deleted, deletedAt),
            redo: () => DeleteCoreAsync(deleted, false));

        return true;
    }

    private static async Task<FileHistory.Step> DeleteCoreAsync(IReadOnlyList<string> paths, bool permanent)
    {
        if (!OperatingSystem.IsWindows())
            return new FileHistory.Step(false, ParentsOf(paths), "Deleting needs Windows.");

        var ok = await ShellOperationAsync(FoDelete, paths, null,
            (ushort)(permanent ? FofNoConfirmation : FofAllowUndo | FofNoConfirmation));

        return new FileHistory.Step(ok, ParentsOf(paths),
            ok ? null : "The shell could not delete the selection.");
    }

    /// <summary>Finds the records a delete just created and restores them.</summary>
    private static async Task<FileHistory.Step> RestoreFromRecycleAsync(IReadOnlyList<string> paths, long deletedAt)
    {
        var entries = await RecycleBin.ListAsync(false);
        var wanted = paths.Select(Normalize).ToHashSet(StringComparer.OrdinalIgnoreCase);

        var matches = entries
            .Where(entry => entry.Deleted >= deletedAt - 5000 && wanted.Contains(Normalize(entry.OriginalPath)))
            .OrderByDescending(entry => entry.Deleted)
            .ToList();

        if (matches.Count == 0)
            return new FileHistory.Step(false, ParentsOf(paths),
                "The deleted items are no longer in the recycle bin.");

        var restored = 0;

        foreach (var entry in matches)
            if (await RecycleBin.RestoreAsync(entry.Id))
                restored++;

        return new FileHistory.Step(restored > 0, ParentsOf(paths),
            restored > 0 ? null : "Windows could not restore the deleted items.");
    }

    private static string Normalize(string path) =>
        path.TrimEnd('\\', '/').ToLowerInvariant();

    /// <summary>Renames one entry in place.</summary>
    public static async Task<PathOperationPayload> RenameAsync(string path, string name)
    {
        var trimmed = name.Trim();

        if (trimmed.Length == 0 || trimmed is "." or ".." || trimmed.IndexOfAny(Path.GetInvalidFileNameChars()) >= 0)
            return new PathOperationPayload(false, null, "That name is not valid.");

        var directory = Path.GetDirectoryName(path);
        if (directory is null)
            return new PathOperationPayload(false, null, "The entry has no parent folder.");

        var target = Path.Combine(directory, trimmed);

        if (string.Equals(path, target, StringComparison.OrdinalIgnoreCase))
            return new PathOperationPayload(true, path, null);

        var step = await RenameCoreAsync(path, target);

        if (step.Ok)
            FileHistory.Instance.Record($"Rename {Path.GetFileName(path)}",
                undo: () => RenameCoreAsync(target, path),
                redo: () => RenameCoreAsync(path, target));

        return new PathOperationPayload(step.Ok, step.Ok ? target : null, step.Error);
    }

    private static Task<FileHistory.Step> RenameCoreAsync(string source, string target) =>
        Task.Run(() =>
        {
            if (File.Exists(target) || Directory.Exists(target))
                return new FileHistory.Step(false, ParentsOf([source]), "An entry with that name already exists.");

            try
            {
                if (Directory.Exists(source))
                    Directory.Move(source, target);
                else if (File.Exists(source))
                    File.Move(source, target);
                else
                    return new FileHistory.Step(false, ParentsOf([source]), "The entry is no longer there.");

                return new FileHistory.Step(true, ParentsOf([source]));
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "Could not rename {Path}", source);
                return new FileHistory.Step(false, ParentsOf([source]), ex.Message);
            }
        });

    /// <summary>Creates the next free "New folder" name in a directory.</summary>
    public static async Task<PathOperationPayload> NewFolderAsync(string directory)
    {
        if (!Directory.Exists(directory))
            return new PathOperationPayload(false, null, "The folder is no longer there.");

        try
        {
            for (var attempt = 1; attempt < 1000; attempt++)
            {
                var name = attempt == 1 ? "New folder" : $"New folder ({attempt})";
                var path = Path.Combine(directory, name);

                if (Directory.Exists(path) || File.Exists(path))
                    continue;

                Directory.CreateDirectory(path);
                FileHistory.Instance.Record("New folder",
                    undo: () => DeleteEmptyFolderAsync(path),
                    redo: () => CreateFolderAsync(path));

                return new PathOperationPayload(true, path, null);
            }

            return new PathOperationPayload(false, null, "Could not find a free name for the new folder.");
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not create a folder in {Directory}", directory);
            return new PathOperationPayload(false, null, ex.Message);
        }
    }

    private static Task<FileHistory.Step> DeleteEmptyFolderAsync(string path) =>
        Task.Run(() =>
        {
            try
            {
                if (!Directory.Exists(path))
                    return new FileHistory.Step(false, ParentsOf([path]), "The folder is no longer there.");

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

    /// <summary>Packs the selected files and folders into a ZIP beside the first one.</summary>
    public static async Task<PathOperationPayload> CompressAsync(IReadOnlyList<string> paths)
    {
        var result = await CompressCoreAsync(paths);

        if (!result.Ok || result.Path is not { } zipPath)
            return result;

        var sources = paths.Where(path => File.Exists(path) || Directory.Exists(path)).ToList();
        var currentZip = zipPath;

        FileHistory.Instance.Record($"Compress {Path.GetFileName(zipPath)}",
            undo: () => DeleteFileStepAsync(currentZip),
            redo: async () =>
            {
                var redo = await CompressCoreAsync(sources);

                if (redo.Ok && redo.Path is { } newZip)
                    currentZip = newZip;

                return new FileHistory.Step(redo.Ok, ParentsOf(sources), redo.Error);
            });

        return result;
    }

    private static Task<PathOperationPayload> CompressCoreAsync(IReadOnlyList<string> paths) =>
        Task.Run(() =>
        {
            var entries = paths.Where(path => File.Exists(path) || Directory.Exists(path)).ToList();
            if (entries.Count == 0)
                return new PathOperationPayload(false, null, "There is nothing to compress.");

            var first = entries[0];
            var directory = Path.GetDirectoryName(first);

            if (directory is null)
                return new PathOperationPayload(false, null, "The selection has no parent folder.");

            var baseName = entries.Count == 1
                ? (Directory.Exists(first) ? new DirectoryInfo(first).Name : Path.GetFileNameWithoutExtension(first))
                : "Archive";

            var zipPath = UniquePath(directory, baseName, ".zip");

            try
            {
                using (var archive = ZipFile.Open(zipPath, ZipArchiveMode.Create))
                {
                    foreach (var path in entries)
                    {
                        if (Directory.Exists(path))
                        {
                            var parent = Path.GetDirectoryName(path.TrimEnd(Path.DirectorySeparatorChar)) ?? directory;
                            var files = Directory.EnumerateFiles(path, "*", SearchOption.AllDirectories).ToList();

                            if (files.Count == 0)
                                archive.CreateEntry($"{new DirectoryInfo(path).Name}/");

                            foreach (var file in files)
                            {
                                var name = Path.GetRelativePath(parent, file).Replace('\\', '/');
                                archive.CreateEntryFromFile(file, name, CompressionLevel.Optimal);
                            }

                            continue;
                        }

                        archive.CreateEntryFromFile(path, Path.GetFileName(path), CompressionLevel.Optimal);
                    }
                }

                return new PathOperationPayload(true, zipPath, null);
            }
            catch (Exception ex)
            {
                Try.Run(() => File.Delete(zipPath));
                Log.Warning(ex, "Could not compress {Count} entries", entries.Count);
                return new PathOperationPayload(false, null, ex.Message);
            }
        });

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

    private static string UniquePath(string directory, string baseName, string extension)
    {
        var path = Path.Combine(directory, baseName + extension);

        for (var attempt = 2; File.Exists(path) || Directory.Exists(path); attempt++)
            path = Path.Combine(directory, $"{baseName} ({attempt}){extension}");

        return path;
    }

    /// <summary>Opens the shell's properties sheet for the first selected entry.</summary>
    public static Task ShowPropertiesAsync(IReadOnlyList<string> paths) =>
        Task.Run(() =>
        {
            if (!OperatingSystem.IsWindows() || paths.Count == 0)
                return;

            Try.Run(() => Process.Start(new ProcessStartInfo(paths[0])
            {
                UseShellExecute = true,
                Verb = "properties"
            })).OnFailure(ex => Log.Warning(ex, "Could not show properties for {Path}", paths[0]));
        });

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

    /// <summary>Opens Windows Terminal in a folder, falling back to PowerShell.</summary>
    public static Task OpenTerminalAsync(string directory) =>
        Task.Run(() =>
        {
            if (!OperatingSystem.IsWindows() || !Directory.Exists(directory))
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

    private static async Task<bool> ShellOperationAsync(uint function, IReadOnlyList<string> paths,
        string? target, ushort extraFlags = 0)
    {
        if (paths.Count == 0)
            return false;

        var files = paths.Where(path => path.Length > 0).Distinct(StringComparer.OrdinalIgnoreCase).ToList();
        if (files.Count == 0)
            return false;

        return await StaThread.RunAsync(() =>
        {
            var operation = new ShFileOpStruct
            {
                hwnd = WindowManager.Instance.WindowHandle,
                wFunc = function,
                pFrom = string.Join('\0', files) + "\0",
                pTo = target ?? "",
                fFlags = (ushort)(FofAllowUndo | FofNoConfirmMkdir | extraFlags)
            };

            var result = SHFileOperation(ref operation);

            if (result != 0)
                Log.Warning("The shell file operation {Function} failed with {Result}", function, result);

            return result == 0 && !operation.fAnyOperationsAborted;
        });
    }

    private static bool OpenClipboard()
    {
        for (var attempt = 0; attempt < 5; attempt++)
        {
            if (NativeMethods.OpenClipboard(IntPtr.Zero))
                return true;

            Thread.Sleep(10);
        }

        return false;
    }

    private static bool WriteDropFiles(IReadOnlyList<string> paths)
    {
        var text = Encoding.Unicode.GetBytes(string.Join('\0', paths) + "\0\0");
        var headerSize = Marshal.SizeOf<DropFiles>();
        var size = headerSize + text.Length;
        var handle = GlobalAlloc(GmemMoveable, (nuint)size);

        if (handle == IntPtr.Zero)
            return false;

        var memory = NativeMethods.GlobalLock(handle);
        if (memory == IntPtr.Zero)
        {
            GlobalFree(handle);
            return false;
        }

        try
        {
            var header = new DropFiles
            {
                pFiles = (uint)headerSize,
                fWide = 1
            };

            Marshal.StructureToPtr(header, memory, false);
            Marshal.Copy(text, 0, IntPtr.Add(memory, headerSize), text.Length);
        }
        finally
        {
            NativeMethods.GlobalUnlock(handle);
        }

        if (SetClipboardData(CfHDrop, handle) != IntPtr.Zero)
            return true;

        GlobalFree(handle);
        return false;
    }

    private static bool WriteDropEffect(uint effect)
    {
        var format = RegisterClipboardFormat(PreferredDropEffect);
        if (format == 0)
            return true;

        var handle = GlobalAlloc(GmemMoveable, sizeof(uint));
        if (handle == IntPtr.Zero)
            return true;

        var memory = NativeMethods.GlobalLock(handle);
        if (memory == IntPtr.Zero)
        {
            GlobalFree(handle);
            return true;
        }

        try
        {
            Marshal.WriteInt32(memory, (int)effect);
        }
        finally
        {
            NativeMethods.GlobalUnlock(handle);
        }

        if (SetClipboardData(format, handle) != IntPtr.Zero)
            return true;

        GlobalFree(handle);
        return true;
    }

    private static (List<string> Paths, bool Move) ReadClipboardFiles()
    {
        if (!OpenClipboard())
            return ([], false);

        try
        {
            var handle = NativeMethods.GetClipboardData(CfHDrop);
            if (handle == IntPtr.Zero)
                return ([], false);

            var count = DragQueryFile(handle, uint.MaxValue, IntPtr.Zero, 0);
            var paths = new List<string>((int)count);

            for (uint index = 0; index < count; index++)
            {
                var length = DragQueryFile(handle, index, IntPtr.Zero, 0);
                if (length == 0)
                    continue;

                var buffer = Marshal.AllocHGlobal((int)(length + 1) * sizeof(char));
                try
                {
                    if (DragQueryFile(handle, index, buffer, length + 1) > 0
                        && Marshal.PtrToStringUni(buffer) is { Length: > 0 } path)
                        paths.Add(path);
                }
                finally
                {
                    Marshal.FreeHGlobal(buffer);
                }
            }

            var move = ReadDropEffect() == 2;
            return (paths, move);
        }
        finally
        {
            NativeMethods.CloseClipboard();
        }
    }

    private static uint ReadDropEffect()
    {
        var format = RegisterClipboardFormat(PreferredDropEffect);
        var handle = format == 0 ? IntPtr.Zero : NativeMethods.GetClipboardData(format);
        if (handle == IntPtr.Zero)
            return 1;

        var memory = NativeMethods.GlobalLock(handle);
        if (memory == IntPtr.Zero)
            return 1;

        try
        {
            return (uint)Marshal.ReadInt32(memory);
        }
        finally
        {
            NativeMethods.GlobalUnlock(handle);
        }
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct DropFiles
    {
        public uint pFiles;
        public int x;
        public int y;
        public int fNC;
        public int fWide;
    }

    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
    private struct ShFileOpStruct
    {
        public IntPtr hwnd;
        public uint wFunc;
        [MarshalAs(UnmanagedType.LPWStr)] public string pFrom;
        [MarshalAs(UnmanagedType.LPWStr)] public string pTo;
        public ushort fFlags;
        [MarshalAs(UnmanagedType.Bool)] public bool fAnyOperationsAborted;
        public IntPtr hNameMappings;
        [MarshalAs(UnmanagedType.LPWStr)] public string? lpszProgressTitle;
    }

    [DllImport("shell32.dll", EntryPoint = "SHFileOperationW", CharSet = CharSet.Unicode)]
    private static extern int SHFileOperation(ref ShFileOpStruct fileOp);

    [DllImport("shell32.dll", CharSet = CharSet.Unicode)]
    private static extern uint DragQueryFile(IntPtr hDrop, uint iFile, IntPtr lpszFile, uint cch);

    [DllImport("user32.dll", CharSet = CharSet.Unicode)]
    private static extern uint RegisterClipboardFormat(string format);

    [LibraryImport("user32.dll", SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool EmptyClipboard();

    [LibraryImport("user32.dll", SetLastError = true)]
    private static partial IntPtr SetClipboardData(uint uFormat, IntPtr hMem);

    [LibraryImport("user32.dll", SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool IsClipboardFormatAvailable(uint format);

    [LibraryImport("user32.dll")]
    private static partial uint GetClipboardSequenceNumber();

    [LibraryImport("kernel32.dll", SetLastError = true)]
    private static partial IntPtr GlobalAlloc(uint uFlags, nuint dwBytes);

    [LibraryImport("kernel32.dll", SetLastError = true)]
    private static partial IntPtr GlobalFree(IntPtr hMem);
}
