using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Messaging;

// Response and event bodies. These are named records rather than anonymous types because the
// source-generated JSON context has to know every shape the app can ever serialize.

/// <summary>Body for a bare <c>{ "ok": true }</c> acknowledgement.</summary>
internal sealed record OkPayload(bool Ok = true);

/// <summary>Payload for <c>app.openUrl</c>: the address to hand to the default browser.</summary>
internal sealed record UrlPayload(string Url);

/// <summary>Body for <c>app.info</c>.</summary>
internal sealed record AppInfoPayload(string Version, string Platform, bool Rounded, string LogDirectory,
    bool Debug);

/// <summary>Body for <c>app.fonts</c>: every family the operating system offers.</summary>
internal sealed record FontsPayload(IReadOnlyList<string> Fonts);

/// <summary>Payload for <c>fs.list</c>. An empty path means the user's home directory.</summary>
internal sealed record FsListRequest(
    string? Path,
    bool? Sizes = true,
    bool? IncludeLinks = false,
    int? CodePage = null,
    string? Password = null);

/// <summary>
///     Body for <c>fs.list</c>: the directory that was listed, its parent (null at the root), its
///     entries (folders first), and any cached folder sizes from the directory's own index.
/// </summary>
internal sealed record FsListPayload(
    string Path,
    string? Parent,
    IReadOnlyList<FileEntry> Entries,
    Dictionary<string, long> FolderSizes,
    DirectoryView? View,
    Dictionary<string, List<string>> Tags,
    Dictionary<string, string> TagColors,
    List<string> AllTags,
    Dictionary<string, long> Counts,
    // Set only for a folder inside an archive that needs a password.
    bool? ArchiveEncrypted = null);

/// <summary>Payload for <c>fs.view.set</c>: how one directory is shown.</summary>
internal sealed record ViewRequest(string Directory, DirectoryView View);

/// <summary>Body for <c>app.thumbnails</c>: the base URL of the loopback thumbnail server.</summary>
internal sealed record ThumbnailServerPayload(string Base);

/// <summary>Payload for <c>fs.tags.set</c>: the tags of one entry, and optionally the tag colors.</summary>
internal sealed record TagsRequest(
    string Directory,
    string Name,
    List<string> Tags,
    Dictionary<string, string>? Colors = null);

/// <summary>
///     Body for <c>fs.list.cached</c>: the listing saved the last time the folder was opened. When
///     the folder was never cached <c>Cached</c> is false and <c>Listing</c> is null.
/// </summary>
internal sealed record FsCachedListPayload(bool Cached, FsListPayload? Listing);

/// <summary>Body for <c>fs.places</c>.</summary>
internal sealed record FsPlacesPayload(IReadOnlyList<PlaceEntry> Places);

/// <summary>Body for <c>fs.drives</c>.</summary>
internal sealed record FsDrivesPayload(IReadOnlyList<DriveEntry> Drives);

/// <summary>Body for <c>fs.recycle</c>.</summary>
internal sealed record FsRecyclePayload(IReadOnlyList<RecycleEntry> Entries);

/// <summary>Payload for <c>fs.icon</c>: the path whose shell icon is wanted.</summary>
internal sealed record IconRequest(string Path, bool Directory, bool Large = false);

/// <summary>Body for <c>fs.icon</c>: a PNG data URL, or null when the shell has no icon.</summary>
internal sealed record IconPayload(string? DataUrl);

/// <summary>Payload for <c>fs.recycle.*</c> actions: the entry to act on.</summary>
internal sealed record RecycleRequest(string Id, string? Confirm = null);

/// <summary>Payload for <c>fs.recycle</c>: whether leftover metadata records are listed too.</summary>
internal sealed record RecycleListRequest(bool IncludeOrphans, string? Confirm = null);

/// <summary>Payload for <c>fs.icon.set</c>: the icon recorded for one entry of a folder.</summary>
internal sealed record IconOverrideRequest(string Directory, string Name, string? Source);

/// <summary>Body for <c>fs.sizes</c>: folder sizes measured since the listing was sent.</summary>
internal sealed record FsSizesPayload(string Path, Dictionary<string, long> Sizes);

/// <summary>Body for <c>fs.counts</c>: child counts measured since the listing was sent.</summary>
internal sealed record FsCountsPayload(string Path, Dictionary<string, long> Counts);

/**
 * Body for messages that carry a single path, such as the shell menu's working file.
 */
internal sealed record PathPayload(string? Path);

/// <summary>Payload for <c>pick.submit</c>: the paths the command line picker selected.</summary>
internal sealed record PickResultRequest(IReadOnlyList<string> Paths);

/// <summary>Payload for <c>pick.open</c>: which standalone picker to run, where, and its filter.</summary>
internal sealed record PickOpenRequest(string Mode, List<string>? Extensions, string? Initial);

/// <summary>Body for <c>pick.open</c>: the chosen paths, empty when the window was cancelled.</summary>
internal sealed record PickOpenPayload(List<string> Paths);

/// <summary>Body for <c>fs.recycle.admin.list</c>: what the elevated helper could see.</summary>
/// <param name="Cancelled">True when the user declined the elevation prompt.</param>
/// <param name="Failed">True when the helper ran but its report could not be read.</param>
internal sealed record AdminOrphansPayload(
    IReadOnlyList<RecycleEntry> Entries,
    bool Cancelled,
    bool Failed);

/// <summary>Body for <c>fs.gallery</c>: a slice of the pictures, newest first, plus the total.</summary>
internal sealed record FsGalleryPayload(IReadOnlyList<GalleryEntry> Entries, int Total);

/// <summary>Payload for <c>fs.gallery</c>: which slice to send, and whether to walk the folders again.</summary>
internal sealed record GalleryRequest(int Offset, int Count, bool Refresh);

/// <summary>Body for <c>fs.recent</c>: the folders opened most recently.</summary>
internal sealed record FsRecentPayload(IReadOnlyList<RecentEntry> Entries);

/// <summary>Body for <c>fs.index.tasks</c>: the folders waiting for a size/index walk.</summary>
internal sealed record IndexTasksPayload(int Count, IReadOnlyList<string> Directories);

/// <summary>Body for <c>fs.frequent</c>: the folders opened most often.</summary>
internal sealed record FsFrequentPayload(IReadOnlyList<FrequentEntry> Entries);

/// <summary>Payload for <c>app.places.set</c>: the folders to pin, in order.</summary>
internal sealed record PlacesRequest(List<string> Paths);

/// <summary>
///     Payload for <c>app.tabs.set</c>: the locations of the tabs that are open, and which one has
///     the focus. The host keeps them so the next launch can put the same tabs back.
/// </summary>
internal sealed record OpenTabsRequest(List<string> Tabs, int Active);

/// <summary>Payload for <c>app.places.rename</c>: which pinned folder, and its new name.</summary>
internal sealed record PlaceRenameRequest(string Path, string? Name);

/// <summary>Body for the <c>fs.changed</c> event: the folder whose contents changed.</summary>
internal sealed record FsChangedPayload(string Path);

/// <summary>Payload for <c>fs.drive.rename</c>: the volume root and its new label.</summary>
internal sealed record DriveRenameRequest(string Root, string Label);

/// <summary>
///     Body for <c>fs.drive.rename</c>: whether the label was written, whether Windows wanted
///     administrator rights, and a message for the interface when it was not.
/// </summary>
internal sealed record DriveRenamePayload(bool Ok, bool NeedsAdmin, string? Error);

/// <summary>Payload for <c>fs.watch</c>: every folder that is on screen right now.</summary>
internal sealed record FsWatchRequest(List<string> Paths, string? Owner = null);

/// <summary>Body for <c>app.memory</c>: what this process is using, in bytes.</summary>
internal sealed record MemoryPayload(long Managed, long Private, long WorkingSet, long Available);

/// <summary>Payload for <c>app.scheme.set</c>: whether this app should own <c>yafm://</c> links.</summary>
internal sealed record SchemeRequest(bool Enabled);

/// <summary>Body for <c>app.scheme</c>: whether <c>yafm://</c> links are registered.</summary>
internal sealed record SchemePayload(bool Registered);

/// <summary>Body for <c>fs.visibility</c>: the shell's hidden-item options.</summary>
internal sealed record FsVisibilityPayload(bool ShowHidden, bool ShowSystem);

/// <summary>Body for <c>fs.hidden.toggle</c>: the session's ordinary-hidden state.</summary>
internal sealed record HiddenFilesPayload(bool ShowHidden, bool ShowSystem, bool Overridden);

/// <summary>
///     Body for the <c>app.navigate</c> event: the folder the window should show, and whether it came
///     from this launch's command line (which may take over the untouched first tab).
/// </summary>
internal sealed record NavigatePayload(string Path, bool Startup);

/// <summary>Body for the <c>window.state</c> event.</summary>
internal sealed record WindowStatePayload(bool Maximized);

/// <summary>Payload for <c>window.resize</c>: the edge being dragged.</summary>
internal sealed record WindowResizeRequest(string Direction);

/// <summary>Payload for the clipboard and file-operation messages: the paths they act on.</summary>
internal sealed record PathsPayload(List<string> Paths);

/// <summary>Payload for <c>fs.operation.delete</c>: the paths and whether they bypass the recycle bin.</summary>
internal sealed record DeleteRequest(List<string> Paths, bool Permanent, string? Confirm = null);

/// <summary>
///     Answer for <c>fs.operation.delete</c>. <c>NeedsPermanent</c> says the volume's recycle bin is
///     turned off, so the selection would be deleted for good and the window has to ask first.
///     <c>Required</c> means a protected path matched and <c>Token</c> must be sent once the delay
///     has passed; <c>Protected</c> lists the exact paths and patterns for the dialog.
/// </summary>
internal sealed record DeletePayload(
    bool Ok,
    bool NeedsPermanent = false,
    string? Error = null,
    bool Required = false,
    string? Token = null,
    IReadOnlyList<ProtectedHit>? Protected = null,
    int DelaySeconds = 0);

/// <summary>One path a protected-folder pattern intercepted, and the pattern responsible.</summary>
internal sealed record ProtectedHit(string Path, string Pattern);

/// <summary>Payload for <c>fs.archive.extract</c>: the archive (or a folder inside it) and where to write.</summary>
internal sealed record ArchiveExtractRequest(string Path, string Target, int? CodePage = null, string? Password = null);

/// <summary>Body for <c>fs.archive.extract</c>.</summary>
internal sealed record ArchiveExtractPayload(bool Ok, string? Error = null);

/// <summary>Payload for opening one file or applying edits to an archive.</summary>
internal sealed record ArchivePathRequest(string Path, int? CodePage = null, string? Password = null);

/// <summary>Result of rebuilding a staged archive.</summary>
internal sealed record ArchiveApplyPayload(bool Ok, bool Changed, string? Error = null);

/// <summary>Whether the archive ProgId exists and still points at this executable.</summary>
internal sealed record ArchiveStatusPayload(bool Registered, bool PathMatches, string? RegisteredPath);

/// <summary>Whether the current user's folder handler still points at this executable.</summary>
internal sealed record DefaultManagerStatusPayload(bool Registered, bool PathMatches, string? RegisteredPath);

/// <summary>Body for <c>app.defaultManager.set</c>: turn the folder handler on or off.</summary>
internal sealed record DefaultManagerRequest(bool Enabled);

/// <summary>Physical path of a temporary archive entry, or why it could not be extracted.</summary>
internal sealed record ArchiveOpenPayload(string? Path, string? Error = null);

/// <summary>Selected paths and output options for <c>fs.operation.compress</c>.</summary>
internal sealed record CompressRequest(
    List<string> Paths,
    string Directory,
    string Name,
    string Format,
    int Level,
    string? Method = null,
    string? Encryption = null,
    string? Password = null,
    long? SplitSize = null);

/// <summary>Body for <c>app.protection.defaults</c>: the rules a fresh install starts with.</summary>
internal sealed record ProtectedDefaultsPayload(List<string> Paths);

/// <summary>Payload for <c>fs.operation.rename</c>: the entry and its new name.</summary>
internal sealed record RenamePathRequest(string Path, string Name);

/// <summary>Payload for <c>fs.operation.newFolder</c> and <c>fs.clipboard.paste</c>.</summary>
internal sealed record DirectoryRequest(string Directory);

/// <summary>Body for <c>fs.operation.newFile</c>: the folder and an optional file extension.</summary>
internal sealed record NewFileRequest(string Directory, string? Extension);

/// <summary>Body for <c>fs.operation.newFolder</c>; case-sensitive folders need an empty folder.</summary>
internal sealed record NewFolderRequest(string Directory, bool? CaseSensitive = false);

/// <summary>Body for <c>fs.caseSensitive.set</c>: the folder and the state to switch to.</summary>
internal sealed record CaseSensitiveRequest(string Path, bool Enabled);

/// <summary>Body for <c>fs.caseSensitive.get</c> and <c>fs.caseSensitive.set</c>.</summary>
internal sealed record CaseSensitivePayload(bool Ok, bool Enabled, string? Error = null);

/// <summary>Body for <c>fs.link.create</c>: link kind, what it points at, and where it goes.</summary>
internal sealed record LinkRequest(string Kind, string Source, string Link);

/// <summary>Body for <c>fs.link.create</c>.</summary>
internal sealed record LinkPayload(bool Ok, string? Link = null, string? Error = null);

/// <summary>Body for <c>fs.operation.rename</c> and <c>fs.operation.newFolder</c>.</summary>
internal sealed record PathOperationPayload(bool Ok, string? Path, string? Error);

/// <summary>Body for <c>fs.clipboard.hasFiles</c>.</summary>
internal sealed record ClipboardFilesPayload(bool HasFiles);

/// <summary>
///     One command extracted from the shell's context menu. <paramref name="Group" /> is the
///     submenu label it came from, and <paramref name="Depth" /> keeps its nesting visible in the
///     interface's flat menu. <paramref name="GroupPath" /> is the whole chain of submenu labels,
///     so nested submenus can be rebuilt exactly.
/// </summary>
internal sealed record ShellVerb(
    string Label,
    string? Verb,
    int Offset,
    string? Icon,
    bool Enabled,
    bool Checked,
    string? Group,
    int Depth,
    List<string>? GroupPath = null);

/// <summary>Body for <c>shell.verbs</c>: everything that could be read without showing a menu.</summary>
internal sealed record ShellVerbsPayload(List<ShellVerb> Verbs, bool Safe);

/// <summary>Payload for <c>shell.invoke</c>: the command to run for the selected paths.</summary>
internal sealed record ShellInvokeRequest(List<string> Paths, string? Verb, int Offset, bool Safe);

/// <summary>One application that can open a file, for the Open with submenu.</summary>
internal sealed record OpenWithProgram(string Name, string Path, string? Icon);

/// <summary>Body for <c>fs.openWith.programs</c>: recommended and additional applications.</summary>
internal sealed record OpenWithProgramsPayload(
    IReadOnlyList<OpenWithProgram> Recommended,
    IReadOnlyList<OpenWithProgram> Other);

/// <summary>Payload for <c>fs.openWith.program</c>: the file and the application chosen for it.</summary>
internal sealed record OpenWithProgramRequest(string FilePath, string ProgramPath);

/// <summary>Body for <c>fs.history.state</c>: what undo and redo would do next.</summary>
internal sealed record HistoryStatePayload(bool CanUndo, bool CanRedo, string? UndoLabel, string? RedoLabel);

/// <summary>Body for <c>fs.history.undo</c> and <c>fs.history.redo</c>.</summary>
internal sealed record HistoryOperationPayload(bool Ok, string? Error, List<string> Paths);

/// <summary>One row of the history panel; <c>Applied</c> entries can still be undone.</summary>
internal sealed record HistoryEntryPayload(
    long Id,
    string Label,
    IReadOnlyList<string> Paths,
    long At,
    bool Applied,
    bool Restorable = true);

/// <summary>Body for <c>fs.history.list</c>: the session's operations, newest first.</summary>
internal sealed record HistoryListPayload(IReadOnlyList<HistoryEntryPayload> Entries);

/// <summary>Payload for <c>fs.history.undoTo</c>: the row whose undo button was clicked.</summary>
internal sealed record HistoryUndoRequest(long Id);

/// <summary>One operation the status center shows.</summary>
internal sealed record TaskInfo(
    string Id,
    string Kind,
    string Label,
    string State,
    int Total,
    int Done,
    long BytesTotal,
    long BytesDone,
    string? Error,
    long StartedAt,
    long FinishedAt);

/// <summary>Body for <c>app.tasks</c> and the <c>app.tasks.changed</c> event.</summary>
internal sealed record TasksPayload(IReadOnlyList<TaskInfo> Tasks);

/// <summary>Payload for <c>fs.operation.transfer</c>: what to move or copy, and where.</summary>
internal sealed record TransferRequest(List<string> Paths, string Target, bool Move);

/// <summary>Body for <c>fs.operation.transfer</c>: the top-level paths that were created.</summary>
internal sealed record TransferResultPayload(bool Ok, string? Error, List<string> Created);

/// <summary>One entry the clipboard carries, with enough detail to draw it in the tray.</summary>
internal sealed record ClipboardEntry(string Path, string Name, bool IsDirectory, bool Exists);

/// <summary>
///     Body for <c>fs.clipboard.files</c>. <paramref name="Sequence" /> is the clipboard sequence
///     number, so the interface only reacts when the clipboard actually changed.
/// </summary>
internal sealed record ClipboardPathsPayload(List<ClipboardEntry> Entries, bool Move, uint Sequence);

/// <summary>Body for <c>fs.clipboard.paste</c>: whether anything was pasted and the entries it created.</summary>
internal sealed record ClipboardPastePayload(bool Ok, List<string> Created);

/// <summary>Payload for <c>fs.paths.info</c>: what the given paths are, for the tray's drop handler.</summary>
internal sealed record PathsInfoPayload(List<ClipboardEntry> Entries);

/// <summary>Payload for the recycle bin's batch restore/delete commands.</summary>
internal sealed record RecycleBatchRequest(List<string> Ids, string? Confirm = null);

/// <summary>Body for a recycle bin batch command: how many entries were handled.</summary>
internal sealed record RecycleBatchPayload(
    bool Ok,
    int Done,
    bool Required = false,
    string? Token = null,
    IReadOnlyList<ProtectedHit>? Protected = null,
    int DelaySeconds = 0);

/// <summary>A tag the app has seen, for the Settings tag manager.</summary>
internal sealed record TagCatalogEntry(string Id, string Name, string? Color, int Folders);

/// <summary>Body for <c>app.tags</c>: every tag the catalogue knows.</summary>
internal sealed record TagsCatalogPayload(List<TagCatalogEntry> Tags);

/// <summary>Payload for <c>app.tags.delete</c>: the tag to remove everywhere.</summary>
internal sealed record TagDeleteRequest(string Name);

/// <summary>Payload for <c>app.tags.rename</c>: the tag's old and new names.</summary>
internal sealed record TagRenameRequest(string OldName, string NewName);

/// <summary>Payload for <c>app.tags.create</c>: the new tag's name and colour.</summary>
internal sealed record TagCreateRequest(string Name, string? Color);

/// <summary>Payload for <c>app.tags.color</c>: the tag and its new colour.</summary>
internal sealed record TagColorRequest(string Name, string Color);

/// <summary>Payload for <c>fs.preview.text</c>: the path whose text should be read.</summary>
internal sealed record TextPreviewRequest(string Path);

/// <summary>The first part of a text file, or why it cannot be shown as text.</summary>
internal sealed record TextPreviewPayload(string? Text, bool Truncated, string? Error);

/// <summary>Persisted tag catalogue record; <c>Directories</c> lets a delete clean the indexes.</summary>
public sealed class TagRecord
{
    public string Id { get; set; } = "";
    public string Name { get; set; } = "";
    public string? Color { get; set; }
    public List<string> Directories { get; set; } = [];
}

// ---- sharing --------------------------------------------------------------------------------

/// <summary>Body for <c>share.list</c>: the folders this device shares and the web server state.</summary>
internal sealed record ShareListPayload(
    IReadOnlyList<ShareEntry> Shares,
    bool WebRunning,
    int WebPort,
    IReadOnlyList<string> Urls,
    string DeviceId,
    string DeviceName,
    string Fingerprint);

/// <summary>Payload for <c>share.add</c>: a folder and how it is shared.</summary>
internal sealed record ShareAddRequest(string? Path, string? Mode);

/// <summary>Payload for <c>share.remove</c> and <c>share.mode</c>.</summary>
internal sealed record ShareIdRequest(string Id);

/// <summary>Payload for <c>share.mode</c>: the share and its new mode.</summary>
internal sealed record ShareModeRequest(string Id, string Mode);

/// <summary>Body for <c>share.peers</c> and the pushed <c>share.peers</c> event.</summary>
internal sealed record SharePeersPayload(IReadOnlyList<SharePeerInfo> Peers);

/// <summary>Payload for <c>share.pair.start</c>: a discovered device's address.</summary>
internal sealed record SharePairStartRequest(string Host, int Port);

/// <summary>Payload for <c>share.pair.respond</c>: the prompt and the user's answer.</summary>
internal sealed record SharePairRespondRequest(string RequestId, bool Accept);

/// <summary>Pushed when another device asks to pair.</summary>
internal sealed record SharePairRequestPayload(string RequestId, string DeviceId, string DeviceName, string Code);

/// <summary>Pushed to the device that started a pairing, so it can show the same code.</summary>
internal sealed record SharePairCodePayload(string Code, string DeviceId, string DeviceName);

/// <summary>Pushed when a pairing finishes or fails.</summary>
internal sealed record SharePairResultPayload(bool Ok, string? DeviceId, string? DeviceName, string? Error);

/// <summary>Payload for <c>share.peer.remove</c>.</summary>
internal sealed record SharePeerRemoveRequest(string DeviceId);

/// <summary>Payload for <c>share.browse</c>: a paired device's share and relative folder.</summary>
internal sealed record ShareBrowseRequest(string DeviceId, string ShareId, string? Path);

/// <summary>Body for <c>share.browse</c>: one remote folder.</summary>
internal sealed record ShareBrowsePayload(
    string DeviceId,
    string ShareId,
    string Path,
    string? Parent,
    IReadOnlyList<FileEntry> Entries);

/// <summary>Payload for <c>share.download</c>: a file inside a paired device's share.</summary>
internal sealed record ShareDownloadRequest(string DeviceId, string ShareId, string Path);

/// <summary>Body for <c>share.download</c>: the local copy, or why it failed.</summary>
internal sealed record ShareDownloadPayload(string? LocalPath, string? Error);

/// <summary>Payload for <c>share.port</c>: "random" or "custom" and the custom port.</summary>
internal sealed record SharePortRequest(string? Mode, int? Port);

/// <summary>Payload for <c>app.startup.set</c>: "none", "shortcut" or "task".</summary>
internal sealed record StartupSetRequest(string? Mode);

/// <summary>Body for <c>app.startup</c>: the supported platforms, the mode, and whether it exists.</summary>
internal sealed record StartupStatusPayload(bool Supported, string Mode, bool Active, string? Error);

/// <summary>Payload for <c>ui.state.set</c>: the values to store, keyed by name.</summary>
internal sealed record UiStateSetRequest(Dictionary<string, string>? Entries);
