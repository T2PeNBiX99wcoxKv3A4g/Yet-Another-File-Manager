import type {TabKind} from "./tabs";

/** A built-in page the address bar can point at. */
export type ViewKind = Exclude<TabKind, "files">;

/** The scheme the address bar and yafm:// links use for the app's own pages. */
export const ViewScheme = "yafm://";

const ViewNames: Record<string, ViewKind> = {
    overview: "home",
    home: "home",
    settings: "settings",
    recycle: "recycle",
    gallery: "gallery",
};

/** Whether a value is one of the app's own yafm:// locations. */
export function isViewLocation(value: string): boolean {
    const lower = value.toLowerCase();
    return lower.startsWith(ViewScheme) && !lower.startsWith(`${ViewScheme}share/`);
}

/** The address of one of the built-in pages. */
export function viewLocation(kind: ViewKind): string {
    return `${ViewScheme}${kind === "home" ? "overview" : kind}`;
}

/** Reads a yafm:// link, or answers null when the text is a folder path instead. */
export function viewKind(location: string): ViewKind | null {
    if (!isViewLocation(location)) return null;

    const name = location.slice(ViewScheme.length).replace(/\/+$/, "").toLowerCase();

    return ViewNames[name] ?? null;
}

/** What the address bar sends: a folder path or a yafm:// link. */
export function parseLocation(input: string): string | null {
    const value = input.trim();
    if (value.length === 0) return null;
    if (!isViewLocation(value)) return value;

    const kind = ViewNames[value.slice(ViewScheme.length).replace(/\/+$/, "").toLowerCase()];

    return kind ? viewLocation(kind) : null;
}
