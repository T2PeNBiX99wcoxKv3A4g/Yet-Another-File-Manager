import {Native} from "@photino-net-utils/bridge";

export interface FileEntry {
    name: string;
    fullPath: string;
    isDirectory: boolean;
    size: number;
    modified: number;
    isHidden: boolean;
    isSystem: boolean;
    /** An icon recorded in the folder's own index: "icon:&lt;name&gt;" or "file:&lt;path&gt;". */
    iconSource: string | null;
}

export interface DirectoryListing {
    path: string;
    parent: string | null;
    entries: FileEntry[];
    /** Folder sizes measured earlier and cached in the folder's index, by entry name. */
    folderSizes: Record<string, number>;
}

export interface Place {
    name: string;
    path: string;
    kind: string;
}

export interface Drive {
    name: string;
    label: string;
    format: string | null;
    totalSize: number;
    freeSpace: number;
}

export interface RecycleEntry {
    id: string;
    name: string;
    originalPath: string;
    size: number;
    deleted: number;
    isDirectory: boolean;
    /** Only the metadata record is left; the content is gone. */
    isOrphan: boolean;
}

export interface FileVisibility {
    showHidden: boolean;
    showSystem: boolean;
}

/** Lists one directory. Omit the path to start at the user's home directory. */
export async function listDirectory(path?: string): Promise<DirectoryListing> {
    return await Native.request<DirectoryListing>("fs.list", {path: path ?? null});
}

/** The shortcuts shown above the drive list. */
export async function listPlaces(): Promise<Place[]> {
    const data = await Native.request<{ places: Place[] }>("fs.places");
    return data.places;
}

/** The ready volumes, with their capacity. */
export async function listDrives(): Promise<Drive[]> {
    const data = await Native.request<{ drives: Drive[] }>("fs.drives");
    return data.drives;
}

/** What is currently in the recycle bin, newest first. */
export async function listRecycle(includeOrphans = false): Promise<RecycleEntry[]> {
    const data = await Native.request<{ entries: RecycleEntry[] }>("fs.recycle", {includeOrphans});
    return data.entries;
}

/** Puts one entry back where it came from. */
export async function restoreRecycleEntry(id: string): Promise<boolean> {
    const data = await Native.request<{ ok: boolean }>("fs.recycle.restore", {id});
    return data.ok;
}

/** Permanently removes every listed entry, including leftover metadata when it is shown. */
export async function emptyRecycleBin(includeOrphans = false): Promise<void> {
    await Native.request("fs.recycle.empty", {includeOrphans});
}

/** Permanently removes one entry. */
export async function deleteRecycleEntry(id: string): Promise<void> {
    await Native.request("fs.recycle.delete", {id});
}

/** The shell's hidden-item options, so the interface can explain what the listing shows. */
export async function getVisibility(): Promise<FileVisibility> {
    return await Native.request<FileVisibility>("fs.visibility");
}
