using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Messaging;

// Response and event bodies. These are named records rather than anonymous types because the
// source-generated JSON context has to know every shape the app can ever serialize.

/// <summary>Body for a bare <c>{ "ok": true }</c> acknowledgement.</summary>
internal sealed record OkPayload(bool Ok = true);

/// <summary>Body for <c>app.info</c>.</summary>
internal sealed record AppInfoPayload(string Version, string Platform, bool Rounded);

/// <summary>Payload for <c>fs.list</c>. An empty path means the user's home directory.</summary>
internal sealed record FsListRequest(string? Path, bool? Sizes = true);

/// <summary>
///     Body for <c>fs.list</c>: the directory that was listed, its parent (null at the root), its
///     entries (folders first), and any cached folder sizes from the directory's own index.
/// </summary>
internal sealed record FsListPayload(
    string Path,
    string? Parent,
    IReadOnlyList<FileEntry> Entries,
    Dictionary<string, long> FolderSizes);

/// <summary>Body for <c>fs.places</c>.</summary>
internal sealed record FsPlacesPayload(IReadOnlyList<PlaceEntry> Places);

/// <summary>Body for <c>fs.drives</c>.</summary>
internal sealed record FsDrivesPayload(IReadOnlyList<DriveEntry> Drives);

/// <summary>Body for <c>fs.recycle</c>.</summary>
internal sealed record FsRecyclePayload(IReadOnlyList<RecycleEntry> Entries);

/// <summary>Payload for <c>fs.icon</c>: the path whose shell icon is wanted.</summary>
internal sealed record IconRequest(string Path, bool Directory);

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

/// <summary>Payload for <c>fs.thumbnail</c>: which picture, and how big the thumbnail should be.</summary>
internal sealed record ThumbnailRequest(string Path, int Size);

/// <summary>Body for <c>fs.recent</c>: the folders opened most recently.</summary>
internal sealed record FsRecentPayload(IReadOnlyList<RecentEntry> Entries);

/// <summary>Body for <c>fs.frequent</c>: the folders opened most often.</summary>
internal sealed record FsFrequentPayload(IReadOnlyList<FrequentEntry> Entries);

/// <summary>Payload for <c>app.places.set</c>: the folders to pin, in order.</summary>
internal sealed record PlacesRequest(List<string> Paths);

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

/// <summary>
///     Body for the <c>app.navigate</c> event: the folder the window should show, and whether it came
///     from this launch's command line (which may take over the untouched first tab).
/// </summary>
internal sealed record NavigatePayload(string Path, bool Startup);

/// <summary>Body for the <c>window.state</c> event.</summary>
internal sealed record WindowStatePayload(bool Maximized);

/// <summary>Payload for <c>window.resize</c>: the edge being dragged.</summary>
internal sealed record WindowResizeRequest(string Direction);