import {useEffect, useState} from "react";
import {Native} from "@photino-net-utils/bridge";

/** One path the properties dialog was opened for. */
export interface PathPropertiesInfo {
    path: string;
    name: string;
    directory: boolean;
    size: number;
    entries: number | null;
    created: number;
    modified: number;
    accessed: number;
    attributes: string[];
    unixMode: string | null;
    unixModeValue: number | null;
    linkTarget: string | null;
    error: string | null;
    sizeOnDisk: number;
    fileCount: number;
    folderCount: number;
    fileSystem: string | null;
    mountPoint: string | null;
    mountSource: string | null;
    volumeFree: number;
    volumeTotal: number;
    owner: string | null;
    group: string | null;
}

export interface PropertiesRequest {
    items: PathPropertiesInfo[];
    /** The host has a shell property sheet, so the dialog can offer it. */
    canUseSystemSheet: boolean;
}

/** The one dialog every surface opens, so App can render it once. */
let current: PropertiesRequest | null = null;
const listeners = new Set<(value: PropertiesRequest | null) => void>();

export function openProperties(request: PropertiesRequest) {
    current = request;
    listeners.forEach((listener) => listener(current));
}

export function closeProperties() {
    current = null;
    listeners.forEach((listener) => listener(null));
}

export function usePropertiesRequest(): PropertiesRequest | null {
    const [value, setValue] = useState<PropertiesRequest | null>(current);

    useEffect(() => {
        listeners.add(setValue);
        return () => {
            listeners.delete(setValue);
        };
    }, []);

    return value;
}

/** Reads the details again after an edit; never opens the shell sheet. */
export async function readProperties(path: string): Promise<PathPropertiesInfo | null> {
    if (!Native.available) return null;

    const items = await Native.request<PathPropertiesInfo[]>("fs.operation.properties.info", {paths: [path]});
    return items?.[0] ?? null;
}

/** The digests the properties page shows; computed in one pass by the host. */
export interface PathHashes {
    items?: { name: string; value: string }[] | null;
    error?: string | null;
}

export async function readHashes(path: string): Promise<PathHashes | null> {
    if (!Native.available) return null;

    return await Native.request<PathHashes>("fs.operation.properties.hash", {path});
}

/** Applies the flags (or unix mode) the user changed on the properties page. */
export async function applyProperties(request: {
    path: string;
    readOnly?: boolean;
    hidden?: boolean;
    archive?: boolean;
    unixMode?: number;
    recursive?: boolean;
}): Promise<{ ok: boolean; error: string | null; info?: PathPropertiesInfo | null }> {
    if (!Native.available) return {ok: false, error: null};

    return await Native.request("fs.operation.properties.edit", request);
}

/** The tags, rating and comment the details tab shows for one entry. */
export interface EntryDetails {
    tags: string[];
    rating: number;
    comment: string | null;
    editable: boolean;
}

export async function readEntryDetails(path: string): Promise<EntryDetails | null> {
    if (!Native.available) return null;

    return await Native.request<EntryDetails>("fs.operation.properties.details", {path});
}

/** Writes the details the user changed; omitted fields stay as they are. */
export async function saveEntryDetails(request: {
    path: string;
    tags?: string[];
    rating?: number;
    comment?: string;
}): Promise<boolean> {
    if (!Native.available) return false;

    const result = await Native.request<{ ok?: boolean }>("fs.operation.properties.details.set", request);
    return result?.ok !== false;
}
