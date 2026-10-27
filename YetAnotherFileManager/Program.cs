using JetBrains.Annotations;
using Serilog;
using YetAnotherFileManager.Services;

namespace YetAnotherFileManager;
//NOTE: To hide the console window, go to the project properties and change the Output Type to Windows Application.
// Or edit the .csproj file and change the <OutputType> tag from "WinExe" to "Exe".

internal static class Program
{
    /// <summary>
    ///     A directory we own, used as the host's content root. The static server creates a <c>wwwroot</c>
    ///     web root under it when missing, which without this would land next to the executable.
    /// </summary>
    [PublicAPI]
    private static string DataDirectory
    {
        get
        {
            var path = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), Constants.Name);
            Directory.CreateDirectory(path);
            return path;
        }
    }

    [STAThread]
    private static void Main(string[] args)
    {
        if (!OperatingSystem.IsWindows() && !OperatingSystem.IsLinux())
            throw new PlatformNotSupportedException("YetAnotherFileManager supports Windows and Linux.");

        // Main must stay synchronous: [STAThread] is ignored for an async entry point, and the
        // Photino message loop / WebView2 require an STA thread.
        Logging.Initialize();

        try
        {
            foreach (var arg in args)
                Log.Information("arg: {Arg}", arg);

#if !DEBUG
            // Kestrel binds to an OS-assigned port, so several Photino apps can run side by side
            // without racing for the default 8000. The content root is a folder we own, which keeps
            // the web root out of the executable's directory.
            using var staticServer = StaticServer.Start(DataDirectory);
            var appUrl = staticServer.AppUrl;
#else
            // A Debug build always talks to the Vite dev server, which is where hot reload lives.
            const string appUrl = "http://127.0.0.1:3000";
#endif

            Log.Information("Serving React app at {AppUrl}", appUrl);

            // Touching each singleton constructs it, which is what registers its message handlers.
            _ = AppInfoService.Instance;
            _ = FileSystemService.Instance;

            var manager = WindowManager.Instance;
            manager.AppUrl = appUrl;
            manager.CreateMainWindow();
            manager.Run();

            Log.Information("Exiting");
        }
        finally
        {
            Logging.Shutdown();
        }
    }
}
