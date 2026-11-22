using System.Diagnostics;
using System.Text;
using PhotinoNetUtils.Localization;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Reads what the app's own properties dialog shows: the shell's sheet is richer, but it only
///     exists on Windows, while the General tab also needs the volume, the mount and the counts.
/// </summary>
internal static class PathProperties
{
    private const int EntryLimit = 100_000;

    /// <summary>One entry's details; a failure keeps the name so the dialog can still show a row.</summary>
    public static PathPropertiesInfo Read(string path, string? iconSource = null)
    {
        try
        {
            var directory = Directory.Exists(path);

            if (!directory && !File.Exists(path))
                return Failed(path, Localization.Get("the_path_no_longer_exists"));

            FileSystemInfo info = directory ? new DirectoryInfo(path) : new FileInfo(path);
            var size = directory ? FolderSize(path) : ((FileInfo)info).Length;
            var (files, folders) = directory ? Counts(path) : (0, 0);
            var (fileSystem, mountPoint, mountSource, free, total) = Volume(path);
            var (owner, group) = OperatingSystem.IsLinux() ? Ownership(path) : (null, null);

            return new(
                path,
                info.Name,
                directory,
                size,
                directory ? files + folders : null,
                ToMilliseconds(info.CreationTimeUtc),
                ToMilliseconds(info.LastWriteTimeUtc),
                ToMilliseconds(info.LastAccessTimeUtc),
                Attributes(path),
                OperatingSystem.IsWindows() ? null : UnixMode(File.GetUnixFileMode(path)),
                OperatingSystem.IsWindows() ? null : (int)File.GetUnixFileMode(path),
                LinkTarget(info),
                null,
                directory ? 0 : Allocation(path, size),
                files,
                folders,
                fileSystem,
                mountPoint,
                mountSource,
                free,
                total,
                owner,
                group,
                iconSource);
        }
        catch (Exception ex)
        {
            return Failed(path, ex.Message);
        }
    }

    private static PathPropertiesInfo Failed(string path, string error) =>
        new(path, Path.GetFileName(path), false, 0, null, 0, 0, 0, [], null, null, null, error);

    /// <summary>The attribute flags as tokens, translated by the dialog where it knows them.</summary>
    private static List<string> Attributes(string path) =>
        [.. File.GetAttributes(path).ToString().Split(", ", StringSplitOptions.RemoveEmptyEntries)];

    /// <summary>Where a symbolic link points, resolved against its own folder.</summary>
    private static string? LinkTarget(FileSystemInfo info) =>
        info.LinkTarget is { Length: > 0 } target
            ? Path.GetFullPath(Path.Combine(Path.GetDirectoryName(info.FullName) ?? "", target))
            : null;

    /// <summary>
    ///     A folder's own size comes from the parent's index, which measures each child when the
    ///     folder is listed. A folder nobody measured reads as unknown rather than walking a huge
    ///     tree just to fill one row.
    /// </summary>
    private static long FolderSize(string path)
    {
        var parent = Path.GetDirectoryName(path);

        if (parent is not { Length: > 0 })
            return 0;

        var sizes = DirectoryIndex.SizesAsync(parent).GetAwaiter().GetResult();

        return sizes.GetValueOrDefault(Path.GetFileName(path));
    }

    /// <summary>The files and folders directly inside one directory.</summary>
    private static (int Files, int Folders) Counts(string path)
    {
        var files = 0;
        var folders = 0;

        foreach (var entry in new DirectoryInfo(path).EnumerateFileSystemInfos("*", new EnumerationOptions
                 {
                     IgnoreInaccessible = true,
                     AttributesToSkip = FileAttributes.None,
                     RecurseSubdirectories = false
                 }))
        {
            if (DirectoryIndex.IsIndexFile(entry.Name))
                continue;

            if (entry is DirectoryInfo)
                folders++;
            else
                files++;

            if (files + folders >= EntryLimit)
                break;
        }

        return (files, folders);
    }

    /// <summary>
    ///     The filesystem, the mount point and source, and the free space of the volume the path is
    ///     on. Linux reads <c>/proc/self/mounts</c> for the longest matching mount; every other
    ///     platform has a drive root instead.
    /// </summary>
    private static (string? FileSystem, string? MountPoint, string? MountSource, long Free, long Total) Volume(string path)
    {
        if (!OperatingSystem.IsLinux())
        {
            var root = Path.GetPathRoot(path);
            if (root is not { Length: > 0 })
                return (null, null, null, 0, 0);

            var drive = Try.Run(() => new DriveInfo(root)).GetOrNull();
            var label = Try.Run(() => drive?.VolumeLabel).GetOrNull();

            return (Try.Run(() => drive?.DriveFormat).GetOrNull(), root,
                label is { Length: > 0 } ? label : root,
                Try.Run(() => drive?.AvailableFreeSpace ?? 0).GetOrElse(_ => 0L),
                Try.Run(() => drive?.TotalSize ?? 0).GetOrElse(_ => 0L));
        }

        var full = Path.GetFullPath(path);
        string? bestPoint = null;
        string? source = null;
        string? type = null;

        foreach (var line in Try.Run(() => File.ReadLines("/proc/self/mounts")).GetOrElse(_ => []))
        {
            var parts = line.Split(' ');
            if (parts.Length < 3)
                continue;

            var point = parts[1].Replace("\\040", " ");
            var trimmed = point.TrimEnd('/');
            if (trimmed.Length > 0 && !full.StartsWith(trimmed + "/", StringComparison.Ordinal)
                                    && !string.Equals(full, trimmed, StringComparison.Ordinal))
                continue;

            if (bestPoint is null || point.Length >= bestPoint.Length)
            {
                bestPoint = point;
                source = parts[0].Replace("\\040", " ");
                type = parts[2];
            }
        }

        var volume = bestPoint is { Length: > 0 } ? Try.Run(() => new DriveInfo(bestPoint)).GetOrNull() : null;

        return (type, bestPoint, source,
            Try.Run(() => volume?.AvailableFreeSpace ?? 0).GetOrElse(_ => 0L),
            Try.Run(() => volume?.TotalSize ?? 0).GetOrElse(_ => 0L));
    }

    /// <summary>How much of the volume one file really occupies.</summary>
    private static long Allocation(string path, long size)
    {
        if (!OperatingSystem.IsWindows())
            return (size + 4095) / 4096 * 4096;

        var root = Path.GetPathRoot(path);
        if (root is not { Length: > 0 } || !GetDiskFreeSpaceW(root, out var sectors, out var bytesPerSector, out _, out _))
            return size;

        var cluster = (long)sectors * bytesPerSector;
        return cluster <= 0 ? size : (size + cluster - 1) / cluster * cluster;
    }

    [System.Runtime.InteropServices.DllImport("kernel32.dll", CharSet = System.Runtime.InteropServices.CharSet.Unicode,
        SetLastError = true)]
    [return: System.Runtime.InteropServices.MarshalAs(System.Runtime.InteropServices.UnmanagedType.Bool)]
    private static extern bool GetDiskFreeSpaceW(string root, out uint sectorsPerCluster, out uint bytesPerSector,
        out uint freeClusters, out uint totalClusters);

    /// <summary>The owner and group names from <c>stat</c>, which reports them in one line.</summary>
    private static (string? Owner, string? Group) Ownership(string path) =>
        Try.Run(() =>
        {
            var start = new ProcessStartInfo("stat")
            {
                RedirectStandardOutput = true,
                UseShellExecute = false,
                CreateNoWindow = true
            };
            start.ArgumentList.Add("-c");
            start.ArgumentList.Add("%U\n%G");
            start.ArgumentList.Add("--");
            start.ArgumentList.Add(path);

            using var process = Process.Start(start);
            if (process is null)
                return (null, null);

            var text = process.StandardOutput.ReadToEnd();
            process.WaitForExit(1000);

            var lines = text.Split('\n', StringSplitOptions.TrimEntries | StringSplitOptions.RemoveEmptyEntries);
            return lines.Length >= 2 ? (lines[0], lines[1]) : (null, null);
        }).GetOrElse(_ => ((string?)null, (string?)null));

    private static long ToMilliseconds(DateTime value) =>
        new DateTimeOffset(value).ToUnixTimeMilliseconds();

    /// <summary>The permission bits as rwx triples; the owner and group come from the shell tools.</summary>
    private static string UnixMode(UnixFileMode mode)
    {
        const string Letters = "rwx";
        UnixFileMode[] bits =
        [
            UnixFileMode.UserRead, UnixFileMode.UserWrite, UnixFileMode.UserExecute,
            UnixFileMode.GroupRead, UnixFileMode.GroupWrite, UnixFileMode.GroupExecute,
            UnixFileMode.OtherRead, UnixFileMode.OtherWrite, UnixFileMode.OtherExecute
        ];

        var text = new StringBuilder(9);
        for (var index = 0; index < bits.Length; index++)
            text.Append(mode.HasFlag(bits[index]) ? Letters[index % 3] : '-');

        return text.ToString();
    }
}
