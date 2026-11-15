# Windhawk mods

Two mods live here.

| File | Kind | What it does |
| --- | --- | --- |
| `yafm-win-e.wh.cpp` | tool mod | Win+E starts this app instead of File Explorer. |
| `yafm-picker.wh.cpp` | injected mod | Open, Save As and folder dialogs are replaced with the app's picker. |

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

Turning one off leaves that dialog untouched while the others are still
replaced.

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
```

The `dialog-*` modes go through `IFileOpenDialog` / `IFileSaveDialog`, the way
Discord, Telegram and other modern programs ask for a file.

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
