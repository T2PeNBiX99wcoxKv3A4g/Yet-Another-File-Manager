using System.Text;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;

namespace YetAnotherFileManager.Services;

/// <summary>
///     A <c>--pick-folder</c> / <c>--pick-file</c> run: the flags that shape the window, and the
///     hand-off of the result back to the caller. Nothing here touches the normal file manager; the
///     picker is a short-lived process that opens one window and exits.
/// </summary>
internal sealed record PickerOptions(
    bool FileMode,
    bool SaveMode,
    bool Multiple,
    IReadOnlyList<string> Extensions,
    string Initial,
    string InitialName,
    string DefaultExtension,
    string? Output,
    string Types = "",
    int TypeIndex = 0,
    string? TypeOutput = null,
    string LastType = "");

/// <summary>Command line pick mode: parse the flags, build the window URL, and report the result.</summary>
internal static class CliPicker
{
    /// <summary>The format the last save used, so a program that names none opens on it.</summary>
    private static readonly string LastTypePath = Path.Combine(Constants.SettingsDirectory, "picker-last-type.txt");
    /// <summary>Reads the pick flags, or null when this launch is not a picker.</summary>
    public static PickerOptions? Parse(IReadOnlyList<string> args)
    {
        var folder = args.Contains(Constants.PickFolderArgument);
        var save = args.Contains(Constants.PickSaveArgument);
        var file = args.Contains(Constants.PickFileArgument) || save;

        if (!folder && !file)
            return null;

        var initial = Value(args, Constants.PickInitialArgument);
        if (initial is { Length: > 0 })
        {
            initial = Try.Run(() => Path.GetFullPath(initial)).GetOrNull() ?? initial;

            if (File.Exists(initial) && Path.GetDirectoryName(initial) is { } directory)
                initial = directory;
        }

        return new(
            file,
            save,
            args.Contains(Constants.PickMultipleArgument),
            Extensions(Value(args, Constants.PickFilterArgument)),
            initial ?? "",
            Value(args, Constants.PickNameArgument) ?? "",
            Value(args, Constants.PickExtensionArgument) ?? "",
            Value(args, Constants.PickOutputArgument),
            Value(args, Constants.PickTypesArgument) ?? "",
            int.TryParse(Value(args, Constants.PickTypeIndexArgument), out var typeIndex) ? typeIndex : 0,
            Value(args, Constants.PickTypeOutputArgument),
            ReadLastType());
    }

    /// <summary>
    ///     Marks the interface URL as a picker window. Everything else the dialog needs — the type
    ///     list above all — is too big for a URL, so the page asks for it once it is loaded.
    /// </summary>
    public static string AppendTo(string appUrl, PickerOptions options) =>
        $"{appUrl}{(appUrl.Contains('?') ? '&' : '?')}picker={(options.SaveMode ? "save" : options.FileMode ? "file" : "folder")}";

    /// <summary>Writes the chosen paths to standard output and, when asked, to a file.</summary>
    public static async Task CompleteAsync(PickerOptions options, IReadOnlyList<string> paths, int? type = null,
                                           string? extension = null)
    {
        if (paths.Count == 0)
        {
            Cancel(options);
            return;
        }

        // The shell's dialog remembers the last type per program; the picker keeps one for itself.
        if (extension is { Length: > 0 })
            (await Try.Run(async () => await File.WriteAllTextAsync(LastTypePath, extension, new UTF8Encoding(false))))
                .OnFailure(ex => Log.Warning(ex, "Could not remember the picked type"));

        if (options.TypeOutput is { Length: > 0 } typeOutput)
            (await Try.Run(async () => await File.WriteAllTextAsync(typeOutput, $"{type ?? 0}\n", new UTF8Encoding(false))))
                .OnFailure(ex => Log.Warning(ex, "Could not write the picked type to {Path}", typeOutput));

        var text = string.Join(Environment.NewLine, paths) + Environment.NewLine;

        if (options.Output is { Length: > 0 } output)
            (await Try.Run(async () => await File.WriteAllTextAsync(output, text, new UTF8Encoding(false))))
                .OnFailure(ex => Log.Warning(ex, "Could not write the picked paths to {Path}", output));

        Log.Information("Picker returned {Count} path(s), type {Type}: {Paths}",
            paths.Count, type ?? 0, string.Join(" | ", paths));

        Write(text);
        Environment.ExitCode = 0;
    }

    /// <summary>Leaves a cancelled run with no result and a non-zero exit code.</summary>
    public static void Cancel(PickerOptions options)
    {
        if (options.Output is { Length: > 0 } output)
            Try.Run(() => File.Delete(output));

        if (options.TypeOutput is { Length: > 0 } typeOutput)
            Try.Run(() => File.Delete(typeOutput));

        Environment.ExitCode = 1;
    }

    /// <summary>Accepts <c>*.png;*.jpg</c>, <c>png|jpg</c>, or <c>.png,.jpg</c>.</summary>
    private static string[] Extensions(string? filter) =>
        string.IsNullOrWhiteSpace(filter)
            ? []
            : filter.Split([';', '|', ','], StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
                .Select(value => value.StartsWith("*.", StringComparison.Ordinal) ? value[1..] : value)
                .Select(value => value.StartsWith('.') ? value : $".{value}")
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToArray();

    /// <summary>The value after a flag; flags are always followed by their value.</summary>
    private static string? Value(IReadOnlyList<string> args, string flag)
    {
        for (var index = 0; index + 1 < args.Count; index++)
            if (args[index] == flag)
                return args[index + 1];

        return null;
    }

    /// <summary>The format the last save wrote, or an empty string on a fresh profile.</summary>
    private static string ReadLastType() =>
        Try.Run(() => File.ReadAllText(LastTypePath)).GetOrElse(_ => "").Trim();

    /// <summary>
    ///     Writes to the inherited standard output. A caller that redirected it gets the paths on
    ///     its pipe; a terminal launch shows them too. Without either, use <c>--output</c>.
    /// </summary>
    private static void Write(string text) =>
        Try.Run(() =>
        {
            using var stdout = Console.OpenStandardOutput();
            using var writer = new StreamWriter(stdout, new UTF8Encoding(false))
            {
                AutoFlush = true
            };
            writer.Write(text);
        }).OnFailure(ex => Log.Warning(ex, "Could not write the picked paths"));
}