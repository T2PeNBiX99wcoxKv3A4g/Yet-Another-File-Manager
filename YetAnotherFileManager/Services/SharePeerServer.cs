using System.Net;
using System.Net.Sockets;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Security;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The encrypted share listener. It accepts pairing requests and authenticated sessions and
///     answers TCP discovery probes; a session is handed to <see cref="ShareService" />.
/// </summary>
internal sealed class SharePeerServer : Singleton<SharePeerServer>
{
    private CancellationTokenSource? _cancellation;
    private TcpListener? _listener;

    public void Apply(bool enabled)
    {
        if (!enabled)
        {
            Stop();
            return;
        }

        if (_listener is not null)
            return;

        var dual = Try.Run(() =>
        {
            var listener = new TcpListener(IPAddress.IPv6Any, ShareProtocol.SyncPort);
            listener.Server.DualMode = true;
            listener.Start();
            Log.Information("Share listener bound to IPv4 and IPv6 on port {Port}", ShareProtocol.SyncPort);
            return listener;
        });

        if (dual.Exception is null && dual.Value is { } dualListener)
        {
            StartLoop(dualListener);
            return;
        }

        Log.Debug(dual.Exception, "A dual-stack share listener is unavailable; binding IPv4 only");

        var ipv4 = Try.Run(() =>
        {
            var listener = new TcpListener(IPAddress.Any, ShareProtocol.SyncPort);
            listener.Start();
            Log.Information("Share listener bound to IPv4 on port {Port}", ShareProtocol.SyncPort);
            return listener;
        });

        if (ipv4.Exception is null && ipv4.Value is { } ipv4Listener)
            StartLoop(ipv4Listener);
        else
            Log.Warning(ipv4.Exception, "Failed to start the share listener on port {Port}", ShareProtocol.SyncPort);
    }

    private void StartLoop(TcpListener listener)
    {
        var cts = new CancellationTokenSource();
        _listener = listener;
        _cancellation = cts;
        _ = Task.Run(() => AcceptLoopAsync(listener, cts.Token));
    }

    public void Stop()
    {
        _cancellation?.Cancel();
        _cancellation?.Dispose();
        _cancellation = null;

        Try.Run(() => _listener?.Stop()).OnFailure(ex => Log.Debug(ex, "Failed to stop the share listener"));
        _listener = null;
    }

    private async Task AcceptLoopAsync(TcpListener listener, CancellationToken token)
    {
        while (!token.IsCancellationRequested)
        {
            TcpClient client;
            try
            {
                client = await listener.AcceptTcpClientAsync(token);
            }
            catch (OperationCanceledException)
            {
                break;
            }
            catch (ObjectDisposedException)
            {
                break;
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "The share listener failed to accept a connection");
                continue;
            }

            _ = Task.Run(() => HandleClientAsync(client, token), token);
        }
    }

    private async Task HandleClientAsync(TcpClient client, CancellationToken token)
    {
        using (client)
        using (var cts = CancellationTokenSource.CreateLinkedTokenSource(token))
        {
            cts.CancelAfter(ShareProtocol.PairTimeout + ShareProtocol.ConnectionTimeout);
            client.NoDelay = true;

            var stream = client.GetStream();
            (await Try.Run(async () =>
            {
                var frame = await ShareFrames.ReadFrameAsync(stream, cts.Token);
                if (frame is null)
                    return;

                switch (ShareFrames.ReadType(frame))
                {
                    case ShareProtocol.PairRequest:
                        await HandlePairingAsync(stream, frame, client, cts.Token);
                        break;

                    case ShareProtocol.SessionHello:
                        await HandleSessionAsync(stream, frame, client, cts.Token, token);
                        break;

                    case ShareProtocol.Discover:
                        await WriteAnnounceAsync(stream, cts.Token);
                        break;

                    default:
                        await WriteStatusAsync(stream, false, "Unsupported share message.", cts.Token);
                        break;
                }
            })).OnFailure(ex => Log.Debug(ex, "Failed to handle a share connection"));
        }
    }

    private async Task HandlePairingAsync(NetworkStream stream, byte[] frame, TcpClient client,
        CancellationToken token)
    {
        var peer = await SharePairingHandshake.AcceptAsync(stream, ShareIdentity.Instance,
            ShareIdentity.Instance.DeviceName, ShareProtocol.SyncPort, HostOf(client), frame,
            ShareService.Instance.RequestApprovalAsync, token);

        if (peer is null)
            return;

        await SharePeerStore.Instance.AddOrUpdateAsync(peer);
        Log.Information("Paired for sharing with {Device} ({Id})", peer.Name, peer.Id);
        ShareService.Instance.OnPeerPaired(peer);
    }

    private async Task HandleSessionAsync(NetworkStream stream, byte[] frame, TcpClient client,
        CancellationToken handshakeToken, CancellationToken sessionToken)
    {
        using var session = await SharePeerHandshake.AcceptAsync(stream, ShareIdentity.Instance,
            id => SharePeerStore.Instance.Find(id), frame, handshakeToken, client);

        await ShareService.Instance.HandleSessionAsync(session, sessionToken);
    }

    private static Task WriteAnnounceAsync(NetworkStream stream, CancellationToken token)
    {
        var identity = ShareIdentity.Instance;
        return ShareFrames.WriteAsync(stream,
            new ShareDiscoveryMessage(ShareProtocol.Announce, identity.Id, identity.DeviceName,
                ShareProtocol.SyncPort, identity.PublicKeyBase64),
            AppJsonContext.Default.ShareDiscoveryMessage, token);
    }

    private static Task WriteStatusAsync(NetworkStream stream, bool ok, string? error, CancellationToken token) =>
        ShareFrames.WriteAsync(stream, new ShareStatusMessage(ShareProtocol.Status, ok, error),
            AppJsonContext.Default.ShareStatusMessage, token);

    private static string HostOf(TcpClient client)
    {
        var address = (client.Client.RemoteEndPoint as IPEndPoint)?.Address ?? IPAddress.None;
        if (address.IsIPv4MappedToIPv6)
            address = address.MapToIPv4();

        return address.ToString();
    }
}
