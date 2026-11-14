using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     The mouse's back and forward buttons on GTK, which WebKit never reports to the page.
/// </summary>
/// <remarks>
///     WebKitGTK converts a GDK button press into a DOM event through
///     <c>WebEventFactory::buttonForEvent</c>, which only knows buttons 1, 2 and 3; the side buttons
///     arrive in the page as "no button". A small gesture is therefore put on the web view in the
///     capture phase: it sees every press, claims only the side buttons, and leaves the rest to
///     WebKit untouched. Everything is best-effort; a widget that cannot be found only means the
///     buttons keep doing what they did before.
/// </remarks>
[SupportedOSPlatform("linux")]
internal static partial class LinuxMouseButtons
{
    private const string GtkLibrary = "libgtk-3.so.0";
    private const string GlibLibrary = "libglib-2.0.so.0";
    private const string GObjectLibrary = "libgobject-2.0.so.0";
    private const string WebKitLibrary = "libwebkit2gtk-4.1.so.0";

    /// <summary>GTK_PHASE_CAPTURE: the gesture sees the press before the widget does.</summary>
    private const int PhaseCapture = 1;

    /// <summary>GTK_EVENT_SEQUENCE_CLAIMED: stop the press here.</summary>
    private const int SequenceClaimed = 1;

    // The gestures only hold function pointers, so the delegate has to live as long as the app.
    private static readonly PressedHandler Pressed = OnPressed;

    private static Action<string>? _navigate;

    /// <summary>
    ///     Routes the side buttons of the window with this title to <paramref name="navigate" />,
    ///     which is called with <c>"back"</c> or <c>"forward"</c>. Returns false when the window or
    ///     its web view could not be found.
    /// </summary>
    public static bool Attach(string title, Action<string> navigate) =>
        Try.Run(() =>
        {
            var window = FindWindow(title);
            if (window == IntPtr.Zero)
                return false;

            var webView = FindWebView(window);
            if (webView == IntPtr.Zero)
                return false;

            _navigate = navigate;

            // A gesture that watches one button number does not see the side buttons in GTK3, so a
            // single gesture watches every button and only claims the side ones. Left, middle and
            // right are left unclaimed, so the page still receives them.
            if (!Watch(webView))
                return false;

            Log.Information("Watching the back and forward mouse buttons of {Title}", title);
            return true;
        }).GetOrElse(ex =>
        {
            Log.Warning(ex, "Could not watch the mouse buttons of {Title}", title);
            return false;
        });

    private static bool Watch(IntPtr webView)
    {
        var gesture = gtk_gesture_multi_press_new(webView);
        if (gesture == IntPtr.Zero)
            return false;

        gtk_gesture_single_set_button(gesture, 0);
        gtk_event_controller_set_propagation_phase(gesture, PhaseCapture);

        var handler = Marshal.GetFunctionPointerForDelegate(Pressed);
        g_signal_connect_data(gesture, "pressed", handler, IntPtr.Zero, IntPtr.Zero, 0);
        return true;
    }

    private static void OnPressed(IntPtr gesture, int presses, double x, double y, IntPtr data)
    {
        var button = gtk_gesture_single_get_current_button(gesture);

        // GTK numbers the extra buttons as BTN_SIDE=8, BTN_EXTRA=9, BTN_FORWARD=10 and
        // BTN_BACK=11; different mice use different pairs for back and forward.
        switch (button)
        {
            case 8 or 11:
                Log.Information("Mouse back button pressed");
                _navigate?.Invoke("back");
                gtk_gesture_set_state(gesture, SequenceClaimed);
                break;
            case 9 or 10:
                Log.Information("Mouse forward button pressed");
                _navigate?.Invoke("forward");
                gtk_gesture_set_state(gesture, SequenceClaimed);
                break;
        }
    }

    /// <summary>Depth-first search for the WebKitWebView inside a widget tree.</summary>
    private static IntPtr FindWebView(IntPtr widget)
    {
        if (widget == IntPtr.Zero)
            return IntPtr.Zero;

        if (g_type_check_instance_is_a(widget, webkit_web_view_get_type()) != 0)
            return widget;

        if (g_type_check_instance_is_a(widget, gtk_container_get_type()) == 0)
            return IntPtr.Zero;

        var children = gtk_container_get_children(widget);
        if (children == IntPtr.Zero)
            return IntPtr.Zero;

        try
        {
            // GList is { gpointer data; GList* next; GList* prev; }.
            for (var node = children; node != IntPtr.Zero; node = Marshal.ReadIntPtr(node, IntPtr.Size))
            {
                var found = FindWebView(Marshal.ReadIntPtr(node));
                if (found != IntPtr.Zero)
                    return found;
            }
        }
        finally
        {
            g_list_free(children);
        }

        return IntPtr.Zero;
    }

    /// <summary>The toplevel with this exact title, or zero when there is none.</summary>
    private static IntPtr FindWindow(string title)
    {
        var list = gtk_window_list_toplevels();
        if (list == IntPtr.Zero)
            return IntPtr.Zero;

        try
        {
            for (var node = list; node != IntPtr.Zero; node = Marshal.ReadIntPtr(node, IntPtr.Size))
            {
                var window = Marshal.ReadIntPtr(node);

                // A toplevel that is being torn down can still sit in this list for a moment.
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

    [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
    private delegate void PressedHandler(IntPtr gesture, int presses, double x, double y, IntPtr data);

    [LibraryImport(GtkLibrary)]
    private static partial IntPtr gtk_window_list_toplevels();

    [LibraryImport(GtkLibrary)]
    private static partial IntPtr gtk_window_get_title(IntPtr window);

    [LibraryImport(GtkLibrary)]
    private static partial IntPtr gtk_window_get_type();

    [LibraryImport(GtkLibrary)]
    private static partial IntPtr gtk_container_get_type();

    [LibraryImport(GtkLibrary)]
    private static partial IntPtr gtk_container_get_children(IntPtr container);

    [LibraryImport(GtkLibrary)]
    private static partial IntPtr gtk_gesture_multi_press_new(IntPtr widget);

    [LibraryImport(GtkLibrary)]
    private static partial void gtk_gesture_single_set_button(IntPtr gesture, uint button);

    [LibraryImport(GtkLibrary)]
    private static partial uint gtk_gesture_single_get_current_button(IntPtr gesture);

    [LibraryImport(GtkLibrary)]
    private static partial void gtk_gesture_set_state(IntPtr gesture, int state);

    [LibraryImport(GtkLibrary)]
    private static partial void gtk_event_controller_set_propagation_phase(IntPtr controller, int phase);

    [LibraryImport(GObjectLibrary)]
    private static partial int g_type_check_instance_is_a(IntPtr instance, IntPtr type);

    [LibraryImport(GObjectLibrary, StringMarshalling = StringMarshalling.Utf8)]
    private static partial ulong g_signal_connect_data(IntPtr instance, string detailedSignal, IntPtr handler,
        IntPtr data, IntPtr destroyData, int flags);

    [LibraryImport(GlibLibrary)]
    private static partial void g_list_free(IntPtr list);

    [LibraryImport(WebKitLibrary)]
    private static partial IntPtr webkit_web_view_get_type();
}
