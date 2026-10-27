using System.Drawing;
using Photino.NET;
using YetAnotherFileManager.Extensions;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Utils;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Owns the Photino window and the message loop. The interface runs in one window for now; extra
///     windows (a preview pane, a properties sheet) can follow the same pattern later.
/// </summary>
internal sealed class WindowManager : Singleton<WindowManager>
{
    /// <summary>
    ///     Per-app web view data folder. On Windows, Photino defaults to a WebView2 folder shared by
    ///     every Photino app, which breaks when another app holds it, so keep ours separate.
    /// </summary>
    private static readonly string WebViewDataPath = Path.Combine(
        Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), Constants.Name, "webview");

    private PhotinoWindow? _mainWindow;

    /// <summary>Address the window loads the interface from, set before the window is created.</summary>
    public string AppUrl { get; set; } = "";

    /// <summary>Raised once the window's native handle exists (the message loop is about to start).</summary>
    public event Action? MainWindowCreated;

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
            .SetSize(new Size(1280, 800))
            .SetMinSize(860, 520)
            .SetContextMenuEnabled(false)
            .RegisterWebMessageReceivedHandler((sender, message) =>
                _ = NativeBridge.HandleMessageAsync(sender as PhotinoWindow, message));

        window.RegisterWindowCreatedHandler((_, _) => MainWindowCreated?.Invoke());

        window.Load(AppUrl);
        _mainWindow = window;
    }

    /// <summary>Starts the message loop; blocks until the window is closed.</summary>
    public void Run() => _mainWindow?.WaitForClose();

    public void Exit() => _mainWindow?.Close();

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
