using System.Buffers.Binary;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Text;
using Serilog;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     The Rust helper for bulk filesystem work: the gallery scan, ZIP creation, and the deletes that
///     walk a whole tree. A picture library or a folder being deleted is mostly directory entries, and
///     the native walk spreads that over every core.
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
    private static MeasureDelegate? _measure;
    private static DeleteDelegate? _delete;
    private static Action<long, long>? _report;

    [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
    private delegate int ScanImagesDelegate(ushort* root, nuint rootLength, uint depth, uint threads,
        ushort* extensions, nuint extensionsLength, out byte* result, out nuint length);

    [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
    private delegate void FreeBufferDelegate(byte* pointer, nuint length);

    [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
    private delegate int CompressDelegate(ushort* paths, nuint pathsLength, ushort* output,
        nuint outputLength, uint threads);

    [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
    private delegate int MeasureDelegate(ushort* paths, nuint pathsLength, uint threads, out ulong files);

    [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
    private delegate int DeleteDelegate(ushort* paths, nuint pathsLength, uint threads, ulong total,
        IntPtr progress);

    private static uint Threads => (uint)Math.Clamp(Environment.ProcessorCount, 1, 64);

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

    /// <summary>
    ///     How many files the paths hold, or null when the library is missing. The count is the total
    ///     a delete reports, so the status center can show a bar instead of a spinner.
    /// </summary>
    public static long? CountFiles(IReadOnlyList<string> paths)
    {
        if (!Ready.Value || _measure is null || paths.Count == 0)
            return null;

        var joined = string.Join('\0', paths);

        fixed (char* pointer = joined)
        {
            var status = _measure((ushort*)pointer, (nuint)joined.Length, Threads, out var files);
            return status == 0 ? (long)files : null;
        }
    }

    /// <summary>
    ///     Deletes the paths in parallel and reports how many files are gone. Null when the library is
    ///     missing, so the caller can fall back to the shell; otherwise the number of entries that
    ///     could not be removed.
    /// </summary>
    public static int? Delete(IReadOnlyList<string> paths, long total, Action<long, long> progress)
    {
        if (!Ready.Value || _delete is null || paths.Count == 0)
            return null;

        var joined = string.Join('\0', paths);

        // One delete at a time: the callback is a plain function pointer, so it has no per-call state.
        lock (typeof(RustNative))
        {
            _report = progress;

            try
            {
                fixed (char* pointer = joined)
                    return _delete((ushort*)pointer, (nuint)joined.Length, Threads,
                        (ulong)Math.Max(total, 0),
                        (IntPtr)(delegate* unmanaged[Cdecl]<ulong, ulong, void>)&Report);
            }
            finally
            {
                _report = null;
            }
        }
    }

    [UnmanagedCallersOnly(CallConvs = [typeof(CallConvCdecl)])]
    private static void Report(ulong done, ulong total) => _report?.Invoke((long)done, (long)total);

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

    private static T? TryResolve<T>(IntPtr handle, string name) where T : Delegate
    {
        try
        {
            return Marshal.GetDelegateForFunctionPointer<T>(NativeLibrary.GetExport(handle, name));
        }
        catch (Exception ex)
        {
            Log.Debug(ex, "The Rust helper has no {Export}", name);
            return null;
        }
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

            // The delete entry points arrived later; an older library simply keeps them null.
            _measure = TryResolve<MeasureDelegate>(handle, "yafm_measure");
            _delete = TryResolve<DeleteDelegate>(handle, "yafm_delete");

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
