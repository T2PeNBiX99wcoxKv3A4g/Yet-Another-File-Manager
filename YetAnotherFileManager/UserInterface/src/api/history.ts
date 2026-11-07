import {Native} from "@photino-net-utils/bridge";

/** One entry of the session's undo history. */
export interface HistoryEntry {
    id: number;
    label: string;
    paths: string[];
    at: number;
    /** True while the operation is still applied; false for entries already undone. */
    applied: boolean;
    /** False when the files it would restore are no longer there. */
    restorable: boolean;
}

export async function listHistory(): Promise<HistoryEntry[]> {
    if (!Native.available) return [];

    const data = await Native.request<{ entries: HistoryEntry[] }>("fs.history.list");
    return data.entries;
}

export async function undoHistory(id: number): Promise<boolean> {
    if (!Native.available) return false;

    const data = await Native.request<{ ok: boolean }>("fs.history.undoTo", {id});
    return data.ok;
}
