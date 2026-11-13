using System.ComponentModel;
using System.Diagnostics;
using System.Xml.Linq;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Messaging;
using PhotinoNetUtils.Platform;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Registers the app for the user's login session. Windows offers a Startup-folder shortcut or a
///     logon task; Linux offers an XDG autostart entry or a systemd user service. The chosen mode is
///     stored in the settings; the settings page compares the entry's target with this copy and
///     reports an entry left by another folder as none until it is set again.
/// </summary>
[Singleton]
internal partial class StartupService
{
    private const string TaskName = "YetAnotherFileManager";
    private const string UnitName = "yafm.service";

    private readonly StartupRegistration _shortcut = new(
        typeof(StartupService).Assembly,
        Constants.Name,
        "app",
        Constants.WindowTitle,
        "yafm",
        Constants.DisplayName);

    private StartupService()
    {
    }

    /// <summary>True where a per-user login entry can be written.</summary>
    public static bool IsSupported => StartupRegistration.IsSupported;

    private static string? Executable => Environment.ProcessPath;

    private static string UnitPath => Path.Combine(HomeConfig(), "systemd", "user", UnitName);

    private static string WantPath =>
        Path.Combine(HomeConfig(), "systemd", "user", "default.target.wants", UnitName);

    [NativeMessage("app.startup")]
    private NativeResponse Status(NativeContext context)
    {
        var stored = SettingsService.Instance.Current.Startup;
        var active = IsActive(stored);

        // A login entry that starts a copy in another folder is not this app starting, so it is
        // reported as none rather than leaving the setting looking enabled.
        var mode = active ? stored : "none";
        return context.Reply("app.startup.result", new StartupStatusPayload(IsSupported, mode, active, null));
    }

    [NativeMessage("app.startup.set")]
    private async Task<NativeResponse?> SetAsync(NativeContext context)
    {
        var requestedMode = context.Payload<StartupSetRequest>()?.Mode;
        var mode = requestedMode is "shortcut" or "task" ? requestedMode : "none";

        if (!IsSupported)
            return context.Reply("app.startup.set.result", new StartupStatusPayload(false, "none", false,
                "This platform has no per-user startup entry."));

        var (ok, error) = await ApplyAsync(mode, true);
        if (!ok)
            return context.Reply("app.startup.set.result",
                new StartupStatusPayload(true, StatusMode(), IsActive(mode), error));

        await SettingsService.Instance.UpdateAsync(settings => settings with
        {
            StartupMode = mode
        });
        return context.Reply("app.startup.set.result", new StartupStatusPayload(true, mode, IsActive(mode), null));
    }

    private string StatusMode()
    {
        var stored = SettingsService.Instance.Current.Startup;
        return IsActive(stored) ? stored : "none";
    }

    /// <summary>Applies one mode and removes the other mechanism.</summary>
    private async Task<(bool Ok, string? Error)> ApplyAsync(string mode, bool interactive = false)
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
                // Writing a Windows task needs an administrator token, so a launch only repairs the
                // shortcut and leaves the task to the settings page.
                return interactive && !TaskCurrent() ? await CreateTaskAsync() : (true, null);

            default:
                _shortcut.SetEnabled(false);
                RemoveTask();
                return (true, null);
        }
    }

    private bool IsActive(string mode) => mode switch
    {
        "shortcut" => _shortcut.IsCurrent,
        "task" => TaskCurrent(),
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

    /// <summary>Whether the logon task or user unit starts the running executable.</summary>
    private static bool TaskCurrent()
    {
        if (Executable is not { Length: > 0 } executable)
            return false;

        if (OperatingSystem.IsLinux())
        {
            var unit = Try.Run(() => File.ReadAllText(UnitPath)).GetOrNull();
            var exec = unit?.Split('\n')
                .FirstOrDefault(line => line.TrimStart().StartsWith("ExecStart=", StringComparison.Ordinal));

            return exec is not null
                   && StartupRegistration.SamePath(ExecutableIn(exec), executable);
        }

        if (!OperatingSystem.IsWindows())
            return false;

        var (code, output) = RunAsync("schtasks", ["/Query", "/TN", TaskName, "/XML"]).GetAwaiter().GetResult();
        if (code != 0)
            return false;

        var command = Try.Run(() => XDocument.Parse(output)
                .Descendants()
                .FirstOrDefault(element => element.Name.LocalName == "Command")?.Value)
            .GetOrNull();

        // Task Scheduler stores the quoted command line it was given, so the quotes come off first.
        return StartupRegistration.SamePath(Unquoted(command), executable);
    }

    /// <summary>The path inside a quoted or bare command line.</summary>
    private static string? Unquoted(string? value)
    {
        var text = value?.Trim();
        return text is { Length: > 1 } && text[0] == '"' && text[^1] == '"'
            ? text[1..^1]
            : text;
    }

    /// <summary>The executable in an ExecStart= or Exec= line, quoted or not.</summary>
    private static string? ExecutableIn(string line)
    {
        var value = line[(line.IndexOf('=') + 1)..].Trim();
        if (!value.StartsWith('"'))
            return value.Split(' ')[0];

        var end = value.IndexOf('"', 1);
        return end > 1 ? value[1..end] : null;
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

            var status = await Process.RunAsync(start);
            return status.ExitCode == 0
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
            // A GUI app must hide the console of the helper it starts; schtasks and systemctl are
            // console programs, so without this a terminal window flashes on screen.
            var start = new ProcessStartInfo(file)
            {
                UseShellExecute = false,
                CreateNoWindow = true,
                WindowStyle = ProcessWindowStyle.Hidden
            };

            foreach (var argument in arguments)
                start.ArgumentList.Add(argument);

            var captured = await Process.RunAndCaptureTextAsync(start);
            var output = captured.StandardOutput;
            var error = captured.StandardError;

            var text = string.IsNullOrWhiteSpace(error) ? output : $"{output}\n{error}".Trim();
            return (captured.ExitStatus.ExitCode, text.Trim());
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