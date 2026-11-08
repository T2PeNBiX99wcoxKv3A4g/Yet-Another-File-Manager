using System.Collections.Concurrent;
using System.ComponentModel;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
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
                return context.Reply("fs.hidden.toggle.result", await Task.Run(async () =>
                {
                    var showHidden = FileVisibility.ToggleHidden();
                    await SettingsService.Instance.UpdateAsync(settings => settings with {ShowHidden = showHidden});
                    return new HiddenFilesPayload(showHidden, FileVisibility.ShowSystem,
                        showHidden != FileVisibility.FollowsSystemHidden);
                }));

            case "fs.gallery":
                return context.Reply("fs.gallery.result", await GalleryPageAsync(context.Payload<GalleryRequest>()));

            case "app.thumbnails":
                return context.Reply("app.thumbnails.result",
                    new ThumbnailServerPayload(ThumbnailServer.Instance.BaseUrl));

            case "fs.recent":
                return context.Reply("fs.recent.result", new FsRecentPayload(                    await HistoryService.Instance.RecentAsync(SettingsService.Instance.Current.RecentCount)));

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
            {
                var request = context.Payload<RecycleListRequest>();
                var includeOrphans = request?.IncludeOrphans ?? false;
                var entries = await RecycleBin.ListAsync(includeOrphans);
                var originalPaths = entries.Where(entry => entry.Removable).Select(entry => entry.OriginalPath).ToList();

                if (GuardDelete(request?.Confirm, DeleteGuard.KeyForEmpty(includeOrphans), originalPaths) is { } blocked)
                    return context.Reply("fs.recycle.empty.result", blocked);

                await RecycleBin.EmptyAsync(includeOrphans);
                return context.Reply("fs.recycle.empty.result", new DeletePayload(true));
            }

            case "fs.recycle.delete":
            {
                var request = context.Payload<RecycleRequest>();
                var id = request?.Id ?? "";
                var entries = await RecycleBin.ListAsync(true);
                var originalPaths = entries.Where(entry => entry.Id == id).Select(entry => entry.OriginalPath).ToList();

                if (GuardDelete(request?.Confirm, DeleteGuard.KeyForRecycle([id]), originalPaths) is { } blocked)
                    return context.Reply("fs.recycle.delete.result", blocked);

                return context.Reply("fs.recycle.delete.result",
                    new DeletePayload(await RecycleBin.DeleteAsync(id)));
            }

            case "fs.recycle.restoreMany":
            {
                var ids = context.Payload<RecycleBatchRequest>()?.Ids ?? [];
                var done = await RecycleBin.RestoreManyAsync(ids);
                return context.Reply("fs.recycle.restoreMany.result",
                    new RecycleBatchPayload(done == ids.Count, done));
            }

            case "fs.recycle.deleteMany":
            {
                var request = context.Payload<RecycleBatchRequest>();
                var ids = request?.Ids ?? [];
                var entries = await RecycleBin.ListAsync(true);
                var originalPaths = entries.Where(entry => ids.Contains(entry.Id)).Select(entry => entry.OriginalPath).ToList();

                if (GuardDelete(request?.Confirm, DeleteGuard.KeyForRecycle(ids), originalPaths) is { } blocked)
                {
                    return context.Reply("fs.recycle.deleteMany.result",
                        new RecycleBatchPayload(false, 0, true, blocked.Token, blocked.Protected, blocked.DelaySeconds));
                }

                var done = await RecycleBin.DeleteManyAsync(ids);
                return context.Reply("fs.recycle.deleteMany.result",
                    new RecycleBatchPayload(done == ids.Count, done));
            }

            case "fs.recycle.properties":
                await RecycleBin.ShowPropertiesAsync(context.Payload<RecycleRequest>()?.Id ?? "");
                return context.Reply("fs.recycle.properties.result", new OkPayload());

            case "fs.recycle.admin.list":
                return await ListOrphansAsAdmin(context);

            case "fs.recycle.admin.purge":
                return await PurgeOrphansAsAdmin(context);

            case "app.settings":
                return context.Reply("app.settings.result", WithProtection(SettingsService.Instance.Current));

            case "app.protection.defaults":
                return context.Reply("app.protection.defaults.result",
                    new ProtectedDefaultsPayload(Protection.Defaults()));

            case "app.settings.set":
                if (context.Payload<AppSettings>() is { } settings)
                {
                    var saved = await SettingsService.Instance.UpdateAsync(current => settings with
                    {
                        // The settings page never edits tabs; the window owns them through app.tabs.set.
                        OpenTabs = current.OpenTabs,
                        ActiveTab = current.ActiveTab,
                        DirectoryIndexBlacklist = settings.DirectoryIndexBlacklist
                            ?? current.DirectoryIndexBlacklist
                            ?? YetAnotherFileManager.Services.DirectoryIndexBlacklist.Defaults(),
                        // Only app.scheme.set changes the link registration.
                        LinksEnabled = current.LinksEnabled
                    });

                    // The localization provider reloads the string table when the language changes.
                    DefaultFileManager.Apply(saved.IsDefaultFileManager);
                    ArchiveAssociations.Apply(saved.HandlesArchives);
                    GlobalHotkey.Apply(saved.GlobalHotkey);
                    WindowManager.Instance.Notify("settings.changed", new OkPayload());
                    return context.Reply("app.settings.result", WithProtection(saved));
                }

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

            case "app.archive.status":
                return context.Reply("app.archive.status.result", ArchiveAssociations.Status());

            case "app.defaultManager.status":
                return context.Reply("app.defaultManager.status.result", DefaultFileManager.Status());

            case "app.archive.register":
                await SettingsService.Instance.UpdateAsync(settings => settings with { ArchiveHandler = true });
                ArchiveAssociations.Apply(true);
                WindowManager.Instance.Notify("settings.changed", new OkPayload());
                return context.Reply("app.archive.register.result", ArchiveAssociations.Status());

            case "app.archive.unregister":
                await SettingsService.Instance.UpdateAsync(settings => settings with { ArchiveHandler = false });
                ArchiveAssociations.Apply(false);
                WindowManager.Instance.Notify("settings.changed", new OkPayload());
                return context.Reply("app.archive.unregister.result", ArchiveAssociations.Status());

            case "fs.list":
                return context.Reply("fs.list.result",
                    await ListAsync(context.Payload<FsListRequest>()?.Path, context.Payload<FsListRequest>()?.Sizes ?? true,
                        context.Payload<FsListRequest>()?.IncludeLinks ?? false,
                        context.Payload<FsListRequest>()?.CodePage ?? 0,
                        context.Payload<FsListRequest>()?.Password));

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
                    new OkPayload(FileOperations.CopyToClipboard(
                        await MapWorkspacePathsAsync(context.Payload<PathsPayload>()?.Paths ?? []), false)));

            case "fs.clipboard.cut":
                return context.Reply("fs.clipboard.cut.result",
                    new OkPayload(FileOperations.CopyToClipboard(
                        await MapWorkspacePathsAsync(context.Payload<PathsPayload>()?.Paths ?? []), true)));

            case "fs.clipboard.hasFiles":
                return context.Reply("fs.clipboard.hasFiles.result",
                    new ClipboardFilesPayload(FileOperations.ClipboardHasFiles()));

            case "fs.clipboard.files":
                return context.Reply("fs.clipboard.files.result", FileOperations.ReadClipboardPayload());

            case "fs.paths.info":
                return context.Reply("fs.paths.info.result",
                    FileOperations.InspectPaths(context.Payload<PathsPayload>()?.Paths ?? []));

            case "fs.clipboard.paste":
            {
                var directory = context.Payload<DirectoryRequest>()?.Directory ?? "";
                directory = await MapWorkspacePathAsync(directory, true);
                var pasted = await FileOperations.PasteAsync(directory);
                if (pasted) await ApplyArchiveChangesAsync([directory]);
                return context.Reply("fs.clipboard.paste.result", new OkPayload(pasted));
            }

            case "fs.operation.delete":
            {
                var request = context.Payload<DeleteRequest>();
                var paths = request?.Paths ?? [];
                var permanent = request?.Permanent ?? false;

                if (GuardDelete(request?.Confirm, DeleteGuard.KeyForDelete(paths, permanent), paths) is { } blocked)
                    return context.Reply("fs.operation.delete.result", blocked);

                paths = await MapWorkspacePathsAsync(paths);
                var deleted = await FileOperations.DeleteAsync(paths, permanent);
                if (deleted.Ok) await ApplyArchiveChangesAsync(paths);
                return context.Reply("fs.operation.delete.result", deleted);
            }

            case "fs.archive.extract":
            {
                var request = context.Payload<ArchiveExtractRequest>();

                if (request is null || !Archives.TrySplit(request.Path, out var archive, out _))
                {
                    return context.Reply("fs.archive.extract.result",
                        new ArchiveExtractPayload(false, "The path is not inside an archive."));
                }

                var extracted = await Task.Run(() =>
                {
                    try
                    {
                        Archives.Extract(archive, request.Target, request.CodePage ?? 0, request.Password);
                        return new ArchiveExtractPayload(true);
                    }
                    catch (Exception ex)
                    {
                        return new ArchiveExtractPayload(false, ex.Message);
                    }
                });

                return context.Reply("fs.archive.extract.result", extracted);
            }

            case "fs.archive.extractEntry":
            {
                var request = context.Payload<ArchivePathRequest>();
                try
                {
                    var path = await Task.Run(() => Archives.ExtractEntry(request?.Path ?? "", request?.CodePage ?? 0,
                        request?.Password));
                    return context.Reply("fs.archive.extractEntry.result", new ArchiveOpenPayload(path));
                }
                catch (Exception ex)
                {
                    return context.Reply("fs.archive.extractEntry.result", new ArchiveOpenPayload(null, ex.Message));
                }
            }

            case "fs.archive.apply":
            {
                var request = context.Payload<ArchivePathRequest>();
                var changed = Archives.HasWorkspace(request?.Path ?? "");
                var result = await Task.Run(() => Archives.ApplyChanges(request?.Path ?? "", out var error)
                    ? new ArchiveApplyPayload(true, changed)
                    : new ArchiveApplyPayload(false, false, error));
                return context.Reply("fs.archive.apply.result", result);
            }

            case "fs.operation.rename":
            {
                var request = context.Payload<RenamePathRequest>();
                var path = await MapWorkspacePathAsync(request?.Path ?? "");
                var result = await FileOperations.RenameAsync(path, request?.Name ?? "");
                var virtualPath = result.Path is null ? null : Archives.ToVirtualPath(result.Path);
                if (result.Ok) await ApplyArchiveChangesAsync([path]);
                return context.Reply("fs.operation.rename.result", result with {Path = virtualPath});
            }

            case "fs.operation.newFolder":
            {
                var request = context.Payload<NewFolderRequest>();
                var directory = await MapWorkspacePathAsync(request?.Directory ?? "", true);
                var result = await FileOperations.NewFolderAsync(directory, request?.CaseSensitive ?? false);
                var virtualPath = result.Path is null ? null : Archives.ToVirtualPath(result.Path);
                if (result.Ok) await ApplyArchiveChangesAsync([directory]);
                return context.Reply("fs.operation.newFolder.result", result with {Path = virtualPath});
            }

            case "fs.operation.newFile":
            {
                var request = context.Payload<NewFileRequest>();
                var directory = await MapWorkspacePathAsync(request?.Directory ?? "", true);
                var result = await FileOperations.NewFileAsync(directory, request?.Extension);
                var virtualPath = result.Path is null ? null : Archives.ToVirtualPath(result.Path);
                if (result.Ok) await ApplyArchiveChangesAsync([directory]);
                return context.Reply("fs.operation.newFile.result", result with {Path = virtualPath});
            }

            case "fs.caseSensitive.get":
                return context.Reply("fs.caseSensitive.get.result",
                    new CaseSensitivePayload(true, CaseFolders.Query(context.Payload<PathPayload>()?.Path ?? "")));

            case "fs.caseSensitive.set":
            {
                var request = context.Payload<CaseSensitiveRequest>();

                return context.Reply("fs.caseSensitive.set.result",
                    await Task.Run(() => CaseFolders.Set(request?.Path ?? "", request?.Enabled ?? false)));
            }

            case "fs.link.create":
            {
                var request = context.Payload<LinkRequest>();

                return context.Reply("fs.link.create.result", await CreateLinkAsync(request));
            }

            case "fs.preview.text":
            {
                var path = await ResolveArchiveEntryAsync(context.Payload<TextPreviewRequest>()?.Path ?? "");
                return context.Reply("fs.preview.text.result",
                    await FileOperations.PreviewTextAsync(path));
            }

            case "fs.operation.compress":
                return context.Reply("fs.operation.compress.result",
                    await FileOperations.CompressAsync(context.Payload<CompressRequest>()));

            case "fs.operation.transfer":
            {
                var request = context.Payload<TransferRequest>();
                if (request is null)
                    return context.Reply("fs.operation.transfer.result",
                        new TransferResultPayload(false, "Nothing to transfer.", []));

                var paths = await MapWorkspacePathsAsync(request.Paths);
                var target = await MapWorkspacePathAsync(request.Target, true);
                var result = await FileOperations.TransferAsync(request with {Paths = paths, Target = target});
                var created = result.Created.Select(Archives.ToVirtualPath).ToList();
                if (result.Ok) await ApplyArchiveChangesAsync([target]);
                return context.Reply("fs.operation.transfer.result", result with {Created = created});
            }

            case "app.tasks":
                return context.Reply("app.tasks.result", new TasksPayload(TaskCenter.Instance.Snapshot()));

            case "fs.index.tasks":
                return context.Reply("fs.index.tasks.result", FolderMeasureService.Instance.SnapshotTasks());

            case "app.tasks.clear":
                TaskCenter.Instance.ClearFinished();
                return context.Reply("app.tasks.clear.result", new OkPayload());

            case "app.tags":
                return context.Reply("app.tags.result",
                    new TagsCatalogPayload(TagCatalog.Instance.List().ToList()));

            case "app.tags.delete":
                return context.Reply("app.tags.delete.result",
                    new OkPayload(await TagCatalog.Instance.DeleteAsync(
                        context.Payload<TagDeleteRequest>()?.Name ?? "")));

            case "app.tags.rename":
                var renameTag = context.Payload<TagRenameRequest>();
                return context.Reply("app.tags.rename.result",
                    new OkPayload(await TagCatalog.Instance.RenameAsync(
                        renameTag?.OldName ?? "", renameTag?.NewName ?? "")));

            case "app.tags.create":
                var createTag = context.Payload<TagCreateRequest>();
                TagCatalog.Instance.Ensure(createTag?.Name ?? "", createTag?.Color);
                return context.Reply("app.tags.create.result",
                    new TagsCatalogPayload(TagCatalog.Instance.List().ToList()));

            case "app.tags.color":
                var colorTag = context.Payload<TagColorRequest>();
                return context.Reply("app.tags.color.result",
                    new OkPayload(TagCatalog.Instance.SetColor(colorTag?.Name ?? "", colorTag?.Color ?? "")));

            case "fs.operation.properties":
                await FileOperations.ShowPropertiesAsync(context.Payload<PathsPayload>()?.Paths ?? []);
                return context.Reply("fs.operation.properties.result", new OkPayload(true));

            case "fs.operation.openWith":
                await FileOperations.OpenWithAsync(context.Payload<PathPayload>()?.Path ?? "");
                return context.Reply("fs.operation.openWith.result", new OkPayload(true));

            case "fs.openWith.programs":
            {
                if (!OperatingSystem.IsWindows())
                    return context.Reply("fs.openWith.programs.result", new OpenWithProgramsPayload([], []));

                return context.Reply("fs.openWith.programs.result",
                    await ReadOpenWithAsync(context.Payload<PathPayload>()?.Path ?? ""));
            }

            case "fs.openWith.program":
            {
                var request = context.Payload<OpenWithProgramRequest>();

                if (!OperatingSystem.IsWindows())
                    return context.Reply("fs.openWith.program.result", new OkPayload(false));

                return context.Reply("fs.openWith.program.result",
                    new OkPayload(await OpenWithProgramAsync(request?.FilePath ?? "", request?.ProgramPath ?? "")));
            }

            case "fs.history.state":
                return context.Reply("fs.history.state.result", FileHistory.Instance.State());

            case "fs.history.undo":
                return context.Reply("fs.history.undo.result", await FileHistory.Instance.UndoAsync());

            case "fs.history.redo":
                return context.Reply("fs.history.redo.result", await FileHistory.Instance.RedoAsync());

            case "fs.history.list":
                return context.Reply("fs.history.list.result", FileHistory.Instance.List());

            case "fs.history.undoTo":
                return context.Reply("fs.history.undoTo.result",
                    await FileHistory.Instance.UndoToAsync(context.Payload<HistoryUndoRequest>()?.Id ?? 0));

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

    [SupportedOSPlatform("windows")]
    private static Task<OpenWithProgramsPayload> ReadOpenWithAsync(string path) =>
        StaThread.RunAsync(() => AssociatedPrograms.Read(path));

    [SupportedOSPlatform("windows")]
    private static Task<bool> OpenWithProgramAsync(string filePath, string programPath) =>
        StaThread.RunAsync(() => AssociatedPrograms.Open(filePath, programPath));

    /// <summary>The icon the shell would show, or null when the settings and the shell have none.</summary>
    private static async Task<string?> IconAsync(IconRequest? request)    {
        if (request is not { Path.Length: > 0 })
            return null;

        var settings = SettingsService.Instance.Current;

        // The setting is a hard off switch: no shell icon of any kind, including a folder's own
        // desktop.ini icon, is shown while it is off.
        if (!settings.UseSystemIcons)
            return null;

        if (OperatingSystem.IsLinux())
            return await LinuxIconAsync(request);

        if (!OperatingSystem.IsWindows())
            return null;

        return await WindowsIconAsync(request, settings);
    }

    [SupportedOSPlatform("linux")]
    private static Task<string?> LinuxIconAsync(IconRequest request) =>
        Task.Run(() => LinuxIcons.DataUrl(request.Path, request.Directory, request.Large));

    [SupportedOSPlatform("windows")]
    private static async Task<string?> WindowsIconAsync(IconRequest request, AppSettings settings)
    {
        // Shell icon lookups are native Windows paths: forward slashes make a real-path lookup fail
        // silently, while the attribute-based lookup happens to work.
        var path = request.Path.Replace('/', Path.DirectorySeparatorChar);

        // A folder's own icon (desktop.ini) is read from its path; the jumbo list is index-based and
        // can hand back a different image for a custom icon, so folders use the HICON directly.
        if (request.Directory && settings.UseCustomFolderIcons && await HasCustomFolderIconAsync(path)
            && await StaThread.RunAsync(() => ShellIcon.DataUrl(path, true, false)) is { } custom)
            return custom;

        // Shortcuts and executables carry their icon in the file itself, so they must be looked up
        // for real; asking by extension would give every .lnk the same picture.
        var perFile = !request.Directory && PerFileIconExtensions.Contains(Path.GetExtension(path));

        // Folders are asked by attribute too unless a desktop.ini icon was handled above. A real
        // folder lookup depends on the shell namespace and quietly returns nothing on some systems;
        // the attribute lookup always gives the normal Windows folder icon.
        var byAttributes = !perFile;

        // Per-file icon handlers need an STA caller; the thread pool silently gets a generic glyph.
        // Only files use the jumbo list; a folder's HICON is always the right one.
        return await StaThread.RunAsync(() => request.Large && !request.Directory
            ? ShellIcon.JumboDataUrl(path, false, byAttributes)
            : ShellIcon.DataUrl(path, request.Directory, byAttributes));
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

    /// <summary>Stores one entry's tags by id, creating catalogue entries for new names.</summary>
    private static async Task<bool> SaveTagsAsync(TagsRequest? request)
    {
        if (request is null || request.Directory.Length == 0 || request.Name.Length == 0)
            return false;

        var catalog = TagCatalog.Instance;
        var ids = catalog.ResolveIds(request.Tags, request.Colors);
        var saved = await DirectoryIndex.SetTagsAsync(request.Directory, request.Name, ids);

        if (saved)
            catalog.Record(request.Directory, request.Tags, request.Colors);

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

        return RenameWindowsDrive(request.Root, label);
    }

    [SupportedOSPlatform("windows")]
    private static DriveRenamePayload RenameWindowsDrive(string root, string label)
    {
        if (SetVolumeLabel(root, label))
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
        // Report what the registry actually ended up with, not what was asked for: Windows can
        // refuse the change, and a toggle that lies is worse than one that stays put.
        var effective = await Task.Run(() => enabled
            ? UrlScheme.Register() && UrlScheme.IsRegistered()
            : !UrlScheme.Unregister());

        await SettingsService.Instance.UpdateAsync(settings => settings with
        {
            LinksEnabled = effective
        });

        return effective;
    }

    /// <summary>Hands a file to the shell, which opens it with whatever the user made its default.</summary>
    private static async Task<bool> OpenFileAsync(string? path)
    {
        if (string.IsNullOrWhiteSpace(path))
            return false;

        path = await ResolveArchiveEntryAsync(path);

        if (!File.Exists(path)) return false;

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
    /// <summary>
    ///     Fills the defaults into the reply so the settings page can show the protected folders
    ///     without keeping a second copy of the list.
    /// </summary>
    private static AppSettings WithProtection(AppSettings settings) =>
        settings with
        {
            ProtectedPaths = Protection.Patterns(settings),
            DeleteDelaySeconds = Protection.DelaySeconds(settings)
        };

    /// <summary>Creates a link normally and asks for elevation only if Windows says it is required.</summary>
    private static async Task<LinkPayload> CreateLinkAsync(LinkRequest? request)
    {
        if (request is null || request.Source.Length == 0 || request.Link.Length == 0)
            return new LinkPayload(false, null, "No link was given.");

        if (!OperatingSystem.IsWindows())
            return new LinkPayload(false, null, "Creating links is a Windows feature.");

        var isDirectory = Directory.Exists(request.Source);

        if (!isDirectory && !File.Exists(request.Source))
            return new LinkPayload(false, null, "The source no longer exists.");

        if (request.Kind is LinkCopy.HardCopy or LinkCopy.SymbolicCopy or LinkCopy.SmartCopy
            or LinkCopy.SmartMirror or LinkCopy.MultiVersionSmartCopy)
        {
            if (!isDirectory)
                return new LinkPayload(false, null, "A link copy needs a folder source.");

            var copied = await Task.Run(() => LinkCopy.Create(request.Kind, request.Source, request.Link));
            return copied.Ok
                ? new LinkPayload(true, request.Link, null)
                : new LinkPayload(false, null, copied.Error);
        }

        var error = request.Kind switch
        {
            FileLinkCreation.Hard when isDirectory => "A hard link can only point at a file.",
            FileLinkCreation.Junction when !isDirectory => "A junction can only point at a folder.",
            FileLinkCreation.SymbolicFile when isDirectory => "A file link cannot point at a folder.",
            FileLinkCreation.SymbolicFolder when !isDirectory => "A folder link cannot point at a file.",
            _ => null,
        };

        if (error is not null)
            return new LinkPayload(false, null, error);

        var sourceToWrite = request.Source;
        if (request.Kind is FileLinkCreation.SymbolicFile or FileLinkCreation.SymbolicFolder
            && SettingsService.Instance.Current.UsesRelativeLinks)
        {
            var linkDirectory = Path.GetDirectoryName(Path.GetFullPath(request.Link));
            if (linkDirectory is { Length: > 0 })
                sourceToWrite = Path.GetRelativePath(linkDirectory, Path.GetFullPath(request.Source));
        }

        var result = await Task.Run(() => FileLinkCreation.Create(request.Kind, sourceToWrite, request.Link));
        if (result.Ok)
            return new LinkPayload(true, request.Link, null);

        var symbolic = request.Kind is FileLinkCreation.SymbolicFile or FileLinkCreation.SymbolicFolder;
        var needsElevation = result.ErrorCode is FileLinkCreation.ErrorAccessDenied
            or FileLinkCreation.ErrorPrivilegeNotHeld;

        if (symbolic && needsElevation
            && await RunElevatedAsync(Constants.CreateLinkArgument, request.Kind, sourceToWrite, request.Link))
            return new LinkPayload(true, request.Link, null);

        return new LinkPayload(false, null, result.Error);
    }

    /// <summary>
    ///     Blocks a delete that touches a protected path until the window confirms it after the
    ///     configured delay. Null means the operation may run; otherwise the body is the reply.
    /// </summary>
    private static DeletePayload? GuardDelete(string? confirm, string key, IReadOnlyList<string> paths)
    {
        var delay = Protection.DelaySeconds(SettingsService.Instance.Current);

        if (!string.IsNullOrEmpty(confirm))
        {
            if (DeleteGuard.Validate(confirm, key, delay, out var remaining))
                return null;

            var retryHits = Protection.Hits(paths);
            if (retryHits.Count == 0)
                return null;

            return new DeletePayload(false, Required: true,
                Token: remaining > 0 ? confirm : DeleteGuard.Issue(key),
                Protected: retryHits,
                DelaySeconds: remaining > 0 ? remaining : delay);
        }

        var hits = Protection.Hits(paths);
        if (hits.Count == 0)
            return null;

        return new DeletePayload(false, Required: true,
            Token: DeleteGuard.Issue(key),
            Protected: hits,
            DelaySeconds: delay);
    }

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
    /// <summary>Maps virtual archive entries to a writable per-archive staging directory.</summary>
    private static async Task<string> MapWorkspacePathAsync(string path, bool directory = false)
    {
        if (!Archives.TrySplit(path, out var archivePath, out _))
            return path;

        // The archive file itself remains a normal file unless the caller is treating it as the
        // virtual root directory (paste, drag-and-drop, or create-folder target).
        if (!directory && string.Equals(Path.GetFullPath(path), Path.GetFullPath(archivePath),
                StringComparison.OrdinalIgnoreCase))
            return path;

        return await Archives.WorkspacePathAsync(path) ?? path;
    }

    private static async Task<string> ResolveArchiveEntryAsync(string path)
    {
        if (Archives.TryGetWorkspacePath(path, out var staged) && File.Exists(staged))
            return staged;

        if (Archives.TrySplit(path, out _, out var inner) && inner.Length > 0)
            return await Task.Run(() => Archives.ExtractEntry(path));

        return path;
    }

    private static async Task<List<string>> MapWorkspacePathsAsync(IReadOnlyList<string> paths)
    {
        var mapped = new List<string>(paths.Count);
        foreach (var path in paths)
            mapped.Add(await MapWorkspacePathAsync(path));

        return mapped;
    }

    /// <summary>
    ///     Writes the staged archive back as soon as an edit finishes, so the archive on disk always
    ///     matches what the view shows and no separate "apply" step is needed.
    /// </summary>
    private static async Task ApplyArchiveChangesAsync(IReadOnlyList<string> paths)
    {
        var archives = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

        foreach (var path in paths)
            if (Archives.TryGetArchivePath(path, out var archive))
                archives.Add(archive);

        foreach (var archive in archives)
            await Task.Run(() =>
            {
                if (!Archives.ApplyChanges(archive, out var error))
                    Serilog.Log.Warning("Could not write the archive {Path}: {Error}", archive, error);
            });
    }

    private static async Task<FsListPayload> ListAsync(string? path, bool measure = true, bool includeLinks = false,
        int codePage = 0, string? password = null)
    {
        if (Archives.TryListWorkspace(path ?? "", out var workspaceListing))
            return workspaceListing;

        // An archive is opened as a virtual folder; its inner path is everything after the archive file.
        if (Archives.TrySplit(path ?? "", out var archivePath, out var inner))
            return await Task.Run(() => Archives.List(archivePath, inner, codePage, password));

        var target = ResolvePath(path);
        var directory = new DirectoryInfo(target);

        if (!directory.Exists)
            throw new DirectoryNotFoundException($"'{target}' is not a directory.");

        // A folder that moved to the central database may still contain an old hidden index from
        // before the rule was added; remove it so tools that scan the folder do not trip over it.
        if (DirectoryIndexBlacklist.Matches(directory.FullName, SettingsService.Instance.Current.DirectoryIndexBlacklist))
            await FolderIndex.DeleteFilesAsync(directory.FullName);

        // Explorer's own switches, so the listing matches what the user's file manager shows.
        var (showHidden, showSystem) = await Task.Run(() => (FileVisibility.ShowHidden, FileVisibility.ShowSystem));

        // The index is best effort: reading it must never be able to fail a listing.
        await DirectoryIndex.EnsureHiddenAsync(directory.FullName);

        var metadata = await DirectoryIndex.ReadMetadataAsync(directory.FullName);
        var icons = metadata.Icons;
        var sizes = metadata.Sizes;
        var view = metadata.View;
        var tags = metadata.Tags;
        var counts = metadata.Counts;

        // Tags are stored by id; the catalogue resolves them to names and owns the colours.
        var (resolvedTags, tagColors, allTags) = ResolveTags(directory.FullName, tags, metadata.TagColors);

        // Everything is enumerated, hidden and system entries included, so the cache is complete;
        // the response only carries what the user's settings ask to see.
        var infos = await Task.Run(() => directory.EnumerateFileSystemInfos()
            .Where(info => !DirectoryIndex.IsIndexFile(info.Name))
            .ToList());

        // A hard-link count opens a handle per file, so only the visible Links column pays for it.
        // On a slow volume thousands of handles can take longer than the whole listing; the column
        // stays empty there instead of blocking navigation.
        const int LinkLimit = 512;
        var links = new ConcurrentDictionary<string, int>(StringComparer.OrdinalIgnoreCase);

        if (OperatingSystem.IsWindows() && includeLinks && infos.Count <= LinkLimit)
            await CountLinksAsync(infos, links);

        var all = await Task.Run(() =>
        {
            // Attribute reads are independent; doing them in parallel keeps a directory with tens
            // of thousands of entries from spending its time in one managed loop.
            var built = new FileEntry?[infos.Count];

            Parallel.For(0, infos.Count, index =>
            {
                var info = infos[index];
                built[index] = ToEntry(info, icons.GetValueOrDefault(info.Name), links.GetValueOrDefault(info.FullName));
            });

            return built
                .OfType<FileEntry>()
                .OrderByDescending(entry => entry.IsDirectory)
                .ThenBy(entry => entry.Name, StringComparer.OrdinalIgnoreCase)
                .ToList();
        });

        // Shortcuts carry their target inside the file; the shell reader runs on the STA pool.
        if (OperatingSystem.IsWindows())
            all = await ResolveShortcutsAsync(all);

        // Storing is best effort and must not hold the listing back; the next open paints it first.
        _ = DirectoryIndex.SaveListingAsync(directory.FullName, all);

        var entries = showHidden && showSystem
            ? all
            : all.Where(entry => (showSystem || !entry.IsSystem) && (showHidden || !entry.IsHidden)).ToList();

        RequestMeasurements(directory.FullName, entries, measure);
        _ = HistoryService.Instance.RecordRecentAsync(directory.FullName);

        return new(directory.FullName, directory.Parent?.FullName, entries, sizes, view, resolvedTags, tagColors, allTags, counts);
    }

    /// <summary>
    ///     Turns the values stored in a folder index into tag ids (migrating legacy names), then back
    ///     into names for the interface. Colours always come from the catalogue, so a tag looks the
    ///     same in every folder.
    /// </summary>
    private static (Dictionary<string, List<string>> Tags, Dictionary<string, string> Colors, List<string> All)
        ResolveTags(string directory, Dictionary<string, List<string>> tags, Dictionary<string, string> tagColors)
    {
        var catalog = TagCatalog.Instance;
        var byName = new Dictionary<string, List<string>>(StringComparer.OrdinalIgnoreCase);
        var names = new List<string>();

        foreach (var (entry, values) in tags)
        {
            var ids = catalog.ResolveIds(values);
            var resolved = ids.Select(catalog.NameOf).OfType<string>().ToList();

            byName[entry] = resolved;
            names.AddRange(resolved);

            // Older indexes stored names; rewrite them with ids the first time they are listed.
            if (!values.SequenceEqual(ids, StringComparer.OrdinalIgnoreCase))
                _ = DirectoryIndex.SetTagsAsync(directory, entry, ids);
        }

        catalog.Record(directory, names.Concat(tagColors.Keys), tagColors);

        var colors = new Dictionary<string, string>(tagColors, StringComparer.OrdinalIgnoreCase);

        foreach (var (name, color) in catalog.Colors)
            colors[name] = color;

        var all = names
            .Concat(colors.Keys)
            .Concat(catalog.Names)
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .OrderBy(name => name, StringComparer.OrdinalIgnoreCase)
            .ToList();

        return (byName, colors, all);
    }

    /// <summary>
    ///     The listing saved the last time this folder was opened, so the window can paint it before
    ///     the disk is walked again. It may be stale; the live listing replaces it right after.
    /// </summary>
    private static async Task<FsCachedListPayload> CachedListAsync(string? path, bool includeLinks = false)
    {
        if (Archives.TrySplit(path ?? "", out _, out _))
            return new FsCachedListPayload(false, null);

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
        var counts = metadata.Counts;

        var (resolvedTags, tagColors, allTags) = ResolveTags(directory.FullName, tags, metadata.TagColors);

        var visible = entries
            .Where(entry => (showSystem || !entry.IsSystem) && (showHidden || !entry.IsHidden))
            .Select(entry => entry with { IconSource = icons.GetValueOrDefault(entry.Name) })
            .ToList();

        return new(true, new FsListPayload(directory.FullName, directory.Parent?.FullName, visible, sizes, view,
            resolvedTags, tagColors, allTags, counts));
    }

    /// <summary>Queues the child folders whose size or item count is stale.</summary>
    private static void RequestMeasurements(string directory, List<FileEntry> entries, bool sizes)
    {
        var settings = SettingsService.Instance.Current;
        var columns = settings.DefaultView?.Columns;
        var counts = settings.ShouldWriteDirectoryIndex
                     && (columns is null || columns.Contains("items", StringComparer.OrdinalIgnoreCase));

        if (!sizes && !counts)
            return;

        var children = entries
            .Where(entry => entry.IsDirectory)
            .Select(entry => entry.Name)
            .ToList();

        if (children.Count > 0)
            FolderMeasureService.Instance.Request(directory, children, counts);
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
            .Where(IsUserVolume)
            .Where(drive => Try.Run(() => drive.IsReady).GetOrNull())
            .Select(drive => Try.Run(() => new DriveEntry(
                drive.Name,
                drive.VolumeLabel,
                drive.DriveFormat,
                drive.TotalSize,
                drive.AvailableFreeSpace)).GetOrNull())
            .OfType<DriveEntry>()
    ];

    /// <summary>
    ///     Linux reports every mount, including /proc, /sys, tmpfs and AppImage sandboxes. Only the
    ///     volumes a user would browse belong in the sidebar; the boot and system mounts stay out.
    /// </summary>
    private static bool IsUserVolume(DriveInfo drive)
    {
        if (!OperatingSystem.IsLinux())
            return true;

        var name = drive.Name;
        var format = Try.Run(() => drive.DriveFormat).GetOrNull() ?? "";

        if (format is "tmpfs" or "devtmpfs" or "devpts" or "proc" or "sysfs" or "cgroup2" or "pstore"
            or "efivarfs" or "bpf" or "configfs" or "autofs" or "debugfs" or "tracefs" or "mqueue"
            or "hugetlbfs" or "fusectl" or "securityfs" or "selinuxfs" or "binfmt_misc" or "rpc_pipefs"
            or "fuse.portal" or "squashfs")
            return false;

        // AppImage and other one-off FUSE mounts have no place in the volume list.
        if (format.StartsWith("fuse.", StringComparison.OrdinalIgnoreCase))
            return false;

        if (name == "/")
            return true;

        if (name.StartsWith("/boot", StringComparison.Ordinal)
            || name.StartsWith("/proc", StringComparison.Ordinal)
            || name.StartsWith("/sys", StringComparison.Ordinal)
            || name.StartsWith("/dev", StringComparison.Ordinal)
            || name.StartsWith("/tmp", StringComparison.Ordinal)
            || name.StartsWith("/var/lib", StringComparison.Ordinal)
            || name.StartsWith("/snap", StringComparison.Ordinal))
            return false;

        // Removable media lives under /run/media; the rest of /run is runtime state.
        return !name.StartsWith("/run", StringComparison.Ordinal)
               || name.StartsWith("/run/media", StringComparison.Ordinal);
    }

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

    [SupportedOSPlatform("windows")]
    private static Task CountLinksAsync(IReadOnlyList<FileSystemInfo> infos,
        ConcurrentDictionary<string, int> links) =>
        Task.Run(() => CountLinks(infos, links));

    [SupportedOSPlatform("windows")]
    private static void CountLinks(IReadOnlyList<FileSystemInfo> infos, ConcurrentDictionary<string, int> links) =>
        Parallel.ForEach(infos.OfType<FileInfo>(), file =>
        {
            var count = FileLinks.Count(file.FullName);
            if (count > 1)
                links[file.FullName] = count;
        });

    /// <summary>
    ///     Fills in the target of every <c>.lnk</c>, so a dead shortcut can be shown struck through.
    ///     The shell's shortcut reader needs an STA caller, so it runs on that pool.
    /// </summary>
    [SupportedOSPlatform("windows")]
    private static async Task<List<FileEntry>> ResolveShortcutsAsync(List<FileEntry> entries)
    {
        var shortcuts = entries
            .Where(entry => !entry.IsDirectory && entry.Name.EndsWith(".lnk", StringComparison.OrdinalIgnoreCase))
            .ToList();

        if (shortcuts.Count == 0)
            return entries;

        var resolved = await Task.WhenAll(shortcuts.Select(async entry =>
        {
            var (target, valid) = await StaThread.RunAsync(() => Interop.ShellLink.Resolve(entry.FullPath));
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
