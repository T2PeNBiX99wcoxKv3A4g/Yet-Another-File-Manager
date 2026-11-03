using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     A global catalogue of the tags the app has seen. Tags themselves stay in each folder's index;
///     this file only remembers their names, their last colour and which folders used them, so the
///     Settings page can list them and a delete can clean every index that still contains one.
/// </summary>
internal sealed class TagCatalog : Singleton<TagCatalog>
{
    private static readonly string CatalogPath = Path.Combine(Constants.SettingsDirectory, "tags.json");

    private readonly Lock _gate = new();
    private readonly Dictionary<string, TagRecord> _tags = new(StringComparer.OrdinalIgnoreCase);

    private Timer? _saveTimer;
    private bool _loaded;

    public TagCatalog()
    {
        // The catalogue loads lazily so a broken tags.json never blocks startup.
    }

    /// <summary>Records the tags one directory currently shows, with their colours.</summary>
    public void Record(string directory, IEnumerable<string> names, IReadOnlyDictionary<string, string>? colors = null)
    {
        var list = names
            .Where(name => !string.IsNullOrWhiteSpace(name))
            .Select(name => name.Trim())
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToList();

        if (list.Count == 0)
            return;

        lock (_gate)
        {
            EnsureLoaded();

            var changed = false;

            foreach (var name in list)
            {
                if (!_tags.TryGetValue(name, out var record))
                {
                    _tags[name] = record = new TagRecord {Name = name};
                    changed = true;
                }

                if (!record.Directories.Contains(directory, StringComparer.OrdinalIgnoreCase))
                {
                    record.Directories.Add(directory);
                    changed = true;
                }

                if (colors is not null && colors.TryGetValue(name, out var color)
                    && !string.Equals(record.Color, color, StringComparison.OrdinalIgnoreCase))
                {
                    record.Color = color;
                    changed = true;
                }
            }

            if (changed)
                ScheduleSave();
        }
    }

    /// <summary>Every tag, alphabetical, with the number of folders it was seen in.</summary>
    public IReadOnlyList<TagCatalogEntry> List()
    {
        lock (_gate)
        {
            EnsureLoaded();

            return _tags.Values
                .OrderBy(record => record.Name, StringComparer.OrdinalIgnoreCase)
                .Select(record => new TagCatalogEntry(record.Name, record.Color, record.Directories.Count))
                .ToList();
        }
    }

    public IReadOnlyList<string> Names
    {
        get
        {
            lock (_gate)
            {
                EnsureLoaded();
                return _tags.Keys.OrderBy(name => name, StringComparer.OrdinalIgnoreCase).ToList();
            }
        }
    }

    /// <summary>Colours chosen in any folder; a folder's own colour wins when it has one.</summary>
    public IReadOnlyDictionary<string, string> Colors
    {
        get
        {
            lock (_gate)
            {
                EnsureLoaded();

                return _tags.Values
                    .Where(record => !string.IsNullOrWhiteSpace(record.Color))
                    .ToDictionary(record => record.Name, record => record.Color!, StringComparer.OrdinalIgnoreCase);
            }
        }
    }

    /// <summary>Removes a tag from every index the catalogue has seen, then from the catalogue.</summary>
    public async Task<bool> DeleteAsync(string name)
    {
        if (string.IsNullOrWhiteSpace(name))
            return false;

        string[] directories;

        lock (_gate)
        {
            EnsureLoaded();

            if (!_tags.Remove(name, out var record))
                return false;

            directories = [.. record.Directories];
            ScheduleSave();
        }

        foreach (var directory in directories)
        {
            var removed = await Try.Run(() => FolderIndex.RemoveTagAsync(directory, name));
            if (!removed.GetOrElse(_ => false))
                Log.Debug("Could not remove tag {Tag} from {Directory}", name, directory);
        }

        return true;
    }

    /// <summary>Renames a tag in every index the catalogue knows, merging with an existing name.</summary>
    public async Task<bool> RenameAsync(string name, string next)
    {
        next = next.Trim();

        if (string.IsNullOrWhiteSpace(name) || next.Length == 0 || string.Equals(name, next, StringComparison.Ordinal))
            return false;

        string[] directories;

        lock (_gate)
        {
            EnsureLoaded();

            if (!_tags.Remove(name, out var record))
                return false;

            if (_tags.TryGetValue(next, out var existing))
            {
                foreach (var directory in record.Directories)
                    if (!existing.Directories.Contains(directory, StringComparer.OrdinalIgnoreCase))
                        existing.Directories.Add(directory);

                existing.Color ??= record.Color;
            }
            else
            {
                record.Name = next;
                _tags[next] = record;
            }

            directories = [.. record.Directories];
            ScheduleSave();
        }

        foreach (var directory in directories)
        {
            var renamed = await Try.Run(() => FolderIndex.RenameTagAsync(directory, name, next));
            if (!renamed.GetOrElse(_ => false))
                Log.Debug("Could not rename tag {Tag} in {Directory}", name, directory);
        }

        return true;
    }

    private void EnsureLoaded()
    {
        if (_loaded)
            return;

        _loaded = true;

        if (!File.Exists(CatalogPath))
            return;

        var records = Try.Run(() => JsonSerializer.Deserialize(
            File.ReadAllText(CatalogPath),
            AppJsonContext.Default.ListTagRecord)).GetOrNull();

        foreach (var record in records ?? [])
            if (!string.IsNullOrWhiteSpace(record.Name))
                _tags[record.Name] = record;
    }

    private void ScheduleSave()
    {
        _saveTimer ??= new Timer(_ => Save(), null, Timeout.Infinite, Timeout.Infinite);
        _saveTimer.Change(250, Timeout.Infinite);
    }

    private void Save()
    {
        lock (_gate)
        {
            var result = Try.Run(() =>
            {
                Directory.CreateDirectory(Constants.SettingsDirectory);

                var json = JsonSerializer.Serialize(_tags.Values.ToList(), AppJsonContext.Default.ListTagRecord);
                var temporary = CatalogPath + ".tmp";

                File.WriteAllText(temporary, json);
                File.Move(temporary, CatalogPath, true);
            });

            result.OnFailure(ex => Log.Warning(ex, "Could not save the tag catalogue"));
        }
    }
}
