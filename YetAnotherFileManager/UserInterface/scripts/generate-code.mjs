// Regenerates the TypeScript view of the translation keys with the shared code generator. A renamed
// key breaks the build at every call site, because i18n.generated.ts augments the bridge's
// LocalizationKeys interface. settings.generated.ts comes from the compiled model, so the MSBuild
// target writes it after CoreCompile instead of this script.
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
    console.error(`Code generator not found: ${binary}`);
    process.exit(1);
}

const result = spawnSync(binary, [
    "--i18n", path.join(app, "Resources", "i18n", "en.jsonc"),
    "--i18n-out", path.join(ui, "src", "api", "i18n.generated.ts"),
], {stdio: "inherit"});

process.exit(result.status ?? 1);
