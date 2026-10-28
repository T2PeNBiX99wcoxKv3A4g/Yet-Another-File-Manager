using System.Collections.Concurrent;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Measures folder sizes in the background and keeps them in the folder's own index, so a listing
///     can show a size without walking the tree again. One worker: a folder tree on a slow disk should
///     never saturate the machine.
/// </summary>
internal sealed class FolderSizeService : Singleton<FolderSizeService>
{
    private readonly ConcurrentQueue<(string Parent, string Child)> _queue = new();
    private readonly ConcurrentDictionary<string, bool> _queued = new(StringComparer.OrdinalIgnoreCase);
    private readonly SemaphoreSlim _signal = new(0);

    public FolderSizeService() => _ = Task.Run(WorkAsync);

    /// <summary>Queues the folders of a listing that have no fresh size yet.</summary>
    public void Request(string directory, IEnumerable<string> children)
    {
        foreach (var child in children)
        {
            if (!_queued.TryAdd(Path.Combine(directory, child), true))
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
            var bytes = await Task.Run(() => Measure(path));
            _queued.TryRemove(path, out _);

            if (bytes < 0)
                continue;

            // Storing can fail (read-only volume); the UI is told either way so it stops waiting.
            DirectoryIndex.SetSize(item.Parent, item.Child, bytes);

            WindowManager.Instance.RunOnMainWindow(() =>
                WindowManager.Instance.Notify("fs.sizes",
                    new FsSizesPayload(item.Parent, new Dictionary<string, long> { [item.Child] = bytes })));
        }
    }

    private long Measure(string path) =>
        Try.Run(() =>
        {
            var options = new EnumerationOptions
            {
                IgnoreInaccessible = true,
                RecurseSubdirectories = true,
                // Junctions and symlinks would either double count or loop forever.
                AttributesToSkip = FileAttributes.ReparsePoint
            };

            return new DirectoryInfo(path).EnumerateFiles("*", options).Sum(file => file.Length);
        }).GetOrElse(ex =>
        {
            Log.Debug(ex, "Could not measure {Path}", path);
            return -1;
        });
}
