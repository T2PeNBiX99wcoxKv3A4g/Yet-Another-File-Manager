using System.Diagnostics;
using JetBrains.Annotations;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Messaging;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>Answers the <c>app.info</c> message so the UI can show the build version.</summary>
internal sealed class AppInfoService : Singleton<AppInfoService>
{
    /// <summary>The version declared in the csproj (<c>&lt;Version&gt;</c>).</summary>
    [PublicAPI] public static readonly string Version =
        typeof(AppInfoService).Assembly.GetName().Version?.ToString(3) ?? "0.0.0";

    /// <summary>Lower-case platform id, so the UI can adapt platform-specific actions.</summary>
    [PublicAPI] public static readonly string Platform =
        OperatingSystem.IsWindows() ? "windows" :
        OperatingSystem.IsLinux() ? "linux" : "unknown";

    /// <summary>
    ///     Changes whenever this build does. The interface is always served from the same address, so
    ///     this is what tells the web view that what it cached belongs to an older build.
    /// </summary>
    [PublicAPI] public static readonly string BuildToken = ResolveBuildToken();

    public AppInfoService() => NativeBridge.MessageReceived += HandleMessageAsync;

    private static Task<NativeResponse?> HandleMessageAsync(NativeContext context) =>
        Task.FromResult(context.Request.Type switch
        {
            "app.info" => context.Reply("app.info.result",
                new AppInfoPayload(Version, Platform, WindowManager.Instance.DrawsWindowCorners)),
            "app.openUrl" => OpenUrl(context),
            _ => (NativeResponse?)null
        });

    /// <summary>Hands a URL to the shell, so the release page opens in the user's browser.</summary>
    private static NativeResponse OpenUrl(NativeContext context)
    {
        var url = context.Payload<UrlPayload>()?.Url;

        if (string.IsNullOrWhiteSpace(url))
            return context.Fail("app.openUrl.result", "No URL was given.");

        var opened = Try.Run(() => Process.Start(new ProcessStartInfo(url) { UseShellExecute = true }) is not null)
            .GetOrElse(exception =>
            {
                Serilog.Log.Warning(exception, "Could not open {Url}", url);
                return false;
            });

        return opened
            ? context.Reply("app.openUrl.result", new OkPayload())
            : context.Fail("app.openUrl.result", "Could not open the link.");
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