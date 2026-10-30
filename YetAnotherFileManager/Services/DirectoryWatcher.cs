using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Watches the folders that are on screen — the active tab's folder, or the folders the overview
///     shows — and tells the interface when something in one of them changes. Nothing else is
///     watched, so a background tab never causes work.
/// </summary>
internal sealed class DirectoryWatcher : Singleton<DirectoryWatcher>
{
    private readonly object _gate = new();
    private readonly Dictionary<string, FileSystemWatcher> _watchers = new(StringComparer.OrdinalIgnoreCase);
    private readonly Dictionary<string, Timer> _timers = new(StringComparer.OrdinalIgnoreCase);

    /// <summary>Replaces the watched set with exactly these folders.</summary>
    public void Watch(IReadOnlyList<string> paths)
    {
        var wanted = paths
            .Where(path => !string.IsNullOrWhiteSpace(path) && Directory.Exists(path))
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToList();

        lock (_gate)
        {
            foreach (var path in _watchers.Keys.Where(path => !wanted.Contains(path, StringComparer.OrdinalIgnoreCase)).ToList())
                Remove(path);

            foreach (var path in wanted.Where(path => !_watchers.ContainsKey(path)))
                Add(path);
        }
    }

    private void Add(string path)
    {
        var watcher = Try.Run(() => new FileSystemWatcher(path)
        {
            IncludeSubdirectories = false,
            // Only real entries appearing or disappearing count; a file being written to does not.
        }).GetOrNull();

        if (watcher is null)
            return;

        watcher.Created += (_, args) => OnChanged(path, args);
        watcher.Deleted += (_, args) => OnChanged(path, args);
        watcher.Renamed += (_, args) => OnChanged(path, args);

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

            _timers[path] = new Timer(_ => Notify(path), null, 250, Timeout.Infinite);
        }
    }

    private static void Notify(string path) =>
        Try.Run(() => WindowManager.Instance.RunOnMainWindow(() =>
                WindowManager.Instance.Notify("fs.changed", new FsChangedPayload(path))))
            .OnFailure(_ => Serilog.Log.Debug("Could not report the change in {Path}", path));
}
