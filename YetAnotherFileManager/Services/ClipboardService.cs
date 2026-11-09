using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using System.Text;
using PhotinoNetUtils.Interop;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Reads and writes the system clipboard: file lists, plain text and bitmaps. Keeping this in
///     one place means paste, cut, copy and the clipboard panel all agree about formats and ownership.
/// </summary>
internal static partial class ClipboardService
{
    private const uint CfHDrop = 15;
    private const uint CfBitmap = 2;
    private const uint CfText = 1;
    private const uint CfDib = 8;
    private const uint CfUnicodeText = 13;
    private const uint CfDibV5 = 17;
    private const uint GmemMoveable = 0x0002;

    private static readonly string PreferredDropEffect = "Preferred DropEffect";

    /// <summary>The cut made through this app's Linux clipboard, and the list it described.</summary>
    private static bool _linuxCut;

    private static string? _linuxSignature;

    /// <summary>Puts the paths on the clipboard as files, with the effect Explorer uses for cut/copy.</summary>
    public static bool Copy(IReadOnlyList<string>? paths, bool cut)
    {
        var files = paths?.Where(path => path.Length > 0).Distinct(StringComparer.OrdinalIgnoreCase).ToList() ?? [];
        if (files.Count == 0) return false;

        if (OperatingSystem.IsLinux())
        {
            if (!LinuxClipboard.WriteFiles(files))
                return false;

            _linuxCut = cut;
            _linuxSignature = LinuxClipboard.Signature(files);
            return true;
        }

        if (!OperatingSystem.IsWindows()) return false;

        if (!OpenClipboard())
            return false;

        try
        {
            EmptyClipboard();
            return WriteDropFiles(files) && WriteDropEffect(cut ? 2u : 1u);
        }
        finally
        {
            NativeMethods.CloseClipboard();
        }
    }

    /// <summary>Whether the clipboard carries something this app can paste: files, an image or text.</summary>
    public static bool HasContent()
    {
        if (OperatingSystem.IsLinux())
        {
            var (paths, _) = LinuxClipboard.ReadFiles();
            return paths.Count > 0 || LinuxClipboard.HasText() || LinuxClipboard.HasImage();
        }

        if (!OperatingSystem.IsWindows()) return false;

        return IsClipboardFormatAvailable(CfHDrop)
               || IsClipboardFormatAvailable(CfUnicodeText)
               || IsClipboardFormatAvailable(CfText)
               || IsClipboardFormatAvailable(CfBitmap)
               || IsClipboardFormatAvailable(CfDib)
               || IsClipboardFormatAvailable(CfDibV5);
    }

    /// <summary>The files on the clipboard, with just enough detail for the tray to draw them.</summary>
    public static ClipboardPathsPayload ReadPayload()
    {
        if (!OperatingSystem.IsWindows() && !OperatingSystem.IsLinux())
            return new([], false, 0);

        var (paths, move, read) = ReadFiles();

        // A clipboard another app is holding is not "empty": leave the sequence alone so the next
        // poll retries instead of remembering a sequence that never carried the files.
        if (!read)
            return new([], false, 0);

        var sequence = OperatingSystem.IsWindows()
            ? GetClipboardSequenceNumber()
            : (uint)LinuxClipboard.Signature(paths).GetHashCode();

        return new(PathEntries.Describe(paths), move, sequence);
    }

    /// <summary>Reads the clipboard's files, whether the operation is a cut, and whether it could be read.</summary>
    public static (List<string> Paths, bool Move, bool Read) ReadFiles()
    {
        if (OperatingSystem.IsLinux())
        {
            var (paths, read) = LinuxClipboard.ReadFiles();
            var move = _linuxCut
                       && _linuxSignature is not null
                       && _linuxSignature == LinuxClipboard.Signature(paths);

            return (paths, move, read);
        }

        if (!OperatingSystem.IsWindows())
            return ([], false, false);

        return ReadFilesWindows();
    }

    /// <summary>Reads the clipboard's text, or null when it has none.</summary>
    public static string? ReadText()
    {
        if (OperatingSystem.IsLinux())
            return LinuxClipboard.ReadText();

        return OperatingSystem.IsWindows() ? ReadTextWindows() : null;
    }

    /// <summary>Reads the clipboard's bitmap as PNG bytes, or null when it has no image.</summary>
    public static byte[]? ReadImagePng()
    {
        if (OperatingSystem.IsLinux())
            return LinuxClipboard.ReadImagePng();

        return OperatingSystem.IsWindows() ? ReadImageWindows() : null;
    }

    /// <summary>Drops the file list after a cut was pasted; a copy stays for another paste.</summary>
    public static void Clear()
    {
        if (OperatingSystem.IsLinux())
        {
            LinuxClipboard.Clear();
            _linuxCut = false;
            _linuxSignature = null;
            return;
        }

        if (!OperatingSystem.IsWindows())
            return;

        ClearWindows();
    }

    [SupportedOSPlatform("windows")]
    private static string? ReadTextWindows()
    {
        if (!OpenClipboard())
            return null;

        try
        {
            if (IsClipboardFormatAvailable(CfUnicodeText)
                && NativeMethods.GetClipboardData(CfUnicodeText) is var unicode && unicode != IntPtr.Zero)
                return ReadString(unicode, true);

            if (IsClipboardFormatAvailable(CfText)
                && NativeMethods.GetClipboardData(CfText) is var ansi && ansi != IntPtr.Zero)
                return ReadString(ansi, false);

            return null;
        }
        finally
        {
            NativeMethods.CloseClipboard();
        }
    }

    [SupportedOSPlatform("windows")]
    private static string? ReadString(IntPtr handle, bool unicode)
    {
        var memory = NativeMethods.GlobalLock(handle);
        if (memory == IntPtr.Zero)
            return null;

        try
        {
            return unicode ? Marshal.PtrToStringUni(memory) : Marshal.PtrToStringAnsi(memory);
        }
        finally
        {
            NativeMethods.GlobalUnlock(memory);
        }
    }

    [SupportedOSPlatform("windows")]
    private static byte[]? ReadImageWindows()
    {
        if (!OpenClipboard())
            return null;

        try
        {
            foreach (var format in new[]
                     {
                         CfDibV5, CfDib
                     })
            {
                if (!IsClipboardFormatAvailable(format))
                    continue;

                var handle = NativeMethods.GetClipboardData(format);
                if (handle != IntPtr.Zero && DibToPng(handle) is { } png)
                    return png;
            }

            if (IsClipboardFormatAvailable(CfBitmap))
            {
                var handle = NativeMethods.GetClipboardData(CfBitmap);
                if (handle != IntPtr.Zero)
                    return HBitmapToPng(handle);
            }

            return null;
        }
        finally
        {
            NativeMethods.CloseClipboard();
        }
    }

    [SupportedOSPlatform("windows")]
    private static byte[]? HBitmapToPng(IntPtr handle)
    {
        try
        {
            using var bitmap = Bitmap.FromHbitmap(handle);
            using var png = new MemoryStream();
            bitmap.Save(png, ImageFormat.Png);
            return png.ToArray();
        }
        catch (Exception ex)
        {
            Log.Debug(ex, "Could not read the clipboard bitmap");
            return null;
        }
    }

    [SupportedOSPlatform("windows")]
    private static byte[]? DibToPng(IntPtr handle)
    {
        var memory = NativeMethods.GlobalLock(handle);
        if (memory == IntPtr.Zero)
            return null;

        try
        {
            var size = (int)GlobalSize(handle);
            var headerSize = size >= 40 ? Marshal.ReadInt32(memory) : 0;

            if (headerSize < 40 || headerSize > size)
                return null;

            var bitCount = (ushort)Marshal.ReadInt16(memory, 14);
            var compression = (uint)Marshal.ReadInt32(memory, 16);
            var colorsUsed = (uint)Marshal.ReadInt32(memory, 32);

            var paletteSize = 0;
            if (headerSize == 40)
            {
                if (compression == 3)
                    paletteSize = 12;
                else if (bitCount <= 8)
                    paletteSize = (int)(colorsUsed == 0 ? 1u << bitCount : colorsUsed) * 4;
            }

            var offset = 14 + headerSize + paletteSize;
            var total = 14 + size;
            var bytes = new byte[total];

            bytes[0] = (byte)'B';
            bytes[1] = (byte)'M';
            BitConverter.TryWriteBytes(bytes.AsSpan(2, 4), total);
            BitConverter.TryWriteBytes(bytes.AsSpan(10, 4), offset);
            Marshal.Copy(memory, bytes, 14, size);

            using var image = Image.FromStream(new MemoryStream(bytes));
            using var png = new MemoryStream();
            image.Save(png, ImageFormat.Png);
            return png.ToArray();
        }
        catch (Exception ex)
        {
            Log.Debug(ex, "Could not read the clipboard DIB");
            return null;
        }
        finally
        {
            NativeMethods.GlobalUnlock(memory);
        }
    }

    [SupportedOSPlatform("windows")]
    private static void ClearWindows()
    {
        if (!OpenClipboard())
            return;

        EmptyClipboard();
        NativeMethods.CloseClipboard();
    }

    [SupportedOSPlatform("windows")]
    private static bool OpenClipboard()
    {
        for (var attempt = 0; attempt < 5; attempt++)
        {
            if (NativeMethods.OpenClipboard(IntPtr.Zero))
                return true;

            Thread.Sleep(10);
        }

        return false;
    }

    [SupportedOSPlatform("windows")]
    private static bool WriteDropFiles(IReadOnlyList<string> paths)
    {
        var text = Encoding.Unicode.GetBytes(string.Join('\0', paths) + "\0\0");
        var headerSize = Marshal.SizeOf<DropFiles>();
        var size = headerSize + text.Length;
        var handle = GlobalAlloc(GmemMoveable, (nuint)size);

        if (handle == IntPtr.Zero)
            return false;

        var memory = NativeMethods.GlobalLock(handle);
        if (memory == IntPtr.Zero)
        {
            GlobalFree(handle);
            return false;
        }

        try
        {
            var header = new DropFiles
            {
                pFiles = (uint)headerSize,
                fWide = 1
            };

            Marshal.StructureToPtr(header, memory, false);
            Marshal.Copy(text, 0, IntPtr.Add(memory, headerSize), text.Length);
        }
        finally
        {
            NativeMethods.GlobalUnlock(handle);
        }

        if (SetClipboardData(CfHDrop, handle) != IntPtr.Zero)
            return true;

        GlobalFree(handle);
        return false;
    }

    [SupportedOSPlatform("windows")]
    private static bool WriteDropEffect(uint effect)
    {
        var format = RegisterClipboardFormat(PreferredDropEffect);
        if (format == 0)
            return true;

        var handle = GlobalAlloc(GmemMoveable, sizeof(uint));
        if (handle == IntPtr.Zero)
            return true;

        var memory = NativeMethods.GlobalLock(handle);
        if (memory == IntPtr.Zero)
        {
            GlobalFree(handle);
            return true;
        }

        try
        {
            Marshal.WriteInt32(memory, (int)effect);
        }
        finally
        {
            NativeMethods.GlobalUnlock(handle);
        }

        if (SetClipboardData(format, handle) != IntPtr.Zero)
            return true;

        GlobalFree(handle);
        return true;
    }

    [SupportedOSPlatform("windows")]
    private static (List<string> Paths, bool Move, bool Read) ReadFilesWindows()
    {
        if (!OpenClipboard())
            return ([], false, false);

        try
        {
            var handle = NativeMethods.GetClipboardData(CfHDrop);
            if (handle == IntPtr.Zero)
                return ([], false, true);

            var count = DragQueryFile(handle, uint.MaxValue, IntPtr.Zero, 0);
            var paths = new List<string>((int)count);

            for (uint index = 0; index < count; index++)
            {
                var length = DragQueryFile(handle, index, IntPtr.Zero, 0);
                if (length == 0)
                    continue;

                var buffer = Marshal.AllocHGlobal((int)(length + 1) * sizeof(char));
                try
                {
                    if (DragQueryFile(handle, index, buffer, length + 1) > 0
                        && Marshal.PtrToStringUni(buffer) is { Length: > 0 } path)
                        paths.Add(path);
                }
                finally
                {
                    Marshal.FreeHGlobal(buffer);
                }
            }

            var move = ReadDropEffect() == 2;
            return (paths, move, true);
        }
        finally
        {
            NativeMethods.CloseClipboard();
        }
    }

    [SupportedOSPlatform("windows")]
    private static uint ReadDropEffect()
    {
        var format = RegisterClipboardFormat(PreferredDropEffect);
        var handle = format == 0 ? IntPtr.Zero : NativeMethods.GetClipboardData(format);
        if (handle == IntPtr.Zero)
            return 1;

        var memory = NativeMethods.GlobalLock(handle);
        if (memory == IntPtr.Zero)
            return 1;

        try
        {
            return (uint)Marshal.ReadInt32(memory);
        }
        finally
        {
            NativeMethods.GlobalUnlock(handle);
        }
    }

    [DllImport("shell32.dll", CharSet = CharSet.Unicode)]
    private static extern uint DragQueryFile(IntPtr hDrop, uint iFile, IntPtr lpszFile, uint cch);

    [DllImport("user32.dll", CharSet = CharSet.Unicode)]
    private static extern uint RegisterClipboardFormat(string format);

    [LibraryImport("user32.dll", SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool EmptyClipboard();

    [LibraryImport("user32.dll", SetLastError = true)]
    private static partial IntPtr SetClipboardData(uint uFormat, IntPtr hMem);

    [LibraryImport("user32.dll", SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool IsClipboardFormatAvailable(uint format);

    [LibraryImport("user32.dll")]
    private static partial uint GetClipboardSequenceNumber();

    [LibraryImport("kernel32.dll", SetLastError = true)]
    private static partial IntPtr GlobalAlloc(uint uFlags, nuint dwBytes);

    [LibraryImport("kernel32.dll", SetLastError = true)]
    private static partial nuint GlobalSize(IntPtr hMem);

    [LibraryImport("kernel32.dll", SetLastError = true)]
    private static partial IntPtr GlobalFree(IntPtr hMem);

    [StructLayout(LayoutKind.Sequential)]
    private struct DropFiles
    {
        public uint pFiles;
        public int x;
        public int y;
        public int fNC;
        public int fWide;
    }
}