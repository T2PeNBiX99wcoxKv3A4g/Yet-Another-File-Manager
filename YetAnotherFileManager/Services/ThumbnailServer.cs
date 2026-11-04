using System.Buffers;
using System.Collections.Concurrent;
using System.Diagnostics;
using System.Globalization;
using System.Net;
using System.Net.Sockets;
using System.Reflection;
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
    private readonly SemaphoreSlim _gate = new(Math.Clamp(Environment.ProcessorCount, 4, 8));
    private static readonly SemaphoreSlim PdfGate = new(2, 2);
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

                if (!TryReadPath(request, out var path, out var size, out var version, out var media, out var pdf, out var extension))
                {
                    await RespondAsync(stream, 404, "text/plain", []);
                    return;
                }

                if (pdf)
                {
                    var image = await PdfAsync(path, version);
                    await RespondAsync(stream, image is null ? 404 : 200,
                        image is null ? "text/plain" : "image/png", image ?? []);
                    return;
                }

                if (media)
                {
                    await MediaAsync(stream, path, request, extension);
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
    private bool TryReadPath(string request, out string path, out int size, out string version, out bool media,
        out bool pdf, out string extension)
    {
        path = "";
        size = 128;
        version = "";
        media = false;
        pdf = false;
        extension = "";

        var line = request.Split("\r\n", 2)[0];
        var parts = line.Split(' ');

        if (parts.Length < 2 || parts[0] != "GET")
            return false;

        var target = parts[1];
        var queryAt = target.IndexOf('?');
        var route = queryAt >= 0 ? target[..queryAt] : target;
        var query = queryAt >= 0 ? target[(queryAt + 1)..] : "";

        media = route.Equals($"/{_token}/media", StringComparison.Ordinal);
        pdf = route.Equals($"/{_token}/pdf", StringComparison.Ordinal);

        if (!media && !pdf && !route.Equals($"/{_token}/thumb", StringComparison.Ordinal))
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
            else if (pair[..equals] == "ext")
                extension = value;
        }

        return path.Length > 0;
    }

    private async Task<byte[]?> ThumbnailAsync(string path, int size, string version)
    {
        var key = $"{path}|{size}|{version}";
        if (_cache.TryGetValue(key, out var cached))
            return cached;

        if (!File.Exists(path) || (!OperatingSystem.IsWindows() && !OperatingSystem.IsLinux()))
            return null;

        await _gate.WaitAsync();
        try
        {
            if (_cache.TryGetValue(key, out cached))
                return cached;

            var bytes = await Task.Run(() =>
            {
                if (OperatingSystem.IsWindows())
                    return ShellThumbnail.Bytes(path, size);

                return LinuxThumbnails.Png(path, size);
            });

            if (bytes is not null)
                Remember(key, bytes);

            return bytes;
        }
        finally
        {
            _gate.Release();
        }
    }

    /// <summary>Renders a PDF page in the isolated helper and caches the PNG it returns.</summary>
    private async Task<byte[]?> PdfAsync(string path, string version)
    {
        var key = $"pdf|{path}|{version}";
        if (_cache.TryGetValue(key, out var cached))
            return cached;

        if (!File.Exists(path))
            return null;

        await PdfGate.WaitAsync();
        try
        {
            if (_cache.TryGetValue(key, out cached))
                return cached;

            var bytes = await RenderPdfAsync(path);
            if (bytes is not null)
                Remember(key, bytes);

            return bytes;
        }
        finally
        {
            PdfGate.Release();
        }
    }

    private static async Task<byte[]?> RenderPdfAsync(string path)
    {
        var executable = Environment.ProcessPath;
        if (string.IsNullOrEmpty(executable))
            return null;

        var output = Path.Combine(Path.GetTempPath(), $"yafm-pdf-{Guid.NewGuid():N}.png");

        try
        {
            var start = new ProcessStartInfo
            {
                FileName = executable,
                UseShellExecute = false,
                CreateNoWindow = true,
                WindowStyle = ProcessWindowStyle.Hidden,
            };

            if (Path.GetFileNameWithoutExtension(executable).Equals("dotnet", StringComparison.OrdinalIgnoreCase))
            {
                var assembly = Assembly.GetEntryAssembly()?.Location;
                if (string.IsNullOrEmpty(assembly))
                    return null;

                start.ArgumentList.Add(assembly);
            }

            start.ArgumentList.Add(Constants.PdfPreviewArgument);
            start.ArgumentList.Add(path);
            start.ArgumentList.Add(output);

            using var process = Process.Start(start);
            if (process is null)
                return null;

            using var timeout = new CancellationTokenSource(TimeSpan.FromSeconds(15));

            try
            {
                await process.WaitForExitAsync(timeout.Token);
            }
            catch (OperationCanceledException)
            {
                Try.Run(() => process.Kill(true));
                Serilog.Log.Debug("PDF preview timed out for {Path}", path);
                return null;
            }

            if (process.ExitCode != 0 || !File.Exists(output))
                return null;

            var bytes = await File.ReadAllBytesAsync(output);
            return bytes.Length == 0 ? null : bytes;
        }
        catch (Exception ex)
        {
            Serilog.Log.Debug(ex, "Could not render the PDF preview of {Path}", path);
            return null;
        }
        finally
        {
            Try.Run(() => File.Delete(output));
        }
    }

    /// <summary>Streams a video or audio file with the byte-range support the media element needs.</summary>
    private static async Task MediaAsync(NetworkStream stream, string path, string request, string extension)
    {
        if (!File.Exists(path))
        {
            await RespondAsync(stream, 404, "text/plain", []);
            return;
        }

        await using var file = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite,
            64 * 1024, FileOptions.Asynchronous | FileOptions.SequentialScan);

        var length = file.Length;
        var start = 0L;
        var end = Math.Max(length - 1, 0);
        var partial = false;
        var range = HeaderValue(request, "Range");

        if (range is not null && range.StartsWith("bytes=", StringComparison.OrdinalIgnoreCase) && length > 0)
        {
            var spec = range["bytes=".Length..].Split(',')[0].Trim();
            var dash = spec.IndexOf('-');

            if (dash >= 0)
            {
                if (long.TryParse(spec[..dash], NumberStyles.Integer, CultureInfo.InvariantCulture, out var from))
                    start = Math.Clamp(from, 0, length - 1);

                if (long.TryParse(spec[(dash + 1)..], NumberStyles.Integer, CultureInfo.InvariantCulture, out var to))
                    end = Math.Clamp(to, start, length - 1);

                partial = true;
            }
        }

        var count = length == 0 ? 0 : end - start + 1;
        var header = $"HTTP/1.1 {(partial ? 206 : 200)} {(partial ? "Partial Content" : "OK")}\r\n" +
                     $"Content-Type: {MediaType(path, extension)}\r\n" +
                     $"Content-Length: {count}\r\n" +
                     "Accept-Ranges: bytes\r\n" +
                     "Cache-Control: public, max-age=86400\r\n" +
                     "Access-Control-Allow-Origin: *\r\n" +
                     "Connection: close\r\n" +
                     (partial ? $"Content-Range: bytes {start}-{end}/{length}\r\n" : "") +
                     "\r\n";

        await stream.WriteAsync(Encoding.ASCII.GetBytes(header));

        if (count > 0)
        {
            file.Seek(start, SeekOrigin.Begin);

            var buffer = ArrayPool<byte>.Shared.Rent(64 * 1024);

            try
            {
                var remaining = count;
                while (remaining > 0)
                {
                    var read = await file.ReadAsync(buffer.AsMemory(0, (int)Math.Min(buffer.Length, remaining)));
                    if (read == 0)
                        break;

                    await stream.WriteAsync(buffer.AsMemory(0, read));
                    remaining -= read;
                }
            }
            finally
            {
                ArrayPool<byte>.Shared.Return(buffer);
            }
        }

        await stream.FlushAsync();
    }

    private static string? HeaderValue(string request, string name)
    {
        foreach (var line in request.Split("\r\n").Skip(1))
        {
            var colon = line.IndexOf(':');
            if (colon <= 0)
                continue;

            if (line[..colon].Trim().Equals(name, StringComparison.OrdinalIgnoreCase))
                return line[(colon + 1)..].Trim();
        }

        return null;
    }

    private static string MediaType(string path, string extension)
    {
        var hint = extension.TrimStart('.').ToLowerInvariant();
        var ext = hint.Length > 0 ? $".{hint}" : Path.GetExtension(path).ToLowerInvariant();

        return TypeOf(ext) ?? "application/octet-stream";
    }

    private static string? TypeOf(string extension) => extension.ToLowerInvariant() switch
    {
        ".mp4" or ".m4v" => "video/mp4",
        ".webm" => "video/webm",
        ".mkv" => "video/x-matroska",
        ".mov" => "video/quicktime",
        ".avi" => "video/x-msvideo",
        ".wmv" => "video/x-ms-wmv",
        ".mp3" => "audio/mpeg",
        ".m4a" => "audio/mp4",
        ".wav" => "audio/wav",
        ".flac" => "audio/flac",
        ".ogg" or ".oga" => "audio/ogg",
        ".aac" => "audio/aac",
        ".png" => "image/png",
        ".jpg" or ".jpeg" => "image/jpeg",
        ".gif" => "image/gif",
        ".webp" => "image/webp",
        ".bmp" => "image/bmp",
        ".svg" => "image/svg+xml",
        _ => null
    };

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
