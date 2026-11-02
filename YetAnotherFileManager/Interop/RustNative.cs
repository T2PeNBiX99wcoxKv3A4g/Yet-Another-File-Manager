using System.Buffers.Binary;
using System.Runtime.InteropServices;
using System.Text;
using Serilog;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     The Rust helper for bulk filesystem work. The gallery scan is the first caller: a picture
///     library is mostly directory entries, and the native walk spreads that over every core.
/// </summary>
/// <remarks>
///     The library is optional. A source checkout without cargo, a platform with no prebuilt
///     artifact or a trimmed publish without the file all fall back to the managed walk, so nothing
///     here may ever throw into a caller.
/// </remarks>
internal static unsafe class RustNative
{
    private static readonly Lazy<bool> Ready = new(TryInitialize);

    /// <summary>Whether the native library was loaded and its entry points resolved.</summary>
    public static bool Available => Ready.Value;

    private static ScanImagesDelegate? _scanImages;
    private static FreeBufferDelegate? _freeBuffer;
    private static CompressDelegate? _compress;

    [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
    private delegate int ScanImagesDelegate(ushort* root, nuint rootLength, uint depth, uint threads,
        ushort* extensions, nuint extensionsLength, out byte* result, out nuint length);

    [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
    private delegate void FreeBufferDelegate(byte* pointer, nuint length);

    [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
    private delegate int CompressDelegate(ushort* paths, nuint pathsLength, ushort* output,
        nuint outputLength, uint threads);

    /// <summary>
    ///     Pictures under <paramref name="root"/>, or null when the library is missing or the scan
    ///     failed. <paramref name="extensions"/> is semicolon separated and may include the dot.
    /// </summary>
    public static List<GalleryEntry>? ScanImages(string root, int depth, string extensions)
    {
        if (!Ready.Value || _scanImages is null || _freeBuffer is null)
            return null;

        byte* result = null;
        nuint length = 0;

        fixed (char* rootPointer = root)
        fixed (char* extensionPointer = extensions)
        {
            var status = _scanImages((ushort*)rootPointer, (nuint)root.Length, (uint)depth,
                (uint)Math.Clamp(Environment.ProcessorCount, 2, 64),
                (ushort*)extensionPointer, (nuint)extensions.Length, out result, out length);

            if (status != 0)
                return null;
        }

        if (result is null || length < 4)
        {
            if (result is not null)
                _freeBuffer(result, length);

            return [];
        }

        try
        {
            return Parse(result, length);
        }
        finally
        {
            _freeBuffer(result, length);
        }
    }

    /// <summary>
    ///     Compresses the paths into a ZIP with the native writer. False when the library is missing
    ///     or the archive could not be written; the managed writer then takes over.
    /// </summary>
    public static bool TryCompress(IReadOnlyList<string> paths, string output)
    {
        if (!Ready.Value || _compress is null || paths.Count == 0)
            return false;

        var joined = string.Join('\0', paths);

        fixed (char* pathsPointer = joined)
        fixed (char* outputPointer = output)
            return _compress((ushort*)pathsPointer, (nuint)joined.Length,
                (ushort*)outputPointer, (nuint)output.Length,
                (uint)Math.Clamp(Environment.ProcessorCount, 1, 64)) == 0;
    }

    private static List<GalleryEntry> Parse(byte* data, nuint length)
    {
        var span = new ReadOnlySpan<byte>(data, checked((int)length));
        var offset = 0;
        var count = (int)ReadUInt32(span, ref offset);
        var entries = new List<GalleryEntry>(Math.Min(count, 1_000_000));

        for (var index = 0; index < count; index++)
        {
            var pathLength = (int)ReadUInt32(span, ref offset);
            var nameLength = (int)ReadUInt32(span, ref offset);
            var modified = ReadInt64(span, ref offset);
            var size = ReadUInt64(span, ref offset);

            var path = Encoding.UTF8.GetString(span.Slice(offset, pathLength));
            offset += pathLength;

            var name = Encoding.UTF8.GetString(span.Slice(offset, nameLength));
            offset += nameLength;

            entries.Add(new GalleryEntry(path, name, modified, (long)size));
        }

        return entries;
    }

    private static uint ReadUInt32(ReadOnlySpan<byte> span, ref int offset)
    {
        var value = BinaryPrimitives.ReadUInt32LittleEndian(span[offset..]);
        offset += sizeof(uint);
        return value;
    }

    private static ulong ReadUInt64(ReadOnlySpan<byte> span, ref int offset)
    {
        var value = BinaryPrimitives.ReadUInt64LittleEndian(span[offset..]);
        offset += sizeof(ulong);
        return value;
    }

    private static long ReadInt64(ReadOnlySpan<byte> span, ref int offset)
    {
        var value = BinaryPrimitives.ReadInt64LittleEndian(span[offset..]);
        offset += sizeof(long);
        return value;
    }

    private static bool TryInitialize()
    {
        try
        {
            var name = OperatingSystem.IsWindows() ? "yafm_native.dll"
                : OperatingSystem.IsMacOS() ? "libyafm_native.dylib"
                : "libyafm_native.so";
            var local = Path.Combine(AppContext.BaseDirectory, name);

            var handle = NativeLibrary.Load(File.Exists(local) ? local : name);

            _scanImages = Marshal.GetDelegateForFunctionPointer<ScanImagesDelegate>(
                NativeLibrary.GetExport(handle, "yafm_scan_images"));
            _freeBuffer = Marshal.GetDelegateForFunctionPointer<FreeBufferDelegate>(
                NativeLibrary.GetExport(handle, "yafm_free"));
            _compress = Marshal.GetDelegateForFunctionPointer<CompressDelegate>(
                NativeLibrary.GetExport(handle, "yafm_compress"));

            Log.Information("The Rust filesystem helper is available");
            return true;
        }
        catch (Exception ex)
        {
            Log.Debug(ex, "The Rust filesystem helper is unavailable; bulk work stays in managed code");
            return false;
        }
    }
}
