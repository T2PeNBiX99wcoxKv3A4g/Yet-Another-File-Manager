using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The folders this device shares, kept in their own file. Reads use the in-memory list; writes
///     serialize and persist asynchronously.
/// </summary>
internal sealed class ShareStore : Singleton<ShareStore>
{
    private static readonly string FilePath = Path.Combine(Constants.SettingsDirectory, "shares.json");

    private readonly Lock _gate = new();
    private readonly List<ShareEntry> _shares = [];
    private readonly SemaphoreSlim _writeGate = new(1, 1);

    public IReadOnlyList<ShareEntry> All
    {
        get
        {
            lock (_gate)
                return [.. _shares];
        }
    }

    public ShareEntry? Find(string id)
    {
        lock (_gate)
            return _shares.FirstOrDefault(share => string.Equals(share.Id, id, StringComparison.Ordinal));
    }

    public async Task InitializeAsync()
    {
        if (!File.Exists(FilePath))
            return;

        var read = await Try.Run(() => File.ReadAllTextAsync(FilePath));
        var json = read.OnFailure(ex => Log.Warning(ex, "Could not read {File}", FilePath)).GetOrNull();

        if (json is null)
            return;

        var stored = JsonSerializer.Deserialize(json, AppJsonContext.Default.ShareEntryArray);
        if (stored is null)
            return;

        lock (_gate)
        {
            _shares.Clear();
            _shares.AddRange(stored.Where(share =>
                share.Id.Length > 0 && share.Path.Length > 0 && Directory.Exists(share.Path)));
        }
    }

    /// <summary>Adds a folder once; a second add of the same path refreshes its mode instead.</summary>
    public async Task<ShareEntry> AddAsync(string path, string mode)
    {
        await _writeGate.WaitAsync();
        try
        {
            ShareEntry entry;
            lock (_gate)
            {
                var index = _shares.FindIndex(share =>
                    string.Equals(share.Path, path, StringComparison.OrdinalIgnoreCase));

                if (index >= 0)
                {
                    entry = _shares[index] with
                    {
                        Mode = NormalizeMode(mode)
                    };
                    _shares[index] = entry;
                }
                else
                {
                    var name = Path.GetFileName(path.TrimEnd('\\', '/'));
                    entry = new(Guid.NewGuid().ToString("N")[..10], path,
                        name.Length > 0 ? name : path, NormalizeMode(mode));
                    _shares.Add(entry);
                }
            }

            await SaveAsync();
            return entry;
        }
        finally
        {
            _writeGate.Release();
        }
    }

    public async Task<bool> RemoveAsync(string id)
    {
        await _writeGate.WaitAsync();
        try
        {
            bool removed;
            lock (_gate)
                removed = _shares.RemoveAll(share => string.Equals(share.Id, id, StringComparison.Ordinal)) > 0;

            if (removed)
                await SaveAsync();

            return removed;
        }
        finally
        {
            _writeGate.Release();
        }
    }

    public async Task<ShareEntry?> SetModeAsync(string id, string mode)
    {
        ShareEntry? result = null;
        await _writeGate.WaitAsync();
        try
        {
            lock (_gate)
            {
                var index = _shares.FindIndex(share => string.Equals(share.Id, id, StringComparison.Ordinal));
                if (index < 0)
                    return null;

                result = _shares[index] with
                {
                    Mode = NormalizeMode(mode)
                };
                _shares[index] = result;
            }

            await SaveAsync();
            return result;
        }
        finally
        {
            _writeGate.Release();
        }
    }

    public static string NormalizeMode(string? mode) =>
        string.Equals(mode, "web", StringComparison.OrdinalIgnoreCase) ? "web" : "client";

    private async Task SaveAsync()
    {
        ShareEntry[] snapshot;
        lock (_gate)
            snapshot = [.. _shares];

        var write = await Try.Run(() => File.WriteAllTextAsync(FilePath,
            JsonSerializer.Serialize(snapshot, AppJsonContext.Default.ShareEntryArray)));
        write.OnFailure(ex => Log.Warning(ex, "Could not write {File}", FilePath));
    }
}