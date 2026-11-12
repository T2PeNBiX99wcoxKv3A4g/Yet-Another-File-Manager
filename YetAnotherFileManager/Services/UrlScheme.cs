using System.Runtime.Versioning;
using Microsoft.Win32;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;

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
    ///     Where the shell's <c>yafm://</c> entry points. A leftover that names another copy is
    ///     reported as registered but not matching, so the settings page can say which one it is.
    /// </summary>
    public static SchemeStatusPayload Status()
    {
        if (!OperatingSystem.IsWindows())
            return new(false, false, null);

        string? command = null;

        Try.Run(() => command = Registry.CurrentUser.OpenSubKey(CommandPath)?.GetValue(null) as string)
            .OnFailure(ex => Log.Debug(ex, "Could not read the yafm:// registration"));

        var registeredPath = RegistryCommand.Executable(command);
        var current = Environment.ProcessPath;

        var matches = registeredPath is { Length: > 0 } && current is { Length: > 0 }
                                                                && Try.Run(() => string.Equals(
                                                                    Path.GetFullPath(registeredPath),
                                                                    Path.GetFullPath(current),
                                                                    StringComparison.OrdinalIgnoreCase))
                                                                    .GetOrElse(_ => false);

        return new(registeredPath is { Length: > 0 }, matches, registeredPath);
    }

    /// <summary>True when the shell would open this build.</summary>
    public static bool IsRegistered() => Status().PathMatches;

    public static bool Register()
    {
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

    public static bool Unregister()
    {
        if (!OperatingSystem.IsWindows())
            return false;

        UnregisterWindows();

        return !IsRegistered();
    }

    [SupportedOSPlatform("windows")]
    private static void UnregisterWindows() =>
        Try.Run(() => Registry.CurrentUser.DeleteSubKeyTree(KeyPath, false))
            .OnFailure(ex => Log.Warning(ex, "Could not remove the yafm:// registration"));
}