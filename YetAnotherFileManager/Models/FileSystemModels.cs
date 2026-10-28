namespace YetAnotherFileManager.Models;

/// <summary>One row in a directory listing.</summary>
public sealed record FileEntry(
    string Name,
    string FullPath,
    bool IsDirectory,
    long Size,
    long Modified,
    bool IsHidden,
    bool IsSystem,
    string? IconSource);

/// <summary>A shortcut to a well-known folder, shown in the sidebar.</summary>
public sealed record PlaceEntry(string Name, string Path, string Kind);

/// <summary>A mounted volume, shown in the sidebar.</summary>
public sealed record DriveEntry(string Name, string Label, string? Format, long TotalSize, long FreeSpace);

/// <summary>One item in the recycle bin, as its metadata record describes it.</summary>
/// <param name="Id">Opaque handle: the path of the metadata record that describes the entry.</param>
/// <param name="IsOrphan">True when the content is gone and only the metadata record is left.</param>
public sealed record RecycleEntry(
    string Id,
    string Name,
    string OriginalPath,
    long Size,
    long Deleted,
    bool IsDirectory,
    bool IsOrphan);
