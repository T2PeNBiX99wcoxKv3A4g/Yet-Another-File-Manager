global using PhotinoNetUtils.Extensions;
global using PhotinoNetUtils.Platform;
global using PhotinoNetUtils.Utils;
using JetBrains.Annotations;
using PhotinoNetUtils;
using Serilog;

namespace YetAnotherFileManager;

[PublicAPI]
public static class Constants
{
#if DEBUG
    [PublicAPI] internal const bool IsDebugMode = true;
#else
    [PublicAPI] internal const bool IsDebugMode = false;
#endif

    public const string Name = "YetAnotherFileManager";

    /// <summary>The name people see; <see cref="Name" /> stays the identifier for paths.</summary>
    public const string DisplayName = "Yet Another File Manager";

    public const string WindowTitle = DisplayName;

    /// <summary>Where the newest published build can be downloaded from.</summary>
    public const string ReleasesUrl = "https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest";

    /// <summary>
    ///     Command line flag for the short-lived, elevated copy of the app. It writes the recycle bin
    ///     leftovers it can see to the path that follows (and deletes them when <c>--delete</c> is
    ///     also present), then exits without opening a window.
    /// </summary>
    /// <summary>Links this app understands, e.g. <c>yafm://overview</c>.</summary>
    public const string ViewScheme = "yafm://";

    public const string OrphansReportArgument = "--orphans-report";

    /// <summary>Adds deletion to the elevated report run.</summary>
    public const string OrphansDeleteArgument = "--delete";

    /// <summary>Command line mode that extracts a shell context menu into a JSON file.</summary>
    public const string ShellVerbsArgument = "--shell-verbs";

    /// <summary>Command line mode that invokes one extracted shell command, isolated from the app.</summary>
    public const string ShellInvokeArgument = "--shell-invoke";

    /// <summary>
    ///     Elevated helper that toggles the NTFS case-sensitivity flag: <c>--case-sensitive path 1</c>.
    ///     Windows only allows the change with administrator rights.
    /// </summary>
    public const string CaseSensitiveArgument = "--case-sensitive";

    /// <summary>Elevated one-off helper for creating a link that the normal token could not make.</summary>
    public const string CreateLinkArgument = "--create-link";

    /// <summary>Elevated one-off helper for the Windows logon task: create or delete it, then exit.</summary>
    public const string StartupTaskArgument = "--startup-task";

    /// <summary>Set by the logon entry, so only that launch follows the "start hidden" setting.</summary>
    public const string AutostartArgument = "--autostart";

    /// <summary>
    ///     Elevated one-off helper: runs one file operation for a folder the window cannot change,
    ///     writes the answer to a JSON file and exits: <c>--elevated-operation request result</c>.
    /// </summary>
    public const string ElevatedOperationArgument = "--elevated-operation";

    /// <summary>
    ///     Command line pick modes: open the in-app picker as the whole window and print the chosen
    ///     paths, so scripts and other programs can use it instead of the shell dialogs.
    /// </summary>
    public const string PickFolderArgument = "--pick-folder";

    public const string PickFileArgument = "--pick-file";

    /// <summary>Lets a pick mode return several paths instead of one.</summary>
    public const string PickMultipleArgument = "--multiple";

    /// <summary>The extension filter for <c>--pick-file</c>, e.g. <c>*.png;*.jpg</c>.</summary>
    public const string PickFilterArgument = "--filter";

    /// <summary>Where a pick mode starts browsing.</summary>
    public const string PickInitialArgument = "--initial";

    /// <summary>Write the chosen paths to this file as well as to standard output.</summary>
    public const string PickOutputArgument = "--output";

    /// <summary>
    ///     Short-lived helper that renders the first page of a PDF to a PNG. Keeping PDFium in its own
    ///     process means a malformed document can only take the helper down, never the window.
    /// </summary>
    public const string PdfPreviewArgument = "--pdf-preview";

    /// <summary>
    ///     The shared "Core" logger. Resolved from the configured <see cref="Log.Logger" /> on every
    ///     access, so it must not be captured before <see cref="Logging.Initialize" /> has run.
    /// </summary>
    internal static ILogger Logger => Log.Logger.ForContext("SourceContext", "Core");

    /// <summary>
    ///     Where the settings and other user data live: <c>%APPDATA%\YetAnotherFileManager</c> (roaming),
    ///     beside the recent and frequent lists.
    /// </summary>
    internal static string SettingsDirectory => AppPaths.SettingsDirectory(Name);

    /// <summary>
    ///     A directory we own, used as the host's content root. The static server creates a <c>wwwroot</c>
    ///     web root under it when missing, which without this would land next to the executable.
    /// </summary>
    internal static string DataDirectory => AppPaths.DataDirectory(Name);
}