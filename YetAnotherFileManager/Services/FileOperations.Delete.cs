using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Text;
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
    public static async Task<DeletePayload> DeleteAsync(IReadOnlyList<string> paths, bool permanent = false,
        bool runningConfirmed = false)
    {
        var items = Selection(paths);
        if (items.Count == 0)
            return new(false, false, Localization.Get("there_is_nothing_to_delete"));

        // A policy or a volume setting can turn the bin off; that means "delete for good", which
        // Explorer asks about first, so the window gets the same chance.
        if (!permanent && items.Any(path => !RecycleBin.CanRecycle(path)))
            return new(false, true, Localization.Get("the_recycle_bin_is_turned_off_for_this_volume"));

        // Windows lets a running image be renamed, so the file itself does reach the recycle bin,
        // while the folder around it cannot move and an unlink can only fail. A folder is refused at
        // once; the file is offered as a question because deleting it breaks its shortcuts and
        // updates. Both answers name the programs that hold the selection.
        var images = await Task.Run(RunningImages);
        var locked = LockedBy(images, items);
        var lockedFiles = locked.Where(entry => File.Exists(entry.Item)).ToList();
        var lockedFolders = locked.Except(lockedFiles).ToList();

        if (permanent && locked.Count > 0)
        {
            var holders = Holders(locked);
            return new(false, false, InUseMessage(locked.Count, holders), Running: holders);
        }

        if (lockedFolders.Count > 0)
        {
            var holders = Holders(lockedFolders);
            return new(false, false, InUseMessage(lockedFolders.Count, holders), Running: holders);
        }

        if (lockedFiles.Count > 0 && !runningConfirmed)
            return new(false, false, null, NeedsRunningConfirm: true, Running: Holders(lockedFiles));

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

        var id = TaskCenter.Instance.Start("delete", DeleteLabel(permanent, items.Count), items.Count);

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

    /// <summary>Every entry that a running image is, or that holds one, with the programs inside it.</summary>
    private static List<(string Item, List<RunningProgram> Holders)> LockedBy(
        List<(RunningProgram Program, string Image)> images, List<string> items)
    {
        var locked = new List<(string, List<RunningProgram>)>();

        foreach (var item in items)
        {
            var target = LongPath(item);
            var holders = images
                .Where(image => IsInside(image.Image, target))
                .Select(image => image.Program)
                .DistinctBy(program => program.Id)
                .ToList();

            if (holders.Count > 0)
                locked.Add((item, holders));
        }

        return locked;
    }

    /// <summary>The distinct programs behind a set of locked entries.</summary>
    private static List<RunningProgram> Holders(IEnumerable<(string Item, List<RunningProgram> Holders)> locked) =>
        locked.SelectMany(entry => entry.Holders).DistinctBy(program => program.Id).ToList();

    /// <summary>
    ///     Every image a process is running, in the long form that a selected path is compared
    ///     against: Windows keeps an image locked while it runs, and an elevated copy does not lift
    ///     that. Paths come back in 8.3 form when a process was started through one, so both sides are
    ///     expanded first.
    /// </summary>
    private static List<(RunningProgram Program, string Image)> RunningImages()
    {
        var images = new List<(RunningProgram, string)>();

        foreach (var process in Process.GetProcesses())
        {
            var image = Try.Run(() => process.MainModule?.FileName).GetOrNull();
            var name = Try.Run(() => process.ProcessName).GetOrNull();
            var id = process.Id;
            process.Dispose();

            if (image is not null && name is not null)
                images.Add((new RunningProgram(name, id, LongPath(image)), LongPath(image)));
        }

        return images;
    }

    /// <summary>Expands the short (8.3) segments of a path; anything already long is returned as is.</summary>
    private static string LongPath(string path)
    {
        if (!OperatingSystem.IsWindows() || path.Length == 0)
            return path;

        var buffer = new StringBuilder(path.Length + 1);
        var written = GetLongPathNameW(path, buffer, (uint)buffer.Capacity);

        if (written >= buffer.Capacity)
        {
            buffer = new StringBuilder((int)written + 1);
            written = GetLongPathNameW(path, buffer, (uint)buffer.Capacity);
        }

        return written == 0 ? path : buffer.ToString();
    }

    [DllImport("kernel32.dll", CharSet = CharSet.Unicode, ExactSpelling = true, SetLastError = true)]
    private static extern uint GetLongPathNameW(string shortPath, StringBuilder longPath, uint bufferLength);

    private static bool IsInside(string file, string path) =>
        file.Equals(path, StringComparison.OrdinalIgnoreCase)
        || file.StartsWith(path.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar)
                           + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase);

    /// <summary>The status center's note for entries a running program keeps locked.</summary>
    private static string InUseMessage(int count, IEnumerable<RunningProgram> holders)
    {
        var programs = string.Join(", ", holders
            .DistinctBy(program => program.Id)
            .Select(program => $"{program.Name} (PID {program.Id})"));

        return count == 1
            ? string.Format(Localization.Get("k_1_item_is_in_use_by_programs_close_it_and_try_again"), programs)
            : string.Format(Localization.Get("count_items_are_in_use_by_programs_close_them_and_try_again"),
                count, programs);
    }

    /// <summary>The status center's label for deleting one or many items.</summary>
    private static string DeleteLabel(bool permanent, int count) =>
        count == 1
            ? Localization.Get(permanent ? "permanently_delete_1_item" : "delete_1_item")
            : string.Format(Localization.Get(permanent ? "permanently_delete_n_items" : "delete_n_items"), count);

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

        var selected = new HashSet<string>(items, StringComparer.OrdinalIgnoreCase);
        var kept = new List<string>(items.Count);

        foreach (var path in items)
        {
            // A selected folder leaves every one of its ancestors in the set, so walking up from a
            // path answers "is this inside something else" without comparing every pair.
            var parent = Path.GetDirectoryName(path);

            while (parent is { Length: > 2 } && !selected.Contains(parent))
                parent = Path.GetDirectoryName(parent);

            if (parent is not { Length: > 2 })
                kept.Add(path);
        }

        return kept;
    }

    private static string Normalize(string path) =>
        path.TrimEnd('\\', '/').ToLowerInvariant();
}