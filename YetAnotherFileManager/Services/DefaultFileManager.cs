using System.Diagnostics;
using System.Runtime.Versioning;
using Microsoft.Win32;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;

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
    private const string DirectoryVerb = @"Software\Classes\Directory\shell\YetAnotherFileManager";
    private const string FolderVerb = @"Software\Classes\Folder\shell\YetAnotherFileManager";

    public static void Apply(bool enabled) =>
        Try.Run(() =>
        {
            if (OperatingSystem.IsWindows())
                ApplyWindows(enabled);
            else if (OperatingSystem.IsLinux())
                ApplyLinux(enabled);
        }).OnFailure(ex => Log.Warning(ex, "Could not apply the default file manager choice"));

    [SupportedOSPlatform("windows")]
    private static void ApplyWindows(bool enabled)
    {
        if (Environment.ProcessPath is not { Length: > 0 } executable)
            return;

        if (enabled)
        {
            Backup("default-manager-directory.txt", DirectoryCommand);
            Backup("default-manager-folder.txt", FolderCommand);
            SetCommand(DirectoryCommand, executable);
            SetCommand(FolderCommand, executable);
            SetVerb(DirectoryVerb, executable);
            SetVerb(FolderVerb, executable);
            return;
        }

        Restore("default-manager-directory.txt", DirectoryCommand);
        Restore("default-manager-folder.txt", FolderCommand);
        DeleteKey(DirectoryVerb);
        DeleteKey(FolderVerb);
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

        var backup = BackupFile("default-manager-linux.txt");

        if (enabled)
        {
            if (!File.Exists(backup))
                File.WriteAllText(backup, Run("xdg-mime", ["query", "default", "inode/directory"]).Trim());

            Run("xdg-mime", ["default", "yafm.desktop", "inode/directory"]);
            return;
        }

        if (!File.Exists(backup))
            return;

        // Restore the handler the user had before this setting was turned on.
        var previous = File.ReadAllText(backup).Trim();

        if (previous.Length > 0)
            Run("xdg-mime", ["default", previous, "inode/directory"]);

        File.Delete(backup);
    }

    [SupportedOSPlatform("windows")]
    private static void SetCommand(string keyPath, string executable)
    {
        using var key = Registry.CurrentUser.CreateSubKey(keyPath);
        key?.SetValue(null, $"\"{executable}\" \"%1\"");
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
    private static void DeleteKey(string keyPath) =>
        Try.Run(() => Registry.CurrentUser.DeleteSubKeyTree(keyPath, false));

    [SupportedOSPlatform("windows")]
    private static void Backup(string file, string keyPath)
    {
        var path = BackupFile(file);
        if (File.Exists(path))
            return;

        var existed = Try.Run(() => Registry.CurrentUser.OpenSubKey(keyPath) is not null).GetOrElse(_ => false);
        var value = Try.Run(() => Registry.CurrentUser.OpenSubKey(keyPath)?.GetValue(null) as string).GetOrNull();

        File.WriteAllText(path, existed ? $"1\n{value ?? ""}" : "0");
    }

    [SupportedOSPlatform("windows")]
    private static void Restore(string file, string keyPath)
    {
        var path = BackupFile(file);
        if (!File.Exists(path))
            return;

        var lines = File.ReadAllText(path).Split('\n', 2);

        if (lines[0] == "0")
        {
            DeleteKey(keyPath);
        }
        else
        {
            using var key = Registry.CurrentUser.CreateSubKey(keyPath);
            key?.SetValue(null, lines.Length > 1 ? lines[1] : "");
        }

        File.Delete(path);
    }

    private static string BackupFile(string name) => Path.Combine(Constants.SettingsDirectory, name);

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
