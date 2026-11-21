import {Native} from "@photino-net-utils/bridge";
import {data as dataPlane} from "./data";

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

    try {
        const page = await dataPlane.readBlock("/history");
        return page.rows.map((row) => {
            const paths = text(row.paths);
            return {
                id: Number(row.id),
                label: String(row.label),
                paths: paths.length > 0 ? paths.split("\u001f") : [],
                at: Number(row.at),
                applied: Number(row.applied) !== 0,
                restorable: Number(row.restorable) !== 0,
            };
        });
    } catch {
        const data = await Native.request<{ entries: HistoryEntry[] }>("fs.history.list");
        return data.entries;
    }
}

export async function undoHistory(id: number): Promise<boolean> {
    if (!Native.available) return false;

    const data = await Native.request<{ ok: boolean }>("fs.history.undoTo", {id});
    return data.ok;
}

function text(value: string | number | undefined): string {
    return typeof value === "string" ? value : "";
}
