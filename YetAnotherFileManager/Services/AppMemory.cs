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
    /// <summary>The heap level worth collecting when no setting says otherwise.</summary>
    private const long Bloated = 256 * 1024 * 1024;

    /// <summary>How many checks in a row must see a bloated heap before it is given back.</summary>
    private const int BloatedSamples = 3;

    private static int _bloated;

    public static MemoryPayload Report()
    {
        using var process = Process.GetCurrentProcess();
        process.Refresh();

        // TotalAvailableMemoryBytes is the memory the runtime considers usable. On Linux the
        // runtime can be boxed in by a cgroup or a heap hard limit, which turns the share below
        // into a meaningless 200%; the machine's own MemTotal is what the percentage means.
        var available = OperatingSystem.IsLinux() ? PhysicalMemory() : GC.GetGCMemoryInfo().TotalAvailableMemoryBytes;

        // The heap can be larger than the private pages on Linux, and the share would then pass
        // 100% and read as an error.
        var managed = GC.GetTotalMemory(false);
        var committed = Math.Max(PrivateBytes(process), managed);

        return new(managed, committed, process.WorkingSet64, available);
    }

    /// <summary>
    ///     The private pages the process actually holds. Windows commits them. Linux answers
    ///     <c>PrivateMemorySize64</c> with VmData, the address space the runtime reserves and never
    ///     touches, which reads as 250% of the machine; <c>smaps_rollup</c> has the backed pages,
    ///     and the resident size is the fallback when that file cannot be read.
    /// </summary>
    private static long PrivateBytes(Process process)
    {
        if (!OperatingSystem.IsLinux()) return process.PrivateMemorySize64;

        var bytes = ProcKilobytes("/proc/self/smaps_rollup", "Private_") * 1024;
        return bytes > 0 ? bytes : process.WorkingSet64;
    }

    /// <summary>The machine's RAM, in bytes, from <c>/proc/meminfo</c>; 0 when it cannot be read.</summary>
    private static long PhysicalMemory() => ProcKilobytes("/proc/meminfo", "MemTotal:") * 1024;

    /// <summary>
    ///     Sums the kilobytes of every line in a proc file that starts with <paramref name="prefix"/>;
    ///     0 when the file is missing, which a container image can do.
    /// </summary>
    private static long ProcKilobytes(string path, string prefix)
    {
        try
        {
            var total = 0L;

            foreach (var line in File.ReadLines(path))
                if (line.StartsWith(prefix, StringComparison.Ordinal)
                    && long.TryParse(new string([.. line.Where(char.IsAsciiDigit)]), out var kilobytes))
                    total += kilobytes;

            return total;
        }
        catch (IOException)
        {
            return 0;
        }
    }

    /// <summary>
    ///     Watches the heap from the background. Thumbnails, folder walks and listings all leave
    ///     garbage behind, and the runtime is happy to hoard it while the machine has free memory.
    ///     The interval and the threshold are read on every pass, so the settings page applies them
    ///     without a restart.
    /// </summary>
    public static void Start()
    {
        _ = Task.Run(async () =>
        {
            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(1));
            var waited = 0;

            while (await timer.WaitForNextTickAsync())
            {
                var settings = SettingsService.Instance.Current;

                if (!settings.AutoTrimMemory)
                {
                    _bloated = 0;
                    waited = 0;
                    continue;
                }

                if (++waited < settings.TrimIntervalSeconds)
                    continue;

                waited = 0;
                Try.Run(() => TrimIfBloated(settings.TrimThresholdMb * 1024L * 1024L))
                    .OnFailure(ex => Log.Debug(ex, "The background collection failed"));
            }
        });
    }

    /// <summary>
    ///     Gives the heap back once it has grown past its budget. Runs on a background thread, so
    ///     the short pause is never the interface's.
    /// </summary>
    public static void TrimIfBloated(long threshold = Bloated)
    {
        if (GC.GetTotalMemory(false) < threshold)
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