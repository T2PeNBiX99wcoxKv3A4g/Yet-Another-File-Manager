namespace YetAnotherFileManager.Models;

/// <summary>
///     One folder this device offers. <see cref="Mode" /> is <c>client</c> (only paired devices in
///     the app) or <c>web</c> (the browser file server).
/// </summary>
public sealed record ShareEntry(string Id, string Path, string Name, string Mode);

/// <summary>A device that has been paired for sharing. The public key is pinned on first pairing.</summary>
public sealed class SharePeer
{
    public string Id { get; set; } = string.Empty;

    public string Name { get; set; } = string.Empty;

    public string Host { get; set; } = string.Empty;

    public int Port { get; set; }

    public string PublicKey { get; set; } = string.Empty;

    public List<string> Addresses { get; set; } = [];

    public IEnumerable<string> AllAddresses()
    {
        if (!string.IsNullOrWhiteSpace(Host))
            yield return Host.Trim();

        foreach (var address in Addresses)
            if (!string.IsNullOrWhiteSpace(address))
                yield return address.Trim();
    }
}

/// <summary>A share as announced by another device; the local path never leaves its owner.</summary>
public sealed class ShareRemoteEntry
{
    public string Id { get; set; } = string.Empty;

    public string Name { get; set; } = string.Empty;

    public string Mode { get; set; } = "client";
}

/// <summary>One device seen on the local network.</summary>
public sealed record ShareDiscoveredDevice(string Id, string Name, string Host, int Port);

/// <summary>One device in the overview's share panel: discovered, paired, or both.</summary>
public sealed class SharePeerInfo
{
    public string Id { get; set; } = string.Empty;

    public string Name { get; set; } = string.Empty;

    public string Host { get; set; } = string.Empty;

    public int Port { get; set; }

    public bool Paired { get; set; }

    public bool Online { get; set; }

    public List<ShareRemoteEntry> Shares { get; set; } = [];
}