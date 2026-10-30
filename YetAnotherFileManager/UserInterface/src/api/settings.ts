import {Native} from "@photino-net-utils/bridge";

export interface AppSettings {
    systemIcons: boolean;
    customFolderIcons: boolean;
    writeDirectoryIndex: boolean;
    /** Extension (with the dot, lower case) to a built-in icon name or "file:<path>". */
    extensionIcons: Record<string, string>;
    /** Folders pinned to Quick access, or null for the well-known defaults. */
    quickAccess: string[] | null;
    /** How many recent folders the overview shows; 0 turns the section off. */
    recentLimit: number;
    /** Folders the gallery scans, or null for the Pictures folder. */
    galleryRoots: string[] | null;
    /** Order of the overview panels, or null for the default order. */
    overviewPanels: string[] | null;
    /** Overview panels the user turned off. */
    overviewHidden: string[] | null;
    /** How many columns the overview lays its panels out in. */
    overviewColumns: number;
    /** Key combination per action, e.g. {closeTab: "ctrl+w"}. */
    shortcuts: Record<string, string> | null;
    /** Icon per quick-access folder, by path: a built-in name or "file:<path>". */
    placeIcons: Record<string, string> | null;
    /** Titles the user gave to overview panels, by panel id. */
    overviewTitles: Record<string, string> | null;
    /** "list" or "grid" per overview panel, by panel id. */
    overviewViews: Record<string, string> | null;
}

const fallback: AppSettings = {
    systemIcons: false,
    customFolderIcons: false,
    writeDirectoryIndex: true,
    extensionIcons: {},
    quickAccess: null,
    recentLimit: 10,
    galleryRoots: null,
    overviewPanels: null,
    overviewHidden: null,
    overviewColumns: 1,
    shortcuts: null,
    placeIcons: null,
    overviewTitles: null,
    overviewViews: null,
};

/** The interface settings, persisted by the host. */
export async function getSettings(): Promise<AppSettings> {
    if (!Native.available) return fallback;

    const raw = await Native.request<Partial<AppSettings> | null>("app.settings");

    return {
        systemIcons: raw?.systemIcons ?? true,
        customFolderIcons: raw?.customFolderIcons ?? true,
        writeDirectoryIndex: raw?.writeDirectoryIndex ?? true,
        extensionIcons: raw?.extensionIcons ?? {},
        quickAccess: raw?.quickAccess ?? null,
        recentLimit: raw?.recentLimit ?? 10,
        galleryRoots: raw?.galleryRoots ?? null,
        overviewPanels: raw?.overviewPanels ?? null,
        overviewHidden: raw?.overviewHidden ?? null,
        overviewColumns: raw?.overviewColumns ?? 1,
        shortcuts: raw?.shortcuts ?? null,
        placeIcons: raw?.placeIcons ?? null,
        overviewTitles: raw?.overviewTitles ?? null,
        overviewViews: raw?.overviewViews ?? null,
    };
}

/** Stores the settings and answers with what the host actually kept. */
export async function saveSettings(settings: AppSettings): Promise<AppSettings> {
    if (!Native.available) return settings;

    const saved = await Native.request<Partial<AppSettings> | null>("app.settings.set", settings);

    return {
        systemIcons: saved?.systemIcons ?? settings.systemIcons,
        customFolderIcons: saved?.customFolderIcons ?? settings.customFolderIcons,
        writeDirectoryIndex: saved?.writeDirectoryIndex ?? settings.writeDirectoryIndex,
        extensionIcons: saved?.extensionIcons ?? settings.extensionIcons,
        quickAccess: saved?.quickAccess ?? settings.quickAccess,
        recentLimit: saved?.recentLimit ?? settings.recentLimit,
        galleryRoots: saved?.galleryRoots ?? settings.galleryRoots,
        overviewPanels: saved?.overviewPanels ?? settings.overviewPanels,
        overviewHidden: saved?.overviewHidden ?? settings.overviewHidden,
        overviewColumns: saved?.overviewColumns ?? settings.overviewColumns,
        shortcuts: saved?.shortcuts ?? settings.shortcuts,
        placeIcons: saved?.placeIcons ?? settings.placeIcons,
        overviewTitles: saved?.overviewTitles ?? settings.overviewTitles,
        overviewViews: saved?.overviewViews ?? settings.overviewViews,
    };
}

/**
 * Records the icon of one entry in its folder's index, or removes it when the source is null.
 * The record lives in the folder itself, so the data travels with the files.
 */
export async function setEntryIcon(directory: string, name: string, source: string | null): Promise<boolean> {
    if (!Native.available) return false;

    const data = await Native.request<{ ok: boolean }>("fs.icon.set", {directory, name, source});
    return data.ok;
}

/** Asks the host for a native "choose an icon" dialog. */
export async function pickIconFile(): Promise<string | null> {
    if (!Native.available) return null;

    const data = await Native.request<{ path: string | null }>("app.pickIcon");
    return data.path;
}

/** Asks the host for a native "choose a folder" dialog. */
export async function pickFolder(): Promise<string | null> {
    if (!Native.available) return null;

    const data = await Native.request<{ path: string | null }>("app.pickFolder");
    return data.path;
}
