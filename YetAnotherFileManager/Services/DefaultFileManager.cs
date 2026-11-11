using System.Diagnostics;
using System.Runtime.Versioning;
using Microsoft.Win32;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Makes this app the folder handler for the current user. Windows writes the per-user
///     <c>Directory</c>/<c>Folder</c> commands and a context-menu verb; Linux sets the
///     <c>inode/directory</c> default through <c>xdg-mime</c>. Both are reversible and off by default.
/// </summary>
internal static class DefaultFileManager
{
    private const string DirectoryCommand = @"Software\Classes\Directory\shell\open\command";
    private const string FolderCommand = @"Software\Classes\Folder\shell\open\command";
    private const string DirectoryShell = @"Software\Classes\Directory\shell";
    private const string FolderShell = @"Software\Classes\Folder\shell";
    private const string DriveCommand = @"Software\Classes\Drive\shell\open\command";
    private const string DriveShell = @"Software\Classes\Drive\shell";
    private const string DirectoryVerb = @"Software\Classes\Directory\shell\YetAnotherFileManager";
    private const string FolderVerb = @"Software\Classes\Folder\shell\YetAnotherFileManager";
    private const string DriveVerb = @"Software\Classes\Drive\shell\YetAnotherFileManager";
    private const string BackgroundVerb = @"Software\Classes\Directory\Background\shell\YetAnotherFileManager";

    private const string WinECommand =
        @"Software\Classes\CLSID\{52205fd8-5dfb-447d-801a-d0b52f2e83e1}\shell\opennewwindow\command";

    public static void Apply(bool enabled) =>
        Try.Run(() =>
        {
            if (OperatingSystem.IsWindows())
                ApplyWindows(enabled);
            else if (OperatingSystem.IsLinux())
                ApplyLinux(enabled);
        }).OnFailure(ex => Log.Warning(ex, "Could not apply the default file manager choice"));

    /// <summary>Whether the registered folder command still points at this executable.</summary>
    public static DefaultManagerStatusPayload Status()
    {
        if (!OperatingSystem.IsWindows())
            return new(false, false, null);

        string? registeredPath = null;
        var active = false;

        Try.Run(() =>
        {
            using var shell = Registry.CurrentUser.OpenSubKey(DirectoryShell);
            active = string.Equals(shell?.GetValue(null) as string, "open", StringComparison.OrdinalIgnoreCase);

            using var command = Registry.CurrentUser.OpenSubKey(DirectoryCommand);
            registeredPath = RegistryCommand.Executable(command?.GetValue(null) as string);
        }).OnFailure(ex => Log.Debug(ex, "Could not read the default file manager status"));

        var current = Environment.ProcessPath;
        var matches = registeredPath is { Length: > 0 } && current is { Length: > 0 }
                                                        && Try.Run(() => string.Equals(Path.GetFullPath(registeredPath),
                                                            Path.GetFullPath(current),
                                                            StringComparison.OrdinalIgnoreCase)).GetOrElse(_ => false);

        return new(active && registeredPath is { Length: > 0 }, matches, registeredPath);
    }

    [SupportedOSPlatform("windows")]
    private static void ApplyWindows(bool enabled)
    {
        if (Environment.ProcessPath is not { Length: > 0 } executable)
            return;

        if (enabled)
        {
            // Every entry this app owns must name this copy, including the ones left by another install.
            OwnedAssociations.Repair(executable);

            var backups = AssociationBackupStore.Read();
            var changed = false;

            foreach (var keyPath in new[]
                     {
                         DirectoryCommand, FolderCommand, DirectoryShell, FolderShell, DriveCommand, DriveShell,
                         WinECommand
                     })
            {
                if (backups.DefaultManager.Any(backup =>
                        string.Equals(backup.Key, keyPath, StringComparison.OrdinalIgnoreCase)))
                    continue;

                var existed = Try.Run(() => Registry.CurrentUser.OpenSubKey(keyPath) is not null)
                    .GetOrElse(_ => false);
                var value = Try.Run(() => Registry.CurrentUser.OpenSubKey(keyPath)?.GetValue(null) as string)
                    .GetOrNull();

                backups.DefaultManager.Add(new(keyPath, existed, value));
                changed = true;
            }

            // Save the original values before touching the registry; a crash must not lose them.
            if (changed && !AssociationBackupStore.Write(backups))
                return;

            SetDefault(DirectoryShell, "open");
            SetDefault(FolderShell, "open");
            SetDefault(DriveShell, "open");
            SetCommand(DirectoryCommand, executable);
            SetCommand(FolderCommand, executable);
            SetCommand(DriveCommand, executable);
            SetCommand(WinECommand, executable, false);
            SetVerb(DirectoryVerb, executable);
            SetVerb(FolderVerb, executable);
            SetVerb(DriveVerb, executable);
            SetBackgroundVerb(BackgroundVerb, executable);
            return;
        }

        var store = AssociationBackupStore.Read();

        foreach (var backup in store.DefaultManager)
            RestoreKey(backup);

        DeleteKey(DirectoryVerb);
        DeleteKey(FolderVerb);
        DeleteKey(DriveVerb);
        DeleteKey(BackgroundVerb);

        store.DefaultManager.Clear();
        AssociationBackupStore.Write(store);
    }

    [SupportedOSPlatform("linux")]
    private static void ApplyLinux(bool enabled)
    {
        if (Environment.ProcessPath is not { Length: > 0 } executable)
            return;

        // The package installs a desktop file; a source build gets a per-user one instead.
        var installed = "/usr/share/applications/yafm.desktop";

        if (enabled && !File.Exists(installed))
        {
            var user = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.UserProfile),
                ".local", "share", "applications", "yafm.desktop");

            Directory.CreateDirectory(Path.GetDirectoryName(user)!);
            File.WriteAllText(user,
                $"""
                 [Desktop Entry]
                 Type=Application
                 Name=Yet Another File Manager
                 Exec="{executable}" %F
                 Icon=yafm
                 Terminal=false
                 Categories=System;FileManager;
                 MimeType=inode/directory;
                 """);
        }

        var store = AssociationBackupStore.Read();

        if (enabled)
        {
            if (store.LinuxDefaultManager is null)
            {
                store.LinuxDefaultManager = Run("xdg-mime", ["query", "default", "inode/directory"]).Trim();
                if (!AssociationBackupStore.Write(store))
                    return;
            }

            Run("xdg-mime", ["default", "yafm.desktop", "inode/directory"]);
            return;
        }

        if (store.LinuxDefaultManager is null)
            return;

        // Restore the handler the user had before this setting was turned on.
        if (store.LinuxDefaultManager.Length > 0)
            Run("xdg-mime", ["default", store.LinuxDefaultManager, "inode/directory"]);

        store.LinuxDefaultManager = null;
        AssociationBackupStore.Write(store);
    }

    [SupportedOSPlatform("windows")]
    private static void SetDefault(string keyPath, string value)
    {
        using var key = Registry.CurrentUser.CreateSubKey(keyPath);
        key?.SetValue(null, value);
    }

    [SupportedOSPlatform("windows")]
    private static void SetCommand(string keyPath, string executable, bool withPath = true)
    {
        using var key = Registry.CurrentUser.CreateSubKey(keyPath);
        key?.SetValue(null, withPath ? $"\"{executable}\" \"%1\"" : $"\"{executable}\"");
    }

    [SupportedOSPlatform("windows")]
    private static void SetVerb(string keyPath, string executable)
    {
        using var key = Registry.CurrentUser.CreateSubKey(keyPath);
        if (key is null)
            return;

        key.SetValue(null, "Open with Yet Another File Manager");
        using var command = key.CreateSubKey("command");
        command?.SetValue(null, $"\"{executable}\" \"%1\"");
    }

    [SupportedOSPlatform("windows")]
    private static void SetBackgroundVerb(string keyPath, string executable)
    {
        using var key = Registry.CurrentUser.CreateSubKey(keyPath);
        if (key is null)
            return;

        key.SetValue(null, "Open with Yet Another File Manager");
        using var command = key.CreateSubKey("command");
        command?.SetValue(null, $"\"{executable}\" \"%V\"");
    }

    [SupportedOSPlatform("windows")]
    private static void DeleteKey(string keyPath) =>
        Try.Run(() => Registry.CurrentUser.DeleteSubKeyTree(keyPath, false));

    [SupportedOSPlatform("windows")]
    private static void RestoreKey(RegistryAssociationBackup backup)
    {
        if (!backup.Existed)
        {
            DeleteKey(backup.Key);
            return;
        }

        // The value saved before this app took the key can name another copy of the app, left by a
        // build in a different folder. Putting that back would hand the folders to that copy again,
        // so such a leftover is dropped instead of restored.
        if (backup.Value is { Length: > 0 } value
            && RegistryCommand.Executable(value) is { } executable
            && !IsCurrent(executable))
        {
            DeleteKey(backup.Key);
            return;
        }

        using var key = Registry.CurrentUser.CreateSubKey(backup.Key);
        if (key is null)
            return;

        if (backup.Value is null)
            key.DeleteValue(null, false);
        else
            key.SetValue(null, backup.Value);
    }

    private static bool IsCurrent(string executable) =>
        Environment.ProcessPath is { Length: > 0 } current
        && Try.Run(() => string.Equals(Path.GetFullPath(executable), Path.GetFullPath(current),
            StringComparison.OrdinalIgnoreCase)).GetOrElse(_ => false);

    private static string Run(string command, string[] arguments) =>
        Try.Run(() =>
        {
            var startInfo = new ProcessStartInfo(command)
            {
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true
            };

            foreach (var argument in arguments)
                startInfo.ArgumentList.Add(argument);

            using var process = Process.Start(startInfo);
            if (process is null)
                return "";

            var output = process.StandardOutput.ReadToEnd();
            return process.WaitForExit(2000) ? output : "";
        }).GetOrElse(_ => "");
}