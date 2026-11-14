using System.Diagnostics;
using Photino.NET;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Hosting;
using PhotinoNetUtils.Interop;
using PhotinoNetUtils.Messaging;
using PhotinoNetUtils.Platform;
using PhotinoNetUtils.Services;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Interop;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Owns the Photino window and the message loop: creation, hiding to the tray and bringing it
///     back. The interface runs in one window for now; extra windows (a preview pane, a properties
///     sheet) can follow the same pattern later.
/// </summary>
[Singleton]
internal partial class WindowManager
{
    /// <summary>Paths that arrived before the interface was listening for navigation.</summary>
    private readonly List<(string Path, bool Startup)> _pendingPaths = [];

    /// <summary>Launch paths, re-sent on every ready until the interface acknowledges them.</summary>
    private readonly List<string> _startupPaths = [];

    private bool _allowClose;

    /// <summary>Set when the window should stay hidden until its web view has rendered.</summary>
    private bool _hideWhenRendered;

    private PhotinoWindow? _mainWindow;

    /// <summary>Whether the interface has reported in; before that, messages crash the web view.</summary>
    private bool _mainWindowReady;

    private WebViewRecovery? _webViewRecovery;

    private WindowManager()
    {
        WebViewEvents.Ready += OnWebViewReady;
    }

    /// <summary>
    ///     A picker is a second process of this app. Sharing the main window's web view folder makes
    ///     the second window stay blank, so pickers get a profile of their own; reusing it keeps the
    ///     window opening quickly after the first run.
    /// </summary>
    internal static string PickerWebViewDataPath =>
        Path.Combine(Constants.DataDirectory, "webview-picker");

    /// <summary>
    ///     Set only in a command line pick run. The interface answers <c>pick.submit</c> or
    ///     <c>pick.cancel</c>, this instance writes the result, and the window closes.
    /// </summary>
    public PickerOptions? Picker { get; set; }

    /// <summary>
    ///     Whether the interface has to paint the window's rounded corners, because the platform leaves
    ///     an undecorated window without a frame (Linux).
    /// </summary>
    public bool DrawsWindowCorners { get; private set; }

    /// <summary>Address the window loads the interface from, set before the window is created.</summary>
    public string AppUrl { get; set; } = "";

    /// <summary>Whether the window is shown at startup instead of hiding to the tray.</summary>
    public bool ShowMainWindowOnStartup { get; set; } = true;

    /// <summary>Path to the extracted icon for the window, or null to keep the default.</summary>
    public string? IconPath { get; set; }

    /// <summary>
    ///     Whether closing the window hides it. Set once the tray reports whether it was really
    ///     created, so a missing tray can never leave the window hidden with no way back.
    /// </summary>
    public bool CloseToTray { get; set; }

    /// <summary>The main window's native handle, or zero before the window exists.</summary>
    public IntPtr WindowHandle => _mainWindow?.WindowHandle ?? IntPtr.Zero;

    /// <summary>Raised once the window's native handle exists (the message loop is about to start).</summary>
    public event Action? MainWindowCreated;

    /// <summary>
    ///     Runs when the interface reports <c>app.ready</c>: the window commands and the events the
    ///     library queues are its business, this only catches up on the paths that arrived early.
    /// </summary>
    private void OnWebViewReady()
    {
        _mainWindowReady = true;

        // A path that arrived while a tray launch was still rendering is a request to see the
        // window, so it must not be hidden right after the navigation is queued.
        var showForPath = _pendingPaths.Count > 0 || _startupPaths.Count > 0;
        // Flushing sends a web message, which has to happen on the UI thread.
        RunOnMainWindow(FlushPendingPaths);

        if (showForPath)
            RunOnMainWindow(() => Show(_mainWindow!));
        else
            HideWhenRendered();
    }

    [NativeMessage("app.navigate.done")]
    private NativeResponse? NavigateDone(NativeContext context)
    {
        var done = context.Payload<PathPayload>()?.Path;
        Log.Information("Startup path acknowledged: {Path}", done ?? "(all)");

        if (done is { Length: > 0 })
            _startupPaths.RemoveAll(path => string.Equals(path, done, StringComparison.OrdinalIgnoreCase));
        else
            _startupPaths.Clear();

        return null;
    }

    [NativeMessage("pick.submit")]
    private async Task<NativeResponse?> SubmitPickAsync(NativeContext context)
    {
        if (Picker is { } picker)
        {
            await CliPicker.CompleteAsync(picker, context.Payload<PickResultRequest>()?.Paths ?? []);
            Exit();
        }

        return null;
    }

    [NativeMessage("pick.cancel")]
    private NativeResponse? CancelPick(NativeContext context)
    {
        if (Picker is { } cancelled)
        {
            CliPicker.Cancel(cancelled);
            Exit();
        }

        return null;
    }

    [NativeMessage("pick.open")]
    private async Task<NativeResponse?> OpenPickAsync(NativeContext context) =>
        context.Reply("pick.open.result", await OpenPickerAsync(context.Payload<PickOpenRequest>()));

    /// <summary>
    ///     Sends an event to the interface. The library holds it until the page reports ready and
    ///     logs a failure: a view may be gone, and that is not this service's problem.
    /// </summary>
    public void Notify(string type, object? data) => WebViewEvents.Notify(type, data);

    public void CreateMainWindow(
        string title = Constants.WindowTitle,
        int width = 1280,
        int height = 800,
        int minWidth = 860,
        int minHeight = 520)
    {
        // The shared helper drops the profile when this build is not the one that filled it, so an
        // upgrade never keeps serving the previous interface from the web view's own cache. A
        // picker keeps its own folder and has no marker.
        var webViewPath = Picker is null
            ? WebViewCache.Prepare(Constants.DataDirectory, AppInfoService.BuildToken)
            : PickerWebViewDataPath;

        var window = new PhotinoWindow()
            // The native layer prints every property setter and message it handles. That is useful
            // while debugging, but it floods the log with JSON payloads in a release build.
            .SetLogVerbosity(Constants.IsDebugMode && Picker is null ? 3 : 0)
            .SetTitle(title)
            .SetTemporaryFilesPath(webViewPath)
            // Photino drops a Start Menu shortcut for toast registration. That is wanted for the
            // main window, but a transient picker must not leave one named after its title.
            .SetNotificationsEnabled(Picker is null)
            .SetUseOsDefaultSize(false)
            .SetUseOsDefaultLocation(false)
            .SetSize(new(width, height))
            .SetMinSize(minWidth, minHeight)
            .Center()
            // Starting hidden keeps the window in the task switcher for a moment instead of
            // flashing on screen; the interface hides it for good once it has rendered.
            .SetMinimized(!ShowMainWindowOnStartup)
            .SetContextMenuEnabled(false)
            .RegisterWebMessageReceivedHandler((sender, message) =>
                _ = NativeBridge.HandleMessageAsync(sender as PhotinoWindow, message))
            .RegisterWindowClosingHandler((_, _) =>
            {
                // A picker window is the whole process: closing it means the caller got no result.
                if (Picker is not null && !_allowClose)
                    Environment.ExitCode = 1;

                // Stay resident: closing the window hides it instead of shutting down.
                if (_allowClose || !CloseToTray)
                {
                    Log.Information("Main window closing (allowed)");
                    return false;
                }

                Log.Information("Main window closing -> hiding to the tray");
                HideMainWindow();
                return true;
            });

        if (IconPath is { Length: > 0 } icon)
            window.SetIconFile(icon);

        // The interface draws its own title bar. On Windows the native frame stays and WindowFrame
        // hides its non-client area, because a chromeless popup is a window no shell — or tiling
        // window manager — will arrange. Elsewhere chromeless is still the simplest way.
        if (!OperatingSystem.IsWindows())
            window.SetChromeless(true);

        window.RegisterWindowCreatedHandler((_, _) =>
        {
            if (OperatingSystem.IsWindows())
            {
                WindowFrame.RemoveTitleBar(window.WindowHandle);

                // Photino registers for notifications by writing a Start Menu shortcut named after
                // the executable; the installer writes one named after the app, so the copy is
                // renamed or removed here and only one entry stays.
                if (Picker is null)
                    StartMenuShortcut.Adopt(Constants.WindowTitle, Constants.Name);
            }
            else if (OperatingSystem.IsLinux())
            {
                LinuxWindow.UseClientSideFrame(window.Title);
                DrawsWindowCorners = LinuxWindow.EnableTransparency(window.Title);

                // WebKitGTK drops the mouse's side buttons before the page sees them; the picker
                // and the main window each get their own event name.
                var navigation = Picker is null ? "app.navigation" : "picker.navigation";
                LinuxMouseButtons.Attach(window.Title,
                    direction => Notify(navigation, new NavigationPayload(direction)));
            }

            if (!ShowMainWindowOnStartup)
            {
                _hideWhenRendered = true;
                Log.Information("Starting hidden; the window stays minimised until its interface has rendered");
                _ = Task.Delay(TimeSpan.FromSeconds(10)).ContinueWith(_ => HideWhenRendered());
            }

            MainWindowCreated?.Invoke();
        });

        _webViewRecovery = WebViewRecovery.Attach(window, AppUrl);
        WebViewEvents.Attach(window);
        window.Load(AppUrl);
        _mainWindow = window;
    }

    /// <summary>Starts the message loop; blocks until the window is closed for good.</summary>
    public void Run() => _mainWindow?.WaitForClose();

    /// <summary>
    ///     Shows the main window, restoring it first when it is hidden or minimised, and optionally
    ///     opens a location there (the tray's Settings entry, for instance).
    /// </summary>
    public void ShowMainWindow(string? path = null)
    {
        if (path is { Length: > 0 })
        {
            ShowPath(path);
            return;
        }

        Log.Information("Showing the main window");
        RunOnMainWindow(() => Show(_mainWindow!));
    }

    public void HideMainWindow()
    {
        Log.Information("Hiding the main window");
        RunOnMainWindow(() => Hide(_mainWindow!));
    }

    /// <summary>
    ///     Opens a folder, or the folder containing a file, in the running window. Paths that arrive
    ///     before the interface is listening are queued and delivered once it reports ready.
    /// </summary>
    /// <param name="path">Folder to show.</param>
    /// <param name="startup">
    ///     True for this launch's own command line, which may take over the untouched first tab.
    ///     A forwarded path always opens a new one.
    /// </param>
    public void ShowPath(string path, bool startup = false)
    {
        if (string.IsNullOrWhiteSpace(path))
            return;

        Log.Information("Opening {Path}", path);

        if (startup && !_startupPaths.Contains(path, StringComparer.OrdinalIgnoreCase))
            _startupPaths.Add(path);

        // Before the first render there is no UI thread to invoke on yet: the window is about to be
        // shown anyway, and the pending paths are flushed when the interface reports ready.
        if (!_mainWindowReady)
        {
            _pendingPaths.Add((path, startup));
            return;
        }

        RunOnMainWindow(() =>
        {
            Show(_mainWindow!);
            SendNavigation(path, startup);
        });
    }

    /// <summary>Runs an action on the UI thread, once the message loop is running.</summary>
    public void RunOnMainWindow(Action action) => _mainWindow?.Invoke(action);

    public void Exit()
    {
        _allowClose = true;
        _webViewRecovery?.Dispose();
        WebViewEvents.Detach();
        RunOnMainWindow(() => _mainWindow?.Close());
    }

    /// <summary>Reloads the main UI from the tray's recovery action.</summary>
    public void ReloadWebView() => _webViewRecovery?.Reload();

    /// <summary>
    ///     Hides the window once its interface has reported in. A window hidden before the web view
    ///     renders can come back blank, which is why the native window starts minimised and only
    ///     leaves the taskbar here (or after the ten-second fallback).
    /// </summary>
    private void HideWhenRendered()
    {
        if (!_hideWhenRendered || _mainWindow is not { } window)
            return;

        _hideWhenRendered = false;
        RunOnMainWindow(() => Hide(window));
    }

    private void FlushPendingPaths()
    {
        if (_pendingPaths.Count > 0)
        {
            var pending = _pendingPaths.ToArray();
            _pendingPaths.Clear();

            foreach (var (path, startup) in pending)
                SendNavigation(path, startup);
            return;
        }

        // React's development StrictMode mounts effects twice: the first ready can race the listener
        // unsubscribing, losing its navigation. Keep sending the launch paths until the interface
        // acknowledges them; it ignores paths it already opened.
        foreach (var path in _startupPaths.ToArray())
            SendNavigation(path, true);
    }

    private void SendNavigation(string path, bool startup)
    {
        Log.Information("Navigating to {Path} (startup: {Startup})", path, startup);
        var json = NativeBridge.SerializeEvent("app.navigate", new NavigatePayload(path, startup));

        // Sending to a web view that is still loading aborts the process; the page asks for its
        // listing itself when it mounts, so nothing is lost by waiting.
        Try.Run(() => _mainWindow?.SendWebMessage(json))
            .OnFailure(ex => Log.Warning(ex, "Failed to send navigation"));
    }

    /// <summary>
    ///     Runs the standalone picker as its own process and waits for what it returns. The window
    ///     writes the chosen paths to a temporary file, so the caller needs no console.
    /// </summary>
    private static async Task<PickOpenPayload> OpenPickerAsync(PickOpenRequest? request)
    {
        if (request is null || Environment.ProcessPath is not { Length: > 0 } executable)
            return new([]);

        var output = Path.Combine(Path.GetTempPath(), $"yafm-pick-{Guid.NewGuid():N}.txt");
        var start = new ProcessStartInfo(executable)
        {
            UseShellExecute = false,
            CreateNoWindow = true
        };
        start.ArgumentList.Add(request.Mode == "file" ? Constants.PickFileArgument : Constants.PickFolderArgument);

        if (request.Initial is { Length: > 0 } initial)
        {
            start.ArgumentList.Add(Constants.PickInitialArgument);
            start.ArgumentList.Add(initial);
        }

        if (request.Extensions is { Count: > 0 } extensions)
        {
            start.ArgumentList.Add(Constants.PickFilterArgument);
            start.ArgumentList.Add(string.Join(';', extensions));
        }

        start.ArgumentList.Add(Constants.PickOutputArgument);
        start.ArgumentList.Add(output);

        try
        {
            await Process.RunAsync(start);

            if (!File.Exists(output))
                return new([]);

            var paths = await File.ReadAllLinesAsync(output);
            return new(paths.Where(path => path.Length > 0).ToList());
        }
        finally
        {
            Try.Run(() => File.Delete(output));
        }
    }

    private void Show(PhotinoWindow window)
    {
        if (OperatingSystem.IsWindows())
        {
            var handle = window.WindowHandle;
            if (handle == IntPtr.Zero)
                return;

            NativeMethods.ShowWindow(handle, NativeMethods.SwRestore);
            NativeMethods.SetForegroundWindow(handle);
            return;
        }

        if (OperatingSystem.IsLinux())
        {
            if (LinuxGtk.Present(window.Title))
                return;

            window.SetMinimized(false);
            window.SetTopMost(true);
        }
    }

    private void Hide(PhotinoWindow window)
    {
        if (OperatingSystem.IsWindows())
        {
            var handle = window.WindowHandle;
            if (handle != IntPtr.Zero)
                NativeMethods.ShowWindow(handle, NativeMethods.SwHide);
            return;
        }

        // Minimising leaves the window in the taskbar; hiding it outright does not.
        if (OperatingSystem.IsLinux() && !LinuxGtk.Hide(window.Title))
            window.SetMinimized(true);
    }
}