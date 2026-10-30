using System.Runtime.InteropServices;
using System.Runtime.Versioning;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     Explorer's "hidden items" and "protected operating system files" options, so a listing shows
///     what the user's file manager shows. Read on every listing: both can change while the app runs.
/// </summary>
internal static partial class FileVisibility
{
    private const uint RrfRtRegDword = 0x00000010;
    private const string AdvancedKey = @"Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced";
    private static readonly IntPtr HkeyCurrentUser = new(0x80000001);

    /// <summary>"Hidden" is 1 when hidden items are shown and 2 (the default) when they are not.</summary>
    public static bool ShowHidden =>
        OperatingSystem.IsWindows() && ReadDword("Hidden") == 1;

    /// <summary>"ShowSuperHidden" is 1 only when protected operating system files are shown.</summary>
    public static bool ShowSystem =>
        OperatingSystem.IsWindows() && ReadDword("ShowSuperHidden") == 1;

    [SupportedOSPlatform("windows")]
    private static uint ReadDword(string name)
    {
        uint value = 0;
        uint size = sizeof(uint);

        // A missing value or an unexpected type is not an error: the default is "off".
        return RegGetValue(HkeyCurrentUser, AdvancedKey, name, RrfRtRegDword, IntPtr.Zero, ref value, ref size) == 0
            ? value
            : 0;
    }

    [LibraryImport("advapi32.dll", EntryPoint = "RegGetValueW", StringMarshalling = StringMarshalling.Utf16)]
    private static partial int RegGetValue(IntPtr key, string subKey, string value, uint flags, IntPtr type,
        ref uint data, ref uint size);
}