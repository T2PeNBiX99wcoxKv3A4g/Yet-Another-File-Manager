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
│   ├── Logging.cs                     # Serilog + console mirroring
│   ├── Messaging/                     # JSON bridge between React and C#
│   ├── Models/                        # payload models
│   ├── Services/                      # app info, file system, window manager
│   ├── Utils/                         # Result / Try / Singleton helpers
│   └── UserInterface/                 # Vite + React + TypeScript front-end
│       ├── src/
│       └── scripts/copy-build.mjs     # copies build output into Resources/wwwroot
├── .opencode/rules/                   # agent rules
└── AGENTS.md
```

## Requirements

- .NET SDK 10
- Node.js 20.19+ (or 22.12+)

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

The front-end talks to C# through Photino's `window.external` bridge (`src/Native.ts`). Messages are
JSON objects with a `type` and optional `id`; handlers in C# are plain services that subscribe to
`NativeBridge.MessageReceived` and reply with a named payload. The available message types are
`app.info`, `fs.list`, `fs.places` and `fs.drives`.
