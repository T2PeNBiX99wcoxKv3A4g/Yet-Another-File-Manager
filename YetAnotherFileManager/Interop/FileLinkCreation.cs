using System.ComponentModel;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using System.Text;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     Creates the link kinds Windows itself understands: symbolic links for files and folders,
///     hard links for files on the same volume, and directory junctions. Junctions and hard links
///     need no special rights; a symbolic link needs Developer Mode or an elevated process.
/// </summary>
[SupportedOSPlatform("windows")]
internal static partial class FileLinkCreation
{
    public const string SymbolicFile = "symbolic-file";
    public const string SymbolicFolder = "symbolic-folder";
    public const string Hard = "hard";
    public const string Junction = "junction";

    private const uint GenericWrite = 0x40000000;
    private const uint OpenExisting = 3;
    private const uint BackupSemantics = 0x02000000;
    private const uint OpenReparsePoint = 0x00200000;
    private const uint FsctlSetReparsePoint = 0x000900A4;
    private const uint MountPointTag = 0xA0000003;
    private static readonly IntPtr InvalidHandle = new(-1);

    /// <summary>Creates <paramref name="link" /> pointing at <paramref name="source" />.</summary>
    public static string Create(string kind, string source, string link)
    {
        if (!Directory.Exists(Path.GetDirectoryName(link)))
            return "The folder for the link does not exist.";

        if (File.Exists(link) || Directory.Exists(link))
            return "Something with that name already exists there.";

        try
        {
            switch (kind)
            {
                case SymbolicFile:
                    File.CreateSymbolicLink(link, source);
                    return "";
                case SymbolicFolder:
                    Directory.CreateSymbolicLink(link, source);
                    return "";
                case Hard:
                    if (!CreateHardLink(link, source, IntPtr.Zero))
                        throw new IOException("The hard link could not be created.",
                            new Win32Exception(Marshal.GetLastWin32Error()));
                    return "";
                case Junction:
                    CreateJunction(link, source);
                    return "";
                default:
                    return "Unknown link type.";
            }
        }
        catch (Exception ex)
        {
            return ex.Message;
        }
    }

    private static void CreateJunction(string link, string target)
    {
        Directory.CreateDirectory(link);

        var handle = CreateFile(link, GenericWrite, 0, IntPtr.Zero, OpenExisting,
            BackupSemantics | OpenReparsePoint, IntPtr.Zero);

        if (handle == InvalidHandle)
        {
            Directory.Delete(link);
            throw new IOException("The junction could not be opened.",
                new Win32Exception(Marshal.GetLastWin32Error()));
        }

        var buffer = IntPtr.Zero;

        try
        {
            // The substitute name is the NT path the file system follows; the print name is what
            // Explorer shows.
            var substitute = Encoding.Unicode.GetBytes(@"\??\" + target);
            var print = Encoding.Unicode.GetBytes(target);
            var pathLength = substitute.Length + 2 + print.Length + 2;
            var size = 8 + 8 + pathLength;

            buffer = Marshal.AllocHGlobal(size);

            using (var stream = new MemoryStream(size))
            using (var writer = new BinaryWriter(stream, Encoding.Unicode))
            {
                writer.Write(MountPointTag);
                writer.Write((ushort)(8 + pathLength));
                writer.Write((ushort)0);
                writer.Write((ushort)0);
                writer.Write((ushort)substitute.Length);
                writer.Write((ushort)(substitute.Length + 2));
                writer.Write((ushort)print.Length);
                writer.Write(substitute);
                writer.Write((ushort)0);
                writer.Write(print);
                writer.Write((ushort)0);

                Marshal.Copy(stream.ToArray(), 0, buffer, size);
            }

            if (!DeviceIoControl(handle, FsctlSetReparsePoint, buffer, (uint)size, IntPtr.Zero, 0,
                    out _, IntPtr.Zero))
                throw new IOException("The junction could not be written.",
                    new Win32Exception(Marshal.GetLastWin32Error()));
        }
        catch
        {
            Try.Run(() => Directory.Delete(link));
            throw;
        }
        finally
        {
            if (buffer != IntPtr.Zero)
                Marshal.FreeHGlobal(buffer);

            CloseHandle(handle);
        }
    }

    [LibraryImport("kernel32.dll", EntryPoint = "CreateFileW", StringMarshalling = StringMarshalling.Utf16,
        SetLastError = true)]
    private static partial IntPtr CreateFile(string name, uint access, uint share, IntPtr security,
        uint disposition, uint flags, IntPtr template);

    [LibraryImport("kernel32.dll", EntryPoint = "CreateHardLinkW", StringMarshalling = StringMarshalling.Utf16,
        SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool CreateHardLink(string link, string existing, IntPtr security);

    [LibraryImport("kernel32.dll", SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool DeviceIoControl(IntPtr device, uint control, IntPtr input, uint inputSize,
        IntPtr output, uint outputSize, out uint returned, IntPtr overlapped);

    [LibraryImport("kernel32.dll", SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool CloseHandle(IntPtr handle);
}
