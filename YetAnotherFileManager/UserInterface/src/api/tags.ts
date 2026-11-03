import {Native} from "@photino-net-utils/bridge";

/** One tag the app has seen, with the number of folders that used it. */
export interface TagCatalogEntry {
    name: string;
    color: string | null;
    folders: number;
}

/** Every tag remembered across folders. */
export async function listTags(): Promise<TagCatalogEntry[]> {
    if (!Native.available) return [];

    const data = await Native.request<{ tags: TagCatalogEntry[] }>("app.tags");
    return data.tags;
}

/** Removes a tag from every folder index the catalogue knows, then from the catalogue. */
export async function deleteTag(name: string): Promise<boolean> {
    if (!Native.available || !name) return false;

    const data = await Native.request<{ ok: boolean }>("app.tags.delete", { name });
    return data.ok;
}

/** Renames a tag in every folder index the catalogue knows. */
export async function renameTag(name: string, next: string): Promise<boolean> {
    if (!Native.available || !name || !next) return false;

    const data = await Native.request<{ ok: boolean }>("app.tags.rename", { oldName: name, newName: next });
    return data.ok;
}
