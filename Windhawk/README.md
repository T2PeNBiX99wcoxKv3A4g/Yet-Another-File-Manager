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

The dialog's initial folder, file name, extension filter and default extension
are passed to the picker, and multi-selection is preserved for Open. The app is
started as a normal process and the hook waits for it to close, which is what a
modal dialog does anyway.

Each group has its own switch in the mod's settings:

- **Replace Open file pickers**
- **Replace Save As pickers**
- **Replace folder pickers**

Turning one off leaves that dialog untouched while the others are still
replaced.

### Try it

1. Open Windhawk → **Mod development**.
2. Replace `EditorWorkspace\mod.wh.cpp` with this file and press `Ctrl+B`.
3. In any classic Windows program, open a file or use Save As.

### Limits

- Only the classic common dialogs are covered. The newer COM item dialogs
  (`IFileOpenDialog` / `IFileSaveDialog`) are not replaced yet; some newer
  applications use them and keep their own appearance.
- A low-integrity mod cannot inject into elevated processes, so dialogs opened
  by an administrator program are not replaced.
- If no copy of the app is found, the original dialog is shown.

Both files are what a submission to the Windhawk mod collection needs.
