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

    private bool _allowClose;
    private PhotinoWindow? _mainWindow;

    /// <summary>Whether the interface has reported in; before that, messages crash the web view.</summary>
    private bool _mainWindowReady;

    /// <summary>A path that arrived before the interface was listening for navigation.</summary>
    private (string Path, bool Startup)? _pendingPath;

    public WindowManager() => NativeBridge.MessageReceived += HandleMessageAsync;

    /// <summary>
    ///     Whether the interface has to paint the window's rounded corners, because the platform leaves
    ///     an undecorated window without a frame (Linux).
    /// </summary>
    public bool DrawsWindowCorners { get; private set; }

    /// <summary>Address the window loads the interface from, set before the window is created.</summary>
    public string AppUrl { get; set; } = "";

    /// <summary>Path to the extracted icon for the window, or null to keep the default.</summary>
    public string? IconPath { get; set; }

    /// <summary>
    ///     Whether closing the window hides it. Set once the tray reports whether it was really
    ///     created, so a missing tray can never leave the window hidden with no way back.
    /// </summary>
    public bool CloseToTray { get; set; }

    /// <summary>Raised once the window's native handle exists (the message loop is about to start).</summary>
    public event Action? MainWindowCreated;

    private Task<NativeResponse?> HandleMessageAsync(NativeContext context)
    {
        switch (context.Request.Type)
        {
            case "app.ready":
                _mainWindowReady = true;
                // Flushing sends a web message, which has to happen on the UI thread.
                RunOnMainWindow(FlushPendingPath);
                break;

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

            case "app.pickIcon":
                return Pick(context, () =>
                    _mainWindow?.ShowOpenFile("Choose an icon", "", false,
                        [
                            ("Images", ["*.png", "*.ico", "*.svg", "*.jpg", "*.jpeg", "*.webp"]),
                            ("All files", ["*.*"])
                        ])
                        ?.FirstOrDefault());

            case "app.pickFolder":
                return Pick(context, () => _mainWindow?.ShowOpenFolder("Choose a folder", "")
                    ?.FirstOrDefault());
        }

        return Task.FromResult<NativeResponse?>(null);
    }

    /// <summary>Runs a native dialog on the UI thread and answers with the chosen path.</summary>
    private Task<NativeResponse?> Pick(NativeContext context, Func<string?> pick)
    {
        var completion = new TaskCompletionSource<NativeResponse?>();

        RunOnMainWindow(() =>
            completion.SetResult(context.Reply("app.pick.result",
                new PathPayload(Try.Run(pick).GetOrNull()))));

        return completion.Task;
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

    public void CreateMainWindow()
    {
        // One startup-only wait: the message loop has not started yet, and the web view needs the
        // cache decision before it is created.
        PrepareWebViewDataAsync().GetAwaiter().GetResult();

        var window = new PhotinoWindow()
            // The native layer prints every property setter and message it handles. That is useful
            // while debugging, but it floods the log with JSON payloads in a release build.
            .SetLogVerbosity(Constants.IsDebugMode ? 3 : 0)
            .SetTitle(Constants.WindowTitle)
            .SetTemporaryFilesPath(WebViewDataPath)
            .SetUseOsDefaultSize(false)
            .SetUseOsDefaultLocation(false)
            .SetSize(new(1280, 800))
            .SetMinSize(860, 520)
            .Center()
            .SetContextMenuEnabled(false)
            .RegisterWebMessageReceivedHandler((sender, message) =>
                _ = NativeBridge.HandleMessageAsync(sender as PhotinoWindow, message))
            .RegisterWindowClosingHandler((_, _) =>
            {
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

            MainWindowCreated?.Invoke();
        });

        window.Load(AppUrl);
        _mainWindow = window;
    }

    /// <summary>Starts the message loop; blocks until the window is closed for good.</summary>
    public void Run() => _mainWindow?.WaitForClose();

    /// <summary>Shows the main window, restoring it first when it is hidden or minimised.</summary>
    public void ShowMainWindow()
    {
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

        // Before the first render there is no UI thread to invoke on yet: the window is about to be
        // shown anyway, and the pending path is flushed when the interface reports ready.
        if (!_mainWindowReady)
        {
            _pendingPath = (path, startup);
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
        RunOnMainWindow(() => _mainWindow?.Close());
    }

    private void FlushPendingPath()
    {
        if (_pendingPath is not { } pending)
            return;

        _pendingPath = null;
        SendNavigation(pending.Path, pending.Startup);
    }

    private void SendNavigation(string path, bool startup)
    {
        var json = NativeBridge.SerializeEvent("app.navigate", new NavigatePayload(path, startup));

        // Sending to a web view that is still loading aborts the process; the page asks for its
        // listing itself when it mounts, so nothing is lost by waiting.
        Try.Run(() => _mainWindow?.SendWebMessage(json))
            .OnFailure(ex => Log.Warning(ex, "Failed to send navigation"));
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
                await Task.Run(() => Directory.Delete(WebViewDataPath, true));
            }

            await File.WriteAllTextAsync(marker, AppInfoService.BuildToken);
        })).OnFailure(ex => Log.Warning(ex, "Failed to prepare the web view's data folder"));
    }
}