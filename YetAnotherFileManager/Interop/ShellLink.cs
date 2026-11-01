using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using Serilog;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     Reads the target of a <c>.lnk</c> shortcut. The shell's <c>IShellLink</c> object is the only
///     reliable reader (the file is a binary structure), so this walks its vtable by hand.
/// </summary>
[SupportedOSPlatform("windows")]
internal static unsafe partial class ShellLink
{
    private const int StgmRead = 0;
    private const uint ClsctxInprocServer = 0x1;
    private const uint CoinitApartmentThreaded = 0x2;
    private const int QueryInterfaceSlot = 0;
    private const int ReleaseSlot = 2;

    /// <summary><c>IShellLinkW::GetPath</c> follows GetDescription and the working-directory pair.</summary>
    private const int GetPathSlot = 3;

    /// <summary><c>IPersistFile::Load</c>.</summary>
    private const int LoadSlot = 5;

    private const int PathLength = 1024;

    private static readonly Guid ShellLinkId = new("00021401-0000-0000-C000-000000000046");
    private static readonly Guid ShellLinkWId = new("000214F9-0000-0000-C000-000000000046");
    private static readonly Guid PersistFileId = new("0000010B-0000-0000-C000-000000000046");

    /// <summary>The target of a shortcut and whether it still exists, or (null, null) when unreadable.</summary>
    public static (string? Target, bool? Valid) Resolve(string path)
    {
        // The resolver runs on the STA pool; make sure COM is initialized for this thread too.
        var initialized = CoInitializeEx(IntPtr.Zero, CoinitApartmentThreaded);

        try
        {
            if (CoCreateInstance(in ShellLinkId, IntPtr.Zero, ClsctxInprocServer, in ShellLinkWId, out var link) != 0
                || link == IntPtr.Zero)
                return (null, null);

            try
            {
                var query = (delegate* unmanaged[Stdcall]<IntPtr, Guid*, IntPtr*, int>)
                    (*(IntPtr**)link)[QueryInterfaceSlot];

                var persistFileId = PersistFileId;
                IntPtr persist;

                if (query(link, &persistFileId, &persist) != 0 || persist == IntPtr.Zero)
                    return (null, null);

                try
                {
                    var load = (delegate* unmanaged[Stdcall]<IntPtr, char*, uint, int>)
                        (*(IntPtr**)persist)[LoadSlot];

                    fixed (char* name = path)
                        if (load(persist, name, StgmRead) != 0)
                            return (null, null);
                }
                finally
                {
                    ((delegate* unmanaged[Stdcall]<IntPtr, uint>)(*(IntPtr**)persist)[ReleaseSlot])(persist);
                }

                var buffer = stackalloc char[PathLength];
                var getPath = (delegate* unmanaged[Stdcall]<IntPtr, char*, int, IntPtr, uint, int>)
                    (*(IntPtr**)link)[GetPathSlot];

                if (getPath(link, buffer, PathLength, IntPtr.Zero, 0) != 0)
                    return (null, null);

                var target = new string(buffer);
                if (target.Length == 0)
                    return (null, null);

                return (target, File.Exists(target) || Directory.Exists(target));
            }
            finally
            {
                ((delegate* unmanaged[Stdcall]<IntPtr, uint>)(*(IntPtr**)link)[ReleaseSlot])(link);
            }
        }
        catch (Exception ex)
        {
            Log.Debug(ex, "Could not resolve the shortcut {Path}", path);
            return (null, null);
        }
        finally
        {
            if (initialized >= 0)
                CoUninitialize();
        }
    }

    [LibraryImport("ole32.dll")]
    private static partial int CoCreateInstance(in Guid rclsid, IntPtr outer, uint context, in Guid riid,
        out IntPtr instance);

    [LibraryImport("ole32.dll")]
    private static partial int CoInitializeEx(IntPtr reserved, uint coinit);

    [LibraryImport("ole32.dll")]
    private static partial void CoUninitialize();
}
