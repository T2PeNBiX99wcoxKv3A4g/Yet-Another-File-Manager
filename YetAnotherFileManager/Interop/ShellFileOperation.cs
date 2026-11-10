using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using PhotinoNetUtils.Utils;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     The shell's own file operation. The app copies and deletes in-process so it can report
///     progress and write its own recycle bin records, but a folder can refuse the current user
///     outright. With <c>FOFX_SHOWELEVATIONPROMPT</c> the shell asks for elevation and retries the
///     operation itself, which is the flow Explorer uses for the same folder.
/// </summary>
[SupportedOSPlatform("windows")]
internal static partial class ShellFileOperation
{
    private const uint FofSilent = 0x0004;
    private const uint FofNoConfirmation = 0x0010;
    private const uint FofAllowUndo = 0x0040;
    private const uint FofNoErrorUi = 0x0400;
    private const uint FofxShowElevationPrompt = 0x0004_0000;
    private const uint FileAttributeDirectory = 0x0010;
    private const uint FileAttributeNormal = 0x0080;

    private static readonly Guid FileOperationClass = new("3AD05575-8857-4850-9277-11B85BDB8E09");
    private static readonly Guid ShellItemId = new("43826D1E-E718-42EE-BC55-A1E261C37BFE");

    /// <summary>True when the current user could create a file in the folder without help.</summary>
    public static bool CanWriteTo(string directory)
    {
        var probe = Path.Combine(directory, $".yafm-write-{Guid.NewGuid():N}.tmp");

        try
        {
            File.WriteAllBytes(probe, []);
            File.Delete(probe);
            return true;
        }
        catch (UnauthorizedAccessException)
        {
            return false;
        }
        catch (IOException)
        {
            // A read-only or otherwise odd folder is better left to the normal path, which reports
            // the real error instead of sending the user through a UAC prompt that cannot help.
            return true;
        }
        finally
        {
            if (File.Exists(probe))
                Try.Run(() => File.Delete(probe));
        }
    }

    /// <summary>Copies or moves one entry into <paramref name="directory" /> under <paramref name="name" />.</summary>
    public static bool Copy(string source, string directory, string name, bool move, IntPtr owner) =>
        Run(owner, 0, (operation, sourceItem, directoryItem) =>
        {
            var hr = move
                ? operation.MoveItem(sourceItem, directoryItem, name, IntPtr.Zero)
                : operation.CopyItem(sourceItem, directoryItem, name, IntPtr.Zero);

            return hr == 0 && operation.PerformOperations() == 0;
        }, source, directory);

    /// <summary>Renames an entry in place, which the shell can do after the user consents.</summary>
    public static bool Rename(string path, string name, IntPtr owner) =>
        Run(owner, FofSilent, (operation, item, _) =>
        {
            var hr = operation.RenameItem(item, name, IntPtr.Zero);
            return hr == 0 && operation.PerformOperations() == 0;
        }, path);

    /// <summary>Creates an empty file or folder in a folder that refuses the current user.</summary>
    public static bool NewItem(string directory, string name, bool folder, IntPtr owner) =>
        Run(owner, FofSilent, (operation, _, directoryItem) =>
        {
            var hr = operation.NewItem(directoryItem, folder ? FileAttributeDirectory : FileAttributeNormal,
                name, null, IntPtr.Zero);

            return hr == 0 && operation.PerformOperations() == 0;
        }, null, directory);

    /// <summary>Deletes an entry with the shell, optionally sending it to the recycle bin.</summary>
    public static bool Delete(string path, bool recycle, IntPtr owner) =>
        Run(owner, FofSilent | (recycle ? FofAllowUndo : 0), (operation, item, _) =>
        {
            var hr = operation.DeleteItem(item, IntPtr.Zero);
            return hr == 0 && operation.PerformOperations() == 0;
        }, path);

    /// <summary>True for the exceptions a protected folder raises in managed code.</summary>
    public static bool IsAccessDenied(Exception exception) =>
        exception is UnauthorizedAccessException
        || (exception is IOException io && (io.HResult & 0xFFFF) == 5);

    private static bool Run(IntPtr owner, uint flags,
        Func<IFileOperation, IntPtr, IntPtr, bool> work, string? source = null, string? directory = null)
    {
        var sourceItem = source is null ? IntPtr.Zero : CreateItem(source);
        var directoryItem = directory is null ? IntPtr.Zero : CreateItem(directory);

        if ((source is not null && sourceItem == IntPtr.Zero)
            || (directory is not null && directoryItem == IntPtr.Zero))
        {
            Release(sourceItem, directoryItem);
            return false;
        }

        try
        {
            var type = Type.GetTypeFromCLSID(FileOperationClass);
            if (type is null || Activator.CreateInstance(type) is not IFileOperation operation)
                return false;

            try
            {
                operation.SetOwnerWindow(owner);
                operation.SetOperationFlags(FofNoConfirmation | FofNoErrorUi
                                            | FofxShowElevationPrompt | flags);

                return work(operation, sourceItem, directoryItem);
            }
            finally
            {
                Marshal.FinalReleaseComObject(operation);
            }
        }
        catch (COMException)
        {
            // The user declined the prompt, or the shell refused the operation.
            return false;
        }
        finally
        {
            Release(sourceItem, directoryItem);
        }
    }

    private static IntPtr CreateItem(string path)
    {
        var iid = ShellItemId;
        return SHCreateItemFromParsingName(path, IntPtr.Zero, in iid, out var item) == 0 ? item : IntPtr.Zero;
    }

    private static void Release(IntPtr source, IntPtr directory)
    {
        if (source != IntPtr.Zero)
            Marshal.Release(source);

        if (directory != IntPtr.Zero)
            Marshal.Release(directory);
    }

    [LibraryImport("shell32.dll", StringMarshalling = StringMarshalling.Utf16)]
    private static partial int SHCreateItemFromParsingName(string path, IntPtr bindContext, in Guid iid,
        out IntPtr item);

    [ComImport]
    [Guid("947aab5f-0a5c-4c13-b4d6-4bf7836fc9f8")]
    [InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
    private interface IFileOperation
    {
        [PreserveSig]
        int Advise(IntPtr progressSink, out uint cookie);

        [PreserveSig]
        int Unadvise(uint cookie);

        [PreserveSig]
        int SetOperationFlags(uint flags);

        [PreserveSig]
        int SetProgressMessage([MarshalAs(UnmanagedType.LPWStr)] string message);

        [PreserveSig]
        int SetProgressDialog(IntPtr progressDialog);

        [PreserveSig]
        int SetProperties(IntPtr propertyChanges);

        [PreserveSig]
        int SetOwnerWindow(IntPtr owner);

        [PreserveSig]
        int ApplyPropertiesToItem(IntPtr item);

        [PreserveSig]
        int ApplyPropertiesToItems(IntPtr items);

        [PreserveSig]
        int RenameItem(IntPtr item, [MarshalAs(UnmanagedType.LPWStr)] string newName, IntPtr progressSink);

        [PreserveSig]
        int RenameItems(IntPtr items, [MarshalAs(UnmanagedType.LPWStr)] string newName);

        [PreserveSig]
        int MoveItem(IntPtr item, IntPtr destination, [MarshalAs(UnmanagedType.LPWStr)] string newName,
            IntPtr progressSink);

        [PreserveSig]
        int MoveItems(IntPtr items, IntPtr destination);

        [PreserveSig]
        int CopyItem(IntPtr item, IntPtr destination, [MarshalAs(UnmanagedType.LPWStr)] string copyName,
            IntPtr progressSink);

        [PreserveSig]
        int CopyItems(IntPtr items, IntPtr destination);

        [PreserveSig]
        int DeleteItem(IntPtr item, IntPtr progressSink);

        [PreserveSig]
        int DeleteItems(IntPtr items);

        [PreserveSig]
        int NewItem(IntPtr destination, uint fileAttributes, [MarshalAs(UnmanagedType.LPWStr)] string name,
            [MarshalAs(UnmanagedType.LPWStr)] string? templateName, IntPtr progressSink);

        [PreserveSig]
        int PerformOperations();

        [PreserveSig]
        int GetAnyOperationsAborted(out int aborted);
    }
}
