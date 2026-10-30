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
public sealed record PlaceEntry(string Name, string Path, string Kind, string? Icon = null);

/// <summary>A mounted volume, shown in the sidebar.</summary>
public sealed record DriveEntry(string Name, string Label, string? Format, long TotalSize, long FreeSpace);

/// <summary>One picture in the gallery.</summary>
public sealed record GalleryEntry(string Path, string Name, long Modified, long Size);

/// <summary>A folder (or, later, a file) that was opened recently.</summary>
public sealed record RecentEntry(string Path, string Name, bool IsDirectory, long At);

/// <summary>One item in the recycle bin, as its metadata record describes it.</summary>
/// <param name="Id">Opaque handle: the path of the metadata record that describes the entry.</param>
/// <param name="IsOrphan">True when the content is gone and only the metadata record is left.</param>
/// <param name="Owner">The profile that owns the record, when it is not the current user.</param>
/// <param name="Removable">False for another profile's record, which this account normally cannot write.</param>
public sealed record RecycleEntry(
    string Id,
    string Name,
    string OriginalPath,
    long Size,
    long Deleted,
    bool IsDirectory,
    bool IsOrphan,
    string? Owner,
    bool Removable);
