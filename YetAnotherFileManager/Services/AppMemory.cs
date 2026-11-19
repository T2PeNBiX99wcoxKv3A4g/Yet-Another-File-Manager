using System.Diagnostics;
using System.Runtime;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Reports and trims the memory this process uses. The webview has its own process, so the
///     numbers here are the file manager itself.
/// </summary>
internal static partial class AppMemory
{
    /// <summary>The heap level worth collecting; below it the churn is not worth the pause.</summary>
    private const long Bloated = 256 * 1024 * 1024;

    /// <summary>How many checks in a row must see a bloated heap before it is given back.</summary>
    private const int BloatedSamples = 3;

    private static int _bloated;

    public static MemoryPayload Report()
    {
        using var process = Process.GetCurrentProcess();
        process.Refresh();

        // TotalAvailableMemoryBytes is the memory the runtime considers usable, which is the
        // machine's RAM unless the process runs inside a container.
        return new(GC.GetTotalMemory(false), process.PrivateMemorySize64, process.WorkingSet64,
            GC.GetGCMemoryInfo().TotalAvailableMemoryBytes);
    }

    /// <summary>
    ///     Watches the heap from the background. Thumbnails, folder walks and listings all leave
    ///     garbage behind, and the runtime is happy to hoard it while the machine has free memory.
    /// </summary>
    public static void Start()
    {
        _ = Task.Run(async () =>
        {
            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(15));

            while (await timer.WaitForNextTickAsync())
                Try.Run(TrimIfBloated).OnFailure(ex => Log.Debug(ex, "The background collection failed"));
        });
    }

    /// <summary>
    ///     Gives the heap back once it has grown past its budget. Runs on a background thread, so
    ///     the short pause is never the interface's.
    /// </summary>
    public static void TrimIfBloated()
    {
        if (GC.GetTotalMemory(false) < Bloated)
        {
            _bloated = 0;
            return;
        }

        // One listing can hold a large folder above the budget for a moment; only a heap that stays
        // there is worth collecting, or the timer would pause the app every quarter minute.
        if (++_bloated < BloatedSamples)
            return;

        _bloated = 0;

        // A background collection keeps the pause off the interface. Compacting the large object
        // heap is left to the explicit trim, which the user asks for.
        GC.Collect(GC.MaxGeneration, GCCollectionMode.Optimized, false, false);
        ReleasePages();
    }

    /// <summary>
    ///     Collects everything (including the large object heap) and hands the pages back to the
    ///     system. Thumbnails and size walks leave short-lived buffers that are not worth keeping.
    /// </summary>
    public static MemoryPayload Trim()
    {
        GCSettings.LargeObjectHeapCompactionMode = GCLargeObjectHeapCompactionMode.CompactOnce;
        GC.Collect(GC.MaxGeneration, GCCollectionMode.Aggressive, true, true);
        GC.WaitForPendingFinalizers();
        GC.Collect(GC.MaxGeneration, GCCollectionMode.Aggressive, true, true);
        ReleasePages();

        return Report();
    }

    /// <summary>
    ///     Asks Windows to drop the pages it does not need. They stay owned by the process and are
    ///     faulted back on demand, so this is a cosmetic trim of the working set, not a free.
    /// </summary>
    private static void ReleasePages()
    {
        if (!OperatingSystem.IsWindows())
            return;

        ReleaseWindowsPages();
    }

    [SupportedOSPlatform("windows")]
    private static void ReleaseWindowsPages()
    {
        using var process = Process.GetCurrentProcess();
        SetProcessWorkingSetSize(process.Handle, -1, -1);
    }

    [LibraryImport("kernel32.dll")]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool SetProcessWorkingSetSize(IntPtr process, nint minimum, nint maximum);
}