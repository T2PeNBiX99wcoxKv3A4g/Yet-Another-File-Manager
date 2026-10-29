using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Messaging;

// Response and event bodies. These are named records rather than anonymous types because the
// source-generated JSON context has to know every shape the app can ever serialize.

/// <summary>Body for a bare <c>{ "ok": true }</c> acknowledgement.</summary>
internal sealed record OkPayload(bool Ok = true);

/// <summary>Body for <c>app.info</c>.</summary>
internal sealed record AppInfoPayload(string Version, string Platform, bool Rounded);

/// <summary>Payload for <c>fs.list</c>. An empty path means the user's home directory.</summary>
internal sealed record FsListRequest(string? Path);

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
/// <param name="Cancelled">True when the elevation prompt was declined, so nothing was read.</param>
internal sealed record AdminOrphansPayload(IReadOnlyList<RecycleEntry> Entries, bool Cancelled);

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