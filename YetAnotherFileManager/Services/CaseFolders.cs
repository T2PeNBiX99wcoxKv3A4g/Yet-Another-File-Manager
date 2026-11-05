using System.Diagnostics;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Interop;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Reads and changes the NTFS case-sensitivity flag of folders. Windows only turns it on for an
///     empty folder, so converting a folder that has contents moves them through an empty folder
///     that is marked first and then takes the original name.
/// </summary>
internal static class CaseFolders
{
    public static bool Supported => OperatingSystem.IsWindows();

    public static bool Query(string path) =>
        Supported && Directory.Exists(path) && CaseSensitivity.Get(path);

    /// <summary>Marks a folder that was just created; the caller already checked it is empty.</summary>
    public static void MarkNew(string path)
    {
        if (!Supported)
            return;

        if (!Mark(path, true))
            Log.Warning("Could not make {Path} case-sensitive", path);
    }

    /// <summary>
    ///     Turns the flag on or off, asking for administrator rights through the app's own one-off
    ///     helper when Windows refuses the direct call.
    /// </summary>
    public static bool Mark(string path, bool enabled)
    {
        if (!Supported)
            return false;

        try
        {
            CaseSensitivity.Set(path, enabled);
            return true;
        }
        catch (IOException)
        {
            return Elevate(path, enabled);
        }
    }

    private static bool Elevate(string path, bool enabled)
    {
        if (Environment.ProcessPath is not { Length: > 0 } executable)
            return false;

        try
        {
            var start = new ProcessStartInfo(executable)
            {
                UseShellExecute = true,
                Verb = "runas",
                CreateNoWindow = true
            };

            start.ArgumentList.Add(Constants.CaseSensitiveArgument);
            start.ArgumentList.Add(path);
            start.ArgumentList.Add(enabled ? "1" : "0");

            using var process = Process.Start(start);
            return process is not null && process.WaitForExit(120_000) && process.ExitCode == 0;
        }
        catch (Exception ex) when (ex is System.ComponentModel.Win32Exception or InvalidOperationException)
        {
            // The user dismissed the consent prompt, or the shell could not start the helper.
            Log.Information(ex, "The case-sensitivity helper did not run");
            return false;
        }
    }

    public static CaseSensitivePayload Set(string path, bool enabled)
    {
        if (!Supported)
            return new CaseSensitivePayload(false, false, "Case-sensitive folders are a Windows feature.");

        if (!Directory.Exists(path))
            return new CaseSensitivePayload(false, false, "The folder is no longer there.");

        try
        {
            var info = new DirectoryInfo(path);
            if (info.LinkTarget is not null)
                return new CaseSensitivePayload(false, enabled, "A link cannot be converted this way.");

            if (enabled && !CaseSensitivity.IsEmpty(path))
                Convert(path);
            else if (!Mark(path, enabled))
                return new CaseSensitivePayload(false, Query(path),
                    "Administrator rights are needed to change case-sensitive names.");

            return new CaseSensitivePayload(true, enabled, null);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not change the case sensitivity of {Path}", path);
            return new CaseSensitivePayload(false, Query(path), ex.Message);
        }
    }

    /// <summary>
    ///     Moves every child into an empty sibling that is already case-sensitive, then swaps the
    ///     two names. Same-volume directory moves only rewrite the directory entry, so this stays
    ///     fast even for large folders.
    /// </summary>
    private static void Convert(string path)
    {
        var full = Path.GetFullPath(path).TrimEnd(Path.DirectorySeparatorChar);
        var parent = Path.GetDirectoryName(full) ?? throw new IOException("The folder has no parent.");
        var temp = Path.Combine(parent, $".yafm-case-{Guid.NewGuid():N}");

        Directory.CreateDirectory(temp);

        if (!Mark(temp, true))
        {
            Directory.Delete(temp);
            throw new IOException("Administrator rights are needed to change case-sensitive names.");
        }

        var moved = new List<string>();

        try
        {
            foreach (var entry in Directory.EnumerateFileSystemEntries(full))
            {
                var destination = Path.Combine(temp, Path.GetFileName(entry));
                Directory.Move(entry, destination);
                moved.Add(entry);
            }

            Directory.Delete(full);
            Directory.Move(temp, full);
        }
        catch
        {
            // Put everything back, so the folder is exactly as it was before the attempt.
            Directory.CreateDirectory(full);

            foreach (var original in moved)
            {
                var current = Path.Combine(temp, Path.GetFileName(original));

                if (Directory.Exists(original) || File.Exists(original))
                    continue;

                if (File.Exists(current))
                    Try.Run(() => File.Move(current, original));
                else if (Directory.Exists(current))
                    Try.Run(() => Directory.Move(current, original));
            }

            Try.Run(() => Directory.Delete(temp, false));
            throw;
        }
    }
}
