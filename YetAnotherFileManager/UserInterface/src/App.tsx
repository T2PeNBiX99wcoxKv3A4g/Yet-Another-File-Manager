import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import styled from "styled-components";
import {
    DefaultView,
    DefaultViewDefaults,
    type DirectoryListing,
    type DirectoryView,
    type Drive,
    extractArchive,
    extractArchiveEntry,
    listDirectory,
    listDirectoryCached,
    listDrives,
    listPlaces,
    listRecent,
    openFile,
    type Place,
    type RecentEntry,
    recordVisit,
    releaseArchives,
    type ResolvedView,
    saveDirectoryView,
    saveTags,
    toggleHiddenFiles,
    type ViewDefaults,
} from "./api/files";
import {type AppSettings, getSettings, saveOpenTabs, saveSettings} from "./api/settings";
import {type AppInfo, getAppInfo, getUpdateStatus, type UpdateCheck} from "./api/system";
import {
    type ClipboardFiles,
    compressPaths,
    copyPaths,
    deletePaths,
    getClipboardFiles,
    inspectPaths,
    newFile,
    newFolder,
    pasteInto,
    redoFileOperation,
    transferPaths,
    undoFileOperation,
} from "./api/operations";
import {clearTasks, listTasks, type TaskInfo} from "./api/tasks";
import {FileList} from "./components/FileList";
import {ContextMenu} from "./components/ContextMenu";
import {type PreviewInfo, PreviewPane} from "./components/PreviewPane";
import {FileTray, isPathDrag, type TrayItem} from "./components/FileTray";
import {FileMenu} from "./components/FileMenu";
import {CompressDialog} from "./components/CompressDialog";
import {Wallpaper} from "./components/Wallpaper";
import {ProtectedDeleteDialog} from "./components/ProtectedDeleteDialog";
import {MessageDialog} from "./components/MessageDialog";
import {PasswordDialog} from "./components/PasswordDialog";
import {type ProtectedPrompt, setProtectedAsker} from "./api/safety";
import {requestArchivePassword, showMessage} from "./api/dialogs";
import {clearIconCache, refreshIconCache} from "./api/icons";
import {
    clearArchivePassword,
    getArchivePassword,
    isArchivePasswordError,
    setArchivePassword
} from "./api/archivePassword";
import type {PageFind} from "./ui/textSearch";
import {FindBar} from "./components/FindBar";
import {EmptyFind, type FindState, matchesName} from "./find";
import {type QuickAccess, QuickAccessProvider, quickName, quickPlace} from "./quick";
import {
    ArchiveIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    GearIcon,
    GlobeIcon,
    ImageIcon,
    LockIcon,
    MenuIcon,
    OverviewIcon,
    PlusIcon,
    SearchIcon,
    TrashIcon,
} from "./components/Icons";
import {OverviewView} from "./components/OverviewView";
import {PathBar} from "./components/PathBar";
import {SelectMenu} from "./components/SelectMenu";
import {requestFolder} from "./folder-picker";
import {RecycleView} from "./components/RecycleView";
import {SettingsView} from "./components/SettingsView";
import {GalleryView} from "./components/GalleryView";
import {Sidebar} from "./components/Sidebar";
import {TitleBar} from "./components/TitleBar";
import {TooltipLayer} from "./components/TooltipLayer";
import {type TabKind, viewTitles} from "./tabs";
import {buildPanels} from "./panels";
import {Native, ResizeHandles, useWindowCorners, type LocalizationKey, type Translate, useTranslation} from "@photino-net-utils/bridge";
import {
    applyTimeFormat,
    archiveFile,
    baseName,
    formatBytes,
    isArchiveLocation,
    isArchivePath,
    isZipArchiveLocation,
    normalizePath,
    plural,
    samePath
} from "./utils/format";
import {applyTheme} from "./theme";
import {applyFonts} from "./fonts";
import {readStoredJson, readStoredNumber, writeStoredJson, writeStoredNumber} from "./storage";
import {
    isShareLocation,
    listSharedDirectory,
    openSharedFile,
    parseShareLocation,
    respondSharePair,
    shareLocation
} from "./api/share";
import {SharePairDialog} from "./components/SharePairDialog";
import {fadeInStyle, pageInStyle, splitLineInStyle} from "./ui/motion";
import {
    comboOf,
    DefaultShortcuts,
    isTyping,
    prettyShortcut,
    setClickModifier,
    type ShortcutMap,
    wantsNewTab,
} from "./shortcuts";
import {parseLocation, viewKind, type ViewKind, viewLocation} from "./views";

/**
 * Every tab is a list of locations; a location is either a folder path or a <c>yafm://</c> link to
 * one of the built-in pages. Back and forward therefore work the same everywhere, and the address
 * bar can be used on any page.
 */
interface Tab {
    id: string;
    listing: DirectoryListing | null;
    loading: boolean;
    error: string | null;
    history: string[];
    index: number;
    /** Nothing has been opened in it yet, so a path arriving from the host can take it over. */
    fresh: boolean;
    /** This directory's own view settings; null inherits the app's default. */
    view: DirectoryView | null;
    /** The hidden tab that supplies the right pane while this tab is split. */
    splitWith?: string;
    /** Removed from the tab bar; it only exists as the second pane of another tab. */
    hidden?: boolean;
}

let nextTabId = 0;

/** Launch paths already opened once; a retried ready message must not open them again. */
const OpenedStartupPaths = new Set<string>();

/** Tells the host that a launch path was handled, so it stops re-sending it. */
function acknowledgeStartup(path: string) {
    OpenedStartupPaths.add(path);
    Native.send({type: "app.navigate.done", payload: {path}});
}

/** How many closed tabs Ctrl+Shift+T can walk back through. */
const ClosedTabLimit = 20;

/**
 * The code pages an archive can be read with. 0 lets the archive's own metadata decide; the rest
 * force a legacy code page for the file names, which is what Japanese ZIPs usually need.
 */
const ArchiveEncodings: { value: string; label: LocalizationKey }[] = [
    {value: "0", label: "Auto"},
    {value: "932", label: "Japanese (CP932)"},
    {value: "936", label: "Simplified Chinese (CP936)"},
    {value: "950", label: "Traditional Chinese (CP950)"},
    {value: "949", label: "Korean (CP949)"},
    {value: "1252", label: "Western (CP1252)"},
    {value: "1250", label: "Central European (CP1250)"},
    {value: "1251", label: "Cyrillic (CP1251)"},
    {value: "1254", label: "Turkish (CP1254)"},
    {value: "1253", label: "Greek (CP1253)"},
    {value: "1256", label: "Arabic (CP1256)"},
    {value: "1255", label: "Hebrew (CP1255)"},
    {value: "1257", label: "Baltic (CP1257)"},
    {value: "874", label: "Thai (CP874)"},
    {value: "65001", label: "UTF-8"},
];

function locationOf(tab: Tab): string {
    return tab.history[tab.index] ?? viewLocation("home");
}

function kindOf(tab: Tab): TabKind {
    return viewKind(locationOf(tab)) ?? "files";
}

/** The folder a tab shows, or an empty string when it shows a built-in page. */
function folderOf(tab: Tab): string {
    const location = locationOf(tab);

    return viewKind(location) ? "" : tab.listing?.path || location;
}

/** The tab a window-level action should use: the focused pane in split view, else the active tab. */
function focusedTabIdOf(state: { tabs: Tab[]; activeId: string; activePane: "primary" | "secondary" }): string {
    const active = state.tabs.find((tab) => tab.id === state.activeId);
    if (state.activePane !== "secondary" || !active?.splitWith || kindOf(active) !== "files")
        return state.activeId;

    const pane = state.tabs.find((tab) => tab.id === active.splitWith);
    return pane?.id ?? state.activeId;
}

/** The tray is fixed-position, so a saved spot from a larger window still has to stay reachable. */
function clampTrayPosition(position: { x: number; y: number }): { x: number; y: number } {
    return {
        x: Math.max(0, Math.min(position.x, window.innerWidth - 320)),
        y: Math.max(38, Math.min(position.y, window.innerHeight - 100)),
    };
}

/** The directory's own mode/size/sort sit on top of the window-wide defaults; columns are global. */
function resolveView(tab: Tab, defaults: ViewDefaults): ResolvedView {
    return {
        mode: tab.view?.mode ?? defaults.mode,
        iconSize: tab.view?.iconSize || defaults.iconSize || DefaultView.iconSize,
        gridSize: tab.view?.gridSize || defaults.gridSize || DefaultView.gridSize,
        sort: tab.view?.sort ?? DefaultView.sort,
        sortDescending: tab.view?.sortDescending ?? DefaultView.sortDescending,
        columns: defaults.columns ?? DefaultViewDefaults.columns ?? [],
    };
}

function createTab(location = viewLocation("home")): Tab {
    nextTabId += 1;

    return {
        id: `tab-${nextTabId}`,
        listing: null,
        loading: !viewKind(location),
        error: null,
        history: [location],
        index: 0,
        fresh: true,
        view: null,
    };
}

function message(cause: unknown): string {
    return cause instanceof Error ? cause.message : String(cause);
}


/** The parent of a folder path, even before its listing has arrived. */
function parentOf(path: string): string | null {
    const share = parseShareLocation(path);

    if (share) {
        if (share.path.length === 0)
            return null;

        const parent = share.path.split("/").slice(0, -1).join("/");
        return shareLocation(share.deviceId, share.shareId, parent);
    }

    const trimmed = path.replace(/[\\/]+$/, "");
    if (trimmed.length === 0)
        return null;

    const cut = Math.max(trimmed.lastIndexOf("\\"), trimmed.lastIndexOf("/"));
    if (cut < 0)
        return null;

    // C:\foo -> C:\; \\server\share\folder -> \\server\share
    if (cut === 2 && trimmed[1] === ":")
        return `${trimmed.slice(0, 2)}\\`;

    return trimmed.slice(0, cut);
}

/** The name an archive gets when it is extracted into a folder of its own. */
function archiveStem(path: string): string {
    const name = baseName(path);
    const lower = name.toLowerCase();
    const compound = [".tar.gz", ".tar.bz2", ".tar.xz"].find((extension) => lower.endsWith(extension));

    if (compound)
        return name.slice(0, -compound.length);

    const dot = name.lastIndexOf(".");
    return dot > 0 ? name.slice(0, dot) : name;
}

/** The remembered password for whatever archive this virtual path belongs to. */
function archivePasswordFor(path: string): string | undefined {
    return isArchiveLocation(path) ? getArchivePassword(path) : undefined;
}

/** What the folder adds up to: files right away, folders once their size has been measured. */
function statusLine(t: Translate, listing: DirectoryListing): string {
    const total = listing.entries.reduce((sum, entry) => sum + (entry.isDirectory
        ? listing.folderSizes[entry.name] ?? 0
        : Math.max(entry.size, 0)), 0);

    return plural(t, listing.entries.length, "1 item · {size}", "{count} items · {size}",
        {size: formatBytes(total)});
}

export default function App() {
    const t = useTranslation();
    const [tabs, setTabs] = useState<Tab[]>(() => [createTab()]);
    const [activeId, setActiveId] = useState(() => tabs[0].id);
    const [sharePair, setSharePair] = useState<{ requestId: string; deviceName: string; code: string } | null>(null);
    const [splitRatio, setSplitRatio] = useState(() => {
        const saved = readStoredNumber("yafm.split.ratio", 0.5);
        return saved >= 0.2 && saved <= 0.8 ? saved : 0.5;
    });
    const [places, setPlaces] = useState<Place[]>([]);
    const [drives, setDrives] = useState<Drive[]>([]);
    const [appInfo, setAppInfo] = useState<AppInfo | null>(null);
    const [update, setUpdate] = useState<UpdateCheck | null>(null);
    const [settingsFocus, setSettingsFocus] = useState<string | null>(null);
    const corners = useWindowCorners();
    const [find, setFind] = useState<FindState>(EmptyFind);
    const [findIndex, setFindIndex] = useState(0);
    const [findFocus, setFindFocus] = useState(0);
    const [selectMatchesToken, setSelectMatchesToken] = useState(0);
    const [viewFind, setViewFind] = useState<FindState>(EmptyFind);
    const [viewFindFocus, setViewFindFocus] = useState(0);
    const [viewFindIndex, setViewFindIndex] = useState(0);
    const [viewFindTotal, setViewFindTotal] = useState(0);
    const [archiveEncoding, setArchiveEncoding] = useState(0);
    const archiveEncodingRef = useRef(archiveEncoding);
    archiveEncodingRef.current = archiveEncoding;
    const [recent, setRecent] = useState<RecentEntry[]>([]);
    const [recentLimit, setRecentLimit] = useState(10);
    const [settings, setSettings] = useState<AppSettings | null>(null);
    /** Normalized favorite paths; the context menu offers Remove for entries already pinned. */
    const favoritePaths = useMemo(
        () => (settings?.favorites ?? []).map((entry) => normalizePath(entry.path)),
        [settings?.favorites]);
    const [historyVersion, setHistoryVersion] = useState(0);
    const [shortcuts, setShortcuts] = useState<ShortcutMap>(DefaultShortcuts);
    const [settingsVersion, setSettingsVersion] = useState(0);
    const [locationFocus, setLocationFocus] = useState(0);
    const [visibilityVersion, setVisibilityVersion] = useState(0);
    const [detailsVisible, setDetailsVisible] = useState(true);
    const [detailsWidth, setDetailsWidth] = useState(() => {
        const saved = readStoredNumber("yafm.preview.width", 320);
        return saved >= 220 ? saved : 320;
    });
    const [primaryPreview, setPrimaryPreview] = useState<PreviewInfo | null>(null);
    const [secondaryPreview, setSecondaryPreview] = useState<PreviewInfo | null>(null);
    const [activePane, setActivePane] = useState<"primary" | "secondary">("primary");
    const [createMenu, setCreateMenu] = useState<{
        x: number;
        y: number;
        directory: string;
        refresh: () => void;
    } | null>(null);
    const [extractMenu, setExtractMenu] = useState<{ x: number; y: number } | null>(null);
    const [pathMenu, setPathMenu] = useState<{ x: number; y: number; path: string } | null>(null);
    const [pathCompress, setPathCompress] = useState<{ paths: string[]; name: string } | null>(null);
    const [selectionCounts, setSelectionCounts] = useState({primary: 0, secondary: 0});
    const [selectionMenus, setSelectionMenus] = useState<{
        primary: { token: number; x: number; y: number } | null;
        secondary: { token: number; x: number; y: number } | null;
    }>({primary: null, secondary: null});
    const [renameRequest, setRenameRequest] = useState<{
        directory: string;
        path: string;
        token: number;
    } | null>(null);
    const [tasks, setTasks] = useState<TaskInfo[]>([]);
    const [activityOpen, setActivityOpen] = useState(false);
    const tasksRef = useRef<TaskInfo[]>([]);
    /** The tabs closed in this session, newest last, for Ctrl+Shift+T. */
    const closedTabs = useRef<string[]>([]);
    const [clipboardItems, setClipboardItems] = useState<TrayItem[]>([]);
    const [clipboardMove, setClipboardMove] = useState(false);

    // Rows that were cut carry a badge, the way the link and archive hints sit beside a name.
    const cutPaths = useMemo(
        () => clipboardMove ? new Set(clipboardItems.map((entry) => entry.path)) : new Set<string>(),
        [clipboardItems, clipboardMove],
    );
    const [trayVisible, setTrayVisible] = useState(false);
    const [trayItems, setTrayItems] = useState<TrayItem[]>([]);
    const [protectedDelete, setProtectedDelete] = useState<{
        id: number;
        prompt: ProtectedPrompt;
        resolve: (allowed: boolean) => void;
    } | null>(null);
    const protectedDeleteId = useRef(0);
    const [trayPosition, setTrayPosition] = useState<{ x: number; y: number }>(() => {
        const saved = readStoredJson<{ x?: number; y?: number }>("yafm.tray.position");

        if (typeof saved?.x === "number" && typeof saved?.y === "number")
            return clampTrayPosition({x: saved.x, y: saved.y});

        return clampTrayPosition({x: Math.max(20, window.innerWidth - 340), y: 110});
    });

    /** Opens the tray where it can actually be reached, even after the window shrank. */
    const showTray = useCallback(() => {
        setTrayPosition((current) => clampTrayPosition(current));
        setTrayVisible(true);
    }, []);

    const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
    const kind = kindOf(active);
    const location = locationOf(active);
    const activeFolder = folderOf(active);
    const activeParent = kind === "files" ? active.listing?.parent ?? parentOf(activeFolder) : null;
    const secondary = active.splitWith
        ? tabs.find((tab) => tab.id === active.splitWith)
        : undefined;
    const splitActive = kind === "files" && secondary !== undefined;
    const secondaryFolder = secondary ? folderOf(secondary) : "";
    const secondaryParent = secondary ? secondary.listing?.parent ?? parentOf(secondaryFolder) : null;

    /** The pane the window-level actions target: while split, the one that was clicked last. */
    const focusedTab = splitActive && secondary && activePane === "secondary" ? secondary : active;

    // The directory's own mode/size/sort sit on top of the window-wide defaults; columns are global.
    const viewDefaults = settings?.defaultView ?? DefaultViewDefaults;
    const view: ResolvedView = resolveView(focusedTab, viewDefaults);

    useEffect(() => {
        applyTheme(settings?.accentColor, settings?.secondaryColor);
    }, [settings?.accentColor, settings?.secondaryColor]);

    // Font choices live on the root element, so every component picks them up through its role.
    useEffect(() => {
        applyFonts(settings?.fonts);
    }, [settings?.fonts]);

    // Dates are formatted by a tiny shared module, so it has to follow the settings before render.
    useEffect(() => {
        applyTimeFormat(settings?.timeFormat, settings?.timeFormatPattern);
    }, [settings?.timeFormat, settings?.timeFormatPattern]);

    // A wallpaper turns the opaque window surfaces transparent; the layer sits behind all of them.
    useEffect(() => {
        document.documentElement.classList.toggle("has-wallpaper", Boolean(settings?.backgroundSource));
        return () => document.documentElement.classList.remove("has-wallpaper");
    }, [settings?.backgroundSource]);

    // Deletes that touch a protected path ask here; the backend holds the operation meanwhile.
    useEffect(() => {
        setProtectedAsker((prompt) => new Promise<boolean>((resolve) => {
            setProtectedDelete({id: ++protectedDeleteId.current, prompt, resolve});
        }));

        return () => setProtectedAsker(null);
    }, []);

    // Choosing a tab in the title bar puts the focus back on the left pane.
    useEffect(() => {
        setActivePane("primary");
    }, [activeId]);

    // A search belongs to the page it was opened on.
    useEffect(() => {
        setViewFind(EmptyFind);
        setViewFindIndex(0);
        setViewFindTotal(0);
    }, [kind]);

    // A new query starts at the first match; a shrinking result list keeps the index in range.
    useEffect(() => {
        setViewFindIndex(0);
    }, [viewFind.query, viewFind.matchCase, viewFind.regex]);

    useEffect(() => {
        setViewFindIndex((index) => viewFindTotal === 0 ? 0 : Math.min(index, viewFindTotal - 1));
    }, [viewFindTotal]);
    // Hard-link counts open a handle per file, so they are only read while the column is visible.
    const includeLinks = view.columns.includes("linkCount");

    /**
     * Every folder that lives in a Quick access panel, with the name and icon that panel shows.
     * The path bar folds the path into the same entry, whether the panel is the factory one or a
     * hand-made one — and a folder that is no longer in any panel stops being folded.
     */
    const quickPlaces = useMemo(() => {
        const entries: Record<string, Place> = {};
        const panels = buildPanels(settings);
        const overrides: Record<string, string> = {};

        for (const [path, name] of Object.entries(settings?.placeNames ?? {}))
            overrides[normalizePath(path)] = name;

        // The sidebar's Quick access list is global; the other quick panels add their own folders.
        for (const place of places)
            entries[normalizePath(place.path)] = place;

        for (const panel of panels) {
            if (panel.kind !== "quick" || panel.id === "quick") continue;

            for (const path of panel.places ?? []) {
                const key = normalizePath(path);
                const known = places.find((place) => normalizePath(place.path) === key);

                entries[key] = {
                    name: overrides[key] ?? known?.name ?? (baseName(path) || path),
                    path,
                    kind: "folder",
                    icon: known?.icon ?? settings?.placeIcons?.[path] ?? null,
                };
            }
        }

        return entries;
    }, [places, settings]);

    /** Quick access only lends its names and icons while the file types use the app's own glyphs. */
    const quickAccess: QuickAccess = useMemo(() => ({
        places: quickPlaces,
        useIcons: settings?.systemIcons === false,
    }), [quickPlaces, settings?.systemIcons]);

    /** The preview panel under the list is a window-wide setting. */
    const showImages = settings?.defaultView?.showImages ?? true;
    const imageStripHeight = settings?.defaultView?.imageStripHeight ?? DefaultViewDefaults.imageStripHeight;

    const viewIcon = kind === "home" ? <OverviewIcon size={13}/>
        : kind === "settings" ? <GearIcon size={13}/>
            : kind === "recycle" ? <TrashIcon size={13}/>
                : kind === "gallery" ? <ImageIcon size={13}/>
                    : undefined;

    // ---- search ----

    const searching = find.open && find.query.length > 0;

    /** The entries the current query matches, in list order; the find bar walks this. */
    const findHits = useMemo(
        () => searching && focusedTab.listing
            ? focusedTab.listing.entries
                .filter((entry) => matchesName(
                    entry.isDirectory ? quickName(quickAccess, entry.fullPath, entry.name) : entry.name,
                    find))
                .map((entry) => entry.fullPath)
            : [],
        [searching, find, focusedTab.listing, quickAccess],
    );

    // A new query starts again at the first hit; stepping through them leaves the query alone.
    useEffect(() => {
        setFindIndex(0);
    }, [find.query, find.matchCase, find.regex, focusedTab.listing?.path]);

    const findCurrent = findHits.length === 0 ? -1 : Math.min(findIndex, findHits.length - 1);

    const resetFind = useCallback(() => {
        setFind((current) => ({...current, open: false, query: ""}));
        setFindIndex(0);
    }, []);

    const openFind = useCallback(() => {
        setFind((current) => ({...current, open: true}));
        setFindFocus((token) => token + 1);
    }, []);

    const openViewFind = useCallback(() => {
        setViewFind((current) => ({...current, open: true}));
        setViewFindFocus((token) => token + 1);
    }, []);

    const closeViewFind = useCallback(() => {
        setViewFind(EmptyFind);
        setViewFindIndex(0);
        setViewFindTotal(0);
    }, []);

    const stepViewFind = useCallback((delta: number) => {
        setViewFindIndex((index) => viewFindTotal === 0
            ? 0
            : (Math.min(index, viewFindTotal - 1) + delta + viewFindTotal) % viewFindTotal);
    }, [viewFindTotal]);

    /** Typing in a folder opens the search with what was typed, the way a file manager jumps to a name. */
    const startFind = useCallback((text: string) => {
        setFind((current) => ({
            ...current,
            open: true,
            query: current.open ? current.query + text : text,
        }));
        setFindFocus((token) => token + 1);
    }, []);

    const stepFind = useCallback((delta: number) => {
        setFindIndex((index) => {
            if (findHits.length === 0) return 0;

            return (Math.min(index, findHits.length - 1) + delta + findHits.length) % findHits.length;
        });
    }, [findHits.length]);

    // Handlers that outlive a render (the native event subscription) read the latest state here.
    const stateRef = useRef({tabs, activeId, activePane});
    stateRef.current = {tabs, activeId, activePane};

    const settingsRef = useRef(settings);
    settingsRef.current = settings;

    // The tabs from the last launch are restored once; a path from the host waits until then so it
    // can be added after them instead of replacing them.
    const restored = useRef(false);
    const pendingStartup = useRef<string[]>([]);

    const patch = useCallback((id: string, update: (tab: Tab) => Partial<Tab>) => {
        setTabs((current) => current.map((tab) => tab.id === id ? {...tab, ...update(tab)} : tab));
    }, []);

    // One token per tab, so a slow folder can never paint over the newer one the user just opened.
    const loads = useRef(new Map<string, number>());

    const beginLoad = useCallback((id: string): (() => boolean) => {
        const token = (loads.current.get(id) ?? 0) + 1;
        loads.current.set(id, token);
        return () => loads.current.get(id) === token;
    }, []);

    /**
     * Tells the index which folder the window is showing. It is sent before the folder is listed,
     * so its index is read first and its own listing is written only once the user moves on.
     */
    const reportFocus = useCallback((id: string, path?: string) => {
        if (!Native.available || !path || id !== focusedTabIdOf(stateRef.current)) return;

        Native.send({type: "fs.focus", payload: {path}});
    }, []);

    /**
     * Paints the listing saved the last time the folder was opened, so the window never waits on the
     * disk to show something. The live listing takes over right after.
     */
    const showCached = useCallback(async (id: string, path: string | undefined, current: () => boolean) => {
        if (path && isShareLocation(path)) return;

        try {
            const cached = await listDirectoryCached(path, includeLinks);
            if (!current() || !cached.listing) return;

            // The live listing may have arrived while the cache was being read; never paint over it.
            patch(id, (tab) => tab.loading
                ? {listing: cached.listing, view: cached.listing!.view ?? null}
                : {});
        } catch {
            // The cache is best effort; the live listing is still on its way.
        }
    }, [includeLinks, patch]);

    /** Opens a folder in a tab, recording it in that tab's history. */
    const load = useCallback(async (id: string, path?: string, keepFresh = false) => {
        const current = beginLoad(id);

        resetFind();

        // The index hears about the folder before it is listed, so the folder being opened is
        // already the first priority by the time its index is read.
        reportFocus(id, path);

        // A refresh already has the same folder on screen, so the saved listing could only be older.
        const paintCache = !keepFresh || !stateRef.current.tabs.find((tab) => tab.id === id)?.listing;

        // A navigation clears the folder that was on screen so it cannot linger over the new one;
        // the saved listing fills the gap immediately. Its history entry is written now, not after
        // the disk answers, so Back/Up stay usable while a slow folder is still loading.
        const navigating = !keepFresh && path !== undefined;

        patch(id, (tab) => {
            if (!navigating)
                return {
                    listing: keepFresh ? tab.listing : null,
                    loading: true,
                    error: null,
                    fresh: keepFresh && tab.fresh,
                };

            const current = tab.history[tab.index];
            const stays = current !== undefined && samePath(current, path);
            const history = stays
                ? tab.history
                : [...tab.history.slice(0, tab.index + 1), path];

            return {
                listing: null,
                loading: true,
                error: null,
                fresh: false,
                history,
                index: stays ? tab.index : tab.index + 1,
            };
        });

        try {
            // The cached read and the disk walk are independent; starting both at once means the
            // live listing no longer waits for the cache to be read and serialized.
            if (paintCache)
                void showCached(id, path, current);

            const listing = path && isShareLocation(path)
                ? await listSharedDirectory(path)
                : await listDirectory(path, true, includeLinks, archiveEncodingRef.current,
                    path ? archivePasswordFor(path) : undefined);
            if (!current()) return;

            patch(id, (tab) => ({
                listing,
                view: listing.view ?? null,
                loading: false,
                fresh: false,
                history: navigating
                    ? tab.history.map((entry, index) => index === tab.index ? listing.path : entry)
                    : tab.history,
                index: tab.index,
            }));

            // A refresh shows the same folder again; only a real navigation counts as a visit.
            if (!keepFresh && !isShareLocation(listing.path))
                void recordVisit(listing.path).then(() => setHistoryVersion((version) => version + 1));
        } catch (cause) {
            if (!current()) return;

            // A missing or unreadable folder still gets a listing so the columns, the address bar
            // and Up keep working. The body shows the error where an empty folder would show its
            // "empty" note, instead of dropping the whole file view.
            const tabBefore = stateRef.current.tabs.find((item) => item.id === id);
            const requested = path && path.length > 0 ? path : tabBefore ? folderOf(tabBefore) : "";
            const parent = parentOf(requested);
            const failure = message(cause);

            if (requested && isArchivePasswordError(failure)) {
                const archive = archiveFile(requested);
                const typed = await requestArchivePassword(archive, !!getArchivePassword(archive));

                if (typed) {
                    setArchivePassword(archive, typed);
                    if (current()) void load(id, path, keepFresh);
                    return;
                }
            }

            patch(id, (tab) => ({
                listing: {
                    path: requested,
                    parent,
                    entries: [],
                    folderSizes: {},
                    view: null,
                    tags: {},
                    tagColors: {},
                    allTags: [],
                    counts: {},
                },
                loading: false,
                error: failure,
                ...(keepFresh
                    ? {}
                    : {
                        history: [...tab.history.slice(0, tab.index + 1), requested],
                        index: tab.index + 1,
                    }),
            }));
        }
    }, [beginLoad, includeLinks, patch, reportFocus, resetFind, showCached]);

    /** Goes to a location: a folder is listed, a yafm:// page is simply shown. */
    const openLocation = useCallback((id: string, target: string) => {
        const parsed = parseLocation(target);
        if (!parsed) return;

        if (viewKind(parsed)) {
            resetFind();
            beginLoad(id);
            patch(id, (tab) => ({
                listing: null,
                loading: false,
                error: null,
                fresh: false,
                history: [...tab.history.slice(0, tab.index + 1), parsed],
                index: tab.index + 1,
            }));
            return;
        }

        void load(id, parsed);
    }, [beginLoad, load, patch, resetFind]);

    /** Shows a location already in the tab's history, without adding it again. */
    const goTo = useCallback(async (id: string, target: string, index: number) => {
        resetFind();

        if (viewKind(target)) {
            beginLoad(id);
            patch(id, () => ({index, listing: null, loading: false, error: null}));
            return;
        }

        const current = beginLoad(id);

        // Same as a navigation: the folder being shown becomes the index's first priority at once.
        reportFocus(id, target);

        // Same as a navigation: the new folder starts empty and the saved listing fills it.
        patch(id, () => ({index, listing: null, loading: true, error: null}));

        try {
            // The saved listing and the disk walk run side by side; waiting for the cache first
            // made every step back wait for the index before the folder could even be walked.
            if (!isShareLocation(target))
                void showCached(id, target, current);

            const listing = isShareLocation(target)
                ? await listSharedDirectory(target)
                : await listDirectory(target, true, includeLinks, archiveEncodingRef.current,
                    archivePasswordFor(target));
            if (!current()) return;

            patch(id, () => ({listing, view: listing.view ?? null, loading: false}));
        } catch (cause) {
            if (!current()) return;

            const failure = message(cause);

            if (isArchivePasswordError(failure)) {
                const archive = archiveFile(target);
                const typed = await requestArchivePassword(archive, !!getArchivePassword(archive));

                if (typed) {
                    setArchivePassword(archive, typed);
                    if (current()) void goTo(id, target, index);
                    return;
                }
            }

            patch(id, () => ({
                listing: {
                    path: target,
                    parent: parentOf(target),
                    entries: [],
                    folderSizes: {},
                    view: null,
                    tags: {},
                    tagColors: {},
                    allTags: [],
                    counts: {},
                },
                loading: false,
                error: message(cause),
            }));
        }
    }, [beginLoad, includeLinks, patch, reportFocus, resetFind, showCached]);

    const openFiles = useCallback((path?: string, activate = true) => {
        const tab = createTab(path ?? viewLocation("home"));

        setTabs((current) => [...current, tab]);
        if (activate) setActiveId(tab.id);
        if (path && !viewKind(path)) void load(tab.id, path);

        return tab.id;
    }, [load]);

    /** Reloads every file tab showing this folder, so two tabs at one path never drift apart. */
    const refreshFolderTabs = useCallback((path: string) => {
        for (const tab of stateRef.current.tabs) {
            if (kindOf(tab) !== "files" || !samePath(folderOf(tab), path))
                continue;

            void load(tab.id, path, true);
        }
    }, [load]);

    /**
     * Renames one entry in every tab that shows it. The directory read that follows confirms it, but
     * the row already points at the new path, so a quick second rename cannot name a gone entry.
     */
    const renameInListings = useCallback((from: string, to: string) => {
        const name = baseName(to);

        for (const tab of stateRef.current.tabs) {
            if (!tab.listing?.entries.some((entry) => samePath(entry.fullPath, from)))
                continue;

            patch(tab.id, (current) => {
                const listing = current.listing;
                if (!listing)
                    return {};

                const entries = listing.entries.map((entry) =>
                    samePath(entry.fullPath, from) ? {...entry, name, fullPath: to} : entry);

                return {listing: {...listing, entries}};
            });
        }
    }, [patch]);

    // An archive stages extracted previews and nested containers in the temp folder. Once no tab
    // shows an archive any more, the host removes everything it staged for that archive.
    const openArchives = useRef<string[]>([]);
    useEffect(() => {
        const next = new Set<string>();

        for (const tab of tabs) {
            const location = tab.listing?.path ?? tab.history[tab.index] ?? "";
            if (location && isArchiveLocation(location))
                next.add(normalizePath(archiveFile(location)));
        }

        const removed = openArchives.current.filter((archive) => !next.has(archive));
        openArchives.current = [...next];

        if (removed.length > 0)
            void releaseArchives(removed);
    }, [tabs]);

    /** The sidebar and the overview replace the page the active tab shows, or open a new tab. */
    const openView = useCallback((next: ViewKind, newTab = false) => {
        if (newTab) {
            openFiles(viewLocation(next));
            return;
        }

        openLocation(stateRef.current.activeId, viewLocation(next));
    }, [openFiles, openLocation]);

    const closeTab = useCallback((id: string) => {
        const {tabs: current, activeId: currentActive} = stateRef.current;
        const closing = current.find((tab) => tab.id === id);
        const remaining = current.filter((tab) => tab.id !== id && tab.id !== closing?.splitWith);

        if (closing && !closing.hidden) {
            closedTabs.current.push(locationOf(closing));
            if (closedTabs.current.length > ClosedTabLimit) closedTabs.current.shift();
        }

        if (remaining.length === 0) {
            // A window always keeps one tab; closing the last one starts over at the overview.
            const replacement = createTab();

            setTabs([replacement]);
            setActiveId(replacement.id);
            return;
        }

        const index = current.findIndex((tab) => tab.id === id);

        setTabs(remaining);
        if (currentActive === id)
            setActiveId(remaining[Math.min(index, remaining.length - 1)].id);
    }, []);

    /** Brings back the tab closed last, showing the folder it had. */
    const reopenTab = useCallback(() => {
        const location = closedTabs.current.pop();
        if (!location) return;

        const tab = {...createTab(location), fresh: false};

        setTabs((current) => [...current, tab]);
        setActiveId(tab.id);

        if (kindOf(tab) === "files") void load(tab.id, folderOf(tab));
    }, [load]);

    const navigate = useCallback((target?: string, newTab = false) => {
        if (newTab) {
            openFiles(target);
            return;
        }

        openLocation(focusedTabIdOf(stateRef.current), target ?? viewLocation("home"));
    }, [openLocation, openFiles]);

    /** Moves the focus to the next or previous tab, like Ctrl+Tab in Dolphin. */
    const cycleTab = useCallback((delta: number) => {
        const {tabs, activeId} = stateRef.current;
        // Hidden pane tabs are not part of the tab order.
        const visible = tabs.filter((tab) => !tab.hidden);
        if (visible.length < 2) return;

        const index = Math.max(visible.findIndex((tab) => tab.id === activeId), 0);
        const next = (index + delta + visible.length) % visible.length;
        setActiveId(visible[next].id);
    }, []);

    /** Toggles the split view of the focused tab; both panes stay inside that one tab. */
    const toggleSplit = useCallback(() => {
        const {tabs, activeId} = stateRef.current;
        const tab = tabs.find((item) => item.id === activeId);
        if (!tab || kindOf(tab) !== "files") return;

        const pane = tab.splitWith ? tabs.find((item) => item.id === tab.splitWith) : undefined;

        if (pane) {
            setTabs((current) => current.filter((item) => item.id !== pane.id));
            patch(activeId, () => ({splitWith: undefined}));
            setActivePane("primary");
            return;
        }

        // The second pane is a hidden tab, so the tab bar keeps showing one tab for both.
        const folder = folderOf(tab);
        const second = {...createTab(folder), hidden: true};

        setTabs((current) => [...current, second]);
        patch(activeId, () => ({splitWith: second.id}));
        void load(second.id, folder);
        setActivePane("primary");
    }, [load, patch]);

    const resizeDetails = useCallback((width: number) => {
        setDetailsWidth(width);

        writeStoredNumber("yafm.preview.width", width);
    }, []);

    /** The pane whose selection the shared details panel follows; the other side is the fallback. */
    const detailsInfo = splitActive
        ? activePane === "secondary" ? secondaryPreview ?? primaryPreview : primaryPreview ?? secondaryPreview
        : primaryPreview;

    const splitRef = useRef<HTMLDivElement | null>(null);

    /** Drags the divider between the two panes; a usable slice stays on each side. */
    const startSplitDrag = (event: { preventDefault: () => void; clientX: number }) => {
        event.preventDefault();

        const bounds = splitRef.current?.getBoundingClientRect();
        if (!bounds) return;

        // The details panel takes its own width; the divider only splits what is left of it.
        const reserved = detailsVisible ? detailsWidth : 0;
        const paneWidth = Math.max(bounds.width - reserved - 7, 1);

        const move = (moveEvent: PointerEvent) => {
            const ratio = Math.min(Math.max((moveEvent.clientX - bounds.left) / paneWidth, 0.2), 0.8);
            setSplitRatio(ratio);

            writeStoredNumber("yafm.split.ratio", ratio);
        };
        const stop = () => {
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", stop);
        };

        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", stop);
    };

    const openCreateMenu = (event: { clientX: number; clientY: number }, directory: string, refresh: () => void) => {
        if (!directory)
            return;

        setCreateMenu({x: event.clientX, y: event.clientY, directory, refresh});
    };

    const reportSelection = useCallback((pane: "primary" | "secondary", count: number) => {
        setSelectionCounts((current) => current[pane] === count ? current : {...current, [pane]: count});
    }, []);
    const reportPrimarySelection = useCallback((count: number) => reportSelection("primary", count),
        [reportSelection]);
    const reportSecondarySelection = useCallback((count: number) => reportSelection("secondary", count),
        [reportSelection]);

    /** Opens the file list's own context menu from the toolbar, for the current selection. */
    const requestSelectionMenu = (pane: "primary" | "secondary", event: { clientX: number; clientY: number }) => {
        if (selectionCounts[pane] === 0)
            return;

        setSelectionMenus((current) => ({
            ...current,
            [pane]: {
                token: (current[pane]?.token ?? 0) + 1,
                x: event.clientX,
                y: event.clientY,
            },
        }));
    };

    const createItem = async (extension: string | null, caseSensitive = false) => {
        const menu = createMenu;
        setCreateMenu(null);

        if (!menu)
            return;

        const result = extension === null
            ? await newFolder(menu.directory, caseSensitive)
            : await newFile(menu.directory, extension);

        if (!result.ok || result.path === null)
            return;

        const path = result.path;
        resetFind();
        setRenameRequest((current) => ({
            directory: menu.directory,
            path,
            token: (current?.token ?? 0) + 1,
        }));
        menu.refresh();
    };

    /**
     * Steps through the active tab's history. These read the tab from the ref so the keyboard
     * shortcuts stay stable, and so a long list of them does not re-register on every render.
     */
    const goBack = useCallback(() => {
        const {tabs} = stateRef.current;
        const tab = tabs.find((item) => item.id === focusedTabIdOf(stateRef.current));

        if (tab && tab.index > 0)
            void goTo(tab.id, tab.history[tab.index - 1], tab.index - 1);
    }, [goTo]);

    const goForward = useCallback(() => {
        const {tabs} = stateRef.current;
        const tab = tabs.find((item) => item.id === focusedTabIdOf(stateRef.current));

        if (tab && tab.index < tab.history.length - 1)
            void goTo(tab.id, tab.history[tab.index + 1], tab.index + 1);
    }, [goTo]);

    /** Goes to the folder above the one on screen, the way the toolbar's Up button does. */
    const goUp = useCallback(() => {
        const {tabs} = stateRef.current;
        const tab = tabs.find((item) => item.id === focusedTabIdOf(stateRef.current));

        if (tab && kindOf(tab) === "files" && tab.listing?.parent)
            navigate(tab.listing.parent);
    }, [navigate]);

    const viewSave = useRef<number | null>(null);

    /** Reloads every file tab, which is what a hidden-files change affects. */
    const refreshAll = useCallback(() => {
        for (const tab of stateRef.current.tabs)
            if (tab.listing)
                void load(tab.id, tab.listing.path, true);
    }, [load]);

    const addTrayItems = useCallback((items: TrayItem[]) => {
        if (items.length === 0) return;

        setTrayItems((current) => {
            const known = new Set(current.map((item) => item.path));
            const added = items.filter((item) => {
                if (known.has(item.path)) return false;

                known.add(item.path);
                return true;
            });

            return added.length > 0 ? [...current, ...added] : current;
        });

        showTray();
    }, [showTray]);

    const addTrayPaths = useCallback(async (paths: string[]) => {
        const entries = await inspectPaths(paths);
        if (entries.length === 0) return;

        // Dragging into the tray is an in-app action; it must not replace what the system
        // clipboard holds. The clipboard section mirrors the clipboard instead.
        addTrayItems(entries.map((entry) => ({
            path: entry.path,
            name: entry.name,
            isDirectory: entry.isDirectory,
        })));
    }, [addTrayItems]);

    const removeTrayItems = useCallback((paths: string[]) => {
        const remove = new Set(paths);
        setTrayItems((current) => current.filter((item) => !remove.has(item.path)));
    }, []);

    /** Pins any file or folder — wherever it lives — to the overview's Favorites panel. */
    const addFavoritePaths = useCallback(async (paths: string[]) => {
        const current = settingsRef.current;
        if (!current) return;

        const entries = await inspectPaths(paths);
        if (entries.length === 0) return;

        const known = new Set((current.favorites ?? []).map((entry) => normalizePath(entry.path)));
        const added = entries
            .filter((entry) => !known.has(normalizePath(entry.path)))
            .map((entry) => ({path: entry.path, name: entry.name, isDirectory: entry.isDirectory}));

        if (added.length === 0) return;

        const next = {...current, favorites: [...(current.favorites ?? []), ...added]};
        setSettings(next);
        await saveSettings(next);
        setSettingsVersion((value) => value + 1);
    }, []);

    /** Drops the selected paths from the overview's Favorites panel. */
    const removeFavoritePaths = useCallback(async (paths: string[]) => {
        const current = settingsRef.current;
        if (!current) return;

        const remove = new Set(paths.map(normalizePath));
        const favorites = (current.favorites ?? []).filter((entry) => !remove.has(normalizePath(entry.path)));
        if (favorites.length === (current.favorites ?? []).length) return;

        const next = {...current, favorites};
        setSettings(next);
        await saveSettings(next);
        setSettingsVersion((value) => value + 1);
    }, []);

    const clearTrayItems = useCallback(() => setTrayItems([]), []);

    const clipboardSequence = useRef(-1);

    /** Replaces the clipboard section with exactly what the system clipboard holds now. */
    const applyClipboard = useCallback((files: ClipboardFiles) => {
        setClipboardItems(files.entries.map((entry) => ({
            path: entry.path,
            name: entry.name,
            isDirectory: entry.isDirectory,
        })));
        setClipboardMove(files.move);

        if (files.entries.length > 0)
            showTray();
    }, [showTray]);

    const refreshClipboard = useCallback(async () => {
        if (!Native.available) return;

        try {
            const files = await getClipboardFiles();
            clipboardSequence.current = files.sequence;
            applyClipboard(files);
        } catch {
            // Another app may hold the clipboard; the next poll tries again.
        }
    }, [applyClipboard]);

    /** Explicitly writes selected tray entries to the system clipboard. */
    const copyTrayToClipboard = useCallback(async (paths: string[]) => {
        if (paths.length === 0) return;

        if (await copyPaths(paths, false))
            await refreshClipboard();
    }, [refreshClipboard]);

    const trayRef = useRef(trayItems);
    trayRef.current = trayItems;
    const trayVisibleRef = useRef(trayVisible);
    trayVisibleRef.current = trayVisible;
    const trayAutoShown = useRef(false);

    // The tray opens for a drag when the setting allows it, and closes again if the drag ended
    // without leaving anything in it. A manual toggle keeps it open whether or not it is empty.
    useEffect(() => {
        const auto = settings?.trayAutoShow ?? true;

        const showForDrag = (transfer: DataTransfer | null) => {
            if (!auto || !isPathDrag(transfer))
                return;

            if (!trayVisibleRef.current)
                trayAutoShown.current = true;

            showTray();
        };

        const onDragStart = (event: DragEvent) => showForDrag(event.dataTransfer);
        const onDragEnter = (event: DragEvent) => showForDrag(event.dataTransfer);

        const finish = () => {
            if (!trayAutoShown.current)
                return;

            // The drop handler runs before its state lands, so the emptiness is checked a moment later.
            window.setTimeout(() => {
                if (trayAutoShown.current && trayRef.current.length === 0)
                    setTrayVisible(false);

                trayAutoShown.current = false;
            }, 300);
        };

        const onDrop = () => finish();
        const onDragEnd = () => finish();
        const onDragLeave = (event: DragEvent) => {
            if (event.relatedTarget === null)
                finish();
        };

        window.addEventListener("dragstart", onDragStart);
        window.addEventListener("dragenter", onDragEnter);
        window.addEventListener("drop", onDrop);
        window.addEventListener("dragend", onDragEnd);
        document.addEventListener("dragleave", onDragLeave);

        return () => {
            window.removeEventListener("dragstart", onDragStart);
            window.removeEventListener("dragenter", onDragEnter);
            window.removeEventListener("drop", onDrop);
            window.removeEventListener("dragend", onDragEnd);
            document.removeEventListener("dragleave", onDragLeave);
        };
    }, [showTray, settings?.trayAutoShow]);

    // Keep the floating tray inside the window when it is resized.
    useEffect(() => {
        const onResize = () => setTrayPosition((current) => clampTrayPosition(current));

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    /** Drops tray entries that were moved away by a paste, so a cut does not leave stale rows. */
    const pruneTray = useCallback(async () => {
        const items = trayRef.current;

        if (items.length > 0) {
            const entries = await inspectPaths(items.map((item) => item.path));
            const existing = new Set(entries.filter((entry) => entry.exists).map((entry) => entry.path));

            setTrayItems((current) => current.filter((item) => existing.has(item.path)));
        }

        await refreshClipboard();
    }, [refreshClipboard]);

    /**
     * A paste may have moved entries out of another tab, so every listing is refreshed rather than
     * only the folder that received the paste. The bumped token also drops stale selections.
     */
    const pasteFinished = useCallback(() => {
        void pruneTray();
        setVisibilityVersion((version) => version + 1);
        refreshAll();
    }, [pruneTray, refreshAll]);

    const moveTray = useCallback((position: { x: number; y: number }) => {
        const next = clampTrayPosition(position);
        setTrayPosition(next);

        writeStoredJson("yafm.tray.position", next);
    }, []);

    const toggleTray = useCallback(() => {
        trayAutoShown.current = false;

        if (trayVisible) {
            setTrayVisible(false);
            return;
        }

        showTray();
    }, [showTray, trayVisible]);

    const transferTo = useCallback(async (paths: string[], target: string, move: boolean) => {
        const result = await transferPaths(paths, target, move);

        // Closing the protected-path dialog is a decision, not a failure.
        if (result.cancelled)
            return;

        if (!result.ok) {
            void showMessage(result.error ?? t("The files could not be transferred."));
            return;
        }

        if (move)
            removeTrayItems(paths);

        setVisibilityVersion((version) => version + 1);
        refreshAll();
        void refreshClipboard();
    }, [refreshAll, refreshClipboard, removeTrayItems]);

    useEffect(() => {
        if (!Native.available) return;

        void listTasks().then((list) => {
            tasksRef.current = list;
            setTasks(list);
        }, () => undefined);

        return Native.on((evt) => {
            const event = evt as { type?: string; data?: { tasks?: TaskInfo[] } };
            if (event.type !== "app.tasks.changed" || !Array.isArray(event.data?.tasks)) return;

            const next = event.data.tasks;

            // Open for a new operation and again when one finishes or fails. Progress updates do
            // not change the state, so they cannot keep re-opening a panel the user just closed.
            const stateChanged = next.some((task) => {
                const previous = tasksRef.current.find((old) => old.id === task.id);
                return !previous || previous.state !== task.state;
            });

            tasksRef.current = next;
            setTasks(next);
            if (stateChanged) setActivityOpen(true);
        });
    }, []);

    const clearFinishedTasks = useCallback(() => {
        void clearTasks().then(() => listTasks().then((list) => {
            tasksRef.current = list;
            setTasks(list);
        }, () => undefined));
    }, []);

    // The clipboard section mirrors the system clipboard: copying files in Explorer or in another
    // app puts them there without touching the tray's own entries.
    useEffect(() => {
        if (!Native.available) return;

        let alive = true;

        const poll = async () => {
            if (!document.hasFocus()) return;

            try {
                const files = await getClipboardFiles();
                if (!alive || files.sequence === clipboardSequence.current) return;

                clipboardSequence.current = files.sequence;
                applyClipboard(files);
            } catch {
                // Another app may hold the clipboard; the next poll tries again.
            }
        };

        const onFocus = () => void poll();
        const timer = window.setInterval(() => void poll(), 1500);

        window.addEventListener("focus", onFocus);
        void poll();

        return () => {
            alive = false;
            window.clearInterval(timer);
            window.removeEventListener("focus", onFocus);
        };
    }, [applyClipboard]);

    /** Runs one history step and reloads the folders it touched. */
    const runHistory = useCallback(async (undo: boolean) => {
        const result = undo ? await undoFileOperation() : await redoFileOperation();

        if (!result.ok) {
            if (result.error && !result.error.startsWith("Nothing to"))
                void showMessage(result.error);

            return;
        }

        setVisibilityVersion((version) => version + 1);
        refreshAll();
    }, [refreshAll]);

    // Turning the Links column on or off changes whether the host reads hard-link counts.
    const lastIncludeLinks = useRef(includeLinks);

    useEffect(() => {
        if (lastIncludeLinks.current === includeLinks) return;

        lastIncludeLinks.current = includeLinks;
        refreshAll();
    }, [includeLinks, refreshAll]);

    /** Applies a view change to one directory. Columns are handled separately. */
    const changeViewFor = useCallback((id: string, change: Partial<DirectoryView>) => {
        const {tabs} = stateRef.current;
        const tab = tabs.find((item) => item.id === id);
        if (!tab || kindOf(tab) !== "files") return;

        const folder = folderOf(tab);
        const defaults = settingsRef.current?.defaultView ?? DefaultViewDefaults;
        const base: DirectoryView = {
            mode: tab.view?.mode ?? defaults.mode,
            iconSize: tab.view?.iconSize || defaults.iconSize || DefaultView.iconSize,
            gridSize: tab.view?.gridSize || defaults.gridSize || DefaultView.gridSize,
            sort: tab.view?.sort ?? DefaultView.sort,
            sortDescending: tab.view?.sortDescending ?? DefaultView.sortDescending,
        };
        const next = {...base, ...change};

        patch(id, () => ({view: next}));

        // Dragging the size slider would otherwise write the database on every pixel.
        if (viewSave.current !== null) window.clearTimeout(viewSave.current);
        viewSave.current = window.setTimeout(() => {
            viewSave.current = null;
            void saveDirectoryView(folder, next);
        }, 250);
    }, [patch]);

    /** The focused pane's view; the split panes keep their own mode and sizes. */
    const changeView = useCallback((change: Partial<DirectoryView>) => {
        changeViewFor(focusedTabIdOf(stateRef.current), change);
    }, [changeViewFor]);

    /** Columns are window-wide, so every folder changes together. */
    const setColumns = useCallback((columns: string[]) => {
        const current = settingsRef.current;
        if (!current) return;

        const next = {
            ...current,
            defaultView: {...(current.defaultView ?? DefaultViewDefaults), columns},
        };

        setSettings(next);
        void saveSettings(next);
    }, []);

    /** The preview panel under the list is window-wide too. */
    const setShowImages = useCallback((value: boolean) => {
        const current = settingsRef.current;
        if (!current) return;

        const next = {
            ...current,
            defaultView: {...(current.defaultView ?? DefaultViewDefaults), showImages: value},
        };

        setSettings(next);
        void saveSettings(next);
    }, []);

    /** The height of that strip, kept after the divider above it is dragged. */
    const setImageStripHeight = useCallback((height: number) => {
        const current = settingsRef.current;
        if (!current) return;

        const next = {
            ...current,
            defaultView: {...(current.defaultView ?? DefaultViewDefaults), imageStripHeight: height},
        };

        setSettings(next);
        void saveSettings(next);
    }, []);

    /** Adds or removes one entry's tags; the folder index keeps them, so this stays optimistic. */
    const setEntryTagsFor = useCallback((id: string, name: string, tags: string[],
                                         colors?: Record<string, string>) => {
        const tab = stateRef.current.tabs.find((item) => item.id === id);
        if (!tab || kindOf(tab) !== "files" || !tab.listing) return;

        const folder = folderOf(tab);
        const tagColors = colors ? {...tab.listing.tagColors, ...colors} : tab.listing.tagColors;
        const allTags = [...new Set([...tab.listing.allTags, ...tags, ...Object.keys(tagColors)])]
            .sort((left, right) => left.localeCompare(right));

        patch(id, (current) => current.listing
            ? {
                listing: {
                    ...current.listing,
                    tags: {...current.listing.tags, [name]: tags},
                    tagColors,
                    allTags,
                },
            }
            : current);

        void saveTags(folder, name, tags, colors);
    }, [patch]);

    /** A header click sorts by that column, and a second click flips the direction. */
    const sortByFor = useCallback((id: string, column: string) => {
        const tab = stateRef.current.tabs.find((item) => item.id === id);
        if (!tab) return;

        const current = resolveView(tab, settingsRef.current?.defaultView ?? DefaultViewDefaults);
        changeViewFor(id, {
            sort: column,
            sortDescending: current.sort === column ? !current.sortDescending : false,
        });
    }, [changeViewFor]);

    /** Moves a tab next to another one, which is what dragging a tab does. */
    const moveTab = useCallback((id: string, beforeId: string) => {
        setTabs((current) => {
            const from = current.findIndex((tab) => tab.id === id);
            const to = current.findIndex((tab) => tab.id === beforeId);
            if (from < 0 || to < 0 || from === to) return current;

            const next = [...current];
            const [moved] = next.splice(from, 1);
            next.splice(to, 0, moved);
            return next;
        });
    }, []);

    const reloadPlaces = useCallback(() => {
        void listPlaces().then(setPlaces, () => setPlaces([]));
    }, []);

    /** Puts back the tabs that were open when the window was closed, the first time settings arrive. */
    const restoreOpenTabs = useCallback((saved: AppSettings): boolean => {
        const locations = (saved.openTabs ?? [])
            .map(parseLocation)
            .filter((location): location is string => location !== null);

        if (locations.length === 0) return false;

        // These stand for the last session, so a path from the host must not take one of them over.
        const opened = locations.map((location) => ({...createTab(location), fresh: false}));
        const index = Math.min(Math.max(saved.activeTab ?? 0, 0), opened.length - 1);

        setTabs(opened);
        setActiveId(opened[index].id);

        // Every files tab reads its folder; a built-in page is ready as it is.
        for (const tab of opened)
            if (kindOf(tab) === "files") void load(tab.id, folderOf(tab), true);

        return true;
    }, [load]);

    /** Opens the paths the host sent at startup, after the restored tabs when there are any. */
    const flushStartup = useCallback((afterRestored: boolean) => {
        const paths = pendingStartup.current;
        pendingStartup.current = [];
        if (paths.length === 0) return;

        // A retried launch path may already have been opened by an earlier mount.
        const fresh = paths.filter((path) => !OpenedStartupPaths.has(path));
        for (const path of paths)
            if (!fresh.includes(path))
                acknowledgeStartup(path);

        if (fresh.length === 0) return;

        const {tabs: current} = stateRef.current;

        // With nothing restored, the untouched first tab can show the path instead of staying empty.
        if (!afterRestored && current.length === 1 && current[0].fresh) {
            openLocation(current[0].id, fresh[0]);
            acknowledgeStartup(fresh[0]);
            for (const path of fresh.slice(1)) {
                openFiles(path);
                acknowledgeStartup(path);
            }
            return;
        }

        // The restored tabs set their own focus, so the last path gets it once that has settled.
        const last = fresh.map((path) => {
            const id = openFiles(path);
            acknowledgeStartup(path);
            return id;
        }).at(-1);
        if (last) setTimeout(() => setActiveId(last), 0);
    }, [openFiles, openLocation]);

    const reloadSettings = useCallback(() => {
        void getSettings().then((settings) => {
            setSettings(settings);
            setRecentLimit(settings.recentLimit);

            const keys = {...DefaultShortcuts, ...settings.shortcuts};
            setShortcuts(keys);
            setClickModifier(keys.openInNewTab);
            setSettingsVersion((current) => current + 1);

            if (!restored.current) {
                restored.current = true;
                flushStartup(settings.restoreTabs && restoreOpenTabs(settings));
            }
        }, () => {
            // Without settings the tabs are unknown, but a startup path must not be lost.
            setRecentLimit(10);
            restored.current = true;
            flushStartup(false);
        });
    }, [flushStartup, restoreOpenTabs]);

    const reloadRecent = useCallback(() => {
        void listRecent().then(setRecent, () => setRecent([]));
    }, []);

    const reloadDrives = useCallback(() => {
        void listDrives().then(setDrives, () => setDrives([]));
    }, []);

    // The host keeps the tab locations, so the next launch can put the same tabs back.
    const visibleTabs = tabs.filter((tab) => !tab.hidden);
    const openLocations = visibleTabs.map(locationOf);
    const openLocationsKey = openLocations.join("\n");
    const activeIndex = Math.max(visibleTabs.findIndex((tab) => tab.id === activeId), 0);

    useEffect(() => {
        if (!settings?.restoreTabs) return;

        const timer = setTimeout(() => void saveOpenTabs(openLocations, activeIndex), 700);
        return () => clearTimeout(timer);
    }, [openLocationsKey, activeIndex, settings?.restoreTabs]);

    useEffect(() => {
        // The first tab is the overview; a path the host sends at startup takes it over instead of
        // opening a second, empty tab. A files tab would load its folder right away.
        const {tabs: current, activeId: currentActive} = stateRef.current;
        const first = current.find((tab) => tab.id === currentActive);

        // A fresh files tab has not loaded anything yet. A restored tab loads itself, and a startup
        // path has already taken the tab over; refreshing it with the default folder would undo that.
        if (first && first.fresh && kindOf(first) === "files")
            void load(first.id, folderOf(first), true);

        reloadPlaces();
        reloadSettings();
        reloadDrives();
        void getAppInfo().then(setAppInfo, () => setAppInfo(null));
    }, [load, reloadPlaces, reloadSettings, reloadDrives]);

    // The footer shows a dot when a newer build is published; the backend caches the answer.
    useEffect(() => {
        void getUpdateStatus().then(setUpdate, () => setUpdate(null));

        if (!Native.available) return;

        return Native.on((evt) => {
            const event = evt as { type?: string; data?: UpdateCheck };
            if (event.type === "update.checked" && event.data) setUpdate(event.data);
        });
    }, []);

    // Pairing requests from another device, and the code this device's own pairing shows.
    useEffect(() => {
        if (!Native.available) return;

        return Native.on((evt) => {
            const event = evt as {
                type?: string;
                data?: { requestId?: string; deviceName?: string; code?: string; ok?: boolean; error?: string };
            };

            switch (event.type) {
                case "share.pair.request":
                    if (event.data?.requestId && event.data.code)
                        setSharePair({
                            requestId: event.data.requestId,
                            deviceName: event.data.deviceName ?? "",
                            code: event.data.code,
                        });
                    break;

                case "share.pair.code":
                    if (event.data?.code)
                        void showMessage(t("Pairing code: {code}", {code: event.data.code}));
                    break;

                case "share.pair.result":
                    if (event.data?.ok === false)
                        void showMessage(event.data.error ?? t("Pairing failed."));
                    break;
            }
        });
    }, [t]);

    // Free space changes while the app runs; keep the bars honest without asking for a refresh.
    useEffect(() => {
        const timer = setInterval(reloadDrives, 30_000);
        return () => clearInterval(timer);
    }, [reloadDrives]);

    // The recent list and the volumes change while the app runs; refresh them when the overview shows.
    useEffect(() => {
        if (kind !== "home") return;

        reloadRecent();
        reloadDrives();
    }, [kind, active.id, reloadRecent, reloadDrives]);

    // The host pushes a path for command-line arguments and for a second launch (single instance).
    // It waits for `app.ready` first, because sending to a web view that is still loading crashes it.
    useEffect(() => {
        if (!Native.available) return;

        const unsubscribe = Native.on((evt) => {
            const event = evt as { type?: string; data?: { path?: unknown; startup?: unknown } };
            if (event.type !== "app.navigate" || typeof event.data?.path !== "string") return;

            const target = event.data.path;
            const {tabs: current} = stateRef.current;
            const isStartup = event.data.startup === true;

            // The settings decide whether there are tabs to restore; until then a startup path
            // waits here so it can be added after them rather than replacing one.
            if (isStartup && OpenedStartupPaths.has(target)) {
                acknowledgeStartup(target);
                return;
            }

            if (isStartup && !restored.current) {
                if (!pendingStartup.current.includes(target))
                    pendingStartup.current.push(target);
                return;
            }

            if (isStartup && current.length === 1 && current[0].fresh)
                openLocation(current[0].id, target);
            else if (viewKind(target))
                // A built-in page asked for from outside (the tray, a yafm:// link) replaces the
                // focused page instead of opening a tab that cannot load a folder.
                openLocation(focusedTabIdOf(stateRef.current), target);
            else
                openFiles(target);

            if (isStartup) acknowledgeStartup(target);
        });

        Native.send({type: "app.ready"});
        return unsubscribe;
    }, [openLocation, openFiles]);

    // Folder sizes are measured in the background; each result lands in whichever tab shows that folder.
    useEffect(() => {
        if (!Native.available) return;

        return Native.on((evt) => {
            const event = evt as { type?: string; data?: { path?: string; sizes?: Record<string, number> } };
            if (event.type !== "fs.sizes" || typeof event.data?.path !== "string" || !event.data.sizes) return;

            const {path, sizes} = event.data;

            setTabs((current) => {
                const index = current.findIndex((tab) => tab.listing?.path === path);
                if (index < 0)
                    return current;

                const next = current.slice();
                const tab = current[index];
                next[index] = {
                    ...tab,
                    listing: {...tab.listing!, folderSizes: {...tab.listing!.folderSizes, ...sizes}},
                };

                return next;
            });
        });
    }, []);

    // Child counts arrive in the background the same way, for the Items column.
    useEffect(() => {
        if (!Native.available) return;

        return Native.on((evt) => {
            const event = evt as { type?: string; data?: { path?: string; counts?: Record<string, number> } };
            if (event.type !== "fs.counts" || typeof event.data?.path !== "string" || !event.data.counts) return;

            const {path, counts} = event.data;

            setTabs((current) => {
                const index = current.findIndex((tab) => tab.listing?.path === path);
                if (index < 0)
                    return current;

                const next = current.slice();
                const tab = current[index];
                next[index] = {
                    ...tab,
                    listing: {...tab.listing!, counts: {...tab.listing!.counts, ...counts}},
                };

                return next;
            });
        });
    }, []);

    // Global shortcuts; a field that has the focus keeps the keys to itself.
    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (isTyping(event.target)) return;

            // The mouse-style back and forward keys are handled directly, whatever the settings say.
            if (event.key === "BrowserBack") {
                event.preventDefault();
                goBack();
                return;
            }

            if (event.key === "BrowserForward") {
                event.preventDefault();
                goForward();
                return;
            }

            if (event.key === "Escape" && find.open) {
                event.preventDefault();
                resetFind();
                return;
            }

            const combo = comboOf(event);

            if (combo === shortcuts.closeTab) {
                event.preventDefault();
                closeTab(focusedTabIdOf(stateRef.current));
            } else if (combo === shortcuts.newTab) {
                event.preventDefault();
                openFiles();
            } else if (combo === shortcuts.reopenTab) {
                event.preventDefault();
                reopenTab();
            } else if (combo === shortcuts.goBack) {
                event.preventDefault();
                goBack();
            } else if (combo === shortcuts.goForward) {
                event.preventDefault();
                goForward();
            } else if (combo === shortcuts.goUp) {
                event.preventDefault();
                goUp();
            } else if (combo === shortcuts.find) {
                event.preventDefault();
                if (kind === "files") openFind();
                else openViewFind();
            } else if (combo === shortcuts.location) {
                event.preventDefault();
                setLocationFocus((token) => token + 1);
            } else if (combo === shortcuts.home) {
                event.preventDefault();

                const home = places.find((place) => place.kind === "home")?.path;
                if (home)
                    navigate(home);
            } else if (combo === shortcuts.iconsView) {
                event.preventDefault();
                if (kind === "files") changeView({mode: "grid"});
            } else if (combo === shortcuts.detailsView) {
                event.preventDefault();
                if (kind === "files") changeView({mode: "list"});
            } else if (combo === shortcuts.nextTab) {
                event.preventDefault();
                cycleTab(1);
            } else if (combo === shortcuts.previousTab) {
                event.preventDefault();
                cycleTab(-1);
            } else if (combo === shortcuts.hidden || combo === "alt+.") {
                event.preventDefault();
                void toggleHiddenFiles().then(() => {
                    setVisibilityVersion((version) => version + 1);
                    refreshAll();
                });
            } else if (combo === shortcuts.undo) {
                event.preventDefault();
                void runHistory(true);
            } else if (combo === shortcuts.redo) {
                event.preventDefault();
                void runHistory(false);
            } else if (combo === shortcuts.splitView) {
                event.preventDefault();
                toggleSplit();
            } else if (kind === "files" && event.key.length === 1 && event.key !== " "
                && !event.ctrlKey && !event.altKey && !event.metaKey) {
                // Typing anywhere in a folder starts a search with that letter; the first hit jumps.
                event.preventDefault();
                startFind(event.key);
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [shortcuts, kind, find.open, closeTab, reopenTab, openFiles, goBack, goForward, goUp, openFind, openViewFind,
        resetFind, startFind, changeView, cycleTab, navigate, places, refreshAll, runHistory, toggleSplit]);

    // Back and forward on the mouse: WebView2 would otherwise walk its own history and reload the app.
    useEffect(() => {
        const onDown = (event: MouseEvent) => {
            if (event.button === 3) {
                event.preventDefault();
                goBack();
            } else if (event.button === 4) {
                event.preventDefault();
                goForward();
            }
        };

        const swallow = (event: MouseEvent) => {
            if (event.button === 3 || event.button === 4) event.preventDefault();
        };

        window.addEventListener("mousedown", onDown);
        window.addEventListener("mouseup", swallow);
        window.addEventListener("auxclick", swallow);

        return () => {
            window.removeEventListener("mousedown", onDown);
            window.removeEventListener("mouseup", swallow);
            window.removeEventListener("auxclick", swallow);
        };
    }, [goBack, goForward]);

    // Every file tab reports its folder, whichever page is on screen. The overview and pinned
    // sidebar folders watch their own folders too; the host unions the lists, so one surface can no
    // longer replace another's list.
    const watchFolders = useMemo(() => {
        const paths = new Set<string>();

        for (const tab of tabs) {
            if (kindOf(tab) !== "files") continue;

            const folder = folderOf(tab);
            if (!folder || isShareLocation(folder)) continue;

            if (isArchiveLocation(folder)) {
                const parent = parentOf(archiveFile(folder));
                if (parent) paths.add(parent);
            } else {
                paths.add(folder);
            }
        }

        return [...paths];
    }, [tabs]);
    const watchKey = watchFolders.join("\0");

    useEffect(() => {
        if (!Native.available) return;

        Native.send({type: "fs.watch", payload: {paths: watchFolders, owner: "app"}});
    }, [watchKey, activeId]);

    // The index follows the tab on screen: the folder the user is looking at has its index read
    // before any other work, and its own listing is only written once they have moved on.
    const focusPath = kindOf(focusedTab) === "files" ? folderOf(focusedTab) : "";

    useEffect(() => {
        if (!Native.available) return;

        Native.send({type: "fs.focus", payload: {path: focusPath || null}});
    }, [focusPath]);

    // A change in a folder on screen refreshes every tab showing it in place, so two tabs at the
    // same path never disagree about an entry that was just deleted, renamed or created.
    useEffect(() => {
        if (!Native.available) return;

        return Native.on((evt) => {
            const event = evt as { type?: string; data?: { path?: string } };
            if (event.type !== "fs.changed" || typeof event.data?.path !== "string") return;

            const changed = event.data.path;
            const targets = stateRef.current.tabs
                .filter((tab) => kindOf(tab) === "files" && samePath(folderOf(tab), changed));
            // An archive tab shows a virtual path, so a change to the archive file itself is found
            // by comparing the file, not the listing path. Re-read the archive when it changes.
            const archives = stateRef.current.tabs.filter((tab) => {
                const folder = folderOf(tab);
                return kindOf(tab) === "files" && folder.length > 0
                    && isArchiveLocation(folder) && samePath(archiveFile(folder), changed);
            });

            if (targets.length === 0 && archives.length === 0) return;

            // Only the icons of this folder can be stale; the rest of the cache — and the shell work
            // behind every other row — stays.
            refreshIconCache(changed);

            for (const tab of archives) {
                const latest = stateRef.current.tabs.find((item) => item.id === tab.id);
                const folder = latest ? folderOf(latest) : "";

                if (!latest || kindOf(latest) !== "files" || latest.loading
                    || !isArchiveLocation(folder) || !samePath(archiveFile(folder), changed))
                    continue;

                void load(tab.id, folder, true);
            }

            if (targets.length === 0) return;

            // Only the entries are refreshed; sizes are measured when the folder is entered.
            void listDirectory(changed, false, includeLinks)
                .then((listing) => {
                    for (const tab of targets) {
                        const latest = stateRef.current.tabs.find((item) => item.id === tab.id);

                        if (!latest || kindOf(latest) !== "files")
                            continue;

                        if (!samePath(folderOf(latest), listing.path))
                            continue;

                        // A read that started before this change may still be in flight; give it a
                        // moment, then paint the watcher's newer listing if it has settled.
                        if (latest.loading) {
                            window.setTimeout(() => {
                                const after = stateRef.current.tabs.find((item) => item.id === tab.id);
                                if (after && !after.loading && kindOf(after) === "files"
                                    && samePath(folderOf(after), listing.path))
                                    patch(tab.id, () => ({listing}));
                            }, 300);
                            continue;
                        }

                        patch(tab.id, () => ({listing}));
                    }
                }, () => undefined);
        });
    }, [includeLinks, load, patch]);

    const canBack = active.index > 0;
    const canForward = active.index < active.history.length - 1;

    /** One file pane; the split view renders the same component twice with different tabs. */
    const filePane = (tab: Tab, primary: boolean) => {
        // Each pane keeps its own mode, sizes and sort; columns stay window-wide.
        const tabView = resolveView(tab, viewDefaults);
        const location = tab.listing?.path ?? tab.history[tab.index] ?? "";
        const archive = isArchiveLocation(location);
        const archiveWritable = archive && isZipArchiveLocation(location);

        return (
            <FileList
                confirmDelete={settings?.confirmDelete ?? false}
                cutPaths={cutPaths}
                previewVideoAudio={settings?.previewVideoAudio ?? false}
                previewVideoAutoplay={settings?.previewVideoAutoplay ?? false}
                showDetails={false}
                onPreviewInfo={primary ? setPrimaryPreview : setSecondaryPreview}
                onActivate={() => setActivePane(primary ? "primary" : "secondary")}
                enableShortcuts={(!splitActive || (primary ? activePane === "primary" : activePane === "secondary"))
                    && (!archive || archiveWritable)}
                error={tab.error}
                find={tab.id === focusedTab.id
                    ? {...find, currentPath: findCurrent < 0 ? null : findHits[findCurrent]}
                    : undefined}
                selectMatchesToken={tab.id === focusedTab.id ? selectMatchesToken : 0}
                imageStripHeight={imageStripHeight}
                listing={tab.listing}
                loading={tab.loading}
                onImageStripHeight={setImageStripHeight}
                readOnly={(archive && !archiveWritable) || isShareLocation(tab.listing?.path ?? "")}
                onOpen={(path, newTab) => {
                    if (newTab) openFiles(path);
                    else void load(tab.id, path);
                }}
                onOpenFile={(file, newTab) => {
                    if (isShareLocation(file)) {
                        void openSharedFile(file).catch((error) => void showMessage(message(error)));
                        return;
                    }

                    if (isArchivePath(file)) {
                        if (settings?.archiveHandler ?? false) {
                            if (newTab) openFiles(file);
                            else void load(tab.id, file);
                        } else {
                            void openFile(file);
                        }
                        return;
                    }

                    if (isArchiveLocation(file)) {
                        void (async () => {
                            let result = await extractArchiveEntry(file, archiveEncodingRef.current,
                                archivePasswordFor(file));

                            if (!result.path && isArchivePasswordError(result.error)) {
                                const archive = archiveFile(file);
                                const stored = getArchivePassword(archive);
                                if (stored) clearArchivePassword(archive);
                                const typed = await requestArchivePassword(archive, !!stored);

                                if (typed) {
                                    setArchivePassword(archive, typed);
                                    result = await extractArchiveEntry(file, archiveEncodingRef.current, typed);
                                }
                            }

                            if (result.path) void openFile(result.path);
                            else if (result.error) void showMessage(result.error);
                        })();
                        return;
                    }

                    void openFile(file);
                }}
                onRefresh={() => {
                    const folder = tab.listing?.path;
                    if (folder) refreshFolderTabs(folder);
                }}
                onRename={renameInListings}
                onSelectionCountChange={primary ? reportPrimarySelection : reportSecondarySelection}
                onSetTags={(name, tags, colors) => setEntryTagsFor(tab.id, name, tags, colors)}
                selectionMenuRequest={primary ? selectionMenus.primary : selectionMenus.secondary}
                onSort={(column) => sortByFor(tab.id, column)}
                onPaste={pasteFinished}
                onClipboardChanged={() => void refreshClipboard()}
                onTransfer={transferTo}
                onAddToTray={(paths) => void addTrayPaths(paths)}
                onAddFavorite={(paths) => void addFavoritePaths(paths)}
                onRemoveFavorite={(paths) => void removeFavoritePaths(paths)}
                favoritePaths={favoritePaths}
                onExtractArchive={(path, mode) => void extractArchiveTo(path, mode)}
                openOnSingleClick={settings?.openOnSingleClick ?? false}
                pendingRename={renameRequest
                && primary === (activePane === "primary")
                && samePath(renameRequest.directory, tab.listing?.path ?? "")
                    ? renameRequest.path
                    : null}
                pendingRenameToken={renameRequest?.token ?? 0}
                refreshToken={visibilityVersion}
                shortcuts={shortcuts}
                showCheckboxes={settings?.showCheckboxes ?? true}
                showImages={showImages}
                view={tabView}
            />
        );
    };

    const findBar = find.open && (<FindBar
            current={findCurrent}
            focusToken={findFocus}
            matchCase={find.matchCase}
            mode={find.mode}
            onClose={resetFind}
            onMatchCase={() => setFind((current) => ({...current, matchCase: !current.matchCase}))}
            onMode={() => setFind((current) => ({
                ...current,
                mode: current.mode === "dim" ? "hide" : "dim",
            }))}
            onNext={() => stepFind(1)}
            onPrevious={() => stepFind(-1)}
            onQuery={(query) => setFind((current) => ({...current, query}))}
            onRegex={() => setFind((current) => ({...current, regex: !current.regex}))}
            query={find.query}
            regex={find.regex}
            total={findHits.length}
            onSelectMatches={findHits.length > 0
                ? () => setSelectMatchesToken((token) => token + 1)
                : undefined}
        />
    );

    /** Archive-only actions, shown after a separator at the right edge of the toolbar. */
    const archived = kind === "files" && isArchiveLocation(activeFolder);
    const archiveWritable = archived && isZipArchiveLocation(activeFolder);
    const archiveEncrypted = archived && active.listing?.archiveEncrypted === true;

    /** Extracts one archive into a target folder, asking for a password when it is needed. */
    const extractInto = async (archivePath: string, target: string) => {
        const archive = archiveFile(archivePath);
        let result = await extractArchive(archive, target, archiveEncodingRef.current,
            archivePasswordFor(archive));

        if (!result.ok && isArchivePasswordError(result.error)) {
            const stored = getArchivePassword(archive);
            if (stored) clearArchivePassword(archive);
            const typed = await requestArchivePassword(archive, !!stored);

            if (typed) {
                setArchivePassword(archive, typed);
                result = await extractArchive(archive, target, archiveEncodingRef.current, typed);
            }
        }

        if (!result.ok) {
            void showMessage(`${t("Could not extract the archive.")}${result.error ? `\n${result.error}` : ""}`);
            return;
        }

        refreshFolderTabs(target);
        clearIconCache();
        void load(active.id, target, true);
    };

    /**
     * Runs the extraction modes the toolbar and the context menu share: into the folder that holds
     * the archive, into a folder named after it, automatically (no extra folder when the archive
     * already wraps everything in one top-level folder), or into a folder the user picks.
     */
    const extractArchiveTo = async (path: string, mode: "here" | "named" | "auto" | "choose") => {
        const archive = archiveFile(path);
        const parent = parentOf(archive);
        if (!parent) return;

        if (mode === "choose") {
            const target = await requestFolder(parent);
            if (target) await extractInto(archive, target);
            return;
        }

        let named = mode === "named";
        if (mode === "auto") {
            const entries = samePath(archive, activeFolder)
                ? active.listing?.entries ?? []
                : (await listDirectory(archive, false, false, archiveEncodingRef.current,
                    archivePasswordFor(archive))).entries;
            named = !(entries.length === 1 && entries[0].isDirectory);
        }

        const separator = parent.includes("\\") ? "\\" : "/";
        const target = named
            ? `${parent.replace(/[\\/]+$/, "")}${separator}${archiveStem(archive)}`
            : parent;

        await extractInto(archive, target);
    };

    /** The toolbar's three automatic modes for the archive the active tab shows. */
    const extractActiveArchive = async (mode: "here" | "named" | "auto") => {
        if (!archived) return;
        await extractArchiveTo(activeFolder, mode);
    };

    /** The toolbar's plain click keeps letting the user choose where the archive goes. */
    const chooseExtractFolder = async () => {
        if (!archived) return;
        await extractArchiveTo(activeFolder, "choose");
    };

    const changeArchiveEncoding = (value: string) => {
        const codePage = Number(value);
        setArchiveEncoding(codePage);
        archiveEncodingRef.current = codePage;

        if (archived) void load(active.id, activeFolder, true);
    };

    /** The normal toolbar; a file tab also gets the create and search buttons at its right edge. */
    const mainToolbar = (
        <Toolbar>
            <IconButton
                data-shortcut={prettyShortcut(shortcuts.goBack)}
                disabled={!canBack}
                onClick={(event) => {
                    if (active.index > 0 && wantsNewTab(event)) {
                        openFiles(active.history[active.index - 1]);
                        return;
                    }
                    goBack();
                }}
                title={t("Back")}
                type="button"
            >
                <ArrowLeftIcon/>
            </IconButton>

            <IconButton
                data-shortcut={prettyShortcut(shortcuts.goForward)}
                disabled={!canForward}
                onClick={(event) => {
                    if (active.index < active.history.length - 1 && wantsNewTab(event)) {
                        openFiles(active.history[active.index + 1]);
                        return;
                    }
                    goForward();
                }}
                title={t("Forward")}
                type="button"
            >
                <ArrowRightIcon/>
            </IconButton>

            <IconButton
                data-shortcut={prettyShortcut(shortcuts.goUp)}
                disabled={kind !== "files" || !activeParent}
                onClick={(event) => {
                    if (!activeParent) return;
                    if (wantsNewTab(event)) openFiles(activeParent);
                    else navigate(activeParent);
                }}
                title={t("Up one level")}
                type="button"
            >
                <ArrowUpIcon/>
            </IconButton>

            <PathBar
                focusToken={locationFocus}
                icon={viewIcon}
                label={kind === "files" ? undefined : t(viewTitles[kind])}
                onContextMenu={kind === "files" ? (path, x, y) => setPathMenu({x, y, path}) : undefined}
                onNavigate={navigate}
                path={kind === "files" ? activeFolder : location}
            />

            {kind === "files" && (!archived || archiveWritable) && (
                <IconButton
                    onClick={(event) => openCreateMenu(
                        event,
                        activeFolder,
                        () => void load(active.id, activeFolder, true),
                    )}
                    title={t("New folder or file")}
                    type="button"
                >
                    <PlusIcon/>
                </IconButton>
            )}

            <IconButton
                data-shortcut={prettyShortcut(shortcuts.find)}
                onClick={() => kind === "files" ? openFind() : openViewFind()}
                title={t("Search")}
                type="button"
            >
                <SearchIcon/>
            </IconButton>

            {selectionCounts.primary > 0 && (
                <>
                    <ToolbarSeparator/>
                    <IconButton
                        onClick={(event) => requestSelectionMenu("primary", event)}
                        title={t("Selection menu")}
                        type="button"
                    >
                        <MenuIcon/>
                    </IconButton>
                </>
            )}

            {archived && (
                <ArchiveActions>
                    <ToolbarSeparator/>
                    {archiveEncrypted && (
                        <ArchiveEncrypted title={t("This archive is encrypted and asks for a password when opened.")}>
                            <LockIcon size={12}/>
                            {t("Encrypted")}
                        </ArchiveEncrypted>
                    )}
                    <IconButton
                        onClick={() => void chooseExtractFolder()}
                        onContextMenu={(event) => {
                            event.preventDefault();
                            setExtractMenu({x: event.clientX, y: event.clientY});
                        }}
                        title={t("Extract archive")}
                        type="button"
                    >
                        <ArchiveIcon/>
                    </IconButton>
                    <SelectMenu
                        icon={<GlobeIcon size={15}/>}
                        onChange={changeArchiveEncoding}
                        options={ArchiveEncodings.map((option) => ({...option, label: t(option.label)}))}
                        tooltip={`${t("Archive encoding")}: ${t(ArchiveEncodings.find((option) => option.value === String(archiveEncoding))?.label ?? "Auto")}`}
                        value={String(archiveEncoding)}
                    />
                </ArchiveActions>
            )}
        </Toolbar>
    );

    const pageFind: PageFind | null = viewFind.open
        ? {...viewFind, index: viewFindIndex}
        : null;

    return (
        <QuickAccessProvider value={quickAccess}>
            <Root $rounded={corners}>
                <Wallpaper settings={settings}/>
                <TitleBar
                    activeId={active.id}
                    onClose={closeTab}
                    onNewTab={() => openFiles()}
                    onReorder={moveTab}
                    onTransferToTab={transferTo}
                    onSelect={setActiveId}
                    onViewChange={changeView}
                    onColumns={setColumns}
                    onShowImages={setShowImages}
                    showImages={showImages}
                    tasks={tasks}
                    onClearTasks={clearFinishedTasks}
                    activityOpen={activityOpen}
                    onActivityOpenChange={setActivityOpen}
                    trayCount={trayItems.length + clipboardItems.length}
                    trayVisible={trayVisible}
                    onToggleTray={toggleTray}
                    split={splitActive}
                    canSplit={kind === "files"}
                    onToggleSplit={toggleSplit}
                    details={detailsVisible}
                    canDetails={kind === "files" || kind === "recycle" || kind === "gallery"}
                    onToggleDetails={() => setDetailsVisible((visible) => !visible)}
                    currentFolder={kind === "files" && !isShareLocation(activeFolder) ? activeFolder : ""}
                    shortcuts={shortcuts}
                    view={view}
                    tabs={tabs.filter((tab) => !tab.hidden).map((tab) => {
                        const tabKind = kindOf(tab);
                        const folder = folderOf(tab);
                        const partner = tab.splitWith
                            ? tabs.find((item) => item.id === tab.splitWith)
                            : undefined;
                        const partnerFolder = partner ? folderOf(partner) : "";

                        return {
                            id: tab.id,
                            kind: tabKind,
                            path: partner ? `${folder}  |  ${partnerFolder}` : folder,
                            place: tabKind === "files" ? quickPlace(quickAccess, folder) : undefined,
                            archive: tabKind === "files" && isArchiveLocation(folder),
                            split: Boolean(partner),
                            title: tabKind === "files"
                                ? quickName(quickAccess, folder, baseName(folder) || t("Files"))
                                : t(viewTitles[tabKind]),
                            partner: partner
                                ? {
                                    title: quickName(quickAccess, partnerFolder, baseName(partnerFolder) || t("Files")),
                                    place: quickPlace(quickAccess, partnerFolder),
                                }
                                : undefined,
                        };
                    })}
                />

                <Body>
                    <Sidebar
                        activeKind={kind}
                        currentPath={kind === "files" ? location : ""}
                        drives={drives}
                        historyVersion={historyVersion}
                        onNavigate={navigate}
                        onOpenView={openView}
                        homePath={places.find((place) => place.kind === "home")?.path ?? ""}
                        places={places}
                        recent={recent}
                        recentLimit={recentLimit}
                        version={settingsVersion}
                    />

                    <Main>
                        {kind !== "files" && mainToolbar}

                        <ViewShell key={kind}>
                            {kind !== "files" && viewFind.open && (
                                <FindBar
                                    current={viewFindIndex}
                                    focusToken={viewFindFocus}
                                    matchCase={viewFind.matchCase}
                                    mode={viewFind.mode}
                                    onClose={closeViewFind}
                                    onMatchCase={() => setViewFind((current) => ({
                                        ...current,
                                        matchCase: !current.matchCase
                                    }))}
                                    onMode={() => setViewFind((current) => ({
                                        ...current,
                                        mode: current.mode === "dim" ? "hide" : "dim",
                                    }))}
                                    onNext={() => stepViewFind(1)}
                                    onPrevious={() => stepViewFind(-1)}
                                    onQuery={(query) => setViewFind((current) => ({...current, query}))}
                                    onRegex={() => setViewFind((current) => ({...current, regex: !current.regex}))}
                                    placeholder={t("Search")}
                                    query={viewFind.query}
                                    regex={viewFind.regex}
                                    total={viewFindTotal}
                                    onSelectMatches={kind === "gallery" || kind === "recycle"
                                        ? () => setSelectMatchesToken((token) => token + 1)
                                        : undefined}
                                />
                            )}
                            {kind === "files" ? (
                                splitActive && secondary ? (
                                    <Split ref={splitRef}>
                                        <Pane style={{flex: splitRatio}}>
                                            <PaneToolbar
                                                $active={activePane === "primary"}
                                                onPointerDown={() => setActivePane("primary")}
                                            >
                                                <IconButton
                                                    data-shortcut={prettyShortcut(shortcuts.goBack)}
                                                    disabled={!canBack}
                                                    onClick={(event) => {
                                                        const index = active.index - 1;
                                                        if (index < 0) return;
                                                        if (wantsNewTab(event)) openFiles(active.history[index]);
                                                        else void goTo(active.id, active.history[index], index);
                                                    }}
                                                    title={t("Back")}
                                                    type="button"
                                                >
                                                    <ArrowLeftIcon/>
                                                </IconButton>
                                                <IconButton
                                                    data-shortcut={prettyShortcut(shortcuts.goForward)}
                                                    disabled={!canForward}
                                                    onClick={(event) => {
                                                        const index = active.index + 1;
                                                        if (index >= active.history.length) return;
                                                        if (wantsNewTab(event)) openFiles(active.history[index]);
                                                        else void goTo(active.id, active.history[index], index);
                                                    }}
                                                    title={t("Forward")}
                                                    type="button"
                                                >
                                                    <ArrowRightIcon/>
                                                </IconButton>
                                                <IconButton
                                                    data-shortcut={prettyShortcut(shortcuts.goUp)}
                                                    disabled={!activeParent}
                                                    onClick={(event) => {
                                                        if (!activeParent) return;
                                                        if (wantsNewTab(event)) openFiles(activeParent);
                                                        else void load(active.id, activeParent);
                                                    }}
                                                    title={t("Up one level")}
                                                    type="button"
                                                >
                                                    <ArrowUpIcon/>
                                                </IconButton>
                                                <PathBar
                                                    focusToken={activePane === "primary" ? locationFocus : undefined}
                                                    onContextMenu={(path, x, y) => setPathMenu({x, y, path})}
                                                    onNavigate={(path, newTab) => newTab
                                                        ? openFiles(path)
                                                        : void load(active.id, path)}
                                                    path={activeFolder}
                                                />
                                                <IconButton
                                                    onClick={(event) => openCreateMenu(
                                                        event,
                                                        activeFolder,
                                                        () => void load(active.id, activeFolder, true),
                                                    )}
                                                    title={t("New folder or file")}
                                                    type="button"
                                                >
                                                    <PlusIcon/>
                                                </IconButton>
                                                <IconButton
                                                    data-shortcut={prettyShortcut(shortcuts.find)}
                                                    onClick={openFind}
                                                    title={t("Search")}
                                                    type="button"
                                                >
                                                    <SearchIcon/>
                                                </IconButton>
                                                {selectionCounts.primary > 0 && (
                                                    <>
                                                        <ToolbarSeparator/>
                                                        <IconButton
                                                            onClick={(event) => requestSelectionMenu("primary", event)}
                                                            title={t("Selection menu")}
                                                            type="button"
                                                        >
                                                            <MenuIcon/>
                                                        </IconButton>
                                                    </>
                                                )}
                                            </PaneToolbar>
                                            {filePane(active, true)}
                                            {activePane === "primary" && findBar}
                                        </Pane>
                                        <SplitDivider
                                            onDoubleClick={() => setSplitRatio(0.5)}
                                            onPointerDown={startSplitDrag}
                                            title={t("Drag to resize; double-click to reset")}
                                        />
                                        <Pane $enter style={{flex: 1 - splitRatio}}>
                                            <PaneToolbar
                                                $active={activePane === "secondary"}
                                                onPointerDown={() => setActivePane("secondary")}
                                            >
                                                <IconButton
                                                    data-shortcut={prettyShortcut(shortcuts.goBack)}
                                                    disabled={secondary.index <= 0}
                                                    onClick={(event) => {
                                                        const index = secondary.index - 1;
                                                        if (index < 0) return;
                                                        if (wantsNewTab(event)) openFiles(secondary.history[index]);
                                                        else void goTo(secondary.id, secondary.history[index], index);
                                                    }}
                                                    title={t("Back")}
                                                    type="button"
                                                >
                                                    <ArrowLeftIcon/>
                                                </IconButton>
                                                <IconButton
                                                    data-shortcut={prettyShortcut(shortcuts.goForward)}
                                                    disabled={secondary.index >= secondary.history.length - 1}
                                                    onClick={(event) => {
                                                        const index = secondary.index + 1;
                                                        if (index >= secondary.history.length) return;
                                                        if (wantsNewTab(event)) openFiles(secondary.history[index]);
                                                        else void goTo(secondary.id, secondary.history[index], index);
                                                    }}
                                                    title={t("Forward")}
                                                    type="button"
                                                >
                                                    <ArrowRightIcon/>
                                                </IconButton>
                                                <IconButton
                                                    data-shortcut={prettyShortcut(shortcuts.goUp)}
                                                    disabled={!secondaryParent}
                                                    onClick={(event) => {
                                                        if (!secondaryParent) return;
                                                        if (wantsNewTab(event)) openFiles(secondaryParent);
                                                        else void load(secondary.id, secondaryParent);
                                                    }}
                                                    title={t("Up one level")}
                                                    type="button"
                                                >
                                                    <ArrowUpIcon/>
                                                </IconButton>
                                                <PathBar
                                                    focusToken={activePane === "secondary" ? locationFocus : undefined}
                                                    onContextMenu={(path, x, y) => setPathMenu({x, y, path})}
                                                    onNavigate={(path, newTab) => newTab
                                                        ? openFiles(path)
                                                        : void load(secondary.id, path)}
                                                    path={secondaryFolder}
                                                />
                                                <IconButton
                                                    onClick={(event) => openCreateMenu(
                                                        event,
                                                        secondaryFolder,
                                                        () => void load(secondary.id, secondaryFolder, true),
                                                    )}
                                                    title={t("New folder or file")}
                                                    type="button"
                                                >
                                                    <PlusIcon/>
                                                </IconButton>
                                                <IconButton
                                                    data-shortcut={prettyShortcut(shortcuts.find)}
                                                    onClick={openFind}
                                                    title={t("Search")}
                                                    type="button"
                                                >
                                                    <SearchIcon/>
                                                </IconButton>
                                                {selectionCounts.secondary > 0 && (
                                                    <>
                                                        <ToolbarSeparator/>
                                                        <IconButton
                                                            onClick={(event) => requestSelectionMenu("secondary", event)}
                                                            title={t("Selection menu")}
                                                            type="button"
                                                        >
                                                            <MenuIcon/>
                                                        </IconButton>
                                                    </>
                                                )}
                                            </PaneToolbar>
                                            {filePane(secondary, false)}
                                            {activePane === "secondary" && findBar}
                                        </Pane>
                                        <PreviewPane
                                            info={detailsInfo}
                                            onWidth={resizeDetails}
                                            open={detailsVisible}
                                            videoAudio={settings?.previewVideoAudio ?? false}
                                            videoAutoplay={settings?.previewVideoAutoplay ?? false}
                                            width={detailsWidth}
                                        />
                                    </Split>
                                ) : (
                                    <FileArea>
                                        <FileColumn>
                                            {mainToolbar}
                                            <Files>
                                                {filePane(active, true)}
                                                {findBar}
                                            </Files>
                                        </FileColumn>
                                        <PreviewPane
                                            info={primaryPreview}
                                            onWidth={resizeDetails}
                                            open={detailsVisible}
                                            videoAudio={settings?.previewVideoAudio ?? false}
                                            videoAutoplay={settings?.previewVideoAutoplay ?? false}
                                            width={detailsWidth}
                                        />
                                    </FileArea>
                                )
                            ) : kind === "home" ? (
                                <OverviewView
                                    drives={drives}
                                    find={pageFind}
                                    historyVersion={historyVersion}
                                    onSearchMatches={setViewFindTotal}
                                    homePath={places.find((place) => place.kind === "home")?.path ?? ""}
                                    onDrivesChanged={reloadDrives}
                                    onHistoryChanged={() => setHistoryVersion((current) => current + 1)}
                                    onAddToTray={(paths) => void addTrayPaths(paths)}
                                    onAddFavorite={(paths) => void addFavoritePaths(paths)}
                                    onRemoveFavorite={(paths) => void removeFavoritePaths(paths)}
                                    favoritePaths={favoritePaths}
                                    onExtractArchive={(path, mode) => void extractArchiveTo(path, mode)}
                                    settingsVersion={settingsVersion}
                                    onOpen={navigate}
                                    onLayoutChanged={reloadSettings}
                                    onPlacesChanged={setPlaces}
                                    onRecentCleared={reloadRecent}
                                    places={places}
                                    recent={recent}
                                    recentLimit={recentLimit}
                                    visibilityVersion={visibilityVersion}
                                />
                            ) : kind === "settings" ? (
                                <SettingsView
                                    appInfo={appInfo}
                                    find={pageFind}
                                    focusSection={settingsFocus}
                                    onSearchMatches={setViewFindTotal}
                                    onSettingsChanged={reloadSettings}
                                />
                            ) : kind === "gallery" ? (
                                <GalleryView
                                    confirmDelete={settings?.confirmDelete ?? false}
                                    find={pageFind}
                                    onSearchMatches={setViewFindTotal}
                                    openOnSingleClick={settings?.openOnSingleClick ?? false}
                                    onAddToTray={(paths) => void addTrayPaths(paths)}
                                    onAddFavorite={(paths) => void addFavoritePaths(paths)}
                                    onRemoveFavorite={(paths) => void removeFavoritePaths(paths)}
                                    favoritePaths={favoritePaths}
                                    onExtractArchive={(path, mode) => void extractArchiveTo(path, mode)}
                                    shortcuts={shortcuts}
                                    showCheckboxes={settings?.showCheckboxes ?? true}
                                    selectMatchesToken={selectMatchesToken}
                                    showDetails={detailsVisible}
                                    videoAudio={settings?.previewVideoAudio ?? false}
                                    videoAutoplay={settings?.previewVideoAutoplay ?? false}
                                    view={view}
                                />
                            ) : (
                                <RecycleView
                                    find={pageFind}
                                    onOpenLocation={navigate}
                                    onShowDetails={() => setDetailsVisible(true)}
                                    platform={appInfo?.platform}
                                    selectMatchesToken={selectMatchesToken}
                                    showDetails={detailsVisible}
                                    videoAudio={settings?.previewVideoAudio ?? false}
                                    videoAutoplay={settings?.previewVideoAutoplay ?? false}
                                />
                            )}
                        </ViewShell>

                        <StatusBar>
                            <span>{kind === "files" && active.listing ? statusLine(t, active.listing) : ""}</span>
                            {appInfo ? (
                                <StatusRight>
                                    <span>v{appInfo.version} · {appInfo.platform}</span>
                                    {appInfo.debug && <DebugTag>debug</DebugTag>}
                                    {update?.available && (
                                        <UpdatePill
                                            onClick={() => {
                                                setSettingsFocus("updates");
                                                openView("settings");
                                            }}
                                            title={t("Version {version} is available.", {version: update.latest})}
                                            type="button"
                                        >
                                            <UpdateDot/>
                                            {t("Update available")}
                                        </UpdatePill>
                                    )}
                                </StatusRight>
                            ) : <span>{t("browser preview")}</span>}
                        </StatusBar>
                    </Main>
                </Body>

                <FileTray
                    clipboardItems={clipboardItems}
                    clipboardMove={clipboardMove}
                    currentDirectory={kind === "files" ? location : ""}
                    items={trayItems}
                    onAdd={(paths) => void addTrayPaths(paths)}
                    onClear={clearTrayItems}
                    onClose={() => setTrayVisible(false)}
                    onCopyToClipboard={(paths) => void copyTrayToClipboard(paths)}
                    onPosition={moveTray}
                    onRemove={removeTrayItems}
                    onTransfer={transferTo}
                    position={trayPosition}
                    visible={trayVisible}
                />

                {createMenu && (
                    <FileMenu
                        creationOnly
                        directory={createMenu.directory}
                        menu={{x: createMenu.x, y: createMenu.y, paths: [], background: true}}
                        onClose={() => setCreateMenu(null)}
                        onCreateFile={(extension) => void createItem(extension)}
                        onCreateFolder={(caseSensitive) => void createItem(null, caseSensitive)}
                        shortcuts={shortcuts}
                    />
                )}

                {pathMenu && (
                    <FileMenu
                        allowCompression
                        directory={parentOf(pathMenu.path) ?? pathMenu.path}
                        menu={{x: pathMenu.x, y: pathMenu.y, paths: [pathMenu.path]}}
                        onAddToTray={(paths) => void addTrayPaths(paths)}
                        onAddFavorite={(paths) => void addFavoritePaths(paths)}
                        onRemoveFavorite={(paths) => void removeFavoritePaths(paths)}
                        favoritePaths={favoritePaths}
                        onExtractArchive={(path, mode) => void extractArchiveTo(path, mode)}
                        onArchiveCreated={(created) => {
                            if (created) refreshFolderTabs(parentOf(pathMenu.path) ?? pathMenu.path);
                        }}
                        onClose={() => setPathMenu(null)}
                        onCompressTo={(paths, name) => setPathCompress({paths, name})}
                        onCopy={(paths, cut) => void copyPaths(paths, cut)}
                        onDelete={(paths) => void deletePaths(paths, false)
                            .then(() => refreshFolderTabs(parentOf(pathMenu.path) ?? pathMenu.path))}
                        onOpen={(path, newTab) => newTab ? openFiles(path) : void load(active.id, path)}
                        onOpenFile={(path) => void openFile(path)}
                        onPaste={(path) => void pasteInto(path).then((result) => {
                            if (result.ok) refreshFolderTabs(path);
                        })}
                        onRefresh={() => refreshFolderTabs(pathMenu.path)}
                        shortcuts={shortcuts}
                        target={{path: pathMenu.path, isDirectory: true}}
                    />
                )}

                {pathCompress && (
                    <CompressDialog
                        initialDirectory={parentOf(pathMenu?.path ?? activeFolder) ?? activeFolder}
                        initialName={pathCompress.name}
                        onCancel={() => setPathCompress(null)}
                        onCompress={async (options) => {
                            const result = await compressPaths(pathCompress.paths, options);
                            if (!result.ok && result.error) void showMessage(result.error);
                            return result.ok;
                        }}
                    />
                )}

                {extractMenu && (
                    <ContextMenu
                        items={[
                            {
                                label: t("Extract here"),
                                onSelect: () => void extractActiveArchive("here"),
                            },
                            {
                                label: t("Extract to a folder named after the archive"),
                                onSelect: () => void extractActiveArchive("named"),
                            },
                            {
                                label: t("Auto extract to the current folder"),
                                onSelect: () => void extractActiveArchive("auto"),
                            },
                        ]}
                        onClose={() => setExtractMenu(null)}
                        x={extractMenu.x}
                        y={extractMenu.y}
                    />
                )}

                {protectedDelete && (
                    <ProtectedDeleteDialog action={protectedDelete.prompt.action}
                                           delaySeconds={protectedDelete.prompt.delaySeconds}
                                           hits={protectedDelete.prompt.hits}
                                           key={protectedDelete.id}
                                           onCancel={() => {
                                               protectedDelete.resolve(false);
                                               setProtectedDelete(null);
                                           }}
                                           onConfirm={() => {
                                               protectedDelete.resolve(true);
                                               setProtectedDelete(null);
                                           }}
                                           permanent={protectedDelete.prompt.permanent}
                    />
                )}

                <MessageDialog/>
                <PasswordDialog/>
                {sharePair && (
                    <SharePairDialog
                        code={sharePair.code}
                        deviceName={sharePair.deviceName}
                        onAccept={() => {
                            void respondSharePair(sharePair.requestId, true);
                            setSharePair(null);
                        }}
                        onReject={() => {
                            void respondSharePair(sharePair.requestId, false);
                            setSharePair(null);
                        }}
                    />
                )}

                <TooltipLayer/>
                <ResizeHandles/>
            </Root>
        </QuickAccessProvider>
    );
}

const Root = styled.div<{ $rounded: boolean }>`
    position: relative;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    background: var(--bg-primary);

    html.has-wallpaper & {
        background: transparent;
    }

    /* An undecorated window gets no frame from the compositor, so the corners are drawn here. */
    border-radius: ${({$rounded}) => ($rounded ? "12px" : "0")};
    box-shadow: ${({$rounded}) => ($rounded
            ? "inset 0 0 0 1px var(--border-color), 0 24px 70px rgba(0, 0, 0, 0.38)"
            : "none")};
`;

const Body = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex: 1;
    min-height: 0;
    background: radial-gradient(1200px 650px at 12% -10%, rgba(var(--accent-secondary-rgb), 0.12), transparent 60%),
    radial-gradient(900px 520px at 110% 18%, rgba(var(--accent-rgb), 0.09), transparent 55%),
    linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-media) 100%);

    html.has-wallpaper & {
        background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.12), rgba(var(--bg-rgb), 0.3));
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`;

/** The page a tab shows; re-keyed by kind, so a different page slides in instead of snapping. */
const ViewShell = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${pageInStyle}
`;

const Toolbar = styled.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`;

const IconButton = styled.button`
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: color 130ms ease, border-color 130ms ease, background 130ms ease, transform 130ms ease;

    &:hover:not(:disabled) {
        color: var(--text-primary);
        border-color: var(--border-color-hover);
        background: rgba(var(--accent-rgb), 0.10);
        transform: translateY(-1px);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.32;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;

/* Archive-only actions sit past a divider, so they never look like ordinary browsing buttons. */
const ArchiveActions = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`;

/** A persistent reminder while browsing inside a password-protected archive. */
const ArchiveEncrypted = styled.span`
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    gap: 5px;
    padding: 3px 9px;
    border: 1px solid rgba(251, 191, 36, 0.45);
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.12);
    color: #fbbf24;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.03em;
    white-space: nowrap;
`;

const ToolbarSeparator = styled.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`;

const PaneToolbar = styled.div<{ $active?: boolean }>`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.07)" : "rgba(var(--bg-rgb), 0.58)"};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`;

const Split = styled.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;

const Pane = styled.div<{ $enter?: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter}) => $enter ? fadeInStyle : ""}
`;

const SplitDivider = styled.div`
    position: relative;
    width: 7px;
    flex-shrink: 0;
    cursor: col-resize;
    background: transparent;
    touch-action: none;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 3px;
        width: 1px;
        background: var(--border-color);
        transform-origin: center;
        transition: background 120ms ease, box-shadow 120ms ease;
        ${splitLineInStyle}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`;

const Files = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`;

/** The single-view file page: the toolbar and list share the width left of the details pane. */
const FileArea = styled.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`;

const FileColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`;

const StatusRight = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`;

/** A newer build exists; the pill is the way into the update section. */
const UpdatePill = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 9px;
    border: 1px solid rgba(var(--accent-rgb), 0.55);
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
    font: inherit;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
    animation: updatePulse 2.4s ease-in-out infinite;

    &:hover {
        border-color: var(--accent-primary);
        background: rgba(var(--accent-rgb), 0.32);
    }

    &:focus-visible {
        outline: 1px solid var(--border-color-focus);
        outline-offset: 2px;
    }

    @keyframes updatePulse {
        0%, 100% {
            box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0);
        }
        50% {
            box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.16);
        }
    }
`;

/** The dot that says a newer build is published. */
const UpdateDot = styled.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`;

/** Marks a development build in the status bar; release builds never render it. */
const DebugTag = styled.span`
    padding: 1px 6px;
    border: 1px solid rgba(251, 191, 36, 0.5);
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.14);
    color: #fbbf24;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`;

const StatusBar = styled.footer`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 7px 20px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
    font-variant-numeric: tabular-nums;
`;
