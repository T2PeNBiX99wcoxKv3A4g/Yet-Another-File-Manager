using System.Diagnostics;
using System.Globalization;
using System.Security.Cryptography;
using System.Text;
using PhotinoNetUtils.Localization;
using PhotinoNetUtils.Utils;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Reads the formats only 7-Zip understands through its console binary. Windows calls the native
///     7z.dll instead (it needs no process per archive); everywhere else the binary either ships
///     beside the app or is taken from PATH, so a Linux install opens the same set of archives.
/// </summary>
internal static class SevenZipCli
{
    /// <summary>One entry as the console lists it.</summary>
    internal sealed record Entry(string Key, bool IsDirectory, long Size, DateTime? Modified, bool Encrypted);

    /// <summary>Names the binary may carry in a package: 7-Zip's own, then the p7zip ones.</summary>
    private static readonly string[] ToolNames = ["7zz", "7z", "7za"];

    private static readonly Lazy<string?> Executable = new(FindExecutable);

    public static bool Available => Executable.Value is not null;

    /// <summary>Every entry of the archive, in the order 7-Zip lists them.</summary>
    public static List<Entry> List(string archivePath, string? password = null, int codePage = 0)
    {
        var arguments = new List<string> { "l", "-slt", "-bd", "-y" };
        AddPassword(arguments, password);
        AddCodePage(arguments, codePage);
        arguments.Add("--");
        arguments.Add(archivePath);

        var (code, output, error) = Run(arguments, captureOutput: true);

        if (code != 0)
            throw Failure(archivePath, error);

        var entries = new List<Entry>();
        foreach (var block in output.Split(["\r\n\r\n", "\n\n"], StringSplitOptions.RemoveEmptyEntries))
        {
            var fields = ReadFields(block);

            // The archive's own header carries a Path but no Size, and the "-ba" switch that would
            // hide it also hides the payload some formats (RPM) report as their only entry.
            if (!fields.TryGetValue("Path", out var key) || key.Length == 0
                                                           || !fields.ContainsKey("Size"))
                continue;

            var folder = fields.TryGetValue("Folder", out var isFolder) && isFolder == "+";
            folder |= fields.TryGetValue("Attributes", out var attributes)
                      && attributes.StartsWith('D');

            // The ar/RPM/cpio backends report a unix mode instead of the folder flag.
            folder |= fields.TryGetValue("Mode", out var mode) && mode.StartsWith('d');

            var size = long.TryParse(fields.GetValueOrDefault("Size"), out var bytes) ? bytes : 0;
            DateTime? modified = DateTime.TryParse(fields.GetValueOrDefault("Modified"), CultureInfo.InvariantCulture,
                DateTimeStyles.None, out var stamp)
                ? stamp
                : null;

            var encrypted = fields.GetValueOrDefault("Encrypted") == "+";
            entries.Add(new Entry(key.Replace('\\', '/'), folder, size, modified, encrypted));
        }

        return entries;
    }

    /// <summary>Extracts the whole archive into an existing folder.</summary>
    public static void Extract(string archivePath, string target, string? password = null, int codePage = 0)
    {
        var arguments = new List<string> { "x", "-y", "-bd", "-bso0", "-bsp0", $"-o{target}" };
        AddPassword(arguments, password);
        AddCodePage(arguments, codePage);
        arguments.Add("--");
        arguments.Add(archivePath);

        var (code, _, error) = Run(arguments, captureOutput: false);

        if (code != 0)
            throw Failure(archivePath, error);
    }

    /// <summary>Writes one entry to <paramref name="destination" /> through the tool's stdout.</summary>
    public static void ExtractEntry(string archivePath, string inner, string destination, string? password = null,
        int codePage = 0)
    {
        var arguments = new List<string> { "x", "-so", "-y", "-bd", "-bso0", "-bsp0" };
        AddPassword(arguments, password);
        AddCodePage(arguments, codePage);
        arguments.Add("--");
        arguments.Add(archivePath);
        arguments.Add(inner);

        var (code, error) = RunToFile(arguments, destination);

        if (code != 0)
        {
            Try.Run(() => File.Delete(destination));
            throw Failure(archivePath, error);
        }
    }

    private static void AddPassword(List<string> arguments, string? password)
    {
        if (password is { Length: > 0 })
            arguments.Add($"-p{password}");
    }

    private static void AddCodePage(List<string> arguments, int codePage)
    {
        if (codePage > 0)
            arguments.Add($"-mcp={codePage}");
    }

    private static Dictionary<string, string> ReadFields(string block)
    {
        var fields = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

        foreach (var line in block.Split('\n'))
        {
            var separator = line.IndexOf(" = ", StringComparison.Ordinal);
            if (separator <= 0)
                continue;

            fields[line[..separator].Trim()] = line[(separator + 3)..].TrimEnd('\r');
        }

        return fields;
    }

    private static Exception Failure(string archivePath, string error)
    {
        var reason = error
            .Split('\n', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
            .LastOrDefault(line => !line.StartsWith("7-Zip", StringComparison.OrdinalIgnoreCase))
            ?? $"The archive {Path.GetFileName(archivePath)} could not be opened.";

        return reason.Contains("password", StringComparison.OrdinalIgnoreCase)
               || reason.Contains("encrypt", StringComparison.OrdinalIgnoreCase)
            ? new CryptographicException(reason)
            : new InvalidOperationException($"{Path.GetFileName(archivePath)}: {reason}");
    }

    private static (int Code, string Output, string Error) Run(List<string> arguments, bool captureOutput)
    {
        using var process = Start(arguments);

        // The pipe is drained even when the text is not wanted: a full buffer would block the tool.
        var output = process.StandardOutput.ReadToEnd();
        var error = process.StandardError.ReadToEnd();
        process.WaitForExit();

        return (process.ExitCode, captureOutput ? output : "", error);
    }

    private static (int Code, string Error) RunToFile(List<string> arguments, string destination)
    {
        using var process = Start(arguments);
        using (var output = File.Create(destination))
            process.StandardOutput.BaseStream.CopyTo(output);

        var error = process.StandardError.ReadToEnd();
        process.WaitForExit();

        return (process.ExitCode, error);
    }

    private static Process Start(List<string> arguments)
    {
        if (Executable.Value is not { } tool)
            throw new FileNotFoundException(
                Localization.Get("the_7_zip_command_line_tool_was_not_found_install_p7zip_or_the_7zip_package"));

        var start = new ProcessStartInfo(tool)
        {
            UseShellExecute = false,
            CreateNoWindow = true,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            StandardOutputEncoding = Encoding.UTF8,
            StandardErrorEncoding = Encoding.UTF8
        };

        foreach (var argument in arguments)
            start.ArgumentList.Add(argument);

        return Process.Start(start) ?? throw new InvalidOperationException($"Could not start {tool}.");
    }

    private static string? FindExecutable()
    {
        // Windows has the native library, which needs no process per archive.
        if (OperatingSystem.IsWindows())
            return null;

        var bundled = Path.Combine(AppContext.BaseDirectory, "7zz");
        if (File.Exists(bundled))
            return bundled;

        var path = Environment.GetEnvironmentVariable("PATH") ?? "";
        foreach (var directory in path.Split(Path.PathSeparator, StringSplitOptions.RemoveEmptyEntries))
        {
            foreach (var name in ToolNames)
            {
                var candidate = Path.Combine(directory, name);
                if (File.Exists(candidate))
                    return candidate;
            }
        }

        return null;
    }
}
