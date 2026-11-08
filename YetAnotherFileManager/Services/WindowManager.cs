using System.Diagnostics;
using Photino.NET;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Interop;
using PhotinoNetUtils.Messaging;
using PhotinoNetUtils.Platform;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Owns the Photino window and the message loop: creation, hiding to the tray and bringing it
///     back. The interface runs in one window for now; extra windows (a preview pane, a properties
///     sheet) can follow the same pattern later.
/// </summary>
internal sealed class WindowManager : Singleton<WindowManager>
{
    /// <summary>
    ///     Per-app web view data folder. On Windows, Photino defaults to a WebView2 folder shared by
    ///     every Photino app, which breaks when another app holds it, so keep ours separate.
    /// </summary>
    private static readonly string WebViewDataPath = Path.Combine(Constants.DataDirectory, "webview");

    /// <summary>
    ///     A picker is a second process of this app. Sharing the main window's web view folder makes
    ///     the second window stay blank, so pickers get a profile of their own; reusing it keeps the
    ///     window opening quickly after the first run.
    /// </summary>
    internal static string PickerWebViewDataPath =>
        Path.Combine(Constants.DataDirectory, "webview-picker");

    private bool _allowClose;
    private PhotinoWindow? _mainWindow;
    private PhotinoNetUtils.Services.WebViewRecovery? _webViewRecovery;

    /// <summary>Whether the interface has reported in; before that, messages crash the web view.</summary>
    private bool _mainWindowReady;

    /// <summary>Set when the window should stay hidden until its web view has rendered.</summary>
    private bool _hideWhenRendered;

    /// <summary>Paths that arrived before the interface was listening for navigation.</summary>
    private readonly List<(string Path, bool Startup)> _pendingPaths = [];

    /// <summary>Launch paths, re-sent on every ready until the interface acknowledges them.</summary>
    private readonly List<string> _startupPaths = [];

    /// <summary>
    ///     Set only in a command line pick run. The interface answers <c>pick.submit</c> or
    ///     <c>pick.cancel</c>, this instance writes the result, and the window closes.
    /// </summary>
    public PickerOptions? Picker { get; set; }

    public WindowManager() => NativeBridge.MessageReceived += HandleMessageAsync;

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

    /// <summary>Raised once the window's native handle exists (the message loop is about to start).</summary>
    public event Action? MainWindowCreated;

    private async Task<NativeResponse?> HandleMessageAsync(NativeContext context)
    {
        switch (context.Request.Type)
        {
            case "app.ready":
                _mainWindowReady = true;
                // Flushing sends a web message, which has to happen on the UI thread.
                RunOnMainWindow(FlushPendingPaths);
                HideWhenRendered();
                break;

            case "app.navigate.done":
                var done = context.Payload<PathPayload>()?.Path;
                Log.Information("Startup path acknowledged: {Path}", done ?? "(all)");
                if (done is { Length: > 0 })
                    _startupPaths.RemoveAll(path => string.Equals(path, done, StringComparison.OrdinalIgnoreCase));
                else
                    _startupPaths.Clear();
                break;

            case "pick.submit":
                if (Picker is { } picker)
                {
                    await CliPicker.CompleteAsync(picker, context.Payload<PickResultRequest>()?.Paths ?? []);
                    Exit();
                }
                break;

            case "pick.cancel":
                if (Picker is { } cancelled)
                {
                    CliPicker.Cancel(cancelled);
                    Exit();
                }
                break;

            case "pick.open":
                return context.Reply("pick.open.result", await OpenPickerAsync(context.Payload<PickOpenRequest>()));

            case "window.minimize":
                RunOnMainWindow(() => _mainWindow?.SetMinimized(true));
                break;

            case "window.toggleMaximize":
                RunOnMainWindow(ToggleMaximize);
                break;

            case "window.close":
                RunOnMainWindow(() => _mainWindow?.Close());
                break;

            case "window.drag":
                RunOnMainWindow(() =>
                {
                    if (_mainWindow is not { } window)
                        return;

                    if (OperatingSystem.IsWindows())
                        WindowDrag.Begin(window.WindowHandle);
                    else if (OperatingSystem.IsLinux())
                        LinuxWindow.BeginDrag(window.Title);
                });
                break;

            case "window.resize":
                RunOnMainWindow(() =>
                {
                    if (_mainWindow is not { } window)
                        return;

                    var direction = context.Payload<WindowResizeRequest>()?.Direction ?? "";

                    if (OperatingSystem.IsWindows())
                        WindowResize.Begin(window.WindowHandle, direction);
                    else if (OperatingSystem.IsLinux())
                        LinuxWindow.BeginResize(window.Title, direction);
                });
                break;
        }

        return null;
    }

    /// <summary>Sends an event to the interface. Failures are only logged: a view may be gone.</summary>
    public void Notify(string type, object? data) =>
        Try.Run(() => _mainWindow?.SendWebMessage(NativeBridge.SerializeEvent(type, data)))
            .OnFailure(ex => Log.Warning(ex, "Failed to send {Type}", type));

    private void NotifyWindowState(bool maximized) =>
        Notify("window.state", new WindowStatePayload(maximized));

    private void ToggleMaximize()
    {
        if (_mainWindow is not { } window)
            return;

        if (OperatingSystem.IsWindows())
        {
            if (window.WindowHandle != IntPtr.Zero)
                NotifyWindowState(WindowZoom.Toggle(window.WindowHandle));

            return;
        }

        if (OperatingSystem.IsLinux())
        {
            NotifyWindowState(LinuxWindow.ToggleMaximize(window.Title));
            return;
        }

        var maximized = !window.Maximized;
        window.SetMaximized(maximized);
        NotifyWindowState(maximized);
    }

    public void CreateMainWindow(
        string title = Constants.WindowTitle,
        int width = 1280,
        int height = 800,
        int minWidth = 860,
        int minHeight = 520)
    {
        // One startup-only wait: the message loop has not started yet, and the web view needs the
        // cache decision before it is created. A picker keeps its own folder and has no marker.
        string webViewPath;
        if (Picker is null)
        {
            PrepareWebViewDataAsync().GetAwaiter().GetResult();
            webViewPath = WebViewDataPath;
        }
        else
        {
            webViewPath = PickerWebViewDataPath;
        }

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
                WindowFrame.RemoveTitleBar(window.WindowHandle);
            else if (OperatingSystem.IsLinux())
            {
                LinuxWindow.UseClientSideFrame(window.Title);
                DrawsWindowCorners = LinuxWindow.EnableTransparency(window.Title);
            }

            if (!ShowMainWindowOnStartup)
            {
                _hideWhenRendered = true;
                Log.Information("Starting hidden; the window stays minimised until its interface has rendered");
                _ = Task.Delay(TimeSpan.FromSeconds(10)).ContinueWith(_ => HideWhenRendered());
            }

            MainWindowCreated?.Invoke();
        });

        _webViewRecovery = PhotinoNetUtils.Services.WebViewRecovery.Attach(window, AppUrl);
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

    /// <summary>The main window's native handle, or zero before the window exists.</summary>
    public IntPtr WindowHandle => _mainWindow?.WindowHandle ?? IntPtr.Zero;

    public void Exit()
    {
        _allowClose = true;
        _webViewRecovery?.Dispose();
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
        var start = new ProcessStartInfo(executable) { UseShellExecute = false, CreateNoWindow = true };
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
            using var process = Try.Run(() => Process.Start(start)).GetOrNull();
            if (process is null)
                return new([]);

            await process.WaitForExitAsync();

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

    /// <summary>
    ///     Drops the web view's data folder when this build is not the one that filled it. The static
    ///     server advertises no caching policy, so a web view may keep serving the previous interface
    ///     from its own cache — indefinitely on some engines — and that cache would otherwise grow
    ///     with every upgrade. Only the profile folder goes; the marker that records the build lives
    ///     beside it.
    /// </summary>
    private async Task PrepareWebViewDataAsync()
    {
        var marker = Path.Combine(Path.GetDirectoryName(WebViewDataPath)!, "webview.build");

        (await Try.Run(async () =>
        {
            if (File.Exists(marker) && await File.ReadAllTextAsync(marker) != AppInfoService.BuildToken)
            {
                Log.Information("This is a different build; clearing the web view's cache");

                if (Directory.Exists(WebViewDataPath))
                    await Task.Run(() => Directory.Delete(WebViewDataPath, true));
            }

            await File.WriteAllTextAsync(marker, AppInfoService.BuildToken);
        })).OnFailure(ex => Log.Warning(ex, "Failed to prepare the web view's data folder"));
    }
}
