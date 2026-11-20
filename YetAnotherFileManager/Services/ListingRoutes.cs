using System.Globalization;
using System.Text.Json;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Serves one page of a folder listing as the binary block in <see cref="ListingFormat" />.
///     Paging, sorting and the folder's signature all happen here, so the window asks for what it is
///     about to draw instead of receiving the whole folder.
/// </summary>
internal static class ListingRoutes
{
    private const int DefaultCount = 400;
    private const int MaxCount = 100_000;

    public static void Map(WebApplication app, string token) =>
        app.MapGet($"/data/{token}/list", (Delegate)ListAsync);

    private static async Task<IResult> ListAsync(HttpContext context)
    {
        var query = context.Request.Query;
        var directory = query["path"].ToString();

        if (directory.Length == 0)
            return Results.BadRequest();

        var from = Math.Max(0, ReadNumber(query["from"], 0));
        var count = Math.Clamp(ReadNumber(query["count"], DefaultCount), 0, MaxCount);
        var sort = query["sort"].ToString() is { Length: > 0 } value ? value : "name";
        var descending = string.Equals(query["dir"], "desc", StringComparison.OrdinalIgnoreCase);

        try
        {
            var page = await ListingCache.ReadAsync(directory, sort, descending, from, count,
                context.RequestAborted);

            var etag = $"\"{page.Signature:x8}\"";

            // The signature is the folder's content, so a repeat request for the first page can be
            // answered without a body at all.
            context.Response.Headers.ETag = etag;
            context.Response.Headers["X-Yafm-Total"] = page.Total.ToString(CultureInfo.InvariantCulture);
            context.Response.Headers.CacheControl = "no-cache";

            if (from == 0 && context.Request.Headers.IfNoneMatch == etag)
                return Results.StatusCode(StatusCodes.Status304NotModified);

            // The readable form of the same page, for `?format=json` while developing.
            if (string.Equals(query["format"], "json", StringComparison.OrdinalIgnoreCase))
                return Results.Text(JsonSerializer.Serialize(
                        new ListingPagePayload(page.Path, page.Signature, page.Total, page.Entries),
                        AppJsonContext.Default.ListingPagePayload),
                    "application/json; charset=utf-8");

            return Results.Bytes(ListingFormat.Encode(page.Entries, page.Path), ListingFormat.ContentType);
        }
        catch (OperationCanceledException)
        {
            return Results.StatusCode(StatusCodes.Status499ClientClosedRequest);
        }
        catch (Exception ex)
        {
            Serilog.Log.Debug(ex, "Could not list {Path} for the data plane", directory);
            return Results.NotFound();
        }
    }

    private static int ReadNumber(string? value, int fallback) =>
        int.TryParse(value, NumberStyles.Integer, CultureInfo.InvariantCulture, out var parsed) ? parsed : fallback;
}
