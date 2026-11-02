using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Messaging;

// Response and event bodies. These are named records rather than anonymous types because the
// source-generated JSON context has to know every shape the app can ever serialize.

/// <summary>Body for a bare <c>{ "ok": true }</c> acknowledgement.</summary>
internal sealed record OkPayload(bool Ok = true);

/// <summary>Body for <c>app.info</c>.</summary>
internal sealed record AppInfoPayload(string Version, string Platform, bool Rounded);

/// <summary>Payload for <c>fs.list</c>. An empty path means the user's home directory.</summary>
internal sealed record FsListRequest(string? Path, bool? Sizes = true, bool? IncludeLinks = false);

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
    Dictionary<string, long> Counts);

/// <summary>Payload for <c>fs.view.set</c>: how one directory is shown.</summary>
internal sealed record ViewRequest(string Directory, DirectoryView View);

/// <summary>Body for <c>app.thumbnails</c>: the base URL of the loopback thumbnail server.</summary>
internal sealed record ThumbnailServerPayload(string Base);

/// <summary>Payload for <c>fs.tags.set</c>: the tags of one entry, and optionally the tag colors.</summary>
internal sealed record TagsRequest(string Directory, string Name, List<string> Tags,
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
internal sealed record RecycleRequest(string Id);

/// <summary>Payload for <c>fs.recycle</c>: whether leftover metadata records are listed too.</summary>
internal sealed record RecycleListRequest(bool IncludeOrphans);

/// <summary>Payload for <c>fs.icon.set</c>: the icon recorded for one entry of a folder.</summary>
internal sealed record IconOverrideRequest(string Directory, string Name, string? Source);

/// <summary>Body for <c>fs.sizes</c>: folder sizes measured since the listing was sent.</summary>
internal sealed record FsSizesPayload(string Path, Dictionary<string, long> Sizes);

/// <summary>Body for <c>fs.counts</c>: child counts measured since the listing was sent.</summary>
internal sealed record FsCountsPayload(string Path, Dictionary<string, long> Counts);

/// <summary>Body for <c>app.pickIcon</c> and <c>app.pickFolder</c>: the chosen path, or null.</summary>
internal sealed record PathPayload(string? Path);

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
internal sealed record FsWatchRequest(List<string> Paths);

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
internal sealed record DeleteRequest(List<string> Paths, bool Permanent);

/// <summary>Payload for <c>fs.operation.rename</c>: the entry and its new name.</summary>
internal sealed record RenamePathRequest(string Path, string Name);

/// <summary>Payload for <c>fs.operation.newFolder</c> and <c>fs.clipboard.paste</c>.</summary>
internal sealed record DirectoryRequest(string Directory);

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

/// <summary>Payload for <c>fs.paths.info</c>: what the given paths are, for the tray's drop handler.</summary>
internal sealed record PathsInfoPayload(List<ClipboardEntry> Entries);

/// <summary>Payload for the recycle bin's batch restore/delete commands.</summary>
internal sealed record RecycleBatchRequest(List<string> Ids);

/// <summary>Body for a recycle bin batch command: how many entries were handled.</summary>
internal sealed record RecycleBatchPayload(bool Ok, int Done);

/// <summary>A tag the app has seen, for the Settings tag manager.</summary>
internal sealed record TagCatalogEntry(string Name, string? Color, int Folders);

/// <summary>Body for <c>app.tags</c>: every tag the catalogue knows.</summary>
internal sealed record TagsCatalogPayload(List<TagCatalogEntry> Tags);

/// <summary>Payload for <c>app.tags.delete</c>: the tag to remove everywhere.</summary>
internal sealed record TagDeleteRequest(string Name);

/// <summary>Persisted tag catalogue record; <c>Directories</c> lets a delete clean the indexes.</summary>
public sealed class TagRecord
{
    public string Name { get; set; } = "";
    public string? Color { get; set; }
    public List<string> Directories { get; set; } = [];
}