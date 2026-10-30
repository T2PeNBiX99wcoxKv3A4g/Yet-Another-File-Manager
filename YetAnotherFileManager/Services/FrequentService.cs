using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The folders the user opens most often. Every navigation adds one to the folder's count, so
///     the list ranks itself instead of keeping every visit the way the recent list does.
/// </summary>
internal sealed class FrequentService : Singleton<FrequentService>
{
    private const int Capacity = 100;

    private static readonly string StorePath = Path.Combine(Constants.SettingsDirectory, "frequent.json");

    private readonly object _gate = new();

    private List<FrequentEntry> _entries = Load();

    /// <summary>The most-opened folders, highest count first and the newest first inside a tie.</summary>
    public IReadOnlyList<FrequentEntry> List(int limit = 50)
    {
        if (limit <= 0)
            return [];

        lock (_gate)
            return _entries
                .Where(entry => Try.Run(() => Directory.Exists(entry.Path)).GetOrElse(_ => false))
                .OrderByDescending(entry => entry.Count)
                .ThenByDescending(entry => entry.Last)
                .Take(limit)
                .ToList();
    }

    /// <summary>Counts one visit of a folder.</summary>
    public void Record(string path)
    {
        if (string.IsNullOrWhiteSpace(path))
            return;

        var folder = Try.Run(() => new DirectoryInfo(path)).GetOrNull();
        if (folder is not { Exists: true })
            return;

        var name = folder.Name.Length > 0 ? folder.Name : folder.FullName;

        lock (_gate)
        {
            var index = _entries.FindIndex(entry =>
                string.Equals(entry.Path, folder.FullName, StringComparison.OrdinalIgnoreCase));

            if (index >= 0)
            {
                var entry = _entries[index];
                _entries.RemoveAt(index);
                _entries.Add(entry with { Name = name, Count = entry.Count + 1, Last = Now() });
            }
            else
            {
                _entries.Add(new(folder.FullName, name, 1, Now()));
            }

            // A folder that is not opened again eventually falls out; keep the list bounded.
            if (_entries.Count > Capacity)
                _entries = _entries
                    .OrderByDescending(entry => entry.Count)
                    .ThenByDescending(entry => entry.Last)
                    .Take(Capacity)
                    .ToList();

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

    private static long Now() => DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();

    private static List<FrequentEntry> Load() =>
        Try.Run(() => JsonSerializer.Deserialize(File.ReadAllText(StorePath),
                AppJsonContext.Default.ListFrequentEntry))
            .GetOrNull() ?? [];

    private void Save() =>
        Try.Run(() => File.WriteAllText(StorePath,
                JsonSerializer.Serialize(_entries, AppJsonContext.Default.ListFrequentEntry)))
            .OnFailure(ex => Log.Warning(ex, "Could not store the frequent list"));
}
