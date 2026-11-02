using System.Collections.Concurrent;
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
        RecurseSubdirectories = false,
        AttributesToSkip = FileAttributes.ReparsePoint
    };

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

    private static IEnumerable<GalleryEntry> Read(string root) =>
        Try.Run(() => Walk(root)).GetOrElse(_ => []);

    /// <summary>
    ///     Walks one root with a bounded set of workers. A recursive <c>EnumerateFiles</c> visits one
    ///     directory at a time; spreading the directories over cores is what makes a large picture
    ///     library scan quickly.
    /// </summary>
    private static List<GalleryEntry> Walk(string root)
    {
        if (!Directory.Exists(root))
            return [];

        var entries = new ConcurrentBag<GalleryEntry>();
        var pending = new ConcurrentQueue<(string Path, int Depth)>();
        pending.Enqueue((root, 0));

        // Counts the directories that are queued or being walked; when it reaches zero, the walk is
        // done. The increment happens before the enqueue so a worker never sees an empty queue while
        // another one is still adding children.
        var waiting = 1;

        Parallel.For(0, Workers, _ =>
        {
            while (true)
            {
                if (!pending.TryDequeue(out var item))
                {
                    if (Volatile.Read(ref waiting) == 0)
                        return;

                    Thread.Yield();
                    continue;
                }

                try
                {
                    foreach (var file in new DirectoryInfo(item.Path).EnumerateFiles("*", Options))
                        if (Extensions.Contains(file.Extension))
                            entries.Add(new GalleryEntry(
                                file.FullName,
                                file.Name,
                                new DateTimeOffset(file.LastWriteTimeUtc).ToUnixTimeMilliseconds(),
                                file.Length));
                }
                catch (Exception ex)
                {
                    Serilog.Log.Debug(ex, "Could not read pictures in {Directory}", item.Path);
                }

                if (item.Depth < Depth)
                {
                    try
                    {
                        foreach (var child in Directory.EnumerateDirectories(item.Path, "*", Options))
                        {
                            Interlocked.Increment(ref waiting);
                            pending.Enqueue((child, item.Depth + 1));
                        }
                    }
                    catch (Exception ex)
                    {
                        Serilog.Log.Debug(ex, "Could not read folders in {Directory}", item.Path);
                    }
                }

                Interlocked.Decrement(ref waiting);
            }
        });

        return [.. entries];
    }

    private static readonly int Workers = Math.Clamp(Environment.ProcessorCount, 2, 8);
}