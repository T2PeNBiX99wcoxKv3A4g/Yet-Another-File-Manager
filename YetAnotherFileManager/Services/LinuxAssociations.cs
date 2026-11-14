using System.Runtime.Versioning;
using System.Text.RegularExpressions;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Platform;
using PhotinoNetUtils.Utils;
using Serilog;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Desktop entries and MIME defaults on Linux, the counterpart of the registry keys the
///     Windows services write.
/// </summary>
/// <remarks>
///     Two things differ from a plain <c>xdg-mime</c> call. GIO is asked first: it is what
///     <c>xdg-open</c> and the desktop's own launcher consult, and it resolves a quoted
///     <c>Exec</c> line, while <c>xdg-mime</c> cannot find the binary behind a quoted path and
///     silently reports another handler. The executable is also written without quotes whenever
///     its path allows it, so the older tool can follow it too.
/// </remarks>
[SupportedOSPlatform("linux")]
internal static partial class LinuxAssociations
{
    /// <summary>Characters a desktop entry's <c>Exec</c> line cannot carry unquoted.</summary>
    private static readonly char[] Reserved =
        [' ', '\t', '\n', '"', '\'', '\\', '>', '<', '~', '|', '&', ';', '$', '*', '?', '#', '(', ')', '`'];

    /// <summary>The executable as a desktop entry's <c>Exec</c> line spells it.</summary>
    public static string Executable(string path) =>
        path.IndexOfAny(Reserved) < 0
            ? path
            : $"\"{path.Replace("\\", "\\\\").Replace("\"", "\\\"")}\"";

    /// <summary>The handler the desktop stored for a MIME type, or an empty string.</summary>
    public static string Query(string mimeType) =>
        GioQuery(mimeType) is { Length: > 0 } desktop ? desktop : LinuxDesktop.Query(mimeType);

    /// <summary>Points a MIME type at one of our desktop entries.</summary>
    public static void SetDefault(string desktop, string mimeType)
    {
        Try.Run(() => LinuxDesktop.Run("gio", ["mime", mimeType, desktop]))
            .OnFailure(ex => Log.Debug(ex, "gio could not set the handler for {Mime}", mimeType));

        // gio answers with the handler it actually stored, which is the answer a toggle needs.
        if (Query(mimeType) == desktop)
            return;

        LinuxDesktop.SetDefault(desktop, mimeType);
    }

    private static string GioQuery(string mimeType)
    {
        var output = LinuxDesktop.Run("gio", ["mime", mimeType]);
        var line = output.Split('\n').FirstOrDefault() ?? "";

        // The first line is "Default application for …: name.desktop", localized; the file name
        // itself is not translated, so the rightmost *.desktop token is the answer.
        var matches = DesktopName().Matches(line);
        return matches.Count == 0 ? "" : matches[^1].Value;
    }

    [GeneratedRegex(@"[A-Za-z0-9._+-]+\.desktop")]
    private static partial Regex DesktopName();
}
