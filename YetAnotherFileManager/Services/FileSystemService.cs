using PhotinoNetUtils.Messaging;
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

            "fs.recycle" => Task.FromResult<NativeResponse?>(context.Reply("fs.recycle.result",
                new FsRecyclePayload(RecycleBin.List(context.Payload<RecycleListRequest>()?.IncludeOrphans ?? false)))),

            "fs.visibility" => Task.FromResult<NativeResponse?>(context.Reply("fs.visibility.result",
                new FsVisibilityPayload(FileVisibility.ShowHidden, FileVisibility.ShowSystem))),

            "fs.icon" => Task.FromResult<NativeResponse?>(context.Reply("fs.icon.result",
                new IconPayload(Icon(context.Payload<IconRequest>())))),

            "fs.iconFile" => Task.FromResult<NativeResponse?>(context.Reply("fs.iconFile.result",
                new IconPayload(IconFile(context.Payload<PathPayload>()?.Path)))),

            "fs.icon.set" => Task.FromResult<NativeResponse?>(context.Reply("fs.icon.set.result",
                new OkPayload(SetIconOverride(context.Payload<IconOverrideRequest>())))),

            "fs.recycle.restore" => Task.FromResult<NativeResponse?>(context.Reply("fs.recycle.restore.result",
                new OkPayload(RestoreRecycleEntry(context.Payload<RecycleRequest>()?.Id ?? "")))),

            "fs.recycle.empty" => Task.FromResult<NativeResponse?>(context.Reply("fs.recycle.empty.result",
                new OkPayload(EmptyRecycleBin(context.Payload<RecycleListRequest>()?.IncludeOrphans ?? false)))),

            "fs.recycle.delete" => Task.FromResult<NativeResponse?>(context.Reply("fs.recycle.delete.result",
                new OkPayload(DeleteRecycleEntry(context.Payload<RecycleRequest>()?.Id ?? "")))),

            "app.settings" => Task.FromResult<NativeResponse?>(context.Reply("app.settings.result",
                SettingsService.Instance.Current)),

            "app.settings.set" => Task.FromResult<NativeResponse?>(context.Reply("app.settings.result",
                context.Payload<AppSettings>() is { } settings
                    ? SettingsService.Instance.Save(settings)
                    : SettingsService.Instance.Current)),

            "fs.list" => Task.FromResult<NativeResponse?>(context.Reply("fs.list.result",
                List(context.Payload<FsListRequest>()?.Path))),

            _ => Task.FromResult<NativeResponse?>(null)
        };

    /// <summary>The icon the shell would show, or null when the settings and the shell have none.</summary>
    private static string? Icon(IconRequest? request)
    {
        if (request is not { Path.Length: > 0 } || !OperatingSystem.IsWindows())
            return null;

        var settings = SettingsService.Instance.Current;

        // A folder's own icon (desktop.ini) is a system setting of that folder, so it stays visible
        // even when the generic system icons are turned off.
        if (request.Directory && settings.UseCustomFolderIcons && HasCustomFolderIcon(request.Path))
            return ShellIcon.DataUrl(request.Path, true, false);

        if (!settings.UseSystemIcons)
            return null;

        var useFileAttributes = !request.Directory;

        return ShellIcon.DataUrl(request.Path, request.Directory, useFileAttributes);
    }

    /// <summary>An icon file chosen by the user, as a data URL.</summary>
    private static string? IconFile(string? path)
    {
        if (string.IsNullOrWhiteSpace(path) || !File.Exists(path))
            return null;

        var extension = Path.GetExtension(path).ToLowerInvariant();
        var media = extension switch
        {
            ".png" => "image/png",
            ".jpg" or ".jpeg" => "image/jpeg",
            ".gif" => "image/gif",
            ".webp" => "image/webp",
            ".svg" => "image/svg+xml",
            ".ico" => "image/x-icon",
            _ => null
        };

        if (media is null)
            return null;

        return Try.Run(() => $"data:{media};base64,{Convert.ToBase64String(File.ReadAllBytes(path))}")
            .GetOrNull();
    }

    /// <summary>Records (or clears) the icon of one entry in its folder's index.</summary>
    private static bool SetIconOverride(IconOverrideRequest? request)
    {
        if (request is not { Directory.Length: > 0, Name.Length: > 0 })
            return false;

        if (!Directory.Exists(request.Directory))
            return false;

        return DirectoryIndex.SetIcon(request.Directory, request.Name, request.Source);
    }

    /// <summary>Whether a folder defines its own icon, which Explorer reads from desktop.ini.</summary>
    private static bool HasCustomFolderIcon(string directory)
    {
        var desktopIni = Path.Combine(directory, "desktop.ini");

        return Try.Run(() =>
        {
            if (!File.Exists(desktopIni))
                return false;

            foreach (var line in File.ReadLines(desktopIni))
            {
                if (line.StartsWith("IconResource", StringComparison.OrdinalIgnoreCase)
                    || line.StartsWith("IconFile", StringComparison.OrdinalIgnoreCase))
                    return true;
            }

            return false;
        }).GetOrElse(_ => false);
    }

    private static bool EmptyRecycleBin(bool includeOrphans)
    {
        RecycleBin.Empty(includeOrphans);
        return true;
    }

    private static bool RestoreRecycleEntry(string id) =>
        id.Length > 0 && RecycleBin.Restore(id);

    private static bool DeleteRecycleEntry(string id)
    {
        if (id.Length == 0)
            return false;

        RecycleBin.Delete(id);
        return true;
    }

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

        // The index lives beside the files; reading it must never be able to fail a listing.
        var settings = SettingsService.Instance.Current;
        if (settings.ShouldWriteDirectoryIndex)
            DirectoryIndex.Ensure(directory.FullName);

        DirectoryIndex.EnsureHidden(directory.FullName);

        var icons = DirectoryIndex.Icons(directory.FullName);
        var sizes = DirectoryIndex.Sizes(directory.FullName);

        var entries = directory.EnumerateFileSystemInfos()
            .Where(info => !DirectoryIndex.IsIndexFile(info.Name))
            .Where(info => IsVisible(info, showHidden, showSystem))
            .Select(info => ToEntry(info, icons.GetValueOrDefault(info.Name)))
            .OfType<FileEntry>()
            .OrderByDescending(entry => entry.IsDirectory)
            .ThenBy(entry => entry.Name, StringComparer.OrdinalIgnoreCase)
            .ToList();

        RequestSizes(directory.FullName, entries);

        return new(directory.FullName, directory.Parent?.FullName, entries, sizes);
    }

    /// <summary>Queues the folders of the listing that have no fresh measurement.</summary>
    private static void RequestSizes(string directory, List<FileEntry> entries)
    {
        if (!SettingsService.Instance.Current.ShouldWriteDirectoryIndex)
            return;

        var children = entries
            .Where(entry => entry.IsDirectory)
            .Select(entry => entry.Name)
            .ToList();

        if (children.Count > 0)
            FolderSizeService.Instance.Request(directory, children);
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

    private static FileEntry? ToEntry(FileSystemInfo info, string? iconSource) =>
        Try.Run(() => new FileEntry(
            info.Name,
            info.FullName,
            info is DirectoryInfo,
            info is FileInfo file ? file.Length : 0,
            new DateTimeOffset(info.LastWriteTimeUtc).ToUnixTimeMilliseconds(),
            info.Attributes.HasFlag(FileAttributes.Hidden),
            info.Attributes.HasFlag(FileAttributes.System),
            iconSource)).GetOrNull();
}