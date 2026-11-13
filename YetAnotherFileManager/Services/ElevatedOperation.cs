using System.ComponentModel;
using System.Diagnostics;
using System.Text.Json;
using PhotinoNetUtils;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Localization;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Runs a file operation in a short-lived elevated copy of the app when a folder refuses the
///     current user. The work stays in the app's own services, so conflict naming, the recycle bin
///     record and the speed are the same as for any other folder; only the token changes.
/// </summary>
internal static class ElevatedOperation
{
    private const int ErrorCancelledByUser = 1223;

    /// <summary>True inside the elevated copy, so nothing tries to elevate again.</summary>
    public static bool IsHelper { get; private set; }

    public static Task<ElevatedOperationResult> CopyAsync(string[] sources, string target, bool move,
        Action<ElevatedOperationProgress>? onProgress = null) =>
        RunAsync(new ElevatedOperationRequest("copy", sources, target, Move: move), onProgress);

    public static Task<ElevatedOperationResult> DeleteAsync(string[] paths, bool permanent,
        Action<ElevatedOperationProgress>? onProgress = null) =>
        RunAsync(new ElevatedOperationRequest("delete", paths, Permanent: permanent), onProgress);

    public static Task<ElevatedOperationResult> ExtractArchiveAsync(string archive, string target, int codePage,
        string? password, Action<ElevatedOperationProgress>? onProgress = null) =>
        RunAsync(new ElevatedOperationRequest("extractArchive", [archive], target, CodePage: codePage,
            Password: password), onProgress);

    public static Task<ElevatedOperationResult> RenameAsync(string path, string name) =>
        RunAsync(new ElevatedOperationRequest("rename", [path], Name: name));

    public static Task<ElevatedOperationResult> MoveToAsync(string source, string destination) =>
        RunAsync(new ElevatedOperationRequest("moveTo", [source], destination));

    public static Task<ElevatedOperationResult> NewFolderAtAsync(string path) =>
        RunAsync(new ElevatedOperationRequest("newFolderAt", [], path));

    public static Task<ElevatedOperationResult> NewFileAtAsync(string path) =>
        RunAsync(new ElevatedOperationRequest("newFileAt", [], path));

    public static Task<ElevatedOperationResult> RestoreRecycleAsync(string[] ids) =>
        RunAsync(new ElevatedOperationRequest("restoreRecycle", ids));

    public static Task<ElevatedOperationResult> NewFolderAsync(string directory, bool caseSensitive) =>
        RunAsync(new ElevatedOperationRequest("newFolder", [], directory, CaseSensitive: caseSensitive));

    public static Task<ElevatedOperationResult> NewFileAsync(string directory, string? extension) =>
        RunAsync(new ElevatedOperationRequest("newFile", [], directory, Extension: extension));

    public static Task<ElevatedOperationResult> WriteFileAsync(string source, string directory, string name) =>
        RunAsync(new ElevatedOperationRequest("writeFile", [source], directory, name));

    private static async Task<ElevatedOperationResult> RunAsync(ElevatedOperationRequest request,
        Action<ElevatedOperationProgress>? onProgress = null)
    {
        if (!OperatingSystem.IsWindows())
            return Failed("Elevation is only available on Windows.");

        if (Environment.ProcessPath is not { Length: > 0 } executable)
            return Failed("The executable path is unknown.");

        var id = Guid.NewGuid().ToString("N");
        var requestPath = Path.Combine(Path.GetTempPath(), $"yafm-op-{id}.json");
        var resultPath = Path.Combine(Path.GetTempPath(), $"yafm-op-{id}.result.json");
        var progressPath = Path.Combine(Path.GetTempPath(), $"yafm-op-{id}.progress.json");
        request = request with { ProgressPath = progressPath };

        using var stop = new CancellationTokenSource();
        Task? poll = null;

        try
        {
            await File.WriteAllTextAsync(requestPath,
                JsonSerializer.Serialize(request, AppJsonContext.Default.ElevatedOperationRequest));

            poll = onProgress is null ? null : PollAsync(progressPath, onProgress, stop.Token);

            var start = new ProcessStartInfo(executable)
            {
                UseShellExecute = true,
                Verb = "runas",
                CreateNoWindow = true
            };

            start.ArgumentList.Add(Constants.ElevatedOperationArgument);
            start.ArgumentList.Add(requestPath);
            start.ArgumentList.Add(resultPath);

            await Process.RunAsync(start);

            if (!File.Exists(resultPath))
                return Denied();

            return JsonSerializer.Deserialize(await File.ReadAllTextAsync(resultPath),
                       AppJsonContext.Default.ElevatedOperationResult)
                   ?? Failed("The elevated copy returned nothing.");
        }
        catch (Win32Exception exception) when (exception.NativeErrorCode == ErrorCancelledByUser)
        {
            return Denied();
        }
        catch (Exception exception)
        {
            Log.Warning(exception, "Could not run the elevated file operation");
            return Failed(exception.Message);
        }
        finally
        {
            stop.Cancel();

            if (poll is not null)
                await poll;

            Try.Run(() => File.Delete(requestPath));
            Try.Run(() => File.Delete(resultPath));
            Try.Run(() => File.Delete(progressPath));
        }
    }

    /// <summary>Copies the running task of the elevated copy into the window's status row.</summary>
    private static async Task PollAsync(string path, Action<ElevatedOperationProgress> report,
        CancellationToken cancellationToken)
    {
        while (!cancellationToken.IsCancellationRequested)
        {
            Try.Run(() =>
            {
                if (!File.Exists(path))
                    return;

                var progress = JsonSerializer.Deserialize(File.ReadAllText(path),
                    AppJsonContext.Default.ElevatedOperationProgress);

                if (progress is not null)
                    report(progress);
            });

            try
            {
                await Task.Delay(200, cancellationToken);
            }
            catch (OperationCanceledException)
            {
                return;
            }
        }
    }

    /// <summary>Runs one request in this already elevated process and writes its answer for the window.</summary>
    public static int RunHelper(string[] args)
    {
        var index = Array.IndexOf(args, Constants.ElevatedOperationArgument);
        if (index < 0 || index + 2 >= args.Length)
            return 2;

        IsHelper = true;
        Logging.Initialize(Constants.Name, "elevated");
        SettingsService.Instance.LoadAsync().GetAwaiter().GetResult();

        var requestPath = args[index + 1];
        var resultPath = args[index + 2];

        try
        {
            var request = JsonSerializer.Deserialize(File.ReadAllText(requestPath),
                AppJsonContext.Default.ElevatedOperationRequest);

            if (request is null)
                return 2;

            using var timer = request.ProgressPath is { Length: > 0 } progressPath
                ? new Timer(_ => WriteProgress(progressPath), null, 0, 200)
                : null;

            var result = Execute(request);
            File.WriteAllText(resultPath,
                JsonSerializer.Serialize(result, AppJsonContext.Default.ElevatedOperationResult));

            return result.Ok ? 0 : 1;
        }
        catch (Exception exception)
        {
            Log.Warning(exception, "The elevated file operation failed");
            Try.Run(() => File.WriteAllText(resultPath,
                JsonSerializer.Serialize(Failed(exception.Message),
                    AppJsonContext.Default.ElevatedOperationResult)));
            return 1;
        }
    }

    private static ElevatedOperationResult Execute(ElevatedOperationRequest request)
    {        switch (request.Kind)
        {
            case "copy":
            {
                var (ok, error, created) = FileTransfer
                    .RunAsync(request.Paths, request.Target!, request.Move)
                    .GetAwaiter().GetResult();

                return new(ok, error, [.. created], null);
            }

            case "delete":
            {
                var payload = FileOperations.DeleteAsync(request.Paths, request.Permanent)
                    .GetAwaiter().GetResult();

                return new(payload.Ok, payload.Error, [], null);
            }

            case "rename":
            {
                var payload = FileOperations.RenameAsync(request.Paths[0], request.Name!)
                    .GetAwaiter().GetResult();

                return new(payload.Ok, payload.Error, [], payload.Path);
            }

            case "newFolder":
            {
                var payload = FileOperations.NewFolderAsync(request.Target!, request.CaseSensitive)
                    .GetAwaiter().GetResult();

                return new(payload.Ok, payload.Error, [], payload.Path);
            }

            case "newFile":
            {
                var payload = FileOperations.NewFileAsync(request.Target!, request.Extension)
                    .GetAwaiter().GetResult();

                return new(payload.Ok, payload.Error, [], payload.Path);
            }

            case "writeFile":
            {
                var path = Path.Combine(request.Target!, request.Name!);
                File.WriteAllBytes(path, File.ReadAllBytes(request.Paths[0]));
                return new(true, null, [path], path);
            }

            case "moveTo":
            {
                if (Directory.Exists(request.Paths[0]))
                    Directory.Move(request.Paths[0], request.Target!);
                else
                    File.Move(request.Paths[0], request.Target!);

                return new(true, null, [request.Target!], request.Target);
            }

            case "newFolderAt":
            {
                Directory.CreateDirectory(request.Target!);
                return new(true, null, [request.Target!], request.Target);
            }

            case "newFileAt":
            {
                using (File.Create(request.Target!))
                {
                    // The redo of a new file only needs the empty placeholder.
                }

                return new(true, null, [request.Target!], request.Target);
            }

            case "restoreRecycle":
            {
                var restored = request.Paths.Count(id => RecycleBin.RestoreAsync(id).GetAwaiter().GetResult());
                return restored == request.Paths.Length
                    ? new(true, null, [], null)
                    : new(false, "Windows could not restore the deleted items.", [], null);
            }

            case "extractArchive":
            {
                Archives.Extract(request.Paths[0], request.Target!, request.CodePage ?? 0, request.Password);
                return new(true, null, [], null);
            }

            default:
                return Failed($"Unknown operation: {request.Kind}");
        }
    }

    /// <summary>Writes the running task so the window's status row can follow the helper.</summary>
    private static void WriteProgress(string path)
    {
        var running = TaskCenter.Instance.Snapshot().FirstOrDefault(task => task.State == "running");

        var progress = running is null
            ? new ElevatedOperationProgress(0, 0, 0, 0, null)
            : new ElevatedOperationProgress(running.Done, running.Total, running.BytesDone, running.BytesTotal,
                running.Label);

        Try.Run(() => File.WriteAllText(path,
            JsonSerializer.Serialize(progress, AppJsonContext.Default.ElevatedOperationProgress)));
    }

    private static ElevatedOperationResult Denied() =>
        Failed(Localization.Get("Administrator rights are required to change this folder."));

    private static ElevatedOperationResult Failed(string error) => new(false, error, [], null);
}
