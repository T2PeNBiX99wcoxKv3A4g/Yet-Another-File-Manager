using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using Microsoft.Win32;
using PhotinoNetUtils.Utils;
using Serilog;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     Hides the .NET Framework shell extensions from one helper process for the duration of a
///     context-menu read. Those handlers load the old CLR through <c>mscoree.dll</c>; hosting them in
///     a .NET 10 process corrupts the process when <c>QueryContextMenu</c> runs. The override is
///     process-local, so Explorer and the user's settings are untouched.
/// </summary>
[SupportedOSPlatform("windows")]
internal static partial class ShellExtensionBlock
{
    private const string TempKeyPrefix = @"Software\YetAnotherFileManager\ShellMenuOverride";
    private static readonly IntPtr HkeyCurrentUser = new(unchecked((int)0x80000001));

    private static readonly string TempKey = $@"{TempKeyPrefix}-{Environment.ProcessId}";

    /// <summary>Blocks the managed handlers while the returned scope is alive.</summary>
    public static IDisposable? Enter()
    {
        if (!OperatingSystem.IsWindows())
            return null;

        try
        {
            var handlers = ManagedHandlerIds();
            if (handlers.Count == 0)
                return null;

            // A previous helper may have crashed before its scope could delete the key.
            Try.Run(() => Registry.CurrentUser.DeleteSubKeyTree(TempKey, false));

            using var temp = Registry.CurrentUser.CreateSubKey(TempKey);
            if (temp is null)
                return null;

            using (var blocked = temp.CreateSubKey(
                       @"Software\Microsoft\Windows\CurrentVersion\Shell Extensions\Blocked"))
            {
                if (blocked is null)
                    return null;

                foreach (var clsid in handlers)
                    blocked.SetValue(clsid, "YetAnotherFileManager shell menu helper");
            }

            var result = RegOverridePredefKey(HkeyCurrentUser, temp.Handle.DangerousGetHandle());
            if (result != 0)
            {
                Registry.CurrentUser.DeleteSubKeyTree(TempKey, false);
                return null;
            }

            return new Scope();
        }
        catch (Exception ex)
        {
            Log.Debug(ex, "Could not hide managed shell extensions");
            return null;
        }
    }

    /// <summary>The CLSIDs whose in-process server is the .NET Framework runtime.</summary>
    private static HashSet<string> ManagedHandlerIds()
    {
        var result = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

        foreach (var root in HandlerRoots())
        {
            using var handlers = Registry.ClassesRoot.OpenSubKey($@"{root}\shellex\ContextMenuHandlers");
            if (handlers is null)
                continue;

            foreach (var name in handlers.GetSubKeyNames())
            {
                using var handler = handlers.OpenSubKey(name);
                var value = handler?.GetValue(null) as string;

                // A handler key can be named after the CLSID itself; in that case the default value
                // is a ProgID, and the CLSID is the key name.
                var clsid = name.StartsWith('{') && name.EndsWith('}')
                    ? name
                    : value;

                if (string.IsNullOrWhiteSpace(clsid))
                    continue;

                using var server = Registry.ClassesRoot.OpenSubKey($@"CLSID\{clsid}\InprocServer32");
                var path = server?.GetValue(null) as string ?? "";

                if (path.Contains("mscoree.dll", StringComparison.OrdinalIgnoreCase)
                    || path.Contains("mscorwks.dll", StringComparison.OrdinalIgnoreCase)
                    || path.Contains("clr.dll", StringComparison.OrdinalIgnoreCase))
                    result.Add(clsid);
            }
        }

        return result;
    }

    private static IEnumerable<string> HandlerRoots()
    {
        yield return "*";
        yield return "AllFilesystemObjects";
        yield return "Directory";
        yield return @"Directory\Background";
    }

    [LibraryImport("advapi32.dll")]
    private static partial int RegOverridePredefKey(IntPtr key, IntPtr newKey);

    private sealed class Scope : IDisposable
    {
        public void Dispose()
        {
            RegOverridePredefKey(HkeyCurrentUser, IntPtr.Zero);
            Try.Run(() => Registry.CurrentUser.DeleteSubKeyTree(TempKey, false));
        }
    }
}