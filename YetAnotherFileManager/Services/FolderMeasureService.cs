using System.Collections.Concurrent;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Measures child folders in the background: a folder's size and its direct item count come from
///     one enumeration. The per-folder index stays the cache, so only uncached children are walked.
/// </summary>
/// <remarks>
///     Sizes and counts used to be separate services, each with its own queue and its own walk of
///     the same directory. One walk now feeds both notifications.
/// </remarks>
[Singleton]
internal partial class FolderMeasureService
{
    private const int Levels = 1;

    /// <summary>
    ///     A normal listing measures every child. A cache directory can hold thousands, and walking
    ///     all of them in the background made navigation crawl, so those stop at the first burst.
    /// </summary>
    private const int Burst = 128;

    private const int FullListing = 512;
    private const int FlushDelay = 150;

    /// <summary>Folders measured at once. One worker leaves a listing of forty folders waiting in line.</summary>
    private static readonly int Workers = Math.Clamp(Environment.ProcessorCount / 2, 2, 4);

    private static readonly EnumerationOptions TopLevel = new()
    {
        IgnoreInaccessible = true,
        RecurseSubdirectories = false,
        // Junctions and symlinks would either double count or loop forever.
        AttributesToSkip = FileAttributes.ReparsePoint
    };

    private readonly Lock _flushGate = new();

    private readonly ConcurrentDictionary<string, ConcurrentDictionary<string, long>> _pendingCounts =
        new(StringComparer.OrdinalIgnoreCase);

    private readonly ConcurrentDictionary<string, ConcurrentDictionary<string, long>> _pendingSizes =
        new(StringComparer.OrdinalIgnoreCase);

    private readonly ConcurrentQueue<(string Parent, string Child, bool Counts)> _queue = new();
    private readonly ConcurrentDictionary<string, bool> _queued = new(StringComparer.OrdinalIgnoreCase);
    private readonly SemaphoreSlim _signal = new(0);
    private bool _flushScheduled;
    private Timer? _flushTimer;

    private volatile int _generation;

    private FolderMeasureService()
    {
        for (var index = 0; index < Workers; index++)
            _ = Task.Run(WorkAsync);
    }

    /// <summary>The folders still queued for a size/index walk, for the settings page.</summary>
    public IndexTasksPayload SnapshotTasks() =>
        new(_queued.Count, [.. _queued.Keys.Order(StringComparer.OrdinalIgnoreCase)]);

    public void Request(string directory, IReadOnlyCollection<string> children, bool counts)
    {
        DropQueued();
        Interlocked.Increment(ref _generation);

        var limit = children.Count <= FullListing ? children.Count : Burst;

        foreach (var child in children.Take(limit))
        {
            var key = Path.Combine(directory, child);
            if (!_queued.TryAdd(key, true))
                continue;

            _queue.Enqueue((directory, child, counts));
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
            var measured = await MeasureAsync(path, generation, Levels);
            _queued.TryRemove(path, out _);

            if (measured is not { } value)
                continue;

            Queue(_pendingSizes, item.Parent, item.Child, value.Size);

            if (item.Counts)
                Queue(_pendingCounts, item.Parent, item.Child, value.Count);
        }
    }

    /// <summary>
    ///     Size and direct item count of one folder. The walk is cancelled when a newer listing
    ///     superseded it; an unreadable child simply contributes zero.
    /// </summary>
    private async Task<(long Size, long Count)?> MeasureAsync(string path, int generation, int depth)
    {
        var result = await Try.Run(async () =>
        {
            if (_generation != generation)
                return null;

            var directory = new DirectoryInfo(path);
            var measured = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);
            var cached = depth > 0 ? await DirectoryIndex.SizesAsync(path) : [];
            long total = 0;
            long count = 0;

            // One pass collects the count and the size; the old services enumerated the same folder
            // twice (and the size service split files and directories into two more passes).
            foreach (var entry in directory.EnumerateFileSystemInfos("*", TopLevel))
            {
                if (DirectoryIndex.IsIndexFile(entry.Name))
                    continue;

                count++;

                if (entry is DirectoryInfo child)
                {
                    if (depth <= 0)
                        continue;

                    var size = cached.GetValueOrDefault(child.Name);

                    if (size == 0)
                    {
                        var nested = await MeasureAsync(child.FullName, generation, depth - 1);
                        if (nested is null)
                        {
                            if (_generation != generation)
                                return null;

                            size = 0;
                        }
                        else
                        {
                            size = nested.Value.Size;
                            if (size > 0)
                                measured[child.Name] = size;
                        }
                    }

                    total += size;
                    continue;
                }

                if (entry is not FileInfo file)
                    continue;

                // A single locked file must not abort the walk.
                total += Try.Run(() => file.Length).GetOrElse(_ => 0L);
            }

            if (measured.Count > 0)
                await DirectoryIndex.SetSizesAsync(path, measured);

            return ((long Size, long Count)?)(total, count);
        });

        return result.GetOrNull();
    }

    private void Queue(ConcurrentDictionary<string, ConcurrentDictionary<string, long>> pending,
        string parent, string child, long value)
    {
        pending.GetOrAdd(parent, _ => new(StringComparer.OrdinalIgnoreCase))[child] = value;

        lock (_flushGate)
        {
            // A throttle, not a debounce: a long stream of measurements still reaches the interface
            // every FlushDelay instead of waiting for the whole listing to finish.
            if (_flushScheduled)
                return;

            _flushScheduled = true;
            _flushTimer ??= new(_ => Flush(), null, Timeout.Infinite, Timeout.Infinite);
            _flushTimer.Change(FlushDelay, Timeout.Infinite);
        }
    }

    private void Flush()
    {
        lock (_flushGate)
            _flushScheduled = false;

        var sizes = Take(_pendingSizes);
        var counts = Take(_pendingCounts);

        // The window gets the numbers first; persisting them is best effort and can wait.
        Notify("fs.sizes", sizes, (parent, values) => new FsSizesPayload(parent, values));
        Notify("fs.counts", counts, (parent, values) => new FsCountsPayload(parent, values));

        _ = PersistAsync(sizes, counts);
    }

    /// <summary>
    ///     Writes a whole batch in one transaction per folder. Doing this per measured child made a
    ///     folder with thirty children open thirty SQLite write transactions while a listing was
    ///     also trying to read the same index.
    /// </summary>
    private static async Task PersistAsync(Dictionary<string, Dictionary<string, long>> sizes,
        Dictionary<string, Dictionary<string, long>> counts)
    {
        try
        {
            foreach (var (parent, values) in sizes)
                await DirectoryIndex.SetSizesAsync(parent, values);

            foreach (var (parent, values) in counts)
                await DirectoryIndex.SetCountsAsync(parent, values);
        }
        catch (Exception ex)
        {
            Serilog.Log.Warning(ex, "Could not persist the measured folder sizes");
        }
    }

    private static Dictionary<string, Dictionary<string, long>> Take(
        ConcurrentDictionary<string, ConcurrentDictionary<string, long>> pending)
    {
        var batch = new Dictionary<string, Dictionary<string, long>>(StringComparer.OrdinalIgnoreCase);

        foreach (var parent in pending.Keys.ToList())
            if (pending.TryRemove(parent, out var values) && !values.IsEmpty)
                batch[parent] = new(values, StringComparer.OrdinalIgnoreCase);

        return batch;
    }

    private static void Notify<T>(string type, Dictionary<string, Dictionary<string, long>> batch,
        Func<string, Dictionary<string, long>, T> payload)
    {
        foreach (var (parent, values) in batch)
            WindowManager.Instance.RunOnMainWindow(() =>
                WindowManager.Instance.Notify(type, payload(parent, values)));
    }

    private void DropQueued()
    {
        while (_queue.TryDequeue(out var item))
            _queued.TryRemove(Path.Combine(item.Parent, item.Child), out _);

        // The dropped items had a signal each; take them back so the workers do not spin on an
        // empty queue after a navigation.
        while (_signal.Wait(0))
        {
        }
    }
}