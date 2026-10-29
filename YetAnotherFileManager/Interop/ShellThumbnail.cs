using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using Serilog;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     Real thumbnails from the shell: the same picture Explorer's gallery shows, at the size we ask
///     for, so the gallery never decodes a full-size photo itself.
/// </summary>
/// <remarks>
///     The application is trimmed, which turns built-in COM interop off, so the interface is walked
///     by hand instead of through <c>[ComImport]</c>: one QueryInterface-less cast, one vtable slot.
/// </remarks>
[SupportedOSPlatform("windows")]
internal static unsafe class ShellThumbnail
{
    private const int SiigbfResizeToFit = 0x00;
    private const int SiigbfBiggerSizeOk = 0x01;

    /// <summary><c>IUnknown::Release</c> lives at slot 2 of every COM vtable.</summary>
    private const int ReleaseSlot = 2;

    /// <summary><c>IShellItemImageFactory::GetImage</c> follows the three IUnknown slots.</summary>
    private const int GetImageSlot = 3;

    private static readonly Guid ImageFactoryId = new("bcc18b79-ba16-442f-80c4-8a59c30c463b");

    public static string? DataUrl(string path, int size)
    {
        if (string.IsNullOrWhiteSpace(path) || !File.Exists(path))
            return null;

        try
        {
            if (SHCreateItemFromParsingName(path, IntPtr.Zero, in ImageFactoryId, out var item) != 0
                || item == IntPtr.Zero)
                return null;

            try
            {
                var getImage = (delegate* unmanaged[Stdcall]<IntPtr, NativeSize, int, IntPtr*, int>)
                    (*(IntPtr**)item)[GetImageSlot];

                var request = new NativeSize { Width = size, Height = size };
                var bitmap = IntPtr.Zero;

                if (getImage(item, request, SiigbfResizeToFit | SiigbfBiggerSizeOk, &bitmap) != 0
                    || bitmap == IntPtr.Zero)
                    return null;

                try
                {
                    return BitmapImage.ToDataUrl(bitmap);
                }
                finally
                {
                    DeleteObject(bitmap);
                }
            }
            finally
            {
                ((delegate* unmanaged[Stdcall]<IntPtr, uint>)(*(IntPtr**)item)[ReleaseSlot])(item);
            }
        }
        catch (Exception ex)
        {
            Log.Debug(ex, "Could not read a thumbnail for {Path}", path);
            return null;
        }
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct NativeSize
    {
        public int Width;
        public int Height;
    }

    [DllImport("shell32.dll", CharSet = CharSet.Unicode, ExactSpelling = true)]
    private static extern int SHCreateItemFromParsingName(string path, IntPtr bindContext, in Guid iid,
        out IntPtr item);

    [DllImport("gdi32.dll")]
    private static extern bool DeleteObject(IntPtr handle);
}
