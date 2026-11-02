using System.Collections.Concurrent;
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

    /// <summary>
    ///     Types whose icon lives in the file itself or in the handler it is registered with. Asking
    ///     by extension would give every one of them the same generic shortcut/executable glyph.
    /// </summary>
    private static readonly HashSet<string> PerFileIconExtensions = new(StringComparer.OrdinalIgnoreCase)
    {
        ".lnk", ".url", ".website", ".pif", ".scf", ".application", ".appref-ms",
        ".exe", ".com", ".scr", ".cpl", ".msi", ".msp", ".mst", ".ico",
        ".appx", ".appxbundle", ".msix", ".msixbundle", ".appinstaller",
        ".gadget", ".settingcontent-ms", ".library-ms", ".searchconnector-ms", ".wsc",
        ".contact", ".diagcpl", ".diagpkg", ".diagcab", ".theme", ".themepack"
    };

    public FileSystemService() => NativeBridge.MessageReceived += HandleMessageAsync;

    private static async Task<NativeResponse?> HandleMessageAsync(NativeContext context)
    {
        switch (context.Request.Type)
        {
            case "fs.places":
                return context.Reply("fs.places.result", new FsPlacesPayload(await GetPlacesAsync()));

            case "fs.drives":
                return context.Reply("fs.drives.result", new FsDrivesPayload(await GetDrivesAsync()));

            case "fs.recycle":
                return context.Reply("fs.recycle.result", new FsRecyclePayload(
                    await RecycleBin.ListAsync(context.Payload<RecycleListRequest>()?.IncludeOrphans ?? false)));

            case "fs.visibility":
            {
                var visibility = await Task.Run(() => new FsVisibilityPayload(FileVisibility.ShowHidden,
                    FileVisibility.ShowSystem));
                return context.Reply("fs.visibility.result", visibility);
            }

            case "fs.hidden.toggle":
                return context.Reply("fs.hidden.toggle.result", await Task.Run(() =>
                    new HiddenFilesPayload(FileVisibility.ToggleHidden(), FileVisibility.ShowSystem,
                        FileVisibility.ShowHidden != FileVisibility.FollowsSystemHidden)));

            case "fs.gallery":
                return context.Reply("fs.gallery.result", await GalleryPageAsync(context.Payload<GalleryRequest>()));

            case "app.thumbnails":
                return context.Reply("app.thumbnails.result",
                    new ThumbnailServerPayload(ThumbnailServer.Instance.BaseUrl));

            case "fs.recent":
                return context.Reply("fs.recent.result", new FsRecentPayload(
                    await HistoryService.Instance.RecentAsync(SettingsService.Instance.Current.RecentCount)));

            case "fs.frequent":
                return context.Reply("fs.frequent.result",
                    new FsFrequentPayload(await HistoryService.Instance.FrequentAsync()));

            case "fs.frequent.record":
                await HistoryService.Instance.RecordFrequentAsync(context.Payload<PathPayload>()?.Path ?? "");
                return context.Reply("fs.frequent.record.result", new OkPayload(true));

            case "fs.recent.clear":
                await HistoryService.Instance.ClearRecentAsync();
                return context.Reply("fs.recent.clear.result", new OkPayload(true));

            case "fs.frequent.clear":
                await HistoryService.Instance.ClearFrequentAsync();
                return context.Reply("fs.frequent.clear.result", new OkPayload(true));

            case "app.places.set":
                return context.Reply("app.places.set.result",
                    new FsPlacesPayload(await SetPlacesAsync(context.Payload<PlacesRequest>()?.Paths)));

            case "app.places.rename":
                return context.Reply("app.places.set.result",
                    new FsPlacesPayload(await RenamePlaceAsync(context.Payload<PlaceRenameRequest>())));

            case "fs.watch":
                return context.Reply("fs.watch.result",
                    new OkPayload(Watch(context.Payload<FsWatchRequest>()?.Paths ?? [])));

            case "fs.drive.rename":
                return context.Reply("fs.drive.rename.result", await RenameDriveAsync(context.Payload<DriveRenameRequest>()));

            case "fs.open":
                return context.Reply("fs.open.result",
                    new OkPayload(await OpenFileAsync(context.Payload<FsListRequest>()?.Path)));

            case "fs.icon":
                return context.Reply("fs.icon.result", new IconPayload(await IconAsync(context.Payload<IconRequest>())));

            case "fs.iconFile":
                return context.Reply("fs.iconFile.result",
                    new IconPayload(await IconFileAsync(context.Payload<PathPayload>()?.Path)));

            case "fs.icon.set":
                return context.Reply("fs.icon.set.result",
                    new OkPayload(await SetIconOverrideAsync(context.Payload<IconOverrideRequest>())));

            case "fs.recycle.restore":
                return context.Reply("fs.recycle.restore.result",
                    new OkPayload(await RecycleBin.RestoreAsync(context.Payload<RecycleRequest>()?.Id ?? "")));

            case "fs.recycle.empty":
                await RecycleBin.EmptyAsync(context.Payload<RecycleListRequest>()?.IncludeOrphans ?? false);
                return context.Reply("fs.recycle.empty.result", new OkPayload(true));

            case "fs.recycle.delete":
                return context.Reply("fs.recycle.delete.result",
                    new OkPayload(await RecycleBin.DeleteAsync(context.Payload<RecycleRequest>()?.Id ?? "")));

            case "fs.recycle.admin.list":
                return await ListOrphansAsAdmin(context);

            case "fs.recycle.admin.purge":
                return await PurgeOrphansAsAdmin(context);

            case "app.settings":
                return context.Reply("app.settings.result", SettingsService.Instance.Current);

            case "app.settings.set":
                if (context.Payload<AppSettings>() is { } settings)
                    return context.Reply("app.settings.result", await SettingsService.Instance.UpdateAsync(current =>
                        settings with
                        {
                            // The settings page never edits tabs; the window owns them through app.tabs.set.
                            OpenTabs = current.OpenTabs,
                            ActiveTab = current.ActiveTab
                        }));

                return context.Reply("app.settings.result", SettingsService.Instance.Current);

            case "app.tabs.set":
                return context.Reply("app.tabs.set.result",
                    new OkPayload(await SaveOpenTabsAsync(context.Payload<OpenTabsRequest>())));

            case "app.memory":
                return context.Reply("app.memory.result", AppMemory.Report());

            case "app.memory.trim":
                return context.Reply("app.memory.result", await Task.Run(AppMemory.Trim));

            case "app.scheme":
                return context.Reply("app.scheme.result", new SchemePayload(await Task.Run(UrlScheme.IsRegistered)));

            case "app.scheme.set":
                return context.Reply("app.scheme.result",
                    new SchemePayload(await SetSchemeAsync(context.Payload<SchemeRequest>()?.Enabled ?? false)));

            case "fs.list":
                return context.Reply("fs.list.result",
                    await ListAsync(context.Payload<FsListRequest>()?.Path, context.Payload<FsListRequest>()?.Sizes ?? true,
                        context.Payload<FsListRequest>()?.IncludeLinks ?? false));

            case "fs.list.cached":
                return context.Reply("fs.list.cached.result",
                    await CachedListAsync(context.Payload<FsListRequest>()?.Path,
                        context.Payload<FsListRequest>()?.IncludeLinks ?? false));

            case "fs.view.set":
                return context.Reply("fs.view.set.result",
                    new OkPayload(await SaveViewAsync(context.Payload<ViewRequest>())));

            case "fs.tags.set":
                return context.Reply("fs.tags.set.result",
                    new OkPayload(await SaveTagsAsync(context.Payload<TagsRequest>())));

            case "fs.clipboard.copy":
                return context.Reply("fs.clipboard.copy.result",
                    new OkPayload(FileOperations.CopyToClipboard(context.Payload<PathsPayload>()?.Paths, false)));

            case "fs.clipboard.cut":
                return context.Reply("fs.clipboard.cut.result",
                    new OkPayload(FileOperations.CopyToClipboard(context.Payload<PathsPayload>()?.Paths, true)));

            case "fs.clipboard.hasFiles":
                return context.Reply("fs.clipboard.hasFiles.result",
                    new ClipboardFilesPayload(FileOperations.ClipboardHasFiles()));

            case "fs.clipboard.files":
                return context.Reply("fs.clipboard.files.result", FileOperations.ReadClipboardPayload());

            case "fs.paths.info":
                return context.Reply("fs.paths.info.result",
                    FileOperations.InspectPaths(context.Payload<PathsPayload>()?.Paths ?? []));

            case "fs.clipboard.paste":
                return context.Reply("fs.clipboard.paste.result",
                    new OkPayload(await FileOperations.PasteAsync(context.Payload<DirectoryRequest>()?.Directory ?? "")));

            case "fs.operation.delete":
            {
                var request = context.Payload<DeleteRequest>();
                return context.Reply("fs.operation.delete.result",
                    new OkPayload(await FileOperations.DeleteAsync(request?.Paths ?? [], request?.Permanent ?? false)));
            }

            case "fs.operation.rename":
                return context.Reply("fs.operation.rename.result",
                    await FileOperations.RenameAsync(context.Payload<RenamePathRequest>()?.Path ?? "",
                        context.Payload<RenamePathRequest>()?.Name ?? ""));

            case "fs.operation.newFolder":
                return context.Reply("fs.operation.newFolder.result",
                    await FileOperations.NewFolderAsync(context.Payload<DirectoryRequest>()?.Directory ?? ""));

            case "fs.operation.compress":
                return context.Reply("fs.operation.compress.result",
                    await FileOperations.CompressAsync(context.Payload<PathsPayload>()?.Paths ?? []));

            case "fs.operation.transfer":
                return context.Reply("fs.operation.transfer.result",
                    await FileOperations.TransferAsync(context.Payload<TransferRequest>()));

            case "app.tasks":
                return context.Reply("app.tasks.result", new TasksPayload(TaskCenter.Instance.Snapshot()));

            case "app.tasks.clear":
                TaskCenter.Instance.ClearFinished();
                return context.Reply("app.tasks.clear.result", new OkPayload());

            case "fs.operation.properties":
                await FileOperations.ShowPropertiesAsync(context.Payload<PathsPayload>()?.Paths ?? []);
                return context.Reply("fs.operation.properties.result", new OkPayload(true));

            case "fs.operation.openWith":
                await FileOperations.OpenWithAsync(context.Payload<PathPayload>()?.Path ?? "");
                return context.Reply("fs.operation.openWith.result", new OkPayload(true));

            case "fs.openWith.programs":
                return context.Reply("fs.openWith.programs.result",
                    await StaThread.RunAsync(() => AssociatedPrograms.Read(context.Payload<PathPayload>()?.Path ?? "")));

            case "fs.openWith.program":
            {
                var request = context.Payload<OpenWithProgramRequest>();
                return context.Reply("fs.openWith.program.result",
                    new OkPayload(AssociatedPrograms.Open(request?.FilePath ?? "", request?.ProgramPath ?? "")));
            }

            case "fs.history.state":
                return context.Reply("fs.history.state.result", FileHistory.Instance.State());

            case "fs.history.undo":
                return context.Reply("fs.history.undo.result", await FileHistory.Instance.UndoAsync());

            case "fs.history.redo":
                return context.Reply("fs.history.redo.result", await FileHistory.Instance.RedoAsync());

            case "fs.operation.terminal":
                await FileOperations.OpenTerminalAsync(context.Payload<PathPayload>()?.Path ?? "");
                return context.Reply("fs.operation.terminal.result", new OkPayload(true));

            case "fs.operation.showInExplorer":
                await FileOperations.ShowInExplorerAsync(context.Payload<PathPayload>()?.Path ?? "");
                return context.Reply("fs.operation.showInExplorer.result", new OkPayload(true));

            case "shell.verbs":
                return context.Reply("shell.verbs.result",
                    await ShellMenuClient.ReadAsync(context.Payload<PathsPayload>()?.Paths ?? []));

            case "shell.invoke":
            {
                var request = context.Payload<ShellInvokeRequest>();
                ShellMenuClient.Invoke(request?.Paths ?? [], request?.Safe ?? true, request?.Verb, request?.Offset ?? 0);
                return context.Reply("shell.invoke.result", new OkPayload(true));
            }

            default:
                return null;
        }
    }

    /// <summary>The icon the shell would show, or null when the settings and the shell have none.</summary>
    private static async Task<string?> IconAsync(IconRequest? request)
    {
        if (request is not { Path.Length: > 0 } || !OperatingSystem.IsWindows())
            return null;

        var settings = SettingsService.Instance.Current;

        // A folder's own icon (desktop.ini) is a system setting of that folder, so it stays visible
        // even when the generic system icons are turned off.
        if (request.Directory && settings.UseCustomFolderIcons && await HasCustomFolderIconAsync(request.Path)
            && await StaThread.RunAsync(() => request.Large
                ? ShellIcon.JumboDataUrl(request.Path, true, false)
                : ShellIcon.DataUrl(request.Path, true, false)) is { } custom)
            return custom;

        if (!settings.UseSystemIcons)
            return null;

        // Shortcuts and executables carry their icon in the file itself, so they must be looked up
        // for real; asking by extension would give every .lnk the same picture.
        var perFile = !request.Directory && PerFileIconExtensions.Contains(Path.GetExtension(request.Path));
        var byAttributes = !request.Directory && !perFile;

        // Per-file icon handlers need an STA caller; the thread pool silently gets a generic glyph.
        // The grid asks for the jumbo list so a large tile is not an upscaled 32px bitmap.
        return await StaThread.RunAsync(() => request.Large
            ? ShellIcon.JumboDataUrl(request.Path, request.Directory, byAttributes)
            : ShellIcon.DataUrl(request.Path, request.Directory, byAttributes));
    }

    /// <summary>An icon file chosen by the user, as a data URL.</summary>
    private static async Task<string?> IconFileAsync(string? path)
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

        var bytes = (await Try.Run(() => File.ReadAllBytesAsync(path))).GetOrNull();

        return bytes is null ? null : $"data:{media};base64,{Convert.ToBase64String(bytes)}";
    }

    /// <summary>Records (or clears) the icon of one entry in its folder's index.</summary>
    private static async Task<bool> SetIconOverrideAsync(IconOverrideRequest? request)
    {
        if (request is not { Directory.Length: > 0, Name.Length: > 0 })
            return false;

        if (!Directory.Exists(request.Directory))
            return false;

        return await DirectoryIndex.SetIconAsync(request.Directory, request.Name, request.Source);
    }

    /// <summary>One slice of the gallery, scanning the folders only when asked to.</summary>
    private static async Task<FsGalleryPayload> GalleryPageAsync(GalleryRequest? request)
    {
        var (entries, total) = await Gallery.Instance.PageAsync(request?.Offset ?? 0, request?.Count ?? 150,
            request?.Refresh ?? false);

        return new(entries, total);
    }

    /// <summary>Whether a folder defines its own icon, which Explorer reads from desktop.ini.</summary>
    private static async Task<bool> HasCustomFolderIconAsync(string directory)
    {
        var desktopIni = Path.Combine(directory, "desktop.ini");

        try
        {
            if (!File.Exists(desktopIni))
                return false;

            await foreach (var line in File.ReadLinesAsync(desktopIni))
                if (line.StartsWith("IconResource", StringComparison.OrdinalIgnoreCase)
                    || line.StartsWith("IconFile", StringComparison.OrdinalIgnoreCase))
                    return true;

            return false;
        }
        catch (Exception ex)
        {
            Serilog.Log.Debug(ex, "Could not read {Path}", desktopIni);
            return false;
        }
    }

    /// <summary>Pins the given folders to Quick access, in order, and answers with the resulting list.</summary>
    private static async Task<List<PlaceEntry>> SetPlacesAsync(List<string>? paths)
    {
        await SettingsService.Instance.UpdateAsync(settings => settings with
        {
            QuickAccess = paths
        });

        return await GetPlacesAsync();
    }

    /// <summary>Remembers the tabs that are open now, so the next launch can put the same ones back.</summary>
    private static async Task<bool> SaveOpenTabsAsync(OpenTabsRequest? request)
    {
        if (request is null)
            return false;

        // A cap keeps a misbehaving window from growing settings.json without bound.
        var tabs = request.Tabs.Where(tab => tab.Length > 0).Take(64).ToList();

        await SettingsService.Instance.UpdateAsync(settings => settings with
        {
            OpenTabs = tabs,
            ActiveTab = Math.Clamp(request.Active, 0, Math.Max(tabs.Count - 1, 0))
        });

        return true;
    }

    /// <summary>Remembers how one directory is shown.</summary>
    private static Task<bool> SaveViewAsync(ViewRequest? request) =>
        request is null || request.Directory.Length == 0
            ? Task.FromResult(false)
            : DirectoryIndex.SaveViewAsync(request.Directory, request.View);

    /// <summary>Stores the tags of one entry, and the tag colors when the picker sent them.</summary>
    private static async Task<bool> SaveTagsAsync(TagsRequest? request)
    {
        if (request is null || request.Directory.Length == 0 || request.Name.Length == 0)
            return false;

        var saved = await DirectoryIndex.SetTagsAsync(request.Directory, request.Name, request.Tags);

        if (request.Colors is { } colors)
            await DirectoryIndex.SaveTagColorsAsync(request.Directory, colors);

        return saved;
    }

    /// <summary>Renames one pinned folder; an empty name goes back to the folder's own name.</summary>
    private static async Task<List<PlaceEntry>> RenamePlaceAsync(PlaceRenameRequest? request)
    {
        if (request is not { Path.Length: > 0 })
            return await GetPlacesAsync();

        var names = new Dictionary<string, string>(
            SettingsService.Instance.Current.PlaceNameOverrides, StringComparer.OrdinalIgnoreCase);

        if (string.IsNullOrWhiteSpace(request.Name))
            names.Remove(request.Path);
        else
            names[request.Path] = request.Name.Trim();

        await SettingsService.Instance.UpdateAsync(settings => settings with
        {
            PlaceNames = names
        });

        return await GetPlacesAsync();
    }

    /// <summary>
    ///     Renames a volume, the way Explorer does. Windows wants administrator rights for a fixed
    ///     volume, so the answer says so instead of only reporting a failure.
    /// </summary>
    private static Task<DriveRenamePayload> RenameDriveAsync(DriveRenameRequest? request) =>
        Task.Run(() => RenameDrive(request));

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
    private static async Task<bool> SetSchemeAsync(bool enabled)
    {
        await SettingsService.Instance.UpdateAsync(settings => settings with
        {
            LinksEnabled = enabled
        });

        return await Task.Run(() => enabled ? UrlScheme.Register() : UrlScheme.Unregister());
    }

    /// <summary>Hands a file to the shell, which opens it with whatever the user made its default.</summary>
    private static async Task<bool> OpenFileAsync(string? path)
    {
        if (string.IsNullOrWhiteSpace(path) || !File.Exists(path))
            return false;

        await HistoryService.Instance.RecordRecentAsync(path, false);

        return await Task.Run(() => Try.Run(() => Process.Start(new ProcessStartInfo(path)
            {
                UseShellExecute = true
            }) is not null)
            .GetOrElse(ex =>
            {
                Serilog.Log.Warning(ex, "Could not open {Path}", path);
                return false;
            }));
    }

    /// <summary>Points the folder watcher at the tab that is on screen.</summary>
    private static bool Watch(IReadOnlyList<string> paths)
    {
        DirectoryWatcher.Instance.Watch(paths);
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

        var json = (await Try.Run(() => File.ReadAllTextAsync(report))).GetOrNull();
        var entries = json is null
            ? null
            : Try.Run(() => JsonSerializer.Deserialize(json, AppJsonContext.Default.ListRecycleEntry))
                .OnFailure(ex => Instance.Log.Warning(ex, "Could not read the elevated report"))
                .GetOrNull();

        await RemoveFileAsync(report);

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

        await RemoveFileAsync(report);

        return context.Reply("fs.recycle.admin.purge.result", new OkPayload(started));
    }

    private static Task RemoveFileAsync(string path) =>
        Task.Run(() =>
        {
            Try.Run(() => File.Delete(path))
                .OnFailure(ex => Instance.Log.Warning(ex, "Could not remove {Path}", path));
        });

    /// <summary>
    ///     Starts this executable elevated for one short-lived run. Windows shows the UAC prompt;
    ///     declining it is not an error, so the caller only learns that nothing happened.
    /// </summary>
    private static async Task<bool> RunElevatedAsync(params string[] arguments)
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
            if (process is null)
                return false;

            await process.WaitForExitAsync();
            return process.ExitCode == 0;
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
    }

    private static string TempReportPath() =>
        Path.Combine(Path.GetTempPath(), $"yafm-orphans-{Guid.NewGuid():N}.json");

    /// <summary>Lists a directory. A missing path starts at the user's home directory.</summary>
    private static async Task<FsListPayload> ListAsync(string? path, bool measure = true, bool includeLinks = false)
    {
        var target = ResolvePath(path);
        var directory = new DirectoryInfo(target);

        if (!directory.Exists)
            throw new DirectoryNotFoundException($"'{target}' is not a directory.");

        // Explorer's own switches, so the listing matches what the user's file manager shows.
        var (showHidden, showSystem) = await Task.Run(() => (FileVisibility.ShowHidden, FileVisibility.ShowSystem));

        // The index is best effort: reading it must never be able to fail a listing.
        await DirectoryIndex.EnsureHiddenAsync(directory.FullName);

        var metadata = await DirectoryIndex.ReadMetadataAsync(directory.FullName);
        var icons = metadata.Icons;
        var sizes = metadata.Sizes;
        var view = metadata.View;
        var tags = metadata.Tags;
        var tagColors = metadata.TagColors;
        var counts = metadata.Counts;
        var allTags = tags.Values
            .SelectMany(list => list)
            .Concat(tagColors.Keys)
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .OrderBy(name => name, StringComparer.OrdinalIgnoreCase)
            .ToList();

        // Everything is enumerated, hidden and system entries included, so the cache is complete;
        // the response only carries what the user's settings ask to see.
        var infos = await Task.Run(() => directory.EnumerateFileSystemInfos()
            .Where(info => !DirectoryIndex.IsIndexFile(info.Name))
            .ToList());

        // A hard-link count opens a handle per file, so only the visible Links column pays for it.
        // It runs in parallel because the handles are independent and this is the slow part.
        var links = new ConcurrentDictionary<string, int>(StringComparer.OrdinalIgnoreCase);

        if (includeLinks)
            await Task.Run(() => Parallel.ForEach(infos.OfType<FileInfo>(), file =>
            {
                var count = FileLinks.Count(file.FullName);
                if (count > 1)
                    links[file.FullName] = count;
            }));

        var all = await Task.Run(() => infos
            .Select(info => ToEntry(info, icons.GetValueOrDefault(info.Name), links.GetValueOrDefault(info.FullName)))
            .OfType<FileEntry>()
            .OrderByDescending(entry => entry.IsDirectory)
            .ThenBy(entry => entry.Name, StringComparer.OrdinalIgnoreCase)
            .ToList());

        // Shortcuts carry their target inside the file; the shell reader runs on the STA pool.
        all = await ResolveShortcutsAsync(all);

        // Storing is best effort and must not hold the listing back; the next open paints it first.
        _ = DirectoryIndex.SaveListingAsync(directory.FullName, all);

        var entries = showHidden && showSystem
            ? all
            : all.Where(entry => (showSystem || !entry.IsSystem) && (showHidden || !entry.IsHidden)).ToList();

        if (measure) RequestSizes(directory.FullName, entries);
        RequestCounts(directory.FullName, entries);
        _ = HistoryService.Instance.RecordRecentAsync(directory.FullName);

        return new(directory.FullName, directory.Parent?.FullName, entries, sizes, view, tags, tagColors, allTags, counts);
    }

    /// <summary>
    ///     The listing saved the last time this folder was opened, so the window can paint it before
    ///     the disk is walked again. It may be stale; the live listing replaces it right after.
    /// </summary>
    private static async Task<FsCachedListPayload> CachedListAsync(string? path, bool includeLinks = false)
    {
        var directory = new DirectoryInfo(ResolvePath(path));

        var entries = directory.Exists ? await DirectoryIndex.ListingAsync(directory.FullName) : null;
        if (entries is null)
            return new(false, null);

        var (showHidden, showSystem) = await Task.Run(() => (FileVisibility.ShowHidden, FileVisibility.ShowSystem));

        // The saved rows carry the icon of the last scan; the icon table may be newer.
        var metadata = await DirectoryIndex.ReadMetadataAsync(directory.FullName);
        var icons = metadata.Icons;
        var sizes = metadata.Sizes;
        var view = metadata.View;
        var tags = metadata.Tags;
        var tagColors = metadata.TagColors;
        var counts = metadata.Counts;
        var allTags = tags.Values
            .SelectMany(list => list)
            .Concat(tagColors.Keys)
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .OrderBy(name => name, StringComparer.OrdinalIgnoreCase)
            .ToList();

        var visible = entries
            .Where(entry => (showSystem || !entry.IsSystem) && (showHidden || !entry.IsHidden))
            .Select(entry => entry with { IconSource = icons.GetValueOrDefault(entry.Name) })
            .ToList();

        return new(true, new FsListPayload(directory.FullName, directory.Parent?.FullName, visible, sizes, view,
            tags, tagColors, allTags, counts));
    }

    /// <summary>Queues the folders of the listing that have no fresh measurement.</summary>
    private static void RequestSizes(string directory, List<FileEntry> entries)
    {
        var children = entries
            .Where(entry => entry.IsDirectory)
            .Select(entry => entry.Name)
            .ToList();

        if (children.Count > 0)
            FolderSizeService.Instance.Request(directory, children);
    }

    /// <summary>Queues the child directories whose item count is stale; counts stay with the folder.</summary>
    private static void RequestCounts(string directory, List<FileEntry> entries)
    {
        if (!SettingsService.Instance.Current.ShouldWriteDirectoryIndex)
            return;

        var children = entries
            .Where(entry => entry.IsDirectory)
            .Select(entry => entry.Name)
            .ToList();

        if (children.Count > 0)
            FolderCountService.Instance.Request(directory, children);
    }

    private static Task<List<PlaceEntry>> GetPlacesAsync() => Task.Run(GetPlaces);

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

    private static Task<List<DriveEntry>> GetDrivesAsync() => Task.Run(GetDrives);

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

    /// <summary>
    ///     Fills in the target of every <c>.lnk</c>, so a dead shortcut can be shown struck through.
    ///     The shell's shortcut reader needs an STA caller, so it runs on that pool.
    /// </summary>
    private static async Task<List<FileEntry>> ResolveShortcutsAsync(List<FileEntry> entries)
    {
        var shortcuts = entries
            .Where(entry => !entry.IsDirectory && entry.Name.EndsWith(".lnk", StringComparison.OrdinalIgnoreCase))
            .ToList();

        if (shortcuts.Count == 0)
            return entries;

        var resolved = await Task.WhenAll(shortcuts.Select(async entry =>
        {
            var (target, valid) = await StaThread.RunAsync(() => ShellLink.Resolve(entry.FullPath));
            return entry with { LinkTarget = target, LinkValid = valid };
        }));

        var byPath = resolved.ToDictionary(entry => entry.FullPath, StringComparer.OrdinalIgnoreCase);

        return entries.Select(entry => byPath.GetValueOrDefault(entry.FullPath) ?? entry).ToList();
    }

    /// <summary>
    ///     One entry, with the creation time and whatever Windows knows about a link. The hard-link
    ///     count needs a handle per file, which is why it only runs for files.
    /// </summary>
    private static FileEntry? ToEntry(FileSystemInfo info, string? iconSource, int linkCount) =>
        Try.Run(() =>
        {
            var attributes = info.Attributes;
            var (target, valid) = LinkOf(info, attributes);

            return new FileEntry(
                info.Name,
                info.FullName,
                info is DirectoryInfo,
                info is FileInfo file ? file.Length : 0,
                new DateTimeOffset(info.LastWriteTimeUtc).ToUnixTimeMilliseconds(),
                attributes.HasFlag(FileAttributes.Hidden),
                attributes.HasFlag(FileAttributes.System),
                iconSource,
                new DateTimeOffset(info.CreationTimeUtc).ToUnixTimeMilliseconds(),
                target,
                valid,
                linkCount);
        }).GetOrNull();

    /// <summary>
    ///     The destination of a symlink or junction and whether it still exists. Everything else
    ///     answers (null, null); checking the attributes first keeps ordinary files cheap.
    /// </summary>
    private static (string? Target, bool? Valid) LinkOf(FileSystemInfo info, FileAttributes attributes)
    {
        if (!attributes.HasFlag(FileAttributes.ReparsePoint))
            return (null, null);

        var resolved = Try.Run(() => info.ResolveLinkTarget(true)).GetOrNull();
        var target = resolved?.FullName ?? Try.Run(() => info.LinkTarget).GetOrNull();
        var valid = target is not null && (File.Exists(target) || Directory.Exists(target));

        return (target, valid);
    }
}
