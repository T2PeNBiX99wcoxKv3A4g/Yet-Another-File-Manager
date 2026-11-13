using System.Runtime.Versioning;
using Microsoft.Win32;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Registers <c>yafm://</c> with the shell, per user, so a link can open this file manager.
///     Windows writes the scheme under <c>Software\Classes</c>; Linux writes a desktop entry and
///     points <c>xdg-mime</c> at it. Nothing is installed machine-wide and the entry is removed
///     again when the user turns it off.
/// </summary>
internal static class UrlScheme
{
    private const string Scheme = "yafm";
    private const string MimeType = "x-scheme-handler/yafm";
    private const string DesktopName = "yafm-url.desktop";
    private const string KeyPath = $@"Software\Classes\{Scheme}";
    private const string CommandPath = $@"{KeyPath}\shell\open\command";

    /// <summary>
    ///     Where the shell's <c>yafm://</c> entry points. A leftover that names another copy is
    ///     reported as registered but not matching, so the settings page can say which one it is.
    /// </summary>
    public static SchemeStatusPayload Status()
    {
        if (OperatingSystem.IsLinux())
            return StatusLinux();

        if (!OperatingSystem.IsWindows())
            return new(false, false, null);

        return StatusOf(ReadWindowsExecutable());
    }

    [SupportedOSPlatform("windows")]
    private static string? ReadWindowsExecutable()
    {
        string? command = null;

        Try.Run(() => command = Registry.CurrentUser.OpenSubKey(CommandPath)?.GetValue(null) as string)
            .OnFailure(ex => Log.Debug(ex, "Could not read the yafm:// registration"));

        return RegistryCommand.Executable(command);
    }

    [SupportedOSPlatform("linux")]
    private static SchemeStatusPayload StatusLinux()
    {
        var desktop = LinuxDesktop.Query(MimeType);
        return desktop.Length == 0
            ? new(false, false, null)
            : StatusOf(LinuxDesktop.ExecutableOf(desktop) ?? desktop);
    }

    private static SchemeStatusPayload StatusOf(string? executable)
    {
        var current = Environment.ProcessPath;

        var matches = executable is { Length: > 0 } && current is { Length: > 0 }
                                                                && Try.Run(() => string.Equals(
                                                                    Path.GetFullPath(executable),
                                                                    Path.GetFullPath(current),
                                                                    StringComparison.OrdinalIgnoreCase))
                                                                    .GetOrElse(_ => false);

        return new(executable is { Length: > 0 }, matches, executable);
    }

    /// <summary>True when the shell would open this build.</summary>
    public static bool IsRegistered() => Status().PathMatches;

    public static bool Register()
    {
        if (OperatingSystem.IsLinux())
            return RegisterLinux();

        if (!OperatingSystem.IsWindows())
            return false;

        return RegisterWindows();
    }

    [SupportedOSPlatform("windows")]
    private static bool RegisterWindows()
    {
        var executable = Environment.ProcessPath;
        if (executable is null)
            return false;

        return Try.Run(() =>
        {
            using var root = Registry.CurrentUser.CreateSubKey(KeyPath);
            root.SetValue(null, "URL:YetAnotherFileManager");
            root.SetValue("URL Protocol", "");

            using var command = root.CreateSubKey(@"shell\open\command");
            command.SetValue(null, $"\"{executable}\" \"%1\"");

            return true;
        }).GetOrElse(_ => false);
    }

    [SupportedOSPlatform("linux")]
    private static bool RegisterLinux()
    {
        if (Environment.ProcessPath is not { Length: > 0 } executable)
            return false;

        return Try.Run(() =>
        {
            LinuxDesktop.Write(DesktopName,
                $"""
                 [Desktop Entry]
                 Type=Application
                 Name=Yet Another File Manager (links)
                 Exec="{executable}" %u
                 Icon=yafm
                 Terminal=false
                 NoDisplay=true
                 MimeType={MimeType};
                 """);

            LinuxDesktop.SetDefault(DesktopName, MimeType);
            return true;
        }).GetOrElse(_ => false);
    }

    public static bool Unregister()
    {
        if (OperatingSystem.IsLinux())
            LinuxDesktop.Remove(DesktopName);
        else if (OperatingSystem.IsWindows())
            UnregisterWindows();
        else
            return false;

        return !IsRegistered();
    }

    [SupportedOSPlatform("windows")]
    private static void UnregisterWindows() =>
        Try.Run(() => Registry.CurrentUser.DeleteSubKeyTree(KeyPath, false))
            .OnFailure(ex => Log.Warning(ex, "Could not remove the yafm:// registration"));
}
