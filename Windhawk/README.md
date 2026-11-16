# Windhawk mods

Two mods live here.

| File | Kind | What it does |
| --- | --- | --- |
| `yafm-win-e.wh.cpp` | tool mod | Win+E starts this app instead of File Explorer. |
| `yafm-picker.wh.cpp` | injected mod | Open, Save As and folder dialogs are replaced with the app's picker, and File Explorer opens are redirected to it. |

One mod cannot be both kinds, so they stay separate and can be enabled on their
own.

## Win+E

`yafm-win-e.wh.cpp` takes Win+E away from File Explorer and starts this app
instead. It is a tool mod: the low-level keyboard hook runs in a dedicated
`windhawk.exe` process, so Explorer itself is not patched.

### Try it

1. Open Windhawk → **Mod development** (it edits `EditorWorkspace\mod.wh.cpp`).
2. Replace that file with this one and press `Ctrl+B` to compile and load.
3. Press Win+E.

The app is found through its `yafm://` handler or the per-user install folder.
If it is somewhere else, set **File manager path** in the mod's settings. This
lookup runs on every Win+E, so a build installed or moved after Windhawk
started is followed without restarting it.

**Replace Win+E** in the mod's settings turns only the key replacement off,
without unloading the mod.

### Limits

- Only a bare Win+E is taken; Ctrl/Shift/Alt combinations pass through.
- A low-level hook cannot see keys while an elevated window has focus.
- When no copy of the app is found, the key is passed on and Explorer opens as
  usual.

## Pickers

`yafm-picker.wh.cpp` replaces the classic Win32 dialogs with the picker built
into the app, so a program that asks for a file gets the same window as the
app's own Open / Save As / Select folder.

### What is replaced

- `GetOpenFileNameW/A` - Open file
- `GetSaveFileNameW/A` - Save As
- `SHBrowseForFolderW/A` - Select folder
- `IFileOpenDialog` / `IFileSaveDialog` - the Common Item Dialog, which Discord,
  Telegram and most Electron and Qt 6 applications use
- `ShellExecuteExW` / `ShellExecuteW` - a folder a program asks the shell to open,
  which would otherwise start File Explorer
- `SHOpenFolderAndSelectItems` - "show in folder" in a browser or an editor
- `CreateProcessW` - a program that starts `explorer.exe` itself and hands it a
  path

The dialog's initial folder, file name, extension filter and default extension
are passed to the picker, and multi-selection is preserved for Open. The app is
started as a normal process and the hook waits for it to close, which is what a
modal dialog does anyway.

The COM dialog is answered by a stand-in object instead of the shell's. Three
details decide whether a program accepts it:

- `IFileDialog::Advise` must succeed. Qt treats a failure as "no dialog" and
  never calls `Show`, and `comdlg32` falls back to its grey legacy dialog when
  the Explorer-style one cannot be prepared. The mod accepts the handler and
  raises `OnFileOk` before `Show` returns.
- `IFileOpenDialog::GetResults` must work on a Save As dialog too. It is how Qt
  and Chromium read the result, and the real save dialog answers it as well.
- `GetResult` must return an item for a file that does not exist yet. The shell
  refuses (`FILE_NOT_FOUND`), so the mod builds the item itself and answers
  `GetDisplayName` for it.

Each group has its own switch in the mod's settings:

- **Replace Open file pickers**
- **Replace Save As pickers**
- **Replace folder pickers**
- **Replace modern file dialogs**
- **Open folders with the app**
- **Open Explorer launches with the app**

Turning one off leaves that dialog untouched while the others are still
replaced.

### Explorer opens

A program that opens a folder does not show a dialog: it hands the path to the
shell, which starts File Explorer. There are three routes to that, and all of
them are taken:

| Route | Who uses it |
| --- | --- |
| `ShellExecuteExW/A`, `ShellExecuteW/A` | most programs, including the `explore` verb |
| `SHOpenFolderAndSelectItems` | Chrome, VS Code and other "show in folder" buttons |
| `CreateProcessW/A` starting `explorer.exe` | Rider, Wallpaper Engine, installers |

Only calls the shell would really have given to Explorer are taken over:

- Only `X:\...`, `\\server\share\...` and `file:` URLs that name one. A URL, a
  `shell:` location or a bare program name goes to the shell untouched.
- Only the `open` and `explore` verbs, and not when the caller asks for a class
  name or a class key. `SEE_MASK_INVOKEIDLIST` is not a reason to stay out: it
  is how most folder opens are made, and the path is still a path.
- Arguments are read only when they belong to Explorer: `explorer.exe
  /select,<path>`, `/root,<path>`, `/n,<path>` or a bare path. A program started
  with arguments of its own is left alone.
- A file is taken over only when it is selected (`/select`) or its association
  points at `explorer.exe` itself. A document with its own program, an
  executable, a shortcut and a `.url` all keep opening the way they did.

Explorer started with no path at all - the taskbar button, the Start menu, the
shell at logon - is not touched; that is what the Win+E mod is for.

The app is started and the call returns at once, the way the shell returns once
Explorer has the path. The mod never hooks the app's own process, so its
**show in Explorer** still opens Explorer rather than asking itself.

### Programs installed by Steam

Windhawk never injects into a program under `...\steamapps\common\` — that
path is part of its **well-known games** exclusion, which keeps mods away from
anti-cheat games. Wallpaper Engine is installed there, so it never gets this
mod at all: its Explorer opens cannot appear in the log, because no hook of
ours runs inside it.

Add the program to Windhawk's **Process inclusion list** (Settings → Advanced),
which overrides the game exclusion for those paths only:

```
D:\Steam Games\steamapps\common\wallpaper_engine\*.exe
```

Restart Windhawk so the engine picks the setting up, then restart the program.
From then on it logs its `explorer open:` lines like anything else, and the
mod's checks apply: a path the app can open is taken over, the rest is left to
the shell.

### When something still opens Explorer

Every call that could have been a folder open but was left to the shell is
written to the mod's log, with what was asked for and why it stayed:

```
explorer: left to the shell (a file with a program of its own) file="C:\..."
```

Open Windhawk → the mod → **Log** while repeating the action in the program that
still opens Explorer; that line names the route. Windhawk's own log lists the
same text under **Mod log** for the process that made the call.

### Conflicts

Only one mod can own a dialog. This was seen with
**Modernize Folder Picker Dialog** (`modernize-folder-picker-dialog`), which
replaces `SHBrowseForFolderW` with its own folder dialog and never calls the
original when it succeeds. While it is enabled, folder pickers are not replaced
by this mod, and `verify-picker.ps1 folder` reports `FAIL`. Disable it (or its
folder replacement) to use this mod's folder picker.

### Try it

1. Open Windhawk → **Mod development**.
2. Replace `EditorWorkspace\mod.wh.cpp` with this file and press `Ctrl+B`.
3. In any classic Windows program, open a file or use Save As.

### Verify it

`verify-picker.ps1` starts a small probe that calls one of the replaced APIs and
checks that the app's picker took its place instead of the original dialog:

```powershell
pwsh -File Windhawk\verify-picker.ps1 open
pwsh -File Windhawk\verify-picker.ps1 save
pwsh -File Windhawk\verify-picker.ps1 folder
pwsh -File Windhawk\verify-picker.ps1 dialog-open
pwsh -File Windhawk\verify-picker.ps1 dialog-save
pwsh -File Windhawk\verify-picker.ps1 dialog-folder
pwsh -File Windhawk\verify-picker.ps1 explorer
pwsh -File Windhawk\verify-picker.ps1 explorer-select
pwsh -File Windhawk\verify-picker.ps1 explorer-shell
pwsh -File Windhawk\verify-picker.ps1 explorer-api
```

The `dialog-*` modes go through `IFileOpenDialog` / `IFileSaveDialog`, the way
Discord, Telegram and other modern programs ask for a file. The `explorer-*`
modes cover the other route: `explorer` starts `explorer.exe` with a folder,
`explorer-select` adds `/select,<path>`, `explorer-shell` calls `ShellExecuteW`
with the `explore` verb, and `explorer-api` calls `SHOpenFolderAndSelectItems`;
they pass `%TEMP%` unless a path is given.

It prints `PASS` when a `--pick-file` / `--pick-save` / `--pick-folder` process
appears, closes the picker so the probe returns as if Cancel had been pressed,
and prints what the caller received. For a full round trip, run the probe
directly (`dotnet run --project Windhawk\picker-probe -- open <folder>`) and
choose a file; it prints the path the caller gets.

### Limits

- The WinRT `FileOpenPicker` / `FileSavePicker` that a few Store-style apps use
  are not covered.
- A low-integrity mod cannot inject into elevated processes, so dialogs opened
  by an administrator program are not replaced.
- If no copy of the app is found, the original dialog is shown.
- Another mod that hooks the same function can take the call first; see
  **Conflicts** above.


Both files are what a submission to the Windhawk mod collection needs.
