using System.Diagnostics;
using System.Runtime.Versioning;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The Linux file clipboard: <c>text/uri-list</c> written through <c>wl-copy</c> on Wayland, or
///     <c>xclip</c> on X11. Klipper already owns the selection on KDE; asking the command-line client
///     is what makes the files available to other file managers as well.
/// </summary>
[SupportedOSPlatform("linux")]
internal static class LinuxClipboard
{
    private static readonly (string Command, string[] Arguments)[] Readers =
    [
        ("wl-paste", ["--no-newline", "--type", "text/uri-list"]),
        ("xclip", ["-selection", "clipboard", "-t", "text/uri-list", "-o"])
    ];

    /// <summary>Puts the paths on the clipboard as <c>file://</c> URIs.</summary>
    public static bool WriteFiles(IReadOnlyList<string> paths)
    {
        var value = string.Join("\r\n", paths.Select(path => new Uri(path).AbsoluteUri)) + "\r\n";

        return RunWithInput("wl-copy", ["--type", "text/uri-list"], value)
               || RunWithInput("xclip", ["-selection", "clipboard", "-t", "text/uri-list", "-in"], value);
    }

    /// <summary>Reads the file list, or reports that no clipboard client could answer.</summary>
    public static (List<string> Paths, bool Read) ReadFiles()
    {
        foreach (var (command, arguments) in Readers)
            if (Run(command, arguments) is { } output)
                return (Parse(output), true);

        return ([], false);
    }

    /// <summary>Drops the selection after a cut was pasted, so it cannot be pasted twice.</summary>
    public static void Clear()
    {
        // An empty URI list replaces the files; wl-copy's --clear only drops the owner, and Klipper
        // then keeps serving the last file list to the next paste.
        if (RunWithInput("wl-copy", ["--type", "text/uri-list"], ""))
            return;

        _ = RunWithInput("xclip", ["-selection", "clipboard", "-t", "text/uri-list", "-in"], "");
    }

    /// <summary>The value compared with a later read, to tell a cut made here from an outside copy.</summary>
    public static string Signature(IReadOnlyList<string> paths) => string.Join('\n', paths);

    private static List<string> Parse(string value)
    {
        var paths = new List<string>();

        foreach (var raw in value.Split('\n'))
        {
            var line = raw.Trim().TrimEnd('\r');
            if (line.Length == 0 || line.StartsWith('#'))
                continue;

            if (!Uri.TryCreate(line, UriKind.Absolute, out var uri) || !uri.IsFile)
                continue;

            var path = uri.LocalPath;
            if (File.Exists(path) || Directory.Exists(path))
                paths.Add(path);
        }

        return paths;
    }

    private static string? Run(string command, string[] arguments)
    {
        var process = Try.Run(() => Process.Start(Command(command, arguments))).GetOrNull();
        if (process is null)
            return null;

        using (process)
        {
            var output = process.StandardOutput.ReadToEnd();

            try
            {
                return process.WaitForExit(2000) && process.ExitCode == 0 ? output : null;
            }
            catch
            {
                return null;
            }
        }
    }

    private static bool RunWithInput(string command, string[] arguments, string input)
    {
        var startInfo = Command(command, arguments);
        startInfo.RedirectStandardInput = true;

        var process = Try.Run(() => Process.Start(startInfo)).GetOrNull();
        if (process is null)
            return false;

        using (process)
            try
            {
                process.StandardInput.Write(input);
                process.StandardInput.Close();

                return process.WaitForExit(2000) && process.ExitCode == 0;
            }
            catch
            {
                return false;
            }
    }

    private static ProcessStartInfo Command(string command, params string[] arguments)
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

        return startInfo;
    }
}
