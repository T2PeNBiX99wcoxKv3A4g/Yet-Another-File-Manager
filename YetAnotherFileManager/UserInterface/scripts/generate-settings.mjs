// Regenerates the TypeScript view of the C# settings model with the shared code generator, so a
// setting cannot be added on one side only: the interface in settings.generated.ts is what
// api/settings.ts is checked against.
import {spawnSync} from "node:child_process";
import {existsSync} from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

const scripts = path.dirname(fileURLToPath(import.meta.url));
const ui = path.resolve(scripts, "..");
const app = path.resolve(ui, "..");

const windows = process.platform === "win32";
const binary = path.join(app, "Libs", "CodeGen", windows ? "win-x64" : "linux-x64",
    windows ? "PhotinoNETUtils.CodeGen.exe" : "PhotinoNETUtils.CodeGen");

if (!existsSync(binary)) {
    console.error(`Settings generator not found: ${binary}`);
    process.exit(1);
}

const result = spawnSync(binary, [
    "--model", path.join(app, "Models", "AppSettings.cs"),
    "--out", path.join(ui, "src", "api", "settings.generated.ts"),
], {stdio: "inherit"});

process.exit(result.status ?? 1);
