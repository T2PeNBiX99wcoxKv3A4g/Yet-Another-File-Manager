using System.ComponentModel;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Messaging;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Interop;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Serves the directory information the interface needs: the sidebar's shortcuts and volumes,
///     and the contents of one directory at a time.
/// </summary>
internal sealed partial class FileSystemService : Singleton<FileSystemService>
{
    /// <summary>ERROR_ACCESS_DENIED: the volume label needs administrator rights.</summary>
    private const int ErrorAccessDenied = 5;

    /// <summary>ERROR_CANCELLED: the user said no to the UAC prompt.</summary>
    private const int ErrorCancelledByUser = 1223;

    /// <summary>Characters Windows refuses in a volume label.</summary>
    private static readonly char[] InvalidLabelChars = ['\\', '/', ':', '*', '?', '"', '<', '>', '|'];

    private static readonly HashSet<string> PerFileIconExtensions = new(StringComparer.OrdinalIgnoreCase)
    {
        ".lnk",
        ".exe",
        ".ico",
        ".url",
        ".msi",
        ".appref-ms"
    };

    private static readonly SemaphoreSlim ThumbnailGate = new(Math.Clamp(Environment.ProcessorCount / 4, 2, 4));

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

            "fs.gallery" => Task.FromResult<NativeResponse?>(context.Reply("fs.gallery.result",
                GalleryPage(context.Payload<GalleryRequest>()))),

            "fs.thumbnail" => Task.FromResult<NativeResponse?>(context.Reply("fs.thumbnail.result",
                new IconPayload(Thumbnail(context.Payload<ThumbnailRequest>())))),

            "fs.recent" => Task.FromResult<NativeResponse?>(context.Reply("fs.recent.result",
                new FsRecentPayload(RecentService.Instance.List(SettingsService.Instance.Current.RecentCount)))),

            "fs.recent.clear" => Task.FromResult<NativeResponse?>(context.Reply("fs.recent.clear.result",
                new OkPayload(ClearRecent()))),

            "app.places.set" => Task.FromResult<NativeResponse?>(context.Reply("app.places.set.result",
                new FsPlacesPayload(SetPlaces(context.Payload<PlacesRequest>()?.Paths)))),

            "app.places.rename" => Task.FromResult<NativeResponse?>(context.Reply("app.places.set.result",
                new FsPlacesPayload(RenamePlace(context.Payload<PlaceRenameRequest>())))),

            "fs.watch" => Task.FromResult<NativeResponse?>(context.Reply("fs.watch.result",
                new OkPayload(Watch(context.Payload<FsWatchRequest>()?.Paths ?? [])))),

            "fs.drive.rename" => Task.FromResult<NativeResponse?>(context.Reply("fs.drive.rename.result",
                RenameDrive(context.Payload<DriveRenameRequest>()))),

            "fs.open" => Task.FromResult<NativeResponse?>(context.Reply("fs.open.result",
                new OkPayload(OpenFile(context.Payload<FsListRequest>()?.Path)))),

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

            "fs.recycle.admin.list" => ListOrphansAsAdmin(context),

            "fs.recycle.admin.purge" => PurgeOrphansAsAdmin(context),

            "app.settings" => Task.FromResult<NativeResponse?>(context.Reply("app.settings.result",
                SettingsService.Instance.Current)),

            "app.settings.set" => Task.FromResult<NativeResponse?>(context.Reply("app.settings.result",
                context.Payload<AppSettings>() is { } settings
                    ? SettingsService.Instance.Save(settings)
                    : SettingsService.Instance.Current)),

            "app.memory" => Task.FromResult<NativeResponse?>(context.Reply("app.memory.result",
                AppMemory.Report())),

            "app.memory.trim" => Task.FromResult<NativeResponse?>(context.Reply("app.memory.result",
                AppMemory.Trim())),

            "app.scheme" => Task.FromResult<NativeResponse?>(context.Reply("app.scheme.result",
                new SchemePayload(UrlScheme.IsRegistered()))),

            "app.scheme.set" => Task.FromResult<NativeResponse?>(context.Reply("app.scheme.result",
                new SchemePayload(SetScheme(context.Payload<SchemeRequest>()?.Enabled ?? false)))),

            "fs.list" => Task.FromResult<NativeResponse?>(context.Reply("fs.list.result",
                List(context.Payload<FsListRequest>()?.Path, context.Payload<FsListRequest>()?.Sizes ?? true))),

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
        if (request.Directory && settings.UseCustomFolderIcons && HasCustomFolderIcon(request.Path)
            && ShellIcon.DataUrl(request.Path, true, false) is { } custom)
            return custom;

        if (!settings.UseSystemIcons)
            return null;

        // Shortcuts and executables carry their icon in the file itself, so they must be looked up
        // for real; asking by extension would give every .lnk the same picture.
        var perFile = !request.Directory && PerFileIconExtensions.Contains(Path.GetExtension(request.Path));

        return ShellIcon.DataUrl(request.Path, request.Directory, !request.Directory && !perFile);
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

    /// <summary>One slice of the gallery, scanning the folders only when asked to.</summary>
    private static FsGalleryPayload GalleryPage(GalleryRequest? request)
    {
        var (entries, total) = Gallery.Instance.Page(request?.Offset ?? 0, request?.Count ?? 150,
            request?.Refresh ?? false);

        return new(entries, total);
    }

    /// <summary>A shell thumbnail for the gallery, at the requested size.</summary>
    private static string? Thumbnail(ThumbnailRequest? request)
    {
        if (request is not { Path.Length: > 0 } || !OperatingSystem.IsWindows())
            return null;

        var size = Math.Clamp(request.Size, 32, 512);

        // A thumbnail means decoding the whole picture inside this process. A screenful of tiles
        // would otherwise decode dozens of photos at once, so only a few run concurrently.
        ThumbnailGate.Wait();

        try
        {
            return ShellThumbnail.DataUrl(request.Path, size);
        }
        finally
        {
            ThumbnailGate.Release();
        }
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
                if (line.StartsWith("IconResource", StringComparison.OrdinalIgnoreCase)
                    || line.StartsWith("IconFile", StringComparison.OrdinalIgnoreCase))
                    return true;

            return false;
        }).GetOrElse(_ => false);
    }

    private static bool ClearRecent()
    {
        RecentService.Instance.Clear();
        return true;
    }

    /// <summary>Pins the given folders to Quick access, in order, and answers with the resulting list.</summary>
    private static List<PlaceEntry> SetPlaces(List<string>? paths)
    {
        SettingsService.Instance.Update(settings => settings with
        {
            QuickAccess = paths
        });

        return GetPlaces();
    }

    /// <summary>Renames one pinned folder; an empty name goes back to the folder's own name.</summary>
    private static List<PlaceEntry> RenamePlace(PlaceRenameRequest? request)
    {
        if (request is not { Path.Length: > 0 })
            return GetPlaces();

        var names = new Dictionary<string, string>(
            SettingsService.Instance.Current.PlaceNameOverrides, StringComparer.OrdinalIgnoreCase);

        if (string.IsNullOrWhiteSpace(request.Name))
            names.Remove(request.Path);
        else
            names[request.Path] = request.Name.Trim();

        SettingsService.Instance.Update(settings => settings with
        {
            PlaceNames = names
        });

        return GetPlaces();
    }

    /// <summary>
    ///     Renames a volume, the way Explorer does. Windows wants administrator rights for a fixed
    ///     volume, so the answer says so instead of only reporting a failure.
    /// </summary>
    private static DriveRenamePayload RenameDrive(DriveRenameRequest? request)
    {
        if (request is not { Root.Length: > 0 })
            return new(false, false, "The volume root is missing.");

        var label = request.Label?.Trim() ?? "";

        if (label.Length > 32 || label.IndexOfAny(InvalidLabelChars) >= 0)
            return new(false, false, "A volume label can be at most 32 characters and cannot contain \\ / : * ? \" < > |.");

        if (!OperatingSystem.IsWindows())
            return new(false, false, "Volume labels can only be changed on Windows.");

        if (SetVolumeLabel(request.Root, label))
            return new(true, false, null);

        var error = Marshal.GetLastWin32Error();

        return error == ErrorAccessDenied
            ? new(false, true, "Windows needs administrator rights to rename this volume.")
            : new(false, false, $"Windows refused the volume label (error {error}).");
    }

    [LibraryImport("kernel32.dll", EntryPoint = "SetVolumeLabelW", StringMarshalling = StringMarshalling.Utf16,
        SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool SetVolumeLabel(string root, string label);

    /// <summary>
    ///     Remembers the user's choice and applies it now. The stored flag is what lets the next
    ///     launch put a lost registry entry back.
    /// </summary>
    private static bool SetScheme(bool enabled)
    {
        SettingsService.Instance.Update(settings => settings with
        {
            LinksEnabled = enabled
        });

        return enabled ? UrlScheme.Register() : UrlScheme.Unregister();
    }

    /// <summary>Hands a file to the shell, which opens it with whatever the user made its default.</summary>
    private static bool OpenFile(string? path)
    {
        if (string.IsNullOrWhiteSpace(path) || !File.Exists(path))
            return false;

        RecentService.Instance.Record(path, false);

        return Try.Run(() => Process.Start(new ProcessStartInfo(path)
            {
                UseShellExecute = true
            }) is not null)
            .GetOrElse(ex =>
            {
                Serilog.Log.Warning(ex, "Could not open {Path}", path);
                return false;
            });
    }

    /// <summary>Points the folder watcher at the tab that is on screen.</summary>
    private static bool Watch(IReadOnlyList<string> paths)
    {
        DirectoryWatcher.Instance.Watch(paths);
        return true;
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

    /// <summary>
    ///     Runs the app once with administrator rights and answers with every leftover record it can
    ///     see — including the profiles and folders this window may not read.
    /// </summary>
    private static async Task<NativeResponse?> ListOrphansAsAdmin(NativeContext context)
    {
        var report = TempReportPath();
        var started = await RunElevatedAsync(Constants.OrphansReportArgument, report);

        if (!started)
            return context.Reply("fs.recycle.admin.list.result", new AdminOrphansPayload([], true, false));

        var entries = Try.Run(() => JsonSerializer.Deserialize(
                File.ReadAllText(report), AppJsonContext.Default.ListRecycleEntry))
            .OnFailure(ex => Instance.Log.Warning(ex, "Could not read the elevated report"))
            .GetOrNull();

        Try.Run(() => File.Delete(report));

        // Elevation worked but the report is unusable: say so instead of pretending the view is loaded.
        return entries is null
            ? context.Reply("fs.recycle.admin.list.result", new AdminOrphansPayload([], false, true))
            : context.Reply("fs.recycle.admin.list.result", new AdminOrphansPayload(entries, false, false));
    }

    /// <summary>Runs the same elevated helper with deletion enabled.</summary>
    private static async Task<NativeResponse?> PurgeOrphansAsAdmin(NativeContext context)
    {
        var report = TempReportPath();
        var started = await RunElevatedAsync(Constants.OrphansReportArgument, report,
            Constants.OrphansDeleteArgument);

        Try.Run(() => File.Delete(report));

        return context.Reply("fs.recycle.admin.purge.result", new OkPayload(started));
    }

    /// <summary>
    ///     Starts this executable elevated for one short-lived run. Windows shows the UAC prompt;
    ///     declining it is not an error, so the caller only learns that nothing happened.
    /// </summary>
    private static Task<bool> RunElevatedAsync(params string[] arguments) =>
        Task.Run(() =>
        {
            if (!OperatingSystem.IsWindows())
                return false;

            if (Environment.ProcessPath is not { Length: > 0 } executable)
                return false;

            var startInfo = new ProcessStartInfo(executable)
            {
                UseShellExecute = true,
                Verb = "runas"
            };

            foreach (var argument in arguments)
                startInfo.ArgumentList.Add(argument);

            try
            {
                using var process = Process.Start(startInfo);
                process?.WaitForExit();
                return process?.ExitCode == 0;
            }
            catch (Win32Exception ex) when (ex.NativeErrorCode == ErrorCancelledByUser)
            {
                Instance.Log.Information("The user declined the elevation prompt");
                return false;
            }
            catch (Exception ex)
            {
                Instance.Log.Warning(ex, "Could not start the elevated helper");
                return false;
            }
        });

    private static string TempReportPath() =>
        Path.Combine(Path.GetTempPath(), $"yafm-orphans-{Guid.NewGuid():N}.json");

    /// <summary>Lists a directory. A missing path starts at the user's home directory.</summary>
    private static FsListPayload List(string? path, bool measure = true)
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

        // Creating and migrating a database, hiding it and recording a visit all touch the disk. They
        // must never stand between the user and the listing, so they run behind it.
        if (settings.ShouldWriteDirectoryIndex)
            _ = Task.Run(() => DirectoryIndex.Ensure(directory.FullName));

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

        if (measure) RequestSizes(directory.FullName, entries);
        _ = Task.Run(() => RecentService.Instance.Record(directory.FullName));

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

    /// <summary>
    ///     The shortcuts shown above the drive list: the folders the user pinned in the settings, or
    ///     the well-known ones when nothing was pinned yet.
    /// </summary>
    private static List<PlaceEntry> GetPlaces()
    {
        var home = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
        var pinned = SettingsService.Instance.Current.PinnedPlaces;

        var paths = pinned is { Count: > 0 } ? pinned : DefaultPlaces(home);

        return
        [
            .. paths
                .Where(path => path.Length > 0 && Directory.Exists(path))
                .DistinctBy(path => path, StringComparer.OrdinalIgnoreCase)
                .Select(path => ToPlace(path, home))
        ];
    }

    private static PlaceEntry ToPlace(string path, string home)
    {
        var isHome = string.Equals(path.TrimEnd('\\', '/'), home.TrimEnd('\\', '/'), StringComparison.OrdinalIgnoreCase);

        // The user can rename a pinned folder; the path stays the key.
        var icon = SettingsService.Instance.Current.PlaceIconOverrides.GetValueOrDefault(path)
                   ?? DefaultPlaceIcon(path, home);

        if (SettingsService.Instance.Current.PlaceNameOverrides.TryGetValue(path, out var custom)
            && !string.IsNullOrWhiteSpace(custom))
            return new(custom.Trim(), path, isHome ? "home" : "folder", icon);

        var name = isHome
            ? "Home"
            : Try.Run(() => new DirectoryInfo(path).Name).GetOrElse(_ => path);

        return new(name.Length > 0 ? name : path, path, isHome ? "home" : "folder", icon);
    }

    /// <summary>The folders Windows calls the user's own, in Explorer's order.</summary>
    private static List<string> DefaultPlaces(string home) =>
    [
        home,
        Environment.GetFolderPath(Environment.SpecialFolder.DesktopDirectory),
        Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments),
        Path.Combine(home, "Downloads"),
        Environment.GetFolderPath(Environment.SpecialFolder.MyPictures),
        Environment.GetFolderPath(Environment.SpecialFolder.MyMusic),
        Environment.GetFolderPath(Environment.SpecialFolder.MyVideos)
    ];

    /// <summary>The icon a well-known folder gets before the user picks one.</summary>
    private static string? DefaultPlaceIcon(string path, string home)
    {
        var Same = (string folder) =>
            string.Equals(path.TrimEnd('\\', '/'), folder.TrimEnd('\\', '/'), StringComparison.OrdinalIgnoreCase);

        return Same(home) ? "home"
            : Same(Environment.GetFolderPath(Environment.SpecialFolder.DesktopDirectory)) ? "desktop"
            : Same(Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments)) ? "documents"
            : Same(Path.Combine(home, "Downloads")) ? "downloads"
            : Same(Environment.GetFolderPath(Environment.SpecialFolder.MyPictures)) ? "pictures"
            : Same(Environment.GetFolderPath(Environment.SpecialFolder.MyMusic)) ? "music"
            : Same(Environment.GetFolderPath(Environment.SpecialFolder.MyVideos)) ? "videos"
            : null;
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