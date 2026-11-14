using System.Diagnostics;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using System.Text;
using Microsoft.Win32;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The command in the Windows 11 File Explorer menu. Windows only shows such a command when the
///     app has package identity, so this writes a sparse package that points at the installed copy,
///     registers it for the current user, and removes it again when the setting is turned off. A
///     machine without developer mode rejects an unsigned package; that error reaches the settings
///     page instead of failing silently.
/// </summary>
[SupportedOSPlatform("windows")]
internal static class ExplorerMenu
{
    private const string PackageName = "YetAnotherFileManager.Shell";
    private const string Publisher = "CN=YetAnotherFileManager";
    private const string ShellDll = "yafm_shell.dll";
    private const string AppFile = "YetAnotherFileManager.exe";

    /// <summary>Must match the classes the shell DLL exports.</summary>
    private const string OpenClass = "5e1b7c2a-9a64-4c0b-8f3e-2d7a1b6c4e90";

    private const string BackgroundClass = "a3d9f0c7-2b58-4e61-9c7a-8b1e5d3f6a24";

    private static readonly string PackageDirectory = Path.Combine(
        Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
        Constants.Name, "shell-package");

    private static readonly string AssetsDirectory = Path.Combine(PackageDirectory, "Assets");

    private static readonly string ManifestPath = Path.Combine(PackageDirectory, "AppxManifest.xml");

    /// <summary>An installed copy the shell can start; a development build has no package to point at.</summary>
    public static bool Supported =>
        OperatingSystem.IsWindows()
        && Environment.OSVersion.Version.Build >= 22000
        && InstallDirectory is { Length: > 0 };

    private static string? InstallDirectory => Environment.ProcessPath is { Length: > 0 } executable
        ? Path.GetDirectoryName(executable)
        : null;

    public static async Task<ShellMenuStatusPayload> StatusAsync()
    {
        if (!Supported)
            return new(false, false, null);

        var installed = await InstalledLocationAsync();
        return new(true, installed is { Length: > 0 }
                       && string.Equals(Path.TrimEndingDirectorySeparator(installed),
                           Path.TrimEndingDirectorySeparator(PackageDirectory), StringComparison.OrdinalIgnoreCase),
            null);
    }

    /// <summary>Registers or removes the package and reports what the shell now has.</summary>
    public static async Task<ShellMenuStatusPayload> ApplyAsync(bool enabled)
    {
        if (!Supported)
            return new(false, false, null);

        var error = enabled ? await RegisterAsync() : await UnregisterAsync();

        if (!enabled)
            Try.Run(() => Registry.CurrentUser.DeleteSubKeyTree($@"Software\{Constants.Name}", false))
                .OnFailure(ex => Log.Debug(ex, "Could not remove the Explorer command's executable hint"));

        var status = await StatusAsync();
        return status with { Error = error };
    }

    /// <summary>Re-registers on startup, so an app update moves the command to the new folder.</summary>
    public static async Task RepairAsync()
    {
        if (!Supported)
            return;

        var status = await StatusAsync();
        if (status.Registered)
            return;

        var registered = await ApplyAsync(true);
        if (registered.Error is { Length: > 0 } message)
            Log.Warning("Could not restore the Explorer command: {Error}", message);
    }

    [SupportedOSPlatform("windows")]
    private static async Task<string?> RegisterAsync()
    {
        if (InstallDirectory is not { Length: > 0 } install || Environment.ProcessPath is not { Length: > 0 } exe)
            return "The app has no folder to register.";

        var dll = Path.Combine(install, ShellDll);
        if (!File.Exists(dll))
            return $"{ShellDll} is missing from the install folder.";

        if (await WritePackageAsync(exe) is { Length: > 0 } writeError)
            return writeError;

        // The shell DLL reads this when it is loaded from the package folder instead of the app's.
        Try.Run(() =>
            {
                using var key = Registry.CurrentUser.CreateSubKey($@"Software\{Constants.Name}");
                key?.SetValue("Executable", exe);
            })
            .OnFailure(ex => Log.Debug(ex, "Could not record the Explorer command's executable"));

        var script = $$"""
                      $ErrorActionPreference = 'Stop'
                      $ProgressPreference = 'SilentlyContinue'
                      try {
                          Add-AppxPackage -Register '{{Quote(ManifestPath)}}' -ExternalLocation '{{Quote(install)}}'
                      } catch {
                          Write-Output ('ERROR ' + $_.Exception.Message)
                          exit 1
                      }
                      """;

        var (ok, output) = await RunPowerShellAsync(script);
        if (ok)
            return null;

        Log.Warning("Could not register the Explorer command: {Output}", output);
        return Summarize(output);
    }

    [SupportedOSPlatform("windows")]
    private static async Task<string?> UnregisterAsync()
    {
        var script = $$"""
                      $ErrorActionPreference = 'Stop'
                      $ProgressPreference = 'SilentlyContinue'
                      try {
                          Get-AppxPackage -Name '{{PackageName}}' -ErrorAction SilentlyContinue | Remove-AppxPackage
                      } catch {
                          Write-Output ('ERROR ' + $_.Exception.Message)
                          exit 1
                      }
                      """;

        var (ok, output) = await RunPowerShellAsync(script);

        if (!ok)
            return Summarize(output);

        // Deployment removes the package in the background; reporting "still registered" while it
        // is on its way out would leave the toggle in the wrong state.
        if (!await WaitUntilGoneAsync())
            return "Windows is still removing the package.";

        Try.Run(() => Directory.Delete(PackageDirectory, true))
            .OnFailure(ex => Log.Debug(ex, "Could not remove the Explorer package folder"));

        return null;
    }

    private static async Task<bool> WaitUntilGoneAsync()
    {
        for (var attempt = 0; attempt < 15; attempt++)
        {
            if (await InstalledLocationAsync() is null)
                return true;

            await Task.Delay(TimeSpan.FromSeconds(1));
        }

        return false;
    }

    private static async Task<string?> InstalledLocationAsync()
    {
        var script = "$ProgressPreference = 'SilentlyContinue'\n" +
                     "$package = Get-AppxPackage -Name '" + PackageName +
                     "' -ErrorAction SilentlyContinue | Select-Object -First 1\n" +
                     "if ($package) { $package.InstallLocation }";

        var (ok, output) = await RunPowerShellAsync(script);
        return ok && output.Length > 0 ? output : null;
    }

    /// <summary>Writes the manifest and the logos the package schema requires.</summary>
    private static async Task<string?> WritePackageAsync(string executable)
    {
        try
        {
            Directory.CreateDirectory(AssetsDirectory);

            foreach (var name in new[] { "Square44x44Logo.png", "Square150x150Logo.png", "StoreLogo.png" })
            {
                var source = Path.Combine(AppContext.BaseDirectory, "shell", name);
                if (File.Exists(source))
                    File.Copy(source, Path.Combine(AssetsDirectory, name), true);
            }

            await File.WriteAllTextAsync(ManifestPath, Manifest(Path.GetFileName(executable)));
            return null;
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not write the Explorer package");
            return ex.Message;
        }
    }

    private static string Manifest(string executable) => $"""
                                                         <?xml version="1.0" encoding="utf-8"?>
                                                         <Package
                                                             xmlns="http://schemas.microsoft.com/appx/manifest/foundation/windows10"
                                                             xmlns:uap="http://schemas.microsoft.com/appx/manifest/uap/windows10"
                                                             xmlns:uap10="http://schemas.microsoft.com/appx/manifest/uap/windows10/10"
                                                             xmlns:com="http://schemas.microsoft.com/appx/manifest/com/windows10"
                                                             xmlns:desktop4="http://schemas.microsoft.com/appx/manifest/desktop/windows10/4"
                                                             xmlns:desktop5="http://schemas.microsoft.com/appx/manifest/desktop/windows10/5"
                                                             xmlns:rescap="http://schemas.microsoft.com/appx/manifest/foundation/windows10/restrictedcapabilities"
                                                             IgnorableNamespaces="uap uap10 com desktop4 desktop5 rescap">
                                                             <Identity Name="{PackageName}"
                                                                       Publisher="{Publisher}"
                                                                       Version="{PackageVersion()}"
                                                                       ProcessorArchitecture="{PackageArchitecture()}" />
                                                             <Properties>
                                                                 <DisplayName>{Constants.DisplayName}</DisplayName>
                                                                 <PublisherDisplayName>{Constants.DisplayName}</PublisherDisplayName>
                                                                 <Logo>Assets\StoreLogo.png</Logo>
                                                                 <uap10:AllowExternalContent>true</uap10:AllowExternalContent>
                                                             </Properties>
                                                             <Dependencies>
                                                                 <TargetDeviceFamily Name="Windows.Desktop" MinVersion="10.0.22000.0" MaxVersionTested="10.0.26340.0" />
                                                             </Dependencies>
                                                             <Resources>
                                                                 <Resource Language="en-us" />
                                                             </Resources>
                                                             <Applications>
                                                                 <Application Id="YAFM"
                                                                              Executable="{executable}"
                                                                              uap10:TrustLevel="mediumIL"
                                                                              uap10:RuntimeBehavior="win32App">
                                                                     <uap:VisualElements DisplayName="{Constants.DisplayName}"
                                                                                         Description="{Constants.DisplayName}"
                                                                                         BackgroundColor="transparent"
                                                                                         Square150x150Logo="Assets\Square150x150Logo.png"
                                                                                         Square44x44Logo="Assets\Square44x44Logo.png"
                                                                                         AppListEntry="none" />
                                                                     <Extensions>
                                                                         <com:Extension Category="windows.comServer">
                                                                             <com:ComServer>
                                                                                 <com:SurrogateServer DisplayName="{Constants.DisplayName}">
                                                                                     <com:Class Id="{OpenClass}" Path="{ShellDll}" ThreadingModel="STA" />
                                                                                     <com:Class Id="{BackgroundClass}" Path="{ShellDll}" ThreadingModel="STA" />
                                                                                 </com:SurrogateServer>
                                                                             </com:ComServer>
                                                                         </com:Extension>
                                                                         <desktop4:Extension Category="windows.fileExplorerContextMenus">
                                                                             <desktop4:FileExplorerContextMenus>
                                                                                 <desktop5:ItemType Type="*">
                                                                                     <desktop5:Verb Id="YafmOpen" Clsid="{OpenClass}" />
                                                                                 </desktop5:ItemType>
                                                                                 <desktop5:ItemType Type="Directory">
                                                                                     <desktop5:Verb Id="YafmOpenFolder" Clsid="{OpenClass}" />
                                                                                 </desktop5:ItemType>
                                                                                 <desktop5:ItemType Type="Directory\Background">
                                                                                     <desktop5:Verb Id="YafmOpenHere" Clsid="{BackgroundClass}" />
                                                                                 </desktop5:ItemType>
                                                                             </desktop4:FileExplorerContextMenus>
                                                                         </desktop4:Extension>
                                                                     </Extensions>
                                                                 </Application>
                                                             </Applications>
                                                             <Capabilities>
                                                                 <rescap:Capability Name="runFullTrust" />
                                                                 <rescap:Capability Name="unvirtualizedResources" />
                                                             </Capabilities>
                                                         </Package>
                                                         """;

    private static string PackageVersion()
    {
        var version = Assembly.GetExecutingAssembly().GetName().Version ?? new Version(1, 0, 0, 0);
        return $"{version.Major}.{version.Minor}.{Math.Max(0, version.Build)}.{Math.Max(0, version.Revision)}";
    }

    private static string PackageArchitecture() => RuntimeInformation.ProcessArchitecture switch
    {
        Architecture.Arm64 => "arm64",
        Architecture.X86 => "x86",
        _ => "x64"
    };

    /// <summary>A single quote ends a PowerShell literal, so it has to be doubled inside one.</summary>
    private static string Quote(string value) => value.Replace("'", "''");

    /// <summary>One line from the deployment error, which is all the settings page can show.</summary>
    private static string Summarize(string output)
    {
        var line = output
            .Split('\n')
            .Select(text => text.Trim())
            .LastOrDefault(text => text.Length > 0);

        if (line is not { Length: > 0 })
            return "The deployment failed without a message.";

        return line.Length > 300 ? line[..300] : line;
    }

    /// <summary>PowerShell wraps errors in CLIXML when its streams are redirected.</summary>
    private static string StripClixml(string text)
    {
        if (!text.StartsWith("#< CLIXML", StringComparison.Ordinal))
            return text;

        var match = System.Text.RegularExpressions.Regex.Match(text, "<S S=\"Error\">(.*?)</S>",
            System.Text.RegularExpressions.RegexOptions.Singleline);

        return match.Success
            ? System.Net.WebUtility.HtmlDecode(match.Groups[1].Value)
                .Replace("_x000D__x000A_", " ").Trim()
            : text;
    }

    private static async Task<(bool Ok, string Output)> RunPowerShellAsync(string script)
    {
        try
        {
            using var process = new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = "powershell.exe",
                    Arguments =
                        $"-NoProfile -NonInteractive -ExecutionPolicy Bypass -EncodedCommand {Convert.ToBase64String(Encoding.Unicode.GetBytes(script))}",
                    UseShellExecute = false,
                    CreateNoWindow = true,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true
                }
            };

            process.Start();

            var output = process.StandardOutput.ReadToEndAsync();
            var error = process.StandardError.ReadToEndAsync();

            using var timeout = new CancellationTokenSource(TimeSpan.FromSeconds(150));
            await process.WaitForExitAsync(timeout.Token);

            // Data goes to stdout; when a command fails without writing any, the error stream is
            // the only explanation there is.
            var text = (await output).Trim();
            if (text.Length == 0)
                text = StripClixml((await error).Trim());

            return (process.ExitCode == 0, text);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not run PowerShell for the Explorer command");
            return (false, ex.Message);
        }
    }
}
