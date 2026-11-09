using System.Runtime.Versioning;
using System.Text.Json;
using Microsoft.Win32;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

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

        var backups = ReadBackups();

        if (!enabled)
        {
            // Restore every extension this app ever touched, including ones a newer build no
            // longer handles.
            foreach (var backup in backups)
                RestoreExtension(backup.Extension, backup.Value);

            // An extension handled now may have lost its backup (for example if an old file was
            // deleted); remove only this app's own value there instead of guessing.
            foreach (var extension in Extensions.Where(extension => backups.All(
                         backup => !string.Equals(backup.Extension, extension, StringComparison.OrdinalIgnoreCase))))
                RestoreExtension(extension, null);

            DeleteKey($@"Software\Classes\{ProgId}");
            DeleteKey(@"Software\Classes\Applications\YetAnotherFileManager.exe");
            DeleteBackups();
            return;
        }

        var changed = !File.Exists(BackupPath);

        foreach (var extension in Extensions)
        {
            if (backups.Any(backup => string.Equals(backup.Extension, extension, StringComparison.OrdinalIgnoreCase)))
                continue;

            backups.Add(new ArchiveAssociationBackup(extension, ReadCurrentDefault(extension)));
            changed = true;
        }

        // Save the original values before touching the registry; a crash must not lose them.
        if (changed && !WriteBackups(backups))
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

    private static string BackupPath => Path.Combine(Constants.SettingsDirectory, "archive-associations.json");

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

    /// <summary>Reads the single backup file, adopting any old one-file-per-extension backups.</summary>
    private static List<ArchiveAssociationBackup> ReadBackups()
    {
        var backups = new List<ArchiveAssociationBackup>();

        if (File.Exists(BackupPath))
        {
            try
            {
                var json = File.ReadAllText(BackupPath);
                if (JsonSerializer.Deserialize(json, AppJsonContext.Default.ListArchiveAssociationBackup) is { } saved)
                    backups = saved;
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "Could not read {Path}", BackupPath);
            }
        }

        var legacy = new List<(string File, string Extension)>();

        try
        {
            foreach (var file in Directory.EnumerateFiles(Constants.SettingsDirectory, "archive-assoc*.txt"))
            {
                var name = Path.GetFileName(file);
                if (!name.StartsWith("archive-assoc", StringComparison.OrdinalIgnoreCase)
                    || !name.EndsWith(".txt", StringComparison.OrdinalIgnoreCase))
                    continue;

                var extension = name["archive-assoc".Length..^".txt".Length];
                if (extension.Length == 0)
                    continue;

                legacy.Add((file, extension));

                if (backups.Any(backup => string.Equals(backup.Extension, extension, StringComparison.OrdinalIgnoreCase)))
                    continue;

                backups.Add(new ArchiveAssociationBackup(extension, ParseLegacyBackup(File.ReadAllText(file))));
            }
        }
        catch (Exception ex)
        {
            Log.Debug(ex, "Could not read the old archive association backups");
        }

        if (legacy.Count > 0 && WriteBackups(backups))
            foreach (var (file, _) in legacy)
                Try.Run(() => File.Delete(file)).OnFailure(ex => Log.Debug(ex, "Could not remove {Path}", file));

        return backups;
    }

    private static string? ParseLegacyBackup(string text)
    {
        var parts = text.Replace("\r\n", "\n").Split('\n', 2);

        if (parts[0] == "0")
            return null;

        return parts.Length > 1 ? parts[1] : "";
    }

    private static bool WriteBackups(List<ArchiveAssociationBackup> backups)
    {
        try
        {
            Directory.CreateDirectory(Constants.SettingsDirectory);
            File.WriteAllText(BackupPath,
                JsonSerializer.Serialize(backups, AppJsonContext.Default.ListArchiveAssociationBackup));
            return true;
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not save {Path}", BackupPath);
            return false;
        }
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
            {
                key.SetValue(null, previous);
            }

            using var openWith = key.OpenSubKey("OpenWithProgids", true);
            openWith?.DeleteValue(ProgId, false);
        }).OnFailure(ex => Log.Warning(ex, "Could not restore the association for {Extension}", extension));
    }

    private static void DeleteBackups()
    {
        Try.Run(() =>
        {
            if (File.Exists(BackupPath))
                File.Delete(BackupPath);

            foreach (var file in Directory.EnumerateFiles(Constants.SettingsDirectory, "archive-assoc*.txt"))
                File.Delete(file);
        }).OnFailure(ex => Log.Warning(ex, "Could not remove the archive association backups"));
    }
}
