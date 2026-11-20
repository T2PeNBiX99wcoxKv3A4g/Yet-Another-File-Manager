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
internal sealed class ListingSource : IListingSource
{
    public static readonly ListingSource Instance = new();

    /// <summary>One walk per folder at a time, so the metadata and the first page share it.</summary>
    private readonly ConcurrentDictionary<string, Task<FsListPayload>> _inflight =
        new(StringComparer.OrdinalIgnoreCase);

    /// <summary>Metadata for the window: the same walk the pages are cut from, without the entries.</summary>
    public async Task<FsListPayload> PayloadAsync(string path, CancellationToken cancellationToken)
    {
        var task = _inflight.GetOrAdd(path, key => FileSystemService.List(key, false));

        try
        {
            return await task.WaitAsync(cancellationToken);
        }
        finally
        {
            if (task.IsCompleted)
                _inflight.TryRemove(new KeyValuePair<string, Task<FsListPayload>>(path, task));
        }
    }

    public async Task<ListingSnapshot> ReadAsync(string path, CancellationToken cancellationToken)
    {
        var payload = await PayloadAsync(path, cancellationToken);

        return new(payload.Path, DirectoryIndex.SignatureOf(payload.Entries),
            [.. payload.Entries.Select(ToEntry)]);
    }

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
