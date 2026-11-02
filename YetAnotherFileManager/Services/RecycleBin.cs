using System.Collections.Concurrent;
using System.Globalization;
using System.Security.Principal;
using System.Text;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Lists and empties deleted items. Windows stores them under
///     <c>$Recycle.Bin\&lt;SID&gt;</c> as an <c>$I…</c> record beside the <c>$R…</c> content;
///     everything else follows the freedesktop.org trash specification, where
///     <c>info/*.trashinfo</c> describes the file stored in <c>files/</c>.
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

    // ---- Windows ----

    /// <summary>The per-user folder Windows itself shows: our SID, not every profile that ever used the volume.</summary>
    private static string? CurrentSid =>
        Try.Run(() => WindowsIdentity.GetCurrent().User?.Value).GetOrNull();

    public static IReadOnlyList<RecycleEntry> List(bool includeOrphans = false) =>
    [
        .. (OperatingSystem.IsWindows() ? ListWindows(includeOrphans) : ListUnix(includeOrphans))
        .OrderByDescending(entry => entry.Deleted)
    ];

    /// <summary>Async wrapper: the walk is filesystem-bound and must not block the UI thread.</summary>
    public static Task<IReadOnlyList<RecycleEntry>> ListAsync(bool includeOrphans = false,
        CancellationToken cancellationToken = default) => Task.Run(() => List(includeOrphans), cancellationToken);

    /// <summary>
    ///     Puts one entry back at its original path. Returns false when the stored content is gone
    ///     or the original folder no longer exists.
    /// </summary>
    public static bool Restore(string id) =>
        OperatingSystem.IsWindows() ? RestoreWindows(id) : RestoreUnix(id);

    public static Task<bool> RestoreAsync(string id, CancellationToken cancellationToken = default) =>
        Task.Run(() => Restore(id), cancellationToken);

    /// <summary>Permanently removes every entry this account may delete.</summary>
    public static void Empty(bool includeOrphans = false) =>
        Try.Run(() =>
        {
            foreach (var entry in List(includeOrphans).Where(entry => entry.Removable))
                Delete(entry.Id);
        }).OnFailure(ex => Log.Warning(ex, "Could not empty the recycle bin"));

    public static Task EmptyAsync(bool includeOrphans = false, CancellationToken cancellationToken = default) =>
        Task.Run(() => Empty(includeOrphans), cancellationToken);

    /// <summary>Deletes one entry's content and its metadata, permanently.</summary>
    public static bool Delete(string id) =>
        Try.Run(() =>
        {
            if (OperatingSystem.IsWindows())
                DeleteWindows(id);
            else
                DeleteUnix(id);

            return true;
        }).OnFailure(ex => Log.Warning(ex, "Could not delete recycle bin entry {Id}", id)).GetOrElse(_ => false);

    public static Task<bool> DeleteAsync(string id, CancellationToken cancellationToken = default) =>
        Task.Run(() => Delete(id), cancellationToken);

    /// <summary>
    ///     Deletes every leftover record in the given listing, ignoring who owns it. Used by the
    ///     elevated helper, which has the rights the normal window does not.
    /// </summary>
    public static int PurgeOrphanMetadata(IEnumerable<RecycleEntry> entries)
    {
        var removed = 0;

        foreach (var entry in entries.Where(entry => entry.IsOrphan))
            if (Delete(entry.Id))
                removed++;

        return removed;
    }

    public static Task<int> PurgeOrphanMetadataAsync(IEnumerable<RecycleEntry> entries,
        CancellationToken cancellationToken = default) => Task.Run(() => PurgeOrphanMetadata(entries), cancellationToken);

    private static IEnumerable<RecycleEntry> ListWindows(bool includeOrphans)
    {
        if (CurrentSid is not { Length: > 0 } sid)
            return [];

        return DriveInfo.GetDrives()
            .Where(drive => Try.Run(() => drive.IsReady).GetOrNull())
            .SelectMany(drive => ListWindowsDrive(drive.Name, sid, includeOrphans));
    }

    /// <summary>
    ///     Explorer only shows the current user's folder. The leftover view is a cleanup tool, so it
    ///     also reads every other profile's records — those are reported as not removable, because
    ///     this account normally cannot write there.
    /// </summary>
    private static IReadOnlyList<RecycleEntry> ListWindowsDrive(string root, string sid, bool includeOrphans) =>
        Try.Run(() =>
        {
            var bin = new DirectoryInfo(Path.Combine(root, "$Recycle.Bin"));
            if (!bin.Exists)
                return [];

            var folders = includeOrphans
                ? bin.EnumerateDirectories("*", Readable).ToList()
                : [new(Path.Combine(bin.FullName, sid))];

            // Each record is its own file; a bin with thousands of them reads them in parallel.
            var records = folders
                .Where(folder => folder.Exists)
                .SelectMany(folder => folder.EnumerateFiles("$I*", Readable))
                .ToList();

            var entries = new ConcurrentBag<RecycleEntry>();

            Parallel.ForEach(records, info =>
            {
                var entry = Try.Run(() => ReadWindowsRecord(info.FullName, includeOrphans, sid)).GetOrNull();
                if (entry is not null)
                    entries.Add(entry);
            });

            return entries.ToList();
        }).GetOrElse(_ => []);

    private static RecycleEntry? ReadWindowsRecord(string infoPath, bool includeOrphans, string currentSid)
    {
        using var reader = new BinaryReader(File.OpenRead(infoPath));

        var version = reader.ReadInt64();
        var size = reader.ReadInt64();
        var deleted = reader.ReadInt64();
        var original = version >= 2 ? ReadVariablePath(reader) : ReadLegacyPath(reader);

        if (string.IsNullOrWhiteSpace(original))
            return null;

        var content = ContentPath(infoPath);
        var state = Inspect(content);

        // Content that cannot be inspected is not a leftover: refusing it keeps the original name of
        // a file that may still be restorable from being thrown away.
        if (state == ContentState.Unknown)
            return null;

        var isDirectory = state == ContentState.Directory;
        var isOrphan = state == ContentState.Missing;

        // A record without its $R content is a leftover (a partial delete, or another tool that
        // removed one half). Explorer hides those; the interface can ask for them to clean up.
        if (isOrphan && !includeOrphans)
            return null;

        var owner = Path.GetFileName(Path.GetDirectoryName(infoPath));
        var removable = string.Equals(owner, currentSid, StringComparison.OrdinalIgnoreCase);

        return new(
            infoPath,
            Path.GetFileName(original.TrimEnd('\\', '/')),
            original,
            state == ContentState.File ? new FileInfo(content).Length : isOrphan ? size : 0,
            new DateTimeOffset(DateTime.FromFileTimeUtc(deleted)).ToUnixTimeMilliseconds(),
            isDirectory,
            isOrphan,
            removable ? null : owner,
            removable);
    }

    /// <summary>
    ///     Whether the stored content is there. <see cref="ContentState.Unknown" /> means the entry
    ///     exists but cannot be inspected (permissions, a locked volume), which must never be treated
    ///     as "missing": that would throw away the name of a restorable file.
    /// </summary>
    private static ContentState Inspect(string path)
    {
        try
        {
            return File.GetAttributes(path).HasFlag(FileAttributes.Directory)
                ? ContentState.Directory
                : ContentState.File;
        }
        catch (FileNotFoundException)
        {
            return ContentState.Missing;
        }
        catch (DirectoryNotFoundException)
        {
            return ContentState.Missing;
        }
        catch (UnauthorizedAccessException)
        {
            return ContentState.Unknown;
        }
        catch (IOException)
        {
            return ContentState.Unknown;
        }
    }

    private static bool RestoreWindows(string infoPath)
    {
        if (ReadWindowsOriginalPath(infoPath) is not { Length: > 0 } original)
            return false;

        var content = ContentPath(infoPath);
        if (!Directory.Exists(content) && !File.Exists(content))
            return false;

        var target = UniqueTarget(original);
        if (Path.GetDirectoryName(target) is not { } folder || !Directory.Exists(folder))
            return false;

        if (Directory.Exists(content))
            Directory.Move(content, target);
        else
            File.Move(content, target);

        File.Delete(infoPath);
        return true;
    }

    private static void DeleteWindows(string infoPath)
    {
        var content = ContentPath(infoPath);

        if (Directory.Exists(content))
            Directory.Delete(content, true);
        else if (File.Exists(content))
            File.Delete(content);

        File.Delete(infoPath);
    }

    /// <summary>The <c>$R…</c> file that belongs to an <c>$I…</c> record: same name, one letter apart.</summary>
    private static string ContentPath(string infoPath) =>
        Path.Combine(Path.GetDirectoryName(infoPath)!, "$R" + Path.GetFileName(infoPath)[2..]);

    private static string? ReadWindowsOriginalPath(string infoPath) =>
        Try.Run(() =>
        {
            using var reader = new BinaryReader(File.OpenRead(infoPath));

            var version = reader.ReadInt64();
            reader.ReadInt64();
            reader.ReadInt64();

            return version >= 2 ? ReadVariablePath(reader) : ReadLegacyPath(reader);
        }).GetOrNull();

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

    private static IEnumerable<RecycleEntry> ListUnix(bool includeOrphans) =>
        TrashRoots().Distinct(StringComparer.Ordinal).SelectMany(root => ListTrashRoot(root, includeOrphans));

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

    private static IReadOnlyList<RecycleEntry> ListTrashRoot(string root, bool includeOrphans) =>
        Try.Run(() =>
        {
            var info = new DirectoryInfo(Path.Combine(root, "info"));
            if (!info.Exists)
                return [];

            var files = Path.Combine(root, "files");

            return info.EnumerateFiles("*" + TrashInfoSuffix, Readable)
                .Select(file => Try.Run(() => ReadTrashInfo(file, files, includeOrphans)).GetOrNull())
                .OfType<RecycleEntry>()
                .ToList();
        }).GetOrElse(_ => []);

    private static RecycleEntry? ReadTrashInfo(FileInfo info, string filesRoot, bool includeOrphans)
    {
        var original = ReadTrashInfoPath(info.FullName);
        if (string.IsNullOrWhiteSpace(original))
            return null;

        var stored = StoredPath(info, filesRoot);
        var state = Inspect(stored);

        // Same rule as on Windows: something that exists but cannot be inspected is not a leftover.
        if (state == ContentState.Unknown)
            return null;

        var isDirectory = state == ContentState.Directory;
        var isOrphan = state == ContentState.Missing;

        if (isOrphan && !includeOrphans)
            return null;

        return new(
            info.FullName,
            Path.GetFileName(original.TrimEnd('/')),
            original,
            state == ContentState.File ? new FileInfo(stored).Length : 0,
            ReadTrashInfoDate(info.FullName),
            isDirectory,
            isOrphan,
            null,
            true);
    }

    private static bool RestoreUnix(string infoPath)
    {
        var original = ReadTrashInfoPath(infoPath);
        if (string.IsNullOrWhiteSpace(original))
            return false;

        var stored = StoredPath(new(infoPath), TrashFilesRoot(infoPath));
        if (!Directory.Exists(stored) && !File.Exists(stored))
            return false;

        var target = UniqueTarget(original);
        if (Path.GetDirectoryName(target) is not { } folder || !Directory.Exists(folder))
            return false;

        if (Directory.Exists(stored))
            Directory.Move(stored, target);
        else
            File.Move(stored, target);

        File.Delete(infoPath);
        return true;
    }

    private static void DeleteUnix(string infoPath)
    {
        var stored = StoredPath(new(infoPath), TrashFilesRoot(infoPath));

        if (Directory.Exists(stored))
            Directory.Delete(stored, true);
        else if (File.Exists(stored))
            File.Delete(stored);

        File.Delete(infoPath);
    }

    /// <summary>
    ///     The stored name is the info file's name without the suffix, which is not always the
    ///     original file name: a second "report.txt" is stored as "report.txt.2".
    /// </summary>
    private static string StoredPath(FileInfo info, string filesRoot) =>
        Path.Combine(filesRoot, info.Name[..^TrashInfoSuffix.Length]);

    private static string TrashFilesRoot(string infoPath) =>
        Path.Combine(Path.GetDirectoryName(Path.GetDirectoryName(infoPath))!, "files");

    private static string? ReadTrashInfoPath(string infoPath) =>
        ReadTrashInfoValues(infoPath).GetValueOrDefault("Path") is { Length: > 0 } path
            ? Uri.UnescapeDataString(path)
            : null;

    private static long ReadTrashInfoDate(string infoPath) =>
        ReadTrashInfoValues(infoPath).GetValueOrDefault("DeletionDate") is { Length: > 0 } value
        && DateTime.TryParse(value, CultureInfo.InvariantCulture, DateTimeStyles.AssumeLocal, out var moment)
            ? new DateTimeOffset(moment).ToUnixTimeMilliseconds()
            : 0;

    private static Dictionary<string, string> ReadTrashInfoValues(string infoPath)
    {
        var values = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

        foreach (var line in File.ReadLines(infoPath))
        {
            var separator = line.IndexOf('=');
            if (separator <= 0 || line.StartsWith('['))
                continue;

            values[line[..separator].Trim()] = line[(separator + 1)..].Trim();
        }

        return values;
    }

    /// <summary>Restoring onto an existing name gets the usual "name (2)" suffix instead of failing.</summary>
    private static string UniqueTarget(string original)
    {
        if (!File.Exists(original) && !Directory.Exists(original))
            return original;

        var folder = Path.GetDirectoryName(original) ?? string.Empty;
        var name = Path.GetFileNameWithoutExtension(original);
        var extension = Path.GetExtension(original);

        for (var index = 2; index < 1000; index++)
        {
            var candidate = Path.Combine(folder, $"{name} ({index}){extension}");
            if (!File.Exists(candidate) && !Directory.Exists(candidate))
                return candidate;
        }

        return original;
    }

    private enum ContentState
    {
        Missing,
        File,
        Directory,
        Unknown
    }
}