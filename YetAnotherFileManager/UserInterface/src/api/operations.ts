import {Native} from "@photino-net-utils/bridge";

/** The result of a rename or new-folder operation. */
export interface PathOperation {
    ok: boolean;
    path: string | null;
    error: string | null;
}

/** Puts the selected paths on the clipboard as files; `cut` makes the next paste a move. */
export async function copyPaths(paths: string[], cut = false): Promise<boolean> {
    if (!Native.available || paths.length === 0) return false;

    const data = await Native.request<{ ok: boolean }>(cut ? "fs.clipboard.cut" : "fs.clipboard.copy", {paths});
    return data.ok;
}

/** Whether the clipboard has files that can be pasted into the folder. */
export async function hasClipboardFiles(): Promise<boolean> {
    if (!Native.available) return false;

    const data = await Native.request<{ hasFiles: boolean }>("fs.clipboard.hasFiles");
    return data.hasFiles;
}

/** Copies or moves the clipboard's files into a folder. */
export async function pasteInto(directory: string): Promise<boolean> {
    if (!Native.available) return false;

    const data = await Native.request<{ ok: boolean }>("fs.clipboard.paste", {directory});
    return data.ok;
}

/** Sends the paths to the recycle bin. */
export async function deletePaths(paths: string[]): Promise<boolean> {
    if (!Native.available || paths.length === 0) return false;

    const data = await Native.request<{ ok: boolean }>("fs.operation.delete", {paths});
    return data.ok;
}

/** Renames one entry; the result carries the new path or the reason it was refused. */
export async function renamePath(path: string, name: string): Promise<PathOperation> {
    if (!Native.available) return {ok: false, path: null, error: "Renaming needs the desktop app."};

    return await Native.request<PathOperation>("fs.operation.rename", {path, name});
}

/** Creates the next free "New folder" in a directory. */
export async function newFolder(directory: string): Promise<PathOperation> {
    if (!Native.available) return {ok: false, path: null, error: "Creating folders needs the desktop app."};

    return await Native.request<PathOperation>("fs.operation.newFolder", {directory});
}

/** Opens the shell's properties sheet for the selected entries. */
export async function showProperties(paths: string[]): Promise<void> {
    if (!Native.available || paths.length === 0) return;

    await Native.request("fs.operation.properties", {paths});
}

/** Opens the "How do you want to open this file?" dialog. */
export async function openWith(path: string): Promise<void> {
    if (!Native.available) return;

    await Native.request("fs.operation.openWith", {path});
}

/** Opens Windows Terminal in a folder, with a PowerShell fallback. */
export async function openTerminal(path: string): Promise<void> {
    if (!Native.available) return;

    await Native.request("fs.operation.terminal", {path});
}

/** One application offered by the shell's Open with list. */
export interface OpenWithProgram {
    name: string;
    path: string;
    /** A PNG data URL for the application's icon, or null. */
    icon: string | null;
}

/** The applications Windows offers for a file, split into recommended and additional ones. */
export interface OpenWithPrograms {
    recommended: OpenWithProgram[];
    other: OpenWithProgram[];
}

/** Reads the shell's associated applications for a file. */
export async function listOpenWith(path: string): Promise<OpenWithPrograms> {
    if (!Native.available) return {recommended: [], other: []};

    return await Native.request<OpenWithPrograms>("fs.openWith.programs", {path});
}

/** Opens one file with a specific application from the Open with list. */
export async function openWithProgram(filePath: string, programPath: string): Promise<boolean> {
    if (!Native.available) return false;

    const data = await Native.request<{ ok: boolean }>("fs.openWith.program", {filePath, programPath});
    return data.ok;
}

/** Reveals the path in Explorer, or opens its folder on Linux. */
export async function showInExplorer(path: string): Promise<void> {
    if (!Native.available) return;

    await Native.request("fs.operation.showInExplorer", {path});
}

/** One command read from the shell's own context menu. */
export interface ShellVerb {
    label: string;
    /** The canonical verb when the handler provides one; null means "use the offset". */
    verb: string | null;
    /** Offset from the first command id, used when there is no canonical verb. */
    offset: number;
    /** A built-in icon name, a PNG data URL, or null for the generic glyph. */
    icon: string | null;
    enabled: boolean;
    checked: boolean;
    /** The submenu this entry came from, or null for a top-level entry. */
    group: string | null;
    /** 0 for a top-level entry, 1 or more inside submenus. */
    depth: number;
}

/** What could be read from the shell menu, and whether third-party handlers were included. */
export interface ShellVerbs {
    verbs: ShellVerb[];
    safe: boolean;
}

/**
 * Reads the shell's context menu without showing it. The host runs the read in a helper process,
 * so a misbehaving extension cannot take the window down; a failure falls back to standard verbs.
 */
export async function listShellVerbs(paths: string[]): Promise<ShellVerbs> {
    if (!Native.available || paths.length === 0) return {verbs: [], safe: true};

    return await Native.request<ShellVerbs>("shell.verbs", {paths});
}

/** Runs one command that `listShellVerbs` returned. The helper process isolates it again. */
export async function invokeShellVerb(
    paths: string[],
    safe: boolean,
    verb: string | null,
    offset: number,
): Promise<void> {
    if (!Native.available || paths.length === 0) return;

    await Native.request("shell.invoke", {paths, safe, verb, offset});
}

/** Packs the selection into a ZIP file beside it. */
export async function compressPaths(paths: string[]): Promise<PathOperation> {
    if (!Native.available || paths.length === 0)
        return {ok: false, path: null, error: "Compressing needs the desktop app."};

    return await Native.request<PathOperation>("fs.operation.compress", {paths});
}
