using System.Collections.Concurrent;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;
using YetAnotherFileManager.Security;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Finds share devices on the local network over UDP broadcast. Discovery is only a convenience:
///     the pairing handshake still pins the public key before anything is trusted.
/// </summary>
[Singleton]
internal partial class ShareDiscovery
{
    private static readonly TimeSpan QueryInterval = TimeSpan.FromMilliseconds(2_000);
    private static readonly TimeSpan FreshFor = TimeSpan.FromSeconds(10);

    private readonly ConcurrentDictionary<string, (ShareDiscoveredDevice Device, long SeenAt)> _found =
        new(StringComparer.Ordinal);

    private readonly Lock _gate = new();
    private string _deviceName = "";
    private string _published = "";
    private CancellationTokenSource? _queryCts;
    private CancellationTokenSource? _receiveCts;
    private UdpClient? _socket;

    public void Apply(bool enabled, string deviceName)
    {
        lock (_gate)
        {
            _deviceName = deviceName;

            if (enabled)
            {
                if (_socket is null)
                    StartSocket();

                if (_queryCts is null)
                {
                    _queryCts = new();
                    _ = Task.Run(() => QueryLoopAsync(_queryCts.Token));
                }

                return;
            }

            StopQuery();
            StopSocket();
            _found.Clear();
            Publish();
        }
    }

    public IReadOnlyList<ShareDiscoveredDevice> Snapshot()
    {
        var cutoff = Environment.TickCount64 - (long)FreshFor.TotalMilliseconds;

        return
        [
            .. _found.Values
                .Where(entry => entry.SeenAt >= cutoff)
                .Select(entry => entry.Device)
                .OrderBy(device => device.Name, StringComparer.OrdinalIgnoreCase)
        ];
    }

    private void StartSocket()
    {
        var cts = _receiveCts = new();

        Try.Run(() =>
        {
            var socket = new UdpClient(AddressFamily.InterNetwork);
            socket.Client.SetSocketOption(SocketOptionLevel.Socket, SocketOptionName.ReuseAddress, true);
            socket.EnableBroadcast = true;
            socket.Client.Bind(new IPEndPoint(IPAddress.Any, ShareProtocol.DiscoveryPort));
            _socket = socket;
            _ = Task.Run(() => ReceiveLoopAsync(socket, cts.Token), cts.Token);
            Log.Information("Share discovery is listening on UDP {Port}", ShareProtocol.DiscoveryPort);
        }).OnFailure(ex => Log.Warning(ex, "Failed to open the share discovery socket"));
    }

    private void StopSocket()
    {
        _receiveCts?.Cancel();
        _receiveCts?.Dispose();
        _receiveCts = null;

        Try.Run(() => _socket?.Close()).OnFailure(ex => Log.Debug(ex, "Failed to close the share discovery socket"));
        _socket = null;
    }

    private void StopQuery()
    {
        _queryCts?.Cancel();
        _queryCts?.Dispose();
        _queryCts = null;
    }

    private async Task ReceiveLoopAsync(UdpClient socket, CancellationToken token)
    {
        while (!token.IsCancellationRequested)
        {
            UdpReceiveResult result;
            try
            {
                result = await socket.ReceiveAsync(token);
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
                Log.Debug(ex, "A share discovery datagram could not be read");
                continue;
            }

            (await Try.Run(() => HandleDatagramAsync(socket, result, token)))
                .OnFailure(ex => Log.Debug(ex, "A share discovery datagram could not be handled"));
        }
    }

    private async Task HandleDatagramAsync(UdpClient socket, UdpReceiveResult result, CancellationToken token)
    {
        var type = ShareFrames.ReadType(result.Buffer);
        var host = HostOf(result.RemoteEndPoint);

        switch (type)
        {
            case ShareProtocol.Discover:
                await SendAnnounceAsync(socket, result.RemoteEndPoint, token);
                return;

            case ShareProtocol.Announce:
            {
                var announce = JsonSerializer.Deserialize(result.Buffer, AppJsonContext.Default.ShareDiscoveryMessage);
                if (announce is not null && announce.DeviceId != ShareIdentity.Instance.Id)
                    Record(announce, host);

                return;
            }
        }
    }

    private async Task QueryLoopAsync(CancellationToken token)
    {
        while (!token.IsCancellationRequested)
        {
            SendQuery();
            Publish();

            try
            {
                await Task.Delay(QueryInterval, token);
            }
            catch (OperationCanceledException)
            {
                break;
            }
        }
    }

    private void SendQuery()
    {
        if (_socket is not { } socket)
            return;

        var frame = JsonSerializer.SerializeToUtf8Bytes(new(ShareProtocol.Discover,
                ShareIdentity.Instance.Id, _deviceName, ShareProtocol.SyncPort,
                ShareIdentity.Instance.PublicKeyBase64),
            AppJsonContext.Default.ShareDiscoveryMessage);

        TrySend(socket, frame, new(IPAddress.Broadcast, ShareProtocol.DiscoveryPort));

        foreach (var address in BroadcastAddresses())
            TrySend(socket, frame, new(address, ShareProtocol.DiscoveryPort));
    }

    private static Task SendAnnounceAsync(UdpClient socket, IPEndPoint target, CancellationToken token) =>
        socket.SendAsync(JsonSerializer.SerializeToUtf8Bytes(new(ShareProtocol.Announce,
                ShareIdentity.Instance.Id, ShareIdentity.Instance.DeviceName,
                ShareProtocol.SyncPort, ShareIdentity.Instance.PublicKeyBase64),
            AppJsonContext.Default.ShareDiscoveryMessage), target, token).AsTask();

    private void Record(ShareDiscoveryMessage announce, string host)
    {
        var device = new ShareDiscoveredDevice(announce.DeviceId, announce.DeviceName, host, announce.Port);

        _found[announce.DeviceId] = (device, Environment.TickCount64);
        Publish();
    }

    private void Publish()
    {
        var signature = string.Join('\n',
            Snapshot().Select(device => $"{device.Id}|{device.Name}|{device.Host}|{device.Port}"));
        if (signature == _published)
            return;

        _published = signature;
        if (!ShareService.IsInitialized)
            return;

        Try.Run(() => ShareService.Instance.OnDiscoveryChanged())
            .OnFailure(ex => Log.Debug(ex, "Failed to publish discovered share devices"));
    }

    private void TrySend(UdpClient socket, byte[] frame, IPEndPoint target) =>
        Try.Run(() => socket.Send(frame, frame.Length, target))
            .OnFailure(ex => Log.Debug(ex, "Failed to send a share discovery query to {Target}", target));

    private static IEnumerable<IPAddress> BroadcastAddresses()
    {
        foreach (var nic in UpInterfaces())
        foreach (var unicast in nic.GetIPProperties().UnicastAddresses)
        {
            if (unicast.Address.AddressFamily != AddressFamily.InterNetwork)
                continue;

            var address = unicast.Address.GetAddressBytes();
            var mask = unicast.IPv4Mask.GetAddressBytes();
            var broadcast = new byte[4];
            for (var i = 0; i < 4; i++)
                broadcast[i] = (byte)(address[i] | ~mask[i]);

            yield return new(broadcast);
        }
    }

    private static IEnumerable<NetworkInterface> UpInterfaces() =>
        NetworkInterface.GetAllNetworkInterfaces().Where(nic =>
            nic.OperationalStatus == OperationalStatus.Up &&
            nic.NetworkInterfaceType != NetworkInterfaceType.Loopback &&
            nic.Supports(NetworkInterfaceComponent.IPv4));

    private static string HostOf(IPEndPoint endpoint)
    {
        var address = endpoint.Address;
        if (address.IsIPv4MappedToIPv6)
            address = address.MapToIPv4();

        return address.ToString();
    }
}