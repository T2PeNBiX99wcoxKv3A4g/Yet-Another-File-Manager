using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Runtime.Versioning;
using Serilog;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     A thumbnail drawn by the app itself. The shell's image factory flattens some pictures onto
///     black, losing the alpha a PNG sticker carries, so alpha-capable formats are decoded here and
///     rescaled onto a transparent bitmap instead.
/// </summary>
[SupportedOSPlatform("windows")]
internal static class ImageThumbnail
{
    /// <summary>Decodes an image and returns a PNG of it at most <paramref name="size" /> pixels large.</summary>
    public static byte[]? Png(string path, int size)
    {
        try
        {
            using var image = Image.FromFile(path);

            if (image.Width <= 0 || image.Height <= 0)
                return null;

            var scale = Math.Min((double)size / image.Width, (double)size / image.Height);
            var width = Math.Max(1, (int)Math.Round(image.Width * Math.Min(scale, 1d)));
            var height = Math.Max(1, (int)Math.Round(image.Height * Math.Min(scale, 1d)));

            using var bitmap = new Bitmap(width, height, PixelFormat.Format32bppArgb);

            using (var graphics = Graphics.FromImage(bitmap))
            {
                graphics.Clear(Color.Transparent);
                graphics.CompositingMode = CompositingMode.SourceOver;
                graphics.CompositingQuality = CompositingQuality.HighQuality;
                graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
                graphics.PixelOffsetMode = PixelOffsetMode.HighQuality;
                graphics.SmoothingMode = SmoothingMode.HighQuality;
                graphics.DrawImage(image, new Rectangle(0, 0, width, height));
            }

            using var stream = new MemoryStream();
            bitmap.Save(stream, ImageFormat.Png);
            return stream.ToArray();
        }
        catch (Exception ex)
        {
            Log.Debug(ex, "Could not draw a thumbnail for {Path}", path);
            return null;
        }
    }
}
