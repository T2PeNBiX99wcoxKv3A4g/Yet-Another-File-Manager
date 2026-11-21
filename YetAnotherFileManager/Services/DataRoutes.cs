using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using PhotinoNetUtils.Hosting;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The lists that grow with a session: the undo history and the recycle bin. They travel as
///     binary blocks so the history panel's once-a-second refresh does not parse an object per row.
/// </summary>
internal static class DataRoutes
{
    public const ushort HistoryKind = 1;
    public const ushort RecycleKind = 2;

    public static void Map(WebApplication app, string token)
    {
        app.MapGet($"/data/{token}/history", (Delegate)((HttpContext _) =>
        {
            var block = new DataBlock(HistoryKind)
                .Text("label")
                .Text("paths")
                .Number("id")
                .Number("at")
                .Number("applied")
                .Number("restorable");

            foreach (var entry in FileHistory.Instance.List().Entries)
                block.Row(
                    [entry.Label, string.Join('\u001f', entry.Paths)],
                    entry.Id,
                    entry.At,
                    entry.Applied ? 1 : 0,
                    entry.Restorable ? 1 : 0);

            return DataBlockResults.Block(block);
        }));

        app.MapGet($"/data/{token}/recycle", (Delegate)(async (HttpContext context) =>
        {
            var includeOrphans = context.Request.Query["orphans"] == "1";
            var entries = await RecycleBin.ListAsync(includeOrphans, context.RequestAborted);

            var block = new DataBlock(RecycleKind)
                .Text("id")
                .Text("name")
                .Text("originalPath")
                .Text("owner")
                .Text("contentPath")
                .Number("size")
                .Number("deleted")
                .Number("isDirectory")
                .Number("isOrphan")
                .Number("removable");

            foreach (var entry in entries)
                block.Row(
                    [
                        entry.Id,
                        entry.Name,
                        entry.OriginalPath,
                        entry.Owner ?? "",
                        entry.ContentPath
                    ],
                    entry.Size,
                    entry.Deleted,
                    entry.IsDirectory ? 1 : 0,
                    entry.IsOrphan ? 1 : 0,
                    entry.Removable ? 1 : 0);

            return DataBlockResults.Block(block);
        }));
    }
}
