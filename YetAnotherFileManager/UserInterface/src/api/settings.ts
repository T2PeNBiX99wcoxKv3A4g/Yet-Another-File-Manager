import {Native} from "@photino-net-utils/bridge";
import type {ViewDefaults} from "./files";

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
    /** Overview panels the user turned off in older versions; dropped when the layout is next saved. */
    overviewHidden: string[] | null;
    /** How many columns the overview lays its panels out in. */
    overviewColumns: number;
    /** Key combination per action, e.g. {closeTab: "ctrl+w"}. */
    shortcuts: Record<string, string> | null;
    /** Icon per quick-access folder, by path: a built-in name or "file:<path>". */
    placeIcons: Record<string, string> | null;
    /** Custom names for folders shown in Quick access, by path. */
    placeNames: Record<string, string> | null;
    /** Titles the user gave to overview panels, by panel id. */
    overviewTitles: Record<string, string> | null;
    /** "list" or "grid" per overview panel, by panel id. */
    overviewViews: Record<string, string> | null;
    /** Icon per overview panel, by panel id. */
    overviewIcons: Record<string, string> | null;
    /** Overview panels that also appear in the sidebar, by panel id. */
    overviewPinned: string[] | null;
    /** Keep yafm:// registered for this user; the host re-applies it at every launch. */
    linksEnabled: boolean | null;
    /** Register this app as the folder handler; off by default and per-user only. */
    defaultFileManager: boolean;
    /** Folders shown by a Quick access panel, by panel id. The factory "quick" panel uses quickAccess. */
    panelPlaces: Record<string, string[]> | null;
    /** Reopen the tabs that were open when the window was closed. */
    restoreTabs: boolean;
    /** The locations of those tabs: a folder path or a yafm:// link. */
    openTabs: string[] | null;
    /** Which of them had the focus. */
    activeTab: number | null;
    /** The view directories use when they have no settings of their own. */
    defaultView: ViewDefaults | null;
    /** Show a selection checkbox in front of every name. */
    showCheckboxes: boolean;
    /** Open a folder or file with one click instead of two. */
    openOnSingleClick: boolean;
    /** Ask before moving items to the recycle bin. Shift+Del always asks. */
    confirmDelete: boolean;
    /** Play a video preview's audio; off means muted. */
    previewVideoAudio: boolean;
    /** Start a video preview automatically; off means the user presses play. */
    previewVideoAutoplay: boolean;
    /** The main interactive colour, or null for the default blue. */
    accentColor: string | null;
    /** The gradient/highlight colour, or null for the default indigo. */
    secondaryColor: string | null;
    /** None, a built-in concept ("builtin:aurora:violet") or "file:<path>" for a custom image/video. */
    backgroundSource: string | null;
    /** Paths the user added to the background gallery; images, SVGs and videos. */
    backgroundCustom: string[];
    /** Background blur in pixels. */
    backgroundBlur: number;
    /** Background saturation, 100 = unchanged. */
    backgroundSaturation: number;
    /** Background brightness, 100 = unchanged. */
    backgroundBrightness: number;
    /** UI language such as "en" or "zh-TW"; null means English, "system" follows the OS. */
    language: string | null;
    /** Colour pairs the user saved; the built-in presets live in the settings page. */
    themePresets: ThemePreset[];
}

/** A named colour pair the user saved from the settings page. */
export interface ThemePreset {
    name: string;
    accent: string;
    secondary: string;
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
    placeNames: null,
    overviewTitles: null,
    overviewViews: null,
    overviewIcons: null,
    overviewPinned: null,
    linksEnabled: null,
    defaultFileManager: false,
    panelPlaces: null,
    restoreTabs: true,
    openTabs: null,
    activeTab: 0,
    defaultView: null,
    showCheckboxes: true,
    openOnSingleClick: false,
    confirmDelete: false,
    previewVideoAudio: false,
    previewVideoAutoplay: false,
    accentColor: null,
    secondaryColor: null,
    backgroundSource: null,
    backgroundCustom: [],
    backgroundBlur: 0,
    backgroundSaturation: 100,
    backgroundBrightness: 100,
    language: null,
    themePresets: [],
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
        placeNames: raw?.placeNames ?? null,
        overviewTitles: raw?.overviewTitles ?? null,
        overviewViews: raw?.overviewViews ?? null,
        overviewIcons: raw?.overviewIcons ?? null,
        overviewPinned: raw?.overviewPinned ?? null,
        linksEnabled: raw?.linksEnabled ?? null,
        defaultFileManager: raw?.defaultFileManager ?? false,
        panelPlaces: raw?.panelPlaces ?? null,
        restoreTabs: raw?.restoreTabs ?? true,
        openTabs: raw?.openTabs ?? null,
        activeTab: raw?.activeTab ?? 0,
        defaultView: raw?.defaultView ?? null,
        showCheckboxes: raw?.showCheckboxes ?? true,
        openOnSingleClick: raw?.openOnSingleClick ?? false,
        confirmDelete: raw?.confirmDelete ?? false,
        previewVideoAudio: raw?.previewVideoAudio ?? false,
        previewVideoAutoplay: raw?.previewVideoAutoplay ?? false,
        accentColor: raw?.accentColor ?? null,
        secondaryColor: raw?.secondaryColor ?? null,
        backgroundSource: raw?.backgroundSource ?? null,
        backgroundCustom: raw?.backgroundCustom ?? [],
        backgroundBlur: raw?.backgroundBlur ?? 0,
        backgroundSaturation: raw?.backgroundSaturation ?? 100,
        backgroundBrightness: raw?.backgroundBrightness ?? 100,
        language: raw?.language ?? null,
        themePresets: raw?.themePresets ?? [],
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
        placeNames: saved?.placeNames ?? settings.placeNames,
        overviewTitles: saved?.overviewTitles ?? settings.overviewTitles,
        overviewViews: saved?.overviewViews ?? settings.overviewViews,
        overviewIcons: saved?.overviewIcons ?? settings.overviewIcons,
        overviewPinned: saved?.overviewPinned ?? settings.overviewPinned,
        linksEnabled: saved?.linksEnabled ?? settings.linksEnabled,
        defaultFileManager: saved?.defaultFileManager ?? settings.defaultFileManager,
        panelPlaces: saved?.panelPlaces ?? settings.panelPlaces,
        restoreTabs: saved?.restoreTabs ?? settings.restoreTabs,
        openTabs: saved?.openTabs ?? settings.openTabs,
        activeTab: saved?.activeTab ?? settings.activeTab,
        defaultView: saved?.defaultView ?? settings.defaultView,
        showCheckboxes: saved?.showCheckboxes ?? settings.showCheckboxes,
        openOnSingleClick: saved?.openOnSingleClick ?? settings.openOnSingleClick,
        confirmDelete: saved?.confirmDelete ?? settings.confirmDelete,
        previewVideoAudio: saved?.previewVideoAudio ?? settings.previewVideoAudio,
        previewVideoAutoplay: saved?.previewVideoAutoplay ?? settings.previewVideoAutoplay,
        accentColor: saved?.accentColor ?? settings.accentColor,
        secondaryColor: saved?.secondaryColor ?? settings.secondaryColor,
        backgroundSource: saved?.backgroundSource ?? settings.backgroundSource,
        backgroundCustom: saved?.backgroundCustom ?? settings.backgroundCustom,
        backgroundBlur: saved?.backgroundBlur ?? settings.backgroundBlur,
        backgroundSaturation: saved?.backgroundSaturation ?? settings.backgroundSaturation,
        backgroundBrightness: saved?.backgroundBrightness ?? settings.backgroundBrightness,
        language: saved?.language ?? settings.language,
        themePresets: saved?.themePresets ?? settings.themePresets,
    };
}

/** Remembers the tabs that are open; the host puts them back on the next launch. */
export async function saveOpenTabs(tabs: string[], active: number): Promise<void> {
    if (!Native.available) return;

    await Native.request("app.tabs.set", {tabs, active});
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

