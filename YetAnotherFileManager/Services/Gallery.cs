using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Interop;
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

    private static readonly string ExtensionList = string.Join(';', Extensions);

    private readonly SemaphoreSlim _scanGate = new(1, 1);

    /// <summary>The whole gallery, newest first, or null when it has not been scanned yet.</summary>
    private List<GalleryEntry>? _entries;

    /// <summary>One slice of the gallery and how many pictures there are in total.</summary>
    public async Task<(IReadOnlyList<GalleryEntry> Entries, int Total)> PageAsync(int offset, int count, bool refresh)
    {
        var entries = Volatile.Read(ref _entries);

        if (refresh || entries is null)
        {
            // Only a scan takes the gate; scrolling through an existing list does not wait for it.
            await _scanGate.WaitAsync();
            try
            {
                if (refresh || _entries is null)
                {
                    try
                    {
                        Volatile.Write(ref _entries, await Task.Run(Scan));
                    }
                    catch (Exception ex)
                    {
                        Serilog.Log.Warning(ex, "Could not scan the gallery");
                        return ([], 0);
                    }
                }

                entries = _entries;
            }
            finally
            {
                _scanGate.Release();
            }
        }

        if (entries is null)
            return ([], 0);

        var start = Math.Clamp(offset, 0, entries.Count);
        var take = Math.Clamp(count, 0, entries.Count - start);

        return (entries.GetRange(start, take), entries.Count);
    }

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

    private static List<GalleryEntry> Read(string root) =>
        Directory.Exists(root) ? RustNative.ScanImages(root, Depth, ExtensionList) : [];
}