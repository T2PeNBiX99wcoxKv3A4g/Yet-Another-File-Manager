# YetAnotherFileManager

A cross-platform desktop file manager built with .NET 10, Photino.NET and a Vite + React front-end.

The project started as the Photino `HelloPhotino.React` sample; the Next.js interface has been
replaced with Vite and the C# side now follows the same basic structure as the author's other
Photino apps (services as singletons, a typed JSON bridge, Serilog logging).

## Layout

```
YetAnotherFileManager/
├── YetAnotherFileManager/             # .NET host
│   ├── Program.cs                     # entry point / window bootstrap
│   ├── Constants.cs                   # app-wide constants
│   ├── Messaging/                     # JSON bridge between React and C#
│   ├── Models/                        # payload models
│   ├── Services/                      # app info, file system, window manager
│   ├── Libs/                          # PhotinoNETUtils.dll + front-end bridge tarball
│   └── UserInterface/                 # Vite + React + TypeScript front-end
│       ├── src/
│       └── scripts/copy-build.mjs     # copies build output into Resources/wwwroot
├── .opencode/rules/                   # agent rules
└── AGENTS.md
```

The Photino plumbing (tray, static server, single instance, logging, shared helpers) lives in the
separate [PhotinoNETUtils](../PhotinoNETUtils) project. Its built DLL and front-end npm package are
kept in `YetAnotherFileManager/Libs`; refresh them with `PhotinoNETUtils/build-and-copy.ps1`.

## Requirements

- .NET SDK 10
- Node.js 20.19+ (or 22.12+)
- The shared artifacts in `YetAnotherFileManager/Libs` (copied from `../PhotinoNETUtils` with its
  `build-and-copy.ps1`)

## Development

Start the Vite dev server first:

```bash
cd YetAnotherFileManager/UserInterface
npm install
npm run dev
```

Then run the .NET host. A Debug build always loads `http://127.0.0.1:3100`, so it picks up the dev
server and its hot reload:

```bash
dotnet run --project YetAnotherFileManager
```

## Production build

The UI build is copied into `Resources/wwwroot` automatically, where it is embedded into the
assembly:

```bash
cd YetAnotherFileManager/UserInterface
npm run build
```

Then build the host in Release mode. The front-end is served from the embedded manifest by a local
Kestrel instance bound to an OS-assigned port (`127.0.0.1:0`), so several Photino apps can run at
the same time without port conflicts:

```bash
dotnet build -c Release
```

## Native bridge

The front-end talks to C# through Photino's `window.external` bridge, imported from the shared
`@photino-net-utils/bridge` package (`../PhotinoNETUtils/UserInterface`). Messages are
JSON objects with a `type` and optional `id`; handlers in C# are plain services that subscribe to
`NativeBridge.MessageReceived` and reply with a named payload. The available message types are
`app.info`, `fs.list`, `fs.places` and `fs.drives`.

## Tray, single instance and command line

- Closing the window hides it to the tray instead of exiting. The tray menu has **Open** and
  **Exit**; a left click opens the window.
- Only one instance runs. A second launch forwards its arguments over a named pipe and exits.
- Arguments are paths, like Explorer: `YetAnotherFileManager.exe "C:\Users\me\Downloads"` opens the
  folder. A file argument opens its containing folder (selection is not implemented yet). If the
  window is hidden, forwarding a path restores it.
- On Linux the tray needs `libayatana-appindicator3`; without it the app stays in the taskbar and
  closing the window exits.

