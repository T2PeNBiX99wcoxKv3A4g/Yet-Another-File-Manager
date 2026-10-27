# YetAnotherFileManager

The .NET host for the file manager. It uses Photino.NET for the desktop window and a local
Kestrel instance (bound to an OS-assigned port) to serve the embedded React interface in Release
builds.

See the [root README](../README.md) for the full development and build instructions.

## Quick start

```bash
# terminal 1 — Vite dev server (port 3100)
cd UserInterface
npm install
npm run dev

# terminal 2 — desktop host (Debug builds load the dev server)
dotnet run
```

## Structure

| Folder           | Purpose                                                     |
|------------------|-------------------------------------------------------------|
| `Messaging/`     | JSON request/response bridge between React and C#           |
| `Models/`        | Payload models shared across the bridge                     |
| `Services/`      | Window manager, app info, file system access, static server |
| `Interop/`       | Native tray icon (Win32 / libayatana-appindicator)          |
| `Platform/`      | Linux GTK helpers and diagnostics                           |
| `Utils/`         | `Result`, `Try` and `Singleton` helpers                     |
| `Extensions/`    | Small extension methods used by the services                |
| `Resources/`     | Embedded assets (the UI build lands in `Resources/wwwroot`) |
| `UserInterface/` | Vite + React + TypeScript front-end                         |

## Ports

- Release: Kestrel binds `127.0.0.1:0`, so the OS picks a free port at startup. Nothing to
  configure, and other Photino apps cannot collide with it.
- Debug: the host loads the Vite dev server on `http://127.0.0.1:3100`. URLCheck uses 3000, so
  both projects can run their dev servers at the same time.
