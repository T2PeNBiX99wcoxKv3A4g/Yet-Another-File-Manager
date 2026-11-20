using System.Collections.Concurrent;
using System.Diagnostics;
using System.Globalization;
using System.Runtime.Versioning;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Interop;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The pictures the window shows without the shell: shell thumbnails, the app's own decoders,
///     media with byte ranges, and the first PDF page. They are ordinary routes on the local server,
///     so the web view fetches them with its own connection pool and cache instead of pushing base64
///     strings through the native message bridge.
/// </summary>
internal static class ThumbnailRoutes
{
    private const int CacheLimit = 500;
    private const long CacheBytes = 96L * 1024 * 1024;

    /// <summary>Full-resolution decodes are memory hungry, so only two of them run at a time.</summary>
    private static readonly SemaphoreSlim ImageGate = new(2, 2);

    private static readonly SemaphoreSlim PdfGate = new(2, 2);
    private static readonly ConcurrentDictionary<string, byte[]> Cache = new(StringComparer.OrdinalIgnoreCase);
    private static readonly ConcurrentQueue<string> Order = new();

    /// <summary>A temporary copy of an entry read out of an archive, keyed by its virtual path.</summary>
    private static readonly ConcurrentDictionary<string, string> Extracted = new(StringComparer.OrdinalIgnoreCase);

    private static readonly SemaphoreSlim Gate = new(Math.Clamp(Environment.ProcessorCount, 4, 8));

    private static long _cachedBytes;

    public static void Map(WebApplication app, string token)
    {
        app.MapGet($"/data/{token}/thumb", (Delegate)ThumbAsync);
        app.MapGet($"/data/{token}/media", Media);
        app.MapGet($"/data/{token}/pdf", (Delegate)PdfAsync);
    }

    private static async Task<IResult> ThumbAsync(HttpContext context)
    {
        var query = context.Request.Query;
        var path = query["path"].ToString();

        if (path.Length == 0)
            return Results.NotFound();

        var size = int.TryParse(query["size"], NumberStyles.Integer, CultureInfo.InvariantCulture, out var parsed)
            ? Math.Clamp(parsed, 32, 512)
            : 128;

        var bytes = await ThumbnailAsync(path, size, query["v"].ToString(), context.RequestAborted);

        return bytes is null ? Results.NotFound() : Results.Bytes(bytes, "image/png");
    }

    private static async Task<byte[]?> ThumbnailAsync(string path, int size, string version,
        CancellationToken cancellationToken)
    {
        var key = $"{path}|{size}|{version}";
        if (Cache.TryGetValue(key, out var cached))
            return cached;

        await Gate.WaitAsync(cancellationToken);
        try
        {
            if (Cache.TryGetValue(key, out cached))
                return cached;

            // A file inside an archive has no copy on disk yet; extract it once so the shell or the
            // decoder can read it. The cache stays keyed by the virtual path, so the temporary copy
            // never becomes a second entry. This happens under the gate: a wall of tiles used to
            // unpack the same archive once per tile, all at the same time.
            var source = path;
            if (!File.Exists(source) && Archives.TrySplit(path, out _, out var inner) && inner.Length > 0)
                source = await ExtractOnceAsync(path);

            if (!File.Exists(source) || !OperatingSystem.IsWindows() && !OperatingSystem.IsLinux())
                return null;

            byte[]? bytes;

            // Asked first: the shell answers these with the file's icon, which is what a tile shows
            // when nothing better is available.
            if (NativeThumbnailExtensions.Contains(Path.GetExtension(source)) &&
                await Task.Run(() => RustNative.Thumbnail(source, size), cancellationToken) is { } native)
            {
                Remember(key, native);
                return native;
            }

            if (OperatingSystem.IsWindows())
                bytes = await WindowsThumbnailAsync(source, size);
            else if (OperatingSystem.IsLinux())
                bytes = await LinuxThumbnailAsync(source, size);
            else
                return null;

            if (bytes is not null)
                Remember(key, bytes);

            return bytes;
        }
        finally
        {
            Gate.Release();
        }
    }

    /// <summary>Streams a video or audio file; Kestrel answers the byte ranges the element asks for.</summary>
    private static IResult Media(HttpContext context)
    {
        var path = context.Request.Query["path"].ToString();

        if (path.Length == 0 || !File.Exists(path))
            return Results.NotFound();

        return Results.File(path, MediaType(path, context.Request.Query["ext"].ToString()),
            enableRangeProcessing: true);
    }

    /// <summary>Renders a PDF page in the isolated helper and caches the PNG it returns.</summary>
    private static async Task<IResult> PdfAsync(HttpContext context)
    {
        var path = context.Request.Query["path"].ToString();
        var bytes = await PdfBytesAsync(path, context.Request.Query["v"].ToString(), context.RequestAborted);

        return bytes is null ? Results.NotFound() : Results.Bytes(bytes, "image/png");
    }

    private static async Task<byte[]?> PdfBytesAsync(string path, string version, CancellationToken cancellationToken)
    {
        var key = $"pdf|{path}|{version}";
        if (Cache.TryGetValue(key, out var cached))
            return cached;

        if (path.Length == 0 || !File.Exists(path))
            return null;

        await PdfGate.WaitAsync(cancellationToken);
        try
        {
            if (Cache.TryGetValue(key, out cached))
                return cached;

            var bytes = await RenderPdfAsync(path, cancellationToken);
            if (bytes is not null)
                Remember(key, bytes);

            return bytes;
        }
        finally
        {
            PdfGate.Release();
        }
    }

    private static async Task<byte[]?> RenderPdfAsync(string path, CancellationToken cancellationToken)
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
                WindowStyle = ProcessWindowStyle.Hidden
            };

            if (Path.GetFileNameWithoutExtension(executable).Equals("dotnet", StringComparison.OrdinalIgnoreCase))
            {
                // A single-file app has no Assembly.Location; the command line names the entry point
                // in both layouts (the .dll when the host is dotnet, the apphost otherwise).
                var assembly = Environment.GetCommandLineArgs().FirstOrDefault();
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

            using var timeout = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
            timeout.CancelAfter(TimeSpan.FromSeconds(15));

            try
            {
                var status = await process.WaitForExitStatusAsync(timeout.Token);

                if (status.ExitCode != 0 || !File.Exists(output))
                    return null;
            }
            catch (OperationCanceledException)
            {
                Try.Run(() => process.Kill(true));
                Serilog.Log.Debug("PDF preview timed out for {Path}", path);
                return null;
            }

            var bytes = await File.ReadAllBytesAsync(output, cancellationToken);
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

    /// <summary>The entry unpacked once per archive, so a grid of its pictures reads it only once.</summary>
    private static async Task<string> ExtractOnceAsync(string path)
    {
        if (Extracted.TryGetValue(path, out var known) && File.Exists(known))
            return known;

        var source = await Task.Run(() => Try.Run(() => Archives.ExtractEntry(path)).GetOrElse(_ => path));

        // A closed archive deletes its temporary copies, so a stale entry is re-extracted next time.
        if (source != path)
            Extracted[path] = source;

        return source;
    }

    [SupportedOSPlatform("windows")]
    private static Task<byte[]?> WindowsThumbnailAsync(string path, int size) =>
        Task.Run(async () =>
        {
            // The shell thumbnail flattens some transparent pictures onto black; formats that can
            // carry alpha are drawn here, and the shell is only the fallback for them.
            if (AlphaExtensions.Contains(Path.GetExtension(path)))
            {
                // GDI+ decodes at full resolution before scaling, so only two of these run at once
                // even while the gate lets more shell lookups through.
                await ImageGate.WaitAsync();
                try
                {
                    return ImageThumbnail.Png(path, size) ?? ShellThumbnail.Bytes(path, size);
                }
                finally
                {
                    ImageGate.Release();
                }
            }

            return ShellThumbnail.Bytes(path, size);
        });

    /// <summary>
    ///     Formats the native decoders draw, because Windows has no thumbnail provider for them: a PSD
    ///     carries its own flattened preview, TGA, DDS, HDR and EXR are a texture tool's or a
    ///     renderer's own formats, and PCX, DIB and JPEG XL are old or new pictures nothing else here
    ///     reads.
    /// </summary>
    private static readonly HashSet<string> NativeThumbnailExtensions =
    [
        with(StringComparer.OrdinalIgnoreCase), ".psd", ".psb", ".tga", ".dds", ".hdr", ".exr", ".pcx", ".dib", ".jxl"
    ];

    /// <summary>Formats whose transparency the app's own image decoder keeps.</summary>
    private static readonly HashSet<string> AlphaExtensions =
    [
        with(StringComparer.OrdinalIgnoreCase), ".png", ".gif", ".bmp", ".ico", ".apng", ".jpe", ".jfif"
    ];

    [SupportedOSPlatform("linux")]
    private static Task<byte[]?> LinuxThumbnailAsync(string path, int size) =>
        Task.Run(() => LinuxThumbnails.Png(path, size));

    private static void Remember(string key, byte[] bytes)
    {
        // A replaced entry must not be queued again: a duplicate key would later evict an entry that
        // is still wanted, and the cache would shrink below its own limit.
        if (!Cache.TryAdd(key, bytes))
        {
            Cache[key] = bytes;
            return;
        }

        Interlocked.Add(ref _cachedBytes, bytes.Length);
        Order.Enqueue(key);

        while ((Order.Count > CacheLimit || Interlocked.Read(ref _cachedBytes) > CacheBytes)
               && Order.TryDequeue(out var oldest))
            if (Cache.TryRemove(oldest, out var removed))
                Interlocked.Add(ref _cachedBytes, -removed.Length);
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
        ".apng" => "image/apng",
        ".svg" => "image/svg+xml",
        _ => null
    };
}
