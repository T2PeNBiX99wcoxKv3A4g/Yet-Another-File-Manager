import type {Place} from "./api/files";

/** What a tab shows: a folder, or one of the app's own pages. */
export type TabKind = "files" | "home" | "settings" | "recycle" | "gallery";

export interface TabInfo {
    id: string;
    kind: TabKind;
    title: string;
    path: string;
    /** The Quick access entry of a files tab, so its glyph matches the rest of the window. */
    place?: Place;
}

/** Titles for the pages that are not a folder. */
export const viewTitles: Record<Exclude<TabKind, "files">, string> = {
    home: "Overview",
    settings: "Settings",
    recycle: "Recycle Bin",
    gallery: "Gallery",
};
