using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     Lists the applications Windows would offer for a file's Open with menu. The shell's
///     IEnumAssocHandlers already knows both registered Win32 programs and packaged apps, so this
///     only copies its answers out instead of maintaining a parallel registry walk.
/// </summary>
[SupportedOSPlatform("windows")]
internal static unsafe partial class AssociatedPrograms
{
    private const int EnumNextSlot = 3;
    private const int HandlerGetNameSlot = 3;
    private const int HandlerGetUiNameSlot = 4;
    private const int FilterRecommended = 1;
    private const int FilterAll = 0;

    public static OpenWithProgramsPayload Read(string filePath)
    {
        if (!OperatingSystem.IsWindows()
            || (!File.Exists(filePath) && !Directory.Exists(filePath)))
            return new OpenWithProgramsPayload([], []);

        var association = Directory.Exists(filePath) ? "Directory" : Path.GetExtension(filePath);
        if (string.IsNullOrEmpty(association))
            return new OpenWithProgramsPayload([], []);

        var ole = OleInitialize(IntPtr.Zero);

        try
        {
            var recommended = ReadHandlers(association, FilterRecommended);
            var other = ReadHandlers(association, FilterAll);
            var seen = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

            recommended = recommended
                .Where(program => seen.Add(program.Path.Length > 0 ? program.Path : program.Name))
                .ToList();

            other = other
                .Where(program => seen.Add(program.Path.Length > 0 ? program.Path : program.Name))
                .ToList();

            return new OpenWithProgramsPayload(recommended, other);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not enumerate applications for {Path}", filePath);
            return new OpenWithProgramsPayload([], []);
        }
        finally
        {
            if (ole >= 0)
                OleUninitialize();
        }
    }

    /// <summary>Runs the chosen application with the file, or answers false when it is not a plain exe.</summary>
    public static bool Open(string filePath, string programPath)
    {
        if (!OperatingSystem.IsWindows()
            || !File.Exists(filePath) && !Directory.Exists(filePath)
            || !programPath.EndsWith(".exe", StringComparison.OrdinalIgnoreCase)
            || !File.Exists(programPath))
            return false;

        return Try.Run(() => Process.Start(new ProcessStartInfo(programPath)
        {
            UseShellExecute = false,
            ArgumentList = { filePath }
        }) is not null).GetOrElse(_ => false);
    }

    private static List<OpenWithProgram> ReadHandlers(string association, int filter)
    {
        var result = new List<OpenWithProgram>();

        if (SHAssocEnumHandlers(association, filter, out var enumerator) != 0 || enumerator == IntPtr.Zero)
            return result;

        try
        {
            var next = (delegate* unmanaged[Stdcall]<IntPtr, uint, IntPtr*, uint*, int>)
                (*(IntPtr**)enumerator)[EnumNextSlot];

            var buffer = stackalloc IntPtr[1];

            while (true)
            {
                buffer[0] = IntPtr.Zero;
                uint fetched;
                if (next(enumerator, 1, buffer, &fetched) != 0 || fetched == 0 || buffer[0] == IntPtr.Zero)
                    break;

                var handler = buffer[0];

                try
                {
                    var name = ReadString(handler, HandlerGetUiNameSlot) ?? ReadString(handler, HandlerGetNameSlot);
                    var path = ReadString(handler, HandlerGetNameSlot) ?? "";

                    if (name is { Length: > 0 } && path.Length > 0)
                        result.Add(new OpenWithProgram(name, path, IconFor(path)));
                }
                finally
                {
                    Marshal.Release(handler);
                }

                if (result.Count >= 24)
                    break;
            }
        }
        finally
        {
            Marshal.Release(enumerator);
        }

        return result;
    }

    private static string? ReadString(IntPtr handler, int slot)
    {
        var get = (delegate* unmanaged[Stdcall]<IntPtr, IntPtr*, int>)(*(IntPtr**)handler)[slot];
        IntPtr value;

        if (get(handler, &value) != 0 || value == IntPtr.Zero)
            return null;

        try
        {
            return Marshal.PtrToStringUni(value);
        }
        finally
        {
            Marshal.FreeCoTaskMem(value);
        }
    }

    private static string? IconFor(string path)
    {
        if (!path.EndsWith(".exe", StringComparison.OrdinalIgnoreCase) || !File.Exists(path))
            return null;

        return Try.Run(() => ShellIcon.DataUrl(path, false, false)).GetOrNull();
    }

    [LibraryImport("shell32.dll", StringMarshalling = StringMarshalling.Utf16)]
    private static partial int SHAssocEnumHandlers(string association, int filter, out IntPtr enumerator);

    [LibraryImport("ole32.dll")]
    private static partial int OleInitialize(IntPtr reserved);

    [LibraryImport("ole32.dll")]
    private static partial void OleUninitialize();
}
