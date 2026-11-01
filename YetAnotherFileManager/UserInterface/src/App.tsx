import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import styled from "styled-components";
import {
    DefaultView,
    DefaultViewDefaults,
    listDirectory,
    listDirectoryCached,
    listDrives,
    listPlaces,
    listRecent,
    recordVisit,
    saveDirectoryView,
    saveTags,
    type DirectoryListing,
    type DirectoryView,
    type Drive,
    type Place,
    type RecentEntry,
    type ResolvedView,
} from "./api/files";
import {getSettings, saveOpenTabs, saveSettings, type AppSettings} from "./api/settings";
import {getAppInfo, type AppInfo} from "./api/system";
import {FileList} from "./components/FileList";
import {FindBar} from "./components/FindBar";
import {EmptyFind, matchesName, type FindState} from "./find";
import {QuickAccessProvider, quickName, quickPlace, type QuickAccess} from "./quick";
import {ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, GearIcon, ImageIcon, OverviewIcon, TrashIcon} from "./components/Icons";
import {OverviewView} from "./components/OverviewView";
import {PathBar} from "./components/PathBar";
import {RecycleView} from "./components/RecycleView";
import {SettingsView} from "./components/SettingsView";
import {GalleryView} from "./components/GalleryView";
import {Sidebar} from "./components/Sidebar";
import {TitleBar} from "./components/TitleBar";
import {viewTitles, type TabKind} from "./tabs";
import {buildPanels} from "./panels";
import {Native, ResizeHandles, useWindowCorners} from "@photino-net-utils/bridge";
import {baseName, formatBytes, normalizePath} from "./utils/format";
import {
    comboOf,
    DefaultShortcuts,
    isTyping,
    setClickModifier,
    type ShortcutMap,
} from "./shortcuts";

type ViewKind = Exclude<TabKind, "files">;

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
}

const ViewScheme = "yafm://";

const ViewNames: Record<string, ViewKind> = {
    overview: "home",
    home: "home",
    settings: "settings",
    recycle: "recycle",
    gallery: "gallery",
};

let nextTabId = 0;

/** The address of one of the built-in pages. */
function viewLocation(kind: ViewKind): string {
    return `${ViewScheme}${kind === "home" ? "overview" : kind}`;
}

/** Reads a yafm:// link, or answers null when the text is a folder path instead. */
function viewKind(location: string): ViewKind | null {
    if (!location.toLowerCase().startsWith(ViewScheme)) return null;

    const name = location.slice(ViewScheme.length).replace(/\/+$/, "").toLowerCase();

    return ViewNames[name] ?? null;
}

/** What the address bar sends: a folder path or a yafm:// link. */
function parseLocation(input: string): string | null {
    const value = input.trim();
    if (value.length === 0) return null;
    if (!value.toLowerCase().startsWith(ViewScheme)) return value;

    const kind = ViewNames[value.slice(ViewScheme.length).replace(/\/+$/, "").toLowerCase()];

    return kind ? viewLocation(kind) : null;
}

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

/** Paths from the host and from the interface differ only in separators and trailing slashes. */
function samePath(left: string, right: string): boolean {
    const normalize = (value: string) => value.replace(/[\\/]+/g, "\\").replace(/\\$/, "").toLowerCase();

    return normalize(left) === normalize(right);
}

/** What the folder adds up to: files right away, folders once their size has been measured. */
function statusLine(listing: DirectoryListing): string {    const total = listing.entries.reduce((sum, entry) => sum + (entry.isDirectory
        ? listing.folderSizes[entry.name] ?? 0
        : Math.max(entry.size, 0)), 0);

    return `${listing.entries.length} items · ${formatBytes(total)}`;
}

export default function App() {
    const [tabs, setTabs] = useState<Tab[]>(() => [createTab()]);
    const [activeId, setActiveId] = useState(() => tabs[0].id);
    const [places, setPlaces] = useState<Place[]>([]);
    const [drives, setDrives] = useState<Drive[]>([]);
    const [appInfo, setAppInfo] = useState<AppInfo | null>(null);
    const corners = useWindowCorners();
    const [find, setFind] = useState<FindState>(EmptyFind);
    const [findIndex, setFindIndex] = useState(0);
    const [findFocus, setFindFocus] = useState(0);
    const [recent, setRecent] = useState<RecentEntry[]>([]);
    const [recentLimit, setRecentLimit] = useState(10);
    const [settings, setSettings] = useState<AppSettings | null>(null);
    const [historyVersion, setHistoryVersion] = useState(0);
    const [shortcuts, setShortcuts] = useState<ShortcutMap>(DefaultShortcuts);
    const [settingsVersion, setSettingsVersion] = useState(0);

    const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
    const kind = kindOf(active);
    const location = locationOf(active);

    // The directory's own mode/size/sort sit on top of the window-wide defaults; columns are global.
    const viewDefaults = settings?.defaultView ?? DefaultViewDefaults;
    const view: ResolvedView = {
        mode: active.view?.mode ?? viewDefaults.mode,
        iconSize: active.view?.iconSize || viewDefaults.iconSize || DefaultView.iconSize,
        gridSize: active.view?.gridSize || viewDefaults.gridSize || DefaultView.gridSize,
        sort: active.view?.sort ?? DefaultView.sort,
        sortDescending: active.view?.sortDescending ?? DefaultView.sortDescending,
        columns: viewDefaults.columns ?? DefaultViewDefaults.columns ?? [],
    };

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

    /** The Quick access icon only replaces the real one while the file types use the app's glyphs. */
    const quickAccess: QuickAccess = useMemo(() => ({
        places: quickPlaces,
        useIcons: settings?.systemIcons === false,
    }), [quickPlaces, settings?.systemIcons]);

    const viewIcon = kind === "home" ? <OverviewIcon size={13}/>
        : kind === "settings" ? <GearIcon size={13}/>
            : kind === "recycle" ? <TrashIcon size={13}/>
                : kind === "gallery" ? <ImageIcon size={13}/>
                    : undefined;

    // ---- search ----

    const searching = find.open && find.query.length > 0;

    /** The entries the current query matches, in list order; the find bar walks this. */
    const findHits = useMemo(
        () => searching && active.listing
            ? active.listing.entries
                .filter((entry) => matchesName(quickName(quickAccess, entry.fullPath, entry.name), find))
                .map((entry) => entry.fullPath)
            : [],
        [searching, find, active.listing, quickAccess],
    );

    // A new query starts again at the first hit; stepping through them leaves the query alone.
    useEffect(() => {
        setFindIndex(0);
    }, [find.query, find.matchCase, find.regex, active.listing?.path]);

    const findCurrent = findHits.length === 0 ? -1 : Math.min(findIndex, findHits.length - 1);

    const resetFind = useCallback(() => {
        setFind((current) => ({...current, open: false, query: ""}));
        setFindIndex(0);
    }, []);

    const openFind = useCallback(() => {
        setFind((current) => ({...current, open: true}));
        setFindFocus((token) => token + 1);
    }, []);

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
    const stateRef = useRef({tabs, activeId});
    stateRef.current = {tabs, activeId};

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
     * Paints the listing saved the last time the folder was opened, so the window never waits on the
     * disk to show something. The live listing takes over right after.
     */
    const showCached = useCallback(async (id: string, path: string | undefined, current: () => boolean) => {
        try {
            const cached = await listDirectoryCached(path);
            if (current() && cached.listing)
                patch(id, () => ({listing: cached.listing, view: cached.listing!.view ?? null}));
        } catch {
            // The cache is best effort; the live listing is still on its way.
        }
    }, [patch]);

    /** Opens a folder in a tab, recording it in that tab's history. */
    const load = useCallback(async (id: string, path?: string, keepFresh = false) => {
        const current = beginLoad(id);

        resetFind();

        // A refresh already has the same folder on screen, so the saved listing could only be older.
        const paintCache = !keepFresh || !stateRef.current.tabs.find((tab) => tab.id === id)?.listing;

        // A navigation clears the folder that was on screen so it cannot linger over the new one;
        // the saved listing fills the gap immediately. A refresh keeps what is already visible.
        patch(id, (tab) => ({
            listing: keepFresh ? tab.listing : null,
            loading: true,
            error: null,
            fresh: keepFresh && tab.fresh,
        }));

        try {
            if (paintCache) {
                await showCached(id, path, current);
                if (!current()) return;
            }

            const listing = await listDirectory(path);
            if (!current()) return;

            patch(id, (tab) => ({
                listing,
                view: listing.view ?? null,
                loading: false,
                fresh: false,
                history: [...tab.history.slice(0, tab.index + 1), listing.path],
                index: tab.index + 1,
            }));

            // A refresh shows the same folder again; only a real navigation counts as a visit.
            if (!keepFresh)
                void recordVisit(listing.path).then(() => setHistoryVersion((version) => version + 1));
        } catch (cause) {
            if (!current()) return;

            patch(id, () => ({loading: false, error: message(cause)}));
        }
    }, [beginLoad, patch, resetFind, showCached]);

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

        // Same as a navigation: the new folder starts empty and the saved listing fills it.
        patch(id, () => ({index, listing: null, loading: true, error: null}));

        try {
            await showCached(id, target, current);
            if (!current()) return;

            const listing = await listDirectory(target);
            if (!current()) return;

            patch(id, () => ({listing, view: listing.view ?? null, loading: false}));
        } catch (cause) {
            if (!current()) return;

            patch(id, () => ({loading: false, error: message(cause)}));
        }
    }, [beginLoad, patch, resetFind, showCached]);

    const openFiles = useCallback((path?: string) => {
        const tab = createTab(path ?? viewLocation("home"));

        setTabs((current) => [...current, tab]);
        setActiveId(tab.id);
        if (path) void load(tab.id, path);
    }, [load]);

    /** The sidebar and the overview replace the page the active tab shows. */
    const openView = useCallback((next: ViewKind) => {
        openLocation(stateRef.current.activeId, viewLocation(next));
    }, [openLocation]);

    const closeTab = useCallback((id: string) => {
        const {tabs: current, activeId: currentActive} = stateRef.current;

        if (current.length === 1) {
            // A window always keeps one tab; closing the last one starts over at the overview.
            const replacement = createTab();

            setTabs([replacement]);
            setActiveId(replacement.id);
            return;
        }

        const index = current.findIndex((tab) => tab.id === id);
        const remaining = current.filter((tab) => tab.id !== id);

        setTabs(remaining);
        if (currentActive === id)
            setActiveId(remaining[Math.min(index, remaining.length - 1)].id);
    }, []);

    const navigate = useCallback((target?: string, newTab = false) => {
        if (newTab) {
            openFiles(target);
            return;
        }

        openLocation(stateRef.current.activeId, target ?? viewLocation("home"));
    }, [openLocation, openFiles]);

    /**
     * Steps through the active tab's history. These read the tab from the ref so the keyboard
     * shortcuts stay stable, and so a long list of them does not re-register on every render.
     */
    const goBack = useCallback(() => {
        const {tabs, activeId} = stateRef.current;
        const tab = tabs.find((item) => item.id === activeId);

        if (tab && tab.index > 0)
            void goTo(tab.id, tab.history[tab.index - 1], tab.index - 1);
    }, [goTo]);

    const goForward = useCallback(() => {
        const {tabs, activeId} = stateRef.current;
        const tab = tabs.find((item) => item.id === activeId);

        if (tab && tab.index < tab.history.length - 1)
            void goTo(tab.id, tab.history[tab.index + 1], tab.index + 1);
    }, [goTo]);

    /** Goes to the folder above the one on screen, the way the toolbar's Up button does. */
    const goUp = useCallback(() => {
        const {tabs, activeId} = stateRef.current;
        const tab = tabs.find((item) => item.id === activeId);

        if (tab && kindOf(tab) === "files" && tab.listing?.parent)
            navigate(tab.listing.parent);
    }, [navigate]);

    const viewSave = useRef<number | null>(null);

    /** Applies a view change to the current directory. Columns are handled separately. */
    const changeView = useCallback((change: Partial<DirectoryView>) => {
        const {tabs, activeId} = stateRef.current;
        const tab = tabs.find((item) => item.id === activeId);
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

        patch(tab.id, () => ({view: next}));

        // Dragging the size slider would otherwise write the database on every pixel.
        if (viewSave.current !== null) window.clearTimeout(viewSave.current);
        viewSave.current = window.setTimeout(() => {
            viewSave.current = null;
            void saveDirectoryView(folder, next);
        }, 250);
    }, [patch]);

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

    /** Adds or removes one entry's tags; the folder index keeps them, so this stays optimistic. */
    const setEntryTags = useCallback((name: string, tags: string[]) => {
        const {tabs, activeId} = stateRef.current;
        const tab = tabs.find((item) => item.id === activeId);
        if (!tab || kindOf(tab) !== "files" || !tab.listing) return;

        const folder = folderOf(tab);
        const allTags = [...new Set([...tab.listing.allTags, ...tags])]
            .sort((left, right) => left.localeCompare(right));

        patch(tab.id, (current) => current.listing
            ? {
                listing: {
                    ...current.listing,
                    tags: {...current.listing.tags, [name]: tags},
                    allTags,
                },
            }
            : current);

        void saveTags(folder, name, tags);
    }, [patch]);

    /** A header click sorts by that column, and a second click flips the direction. */
    const sortBy = useCallback((column: string) => {
        changeView({
            sort: column,
            sortDescending: view.sort === column ? !view.sortDescending : false,
        });
    }, [changeView, view.sort, view.sortDescending]);

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

        const {tabs: current} = stateRef.current;

        // With nothing restored, the untouched first tab can show the path instead of staying empty.
        if (!afterRestored && current.length === 1 && current[0].fresh) {
            openLocation(current[0].id, paths[0]);
            for (const path of paths.slice(1)) openFiles(path);
            return;
        }

        for (const path of paths) openFiles(path);
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
    const openLocations = tabs.map(locationOf);
    const openLocationsKey = openLocations.join("\n");
    const activeIndex = Math.max(tabs.findIndex((tab) => tab.id === activeId), 0);

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

        if (first && kindOf(first) === "files")
            void load(first.id, undefined, true);

        reloadPlaces();
        reloadSettings();
        reloadDrives();
        void getAppInfo().then(setAppInfo, () => setAppInfo(null));
    }, [load, reloadPlaces, reloadSettings, reloadDrives]);

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
            if (isStartup && !restored.current) {
                pendingStartup.current.push(target);
                return;
            }

            if (isStartup && current.length === 1 && current[0].fresh)
                openLocation(current[0].id, target);
            else
                openFiles(target);
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

            setTabs((current) => current.map((tab) => tab.listing?.path === path
                ? {...tab, listing: {...tab.listing, folderSizes: {...tab.listing.folderSizes, ...sizes}}}
                : tab));
        });
    }, []);

    // Child counts arrive in the background the same way, for the Items column.
    useEffect(() => {
        if (!Native.available) return;

        return Native.on((evt) => {
            const event = evt as { type?: string; data?: { path?: string; counts?: Record<string, number> } };
            if (event.type !== "fs.counts" || typeof event.data?.path !== "string" || !event.data.counts) return;

            const {path, counts} = event.data;

            setTabs((current) => current.map((tab) => tab.listing?.path === path
                ? {...tab, listing: {...tab.listing, counts: {...tab.listing.counts, ...counts}}}
                : tab));
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
                closeTab(stateRef.current.activeId);
            } else if (combo === shortcuts.newTab) {
                event.preventDefault();
                openFiles();
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
                openFind();
            } else if (kind === "files" && event.key.length === 1 && event.key !== " "
                && !event.ctrlKey && !event.altKey && !event.metaKey) {
                // Typing anywhere in a folder starts a search with that letter; the first hit jumps.
                event.preventDefault();
                startFind(event.key);
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [shortcuts, kind, find.open, closeTab, openFiles, goBack, goForward, goUp, openFind, resetFind, startFind]);

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

    // Only the folder on screen is watched; the host tells us when something in it changes.
    useEffect(() => {
        if (!Native.available) return;

        // The overview watches its own folders, so this only speaks for a files tab.
        if (kind !== "files") return;

        Native.send({type: "fs.watch", payload: {paths: [location]}});
    }, [kind, location]);

    // A change in the folder that is on screen refreshes it in place, without a spinner or a click.
    useEffect(() => {
        if (!Native.available) return;

        return Native.on((evt) => {
            const event = evt as { type?: string; data?: { path?: string } };
            if (event.type !== "fs.changed" || typeof event.data?.path !== "string") return;

            const {tabs, activeId} = stateRef.current;
            const tab = tabs.find((item) => item.id === activeId);

            if (!tab || kindOf(tab) !== "files" || !samePath(folderOf(tab), event.data.path)) return;

            // Only the entries are refreshed; sizes are measured when the folder is entered.
            void listDirectory(event.data.path, false)
                .then((listing) => patch(tab.id, () => ({listing})), () => undefined);
        });
    }, [patch]);

    const canBack = active.index > 0;
    const canForward = active.index < active.history.length - 1;

    return (
        <QuickAccessProvider value={quickAccess}>
        <Root $rounded={corners}>
            <TitleBar
                activeId={active.id}
                onClose={closeTab}
                onNewTab={() => openFiles()}
                onReorder={moveTab}
                onSelect={setActiveId}
                onViewChange={changeView}
                onColumns={setColumns}
                view={view}
                tabs={tabs.map((tab) => {
                    const tabKind = kindOf(tab);
                    const folder = folderOf(tab);

                    return {
                        id: tab.id,
                        kind: tabKind,
                        path: folder,
                        place: tabKind === "files" ? quickPlace(quickAccess, folder) : undefined,
                        title: tabKind === "files"
                            ? quickName(quickAccess, folder, baseName(folder) || "Files")
                            : viewTitles[tabKind],
                    };
                })}
            />

            <Body>
                <Sidebar
                    activeKind={kind}
                    currentPath={kind === "files" ? location : ""}
                    drives={drives}
                    historyVersion={historyVersion}
                    onNavigate={(path) => navigate(path)}
                    onOpenView={openView}
                    homePath={places.find((place) => place.kind === "home")?.path ?? ""}
                    places={places}
                    recent={recent}
                    recentLimit={recentLimit}
                    version={settingsVersion}
                />

                <Main>
                    <Toolbar>
                        <IconButton disabled={!canBack} onClick={goBack} title="Back" type="button">
                            <ArrowLeftIcon/>
                        </IconButton>

                        <IconButton disabled={!canForward} onClick={goForward} title="Forward" type="button">
                            <ArrowRightIcon/>
                        </IconButton>

                        <IconButton
                            disabled={kind !== "files" || !active.listing?.parent}
                            onClick={() => active.listing?.parent && navigate(active.listing.parent)}
                            title="Up one level"
                            type="button"
                        >
                            <ArrowUpIcon/>
                        </IconButton>

                        <PathBar
                            icon={viewIcon}
                            label={kind === "files" ? undefined : viewTitles[kind]}
                            onNavigate={navigate}
                            path={kind === "files" ? folderOf(active) : location}
                        />
                    </Toolbar>

                    {kind === "files" ? (
                        <Files>
                            <FileList
                                error={active.error}
                                find={{...find, currentPath: findCurrent < 0 ? null : findHits[findCurrent]}}
                                listing={active.listing}
                                loading={active.loading}
                                onOpen={navigate}
                                onSetTags={setEntryTags}
                                onSort={sortBy}
                                view={view}
                            />

                            {find.open && (
                                <FindBar
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
                                />
                            )}
                        </Files>
                    ) : kind === "home" ? (
                        <OverviewView
                            drives={drives}
                            historyVersion={historyVersion}
                            homePath={places.find((place) => place.kind === "home")?.path ?? ""}
                            onDrivesChanged={reloadDrives}
                            onHistoryChanged={() => setHistoryVersion((current) => current + 1)}
                            onOpen={navigate}
                            onLayoutChanged={reloadSettings}
                            onPlacesChanged={setPlaces}
                            onRecentCleared={reloadRecent}
                            places={places}
                            recent={recent}
                            recentLimit={recentLimit}
                        />
                    ) : kind === "settings" ? (
                        <SettingsView appInfo={appInfo} onSettingsChanged={reloadSettings}/>
                    ) : kind === "gallery" ? (
                        <GalleryView/>
                    ) : (
                        <RecycleView/>
                    )}

                    <StatusBar>
                        <span>{kind === "files" && active.listing ? statusLine(active.listing) : ""}</span>
                        <span>{appInfo ? `v${appInfo.version} · ${appInfo.platform}` : "browser preview"}</span>
                    </StatusBar>
                </Main>
            </Body>

            <ResizeHandles/>
        </Root>
        </QuickAccessProvider>
    );
}

const Root = styled.div<{ $rounded: boolean }>`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    background: var(--bg-primary);

    /* An undecorated window gets no frame from the compositor, so the corners are drawn here. */
    border-radius: ${({$rounded}) => ($rounded ? "10px" : "0")};
    box-shadow: ${({$rounded}) => ($rounded ? "inset 0 0 0 1px var(--border-color)" : "none")};
`;

const Body = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
    background:
        radial-gradient(1200px 600px at 15% -10%, rgba(99, 102, 241, 0.12), transparent 60%),
        radial-gradient(900px 500px at 110% 20%, rgba(59, 130, 246, 0.08), transparent 55%),
        var(--bg-primary);
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`;

const Toolbar = styled.header`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(11, 15, 25, 0.55);
    backdrop-filter: blur(8px);
`;

const IconButton = styled.button`
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    cursor: pointer;
    transition: color 120ms ease, border-color 120ms ease, background 120ms ease;

    &:hover:not(:disabled) {
        color: var(--text-primary);
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;

const Files = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`;

const StatusBar = styled.footer`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 8px 22px;
    border-top: 1px solid var(--border-color);
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`;
