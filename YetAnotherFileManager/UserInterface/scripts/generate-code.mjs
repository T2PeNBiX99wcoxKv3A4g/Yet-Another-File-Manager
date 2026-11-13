// Regenerates the TypeScript views of the C# settings model and of the translation files with the
// shared code generator. A setting cannot be added on one side only (settings.generated.ts is what
// api/settings.ts is checked against), and a translation key that is renamed or removed breaks the
// build at every call site, because the union in i18n.generated.ts is the key type of t().
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

const run = (args) => {
    const result = spawnSync(binary, args, {stdio: "inherit"});
    if (result.status !== 0) process.exit(result.status ?? 1);
};

run([
    "--model", path.join(app, "Models", "AppSettings.cs"),
    "--out", path.join(ui, "src", "api", "settings.generated.ts"),
]);

// English is the key itself, so en.jsonc has no entries; every translated file lists every key.
run([
    "--i18n", path.join(app, "Resources", "i18n", "ja.jsonc"),
    "--i18n-out", path.join(ui, "src", "api", "i18n.generated.ts"),
]);
