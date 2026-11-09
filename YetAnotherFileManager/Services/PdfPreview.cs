using System.Buffers.Binary;
using System.IO.Compression;
using System.Text;
using Docnet.Core;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Renders the first page of a PDF to a PNG. Only this short-lived helper process loads PDFium;
///     the window process receives a plain bitmap, never the PDF document itself.
/// </summary>
internal static class PdfPreview
{
    private const int MaxDimension = 1024;

    private static readonly uint[] Table = CreateTable();

    /// <summary>Renders <c>input</c> to <c>output</c>; the caller deletes the temporary PNG.</summary>
    public static bool TryRender(string input, string output)
    {
        try
        {
            if (!File.Exists(input))
                return false;

            using var document = DocLib.Instance.GetDocReader(input, new(MaxDimension, MaxDimension));
            if (document.GetPageCount() == 0)
                return false;

            using var page = document.GetPageReader(0);

            var width = page.GetPageWidth();
            var height = page.GetPageHeight();
            if (width <= 0 || height <= 0)
                return false;

            var pixels = page.GetImage();
            if (pixels.Length < width * height * 4)
                return false;

            File.WriteAllBytes(output, EncodePng(width, height, pixels));
            return true;
        }
        catch
        {
            return false;
        }
    }

    /// <summary>A minimal RGBA PNG writer; PDFium hands back B-G-R-A pixels.</summary>
    private static byte[] EncodePng(int width, int height, byte[] pixels)
    {
        using var png = new MemoryStream();
        png.Write([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

        Span<byte> header = stackalloc byte[13];
        BinaryPrimitives.WriteUInt32BigEndian(header, (uint)width);
        BinaryPrimitives.WriteUInt32BigEndian(header[4..], (uint)height);
        header[8] = 8;
        header[9] = 6;
        WriteChunk(png, "IHDR", header);

        using var raw = new MemoryStream(width * height * 4 + height);

        for (var y = 0; y < height; y++)
        {
            raw.WriteByte(0);

            for (var x = 0; x < width; x++)
            {
                var at = (y * width + x) * 4;
                var blue = pixels[at];
                var green = pixels[at + 1];
                var red = pixels[at + 2];
                var alpha = pixels[at + 3];

                // PDFium leaves the page background transparent; compose it over white.
                raw.WriteByte((byte)((red * alpha + 255 * (255 - alpha)) / 255));
                raw.WriteByte((byte)((green * alpha + 255 * (255 - alpha)) / 255));
                raw.WriteByte((byte)((blue * alpha + 255 * (255 - alpha)) / 255));
                raw.WriteByte(255);
            }
        }

        using var compressed = new MemoryStream();
        raw.Position = 0;

        using (var zlib = new ZLibStream(compressed, CompressionLevel.Fastest, true))
            raw.CopyTo(zlib);

        WriteChunk(png, "IDAT", compressed.ToArray());
        WriteChunk(png, "IEND", []);
        return png.ToArray();
    }

    private static void WriteChunk(Stream output, string type, ReadOnlySpan<byte> data)
    {
        Span<byte> number = stackalloc byte[4];
        BinaryPrimitives.WriteUInt32BigEndian(number, (uint)data.Length);
        output.Write(number);

        var name = Encoding.ASCII.GetBytes(type);
        output.Write(name);
        output.Write(data);

        var crc = Crc32(name, data);
        BinaryPrimitives.WriteUInt32BigEndian(number, crc);
        output.Write(number);
    }

    private static uint Crc32(ReadOnlySpan<byte> name, ReadOnlySpan<byte> data)
    {
        var crc = 0xFFFF_FFFFu;

        foreach (var value in name)
            crc = Table[(crc ^ value) & 0xFF] ^ crc >> 8;

        foreach (var value in data)
            crc = Table[(crc ^ value) & 0xFF] ^ crc >> 8;

        return crc ^ 0xFFFF_FFFFu;
    }

    private static uint[] CreateTable()
    {
        var table = new uint[256];

        for (var index = 0; index < table.Length; index++)
        {
            var value = (uint)index;

            for (var bit = 0; bit < 8; bit++)
                value = (value & 1) != 0 ? 0xEDB8_8320u ^ value >> 1 : value >> 1;

            table[index] = value;
        }

        return table;
    }
}