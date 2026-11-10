using System.Buffers;
using PhotinoNetUtils;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Localization;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Interop;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Copies and moves entries without going through the shell. The shell does the work on its own
///     thread with its own conflict dialog; this version stays in the app, reports progress to the
///     status center, and uses Explorer's "name (2)" rule when the target already has that name.
/// </summary>
internal static class FileTransfer
{
    private const int BufferSize = 1 << 20;

    /// <summary>Reports a copy at most this often; the task center already throttles notifications.</summary>
    private const int ReportMilliseconds = 100;

    private static readonly EnumerationOptions Options = new()
    {
        IgnoreInaccessible = true,
        RecurseSubdirectories = true,
        // Junctions and symlinks would either double count or loop forever.
        AttributesToSkip = FileAttributes.ReparsePoint
    };

    /// <summary>
    ///     Copies or moves every source into <paramref name="target" />. Each source keeps its name;
    ///     a name that is already taken becomes "name (2)", exactly like Explorer.
    /// </summary>
    public static async Task<(bool Ok, string? Error, List<string> Created)> RunAsync(
        IReadOnlyList<string> sources, string target, bool move, CancellationToken cancellationToken = default)
    {
        var list = sources
            .Where(path => path.Length > 0)
            .Select(path => path.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar))
            .Where(path => path.Length > 0 && (File.Exists(path) || Directory.Exists(path)))
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToList();

        if (list.Count == 0)
            return (false, Localization.Get("There is nothing to copy or move."), []);

        if (!Directory.Exists(target))
            return (false, Localization.Get("The target folder is no longer there."), []);

        // Moving an entry onto the folder it already lives in would only create "name (2)".
        if (move)
        {
            var normalizedTarget = Path.GetFullPath(target).TrimEnd(Path.DirectorySeparatorChar);

            list = list
                .Where(source => !string.Equals(
                    Path.GetFullPath(Path.GetDirectoryName(source) ?? source)
                        .TrimEnd(Path.DirectorySeparatorChar),
                    normalizedTarget, StringComparison.OrdinalIgnoreCase))
                .ToList();

            if (list.Count == 0)
                return (true, null, []);
        }

        if (move && list.Any(source => IsInside(source, target)))
            return (false, Localization.Get("A folder cannot be moved into itself."), []);

        // A folder the current user cannot write to is handed to the shell, which can ask for
        // elevation and retry, instead of failing at the first file with access denied.
        if (OperatingSystem.IsWindows() && !ShellFileOperation.CanWriteTo(target))
            return await RunThroughShellAsync(list, target, move);

        var taskId = TaskCenter.Instance.Start(move ? "move" : "copy",
            $"{(move ? "Move" : "Copy")} {list.Count} item{(list.Count == 1 ? "" : "s")}");

        var created = new List<string>();
        var reserved = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        var jobs = new List<Job>();
        long totalFiles = 0;
        long totalBytes = 0;

        try
        {
            foreach (var source in list)
            {
                var isDirectory = Directory.Exists(source);
                var name = Path.GetFileName(source);

                if (name.Length == 0)
                    return (false, Localization.Get("A drive root cannot be copied this way."), created);

                var destination = UniqueDestination(target, name, isDirectory, reserved);

                // A move on the same volume is a rename in the directory entry, so measuring the
                // whole tree first would be pure overhead. Only a cross-volume fallback copies files.
                var (files, bytes) = move
                    ? (1L, 0L)
                    : isDirectory
                        ? Measure(source, cancellationToken)
                        : (1L, Try.Run(() => new FileInfo(source).Length).GetOrElse(_ => 0L));

                jobs.Add(new(source, destination, isDirectory, files, bytes));
                totalFiles += files;
                totalBytes += bytes;
            }

            TaskCenter.Instance.UpdateTotal(taskId, (int)Math.Min(totalFiles, int.MaxValue), totalBytes);

            long doneFiles = 0;
            long doneBytes = 0;
            var lastReport = 0L;

            void Report(long bytes)
            {
                doneBytes += bytes;
                var now = Environment.TickCount64;
                if (now - lastReport < ReportMilliseconds)
                    return;

                lastReport = now;
                TaskCenter.Instance.Progress(taskId, (int)Math.Min(doneFiles, int.MaxValue), doneBytes);
            }

            string? firstError = null;

            foreach (var job in jobs)
            {
                cancellationToken.ThrowIfCancellationRequested();

                if (move && TryMoveDirect(job))
                {
                    created.Add(job.Destination);
                    doneFiles += job.Files;
                    doneBytes += job.Bytes;
                    TaskCenter.Instance.Progress(taskId, (int)Math.Min(doneFiles, int.MaxValue), doneBytes);
                    continue;
                }

                try
                {
                    await CopyTreeAsync(job, move ? () => { } : () => doneFiles++, Report, cancellationToken);

                    if (move)
                        doneFiles++;

                    created.Add(job.Destination);

                    if (move)
                        TryDelete(job.Source);
                }
                catch (OperationCanceledException)
                {
                    throw;
                }
                catch (Exception ex)
                {
                    firstError ??= ex.Message;
                    Log.Warning(ex, "Could not {Action} {Source} to {Target}", move ? "move" : "copy",
                        job.Source, job.Destination);
                }
            }

            if (firstError is null)
                TaskCenter.Instance.Complete(taskId);
            else
                TaskCenter.Instance.Fail(taskId, firstError);

            return (created.Count > 0 || firstError is null, firstError, created);
        }
        catch (OperationCanceledException)
        {
            TaskCenter.Instance.Fail(taskId, "Cancelled.");
            return (false, "Cancelled.", created);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not {Action} into {Target}", move ? "move" : "copy", target);
            TaskCenter.Instance.Fail(taskId, ex.Message);
            return (false, ex.Message, created);
        }
    }

    /// <summary>
    ///     Runs a copy or move the current user is not allowed to do through the shell, so Windows
    ///     can show its elevation prompt and repeat the operation with the administrator token.
    /// </summary>
    private static async Task<(bool Ok, string? Error, List<string> Created)> RunThroughShellAsync(
        List<string> sources, string target, bool move)
    {
        var created = new List<string>();
        var reserved = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        var owner = WindowManager.Instance.WindowHandle;
        string? error = null;

        foreach (var source in sources)
        {
            var isDirectory = Directory.Exists(source);
            var destination = UniqueDestination(target, Path.GetFileName(source), isDirectory, reserved);

            var done = await StaThread.RunAsync(() => ShellFileOperation.Copy(
                source, target, Path.GetFileName(destination), move, owner));

            if (done && (File.Exists(destination) || Directory.Exists(destination)))
            {
                created.Add(destination);
                continue;
            }

            // Declining the consent prompt applies to the rest as well.
            error = Localization.Get("Administrator rights are required to change this folder.");
            break;
        }

        return (error is null, error, created);
    }

    private static async Task CopyTreeAsync(Job job, Action fileDone, Action<long> bytes,
        CancellationToken cancellationToken)
    {
        if (!job.IsDirectory)
        {
            await CopyFileAsync(job.Source, job.Destination, bytes, cancellationToken);
            fileDone();
            return;
        }

        Directory.CreateDirectory(job.Destination);

        var directories = new List<(string Source, string Destination)>();

        foreach (var directory in Directory.EnumerateDirectories(job.Source, "*", Options))
        {
            cancellationToken.ThrowIfCancellationRequested();

            var destination = Path.Combine(job.Destination, Path.GetRelativePath(job.Source, directory));
            Directory.CreateDirectory(destination);
            directories.Add((directory, destination));
        }

        foreach (var file in Directory.EnumerateFiles(job.Source, "*", Options))
        {
            cancellationToken.ThrowIfCancellationRequested();

            // The app's own index is not part of the folder's contents.
            if (DirectoryIndex.IsIndexFile(Path.GetFileName(file)))
                continue;

            var destination = Path.Combine(job.Destination, Path.GetRelativePath(job.Source, file));
            Directory.CreateDirectory(Path.GetDirectoryName(destination)!);

            await CopyFileAsync(file, destination, bytes, cancellationToken);
            fileDone();
        }

        // Directory timestamps are set after their contents, deepest first.
        foreach (var (source, destination) in directories.OrderByDescending(item => item.Source.Length))
            CopyDirectoryTimes(source, destination);

        CopyDirectoryTimes(job.Source, job.Destination);
    }

    private static async Task CopyFileAsync(string source, string destination, Action<long> bytes,
        CancellationToken cancellationToken)
    {
        try
        {
            await using (var input = new FileStream(source, FileMode.Open, FileAccess.Read, FileShare.Read,
                             BufferSize, FileOptions.Asynchronous | FileOptions.SequentialScan))
            await using (var output = new FileStream(destination, FileMode.CreateNew, FileAccess.Write,
                             FileShare.None, BufferSize, FileOptions.Asynchronous))
            {
                var buffer = ArrayPool<byte>.Shared.Rent(BufferSize);

                try
                {
                    int read;

                    while ((read = await input.ReadAsync(buffer.AsMemory(0, BufferSize), cancellationToken)) > 0)
                    {
                        await output.WriteAsync(buffer.AsMemory(0, read), cancellationToken);
                        bytes(read);
                    }
                }
                finally
                {
                    ArrayPool<byte>.Shared.Return(buffer);
                }
            }

            CopyFileTimes(source, destination);
        }
        catch
        {
            // A failed copy must not leave half a file that looks like a complete one.
            Try.Run(() => File.Delete(destination));
            throw;
        }
    }

    private static void CopyFileTimes(string source, string destination)
    {
        Try.Run(() => File.SetLastWriteTimeUtc(destination, File.GetLastWriteTimeUtc(source)));
        Try.Run(() => File.SetCreationTimeUtc(destination, File.GetCreationTimeUtc(source)));
        Try.Run(() => File.SetAttributes(destination,
            File.GetAttributes(source) & ~FileAttributes.ReparsePoint));
    }

    private static void CopyDirectoryTimes(string source, string destination) =>
        Try.Run(() => Directory.SetLastWriteTimeUtc(destination, Directory.GetLastWriteTimeUtc(source)));

    private static bool TryMoveDirect(Job job)
    {
        try
        {
            if (job.IsDirectory)
                Directory.Move(job.Source, job.Destination);
            else
                File.Move(job.Source, job.Destination);

            return true;
        }
        catch (IOException)
        {
            // Usually "different volume"; the copy-then-delete path handles it.
            return false;
        }
        catch (UnauthorizedAccessException)
        {
            return false;
        }
    }

    private static void TryDelete(string source) =>
        Try.Run(() =>
            {
                if (Directory.Exists(source))
                    Directory.Delete(source, true);
                else if (File.Exists(source))
                    File.Delete(source);
            })
            .OnFailure(ex => Log.Warning(ex, "Could not remove the moved source {Path}", source));

    private static (long Files, long Bytes) Measure(string directory, CancellationToken cancellationToken)
    {
        long files = 0;
        long bytes = 0;

        foreach (var file in new DirectoryInfo(directory).EnumerateFiles("*", Options))
        {
            cancellationToken.ThrowIfCancellationRequested();

            if (DirectoryIndex.IsIndexFile(file.Name))
                continue;

            files++;
            bytes += Try.Run(() => file.Length).GetOrElse(_ => 0L);
        }

        return (files, bytes);
    }

    private static string UniqueDestination(string directory, string name, bool isDirectory,
        HashSet<string> reserved)
    {
        var candidate = Path.Combine(directory, name);

        if (isDirectory)
        {
            for (var attempt = 2;
                 reserved.Contains(candidate) || Directory.Exists(candidate) || File.Exists(candidate);
                 attempt++)
                candidate = Path.Combine(directory, $"{name} ({attempt})");

            reserved.Add(candidate);
            return candidate;
        }

        // A file keeps its extension: "photo (2).jpg", not "photo.jpg (2)".
        var extension = Path.GetExtension(name);
        var stem = Path.GetFileNameWithoutExtension(name);

        for (var attempt = 2;
             reserved.Contains(candidate) || File.Exists(candidate) || Directory.Exists(candidate);
             attempt++)
            candidate = Path.Combine(directory, $"{stem} ({attempt}){extension}");

        reserved.Add(candidate);
        return candidate;
    }

    /// <summary>Whether <paramref name="target" /> is the source itself or a folder below it.</summary>
    private static bool IsInside(string source, string target)
    {
        var root = Path.GetFullPath(source).TrimEnd(Path.DirectorySeparatorChar) + Path.DirectorySeparatorChar;
        var candidate = Path.GetFullPath(target).TrimEnd(Path.DirectorySeparatorChar) + Path.DirectorySeparatorChar;

        return candidate.StartsWith(root, StringComparison.OrdinalIgnoreCase);
    }

    private sealed record Job(string Source, string Destination, bool IsDirectory, long Files, long Bytes);
}