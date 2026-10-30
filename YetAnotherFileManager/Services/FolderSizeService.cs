using System.Collections.Concurrent;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Measures folder sizes in the background, one level deep. A folder's size is the files it
///     holds plus the files of its own children; anything deeper is taken from the index the child
///     itself keeps, if it has one. Entering a folder therefore never walks the whole tree.
/// </summary>
/// <remarks>
///     Only the folder that is on screen is worth measuring, so a new listing drops everything that
///     was still queued and aborts a walk that is already running. One worker, so a slow disk is
///     never hit from more than one direction at a time, and the UI thread is never involved.
/// </remarks>
internal sealed class FolderSizeService : Singleton<FolderSizeService>
{
    /// <summary>
    ///     How far below the measured folder the filesystem is read. One level keeps a visit cheap
    ///     while still telling the truth about a child folder's own files and its immediate children.
    /// </summary>
    private const int Levels = 1;

    private static readonly EnumerationOptions TopLevel = new()
    {
        IgnoreInaccessible = true,
        RecurseSubdirectories = false,
        // Junctions and symlinks would either double count or loop forever.
        AttributesToSkip = FileAttributes.ReparsePoint
    };

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
            var bytes = await Task.Run(() => Measure(path, generation, Levels));
            _queued.TryRemove(path, out _);

            if (bytes < 0)
                continue;

            DirectoryIndex.SetSize(item.Parent, item.Child, bytes);

            WindowManager.Instance.RunOnMainWindow(() =>
                WindowManager.Instance.Notify("fs.sizes",
                    new FsSizesPayload(item.Parent, new()
                    {
                        [item.Child] = bytes
                    })));
        }
    }

    /// <summary>
    ///     Size of one folder: its own files plus its children's sizes. A child's number comes from
    ///     the cache the child keeps when it was measured before; otherwise it is measured here while
    ///     <paramref name="depth" /> lasts, so the first visit stops instead of scanning everything.
    /// </summary>
    private long Measure(string path, int generation, int depth) =>
        Try.Run(() =>
        {
            if (_generation != generation)
                return -1;

            var directory = new DirectoryInfo(path);
            var measured = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);
            var cached = depth > 0 ? DirectoryIndex.Sizes(path) : [];
            long total = 0;

            foreach (var file in directory.EnumerateFiles("*", TopLevel))
                total += file.Length;

            if (depth > 0)
                foreach (var child in directory.EnumerateDirectories("*", TopLevel))
                {
                    var size = cached.GetValueOrDefault(child.Name);

                    if (size == 0)
                    {
                        size = Measure(child.FullName, generation, depth - 1);

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
}