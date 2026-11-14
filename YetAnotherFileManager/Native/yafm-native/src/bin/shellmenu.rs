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
    use windows::Win32::Foundation::{HWND, LPARAM, RECT, WPARAM};
    use windows::Win32::Graphics::Gdi::{
        CreateCompatibleDC, CreateDIBSection, DeleteDC, DeleteObject, GetDC, GetDIBits, GetObjectW,
        ReleaseDC, SelectObject, BITMAP, BITMAPINFO, BITMAPINFOHEADER, BI_RGB, DIB_RGB_COLORS, HBITMAP,
        HGDIOBJ,
    };
    use windows::Win32::System::Com::{
        CoInitializeEx, CoTaskMemFree, CoUninitialize, COINIT_APARTMENTTHREADED,
    };
    use windows::Win32::UI::Controls::{DRAWITEMSTRUCT, ODA_DRAWENTIRE, ODT_MENU};
    use windows::Win32::UI::Shell::Common::ITEMIDLIST;
    use windows::Win32::UI::Shell::{
        IContextMenu, IContextMenu2, IContextMenu3, ILFindLastID, IShellFolder, SHBindToParent, SHParseDisplayName,
        CMF_EXPLORE, CMF_NORMAL, CMINVOKECOMMANDINFO, CMINVOKECOMMANDINFOEX, GCS_VERBW,
    };
    use windows::Win32::UI::WindowsAndMessaging::{
        CreatePopupMenu, DestroyMenu, GetMenuItemCount, GetMenuItemInfoW, MENUITEMINFOW,
        MENU_ITEM_MASK, MFS_CHECKED, MFS_DEFAULT, MFS_DISABLED, MFT_SEPARATOR, MIIM_BITMAP, MIIM_FTYPE, MIIM_ID,
        MIIM_STATE, MIIM_STRING, MIIM_SUBMENU, SW_SHOWNORMAL, WM_DRAWITEM,
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
        #[serde(skip_serializing_if = "Option::is_none")]
        group_icon: Option<String>,
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
                // A cold read is sometimes thinner: handlers that start a packaged COM server have
                // not finished when the first menu is built. The richer of two reads is kept.
                let mut best: Option<Vec<ShellVerb>> = None;

                for _ in 0..2 {
                    let Some(session) = open(&args[3..]) else {
                        continue;
                    };

                    let mut verbs = Vec::new();
                    walk(&session, session.menu, &mut verbs, &[], &None, 0);
                    dedupe(&mut verbs);

                    let better = best.as_ref().map_or(true, |current| score(&verbs) > score(current));
                    if better {
                        best = Some(verbs);
                    }
                }

                // A process that starts cold can see an incomplete menu even on the second build;
                // one more try after a short pause is enough for the shell to finish.
                if best.as_ref().map_or(true, |verbs| verbs.len() < 25) {
                    std::thread::sleep(std::time::Duration::from_millis(400));

                    if let Some(session) = open(&args[3..]) {
                        let mut verbs = Vec::new();
                        walk(&session, session.menu, &mut verbs, &[], &None, 0);
                        dedupe(&mut verbs);

                        if best.as_ref().map_or(true, |current| score(&verbs) > score(current)) {
                            best = Some(verbs);
                        }
                    }
                }

                let Some(verbs) = best else {
                    return 1;
                };

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

        // The root popup is deliberately not sent WM_INITMENUPOPUP: handlers that answer it
        // sometimes leave the first read of a session incomplete, and the entries it adds are the
        // ones Explorer only shows once the menu is really open.

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
        group_icon: &Option<String>,
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

            let mut icon = menu_icon(info.hbmpItem);

            // A handler may paint its entry instead of handing over a bitmap; this process owns
            // the menu, so it can ask for that painting without the shell being involved.
            if icon.is_none() {
                icon = draw_icon(session, menu, info.wID);
            }

            if !info.hSubMenu.is_invalid() {
                // A submenu is not announced here: handlers that answer the notification add
                // their entries twice on some reads and not at all on others, which made the
                // menu differ from one open to the next.
                let mut next = path.to_vec();
                next.push(label);
                let next_icon = icon.clone().or_else(|| group_icon.clone());
                walk(session, info.hSubMenu, verbs, &next, &next_icon, depth + 1);
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
                icon,
                enabled: info.fState.0 & MFS_DISABLED.0 == 0,
                checked: info.fState.0 & MFS_CHECKED.0 != 0,
                group: path.last().cloned(),
                depth,
                group_path: path.to_vec(),
                group_icon: group_icon.clone(),
            });
        }
    }

    unsafe fn draw_icon(
        session: &Session,
        menu: windows::Win32::UI::WindowsAndMessaging::HMENU,
        id: u32,
    ) -> Option<String> {
        let size = 20i32;

        let mut info = BITMAPINFO::default();
        info.bmiHeader.biSize = std::mem::size_of::<BITMAPINFOHEADER>() as u32;
        info.bmiHeader.biWidth = size;
        info.bmiHeader.biHeight = -size;
        info.bmiHeader.biPlanes = 1;
        info.bmiHeader.biBitCount = 32;
        info.bmiHeader.biCompression = BI_RGB.0;

        let screen = GetDC(None);
        let dc = CreateCompatibleDC(Some(screen));

        let mut bits: *mut std::ffi::c_void = null_mut();
        let Ok(bitmap) = CreateDIBSection(Some(dc), &info, DIB_RGB_COLORS, &mut bits, None, 0) else {
            let _ = DeleteDC(dc);
            ReleaseDC(None, screen);
            return None;
        };

        if bits.is_null() {
            let _ = DeleteObject(HGDIOBJ(bitmap.0));
            let _ = DeleteDC(dc);
            ReleaseDC(None, screen);
            return None;
        }

        let pixels = std::slice::from_raw_parts_mut(bits as *mut u8, (size * size * 4) as usize);
        pixels.fill(0);

        let old = SelectObject(dc, HGDIOBJ(bitmap.0));

        let mut draw = DRAWITEMSTRUCT::default();
        draw.CtlType = ODT_MENU;
        draw.itemID = id;
        draw.itemAction = ODA_DRAWENTIRE;
        draw.hwndItem = HWND(menu.0);
        draw.hDC = dc;
        draw.rcItem = RECT { left: 0, top: 0, right: size, bottom: size };

        let lparam = LPARAM(&mut draw as *mut _ as isize);
        let handled = if let Ok(context3) = session.context.cast::<IContextMenu3>() {
            context3.HandleMenuMsg2(WM_DRAWITEM, WPARAM(id as usize), lparam, None).is_ok()
        } else if let Ok(context2) = session.context.cast::<IContextMenu2>() {
            context2.HandleMenuMsg(WM_DRAWITEM, WPARAM(id as usize), lparam).is_ok()
        } else {
            false
        };

        SelectObject(dc, old);
        let _ = DeleteObject(HGDIOBJ(bitmap.0));
        let _ = DeleteDC(dc);
        ReleaseDC(None, screen);

        if !handled {
            return None;
        }

        // GDI hands back BGRA. A handler that painted without alpha leaves it at zero, so an
        // otherwise empty image would vanish; opaque black is treated as "nothing drawn".
        let mut has_alpha = false;
        let mut has_content = false;

        for pixel in pixels.chunks_exact_mut(4) {
            pixel.swap(0, 2);
            has_alpha |= pixel[3] != 0;
            has_content |= pixel[0] != 0 || pixel[1] != 0 || pixel[2] != 0;
        }

        if !has_content {
            return None;
        }

        if !has_alpha {
            for pixel in pixels.chunks_exact_mut(4) {
                pixel[3] = 255;
            }
        }

        png_data_url(size as u32, size as u32, pixels)
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
                // The app offers the Windows share sheet itself, so the shell's own copy would
                // only be a duplicate entry under a different name.
                | Some("Windows.ModernShare")
        )
    }

    /// One command can be registered twice, as a legacy verb and as a packaged one. The copies
    /// differ only by an accelerator suffix, so the first is kept and the later icon fills it in.
    /// How complete a read is: entries first, then entries with an icon.
    fn score(verbs: &[ShellVerb]) -> usize {
        verbs.len() * 3
            + verbs.iter().filter(|verb| verb.icon.is_some()).count()
            + verbs.iter().filter(|verb| verb.group_icon.is_some()).count()
    }

    fn dedupe(verbs: &mut Vec<ShellVerb>) {
        let mut kept: Vec<ShellVerb> = Vec::with_capacity(verbs.len());

        for verb in verbs.drain(..) {
            let key = label_key(&verb.label);

            if let Some(existing) = kept.iter_mut().find(|candidate| {
                candidate.group_path == verb.group_path && label_key(&candidate.label) == key
            }) {
                if existing.icon.is_none() {
                    existing.icon = verb.icon;
                }

                continue;
            }

            kept.push(verb);
        }

        *verbs = kept;
    }

    /// The label without the accelerator marker the shell appends, which can be " (E)" or "(E)".
    fn label_key(label: &str) -> String {
        let trimmed = label.trim_end();

        if trimmed.ends_with(')') {
            if let Some(open) = trimmed.rfind('(') {
                let suffix = &trimmed[open + 1..trimmed.len() - 1];

                if suffix.len() == 1 && suffix.chars().all(|character| character.is_ascii_alphanumeric()) {
                    return trimmed[..open].trim_end().to_string();
                }
            }
        }

        trimmed.to_string()
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
