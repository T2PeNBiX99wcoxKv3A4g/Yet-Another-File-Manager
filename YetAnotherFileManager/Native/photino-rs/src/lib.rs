//! A Rust implementation of the native half of Photino, behind the same C ABI the managed
//! library already speaks. Linux first: the window and the page are GTK 3 and WebKitGTK 4.1.

use std::cell::RefCell;
use std::ffi::{c_char, c_int, c_void, CStr, CString};
use std::ptr;

pub type ClosingCallback = extern "C" fn() -> u8;
pub type VoidCallback = extern "C" fn();
pub type SizeCallback = extern "C" fn(c_int, c_int);
pub type MessageCallback = extern "C" fn(*const c_char);
pub type PopupCallback = extern "C" fn(*const c_char, *const c_char, c_int, c_int, c_int, c_int) -> u8;
pub type Action = extern "C" fn();
pub type MonitorsCallback = extern "C" fn(*const Monitor) -> c_int;

#[repr(C)]
pub struct Monitor {
    pub monitor: [c_int; 4],
    pub work: [c_int; 4],
    pub scale: f64,
}

#[repr(C)]
pub struct WebResourceResponse {
    pub status_code: c_int,
    pub content_type: *mut c_char,
    pub headers: *mut c_char,
    pub body: *const c_void,
    pub body_length: c_int,
}

pub type ResourceCallback = extern "C" fn(*const c_char, *const c_char) -> *mut WebResourceResponse;

#[repr(C)]
pub struct PhotinoInitParams {
    pub start_string: *const c_char,
    pub start_url: *const c_char,
    pub title: *const c_char,
    pub window_icon_file: *const c_char,
    pub temporary_files_path: *const c_char,
    pub user_agent: *const c_char,
    pub browser_control_init_parameters: *const c_char,
    pub notification_registration_id: *const c_char,
    pub native_parent: *mut c_void,
    pub closing_handler: Option<ClosingCallback>,
    pub focus_in_handler: Option<VoidCallback>,
    pub focus_out_handler: Option<VoidCallback>,
    pub resized_handler: Option<SizeCallback>,
    pub maximized_handler: Option<VoidCallback>,
    pub restored_handler: Option<VoidCallback>,
    pub minimized_handler: Option<VoidCallback>,
    pub moved_handler: Option<SizeCallback>,
    pub web_message_received_handler: Option<MessageCallback>,
    pub popup_requested_handler: Option<PopupCallback>,
    pub custom_scheme_names: [*const c_char; 16],
    pub custom_scheme_handler: Option<ResourceCallback>,
    pub left: c_int,
    pub top: c_int,
    pub width: c_int,
    pub height: c_int,
    pub zoom: c_int,
    pub min_width: c_int,
    pub min_height: c_int,
    pub max_width: c_int,
    pub max_height: c_int,
    pub center_on_initialize: u8,
    pub chromeless: u8,
    pub transparent: u8,
    pub context_menu_enabled: u8,
    pub dev_tools_enabled: u8,
    pub full_screen: u8,
    pub maximized: u8,
    pub minimized: u8,
    pub resizable: u8,
    pub topmost: u8,
    pub use_os_default_location: u8,
    pub use_os_default_size: u8,
    pub grant_browser_permissions: u8,
    pub media_autoplay_enabled: u8,
    pub file_system_access_enabled: u8,
    pub web_security_enabled: u8,
    pub javascript_clipboard_access_enabled: u8,
    pub media_stream_enabled: u8,
    pub smooth_scrolling_enabled: u8,
    pub ignore_certificate_errors_enabled: u8,
    pub notifications_enabled: u8,
}

fn text(value: *const c_char) -> Option<String> {
    if value.is_null() {
        return None;
    }

    // SAFETY: the managed side always passes a NUL-terminated UTF-8 string.
    Some(unsafe { CStr::from_ptr(value) }.to_string_lossy().into_owned())
}

#[cfg(target_os = "linux")]
mod platform {
    use super::*;
    use gtk::prelude::*;
    use javascriptcore::ValueExt;
    use webkit2gtk::{SettingsExt, URISchemeRequestExt, UserContentManagerExt, WebContextExt, WebViewExt};

    pub struct Window {
        pub window: gtk::Window,
        pub view: webkit2gtk::WebView,
        pub title: String,
    }

    thread_local! {
        static CURRENT: RefCell<Option<Window>> = const { RefCell::new(None) };
    }

    fn with<R>(work: impl FnOnce(&Window) -> R) -> Option<R> {
        CURRENT.with(|slot| slot.borrow().as_ref().map(work))
    }

    pub fn create(params: &PhotinoInitParams) -> bool {
        if gtk::init().is_err() {
            return false;
        }

        let window = gtk::Window::new(gtk::WindowType::Toplevel);
        window.set_decorated(params.chromeless == 0);
        window.set_resizable(params.resizable != 0);
        window.set_keep_above(params.topmost != 0);

        if params.use_os_default_size == 0 && params.width > 0 && params.height > 0 {
            window.set_default_size(params.width, params.height);
        }

        if params.min_width > 0 || params.min_height > 0 {
            window.set_size_request(params.min_width.max(0), params.min_height.max(0));
        }

        if params.use_os_default_location == 0 && (params.left != 0 || params.top != 0) {
            window.move_(params.left, params.top);
        }

        if params.center_on_initialize != 0 {
            window.set_position(gtk::WindowPosition::Center);
        }

        let title = text(params.title).unwrap_or_else(|| "Photino".into());
        window.set_title(&title);

        if let Some(icon) = text(params.window_icon_file) {
            let _ = window.set_icon_from_file(&icon);
        }

        // The message channel the managed library expects: a script that turns window.external
        // into the same object the other platforms provide, and a handler that receives it.
        let manager = webkit2gtk::UserContentManager::new();
        let script = webkit2gtk::UserScript::new(
            "window.__receiveMessageCallbacks = [];\
             window.__dispatchMessageCallback = function(message) {\
                 window.__receiveMessageCallbacks.forEach(function(callback) { callback(message); });\
             };\
             window.external = {\
                 sendMessage: function(message) {\
                     window.webkit.messageHandlers.Photinointerop.postMessage(message);\
                 },\
                 receiveMessage: function(callback) {\
                     window.__receiveMessageCallbacks.push(callback);\
                 }\
             };",
            webkit2gtk::UserContentInjectedFrames::AllFrames,
            webkit2gtk::UserScriptInjectionTime::Start,
            &[],
            &[],
        );
        manager.add_script(&script);

        if let Some(callback) = params.web_message_received_handler {
            manager.connect_script_message_received(Some("Photinointerop"), move |_, result| {
                if let Some(value) = result.js_value() {
                    let text = value.to_str();
                    if let Ok(message) = CString::new(text.as_bytes()) {
                        callback(message.as_ptr());
                    }
                }
            });
        }

        manager.register_script_message_handler("Photinointerop");

        let view: webkit2gtk::WebView = glib::Object::builder().property("user-content-manager", &manager).build();

        if let Some(agent) = text(params.user_agent) {
            let settings = webkit2gtk::WebViewExt::settings(&view).expect("webkit settings");
            settings.set_user_agent(Some(&agent));
        }

        if params.dev_tools_enabled == 0 {
            if let Some(settings) = webkit2gtk::WebViewExt::settings(&view) {
                settings.set_enable_developer_extras(false);
            }
        }

        if params.smooth_scrolling_enabled == 0 {
            if let Some(settings) = webkit2gtk::WebViewExt::settings(&view) {
                settings.set_enable_smooth_scrolling(false);
            }
        }

        if params.zoom > 0 {
            webkit2gtk::WebViewExt::set_zoom_level(&view, params.zoom as f64 / 100.0);
        }

        window.add(&view);

        // Window callbacks, each optional.
        if let Some(callback) = params.closing_handler {
            window.connect_delete_event(move |_, _| {
                if callback() != 0 {
                    glib::Propagation::Proceed
                } else {
                    glib::Propagation::Stop
                }
            });
        }

        if let Some(callback) = params.focus_in_handler {
            window.connect_focus_in_event(move |_, _| {
                callback();
                glib::Propagation::Proceed
            });
        }

        if let Some(callback) = params.focus_out_handler {
            window.connect_focus_out_event(move |_, _| {
                callback();
                glib::Propagation::Proceed
            });
        }

        if let Some(callback) = params.moved_handler {
            window.connect_configure_event(move |_, event| {
                let (x, y) = (event.position().0, event.position().1);
                callback(x, y);
                false.into()
            });
        }

        if let Some(callback) = params.resized_handler {
            window.connect_configure_event(move |_, event| {
                let (width, height) = (event.size().0 as i32, event.size().1 as i32);
                callback(width, height);
                false.into()
            });
        }

        if let Some(start_string) = text(params.start_string) {
            view.load_html(&start_string, None);
        } else if let Some(start_url) = text(params.start_url) {
            view.load_uri(&start_url);
        }

        window.show_all();

        if params.full_screen != 0 {
            window.fullscreen();
        }

        if params.maximized != 0 {
            window.maximize();
        }

        if params.minimized != 0 {
            window.iconify();
        }

        CURRENT.with(|slot| {
            *slot.borrow_mut() = Some(Window {
                window,
                view,
                title,
            })
        });

        true
    }

    pub fn destroy() {
        CURRENT.with(|slot| {
            if let Some(window) = slot.borrow_mut().take() {
                window.window.close();
            }
        });
    }

    pub fn run() {
        gtk::main();
    }

    pub fn navigate_to_url(url: &str) {
        with(|window| window.view.load_uri(url));
    }

    pub fn navigate_to_string(content: &str) {
        with(|window| window.view.load_html(content, None));
    }

    pub fn send_web_message(message: &str) {
        let escaped = serde_escape(message);
        let script = format!("__dispatchMessageCallback(\"{escaped}\")");
        with(|window| {
            webkit2gtk::WebViewExt::run_javascript(&window.view, &script, None::<&gtk::gio::Cancellable>, |_| {});
        });
    }

    pub fn execute_script(script: &str) -> bool {
        match with(|window| {
            webkit2gtk::WebViewExt::run_javascript(&window.view, script, None::<&gtk::gio::Cancellable>, |_| {});
        }) {
            Some(()) => true,
            None => false,
        }
    }

    pub fn invoke(action: Action) {
        // Called on the main thread, the work is simply done. From another thread it is queued and
        // waited for, so the caller's delegate stays alive for as long as it is used.
        if glib::MainContext::default().is_owner() {
            action();
            return;
        }

        let (sender, receiver) = std::sync::mpsc::channel();

        glib::MainContext::default().invoke(move || {
            action();
            let _ = sender.send(());
        });

        let _ = receiver.recv();
    }

    pub fn quit() {
        gtk::main_quit();
    }

    pub fn set_title(title: &str) {
        with(|window| {
            window.window.set_title(title);
            // The managed side asks for it back later.
            unsafe {
                *window.title.as_ptr().cast_mut().cast::<u8>() = b'\0';
            }
        });
    }

    pub fn get_title() -> String {
        with(|window| window.title.clone()).unwrap_or_default()
    }

    pub fn set_size(width: c_int, height: c_int) {
        with(|window| window.window.resize(width, height));
    }

    pub fn set_min_size(width: c_int, height: c_int) {
        with(|window| window.window.set_size_request(width, height));
    }

    pub fn set_max_size(_width: c_int, _height: c_int) {}

    pub fn set_position(x: c_int, y: c_int) {
        with(|window| window.window.move_(x, y));
    }

    pub fn get_size() -> (c_int, c_int) {
        with(|window| window.window.size()).unwrap_or((0, 0))
    }

    pub fn get_position() -> (c_int, c_int) {
        with(|window| window.window.position()).unwrap_or((0, 0))
    }

    pub fn set_resizable(resizable: bool) {
        with(|window| window.window.set_resizable(resizable));
    }

    pub fn get_resizable() -> bool {
        with(|window| window.window.is_resizable()).unwrap_or(false)
    }

    pub fn set_topmost(topmost: bool) {
        with(|window| window.window.set_keep_above(topmost));
    }

    pub fn get_topmost() -> bool {
        with(|window| {
            window
                .window
                .window()
                .map(|gdk| gdk.state().contains(gtk::gdk::WindowState::ABOVE))
                .unwrap_or(false)
        })
        .unwrap_or(false)
    }

    pub fn set_minimized(minimized: bool) {
        with(|window| {
            if minimized {
                window.window.iconify();
            } else {
                window.window.deiconify();
            }
        });
    }

    pub fn get_minimized() -> bool {
        with(|window| {
            window
                .window
                .window()
                .map(|gdk| gdk.state().contains(gtk::gdk::WindowState::ICONIFIED))
                .unwrap_or(false)
        })
        .unwrap_or(false)
    }

    pub fn set_maximized(maximized: bool) {
        with(|window| {
            if maximized {
                window.window.maximize();
            } else {
                window.window.unmaximize();
            }
        });
    }

    pub fn get_maximized() -> bool {
        with(|window| {
            window
                .window
                .window()
                .map(|gdk| gdk.state().contains(gtk::gdk::WindowState::MAXIMIZED))
                .unwrap_or(false)
        })
        .unwrap_or(false)
    }

    pub fn set_full_screen(full: bool) {
        with(|window| {
            if full {
                window.window.fullscreen();
            } else {
                window.window.unfullscreen();
            }
        });
    }

    pub fn restore() {
        with(|window| window.window.present());
    }

    pub fn close() {
        with(|window| window.window.close());
        quit();
    }

    pub fn focus() {
        with(|window| window.window.present());
    }

    pub fn set_zoom(zoom: c_int) {
        with(|window| webkit2gtk::WebViewExt::set_zoom_level(&window.view, zoom as f64 / 100.0));
    }

    pub fn get_zoom() -> c_int {
        with(|window| (webkit2gtk::WebViewExt::zoom_level(&window.view) * 100.0) as c_int).unwrap_or(100)
    }

    pub fn screen_dpi() -> u32 {
        with(|window| {
            gtk::prelude::GtkWindowExt::screen(&window.window)
                .map(|screen| {
                    let dpi = screen.resolution();
                    (dpi * 0.0254) as u32
                })
                .unwrap_or(96)
        })
        .unwrap_or(96)
    }

    pub fn set_icon_file(path: &str) {
        with(|window| {
            let _ = window.window.set_icon_from_file(path);
        });
    }

    pub fn set_transparent(transparent: bool) {
        with(|window| {
            window.window.set_app_paintable(transparent);
            let screen = gtk::prelude::GtkWindowExt::screen(&window.window);
            if transparent {
                if let Some(screen) = screen {
                    if let Some(visual) = screen.rgba_visual() {
                        window.window.set_visual(Some(&visual));
                    }
                }
            }
        });
        // WebKit needs the document background cleared for the transparency to show.
        let script = if transparent {
            "document.documentElement.style.background='transparent';document.body.style.background='transparent';"
        } else {
            ""
        };

        if !script.is_empty() {
            let _ = execute_script(script);
        }
    }

    pub fn start_dragging() {
        with(|window| {
            if let Some(gdk_window) = window.window.window() {
                gdk_window.begin_move_drag(1, 0, 0, 0);
            }
        });
    }

    pub fn monitors(callback: MonitorsCallback) {
        with(|window| {
            if let Some(screen) = gtk::prelude::GtkWindowExt::screen(&window.window) {
                let display = screen.display();
                {
                    let count = display.n_monitors();
                    for index in 0..count {
                        if let Some(monitor) = display.monitor(index) {
                            let geometry = monitor.geometry();
                            let workarea = monitor.workarea();
                            let info = Monitor {
                                monitor: [
                                    geometry.x(),
                                    geometry.y(),
                                    geometry.width(),
                                    geometry.height(),
                                ],
                                work: [
                                    workarea.x(),
                                    workarea.y(),
                                    workarea.width(),
                                    workarea.height(),
                                ],
                                scale: monitor.scale_factor() as f64,
                            };

                            if callback(&info) == 0 {
                                break;
                            }
                        }
                    }
                }
            }
        });
    }

    /// Registers the caller's schemes with WebKit, answering through the same managed callback.
    pub fn register_schemes(names: &[*const c_char; 16], handler: Option<ResourceCallback>) {
        let context = webkit2gtk::WebContext::default().expect("default web context");

        for name in names.iter().filter(|name| !name.is_null()) {
            let scheme = text(*name).unwrap_or_default();

            context.register_uri_scheme(&scheme, move |request| {
                let Some(callback) = handler else {
                    return;
                };

                let uri = request.uri().unwrap_or_default();
                let Ok(uri_c) = CString::new(uri.as_bytes()) else {
                    return;
                };

                // The scheme API here carries no request headers and no status; the response is a
                // body and a content type.
                let answer = callback(uri_c.as_ptr(), ptr::null());

                if answer.is_null() {
                    return;
                }

                // SAFETY: the managed side hands over a record it allocated for us to read once.
                let answer = unsafe { &*answer };

                let body = if answer.body.is_null() || answer.body_length <= 0 {
                    &[][..]
                } else {
                    // SAFETY: body points to body_length bytes owned by the caller until we return.
                    unsafe { std::slice::from_raw_parts(answer.body.cast::<u8>(), answer.body_length as usize) }
                };

                let stream = gtk::gio::MemoryInputStream::from_bytes(&glib::Bytes::from(body));
                let content_type = if answer.content_type.is_null() {
                    "application/octet-stream".to_string()
                } else {
                    // SAFETY: the managed side NUL-terminates the string it hands us.
                    unsafe { CStr::from_ptr(answer.content_type) }
                        .to_string_lossy()
                        .into_owned()
                };

                request.finish(&stream, body.len() as i64, Some(&content_type));
            });
        }
    }

    fn serde_escape(value: &str) -> String {
        let mut out = String::with_capacity(value.len());

        for ch in value.chars() {
            match ch {
                '"' => out.push_str("\\\""),
                '\\' => out.push_str("\\\\"),
                '\n' => out.push_str("\\n"),
                '\r' => out.push_str("\\r"),
                '\t' => out.push_str("\\t"),
                ch if (ch as u32) < 0x20 => out.push_str(&format!("\\u{:04x}", ch as u32)),
                ch => out.push(ch),
            }
        }

        out
    }
}

mod exports;