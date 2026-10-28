using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Interop;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Serves the directory information the interface needs: the sidebar's shortcuts and volumes,
///     and the contents of one directory at a time.
/// </summary>
internal sealed class FileSystemService : Singleton<FileSystemService>
{
    public FileSystemService() => NativeBridge.MessageReceived += HandleMessageAsync;

    private static Task<NativeResponse?> HandleMessageAsync(NativeContext context) =>
        context.Request.Type switch
        {
            "fs.places" => Task.FromResult<NativeResponse?>(context.Reply("fs.places.result",
                new FsPlacesPayload(GetPlaces()))),

            "fs.drives" => Task.FromResult<NativeResponse?>(context.Reply("fs.drives.result",
                new FsDrivesPayload(GetDrives()))),

            "fs.list" => Task.FromResult<NativeResponse?>(context.Reply("fs.list.result",
                List(context.Payload<FsListRequest>()?.Path))),

            _ => Task.FromResult<NativeResponse?>(null)
        };

    /// <summary>Lists a directory. A missing path starts at the user's home directory.</summary>
    private static FsListPayload List(string? path)
    {
        var target = ResolvePath(path);
        var directory = new DirectoryInfo(target);

        if (!directory.Exists)
            throw new DirectoryNotFoundException($"'{target}' is not a directory.");

        // Explorer's own switches, so the listing matches what the user's file manager shows.
        var showHidden = FileVisibility.ShowHidden;
        var showSystem = FileVisibility.ShowSystem;

        var entries = directory.EnumerateFileSystemInfos()
            .Where(info => IsVisible(info, showHidden, showSystem))
            .Select(ToEntry)
            .OfType<FileEntry>()
            .OrderByDescending(entry => entry.IsDirectory)
            .ThenBy(entry => entry.Name, StringComparer.OrdinalIgnoreCase)
            .ToList();

        return new(directory.FullName, directory.Parent?.FullName, entries);
    }

    private static bool IsVisible(FileSystemInfo info, bool showHidden, bool showSystem)
    {
        var attributes = Try.Run(() => info.Attributes).GetOrElse(_ => FileAttributes.Normal);

        return (showSystem || !attributes.HasFlag(FileAttributes.System))
            && (showHidden || !attributes.HasFlag(FileAttributes.Hidden));
    }

    /// <summary>The shortcuts shown above the drive list.</summary>
    private static List<PlaceEntry> GetPlaces()
    {
        var home = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);

        (string Name, string Path)[] candidates =
        [
            ("Home", home),
            ("Desktop", Environment.GetFolderPath(Environment.SpecialFolder.DesktopDirectory)),
            ("Documents", Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments)),
            ("Downloads", Path.Combine(home, "Downloads"))
        ];

        return
        [
            .. candidates
                .Where(candidate => candidate.Path.Length > 0 && Directory.Exists(candidate.Path))
                .DistinctBy(candidate => candidate.Path, StringComparer.OrdinalIgnoreCase)
                .Select(candidate => new PlaceEntry(candidate.Name, candidate.Path, candidate.Name.ToLowerInvariant()))
        ];
    }

    /// <summary>The ready volumes, with their free space for the sidebar's capacity hint.</summary>
    private static List<DriveEntry> GetDrives() =>
    [
        .. DriveInfo.GetDrives()
            .Where(drive => Try.Run(() => drive.IsReady).GetOrNull())
            .Select(drive => Try.Run(() => new DriveEntry(
                drive.Name,
                drive.VolumeLabel,
                drive.DriveFormat,
                drive.TotalSize,
                drive.AvailableFreeSpace)).GetOrNull())
            .OfType<DriveEntry>()
    ];

    private static string ResolvePath(string? path)
    {
        if (string.IsNullOrWhiteSpace(path))
            return Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);

        // Keep the UI's "~" shortcut working without a full shell-style path expander.
        return path.Trim() is var value && value.StartsWith('~')
            ? Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.UserProfile),
                value[1..].TrimStart('/', '\\'))
            : value;
    }

    private static FileEntry? ToEntry(FileSystemInfo info) =>
        Try.Run(() => new FileEntry(
            info.Name,
            info.FullName,
            info is DirectoryInfo,
            info is FileInfo file ? file.Length : 0,
            new DateTimeOffset(info.LastWriteTimeUtc).ToUnixTimeMilliseconds(),
            info.Attributes.HasFlag(FileAttributes.Hidden),
            info.Attributes.HasFlag(FileAttributes.System))).GetOrNull();
}