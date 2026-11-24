using System.Collections.Concurrent;
using PhotinoNetUtils.Hosting;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Feeds the library's listing route from the same enumeration the window uses, so a folder is
///     read the same way in both places and its index stays current. The route owns paging, sorting,
///     caching and the block layout; this only answers "what is in this folder".
/// </summary>
/// <remarks>
///     The window asks for a folder's metadata and then for its first page, and scrolling asks for
///     every page after that. Each of those used to walk the directory again: a folder with 100 000
///     entries was enumerated once per page, so a quick scroll paid for the same disk work a dozen
///     times. The walk is kept here in memory instead (the memory settings already hold thumbnails
///     and folder walks, so the cost is expected), and a folder is walked again when a listing
///     explicitly refreshes it or when the watcher reports a change.
/// </remarks>
internal sealed class ListingSource : IListingSource
{
    public static readonly ListingSource Instance = new();

    /// <summary>
    ///     How long an unused walk stays. Scrolling a folder is usually a few seconds, and a window
    ///     that comes back later refreshes the listing first, so this only bounds how long a stale
    ///     walk could be served when the watcher missed a change.
    /// </summary>
    private static readonly TimeSpan Lifetime = TimeSpan.FromSeconds(30);

    /// <summary>At most this many folders are kept, so browsing a tree cannot grow without end.</summary>
    private const int MaxCachedListings = 6;

    /// <summary>A second bound in entries, since one huge folder costs far more than one small one.</summary>
    private const long MaxCachedEntries = 1_200_000;

    /// <summary>One walk per folder at a time, so the metadata and the first page share it.</summary>
    private readonly ConcurrentDictionary<string, Task<FsListPayload>> _inflight =
        new(StringComparer.OrdinalIgnoreCase);

    /// <summary>The walks a window can still page from, by folder.</summary>
    private readonly ConcurrentDictionary<string, CachedListing> _cache =
        new(StringComparer.OrdinalIgnoreCase);

    /// <summary>
    ///     Bumped when a folder changes. A walk that started before the change is old news and is
    ///     not allowed to put itself back in the cache when it finishes.
    /// </summary>
    private readonly ConcurrentDictionary<string, long> _versions =
        new(StringComparer.OrdinalIgnoreCase);

    private sealed record CachedListing(FsListPayload Payload, long At, int Entries);

    private long _cachedEntries;
    private long _version;

    /// <summary>
    ///     Metadata for the window. A navigation or a refresh asks for the disk's current answer, so
    ///     it walks the folder and replaces whatever the pages were reading from.
    /// </summary>
    public async Task<FsListPayload> RefreshAsync(string path, CancellationToken cancellationToken) =>
        await WalkAsync(path).WaitAsync(cancellationToken);

    /// <summary>A page is cut from the walk the metadata call just made, not from a new one.</summary>
    public async Task<FsListPayload> PayloadAsync(string path, CancellationToken cancellationToken)
    {
        if (TryRead(path) is { } cached)
            return cached;

        return await WalkAsync(path).WaitAsync(cancellationToken);
    }

    public async Task<ListingSnapshot> ReadAsync(string path, CancellationToken cancellationToken)
    {
        var payload = await PayloadAsync(path, cancellationToken);

        return new(payload.Path, DirectoryIndex.SignatureOf(payload.Entries),
            [.. payload.Entries.Select(ToEntry)]);
    }

    /// <summary>Drops a folder's walk after something changed it, so the next page reads the disk.</summary>
    public static void Invalidate(string? path)
    {
        if (string.IsNullOrWhiteSpace(path))
            return;

        Instance._versions[path] = Interlocked.Increment(ref Instance._version);
        Instance.Remove(path);
        Instance._inflight.TryRemove(path, out _);
    }

    private FsListPayload? TryRead(string path)
    {
        if (path.Length == 0 || IsVirtual(path) || !_cache.TryGetValue(path, out var cached))
            return null;

        if (Environment.TickCount64 - cached.At > (long)Lifetime.TotalMilliseconds)
        {
            Remove(path);
            return null;
        }

        return cached.Payload;
    }

    private Task<FsListPayload> WalkAsync(string path)
    {
        var task = _inflight.GetOrAdd(path, key => LoadAsync(key));

        // A finished walk must leave the table, or every later request would read the same old
        // answer. The continuation is attached after the table holds the task, so it cannot run
        // before there is an entry to remove.
        _ = task.ContinueWith(completed =>
                _inflight.TryRemove(new KeyValuePair<string, Task<FsListPayload>>(path, completed)),
            CancellationToken.None, TaskContinuationOptions.ExecuteSynchronously, TaskScheduler.Default);

        return task;
    }

    /// <summary>Walks one folder and keeps the result for the pages that follow.</summary>
    private async Task<FsListPayload> LoadAsync(string path)
    {
        var version = VersionOf(path);
        var payload = await FileSystemService.List(path, false);

        // The page requests the path the metadata reply carried (a request may be "~" or a relative
        // path), so the walk is filed under the resolved folder as well as under the request.
        if (path.Length > 0 && !IsVirtual(path) && version == VersionOf(path)
                                                       && version == VersionOf(payload.Path))
        {
            Store(payload.Path, payload, payload.Entries.Count);

            // An alias costs no entries: the budget counts the walk once, not once per name.
            if (!string.Equals(payload.Path, path, StringComparison.OrdinalIgnoreCase))
                Store(path, payload, 0);
        }

        return payload;
    }

    private long VersionOf(string path) => _versions.TryGetValue(path, out var version) ? version : 0;

    private void Store(string path, FsListPayload payload, int entries)
    {
        var entry = new CachedListing(payload, Environment.TickCount64, entries);

        if (_cache.TryGetValue(path, out var previous))
            Interlocked.Add(ref _cachedEntries, entry.Entries - previous.Entries);
        else
            Interlocked.Add(ref _cachedEntries, entry.Entries);

        _cache[path] = entry;

        // Oldest first, so browsing a tree keeps the folders a window is likely to come back to.
        while (_cache.Count > MaxCachedListings || Interlocked.Read(ref _cachedEntries) > MaxCachedEntries)
        {
            var oldest = _cache.MinBy(pair => pair.Value.At).Key;

            if (oldest is null || !Remove(oldest))
                break;
        }
    }

    private bool Remove(string path)
    {
        if (!_cache.TryRemove(path, out var removed))
            return false;

        Interlocked.Add(ref _cachedEntries, -removed.Entries);
        return true;
    }

    /// <summary>An archive's folder is virtual and changes with the archive; it is never cached here.</summary>
    private static bool IsVirtual(string path) => Archives.TrySplit(path, out _, out _);

    private static ListingEntry ToEntry(FileEntry entry) => new(
        entry.Name,
        entry.Size,
        entry.Modified,
        entry.Created,
        entry.IsDirectory,
        entry.IsHidden,
        entry.IsSystem,
        entry.IsEncrypted is true,
        entry.LinkValid,
        entry.LinkCount,
        entry.IconSource,
        entry.LinkTarget);
}
