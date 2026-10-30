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

/** Opens a file with whatever the system uses for it. */
export async function openFile(path: string): Promise<boolean> {
    if (!Native.available) return false;

    const data = await Native.request<{ ok: boolean }>("fs.open", {path});
    return data.ok;
}

export interface Place {
    name: string;
    path: string;
    kind: string;
    /** A built-in icon name or "file:<path>", or null for the default folder glyph. */
    icon: string | null;
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
    /** Set when the record belongs to another profile than the current user. */
    owner: string | null;
    /** False for another profile's record, which this account normally cannot delete. */
    removable: boolean;
}

export interface GalleryEntry {
    path: string;
    name: string;
    modified: number;
    size: number;
}

export interface GalleryPage {
    entries: GalleryEntry[];
    total: number;
}

export interface RecentEntry {
    path: string;
    name: string;
    isDirectory: boolean;
    at: number;
}

export interface FileVisibility {
    showHidden: boolean;
    showSystem: boolean;
}

/** Lists one directory. Omit the path to start at the user's home directory. */
export async function listDirectory(path?: string, sizes = true): Promise<DirectoryListing> {
    return await Native.request<DirectoryListing>("fs.list", {path: path ?? null, sizes});
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

/**
 * Asks the elevated helper for every leftover record it can see. Windows shows a UAC prompt; when it
 * is declined the answer is marked cancelled and nothing is returned.
 */
export async function listOrphansAsAdmin(): Promise<{ entries: RecycleEntry[]; cancelled: boolean; failed: boolean }> {
    if (!Native.available) return {entries: [], cancelled: true, failed: false};

    const data = await Native.request<{ entries: RecycleEntry[]; cancelled: boolean; failed: boolean }>(
        "fs.recycle.admin.list");

    return {entries: data.entries ?? [], cancelled: data.cancelled, failed: data.failed};
}

/** Deletes every leftover record, including the ones only an administrator can reach. */
export async function purgeOrphansAsAdmin(): Promise<boolean> {
    if (!Native.available) return false;

    const data = await Native.request<{ ok: boolean }>("fs.recycle.admin.purge");
    return data.ok;
}

/** One slice of the gallery, newest first, plus how many pictures there are in total. */
export async function listGallery(offset = 0, count = 150, refresh = false): Promise<GalleryPage> {
    if (!Native.available) return {entries: [], total: 0};

    return await Native.request<GalleryPage>("fs.gallery", {offset, count, refresh});
}

/** The folders opened most recently, newest first. */
export async function listRecent(): Promise<RecentEntry[]> {
    if (!Native.available) return [];

    const data = await Native.request<{ entries: RecentEntry[] }>("fs.recent");
    return data.entries;
}

/** Forgets the recent list. */
export async function clearRecent(): Promise<void> {
    await Native.request("fs.recent.clear");
}

/** Renames one pinned folder; an empty name goes back to the folder's own name. */
export async function renamePlace(path: string, name: string | null): Promise<Place[]> {
    const data = await Native.request<{ places: Place[] }>("app.places.rename", {path, name});
    return data.places;
}

/** Pins the given folders to Quick access, in order, and returns the resulting list. */
export async function setPlaces(paths: string[]): Promise<Place[]> {
    const data = await Native.request<{ places: Place[] }>("app.places.set", {paths});
    return data.places;
}

/** The shell's hidden-item options, so the interface can explain what the listing shows. */
export async function getVisibility(): Promise<FileVisibility> {
    return await Native.request<FileVisibility>("fs.visibility");
}
