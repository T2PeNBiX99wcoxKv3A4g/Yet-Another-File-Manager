using System.Buffers.Binary;
using System.IO.Compression;
using System.Text;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     A minimal PNG writer for the shell icons: 8-bit RGBA, one filter byte per row, deflate via
///     <see cref="ZLibStream" />. Kept here instead of a drawing library so the icon path does not
///     pull a native graphics stack into a trimmed, self-contained build.
/// </summary>
internal static class Png
{
    private static readonly byte[] Signature = [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A];
    private static readonly uint[] CrcTable = BuildCrcTable();

    public static byte[] Encode(int width, int height, byte[] rgba)
    {
        using var output = new MemoryStream();

        output.Write(Signature);
        WriteChunk(output, "IHDR", Header(width, height));
        WriteChunk(output, "IDAT", Deflate(width, height, rgba));
        WriteChunk(output, "IEND", []);

        return output.ToArray();
    }

    private static byte[] Header(int width, int height)
    {
        var header = new byte[13];
        BinaryPrimitives.WriteInt32BigEndian(header.AsSpan(0), width);
        BinaryPrimitives.WriteInt32BigEndian(header.AsSpan(4), height);
        header[8] = 8;  // bit depth
        header[9] = 6;  // colour type: truecolour with alpha
        return header;
    }

    private static byte[] Deflate(int width, int height, byte[] rgba)
    {
        using var raw = new MemoryStream();

        // Each scanline is prefixed with its filter type; 0 means "no filter".
        for (var row = 0; row < height; row++)
        {
            raw.WriteByte(0);
            raw.Write(rgba, row * width * 4, width * 4);
        }

        raw.Position = 0;

        using var compressed = new MemoryStream();
        using (var zlib = new ZLibStream(compressed, CompressionLevel.Optimal, true))
            raw.CopyTo(zlib);

        return compressed.ToArray();
    }

    private static void WriteChunk(Stream output, string type, byte[] data)
    {
        var length = new byte[4];
        BinaryPrimitives.WriteInt32BigEndian(length, data.Length);
        output.Write(length);

        var typeBytes = Encoding.ASCII.GetBytes(type);
        output.Write(typeBytes);
        output.Write(data);

        var crc = new byte[4];
        BinaryPrimitives.WriteUInt32BigEndian(crc, Crc32(typeBytes, data));
        output.Write(crc);
    }

    private static uint Crc32(byte[] type, byte[] data)
    {
        var crc = 0xFFFFFFFFu;

        foreach (var value in type)
            crc = CrcTable[(crc ^ value) & 0xFF] ^ (crc >> 8);

        foreach (var value in data)
            crc = CrcTable[(crc ^ value) & 0xFF] ^ (crc >> 8);

        return crc ^ 0xFFFFFFFFu;
    }

    private static uint[] BuildCrcTable()
    {
        var table = new uint[256];

        for (var index = 0u; index < table.Length; index++)
        {
            var value = index;

            for (var bit = 0; bit < 8; bit++)
                value = (value & 1) != 0 ? 0xEDB88320u ^ (value >> 1) : value >> 1;

            table[index] = value;
        }

        return table;
    }
}
