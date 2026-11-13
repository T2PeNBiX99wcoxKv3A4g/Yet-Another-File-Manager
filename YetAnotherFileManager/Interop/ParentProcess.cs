using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using PhotinoNetUtils.Utils;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     The name of the process that started this one. It lets the launch path tell a logon start
///     (Task Scheduler or the Startup folder) from a launch the user asked for, without changing
///     every shortcut.
/// </summary>
internal static partial class ParentProcess
{
    /// <summary>The parent process name without its extension, or null when it cannot be read.</summary>
    [SupportedOSPlatform("windows")]
    public static string? Name()
    {
        var status = NtQueryInformationProcess(GetCurrentProcess(), 0, out var info,
            Marshal.SizeOf<ProcessBasicInformation>(), out _);

        if (status != 0 || info.InheritedFromUniqueProcessId == IntPtr.Zero)
            return null;

        return Try.Run(() => Process.GetProcessById((int)info.InheritedFromUniqueProcessId).ProcessName)
            .GetOrNull();
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct ProcessBasicInformation
    {
        public IntPtr Reserved1;
        public IntPtr PebBaseAddress;
        public IntPtr Reserved2;
        public IntPtr Reserved3;
        public IntPtr UniqueProcessId;
        public IntPtr InheritedFromUniqueProcessId;
    }

    [LibraryImport("kernel32.dll")]
    private static partial IntPtr GetCurrentProcess();

    [LibraryImport("ntdll.dll")]
    private static partial int NtQueryInformationProcess(IntPtr process, int infoClass,
        out ProcessBasicInformation info, int size, out int returned);
}
