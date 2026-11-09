# Getting started

Yet Another File Manager is a desktop file manager for Windows and Linux. It is one window with tabs,
a split view, previews, a gallery and a recycle bin, and it keeps its settings and caches out of the
folders you browse.

## Install

Pick the package for your system from the [releases page](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest):

| System | Package |
| --- | --- |
| Windows 10/11 | `YetAnotherFileManager-<version>-win-x64.msi` |
| Fedora | `yafm-<version>-1.*.x86_64.rpm` |
| Debian / Ubuntu | `yafm_<version>_amd64.deb` |
| Arch Linux | `yafm-<version>-1-x86_64.pkg.tar.zst` |

The builds are self-contained: the .NET runtime is bundled, so nothing else has to be installed.
Windows needs the WebView2 runtime (Windows 10 and 11 already have it). Linux needs WebKitGTK 4.1
and libnotify, which the packages pull in.

The Windows build is not code-signed, so SmartScreen may warn the first time; choose **More info** →
**Run anyway**.

## First launch

The window opens on the **Overview**, a home page built from panels: Quick access, Frequent,
Recent, Home, Drives, Shared and Favorites. The sidebar on the left opens the overview, the recycle
bin, the gallery and the settings, and lists the folders you pinned to Quick access.

Tabs are restored when you close and reopen the app, unless you turn that off in
[Settings](Settings-and-Shortcuts).

## Opening a folder

- Double-click a folder, or select it and press `Enter`.
- Type a path into the address bar at the top; `Ctrl+L` focuses it.
- Drop files or folders onto the window to copy or move them.
- Links of the form `yafm://<path>` open a folder in a new tab. The app registers itself for them
  from [Settings](Settings-and-Shortcuts) → Application.

## Where the app keeps its files

- Settings: the app's settings folder (`%APPDATA%\YetAnotherFileManager` on Windows,
  `~/.config/YetAnotherFileManager` on Linux).
- Caches and logs: the matching data folder (`%LOCALAPPDATA%` or `~/.local/share`).
- Per-folder data: a hidden `.yafm-index.db` inside each folder, or one central database when the
  folder index is turned off in [Settings](Settings-and-Shortcuts).

Deleting a `.yafm-index.db` only costs a slower first open; the folder itself is untouched.
