using System.Runtime.InteropServices;
using System.Text;

const int OFN_EXPLORER = 0x00080000;
const int OFN_NOCHANGEDIR = 0x00000008;
const int OFN_OVERWRITEPROMPT = 0x00000002;
const int OFN_PATHMUSTEXIST = 0x00000800;

const uint FOS_PICKFOLDERS = 0x00000020;
const uint FOS_FORCEFILESYSTEM = 0x00000040;
const int SIGDN_FILESYSPATH = unchecked((int)0x80058000);

var mode = args.Length > 0 ? args[0].ToLowerInvariant() : "open";

if (mode is "-h" or "--help" or "/?" or "help")
{
    Console.WriteLine("""
                      usage: PickerProbe <open|save|folder|dialog-open|dialog-save|dialog-folder> [initial-folder]

                        open           calls GetOpenFileNameW (the classic Open dialog)
                        save           calls GetSaveFileNameW (the classic Save As dialog)
                        folder         calls SHBrowseForFolderW (the classic folder dialog)
                        dialog-open    calls IFileOpenDialog, the Common Item Dialog
                        dialog-save    calls IFileSaveDialog, the Common Item Dialog
                        dialog-folder  calls IFileOpenDialog with FOS_PICKFOLDERS

                      The program blocks on the dialog like any other program. It prints
                      "result=picked file=..." or "result=cancelled" and exits 0 only when
                      a path came back.
                      """);
    return 0;
}

if (mode is not ("open" or "save" or "folder" or "dialog-open" or "dialog-save" or "dialog-folder"))
{
    Console.Error.WriteLine($"unknown mode '{args[0]}'; use open, save, folder, dialog-open, dialog-save or dialog-folder");
    return 2;
}

var initial = args.Length > 1 ? args[1] : Path.GetTempPath();

Console.WriteLine($"probe mode={mode} initial={initial}");

if (mode.StartsWith("dialog-", StringComparison.Ordinal))
{
    var save = mode == "dialog-save";
    var clsid = new Guid(save ? "c0b4e2f3-ba21-4773-8dba-335ec946eb8b" : "dc1c5a9c-e88a-4dde-a5a1-60f82a20aef7");
    var iid = typeof(IFileDialog).GUID;

    var created = Native.CoCreateInstance(ref clsid, IntPtr.Zero, 1, ref iid, out var unknown);
    if (created != 0)
    {
        Console.WriteLine($"result=failed hr=0x{created:X8}");
        return 1;
    }

    var dialog = (IFileDialog)Marshal.GetObjectForIUnknown(unknown);
    Marshal.Release(unknown);

    uint options = FOS_FORCEFILESYSTEM;
    if (mode == "dialog-folder")
        options |= FOS_PICKFOLDERS;
    dialog.SetOptions(options);

    if (save)
    {
        dialog.SetFileName("probe-dialog.txt");
        dialog.SetDefaultExtension("txt");
    }

    var shown = dialog.Show(IntPtr.Zero);
    if (shown != 0)
    {
        Console.WriteLine($"result=cancelled hr=0x{shown:X8}");
        return 1;
    }

    dialog.GetFileTypeIndex(out var typeIndex);
    var result = dialog.GetResult(out var itemPointer);
    Console.WriteLine($"show=ok type-index={typeIndex} GetResult=0x{result:X8}");

    if (result != 0 || itemPointer == IntPtr.Zero)
    {
        Console.WriteLine("result=failed (no item)");
        return 1;
    }

    var item = (IShellItem)Marshal.GetObjectForIUnknown(itemPointer);
    Marshal.Release(itemPointer);

    var display = item.GetDisplayName(SIGDN_FILESYSPATH, out var pathPointer);
    var path = display == 0 ? Marshal.PtrToStringUni(pathPointer) : null;

    if (pathPointer != IntPtr.Zero)
        Marshal.FreeCoTaskMem(pathPointer);

    // Qt and Chromium read the result through IFileOpenDialog::GetResults, even for Save As.
    if (dialog is IFileOpenDialog openDialog)
    {
        var array = openDialog.GetResults(out var arrayPointer);
        if (array != 0 || arrayPointer == IntPtr.Zero)
        {
            Console.WriteLine($"GetResults=0x{array:X8}");
        }
        else
        {
            var items = (IShellItemArray)Marshal.GetObjectForIUnknown(arrayPointer);
            Marshal.Release(arrayPointer);
            items.GetCount(out var count);
            Console.WriteLine($"GetResults=ok count={count}");
        }
    }

    Console.WriteLine(path is null ? "result=failed (no path)" : $"result=picked file=\"{path}\"");
    return path is null ? 1 : 0;
}

if (mode == "folder")
{
    var browse = new BROWSEINFO
    {
        lpszTitle = "probe folder",
        ulFlags = 0x00000040 // BIF_NEWDIALOGSTYLE
    };

    var pidl = Native.SHBrowseForFolderW(ref browse);
    if (pidl == IntPtr.Zero)
    {
        Console.WriteLine("result=cancelled");
        return 1;
    }

    var path = new StringBuilder(260);
    var ok = Native.SHGetPathFromIDListW(pidl, path);
    Native.CoTaskMemFree(pidl);
    Console.WriteLine($"result=picked folder=\"{path}\" ok={ok}");
    return 0;
}

const int BufferChars = 32768;
var file = Marshal.AllocHGlobal(BufferChars * 2);
Marshal.WriteInt16(file, 0, 0);

var ofn = new OPENFILENAME
{
    lStructSize = IntPtr.Size == 8 ? 152 : 76,
    lpstrFile = file,
    nMaxFile = BufferChars,
    lpstrFilter = "Text\0*.txt\0All files\0*.*\0\0",
    lpstrTitle = "probe " + mode,
    lpstrInitialDir = initial,
    lpstrDefExt = "txt",
    Flags = OFN_EXPLORER | OFN_NOCHANGEDIR | (mode == "save" ? OFN_OVERWRITEPROMPT : OFN_PATHMUSTEXIST)
};

var picked = mode == "save" ? Native.GetSaveFileNameW(ref ofn) : Native.GetOpenFileNameW(ref ofn);
var error = Marshal.GetLastWin32Error();
var chosen = Marshal.PtrToStringUni(file) ?? "";
Marshal.FreeHGlobal(file);
Console.WriteLine(picked
    ? $"result=picked file=\"{chosen}\""
    : $"result=cancelled error={error}");
return picked ? 0 : 1;

[StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
internal struct OPENFILENAME
{
    public int lStructSize;
    public IntPtr hwndOwner;
    public IntPtr hInstance;
    [MarshalAs(UnmanagedType.LPWStr)] public string? lpstrFilter;
    [MarshalAs(UnmanagedType.LPWStr)] public string? lpstrCustomFilter;
    public int nMaxCustFilter;
    public int nFilterIndex;
    public IntPtr lpstrFile;
    public int nMaxFile;
    [MarshalAs(UnmanagedType.LPWStr)] public string? lpstrFileTitle;
    public int nMaxFileTitle;
    [MarshalAs(UnmanagedType.LPWStr)] public string? lpstrInitialDir;
    [MarshalAs(UnmanagedType.LPWStr)] public string? lpstrTitle;
    public int Flags;
    public short nFileOffset;
    public short nFileExtension;
    [MarshalAs(UnmanagedType.LPWStr)] public string? lpstrDefExt;
    public IntPtr lCustData;
    public IntPtr lpfnHook;
    [MarshalAs(UnmanagedType.LPWStr)] public string? lpTemplateName;
    public IntPtr pvReserved;
    public int dwReserved;
    public int FlagsEx;
}

[StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
internal struct BROWSEINFO
{
    public IntPtr hwndOwner;
    public IntPtr pidlRoot;
    public IntPtr pszDisplayName;
    [MarshalAs(UnmanagedType.LPWStr)] public string? lpszTitle;
    public uint ulFlags;
    public IntPtr lpfn;
    public IntPtr lParam;
    public int iImage;
}

[ComImport, Guid("42f85136-db7e-439c-85f1-e4075d135fc8"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
internal interface IFileDialog
{
    [PreserveSig] int Show(IntPtr owner);
    [PreserveSig] int SetFileTypes(uint count, IntPtr filterSpec);
    [PreserveSig] int SetFileTypeIndex(uint index);
    [PreserveSig] int GetFileTypeIndex(out uint index);
    [PreserveSig] int Advise(IntPtr events, out uint cookie);
    [PreserveSig] int Unadvise(uint cookie);
    [PreserveSig] int SetOptions(uint options);
    [PreserveSig] int GetOptions(out uint options);
    [PreserveSig] int SetDefaultFolder(IntPtr item);
    [PreserveSig] int SetFolder(IntPtr item);
    [PreserveSig] int GetFolder(out IntPtr item);
    [PreserveSig] int GetCurrentSelection(out IntPtr item);
    [PreserveSig] int SetFileName([MarshalAs(UnmanagedType.LPWStr)] string name);
    [PreserveSig] int GetFileName([MarshalAs(UnmanagedType.LPWStr)] out string name);
    [PreserveSig] int SetTitle([MarshalAs(UnmanagedType.LPWStr)] string title);
    [PreserveSig] int SetOkButtonLabel([MarshalAs(UnmanagedType.LPWStr)] string label);
    [PreserveSig] int SetFileNameLabel([MarshalAs(UnmanagedType.LPWStr)] string label);
    [PreserveSig] int GetResult(out IntPtr item);
    [PreserveSig] int AddPlace(IntPtr item, int fdap);
    [PreserveSig] int SetDefaultExtension([MarshalAs(UnmanagedType.LPWStr)] string extension);
    [PreserveSig] int Close(int result);
    [PreserveSig] int SetClientGuid(ref Guid guid);
    [PreserveSig] int ClearClientData();
    [PreserveSig] int SetFilter(IntPtr filter);
}

[ComImport, Guid("43826d1e-e718-42ee-bc55-a1e261c37bfe"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
internal interface IShellItem
{
    [PreserveSig] int BindToHandler(IntPtr context, ref Guid handler, ref Guid iid, out IntPtr result);
    [PreserveSig] int GetParent(out IntPtr parent);
    [PreserveSig] int GetDisplayName(int form, out IntPtr name);
    [PreserveSig] int GetAttributes(uint mask, out uint attributes);
    [PreserveSig] int Compare(IntPtr other, uint hint, out int order);
}

[ComImport, Guid("d57c7288-d4ad-4768-be02-9d969532d960"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
internal interface IFileOpenDialog
{
    [PreserveSig] int Show(IntPtr owner);
    [PreserveSig] int SetFileTypes(uint count, IntPtr filterSpec);
    [PreserveSig] int SetFileTypeIndex(uint index);
    [PreserveSig] int GetFileTypeIndex(out uint index);
    [PreserveSig] int Advise(IntPtr events, out uint cookie);
    [PreserveSig] int Unadvise(uint cookie);
    [PreserveSig] int SetOptions(uint options);
    [PreserveSig] int GetOptions(out uint options);
    [PreserveSig] int SetDefaultFolder(IntPtr item);
    [PreserveSig] int SetFolder(IntPtr item);
    [PreserveSig] int GetFolder(out IntPtr item);
    [PreserveSig] int GetCurrentSelection(out IntPtr item);
    [PreserveSig] int SetFileName([MarshalAs(UnmanagedType.LPWStr)] string name);
    [PreserveSig] int GetFileName([MarshalAs(UnmanagedType.LPWStr)] out string name);
    [PreserveSig] int SetTitle([MarshalAs(UnmanagedType.LPWStr)] string title);
    [PreserveSig] int SetOkButtonLabel([MarshalAs(UnmanagedType.LPWStr)] string label);
    [PreserveSig] int SetFileNameLabel([MarshalAs(UnmanagedType.LPWStr)] string label);
    [PreserveSig] int GetResult(out IntPtr item);
    [PreserveSig] int AddPlace(IntPtr item, int fdap);
    [PreserveSig] int SetDefaultExtension([MarshalAs(UnmanagedType.LPWStr)] string extension);
    [PreserveSig] int Close(int result);
    [PreserveSig] int SetClientGuid(ref Guid guid);
    [PreserveSig] int ClearClientData();
    [PreserveSig] int SetFilter(IntPtr filter);
    [PreserveSig] int GetResults(out IntPtr items);
    [PreserveSig] int GetSelectedItems(out IntPtr items);
}

[ComImport, Guid("b63ea76d-1f85-456f-a19c-48159efa858b"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
internal interface IShellItemArray
{
    [PreserveSig] int BindToHandler(IntPtr context, ref Guid handler, ref Guid iid, out IntPtr result);
    [PreserveSig] int GetPropertyStore(int flags, ref Guid iid, out IntPtr store);
    [PreserveSig] int GetPropertyDescriptionList(IntPtr key, ref Guid iid, out IntPtr list);
    [PreserveSig] int GetAttributes(int flags, uint mask, out uint attributes);
    [PreserveSig] int GetCount(out uint count);
    [PreserveSig] int GetItemAt(uint index, out IntPtr item);
    [PreserveSig] int EnumItems(out IntPtr items);
}

internal static partial class Native
{
    [DllImport("comdlg32.dll", CharSet = CharSet.Unicode, SetLastError = true)]
    internal static extern bool GetOpenFileNameW(ref OPENFILENAME openFileName);

    [DllImport("comdlg32.dll", CharSet = CharSet.Unicode, SetLastError = true)]
    internal static extern bool GetSaveFileNameW(ref OPENFILENAME openFileName);

    [DllImport("shell32.dll", CharSet = CharSet.Unicode)]
    internal static extern IntPtr SHBrowseForFolderW(ref BROWSEINFO browseInfo);

    [DllImport("shell32.dll", CharSet = CharSet.Unicode)]
    internal static extern bool SHGetPathFromIDListW(IntPtr pidl, StringBuilder path);

    [DllImport("ole32.dll")]
    internal static extern int CoCreateInstance(ref Guid clsid, IntPtr outer, uint context, ref Guid iid, out IntPtr instance);

    [DllImport("ole32.dll")]
    internal static extern void CoTaskMemFree(IntPtr pointer);
}
