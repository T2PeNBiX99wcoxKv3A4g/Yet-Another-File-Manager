using System.ComponentModel;
using System.Diagnostics;
using System.Text.Json;
using PhotinoNetUtils;
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

    public static Task<ElevatedOperationResult> CopyAsync(string[] sources, string target, bool move) =>
        RunAsync(new ElevatedOperationRequest("copy", sources, target, Move: move));

    public static Task<ElevatedOperationResult> DeleteAsync(string[] paths, bool permanent) =>
        RunAsync(new ElevatedOperationRequest("delete", paths, Permanent: permanent));

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

    private static async Task<ElevatedOperationResult> RunAsync(ElevatedOperationRequest request)
    {
        if (!OperatingSystem.IsWindows())
            return Failed("Elevation is only available on Windows.");

        if (Environment.ProcessPath is not { Length: > 0 } executable)
            return Failed("The executable path is unknown.");

        var id = Guid.NewGuid().ToString("N");
        var requestPath = Path.Combine(Path.GetTempPath(), $"yafm-op-{id}.json");
        var resultPath = Path.Combine(Path.GetTempPath(), $"yafm-op-{id}.result.json");

        try
        {
            await File.WriteAllTextAsync(requestPath,
                JsonSerializer.Serialize(request, AppJsonContext.Default.ElevatedOperationRequest));

            var start = new ProcessStartInfo(executable)
            {
                UseShellExecute = true,
                Verb = "runas",
                CreateNoWindow = true
            };

            start.ArgumentList.Add(Constants.ElevatedOperationArgument);
            start.ArgumentList.Add(requestPath);
            start.ArgumentList.Add(resultPath);

            using var process = Process.Start(start);
            if (process is null)
                return Denied();

            await process.WaitForExitAsync();

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
            Try.Run(() => File.Delete(requestPath));
            Try.Run(() => File.Delete(resultPath));
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
        SettingsService.Instance.InitializeAsync().GetAwaiter().GetResult();

        var requestPath = args[index + 1];
        var resultPath = args[index + 2];

        try
        {
            var request = JsonSerializer.Deserialize(File.ReadAllText(requestPath),
                AppJsonContext.Default.ElevatedOperationRequest);

            if (request is null)
                return 2;

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
    {
        switch (request.Kind)
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

            default:
                return Failed($"Unknown operation: {request.Kind}");
        }
    }

    private static ElevatedOperationResult Denied() =>
        Failed(Localization.Get("Administrator rights are required to change this folder."));

    private static ElevatedOperationResult Failed(string error) => new(false, error, [], null);
}
