using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The browsers that have been allowed or refused by the web shares. A device is identified by
///     the random value in its cookie, so clearing cookies makes it ask again.
/// </summary>
[Singleton]
internal partial class ShareDeviceStore
{
    private static readonly string FilePath = Path.Combine(Constants.SettingsDirectory, "share-devices.json");

    private readonly Lock _gate = new();
    private readonly List<ShareDevice> _devices = [];
    private readonly SemaphoreSlim _writeGate = new(1, 1);

    public IReadOnlyList<ShareDevice> All
    {
        get
        {
            lock (_gate)
                return [.. _devices.OrderByDescending(device => device.LastSeen)];
        }
    }

    public ShareDevice? Find(string id)
    {
        lock (_gate)
            return _devices.FirstOrDefault(device => string.Equals(device.Id, id, StringComparison.Ordinal));
    }

    public async Task InitializeAsync()
    {
        if (!File.Exists(FilePath))
            return;

        var read = await Try.Run(() => File.ReadAllTextAsync(FilePath));
        var json = read.OnFailure(ex => Log.Warning(ex, "Could not read {File}", FilePath)).GetOrNull();

        if (json is null)
            return;

        var stored = JsonSerializer.Deserialize(json, AppJsonContext.Default.ShareDeviceArray);
        if (stored is null)
            return;

        lock (_gate)
        {
            _devices.Clear();
            _devices.AddRange(stored.Where(device => device.Id.Length > 0));
        }
    }

    /// <summary>Records that the browser was seen, keeping its decision and expiry.</summary>
    public async Task<ShareDevice> TouchAsync(string id, string name, string address)
    {
        await _writeGate.WaitAsync();
        try
        {
            ShareDevice device;
            lock (_gate)
            {
                var existing = _devices.FirstOrDefault(candidate =>
                    string.Equals(candidate.Id, id, StringComparison.Ordinal));

                if (existing is null)
                {
                    device = new ShareDevice
                    {
                        Id = id,
                        Name = name,
                        Address = address,
                        FirstSeen = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds(),
                        LastSeen = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()
                    };

                    _devices.Add(device);
                }
                else
                {
                    existing.Name = name;
                    existing.Address = address;
                    existing.LastSeen = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
                    device = existing;
                }
            }

            await SaveAsync();
            return Snapshot(device);
        }
        finally
        {
            _writeGate.Release();
        }
    }

    /// <summary>Gives a device a decision and an expiry; creates it when the browser is unknown.</summary>
    public async Task<ShareDevice> SetStateAsync(string id, string state, long expiresAt,
        string? name = null, string? address = null)
    {
        await _writeGate.WaitAsync();
        try
        {
            ShareDevice device;
            lock (_gate)
            {
                var existing = _devices.FirstOrDefault(candidate =>
                    string.Equals(candidate.Id, id, StringComparison.Ordinal));

                if (existing is null)
                {
                    existing = new ShareDevice
                    {
                        Id = id,
                        Name = name ?? "",
                        Address = address ?? "",
                        FirstSeen = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()
                    };
                    _devices.Add(existing);
                }

                existing.State = state;
                existing.ExpiresAt = expiresAt;
                existing.LastSeen = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
                if (name is { Length: > 0 })
                    existing.Name = name;
                if (address is { Length: > 0 })
                    existing.Address = address;
                device = existing;
            }

            await SaveAsync();
            return Snapshot(device);
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
                removed = _devices.RemoveAll(device => string.Equals(device.Id, id, StringComparison.Ordinal)) > 0;

            if (removed)
                await SaveAsync();

            return removed;
        }
        finally
        {
            _writeGate.Release();
        }
    }

    private async Task SaveAsync()
    {
        ShareDevice[] snapshot;
        lock (_gate)
            snapshot = [.. _devices];

        var write = await Try.Run(() => File.WriteAllTextAsync(FilePath,
            JsonSerializer.Serialize(snapshot, AppJsonContext.Default.ShareDeviceArray)));
        write.OnFailure(ex => Log.Warning(ex, "Could not write {File}", FilePath));
    }

    private static ShareDevice Snapshot(ShareDevice device) =>
        new()
        {
            Id = device.Id,
            Name = device.Name,
            Address = device.Address,
            State = device.State,
            FirstSeen = device.FirstSeen,
            LastSeen = device.LastSeen,
            ExpiresAt = device.ExpiresAt
        };
}
