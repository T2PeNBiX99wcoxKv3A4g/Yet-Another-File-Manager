using System.Diagnostics;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Lists the font families the operating system offers, so the settings page can preview and
///     pick one for each part of the interface. The list is read once and kept for the session.
/// </summary>
internal static class FontCatalog
{
    private static IReadOnlyList<string>? _cache;

    public static async Task<IReadOnlyList<string>> GetAsync()
    {
        if (_cache is not null)
            return _cache;

        var fonts = OperatingSystem.IsWindows()
            ? WindowsFonts()
            : await LinuxFontsAsync();

        _cache = fonts
            .Where(name => !string.IsNullOrWhiteSpace(name))
            .Select(name => name.Trim())
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .OrderBy(name => name, StringComparer.OrdinalIgnoreCase)
            .ToList();

        return _cache;
    }

    /// <summary>GDI+ knows every installed family, which is exactly what a font picker needs.</summary>
    [System.Runtime.Versioning.SupportedOSPlatform("windows")]
    private static IEnumerable<string> WindowsFonts() =>
        Try.Run<IEnumerable<string>>(() =>
        {
            using var collection = new System.Drawing.Text.InstalledFontCollection();
            return collection.Families
                .Select(family =>
                {
                    var name = family.Name;
                    family.Dispose();
                    return name;
                })
                .ToList();
        }).GetOrElse(exception =>
        {
            Log.Warning(exception, "Could not enumerate the installed fonts");
            return [];
        });

    /// <summary>fontconfig answers the same question on Linux, where there is no GDI+.</summary>
    private static async Task<IEnumerable<string>> LinuxFontsAsync()
    {
        var result = await Try.Run(async () =>
        {
            using var process = Process.Start(new ProcessStartInfo("fc-list", ": family")
            {
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true
            });

            if (process is null)
                return (IEnumerable<string>)[];

            var output = await process.StandardOutput.ReadToEndAsync();
            await process.WaitForExitAsync();

            return output
                .Split('\n', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
                .SelectMany(line => line.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries))
                .Where(name => name.Length > 0)
                .ToList();
        });

        return result.GetOrElse(exception =>
        {
            Log.Warning(exception, "Could not list the system fonts with fc-list");
            return [];
        });
    }
}
