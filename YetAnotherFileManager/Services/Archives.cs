using System.Collections.Concurrent;
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

    static Archives() => Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

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
        var prefix = inner.Trim(Path.DirectorySeparatorChar).Replace('\\', '/');
        var folders = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);
        var files = new List<FileEntry>();

        using var archive = Open(archivePath, ResolveCodePage(archivePath, codePage));

        foreach (var entry in archive.Entries)
        {
            var key = (entry.Key ?? "").Replace('\\', '/').Trim('/');
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
        var root = Path.GetFullPath(target);
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

    private static void WriteEntry(string root, IEntry entry, Func<Stream> open)
    {
        var name = (entry.Key ?? "").Replace('/', Path.DirectorySeparatorChar)
            .TrimStart(Path.DirectorySeparatorChar);
        if (name.Length == 0)
            return;

        var destination = Path.GetFullPath(Path.Combine(root, name));
        if (!destination.StartsWith(root, StringComparison.OrdinalIgnoreCase))
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
