using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Messaging;

// Response and event bodies. These are named records rather than anonymous types because the
// source-generated JSON context has to know every shape the app can ever serialize.

/// <summary>Body for a bare <c>{ "ok": true }</c> acknowledgement.</summary>
internal sealed record OkPayload(bool Ok = true);

/// <summary>Body for <c>app.info</c>.</summary>
internal sealed record AppInfoPayload(string Version, string Platform);

/// <summary>Payload for <c>fs.list</c>. An empty path means the user's home directory.</summary>
internal sealed record FsListRequest(string? Path);

/// <summary>
///     Body for <c>fs.list</c>: the directory that was listed, its parent (null at the root) and its
///     entries, folders first.
/// </summary>
internal sealed record FsListPayload(string Path, string? Parent, IReadOnlyList<FileEntry> Entries);

/// <summary>Body for <c>fs.places</c>.</summary>
internal sealed record FsPlacesPayload(IReadOnlyList<PlaceEntry> Places);

/// <summary>Body for <c>fs.drives</c>.</summary>
internal sealed record FsDrivesPayload(IReadOnlyList<DriveEntry> Drives);

/// <summary>
///     Body for the <c>app.navigate</c> event: the folder the window should show, and whether it came
///     from this launch's command line (which may take over the untouched first tab).
/// </summary>
internal sealed record NavigatePayload(string Path, bool Startup);

/// <summary>Body for the <c>window.state</c> event.</summary>
internal sealed record WindowStatePayload(bool Maximized);

/// <summary>Payload for <c>window.resize</c>: the edge being dragged.</summary>
internal sealed record WindowResizeRequest(string Direction);