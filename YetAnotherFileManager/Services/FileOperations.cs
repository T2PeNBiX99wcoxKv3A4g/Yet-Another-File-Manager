using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Text;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Interop;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The file operations a context menu offers: clipboard paths, paste, delete, rename, new folder
///     and the shell dialogs. Long-running shell work runs on the STA pool so its own progress and
///     conflict dialogs get a message pump.
/// </summary>
internal static partial class FileOperations
{
    private const uint CfHDrop = 15;
    private const uint GmemMoveable = 0x0002;
    private const uint FoMove = 0x0001;
    private const uint FoCopy = 0x0002;
    private const uint FoDelete = 0x0003;
    private const ushort FofAllowUndo = 0x0040;
    private const ushort FofNoConfirmation = 0x0010;
    private const ushort FofNoConfirmMkdir = 0x0200;

    private static readonly string PreferredDropEffect = "Preferred DropEffect";

    /// <summary>Puts the paths on the clipboard as files, with the effect Explorer uses for cut/copy.</summary>
    public static bool CopyToClipboard(IReadOnlyList<string>? paths, bool cut)
    {
        if (!OperatingSystem.IsWindows()) return false;

        var files = paths?.Where(path => path.Length > 0).Distinct(StringComparer.OrdinalIgnoreCase).ToList() ?? [];
        if (files.Count == 0) return false;

        if (!OpenClipboard())
            return false;

        try
        {
            EmptyClipboard();
            return WriteDropFiles(files) && WriteDropEffect(cut ? 2u : 1u);
        }
        finally
        {
            NativeMethods.CloseClipboard();
        }
    }

    /// <summary>Whether the clipboard currently carries files that can be pasted.</summary>
    public static bool ClipboardHasFiles()
    {
        if (!OperatingSystem.IsWindows()) return false;

        if (!IsClipboardFormatAvailable(CfHDrop) || !OpenClipboard())
            return false;

        NativeMethods.CloseClipboard();
        return true;
    }

    /// <summary>Copies or moves the files on the clipboard into a folder.</summary>
    public static async Task<bool> PasteAsync(string directory)
    {
        if (!OperatingSystem.IsWindows()) return false;

        var (paths, move) = ReadClipboardFiles();
        if (paths.Count == 0 || !Directory.Exists(directory))
            return false;

        var pasted = await ShellOperationAsync(move ? FoMove : FoCopy, paths, directory);

        // A move consumes the clipboard; a copy stays so the same files can be pasted again.
        if (pasted && move)
            ClearClipboard();

        return pasted;
    }

    private static void ClearClipboard()
    {
        if (!OpenClipboard())
            return;

        EmptyClipboard();
        NativeMethods.CloseClipboard();
    }

    /// <summary>Sends the paths to the recycle bin, with the shell's own undo record.</summary>
    public static Task<bool> DeleteAsync(IReadOnlyList<string> paths) =>
        OperatingSystem.IsWindows()
            ? ShellOperationAsync(FoDelete, paths, null, FofAllowUndo | FofNoConfirmation)
            : Task.FromResult(false);

    /// <summary>Renames one entry in place.</summary>
    public static Task<PathOperationPayload> RenameAsync(string path, string name) =>
        Task.Run(() =>
        {
            var trimmed = name.Trim();

            if (trimmed.Length == 0 || trimmed is "." or ".." || trimmed.IndexOfAny(Path.GetInvalidFileNameChars()) >= 0)
                return new PathOperationPayload(false, null, "That name is not valid.");

            var directory = Path.GetDirectoryName(path);
            if (directory is null)
                return new PathOperationPayload(false, null, "The entry has no parent folder.");

            var target = Path.Combine(directory, trimmed);

            if (string.Equals(path, target, StringComparison.OrdinalIgnoreCase))
                return new PathOperationPayload(true, path, null);

            if (File.Exists(target) || Directory.Exists(target))
                return new PathOperationPayload(false, null, "An entry with that name already exists.");

            try
            {
                if (Directory.Exists(path))
                    Directory.Move(path, target);
                else
                    File.Move(path, target);

                return new PathOperationPayload(true, target, null);
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "Could not rename {Path}", path);
                return new PathOperationPayload(false, null, ex.Message);
            }
        });

    /// <summary>Creates the next free "New folder" name in a directory.</summary>
    public static Task<PathOperationPayload> NewFolderAsync(string directory) =>
        Task.Run(() =>
        {
            if (!Directory.Exists(directory))
                return new PathOperationPayload(false, null, "The folder is no longer there.");

            try
            {
                for (var attempt = 1; attempt < 1000; attempt++)
                {
                    var name = attempt == 1 ? "New folder" : $"New folder ({attempt})";
                    var path = Path.Combine(directory, name);

                    if (Directory.Exists(path) || File.Exists(path))
                        continue;

                    Directory.CreateDirectory(path);
                    return new PathOperationPayload(true, path, null);
                }

                return new PathOperationPayload(false, null, "Could not find a free name for the new folder.");
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "Could not create a folder in {Directory}", directory);
                return new PathOperationPayload(false, null, ex.Message);
            }
        });

    /// <summary>Opens the shell's properties sheet for the first selected entry.</summary>
    public static Task ShowPropertiesAsync(IReadOnlyList<string> paths) =>
        Task.Run(() =>
        {
            if (!OperatingSystem.IsWindows() || paths.Count == 0)
                return;

            Try.Run(() => Process.Start(new ProcessStartInfo(paths[0])
            {
                UseShellExecute = true,
                Verb = "properties"
            })).OnFailure(ex => Log.Warning(ex, "Could not show properties for {Path}", paths[0]));
        });

    /// <summary>Opens Windows' "How do you want to open this file?" dialog.</summary>
    public static Task OpenWithAsync(string path) =>
        Task.Run(() =>
        {
            if (!OperatingSystem.IsWindows() || !File.Exists(path))
                return;

            Try.Run(() => Process.Start(new ProcessStartInfo("rundll32.exe",
                $"shell32.dll,OpenAs_RunDLL \"{path}\"")
            {
                UseShellExecute = false
            })).OnFailure(ex => Log.Warning(ex, "Could not open {Path} with another app", path));
        });

    /// <summary>Reveals a path in Explorer, or opens its folder elsewhere.</summary>
    public static Task ShowInExplorerAsync(string path) =>
        Task.Run(() =>
        {
            if (OperatingSystem.IsWindows())
            {
                Try.Run(() => Process.Start(new ProcessStartInfo("explorer.exe", $"/select,\"{path}\"")
                {
                    UseShellExecute = true
                })).OnFailure(ex => Log.Warning(ex, "Could not reveal {Path}", path));
                return;
            }

            var directory = Directory.Exists(path) ? path : Path.GetDirectoryName(path);

            if (OperatingSystem.IsLinux() && directory is not null)
                Try.Run(() => Process.Start(new ProcessStartInfo("xdg-open", $"\"{directory}\"")
                {
                    UseShellExecute = true
                })).OnFailure(ex => Log.Warning(ex, "Could not open {Directory}", directory));
        });

    private static async Task<bool> ShellOperationAsync(uint function, IReadOnlyList<string> paths,
        string? target, ushort extraFlags = 0)
    {
        if (paths.Count == 0)
            return false;

        var files = paths.Where(path => path.Length > 0).Distinct(StringComparer.OrdinalIgnoreCase).ToList();
        if (files.Count == 0)
            return false;

        return await StaThread.RunAsync(() =>
        {
            var operation = new ShFileOpStruct
            {
                hwnd = WindowManager.Instance.WindowHandle,
                wFunc = function,
                pFrom = string.Join('\0', files) + "\0",
                pTo = target ?? "",
                fFlags = (ushort)(FofAllowUndo | FofNoConfirmMkdir | extraFlags)
            };

            var result = SHFileOperation(ref operation);

            if (result != 0)
                Log.Warning("The shell file operation {Function} failed with {Result}", function, result);

            return result == 0 && !operation.fAnyOperationsAborted;
        });
    }

    private static bool OpenClipboard()
    {
        for (var attempt = 0; attempt < 5; attempt++)
        {
            if (NativeMethods.OpenClipboard(IntPtr.Zero))
                return true;

            Thread.Sleep(10);
        }

        return false;
    }

    private static bool WriteDropFiles(IReadOnlyList<string> paths)
    {
        var text = Encoding.Unicode.GetBytes(string.Join('\0', paths) + "\0\0");
        var headerSize = Marshal.SizeOf<DropFiles>();
        var size = headerSize + text.Length;
        var handle = GlobalAlloc(GmemMoveable, (nuint)size);

        if (handle == IntPtr.Zero)
            return false;

        var memory = NativeMethods.GlobalLock(handle);
        if (memory == IntPtr.Zero)
        {
            GlobalFree(handle);
            return false;
        }

        try
        {
            var header = new DropFiles
            {
                pFiles = (uint)headerSize,
                fWide = 1
            };

            Marshal.StructureToPtr(header, memory, false);
            Marshal.Copy(text, 0, IntPtr.Add(memory, headerSize), text.Length);
        }
        finally
        {
            NativeMethods.GlobalUnlock(handle);
        }

        if (SetClipboardData(CfHDrop, handle) != IntPtr.Zero)
            return true;

        GlobalFree(handle);
        return false;
    }

    private static bool WriteDropEffect(uint effect)
    {
        var format = RegisterClipboardFormat(PreferredDropEffect);
        if (format == 0)
            return true;

        var handle = GlobalAlloc(GmemMoveable, sizeof(uint));
        if (handle == IntPtr.Zero)
            return true;

        var memory = NativeMethods.GlobalLock(handle);
        if (memory == IntPtr.Zero)
        {
            GlobalFree(handle);
            return true;
        }

        try
        {
            Marshal.WriteInt32(memory, (int)effect);
        }
        finally
        {
            NativeMethods.GlobalUnlock(handle);
        }

        if (SetClipboardData(format, handle) != IntPtr.Zero)
            return true;

        GlobalFree(handle);
        return true;
    }

    private static (List<string> Paths, bool Move) ReadClipboardFiles()
    {
        if (!OpenClipboard())
            return ([], false);

        try
        {
            var handle = NativeMethods.GetClipboardData(CfHDrop);
            if (handle == IntPtr.Zero)
                return ([], false);

            var count = DragQueryFile(handle, uint.MaxValue, IntPtr.Zero, 0);
            var paths = new List<string>((int)count);

            for (uint index = 0; index < count; index++)
            {
                var length = DragQueryFile(handle, index, IntPtr.Zero, 0);
                if (length == 0)
                    continue;

                var buffer = Marshal.AllocHGlobal((int)(length + 1) * sizeof(char));
                try
                {
                    if (DragQueryFile(handle, index, buffer, length + 1) > 0
                        && Marshal.PtrToStringUni(buffer) is { Length: > 0 } path)
                        paths.Add(path);
                }
                finally
                {
                    Marshal.FreeHGlobal(buffer);
                }
            }

            var move = ReadDropEffect() == 2;
            return (paths, move);
        }
        finally
        {
            NativeMethods.CloseClipboard();
        }
    }

    private static uint ReadDropEffect()
    {
        var format = RegisterClipboardFormat(PreferredDropEffect);
        var handle = format == 0 ? IntPtr.Zero : NativeMethods.GetClipboardData(format);
        if (handle == IntPtr.Zero)
            return 1;

        var memory = NativeMethods.GlobalLock(handle);
        if (memory == IntPtr.Zero)
            return 1;

        try
        {
            return (uint)Marshal.ReadInt32(memory);
        }
        finally
        {
            NativeMethods.GlobalUnlock(handle);
        }
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct DropFiles
    {
        public uint pFiles;
        public int x;
        public int y;
        public int fNC;
        public int fWide;
    }

    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
    private struct ShFileOpStruct
    {
        public IntPtr hwnd;
        public uint wFunc;
        [MarshalAs(UnmanagedType.LPWStr)] public string pFrom;
        [MarshalAs(UnmanagedType.LPWStr)] public string pTo;
        public ushort fFlags;
        [MarshalAs(UnmanagedType.Bool)] public bool fAnyOperationsAborted;
        public IntPtr hNameMappings;
        [MarshalAs(UnmanagedType.LPWStr)] public string? lpszProgressTitle;
    }

    [DllImport("shell32.dll", EntryPoint = "SHFileOperationW", CharSet = CharSet.Unicode)]
    private static extern int SHFileOperation(ref ShFileOpStruct fileOp);

    [DllImport("shell32.dll", CharSet = CharSet.Unicode)]
    private static extern uint DragQueryFile(IntPtr hDrop, uint iFile, IntPtr lpszFile, uint cch);

    [DllImport("user32.dll", CharSet = CharSet.Unicode)]
    private static extern uint RegisterClipboardFormat(string format);

    [LibraryImport("user32.dll", SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool EmptyClipboard();

    [LibraryImport("user32.dll", SetLastError = true)]
    private static partial IntPtr SetClipboardData(uint uFormat, IntPtr hMem);

    [LibraryImport("user32.dll", SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool IsClipboardFormatAvailable(uint format);

    [LibraryImport("kernel32.dll", SetLastError = true)]
    private static partial IntPtr GlobalAlloc(uint uFlags, nuint dwBytes);

    [LibraryImport("kernel32.dll", SetLastError = true)]
    private static partial IntPtr GlobalFree(IntPtr hMem);
}
