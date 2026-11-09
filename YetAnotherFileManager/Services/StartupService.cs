using System.ComponentModel;
using System.Diagnostics;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Messaging;
using PhotinoNetUtils.Platform;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Registers the app for the user's login session. Windows offers a Startup-folder shortcut or a
///     logon task; Linux offers an XDG autostart entry or a systemd user service. The chosen mode is
///     stored in the settings and re-applied at every launch, so a moved executable repairs itself.
/// </summary>
internal sealed class StartupService : Singleton<StartupService>
{
    private const string TaskName = "YetAnotherFileManager";
    private const string UnitName = "yafm.service";

    private readonly StartupRegistration _shortcut = new(
        typeof(StartupService).Assembly,
        Constants.Name,
        "app",
        Constants.WindowTitle,
        "yafm");

    public StartupService()
    {
        NativeBridge.MessageReceived += HandleMessageAsync;
        _ = Task.Run(() => ApplyAsync(SettingsService.Instance.Current.Startup));
    }

    /// <summary>True where a per-user login entry can be written.</summary>
    public static bool IsSupported => StartupRegistration.IsSupported;

    private static string? Executable => Environment.ProcessPath;

    private static string UnitPath => Path.Combine(HomeConfig(), "systemd", "user", UnitName);

    private static string WantPath =>
        Path.Combine(HomeConfig(), "systemd", "user", "default.target.wants", UnitName);

    private Task<NativeResponse?> HandleMessageAsync(NativeContext context) => context.Request.Type switch
    {
        "app.startup" => Task.FromResult<NativeResponse?>(Status(context)),
        "app.startup.set" => SetAsync(context),
        _ => Task.FromResult<NativeResponse?>(null)
    };

    private NativeResponse Status(NativeContext context)
    {
        var mode = SettingsService.Instance.Current.Startup;
        return context.Reply("app.startup.result", new StartupStatusPayload(IsSupported, mode, IsActive(mode), null));
    }

    private async Task<NativeResponse?> SetAsync(NativeContext context)
    {
        var requestedMode = context.Payload<StartupSetRequest>()?.Mode;
        var mode = requestedMode is "shortcut" or "task" ? requestedMode : "none";

        if (!IsSupported)
            return context.Reply("app.startup.set.result", new StartupStatusPayload(false, "none", false,
                "This platform has no per-user startup entry."));

        var (ok, error) = await ApplyAsync(mode);
        if (!ok)
            return context.Reply("app.startup.set.result",
                new StartupStatusPayload(true, SettingsService.Instance.Current.Startup, IsActive(mode), error));

        await SettingsService.Instance.UpdateAsync(settings => settings with
        {
            StartupMode = mode
        });
        return context.Reply("app.startup.set.result", new StartupStatusPayload(true, mode, IsActive(mode), null));
    }

    /// <summary>Applies one mode and removes the other mechanism.</summary>
    private async Task<(bool Ok, string? Error)> ApplyAsync(string mode)
    {
        switch (mode)
        {
            case "shortcut":
                RemoveTask();
                return _shortcut.SetEnabled(true)
                    ? (true, null)
                    : (false, "The executable path is unknown.");

            case "task":
                _shortcut.SetEnabled(false);
                return TaskExists() ? (true, null) : await CreateTaskAsync();

            default:
                _shortcut.SetEnabled(false);
                RemoveTask();
                return (true, null);
        }
    }

    private bool IsActive(string mode) => mode switch
    {
        "shortcut" => _shortcut.IsEnabled,
        "task" => TaskExists(),
        _ => false
    };

    private static async Task<(bool Ok, string? Error)> CreateTaskAsync()
    {
        if (Executable is not { Length: > 0 } executable)
            return (false, "The executable path is unknown.");

        if (OperatingSystem.IsWindows())
            // Task Scheduler refuses task creation without an administrator token, so the app
            // re-launches itself elevated with a one-off helper mode.
            return await RunElevatedHelperAsync("create");

        if (OperatingSystem.IsLinux())
        {
            var unit = $"""
                        [Unit]
                        Description={Constants.DisplayName}
                        After=graphical-session.target

                        [Service]
                        Type=simple
                        ExecStart="{executable}"
                        WorkingDirectory="{Path.GetDirectoryName(executable)}"

                        [Install]
                        WantedBy=default.target
                        """;

            Directory.CreateDirectory(Path.GetDirectoryName(UnitPath)!);
            Directory.CreateDirectory(Path.GetDirectoryName(WantPath)!);
            await File.WriteAllTextAsync(UnitPath, unit + "\n");

            if (File.Exists(WantPath) || Directory.Exists(WantPath))
                Try.Run(() => File.Delete(WantPath));
            Try.Run(() => File.CreateSymbolicLink(WantPath, $"../{UnitName}"));

            _ = await RunAsync("systemctl", ["--user", "daemon-reload"]);
            return (true, null);
        }

        return (false, "This platform has no task mechanism.");
    }

    private static void RemoveTask()
    {
        if (OperatingSystem.IsWindows())
        {
            if (TaskExists())
                _ = RunElevatedHelperAsync("delete");
            return;
        }

        if (!OperatingSystem.IsLinux())
            return;

        Try.Run(() => File.Delete(WantPath));
        Try.Run(() => File.Delete(UnitPath));
        _ = Task.Run(async () => await RunAsync("systemctl", ["--user", "daemon-reload"]));
    }

    private static bool TaskExists()
    {
        if (OperatingSystem.IsWindows())
        {
            // Query is synchronous and quick; the settings page asks only when it opens.
            var result = RunAsync("schtasks", ["/Query", "/TN", TaskName]).GetAwaiter().GetResult();
            return result.Code == 0;
        }

        return OperatingSystem.IsLinux() && File.Exists(UnitPath) && File.Exists(WantPath);
    }

    private static async Task<(bool Ok, string? Error)> RunElevatedHelperAsync(string action)
    {
        if (Executable is not { Length: > 0 } executable)
            return (false, "The executable path is unknown.");

        try
        {
            var start = new ProcessStartInfo(executable)
            {
                UseShellExecute = true,
                Verb = "runas",
                Arguments = $"{Constants.StartupTaskArgument} {action}",
                WorkingDirectory = Path.GetDirectoryName(executable) ?? ""
            };

            using var process = Process.Start(start);
            if (process is null)
                return (false, "The elevated helper could not be started.");

            await process.WaitForExitAsync();
            return process.ExitCode == 0
                ? (true, null)
                : (false, "Windows refused the scheduled task.");
        }
        catch (Win32Exception exception) when (exception.NativeErrorCode == 1223)
        {
            return (false, "Administrator rights are required for the scheduled task.");
        }
        catch (Exception exception)
        {
            Constants.Logger.Warning(exception, "Could not run the elevated startup helper");
            return (false, exception.Message);
        }
    }

    private static async Task<(int Code, string Output)> RunAsync(string file, IEnumerable<string> arguments)
    {
        var result = await Try.Run(async () =>
        {
            var start = new ProcessStartInfo(file)
            {
                UseShellExecute = false,
                CreateNoWindow = true,
                RedirectStandardOutput = true,
                RedirectStandardError = true
            };

            foreach (var argument in arguments)
                start.ArgumentList.Add(argument);

            using var process = Process.Start(start);
            if (process is null)
                return (1, $"{file} could not be started.");

            var output = await process.StandardOutput.ReadToEndAsync();
            var error = await process.StandardError.ReadToEndAsync();
            await process.WaitForExitAsync();

            var text = string.IsNullOrWhiteSpace(error) ? output : $"{output}\n{error}".Trim();
            return (process.ExitCode, text.Trim());
        });

        return result.GetOrElse(exception =>
        {
            Constants.Logger.Warning(exception, "Could not run {File}", file);
            return (1, exception.Message);
        });
    }

    private static string HomeConfig() =>
        Environment.GetEnvironmentVariable("XDG_CONFIG_HOME") is { Length: > 0 } configured
            ? configured
            : Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), ".config");
}