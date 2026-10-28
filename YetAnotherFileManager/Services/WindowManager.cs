using Photino.NET;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Interop;
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
    private static readonly string WebViewDataPath = Path.Combine(
        Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), Constants.Name, "webview");

    private bool _allowClose;
    private PhotinoWindow? _mainWindow;

    /// <summary>Whether the interface has reported in; before that, messages crash the web view.</summary>
    private bool _mainWindowReady;

    /// <summary>A path that arrived before the interface was listening for navigation.</summary>
    private string? _pendingPath;

    public WindowManager() => NativeBridge.MessageReceived += HandleMessageAsync;

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

    private static Task<NativeResponse?> HandleMessageAsync(NativeContext context)
    {
        if (context.Request.Type == "app.ready")
        {
            var manager = Instance;
            manager._mainWindowReady = true;
            manager.FlushPendingPath();
        }

        return Task.FromResult<NativeResponse?>(null);
    }

    public void CreateMainWindow()
    {
        PrepareWebViewData();

        var window = new PhotinoWindow()
            // The native layer prints every property setter and message it handles. That is useful
            // while debugging, but it floods the log with JSON payloads in a release build.
            .SetLogVerbosity(Constants.IsDebugMode ? 3 : 0)
            .SetTitle(Constants.WindowTitle)
            .SetTemporaryFilesPath(WebViewDataPath)
            .SetUseOsDefaultSize(false)
            .SetSize(new(1280, 800))
            .SetMinSize(860, 520)
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

        window.RegisterWindowCreatedHandler((_, _) => MainWindowCreated?.Invoke());

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
    public void ShowPath(string path)
    {
        if (string.IsNullOrWhiteSpace(path))
            return;

        Log.Information("Opening {Path}", path);

        // Before the first render there is no UI thread to invoke on yet: the window is about to be
        // shown anyway, and the pending path is flushed when the interface reports ready.
        if (!_mainWindowReady)
        {
            _pendingPath = path;
            return;
        }

        RunOnMainWindow(() =>
        {
            Show(_mainWindow!);
            SendNavigation(path);
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
        if (_pendingPath is not { } path)
            return;

        _pendingPath = null;
        SendNavigation(path);
    }

    private void SendNavigation(string path)
    {
        var json = NativeProtocol.SerializeEvent("app.navigate", new NavigatePayload(path));

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
    private void PrepareWebViewData()
    {
        var marker = Path.Combine(Path.GetDirectoryName(WebViewDataPath)!, "webview.build");

        Try.Run(() =>
        {
            if (File.Exists(marker) && File.ReadAllText(marker) != AppInfoService.BuildToken)
            {
                Log.Information("This is a different build; clearing the web view's cache");
                Directory.Delete(WebViewDataPath, true);
            }

            File.WriteAllText(marker, AppInfoService.BuildToken);
        }).OnFailure(ex => Log.Warning(ex, "Failed to prepare the web view's data folder"));
    }
}