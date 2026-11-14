//! The Windows 11 File Explorer command.
//!
//! File Explorer shows a command registered through a package and implemented with
//! `IExplorerCommand`, rather than the legacy `IContextMenu` handler. This DLL is that command: the
//! package manifest registers both classes below and the item types they appear on. The app writes
//! the manifest and registers the package from its settings page; see `ExplorerMenu` for that side.

#![cfg(windows)]
#![allow(non_snake_case)]

use std::ffi::{c_void, OsString};
use std::os::windows::ffi::OsStringExt;
use std::path::PathBuf;

use windows::core::{
    implement, Error, GUID, Interface, PCWSTR, PWSTR, Ref, Result, BOOL, HRESULT, HSTRING, IUnknown,
};
use windows::Win32::Foundation::{CLASS_E_CLASSNOTAVAILABLE, E_FAIL, E_POINTER, S_FALSE, S_OK};
use windows::Win32::System::Com::{CoTaskMemFree, IBindCtx, IClassFactory, IClassFactory_Impl};
use windows::Win32::System::LibraryLoader::{
    GetModuleFileNameW, GetModuleHandleExW, GET_MODULE_HANDLE_EX_FLAG_FROM_ADDRESS,
    GET_MODULE_HANDLE_EX_FLAG_UNCHANGED_REFCOUNT,
};
use windows::Win32::System::Registry::{RegGetValueW, HKEY_CURRENT_USER, RRF_RT_REG_SZ};
use windows::Win32::UI::Shell::{
    IEnumExplorerCommand, IExplorerCommand, IExplorerCommand_Impl, IShellItemArray, SHStrDupW,
    ShellExecuteW, SIGDN_FILESYSPATH,
};
use windows::Win32::UI::WindowsAndMessaging::SW_SHOWNORMAL;

/// The command on files and folders; the same class serves both item types.
const CLSID_OPEN: GUID = GUID::from_u128(0x5e1b7c2a_9a64_4c0b_8f3e_2d7a1b6c4e90);

/// The command on a folder's background, which opens that folder.
const CLSID_BACKGROUND: GUID = GUID::from_u128(0xa3d9f0c7_2b58_4e61_9c7a_8b1e5d3f6a24);

/// Where the app records the executable the command should start.
const APP_KEY: &str = "Software\\YetAnotherFileManager";
const APP_VALUE: &str = "Executable";
const APP_FILE: &str = "YetAnotherFileManager.exe";

#[implement(IExplorerCommand)]
struct OpenCommand;

#[implement(IExplorerCommand)]
struct BackgroundCommand;

impl IExplorerCommand_Impl for OpenCommand_Impl {
    fn GetTitle(&self, _items: Ref<IShellItemArray>) -> Result<PWSTR> {
        title("Open with Yet Another File Manager")
    }

    fn GetIcon(&self, _items: Ref<IShellItemArray>) -> Result<PWSTR> {
        icon()
    }

    fn GetToolTip(&self, _items: Ref<IShellItemArray>) -> Result<PWSTR> {
        title("Open the selection in Yet Another File Manager")
    }

    fn GetCanonicalName(&self) -> Result<GUID> {
        Ok(CLSID_OPEN)
    }

    fn GetState(&self, _items: Ref<IShellItemArray>, _slow: BOOL) -> Result<u32> {
        Ok(0)
    }

    fn Invoke(&self, items: Ref<IShellItemArray>, _bind: Ref<IBindCtx>) -> Result<()> {
        launch(&selected(items))
    }

    fn GetFlags(&self) -> Result<u32> {
        Ok(0)
    }

    fn EnumSubCommands(&self) -> Result<IEnumExplorerCommand> {
        Err(E_FAIL.into())
    }
}

impl IExplorerCommand_Impl for BackgroundCommand_Impl {
    fn GetTitle(&self, _items: Ref<IShellItemArray>) -> Result<PWSTR> {
        title("Open in Yet Another File Manager")
    }

    fn GetIcon(&self, _items: Ref<IShellItemArray>) -> Result<PWSTR> {
        icon()
    }

    fn GetToolTip(&self, _items: Ref<IShellItemArray>) -> Result<PWSTR> {
        title("Open this folder in Yet Another File Manager")
    }

    fn GetCanonicalName(&self) -> Result<GUID> {
        Ok(CLSID_BACKGROUND)
    }

    fn GetState(&self, _items: Ref<IShellItemArray>, _slow: BOOL) -> Result<u32> {
        Ok(0)
    }

    fn Invoke(&self, items: Ref<IShellItemArray>, _bind: Ref<IBindCtx>) -> Result<()> {
        launch(&selected(items))
    }

    fn GetFlags(&self) -> Result<u32> {
        Ok(0)
    }

    fn EnumSubCommands(&self) -> Result<IEnumExplorerCommand> {
        Err(E_FAIL.into())
    }
}

#[implement(IClassFactory)]
struct Factory {
    background: bool,
}

impl IClassFactory_Impl for Factory_Impl {
    fn CreateInstance(
        &self,
        outer: Ref<IUnknown>,
        riid: *const GUID,
        ppv: *mut *mut c_void,
    ) -> Result<()> {
        unsafe {
            if ppv.is_null() {
                return Err(E_POINTER.into());
            }

            if !outer.is_null() {
                return Err(windows::Win32::Foundation::CLASS_E_NOAGGREGATION.into());
            }

            let command: IExplorerCommand = if self.background {
                BackgroundCommand.into()
            } else {
                OpenCommand.into()
            };

            query(&command, riid, ppv)
        }
    }

    fn LockServer(&self, _lock: BOOL) -> Result<()> {
        Ok(())
    }
}

/// Hands a pointer for the requested interface to the caller; COM adds the reference itself.
unsafe fn query<T: Interface>(value: &T, riid: *const GUID, ppv: *mut *mut c_void) -> Result<()> {
    let unknown: IUnknown = value.cast()?;
    (unknown.vtable().QueryInterface)(unknown.as_raw(), riid, ppv).ok()
}

/// The shell entry point: one factory per class the package manifest declares.
#[no_mangle]
unsafe extern "system" fn DllGetClassObject(
    rclsid: *const GUID,
    riid: *const GUID,
    ppv: *mut *mut c_void,
) -> HRESULT {
    let created = (|| -> Result<()> {
        let factory: IClassFactory = if *rclsid == CLSID_OPEN {
            Factory { background: false }.into()
        } else if *rclsid == CLSID_BACKGROUND {
            Factory { background: true }.into()
        } else {
            return Err(CLASS_E_CLASSNOTAVAILABLE.into());
        };

        query(&factory, riid, ppv)
    })();

    match created {
        Ok(()) => S_OK,
        Err(error) => error.code(),
    }
}

#[no_mangle]
extern "system" fn DllCanUnloadNow() -> HRESULT {
    S_FALSE
}

/// The paths the shell hands to `Invoke`; a selection can hold more than one item.
fn selected(items: Ref<IShellItemArray>) -> Vec<PathBuf> {
    let Ok(items) = items.ok() else {
        return Vec::new();
    };

    let count = unsafe { items.GetCount() }.unwrap_or(0);
    let mut paths = Vec::with_capacity(count as usize);

    for index in 0..count {
        let Ok(item) = (unsafe { items.GetItemAt(index) }) else {
            continue;
        };

        let Ok(name) = (unsafe { item.GetDisplayName(SIGDN_FILESYSPATH) }) else {
            continue;
        };

        let text = (unsafe { name.to_string() }).unwrap_or_default();
        unsafe { CoTaskMemFree(Some(name.0 as *const c_void)) };

        if !text.is_empty() {
            paths.push(PathBuf::from(text));
        }
    }

    paths
}

/// Starts the app with the selection on its command line. The shell only calls this from the
/// surrogate process, so the work here is deliberately short.
fn launch(paths: &[PathBuf]) -> Result<()> {
    if paths.is_empty() {
        return Err(E_FAIL.into());
    }

    let executable = executable().ok_or_else(|| Error::from(E_FAIL))?;
    let arguments = paths
        .iter()
        .map(|path| format!("\"{}\"", path.to_string_lossy().replace('"', "\\\"")))
        .collect::<Vec<_>>()
        .join(" ");

    let operation = HSTRING::from("open");
    let file = HSTRING::from(executable.as_os_str());
    let parameters = HSTRING::from(arguments);

    let started = unsafe {
        ShellExecuteW(
            None,
            &operation,
            &file,
            &parameters,
            PCWSTR::null(),
            SW_SHOWNORMAL,
        )
    };

    if started.0 as isize <= 32 {
        Err(E_FAIL.into())
    } else {
        Ok(())
    }
}

/// The app next to this DLL, or the copy the app registered when it installed the package.
fn executable() -> Option<PathBuf> {
    if let Some(path) = registered_executable() {
        if path.is_file() {
            return Some(path);
        }
    }

    let beside = module_path()?.with_file_name(APP_FILE);
    beside.is_file().then_some(beside)
}

fn registered_executable() -> Option<PathBuf> {
    let key = HSTRING::from(APP_KEY);
    let value = HSTRING::from(APP_VALUE);
    let mut buffer = [0u16; 1024];
    let mut size = (buffer.len() * 2) as u32;

    let status = unsafe {
        RegGetValueW(
            HKEY_CURRENT_USER,
            &key,
            &value,
            RRF_RT_REG_SZ,
            None,
            Some(buffer.as_mut_ptr() as *mut c_void),
            Some(&mut size),
        )
    };

    if status.0 != 0 || size < 4 {
        return None;
    }

    let length = (size as usize / 2).saturating_sub(1).min(buffer.len());
    Some(PathBuf::from(OsString::from_wide(&buffer[..length])))
}

fn module_path() -> Option<PathBuf> {
    unsafe {
        let mut module = Default::default();
        GetModuleHandleExW(
            GET_MODULE_HANDLE_EX_FLAG_FROM_ADDRESS | GET_MODULE_HANDLE_EX_FLAG_UNCHANGED_REFCOUNT,
            PCWSTR(DllGetClassObject as *const u16),
            &mut module,
        )
        .ok()?;

        let mut buffer = [0u16; 1024];
        let length = GetModuleFileNameW(Some(module), &mut buffer) as usize;

        if length == 0 {
            return None;
        }

        Some(PathBuf::from(OsString::from_wide(&buffer[..length])))
    }
}

/// A string the shell owns and frees with `CoTaskMemFree`.
fn title(value: &str) -> Result<PWSTR> {
    let text = HSTRING::from(value);
    unsafe { SHStrDupW(&text) }
}

/// The command's icon is the app's own, which is why it needs no icon resource here.
fn icon() -> Result<PWSTR> {
    let path = executable().unwrap_or_else(|| PathBuf::from(APP_FILE));
    title(&format!("{},0", path.to_string_lossy()))
}
