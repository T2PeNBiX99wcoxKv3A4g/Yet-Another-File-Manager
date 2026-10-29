/** What a tab shows: a folder, or one of the app's own pages. */
export type TabKind = "files" | "home" | "settings" | "recycle";

export interface TabInfo {
    id: string;
    kind: TabKind;
    title: string;
    path: string;
}

/** Titles for the pages that are not a folder. */
export const viewTitles: Record<Exclude<TabKind, "files">, string> = {
    home: "Overview",
    settings: "Settings",
    recycle: "Recycle Bin",
};
