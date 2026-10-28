using System.Collections.Concurrent;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Measures folder sizes in the background. The work is layered: a folder's size is its own files
///     plus the sizes its children cached in their own indexes, and only a child that was never
///     measured is walked. Entering a folder therefore re-sums one level instead of rescanning the
///     whole tree, and a first visit pays the full walk only once.
/// </summary>
/// <remarks>
///     Only the folder that is on screen is worth measuring, so a new listing drops everything that
///     was still queued and aborts a walk that is already running. One worker, so a slow disk is
///     never hit from more than one direction at a time, and the UI thread is never involved.
/// </remarks>
internal sealed class FolderSizeService : Singleton<FolderSizeService>
{
    private readonly ConcurrentQueue<(string Parent, string Child)> _queue = new();
    private readonly ConcurrentDictionary<string, bool> _queued = new(StringComparer.OrdinalIgnoreCase);
    private readonly SemaphoreSlim _signal = new(0);

    /// <summary>Bumped on every listing; a walk that sees a different value has been superseded.</summary>
    private volatile int _generation;

    public FolderSizeService() => _ = Task.Run(WorkAsync);

    /// <summary>Queues the folders of a listing. Their sizes are re-summed on every visit.</summary>
    public void Request(string directory, IEnumerable<string> children)
    {
        DropQueued();
        Interlocked.Increment(ref _generation);

        foreach (var child in children)
        {
            // A listing that arrives while a previous one is still queued replaces it: only the
            // folder on screen is worth measuring.
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
            var bytes = await Task.Run(() => Measure(path, generation));
            _queued.TryRemove(path, out _);

            if (bytes < 0)
                continue;

            DirectoryIndex.SetSize(item.Parent, item.Child, bytes);

            WindowManager.Instance.RunOnMainWindow(() =>
                WindowManager.Instance.Notify("fs.sizes",
                    new FsSizesPayload(item.Parent, new Dictionary<string, long> { [item.Child] = bytes })));
        }
    }

    /// <summary>
    ///     Size of one folder: its own files plus, for each subfolder, the size cached in the folder's
    ///     index. A subfolder without a cached size is walked once — which also fills in its own
    ///     children — so the next measurement of this folder is a single level of reads.
    /// </summary>
    private long Measure(string path, int generation) =>
        Try.Run(() =>
        {
            if (_generation != generation)
                return -1;

            var directory = new DirectoryInfo(path);
            var cached = DirectoryIndex.Sizes(path);
            var measured = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);
            long total = 0;

            foreach (var file in directory.EnumerateFiles("*", TopLevel))
                total += file.Length;

            foreach (var child in directory.EnumerateDirectories("*", TopLevel))
            {
                if (!cached.TryGetValue(child.Name, out var size))
                {
                    size = Measure(child.FullName, generation);

                    // A superseded or failed walk must not leave a half-counted total behind.
                    if (size < 0)
                        return -1;

                    measured[child.Name] = size;
                }

                total += size;
            }

            // One transaction per folder instead of one connection per child.
            DirectoryIndex.SetSizes(path, measured);

            return total;
        }).GetOrElse(ex =>
        {
            Log.Debug(ex, "Could not measure {Path}", path);
            return -1;
        });

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
