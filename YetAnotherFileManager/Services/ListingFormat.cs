using System.Buffers.Binary;
using System.Globalization;
using System.Text;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The block a folder listing travels in. One header, then fixed-width columns, then the string
///     pool: the web view reads the columns as typed arrays and decodes only the names it needs, so a
///     page costs one copy of its bytes instead of a parsed object per entry.
/// </summary>
/// <remarks>
///     Layout, little-endian:
///     <code>
///     header   "YLST" u16 version u16 flags u32 count u32 poolBytes u32 pathBytes
///              u32 iconCount u32 extraCount u32 reserved                         (32 bytes)
///     columns  f64[count] size, modified, created
///              u32[count] nameOffset  u16[count] nameLength
///              u16[count] iconIndex   u16[count] linkIndex                     (36 bytes per entry)
///              u8[count] flags        u8[count] linkCount
///     tables   (u32 offset, u16 length) per icon
///              (u32 entry, u32 offset, u16 length) per link target
///     pool     base path, then names, icons and link targets as UTF-8
///     </code>
///     The columns start 8-byte aligned and keep that alignment, which is what lets the reader wrap
///     them in <c>Float64Array</c>/<c>Uint32Array</c> views without copying.
/// </remarks>
internal static class ListingFormat
{
    public const ushort Version = 1;
    public const string ContentType = "application/x-yafm-listing";

    private const int HeaderSize = 32;
    private const int EntrySize = 36;
    private const ushort None = ushort.MaxValue;

    private const byte DirectoryFlag = 1;
    private const byte HiddenFlag = 2;
    private const byte SystemFlag = 4;
    private const byte EncryptedFlag = 8;
    private const byte LinkValidFlag = 16;

    public static byte[] Encode(IReadOnlyList<FileEntry> entries, string basePath)
    {
        var count = entries.Count;
        var pool = new List<byte>(count * 24);

        void Add(string value, out int offset, out int length)
        {
            offset = pool.Count;
            var bytes = Encoding.UTF8.GetBytes(value);
            pool.AddRange(bytes);
            length = bytes.Length;
        }

        Add(basePath, out _, out var pathBytes);

        var nameOffsets = new int[count];
        var nameLengths = new int[count];

        for (var i = 0; i < count; i++)
            Add(entries[i].Name, out nameOffsets[i], out nameLengths[i]);

        var iconIndexes = new ushort[count];
        var iconTable = new List<(int Offset, int Length)>();
        var iconLookup = new Dictionary<string, ushort>(StringComparer.Ordinal);

        for (var i = 0; i < count; i++)
        {
            iconIndexes[i] = None;

            if (entries[i].IconSource is not { } icon)
                continue;

            if (!iconLookup.TryGetValue(icon, out var iconAt))
            {
                iconAt = (ushort)iconTable.Count;
                iconLookup[icon] = iconAt;
                Add(icon, out var offset, out var length);
                iconTable.Add((offset, length));
            }

            iconIndexes[i] = iconAt;
        }

        var linkIndexes = new ushort[count];
        var extras = new List<(int Entry, int Offset, int Length)>();

        for (var i = 0; i < count; i++)
        {
            linkIndexes[i] = None;

            if (entries[i].LinkTarget is not { } target)
                continue;

            linkIndexes[i] = (ushort)extras.Count;
            Add(target, out var offset, out var length);
            extras.Add((i, offset, length));
        }

        var buffer = new byte[HeaderSize + EntrySize * count + iconTable.Count * 6 + extras.Count * 10 + pool.Count];
        var span = buffer.AsSpan();

        "YLST"u8.CopyTo(span);
        BinaryPrimitives.WriteUInt16LittleEndian(span[4..], Version);
        BinaryPrimitives.WriteUInt16LittleEndian(span[6..], 0);
        BinaryPrimitives.WriteUInt32LittleEndian(span[8..], (uint)count);
        BinaryPrimitives.WriteUInt32LittleEndian(span[12..], (uint)pool.Count);
        BinaryPrimitives.WriteUInt32LittleEndian(span[16..], (uint)pathBytes);
        BinaryPrimitives.WriteUInt32LittleEndian(span[20..], (uint)iconTable.Count);
        BinaryPrimitives.WriteUInt32LittleEndian(span[24..], (uint)extras.Count);
        BinaryPrimitives.WriteUInt32LittleEndian(span[28..], 0);

        var at = HeaderSize;

        foreach (var entry in entries)
        {
            BinaryPrimitives.WriteDoubleLittleEndian(span[at..], entry.Size);
            at += 8;
        }

        foreach (var entry in entries)
        {
            BinaryPrimitives.WriteDoubleLittleEndian(span[at..], entry.Modified);
            at += 8;
        }

        foreach (var entry in entries)
        {
            BinaryPrimitives.WriteDoubleLittleEndian(span[at..], entry.Created);
            at += 8;
        }

        foreach (var offset in nameOffsets)
        {
            BinaryPrimitives.WriteUInt32LittleEndian(span[at..], (uint)offset);
            at += 4;
        }

        foreach (var length in nameLengths)
        {
            BinaryPrimitives.WriteUInt16LittleEndian(span[at..], (ushort)length);
            at += 2;
        }

        foreach (var index in iconIndexes)
        {
            BinaryPrimitives.WriteUInt16LittleEndian(span[at..], index);
            at += 2;
        }

        foreach (var index in linkIndexes)
        {
            BinaryPrimitives.WriteUInt16LittleEndian(span[at..], index);
            at += 2;
        }

        for (var i = 0; i < count; i++)
        {
            var entry = entries[i];
            span[at++] = (byte)((entry.IsDirectory ? DirectoryFlag : 0)
                                | (entry.IsHidden ? HiddenFlag : 0)
                                | (entry.IsSystem ? SystemFlag : 0)
                                | (entry.IsEncrypted is true ? EncryptedFlag : 0)
                                | (entry.LinkValid is true ? LinkValidFlag : 0));
        }

        for (var i = 0; i < count; i++)
            span[at++] = (byte)Math.Clamp(entries[i].LinkCount, 0, byte.MaxValue);

        foreach (var (offset, length) in iconTable)
        {
            BinaryPrimitives.WriteUInt32LittleEndian(span[at..], (uint)offset);
            at += 4;
            BinaryPrimitives.WriteUInt16LittleEndian(span[at..], (ushort)length);
            at += 2;
        }

        foreach (var (entry, offset, length) in extras)
        {
            BinaryPrimitives.WriteUInt32LittleEndian(span[at..], (uint)entry);
            at += 4;
            BinaryPrimitives.WriteUInt32LittleEndian(span[at..], (uint)offset);
            at += 4;
            BinaryPrimitives.WriteUInt16LittleEndian(span[at..], (ushort)length);
            at += 2;
        }

        pool.CopyTo(span[at..]);
        return buffer;
    }

    /// <summary>
    ///     A block rendered as text, for <c>--listing-dump</c>: the encoder writes it, this reads it
    ///     back, so a broken layout shows up without the window.
    /// </summary>
    public static string Dump(ReadOnlySpan<byte> block)
    {
        if (block.Length < HeaderSize || !block[..4].SequenceEqual("YLST"u8))
            return "not a listing block";

        var version = BinaryPrimitives.ReadUInt16LittleEndian(block[4..]);
        var count = (int)BinaryPrimitives.ReadUInt32LittleEndian(block[8..]);
        var poolBytes = (int)BinaryPrimitives.ReadUInt32LittleEndian(block[12..]);
        var pathBytes = (int)BinaryPrimitives.ReadUInt32LittleEndian(block[16..]);
        var iconCount = (int)BinaryPrimitives.ReadUInt32LittleEndian(block[20..]);
        var extraCount = (int)BinaryPrimitives.ReadUInt32LittleEndian(block[24..]);

        var at = HeaderSize;
        var size = block.Slice(at, count * 8);
        at += count * 8;
        var modified = block.Slice(at, count * 8);
        at += count * 8;
        var created = block.Slice(at, count * 8);
        at += count * 8;
        var nameOffsets = block.Slice(at, count * 4);
        at += count * 4;
        var nameLengths = block.Slice(at, count * 2);
        at += count * 2;
        var iconIndexes = block.Slice(at, count * 2);
        at += count * 2;
        var linkIndexes = block.Slice(at, count * 2);
        at += count * 2;
        var flags = block.Slice(at, count);
        at += count;
        var linkCounts = block.Slice(at, count);
        at += count;

        var iconOffsets = new int[iconCount];
        for (var i = 0; i < iconCount; i++)
        {
            iconOffsets[i] = (int)BinaryPrimitives.ReadUInt32LittleEndian(block[at..]);
            at += 6;
        }

        var linkTargets = new Dictionary<int, string>();
        for (var i = 0; i < extraCount; i++)
        {
            var entry = (int)BinaryPrimitives.ReadUInt32LittleEndian(block[at..]);
            var offset = (int)BinaryPrimitives.ReadUInt32LittleEndian(block[(at + 4)..]);
            var length = (int)BinaryPrimitives.ReadUInt16LittleEndian(block[(at + 8)..]);
            at += 10;

            var poolStart = block.Length - poolBytes;
            linkTargets[entry] = Encoding.UTF8.GetString(block.Slice(poolStart + offset, length));
        }

        var strings = block[(block.Length - poolBytes)..];
        var basePath = Encoding.UTF8.GetString(strings[..pathBytes]);

        var text = new StringBuilder();
        text.AppendLine(CultureInfo.InvariantCulture,
            $"listing v{version} · {count} entries · pool {poolBytes} bytes · total block {block.Length} bytes");
        text.AppendLine($"path: {basePath}");

        for (var i = 0; i < count; i++)
        {
            var nameAt = (int)BinaryPrimitives.ReadUInt32LittleEndian(nameOffsets[(i * 4)..]);
            var nameLength = (int)BinaryPrimitives.ReadUInt16LittleEndian(nameLengths[(i * 2)..]);
            var name = Encoding.UTF8.GetString(strings.Slice(nameAt, nameLength));
            var iconIndex = BinaryPrimitives.ReadUInt16LittleEndian(iconIndexes[(i * 2)..]);
            var linkIndex = BinaryPrimitives.ReadUInt16LittleEndian(linkIndexes[(i * 2)..]);

            text.AppendLine(CultureInfo.InvariantCulture,
                $"{i,6} {name,-44} size={BinaryPrimitives.ReadDoubleLittleEndian(size[(i * 8)..]),14:N0}" +
                $" modified={BinaryPrimitives.ReadDoubleLittleEndian(modified[(i * 8)..]),14:N0}" +
                $" flags={flags[i]:x2} links={linkCounts[i]}" +
                $"{(iconIndex == None ? "" : " icon")}" +
                $"{(linkIndex == None ? "" : $" -> {linkTargets.GetValueOrDefault(i)}")}");
        }

        return text.ToString();
    }
}
