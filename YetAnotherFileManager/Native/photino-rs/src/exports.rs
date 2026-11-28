
use super::*;

#[cfg(target_os = "linux")]
use platform as host;

#[cfg(not(target_os = "linux"))]
mod unsupported {
    use super::*;

    pub fn create(_params: &PhotinoInitParams) -> bool {
        false
    }

    pub fn destroy() {}
    pub fn run() {}
    pub fn navigate_to_url(_url: &str) {}
    pub fn navigate_to_string(_content: &str) {}
    pub fn send_web_message(_message: &str) {}
    pub fn execute_script(_script: &str) -> bool {
        false
    }
    pub fn invoke(_action: Action) {}
    pub fn quit() {}
    pub fn set_title(_title: &str) {}
    pub fn get_title() -> String {
        String::new()
    }
    pub fn set_size(_width: c_int, _height: c_int) {}
    pub fn set_min_size(_width: c_int, _height: c_int) {}
    pub fn set_max_size(_width: c_int, _height: c_int) {}
    pub fn set_position(_x: c_int, _y: c_int) {}
    pub fn get_size() -> (c_int, c_int) {
        (0, 0)
    }
    pub fn get_position() -> (c_int, c_int) {
        (0, 0)
    }
    pub fn set_resizable(_resizable: bool) {}
    pub fn get_resizable() -> bool {
        false
    }
    pub fn set_topmost(_topmost: bool) {}
    pub fn get_topmost() -> bool {
        false
    }
    pub fn set_minimized(_minimized: bool) {}
    pub fn get_minimized() -> bool {
        false
    }
    pub fn set_maximized(_maximized: bool) {}
    pub fn get_maximized() -> bool {
        false
    }
    pub fn set_full_screen(_full: bool) {}
    pub fn restore() {}
    pub fn close() {}
    pub fn focus() {}
    pub fn set_zoom(_zoom: c_int) {}
    pub fn get_zoom() -> c_int {
        100
    }
    pub fn screen_dpi() -> u32 {
        96
    }
    pub fn set_icon_file(_path: &str) {}
    pub fn set_transparent(_transparent: bool) {}
    pub fn start_dragging() {}
    pub fn monitors(_callback: MonitorsCallback) {}
    pub fn register_schemes(_names: &[*const c_char; 16], _handler: Option<ResourceCallback>) {}
}

#[cfg(not(target_os = "linux"))]
use unsupported as host;

fn string(value: *const c_char) -> String {
    text(value).unwrap_or_default()
}

fn to_c(value: String) -> *mut c_char {
    match CString::new(value) {
        Ok(value) => value.into_raw(),
        Err(_) => ptr::null_mut(),
    }
}

#[no_mangle]
pub extern "C" fn Photino_ctor(params: *mut PhotinoInitParams) -> *mut c_void {
    if params.is_null() {
        return ptr::null_mut();
    }

    // SAFETY: the managed side passes the struct it marshalled for this call.
    let params = unsafe { &*params };

    if !host::create(params) {
        return ptr::null_mut();
    }

    host::register_schemes(&params.custom_scheme_names, params.custom_scheme_handler);

    // A token for the managed side to hold; the window itself lives on this thread.
    Box::into_raw(Box::new(0u8)).cast()
}

#[no_mangle]
pub extern "C" fn Photino_dtor(_instance: *mut c_void) {
    host::destroy();
}

#[no_mangle]
pub extern "C" fn Photino_register_win32(_hinstance: *mut c_void) {}

#[no_mangle]
pub extern "C" fn Photino_getHwnd_win32(_instance: *mut c_void) -> *mut c_void {
    ptr::null_mut()
}

#[no_mangle]
pub extern "C" fn Photino_setWebView2RuntimePath_win32(_instance: *mut c_void, _path: *const c_char) {}

#[no_mangle]
pub extern "C" fn Photino_register_mac() {}

#[no_mangle]
pub extern "C" fn Photino_getGtkWindow_linux(_instance: *mut c_void) -> *mut c_void {
    ptr::null_mut()
}

#[no_mangle]
pub extern "C" fn Photino_WaitForExit(_instance: *mut c_void) {
    host::run();
}

#[no_mangle]
pub extern "C" fn Photino_Center(_instance: *mut c_void) {}

#[no_mangle]
pub extern "C" fn Photino_ClearBrowserAutoFill(_instance: *mut c_void) {}

#[no_mangle]
pub extern "C" fn Photino_Focus(_instance: *mut c_void) {
    host::focus();
}

#[no_mangle]
pub extern "C" fn Photino_Close(_instance: *mut c_void) {
    host::close();
}

#[no_mangle]
pub extern "C" fn Photino_Restore(_instance: *mut c_void) {
    host::restore();
}

#[no_mangle]
pub extern "C" fn Photino_NavigateToUrl(_instance: *mut c_void, url: *const c_char) {
    host::navigate_to_url(&string(url));
}

#[no_mangle]
pub extern "C" fn Photino_NavigateToString(_instance: *mut c_void, content: *const c_char) {
    host::navigate_to_string(&string(content));
}

#[no_mangle]
pub extern "C" fn Photino_SendWebMessage(_instance: *mut c_void, message: *const c_char) {
    host::send_web_message(&string(message));
}

#[no_mangle]
pub extern "C" fn Photino_ExecuteScript(_instance: *mut c_void, script: *const c_char) -> u8 {
    u8::from(host::execute_script(&string(script)))
}

#[no_mangle]
pub extern "C" fn Photino_Invoke(_instance: *mut c_void, action: Option<Action>) {
    if let Some(action) = action {
        host::invoke(action);
    }
}

#[no_mangle]
pub extern "C" fn Photino_SetTitle(_instance: *mut c_void, title: *const c_char) {
    host::set_title(&string(title));
}

#[no_mangle]
pub extern "C" fn Photino_GetTitle(_instance: *mut c_void) -> *mut c_char {
    to_c(host::get_title())
}

#[no_mangle]
pub extern "C" fn Photino_SetSize(_instance: *mut c_void, width: c_int, height: c_int) {
    host::set_size(width, height);
}

#[no_mangle]
pub extern "C" fn Photino_SetMinSize(_instance: *mut c_void, width: c_int, height: c_int) {
    host::set_min_size(width, height);
}

#[no_mangle]
pub extern "C" fn Photino_SetMaxSize(_instance: *mut c_void, width: c_int, height: c_int) {
    host::set_max_size(width, height);
}

#[no_mangle]
pub extern "C" fn Photino_SetPosition(_instance: *mut c_void, x: c_int, y: c_int) {
    host::set_position(x, y);
}

#[no_mangle]
pub extern "C" fn Photino_GetSize(_instance: *mut c_void, width: *mut c_int, height: *mut c_int) {
    let (w, h) = host::get_size();
    if !width.is_null() {
        unsafe { *width = w };
    }
    if !height.is_null() {
        unsafe { *height = h };
    }
}

#[no_mangle]
pub extern "C" fn Photino_GetPosition(_instance: *mut c_void, x: *mut c_int, y: *mut c_int) {
    let (px, py) = host::get_position();
    if !x.is_null() {
        unsafe { *x = px };
    }
    if !y.is_null() {
        unsafe { *y = py };
    }
}

#[no_mangle]
pub extern "C" fn Photino_SetResizable(_instance: *mut c_void, resizable: u8) {
    host::set_resizable(resizable != 0);
}

#[no_mangle]
pub extern "C" fn Photino_GetResizable(_instance: *mut c_void, resizable: *mut u8) {
    if !resizable.is_null() {
        unsafe { *resizable = u8::from(host::get_resizable()) };
    }
}

#[no_mangle]
pub extern "C" fn Photino_SetTopmost(_instance: *mut c_void, topmost: u8) {
    host::set_topmost(topmost != 0);
}

#[no_mangle]
pub extern "C" fn Photino_GetTopmost(_instance: *mut c_void, topmost: *mut u8) {
    if !topmost.is_null() {
        unsafe { *topmost = u8::from(host::get_topmost()) };
    }
}

#[no_mangle]
pub extern "C" fn Photino_SetMinimized(_instance: *mut c_void, minimized: u8) {
    host::set_minimized(minimized != 0);
}

#[no_mangle]
pub extern "C" fn Photino_GetMinimized(_instance: *mut c_void, minimized: *mut u8) {
    if !minimized.is_null() {
        unsafe { *minimized = u8::from(host::get_minimized()) };
    }
}

#[no_mangle]
pub extern "C" fn Photino_SetMaximized(_instance: *mut c_void, maximized: u8) {
    host::set_maximized(maximized != 0);
}

#[no_mangle]
pub extern "C" fn Photino_GetMaximized(_instance: *mut c_void, maximized: *mut u8) {
    if !maximized.is_null() {
        unsafe { *maximized = u8::from(host::get_maximized()) };
    }
}

#[no_mangle]
pub extern "C" fn Photino_SetFullScreen(_instance: *mut c_void, full_screen: u8) {
    host::set_full_screen(full_screen != 0);
}

#[no_mangle]
pub extern "C" fn Photino_GetFullScreen(_instance: *mut c_void, full_screen: *mut u8) {
    if !full_screen.is_null() {
        unsafe { *full_screen = 0 };
    }
}

#[no_mangle]
pub extern "C" fn Photino_SetTransparentEnabled(_instance: *mut c_void, enabled: u8) {
    host::set_transparent(enabled != 0);
}

#[no_mangle]
pub extern "C" fn Photino_GetTransparentEnabled(_instance: *mut c_void, enabled: *mut u8) {
    if !enabled.is_null() {
        unsafe { *enabled = 0 };
    }
}

#[no_mangle]
pub extern "C" fn Photino_SetContextMenuEnabled(_instance: *mut c_void, _enabled: u8) {}

#[no_mangle]
pub extern "C" fn Photino_GetContextMenuEnabled(_instance: *mut c_void, enabled: *mut u8) {
    if !enabled.is_null() {
        unsafe { *enabled = 1 };
    }
}

#[no_mangle]
pub extern "C" fn Photino_SetDevToolsEnabled(_instance: *mut c_void, _enabled: u8) {}

#[no_mangle]
pub extern "C" fn Photino_GetDevToolsEnabled(_instance: *mut c_void, enabled: *mut u8) {
    if !enabled.is_null() {
        unsafe { *enabled = 1 };
    }
}

#[no_mangle]
pub extern "C" fn Photino_SetIconFile(_instance: *mut c_void, filename: *const c_char) {
    host::set_icon_file(&string(filename));
}

#[no_mangle]
pub extern "C" fn Photino_SetZoom(_instance: *mut c_void, zoom: c_int) {
    host::set_zoom(zoom);
}

#[no_mangle]
pub extern "C" fn Photino_GetZoom(_instance: *mut c_void, zoom: *mut c_int) {
    if !zoom.is_null() {
        unsafe { *zoom = host::get_zoom() };
    }
}

#[no_mangle]
pub extern "C" fn Photino_GetScreenDpi(_instance: *mut c_void) -> u32 {
    host::screen_dpi()
}

#[no_mangle]
pub extern "C" fn Photino_GetAllMonitors(_instance: *mut c_void, callback: Option<MonitorsCallback>) {
    if let Some(callback) = callback {
        host::monitors(callback);
    }
}

#[no_mangle]
pub extern "C" fn Photino_StartDragging(_instance: *mut c_void) {
    host::start_dragging();
}

#[no_mangle]
pub extern "C" fn Photino_StartResizing(_instance: *mut c_void, _hit_test: c_int) {}

#[no_mangle]
pub extern "C" fn Photino_ShowNotification(_instance: *mut c_void, _title: *const c_char, _body: *const c_char) {}

#[no_mangle]
pub extern "C" fn Photino_GetNotificationsEnabled(_instance: *mut c_void, enabled: *mut u8) {
    if !enabled.is_null() {
        unsafe { *enabled = 0 };
    }
}

#[no_mangle]
pub extern "C" fn Photino_AddCustomSchemeName(_instance: *mut c_void, _scheme: *const c_char) {}

#[no_mangle]
pub extern "C" fn Photino_SetClosingCallback(_instance: *mut c_void, _callback: Option<ClosingCallback>) {}

#[no_mangle]
pub extern "C" fn Photino_SetFocusInCallback(_instance: *mut c_void, _callback: Option<VoidCallback>) {}

#[no_mangle]
pub extern "C" fn Photino_SetFocusOutCallback(_instance: *mut c_void, _callback: Option<VoidCallback>) {}

#[no_mangle]
pub extern "C" fn Photino_SetMovedCallback(_instance: *mut c_void, _callback: Option<SizeCallback>) {}

#[no_mangle]
pub extern "C" fn Photino_SetResizedCallback(_instance: *mut c_void, _callback: Option<SizeCallback>) {}

#[no_mangle]
pub extern "C" fn Photino_SetMaximizedCallback(_instance: *mut c_void, _callback: Option<VoidCallback>) {}

#[no_mangle]
pub extern "C" fn Photino_SetRestoredCallback(_instance: *mut c_void, _callback: Option<VoidCallback>) {}

#[no_mangle]
pub extern "C" fn Photino_SetMinimizedCallback(_instance: *mut c_void, _callback: Option<VoidCallback>) {}

#[no_mangle]
pub extern "C" fn Photino_SetWebMessageReceivedCallback(_instance: *mut c_void, _callback: Option<MessageCallback>) {}

#[no_mangle]
pub extern "C" fn Photino_ShowOpenFile(
    _instance: *mut c_void,
    _title: *const c_char,
    _default_path: *const c_char,
    _multi_select: u8,
    _filters: *mut *const c_char,
    _filter_count: c_int,
    result_count: *mut c_int,
) -> *mut *mut c_char {
    if !result_count.is_null() {
        unsafe { *result_count = 0 };
    }

    ptr::null_mut()
}

#[no_mangle]
pub extern "C" fn Photino_ShowOpenFolder(
    _instance: *mut c_void,
    _title: *const c_char,
    _default_path: *const c_char,
    _multi_select: u8,
    result_count: *mut c_int,
) -> *mut *mut c_char {
    if !result_count.is_null() {
        unsafe { *result_count = 0 };
    }

    ptr::null_mut()
}

#[no_mangle]
pub extern "C" fn Photino_ShowSaveFile(
    _instance: *mut c_void,
    _title: *const c_char,
    _default_path: *const c_char,
    _filters: *mut *const c_char,
    _filter_count: c_int,
) -> *mut c_char {
    ptr::null_mut()
}

#[no_mangle]
pub extern "C" fn Photino_ShowMessage(
    _instance: *mut c_void,
    _title: *const c_char,
    _text: *const c_char,
    _buttons: c_int,
    _icon: c_int,
) -> c_int {
    0
}
