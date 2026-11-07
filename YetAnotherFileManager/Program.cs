using System.Diagnostics.CodeAnalysis;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using System.Text.Json;
using PhotinoNetUtils;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Interop;
using PhotinoNetUtils.Localization;
using PhotinoNetUtils.Messaging;
using PhotinoNetUtils.Platform;
using PhotinoNetUtils.Services;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Interop;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Services;
#if !DEBUG
using PhotinoNetUtils.Hosting;
#endif

namespace YetAnotherFileManager;
//NOTE: To hide the console window, go to the project properties and change the Output Type to Windows Application.
// Or edit the .csproj file and change the <OutputType> tag from "WinExe" to "Exe".

internal static partial class Program
{
    [STAThread]
    private static void Main(string[] args)
    {
        if (!OperatingSystem.IsWindows() && !OperatingSystem.IsLinux())
            throw new PlatformNotSupportedException("YetAnotherFileManager supports Windows and Linux.");

        // One-off elevated run: report (and optionally delete) the recycle-bin leftovers this
        // account cannot reach, then exit. It happens before the single-instance check because it is
        // a short-lived helper, not another instance of the app.
        if (args.Contains(Constants.OrphansReportArgument))
        {
            RunOrphansReportAsync(args).GetAwaiter().GetResult();
            return;
        }

        // One-off elevated retry when a symbolic-link operation needs SeCreateSymbolicLinkPrivilege.
        if (OperatingSystem.IsWindows() && args.Contains(Constants.CreateLinkArgument))
        {
            Environment.ExitCode = RunCreateLink(args);
            return;
        }

        // The shell menu is read and invoked in this short-lived helper, so a third-party handler
        // that crashes can never take the window down with it.
        if (OperatingSystem.IsWindows() && args.Contains(Constants.ShellVerbsArgument))
        {
            RunShellVerbs(args);
            return;
        }

        if (OperatingSystem.IsWindows() && args.Contains(Constants.ShellInvokeArgument))
        {
            RunShellInvoke(args);
            return;
        }

        // Turning NTFS case sensitivity on needs an administrator token; the window asks the shell
        // to run this one-off helper and waits for its exit code.
        if (OperatingSystem.IsWindows() && args.Contains(Constants.CaseSensitiveArgument))
        {
            Environment.ExitCode = RunCaseSensitivity(args);
            return;
        }

        // PDFium is kept in a short-lived helper; the window only ever receives the rendered PNG.
        if (args.Contains(Constants.PdfPreviewArgument))
        {
            RunPdfPreview(args);
            return;
        }

        // Main must stay synchronous: [STAThread] is ignored for an async entry point, and the
        // Photino message loop / WebView2 require an STA thread.
        Logging.Initialize(Constants.Name, "app");

        // A pick run's standard output belongs to the caller, so its logs go to the file only.
        var picker = CliPicker.Parse(args);
        if (picker is not null)
            DetachConsole();

        // "yafm https://…" behaves like Explorer: the link goes to the default browser and the app
        // does not open a window unless another path was passed as well.
        if (TryOpenExternalUrls(args))
            return;

        // The bridge serializes with the app's source-generated context; nothing is reflected.
        NativeBridge.Initialize(AppJsonContext.Default);

        // Settings are read once before any service asks for them; the message loop needs the real
        // values as soon as the window is up. Main must stay synchronous on its STA thread, so this
        // single startup read waits here instead of racing the services.
        SettingsService.Instance.InitializeAsync().GetAwaiter().GetResult();
        FileVisibility.SetHidden(SettingsService.Instance.Current.ShowHidden);

        // Re-apply the per-user folder association in case it was removed outside the app.
        DefaultFileManager.Apply(SettingsService.Instance.Current.IsDefaultFileManager);
        ArchiveAssociations.Apply(SettingsService.Instance.Current.HandlesArchives);
        GlobalHotkey.Apply(SettingsService.Instance.Current.GlobalHotkey);

        // UI strings come from Resources/i18n; the settings select the language.
        Localization.Initialize(typeof(Program).Assembly, "YetAnotherFileManager.Resources.i18n.",
            () => SettingsService.Instance.Language);

        if (OperatingSystem.IsLinux())
        {
            LinuxDiagnostics.Write();

            // The Wayland app id must match the desktop entry's file name, or the compositor will not
            // associate our windows with our icon.
            LinuxGtk.SetProgramName(Constants.Name);
        }

        try
        {
            // The native helper is part of the build, so a missing library stops the launch here,
            // with a log entry, instead of surfacing as a failed scan or a failed delete later.
            RustNative.Initialize();

            // A pick run is a separate, short-lived window that answers the caller and exits. It
            // deliberately stays out of the single-instance channel: several pickers may be open.
            if (picker is not null)
            {
                RunPicker(picker);
                return;
            }

            foreach (var arg in args)
                Log.Information("arg: {Arg}", arg);

            var startupPaths = ResolvePaths(args);

            // Only one instance may run; later launches hand their paths to it and exit.
            using var singleInstance = new SingleInstance(Constants.Name);
            if (!singleInstance.IsFirstInstance)
            {
                // Blocking here is fine: this process only forwards its args and exits.
                singleInstance.ForwardAsync(args).GetAwaiter().GetResult();
                return;
            }

#if !DEBUG
            // Kestrel binds to an OS-assigned port, so several Photino apps can run side by side
            // without racing for the default 8000. The content root is a folder we own, which keeps
            // the web root out of the executable's directory.
            using var staticServer = StaticServer.Start(Constants.DataDirectory);
            var appUrl = $"{staticServer.BaseUrl}/index.html?v={AppInfoService.BuildToken}";
#else
            // A Debug build always talks to the Vite dev server, which is where hot reload lives.
            const string appUrl = "http://127.0.0.1:3100";
#endif

            Log.Information("Serving React app at {AppUrl}", appUrl);

            // Touching each singleton constructs it, which is what registers its message handlers.
            _ = AppInfoService.Instance;
_ = UpdateService.Instance;
            _ = FileSystemService.Instance;
            _ = ThumbnailServer.Instance;

            // A cleanup tool or another profile can wipe the per-user entry, so the stored choice is
            // applied again on every launch.
            UrlScheme.Apply(SettingsService.Instance.Current.OwnsLinks);
            AppMemory.Start();

            var manager = WindowManager.Instance;
            manager.AppUrl = appUrl;
            manager.IconPath = AppIcon.EnsureExtracted(typeof(Program).Assembly, Constants.Name);

            using var tray = CreateTray(manager.IconPath);

            manager.MainWindowCreated += [SuppressMessage("ReSharper", "AccessToDisposedClosure")]() =>
            {
                // The message loop is about to start, so windows can now be created safely.
                singleInstance.StartServer(paths => DispatchPaths(manager, paths));
            };

            manager.CreateMainWindow();

            // The window is already visible at startup; these only decide what it shows. Paths that
            // arrive now are queued until the interface reports that it is listening.
            foreach (var path in startupPaths)
                manager.ShowPath(path, true);

            StartTray(tray);

            manager.Run();

            Log.Information("Exiting");
        }
        catch (Exception ex)
        {
            // The window procedure runs native code, so a failure there surfaces here. Record it
            // before the runtime prints its own crash dialog.
            Log.Fatal(ex, "Unhandled exception");
            throw;
        }
        finally
        {
            Logging.Shutdown();
        }
    }

    /// <summary>
    ///     Opens the in-app picker as the whole window. The caller gets the paths through standard
    ///     output (and <c>--output</c> when given); cancelling exits with code 1.
    /// </summary>
    private static void RunPicker(PickerOptions picker)
    {
#if !DEBUG
        using var staticServer = StaticServer.Start(Constants.DataDirectory);
        var appUrl = $"{staticServer.BaseUrl}/index.html?v={AppInfoService.BuildToken}";
#else
        const string appUrl = "http://127.0.0.1:3100";
#endif
        _ = AppInfoService.Instance;
        _ = FileSystemService.Instance;
        _ = ThumbnailServer.Instance;

        var manager = WindowManager.Instance;
        manager.AppUrl = CliPicker.AppendTo(appUrl, picker);
        manager.IconPath = AppIcon.EnsureExtracted(typeof(Program).Assembly, Constants.Name);
        manager.Picker = picker;

        var settings = SettingsService.Instance.Current;
        manager.CreateMainWindow(
            Localization.Get(picker.FileMode ? "Choose a file" : "Choose a folder"),
            settings.PickerWidth, settings.PickerHeight, 720, 480);

        manager.Run();
    }

    /// <summary>
    ///     Swaps the console logger for a file-only one, so a pick run's standard output carries
    ///     nothing but the chosen paths.
    /// </summary>
    private static void DetachConsole()
    {
        Log.CloseAndFlush();

        Log.Logger = new LoggerConfiguration()
            .MinimumLevel.Information()
            .WriteTo.File(
                Path.Combine(AppPaths.LogDirectory(Constants.Name), "pick-.log"),
                rollingInterval: RollingInterval.Day,
                retainedFileCountLimit: 7,
                shared: true)
            .CreateLogger();

        Console.SetOut(TextWriter.Null);
        Console.SetError(TextWriter.Null);
    }

    /// <summary>Keeps a crashing helper from showing a Windows Error Reporting dialog.</summary>
    [LibraryImport("kernel32.dll")]
    private static partial uint SetErrorMode(uint mode);

    /// <summary>Shows every path a second launch forwarded, the way Explorer reuses its window.</summary>
    private static void DispatchPaths(WindowManager manager, IReadOnlyList<string> args)
    {
        foreach (var path in ResolvePaths(args))
            manager.ShowPath(path);
    }

    /// <summary>Reads the shell menu for the paths and writes the result as JSON, then exits.</summary>
    [SupportedOSPlatform("windows")]
    /// <summary>One-off elevated run that toggles the flag, then exits with 0 on success.</summary>
    [SupportedOSPlatform("windows")]
    private static int RunCaseSensitivity(string[] args)
    {
        var index = Array.IndexOf(args, Constants.CaseSensitiveArgument);

        if (index < 0 || index + 2 >= args.Length)
            return 2;

        try
        {
            CaseSensitivity.Set(args[index + 1], args[index + 2] == "1");
            return 0;
        }
        catch
        {
            return 1;
        }
    }

    /// <summary>Runs a single link creation with the full administrator token, then exits.</summary>
    [SupportedOSPlatform("windows")]
    private static int RunCreateLink(string[] args)
    {
        var index = Array.IndexOf(args, Constants.CreateLinkArgument);
        if (index < 0 || index + 3 >= args.Length)
            return 2;

        var result = FileLinkCreation.Create(args[index + 1], args[index + 2], args[index + 3], true);
        return result.Ok ? 0 : 1;
    }

    private static void RunShellVerbs(string[] args)
    {
        if (!OperatingSystem.IsWindows())
            return;

        // A crashing third-party handler must not leave a Windows Error Reporting dialog behind.
        SetErrorMode(0x0002);

        var index = Array.IndexOf(args, Constants.ShellVerbsArgument);
        if (index < 0 || index + 1 >= args.Length)
            return;

        try
        {
            var paths = args[(index + 2)..];
            using var block = ShellExtensionBlock.Enter();
            var verbs = ShellMenu.Read(paths, false);

            File.WriteAllText(args[index + 1],
                JsonSerializer.Serialize(verbs, AppJsonContext.Default.ListShellVerb));
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine(ex);
            Environment.ExitCode = 1;
        }
    }

    /// <summary>Runs one extracted shell command in this process, then exits.</summary>
    [SupportedOSPlatform("windows")]
    private static void RunShellInvoke(string[] args)
    {
        if (!OperatingSystem.IsWindows())
            return;

        SetErrorMode(0x0002);

        var index = Array.IndexOf(args, Constants.ShellInvokeArgument);
        if (index < 0 || index + 4 >= args.Length)
            return;

        try
        {
            var safe = args[index + 1] == "1";
            _ = int.TryParse(args[index + 2], out var offset);
            var verb = args[index + 3];
            var paths = args[(index + 4)..];

            using var block = safe ? null : ShellExtensionBlock.Enter();
            ShellMenu.Invoke(paths, safe, verb.Length == 0 ? null : verb, offset);
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine(ex);
            Environment.ExitCode = 1;
        }
    }

    /// <summary>
    ///     The body of the elevated helper run: writes the leftover recycle-bin records only an
    ///     administrator can see to a JSON file (and deletes them when asked). Nothing else happens —
    ///     no window, no tray.
    /// </summary>
    /// <summary>Runs the isolated PDF renderer and exits; the main window never loads PDFium.</summary>
    private static void RunPdfPreview(string[] args)
    {
        var index = Array.IndexOf(args, Constants.PdfPreviewArgument);
        if (index < 0 || index + 2 >= args.Length)
        {
            Environment.ExitCode = 2;
            return;
        }

        try
        {
            Environment.ExitCode = PdfPreview.TryRender(args[index + 1], args[index + 2]) ? 0 : 1;
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine(ex);
            Environment.ExitCode = 1;
        }
    }

    private static async Task RunOrphansReportAsync(string[] args)
    {
        Logging.Initialize(Constants.Name, "cleanup");

        try
        {
            var entries = await RecycleBin.ListAsync(true);
            var index = Array.IndexOf(args, Constants.OrphansReportArgument);

            if (index >= 0 && index + 1 < args.Length)
                await File.WriteAllTextAsync(args[index + 1],
                    JsonSerializer.Serialize([.. entries], AppJsonContext.Default.ListRecycleEntry));

            if (args.Contains(Constants.OrphansDeleteArgument))
                Log.Information("Removed {Count} leftover recycle bin records",
                    await RecycleBin.PurgeOrphanMetadataAsync(entries));
        }
        finally
        {
            Logging.Shutdown();
        }
    }

    /// <summary>
    ///     Opens every http(s) argument in the default browser, like <c>explorer https://…</c>. True
    ///     when there was nothing else to open, so the process can exit without a window.
    /// </summary>
    private static bool TryOpenExternalUrls(IEnumerable<string> args)
    {
        var arguments = args.ToList();
        var urls = arguments.Where(IsExternalUrl).ToList();

        if (urls.Count == 0)
            return false;

        foreach (var url in urls)
            Try.Run(() => SystemLauncher.Open(url))
                .OnFailure(ex => Log.Warning(ex, "Could not open {Url}", url));

        return !arguments.Any(argument => !argument.StartsWith('-') && !IsExternalUrl(argument));
    }

    private static bool IsExternalUrl(string value) =>
        Uri.TryCreate(value, UriKind.Absolute, out var uri)
        && (uri.Scheme == Uri.UriSchemeHttp || uri.Scheme == Uri.UriSchemeHttps);

    /// <summary>
    ///     Explorer-style command line: every non-flag argument is a file or folder to show. A file
    ///     opens its containing folder until the interface can select it.
    /// </summary>
    private static List<string> ResolvePaths(IEnumerable<string> args)
    {
        var paths = new List<string>();

        foreach (var raw in args)
        {
            var arg = raw;

            if (arg.Length == 0 || arg.StartsWith('-'))
                continue;

            // "yafm file:///home/me/Downloads" is the same as passing the path itself.
            if (arg.StartsWith("file://", StringComparison.OrdinalIgnoreCase)
                && Uri.TryCreate(arg, UriKind.Absolute, out var file) && file.IsFile)
                arg = file.LocalPath;

            // yafm:// links arrive as the only argument when the shell opens one; the interface
            // knows how to parse them, so they are passed through untouched.
            if (arg.StartsWith(Constants.ViewScheme, StringComparison.OrdinalIgnoreCase))
            {
                paths.Add(arg);
                continue;
            }

            var full = Try.Run(() => Path.GetFullPath(arg)).GetOrNull();
            if (full is null || paths.Contains(full, StringComparer.OrdinalIgnoreCase))
                continue;

            if (Directory.Exists(full))
                paths.Add(full);
            else if (File.Exists(full) && Path.GetDirectoryName(full) is { } directory)
                // An archive is shown as its own folder; anything else opens where it lives.
                paths.Add(Archives.IsArchive(full) ? full : directory);
            else
                Log.Warning("Ignoring {Arg}: no such file or folder", arg);
        }

        return paths;
    }

    /// <summary>
    ///     Starts the tray icon and records whether it exists, so closing the window only hides it when
    ///     there is really something to restore it from.
    /// </summary>
    private static void StartTray(ITrayIcon tray)
    {
        if (!OperatingSystem.IsLinux())
        {
            WindowManager.Instance.CloseToTray = tray.Start();
            return;
        }

        StartLinuxTrayWhenReady(tray);
    }

    /// <summary>
    ///     On GTK the tray can only be built on the UI thread and only once the toolkit has a display
    ///     connection, which appears when the message loop starts. libayatana-appindicator aborts the
    ///     process if it is asked any earlier, so it waits for the toolkit to report ready.
    /// </summary>
    [SupportedOSPlatform("linux")]
    private static void StartLinuxTrayWhenReady(ITrayIcon tray) =>
        _ = Task.Run(async () =>
        {
            for (var attempt = 0; attempt < 100 && !TrayIconFactory.IsToolkitReady; attempt++)
                await Task.Delay(100);

            WindowManager.Instance.RunOnMainWindow(() => { WindowManager.Instance.CloseToTray = tray.Start(); });
        });

    /// <summary>The platform's tray icon, or a no-op stand-in when there is none.</summary>
    private static ITrayIcon CreateTray(string? iconPath)
    {
        var manager = WindowManager.Instance;

        return TrayIconFactory.CreateStandard(
            Constants.Name,
            Constants.WindowTitle,
            iconPath,
            Localization.Get("Open"),
            Localization.Get("Settings"),
            Localization.Get("Exit"),
            () => manager.ShowMainWindow(),
            () => manager.ShowMainWindow($"{Constants.ViewScheme}settings"),
            manager.Exit,
            manager.ReloadWebView,
            Localization.Get("Reload interface"));
    }
}
