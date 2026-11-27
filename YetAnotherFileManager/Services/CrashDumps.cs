using System.Diagnostics;
using System.Runtime.InteropServices;
using JetBrains.Annotations;
using PhotinoNetUtils.Platform;
using PhotinoNetUtils.Utils;
using Serilog;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The crash dumps this app writes for itself, kept beside the logs. Windows' own setting for a
///     dump folder lives in the machine-wide registry and needs an administrator, so the process
///     writes the dump itself while it is still falling over — which also covers the picker, the
///     process that has been dying of heap corruption inside the web view.
/// </summary>
internal static partial class CrashDumps
{
    private const int ContinueSearch = 0;
    private const uint FullMemory = 0x2;

    /// <summary>How many dumps are kept; each one holds the whole process.</summary>
    private const int Keep = 5;

    /// <summary>Guards against two threads catching the same crash and writing twice.</summary>
    private static int _writing;

    /// <summary>Held in a field because Windows keeps the pointer after the call.</summary>
    private static UnhandledExceptionFilter? _filter;

    /// <summary>The folder the dumps land in, created so the settings page can always open it.</summary>
    [PublicAPI]
    public static string Folder { get; } = Path.Combine(AppInfoService.LogDirectory(), "crashes");

    /// <summary>Starts writing a dump of this process whenever it goes down. Safe to repeat.</summary>
    public static void Configure()
    {
        if (!OperatingSystem.IsWindows())
            return;

        Try.Run(() => Directory.CreateDirectory(Folder))
            .OnFailure(exception => Log.Warning(exception, "Could not create {Folder}", Folder));

        Import();
        _filter ??= Filter;
        SetUnhandledExceptionFilter(_filter);
    }

    /// <summary>
    ///     Windows still writes its own dump of a crash wherever its machine-wide settings say.
    ///     Those dumps are this app's, so they are moved in beside ours the next time it starts.
    /// </summary>
    private static void Import()
    {
        var local = Path.Combine(
            Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "CrashDumps");

        if (!Directory.Exists(local))
            return;

        foreach (var dump in Directory.EnumerateFiles(local, $"{Constants.Name}.exe.*.dmp"))
            // A dump Windows is still writing would be moved half-finished; it keeps until the next start.
            if (DateTime.UtcNow - File.GetLastWriteTimeUtc(dump) > TimeSpan.FromSeconds(30))
                Try.Run(() => File.Move(dump, Path.Combine(Folder, Path.GetFileName(dump)), true));

        Prune();
    }

    /// <summary>Opens the folder in the shell.</summary>
    public static void Open()
    {
        Try.Run(() => Directory.CreateDirectory(Folder));
        SystemLauncher.Open(Folder);
    }

    /// <summary>
    ///     Runs on the crashing thread before Windows Error Reporting: writes the dump, then lets
    ///     Windows do whatever it would have done without us.
    /// </summary>
    private static int Filter(IntPtr exceptionInfo)
    {
        if (Interlocked.Exchange(ref _writing, 1) != 0)
            return ContinueSearch;

        // The logger may be the thing that is broken, so the dump is written with no help.
        Try.Run(() =>
        {
            var file = Path.Combine(Folder,
                $"{Constants.Name}-{DateTime.Now:yyyyMMdd-HHmmss}-{Environment.ProcessId}.dmp");

            using var process = Process.GetCurrentProcess();
            using var stream = File.Create(file);

            MiniDumpWriteDump(process.Handle, (uint)process.Id, stream.SafeFileHandle.DangerousGetHandle(),
                FullMemory, IntPtr.Zero, IntPtr.Zero, IntPtr.Zero);

            Prune();
        });

        return ContinueSearch;
    }

    /// <summary>Drops the oldest dumps once more than <see cref="Keep" /> are there.</summary>
    private static void Prune() =>
        Directory.EnumerateFiles(Folder, "*.dmp")
            .Select(path => new FileInfo(path))
            .OrderByDescending(file => file.LastWriteTimeUtc)
            .Skip(Keep)
            .ToList()
            .ForEach(file => Try.Run(file.Delete));

    [LibraryImport("dbghelp.dll", SetLastError = true)]
    private static partial int MiniDumpWriteDump(IntPtr process, uint processId, IntPtr file, uint type,
        IntPtr exception, IntPtr userStream, IntPtr callback);

    [LibraryImport("kernel32.dll")]
    private static partial IntPtr SetUnhandledExceptionFilter(UnhandledExceptionFilter filter);

    private delegate int UnhandledExceptionFilter(IntPtr exceptionInfo);
}
