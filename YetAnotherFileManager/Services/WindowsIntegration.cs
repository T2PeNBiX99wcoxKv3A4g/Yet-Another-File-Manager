using System.Runtime.Versioning;
using Microsoft.Win32;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Lists the app as a category in Windows Settings' Default apps. Windows reads
///     <c>RegisteredApplications</c> and the capabilities tree behind it; the file and URL
///     associations themselves stay with the handlers that already write them.
/// </summary>
internal static class WindowsIntegration
{
    private const string RegisteredName = "YetAnotherFileManager";
    private const string CapabilitiesPath = @"Software\YetAnotherFileManager\Capabilities";

    /// <summary>Writes the category for whichever handlers are on, and removes it when none is.</summary>
    public static void Refresh(AppSettings settings) =>
        Try.Run(() =>
        {
            if (!OperatingSystem.IsWindows())
                return;

            if (Environment.ProcessPath is not { Length: > 0 } executable)
                return;

            if (settings.ArchiveHandler != true && settings.DefaultFileManager != true && settings.LinksEnabled != true)
            {
                Unregister();
                return;
            }

            Register(executable, settings.ArchiveHandler == true, settings.LinksEnabled == true);
        }).OnFailure(ex => Log.Warning(ex, "Could not register the app's capabilities"));

    [SupportedOSPlatform("windows")]
    private static void Register(string executable, bool archive, bool links)
    {
        using var capabilities = Registry.CurrentUser.CreateSubKey(CapabilitiesPath);
        if (capabilities is null)
            return;

        capabilities.SetValue("ApplicationName", "Yet Another File Manager");
        capabilities.SetValue("ApplicationDescription", "Browse files and archives with previews, tags and shares.");
        capabilities.SetValue("ApplicationIcon", $"\"{executable}\",0");

        capabilities.DeleteSubKeyTree("FileAssociations", false);

        if (archive)
        {
            using var files = capabilities.CreateSubKey("FileAssociations");
            if (files is not null)
                foreach (var extension in ArchiveFormats.Associations)
                    files.SetValue(extension, "YAFM.Archive");
        }

        capabilities.DeleteSubKeyTree("URLAssociations", false);

        if (links)
        {
            using var urls = capabilities.CreateSubKey("URLAssociations");
            urls?.SetValue("yafm", "yafm");
        }

        using var registered = Registry.CurrentUser.CreateSubKey(@"Software\RegisteredApplications");
        registered?.SetValue(RegisteredName, CapabilitiesPath);
    }

    [SupportedOSPlatform("windows")]
    private static void Unregister()
    {
        Try.Run(() => Registry.CurrentUser.DeleteSubKeyTree(@"Software\YetAnotherFileManager", false));
        Try.Run(() =>
        {
            using var registered = Registry.CurrentUser.OpenSubKey(@"Software\RegisteredApplications", true);
            registered?.DeleteValue(RegisteredName, false);
        });
    }
}
