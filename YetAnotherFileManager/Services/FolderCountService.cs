using System.Collections.Concurrent;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Counts the direct children of folders in the background, so the Items column fills in without
///     walking every folder of a listing at once. A count is stored in the parent folder's own index
///     and never moves to the central one.
/// </summary>
internal sealed class FolderCountService : Singleton<FolderCountService>
{
    /// <summary>How many folders of one listing are counted; the rest keeps its cached count.</summary>
    private const int Burst = 20;

    private readonly ConcurrentQueue<(string Parent, string Child)> _queue = new();
    private readonly ConcurrentDictionary<string, bool> _queued = new(StringComparer.OrdinalIgnoreCase);
    private readonly SemaphoreSlim _signal = new(0);

    /// <summary>Counts waiting to be sent; one notification per folder instead of one per count.</summary>
    private readonly ConcurrentDictionary<string, ConcurrentDictionary<string, long>> _pending = new(StringComparer.OrdinalIgnoreCase);

    private readonly Lock _flushGate = new();
    private Timer? _flushTimer;
    private const int FlushDelay = 150;

    /// <summary>Folders counted at once; the shell is not the bottleneck, disk latency is.</summary>
    private static readonly int Workers = Math.Clamp(Environment.ProcessorCount / 2, 2, 4);

    public FolderCountService()
    {
        for (var index = 0; index < Workers; index++)
            _ = Task.Run(WorkAsync);
    }

    public void Request(string directory, IEnumerable<string> children)
    {
        DropQueued();

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
            var count = await Task.Run(() => Count(path));
            _queued.TryRemove(path, out _);

            await DirectoryIndex.SetCountAsync(item.Parent, item.Child, count);
            Queue(item.Parent, item.Child, count);
        }
    }

    /// <summary>Batches the counts of one folder so the interface does not re-sort once per folder.</summary>
    private void Queue(string parent, string child, long count)
    {
        _pending.GetOrAdd(parent, _ => new(StringComparer.OrdinalIgnoreCase))[child] = count;

        lock (_flushGate)
        {
            _flushTimer ??= new Timer(_ => Flush(), null, Timeout.Infinite, Timeout.Infinite);
            _flushTimer.Change(FlushDelay, Timeout.Infinite);
        }
    }

    private void Flush()
    {
        foreach (var parent in _pending.Keys.ToList())
        {
            if (!_pending.TryRemove(parent, out var counts) || counts.IsEmpty)
                continue;

            var payload = new Dictionary<string, long>(counts, StringComparer.OrdinalIgnoreCase);

            WindowManager.Instance.RunOnMainWindow(() =>
                WindowManager.Instance.Notify("fs.counts", new FsCountsPayload(parent, payload)));
        }
    }

    private static long Count(string path) =>
        Try.Run(() => (long)new DirectoryInfo(path).EnumerateFileSystemInfos("*", TopLevel).Count())
            .GetOrElse(_ => 0L);

    private void DropQueued()
    {
        while (_queue.TryDequeue(out var item))
            _queued.TryRemove(Path.Combine(item.Parent, item.Child), out _);
    }

    private static readonly EnumerationOptions TopLevel = new()
    {
        IgnoreInaccessible = true,
        RecurseSubdirectories = false
    };
}
