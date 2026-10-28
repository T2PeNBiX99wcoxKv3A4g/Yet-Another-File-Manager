import {Native} from "@photino-net-utils/bridge";

export interface FileEntry {
    name: string;
    fullPath: string;
    isDirectory: boolean;
    size: number;
    modified: number;
    isHidden: boolean;
    isSystem: boolean;
}

export interface DirectoryListing {
    path: string;
    parent: string | null;
    entries: FileEntry[];
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
    name: string;
    originalPath: string;
    size: number;
    deleted: number;
    isDirectory: boolean;
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
export async function listRecycle(): Promise<RecycleEntry[]> {
    const data = await Native.request<{ entries: RecycleEntry[] }>("fs.recycle");
    return data.entries;
}

/** The shell's hidden-item options, so the interface can explain what the listing shows. */
export async function getVisibility(): Promise<FileVisibility> {
    return await Native.request<FileVisibility>("fs.visibility");
}
