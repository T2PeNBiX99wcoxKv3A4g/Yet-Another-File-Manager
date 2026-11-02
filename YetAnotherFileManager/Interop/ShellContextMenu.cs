using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using PhotinoNetUtils.Interop;
using Serilog;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     Shows the shell's own context menu for a set of files, so Explorer's legacy verbs and the
///     third-party handlers registered for them keep working. The menu is owned by the main window,
///     and its window procedure forwards the messages some handlers need to draw their submenus.
/// </summary>
[SupportedOSPlatform("windows")]
internal static unsafe partial class ShellContextMenu
{
    private const int GetUiObjectOfSlot = 10;
    private const int QueryContextMenuSlot = 3;
    private const int InvokeCommandSlot = 4;
    private const int HandleMenuMsgSlot = 6;
    private const int HandleMenuMsg2Slot = 7;

    private const uint CmfNormal = 0x0000;
    private const uint CmfNoverbs = 0x0008;
    private const uint TpmReturnCmd = 0x0100;
    private const uint TpmRightButton = 0x0002;
    private const uint CmicMaskUnicode = 0x00004000;

    private const uint WmInitMenuPopup = 0x0117;
    private const uint WmDrawItem = 0x002B;
    private const uint WmMeasureItem = 0x002C;
    private const uint WmMenuChar = 0x0120;

    private const int GwlWndProc = -4;
    private const uint IdFirst = 1;
    private const uint IdLast = 0x7FFF;

    private static readonly Guid ShellFolderId = new("000214E6-0000-0000-C000-000000000046");
    private static readonly Guid ContextMenuId = new("000214E4-0000-0000-C000-000000000046");
    private static readonly Guid ContextMenu2Id = new("000214F4-0000-0000-C000-000000000046");
    private static readonly Guid ContextMenu3Id = new("BCFCE0A0-EC17-11D0-8D10-00A0C90F27F1");

    private static readonly NativeMethods.WndProcDelegate MenuProc = ForwardMenuMessage;

    private static IntPtr _menu2;
    private static IntPtr _menu3;
    private static IntPtr _oldProc;

    /// <summary>Shows the classic shell menu at the cursor for the given paths.</summary>
    public static void Show(IntPtr owner, IReadOnlyList<string> paths)
    {
        if (!OperatingSystem.IsWindows() || owner == IntPtr.Zero || paths.Count == 0)
            return;

        NativeMethods.GetCursorPos(out var point);
        ShowAt(owner, paths, point.X, point.Y);
    }

    private static void ShowAt(IntPtr owner, IReadOnlyList<string> paths, int x, int y)
    {
        var absolute = new List<IntPtr>(paths.Count);
        var menu = IntPtr.Zero;
        var context = IntPtr.Zero;
        var folder = IntPtr.Zero;
        var hooked = false;

        try
        {
            foreach (var path in paths)
            {
                if (SHParseDisplayName(path, IntPtr.Zero, out var pidl, 0, out _) != 0 || pidl == IntPtr.Zero)
                    continue;

                absolute.Add(pidl);
            }

            if (absolute.Count == 0)
                return;

            // All selected entries come from one directory, so the first parent folder owns them all.
            var folderId = ShellFolderId;
            if (SHBindToParent(absolute[0], &folderId, out folder, out _) != 0 || folder == IntPtr.Zero)
                return;

            var children = absolute.Select(ILFindLastID).ToArray();

            fixed (IntPtr* childPointer = children)
            {
                var iid = ContextMenuId;
                var getUiObject = (delegate* unmanaged[Stdcall]<IntPtr, IntPtr, uint, IntPtr*, Guid*, uint, IntPtr*, int>)
                    (*(IntPtr**)folder)[GetUiObjectOfSlot];

                if (getUiObject(folder, owner, (uint)children.Length, childPointer, &iid, 0, &context) != 0
                    || context == IntPtr.Zero)
                    return;
            }

            menu = NativeMethods.CreatePopupMenu();

            var query = (delegate* unmanaged[Stdcall]<IntPtr, IntPtr, uint, uint, uint, uint, int>)
                (*(IntPtr**)context)[QueryContextMenuSlot];

            // CMF_NOVERBS keeps third-party handlers out. Many of them (PowerToys, for example)
            // assume Explorer's view site and crash a foreign host; the standard verbs below are
            // safe, and the interface's own menu offers the rest.
            if (query(context, menu, 0, IdFirst, IdLast, CmfNormal | CmfNoverbs) < 0)
                return;

            if (Marshal.QueryInterface(context, in ContextMenu3Id, out _menu3) != 0)
                _menu3 = IntPtr.Zero;

            if (_menu3 == IntPtr.Zero && Marshal.QueryInterface(context, in ContextMenu2Id, out _menu2) != 0)
                _menu2 = IntPtr.Zero;

            _oldProc = NativeMethods.SetWindowLongPtr(owner, GwlWndProc,
                Marshal.GetFunctionPointerForDelegate(MenuProc));
            hooked = _oldProc != IntPtr.Zero;

            NativeMethods.SetForegroundWindow(owner);

            var command = TrackPopupMenuEx(menu, TpmReturnCmd | TpmRightButton, x, y, owner, IntPtr.Zero);

            if (command >= IdFirst)
            {
                var info = new CommandInfo
                {
                    Size = (uint)sizeof(CommandInfo),
                    Mask = CmicMaskUnicode,
                    Window = owner,
                    Verb = (IntPtr)(command - IdFirst),
                    VerbW = (IntPtr)(command - IdFirst),
                    Show = 1
                };

                var invoke = (delegate* unmanaged[Stdcall]<IntPtr, CommandInfo*, int>)
                    (*(IntPtr**)context)[InvokeCommandSlot];

                invoke(context, &info);
            }

            NativeMethods.PostMessage(owner, 0, IntPtr.Zero, IntPtr.Zero);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not show the shell context menu");
        }
        finally
        {
            if (hooked)
                NativeMethods.SetWindowLongPtr(owner, GwlWndProc, _oldProc);

            _oldProc = IntPtr.Zero;

            if (_menu3 != IntPtr.Zero)
            {
                _ = Marshal.Release(_menu3);
                _menu3 = IntPtr.Zero;
            }

            if (_menu2 != IntPtr.Zero)
            {
                _ = Marshal.Release(_menu2);
                _menu2 = IntPtr.Zero;
            }

            if (menu != IntPtr.Zero)
                NativeMethods.DestroyMenu(menu);

            if (context != IntPtr.Zero)
                _ = Marshal.Release(context);

            if (folder != IntPtr.Zero)
                _ = Marshal.Release(folder);

            foreach (var pidl in absolute)
                Marshal.FreeCoTaskMem(pidl);
        }
    }

    /// <summary>Forwards the messages a shell handler needs to fill in and draw its submenus.</summary>
    private static IntPtr ForwardMenuMessage(IntPtr hWnd, uint message, IntPtr wParam, IntPtr lParam)
    {
        if (_menu3 != IntPtr.Zero)
        {
            if (message == WmMenuChar)
            {
                var handle = (delegate* unmanaged[Stdcall]<IntPtr, uint, IntPtr, IntPtr, IntPtr*, int>)
                    (*(IntPtr**)_menu3)[HandleMenuMsg2Slot];

                IntPtr result;
                if (handle(_menu3, message, wParam, lParam, &result) >= 0)
                    return result;
            }
            else if (message is WmInitMenuPopup or WmDrawItem or WmMeasureItem)
            {
                var handle = (delegate* unmanaged[Stdcall]<IntPtr, uint, IntPtr, IntPtr, int>)
                    (*(IntPtr**)_menu3)[HandleMenuMsgSlot];

                handle(_menu3, message, wParam, lParam);
                return IntPtr.Zero;
            }
        }
        else if (_menu2 != IntPtr.Zero && message is WmInitMenuPopup or WmDrawItem or WmMeasureItem)
        {
            var handle = (delegate* unmanaged[Stdcall]<IntPtr, uint, IntPtr, IntPtr, int>)
                (*(IntPtr**)_menu2)[HandleMenuMsgSlot];

            handle(_menu2, message, wParam, lParam);
            return IntPtr.Zero;
        }

        return _oldProc != IntPtr.Zero
            ? CallWindowProc(_oldProc, hWnd, message, wParam, lParam)
            : NativeMethods.DefWindowProc(hWnd, message, wParam, lParam);
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct CommandInfo
    {
        public uint Size;
        public uint Mask;
        public IntPtr Window;
        public IntPtr Verb;
        public IntPtr Parameters;
        public IntPtr Directory;
        public int Show;
        public uint HotKey;
        public IntPtr Icon;
        public IntPtr Title;
        public IntPtr VerbW;
        public IntPtr ParametersW;
        public IntPtr DirectoryW;
        public IntPtr TitleW;
        public int PointX;
        public int PointY;
    }

    [LibraryImport("shell32.dll", StringMarshalling = StringMarshalling.Utf16)]
    private static partial int SHParseDisplayName(string name, IntPtr bindContext, out IntPtr pidl, uint attributesIn,
        out uint attributesOut);

    [LibraryImport("shell32.dll")]
    private static partial int SHBindToParent(IntPtr pidl, Guid* iid, out IntPtr parent, out IntPtr child);

    [LibraryImport("shell32.dll", EntryPoint = "ILFindLastID")]
    private static partial IntPtr ILFindLastID(IntPtr pidl);

    [LibraryImport("user32.dll")]
    private static partial int TrackPopupMenuEx(IntPtr menu, uint flags, int x, int y, IntPtr owner, IntPtr parameters);

    [LibraryImport("user32.dll", EntryPoint = "CallWindowProcW")]
    private static partial IntPtr CallWindowProc(IntPtr previous, IntPtr window, uint message, IntPtr wParam,
        IntPtr lParam);
}
