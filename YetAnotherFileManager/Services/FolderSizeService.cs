using System.Collections.Concurrent;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Measures folder sizes in the background, one level deep. A folder's size is the files it
///     holds plus its children's sizes; children that were measured before are read from their own
///     index instead of being walked again.
/// </summary>
internal sealed class FolderSizeService : Singleton<FolderSizeService>
{
    private const int Levels = 1;

    /// <summary>How many folders of one listing are measured; the rest keeps its cached size.</summary>
    private const int Burst = 40;

    private readonly ConcurrentQueue<(string Parent, string Child)> _queue = new();
    private readonly ConcurrentDictionary<string, bool> _queued = new(StringComparer.OrdinalIgnoreCase);
    private readonly SemaphoreSlim _signal = new(0);

    private volatile int _generation;

    public FolderSizeService() => _ = Task.Run(WorkAsync);

    public void Request(string directory, IEnumerable<string> children)
    {
        DropQueued();
        Interlocked.Increment(ref _generation);

        foreach (var child in children.Take(Burst))
        {
            var key = Path.Combine(directory, child);
            if (!_queued.TryAdd(key, true))
                continue;

            _queue.Enqueue((directory, child));
            _signal.Release();
        }
    }

    private async Task WorkAsync()
    {
        while (true)
        {
            await _signal.WaitAsync();

            if (!_queue.TryDequeue(out var item))
                continue;

            var path = Path.Combine(item.Parent, item.Child);
            var generation = _generation;
            var bytes = await MeasureAsync(path, generation, Levels);
            _queued.TryRemove(path, out _);

            if (bytes < 0)
                continue;

            await DirectoryIndex.SetSizeAsync(item.Parent, item.Child, bytes);

            WindowManager.Instance.RunOnMainWindow(() =>
                WindowManager.Instance.Notify("fs.sizes",
                    new FsSizesPayload(item.Parent, new Dictionary<string, long> { [item.Child] = bytes })));
        }
    }

    /// <summary>
    ///     Size of one folder: its own files plus its children. -1 means the walk was superseded by a
    ///     newer listing; a folder that cannot be read is simply skipped by its parent.
    /// </summary>
    private async Task<long> MeasureAsync(string path, int generation, int depth)
    {
        var result = await Try.Run(async () =>
        {
            if (_generation != generation)
                return -1;

            var directory = new DirectoryInfo(path);
            var measured = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);
            var cached = depth > 0 ? await DirectoryIndex.SizesAsync(path) : [];
            long total = 0;

            // The folder index lives inside the folder and is not part of its contents.
            foreach (var file in directory.EnumerateFiles("*", TopLevel))
            {
                if (DirectoryIndex.IsIndexFile(file.Name))
                    continue;

                total += Try.Run(() => file.Length).GetOrElse(_ => 0L);
            }

            if (depth > 0)
                foreach (var child in directory.EnumerateDirectories("*", TopLevel))
                {
                    var size = cached.GetValueOrDefault(child.Name);

                    if (size == 0)
                    {
                        size = await MeasureAsync(child.FullName, generation, depth - 1);

                        // Only a superseded walk aborts; an unreadable child counts as zero.
                        if (size < 0)
                        {
                            if (_generation != generation)
                                return -1;

                            size = 0;
                        }

                        if (size > 0)
                            measured[child.Name] = size;
                    }

                    total += size;
                }

            await DirectoryIndex.SetSizesAsync(path, measured);

            return total;
        });

        return result.GetOrElse(_ => 0L);
    }

    private void DropQueued()
    {
        while (_queue.TryDequeue(out var item))
            _queued.TryRemove(Path.Combine(item.Parent, item.Child), out _);
    }

    private static readonly EnumerationOptions TopLevel = new()
    {
        IgnoreInaccessible = true,
        RecurseSubdirectories = false,
        // Junctions and symlinks would either double count or loop forever.
        AttributesToSkip = FileAttributes.ReparsePoint
    };
}
