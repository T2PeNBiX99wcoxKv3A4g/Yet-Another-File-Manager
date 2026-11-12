using System.Diagnostics;
using JetBrains.Annotations;
using PhotinoNetUtils;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Localization;
using PhotinoNetUtils.Messaging;
using PhotinoNetUtils.Platform;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>Answers the <c>app.info</c> message so the UI can show the build version.</summary>
[Singleton]
internal partial class AppInfoService
{
    /// <summary>The version declared in the csproj (<c>&lt;Version&gt;</c>).</summary>
    [PublicAPI] public static readonly string Version =
        typeof(AppInfoService).Assembly.GetName().Version?.ToString(3) ?? "0.0.0";

    /// <summary>Lower-case platform id, so the UI can adapt platform-specific actions.</summary>
    [PublicAPI] public static readonly string Platform =
        OperatingSystem.IsWindows() ? "windows" :
        OperatingSystem.IsLinux() ? "linux" : "unknown";

    /// <summary>True for a development build, so the interface can say so in the status bar.</summary>
#if DEBUG
    [PublicAPI] public const bool IsDebug = true;
#else
    [PublicAPI] public const bool IsDebug = false;
#endif

    /// <summary>
    ///     Changes whenever this build does. The interface is always served from the same address, so
    ///     this is what tells the web view that what it cached belongs to an older build.
    /// </summary>
    [PublicAPI] public static readonly string BuildToken = ResolveBuildToken();

    private AppInfoService()
    {
    }

    [NativeMessage("app.info")]
    private NativeResponse Info(NativeContext context) =>
        context.Reply("app.info.result",
            new AppInfoPayload(Version, Platform, WindowManager.Instance.DrawsWindowCorners, LogDirectory(),
                IsDebug));

    [NativeMessage("app.fonts")]
    private static async Task<NativeResponse?> FontsAsync(NativeContext context) =>
        context.Reply("app.fonts.result", new FontsPayload(await FontCatalog.GetAsync()));

    /// <summary>The folder Serilog writes to; created so the settings page can always open it.</summary>
    [PublicAPI]
    public static string LogDirectory()
    {
        var directory = AppPaths.LogDirectory(Constants.Name);

        // A read-only or missing parent is reported by the folder view, not here.
        Try.Run(() => Directory.CreateDirectory(directory));

        return directory;
    }

    /// <summary>Hands a URL to the shell, so the release page opens in the user's browser.</summary>
    [NativeMessage("app.openUrl")]
    private static NativeResponse OpenUrl(NativeContext context)
    {
        var url = context.Payload<UrlPayload>()?.Url;

        if (string.IsNullOrWhiteSpace(url))
            return context.Fail("app.openUrl.result", Localization.Get("No URL was given."));

        var opened = Try.Run(() => SystemLauncher.Open(url))
            .OnFailure(exception => Serilog.Log.Warning(exception, "Could not open {Url}", url))
            .IsSuccess;

        return opened
            ? context.Reply("app.openUrl.result", new OkPayload())
            : context.Fail("app.openUrl.result", Localization.Get("Could not open the link."));
    }

    /// <summary>The executable's write time, which a replacement binary always changes.</summary>
    private static string ResolveBuildToken()
    {
        var executable = Environment.ProcessPath;
        return string.IsNullOrEmpty(executable)
            ? Version
            : File.GetLastWriteTimeUtc(executable).Ticks.ToString();
    }
}