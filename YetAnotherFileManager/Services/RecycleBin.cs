using System.Globalization;
using System.Text;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Lists deleted items. Windows keeps them under <c>$Recycle.Bin\&lt;SID&gt;</c> as an <c>$I…</c>
///     record beside the <c>$R…</c> content; everything else follows the freedesktop.org trash
///     specification, where <c>info/*.trashinfo</c> describes the file stored in <c>files/</c>.
/// </summary>
internal static class RecycleBin
{
    private const int MaxPathChars = 32 * 1024;
    private const string TrashInfoSuffix = ".trashinfo";

    /// <summary>
    ///     Denied folders are normal here — the bin of another user, or of a volume with stricter
    ///     permissions — and must simply read as empty instead of failing the whole listing.
    /// </summary>
    private static readonly EnumerationOptions Readable = new()
    {
        IgnoreInaccessible = true,
        RecurseSubdirectories = false,
        AttributesToSkip = FileAttributes.None
    };

    public static IReadOnlyList<RecycleEntry> List() =>
        (OperatingSystem.IsWindows() ? ListWindows() : ListUnix())
        .OrderByDescending(entry => entry.Deleted)
        .ToList();

    // ---- Windows ----

    private static IEnumerable<RecycleEntry> ListWindows() =>
        DriveInfo.GetDrives()
            .Where(drive => Try.Run(() => drive.IsReady).GetOrNull())
            .SelectMany(drive => ListWindowsDrive(drive.Name));

    private static IReadOnlyList<RecycleEntry> ListWindowsDrive(string root) =>
        Try.Run(() =>
        {
            var bin = new DirectoryInfo(Path.Combine(root, "$Recycle.Bin"));
            if (!bin.Exists)
                return [];

            // Every user gets a SID folder; the ones we may not read are skipped by the options.
            return bin.EnumerateDirectories("*", Readable)
                .SelectMany(folder => folder.EnumerateFiles("$I*", Readable))
                .Select(info => Try.Run(() => ReadWindowsRecord(info.FullName)).GetOrNull())
                .OfType<RecycleEntry>()
                .ToList();
        }).GetOrElse(_ => []);

    private static RecycleEntry? ReadWindowsRecord(string infoPath)
    {
        using var reader = new BinaryReader(File.OpenRead(infoPath));

        var version = reader.ReadInt64();
        var size = reader.ReadInt64();
        var deleted = reader.ReadInt64();
        var original = version >= 2 ? ReadVariablePath(reader) : ReadLegacyPath(reader);

        if (string.IsNullOrWhiteSpace(original))
            return null;

        var content = Path.Combine(Path.GetDirectoryName(infoPath)!,
            "$R" + Path.GetFileName(infoPath)[2..]);
        var isDirectory = Directory.Exists(content);

        return new RecycleEntry(
            Path.GetFileName(original.TrimEnd('\\', '/')),
            original,
            isDirectory ? 0 : size,
            new DateTimeOffset(DateTime.FromFileTimeUtc(deleted)).ToUnixTimeMilliseconds(),
            isDirectory);
    }

    /// <summary>Version 2 stores the length in characters (including the terminator) before the path.</summary>
    private static string? ReadVariablePath(BinaryReader reader)
    {
        var length = reader.ReadInt32();
        if (length is <= 0 or > MaxPathChars)
            return null;

        return Encoding.Unicode.GetString(reader.ReadBytes(length * 2)).TrimEnd('\0');
    }

    /// <summary>The original layout reserved a fixed 260-character buffer for the path.</summary>
    private static string ReadLegacyPath(BinaryReader reader) =>
        Encoding.Unicode.GetString(reader.ReadBytes(520)).TrimEnd('\0');

    // ---- freedesktop.org trash ----

    private static IEnumerable<RecycleEntry> ListUnix() =>
        TrashRoots().Distinct(StringComparer.Ordinal).SelectMany(ListTrashRoot);

    /// <summary>
    ///     The home trash, plus the per-volume trash of every mounted filesystem. Volumes use
    ///     <c>.Trash-&lt;uid&gt;</c>, or a shared <c>.Trash</c> with a folder per user.
    /// </summary>
    private static IEnumerable<string> TrashRoots()
    {
        var home = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
        var dataHome = Environment.GetEnvironmentVariable("XDG_DATA_HOME");

        yield return Path.Combine(
            string.IsNullOrWhiteSpace(dataHome) ? Path.Combine(home, ".local", "share") : dataHome,
            "Trash");

        if (!OperatingSystem.IsLinux())
            yield break;

        foreach (var drive in DriveInfo.GetDrives())
        {
            var mount = drive.RootDirectory.FullName;

            foreach (var folder in Try.Run(() => Directory.GetDirectories(mount, ".Trash-*", Readable))
                         .GetOrElse(_ => []))
                yield return folder;

            var shared = Path.Combine(mount, ".Trash");
            foreach (var folder in Try.Run(() => Directory.GetDirectories(shared, "*", Readable))
                         .GetOrElse(_ => []))
                yield return folder;
        }
    }

    private static IReadOnlyList<RecycleEntry> ListTrashRoot(string root) =>
        Try.Run(() =>
        {
            var info = new DirectoryInfo(Path.Combine(root, "info"));
            if (!info.Exists)
                return [];

            var files = Path.Combine(root, "files");

            return info.EnumerateFiles("*" + TrashInfoSuffix, Readable)
                .Select(file => Try.Run(() => ReadTrashInfo(file, files)).GetOrNull())
                .OfType<RecycleEntry>()
                .ToList();
        }).GetOrElse(_ => []);

    private static RecycleEntry? ReadTrashInfo(FileInfo info, string filesRoot)
    {
        string? original = null;
        long deleted = 0;

        foreach (var line in File.ReadLines(info.FullName))
        {
            var separator = line.IndexOf('=');
            if (separator <= 0)
                continue;

            var key = line[..separator].Trim();
            var value = line[(separator + 1)..].Trim();

            if (key.Equals("Path", StringComparison.OrdinalIgnoreCase))
                original = Uri.UnescapeDataString(value);
            else if (key.Equals("DeletionDate", StringComparison.OrdinalIgnoreCase)
                     && DateTime.TryParse(value, CultureInfo.InvariantCulture, DateTimeStyles.AssumeLocal,
                         out var moment))
                deleted = new DateTimeOffset(moment).ToUnixTimeMilliseconds();
        }

        if (string.IsNullOrWhiteSpace(original))
            return null;

        // The stored name is the info file's name without the suffix, which is not always the
        // original file name: a second "report.txt" is stored as "report.txt.2".
        var stored = Path.Combine(filesRoot, info.Name[..^TrashInfoSuffix.Length]);
        var isDirectory = Directory.Exists(stored);
        var size = isDirectory ? 0 : Try.Run(() => new FileInfo(stored).Length).GetOrElse(_ => 0);

        return new RecycleEntry(
            Path.GetFileName(original.TrimEnd('/')),
            original,
            size,
            deleted,
            isDirectory);
    }
}
