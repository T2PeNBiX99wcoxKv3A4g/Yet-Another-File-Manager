using PhotinoNetUtils;
using PhotinoNetUtils.Localization;
using Serilog;
using YetAnotherFileManager.Interop;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Deleting entries without handing them to the shell: the recycle bin record is written here, and
///     a big tree is unlinked by the Rust helper across every core. Both paths report to the status
///     center, so the window shows a row with the count and a bar while the delete runs.
/// </summary>
internal static partial class FileOperations
{
    /// <summary>Sends the paths to the recycle bin, or deletes them permanently when asked.</summary>
    public static async Task<DeletePayload> DeleteAsync(IReadOnlyList<string> paths, bool permanent = false)
    {
        var items = Selection(paths);
        if (items.Count == 0)
            return new(false, false, Localization.Get("there_is_nothing_to_delete"));

        // A policy or a volume setting can turn the bin off; that means "delete for good", which
        // Explorer asks about first, so the window gets the same chance.
        if (!permanent && items.Any(path => !RecycleBin.CanRecycle(path)))
            return new(false, true, Localization.Get("the_recycle_bin_is_turned_off_for_this_volume"));

        var deletedAt = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        var (step, deleted) = await DeleteWithProgressAsync(items, permanent);

        if (!permanent && deleted > 0)
            // Undo puts back whatever really reached the bin, so the whole selection is tried.
            FileHistory.Instance.Record($"Delete {deleted} item(s)",
                paths: items,
                undo: () => RestoreFromRecycleAsync(items, deletedAt),
                redo: async () => (await DeleteWithProgressAsync(items, false)).Step);

        return new(step.Ok, false, step.Error);
    }

    private static async Task<FileHistory.Step> DeleteCoreAsync(IReadOnlyList<string> paths, bool permanent) =>
        (await DeleteWithProgressAsync(Selection(paths), permanent)).Step;

    /// <summary>
    ///     Runs one delete behind a status-center row. <c>Deleted</c> is how many entries really went to
    ///     the recycle bin; a permanent delete leaves it at zero because there is nothing to restore.
    /// </summary>
    private static async Task<(FileHistory.Step Step, int Deleted)> DeleteWithProgressAsync(
        List<string> items, bool permanent)
    {
        if (items.Count == 0)
            return (new(false, [], Localization.Get("there_is_nothing_to_delete")), 0);

        // Only the recycle bin is Windows-only (the freedesktop trash covers Linux); a permanent
        // delete works on every platform.
        if (!permanent && !OperatingSystem.IsWindows() && !OperatingSystem.IsLinux())
            return (new(false, ParentsOf(items),
                "Moving to the recycle bin needs Windows or Linux."), 0);

        var id = TaskCenter.Instance.Start("delete",
            $"{(permanent ? "Permanently delete" : "Delete")} {items.Count} item{(items.Count == 1 ? "" : "s")}",
            items.Count);

        try
        {
            return permanent
                ? await DeletePermanentlyAsync(id, items)
                : await RecycleAsync(id, items);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not delete the selection");
            TaskCenter.Instance.Fail(id, ex.Message);

            return (new(false, ParentsOf(items), ex.Message), 0);
        }
    }

    /// <summary>One record per entry, so the status center can count them off as they go.</summary>
    private static async Task<(FileHistory.Step Step, int Deleted)> RecycleAsync(string id, List<string> items)
    {
        var deleted = 0;
        var done = 0;
        var refused = new List<string>();

        foreach (var path in items)
        {
            if (await RecycleBin.SendAsync(path))
                deleted++;
            else
                refused.Add(path);

            TaskCenter.Instance.Progress(id, ++done, 0);
        }

        string? error = null;

        // A protected folder is changed by an elevated copy of the app; the standard recycle bin
        // record it writes is the one the recycle view and undo already look for.
        if (refused.Count > 0)
        {
            var elevated = OperatingSystem.IsWindows() && !ElevatedOperation.IsHelper
                ? await ElevatedOperation.DeleteAsync([.. refused], false, progress =>
                {
                    TaskCenter.Instance.UpdateTotal(id, progress.Total, progress.BytesTotal);
                    TaskCenter.Instance.Progress(id, progress.Done, progress.BytesDone);
                })
                : new(false, null, [], null);

            if (elevated.Ok)
                deleted += refused.Count;
            else
                error = elevated.Error ?? $"Could not move {Path.GetFileName(refused[0])} to the recycle bin.";
        }

        return Finish(id, items, error, deleted);
    }

    /// <summary>
    ///     The native deleter measures the tree first, so the status center has a total, then unlinks
    ///     the files across every core. Both calls stay off the message thread.
    /// </summary>
    private static async Task<(FileHistory.Step Step, int Deleted)> DeletePermanentlyAsync(string id,
        List<string> items)
    {
        var files = await Task.Run(() => RustNative.CountFiles(items));
        TaskCenter.Instance.UpdateTotal(id, (int)Math.Min(files, int.MaxValue), 0);

        var failures = await Task.Run(() => RustNative.Delete(items, files,
            (done, _) => TaskCenter.Instance.Progress(id, (int)Math.Min(done, int.MaxValue), 0)));

        // Whatever a protected folder refused is retried by an elevated copy of the app.
        if (failures > 0 && OperatingSystem.IsWindows() && !ElevatedOperation.IsHelper)
        {
            var refused = items.Where(Exists).ToList();

            if (refused.Count > 0)
            {
                await ElevatedOperation.DeleteAsync([.. refused], true, progress =>
                {
                    TaskCenter.Instance.UpdateTotal(id, progress.Total, progress.BytesTotal);
                    TaskCenter.Instance.Progress(id, progress.Done, progress.BytesDone);
                });

                failures = items.Count(Exists);
            }
        }

        return Finish(id, items,
            failures == 0 ? null : $"{failures} entr{(failures == 1 ? "y" : "ies")} could not be deleted.",
            0);
    }

    private static bool Exists(string path) => File.Exists(path) || Directory.Exists(path);

    private static (FileHistory.Step Step, int Deleted) Finish(string id, List<string> items, string? error,
        int deleted)
    {
        if (error is null)
            TaskCenter.Instance.Complete(id);
        else
        {
            TaskCenter.Instance.Fail(id, error);
            Log.Warning("Delete of {Total} item(s) finished with a problem: {Error}", items.Count, error);
        }

        // A selection that lost a few entries still changed the folder, so the window has to reread it.
        return (new(deleted > 0 || error is null, ParentsOf(items), error), deleted);
    }

    /// <summary>Finds the records a delete just created and restores them.</summary>
    private static async Task<FileHistory.Step> RestoreFromRecycleAsync(IReadOnlyList<string> paths, long deletedAt)
    {
        var entries = await RecycleBin.ListAsync();
        var wanted = paths.Select(Normalize).ToHashSet(StringComparer.OrdinalIgnoreCase);

        var matches = entries
            .Where(entry => entry.Deleted >= deletedAt - 5000 && wanted.Contains(Normalize(entry.OriginalPath)))
            .OrderByDescending(entry => entry.Deleted)
            .ToList();

        if (matches.Count == 0)
            return new(false, ParentsOf(paths),
                "The deleted items are no longer in the recycle bin.");

        var restored = 0;
        var refused = new List<string>();

        foreach (var entry in matches)
            if (await RecycleBin.RestoreAsync(entry.Id))
                restored++;
            else
                refused.Add(entry.Id);

        // Putting entries back into a protected folder needs the elevated copy as well.
        if (refused.Count > 0 && OperatingSystem.IsWindows() && !ElevatedOperation.IsHelper)
        {
            var elevated = await ElevatedOperation.RestoreRecycleAsync([.. refused]);
            if (elevated.Ok)
                restored += refused.Count;
        }

        return new(restored > 0, ParentsOf(paths),
            restored > 0 ? null : "Windows could not restore the deleted items.");
    }

    /// <summary>
    ///     The paths that really need deleting: duplicates and anything inside another selected folder
    ///     are dropped, and a drive root is never one of them.
    /// </summary>
    private static List<string> Selection(IReadOnlyList<string> paths)
    {
        var items = paths
            .Where(path => path.Length > 0)
            .Select(path => path.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar))
            .Where(path => path.Length > 2 && (File.Exists(path) || Directory.Exists(path)))
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToList();

        return items
            .Where(path => !items.Any(other => other.Length < path.Length
                                               && path.StartsWith(other + Path.DirectorySeparatorChar,
                                                   StringComparison.OrdinalIgnoreCase)))
            .ToList();
    }

    private static string Normalize(string path) =>
        path.TrimEnd('\\', '/').ToLowerInvariant();
}