using PhotinoNetUtils.Hosting;
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

    public async Task<ListingSnapshot> ReadAsync(string path, CancellationToken cancellationToken)
    {
        var payload = await FileSystemService.List(path, false, cancellationToken);

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
