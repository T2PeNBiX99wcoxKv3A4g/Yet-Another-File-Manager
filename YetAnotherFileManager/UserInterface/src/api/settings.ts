import {Native} from "@photino-net-utils/bridge";
import type {ViewDefaults} from "./files";
import type {AppSettingsGenerated} from "./settings.generated";

/**
 * Compile-time guard: the C# model and the interface below must declare the same keys. A setting
 * added on one side only leaves a key in one of the two sets, which turns this type from `never`
 * into that key, and the assignment stops compiling. Regenerate the interface with
 * `npm run build` (or `node scripts/generate-settings.mjs`).
 */
type DifferingSettingsKeys = Exclude<keyof AppSettings, keyof AppSettingsGenerated>
    | Exclude<keyof AppSettingsGenerated, keyof AppSettings>;
export const settingsKeysMatch: DifferingSettingsKeys extends never ? true : never = true;

export interface AppSettings {
    systemIcons: boolean;
    customFolderIcons: boolean;
    writeDirectoryIndex: boolean;
    directoryIndexBlacklist: string[];
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
    /** Offer this app for archive files; off by default and per-user only. */
    archiveHandler: boolean;
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
    /** Show ordinary hidden files; the title bar toggles this while the app runs. */
    showHidden: boolean | null;
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
    /** Show the floating file tray when a drag starts; off leaves it to the title bar button. */
    trayAutoShow: boolean;
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
    /** Folders a delete must stop at; a trailing "**" includes the subtree. */
    protectedPaths: string[];
    /** Seconds the protected-delete confirmation stays disabled; never below 1. */
    deleteDelaySeconds: number;
    /** "system", "12", "24" or "custom" for every timestamp. */
    timeFormat: string;
    /** Pattern used when timeFormat is "custom". */
    timeFormatPattern: string;
    /** Preferred width of the standalone folder/file picker window. */
    pickerWindowWidth: number;
    /** Preferred height of the standalone folder/file picker window. */
    pickerWindowHeight: number;
    /** "relative" or "absolute" for created symbolic links. */
    linkPathMode: string;
    /** Image or video shown above the overview panels; null hides it. */
    overviewBanner: string | null;
    /** Height of the overview banner in pixels. */
    overviewBannerHeight: number;
    /** Custom banner media the user added. */
    overviewBanners: string[];
    /** Vertical crop of the overview banner, 0 = top, 1 = bottom. */
    overviewBannerOffset: number;
    /** Global key combination that brings the window forward; empty disables it. */
    globalHotkey: string | null;
    /** UI language such as "en" or "zh-TW"; null means English, "system" follows the OS. */
    language: string | null;
    /** Colour pairs the user saved; the built-in presets live in the settings page. */
    themePresets: ThemePreset[];
    /** Font family per role id (see fonts.ts); missing roles use the built-in font. */
    fonts: Record<string, string>;
    /** "random" (the OS picks a free port) or "custom". */
    sharePortMode: string;
    /** Port used when sharePortMode is "custom"; null means a free port. */
    sharePort: number | null;
    /** "none", "shortcut" or "task": how the app joins the user's login session. */
    startupMode: string | null;
    /** Start in the tray instead of showing the window at launch. */
    startHidden: boolean;
    /** Files and folders pinned to the overview's Favorites panel. */
    favorites: FavoriteEntry[];
}

/** A file or folder pinned to the overview's Favorites panel. */
export interface FavoriteEntry {
    path: string;
    name: string;
    isDirectory: boolean;
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
    directoryIndexBlacklist: ["**/uv/cache/**", "**/scoop/buckets/**"],
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
    archiveHandler: false,
    panelPlaces: null,
    restoreTabs: true,
    openTabs: null,
    activeTab: 0,
    defaultView: null,
    showHidden: null,
    showCheckboxes: true,
    openOnSingleClick: false,
    confirmDelete: false,
    previewVideoAudio: false,
    previewVideoAutoplay: false,
    trayAutoShow: true,
    accentColor: null,
    secondaryColor: null,
    backgroundSource: null,
    backgroundCustom: [],
    backgroundBlur: 0,
    backgroundSaturation: 100,
    backgroundBrightness: 100,
    protectedPaths: [],
    deleteDelaySeconds: 5,
    timeFormat: "24",
    timeFormatPattern: "yyyy/MM/dd HH:mm",
    pickerWindowWidth: 1200,
    pickerWindowHeight: 800,
    linkPathMode: "relative",
    overviewBanner: null,
    overviewBannerHeight: 220,
    overviewBanners: [],
    overviewBannerOffset: 0.3,
    globalHotkey: null,
    language: null,
    themePresets: [],
    fonts: {},
    sharePortMode: "random",
    sharePort: null,
    startupMode: null,
    startHidden: false,
    favorites: [],
};

/** The interface settings, persisted by the host. */
export async function getSettings(): Promise<AppSettings> {
    if (!Native.available) return fallback;

    const raw = await Native.request<Partial<AppSettings> | null>("settings.get");

    return {
        systemIcons: raw?.systemIcons ?? true,
        customFolderIcons: raw?.customFolderIcons ?? true,
        writeDirectoryIndex: raw?.writeDirectoryIndex ?? true,
        directoryIndexBlacklist: raw?.directoryIndexBlacklist ?? ["**/uv/cache/**", "**/scoop/buckets/**"],
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
        archiveHandler: raw?.archiveHandler ?? false,
        panelPlaces: raw?.panelPlaces ?? null,
        restoreTabs: raw?.restoreTabs ?? true,
        openTabs: raw?.openTabs ?? null,
        activeTab: raw?.activeTab ?? 0,
        defaultView: raw?.defaultView ?? null,
        showHidden: raw?.showHidden ?? null,
        showCheckboxes: raw?.showCheckboxes ?? true,
        openOnSingleClick: raw?.openOnSingleClick ?? false,
        confirmDelete: raw?.confirmDelete ?? false,
        previewVideoAudio: raw?.previewVideoAudio ?? false,
        previewVideoAutoplay: raw?.previewVideoAutoplay ?? false,
        trayAutoShow: raw?.trayAutoShow ?? true,
        accentColor: raw?.accentColor ?? null,
        secondaryColor: raw?.secondaryColor ?? null,
        backgroundSource: raw?.backgroundSource ?? null,
        backgroundCustom: raw?.backgroundCustom ?? [],
        backgroundBlur: raw?.backgroundBlur ?? 0,
        backgroundSaturation: raw?.backgroundSaturation ?? 100,
        backgroundBrightness: raw?.backgroundBrightness ?? 100,
        protectedPaths: raw?.protectedPaths ?? [],
        deleteDelaySeconds: raw?.deleteDelaySeconds ?? 5,
        timeFormat: raw?.timeFormat ?? "24",
        timeFormatPattern: raw?.timeFormatPattern ?? "yyyy/MM/dd HH:mm",
        pickerWindowWidth: raw?.pickerWindowWidth ?? 1200,
        pickerWindowHeight: raw?.pickerWindowHeight ?? 800,
        linkPathMode: raw?.linkPathMode ?? "relative",
        overviewBanner: raw?.overviewBanner ?? null,
        overviewBannerHeight: raw?.overviewBannerHeight ?? 220,
        overviewBanners: raw?.overviewBanners ?? [],
        overviewBannerOffset: raw?.overviewBannerOffset ?? 0.3,
        globalHotkey: raw?.globalHotkey ?? null,
        language: raw?.language ?? null,
        themePresets: raw?.themePresets ?? [],
        fonts: raw?.fonts ?? {},
        sharePortMode: raw?.sharePortMode ?? "random",
        sharePort: raw?.sharePort ?? null,
        startupMode: raw?.startupMode ?? null,
        startHidden: raw?.startHidden ?? false,
        favorites: raw?.favorites ?? [],
    };
}

/** The protected rules a fresh install starts with, for the "Restore defaults" button. */
export async function getDefaultProtectedPaths(): Promise<string[]> {
    if (!Native.available) return [];

    const data = await Native.request<{ paths: string[] }>("app.protection.defaults");
    return data.paths ?? [];
}

export interface ArchiveStatus {
    /** A ProgId exists for this app. */
    registered: boolean;
    /** The registered executable is this exact build, not another copy. */
    pathMatches: boolean;
    /** The executable the registration points at, when there is one. */
    registeredPath: string | null;
}

export interface DefaultManagerStatus {
    registered: boolean;
    pathMatches: boolean;
    registeredPath: string | null;
}

const EmptyArchiveStatus: ArchiveStatus = {registered: false, pathMatches: false, registeredPath: null};
const EmptyDefaultManagerStatus: DefaultManagerStatus = {registered: false, pathMatches: false, registeredPath: null};

/** Reads the current user's folder handler and compares its path with this build. */
export async function getDefaultManagerStatus(): Promise<DefaultManagerStatus> {
    if (!Native.available) return EmptyDefaultManagerStatus;

    return await Native.request<DefaultManagerStatus>("app.defaultManager.status");
}

/** Turns the folder handler on or off and answers with what Windows now holds. */
export async function setDefaultManager(enabled: boolean): Promise<DefaultManagerStatus> {
    if (!Native.available) return EmptyDefaultManagerStatus;

    return await Native.request<DefaultManagerStatus>("app.defaultManager.set", {enabled});
}

/** Reads the current user's archive association and compares its path with this build. */
export async function getArchiveStatus(): Promise<ArchiveStatus> {
    if (!Native.available) return EmptyArchiveStatus;

    return await Native.request<ArchiveStatus>("app.archive.status");
}

/** Registers this executable for the archive formats the app can open. */
export async function registerArchiveHandler(): Promise<ArchiveStatus> {
    if (!Native.available) return EmptyArchiveStatus;

    return await Native.request<ArchiveStatus>("app.archive.register");
}

/** Removes this app's archive registration for the current user. */
export async function unregisterArchiveHandler(): Promise<ArchiveStatus> {
    if (!Native.available) return EmptyArchiveStatus;

    return await Native.request<ArchiveStatus>("app.archive.unregister");
}

/** Stores the settings and answers with what the host actually kept. */
export async function saveSettings(settings: AppSettings): Promise<AppSettings> {
    if (!Native.available) return settings;

    const saved = await Native.request<Partial<AppSettings> | null>("settings.save", settings);

    return {
        systemIcons: saved?.systemIcons ?? settings.systemIcons,
        customFolderIcons: saved?.customFolderIcons ?? settings.customFolderIcons,
        writeDirectoryIndex: saved?.writeDirectoryIndex ?? settings.writeDirectoryIndex,
        directoryIndexBlacklist: saved?.directoryIndexBlacklist ?? settings.directoryIndexBlacklist,
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
        archiveHandler: saved?.archiveHandler ?? settings.archiveHandler,
        panelPlaces: saved?.panelPlaces ?? settings.panelPlaces,
        restoreTabs: saved?.restoreTabs ?? settings.restoreTabs,
        openTabs: saved?.openTabs ?? settings.openTabs,
        activeTab: saved?.activeTab ?? settings.activeTab,
        defaultView: saved?.defaultView ?? settings.defaultView,
        showHidden: saved?.showHidden ?? settings.showHidden,
        showCheckboxes: saved?.showCheckboxes ?? settings.showCheckboxes,
        openOnSingleClick: saved?.openOnSingleClick ?? settings.openOnSingleClick,
        confirmDelete: saved?.confirmDelete ?? settings.confirmDelete,
        previewVideoAudio: saved?.previewVideoAudio ?? settings.previewVideoAudio,
        previewVideoAutoplay: saved?.previewVideoAutoplay ?? settings.previewVideoAutoplay,
        trayAutoShow: saved?.trayAutoShow ?? settings.trayAutoShow,
        accentColor: saved?.accentColor ?? settings.accentColor,
        secondaryColor: saved?.secondaryColor ?? settings.secondaryColor,
        backgroundSource: saved?.backgroundSource ?? settings.backgroundSource,
        backgroundCustom: saved?.backgroundCustom ?? settings.backgroundCustom,
        backgroundBlur: saved?.backgroundBlur ?? settings.backgroundBlur,
        backgroundSaturation: saved?.backgroundSaturation ?? settings.backgroundSaturation,
        backgroundBrightness: saved?.backgroundBrightness ?? settings.backgroundBrightness,
        protectedPaths: saved?.protectedPaths ?? settings.protectedPaths,
        deleteDelaySeconds: saved?.deleteDelaySeconds ?? settings.deleteDelaySeconds,
        timeFormat: saved?.timeFormat ?? settings.timeFormat,
        timeFormatPattern: saved?.timeFormatPattern ?? settings.timeFormatPattern,
        pickerWindowWidth: saved?.pickerWindowWidth ?? settings.pickerWindowWidth,
        pickerWindowHeight: saved?.pickerWindowHeight ?? settings.pickerWindowHeight,
        linkPathMode: saved?.linkPathMode ?? settings.linkPathMode,
        overviewBanner: saved?.overviewBanner ?? settings.overviewBanner,
        overviewBannerHeight: saved?.overviewBannerHeight ?? settings.overviewBannerHeight,
        overviewBanners: saved?.overviewBanners ?? settings.overviewBanners,
        overviewBannerOffset: saved?.overviewBannerOffset ?? settings.overviewBannerOffset,
        globalHotkey: saved?.globalHotkey ?? settings.globalHotkey,
        language: saved?.language ?? settings.language,
        themePresets: saved?.themePresets ?? settings.themePresets,
        fonts: saved?.fonts ?? settings.fonts,
        sharePortMode: saved?.sharePortMode ?? settings.sharePortMode,
        sharePort: saved?.sharePort ?? settings.sharePort,
        startupMode: saved?.startupMode ?? settings.startupMode,
        startHidden: saved?.startHidden ?? settings.startHidden,
        favorites: saved?.favorites ?? settings.favorites,
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

