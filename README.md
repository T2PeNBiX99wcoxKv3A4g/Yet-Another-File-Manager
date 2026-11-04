<div align="center">
  <img src="icon.svg" alt="" width="120">
  <h1>YetAnotherFileManager</h1>
  <p><strong>A file manager that keeps everything in one window.</strong></p>
  <p>
    <a href="https://t2penbix99wcoxkv3a4g.github.io/YetAnotherFileManager/">Website</a> ·
    <a href="https://t2penbix99wcoxkv3a4g.github.io/YetAnotherFileManager/#/docs/Getting-Started">Documentation</a>
  </p>
  <p>
    <a href="README.ja.md">日本語</a> ·
    <a href="README.zh-CN.md">简体中文</a> ·
    <a href="README.zh-TW.md">繁體中文</a>
  </p>
</div>

YetAnotherFileManager is a desktop file manager for Windows and Linux. It browses folders in a list
or a grid, previews pictures, video and documents beside them, and keeps tabs, a split view, a
search, a gallery, per-folder tags and a recycle bin in the same window. It runs on both systems
from one code base.

<div align="center">
  <a href="docs/main-window.png"><img src="docs/main-window.png" alt="The main window" width="880"></a>
  <br>
  <em>The main window, with the details panel</em>
  <br><br>
  <a href="docs/overview.png"><img src="docs/overview.png" alt="The overview" width="880"></a>
  <br>
  <em>The overview</em>
  <br><br>
  <a href="docs/settings.png"><img src="docs/settings.png" alt="The settings page" width="880"></a>
  <br>
  <em>Settings: language, colour presets and the section list</em>
</div>

## Why

Explorer is fine until you want two folders side by side, a preview of the file you are about to
open, or a way back from a mistaken delete. YetAnotherFileManager is my attempt at keeping the
familiar workflow and adding the things I use every day, without hiding them behind a paid tier.
Windows and Linux share the same interface, so the window looks the same on both.

## Features

- **Tabs and split view** — open several folders at once and show two of them side by side. Tabs
  keep their own history, and the divider can be dragged.
- **List and grid** — sort by any column, choose the columns, and let each folder remember its own
  mode, icon size and tile height. The list is virtualized, so huge folders still scroll smoothly.
- **Previews** — pictures, video, PDFs and text appear in the details panel or in a strip under the
  list, with size, dates, link targets and attributes for the selection.
- **Overview** — a home page built from panels: Quick access, frequent folders, recent items, drives
  and any folder you pin, in one to five columns.
- **Search** — a floating find bar that filters as you type, with match case, regular expressions,
  and a choice between dimming and hiding the rest.
- **Tags** — coloured tags per folder, a catalogue to rename or remove them everywhere at once, and
  the colours stored with the folder.
- **Gallery** — point it at the folders that hold pictures; it groups every image by day and opens a
  full-size viewer on double click.
- **Recycle bin** — restore, delete permanently, and list the leftover records whose files are gone.
  The administrator view covers the leftovers of every profile.
- **Themes and languages** — accent and secondary colours, built-in and saved presets, and an
  interface in English, 繁體中文, 简体中文 or 日本語.
- **Fast where it matters** — a small index per folder (or one central database), shell icons loaded
  lazily, and a Rust helper that scans the gallery.
- **`yafm://` links** — open a folder in a new tab from anywhere, with the handler registered per
  user.

## Built with

- **C# on .NET 10** — the file system work, shell integration, trash access, icons, the SQLite index
  and the tray.
- **React 19 + TypeScript**, bundled by **Vite** and styled with **styled-components** — the
  interface. It is presentation only: it exchanges JSON messages with the C# side.
- **Photino.NET** — the desktop shell. It shows the interface in the operating system's own web
  view, which is why the web view is a runtime dependency: WebView2 on Windows, WebKitGTK on Linux.
- **Rust** (`Native/yafm-native`) — the bulk gallery scan and ZIP creation. The managed fallback
  keeps the app working when the helper is missing.

## Running

The published builds are **self-contained** — they bundle the .NET runtime, so nothing needs to be
installed for them. What the operating system still has to provide is listed under each system below.

Four package formats are published beside the plain archives:

| File                                          | What it does                                                                                                                                                                        |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `YetAnotherFileManager-<version>-win-x64.msi` | Per-user Windows installer: installs into `%LOCALAPPDATA%\Programs\YetAnotherFileManager`, adds a Start menu entry and a desktop shortcut, and never asks for administrator rights. |
| `yafm-<version>-1.fcXX.x86_64.rpm`            | Fedora package: `sudo dnf install ./yafm-<version>-*.rpm`. Installs to `/opt/YetAnotherFileManager` with a `yafm` command, a desktop entry and the icon.                            |
| `yafm_<version>_amd64.deb`                    | Debian/Ubuntu package: `sudo apt install ./yafm_<version>_amd64.deb`. Same layout as the RPM.                                                                                       |
| `yafm-<version>-1-x86_64.pkg.tar.zst`         | Arch Linux package: `sudo pacman -U yafm-<version>-1-x86_64.pkg.tar.zst`. Same layout as the RPM.                                                                                   |

### Windows

1. The Microsoft Edge **WebView2 Runtime**. Windows 10 and 11 already ship it; other versions need
   [Microsoft's installer](https://developer.microsoft.com/microsoft-edge/webview2/).
2. The MSI installs per user and needs no elevation.
3. The build is not code-signed, so SmartScreen may warn the first time. Choose **More info** → **Run anyway**.

### Linux

1. **WebKitGTK 4.1** for the web view, and **libnotify** for the tray icon. The packages pull both
   in; a plain archive needs them installed by hand.
2. The Linux build is exercised on **Fedora with KDE Plasma on Wayland**. Other distributions and
   desktops are untested; if the window does not start, check the runtime libraries first.

## Building from source

```bash
git clone https://github.com/T2PeNBiX99wcoxKv3A4g/YetAnotherFileManager.git
cd YetAnotherFileManager
dotnet build YetAnotherFileManager/YetAnotherFileManager.csproj
```

The interface is a separate Vite project:

```bash
cd YetAnotherFileManager/UserInterface
npm install
npm run build     # writes Resources/wwwroot, which a Release build serves
```

A **Debug** build talks to the Vite dev server, which hot-reloads the interface:

```bash
cd YetAnotherFileManager/UserInterface
npm run dev       # http://127.0.0.1:3100
```

The Rust helper is optional for a build; without it the gallery uses the managed walk:

```bash
cargo build --release --manifest-path YetAnotherFileManager/Native/yafm-native/Cargo.toml
```

The website and its documentation live in `Site`:

```bash
cd Site
npm install
npm run dev
```

## Credits

- [Sigma File Manager](https://github.com/aleksey-hoffman/sigma-file-manager) by Aleksey Hoffman —
  an early design reference for the layout and the feature set.

## License

MIT — see [LICENSE](LICENSE).
