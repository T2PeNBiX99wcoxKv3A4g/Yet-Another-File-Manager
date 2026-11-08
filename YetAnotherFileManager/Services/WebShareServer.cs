using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Reflection;
using System.Text.Json;
using System.Text.Json.Serialization.Metadata;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;
using YetAnotherFileManager.Security;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Serves the folders shared in web mode over plain HTTP, so any device with a browser can
///     browse, download and upload without installing the app. It runs only while at least one web
///     share exists and stops when the last one is removed or switched to app-only.
/// </summary>
internal sealed class WebShareServer : Singleton<WebShareServer>
{
    private static readonly FileExtensionContentTypeProvider ContentTypes = new();
    private static IFileProvider? Files { get; set; }
    private WebApplication? _app;
    private int? _requestedPort;

    public bool Running => _app is not null;

    public int Port { get; private set; }

    /// <summary>The addresses a phone or another computer on the same network can open.</summary>
    public IReadOnlyList<string> Urls()
    {
        if (!Running)
            return [];

        return
        [
            $"http://localhost:{Port}/",
            .. LanAddresses().Select(address => $"http://{address}:{Port}/")
        ];
    }

    /// <summary>
    ///     Reconciles the server with the current share list and the port mode. Random mode asks the
    ///     OS for one free port the first time a web share appears; every later web share keeps the
    ///     same server until the last one is removed. Custom mode tries the stored port and falls
    ///     back to a random one when it is occupied.
    /// </summary>
    public async Task ApplyAsync()
    {
        var hasWebShare = ShareStore.Instance.All.Any(share => share.Mode == "web");
        if (!hasWebShare)
        {
            await StopAsync();
            return;
        }

        var settings = SettingsService.Instance.Current;
        var requested = settings.UsesCustomSharePort ? settings.CustomSharePort : null;

        if (requested is not null && !IsFree(requested.Value))
        {
            Log.Warning("Custom share port {Port} is already in use; asking the OS for a free one", requested);
            requested = null;
        }

        if (_app is not null && _requestedPort == requested)
            return;

        await StopAsync();

        try
        {
            await StartAsync(requested ?? 0);
            _requestedPort = requested;
        }
        catch (Exception ex) when (requested is not null)
        {
            Log.Warning(ex, "Custom share port {Port} is unavailable; asking the OS for a free one", requested);
            await StartAsync(0);
            _requestedPort = requested;
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "The share web server could not start");
        }
    }

    private static bool IsFree(int port) =>
        Try.Run(() =>
        {
            var listener = new TcpListener(IPAddress.Any, port);
            listener.Start();
            listener.Stop();
            return true;
        }).GetOrElse(_ => false);

    private async Task StartAsync(int port)
    {
        if (Files is null)
        {
            var embedded = new ManifestEmbeddedFileProvider(typeof(WebShareServer).Assembly, "Resources/wwwroot");
            var physical = Path.Combine(AppContext.BaseDirectory, "wwwroot");
            Files = Directory.Exists(physical)
                ? new CompositeFileProvider(new PhysicalFileProvider(physical), embedded)
                : embedded;
        }

        var builder = WebApplication.CreateBuilder(new WebApplicationOptions
        {
            ContentRootPath = Constants.DataDirectory,
            WebRootPath = Path.Combine(Constants.DataDirectory, "shareweb")
        });

        builder.Logging.ClearProviders();
        builder.WebHost.ConfigureKestrel(options =>
        {
            options.AddServerHeader = false;
            options.ListenAnyIP(port);
        });

        var app = builder.Build();
        app.Run(HandleAsync);

        try
        {
            await app.StartAsync();
        }
        catch
        {
            await app.DisposeAsync();
            throw;
        }

        _app = app;
        Port = BoundPort(app, port);
        Log.Information("Share web server listening on port {Port}", Port);
    }

    private static int BoundPort(WebApplication app, int fallback)
    {
        var address = app.Services.GetRequiredService<IServer>()
            .Features.Get<IServerAddressesFeature>()?
            .Addresses.FirstOrDefault();

        return address is not null && Uri.TryCreate(address, UriKind.Absolute, out var uri) && uri.Port > 0
            ? uri.Port
            : fallback;
    }

    public async Task StopAsync()
    {
        _requestedPort = null;

        if (_app is null)
            return;

        var app = _app;
        _app = null;

        try
        {
            using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(2));
            await app.StopAsync(cts.Token);
        }
        catch (Exception ex)
        {
            Log.Debug(ex, "The share web server did not stop cleanly");
        }

        try
        {
            await app.DisposeAsync();
        }
        catch (Exception ex)
        {
            Log.Debug(ex, "The share web server could not be disposed");
        }
    }

    private async Task HandleAsync(HttpContext context)
    {
        try
        {
            var path = (context.Request.Path.Value ?? "/").TrimEnd('/');
            if (path.Length == 0)
                path = "/";

            if (path is "/" or "/share.html")
            {
                await ServeStaticAsync(context, "share.html");
                return;
            }

            if (path.Equals("/health", StringComparison.OrdinalIgnoreCase))
            {
                await context.Response.WriteAsync("ok");
                return;
            }

            if (path.Equals("/api/config", StringComparison.OrdinalIgnoreCase))
            {
                var settings = SettingsService.Instance.Current;
                await WriteJsonAsync(context, new ShareWebConfigPayload(Constants.DisplayName,
                        ShareIdentity.Instance.DeviceName, settings.AccentColor, settings.SecondaryColor,
                        AppInfoService.Version),
                    AppJsonContext.Default.ShareWebConfigPayload);
                return;
            }

            if (path.Equals("/api/shares", StringComparison.OrdinalIgnoreCase))
            {
                var shares = ShareStore.Instance.All
                    .Where(share => share.Mode == "web")
                    .Select(share => new ShareWebShare(share.Id, share.Name))
                    .ToList();

                await WriteJsonAsync(context, new ShareWebSharesPayload(shares),
                    AppJsonContext.Default.ShareWebSharesPayload);
                return;
            }

            if (path.StartsWith("/api/browse/", StringComparison.OrdinalIgnoreCase))
            {
                await BrowseAsync(context, path["/api/browse/".Length..]);
                return;
            }

            if (path.StartsWith("/api/upload/", StringComparison.OrdinalIgnoreCase) &&
                HttpMethods.IsPost(context.Request.Method))
            {
                await UploadAsync(context, path["/api/upload/".Length..]);
                return;
            }

            if (path.StartsWith("/file/", StringComparison.OrdinalIgnoreCase))
            {
                await DownloadAsync(context, path["/file/".Length..]);
                return;
            }

            if (path.StartsWith("/assets/", StringComparison.OrdinalIgnoreCase))
            {
                await ServeStaticAsync(context, path.TrimStart('/'));
                return;
            }

            await WriteErrorAsync(context, StatusCodes.Status404NotFound, "Not found.");
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "A share web request failed");
            if (!context.Response.HasStarted)
                await WriteErrorAsync(context, StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    private static ShareEntry? FindWebShare(string id) =>
        ShareStore.Instance.All.FirstOrDefault(share =>
            string.Equals(share.Id, id, StringComparison.Ordinal) && share.Mode == "web");

    private static async Task BrowseAsync(HttpContext context, string rest)
    {
        var cut = rest.IndexOf('/');
        var id = Uri.UnescapeDataString(cut < 0 ? rest : rest[..cut]);
        var relative = SharePaths.Clean(context.Request.Query["path"]);

        var share = FindWebShare(id);
        if (share is null)
        {
            await WriteErrorAsync(context, StatusCodes.Status404NotFound, "This folder is not shared.");
            return;
        }

        var target = SharePaths.Resolve(share.Path, relative);
        if (target is null || !Directory.Exists(target))
        {
            await WriteErrorAsync(context, StatusCodes.Status404NotFound, "That folder no longer exists.");
            return;
        }

        List<ShareWebEntry> entries;
        try
        {
            entries = new DirectoryInfo(target).EnumerateFileSystemInfos()
                .OrderByDescending(entry => entry is DirectoryInfo)
                .ThenBy(entry => entry.Name, StringComparer.OrdinalIgnoreCase)
                .Select(entry =>
                {
                    var child = relative.Length == 0 ? entry.Name : $"{relative}/{entry.Name}";
                    var directory = entry is DirectoryInfo;

                    return new ShareWebEntry(entry.Name, directory,
                        directory ? 0 : ((FileInfo)entry).Length,
                        new DateTimeOffset(entry.LastWriteTimeUtc).ToUnixTimeMilliseconds(), child);
                })
                .ToList();
        }
        catch (Exception ex)
        {
            await WriteErrorAsync(context, StatusCodes.Status403Forbidden, ex.Message);
            return;
        }

        await WriteJsonAsync(context,
            new ShareWebListingPayload(share.Id, share.Name, relative, SharePaths.ParentOf(relative), entries),
            AppJsonContext.Default.ShareWebListingPayload);
    }

    private static async Task UploadAsync(HttpContext context, string rest)
    {
        var cut = rest.IndexOf('/');
        var id = Uri.UnescapeDataString(cut < 0 ? rest : rest[..cut]);
        var relative = SharePaths.Clean(context.Request.Query["path"]);

        var share = FindWebShare(id);
        if (share is null)
        {
            await WriteErrorAsync(context, StatusCodes.Status404NotFound, "This folder is not shared.");
            return;
        }

        var target = SharePaths.Resolve(share.Path, relative);
        if (target is null || !Directory.Exists(target))
        {
            await WriteErrorAsync(context, StatusCodes.Status404NotFound, "That folder no longer exists.");
            return;
        }

        var form = await context.Request.ReadFormAsync();
        var saved = 0;

        foreach (var file in form.Files)
        {
            var name = Path.GetFileName(file.FileName);
            if (name.Length == 0)
                continue;

            var destination = SharePaths.Resolve(share.Path,
                relative.Length == 0 ? name : $"{relative}/{name}");
            if (destination is null)
                continue;

            await using var stream = File.Create(destination);
            await file.CopyToAsync(stream);
            saved++;
        }

        await WriteJsonAsync(context, new ShareWebUploadPayload(saved), AppJsonContext.Default.ShareWebUploadPayload);
    }

    private static async Task DownloadAsync(HttpContext context, string rest)
    {
        var cut = rest.IndexOf('/');
        var id = Uri.UnescapeDataString(cut < 0 ? rest : rest[..cut]);
        var relative = cut < 0 ? "" : Uri.UnescapeDataString(rest[(cut + 1)..]).Replace('\\', '/').Trim('/');

        var share = FindWebShare(id);
        if (share is null)
        {
            await WriteErrorAsync(context, StatusCodes.Status404NotFound, "This folder is not shared.");
            return;
        }

        var target = SharePaths.Resolve(share.Path, relative);
        if (target is null || !File.Exists(target))
        {
            await WriteErrorAsync(context, StatusCodes.Status404NotFound, "That file no longer exists.");
            return;
        }

        context.Response.ContentType = "application/octet-stream";
        context.Response.Headers.ContentDisposition =
            $"attachment; filename*=UTF-8''{Uri.EscapeDataString(Path.GetFileName(target))}";
        await context.Response.SendFileAsync(target);
    }

    private async Task ServeStaticAsync(HttpContext context, string relative)
    {
        if (relative.Contains("..", StringComparison.Ordinal) || Files is null)
        {
            context.Response.StatusCode = StatusCodes.Status404NotFound;
            return;
        }

        var info = Files.GetFileInfo(relative);
        if (!info.Exists || info.IsDirectory)
        {
            context.Response.StatusCode = StatusCodes.Status404NotFound;
            return;
        }

        context.Response.ContentType = ContentTypes.TryGetContentType(info.Name, out var type)
            ? type
            : "application/octet-stream";
        context.Response.Headers.CacheControl = relative == "share.html"
            ? "no-cache"
            : "public, max-age=31536000, immutable";

        await using var stream = info.CreateReadStream();
        await stream.CopyToAsync(context.Response.Body);
    }

    private static async Task WriteJsonAsync<T>(HttpContext context, T payload, JsonTypeInfo<T> typeInfo)
    {
        context.Response.ContentType = "application/json; charset=utf-8";
        await JsonSerializer.SerializeAsync(context.Response.Body, payload, typeInfo);
    }

    private static async Task WriteErrorAsync(HttpContext context, int status, string message)
    {
        context.Response.StatusCode = status;
        await WriteJsonAsync(context, new ShareWebErrorPayload(message),
            AppJsonContext.Default.ShareWebErrorPayload);
    }

    private static IEnumerable<string> LanAddresses() =>
        NetworkInterface.GetAllNetworkInterfaces()
            .Where(nic => nic.OperationalStatus == OperationalStatus.Up &&
                          nic.NetworkInterfaceType != NetworkInterfaceType.Loopback)
            .SelectMany(nic => nic.GetIPProperties().UnicastAddresses)
            .Select(address => address.Address)
            .Where(address => address.AddressFamily == AddressFamily.InterNetwork && !IPAddress.IsLoopback(address))
            .Select(address => address.ToString())
            .Distinct();
}
