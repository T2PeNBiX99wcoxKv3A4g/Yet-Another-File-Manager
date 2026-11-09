using System.Net.Sockets;
using YetAnotherFileManager.Models;
using YetAnotherFileManager.Security;

namespace YetAnotherFileManager.Services;

/// <summary>Connects to a paired share device, or starts a pairing with a discovered address.</summary>
internal static class SharePeerClient
{
    public static async Task<SharePeer> PairAsync(string host, int port,
        Func<string, SharePeer, Task> onChallenge, CancellationToken token)
    {
        using var client = new TcpClient
        {
            NoDelay = true
        };
        await client.ConnectAsync(host, port, token);

        return await SharePairingHandshake.InitiateAsync(client.GetStream(), ShareIdentity.Instance,
            ShareIdentity.Instance.DeviceName, ShareProtocol.SyncPort, host, onChallenge, token);
    }

    /// <summary>Opens an authenticated session, trying every address the peer has.</summary>
    public static async Task<ShareSecureSession> ConnectAsync(SharePeer peer, CancellationToken token)
    {
        ShareSecurityException? failure = null;

        foreach (var address in peer.AllAddresses().Distinct(StringComparer.OrdinalIgnoreCase))
        {
            var client = new TcpClient
            {
                NoDelay = true
            };

            try
            {
                await client.ConnectAsync(address, peer.Port, token);
                return await SharePeerHandshake.ConnectAsync(client.GetStream(), ShareIdentity.Instance, peer,
                    token, client);
            }
            catch (OperationCanceledException)
            {
                client.Dispose();
                throw;
            }
            catch (Exception ex)
            {
                client.Dispose();
                failure = ex as ShareSecurityException
                          ?? new ShareSecurityException(
                              $"The device at {address}:{peer.Port} did not answer ({ex.Message}).");
            }
        }

        throw failure ?? new ShareSecurityException("The device is unreachable.");
    }
}