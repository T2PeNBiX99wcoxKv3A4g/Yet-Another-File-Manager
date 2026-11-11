using System.Runtime.Versioning;
using Microsoft.Win32;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Keeps every per-user registration this app owns on one executable. A copy in another folder
///     leaves handler keys behind, and Explorer keeps starting that copy; setting an association
///     repairs them all instead of only the keys the caller writes directly.
/// </summary>
[SupportedOSPlatform("windows")]
internal static class OwnedAssociations
{
    private static readonly string[] Commands =
    [
        $@"Software\Classes\Applications\{Constants.Name}.exe\shell\open\command",
        @"Software\Classes\YAFM.Archive\shell\open\command"
    ];

    /// <summary>Points every entry this app owns at <paramref name="executable" />, dropping stale ones.</summary>
    public static void Repair(string executable)
    {
        if (executable.Length == 0 || !File.Exists(executable))
            return;

        Try.Run(() =>
        {
            var current = Path.GetFullPath(executable);

            // Windows creates a <extension>_auto_file class when the user picks an app by hand;
            // one that still names another copy would win over the association being set.
            using (var classes = Registry.CurrentUser.OpenSubKey(@"Software\Classes", true))
            {
                if (classes is not null)
                    foreach (var name in classes.GetSubKeyNames())
                    {
                        if (!name.EndsWith("_auto_file", StringComparison.OrdinalIgnoreCase))
                            continue;

                        using var command = classes.OpenSubKey($@"{name}\shell\open\command");
                        var value = command?.GetValue(null) as string;

                        if (value is null
                            || !value.Contains($"{Constants.Name}.exe", StringComparison.OrdinalIgnoreCase))
                            continue;

                        var path = RegistryCommand.Executable(value);
                        if (path is null || Same(path, current))
                            continue;

                        Try.Run(() => classes.DeleteSubKeyTree(name, false));
                        Log.Information("Removed the stale {Class} registration for {Path}", name, path);
                    }
            }

            foreach (var keyPath in Commands)
            {
                using var key = Registry.CurrentUser.OpenSubKey(keyPath, true);
                key?.SetValue(null, $"\"{executable}\" \"%1\"");
            }

            using var icon = Registry.CurrentUser.OpenSubKey(@"Software\Classes\YAFM.Archive\DefaultIcon", true);
            icon?.SetValue(null, $"\"{executable}\",0");
        }).OnFailure(ex => Log.Warning(ex, "Could not repair the app's associations"));
    }

    private static bool Same(string left, string right) =>
        Try.Run(() => string.Equals(Path.GetFullPath(left), Path.GetFullPath(right),
            StringComparison.OrdinalIgnoreCase)).GetOrElse(_ => false);
}
