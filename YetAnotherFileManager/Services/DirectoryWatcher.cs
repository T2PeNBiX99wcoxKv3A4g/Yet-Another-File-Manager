using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Watches the folder the active tab shows and tells the interface when something in it changes,
///     so a listing keeps itself up to date without a refresh button. Only that one folder is
///     watched: other tabs and subfolders are not touched.
/// </summary>
internal sealed class DirectoryWatcher : Singleton<DirectoryWatcher>
{
    private readonly object _gate = new();

    private FileSystemWatcher? _watcher;
    private string? _path;
    private Timer? _debounce;

    /// <summary>Points the watcher at a folder; a null path stops it.</summary>
    public void Watch(string? path)
    {
        lock (_gate)
        {
            if (string.Equals(_path, path, StringComparison.OrdinalIgnoreCase))
                return;

            _watcher?.Dispose();
            _watcher = null;
            _path = path;

            if (string.IsNullOrWhiteSpace(path) || !Directory.Exists(path))
                return;

            var watcher = Try.Run(() => new FileSystemWatcher(path)
            {
                IncludeSubdirectories = false,
                NotifyFilter = NotifyFilters.FileName | NotifyFilters.DirectoryName |
                               NotifyFilters.LastWrite | NotifyFilters.Size
            }).GetOrNull();

            if (watcher is null)
            {
                Serilog.Log.Debug("Could not watch {Path}", path);
                return;
            }

            watcher.Created += OnChanged;
            watcher.Deleted += OnChanged;
            watcher.Changed += OnChanged;
            watcher.Renamed += OnChanged;
            watcher.Error += (_, args) => Serilog.Log.Debug(args.GetException(), "The watcher of {Path} failed", path);

            Try.Run(() => watcher.EnableRaisingEvents = true).OnFailure(ex => Serilog.Log.Debug(ex, "Could not enable the watcher"));

            _watcher = watcher;
        }
    }

    private void OnChanged(object sender, FileSystemEventArgs args)
    {
        // The folder's own index lives inside it, and writing to it must not look like a change.
        if (DirectoryIndex.IsIndexFile(Path.GetFileName(args.FullPath)))
            return;

        lock (_gate)
        {
            var path = _path;
            if (path is null)
                return;

            // A single copy writes several events; one notification is enough.
            _debounce?.Dispose();
            _debounce = new Timer(_ => Notify(path), null, 250, Timeout.Infinite);
        }
    }

    private static void Notify(string path) =>
        Try.Run(() => WindowManager.Instance.RunOnMainWindow(() =>
                WindowManager.Instance.Notify("fs.changed", new FsChangedPayload(path))))
            .OnFailure(ex => Serilog.Log.Debug(ex, "Could not report the change in {Path}", path));
}
