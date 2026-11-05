//! Reads and invokes the Windows shell context menu in a native process.
//!
//! The app's managed helper blocks managed shell extensions: loading their old CLR through
//! `mscoree.dll` inside a .NET 10 process corrupts it during `QueryContextMenu`. A native process
//! lets those handlers load their own runtime; if one crashes, only this helper dies.

fn main() {
    #[cfg(windows)]
    windows_impl::run();

    #[cfg(not(windows))]
    {
        eprintln!("yafm-shellmenu is only available on Windows");
        std::process::exit(1);
    }
}

#[cfg(windows)]
mod windows_impl {
    use serde::Serialize;
    use std::ffi::{c_void, CString};
    use std::os::windows::ffi::OsStrExt;
    use std::path::Path;
    use std::ptr::null_mut;
    use base64::Engine as _;
    use windows::core::{Interface, PCSTR, PCWSTR, PSTR, PWSTR};
    use windows::Win32::Foundation::{HWND, LPARAM, WPARAM};
    use windows::Win32::Graphics::Gdi::{
        CreateCompatibleDC, DeleteDC, GetDC, GetDIBits, GetObjectW, ReleaseDC, SelectObject, BITMAP,
        BITMAPINFO, BITMAPINFOHEADER, BI_RGB, DIB_RGB_COLORS, HBITMAP, HGDIOBJ,
    };
    use windows::Win32::System::Com::{
        CoInitializeEx, CoTaskMemFree, CoUninitialize, COINIT_APARTMENTTHREADED,
    };
    use windows::Win32::UI::Shell::Common::ITEMIDLIST;
    use windows::Win32::UI::Shell::{
        IContextMenu, IContextMenu2, IContextMenu3, ILFindLastID, IShellFolder, SHBindToParent, SHParseDisplayName,
        CMF_EXPLORE, CMF_NORMAL, CMINVOKECOMMANDINFO, CMINVOKECOMMANDINFOEX, GCS_VERBW,
    };
    use windows::Win32::UI::WindowsAndMessaging::{
        CreatePopupMenu, DestroyMenu, GetMenuItemCount, GetMenuItemInfoW, MENUITEMINFOW,
        MENU_ITEM_MASK, MFS_CHECKED, MFS_DEFAULT, MFS_DISABLED, MFT_SEPARATOR, MIIM_BITMAP, MIIM_FTYPE, MIIM_ID,
        MIIM_STATE, MIIM_STRING, MIIM_SUBMENU, SW_SHOWNORMAL, WM_INITMENUPOPUP,
    };

    /// The value the Windows headers call <c>CMIC_MASK_UNICODE</c>; the crate does not export it.
    const CMIC_MASK_UNICODE: u32 = 0x00004000;

    #[derive(Serialize)]
    #[serde(rename_all = "camelCase")]
    struct ShellVerb {
        label: String,
        #[serde(skip_serializing_if = "Option::is_none")]
        verb: Option<String>,
        offset: i32,
        #[serde(skip_serializing_if = "Option::is_none")]
        icon: Option<String>,
        enabled: bool,
        checked: bool,
        #[serde(skip_serializing_if = "Option::is_none")]
        group: Option<String>,
        depth: i32,
        group_path: Vec<String>,
    }

    pub fn run() {
        let args: Vec<String> = std::env::args().collect();
        if args.len() < 2 {
            std::process::exit(2);
        }

        unsafe {
            if CoInitializeEx(None, COINIT_APARTMENTTHREADED).is_err() {
                std::process::exit(3);
            }

            let code = execute(&args);
            CoUninitialize();
            std::process::exit(code);
        }
    }

    unsafe fn execute(args: &[String]) -> i32 {
        match args[1].as_str() {
            "--read" if args.len() >= 4 => {
                let Some(session) = open(&args[3..]) else {
                    return 1;
                };

                let mut verbs = Vec::new();
                walk(&session, session.menu, &mut verbs, &[], 0);

                let Ok(json) = serde_json::to_string(&verbs) else {
                    return 1;
                };

                if std::fs::write(&args[2], json).is_ok() {
                    0
                } else {
                    1
                }
            }

            "--invoke" if args.len() >= 5 => {
                let offset: i32 = args[2].parse().unwrap_or(0);
                let Some(session) = open(&args[4..]) else {
                    return 1;
                };

                if invoke(&session.context, offset, &args[3]) {
                    0
                } else {
                    1
                }
            }

            _ => 2,
        }
    }

    struct Session {
        pidls: Vec<*mut ITEMIDLIST>,
        context: IContextMenu,
        menu: windows::Win32::UI::WindowsAndMessaging::HMENU,
    }

    impl Drop for Session {
        fn drop(&mut self) {
            unsafe {
                for pidl in &self.pidls {
                    CoTaskMemFree(Some(*pidl as *const c_void));
                }

                let _ = DestroyMenu(self.menu);
            }
        }
    }

    unsafe fn open(paths: &[String]) -> Option<Session> {
        let mut pidls = Vec::new();

        for path in paths {
            let wide: Vec<u16> = Path::new(path)
                .as_os_str()
                .encode_wide()
                .chain(Some(0))
                .collect();

            let mut pidl: *mut ITEMIDLIST = null_mut();
            let mut attributes = 0u32;

            match SHParseDisplayName(PCWSTR(wide.as_ptr()), None, &mut pidl, 0, Some(&mut attributes)) {
                Ok(()) if !pidl.is_null() => pidls.push(pidl),
                Ok(()) => eprintln!("empty pidl: {path}"),
                Err(error) => eprintln!("SHParseDisplayName({path}) failed: {error:?}"),
            }
        }

        if pidls.is_empty() {
            return None;
        }

        let mut child: *mut ITEMIDLIST = null_mut();

        let folder: IShellFolder = match SHBindToParent(pidls[0], Some(&mut child)) {
            Ok(value) => value,
            Err(error) => {
                eprintln!("SHBindToParent failed: {error:?}");
                for pidl in &pidls {
                    CoTaskMemFree(Some(*pidl as *const c_void));
                }

                return None;
            }
        };

        let children: Vec<*const ITEMIDLIST> = pidls.iter().map(|pidl| ILFindLastID(*pidl) as *const _).collect();

        let context: IContextMenu = match folder.GetUIObjectOf(HWND(null_mut()), &children, None) {
            Ok(value) => value,
            Err(error) => {
                eprintln!("GetUIObjectOf failed: {error:?}");
                for pidl in &pidls {
                    CoTaskMemFree(Some(*pidl as *const c_void));
                }

                return None;
            }
        };

        let menu = match CreatePopupMenu() {
            Ok(menu) => menu,
            Err(_) => return None,
        };

        if context
            .QueryContextMenu(menu, 0, 1, 0x7FFF, CMF_NORMAL | CMF_EXPLORE)
            .is_err()
        {
            eprintln!("QueryContextMenu failed");
            let _ = DestroyMenu(menu);
            return None;
        }

        Some(Session {
            pidls,
            context,
            menu,
        })
    }

    unsafe fn walk(
        session: &Session,
        menu: windows::Win32::UI::WindowsAndMessaging::HMENU,
        verbs: &mut Vec<ShellVerb>,
        path: &[String],
        depth: i32,
    ) {
        if depth > 3 {
            return;
        }

        let count = GetMenuItemCount(Some(menu));

        for index in 0..count {
            let mut info = MENUITEMINFOW::default();
            info.cbSize = std::mem::size_of::<MENUITEMINFOW>() as u32;
            info.fMask = MENU_ITEM_MASK(
                MIIM_ID.0 | MIIM_STATE.0 | MIIM_SUBMENU.0 | MIIM_FTYPE.0 | MIIM_STRING.0 | MIIM_BITMAP.0,
            );

            let mut label_buffer = [0u16; 512];
            info.dwTypeData = PWSTR(label_buffer.as_mut_ptr());
            info.cch = label_buffer.len() as u32;

            if GetMenuItemInfoW(menu, index as u32, true, &mut info).is_err() {
                continue;
            }

            if info.fType.0 & MFT_SEPARATOR.0 != 0 || info.fState.0 & MFS_DEFAULT.0 != 0 {
                continue;
            }

            let label = clean(&utf16_to_string(
                &label_buffer[..(info.cch as usize).min(label_buffer.len())],
            ));
            if label.is_empty() {
                continue;
            }

            if !info.hSubMenu.is_invalid() {
                if let Ok(context3) = session.context.cast::<IContextMenu3>() {
                    let _ = context3.HandleMenuMsg(WM_INITMENUPOPUP, WPARAM(0), LPARAM(index as isize));
                } else if let Ok(context2) = session.context.cast::<IContextMenu2>() {
                    let _ = context2.HandleMenuMsg(WM_INITMENUPOPUP, WPARAM(0), LPARAM(index as isize));
                }

                let mut next = path.to_vec();
                next.push(label);
                walk(session, info.hSubMenu, verbs, &next, depth + 1);
                continue;
            }

            let offset = info.wID as i32 - 1;
            if offset < 0 {
                continue;
            }

            let verb = command_verb(&session.context, offset);
            if is_basic_verb(verb.as_deref()) {
                continue;
            }

            verbs.push(ShellVerb {
                label,
                verb,
                offset,
                icon: menu_icon(info.hbmpItem),
                enabled: info.fState.0 & MFS_DISABLED.0 == 0,
                checked: info.fState.0 & MFS_CHECKED.0 != 0,
                group: path.last().cloned(),
                depth,
                group_path: path.to_vec(),
            });
        }
    }

    fn menu_icon(bitmap: HBITMAP) -> Option<String> {
        // Small handles are the HBMMENU_* sentinels, not real bitmaps.
        if (bitmap.0 as isize) <= 16 {
            return None;
        }

        unsafe { bitmap_to_png(bitmap) }
    }

    unsafe fn bitmap_to_png(bitmap: HBITMAP) -> Option<String> {
        let mut source = BITMAP::default();
        if GetObjectW(
            HGDIOBJ(bitmap.0),
            std::mem::size_of::<BITMAP>() as i32,
            Some(&mut source as *mut _ as *mut c_void),
        ) == 0
        {
            return None;
        }

        let width = source.bmWidth.max(0) as u32;
        let height = source.bmHeight.unsigned_abs();
        if width == 0 || height == 0 || width > 512 || height > 512 {
            return None;
        }

        let mut info = BITMAPINFO::default();
        info.bmiHeader.biSize = std::mem::size_of::<BITMAPINFOHEADER>() as u32;
        info.bmiHeader.biWidth = width as i32;
        info.bmiHeader.biHeight = -(height as i32);
        info.bmiHeader.biPlanes = 1;
        info.bmiHeader.biBitCount = 32;
        info.bmiHeader.biCompression = BI_RGB.0;

        let mut pixels = vec![0u8; (width * height * 4) as usize];
        let screen = GetDC(None);
        let dc = CreateCompatibleDC(Some(screen));
        let old = SelectObject(dc, HGDIOBJ(bitmap.0));

        let lines = GetDIBits(
            dc,
            bitmap,
            0,
            height,
            Some(pixels.as_mut_ptr() as *mut c_void),
            &mut info,
            DIB_RGB_COLORS,
        );

        SelectObject(dc, old);
        let _ = DeleteDC(dc);
        ReleaseDC(None, screen);

        if lines == 0 {
            return None;
        }

        // GDI hands back BGRA; the alpha channel is zero on older icon bitmaps.
        let mut has_alpha = false;
        for pixel in pixels.chunks_exact_mut(4) {
            pixel.swap(0, 2);
            has_alpha |= pixel[3] != 0;
        }

        if !has_alpha {
            for pixel in pixels.chunks_exact_mut(4) {
                pixel[3] = 255;
            }
        }

        png_data_url(width, height, &pixels)
    }

    fn png_data_url(width: u32, height: u32, rgba: &[u8]) -> Option<String> {
        let mut output = Vec::new();

        {
            let mut encoder = png::Encoder::new(&mut output, width, height);
            encoder.set_color(png::ColorType::Rgba);
            encoder.set_depth(png::BitDepth::Eight);
            let mut writer = encoder.write_header().ok()?;
            writer.write_image_data(rgba).ok()?;
        }

        Some(format!(
            "data:image/png;base64,{}",
            base64::engine::general_purpose::STANDARD.encode(output)
        ))
    }

    unsafe fn command_verb(context: &IContextMenu, offset: i32) -> Option<String> {        let mut buffer = [0u16; 256];
        let result = context.GetCommandString(
            offset as usize,
            GCS_VERBW,
            None,
            PSTR(buffer.as_mut_ptr() as *mut u8),
            buffer.len() as u32,
        );

        if result.is_err() {
            return None;
        }

        let verb = utf16_to_string(&buffer);
        if verb.is_empty() {
            None
        } else {
            Some(verb)
        }
    }

    unsafe fn invoke(context: &IContextMenu, offset: i32, verb: &str) -> bool {
        let mut info = CMINVOKECOMMANDINFOEX::default();
        info.cbSize = std::mem::size_of::<CMINVOKECOMMANDINFOEX>() as u32;
        info.fMask = CMIC_MASK_UNICODE;
        info.nShow = SW_SHOWNORMAL.0;

        let ansi;
        let wide_verb;

        if verb.is_empty() {
            info.lpVerb = PCSTR(offset as *const u8);
            info.lpVerbW = PCWSTR(offset as *const u16);
        } else {
            ansi = CString::new(verb).unwrap_or_default();
            wide_verb = wide_string(verb);
            info.lpVerb = PCSTR(ansi.as_ptr() as *const u8);
            info.lpVerbW = PCWSTR(wide_verb.as_ptr());
        }

        context
            .InvokeCommand(&info as *const _ as *const CMINVOKECOMMANDINFO)
            .is_ok()
    }

    fn is_basic_verb(verb: Option<&str>) -> bool {
        matches!(
            verb,
            Some("open")
                | Some("openas")
                | Some("copy")
                | Some("cut")
                | Some("paste")
                | Some("delete")
                | Some("rename")
                | Some("properties")
                | Some("copyaspath")
        )
    }

    fn clean(label: &str) -> String {
        label
            .replace("&&", "\0")
            .replace('&', "")
            .replace('\0', "&")
            .trim()
            .to_string()
    }

    fn utf16_to_string(value: &[u16]) -> String {
        let end = value.iter().position(|character| *character == 0).unwrap_or(value.len());
        String::from_utf16_lossy(&value[..end])
    }

    fn wide_string(value: &str) -> Vec<u16> {
        value.encode_utf16().chain(Some(0)).collect()
    }
}
