import {Native} from "@photino-net-utils/bridge";
import {askProtected, type GuardedChange} from "./safety";

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

export interface ClipboardEntry {
    path: string;
    name: string;
    isDirectory: boolean;
    /** False when the entry was moved or deleted after it was put on the clipboard. */
    exists: boolean;
}

export interface ClipboardFiles {
    entries: ClipboardEntry[];
    /** True when the files were cut, so the next paste moves them. */
    move: boolean;
    /** The clipboard sequence number; it changes whenever the clipboard contents change. */
    sequence: number;
}

/** The files on the clipboard, with enough detail for the tray to draw them. */
export async function getClipboardFiles(): Promise<ClipboardFiles> {
    if (!Native.available) return {entries: [], move: false, sequence: 0};

    return await Native.request<ClipboardFiles>("fs.clipboard.files");
}

export interface TransferResult {
    ok: boolean;
    error: string | null;
    /** The top-level destinations that were created. */
    created: string[];
    /** The user closed the protected-path dialog; nothing was transferred. */
    cancelled?: boolean;
}

/** Copies or moves paths into a folder without going through the shell. */
export async function transferPaths(paths: string[], target: string, move: boolean): Promise<TransferResult> {
    if (!Native.available || paths.length === 0) return {ok: false, error: "nothing_to_transfer", created: []};

    return await askProtectedChange(
        {action: move ? "move" : "write"},
        (confirm) => Native.request<TransferResult & GuardedChange>("fs.operation.transfer",
            {paths, target, move, confirm}),
        (result) => ({ok: result.ok, error: result.error, created: result.created}),
        () => ({ok: false, error: null, created: [], cancelled: true}),
    );
}

/**
 * Sends an operation, and when a protected path blocks it, asks the window and sends the token
 * back. The dialog's wait is enforced by the host, not by the dialog alone.
 */
async function askProtectedChange<T extends GuardedChange, R>(
    what: { action: "delete" | "move" | "rename" | "write"; permanent?: boolean },
    send: (confirm?: string) => Promise<T>,
    finish: (result: T) => R,
    cancelled: () => R,
): Promise<R> {
    let result = await send();

    for (let attempt = 0; attempt < 2 && result.required; attempt++) {
        if (!result.token || !result.protected?.length)
            break;

        const allowed = await askProtected({
            hits: result.protected,
            delaySeconds: result.delaySeconds ?? 5,
            action: what.action,
            permanent: what.permanent,
        });

        if (!allowed)
            return cancelled();

        result = await send(result.token);
    }

    return finish(result);
}

/** Describes paths (name, whether it is a folder) for the tray's drop handler. */
export async function inspectPaths(paths: string[]): Promise<ClipboardEntry[]> {
    if (!Native.available || paths.length === 0) return [];

    const data = await Native.request<{ entries: ClipboardEntry[] }>("fs.paths.info", {paths});
    return data.entries;
}

/** Copies or moves the clipboard's files into a folder. */
export interface PasteResult {
    ok: boolean;
    /** The entries the paste created, so the list can select them. */
    created: string[];
    /** The user closed the protected-path dialog; nothing was pasted. */
    cancelled?: boolean;
}

/** Pastes the clipboard into a folder; answers with what it created. */
export async function pasteInto(directory: string, move = false): Promise<PasteResult> {
    if (!Native.available) return {ok: false, created: []};

    return await askProtectedChange(
        {action: move ? "move" : "write"},
        (confirm) => Native.request<{ ok: boolean; created?: string[] } & GuardedChange>("fs.clipboard.paste",
            {directory, confirm}),
        (data) => ({ok: data.ok, created: data.created ?? []}),
        () => ({ok: false, created: [], cancelled: true}),
    );
}

export interface DeleteResult extends GuardedChange {
    /** The volume's recycle bin is turned off, so the selection would be deleted for good. */
    needsPermanent?: boolean;
    error?: string | null;
}

/** Sends the paths to the recycle bin, or deletes them permanently when asked. */
export async function deletePaths(paths: string[], permanent = false): Promise<DeleteResult> {
    if (!Native.available || paths.length === 0)
        return {ok: false, error: null};

    // A protected path blocks the first request. The dialog waits the countdown, then the token
    // is sent back; the backend checks that the wait really happened.
    let result = await Native.request<DeleteResult>("fs.operation.delete", {paths, permanent});
    let cancelled = false;

    for (let attempt = 0; attempt < 2 && result.required; attempt++) {
        if (!result.token || !result.protected?.length)
            break;

        const allowed = await askProtected({
            hits: result.protected,
            delaySeconds: result.delaySeconds ?? 5,
            action: "delete",
            permanent,
        });

        if (!allowed) {
            cancelled = true;
            break;
        }

        result = await Native.request<DeleteResult>("fs.operation.delete",
            {paths, permanent, confirm: result.token});
    }

    return cancelled ? {...result, ok: false, cancelled: true} : result;
}

/** Renames one entry; the result carries the new path or the reason it was refused. */
export async function renamePath(path: string, name: string): Promise<PathOperation> {
    if (!Native.available) return {ok: false, path: null, error: "Renaming needs the desktop app."};

    return await askProtectedChange(
        {action: "rename"},
        (confirm) => Native.request<PathOperation & GuardedChange>("fs.operation.rename", {path, name, confirm}),
        (result) => ({ok: result.ok, path: result.path, error: result.error}),
        () => ({ok: false, path: null, error: null, cancelled: true}),
    );
}

/** Creates the next free "new_folder" in a directory, optionally case-sensitive. */
export async function newFolder(directory: string, caseSensitive = false): Promise<PathOperation> {
    if (!Native.available) return {ok: false, path: null, error: "Creating folders needs the desktop app."};

    return await Native.request<PathOperation>("fs.operation.newFolder", {directory, caseSensitive});
}

/** Whether names in a folder are compared with case. */
export async function isCaseSensitive(path: string): Promise<boolean> {
    if (!Native.available) return false;

    const data = await Native.request<{ ok: boolean; enabled: boolean }>("fs.caseSensitive.get", {path});
    return data.enabled;
}

export interface CaseSensitiveResult {
    ok: boolean;
    enabled: boolean;
    error: string | null;
}

/** Turns the NTFS case-sensitivity flag on or off for a folder. */
export async function setCaseSensitive(path: string, enabled: boolean): Promise<CaseSensitiveResult> {
    if (!Native.available)
        return {ok: false, enabled, error: "Case-sensitive folders need the desktop app."};

    return await Native.request<CaseSensitiveResult>("fs.caseSensitive.set", {path, enabled});
}

/** The kinds of link Windows can create. */
export type LinkKind = "symbolic-file" | "symbolic-folder" | "hard" | "junction"
    | "hard-copy" | "symbolic-copy" | "smart-copy" | "smart-mirror" | "multi-version-smart-copy";

export interface LinkResult {
    ok: boolean;
    link: string | null;
    error: string | null;
}

/** Creates a symbolic link, hard link or directory junction. */
export async function createLink(kind: LinkKind, source: string, link: string): Promise<LinkResult> {
    if (!Native.available)
        return {ok: false, link: null, error: "Creating links needs the desktop app."};

    return await Native.request<LinkResult>("fs.link.create", {kind, source, link});
}

/** Creates the next free "New file.txt" in a directory. */
export async function newFile(directory: string, extension?: string | null): Promise<PathOperation> {
    if (!Native.available) return {ok: false, path: null, error: "Creating files needs the desktop app."};

    return await Native.request<PathOperation>("fs.operation.newFile", {directory, extension});
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

/** The result of undoing or redoing one file operation. */
export interface HistoryOperation {
    ok: boolean;
    error: string | null;
    /** Directories that should be read again. */
    paths: string[];
}

/** Undoes the last recorded file operation. */
export async function undoFileOperation(): Promise<HistoryOperation> {
    if (!Native.available) return {ok: false, error: "Undo needs the desktop app.", paths: []};

    return await Native.request<HistoryOperation>("fs.history.undo");
}

/** Redoes the next recorded file operation. */
export async function redoFileOperation(): Promise<HistoryOperation> {
    if (!Native.available) return {ok: false, error: "Redo needs the desktop app.", paths: []};

    return await Native.request<HistoryOperation>("fs.history.redo");
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
    /** The whole submenu chain, so nested menus can be rebuilt exactly. */
    groupPath: string[] | null;
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

export interface CompressOptions {
    directory: string;
    name: string;
    format: "zip" | "zipx" | "7z" | "tar" | "tar.gz" | "tar.bz2";
    level: number;
    /** ZIP/7z compression method, or null for the format default. */
    method?: string | null;
    /** "none", "zipcrypto", "aes128", "aes192" or "aes256". */
    encryption?: string;
    password?: string;
    /** Volume size in bytes; 0 keeps one file. */
    splitSize?: number;
}

/** Packs selected files into the requested format and destination. */
export async function compressPaths(paths: string[], options: CompressOptions): Promise<PathOperation> {
    if (!Native.available || paths.length === 0)
        return {ok: false, path: null, error: "Compressing needs the desktop app."};

    return await Native.request<PathOperation>("fs.operation.compress", {...options, paths});
}
