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
            return new(false, false, null);

        string? registeredPath = null;

        Try.Run(() =>
        {
            using var command = Registry.CurrentUser.OpenSubKey(
                $@"Software\Classes\{ProgId}\shell\open\command");
            registeredPath = RegistryCommand.Executable(command?.GetValue(null) as string);
        }).OnFailure(ex => Log.Debug(ex, "Could not read the archive association status"));

        var current = Environment.ProcessPath;
        var matches = registeredPath is { Length: > 0 } && current is { Length: > 0 }
                                                        && Try.Run(() => string.Equals(
                                                            Path.GetFullPath(registeredPath),
                                                            Path.GetFullPath(current),
                                                            StringComparison.OrdinalIgnoreCase)).GetOrElse(_ => false);

        return new(registeredPath is { Length: > 0 }, matches, registeredPath);
    }

    [SupportedOSPlatform("windows")]
    private static void ApplyWindows(bool enabled)
    {
        if (Environment.ProcessPath is not { Length: > 0 } executable)
            return;

        var backups = AssociationBackupStore.Read();

        if (!enabled)
        {
            // Restore every extension this app ever touched, including ones a newer build no
            // longer handles.
            foreach (var backup in backups.Archive)
                RestoreExtension(backup.Extension, backup.Value);

            // An extension handled now may have no backup; remove only this app's own value there
            // instead of guessing.
            foreach (var extension in Extensions.Where(extension => backups.Archive.All(backup =>
                         !string.Equals(backup.Extension, extension, StringComparison.OrdinalIgnoreCase))))
                RestoreExtension(extension, null);

            backups.Archive.Clear();
            AssociationBackupStore.Write(backups);

            DeleteKey($@"Software\Classes\{ProgId}");
            DeleteKey(@"Software\Classes\Applications\YetAnotherFileManager.exe");
            return;
        }

        var changed = false;

        foreach (var extension in Extensions)
        {
            if (backups.Archive.Any(backup =>
                    string.Equals(backup.Extension, extension, StringComparison.OrdinalIgnoreCase)))
                continue;

            backups.Archive.Add(new(extension, ReadCurrentDefault(extension)));
            changed = true;
        }

        // Save the original values before touching the registry; a crash must not lose them.
        if (changed && !AssociationBackupStore.Write(backups))
            return;

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
    private static void DeleteKey(string keyPath) =>
        Try.Run(() => Registry.CurrentUser.DeleteSubKeyTree(keyPath, false));

    /// <summary>The extension's current per-user default, or null when it is this app's own ProgId.</summary>
    private static string? ReadCurrentDefault(string extension)
    {
        var value = Try.Run(() => Registry.CurrentUser
                .OpenSubKey($@"Software\Classes\{extension}")?.GetValue(null) as string)
            .GetOrNull();

        return string.Equals(value, ProgId, StringComparison.OrdinalIgnoreCase) ? null : value;
    }

    [SupportedOSPlatform("windows")]
    private static void RestoreExtension(string extension, string? previous)
    {
        Try.Run(() =>
        {
            using var key = Registry.CurrentUser.OpenSubKey($@"Software\Classes\{extension}", true);
            if (key is null)
                return;

            if (previous is null)
            {
                if (string.Equals(key.GetValue(null) as string, ProgId, StringComparison.OrdinalIgnoreCase))
                    key.DeleteValue(null, false);
            }
            else
                key.SetValue(null, previous);

            using var openWith = key.OpenSubKey("OpenWithProgids", true);
            openWith?.DeleteValue(ProgId, false);
        }).OnFailure(ex => Log.Warning(ex, "Could not restore the association for {Extension}", extension));
    }
}