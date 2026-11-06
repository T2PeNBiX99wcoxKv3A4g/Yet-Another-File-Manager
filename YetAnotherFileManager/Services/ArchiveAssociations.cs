using System.Runtime.Versioning;
using Microsoft.Win32;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Registers this app as an archive handler for the current user: the usual archive
///     extensions pointing at one ProgId, plus an "Open with" entry. Turning the setting off puts
///     back whatever the user had before, so the change is always reversible.
/// </summary>
internal static class ArchiveAssociations
{
    private const string ProgId = "YAFM.Archive";

    private static readonly string[] Extensions = ArchiveFormats.Extensions;

    public static void Apply(bool enabled) =>
        Try.Run(() =>
        {
            if (OperatingSystem.IsWindows())
                ApplyWindows(enabled);
        }).OnFailure(ex => Log.Warning(ex, "Could not apply the archive associations"));

    /// <summary>
    ///     Reports the handler currently stored for the app's ProgId. A matching ProgId that points
    ///     at another copy of the executable is deliberately not treated as this build's registration.
    /// </summary>
    public static ArchiveStatusPayload Status()
    {
        if (!OperatingSystem.IsWindows())
            return new ArchiveStatusPayload(false, false, null);

        string? registeredPath = null;

        Try.Run(() =>
        {
            using var command = Registry.CurrentUser.OpenSubKey(
                $@"Software\Classes\{ProgId}\shell\open\command");
            registeredPath = ExecutableFrom(command?.GetValue(null) as string);
        }).OnFailure(ex => Log.Debug(ex, "Could not read the archive association status"));

        var current = Environment.ProcessPath;
        var matches = registeredPath is { Length: > 0 } && current is { Length: > 0 }
            && Try.Run(() => string.Equals(
                Path.GetFullPath(registeredPath),
                Path.GetFullPath(current),
                StringComparison.OrdinalIgnoreCase)).GetOrElse(_ => false);

        return new ArchiveStatusPayload(registeredPath is { Length: > 0 }, matches, registeredPath);
    }

    private static string? ExecutableFrom(string? command)
    {
        if (string.IsNullOrWhiteSpace(command))
            return null;

        var trimmed = command.Trim();

        if (trimmed.StartsWith('"'))
        {
            var closing = trimmed.IndexOf('"', 1);
            return closing > 1 ? Environment.ExpandEnvironmentVariables(trimmed[1..closing]) : null;
        }

        var space = trimmed.IndexOf(' ');
        return Environment.ExpandEnvironmentVariables(space > 0 ? trimmed[..space] : trimmed);
    }

    [SupportedOSPlatform("windows")]
    private static void ApplyWindows(bool enabled)
    {
        if (Environment.ProcessPath is not { Length: > 0 } executable)
            return;

        if (!enabled)
        {
            foreach (var extension in Extensions)
                RemoveExtension(extension);

            DeleteKey($@"Software\Classes\{ProgId}");
            DeleteKey(@"Software\Classes\Applications\YetAnotherFileManager.exe");
            return;
        }

        using (var progId = Registry.CurrentUser.CreateSubKey($@"Software\Classes\{ProgId}"))
        {
            progId?.SetValue(null, "Archive on Yet Another File Manager");
            progId?.SetValue("FriendlyTypeName", "Archive on Yet Another File Manager");

            using var icon = progId?.CreateSubKey("DefaultIcon");
            icon?.SetValue(null, $"\"{executable}\",0");

            using var command = progId?.CreateSubKey(@"shell\open\command");
            command?.SetValue(null, $"\"{executable}\" \"%1\"");
        }

        // The "Open with" list gets the app without stealing the extension's current handler.
        using (var application = Registry.CurrentUser.CreateSubKey(
                   @"Software\Classes\Applications\YetAnotherFileManager.exe"))
        {
            application?.SetValue("FriendlyAppName", "Yet Another File Manager");

            using var command = application?.CreateSubKey(@"shell\open\command");
            command?.SetValue(null, $"\"{executable}\" \"%1\"");

            using var types = application?.CreateSubKey("SupportedTypes");
            if (types is not null)
                foreach (var extension in Extensions)
                    types.SetValue(extension, "");
        }

        foreach (var extension in Extensions)
        {
            Backup(BackupFile(extension), $@"Software\Classes\{extension}");

            using var key = Registry.CurrentUser.CreateSubKey($@"Software\Classes\{extension}");
            if (key is null)
                continue;

            // This wins when Windows has no per-user choice yet; the older machine-wide handler
            // stays as the fallback and the OpenWithProgids entry keeps the app in "Open with".
            key.SetValue(null, ProgId);

            using var openWith = key.CreateSubKey("OpenWithProgids");
            openWith?.SetValue(ProgId, "");
        }
    }

    [SupportedOSPlatform("windows")]
    private static void Backup(string file, string keyPath)
    {
        if (File.Exists(file))
            return;

        var value = Try.Run(() => Registry.CurrentUser.OpenSubKey(keyPath)?.GetValue(null) as string).GetOrNull();
        File.WriteAllText(file, value is null ? "0" : $"1\n{value}");
    }

    [SupportedOSPlatform("windows")]
    private static void RemoveExtension(string extension)
    {
        var file = BackupFile(extension);

        // Without a backup this app never wrote anything for the extension, so other programs'
        // values are left exactly as they are.
        if (!File.Exists(file))
            return;

        var keyPath = $@"Software\Classes\{extension}";
        var previous = File.ReadAllText(file).Split('\n', 2);

        Try.Run(() =>
        {
            using var key = Registry.CurrentUser.OpenSubKey(keyPath, true);
            if (key is null)
                return;

            if (previous is ["1", ..])
                key.SetValue(null, previous.Length > 1 ? previous[1] : "");
            else
                key.DeleteValue(null, false);

            using var openWith = key.OpenSubKey("OpenWithProgids", true);
            openWith?.DeleteValue(ProgId, false);
        });

        File.Delete(file);
    }

    [SupportedOSPlatform("windows")]
    private static void DeleteKey(string keyPath) =>
        Try.Run(() => Registry.CurrentUser.DeleteSubKeyTree(keyPath, false));

    private static string BackupFile(string extension) =>
        Path.Combine(Constants.SettingsDirectory, $"archive-assoc{extension}.txt");
}
