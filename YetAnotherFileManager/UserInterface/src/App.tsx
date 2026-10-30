import {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {
    listDirectory,
    listDrives,
    listPlaces,
    listRecent,
    type DirectoryListing,
    type Drive,
    type Place,
    type RecentEntry,
} from "./api/files";
import {getSettings} from "./api/settings";
import {getAppInfo, type AppInfo} from "./api/system";
import {FileList} from "./components/FileList";
import {ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, SearchIcon} from "./components/Icons";
import {OverviewView} from "./components/OverviewView";
import {PathBar} from "./components/PathBar";
import {RecycleView} from "./components/RecycleView";
import {SettingsView} from "./components/SettingsView";
import {GalleryView} from "./components/GalleryView";
import {Sidebar} from "./components/Sidebar";
import {TitleBar} from "./components/TitleBar";
import {viewTitles, type TabKind} from "./tabs";
import {Native, ResizeHandles, useWindowCorners} from "@photino-net-utils/bridge";
import {baseName, formatBytes} from "./utils/format";
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
    const [filter, setFilter] = useState("");
    const [recent, setRecent] = useState<RecentEntry[]>([]);
    const [recentLimit, setRecentLimit] = useState(10);
    const [shortcuts, setShortcuts] = useState<ShortcutMap>(DefaultShortcuts);
    const [settingsVersion, setSettingsVersion] = useState(0);

    const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
    const kind = kindOf(active);
    const location = locationOf(active);

    // Handlers that outlive a render (the native event subscription) read the latest state here.
    const stateRef = useRef({tabs, activeId});
    stateRef.current = {tabs, activeId};

    const patch = useCallback((id: string, update: (tab: Tab) => Partial<Tab>) => {
        setTabs((current) => current.map((tab) => tab.id === id ? {...tab, ...update(tab)} : tab));
    }, []);

    /** Opens a folder in a tab, recording it in that tab's history. */
    const load = useCallback(async (id: string, path?: string, keepFresh = false) => {
        patch(id, (tab) => ({loading: true, error: null, fresh: keepFresh && tab.fresh}));
        setFilter("");

        try {
            const listing = await listDirectory(path);

            patch(id, (tab) => ({
                listing,
                loading: false,
                fresh: false,
                history: [...tab.history.slice(0, tab.index + 1), listing.path],
                index: tab.index + 1,
            }));
        } catch (cause) {
            patch(id, () => ({loading: false, error: message(cause)}));
        }
    }, [patch]);

    /** Goes to a location: a folder is listed, a yafm:// page is simply shown. */
    const openLocation = useCallback((id: string, target: string) => {
        const parsed = parseLocation(target);
        if (!parsed) return;

        if (viewKind(parsed)) {
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
    }, [load, patch]);

    /** Shows a location already in the tab's history, without adding it again. */
    const goTo = useCallback(async (id: string, target: string, index: number) => {
        setFilter("");

        if (viewKind(target)) {
            patch(id, () => ({index, listing: null, loading: false, error: null}));
            return;
        }

        patch(id, () => ({index, loading: true, error: null}));

        try {
            const listing = await listDirectory(target);
            patch(id, () => ({listing, loading: false}));
        } catch (cause) {
            patch(id, () => ({loading: false, error: message(cause)}));
        }
    }, [patch]);

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

    const reloadSettings = useCallback(() => {
        void getSettings().then((settings) => {
            setRecentLimit(settings.recentLimit);

            const keys = {...DefaultShortcuts, ...settings.shortcuts};
            setShortcuts(keys);
            setClickModifier(keys.openInNewTab);
            setSettingsVersion((current) => current + 1);
        }, () => setRecentLimit(10));
    }, []);

    const reloadRecent = useCallback(() => {
        void listRecent().then(setRecent, () => setRecent([]));
    }, []);

    const reloadDrives = useCallback(() => {
        void listDrives().then(setDrives, () => setDrives([]));
    }, []);

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

    // Global shortcuts; a field that has the focus keeps the keys to itself.
    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (isTyping(event.target)) return;

            const combo = comboOf(event);

            if (combo === shortcuts.closeTab) {
                event.preventDefault();
                closeTab(stateRef.current.activeId);
            } else if (combo === shortcuts.newTab) {
                event.preventDefault();
                openFiles();
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [shortcuts, closeTab, openFiles]);

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

    const goBack = () => {
        if (canBack) void goTo(active.id, active.history[active.index - 1], active.index - 1);
    };

    const goForward = () => {
        if (canForward) void goTo(active.id, active.history[active.index + 1], active.index + 1);
    };

    return (
        <Root $rounded={corners}>
            <TitleBar
                activeId={active.id}
                onClose={closeTab}
                onNewTab={() => openFiles()}
                onReorder={moveTab}
                onSelect={setActiveId}
                tabs={tabs.map((tab) => {
                    const tabKind = kindOf(tab);
                    const folder = folderOf(tab);

                    return {
                        id: tab.id,
                        kind: tabKind,
                        path: folder,
                        title: tabKind === "files"
                            ? baseName(folder) || "Files"
                            : viewTitles[tabKind],
                    };
                })}
            />

            <Body>
                <Sidebar
                    activeKind={kind}
                    currentPath={kind === "files" ? location : ""}
                    drives={drives}
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
                            label={kind === "files" ? undefined : viewTitles[kind]}
                            onNavigate={navigate}
                            path={kind === "files" ? folderOf(active) : location}
                            places={places}
                        />

                        {kind === "files" && (
                            <Search>
                                <SearchIcon/>
                                <input
                                    aria-label="Filter this folder"
                                    onChange={(event) => setFilter(event.target.value)}
                                    placeholder="Filter…"
                                    spellCheck={false}
                                    type="search"
                                    value={filter}
                                />
                            </Search>
                        )}
                    </Toolbar>

                    {kind === "files" ? (
                        <FileList
                            error={active.error}
                            filter={filter}
                            listing={active.listing}
                            loading={active.loading}
                            onOpen={navigate}
                        />
                    ) : kind === "home" ? (
                        <OverviewView
                            drives={drives}
                            homePath={places.find((place) => place.kind === "home")?.path ?? ""}
                            onDrivesChanged={reloadDrives}
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

const Search = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 190px;
    flex-shrink: 0;
    padding: 0 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-muted);

    &:focus-within {
        border-color: var(--border-color-focus);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
    }

    input {
        width: 100%;
        padding: 7px 0;
        border: 0;
        outline: 0;
        background: transparent;
        color: var(--text-primary);
        font: inherit;
        font-size: 12px;

        &::placeholder {
            color: var(--text-muted);
        }
    }
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
