using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The folders that were opened recently, newest first, kept in a small JSON file. Files join the
///     list once the interface can open them.
/// </summary>
internal sealed class RecentService : Singleton<RecentService>
{
    private const int Capacity = 50;

    private static readonly string StorePath = Path.Combine(Constants.DataDirectory, "recent.json");

    private readonly object _gate = new();

    private List<RecentEntry> _entries = Load();

    /// <summary>The most recent entries, capped by the user's limit (0 means "not shown").</summary>
    public IReadOnlyList<RecentEntry> List(int limit)
    {
        if (limit <= 0)
            return [];

        lock (_gate)
            return _entries.Take(limit).ToList();
    }

    /// <summary>Moves a folder to the front, dropping the oldest entries beyond the capacity.</summary>
    public void Record(string path, bool isDirectory = true)
    {
        if (string.IsNullOrWhiteSpace(path))
            return;

        var name = Try.Run(() => isDirectory ? new DirectoryInfo(path).Name : new FileInfo(path).Name)
            .GetOrElse(_ => path);

        lock (_gate)
        {
            _entries.RemoveAll(entry => string.Equals(entry.Path, path, StringComparison.OrdinalIgnoreCase));
            _entries.Insert(0, new(path, name.Length > 0 ? name : path, isDirectory,
                DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()));

            if (_entries.Count > Capacity)
                _entries.RemoveRange(Capacity, _entries.Count - Capacity);

            Save();
        }
    }

    public void Clear()
    {
        lock (_gate)
        {
            _entries = [];
            Save();
        }
    }

    private static List<RecentEntry> Load() =>
        Try.Run(() => JsonSerializer.Deserialize(File.ReadAllText(StorePath),
                AppJsonContext.Default.ListRecentEntry))
            .GetOrNull() ?? [];

    private void Save() =>
        Try.Run(() => File.WriteAllText(StorePath,
                JsonSerializer.Serialize(_entries, AppJsonContext.Default.ListRecentEntry)))
            .OnFailure(ex => Log.Warning(ex, "Could not store the recent list"));
}