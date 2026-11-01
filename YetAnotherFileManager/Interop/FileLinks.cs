using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using Microsoft.Win32.SafeHandles;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     Hard-link counts from Windows. A file with more than one name pointing at the same data is
///     what <c>mklink /H</c> makes; the shell has no cheap managed API for the number.
/// </summary>
[SupportedOSPlatform("windows")]
internal static partial class FileLinks
{
    /// <summary>How many names point at this file. A file that cannot be opened counts as one.</summary>
    public static int Count(string path)
    {
        try
        {
            using var handle = File.OpenHandle(path, FileMode.Open, FileAccess.Read,
                FileShare.ReadWrite | FileShare.Delete);

            return GetFileInformationByHandle(handle, out var information)
                ? (int)information.NumberOfLinks
                : 1;
        }
        catch
        {
            return 1;
        }
    }

    [LibraryImport("kernel32.dll", SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool GetFileInformationByHandle(SafeFileHandle handle,
        out ByHandleFileInformation information);

    /// <summary><c>FILETIME</c>: two 32-bit halves, so the 4-byte alignment of the native struct holds.</summary>
    [StructLayout(LayoutKind.Sequential)]
    private struct NativeFileTime
    {
        public uint Low;
        public uint High;
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct ByHandleFileInformation
    {
        public uint FileAttributes;
        public NativeFileTime CreationTime;
        public NativeFileTime LastAccessTime;
        public NativeFileTime LastWriteTime;
        public uint VolumeSerialNumber;
        public uint FileSizeHigh;
        public uint FileSizeLow;
        public uint NumberOfLinks;
        public uint FileIndexHigh;
        public uint FileIndexLow;
    }
}
