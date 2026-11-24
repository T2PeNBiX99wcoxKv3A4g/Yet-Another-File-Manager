import {type ThemeMode, Native, loadSettingsDefaults} from "@photino-net-utils/bridge";
import {normalizeThemeMode} from "../theme";
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
    linksEnabled: boolean;
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
    /** Follow the operating system, or always use the light or dark palette. */
    themeMode: ThemeMode;
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
    /** Blur, saturation and brightness remembered for each background source. */
    backgroundLooks: Record<string, BackgroundLook>;
    /** Folders a delete must stop at; a trailing "**" includes the subtree. */
    protectedPaths: string[];
    /** Seconds the protected-delete confirmation stays disabled; never below 1. */
    deleteDelaySeconds: number;
    /** "system", "12", "24" or "custom" for every timestamp. */
    timeFormat: string;
    /** Pattern used when timeFormat is "custom". */
    timeFormatPattern: string;
    /** Show timestamps from the last few minutes as "3 minutes ago" and keep them current. */
    relativeTime: boolean;
    /** How recent a timestamp must be to be shown relative, in minutes. */
    relativeTimeWindowMinutes: number;
    /** Windows only: Properties opens the shell sheet instead of the app's own page. */
    systemPropertiesSheet: boolean;
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
    /** Serve the web shares over HTTPS with a self-signed certificate. */
    shareHttps: boolean;
    /** "none", "shortcut" or "task": how the app joins the user's login session. */
    startupMode: string;
    /** Start in the tray instead of showing the window at launch. */
    startHidden: boolean;
    /** Files and folders pinned to the overview's Favorites panel. */
    favorites: FavoriteEntry[];
    /** Suffix for a name that is already taken: "space_parentheses", "underscore" or "dot". */
    conflictNameStyle: string;
    /** "none", "overwrite", "rename" or "skip": what the conflict dialog starts with. */
    conflictDefaultAction: string;
    /** Reuse the answer from the last conflict dialog. */
    conflictRememberChoice: boolean;
    /** Ask before a new browser may use a web share. */
    shareAccessEnabled: boolean;
    /** Minutes an approved browser stays allowed. */
    shareApprovalMinutes: number;
    /** Seconds a refused browser stays blocked. */
    shareDenialSeconds: number;
    /** Give the heap back in the background once it stays above the threshold. */
    memoryAutoTrim: boolean;
    /** Managed heap size, in megabytes, before a background collection. */
    memoryTrimThresholdMb: number;
    /** Seconds between background memory checks. */
    memoryTrimIntervalSeconds: number;
    /** Collect the heap once the window is hidden to the tray. */
    memoryTrimOnTray: boolean;
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

/** The blur, saturation and brightness one background was last left at. */
export interface BackgroundLook {
    blur: number;
    saturation: number;
    brightness: number;
}

let defaults: AppSettings | null = null;

/**
 * The values a fresh install starts with. The shared bridge owns asking and remembering the
 * answer; this module only mirrors it once it arrives because {@link configDefaults} has to be
 * synchronous. There is deliberately no copy of the defaults in the interface.
 */
export async function getSettingDefaults(): Promise<AppSettings> {
    if (!Native.available) throw new Error("Settings need the host.");

    defaults ??= await loadSettingsDefaults<AppSettings>();

    return defaults;
}

/** The host defaults, once <see cref="getSettingDefaults" /> has finished. */
export function configDefaults(): AppSettings {
    if (!defaults)
        throw new Error("The settings defaults have not been loaded yet.");

    return defaults;
}

/** The interface settings, with every value the host left null taken from its own defaults. */
export async function getSettings(): Promise<AppSettings> {
    const known = await getSettingDefaults();
    const stored = await Native.request<Partial<AppSettings> | null>("settings.get");

    return fill(stored, known);
}

/**
 * Merges the stored values over the host's defaults. No value is invented here: changing
 * <c>AppSettings.Default</c> changes both the defaults endpoint and every answer below.
 */
function fill(raw: Partial<AppSettings> | null, known: AppSettings): AppSettings {
    const stored = Object.fromEntries(
        Object.entries(raw ?? {}).filter(([, value]) => value !== null && value !== undefined),
    ) as Partial<AppSettings>;

    const merged = {...known, ...stored} as AppSettings;
    merged.defaultView = raw?.defaultView
        ? {...(known.defaultView ?? {}), ...raw.defaultView} as ViewDefaults
        : known.defaultView;
    merged.themeMode = normalizeThemeMode(merged.themeMode);

    return merged;
}
/** The protected rules a fresh install starts with, for the "restore_defaults" button. */
export async function getDefaultProtectedPaths(): Promise<string[]> {
    if (!Native.available) return [];

    return (await getSettingDefaults()).protectedPaths;
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

    // The host answers with the values it really kept; anything it left out stays as sent.
    const kept = Object.fromEntries(
        Object.entries(saved ?? {}).filter(([, value]) => value !== null && value !== undefined),
    ) as Partial<AppSettings>;

    return {...settings, ...kept};
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

