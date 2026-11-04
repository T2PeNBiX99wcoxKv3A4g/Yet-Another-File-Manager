using System.Collections.Concurrent;
using System.Globalization;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using System.Security.Principal;
using System.Text;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Microsoft.Win32;
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

    private const string BitBucketKey = @"Software\Microsoft\Windows\CurrentVersion\Explorer\BitBucket";
    private const string PolicyKey = @"Software\Microsoft\Windows\CurrentVersion\Policies\Explorer";
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
    [SupportedOSPlatform("windows")]
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

    /// <summary>
    ///     Whether the entry may go to the recycle bin. Windows lets a policy or a per-volume setting
    ///     turn the bin off, and both mean "delete for good", which the window asks about first. A
    ///     volume without a <c>$Recycle.Bin</c> folder (FAT, a network share) cannot recycle either.
    /// </summary>
    public static bool CanRecycle(string path)
    {
        if (OperatingSystem.IsLinux())
            return CanRecycleUnix(path);

        if (!OperatingSystem.IsWindows())
            return false;

        if (CurrentSid is not { Length: > 0 })
            return false;

        if (RecycleDisabled())
            return false;

        var root = Path.GetPathRoot(path);

        return !string.IsNullOrEmpty(root)
            && Directory.Exists(Path.Combine(root, "$Recycle.Bin"))
            && !VolumeDeletesPermanently(root);
    }

    /// <summary>
    ///     The freedesktop trash is usable when its files/ and info/ folders can be written on the
    ///     same mount as the source. A cross-device fallback to the home trash would fail on move,
    ///     so it is treated as "cannot recycle" and the window asks before deleting for good.
    /// </summary>
    private static bool CanRecycleUnix(string path)
    {
        if (!File.Exists(path) && !Directory.Exists(path))
            return false;

        return Try.Run(() =>
        {
            var root = TrashRootFor(path);
            var sourceMount = MountOf(Path.GetFullPath(path));
            var trashMount = MountOf(root);

            if (sourceMount is not null && trashMount is not null
                && !sourceMount.Equals(trashMount, StringComparison.Ordinal))
                return false;

            var files = Path.Combine(root, "files");
            var info = Path.Combine(root, "info");
            EnsurePrivate(files);
            EnsurePrivate(info);

            if (!Directory.Exists(files) || !Directory.Exists(info))
                return false;

            var probe = Path.Combine(files, $".yafm-{Guid.NewGuid():N}");
            File.WriteAllText(probe, "");
            File.Delete(probe);
            return true;
        }).GetOrElse(_ => false);
    }

    /// <summary>
    ///     Puts one entry in the recycle bin of its own volume without going through the shell: the
    ///     content is renamed to <c>$R…</c> and an <c>$I…</c> record beside it keeps the original path.
    ///     That is the same layout Explorer and this app read back, so restore keeps working either way.
    /// </summary>
    public static bool Send(string path) =>
        OperatingSystem.IsWindows() ? SendWindows(path)
        : OperatingSystem.IsLinux() && SendUnix(path);

    /// <summary>
    ///     Moves a path into the freedesktop.org trash of the volume that holds it. The home trash is
    ///     used when the volume cannot hold a per-user one; a cross-device move then fails, which the
    ///     caller reports instead of deleting anything for good.
    /// </summary>
    private static bool SendUnix(string path) =>
        Try.Run(() =>
        {
            var source = Path.GetFullPath(path);
            if (!File.Exists(source) && !Directory.Exists(source))
                return false;

            var root = TrashRootFor(source);
            var files = Path.Combine(root, "files");
            var info = Path.Combine(root, "info");
            EnsurePrivate(files);
            EnsurePrivate(info);

            var name = Path.GetFileName(source);
            var stored = name;

            for (var index = 1; File.Exists(Path.Combine(files, stored))
                                 || Directory.Exists(Path.Combine(files, stored))
                                 || File.Exists(Path.Combine(info, stored + TrashInfoSuffix)); index++)
                stored = $"{name}.{index}";

            var target = Path.Combine(files, stored);
            var record = Path.Combine(info, stored + TrashInfoSuffix);

            if (Directory.Exists(source))
                Directory.Move(source, target);
            else
                File.Move(source, target);

            try
            {
                File.WriteAllText(record,
                    $"[Trash Info]\nPath={EscapeTrashPath(source)}\nDeletionDate={DateTime.Now:yyyy-MM-ddTHH:mm:ss}\n");
            }
            catch
            {
                // Without its record the content is a leftover nobody can restore; put it back.
                if (Directory.Exists(target))
                    Directory.Move(target, source);
                else
                    File.Move(target, source);

                throw;
            }

            return true;
        }).OnFailure(ex => Log.Warning(ex, "Could not move {Path} to the trash", path))
        .GetOrElse(_ => false);

    /// <summary>The trash folder that belongs to the volume a path lives on.</summary>
    private static string TrashRootFor(string source)
    {
        var home = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
        var dataHome = Environment.GetEnvironmentVariable("XDG_DATA_HOME");
        var homeTrash = Path.Combine(
            string.IsNullOrWhiteSpace(dataHome) ? Path.Combine(home, ".local", "share") : dataHome,
            "Trash");

        var mount = MountOf(source);
        if (mount is null || mount == MountOf(home))
            return homeTrash;

        var uid = geteuid().ToString();
        var perUser = Path.Combine(mount, $".Trash-{uid}");

        if (TryCreatePrivate(perUser))
            return perUser;

        var shared = Path.Combine(mount, ".Trash", uid);
        return TryCreatePrivate(shared) ? shared : homeTrash;
    }

    /// <summary>The mount that holds a path, as <see cref="DriveInfo" /> reports Linux mounts.</summary>
    private static string? MountOf(string path) =>
        DriveInfo.GetDrives()
            .Select(drive => drive.RootDirectory.FullName)
            .Where(root => IsUnder(path, root))
            .OrderByDescending(root => root.Length)
            .FirstOrDefault();

    private static bool IsUnder(string path, string root)
    {
        var prefix = root.EndsWith('/') ? root : root + "/";

        return path == root || path.StartsWith(prefix, StringComparison.Ordinal);
    }

    private static void EnsurePrivate(string directory)
    {
        if (!Directory.Exists(directory))
            TryCreatePrivate(directory);
    }

    private static bool TryCreatePrivate(string directory) =>
        Try.Run(() =>
        {
            if (!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);

                if (OperatingSystem.IsLinux())
                    File.SetUnixFileMode(directory,
                        UnixFileMode.UserRead | UnixFileMode.UserWrite | UnixFileMode.UserExecute);
            }

            return true;
        }).GetOrElse(_ => false);

    /// <summary>The path a <c>.trashinfo</c> record stores: absolute and percent-encoded.</summary>
    private static string EscapeTrashPath(string path) =>
        "/" + string.Join("/", path.TrimStart('/').Split('/').Select(Uri.EscapeDataString));

    [DllImport("libc", EntryPoint = "geteuid")]
    private static extern uint geteuid();

    /// <summary>Runs a whole selection through <see cref="Send" />, one entry at a time.</summary>
    public static Task<bool> SendAsync(string path, CancellationToken cancellationToken = default) =>
        Task.Run(() => Send(path), cancellationToken);

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

    /// <summary>Restores several entries, one after the other; answers how many succeeded.</summary>
    public static Task<int> RestoreManyAsync(IReadOnlyList<string> ids, CancellationToken cancellationToken = default) =>
        Task.Run(() => ids.Count(Restore), cancellationToken);

    /// <summary>Permanently deletes several entries; answers how many succeeded.</summary>
    public static Task<int> DeleteManyAsync(IReadOnlyList<string> ids, CancellationToken cancellationToken = default) =>
        Task.Run(() => ids.Count(Delete), cancellationToken);

    /// <summary>Shows the shell properties of the stored content behind one record.</summary>
    public static Task ShowPropertiesAsync(string id) =>
        !OperatingSystem.IsWindows() || id.Length == 0
            ? Task.CompletedTask
            : FileOperations.ShowPropertiesAsync([ContentPath(id)]);

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

    [SupportedOSPlatform("windows")]
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
    [SupportedOSPlatform("windows")]
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

    [SupportedOSPlatform("windows")]
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
            removable,
            content);
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

    /// <summary>The "do not move files to the Recycle Bin" policy, which covers every volume.</summary>
    [SupportedOSPlatform("windows")]
    private static bool RecycleDisabled() =>
        ReadDword(Registry.CurrentUser, PolicyKey, "NoRecycleFiles") == 1
        || ReadDword(Registry.LocalMachine, PolicyKey, "NoRecycleFiles") == 1;

    /// <summary>
    ///     The per-volume switch in the Recycle Bin properties ("don't move files to this drive's
    ///     Recycle Bin"), with the machine-wide value as the fallback.
    /// </summary>
    [SupportedOSPlatform("windows")]
    private static bool VolumeDeletesPermanently(string root)
    {
        if (VolumeId(root) is { Length: > 0 } volume)
        {
            var perVolume = ReadDword(Registry.CurrentUser, $"{BitBucketKey}\\Volume\\{volume}", "NukeOnDelete");

            if (perVolume is not null)
                return perVolume == 1;

            var machine = ReadDword(Registry.LocalMachine, $"{BitBucketKey}\\Volume\\{volume}", "NukeOnDelete");

            if (machine is not null)
                return machine == 1;
        }

        return ReadDword(Registry.CurrentUser, BitBucketKey, "NukeOnDelete") == 1
            || ReadDword(Registry.LocalMachine, BitBucketKey, "NukeOnDelete") == 1;
    }

    /// <summary>The <c>{GUID}</c> the Recycle Bin settings use for the volume a path is on.</summary>
    [SupportedOSPlatform("windows")]
    private static string? VolumeId(string root)
    {
        var buffer = new StringBuilder(64);

        if (!GetVolumeNameForVolumeMountPoint(root, buffer, (uint)buffer.Capacity))
            return null;

        var name = buffer.ToString();
        var open = name.IndexOf('{');
        var close = name.LastIndexOf('}');

        return open >= 0 && close > open ? name[open..(close + 1)] : null;
    }

    [SupportedOSPlatform("windows")]
    private static int? ReadDword(RegistryKey hive, string path, string name) =>
        Try.Run(() =>
        {
            using var key = hive.OpenSubKey(path);
            return key?.GetValue(name) is int value ? value : (int?)null;
        }).GetOrNull();

    [DllImport("kernel32.dll", CharSet = CharSet.Unicode, SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static extern bool GetVolumeNameForVolumeMountPoint(string mountPoint, StringBuilder volumeName,
        uint bufferLength);

    [SupportedOSPlatform("windows")]
    private static bool SendWindows(string path)
    {
        if (!CanRecycle(path) || CurrentSid is not { Length: > 0 } sid)
            return false;

        var root = Path.GetPathRoot(path);
        if (string.IsNullOrEmpty(root))
            return false;

        var bin = Path.Combine(root, "$Recycle.Bin", sid);
        Try.Run(() => Directory.CreateDirectory(bin))
            .OnFailure(ex => Log.Debug(ex, "There is no recycle bin on {Root}", root));

        if (!Directory.Exists(bin))
            return false;

        var directory = Directory.Exists(path);
        var extension = Path.GetExtension(path);
        var size = directory ? 0 : Try.Run(() => new FileInfo(path).Length).GetOrElse(_ => 0L);

        for (var attempt = 0; attempt < 8; attempt++)
        {
            var id = NewId();
            var content = Path.Combine(bin, "$R" + id + extension);
            var info = Path.Combine(bin, "$I" + id + extension);

            if (File.Exists(info) || File.Exists(content) || Directory.Exists(content))
                continue;

            try
            {
                if (directory)
                    Directory.Move(path, content);
                else
                    File.Move(path, content);
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "Could not move {Path} into the recycle bin", path);
                return false;
            }

            try
            {
                WriteWindowsRecord(info, path, size);
                return true;
            }
            catch (Exception ex)
            {
                // Content without its record could never be restored, so put it back.
                Log.Warning(ex, "Could not write the recycle bin record for {Path}", path);

                Try.Run(() => directory ? (Action)(() => Directory.Move(content, path))
                        : () => File.Move(content, path))
                    .OnFailure(back => Log.Error(back, "Could not put {Path} back", path));

                return false;
            }
        }

        return false;
    }

    /// <summary>Version 2 of the record: the size, the deletion time, then the original path.</summary>
    [SupportedOSPlatform("windows")]
    private static void WriteWindowsRecord(string infoPath, string original, long size)
    {
        using var stream = new FileStream(infoPath, FileMode.CreateNew, FileAccess.Write, FileShare.None);
        using var writer = new BinaryWriter(stream, Encoding.Unicode);

        writer.Write(2L);
        writer.Write(size);
        writer.Write(DateTime.UtcNow.ToFileTimeUtc());
        writer.Write(original.Length + 1);
        writer.Write(Encoding.Unicode.GetBytes(original + "\0"));
    }

    /// <summary>
    ///     The 26 letters Windows puts in a record name. Any combination is a valid id, so a random one
    ///     keeps two deletes from ever meeting.
    /// </summary>
    private static string NewId() =>
        string.Create(26, Random.Shared, static (span, random) =>
        {
            for (var index = 0; index < span.Length; index++)
                span[index] = (char)('A' + random.Next(26));
        });

    [SupportedOSPlatform("windows")]
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

    [SupportedOSPlatform("windows")]
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
    [SupportedOSPlatform("windows")]
    private static string ContentPath(string infoPath) =>
        Path.Combine(Path.GetDirectoryName(infoPath)!, "$R" + Path.GetFileName(infoPath)[2..]);

    [SupportedOSPlatform("windows")]
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
            true,
            stored);
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