using System.Collections.Concurrent;
using System.IO.Compression;
using System.Text;
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
    private static readonly string[] Extensions =
        [".zip", ".7z", ".rar", ".tar", ".gz", ".tgz", ".bz2", ".xz"];

    /// <summary>Legacy code pages tried when the archive does not say how its names are encoded.</summary>
    private static readonly int[] DetectCodePages = [932, 936, 950, 949, 1252, 437];

    private static readonly ConcurrentDictionary<string, (long Length, long Ticks, int CodePage)>
        Detected = new(StringComparer.OrdinalIgnoreCase);
    private static readonly ConcurrentDictionary<string, int> SelectedCodePages = new(StringComparer.OrdinalIgnoreCase);
    private static readonly ConcurrentDictionary<string, Workspace> Workspaces = new(StringComparer.OrdinalIgnoreCase);
    private static readonly string TempRoot = Path.Combine(Path.GetTempPath(), "YetAnotherFileManager", "Archives");

    static Archives()
    {
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
        AppDomain.CurrentDomain.ProcessExit += (_, _) => CleanupWorkspaces();
    }

    /// <summary>Whether the path itself names an archive file.</summary>
    public static bool IsArchive(string path) =>
        Extensions.Contains(Path.GetExtension(path), StringComparer.OrdinalIgnoreCase);

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

    /// <summary>The listing of one folder inside an archive, shaped like a directory listing.</summary>
    public static FsListPayload List(string archivePath, string inner, int codePage = 0)
    {
        SelectedCodePages[Path.GetFullPath(archivePath)] = codePage;

        var prefix = inner.Trim(Path.DirectorySeparatorChar).Replace('\\', '/');
        var folders = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);
        var files = new List<FileEntry>();

        using var archive = Open(archivePath, ResolveCodePage(archivePath, codePage));

        foreach (var entry in archive.Entries)
        {
            var key = (entry.Key ?? "").Replace('\\', '/').Trim('/');
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
            new Dictionary<string, long>());
    }

    /// <summary>Extracts the whole archive into <paramref name="target" />.</summary>
    public static void Extract(string archivePath, string target, int codePage = 0)
    {
        var root = Path.GetFullPath(target).TrimEnd(Path.DirectorySeparatorChar) + Path.DirectorySeparatorChar;
        Directory.CreateDirectory(root);

        using var archive = Open(archivePath, ResolveCodePage(archivePath, codePage));

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
    public static string ExtractEntry(string virtualPath, int codePage = 0)
    {
        if (!TrySplit(virtualPath, out var archivePath, out var inner) || inner.Length == 0)
            throw new FileNotFoundException("The path does not name a file inside an archive.");

        if (TryGetWorkspacePath(virtualPath, out var edited) && File.Exists(edited))
            return edited;

        var resolved = ResolveCodePage(archivePath, codePage);
        var root = Path.Combine(TempRoot, "opened", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(root);

        using var archive = Open(archivePath, resolved);
        var normalized = inner.Replace('\\', '/').TrimStart('/');
        var entry = archive.Entries.FirstOrDefault(candidate =>
            string.Equals((candidate.Key ?? "").Replace('\\', '/').TrimStart('/'), normalized,
                StringComparison.OrdinalIgnoreCase));

        if (entry is null || entry.IsDirectory)
            throw new FileNotFoundException("The file is no longer in the archive.", inner);

        var destination = SafeDestination(root, Path.GetFileName(normalized));
        using (var input = entry.OpenEntryStream())
        using (var output = File.Create(destination))
            input.CopyTo(output);

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
            new Dictionary<string, string>(), [], new Dictionary<string, long>());
        return true;
    }

    /// <summary>Rebuilds a staged ZIP into a sibling file and swaps it over the original.</summary>
    public static bool ApplyChanges(string path, out string? error)
    {
        error = null;
        if (!TrySplit(path, out var archivePath, out _)
            || !string.Equals(Path.GetExtension(archivePath), ".zip", StringComparison.OrdinalIgnoreCase))
        {
            error = "Applying edits is currently supported for ZIP archives.";
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

    private static void CleanupWorkspaces()
    {
        foreach (var workspace in Workspaces.Values)
            TryDeleteDirectory(workspace.Root);
    }

    private static void TryDeleteDirectory(string path)
    {
        try
        {
            if (Directory.Exists(path)) Directory.Delete(path, true);
        }
        catch { }
    }

    private static void TryDeleteFile(string path)
    {
        try
        {
            if (File.Exists(path)) File.Delete(path);
        }
        catch { }
    }

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
    private static int ResolveCodePage(string archivePath, int codePage)
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

        var detected = Detect(archivePath);
        Detected[key] = (file.Length, file.LastWriteTimeUtc.Ticks, detected);

        return detected;
    }

    private static int Detect(string archivePath)
    {
        // Only names with non-ASCII characters say anything about the code page; ASCII names
        // decode the same under every candidate. Reading them all stops at 400 matches.
        static List<string> Names(IArchive archive) => archive.Entries
            .Select(entry => entry.Key ?? "")
            .Where(name => name.Any(character => character > 0x7F))
            .Take(400)
            .ToList();

        List<string> names;

        using (var archive = Open(archivePath, 0))
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
            try
            {
                using var archive = Open(archivePath, candidate);
                var score = Score(Names(archive));
                if (score >= bestScore)
                    continue;

                bestScore = score;
                bestCodePage = candidate;

                if (score == 0)
                    break;
            }
            catch
            {
                // A code page that cannot read the archive is simply not the right one.
            }
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

    private static IArchive Open(string archivePath, int codePage)
    {
        var options = new ReaderOptions();

        if (codePage > 0)
        {
            var encoding = Encoding.GetEncoding(codePage);
            options.ArchiveEncoding = new ArchiveEncoding { Default = encoding, Forced = encoding };
        }

        return ArchiveFactory.OpenArchive(archivePath, options);
    }

    private static long Modified(DateTime? value) =>
        value is { } time ? new DateTimeOffset(DateTime.SpecifyKind(time, DateTimeKind.Local)).ToUnixTimeMilliseconds() : 0;
}
