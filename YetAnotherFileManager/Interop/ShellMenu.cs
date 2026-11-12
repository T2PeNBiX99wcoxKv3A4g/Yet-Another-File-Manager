using System.Buffers.Text;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using System.Text;
using PhotinoNetUtils.Interop;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     Reads the shell's context menu without showing it. The menu is built in memory, its labels,
///     command ids, states, icons and submenus are copied out, and the menu is thrown away again.
///     The interface draws those entries itself and only calls back into the handler when one of
///     them is chosen.
/// </summary>
[SupportedOSPlatform("windows")]
internal static unsafe partial class ShellMenu
{
    private const int GetUiObjectOfSlot = 10;
    private const int QueryContextMenuSlot = 3;
    private const int InvokeCommandSlot = 4;
    private const int GetCommandStringSlot = 5;
    private const int HandleMenuMsgSlot = 6;

    private const uint CmfNormal = 0x0000;
    private const uint CmfExplore = 0x0004;
    private const uint CmfNoverbs = 0x0008;
    private const uint CmfExtendedVerbs = 0x0100;
    private const uint IdFirst = 1;
    private const uint IdLast = 0x7FFF;

    private const uint GcsVerbW = 4;
    private const uint MfByPosition = 0x00000400;
    private const uint MiiState = 0x00000001;
    private const uint MiiId = 0x00000002;
    private const uint MiiSubMenu = 0x00000004;
    private const uint MiiBitmap = 0x00000080;
    private const uint MiiFType = 0x00000100;
    private const uint MfsDisabled = 0x00000003;
    private const uint MfsChecked = 0x00000008;
    private const uint MfsDefault = 0x00001000;
    private const uint MftSeparator = 0x00000800;
    private const uint WmInitMenuPopup = 0x0117;
    private const uint CmicMaskUnicode = 0x00004000;

    private const int MaxDepth = 3;

    private static readonly Guid ShellFolderId = new("000214E6-0000-0000-C000-000000000046");
    private static readonly Guid ContextMenuId = new("000214E4-0000-0000-C000-000000000046");
    private static readonly Guid ContextMenu2Id = new("000214F4-0000-0000-C000-000000000046");
    private static readonly Guid ContextMenu3Id = new("BCFCE0A0-EC17-11D0-8D10-00A0C90F27F1");

    /// <summary>Reads every command the shell would offer for the paths.</summary>
    public static List<ShellVerb> Read(IReadOnlyList<string> paths, bool safe)
    {
        if (!OperatingSystem.IsWindows() || paths.Count == 0)
            return [];

        var ole = OleInitialize(IntPtr.Zero);

        try
        {
            using var session = new Session(paths, safe);
            if (!session.Open())
                return [];

            var verbs = new List<ShellVerb>();
            Walk(session, session.Menu, verbs, null, 0);
            return verbs;
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not read the shell context menu");
            return [];
        }
        finally
        {
            if (ole >= 0)
                OleUninitialize();
        }
    }

    /// <summary>Runs one command that was previously read from the same paths.</summary>
    public static bool Invoke(IReadOnlyList<string> paths, bool safe, string? verb, int offset)
    {
        if (!OperatingSystem.IsWindows() || paths.Count == 0)
            return false;

        var ole = OleInitialize(IntPtr.Zero);

        try
        {
            using var session = new Session(paths, safe);
            return session.Open() && session.Invoke(verb, offset);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not invoke a shell command");
            return false;
        }
        finally
        {
            if (ole >= 0)
                OleUninitialize();
        }
    }

    private static void Walk(Session session, IntPtr menu, List<ShellVerb> verbs, List<string>? path, int depth)
    {
        if (depth > MaxDepth)
            return;

        var count = GetMenuItemCount(menu);

        for (var index = 0; index < count; index++)
        {
            var info = new MenuItemInfo
            {
                Size = (uint)sizeof(MenuItemInfo),
                Mask = MiiId | MiiState | MiiSubMenu | MiiBitmap | MiiFType
            };

            if (!GetMenuItemInfo(menu, (uint)index, true, ref info))
                continue;

            if ((info.FType & MftSeparator) != 0)
                continue;

            // The default verb is the one a double-click runs; the interface's own Open item covers it.
            if ((info.State & MfsDefault) != 0)
                continue;

            var label = MenuText(menu, (uint)index);
            if (label.Length == 0)
                continue;

            if (info.SubMenu != IntPtr.Zero)
            {
                session.HandleMenuMessage(WmInitMenuPopup, info.SubMenu, index);
                var next = path is null
                    ? [Clean(label)]
                    : new List<string>(path)
                    {
                        Clean(label)
                    };
                Walk(session, info.SubMenu, verbs, next, depth + 1);
                continue;
            }

            var offset = (int)info.Id - (int)IdFirst;
            if (offset < 0)
                continue;

            var verb = CommandVerb(session.Context, offset);
            if (IsBasicVerb(verb))
                continue;

            verbs.Add(new(
                Clean(label),
                verb,
                offset,
                MenuIcon(info.Bitmap, verb),
                (info.State & MfsDisabled) == 0,
                (info.State & MfsChecked) != 0,
                path is { Count: > 0 } ? path[^1] : null,
                depth,
                path ?? []));
        }
    }

    private static bool IsBasicVerb(string? verb) =>
        verb is "open" or "openas" or "copy" or "cut" or "paste" or "delete" or "rename" or "properties"
            or "copyaspath";

    private static string MenuText(IntPtr menu, uint item)
    {
        var text = new StringBuilder(512);
        var length = GetMenuString(menu, item, text, text.Capacity, MfByPosition);

        return length > 0 ? text.ToString() : "";
    }

    private static string? CommandVerb(IntPtr context, int offset)
    {
        var buffer = stackalloc char[256];

        for (var index = 0; index < 256; index++)
            buffer[index] = '\0';

        var command = (delegate* unmanaged[Stdcall]<IntPtr, nuint, uint, IntPtr, IntPtr, uint, int>)
            (*(IntPtr**)context)[GetCommandStringSlot];

        var result = command(context, (nuint)offset, GcsVerbW, IntPtr.Zero, (IntPtr)buffer, 256);
        if (result != 0)
            return null;

        var verb = Marshal.PtrToStringUni((IntPtr)buffer);
        return string.IsNullOrWhiteSpace(verb) ? null : verb;
    }

    private static string? MenuIcon(IntPtr bitmap, string? verb)
    {
        if (bitmap != IntPtr.Zero && bitmap.ToInt64() > 16 && BitmapImage.ToPng(bitmap) is { } png)
            return $"data:image/png;base64,{Base64.EncodeToString(png)}";

        return verb switch
        {
            "open" => "icon:open",
            "openas" => "icon:app",
            "print" => "icon:document",
            "cut" => "icon:cut",
            "copy" => "icon:copy",
            "paste" => "icon:paste",
            "delete" => "icon:trash",
            "rename" => "icon:pencil",
            "properties" => "icon:gear",
            "link" => "icon:star",
            "pin" or "unpin" => "icon:pin",
            "runas" => "icon:executable",
            "sendto" => "icon:arrow",
            "share" => "icon:share",
            // No icon is better than the file manager's own logo on a third-party verb.
            _ => null
        };
    }

    private static string Clean(string label) =>
        label.Replace("&&", "\0").Replace("&", "").Replace('\0', '&').Trim();

    [LibraryImport("shell32.dll", StringMarshalling = StringMarshalling.Utf16)]
    private static partial int SHParseDisplayName(string name, IntPtr bindContext, out IntPtr pidl, uint attributesIn,
        out uint attributesOut);

    [LibraryImport("shell32.dll")]
    private static partial int SHBindToParent(IntPtr pidl, Guid* iid, out IntPtr parent, out IntPtr child);

    [LibraryImport("shell32.dll", EntryPoint = "ILFindLastID")]
    private static partial IntPtr ILFindLastID(IntPtr pidl);

    [LibraryImport("ole32.dll")]
    private static partial int OleInitialize(IntPtr reserved);

    [LibraryImport("ole32.dll")]
    private static partial void OleUninitialize();

    [LibraryImport("user32.dll")]
    private static partial int GetMenuItemCount(IntPtr menu);

    [LibraryImport("user32.dll", EntryPoint = "GetMenuItemInfoW", SetLastError = true)]
    [return: MarshalAs(UnmanagedType.Bool)]
    private static partial bool GetMenuItemInfo(IntPtr menu, uint item,
        [MarshalAs(UnmanagedType.Bool)] bool byPosition, ref MenuItemInfo info);

    [DllImport("user32.dll", CharSet = CharSet.Unicode, EntryPoint = "GetMenuStringW")]
    private static extern int GetMenuString(IntPtr menu, uint item, StringBuilder text, int max, uint flags);

    /// <summary>One context menu object and the temporary menu it filled.</summary>
    private sealed class Session : IDisposable
    {
        private readonly IReadOnlyList<string> _paths;
        private readonly List<IntPtr> _pidls = [];
        private readonly bool _safe;
        private IntPtr _context2;
        private IntPtr _context3;

        private IntPtr _folder;

        public Session(IReadOnlyList<string> paths, bool safe)
        {
            _paths = paths;
            _safe = safe;
        }

        public IntPtr Menu { get; private set; }

        public IntPtr Context { get; private set; }

        public void Dispose()
        {
            if (Menu != IntPtr.Zero)
                NativeMethods.DestroyMenu(Menu);

            if (_context3 != IntPtr.Zero)
                Marshal.Release(_context3);

            if (_context2 != IntPtr.Zero)
                Marshal.Release(_context2);

            if (Context != IntPtr.Zero)
                Marshal.Release(Context);

            if (_folder != IntPtr.Zero)
                Marshal.Release(_folder);

            foreach (var pidl in _pidls)
                Marshal.FreeCoTaskMem(pidl);
        }

        public bool Open()
        {
            foreach (var path in _paths)
            {
                if (SHParseDisplayName(path, IntPtr.Zero, out var pidl, 0, out _) != 0 || pidl == IntPtr.Zero)
                    continue;

                _pidls.Add(pidl);
            }

            if (_pidls.Count == 0)
                return false;

            var folderId = ShellFolderId;
            if (SHBindToParent(_pidls[0], &folderId, out _folder, out _) != 0 || _folder == IntPtr.Zero)
                return false;

            var children = _pidls.Select(ILFindLastID).ToArray();

            fixed (IntPtr* childPointer = children)
            {
                var iid = ContextMenuId;
                var getUiObject =
                    (delegate* unmanaged[Stdcall]<IntPtr, IntPtr, uint, IntPtr*, Guid*, uint*, IntPtr*, int>)
                    (*(IntPtr**)_folder)[GetUiObjectOfSlot];

                IntPtr context;
                if (getUiObject(_folder, IntPtr.Zero, (uint)children.Length, childPointer, &iid, null, &context) != 0
                    || context == IntPtr.Zero)
                    return false;

                Context = context;
            }

            if (Marshal.QueryInterface(Context, in ContextMenu3Id, out _context3) != 0)
                _context3 = IntPtr.Zero;

            if (_context3 == IntPtr.Zero && Marshal.QueryInterface(Context, in ContextMenu2Id, out _context2) != 0)
                _context2 = IntPtr.Zero;

            Menu = NativeMethods.CreatePopupMenu();

            var flags = _safe
                ? CmfNormal | CmfNoverbs | CmfExplore
                : CmfNormal | CmfExplore;

            var query = (delegate* unmanaged[Stdcall]<IntPtr, IntPtr, uint, uint, uint, uint, int>)
                (*(IntPtr**)Context)[QueryContextMenuSlot];

            return query(Context, Menu, 0, IdFirst, IdLast, flags) >= 0;
        }

        public void HandleMenuMessage(uint message, IntPtr menu, IntPtr index)
        {
            if (_context3 != IntPtr.Zero)
            {
                var handle = (delegate* unmanaged[Stdcall]<IntPtr, uint, IntPtr, IntPtr, int>)
                    (*(IntPtr**)_context3)[HandleMenuMsgSlot];

                handle(_context3, message, menu, index);
            }
            else if (_context2 != IntPtr.Zero)
            {
                var handle = (delegate* unmanaged[Stdcall]<IntPtr, uint, IntPtr, IntPtr, int>)
                    (*(IntPtr**)_context2)[HandleMenuMsgSlot];

                handle(_context2, message, menu, index);
            }
        }

        public bool Invoke(string? verb, int offset) =>
            verb is { Length: > 0 } && InvokeVerb(verb) || InvokeOffset(offset);

        private bool InvokeVerb(string verb)
        {
            var verbPointer = Marshal.StringToHGlobalAnsi(verb);
            var verbWidePointer = Marshal.StringToHGlobalUni(verb);

            try
            {
                return InvokeCore(verbPointer, verbWidePointer);
            }
            finally
            {
                Marshal.FreeHGlobal(verbPointer);
                Marshal.FreeHGlobal(verbWidePointer);
            }
        }

        private bool InvokeOffset(int offset) => InvokeCore(offset, offset);

        private bool InvokeCore(IntPtr verb, IntPtr verbWide)
        {
            var info = new CommandInfo
            {
                Size = (uint)sizeof(CommandInfo),
                Mask = CmicMaskUnicode,
                Verb = verb,
                VerbW = verbWide,
                Show = 1
            };

            var invoke = (delegate* unmanaged[Stdcall]<IntPtr, CommandInfo*, int>)
                (*(IntPtr**)Context)[InvokeCommandSlot];

            return invoke(Context, &info) >= 0;
        }
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

    [StructLayout(LayoutKind.Sequential)]
    private struct MenuItemInfo
    {
        public uint Size;
        public uint Mask;
        public uint FType;
        public uint State;
        public uint Id;
        public IntPtr SubMenu;
        public IntPtr CheckedBitmap;
        public IntPtr UncheckedBitmap;
        public IntPtr ItemData;
        public IntPtr TypeData;
        public uint Count;
        public IntPtr Bitmap;
    }
}