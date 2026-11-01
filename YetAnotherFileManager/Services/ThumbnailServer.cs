using System.Collections.Concurrent;
using System.Net;
using System.Net.Sockets;
using System.Security.Cryptography;
using System.Text;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Interop;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Serves shell thumbnails as ordinary PNG responses on loopback, so the web view can fetch them
///     with its own connection pool and cache. That keeps the big base64 strings off the native
///     message bridge, which is what made a wall of pictures stutter.
/// </summary>
internal sealed class ThumbnailServer : Singleton<ThumbnailServer>
{
    private const int MaxHeaders = 65_536;
    private const int CacheLimit = 500;

    private readonly string _token = Convert.ToHexString(RandomNumberGenerator.GetBytes(16)).ToLowerInvariant();
    private readonly ConcurrentDictionary<string, byte[]> _cache = new(StringComparer.OrdinalIgnoreCase);
    private readonly ConcurrentQueue<string> _order = new();
    private readonly SemaphoreSlim _gate = new(Math.Clamp(Environment.ProcessorCount / 2, 2, 4));
    private readonly TcpListener _listener = new(IPAddress.Loopback, 0);

    public ThumbnailServer()
    {
        _listener.Start();

        var port = ((IPEndPoint)_listener.LocalEndpoint).Port;
        BaseUrl = $"http://127.0.0.1:{port}/{_token}";

        Log.Information("Serving thumbnails at {Base}", BaseUrl);

        _ = Task.Run(AcceptAsync);
    }

    /// <summary>The prefix every thumbnail URL starts with, with this run's token.</summary>
    public string BaseUrl { get; }

    private async Task AcceptAsync()
    {
        while (true)
        {
            TcpClient client;

            try
            {
                client = await _listener.AcceptTcpClientAsync();
            }
            catch (Exception ex)
            {
                Log.Debug(ex, "The thumbnail listener stopped");
                return;
            }

            _ = HandleAsync(client);
        }
    }

    private async Task HandleAsync(TcpClient client)
    {
        using (client)
        {
            try
            {
                client.NoDelay = true;

                var stream = client.GetStream();
                var request = await ReadRequestAsync(stream);
                if (request is null)
                    return;

                if (!TryReadPath(request, out var path, out var size, out var version))
                {
                    await RespondAsync(stream, 404, "text/plain", []);
                    return;
                }

                var bytes = await ThumbnailAsync(path, size, version);
                await RespondAsync(stream, bytes is null ? 404 : 200,
                    bytes is null ? "text/plain" : "image/png", bytes ?? []);
            }
            catch (Exception ex)
            {
                Log.Debug(ex, "Could not serve a thumbnail");
            }
        }
    }

    /// <summary>Reads the request headers; the body of a GET is never needed.</summary>
    private static async Task<string?> ReadRequestAsync(NetworkStream stream)
    {
        var buffer = new byte[MaxHeaders];
        var length = 0;

        while (length < buffer.Length)
        {
            var read = await stream.ReadAsync(buffer.AsMemory(length, buffer.Length - length));
            if (read == 0)
                return null;

            var searchFrom = Math.Max(0, length - 3);
            length += read;

            for (var index = searchFrom; index + 3 < length; index++)
                if (buffer[index] == (byte)'\r' && buffer[index + 1] == (byte)'\n'
                    && buffer[index + 2] == (byte)'\r' && buffer[index + 3] == (byte)'\n')
                    return Encoding.ASCII.GetString(buffer, 0, index);
        }

        return null;
    }

    /// <summary>Validates the token and reads the file path, size and cache version from the query.</summary>
    private bool TryReadPath(string request, out string path, out int size, out string version)
    {
        path = "";
        size = 128;
        version = "";

        var line = request.Split("\r\n", 2)[0];
        var parts = line.Split(' ');

        if (parts.Length < 2 || parts[0] != "GET")
            return false;

        var target = parts[1];
        var queryAt = target.IndexOf('?');
        var route = queryAt >= 0 ? target[..queryAt] : target;
        var query = queryAt >= 0 ? target[(queryAt + 1)..] : "";

        if (!route.Equals($"/{_token}/thumb", StringComparison.Ordinal))
            return false;

        foreach (var pair in query.Split('&', StringSplitOptions.RemoveEmptyEntries))
        {
            var equals = pair.IndexOf('=');
            if (equals < 0)
                continue;

            var value = Uri.UnescapeDataString(pair[(equals + 1)..]);

            if (pair[..equals] == "path")
                path = value;
            else if (pair[..equals] == "size" && int.TryParse(value, out var parsed))
                size = Math.Clamp(parsed, 32, 512);
            else if (pair[..equals] == "v")
                version = value;
        }

        return path.Length > 0;
    }

    private async Task<byte[]?> ThumbnailAsync(string path, int size, string version)
    {
        var key = $"{path}|{size}|{version}";
        if (_cache.TryGetValue(key, out var cached))
            return cached;

        if (!OperatingSystem.IsWindows() || !File.Exists(path))
            return null;

        await _gate.WaitAsync();
        try
        {
            if (_cache.TryGetValue(key, out cached))
                return cached;

            var bytes = await Task.Run(() => ShellThumbnail.Bytes(path, size));
            if (bytes is not null)
                Remember(key, bytes);

            return bytes;
        }
        finally
        {
            _gate.Release();
        }
    }

    private void Remember(string key, byte[] bytes)
    {
        _cache[key] = bytes;
        _order.Enqueue(key);

        while (_order.Count > CacheLimit && _order.TryDequeue(out var oldest))
            _cache.TryRemove(oldest, out _);
    }

    private static async Task RespondAsync(NetworkStream stream, int status, string contentType, byte[] body)
    {
        var header =
            $"HTTP/1.1 {status} {(status == 200 ? "OK" : "Not Found")}\r\n" +
            $"Content-Type: {contentType}\r\n" +
            $"Content-Length: {body.Length}\r\n" +
            "Cache-Control: public, max-age=86400\r\n" +
            "Access-Control-Allow-Origin: *\r\n" +
            "Connection: close\r\n\r\n";

        await stream.WriteAsync(Encoding.ASCII.GetBytes(header));

        if (body.Length > 0)
            await stream.WriteAsync(body);

        await stream.FlushAsync();
    }
}
