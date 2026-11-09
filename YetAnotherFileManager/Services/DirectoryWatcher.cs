using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Watches the folders the interface shows — file tabs, overview panels and pinned sidebar
///     folders — and tells the interface when something in one of them changes. Several surfaces
///     may ask at once, so each keeps its own list and the union is watched.
/// </summary>
internal sealed class DirectoryWatcher : Singleton<DirectoryWatcher>
{
    private readonly Lock _gate = new();
    private readonly Dictionary<string, Timer> _timers = new(StringComparer.OrdinalIgnoreCase);
    private readonly Dictionary<string, FileSystemWatcher> _watchers = new(StringComparer.OrdinalIgnoreCase);
    private readonly Dictionary<string, IReadOnlyList<string>> _owners = new(StringComparer.Ordinal);

    /// <summary>Replaces one surface's list; the watched set becomes the union of all surfaces.</summary>
    public void Watch(IReadOnlyList<string> paths, string? owner = null)
    {
        var key = string.IsNullOrWhiteSpace(owner) ? "main" : owner;
        var wanted = paths
            .Where(path => !string.IsNullOrWhiteSpace(path) && Directory.Exists(path))
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToList();

        lock (_gate)
        {
            if (wanted.Count == 0)
                _owners.Remove(key);
            else
                _owners[key] = wanted;

            var union = _owners.Values
                .SelectMany(list => list)
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();

            foreach (var path in _watchers.Keys.Where(path => !union.Contains(path, StringComparer.OrdinalIgnoreCase))
                         .ToList())
                Remove(path);

            foreach (var path in union.Where(path => !_watchers.ContainsKey(path)))
                Add(path);
        }
    }

    private void Add(string path)
    {
        var watcher = Try.Run(() => new FileSystemWatcher(path)
        {
            IncludeSubdirectories = false,
            NotifyFilter = NotifyFilters.FileName | NotifyFilters.DirectoryName |
                           NotifyFilters.LastWrite | NotifyFilters.Size | NotifyFilters.Attributes
        }).GetOrNull();

        if (watcher is null)
            return;

        watcher.Created += (_, args) => OnChanged(path, args);
        watcher.Deleted += (_, args) => OnChanged(path, args);
        watcher.Changed += (_, args) => OnChanged(path, args);
        watcher.Renamed += (_, args) => OnChanged(path, args);
        watcher.Error += (_, args) => OnWatcherError(path, args);

        Try.Run(() => watcher.EnableRaisingEvents = true)
            .OnFailure(_ => Serilog.Log.Debug("Could not enable the watcher of {Path}", path));

        _watchers[path] = watcher;
    }

    private void Remove(string path)
    {
        if (_watchers.Remove(path, out var watcher))
            watcher.Dispose();

        if (_timers.Remove(path, out var timer))
            timer.Dispose();
    }

    private void OnChanged(string path, FileSystemEventArgs args)
    {
        // The folder's own index lives inside it, and writing to it is not a change worth showing.
        if (DirectoryIndex.IsIndexFile(Path.GetFileName(args.FullPath)))
            return;

        lock (_gate)
        {
            if (!_watchers.ContainsKey(path))
                return;

            // One copy writes several events; one notification is enough.
            if (_timers.Remove(path, out var previous))
                previous.Dispose();

            _timers[path] = new(_ => Notify(path), null, 250, Timeout.Infinite);
        }
    }

    /// <summary>
    ///     A watcher can stop after a buffer overflow or when its folder is renamed. Tell the
    ///     interface to re-read now, then put the watcher back so later changes still arrive.
    /// </summary>
    private void OnWatcherError(string path, ErrorEventArgs args)
    {
        Serilog.Log.Warning(args.GetException(), "Folder watcher failed for {Path}", path);
        Notify(path);

        lock (_gate)
        {
            if (_watchers.Remove(path, out var watcher))
                watcher.Dispose();
        }

        _ = Task.Delay(TimeSpan.FromMilliseconds(500)).ContinueWith(_ =>
        {
            lock (_gate)
            {
                var wanted = _owners.Values.Any(list => list.Contains(path, StringComparer.OrdinalIgnoreCase));
                if (wanted && !_watchers.ContainsKey(path) && Directory.Exists(path))
                    Add(path);
            }
        }, TaskScheduler.Default);
    }

    private void Notify(string path) =>
        Try.Run(() => WindowManager.Instance.RunOnMainWindow(() =>
                WindowManager.Instance.Notify("fs.changed", new FsChangedPayload(path))))
            .OnFailure(_ => Log.Debug("Could not report the change in {Path}", path));
}