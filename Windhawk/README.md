# Windhawk mod

`yafm-win-e.wh.cpp` takes Win+E away from File Explorer and starts this app
instead. It is a tool mod: the low-level keyboard hook runs in a dedicated
`windhawk.exe` process, so Explorer itself is not patched.

## Try it

1. Open Windhawk → **Mod development** (it edits `EditorWorkspace\mod.wh.cpp`).
2. Replace that file with this one and press `Ctrl+B` to compile and load.
3. Press Win+E.

The app is found through its `yafm://` handler or the per-user install folder.
If it is somewhere else, set **File manager path** in the mod's settings.

## Limits

- Only a bare Win+E is taken; Ctrl/Shift/Alt combinations pass through.
- A low-level hook cannot see keys while an elevated window has focus.
- When no copy of the app is found, the key is passed on and Explorer opens as
  usual.

The same file is what a submission to the Windhawk mod collection needs.
