using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The devices paired for sharing. A device is added only after its pairing handshake completes;
///     its pinned public key is what every later session is checked against.
/// </summary>
[Singleton]
internal partial class SharePeerStore
{
    private static readonly string FilePath = Path.Combine(Constants.SettingsDirectory, "share-peers.json");

    private readonly Lock _gate = new();
    private readonly List<SharePeer> _peers = [];
    private readonly SemaphoreSlim _writeGate = new(1, 1);

    public IReadOnlyList<SharePeer> All
    {
        get
        {
            lock (_gate)
                return [.. _peers];
        }
    }

    public SharePeer? Find(string id)
    {
        lock (_gate)
            return _peers.FirstOrDefault(peer => string.Equals(peer.Id, id, StringComparison.Ordinal));
    }

    public async Task InitializeAsync()
    {
        if (!File.Exists(FilePath))
            return;

        var read = await Try.Run(() => File.ReadAllTextAsync(FilePath));
        var json = read.OnFailure(ex => Log.Warning(ex, "Could not read {File}", FilePath)).GetOrNull();

        if (json is null)
            return;

        var stored = JsonSerializer.Deserialize(json, AppJsonContext.Default.SharePeerArray);
        if (stored is null)
            return;

        lock (_gate)
        {
            _peers.Clear();
            _peers.AddRange(stored.Where(peer => peer.Id.Length > 0 && peer.PublicKey.Length > 0));
        }
    }

    /// <summary>Adds a newly paired device, or refreshes the address and key of a known one.</summary>
    public async Task AddOrUpdateAsync(SharePeer peer)
    {
        await _writeGate.WaitAsync();
        try
        {
            lock (_gate)
            {
                var existing = _peers.FirstOrDefault(candidate =>
                    string.Equals(candidate.Id, peer.Id, StringComparison.Ordinal));

                if (existing is null)
                    _peers.Add(peer);
                else
                {
                    existing.Name = peer.Name;
                    existing.Host = peer.Host;
                    existing.Port = peer.Port;
                    existing.PublicKey = peer.PublicKey;
                    existing.Addresses = peer.Addresses;
                }
            }

            await SaveAsync();
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
                removed = _peers.RemoveAll(peer => string.Equals(peer.Id, id, StringComparison.Ordinal)) > 0;

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
        SharePeer[] snapshot;
        lock (_gate)
            snapshot = [.. _peers];

        var write = await Try.Run(() => File.WriteAllTextAsync(FilePath,
            JsonSerializer.Serialize(snapshot, AppJsonContext.Default.SharePeerArray)));
        write.OnFailure(ex => Log.Warning(ex, "Could not write {File}", FilePath));
    }
}