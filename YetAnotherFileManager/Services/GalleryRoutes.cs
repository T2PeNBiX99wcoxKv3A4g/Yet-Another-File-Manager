using System.Globalization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using PhotinoNetUtils.Hosting;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The picture wall's pages. A scan spans many folders, so the block carries complete paths
///     instead of a folder plus a name, and the window takes the file name from them.
/// </summary>
internal static class GalleryRoutes
{
    private const int MaxCount = 2000;

    public static void Map(WebApplication app, string token) =>
        app.MapGet($"/data/{token}/gallery", (Delegate)PageAsync);

    private static async Task<IResult> PageAsync(HttpContext context)
    {
        var query = context.Request.Query;
        var offset = Math.Max(0, ReadNumber(query["offset"], 0));
        var count = Math.Clamp(ReadNumber(query["count"], 150), 1, MaxCount);
        var refresh = query["refresh"] == "1";

        var (entries, total) = await Gallery.Instance.PageAsync(offset, count, refresh);

        var page = entries
            .Select(entry => new ListingEntry(entry.Path, entry.Size, entry.Modified, entry.Modified,
                false, false, false))
            .ToArray();

        var block = ListingFormat.Encode(page, "", absoluteNames: true);
        var text = string.Equals(query["format"], "text", StringComparison.OrdinalIgnoreCase);

        context.Response.Headers[ListingFormat.TotalHeader] = total.ToString(CultureInfo.InvariantCulture);
        context.Response.Headers.CacheControl = "no-cache";

        return text
            ? Results.Text(ListingFormat.Dump(block, total), "text/plain; charset=utf-8")
            : Results.Bytes(block, ListingFormat.ContentType);
    }

    private static int ReadNumber(string? value, int fallback) =>
        int.TryParse(value, NumberStyles.Integer, CultureInfo.InvariantCulture, out var parsed) ? parsed : fallback;
}
