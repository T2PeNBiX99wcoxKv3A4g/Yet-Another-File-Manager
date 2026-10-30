using System.Runtime.InteropServices;
using System.Runtime.Versioning;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     Turns a GDI bitmap (an icon or a shell thumbnail) into a PNG data URL the interface can show.
/// </summary>
[SupportedOSPlatform("windows")]
internal static class BitmapImage
{
    private const int DibRgbColors = 0;
    private const int BiRgb = 0;
    private const int MaxSize = 1024;

    public static string? ToDataUrl(IntPtr bitmap)
    {
        if (bitmap == IntPtr.Zero)
            return null;

        if (GetObject(bitmap, Marshal.SizeOf<Bitmap>(), out var info) == 0)
            return null;

        var width = info.Width;
        var height = Math.Abs(info.Height);

        if (width is <= 0 or > MaxSize || height is <= 0 or > MaxSize)
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
            if (GetDIBits(dc, bitmap, 0, (uint)height, pixels, ref header, DibRgbColors) == 0)
                return null;
        }
        finally
        {
            ReleaseDC(IntPtr.Zero, dc);
        }

        // GDI hands the pixels over as BGRA; a bitmap without an alpha channel comes back transparent.
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

    [DllImport("gdi32.dll", EntryPoint = "GetObjectW")]
    private static extern int GetObject(IntPtr handle, int size, out Bitmap bitmap);

    [DllImport("user32.dll")]
    private static extern IntPtr GetDC(IntPtr window);

    [DllImport("user32.dll")]
    private static extern int ReleaseDC(IntPtr window, IntPtr dc);

    [DllImport("gdi32.dll")]
    private static extern int GetDIBits(IntPtr dc, IntPtr bitmap, uint start, uint lines, byte[] bits,
        ref BitmapInfoHeader header, uint usage);

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