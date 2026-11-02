using System.Collections.Concurrent;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The directory index the rest of the app talks to. It holds per-entry icons, cached folder
///     sizes and the last listing of a directory, and it lives either in a <c>.yafm-index.db</c>
///     beside the files or in the central database, depending on the user's choice.
/// </summary>
/// <remarks>
///     A directory that cannot hold its own index — <c>C:\Windows</c> for an unelevated user, a
///     read-only volume — moves to the central database by itself, so its sizes and icons are still
///     remembered. Only that directory moves; the setting stays as the user left it.
/// </remarks>
internal static class DirectoryIndex
{
    public const string FileName = FolderIndex.FileName;

    /// <summary>Everything one listing reads from the index, gathered over one connection.</summary>
    internal sealed record MetadataSnapshot(
        Dictionary<string, string> Icons,
        Dictionary<string, long> Sizes,
        DirectoryView? View,
        Dictionary<string, List<string>> Tags,
        Dictionary<string, string> TagColors,
        Dictionary<string, long> Counts)
    {
        public static MetadataSnapshot Empty => new([], [], null, [], [], []);
    }

    /// <summary>Directories whose own index could not be created this session.</summary>
    private static readonly ConcurrentDictionary<string, bool> CentralOnly = new(StringComparer.OrdinalIgnoreCase);

    /// <summary>Per-folder files, unless the user moved the data into the central database.</summary>
    private static bool WritesFolderIndex => SettingsService.Instance.Current.ShouldWriteDirectoryIndex;

    /// <summary>Whether writes should go to a file in this directory.</summary>
    private static bool HoldsOwnIndex(string directory) =>
        WritesFolderIndex && !CentralOnly.ContainsKey(directory);

    /// <summary>
    ///     Whether reads should come from the file in this directory. A directory without an index
    ///     of its own reads the central database: it may still have data there from an earlier
    ///     session, and writing a fresh index is what will make the next read local.
    /// </summary>
    private static bool ReadsOwnIndex(string directory) =>
        HoldsOwnIndex(directory) && File.Exists(FolderIndex.PathFor(directory));

    public static string PathFor(string directory) => FolderIndex.PathFor(directory);

    /// <summary>Excludes the index and SQLite's side files from a listing.</summary>
    public static bool IsIndexFile(string name) => FolderIndex.IsIndexFile(name);

    /// <summary>Icons recorded for the entries of a directory, by entry name.</summary>
    public static Task<Dictionary<string, string>> IconsAsync(string directory) =>
        ReadsOwnIndex(directory) ? FolderIndex.IconsAsync(directory) : CentralIndex.Instance.IconsAsync(directory);

    /// <summary>
    ///     Everything a listing needs from the index. The per-folder database is opened once instead of
    ///     six times; the central database does the same.
    /// </summary>
    public static async Task<MetadataSnapshot> ReadMetadataAsync(string directory)
    {
        if (ReadsOwnIndex(directory))
            return await FolderIndex.ReadMetadataAsync(directory) ?? MetadataSnapshot.Empty;

        var central = await CentralIndex.Instance.ReadMetadataAsync(directory);

        // Tags, tag colors and child counts always stay with the folder's own index when it exists.
        var local = File.Exists(FolderIndex.PathFor(directory))
            ? await FolderIndex.ReadMetadataAsync(directory)
            : null;

        return new MetadataSnapshot(
            central.Icons,
            central.Sizes,
            central.View,
            local?.Tags ?? [],
            local?.TagColors ?? [],
            local?.Counts ?? []);
    }

    /// <summary>Cached sizes of the entries of a directory, by entry name.</summary>
    public static Task<Dictionary<string, long>> SizesAsync(string directory) =>
        ReadsOwnIndex(directory) ? FolderIndex.SizesAsync(directory) : CentralIndex.Instance.SizesAsync(directory);

    /// <summary>The last listing saved for this directory, or null when it was never cached.</summary>
    public static Task<List<FileEntry>?> ListingAsync(string directory) =>
        ReadsOwnIndex(directory) ? FolderIndex.ListingAsync(directory) : CentralIndex.Instance.ListingAsync(directory);

    /// <summary>How this directory is shown, or null when it inherits the app's default.</summary>
    public static Task<DirectoryView?> ViewAsync(string directory) =>
        ReadsOwnIndex(directory) ? FolderIndex.ViewAsync(directory) : CentralIndex.Instance.ViewAsync(directory);

    /// <summary>Stores this directory's own view settings, in its index or the central one.</summary>
    public static Task<bool> SaveViewAsync(string directory, DirectoryView view) =>
        WriteAsync(directory,
            () => FolderIndex.SaveViewAsync(directory, view),
            () => CentralIndex.Instance.SaveViewAsync(directory, view));

    /// <summary>Tags recorded in this folder, by entry name. They never move to the central index.</summary>
    public static Task<Dictionary<string, List<string>>> TagsAsync(string directory) =>
        File.Exists(FolderIndex.PathFor(directory))
            ? FolderIndex.TagsAsync(directory)
            : Task.FromResult(new Dictionary<string, List<string>>());

    /// <summary>Stores one entry's tags, which is only possible while the folder keeps its own index.</summary>
    public static Task<bool> SetTagsAsync(string directory, string name, IReadOnlyList<string> tags) =>
        HoldsOwnIndex(directory)
            ? FolderIndex.SetTagsAsync(directory, name, tags)
            : Task.FromResult(false);

    /// <summary>The colors of this folder's tags, by tag name. They never move to the central index.</summary>
    public static Task<Dictionary<string, string>> TagColorsAsync(string directory) =>
        File.Exists(FolderIndex.PathFor(directory))
            ? FolderIndex.TagColorsAsync(directory)
            : Task.FromResult(new Dictionary<string, string>());

    /// <summary>Stores the tag colors, which is only possible while the folder keeps its own index.</summary>
    public static Task<bool> SaveTagColorsAsync(string directory, IReadOnlyDictionary<string, string> colors) =>
        HoldsOwnIndex(directory)
            ? FolderIndex.SaveTagColorsAsync(directory, colors)
            : Task.FromResult(false);

    /// <summary>Child counts recorded in this folder, by entry name. They never move to the central index.</summary>
    public static Task<Dictionary<string, long>> CountsAsync(string directory) =>
        File.Exists(FolderIndex.PathFor(directory))
            ? FolderIndex.CountsAsync(directory)
            : Task.FromResult(new Dictionary<string, long>());

    /// <summary>Stores a child count, which is only possible while the folder keeps its own index.</summary>
    public static Task<bool> SetCountAsync(string directory, string name, long count) =>
        HoldsOwnIndex(directory)
            ? FolderIndex.SetCountAsync(directory, name, count)
            : Task.FromResult(false);

    /// <summary>Stores the complete listing, hidden and system entries included.</summary>
    public static Task<bool> SaveListingAsync(string directory, IReadOnlyList<FileEntry> entries) =>
        WriteAsync(directory,
            () => FolderIndex.SaveListingAsync(directory, entries),
            () => CentralIndex.Instance.SaveListingAsync(directory, entries));

    /// <summary>Stores the sizes of several entries in one transaction.</summary>
    public static Task<bool> SetSizesAsync(string directory, IReadOnlyDictionary<string, long> sizes) =>
        WriteAsync(directory,
            () => FolderIndex.SetSizesAsync(directory, sizes),
            () => CentralIndex.Instance.SetSizesAsync(directory, sizes));

    public static Task<bool> SetSizeAsync(string directory, string name, long bytes) =>
        WriteAsync(directory,
            () => FolderIndex.SetSizeAsync(directory, name, bytes),
            () => CentralIndex.Instance.SetSizeAsync(directory, name, bytes));

    /// <summary>Stores an icon source for one entry; a null source removes the override.</summary>
    public static Task<bool> SetIconAsync(string directory, string name, string? source) =>
        WriteAsync(directory,
            () => FolderIndex.SetIconAsync(directory, name, source),
            () => CentralIndex.Instance.SetIconAsync(directory, name, source));

    /// <summary>
    ///     Re-applies the Windows attributes of an index that may have arrived from another system
    ///     (a folder copied from Linux keeps the file but not the hidden/system marking).
    /// </summary>
    public static void EnsureHidden(string directory)
    {
        if (HoldsOwnIndex(directory))
            FolderIndex.EnsureHidden(directory);
    }

    /// <summary>Offloads the attribute check; it only touches the disk the first time.</summary>
    public static Task EnsureHiddenAsync(string directory) =>
        HoldsOwnIndex(directory) ? FolderIndex.EnsureHiddenAsync(directory) : Task.CompletedTask;

    /// <summary>
    ///     Writes to the folder's own index, and hands just that directory to the central database
    ///     when the folder cannot hold one. A write that failed on an index that does exist leaves
    ///     its data where it was; only a directory that got no index at all moves.
    /// </summary>
    private static async Task<bool> WriteAsync(string directory, Func<Task<bool>> folder, Func<Task<bool>> central)
    {
        if (HoldsOwnIndex(directory))
        {
            if (await folder())
                return true;

            if (File.Exists(FolderIndex.PathFor(directory)))
                return false;

            CentralOnly[directory] = true;
        }

        return await central();
    }
}
