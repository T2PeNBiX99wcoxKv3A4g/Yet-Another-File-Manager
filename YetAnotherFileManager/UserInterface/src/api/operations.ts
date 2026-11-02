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

/** Reveals the path in Explorer, or opens its folder on Linux. */
export async function showInExplorer(path: string): Promise<void> {
    if (!Native.available) return;

    await Native.request("fs.operation.showInExplorer", {path});
}

/** Shows Explorer's own (legacy) context menu for the paths, with third-party handlers included. */
export async function showShellMenu(paths: string[]): Promise<void> {
    if (!Native.available || paths.length === 0) return;

    await Native.request("shell.contextMenu", {paths});
}
