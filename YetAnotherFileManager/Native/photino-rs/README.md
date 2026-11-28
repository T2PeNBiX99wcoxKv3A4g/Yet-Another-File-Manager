# photino-rs

A native layer for Photino written in Rust, behind the same C ABI the managed library already
speaks, so `Photino.NET.dll` does not have to change.

## State

Linux is the first backend and runs: the picker window of this app opens, loads its page and
answers the managed side over the same message bridge. Everything else is either a thin wrapper
around GTK or a stub:

| Area | State |
|---|---|
| Window, title, size, position, resizable, topmost, min/max | done |
| WebView, navigation, scripts, web messages, custom schemes | done |
| Window icons, zoom, dpi, monitors, dragging | done |
| Maximized/minimized/restored callbacks | not wired |
| Native dialogs (open/save/folder/message) | stubs |
| Notifications | stub |
| Windows and macOS backends | not started |

`Photino_Invoke` blocks until the main loop ran the work, which is what keeps the managed
delegate alive for the duration of the call; calling it from the main thread runs it directly.

## Build

```
cargo build --release
cp target/release/libphotino_native.so Photino.Native.so
```

The resulting file replaces the one `Photino.NET` loads; nothing else changes.
