using System.Reflection;
using JetBrains.Annotations;
using PhotinoNetUtils;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Localization;
using PhotinoNetUtils.Messaging;
using PhotinoNetUtils.Platform;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;
using AppInfoOptions = PhotinoNetUtils.Services.AppInfoOptions;
using SharedAppInfoService = PhotinoNetUtils.Services.AppInfoService;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The build this copy is: version, platform and cache token. The <c>app.info</c> answer itself
///     comes from the shared service, which only needs this app's assembly and log folder.
/// </summary>
[Singleton]
internal partial class AppInfoService
{
    private static readonly Assembly Build = typeof(AppInfoService).Assembly;

    /// <summary>The version declared in the csproj (<c>&lt;Version&gt;</c>).</summary>
    [PublicAPI] public static readonly string Version = BuildInfo.VersionOf(Build);

    /// <summary>Lower-case platform id, so the UI can adapt platform-specific actions.</summary>
    [PublicAPI] public static readonly string Platform = BuildInfo.Platform;

    /// <summary>True for a development build, so the interface can say it in the status bar.</summary>
#if DEBUG
    [PublicAPI] public const bool IsDebug = true;
#else
    [PublicAPI] public const bool IsDebug = false;
#endif

    /// <summary>
    ///     Changes whenever this build does. The interface is always served from the same address, so
    ///     this is what tells the web view that what it cached belongs to an older build.
    /// </summary>
    [PublicAPI] public static readonly string BuildToken = BuildInfo.BuildTokenFor(Build);

    /// <summary>Keeps the shared handler subscribed for as long as the process runs.</summary>
    private readonly SharedAppInfoService _info = new(new(
        Build, LogDirectory(), IsDebug, () => WindowManager.Instance.DrawsWindowCorners));

    private AppInfoService()
    {
    }

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
    [NativeMessage("system.openUrl")]
    private static NativeResponse OpenUrl(NativeContext context)
    {
        var url = context.Payload<UrlPayload>()?.Url;

        if (string.IsNullOrWhiteSpace(url))
            return context.Fail("system.openUrl.result", Localization.Get("No URL was given."));

        var opened = Try.Run(() => SystemLauncher.Open(url))
            .OnFailure(exception => Serilog.Log.Warning(exception, "Could not open {Url}", url))
            .IsSuccess;

        return opened
            ? context.Reply("system.openUrl.result", new OkPayload())
            : context.Fail("system.openUrl.result", Localization.Get("Could not open the link."));
    }
}
