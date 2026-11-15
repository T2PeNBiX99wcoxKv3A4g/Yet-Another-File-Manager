using System.Runtime.InteropServices;
using System.Runtime.Versioning;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     Rounds a borderless window the way Windows 11 rounds its own windows. The interface draws the
///     matching radius and its 1px border, and the system clips the window to the same shape so the
///     corners are not filled in with the window's background.
/// </summary>
[SupportedOSPlatform("windows")]
internal static partial class WindowCorners
{
    /// <summary><c>DWMWA_WINDOW_CORNER_PREFERENCE</c>; the window has no frame to ask for it.</summary>
    private const int CornerPreference = 33;

    /// <summary><c>DWMWCP_ROUND</c>.</summary>
    private const int RoundPreference = 2;

    public static void Round(IntPtr handle)
    {
        // The attribute only exists from Windows 11; older systems keep the square window and the
        // interface's own border.
        if (handle == IntPtr.Zero || !OperatingSystem.IsWindowsVersionAtLeast(10, 0, 22000))
            return;

        var preference = RoundPreference;
        _ = DwmSetWindowAttribute(handle, CornerPreference, ref preference, sizeof(int));
    }

    [LibraryImport("dwmapi.dll")]
    private static partial int DwmSetWindowAttribute(IntPtr window, int attribute, ref int value, int size);
}
