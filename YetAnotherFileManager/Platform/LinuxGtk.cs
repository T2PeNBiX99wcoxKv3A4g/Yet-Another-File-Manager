using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using Serilog;
using Serilog.Events;
using YetAnotherFileManager.Extensions;
using YetAnotherFileManager.Utils;

namespace YetAnotherFileManager.Platform;

/// <summary>
///     Direct GTK access for the few things Photino cannot do on Linux: hiding and re-presenting a
///     window, and routing native library warnings into the log.
/// </summary>
/// <remarks>
///     Photino exposes no GTK widget handle and no hide call. The toplevel is therefore looked up by
///     its unique, app-controlled title. Every call is best-effort and never throws.
/// </remarks>
[SupportedOSPlatform("linux")]
internal static partial class LinuxGtk
{
    private const string GtkLibrary = "libgtk-3.so.0";
    private const string GlibLibrary = "libglib-2.0.so.0";
    private const string GObjectLibrary = "libgobject-2.0.so.0";

    // G_LOG_LEVEL_ERROR = 1 << 2, CRITICAL = 1 << 3, WARNING = 1 << 4.
    private const int LogLevelError = 1 << 2;
    private const int LogLevelCritical = 1 << 3;
    private const int LogLevelWarning = 1 << 4;

    private static readonly List<LogHandler> LogHandlers = [];

    /// <summary>
    ///     Hides a toplevel by title. Returns false when it could not be found. Unmapping is what takes
    ///     a window out of the taskbar here: iconifying it only minimises it, which leaves it there.
    /// </summary>
    public static bool Hide(string title) => WithWindow(title, gtk_widget_hide);

    /// <summary>Un-hides and raises a toplevel by title. Returns false when it could not be found.</summary>
    public static bool Present(string title) => WithWindow(title, window =>
    {
        gtk_widget_show(window);
        gtk_window_present(window);
    });

    /// <summary>Sets the program name, which GTK reports as the Wayland app id.</summary>
    public static void SetProgramName(string name) =>
        Try.Run(() => g_set_prgname(name)).OnFailure(ex => Log.Debug(ex, "Failed to set the program name"));

    /// <summary>
    ///     Connects a GObject signal. The caller has to keep the callback alive. Generic so the
    ///     AOT-safe <see cref="Marshal.GetFunctionPointerForDelegate{TDelegate}" /> overload is used.
    /// </summary>
    public static void Connect<TDelegate>(IntPtr instance, string signal, TDelegate callback, IntPtr data)
        where TDelegate : Delegate =>
        g_signal_connect_data(instance, signal, Marshal.GetFunctionPointerForDelegate(callback), data,
            IntPtr.Zero, 0);

    /// <summary>
    ///     Reroutes a GLib log domain to Serilog at a fixed level. Used for libraries that announce their
    ///     own deprecation on every start and would otherwise keep printing it to stderr.
    /// </summary>
    public static void RouteLogDomain(string domain, LogEventLevel level) =>
        g_log_set_handler(domain, LogLevelWarning | LogLevelCritical | LogLevelError,
            Marshal.GetFunctionPointerForDelegate(Root((_, _, message, _) => Write(level, IntPtr.Zero, message))),
            IntPtr.Zero);

    /// <summary>
    ///     Reroutes every GLib domain that has no handler of its own — which is how GTK, WebKit and the
    ///     other native libraries report problems — so their warnings reach the log file, not only stderr.
    /// </summary>
    public static void RouteAllLogDomains() =>
        g_log_set_default_handler(
            Marshal.GetFunctionPointerForDelegate(
                Root((domain, level, message, _) => Write(ToSerilogLevel(level), domain, message))),
            IntPtr.Zero);

    /// <summary>Keeps a GLib callback alive: the library holds it for the life of the process.</summary>
    private static LogHandler Root(LogHandler handler)
    {
        LogHandlers.Add(handler);
        return handler;
    }

    private static void Write(LogEventLevel level, IntPtr domain, IntPtr message)
    {
        var name = domain == IntPtr.Zero ? "glib" : Marshal.PtrToStringUTF8(domain) ?? "glib";
        var text = (Marshal.PtrToStringUTF8(message) ?? string.Empty).TrimEnd();

        if (text.Length > 0)
            Log.Write(level, "[{Domain}] {Line}", name, text);
    }

    private static LogEventLevel ToSerilogLevel(int level) => level switch
    {
        LogLevelError or LogLevelCritical => LogEventLevel.Error,
        LogLevelWarning => LogEventLevel.Warning,
        _ => LogEventLevel.Debug
    };

    private static bool WithWindow(string title, Action<IntPtr> action) =>
        Try.Run(() =>
        {
            var window = FindByTitle(title);
            if (window == IntPtr.Zero)
                return false;

            action(window);
            return true;
        }).GetOrElse(ex =>
        {
            Log.Debug(ex, "GTK window lookup for {Title} failed", title);
            return false;
        });

    private static IntPtr FindByTitle(string title)
    {
        var list = gtk_window_list_toplevels();
        if (list == IntPtr.Zero)
            return IntPtr.Zero;

        try
        {
            // GList is { gpointer data; GList* next; GList* prev; }.
            for (var node = list; node != IntPtr.Zero; node = Marshal.ReadIntPtr(node, IntPtr.Size))
            {
                var window = Marshal.ReadIntPtr(node);

                // A toplevel that is being torn down can still sit in this list for a moment, and
                // asking it for its title would trip a GTK assertion.
                if (window == IntPtr.Zero || g_type_check_instance_is_a(window, gtk_window_get_type()) == 0)
                    continue;

                var current = gtk_window_get_title(window);

                if (current != IntPtr.Zero && Marshal.PtrToStringUTF8(current) == title)
                    return window;
            }
        }
        finally
        {
            g_list_free(list);
        }

        return IntPtr.Zero;
    }

    [LibraryImport(GtkLibrary)]
    private static partial IntPtr gtk_window_list_toplevels();

    [LibraryImport(GtkLibrary)]
    private static partial IntPtr gtk_window_get_title(IntPtr window);

    [LibraryImport(GtkLibrary)]
    private static partial void gtk_widget_hide(IntPtr widget);

    [LibraryImport(GtkLibrary)]
    private static partial void gtk_widget_show(IntPtr widget);

    [LibraryImport(GtkLibrary)]
    private static partial void gtk_window_present(IntPtr window);

    [LibraryImport(GlibLibrary)]
    private static partial void g_list_free(IntPtr list);

    [LibraryImport(GlibLibrary, StringMarshalling = StringMarshalling.Utf8)]
    private static partial void g_set_prgname(string name);

    [LibraryImport(GlibLibrary, StringMarshalling = StringMarshalling.Utf8)]
    private static partial uint g_log_set_handler(string logDomain, int logLevels, IntPtr logFunc, IntPtr userData);

    [LibraryImport(GlibLibrary)]
    private static partial IntPtr g_log_set_default_handler(IntPtr logFunc, IntPtr userData);

    // g_signal_connect_data lives in GObject, not GLib.
    [LibraryImport(GObjectLibrary, StringMarshalling = StringMarshalling.Utf8)]
    private static partial ulong g_signal_connect_data(IntPtr instance, string detailedSignal, IntPtr handler,
        IntPtr data, IntPtr destroyData, int flags);

    [LibraryImport(GObjectLibrary)]
    private static partial int g_type_check_instance_is_a(IntPtr instance, IntPtr type);

    [LibraryImport(GtkLibrary)]
    private static partial IntPtr gtk_window_get_type();

    [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
    private delegate void LogHandler(IntPtr domain, int level, IntPtr message, IntPtr userData);
}
