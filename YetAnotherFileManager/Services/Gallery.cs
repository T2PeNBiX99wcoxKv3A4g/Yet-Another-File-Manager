using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Finds the pictures the gallery shows: the folders configured in the settings, or the user's
///     Pictures folder. Newest first, capped so a huge photo library cannot flood the interface.
/// </summary>
internal static class Gallery
{
    private const int Limit = 300;
    private const int Depth = 3;

    private static readonly HashSet<string> Extensions = new(StringComparer.OrdinalIgnoreCase)
    {
        ".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".avif", ".tif", ".tiff"
    };

    private static readonly EnumerationOptions Options = new()
    {
        IgnoreInaccessible = true,
        RecurseSubdirectories = true,
        MaxRecursionDepth = Depth,
        AttributesToSkip = FileAttributes.ReparsePoint
    };

    public static IReadOnlyList<GalleryEntry> List()
    {
        var configured = SettingsService.Instance.Current.ScanRoots;
        var roots = configured.Count > 0 ? configured : [Environment.GetFolderPath(Environment.SpecialFolder.MyPictures)];

        return roots
            .Where(root => root.Length > 0)
            .SelectMany(Read)
            .Where(entry => !DirectoryIndex.IsIndexFile(entry.Name))
            .OrderByDescending(entry => entry.Modified)
            .Take(Limit)
            .ToList();
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
