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
///     The library is part of the build, not an optional extra: the project compiles it with cargo and
///     copies it beside the executable, so every entry point must resolve. A missing file or export
///     throws instead of quietly changing how the app works.
/// </remarks>
internal static unsafe class RustNative
{
    /// <summary>
    ///     What the native ZIP writer did. It holds each file in memory, so a file above its limit
    ///     stops it, and the caller streams that archive itself.
    /// </summary>
    public enum ZipResult
    {
        Ok,
        TooLarge
    }

    private static readonly ScanImagesDelegate ScanImagesNative;
    private static readonly FreeBufferDelegate FreeBufferNative;
    private static readonly CompressDelegate CompressNative;
    private static readonly CompressXzDelegate CompressXzNative;
    private static readonly MeasureDelegate MeasureNative;
    private static readonly DeleteDelegate DeleteNative;

    /// <summary>The delete callback has no per-call state, so one delete runs at a time.</summary>
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
    private delegate int CompressXzDelegate(ushort* paths, nuint pathsLength, ushort* output,
        nuint outputLength, int level);

    [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
    private delegate int MeasureDelegate(ushort* paths, nuint pathsLength, uint threads, out ulong files);

    [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
    private delegate int DeleteDelegate(ushort* paths, nuint pathsLength, uint threads, ulong total,
        IntPtr progress);

    private static uint Threads => (uint)Math.Clamp(Environment.ProcessorCount, 1, 64);

    /// <summary>Touching the class loads the library; the app does it once, before the window.</summary>
    public static void Initialize() => Log.Debug("The Rust filesystem helper is loaded");

    /// <summary>
    ///     Pictures under <paramref name="root" />. <paramref name="extensions" /> is semicolon
    ///     separated and may include the dot.
    /// </summary>
    public static List<GalleryEntry> ScanImages(string root, int depth, string extensions)
    {
        byte* result = null;
        nuint length = 0;

        fixed (char* rootPointer = root)
        fixed (char* extensionPointer = extensions)
        {
            var status = ScanImagesNative((ushort*)rootPointer, (nuint)root.Length, (uint)depth,
                Threads, (ushort*)extensionPointer, (nuint)extensions.Length, out result, out length);

            if (status != 0)
                throw new IOException($"The native gallery scan failed with {status}.");
        }

        if (result is null || length < 4)
        {
            if (result is not null)
                FreeBufferNative(result, length);

            return [];
        }

        try
        {
            return Parse(result, length);
        }
        finally
        {
            FreeBufferNative(result, length);
        }
    }

    /// <summary>Compresses the paths into a ZIP with the native writer.</summary>
    public static ZipResult Compress(IReadOnlyList<string> paths, string output)
    {
        var joined = string.Join('\0', paths);

        fixed (char* pathsPointer = joined)
        fixed (char* outputPointer = output)
        {
            var status = CompressNative((ushort*)pathsPointer, (nuint)joined.Length,
                (ushort*)outputPointer, (nuint)output.Length, Threads);

            return status switch
            {
                0 => ZipResult.Ok,
                -4 => ZipResult.TooLarge,
                _ => throw new IOException($"The native ZIP writer failed with {status}.")
            };
        }
    }

    /// <summary>
    ///     Compresses the paths into a ZIP whose entries use the XZ method, which the managed writer
    ///     cannot produce. The archive is streamed, so no file has to fit in memory.
    /// </summary>
    public static void CompressXz(IReadOnlyList<string> paths, string output, int level)
    {
        var joined = string.Join('\0', paths);

        fixed (char* pathsPointer = joined)
        fixed (char* outputPointer = output)
        {
            var status = CompressXzNative((ushort*)pathsPointer, (nuint)joined.Length,
                (ushort*)outputPointer, (nuint)output.Length, level);

            if (status != 0)
                throw new IOException($"The native XZ writer failed with {status}.");
        }
    }

    /// <summary>How many files the paths hold; the total a delete reports while it runs.</summary>
    public static long CountFiles(IReadOnlyList<string> paths)
    {
        var joined = string.Join('\0', paths);

        fixed (char* pointer = joined)
        {
            var status = MeasureNative((ushort*)pointer, (nuint)joined.Length, Threads, out var files);

            return status == 0
                ? (long)files
                : throw new IOException($"The native measure failed with {status}.");
        }
    }

    /// <summary>
    ///     Deletes the paths in parallel, reporting how many files are gone. Returns the number of
    ///     entries that could not be removed.
    /// </summary>
    public static int Delete(IReadOnlyList<string> paths, long total, Action<long, long> progress)
    {
        var joined = string.Join('\0', paths);

        lock (typeof(RustNative))
        {
            _report = progress;

            try
            {
                fixed (char* pointer = joined)
                {
                    var failures = DeleteNative((ushort*)pointer, (nuint)joined.Length, Threads,
                        (ulong)Math.Max(total, 0),
                        (IntPtr)(delegate* unmanaged[Cdecl]<ulong, ulong, void>)&Report);

                    return failures >= 0
                        ? failures
                        : throw new IOException($"The native delete failed with {failures}.");
                }
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

    private static T Resolve<T>(IntPtr handle, string name) where T : Delegate =>
        Marshal.GetDelegateForFunctionPointer<T>(NativeLibrary.GetExport(handle, name));

    static RustNative()
    {
        var name = OperatingSystem.IsWindows() ? "yafm_native.dll"
            : OperatingSystem.IsMacOS() ? "libyafm_native.dylib"
            : "libyafm_native.so";
        var local = Path.Combine(AppContext.BaseDirectory, name);

        var handle = NativeLibrary.Load(File.Exists(local) ? local : name);

        ScanImagesNative = Resolve<ScanImagesDelegate>(handle, "yafm_scan_images");
        FreeBufferNative = Resolve<FreeBufferDelegate>(handle, "yafm_free");
        CompressNative = Resolve<CompressDelegate>(handle, "yafm_compress");
        CompressXzNative = Resolve<CompressXzDelegate>(handle, "yafm_compress_xz");
        MeasureNative = Resolve<MeasureDelegate>(handle, "yafm_measure");
        DeleteNative = Resolve<DeleteDelegate>(handle, "yafm_delete");

        Log.Information("The Rust filesystem helper is ready");
    }
}
