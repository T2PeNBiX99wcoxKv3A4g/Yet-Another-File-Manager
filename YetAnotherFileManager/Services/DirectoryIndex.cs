using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The directory index the rest of the app talks to. It holds per-entry icons, cached folder
///     sizes and the last listing of a directory, and it lives either in a <c>.yafm-index.db</c>
///     beside the files or in the central database, depending on the user's choice.
/// </summary>
internal static class DirectoryIndex
{
    public const string FileName = FolderIndex.FileName;

    /// <summary>Per-folder files, unless the user moved the data into the central database.</summary>
    private static bool UseFolderIndex => SettingsService.Instance.Current.ShouldWriteDirectoryIndex;

    public static string PathFor(string directory) => FolderIndex.PathFor(directory);

    /// <summary>Excludes the index and SQLite's side files from a listing.</summary>
    public static bool IsIndexFile(string name) => FolderIndex.IsIndexFile(name);

    /// <summary>Icons recorded for the entries of a directory, by entry name.</summary>
    public static Task<Dictionary<string, string>> IconsAsync(string directory) =>
        UseFolderIndex ? FolderIndex.IconsAsync(directory) : CentralIndex.Instance.IconsAsync(directory);

    /// <summary>Cached sizes of the entries of a directory, by entry name.</summary>
    public static Task<Dictionary<string, long>> SizesAsync(string directory) =>
        UseFolderIndex ? FolderIndex.SizesAsync(directory) : CentralIndex.Instance.SizesAsync(directory);

    /// <summary>The last listing saved for this directory, or null when it was never cached.</summary>
    public static Task<List<FileEntry>?> ListingAsync(string directory) =>
        UseFolderIndex ? FolderIndex.ListingAsync(directory) : CentralIndex.Instance.ListingAsync(directory);

    /// <summary>Stores the complete listing, hidden and system entries included.</summary>
    public static Task<bool> SaveListingAsync(string directory, IReadOnlyList<FileEntry> entries) =>
        UseFolderIndex
            ? FolderIndex.SaveListingAsync(directory, entries)
            : CentralIndex.Instance.SaveListingAsync(directory, entries);

    /// <summary>Stores the sizes of several entries in one transaction.</summary>
    public static Task<bool> SetSizesAsync(string directory, IReadOnlyDictionary<string, long> sizes) =>
        UseFolderIndex
            ? FolderIndex.SetSizesAsync(directory, sizes)
            : CentralIndex.Instance.SetSizesAsync(directory, sizes);

    public static Task<bool> SetSizeAsync(string directory, string name, long bytes) =>
        UseFolderIndex
            ? FolderIndex.SetSizeAsync(directory, name, bytes)
            : CentralIndex.Instance.SetSizeAsync(directory, name, bytes);

    /// <summary>Stores an icon source for one entry; a null source removes the override.</summary>
    public static Task<bool> SetIconAsync(string directory, string name, string? source) =>
        UseFolderIndex
            ? FolderIndex.SetIconAsync(directory, name, source)
            : CentralIndex.Instance.SetIconAsync(directory, name, source);

    /// <summary>
    ///     Re-applies the Windows attributes of an index that may have arrived from another system
    ///     (a folder copied from Linux keeps the file but not the hidden/system marking).
    /// </summary>
    public static void EnsureHidden(string directory)
    {
        if (UseFolderIndex)
            FolderIndex.EnsureHidden(directory);
    }

    /// <summary>Offloads the attribute check; it only touches the disk the first time.</summary>
    public static Task EnsureHiddenAsync(string directory) =>
        UseFolderIndex ? FolderIndex.EnsureHiddenAsync(directory) : Task.CompletedTask;
}
