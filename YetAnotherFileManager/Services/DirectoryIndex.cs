using System.Collections.Concurrent;
using PhotinoNetUtils.Utils;
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
        WritesFolderIndex
        && !CentralOnly.ContainsKey(directory)
        && !DirectoryIndexBlacklist.Matches(directory, SettingsService.Instance.Current.DirectoryIndexBlacklist);

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

    /// <summary>Only clean up legacy folder-local tags when that index file already exists.</summary>
    public static Task<bool> RemoveTagAsync(string directory, string tag) =>
        File.Exists(FolderIndex.PathFor(directory))
            ? FolderIndex.RemoveTagAsync(directory, tag)
            : Task.FromResult(true);

    public static Task<bool> RenameTagAsync(string directory, string tag, string next) =>
        File.Exists(FolderIndex.PathFor(directory))
            ? FolderIndex.RenameTagAsync(directory, tag, next)
            : Task.FromResult(true);

    /// <summary>Stores the complete listing, hidden and system entries included.</summary>
    public static Task<bool> SaveListingAsync(string directory, IReadOnlyList<FileEntry> entries) =>
        WriteAsync(directory,
            () => FolderIndex.SaveListingAsync(directory, entries),
            () => CentralIndex.Instance.SaveListingAsync(directory, entries));

    /// <summary>How long a folder has to stay closed before its listing is written.</summary>
    private static readonly TimeSpan ListingDelay = TimeSpan.FromMilliseconds(750);

    /// <summary>
    ///     A folder that stays on screen is cached only after a long quiet spell; leaving it writes it
    ///     at once, so browsing a folder never writes the index it is being painted from.
    /// </summary>
    private static readonly TimeSpan FocusedDelay = TimeSpan.FromSeconds(10);

    /// <summary>Listings waiting for their folder to stay quiet.</summary>
    private static readonly ConcurrentDictionary<string, PendingListing> PendingListings =
        new(StringComparer.OrdinalIgnoreCase);

    /// <summary>The fingerprint of the listing last written for each directory.</summary>
    private static readonly ConcurrentDictionary<string, int> SavedListings = new(StringComparer.OrdinalIgnoreCase);

    /// <summary>
    ///     Marks the folder the active tab shows. It is the only folder whose index is read without
    ///     waiting, and its listing is not written while the user is still looking at it.
    /// </summary>
    public static void Focus(string? directory)
    {
        var previous = IndexFocus.Set(directory);

        if (previous is null || string.Equals(previous, IndexFocus.Current, StringComparison.OrdinalIgnoreCase))
            return;

        // The user just left that folder, which is the moment its listing can be stored without
        // competing with the folder now on screen. The waiting write removes itself from the queue.
        if (PendingListings.TryGetValue(previous, out var pending))
            pending.Release();
    }

    /// <summary>
    ///     Queues the listing of a directory without ever holding a listing back. Walking into a
    ///     subdirectory and back replaces the queued write instead of starting one per visit, and a
    ///     folder that still holds exactly what the index already has is not written at all — so the
    ///     index stays out of the way while the user is browsing.
    /// </summary>
    public static void QueueListing(string directory, IReadOnlyList<FileEntry> entries)
    {
        var signature = SignatureOf(entries);

        if (SavedListings.TryGetValue(directory, out var saved) && saved == signature)
            return;

        // The signatures are tiny, but a session that browses a whole tree must not keep one per
        // folder forever; the next write simply stores them again.
        if (SavedListings.Count > 1024)
            SavedListings.Clear();

        // A folder on screen is written when it is left, never while its own index is being read.
        var pending = new PendingListing(signature,
            IndexFocus.Is(directory) ? FocusedDelay : ListingDelay);

        if (PendingListings.TryRemove(directory, out var previous))
            previous.Cancel();

        PendingListings[directory] = pending;

        _ = WriteLaterAsync(directory, entries, pending);
    }

    private static async Task WriteLaterAsync(string directory, IReadOnlyList<FileEntry> entries, PendingListing pending)
    {
        // Either the quiet delay passes, or the folder loses the focus and is written at once.
        await Task.WhenAny(Task.Delay(pending.Delay, pending.Token), pending.Released);

        // A newer listing took over while this one was waiting.
        if (!PendingListings.TryRemove(new KeyValuePair<string, PendingListing>(directory, pending)))
            return;

        if (await SaveListingAsync(directory, entries))
            SavedListings[directory] = pending.Signature;
        else
            SavedListings.TryRemove(directory, out _);
    }

    /// <summary>
    ///     A cheap fingerprint of a listing: enough to recognise the rows the index already holds,
    ///     without keeping any of them in memory.
    /// </summary>
    private static int SignatureOf(IReadOnlyList<FileEntry> entries)
    {
        var hash = new HashCode();

        hash.Add(entries.Count);

        foreach (var entry in entries)
        {
            hash.Add(entry.Name, StringComparer.Ordinal);
            hash.Add(entry.Size);
            hash.Add(entry.Modified);
            hash.Add(entry.Created);
            hash.Add(entry.IsDirectory);
            hash.Add(entry.IsHidden);
            hash.Add(entry.IsSystem);
            hash.Add(entry.IconSource, StringComparer.Ordinal);
            hash.Add(entry.LinkTarget, StringComparer.Ordinal);
            hash.Add(entry.LinkValid);
            hash.Add(entry.LinkCount);
        }

        return hash.ToHashCode();
    }

    /// <summary>A listing that is still waiting for the directory to stay quiet.</summary>
    private sealed class PendingListing(int signature, TimeSpan delay)
    {
        private readonly CancellationTokenSource _cancel = new();
        private readonly TaskCompletionSource _now = new(TaskCreationOptions.RunContinuationsAsynchronously);

        public int Signature { get; } = signature;

        public TimeSpan Delay { get; } = delay;

        public CancellationToken Token => _cancel.Token;

        /// <summary>Completes when the folder is left and the write no longer has to wait.</summary>
        public Task Released => _now.Task;

        public void Release() => _now.TrySetResult();

        public void Cancel() => Try.Run(_cancel.Cancel);
    }

    /// <summary>Stores the sizes of several entries in one transaction.</summary>
    public static Task<bool> SetSizesAsync(string directory, IReadOnlyDictionary<string, long> sizes) =>
        WriteAsync(directory,
            () => FolderIndex.SetSizesAsync(directory, sizes),
            () => CentralIndex.Instance.SetSizesAsync(directory, sizes));

    /// <summary>Stores the item counts of several entries in one transaction.</summary>
    public static Task<bool> SetCountsAsync(string directory, IReadOnlyDictionary<string, long> counts) =>
        WriteAsync(directory,
            () => FolderIndex.SetCountsAsync(directory, counts),
            () => CentralIndex.Instance.SetCountsAsync(directory, counts));

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
