using System.Collections.Concurrent;
using System.Net;
using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Messaging;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;
using YetAnotherFileManager.Security;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Coordinates local shares, the web file server and the encrypted peer sessions: pairing,
///     discovery, remote listings and downloads. The wire protocol is shared with
///     <see cref="SharePeerServer" /> and <see cref="SharePeerClient" />.
/// </summary>
internal sealed class ShareService : Singleton<ShareService>
{
    private static readonly TimeSpan CatalogFreshFor = TimeSpan.FromSeconds(20);
    private static readonly TimeSpan BrowseTimeout = TimeSpan.FromSeconds(45);

    private readonly ConcurrentDictionary<string, (IReadOnlyList<ShareRemoteEntry> Shares, long At)> _catalogs =
        new(StringComparer.Ordinal);

    private readonly ConcurrentDictionary<string, long> _refreshing = new(StringComparer.Ordinal);
    private readonly Lock _incomingLock = new();
    private readonly SemaphoreSlim _outgoing = new(1, 1);
    private IncomingPairing? _incoming;
    private string _published = "";

    public ShareService() => NativeBridge.MessageReceived += HandleMessageAsync;

    /// <summary>Reads the stored shares and peers and starts discovery, the listener and the web server.</summary>
    public async Task InitializeAsync()
    {
        await ShareStore.Instance.InitializeAsync();
        await SharePeerStore.Instance.InitializeAsync();

        ShareDiscovery.Instance.Apply(true, ShareIdentity.Instance.DeviceName);
        SharePeerServer.Instance.Apply(true);
        await WebShareServer.Instance.ApplyAsync();
        await PushPeersAsync();
    }

    private Task<NativeResponse?> HandleMessageAsync(NativeContext context) => context.Request.Type switch
    {
        "share.list" => Task.FromResult<NativeResponse?>(context.Reply("share.list.result", ListPayload())),
        "share.add" => AddAsync(context),
        "share.remove" => RemoveAsync(context),
        "share.mode" => SetModeAsync(context),
        "share.peers" => PeersAsync(context),
        "share.peers.refresh" => RefreshPeersAsync(context),
        "share.pair.start" => StartPairAsync(context),
        "share.pair.respond" => RespondAsync(context),
        "share.peer.remove" => RemovePeerAsync(context),
        "share.browse" => BrowseAsync(context),
        "share.download" => DownloadAsync(context),
        "share.port" => SetPortAsync(context),
        _ => Task.FromResult<NativeResponse?>(null)
    };

    private static ShareListPayload ListPayload() =>
        new(ShareStore.Instance.All, WebShareServer.Instance.Running, WebShareServer.Instance.Port,
            WebShareServer.Instance.Urls(), ShareIdentity.Instance.Id,
            ShareIdentity.Instance.DeviceName, ShareIdentity.Instance.Fingerprint);

    private async Task<NativeResponse?> AddAsync(NativeContext context)
    {
        var request = context.Payload<ShareAddRequest>();
        var path = request?.Path?.Trim() ?? "";

        if (path.Length == 0 || !Directory.Exists(path))
            return context.Fail("share.add.result", "That folder does not exist.");

        await ShareStore.Instance.AddAsync(Path.GetFullPath(path), ShareStore.NormalizeMode(request?.Mode));
        await WebShareServer.Instance.ApplyAsync();
        await PushPeersAsync();
        return context.Reply("share.add.result", ListPayload());
    }

    private async Task<NativeResponse?> RemoveAsync(NativeContext context)
    {
        var id = context.Payload<ShareIdRequest>()?.Id ?? "";
        await ShareStore.Instance.RemoveAsync(id);
        await WebShareServer.Instance.ApplyAsync();
        await PushPeersAsync();
        return context.Reply("share.remove.result", ListPayload());
    }

    private async Task<NativeResponse?> SetModeAsync(NativeContext context)
    {
        var request = context.Payload<ShareModeRequest>();
        await ShareStore.Instance.SetModeAsync(request?.Id ?? "", ShareStore.NormalizeMode(request?.Mode));
        await WebShareServer.Instance.ApplyAsync();
        await PushPeersAsync();
        return context.Reply("share.mode.result", ListPayload());
    }

    private async Task<NativeResponse?> PeersAsync(NativeContext context)
    {
        var peers = await PeersSnapshotAsync();
        return context.Reply("share.peers.result", new SharePeersPayload(peers));
    }

    private async Task<NativeResponse?> SetPortAsync(NativeContext context)
    {
        var port = context.Payload<SharePortRequest>()?.Port;
        await SettingsService.Instance.UpdateAsync(settings => settings with
        {
            SharePort = port is >= 1024 and <= 65535 ? port : null
        });

        await WebShareServer.Instance.ApplyAsync();
        return context.Reply("share.port.result", ListPayload());
    }

    private async Task<NativeResponse?> RefreshPeersAsync(NativeContext context)
    {
        await Task.WhenAll(SharePeerStore.Instance.All.Select(peer => RefreshCatalogAsync(peer, true)));

        await PushPeersAsync();
        return context.Reply("share.peers.result", new SharePeersPayload(await PeersSnapshotAsync()));
    }

    private async Task<NativeResponse?> RemovePeerAsync(NativeContext context)
    {
        await SharePeerStore.Instance.RemoveAsync(context.Payload<SharePeerRemoveRequest>()?.DeviceId ?? "");
        _catalogs.Clear();
        await PushPeersAsync();
        return context.Reply("share.peer.remove.result", new OkPayload());
    }

    // ---- pairing ------------------------------------------------------------------------------

    /// <summary>Called by the listener; shows the prompt and waits for the local user's answer.</summary>
    public async Task<bool> RequestApprovalAsync(SharePairingPrompt prompt, CancellationToken token)
    {
        var requestId = Guid.NewGuid().ToString("N");
        var decision = new TaskCompletionSource<bool>(TaskCreationOptions.RunContinuationsAsynchronously);

        lock (_incomingLock)
        {
            if (_incoming is not null)
                return false;

            _incoming = new(requestId, decision);
        }

        WindowManager.Instance.ShowMainWindow();
        WindowManager.Instance.RunOnMainWindow(() => WindowManager.Instance.Notify("share.pair.request",
            new SharePairRequestPayload(requestId, prompt.DeviceId, prompt.DeviceName, prompt.Code)));

        try
        {
            return await decision.Task.WaitAsync(ShareProtocol.PairTimeout, token);
        }
        catch (Exception)
        {
            return false;
        }
        finally
        {
            lock (_incomingLock)
                if (_incoming?.RequestId == requestId)
                    _incoming = null;
        }
    }

    /// <summary>Called after either side stored a new device.</summary>
    public void OnPeerPaired(SharePeer peer)
    {
        Constants.Logger.Information("Device {Name} ({Id}) is paired for sharing", peer.Name, peer.Id);
        _ = RefreshCatalogAsync(peer, true);
        _ = PushPeersAsync();
    }

    private Task<NativeResponse?> StartPairAsync(NativeContext context)
    {
        var request = context.Payload<SharePairStartRequest>();
        if (request is not {Host.Length: > 0, Port: > 0})
            return Task.FromResult<NativeResponse?>(context.Fail("share.pair.start.result",
                "A device address is required."));

        _ = Task.Run(() => RunPairAsync(request));
        return Task.FromResult<NativeResponse?>(context.Reply("share.pair.start.result", new OkPayload()));
    }

    private async Task RunPairAsync(SharePairStartRequest request)
    {
        if (!await _outgoing.WaitAsync(0))
        {
            Push("share.pair.result", new SharePairResultPayload(false, null, null,
                "Another pairing is already in progress."));
            return;
        }

        try
        {
            using var cts = new CancellationTokenSource(ShareProtocol.PairTimeout + ShareProtocol.ConnectionTimeout);

            var peer = await SharePeerClient.PairAsync(request.Host, request.Port,
                (code, device) =>
                {
                    Push("share.pair.code", new SharePairCodePayload(code, device.Id, device.Name));
                    return Task.CompletedTask;
                }, cts.Token);

            await SharePeerStore.Instance.AddOrUpdateAsync(peer);
            Push("share.pair.result", new SharePairResultPayload(true, peer.Id, peer.Name, null));
            OnPeerPaired(peer);
        }
        catch (Exception ex)
        {
            Constants.Logger.Information(ex, "Pairing for sharing with {Host}:{Port} failed", request.Host, request.Port);
            Push("share.pair.result", new SharePairResultPayload(false, null, null, ex.Message));
        }
        finally
        {
            _outgoing.Release();
        }
    }

    private Task<NativeResponse?> RespondAsync(NativeContext context)
    {
        var request = context.Payload<SharePairRespondRequest>();
        if (request is not {RequestId.Length: > 0})
            return Task.FromResult<NativeResponse?>(context.Fail("share.pair.respond.result",
                "The request id is missing."));

        IncomingPairing? incoming;
        lock (_incomingLock)
            incoming = _incoming?.RequestId == request.RequestId ? _incoming : null;

        incoming?.Decision.TrySetResult(request.Accept);
        return Task.FromResult<NativeResponse?>(context.Reply("share.pair.respond.result", new OkPayload()));
    }

    // ---- discovery and peer list --------------------------------------------------------------

    /// <summary>Called whenever discovery sees a device appear or disappear.</summary>
    public void OnDiscoveryChanged()
    {
        foreach (var device in ShareDiscovery.Instance.Snapshot())
        {
            var peer = SharePeerStore.Instance.Find(device.Id);
            if (peer is not null && _refreshing.GetValueOrDefault(device.Id, 0) < Environment.TickCount64 - 15_000)
                _ = RefreshCatalogAsync(peer, false);
        }

        _ = PushPeersAsync();
    }

    private async Task<IReadOnlyList<SharePeerInfo>> PeersSnapshotAsync()
    {
        var discovered = ShareDiscovery.Instance.Snapshot().ToDictionary(device => device.Id, StringComparer.Ordinal);
        var peers = new Dictionary<string, SharePeerInfo>(StringComparer.Ordinal);
        var now = Environment.TickCount64;

        foreach (var paired in SharePeerStore.Instance.All)
        {
            discovered.TryGetValue(paired.Id, out var device);
            var hasCatalog = _catalogs.TryGetValue(paired.Id, out var catalog);
            var recent = hasCatalog && now - catalog.At < 120_000;
            var online = device is not null || recent;

            peers[paired.Id] = new()
            {
                Id = paired.Id,
                Name = paired.Name,
                Host = device?.Host ?? paired.Host,
                Port = device?.Port ?? paired.Port,
                Paired = true,
                Online = online,
                Shares = hasCatalog ? [.. catalog.Shares] : []
            };
        }

        foreach (var device in discovered.Values)
        {
            if (peers.ContainsKey(device.Id))
                continue;

            peers[device.Id] = new()
            {
                Id = device.Id,
                Name = device.Name,
                Host = device.Host,
                Port = device.Port,
                Paired = false,
                Online = true
            };
        }

        return
        [
            .. peers.Values
                .OrderByDescending(peer => peer.Paired)
                .ThenByDescending(peer => peer.Online)
                .ThenBy(peer => peer.Name, StringComparer.OrdinalIgnoreCase)
        ];
    }

    /// <summary>Fetches a paired device's share catalogue, at most once every few seconds.</summary>
    private async Task RefreshCatalogAsync(SharePeer peer, bool force)
    {
        var now = Environment.TickCount64;
        if (!force && _refreshing.TryGetValue(peer.Id, out var last) && now - last < CatalogFreshFor.TotalMilliseconds)
            return;

        if (!force && _catalogs.TryGetValue(peer.Id, out var cached) && now - cached.At < CatalogFreshFor.TotalMilliseconds)
            return;

        _refreshing[peer.Id] = now;

        var result = await Try.Run(() => FetchCatalogAsync(peer));
        var shares = result.GetOrNull();
        if (shares is null)
            return;

        _catalogs[peer.Id] = ([.. shares], now);
        await PushPeersAsync();
    }

    private static async Task<IReadOnlyList<ShareRemoteEntry>> FetchCatalogAsync(SharePeer peer)
    {
        using var cts = new CancellationTokenSource(BrowseTimeout);
        using var session = await SharePeerClient.ConnectAsync(peer, cts.Token);

        await session.SendJsonAsync(
            new ShareCatalogMessage(ShareProtocol.CatalogRequest, ShareIdentity.Instance.DeviceName, []),
            AppJsonContext.Default.ShareCatalogMessage, cts.Token);

        while (true)
        {
            var plaintext = await session.ReceiveAsync(cts.Token)
                            ?? throw new ShareSecurityException("The device closed the session.");

            switch (ShareFrames.ReadType(plaintext))
            {
                case ShareProtocol.Catalog:
                    var catalog = ShareFrames.Read(plaintext, AppJsonContext.Default.ShareCatalogMessage)
                                  ?? throw new ShareSecurityException("The share list could not be read.");
                    return catalog.Shares;

                case ShareProtocol.Status:
                    var status = ShareFrames.Read(plaintext, AppJsonContext.Default.ShareStatusMessage);
                    throw new ShareSecurityException(status?.Error ?? "The device refused the request.");
            }
        }
    }

    private async Task PushPeersAsync()
    {
        var peers = await PeersSnapshotAsync();
        var signature = string.Join('\n', peers.Select(peer =>
            $"{peer.Id}|{peer.Name}|{peer.Online}|{(peer.Paired ? string.Join(',', peer.Shares.Select(share => $"{share.Id}:{share.Name}")) : "-")}"));

        if (signature == _published)
            return;

        _published = signature;
        Push("share.peers", new SharePeersPayload(peers));
    }

    private static void Push(string type, object payload) =>
        Try.Run(() => WindowManager.Instance.RunOnMainWindow(() => WindowManager.Instance.Notify(type, payload)))
            .OnFailure(ex => Constants.Logger.Debug(ex, "Failed to push {Type}", type));

    // ---- remote browsing and download ---------------------------------------------------------

    private static Task<NativeResponse?> BrowseAsync(NativeContext context)
    {
        var request = context.Payload<ShareBrowseRequest>();
        if (request is not {DeviceId.Length: > 0, ShareId.Length: > 0})
            return Task.FromResult<NativeResponse?>(context.Fail("share.browse.result", "A device is required."));

        return BrowseCoreAsync(context, request);
    }

    private static async Task<NativeResponse?> BrowseCoreAsync(NativeContext context, ShareBrowseRequest request)
    {
        var peer = SharePeerStore.Instance.Find(request.DeviceId);
        if (peer is null)
            return context.Fail("share.browse.result", "The device is not paired.");

        try
        {
            using var cts = new CancellationTokenSource(BrowseTimeout);
            using var session = await SharePeerClient.ConnectAsync(peer, cts.Token);

            await session.SendJsonAsync(
                new ShareBrowseRequestMessage(ShareProtocol.BrowseRequest, request.ShareId,
                    SharePaths.Clean(request.Path)),
                AppJsonContext.Default.ShareBrowseRequestMessage, cts.Token);

            while (true)
            {
                var plaintext = await session.ReceiveAsync(cts.Token)
                                ?? throw new ShareSecurityException("The device closed the session.");

                switch (ShareFrames.ReadType(plaintext))
                {
                    case ShareProtocol.Browse:
                        var browse = ShareFrames.Read(plaintext, AppJsonContext.Default.ShareBrowseMessage)
                                     ?? throw new ShareSecurityException("The listing could not be read.");
                        var prefix = $"share://{Uri.EscapeDataString(request.DeviceId)}/{Uri.EscapeDataString(request.ShareId)}";
                        var entries = browse.Entries.Select(entry => entry with
                        {
                            FullPath = $"{prefix}/{string.Join('/', entry.FullPath.Split('/').Select(Uri.EscapeDataString))}"
                        }).ToList();

                        return context.Reply("share.browse.result",
                            new ShareBrowsePayload(request.DeviceId, request.ShareId, browse.Path, browse.Parent, entries));

                    case ShareProtocol.FileError:
                        var error = ShareFrames.Read(plaintext, AppJsonContext.Default.ShareFileErrorMessage);
                        throw new ShareSecurityException(error?.Error ?? "The listing failed.");

                    case ShareProtocol.Status:
                        var status = ShareFrames.Read(plaintext, AppJsonContext.Default.ShareStatusMessage);
                        throw new ShareSecurityException(status?.Error ?? "The listing failed.");
                }
            }
        }
        catch (Exception ex)
        {
            return context.Fail("share.browse.result", ex.Message);
        }
    }

    private static Task<NativeResponse?> DownloadAsync(NativeContext context)
    {
        var request = context.Payload<ShareDownloadRequest>();
        if (request is not {DeviceId.Length: > 0, ShareId.Length: > 0, Path.Length: > 0})
            return Task.FromResult<NativeResponse?>(context.Fail("share.download.result",
                "A device, share and file are required."));

        return DownloadCoreAsync(context, request);
    }

    private static async Task<NativeResponse?> DownloadCoreAsync(NativeContext context, ShareDownloadRequest request)
    {
        var peer = SharePeerStore.Instance.Find(request.DeviceId);
        if (peer is null)
            return context.Fail("share.download.result", "The device is not paired.");

        var destination = LocalCachePath(request);
        try
        {
            using var cts = new CancellationTokenSource(TimeSpan.FromHours(2));
            using var session = await SharePeerClient.ConnectAsync(peer, cts.Token);

            Directory.CreateDirectory(Path.GetDirectoryName(destination)!);
            await using var stream = File.Create(destination);
            long position = 0;

            while (true)
            {
                await session.SendJsonAsync(
                    new ShareFileRequestMessage(ShareProtocol.FileRequest, request.ShareId, request.Path,
                        position, ShareProtocol.FileChunkBytes),
                    AppJsonContext.Default.ShareFileRequestMessage, cts.Token);

                var plaintext = await session.ReceiveAsync(cts.Token)
                                ?? throw new ShareSecurityException("The device closed the session.");
                var type = ShareFrames.ReadType(plaintext);

                if (type == ShareProtocol.FileError)
                {
                    var error = ShareFrames.Read(plaintext, AppJsonContext.Default.ShareFileErrorMessage);
                    throw new ShareSecurityException(error?.Error ?? "The file could not be read.");
                }

                if (type != ShareProtocol.FileChunk)
                    throw new ShareSecurityException("The device sent an unexpected file message.");

                var chunk = ShareFrames.Read(plaintext, AppJsonContext.Default.ShareFileChunkMessage)
                            ?? throw new ShareSecurityException("The file chunk could not be read.");
                var bytes = ShareCrypto.FromBase64(chunk.Data)
                            ?? throw new ShareSecurityException("The file chunk is malformed.");

                await stream.WriteAsync(bytes, cts.Token);
                position += bytes.Length;

                if (position >= chunk.Total)
                    break;
            }

            return context.Reply("share.download.result", new ShareDownloadPayload(destination, null));
        }
        catch (Exception ex)
        {
            Try.Run(() => File.Delete(destination));
            return context.Fail("share.download.result", ex.Message);
        }
    }

    private static string LocalCachePath(ShareDownloadRequest request)
    {
        var segments = SharePaths.Clean(request.Path)
            .Split('/', StringSplitOptions.RemoveEmptyEntries)
            .Select(segment => segment is "." or ".." ? "_" : segment.Replace(':', '_'));

        return Path.Combine(Path.GetTempPath(), "yafm-share", request.DeviceId, request.ShareId,
            Path.Combine(segments.ToArray()));
    }

    // ---- sessions -----------------------------------------------------------------------------

    /// <summary>Serves a paired device that opened an encrypted session to this one.</summary>
    public async Task HandleSessionAsync(ShareSecureSession session, CancellationToken token)
    {
        while (!token.IsCancellationRequested)
        {
            var plaintext = await session.ReceiveAsync(token);
            if (plaintext is null)
                return;

            var type = ShareFrames.ReadType(plaintext);

            try
            {
                switch (type)
                {
                    case ShareProtocol.CatalogRequest:
                        await session.SendJsonAsync(CatalogMessage(), AppJsonContext.Default.ShareCatalogMessage, token);
                        break;

                    case ShareProtocol.BrowseRequest:
                        await SendBrowseAsync(session,
                            ShareFrames.Read(plaintext, AppJsonContext.Default.ShareBrowseRequestMessage), token);
                        break;

                    case ShareProtocol.FileRequest:
                        await SendFileAsync(session,
                            ShareFrames.Read(plaintext, AppJsonContext.Default.ShareFileRequestMessage), token);
                        break;

                    default:
                        await session.SendJsonAsync(
                            new ShareStatusMessage(ShareProtocol.Status, false, "Unsupported share message."),
                            AppJsonContext.Default.ShareStatusMessage, token);
                        break;
                }
            }
            catch (Exception ex)
            {
                await session.SendJsonAsync(
                    new ShareFileErrorMessage(ShareProtocol.FileError, ex.Message),
                    AppJsonContext.Default.ShareFileErrorMessage, token);
            }
        }
    }

    private static ShareCatalogMessage CatalogMessage()
    {
        var shares = ShareStore.Instance.All
            .Where(share => share.Mode == "client")
            .Select(share => new ShareRemoteEntry {Id = share.Id, Name = share.Name, Mode = share.Mode})
            .ToArray();

        return new(ShareProtocol.Catalog, ShareIdentity.Instance.DeviceName, shares);
    }

    private static async Task SendBrowseAsync(ShareSecureSession session, ShareBrowseRequestMessage? request,
        CancellationToken token)
    {
        var share = request is null ? null : ShareStore.Instance.Find(request.ShareId);
        if (share is null || share.Mode != "client")
            throw new ShareSecurityException("That folder is not shared with the app.");

        var relative = SharePaths.Clean(request!.Path);
        var target = SharePaths.Resolve(share.Path, relative)
                     ?? throw new ShareSecurityException("That path is outside the shared folder.");

        if (!Directory.Exists(target))
            throw new ShareSecurityException("That folder no longer exists.");

        var entries = new DirectoryInfo(target).EnumerateFileSystemInfos()
            .OrderByDescending(entry => entry is DirectoryInfo)
            .ThenBy(entry => entry.Name, StringComparer.OrdinalIgnoreCase)
            .Select(entry =>
            {
                var child = relative.Length == 0 ? entry.Name : $"{relative}/{entry.Name}";
                var isDirectory = entry is DirectoryInfo;

                return new FileEntry(entry.Name, child, isDirectory,
                    isDirectory ? 0 : ((FileInfo)entry).Length,
                    new DateTimeOffset(entry.LastWriteTimeUtc).ToUnixTimeMilliseconds(),
                    entry.Attributes.HasFlag(FileAttributes.Hidden),
                    entry.Attributes.HasFlag(FileAttributes.System),
                    null);
            })
            .ToArray();

        await session.SendJsonAsync(
            new ShareBrowseMessage(ShareProtocol.Browse, share.Id, relative, SharePaths.ParentOf(relative), entries),
            AppJsonContext.Default.ShareBrowseMessage, token);
    }

    private static async Task SendFileAsync(ShareSecureSession session, ShareFileRequestMessage? request,
        CancellationToken token)
    {
        var share = request is null ? null : ShareStore.Instance.Find(request.ShareId);
        if (share is null || share.Mode != "client")
            throw new ShareSecurityException("That folder is not shared with the app.");

        var target = SharePaths.Resolve(share.Path, request!.Path)
                     ?? throw new ShareSecurityException("That path is outside the shared folder.");

        if (!File.Exists(target))
            throw new ShareSecurityException("That file no longer exists.");

        await using var stream = new FileStream(target, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
        var total = stream.Length;
        var offset = Math.Clamp(request.Offset, 0, total);
        var length = (int)Math.Min(Math.Clamp(request.Length, 1, ShareProtocol.FileChunkBytes), total - offset);
        var buffer = new byte[length];

        stream.Seek(offset, SeekOrigin.Begin);
        var read = await stream.ReadAsync(buffer, token);

        await session.SendJsonAsync(
            new ShareFileChunkMessage(ShareProtocol.FileChunk, offset, total,
                ShareCrypto.ToBase64(buffer[..read])),
            AppJsonContext.Default.ShareFileChunkMessage, token);
    }

    private sealed record IncomingPairing(
        string RequestId,
        TaskCompletionSource<bool> Decision);
}
