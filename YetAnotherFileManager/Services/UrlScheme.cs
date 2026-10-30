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

    public static bool IsRegistered() =>
        Try.Run(() => Registry.CurrentUser.OpenSubKey(KeyPath) is not null).GetOrElse(_ => false);

    public static bool Register()
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
        Try.Run(() => Registry.CurrentUser.DeleteSubKeyTree(KeyPath, false))
            .OnFailure(ex => Log.Warning(ex, "Could not remove the yafm:// registration"));

        return !IsRegistered();
    }
}
