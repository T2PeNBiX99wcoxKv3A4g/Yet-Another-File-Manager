using System.Runtime.InteropServices;
using System.Text;

const int OFN_EXPLORER = 0x00080000;
const int OFN_NOCHANGEDIR = 0x00000008;
const int OFN_OVERWRITEPROMPT = 0x00000002;
const int OFN_PATHMUSTEXIST = 0x00000800;

var mode = args.Length > 0 ? args[0] : "open";
var initial = args.Length > 1 ? args[1] : Path.GetTempPath();

Console.WriteLine($"probe mode={mode} initial={initial}");

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
    internal static extern void CoTaskMemFree(IntPtr pointer);
}
