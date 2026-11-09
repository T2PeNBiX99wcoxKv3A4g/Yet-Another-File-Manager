using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using Microsoft.Win32;
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
            || !File.Exists(filePath) && !Directory.Exists(filePath))
            return new([], []);

        var isDirectory = Directory.Exists(filePath);
        string[] associations = isDirectory ? ["Folder", "Directory"] : [Path.GetExtension(filePath)];

        if (!isDirectory && string.IsNullOrEmpty(associations[0]))
            return new([], []);

        var ole = OleInitialize(IntPtr.Zero);

        try
        {
            var recommended = new List<OpenWithProgram>();
            var other = new List<OpenWithProgram>();

            // A folder has two associations; Windows splits its handlers between them.
            foreach (var association in associations)
            {
                recommended.AddRange(ReadHandlers(association, FilterRecommended));
                other.AddRange(ReadHandlers(association, FilterAll));
            }

            var seen = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            recommended = recommended.Where(program => seen.Add(KeyOf(program))).ToList();

            if (isDirectory)
            {
                // "Open with" for a folder otherwise includes every wildcard file handler, so the
                // menu filled up with Notepad, IDEs and media players that cannot open a folder.
                // Keep only programs that registered a Directory/Folder shell verb.
                var handlers = DirectoryHandlerExecutables();
                if (handlers is not null)
                    other = other.Where(program => IsDirectoryHandler(program, handlers)).ToList();
            }

            other = other.Where(program => seen.Add(KeyOf(program))).ToList();

            if (isDirectory)
            {
                // Explorer is the shell's default folder action, not an Open with handler, so it is
                // missing from the enumeration even though it is the obvious alternative.
                var explorer = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Windows),
                    "explorer.exe");
                var program = new OpenWithProgram("File Explorer", explorer, IconFor(explorer));
                if (File.Exists(explorer) && seen.Add(KeyOf(program)))
                    recommended.Add(program);
            }

            return new(recommended, other);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not enumerate applications for {Path}", filePath);
            return new([], []);
        }
        finally
        {
            if (ole >= 0)
                OleUninitialize();
        }
    }

    private static string KeyOf(OpenWithProgram program) =>
        program.Path.Length > 0 ? program.Path : program.Name;

    /// <summary>
    ///     Executable names registered under the Directory and Folder shell verbs. These are the
    ///     programs that actually accept a folder; wildcard file handlers are deliberately absent.
    /// </summary>
    private static HashSet<string>? DirectoryHandlerExecutables()
    {
        var names = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

        try
        {
            foreach (var root in new[]
                     {
                         Registry.CurrentUser, Registry.LocalMachine
                     })
            foreach (var association in new[]
                     {
                         "Directory", "Folder"
                     })
            {
                using var shell = root.OpenSubKey($@"Software\Classes\{association}\shell");
                if (shell is null)
                    continue;

                foreach (var verb in shell.GetSubKeyNames())
                {
                    using var command = shell.OpenSubKey($@"{verb}\command");
                    if (command?.GetValue(null) is string value)
                        AddExecutable(names, value);
                }
            }
        }
        catch (Exception ex)
        {
            Log.Debug(ex, "Could not read the directory shell verbs");
            return null;
        }

        return names;
    }

    private static void AddExecutable(HashSet<string> names, string command)
    {
        var expanded = Environment.ExpandEnvironmentVariables(command.Trim());
        if (expanded.Length == 0)
            return;

        string executable;
        if (expanded[0] == '"')
        {
            var end = expanded.IndexOf('"', 1);
            if (end <= 1)
                return;
            executable = expanded[1..end];
        }
        else
        {
            var end = expanded.IndexOf(' ');
            executable = end > 0 ? expanded[..end] : expanded;
        }

        executable = executable.Trim();
        if (executable.Length == 0)
            return;

        names.Add(Path.GetFileName(executable));
        if (Path.IsPathRooted(executable))
            names.Add(Path.GetFullPath(executable));
    }

    private static bool IsDirectoryHandler(OpenWithProgram program, HashSet<string> names)
    {
        if (program.Path.Length == 0
            || !program.Path.EndsWith(".exe", StringComparison.OrdinalIgnoreCase))
            return false;

        return names.Contains(program.Path) || names.Contains(Path.GetFileName(program.Path));
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
            // The program was asked for from this file, so it starts where the file lives.
            WorkingDirectory = Path.GetDirectoryName(filePath) ?? "",
            ArgumentList =
            {
                filePath
            }
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
                        result.Add(new(name, path, IconFor(path)));
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
        // Handlers are usually executables, but .com/.bat/.cmd and packaged-app shims exist too.
        // The shell knows how to extract an icon from any real file.
        if (!File.Exists(path))
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