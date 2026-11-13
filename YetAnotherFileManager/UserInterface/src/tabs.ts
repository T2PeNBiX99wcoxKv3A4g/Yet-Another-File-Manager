import type {Place} from "./api/files";
import type {LocalizationKey} from "@photino-net-utils/bridge";

/** What a tab shows: a folder, or one of the app's own pages. */
export type TabKind = "files" | "home" | "settings" | "recycle" | "gallery";

export interface TabInfo {
    id: string;
    kind: TabKind;
    title: string;
    path: string;
    /** The Quick access entry of a files tab, so its glyph matches the rest of the window. */
    place?: Place;
    /** The tab shows an archive or a folder inside one. */
    archive?: boolean;
    /** This tab is showing two folders, one in each pane. */
    split?: boolean;
    /** The second folder of a split tab, drawn after the separator. */
    partner?: { title: string; place?: Place };
}

/** Titles for the pages that are not a folder. */
export const viewTitles: Record<Exclude<TabKind, "files">, LocalizationKey> = {
    home: "overview",
    settings: "settings",
    recycle: "recycle_bin",
    gallery: "gallery",
};
