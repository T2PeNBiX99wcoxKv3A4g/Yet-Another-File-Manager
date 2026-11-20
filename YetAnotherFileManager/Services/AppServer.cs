using Microsoft.AspNetCore.Builder;
using PhotinoNetUtils.Hosting;
using PhotinoNetUtils.Utils;
using Serilog;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The one local server this window talks to: the built interface in a release build, and the
///     data routes in both builds. A debug build loads the interface from the Vite dev server, so the
///     same host is still needed there for thumbnails, media and listings.
/// </summary>
internal static class AppServer
{
    /// <summary>The prefix for this run's data routes, or empty before the server started.</summary>
    public static string DataUrl { get; private set; } = "";

    public static StaticServer Start()
    {
        var server = StaticServer.Start(
            Constants.DataDirectory,
            typeof(AppServer).Assembly,
            "Resources/wwwroot",
            AppRoutes.Map,
#if DEBUG
            // The page comes from Vite in this build, so a fetch from it is a cross-origin request.
            // Images and media need no CORS; only the routes read through fetch do.
            ["http://127.0.0.1:3100", "http://localhost:3100"]
#else
            []
#endif
        );

        DataUrl = server.DataUrl;
        Log.Information("Data plane at {Url}", DataUrl);

        return server;
    }
}

/// <summary>Registers every route the window fetches from the local server.</summary>
internal static class AppRoutes
{
    public static void Map(WebApplication app, string token)
    {
        ThumbnailRoutes.Map(app, token);
        ListingRoutes.Map(app, token);
    }
}
