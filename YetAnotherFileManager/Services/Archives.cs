using System.Collections.Concurrent;
using System.IO.Compression;
using System.Text;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Localization;
using PhotinoNetUtils.Utils;
using SevenZipExtractor;
using SharpCompress.Archives;
using SharpCompress.Common;
using SharpCompress.Readers;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Reads archive files as if they were folders. A path such as <c>C:\show.zip\text\a.txt</c>
///     is split at the first segment that is a real archive file, so the rest of the application can
///     keep using ordinary, textual paths.
/// </summary>
internal static class Archives
{
    private static readonly string[] Extensions = ArchiveFormats.Extensions;

    /// <summary>
    ///     Formats the managed reader does not understand. 7z.dll reads these through the bundled
    ///     SevenZipExtractor, so the rest of the archive code can treat them as ordinary archives.
    /// </summary>
    private static readonly HashSet<string> SevenZipExtensions = new(StringComparer.OrdinalIgnoreCase)
    {
        ".lzh", ".lha", ".cab", ".iso", ".wim", ".swm", ".esd", ".chm", ".msi", ".msp", ".msm",
        ".zipx", ".udf", ".dmg", ".vhd", ".vhdx", ".vmdk", ".xar", ".z", ".lzma", ".lzma86", ".cpio",
        ".cramfs", ".rpm", ".deb", ".ar", ".apm", ".nsis", ".squashfs", ".qcow2", ".vdi",
        ".zst", ".tzst", ".001"
    };

    /// <summary>Legacy code pages tried when the archive does not say how its names are encoded.</summary>
    private static readonly int[] DetectCodePages = [932, 936, 950, 949, 1252, 1250, 1251, 1254, 1253, 1256, 1255, 1257, 874, 437];

    private static readonly ConcurrentDictionary<string, (long Length, long Ticks, int CodePage)>
        Detected = new(StringComparer.OrdinalIgnoreCase);
    private static readonly ConcurrentDictionary<string, int> SelectedCodePages = new(StringComparer.OrdinalIgnoreCase);
    private static readonly ConcurrentDictionary<string, Workspace> Workspaces = new(StringComparer.OrdinalIgnoreCase);
    private static readonly ConcurrentDictionary<string, string> ExtractedNested = new(StringComparer.OrdinalIgnoreCase);

    /// <summary>Temporary files extracted for previewing or opening, grouped by their archive.</summary>
    private static readonly ConcurrentDictionary<string, ConcurrentQueue<string>> OpenedEntries =
        new(StringComparer.OrdinalIgnoreCase);

    /// <summary>Each nested archive extracted to temp, mapped back to the archive the user opened.</summary>
    private static readonly ConcurrentDictionary<string, string> NestedOwners = new(StringComparer.OrdinalIgnoreCase);
    private static readonly string TempRoot = Path.Combine(Path.GetTempPath(), "YetAnotherFileManager", "Archives");

    /// <summary>The native 7z.dll the package copies beside the executable.</summary>
    private static readonly Lazy<string> SevenZipLibrary = new(() =>
    {
        var arch = Environment.Is64BitProcess ? "x64" : "x86";
        var besideArch = Path.Combine(AppContext.BaseDirectory, arch, "7z.dll");
        return File.Exists(besideArch) ? besideArch : Path.Combine(AppContext.BaseDirectory, "7z.dll");
    });

    internal static string SevenZipLibraryPath => SevenZipLibrary.Value;

    static Archives()
    {
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
        AppDomain.CurrentDomain.ProcessExit += (_, _) => CleanupTemporary();
    }

    private static bool UseSevenZip(string archivePath) =>
        OperatingSystem.IsWindows() && SevenZipExtensions.Contains(Path.GetExtension(archivePath));

    /// <summary>Whether the path itself names an archive file.</summary>
    public static bool IsArchive(string path) =>
        Extensions.Contains(Path.GetExtension(path), StringComparer.OrdinalIgnoreCase);

    private static readonly ConcurrentDictionary<string, (long Length, long Ticks, bool Encrypted)>
        EncryptionCache = new(StringComparer.OrdinalIgnoreCase);

    /// <summary>
    ///     Whether the archive needs a password. The answer is cached by file size and write time, so
    ///     listing a folder with several archives only pays for opening each one once per change.
    /// </summary>
    public static bool IsEncrypted(string archivePath)
    {
        try
        {
            var info = new FileInfo(archivePath);
            if (!info.Exists)
                return false;

            if (EncryptionCache.TryGetValue(info.FullName, out var cached) &&
                cached.Length == info.Length && cached.Ticks == info.LastWriteTimeUtc.Ticks)
                return cached.Encrypted;

            var encrypted = DetectEncryption(archivePath);
            EncryptionCache[info.FullName] = (info.Length, info.LastWriteTimeUtc.Ticks, encrypted);
            return encrypted;
        }
        catch
        {
            return false;
        }
    }

    private static bool DetectEncryption(string archivePath)
    {
        try
        {
            if (UseSevenZip(archivePath))
            {
                using var sevenZip = new ArchiveFile(archivePath, SevenZipLibrary.Value);
                return sevenZip.Entries.Any(entry => entry.IsEncrypted);
            }

            using var archive = ArchiveFactory.OpenArchive(archivePath, new ReaderOptions());
            return archive.IsEncrypted || archive.Entries.Any(entry => entry.IsEncrypted);
        }
        catch (Exception ex) when (ex is SharpCompress.Common.CryptographicException ||
                                   ex.Message.Contains("password", StringComparison.OrdinalIgnoreCase) ||
                                   ex.Message.Contains("encrypt", StringComparison.OrdinalIgnoreCase))
        {
            // An archive that will not even open without a password is definitely encrypted.
            return true;
        }
        catch
        {
            return false;
        }
    }

    /// <summary>Whether any segment of the path is an archive file.</summary>
    public static bool IsArchiveLocation(string path) =>
        Extensions.Any(extension => path.Contains($"{extension}{Path.DirectorySeparatorChar}",
            StringComparison.OrdinalIgnoreCase)) || IsArchive(path);

    /// <summary>
    ///     Splits <c>archive\inner</c> into the real archive file and the path inside it. Returns
    ///     false for an ordinary filesystem path.
    /// </summary>
    public static bool TrySplit(string path, out string archivePath, out string inner)
    {
        archivePath = "";
        inner = "";

        if (string.IsNullOrWhiteSpace(path))
            return false;

        string full;
        try
        {
            full = Path.GetFullPath(Environment.ExpandEnvironmentVariables(path));
        }
        catch
        {
            return false;
        }

        var root = Path.GetPathRoot(full) ?? "";
        var parts = full[root.Length..].Split(Path.DirectorySeparatorChar, StringSplitOptions.RemoveEmptyEntries);
        var current = root;

        for (var index = 0; index < parts.Length; index++)
        {
            current = Path.Combine(current, parts[index]);

            if (!IsArchive(current) || !File.Exists(current))
                continue;

            archivePath = current;
            inner = string.Join(Path.DirectorySeparatorChar, parts[(index + 1)..]);
            return true;
        }

        return false;
    }

    /// <summary>The virtual path for an entry inside an archive.</summary>
    public static string VirtualPath(string archivePath, string inner, string name)
    {
        var root = inner.Length == 0 ? archivePath : Path.Combine(archivePath, inner);
        return name.Length == 0 ? root : Path.Combine(root, name);
    }

    /// <summary>
    ///     Finds the archive a path belongs to, also accepting a staging path from an active edit
    ///     workspace so a finished edit can be written back without knowing which archive it was.
    /// </summary>
    public static bool TryGetArchivePath(string path, out string archivePath)
    {
        if (TrySplit(path, out archivePath, out _))
            return true;

        var virtualPath = ToVirtualPath(path);
        return !string.Equals(virtualPath, path, StringComparison.OrdinalIgnoreCase)
               && TrySplit(virtualPath, out archivePath, out _);
    }

    /// <summary>
    ///     Walks archive entries that are themselves archives. A zip inside a zip is extracted to a
    ///     private temp file first, so the path stays virtual for the interface while the reader gets
    ///     a real archive file to open.
    /// </summary>
    private static (string ArchivePath, string Inner) ResolveNested(
        string archivePath, string inner, int codePage, string? password)
    {
        var remaining = NormalizeKey(inner);
        var currentArchive = archivePath;
        var currentInner = "";
        var currentCodePage = codePage;

        while (remaining.Length > 0)
        {
            var slash = remaining.IndexOf('/');
            var segment = slash >= 0 ? remaining[..slash] : remaining;
            var rest = slash >= 0 ? remaining[(slash + 1)..] : "";
            var candidate = currentInner.Length == 0 ? segment : $"{currentInner}/{segment}";

            if (IsArchive(segment))
            {
                var key = NestedKey(currentArchive, candidate, currentCodePage);
                var extracted = ExtractedNested.GetOrAdd(key,
                    _ => ExtractNested(currentArchive, candidate, currentCodePage, password) ?? "");

                if (extracted.Length > 0)
                {
                    var extractedFull = Path.GetFullPath(extracted);
                    var currentFull = Path.GetFullPath(currentArchive);
                    NestedOwners[extractedFull] = NestedOwners.TryGetValue(currentFull, out var rootOwner)
                        ? rootOwner
                        : currentFull;
                    currentArchive = extracted;
                    currentInner = "";
                    currentCodePage = 0;
                    remaining = rest;
                    continue;
                }
            }

            currentInner = candidate;
            remaining = rest;
        }

        return (currentArchive, currentInner);
    }

    /// <summary>Extracts a nested archive entry, or returns null when the entry is really a folder.</summary>
    private static string? ExtractNested(string archivePath, string inner, int codePage, string? password)
    {
        var root = Path.Combine(TempRoot, "nested", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(root);
        var normalized = NormalizeKey(inner);

        try
        {
            if (UseSevenZip(archivePath))
            {
                using var archive = new ArchiveFile(archivePath, SevenZipLibrary.Value);
                var entry = archive.Entries.FirstOrDefault(candidate =>
                    !candidate.IsFolder
                    && string.Equals(NormalizeKey(candidate.FileName), normalized, StringComparison.OrdinalIgnoreCase));

                if (entry is null)
                {
                    Directory.Delete(root, true);
                    return null;
                }

                return SevenZipExtractEntry(archivePath, normalized, root, password);
            }

            using var managed = Open(archivePath, ResolveCodePage(archivePath, codePage, password), password);
            var file = managed.Entries.FirstOrDefault(candidate =>
                !candidate.IsDirectory
                && string.Equals(NormalizeKey(candidate.Key), normalized, StringComparison.OrdinalIgnoreCase));

            if (file is null)
            {
                Directory.Delete(root, true);
                return null;
            }

            var destination = SafeDestination(root, Path.GetFileName(normalized));
            using var input = file.OpenEntryStream();
            using var output = File.Create(destination);
            input.CopyTo(output);
            return destination;
        }
        catch
        {
            // The temp folder is harmless if another handle still holds it.
            Try.Run(() => Directory.Delete(root, true));

            throw;
        }
    }

    private static string NestedKey(string archivePath, string inner, int codePage)
    {
        var info = new FileInfo(archivePath);
        return $"{archivePath}|{info.Length}|{info.LastWriteTimeUtc.Ticks}|{codePage}|{inner}";
    }

    private static string NormalizeKey(string? key) =>
        (key ?? "").Replace('\\', '/').Trim('/');

    /// <summary>The listing of one folder inside an archive, shaped like a directory listing.</summary>
    public static FsListPayload List(string archivePath, string inner, int codePage = 0, string? password = null)
    {
        SelectedCodePages[Path.GetFullPath(archivePath)] = codePage;
        var (physicalArchive, physicalInner) = ResolveNested(archivePath, inner, codePage, password);

        if (UseSevenZip(physicalArchive))
            return SevenZipList(archivePath, inner, physicalArchive, physicalInner);

        var prefix = physicalInner.Trim(Path.DirectorySeparatorChar).Replace('\\', '/');
        var folders = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);
        var files = new List<FileEntry>();

        using var archive = Open(physicalArchive, ResolveCodePage(physicalArchive, codePage, password), password);
        var encrypted = archive.IsEncrypted;

        foreach (var entry in archive.Entries)
        {
            encrypted |= entry.IsEncrypted;
            var key = (entry.Key ?? "").Replace('\\', '/').Trim('/');

            // Tar tools commonly prefix every entry with "./"; that is not a traversal.
            while (key.StartsWith("./", StringComparison.Ordinal))
                key = key[2..];

            if (key.Length == 0 || Path.IsPathRooted(key)
                || key.Split('/').Any(part => part is ".." or "."))
                continue;

            if (prefix.Length > 0)
            {
                if (!key.StartsWith(prefix + "/", StringComparison.OrdinalIgnoreCase))
                    continue;

                key = key[(prefix.Length + 1)..];
            }

            var slash = key.IndexOf('/');
            if (slash >= 0)
            {
                folders.TryAdd(key[..slash], Modified(entry.LastModifiedTime));
                continue;
            }

            if (entry.IsDirectory)
            {
                folders.TryAdd(key, Modified(entry.LastModifiedTime));
                continue;
            }

            files.Add(new FileEntry(
                key,
                VirtualPath(archivePath, inner, key),
                false,
                entry.Size,
                Modified(entry.LastModifiedTime),
                false,
                false,
                null));
        }

        var entries = folders
            .Select(folder => new FileEntry(
                folder.Key,
                VirtualPath(archivePath, inner, folder.Key),
                true,
                0,
                folder.Value,
                false,
                false,
                null))
            .Concat(files)
            .OrderByDescending(entry => entry.IsDirectory)
            .ThenBy(entry => entry.Name, StringComparer.OrdinalIgnoreCase)
            .ToList();

        var parentInner = Path.GetDirectoryName(inner) ?? "";

        return new FsListPayload(
            VirtualPath(archivePath, inner, ""),
            inner.Length == 0 ? Path.GetDirectoryName(archivePath) : VirtualPath(archivePath, parentInner, ""),
            entries,
            new Dictionary<string, long>(),
            null,
            new Dictionary<string, List<string>>(),
            new Dictionary<string, string>(),
            [],
            new Dictionary<string, long>(),
            encrypted);
    }

    /// <summary>Extracts the whole archive into <paramref name="target" />.</summary>
    public static void Extract(string archivePath, string target, int codePage = 0, string? password = null)
    {
        var root = Path.GetFullPath(target).TrimEnd(Path.DirectorySeparatorChar) + Path.DirectorySeparatorChar;
        Directory.CreateDirectory(root);

        if (UseSevenZip(archivePath))
        {
            using var sevenZip = new ArchiveFile(archivePath, SevenZipLibrary.Value);
            sevenZip.Extract(root, true, password);
            return;
        }

        using var archive = Open(archivePath, ResolveCodePage(archivePath, codePage, password), password);

        // Only solid archives and 7z can be walked sequentially; a ZIP is read entry by entry.
        if (archive.IsSolid || archive.Type == ArchiveType.SevenZip)
        {
            using var reader = archive.ExtractAllEntries();

            while (reader.MoveToNextEntry())
                WriteEntry(root, reader.Entry, reader.OpenEntryStream);

            return;
        }

        foreach (var entry in archive.Entries)
            WriteEntry(root, entry, entry.OpenEntryStream);
    }

    /// <summary>Extracts one virtual file to a private temporary folder and returns its real path.</summary>
    public static string ExtractEntry(string virtualPath, int codePage = 0, string? password = null)
    {
        if (!TrySplit(virtualPath, out var archivePath, out var inner) || inner.Length == 0)
            throw new FileNotFoundException(Localization.Get("The path does not name a file inside an archive."));

        if (TryGetWorkspacePath(virtualPath, out var edited) && File.Exists(edited))
            return edited;

        var (physicalArchive, physicalInner) = ResolveNested(archivePath, inner, codePage, password);
        var root = Path.Combine(TempRoot, "opened", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(root);

        try
        {
            var opened = ExtractDirect(physicalArchive, physicalInner, root, codePage, password);
            // Previewing or opening an entry leaves a real file for the shell; remember which
            // archive owns it so closing that archive can remove it again.
            OpenedEntries.GetOrAdd(Path.GetFullPath(archivePath), _ => new()).Enqueue(root);
            return opened;
        }
        catch
        {
            TryDeleteDirectory(root);
            throw;
        }
    }

    private static string ExtractDirect(string archivePath, string inner, string root,
        int codePage, string? password)
    {
        if (UseSevenZip(archivePath))
            return SevenZipExtractEntry(archivePath, inner, root, password);

        var resolved = ResolveCodePage(archivePath, codePage, password);
        using var archive = Open(archivePath, resolved, password);
        var normalized = inner.Replace('\\', '/').TrimStart('/');
        var entry = archive.Entries.FirstOrDefault(candidate =>
            string.Equals((candidate.Key ?? "").Replace('\\', '/').TrimStart('/'), normalized,
                StringComparison.OrdinalIgnoreCase));

        if (entry is null || entry.IsDirectory)
            throw new FileNotFoundException(Localization.Get("The file is no longer in the archive."), inner);

        var destination = SafeDestination(root, Path.GetFileName(normalized));
        using (var input = entry.OpenEntryStream())
        using (var output = File.Create(destination))
            input.CopyTo(output);

        return destination;
    }

    /// <summary>Lists through 7z.dll for the formats the managed reader cannot open.</summary>
    private static FsListPayload SevenZipList(string archivePath, string inner,
        string physicalArchive, string physicalInner)
    {
        var prefix = physicalInner.Trim(Path.DirectorySeparatorChar).Replace('\\', '/');
        var folders = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);
        var files = new List<FileEntry>();

        using var archive = new ArchiveFile(physicalArchive, SevenZipLibrary.Value);
        var encrypted = false;

        foreach (var entry in archive.Entries)
        {
            encrypted |= entry.IsEncrypted;
            var key = (entry.FileName ?? "").Replace('\\', '/').Trim('/');
            if (key.Length == 0)
                continue;

            if (prefix.Length > 0)
            {
                if (!key.StartsWith(prefix + "/", StringComparison.OrdinalIgnoreCase))
                    continue;

                key = key[(prefix.Length + 1)..];
            }

            var slash = key.IndexOf('/');
            if (slash >= 0)
            {
                folders.TryAdd(key[..slash], Modified(entry.LastWriteTime));
                continue;
            }

            if (entry.IsFolder)
            {
                folders.TryAdd(key, Modified(entry.LastWriteTime));
                continue;
            }

            files.Add(new FileEntry(key, VirtualPath(archivePath, inner, key), false, (long)entry.Size,
                Modified(entry.LastWriteTime), false, false, null));
        }

        var entries = folders
            .Select(folder => new FileEntry(folder.Key, VirtualPath(archivePath, inner, folder.Key), true,
                0, folder.Value, false, false, null))
            .Concat(files)
            .OrderByDescending(entry => entry.IsDirectory)
            .ThenBy(entry => entry.Name, StringComparer.OrdinalIgnoreCase)
            .ToList();

        var parentInner = Path.GetDirectoryName(inner) ?? "";
        return new FsListPayload(
            VirtualPath(archivePath, inner, ""),
            inner.Length == 0
                ? Path.GetDirectoryName(archivePath)
                : VirtualPath(archivePath, parentInner, ""),
            entries, new Dictionary<string, long>(), null, new Dictionary<string, List<string>>(),
            new Dictionary<string, string>(), [], new Dictionary<string, long>(), encrypted);
    }

    /// <summary>Extracts one entry through 7z.dll.</summary>
    private static string SevenZipExtractEntry(string archivePath, string inner, string root, string? password)
    {
        using var archive = new ArchiveFile(archivePath, SevenZipLibrary.Value);
        var normalized = inner.Replace('\\', '/').TrimStart('/');

        var entry = archive.Entries.FirstOrDefault(candidate =>
            string.Equals((candidate.FileName ?? "").Replace('\\', '/').TrimStart('/'), normalized,
                StringComparison.OrdinalIgnoreCase));

        if (entry is null || entry.IsFolder)
            throw new FileNotFoundException(Localization.Get("The file is no longer in the archive."), inner);

        var destination = SafeDestination(root, Path.GetFileName(normalized));

        if (password is { Length: > 0 })
        {
            using var output = File.Create(destination);
            entry.Extract(output, password);
        }
        else
        {
            entry.Extract(destination, false);
        }

        return destination;
    }

    /// <summary>Maps an archive's virtual directory to a writable temporary workspace.</summary>
    public static async Task<string?> WorkspaceDirectoryAsync(string path, int codePage = 0)
    {
        var directory = await WorkspacePathAsync(path, codePage);
        if (directory is null) return null;
        Directory.CreateDirectory(directory);

        return directory;
    }

    /// <summary>Maps a virtual path to its staging copy, creating the copy on the first mutation.</summary>
    public static async Task<string?> WorkspacePathAsync(string path, int codePage = 0)
    {
        if (!TrySplit(path, out var archivePath, out var inner))
            return null;

        var workspace = await EnsureWorkspaceAsync(archivePath, codePage);
        return WorkspacePath(workspace, inner);
    }

    /// <summary>Maps a virtual entry to an existing workspace path, without creating a workspace.</summary>
    public static bool TryGetWorkspacePath(string path, out string physical)
    {
        physical = "";
        if (!TrySplit(path, out var archivePath, out var inner)
            || !Workspaces.TryGetValue(Path.GetFullPath(archivePath), out var workspace))
            return false;

        physical = WorkspacePath(workspace, inner);
        return true;
    }

    /// <summary>Whether a ZIP has a staged working copy waiting to be applied.</summary>
    public static bool HasWorkspace(string path) =>
        TrySplit(path, out var archivePath, out _)
        && Workspaces.ContainsKey(Path.GetFullPath(archivePath));

    /// <summary>Maps any physical workspace path back to its user-facing archive path.</summary>
    public static string ToVirtualPath(string path)
    {
        var full = Path.GetFullPath(path);
        foreach (var (archive, workspace) in Workspaces)
        {
            if (full.Equals(workspace.Root, StringComparison.OrdinalIgnoreCase))
                return archive;

            var prefix = workspace.Root.TrimEnd(Path.DirectorySeparatorChar) + Path.DirectorySeparatorChar;
            if (!full.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
                continue;

            var relative = Path.GetRelativePath(workspace.Root, full);
            return relative == "." ? archive : Path.Combine(archive, relative);
        }

        return path;
    }

    /// <summary>Lists a folder from an edit workspace while keeping all returned paths virtual.</summary>
    public static bool TryListWorkspace(string path, out FsListPayload listing)
    {
        listing = null!;
        if (!TryGetWorkspacePath(path, out var directory) || !Directory.Exists(directory)
            || !TrySplit(path, out var archivePath, out var inner))
            return false;

        var entries = Directory.EnumerateFileSystemEntries(directory)
            .Select(entry =>
            {
                var info = new FileInfo(entry);
                var isDirectory = Directory.Exists(entry);
                var name = Path.GetFileName(entry);
                return new FileEntry(name, Path.Combine(path, name), isDirectory,
                    isDirectory ? 0 : info.Length,
                    new DateTimeOffset(info.LastWriteTime).ToUnixTimeMilliseconds(),
                    false, false, null);
            })
            .OrderByDescending(entry => entry.IsDirectory)
            .ThenBy(entry => entry.Name, StringComparer.OrdinalIgnoreCase)
            .ToList();

        var parentInner = Path.GetDirectoryName(inner) ?? "";
        listing = new FsListPayload(path, inner.Length == 0
                ? Path.GetDirectoryName(archivePath)
                : VirtualPath(archivePath, parentInner, ""),
            entries, new Dictionary<string, long>(), null, new Dictionary<string, List<string>>(),
            new Dictionary<string, string>(), [], new Dictionary<string, long>(), IsEncrypted(archivePath));
        return true;
    }

    /// <summary>Rebuilds a staged ZIP into a sibling file and swaps it over the original.</summary>
    public static bool ApplyChanges(string path, out string? error)
    {
        error = null;
        if (!TrySplit(path, out var archivePath, out _)
            || !string.Equals(Path.GetExtension(archivePath), ".zip", StringComparison.OrdinalIgnoreCase))
        {
            error = Localization.Get("Applying edits is currently supported for ZIP archives.");
            return false;
        }

        if (!Workspaces.TryGetValue(Path.GetFullPath(archivePath), out var workspace))
            return true;

        lock (workspace.Gate)
        {
            var output = Path.Combine(Path.GetDirectoryName(archivePath)!, $".{Path.GetFileName(archivePath)}.{Guid.NewGuid():N}.tmp");

            try
            {
                ZipFile.CreateFromDirectory(workspace.Root, output, CompressionLevel.Optimal, false, Encoding.UTF8);
                File.Move(output, archivePath, true);
                Workspaces.TryRemove(Path.GetFullPath(archivePath), out _);
                Detected.TryRemove(Path.GetFullPath(archivePath), out _);
                TryDeleteDirectory(workspace.Root);
                return true;
            }
            catch (Exception ex)
            {
                error = ex.Message;
                TryDeleteFile(output);
                return false;
            }
        }
    }

    private static async Task<Workspace> EnsureWorkspaceAsync(string archivePath, int codePage)
    {
        var fullArchive = Path.GetFullPath(archivePath);
        if (Workspaces.TryGetValue(fullArchive, out var existing))
            return existing;

        return await Task.Run(() =>
        {
            lock (Workspaces)
            {
                if (Workspaces.TryGetValue(fullArchive, out var found))
                    return found;

                var root = Path.Combine(TempRoot, "edit", Guid.NewGuid().ToString("N"));
                Directory.CreateDirectory(root);
                try
                {
                    Extract(fullArchive, root, codePage);
                    var workspace = new Workspace(root);
                    Workspaces[fullArchive] = workspace;
                    return workspace;
                }
                catch
                {
                    TryDeleteDirectory(root);
                    throw;
                }
            }
        });
    }

    private static string WorkspacePath(Workspace workspace, string inner)
    {
        var destination = Path.GetFullPath(Path.Combine(workspace.Root, inner));
        var prefix = workspace.Root.TrimEnd(Path.DirectorySeparatorChar) + Path.DirectorySeparatorChar;
        if (!destination.Equals(workspace.Root, StringComparison.OrdinalIgnoreCase)
            && !destination.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
            throw new IOException("The archive entry is outside the workspace.");

        return destination;
    }

    private static string SafeDestination(string root, string name)
    {
        var destination = Path.GetFullPath(Path.Combine(root, name));
        var prefix = root.TrimEnd(Path.DirectorySeparatorChar) + Path.DirectorySeparatorChar;
        if (!destination.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
            throw new IOException("The archive entry is outside the temporary folder.");

        return destination;
    }

    /// <summary>
    ///     Removes everything staged for archives no tab shows any more: extracted entries, nested
    ///     containers and editable workspaces. Windows never clears its temp directory on its own.
    /// </summary>
    public static void Release(IEnumerable<string> archivePaths)
    {
        foreach (var path in archivePaths)
        {
            if (string.IsNullOrWhiteSpace(path))
                continue;

            var full = Path.GetFullPath(path);

            // Anything extracted from a nested archive belongs to the archive the user opened.
            var owned = new HashSet<string>(StringComparer.OrdinalIgnoreCase) {full};
            foreach (var (nested, owner) in NestedOwners)
                if (owner.Equals(full, StringComparison.OrdinalIgnoreCase))
                    owned.Add(nested);

            foreach (var archive in owned)
            {
                if (Workspaces.TryRemove(archive, out var workspace))
                    TryDeleteDirectory(workspace.Root);

                if (OpenedEntries.TryRemove(archive, out var opened))
                    while (opened.TryDequeue(out var directory))
                        TryDeleteDirectory(directory);

                foreach (var key in ExtractedNested.Keys
                             .Where(key => ArchiveOf(key).Equals(archive, StringComparison.OrdinalIgnoreCase))
                             .ToList())
                    if (ExtractedNested.TryRemove(key, out var extracted)
                        && Path.GetDirectoryName(extracted) is {Length: > 0} directory)
                        TryDeleteDirectory(directory);

                Detected.TryRemove(archive, out _);
                SelectedCodePages.TryRemove(archive, out _);
                EncryptionCache.TryRemove(archive, out _);
                NestedOwners.TryRemove(archive, out _);
            }
        }
    }

    private static string ArchiveOf(string nestedKey)
    {
        var separator = nestedKey.IndexOf('|');
        var archive = separator > 0 ? nestedKey[..separator] : nestedKey;
        try
        {
            return Path.GetFullPath(archive);
        }
        catch
        {
            return archive;
        }
    }

    private static void CleanupTemporary()
    {
        // Delete each staging folder on its own: one file still held open must not keep every
        // other archive's leftovers around.
        foreach (var area in new[]{"opened", "nested", "edit", "streams"})
        {
            var root = Path.Combine(TempRoot, area);

            // The area does not exist, or its root was already removed.
            Try.Run(() =>
            {
                foreach (var directory in Directory.EnumerateDirectories(root))
                    TryDeleteDirectory(directory);

                foreach (var file in Directory.EnumerateFiles(root))
                    TryDeleteFile(file);
            });
        }
    }

    private static void TryDeleteDirectory(string path) =>
        Try.Run(() =>
        {
            if (Directory.Exists(path)) Directory.Delete(path, true);
        });

    private static void TryDeleteFile(string path) =>
        Try.Run(() =>
        {
            if (File.Exists(path)) File.Delete(path);
        });

    private sealed class Workspace(string root)
    {
        public string Root { get; } = root;
        public object Gate { get; } = new();
    }

    private static void WriteEntry(string root, IEntry entry, Func<Stream> open)
    {
        var name = (entry.Key ?? "").Replace('/', Path.DirectorySeparatorChar)
            .TrimStart(Path.DirectorySeparatorChar);
        if (name.Length == 0)
            return;

        var destination = Path.GetFullPath(Path.Combine(root, name));
        var prefix = root.TrimEnd(Path.DirectorySeparatorChar) + Path.DirectorySeparatorChar;
        if (!destination.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
            return;

        if (entry.IsDirectory)
        {
            Directory.CreateDirectory(destination);
            return;
        }

        Directory.CreateDirectory(Path.GetDirectoryName(destination) ?? root);

        // A second extraction must never replace a file the user already has there.
        if (File.Exists(destination))
            return;

        using (var source = open())
        using (var file = File.Create(destination))
            source.CopyTo(file);

        if (entry.LastModifiedTime is { } modified)
            File.SetLastWriteTime(destination, modified);
    }

    /// <summary>
    ///     Picks the code page for an archive. A chosen code page always wins; "Auto" reads the
    ///     names once, and if they look broken it tries the usual legacy code pages and keeps the
    ///     one whose names decode cleanly. The answer is cached until the archive file changes.
    /// </summary>
    private static int ResolveCodePage(string archivePath, int codePage, string? password = null)
    {
        if (codePage > 0)
            return codePage;

        if (SelectedCodePages.TryGetValue(Path.GetFullPath(archivePath), out var selected) && selected > 0)
            return selected;

        var file = new FileInfo(archivePath);
        if (!file.Exists)
            return 0;

        var key = file.FullName;
        if (Detected.TryGetValue(key, out var cached) && cached.Length == file.Length && cached.Ticks == file.LastWriteTimeUtc.Ticks)
            return cached.CodePage;

        var detected = Detect(archivePath, password);
        Detected[key] = (file.Length, file.LastWriteTimeUtc.Ticks, detected);

        return detected;
    }

    private static int Detect(string archivePath, string? password = null)
    {
        // Only names with non-ASCII characters say anything about the code page; ASCII names
        // decode the same under every candidate. Reading them all stops at 400 matches.
        static List<string> Names(IArchive archive) => archive.Entries
            .Select(entry => entry.Key ?? "")
            .Where(name => name.Any(character => character > 0x7F))
            .Take(400)
            .ToList();

        List<string> names;

        using (var archive = Open(archivePath, 0, password))
            names = Names(archive);

        if (names.Count == 0)
            return 0;

        var defaultScore = Score(names);

        // Clean names mean the archive already declares its encoding, usually as UTF-8.
        if (defaultScore == 0)
            return 0;

        var bestCodePage = 0;
        var bestScore = defaultScore;

        foreach (var candidate in DetectCodePages)
        {
            // A code page that cannot read the archive is simply not the right one.
            var attempt = Try.Run(() =>
            {
                using var archive = Open(archivePath, candidate, password);
                return Score(Names(archive));
            });

            if (!attempt.TryGet(out var score) || score >= bestScore)
                continue;

            bestScore = score;
            bestCodePage = candidate;

            if (score == 0)
                break;
        }

        return bestCodePage;
    }

    /// <summary>How many characters in the names are clearly not text.</summary>
    private static int Score(IEnumerable<string> names)
    {
        var score = 0;

        foreach (var name in names)
        {
            foreach (var rune in name.EnumerateRunes())
            {
                var value = rune.Value;

                score += value switch
                {
                    0xFFFD or < 0x20 => 100,
                    >= 0x7F and <= 0x9F => 60,
                    >= 0xE000 and <= 0xF8FF => 20,
                    _ => 0,
                };
            }
        }

        return score;
    }

    /// <summary>Decompresses a compressed tar's outer stream with the native 7z library.</summary>
    private static bool TryExpandWithSevenZip(string archivePath, string destination)
    {
        if (!OperatingSystem.IsWindows() || !File.Exists(SevenZipLibrary.Value))
            return false;

        try
        {
            using var archive = new ArchiveFile(archivePath, SevenZipLibrary.Value);
            var entry = archive.Entries.FirstOrDefault(candidate => !candidate.IsFolder);
            if (entry is null)
                return false;

            entry.Extract(destination, false);
            return File.Exists(destination);
        }
        catch
        {
            TryDeleteFile(destination);
            return false;
        }
    }

    private static IArchive Open(string archivePath, int codePage, string? password = null)
    {
        var options = new ReaderOptions();

        if (password is { Length: > 0 })
            options.Password = password;

        if (codePage > 0)
        {
            var encoding = Encoding.GetEncoding(codePage);
            options.ArchiveEncoding = new ArchiveEncoding { Default = encoding, Forced = encoding };
        }

        var tarCompression = Path.GetFileName(archivePath).ToLowerInvariant() switch
        {
            var name when name.EndsWith(".tar.gz") || name.EndsWith(".tgz") => "gz",
            var name when name.EndsWith(".tar.bz2") || name.EndsWith(".tbz") || name.EndsWith(".tbz2") => "bz2",
            var name when name.EndsWith(".tar.xz") || name.EndsWith(".txz") => "xz",
            _ => "",
        };

        if (tarCompression.Length > 0)
        {
            // 7z.dll decompresses the outer gz/bz2/xz stream much faster than the managed streams,
            // so the tar reader only has to walk the expanded file.
            var streamDirectory = Path.Combine(TempRoot, "streams");
            Directory.CreateDirectory(streamDirectory);
            var expandedPath = Path.Combine(streamDirectory, $"{Guid.NewGuid():N}.tar");

            if (TryExpandWithSevenZip(archivePath, expandedPath))
            {
                var stream = new FileStream(expandedPath, FileMode.Open, FileAccess.Read, FileShare.Read,
                    131072, FileOptions.DeleteOnClose | FileOptions.RandomAccess);
                options.ExtensionHint = ".tar";
                try
                {
                    return ArchiveFactory.OpenArchive(stream, options);
                }
                catch
                {
                    stream.Dispose();
                    throw;
                }
            }

            var input = File.OpenRead(archivePath);
            Stream decompressed = tarCompression switch
            {
                "gz" => new SharpCompress.Compressors.Deflate.GZipStream(input,
                    SharpCompress.Compressors.CompressionMode.Decompress, options),
                "bz2" => SharpCompress.Compressors.BZip2.BZip2Stream.Create(input,
                    SharpCompress.Compressors.CompressionMode.Decompress, true, false, false),
                "xz" => new SharpCompress.Compressors.Xz.XZStream(input),
                _ => throw new InvalidOperationException("Unsupported tar compression."),
            };

            FileStream? expanded = null;
            try
            {
                var temp = Path.Combine(TempRoot, "streams");
                Directory.CreateDirectory(temp);
                expanded = new FileStream(Path.Combine(temp, $"{Guid.NewGuid():N}.tar"),
                    FileMode.CreateNew, FileAccess.ReadWrite, FileShare.Read, 131072,
                    FileOptions.DeleteOnClose | FileOptions.RandomAccess);
                decompressed.CopyTo(expanded);
                decompressed.Dispose();
                input.Dispose();
                expanded.Position = 0;
                options.ExtensionHint = ".tar";
                return ArchiveFactory.OpenArchive(expanded, options);
            }
            catch
            {
                decompressed.Dispose();
                input.Dispose();
                expanded?.Dispose();
                throw;
            }
        }

        return ArchiveFactory.OpenArchive(archivePath, options);
    }

    private static long Modified(DateTime? value) =>
        value is { } time ? new DateTimeOffset(DateTime.SpecifyKind(time, DateTimeKind.Local)).ToUnixTimeMilliseconds() : 0;
}
