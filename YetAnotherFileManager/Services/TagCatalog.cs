using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The global tag catalogue: every tag has an id, a name and a colour, and a folder's index
///     stores the id rather than the text. The catalogue also remembers which folders used a tag, so
///     deleting one can clean every index that still contains its id.
/// </summary>
internal sealed class TagCatalog : Singleton<TagCatalog>
{
    private static readonly string CatalogPath = Path.Combine(Constants.SettingsDirectory, "tags.json");

    private readonly Lock _gate = new();

    /// <summary>Tags by name, which is how the settings page and the picker talk about them.</summary>
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
                    _tags[name] = record = NewRecord(name);
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

    /// <summary>Returns the tag with this name, creating it when it is new.</summary>
    public TagRecord Ensure(string name, string? color = null)
    {
        name = name.Trim();

        lock (_gate)
        {
            EnsureLoaded();

            if (!_tags.TryGetValue(name, out var record))
            {
                _tags[name] = record = NewRecord(name);
                ScheduleSave();
            }

            if (!string.IsNullOrWhiteSpace(color) && !string.Equals(record.Color, color, StringComparison.OrdinalIgnoreCase))
            {
                record.Color = color;
                ScheduleSave();
            }

            return Copy(record);
        }
    }

    /// <summary>
    ///     Maps the values stored in a folder index to tag ids. An id is kept as it is, a legacy name
    ///     becomes its tag's id, and an unknown name becomes a new tag.
    /// </summary>
    public IReadOnlyList<string> ResolveIds(IEnumerable<string> values, IReadOnlyDictionary<string, string>? colors = null)
    {
        lock (_gate)
        {
            EnsureLoaded();

            var ids = new List<string>();
            var changed = false;

            foreach (var value in values)
            {
                if (string.IsNullOrWhiteSpace(value))
                    continue;

                var id = _tags.Values.FirstOrDefault(record => string.Equals(record.Id, value, StringComparison.OrdinalIgnoreCase))?.Id;

                if (id is null)
                {
                    var name = value.Trim();

                    if (!_tags.TryGetValue(name, out var record))
                    {
                        _tags[name] = record = NewRecord(name);
                        changed = true;
                    }

                    if (colors is not null && colors.TryGetValue(name, out var color)
                        && !string.Equals(record.Color, color, StringComparison.OrdinalIgnoreCase))
                    {
                        record.Color = color;
                        changed = true;
                    }

                    id = record.Id;
                }

                if (!ids.Contains(id, StringComparer.OrdinalIgnoreCase))
                    ids.Add(id);
            }

            if (changed)
                ScheduleSave();

            return ids;
        }
    }

    /// <summary>The name of a tag id, or null when the id is no longer in the catalogue.</summary>
    public string? NameOf(string id)
    {
        lock (_gate)
        {
            EnsureLoaded();

            return _tags.Values.FirstOrDefault(record => string.Equals(record.Id, id, StringComparison.OrdinalIgnoreCase))?.Name;
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
                .Select(record => new TagCatalogEntry(record.Id, record.Name, record.Color, record.Directories.Count))
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

    /// <summary>The colour of every tag, by name; the folder's own colour is only a legacy fallback.</summary>
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

    /// <summary>Changes one tag's colour everywhere.</summary>
    public bool SetColor(string name, string color)
    {
        if (string.IsNullOrWhiteSpace(name) || string.IsNullOrWhiteSpace(color))
            return false;

        lock (_gate)
        {
            EnsureLoaded();

            if (!_tags.TryGetValue(name, out var record))
                return false;

            record.Color = color;
            ScheduleSave();
            return true;
        }
    }

    /// <summary>Removes a tag from every index the catalogue has seen, then from the catalogue.</summary>
    public async Task<bool> DeleteAsync(string name)
    {
        if (string.IsNullOrWhiteSpace(name))
            return false;

        string id;
        string[] directories;

        lock (_gate)
        {
            EnsureLoaded();

            if (!_tags.Remove(name, out var record))
                return false;

            id = record.Id;
            directories = [.. record.Directories];
            ScheduleSave();
        }

        var failed = new List<string>();

        foreach (var directory in directories)
        {
            // Indexes store the id, so that is what has to be removed.
            var removed = await Try.Run(() => DirectoryIndex.RemoveTagAsync(directory, id));
            if (!removed.GetOrElse(_ => false))
            {
                failed.Add(directory);
                Log.Debug("Could not remove tag {Tag} from {Directory}", name, directory);
            }
        }

        if (failed.Count == 0)
            return true;

        // A folder that could not be cleaned still shows the tag, so the record goes back. Reporting a
        // success here would only be undone by the next listing of that folder.
        lock (_gate)
        {
            _tags[name] = new TagRecord {Id = id, Name = name, Directories = failed};
            ScheduleSave();
        }

        return false;
    }

    /// <summary>Renames a tag; the id stays the same, so no folder index has to change.</summary>
    public async Task<bool> RenameAsync(string name, string next)
    {
        next = next.Trim();

        if (string.IsNullOrWhiteSpace(name) || next.Length == 0 || string.Equals(name, next, StringComparison.Ordinal))
            return false;

        string[] directories;

        lock (_gate)
        {
            EnsureLoaded();

            if (!_tags.TryGetValue(name, out var record) || _tags.ContainsKey(next))
                return false;

            _tags.Remove(name);
            record.Name = next;
            _tags[next] = record;
            directories = [.. record.Directories];
            ScheduleSave();
        }

        // Legacy indexes may still hold the old name; rewrite those, while ids need no change.
        foreach (var directory in directories)
        {
            var renamed = await Try.Run(() => DirectoryIndex.RenameTagAsync(directory, name, next));
            if (!renamed.GetOrElse(_ => false))
                Log.Debug("Could not rename tag {Tag} in {Directory}", name, directory);
        }

        return true;
    }

    private static TagRecord NewRecord(string name) =>
        new() {Id = Guid.NewGuid().ToString("N"), Name = name};

    private static TagRecord Copy(TagRecord record) =>
        new() {Id = record.Id, Name = record.Name, Color = record.Color, Directories = [.. record.Directories]};

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

        var changed = false;

        foreach (var record in records ?? [])
        {
            if (string.IsNullOrWhiteSpace(record.Name))
                continue;

            // Records written before tags had ids get one now.
            if (string.IsNullOrWhiteSpace(record.Id))
            {
                record.Id = Guid.NewGuid().ToString("N");
                changed = true;
            }

            _tags[record.Name] = record;
        }

        if (changed)
            ScheduleSave();
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
