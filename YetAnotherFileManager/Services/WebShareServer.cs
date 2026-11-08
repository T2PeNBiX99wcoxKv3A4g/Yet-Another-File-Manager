using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Text;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
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
    private static readonly HtmlEncoder Html = HtmlEncoder.Default;
    private WebApplication? _app;

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

    /// <summary>Reconciles the server with the current share list and the stored port.</summary>
    public async Task ApplyAsync()
    {
        var hasWebShare = ShareStore.Instance.All.Any(share => share.Mode == "web");
        if (!hasWebShare)
        {
            await StopAsync();
            return;
        }

        var desired = SettingsService.Instance.Current.SharePort ?? 0;
        if (_app is not null && (desired == 0 || desired == Port))
            return;

        await StopAsync();

        var port = ResolvePort(desired);
        if (port != desired)
        {
            await SettingsService.Instance.UpdateAsync(settings => settings with {SharePort = port});
            Log.Information("Using port {Port} for the share web server", port);
        }

        var builder = WebApplication.CreateSlimBuilder();
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
            _app = app;
            Port = port;
            Log.Information("Share web server listening on port {Port}", port);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not start the share web server on port {Port}", port);
            await app.DisposeAsync();
        }
    }

    public async Task StopAsync()
    {
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

    /// <summary>A stored port when it is usable, otherwise a free one in the 6000-9000 range.</summary>
    private static int ResolvePort(int preferred)
    {
        if (preferred is >= 1024 and <= 65535 && IsFree(preferred))
            return preferred;

        for (var attempt = 0; attempt < 80; attempt++)
        {
            var candidate = Random.Shared.Next(6000, 9000);
            if (IsFree(candidate))
                return candidate;
        }

        return 0;
    }

    private static bool IsFree(int port) =>
        Try.Run(() =>
        {
            var listener = new TcpListener(IPAddress.Any, port);
            listener.Start();
            listener.Stop();
            return true;
        }).GetOrElse(_ => false);

    private async Task HandleAsync(HttpContext context)
    {
        try
        {
            var path = context.Request.Path.Value ?? "/";

            if (path is "/" or "" or "/index.html")
            {
                await WriteIndexAsync(context);
                return;
            }

            if (path.StartsWith("/s/", StringComparison.OrdinalIgnoreCase))
            {
                await HandleShareAsync(context, path);
                return;
            }

            context.Response.StatusCode = StatusCodes.Status404NotFound;
            await context.Response.WriteAsync("Not found");
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "A share web request failed");
            if (!context.Response.HasStarted)
                context.Response.StatusCode = StatusCodes.Status500InternalServerError;
        }
    }

    private static async Task WriteIndexAsync(HttpContext context)
    {
        var shares = ShareStore.Instance.All.Where(share => share.Mode == "web").ToList();

        var rows = new StringBuilder();
        foreach (var share in shares)
            rows.Append($"<li><a href=\"/s/{Uri.EscapeDataString(share.Id)}/\">{Html.Encode(share.Name)}</a>"
                        + $"<small>{Html.Encode(share.Path)}</small></li>");

        var body = $"""
                    <h1>{Html.Encode(ShareIdentity.Instance.DeviceName)}</h1>
                    <p class="muted">Shared folders on this device.</p>
                    <ul class="shares">{(rows.Length == 0 ? "<li class=\"muted\">No web shares.</li>" : rows.ToString())}</ul>
                    """;

        await WritePageAsync(context, "Shared folders", body);
    }

    private static async Task HandleShareAsync(HttpContext context, string path)
    {
        var rest = path["/s/".Length..];
        var cut = rest.IndexOf('/');
        var id = Uri.UnescapeDataString(cut < 0 ? rest : rest[..cut]);
        var relative = cut < 0 ? "" : Uri.UnescapeDataString(rest[(cut + 1)..]).Replace('\\', '/').Trim('/');

        var share = ShareStore.Instance.All.FirstOrDefault(item =>
            string.Equals(item.Id, id, StringComparison.Ordinal) && item.Mode == "web");
        if (share is null)
        {
            context.Response.StatusCode = StatusCodes.Status404NotFound;
            await context.Response.WriteAsync("This folder is not shared.");
            return;
        }

        var target = SharePaths.Resolve(share.Path, relative);
        if (target is null)
        {
            context.Response.StatusCode = StatusCodes.Status403Forbidden;
            await context.Response.WriteAsync("That path is outside the shared folder.");
            return;
        }

        if (Directory.Exists(target))
        {
            if (HttpMethods.IsPost(context.Request.Method))
                await UploadAsync(context, share, relative, target);

            await WriteListingAsync(context, share, relative, target);
            return;
        }

        if (!File.Exists(target))
        {
            context.Response.StatusCode = StatusCodes.Status404NotFound;
            await context.Response.WriteAsync("Not found.");
            return;
        }

        context.Response.ContentType = "application/octet-stream";
        context.Response.Headers.ContentDisposition =
            $"attachment; filename*=UTF-8''{Uri.EscapeDataString(Path.GetFileName(target))}";
        await context.Response.SendFileAsync(target);
    }

    private static async Task UploadAsync(HttpContext context, ShareEntry share, string relative, string target)
    {
        var form = await context.Request.ReadFormAsync();

        foreach (var file in form.Files)
        {
            var name = Path.GetFileName(file.FileName);
            if (name.Length == 0)
                continue;

            var destination = SharePaths.Resolve(share.Path, string.IsNullOrEmpty(relative) ? name : $"{relative}/{name}");
            if (destination is null)
                continue;

            await using var stream = File.Create(destination);
            await file.CopyToAsync(stream);
        }

        context.Response.Redirect($"/s/{Uri.EscapeDataString(share.Id)}/{UrlPath(relative)}");
    }

    private static async Task WriteListingAsync(HttpContext context, ShareEntry share, string relative, string target)
    {
        var parent = SharePaths.ParentOf(relative);
        var crumbs = new StringBuilder($"<a href=\"/s/{Uri.EscapeDataString(share.Id)}/\">{Html.Encode(share.Name)}</a>");

        var accumulated = "";
        foreach (var part in relative.Split('/', StringSplitOptions.RemoveEmptyEntries))
        {
            accumulated = accumulated.Length == 0 ? part : $"{accumulated}/{part}";
            crumbs.Append($" / <a href=\"/s/{Uri.EscapeDataString(share.Id)}/{UrlPath(accumulated)}\">{Html.Encode(part)}</a>");
        }

        var rows = new StringBuilder();
        if (parent is not null)
            rows.Append($"<tr><td><a href=\"/s/{Uri.EscapeDataString(share.Id)}/{UrlPath(parent)}\">..</a></td><td></td><td></td></tr>");

        DirectoryInfo directory;
        try
        {
            directory = new DirectoryInfo(target);
        }
        catch (Exception)
        {
            context.Response.StatusCode = StatusCodes.Status403Forbidden;
            await context.Response.WriteAsync("This folder cannot be read.");
            return;
        }

        var entries = directory.EnumerateFileSystemInfos()
            .OrderByDescending(entry => entry is DirectoryInfo)
            .ThenBy(entry => entry.Name, StringComparer.OrdinalIgnoreCase);

        foreach (var entry in entries)
        {
            var child = accumulated.Length == 0 ? entry.Name : $"{accumulated}/{entry.Name}";
            var href = $"/s/{Uri.EscapeDataString(share.Id)}/{UrlPath(child)}" + (entry is DirectoryInfo ? "/" : "");
            var size = entry is FileInfo file ? FormatBytes(file.Length) : "";
            var modified = entry.LastWriteTime.ToString("yyyy-MM-dd HH:mm");

            rows.Append($"<tr><td><a href=\"{href}\">{Html.Encode(entry.Name)}{(entry is DirectoryInfo ? "/" : "")}</a></td>"
                        + $"<td>{size}</td><td>{modified}</td></tr>");
        }

        if (rows.Length == 0)
            rows.Append("<tr><td class=\"muted\" colspan=\"3\">This folder is empty.</td></tr>");

        var action = $"/s/{Uri.EscapeDataString(share.Id)}/{UrlPath(relative)}";
        var body = $"""
                    <nav>{crumbs}</nav>
                    <table>
                        <thead><tr><th>Name</th><th>Size</th><th>Modified</th></tr></thead>
                        <tbody>{rows}</tbody>
                    </table>
                    <form class="upload" enctype="multipart/form-data" method="post" action="{action}">
                        <strong>Upload files</strong>
                        <input multiple name="files" type="file">
                        <button type="submit">Upload</button>
                    </form>
                    """;

        await WritePageAsync(context, share.Name, body);
    }

    private static async Task WritePageAsync(HttpContext context, string title, string body)
    {
        var html = $"""
                    <!doctype html>
                    <html lang="en">
                    <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>{Html.Encode(title)}</title>
                    <style>
                    {SharePageStyle}
                    </style>
                    </head>
                    <body><main>{body}</main></body>
                    </html>
                    """;

        context.Response.ContentType = "text/html; charset=utf-8";
        await context.Response.WriteAsync(html);
    }

    private const string SharePageStyle = """
                                         :root { color-scheme: dark; }
                                         * { box-sizing: border-box; }
                                         body { margin: 0; padding: 28px; background: #0b0f19; color: #e7ecf5;
                                           font: 14px/1.55 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
                                         main { max-width: 960px; margin: 0 auto; }
                                         h1 { margin: 0 0 4px; font-size: 22px; }
                                         .muted { color: #8b96ab; }
                                         nav { margin: 0 0 18px; padding: 10px 12px; border: 1px solid #232c3f;
                                           border-radius: 10px; background: #111827; overflow-wrap: anywhere; }
                                         nav a, td a { color: #8ab4ff; text-decoration: none; }
                                         nav a:hover, td a:hover { text-decoration: underline; }
                                         table { width: 100%; border-collapse: collapse; background: #111827;
                                           border: 1px solid #232c3f; border-radius: 10px; overflow: hidden; }
                                         th, td { padding: 9px 12px; border-bottom: 1px solid #1d2637; text-align: left; }
                                         th { color: #8b96ab; font-size: 11px; letter-spacing: .06em; text-transform: uppercase; }
                                         tr:last-child td { border-bottom: 0; }
                                         td:nth-child(2), td:nth-child(3) { width: 1%; white-space: nowrap; color: #8b96ab; }
                                         .upload { margin: 18px 0 0; padding: 14px; display: flex; flex-wrap: wrap; gap: 10px;
                                           align-items: center; border: 1px solid #232c3f; border-radius: 10px; background: #111827; }
                                         .upload strong { width: 100%; }
                                         input[type=file] { flex: 1; min-width: 200px; color: #aab4c5; }
                                         button { padding: 7px 16px; border: 0; border-radius: 8px; background: #3b82f6;
                                           color: #fff; font: inherit; cursor: pointer; }
                                         ul.shares { list-style: none; padding: 0; margin: 18px 0; display: grid; gap: 10px; }
                                         ul.shares li { padding: 14px; border: 1px solid #232c3f; border-radius: 10px; background: #111827; }
                                         ul.shares li a { color: #8ab4ff; font-size: 15px; text-decoration: none; }
                                         ul.shares li small { display: block; margin-top: 3px; color: #8b96ab; overflow-wrap: anywhere; }
                                         """;

    private static string UrlPath(string relative) =>
        string.Join('/', relative.Split('/', StringSplitOptions.RemoveEmptyEntries).Select(Uri.EscapeDataString));

    private static string FormatBytes(long value)
    {
        string[] units = ["B", "KB", "MB", "GB", "TB"];
        double size = value;
        var unit = 0;

        while (size >= 1024 && unit < units.Length - 1)
        {
            size /= 1024;
            unit++;
        }

        return $"{size:0.#} {units[unit]}";
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
