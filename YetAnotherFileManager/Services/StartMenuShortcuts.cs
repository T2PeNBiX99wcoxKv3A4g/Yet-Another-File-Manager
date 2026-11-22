using System.ComponentModel;
using System.Diagnostics;
using System.Runtime.Versioning;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Platform;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Interop;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Writes a shortcut into the current user's or the all-users Start menu. Pinning has no public
///     API, so the shell verb is tried; when Windows does not offer it the shortcut is still made.
/// </summary>
[SupportedOSPlatform("windows")]
internal static class StartMenuShortcuts
{
    public static async Task<StartMenuPayload> CreateAsync(string path, string scope, bool pin)
    {
        if (string.IsNullOrWhiteSpace(path) || (!File.Exists(path) && !Directory.Exists(path)))
            return new(false, null, false, "The item no longer exists.");

        var machine = string.Equals(scope, "machine", StringComparison.OrdinalIgnoreCase);

        // The all-users menu usually needs an administrator; a normal launch asks for one.
        if (machine && !CanWrite(MenuDirectory(true)))
        {
            if (await RunElevatedAsync(path, pin) is { } elevated)
                return elevated;

            return new(false, null, false, "Administrator rights are required for the all-users Start menu.");
        }

        return await Task.Run(() => CreateDirect(path, machine ? "machine" : "user", pin));
    }

    /// <summary>The elevated helper's entry point; the shortcut and its pin are its whole job.</summary>
    public static int RunHelper(string[] args)
    {
        var index = Array.IndexOf(args, Constants.StartMenuShortcutArgument);
        if (index < 0 || args.Length < index + 4)
            return 2;

        var scope = args[index + 1];
        var pin = args[index + 2] == "1";
        var path = args[index + 3];

        return CreateDirect(path, scope, pin).Ok ? 0 : 1;
    }

    private static StartMenuPayload CreateDirect(string path, string scope, bool pin)
    {
        var machine = string.Equals(scope, "machine", StringComparison.OrdinalIgnoreCase);
        var directory = MenuDirectory(machine);
        var name = NameOf(path);

        if (name.Length == 0)
            return new(false, null, false, "The item has no name for a shortcut.");

        try
        {
            Directory.CreateDirectory(directory);
        }
        catch (Exception exception) when (exception is UnauthorizedAccessException or IOException)
        {
            return new(false, null, false, exception.Message);
        }

        var shortcut = Path.Combine(directory, $"{name}.lnk");

        if (!File.Exists(shortcut))
        {
            var created = Try.Run(() => StaThread.RunAsync(() => Write(shortcut, path)).GetAwaiter().GetResult())
                .GetOrElse(_ => false);

            if (!created)
                return new(false, null, false, "The shortcut could not be created.");
        }

        var pinned = pin && Try.Run(() => StaThread.RunAsync(() => Pin(shortcut)).GetAwaiter().GetResult())
            .GetOrElse(_ => false);

        return new(true, shortcut, pinned,
            pin && !pinned ? "The shortcut was created, but Windows did not offer a pin action." : null);
    }

    private static bool CanWrite(string directory)
    {
        try
        {
            Directory.CreateDirectory(directory);
            var probe = Path.Combine(directory, $".yafm-{Guid.NewGuid():N}.tmp");
            using (File.Create(probe))
            {
            }

            File.Delete(probe);
            return true;
        }
        catch
        {
            return false;
        }
    }

    private static string MenuDirectory(bool machine) =>
        Environment.GetFolderPath(machine
            ? Environment.SpecialFolder.CommonPrograms
            : Environment.SpecialFolder.Programs);

    private static string NameOf(string path)
    {
        var trimmed = path.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
        var name = Path.GetFileName(trimmed);

        if (name.Length == 0)
            name = Path.GetFileName(Path.GetPathRoot(trimmed) ?? trimmed);

        var invalid = Path.GetInvalidFileNameChars();
        return new string([.. name.Where(character => !invalid.Contains(character))]).Trim();
    }

    /// <summary>Writes the .lnk through the shell's own shortcut object; runs on an STA thread.</summary>
    private static bool Write(string shortcut, string target)
    {
        var type = Type.GetTypeFromProgID("WScript.Shell");
        if (type is null)
            return false;

        dynamic shell = Activator.CreateInstance(type)!;
        dynamic link = shell.CreateShortcut(shortcut);

        link.TargetPath = target;
        link.WorkingDirectory = Directory.Exists(target) ? target : Path.GetDirectoryName(target) ?? "";
        link.IconLocation = $"{target},0";
        link.Description = Path.GetFileNameWithoutExtension(shortcut);
        link.Save();

        return File.Exists(shortcut);
    }

    /// <summary>Uses the shell's own "Pin to Start" verb when this Windows version exposes it.</summary>
    private static bool Pin(string shortcut)
    {
        var type = Type.GetTypeFromProgID("Shell.Application");
        if (type is null)
            return false;

        dynamic shell = Activator.CreateInstance(type)!;
        dynamic folder = shell.Namespace(Path.GetDirectoryName(shortcut));
        dynamic item = folder.ParseName(Path.GetFileName(shortcut));
        dynamic verbs = item.Verbs();

        for (var index = 0; index < verbs.Count; index++)
        {
            string label = ((string?)verbs.Item(index).Name ?? "").Replace("&", "");

            if (!IsPinToStart(label))
                continue;

            verbs.Item(index).DoIt();
            return true;
        }

        Log.Debug("Windows offered no pin action for {Shortcut}", shortcut);
        return false;
    }

    private static bool IsPinToStart(string label)
    {
        if (label.Contains("Unpin", StringComparison.OrdinalIgnoreCase)
            || label.Contains("取消釘選")
            || label.Contains("取消固定")
            || label.Contains("ピン留めを解除"))
            return false;

        return label.Contains("Pin to Start", StringComparison.OrdinalIgnoreCase)
               || label.Contains("釘選到開始")
               || label.Contains("钉选到开始")
               || label.Contains("固定到") && label.Contains("开始")
               || label.Contains("ピン留め") && label.Contains("スタート");
    }

    private static async Task<StartMenuPayload?> RunElevatedAsync(string path, bool pin)
    {
        if (Environment.ProcessPath is not { Length: > 0 } executable)
            return null;

        try
        {
            var start = new ProcessStartInfo(executable)
            {
                UseShellExecute = true,
                Verb = "runas",
                Arguments = $"{Constants.StartMenuShortcutArgument} machine {(pin ? "1" : "0")} \"{path}\"",
                WorkingDirectory = Path.GetDirectoryName(executable) ?? ""
            };

            var code = await ProcessRunner.RunAsync(start);
            return code == 0
                ? new StartMenuPayload(true, null, pin, null)
                : new StartMenuPayload(false, null, false, "Administrator rights are required.");
        }
        catch (Win32Exception exception) when (exception.NativeErrorCode == 1223)
        {
            return new(false, null, false, "Administrator rights are required.");
        }
        catch (Exception exception)
        {
            Log.Warning(exception, "Could not run the elevated Start menu helper");
            return new(false, null, false, exception.Message);
        }
    }
}
