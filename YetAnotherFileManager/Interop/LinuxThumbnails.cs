using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     Image thumbnails through GDK Pixbuf, which is already present wherever the GTK web view runs.
///     It decodes the common image formats and writes the scaled result as PNG.
/// </summary>
[SupportedOSPlatform("linux")]
internal static partial class LinuxThumbnails
{
    /// <summary>A scaled PNG of <paramref name="path" />, or null when no loader can read it.</summary>
    public static byte[]? Png(string path, int size) =>
        Try.Run(() =>
        {
            var pixbuf = gdk_pixbuf_new_from_file_at_scale(path, size, size, true, out var error);
            if (pixbuf == IntPtr.Zero)
            {
                FreeError(error);
                return null;
            }

            try
            {
                if (!gdk_pixbuf_save_to_bufferv(pixbuf, out var buffer, out var length, "png",
                        IntPtr.Zero, IntPtr.Zero, out error))
                {
                    FreeError(error);
                    return null;
                }

                try
                {
                    var bytes = new byte[(int)length];
                    Marshal.Copy(buffer, bytes, 0, bytes.Length);
                    return bytes.Length > 0 ? bytes : null;
                }
                finally
                {
                    g_free(buffer);
                }
            }
            finally
            {
                g_object_unref(pixbuf);
            }
        }).GetOrElse(ex =>
        {
            Log.Debug(ex, "Could not render the thumbnail of {Path}", path);
            return null;
        });

    private static void FreeError(IntPtr error)
    {
        if (error != IntPtr.Zero)
            g_error_free(error);
    }

    [LibraryImport("libgdk_pixbuf-2.0.so.0", StringMarshalling = StringMarshalling.Utf8)]
    private static partial IntPtr gdk_pixbuf_new_from_file_at_scale(string filename, int width, int height,
        [MarshalAs(UnmanagedType.Bool)] bool preserveAspectRatio, out IntPtr error);

    [LibraryImport("libgdk_pixbuf-2.0.so.0", StringMarshalling = StringMarshalling.Utf8)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool gdk_pixbuf_save_to_bufferv(IntPtr pixbuf, out IntPtr buffer, out nuint bufferSize,
        string type, IntPtr optionKeys, IntPtr optionValues, out IntPtr error);

    [LibraryImport("libgobject-2.0.so.0")]
    private static partial void g_object_unref(IntPtr obj);

    [LibraryImport("libglib-2.0.so.0")]
    private static partial void g_free(IntPtr pointer);

    [LibraryImport("libglib-2.0.so.0")]
    private static partial void g_error_free(IntPtr error);
}
