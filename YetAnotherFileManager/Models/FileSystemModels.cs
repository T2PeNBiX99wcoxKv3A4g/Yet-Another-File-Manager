namespace YetAnotherFileManager.Models;

/// <summary>One row in a directory listing.</summary>
public sealed record FileEntry(
    string Name,
    string FullPath,
    bool IsDirectory,
    long Size,
    long Modified,
    bool IsHidden,
    bool IsSystem);

/// <summary>A shortcut to a well-known folder, shown in the sidebar.</summary>
public sealed record PlaceEntry(string Name, string Path, string Kind);

/// <summary>A mounted volume, shown in the sidebar.</summary>
public sealed record DriveEntry(string Name, string Label, string? Format, long TotalSize, long FreeSpace);

/// <summary>One item in the recycle bin, as its <c>$I</c> record describes it.</summary>
public sealed record RecycleEntry(
    string Name,
    string OriginalPath,
    long Size,
    long Deleted,
    bool IsDirectory);