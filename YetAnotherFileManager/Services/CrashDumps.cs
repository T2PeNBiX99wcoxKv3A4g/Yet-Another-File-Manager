using System.Collections;
using System.Diagnostics;
using System.Runtime.InteropServices;
using JetBrains.Annotations;
using PhotinoNetUtils.Platform;
using PhotinoNetUtils.Utils;
using Serilog;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The crash dumps this app keeps beside the logs. Windows' own setting for a dump folder lives
///     in the machine-wide registry and needs an administrator, so the process writes the dump
///     itself while it is still falling over. Linux has no filter to hook, so the process restarts
///     itself once with the runtime's dump variables set and lets the runtime write it.
/// </summary>
internal static partial class CrashDumps
{
    private const int ContinueSearch = 0;
    private const uint FullMemory = 0x2;
    private const string ArmedVariable = "YAFM_DUMP_ARMED";

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
        Try.Run(() => Directory.CreateDirectory(Folder))
            .OnFailure(exception => Log.Warning(exception, "Could not create {Folder}", Folder));

        if (OperatingSystem.IsWindows())
        {
            Import();
            _filter ??= Filter;
            SetUnhandledExceptionFilter(_filter);
            return;
        }

        if (OperatingSystem.IsLinux())
            ArmLinux();
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

    /// <summary>
    ///     The runtime writes a Linux crash dump only when it starts with the dump variables set, and
    ///     a process cannot set its own. The first start therefore replaces itself with one that has
    ///     them; the marker keeps a failed replacement from looping.
    /// </summary>
    private static void ArmLinux()
    {
        if (Environment.GetEnvironmentVariable("DOTNET_DbgEnableMiniDump") == "1"
            || Environment.GetEnvironmentVariable(ArmedVariable) == "1")
        {
            Log.Information("Crash dumps go to {Folder}", Folder);
            Prune();
            return;
        }

        var process = Environment.ProcessPath;
        if (process is null || Path.GetFileNameWithoutExtension(process) == "dotnet")
        {
            Log.Warning("A crash will leave no dump: the app runs under the dotnet host");
            return;
        }

        Log.Information("Restarting with crash dumps enabled in {Folder}", Folder);

        var dump = Path.Combine(Folder, $"crash.{Constants.Name}.%p.dmp");
        var environment = Environment.GetEnvironmentVariables()
            .Cast<DictionaryEntry>()
            .Select(entry => $"{entry.Key}={entry.Value}")
            .Where(line => !line.StartsWith("DOTNET_Dbg", StringComparison.Ordinal)
                           && !line.StartsWith($"{ArmedVariable}=", StringComparison.Ordinal))
            .Append("DOTNET_DbgEnableMiniDump=1")
            // A single-file app cannot write the smaller kinds; the runtime refuses anything else.
            .Append("DOTNET_DbgMiniDumpType=4")
            .Append($"DOTNET_DbgMiniDumpName={dump}")
            .Append($"{ArmedVariable}=1")
            .ToArray();

        var arguments = Environment.GetCommandLineArgs().Skip(1).Prepend(process).ToArray();

        Execve(process, Utf8(arguments), Utf8(environment));
        Log.Warning("Could not restart with crash dumps enabled (error {Error})", Marshal.GetLastPInvokeError());
    }

    /// <summary>One argv/envp array of native strings; nothing is freed because the exec does not return.</summary>
    private static IntPtr[] Utf8(string[] values) =>
        [.. values.Select(value => Marshal.StringToCoTaskMemUTF8(value)), IntPtr.Zero];

    [LibraryImport("libc", SetLastError = true)]
    private static partial int Execve([MarshalAs(UnmanagedType.LPUTF8Str)] string path, IntPtr[] argv, IntPtr[] envp);

    [LibraryImport("dbghelp.dll", SetLastError = true)]
    private static partial int MiniDumpWriteDump(IntPtr process, uint processId, IntPtr file, uint type,
        IntPtr exception, IntPtr userStream, IntPtr callback);

    [LibraryImport("kernel32.dll")]
    private static partial IntPtr SetUnhandledExceptionFilter(UnhandledExceptionFilter filter);

    private delegate int UnhandledExceptionFilter(IntPtr exceptionInfo);
}
