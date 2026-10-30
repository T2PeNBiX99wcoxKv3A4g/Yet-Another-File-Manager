using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     The icon Explorer would show for a path, as a PNG data URL the interface can put in an
///     <c>&lt;img&gt;</c>. Files are asked for by extension (no disk access, no per-file handler run);
///     folders are asked for by path so a custom <c>desktop.ini</c> icon is picked up.
/// </summary>
[SupportedOSPlatform("windows")]
internal static class ShellIcon
{
    private const uint ShgfiIcon = 0x000000100;
    private const uint ShgfiLargeIcon = 0x000000000;
    private const uint ShgfiUseFileAttributes = 0x000000010;

    private const uint FileAttributeDirectory = 0x00000010;
    private const uint FileAttributeNormal = 0x00000080;

    private const int DibRgbColors = 0;
    private const int BiRgb = 0;

    public static string? DataUrl(string path, bool directory, bool useFileAttributes)
    {
        if (string.IsNullOrWhiteSpace(path))
            return null;

        var attributes = directory ? FileAttributeDirectory : FileAttributeNormal;
        var flags = ShgfiIcon | ShgfiLargeIcon | (useFileAttributes ? ShgfiUseFileAttributes : 0);

        var info = new ShellFileInfo();
        if (ShellGetFileInfo(path, attributes, ref info, (uint)Marshal.SizeOf<ShellFileInfo>(), flags) == IntPtr.Zero
            || info.Icon == IntPtr.Zero)
            return null;

        try
        {
            return Try.Run(() => ToDataUrl(info.Icon)).GetOrNull();
        }
        finally
        {
            DestroyIcon(info.Icon);
        }
    }

    private static string? ToDataUrl(IntPtr icon)
    {
        if (!GetIconInfo(icon, out var info))
            return null;

        try
        {
            if (info.ColorBitmap == IntPtr.Zero)
                return null;

            if (GetObject(info.ColorBitmap, Marshal.SizeOf<Bitmap>(), out var bitmap) == 0)
                return null;

            var width = bitmap.Width;
            var height = Math.Abs(bitmap.Height);
            if (width <= 0 || height <= 0 || width > 256 || height > 256)
                return null;

            var header = new BitmapInfoHeader
            {
                Size = (uint)Marshal.SizeOf<BitmapInfoHeader>(),
                Width = width,
                Height = -height, // top-down rows
                Planes = 1,
                BitCount = 32,
                Compression = BiRgb
            };

            var pixels = new byte[width * height * 4];
            var dc = GetDC(IntPtr.Zero);

            if (dc == IntPtr.Zero)
                return null;

            try
            {
                if (GetDIBits(dc, info.ColorBitmap, 0, (uint)height, pixels, ref header, DibRgbColors) == 0)
                    return null;
            }
            finally
            {
                ReleaseDC(IntPtr.Zero, dc);
            }

            // The shell stores BGRA; icons drawn without alpha come back fully transparent.
            var hasAlpha = false;
            for (var index = 3; index < pixels.Length; index += 4)
                if (pixels[index] != 0)
                {
                    hasAlpha = true;
                    break;
                }

            for (var index = 0; index < pixels.Length; index += 4)
            {
                (pixels[index], pixels[index + 2]) = (pixels[index + 2], pixels[index]);
                if (!hasAlpha)
                    pixels[index + 3] = 0xFF;
            }

            return $"data:image/png;base64,{Convert.ToBase64String(Png.Encode(width, height, pixels))}";
        }
        finally
        {
            if (info.MaskBitmap != IntPtr.Zero)
                DeleteObject(info.MaskBitmap);

            if (info.ColorBitmap != IntPtr.Zero)
                DeleteObject(info.ColorBitmap);
        }
    }

    [DllImport("shell32.dll", EntryPoint = "SHGetFileInfoW", CharSet = CharSet.Unicode)]
    private static extern IntPtr ShellGetFileInfo(string path, uint attributes, ref ShellFileInfo info, uint size,
        uint flags);

    [DllImport("user32.dll")]
    private static extern bool DestroyIcon(IntPtr icon);

    [DllImport("user32.dll")]
    private static extern bool GetIconInfo(IntPtr icon, out IconInfo info);

    [DllImport("user32.dll")]
    private static extern IntPtr GetDC(IntPtr window);

    [DllImport("user32.dll")]
    private static extern int ReleaseDC(IntPtr window, IntPtr dc);

    [DllImport("gdi32.dll", EntryPoint = "GetObjectW")]
    private static extern int GetObject(IntPtr handle, int size, out Bitmap bitmap);

    [DllImport("gdi32.dll")]
    private static extern int GetDIBits(IntPtr dc, IntPtr bitmap, uint start, uint lines, byte[] bits,
        ref BitmapInfoHeader header, uint usage);

    [DllImport("gdi32.dll")]
    private static extern bool DeleteObject(IntPtr handle);

    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
    private struct ShellFileInfo
    {
        public IntPtr Icon;
        public int IconIndex;
        public uint Attributes;

        [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 260)]
        public string DisplayName;

        [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 80)]
        public string TypeName;
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct IconInfo
    {
        [MarshalAs(UnmanagedType.Bool)] public bool IsIcon;

        public uint HotspotX;
        public uint HotspotY;
        public IntPtr MaskBitmap;
        public IntPtr ColorBitmap;
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct Bitmap
    {
        public int Type;
        public int Width;
        public int Height;
        public int WidthBytes;
        public ushort Planes;
        public ushort BitsPixel;
        public IntPtr Bits;
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct BitmapInfoHeader
    {
        public uint Size;
        public int Width;
        public int Height;
        public ushort Planes;
        public ushort BitCount;
        public uint Compression;
        public uint SizeImage;
        public int XPelsPerMeter;
        public int YPelsPerMeter;
        public uint ColorsUsed;
        public uint ColorsImportant;
    }
}