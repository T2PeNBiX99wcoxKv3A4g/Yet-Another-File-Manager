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

    /// <summary>
    ///     Every folder of one listing is queued; the workers bound how many run at once. The old
    ///     forty-folder cap left everything after it without a size, which looked like a bug when
    ///     the names sorted late (for example "~temp" or ".cache").
    /// </summary>
    private const int Burst = 4096;

    private readonly ConcurrentQueue<(string Parent, string Child)> _queue = new();
    private readonly ConcurrentDictionary<string, bool> _queued = new(StringComparer.OrdinalIgnoreCase);
    private readonly SemaphoreSlim _signal = new(0);

    /// <summary>Sizes waiting to be sent; one notification per folder instead of one per measurement.</summary>
    private readonly ConcurrentDictionary<string, ConcurrentDictionary<string, long>> _pending = new(StringComparer.OrdinalIgnoreCase);

    private readonly Lock _flushGate = new();
    private Timer? _flushTimer;
    private bool _flushScheduled;
    private const int FlushDelay = 150;

    private volatile int _generation;

    /// <summary>Folders measured at once. One worker leaves a listing of forty folders waiting in line.</summary>
    private static readonly int Workers = Math.Clamp(Environment.ProcessorCount / 2, 2, 4);

    public FolderSizeService()
    {
        for (var index = 0; index < Workers; index++)
            _ = Task.Run(WorkAsync);
    }

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
            Queue(item.Parent, item.Child, bytes);
        }
    }

    /// <summary>
    ///     Holds the result until the folder's other workers are done, then sends them together. The
    ///     interface replaces the listing on every notification, so a burst of single folders would
    ///     re-sort the whole view once per folder.
    /// </summary>
    private void Queue(string parent, string child, long bytes)
    {
        _pending.GetOrAdd(parent, _ => new(StringComparer.OrdinalIgnoreCase))[child] = bytes;

        lock (_flushGate)
        {
            // A throttle, not a debounce: a long stream of measurements still reaches the interface
            // every FlushDelay instead of waiting for the whole listing to finish.
            if (_flushScheduled)
                return;

            _flushScheduled = true;
            _flushTimer ??= new Timer(_ => Flush(), null, Timeout.Infinite, Timeout.Infinite);
            _flushTimer.Change(FlushDelay, Timeout.Infinite);
        }
    }

    private void Flush()
    {
        lock (_flushGate)
            _flushScheduled = false;

        foreach (var parent in _pending.Keys.ToList())
        {
            if (!_pending.TryRemove(parent, out var sizes) || sizes.IsEmpty)
                continue;

            var payload = new Dictionary<string, long>(sizes, StringComparer.OrdinalIgnoreCase);

            WindowManager.Instance.RunOnMainWindow(() =>
                WindowManager.Instance.Notify("fs.sizes", new FsSizesPayload(parent, payload)));
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

                // A single locked file must not abort the walk, but a Result per file is too much
                // allocation for a folder with thousands of them.
                try
                {
                    total += file.Length;
                }
                catch (IOException)
                {
                }
                catch (UnauthorizedAccessException)
                {
                }
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

            if (measured.Count > 0)
                await DirectoryIndex.SetSizesAsync(path, measured);

            return total;
        });

        return result.GetOrElse(_ => 0L);
    }

    private void DropQueued()
    {
        while (_queue.TryDequeue(out var item))
            _queued.TryRemove(Path.Combine(item.Parent, item.Child), out _);

        // The dropped items had a signal each; take them back so the workers do not spin on an
        // empty queue after a navigation.
        while (_signal.Wait(0)) { }
    }

    private static readonly EnumerationOptions TopLevel = new()
    {
        IgnoreInaccessible = true,
        RecurseSubdirectories = false,
        // Junctions and symlinks would either double count or loop forever.
        AttributesToSkip = FileAttributes.ReparsePoint
    };
}
