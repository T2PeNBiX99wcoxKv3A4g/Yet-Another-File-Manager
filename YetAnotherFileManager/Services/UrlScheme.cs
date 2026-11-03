using Microsoft.Win32;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Registers <c>yafm://</c> with the shell, per user, so a link can open this file manager.
///     Nothing is installed machine-wide and the entry is removed again when the user turns it off.
/// </summary>
internal static class UrlScheme
{
    private const string Scheme = "yafm";
    private const string KeyPath = $@"Software\Classes\{Scheme}";
    private const string CommandPath = $@"{KeyPath}\shell\open\command";

    /// <summary>
    ///     True when the shell would open this build. A leftover entry that points at another copy
    ///     counts as missing: registering again repairs it.
    /// </summary>
    public static bool IsRegistered()
    {
        if (!OperatingSystem.IsWindows())
            return false;

        var command = Try.Run(() => Registry.CurrentUser.OpenSubKey(CommandPath)?.GetValue(null) as string)
            .GetOrNull();

        if (command is null)
            return false;

        var executable = Environment.ProcessPath;

        return executable is null || command.Contains(executable, StringComparison.OrdinalIgnoreCase);
    }

    public static bool Register()
    {
        if (!OperatingSystem.IsWindows())
            return false;

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

    public static bool Unregister()
    {
        if (!OperatingSystem.IsWindows())
            return false;

        Try.Run(() => Registry.CurrentUser.DeleteSubKeyTree(KeyPath, false))
            .OnFailure(ex => Log.Warning(ex, "Could not remove the yafm:// registration"));

        return !IsRegistered();
    }

    /// <summary>
    ///     Re-applies the user's choice at startup. The registry entry is easy to lose — a cleanup
    ///     tool, another profile — so the setting is what decides whether links stay enabled. A
    ///     leftover entry is removed when the user turned links off.
    /// </summary>
    public static void Apply(bool enabled)
    {
        if (enabled && !IsRegistered())
            Register();
        else if (!enabled && IsRegistered())
            Unregister();
    }
}
