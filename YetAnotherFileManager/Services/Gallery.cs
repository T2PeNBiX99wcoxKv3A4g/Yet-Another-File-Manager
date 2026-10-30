using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Finds the pictures the gallery shows: the folders configured in the settings, or the user's
///     Pictures folder. The scan runs once and is kept in memory, because the interface walks the
///     whole list as it scrolls; only an explicit refresh walks the disk again.
/// </summary>
internal sealed class Gallery : Singleton<Gallery>
{
    private const int Depth = 3;

    private static readonly HashSet<string> Extensions = new(StringComparer.OrdinalIgnoreCase)
    {
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".webp",
        ".bmp",
        ".avif",
        ".tif",
        ".tiff"
    };

    private static readonly EnumerationOptions Options = new()
    {
        IgnoreInaccessible = true,
        RecurseSubdirectories = true,
        MaxRecursionDepth = Depth,
        AttributesToSkip = FileAttributes.ReparsePoint
    };

    private readonly Lock _gate = new();

    /// <summary>The whole gallery, newest first, or null when it has not been scanned yet.</summary>
    private List<GalleryEntry>? _entries;

    /// <summary>One slice of the gallery and how many pictures there are in total.</summary>
    public (IReadOnlyList<GalleryEntry> Entries, int Total) Page(int offset, int count, bool refresh) =>
        Try.Run(() =>
        {
            lock (_gate)
            {
                if (refresh || _entries is null)
                    _entries = Scan();

                var start = Math.Clamp(offset, 0, _entries.Count);
                var take = Math.Clamp(count, 0, _entries.Count - start);

                return ((IReadOnlyList<GalleryEntry>)_entries.GetRange(start, take), _entries.Count);
            }
        }).GetOrElse(_ => ((IReadOnlyList<GalleryEntry>)[], 0));

    private static List<GalleryEntry> Scan()
    {
        var configured = SettingsService.Instance.Current.ScanRoots;
        var roots = configured.Count > 0
            ? configured
            : [Environment.GetFolderPath(Environment.SpecialFolder.MyPictures)];

        return
        [
            .. roots
                .Where(root => root.Length > 0)
                .SelectMany(Read)
                .Where(entry => !DirectoryIndex.IsIndexFile(entry.Name))
                .OrderByDescending(entry => entry.Modified)
        ];
    }

    private static IEnumerable<GalleryEntry> Read(string root) =>
        Try.Run(() => new DirectoryInfo(root)
                .EnumerateFiles("*", Options)
                .Where(file => Extensions.Contains(file.Extension))
                .Select(file => new GalleryEntry(
                    file.FullName,
                    file.Name,
                    new DateTimeOffset(file.LastWriteTimeUtc).ToUnixTimeMilliseconds(),
                    file.Length))
                .ToList())
            .GetOrElse(_ => []);
}