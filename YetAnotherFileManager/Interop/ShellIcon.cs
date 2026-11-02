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
internal static unsafe partial class ShellIcon
{
    private const uint ShgfiIcon = 0x000000100;
    private const uint ShgfiLargeIcon = 0x000000000;
    private const uint ShgfiSysIconIndex = 0x000004000;
    private const uint ShgfiUseFileAttributes = 0x000000010;

    private const uint FileAttributeDirectory = 0x00000010;
    private const uint FileAttributeNormal = 0x00000080;

    /// <summary><c>SHIL_JUMBO</c>: the 256×256 image list, for grid tiles that need sharp icons.</summary>
    private const int ShilJumbo = 0x4;

    /// <summary><c>ILD_TRANSPARENT</c>.</summary>
    private const uint IldTransparent = 0x1;

    private const int ReleaseSlot = 2;

    /// <summary>
    ///     <c>IImageList::GetIcon</c>. The vtable is Add, ReplaceIcon, SetOverlayImage, Replace,
    ///     AddMasked, Draw, <b>Remove</b>, GetIcon — the Remove slot is easy to miss.
    /// </summary>
    private const int GetIconSlot = 10;

    private static readonly Guid ImageListId = new("46EB5926-582E-4017-9FDF-E8998DAA0950");

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

    /// <summary>
    ///     The 256×256 version of the same icon, for grid tiles. Falls back to the normal large icon
    ///     when the jumbo image list or the icon itself is missing.
    /// </summary>
    public static unsafe string? JumboDataUrl(string path, bool directory, bool useFileAttributes)
    {
        if (string.IsNullOrWhiteSpace(path))
            return null;

        try
        {
            var attributes = directory ? FileAttributeDirectory : FileAttributeNormal;
            var flags = ShgfiSysIconIndex | (useFileAttributes ? ShgfiUseFileAttributes : 0);
            var info = new ShellFileInfo();

            if (ShellGetFileInfo(path, attributes, ref info, (uint)Marshal.SizeOf<ShellFileInfo>(), flags) == IntPtr.Zero)
                return DataUrl(path, directory, useFileAttributes);

            if (SHGetImageList(ShilJumbo, in ImageListId, out var list) != 0 || list == IntPtr.Zero)
                return DataUrl(path, directory, useFileAttributes);

            try
            {
                var getIcon = (delegate* unmanaged[Stdcall]<IntPtr, int, uint, IntPtr*, int>)
                    (*(IntPtr**)list)[GetIconSlot];

                var icon = IntPtr.Zero;

                if (getIcon(list, info.IconIndex, IldTransparent, &icon) != 0 || icon == IntPtr.Zero)
                    return DataUrl(path, directory, useFileAttributes);

                try
                {
                    return ToDataUrl(icon);
                }
                finally
                {
                    DestroyIcon(icon);
                }
            }
            finally
            {
                ((delegate* unmanaged[Stdcall]<IntPtr, uint>)(*(IntPtr**)list)[ReleaseSlot])(list);
            }
        }
        catch (Exception ex)
        {
            Serilog.Log.Debug(ex, "Could not read a jumbo icon for {Path}", path);
            return DataUrl(path, directory, useFileAttributes);
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
                fixed (byte* buffer = pixels)
                {
                    if (GetDIBits(dc, info.ColorBitmap, 0, (uint)height, buffer, ref header, DibRgbColors) == 0)
                        return null;
                }
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

    [LibraryImport("shell32.dll", EntryPoint = "SHGetFileInfoW", StringMarshalling = StringMarshalling.Utf16)]
    private static partial IntPtr ShellGetFileInfo(string path, uint attributes, ref ShellFileInfo info, uint size,
        uint flags);

    [LibraryImport("shell32.dll")]
    private static partial int SHGetImageList(int imageList, in Guid riid, out IntPtr list);

    [LibraryImport("user32.dll")]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool DestroyIcon(IntPtr icon);

    [LibraryImport("user32.dll")]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool GetIconInfo(IntPtr icon, out IconInfo info);

    [LibraryImport("user32.dll")]
    private static partial IntPtr GetDC(IntPtr window);

    [LibraryImport("user32.dll")]
    private static partial int ReleaseDC(IntPtr window, IntPtr dc);

    [LibraryImport("gdi32.dll", EntryPoint = "GetObjectW")]
    private static partial int GetObject(IntPtr handle, int size, out Bitmap bitmap);

    // The pixels are passed as a fixed buffer, whose length the generator cannot infer from a byte[].
    [LibraryImport("gdi32.dll")]
    private static partial int GetDIBits(IntPtr dc, IntPtr bitmap, uint start, uint lines, byte* bits,
        ref BitmapInfoHeader header, uint usage);

    [LibraryImport("gdi32.dll")]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool DeleteObject(IntPtr handle);

    // Matches SHFILEINFOW exactly: three fields, then the display and type names as wide chars.
    [StructLayout(LayoutKind.Sequential)]
    private struct ShellFileInfo
    {
        public IntPtr Icon;
        public int IconIndex;
        public uint Attributes;
        public fixed char DisplayName[260];
        public fixed char TypeName[80];
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct IconInfo
    {
        // BOOL, so the struct stays blittable for LibraryImport; only the two bitmaps are used.
        public int IsIcon;

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