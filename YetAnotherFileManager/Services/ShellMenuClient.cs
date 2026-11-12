using System.Diagnostics;
using System.Globalization;
using System.Runtime.Versioning;
using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Interop;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Reads shell commands in a separate process, so one misbehaving third-party handler can only
///     kill that helper. When the full read fails, the standard verbs are gathered in-process; those
///     never load third-party code.
/// </summary>
internal static class ShellMenuClient
{
    private static readonly TimeSpan ReadTimeout = TimeSpan.FromSeconds(2);

    private static readonly string? RustHelper = OperatingSystem.IsWindows()
        ? Path.Combine(AppContext.BaseDirectory, "yafm-shellmenu.exe")
        : null;

    public static async Task<ShellVerbsPayload> ReadAsync(IReadOnlyList<string> paths)
    {
        if (!OperatingSystem.IsWindows() || paths.Count == 0)
            return new([], true);

        var full = await ReadFullAsync(paths);
        if (full is not null)
            return new(full, false);

        var safe = await ReadSafeAsync(paths);
        return new(safe, true);
    }

    [SupportedOSPlatform("windows")]
    private static Task<List<ShellVerb>> ReadSafeAsync(IReadOnlyList<string> paths) =>
        StaThread.RunAsync(() => ShellMenu.Read(paths, true));

    public static void Invoke(IReadOnlyList<string> paths, bool safe, string? verb, int offset)
    {
        if (!OperatingSystem.IsWindows() || paths.Count == 0)
            return;

        if (Environment.ProcessPath is not { Length: > 0 } executable)
            return;

        if (RustHelper is { } rust && File.Exists(rust))
        {
            var rustInfo = new ProcessStartInfo(rust)
            {
                UseShellExecute = false,
                CreateNoWindow = true
            };

            rustInfo.ArgumentList.Add("--invoke");
            rustInfo.ArgumentList.Add(offset.ToString(CultureInfo.InvariantCulture));
            rustInfo.ArgumentList.Add(verb ?? "");

            foreach (var path in paths)
                rustInfo.ArgumentList.Add(path);

            Try.Run(() => Process.Start(rustInfo))
                .OnFailure(ex => Log.Warning(ex, "Could not start the native shell menu helper"));

            return;
        }

        var startInfo = new ProcessStartInfo(executable)
        {
            UseShellExecute = false,
            CreateNoWindow = true,
            WorkingDirectory = AppContext.BaseDirectory
        };

        startInfo.ArgumentList.Add(Constants.ShellInvokeArgument);
        startInfo.ArgumentList.Add(safe ? "1" : "0");
        startInfo.ArgumentList.Add(offset.ToString(CultureInfo.InvariantCulture));
        startInfo.ArgumentList.Add(verb ?? "");

        foreach (var path in paths)
            startInfo.ArgumentList.Add(path);

        _ = Task.Run(async () =>
        {
            try
            {
                var status = await Process.RunAsync(startInfo);

                if (status.ExitCode != 0)
                    Log.Warning("The shell command helper exited with {Code}", status.ExitCode);
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "Could not start the shell command helper");
            }
        });
    }

    [SupportedOSPlatform("windows")]
    private static async Task<List<ShellVerb>?> ReadFullAsync(IReadOnlyList<string> paths)
    {
        if (RustHelper is { } rust && File.Exists(rust))
        {
            var native = await ReadWithRustAsync(rust, paths);
            if (native is not null)
                return native;
        }

        if (Environment.ProcessPath is not { Length: > 0 } executable)
            return null;

        var output = Path.Combine(Path.GetTempPath(), $"yafm-verbs-{Guid.NewGuid():N}.json");

        try
        {
            var startInfo = new ProcessStartInfo(executable)
            {
                UseShellExecute = false,
                CreateNoWindow = true,
                WorkingDirectory = AppContext.BaseDirectory
            };

            startInfo.ArgumentList.Add(Constants.ShellVerbsArgument);
            startInfo.ArgumentList.Add(output);

            foreach (var path in paths)
                startInfo.ArgumentList.Add(path);

            using var process = Try.Run(() => Process.Start(startInfo)).GetOrNull();
            if (process is null)
                return null;

            using var cancellation = new CancellationTokenSource(ReadTimeout);

            try
            {
                var status = await process.WaitForExitStatusAsync(cancellation.Token);

                if (status.ExitCode != 0 || !File.Exists(output))
                    return null;
            }
            catch (OperationCanceledException)
            {
                Try.Run(() => process.Kill(true));
                return null;
            }

            var json = await File.ReadAllTextAsync(output);
            return JsonSerializer.Deserialize(json, AppJsonContext.Default.ListShellVerb);
        }
        catch (Exception ex)
        {
            Log.Debug(ex, "Could not read the shell context menu in the helper");
            return null;
        }
        finally
        {
            Try.Run(() => File.Delete(output));
        }
    }

    /// <summary>Runs the native COM helper, which does not block managed shell extensions.</summary>
    [SupportedOSPlatform("windows")]
    private static async Task<List<ShellVerb>?> ReadWithRustAsync(string helper, IReadOnlyList<string> paths)
    {
        var output = Path.Combine(Path.GetTempPath(), $"yafm-verbs-{Guid.NewGuid():N}.json");

        try
        {
            var startInfo = new ProcessStartInfo(helper)
            {
                UseShellExecute = false,
                CreateNoWindow = true
            };

            startInfo.ArgumentList.Add("--read");
            startInfo.ArgumentList.Add(output);

            foreach (var path in paths)
                startInfo.ArgumentList.Add(path);

            using var process = Try.Run(() => Process.Start(startInfo)).GetOrNull();
            if (process is null)
                return null;

            using var cancellation = new CancellationTokenSource(TimeSpan.FromSeconds(5));

            try
            {
                await process.WaitForExitAsync(cancellation.Token);
            }
            catch (OperationCanceledException)
            {
                Try.Run(() => process.Kill(true));
                return null;
            }

            if (process.ExitCode != 0 || !File.Exists(output))
                return null;

            var json = await File.ReadAllTextAsync(output);
            return JsonSerializer.Deserialize(json, AppJsonContext.Default.ListShellVerb);
        }
        catch (Exception ex)
        {
            Log.Debug(ex, "Could not read the shell context menu in the native helper");
            return null;
        }
        finally
        {
            Try.Run(() => File.Delete(output));
        }
    }
}