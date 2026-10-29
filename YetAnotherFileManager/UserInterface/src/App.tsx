import {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {listDirectory, listDrives, listPlaces, type DirectoryListing, type Drive, type Place} from "./api/files";
import {getAppInfo, type AppInfo} from "./api/system";
import {FileList} from "./components/FileList";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    RefreshIcon,
    SearchIcon,
} from "./components/Icons";
import {HomeView} from "./components/HomeView";
import {PathBar} from "./components/PathBar";
import {RecycleView} from "./components/RecycleView";
import {SettingsView} from "./components/SettingsView";
import {Sidebar} from "./components/Sidebar";
import {TitleBar} from "./components/TitleBar";
import {viewTitles, type TabKind} from "./tabs";
import {Native, ResizeHandles} from "@photino-net-utils/bridge";
import {baseName} from "./utils/format";

interface Tab {
    id: string;
    kind: TabKind;
    path: string;
    listing: DirectoryListing | null;
    loading: boolean;
    error: string | null;
    /** Folders visited in this tab, so back and forward work per tab. */
    history: string[];
    index: number;
    /** Nothing has been opened in it yet, so a path arriving from the host can take it over. */
    fresh: boolean;
}

type ViewKind = Exclude<TabKind, "files">;

let nextTabId = 0;

function createTab(kind: TabKind = "files", path = ""): Tab {
    nextTabId += 1;

    return {
        id: `tab-${nextTabId}`,
        kind,
        path,
        listing: null,
        loading: kind === "files",
        error: null,
        history: [],
        index: -1,
        fresh: kind === "files",
    };
}

function message(cause: unknown): string {
    return cause instanceof Error ? cause.message : String(cause);
}

export default function App() {
    const [tabs, setTabs] = useState<Tab[]>(() => [createTab()]);
    const [activeId, setActiveId] = useState(() => tabs[0].id);
    const [places, setPlaces] = useState<Place[]>([]);
    const [drives, setDrives] = useState<Drive[]>([]);
    const [appInfo, setAppInfo] = useState<AppInfo | null>(null);
    const [filter, setFilter] = useState("");

    const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

    // Handlers that outlive a render (the native event subscription) read the latest state here.
    const stateRef = useRef({tabs, activeId});
    stateRef.current = {tabs, activeId};

    const patch = useCallback((id: string, update: (tab: Tab) => Partial<Tab>) => {
        setTabs((current) => current.map((tab) => tab.id === id ? {...tab, ...update(tab)} : tab));
    }, []);

    /** Opens a folder in a tab, recording it in that tab's history. */
    const load = useCallback(async (id: string, path?: string, keepFresh = false) => {
        patch(id, (tab) => ({kind: "files", loading: true, error: null, fresh: keepFresh && tab.fresh}));
        setFilter("");

        try {
            const listing = await listDirectory(path);

            patch(id, (tab) => ({
                listing,
                path: listing.path,
                loading: false,
                history: [...tab.history.slice(0, tab.index + 1), listing.path],
                index: tab.index + 1,
            }));
        } catch (cause) {
            patch(id, () => ({loading: false, error: message(cause)}));
        }
    }, [patch]);

    /** Shows a folder already in the tab's history, without adding it again. */
    const goTo = useCallback(async (id: string, path: string, index: number) => {
        patch(id, () => ({loading: true, error: null, index}));
        setFilter("");

        try {
            const listing = await listDirectory(path);
            patch(id, () => ({listing, path: listing.path, loading: false}));
        } catch (cause) {
            patch(id, () => ({loading: false, error: message(cause)}));
        }
    }, [patch]);

    const openFiles = useCallback((path?: string) => {
        const tab = createTab();

        setTabs((current) => [...current, tab]);
        setActiveId(tab.id);
        void load(tab.id, path);
    }, [load]);

    const openView = useCallback((kind: ViewKind) => {
        const existing = stateRef.current.tabs.find((tab) => tab.kind === kind);
        if (existing) {
            setActiveId(existing.id);
            return;
        }

        const tab = createTab(kind);
        setTabs((current) => [...current, tab]);
        setActiveId(tab.id);
    }, []);

    const closeTab = useCallback((id: string) => {
        const {tabs: current, activeId: currentActive} = stateRef.current;

        if (current.length === 1) {
            // A window always keeps one tab; closing the last one starts over at the home folder.
            const replacement = createTab();

            setTabs([replacement]);
            setActiveId(replacement.id);
            void load(replacement.id);
            return;
        }

        const index = current.findIndex((tab) => tab.id === id);
        const remaining = current.filter((tab) => tab.id !== id);

        setTabs(remaining);
        if (currentActive === id)
            setActiveId(remaining[Math.min(index, remaining.length - 1)].id);
    }, [load]);

    const navigate = useCallback((path?: string) => {
        void load(stateRef.current.activeId, path);
    }, [load]);

    useEffect(() => {
        // The first tab starts at the home folder without losing its "fresh" flag: a path the host
        // sends at startup then takes it over instead of opening a second, empty tab.
        void load(stateRef.current.activeId, undefined, true);
        void listPlaces().then(setPlaces, () => setPlaces([]));
        void listDrives().then(setDrives, () => setDrives([]));
        void getAppInfo().then(setAppInfo, () => setAppInfo(null));
    }, [load]);

    // The host pushes a path for command-line arguments and for a second launch (single instance).
    // It waits for `app.ready` first, because sending to a web view that is still loading crashes it.
    useEffect(() => {
        if (!Native.available) return;

        const unsubscribe = Native.on((evt) => {
            const event = evt as { type?: string; data?: { path?: unknown; startup?: unknown } };
            if (event.type !== "app.navigate" || typeof event.data?.path !== "string") return;

            const path = event.data.path;
            const {tabs: current} = stateRef.current;
            const isStartup = event.data.startup === true;

            if (isStartup && current.length === 1 && current[0].fresh)
                void load(current[0].id, path);
            else
                openFiles(path);
        });

        Native.send({type: "app.ready"});
        return unsubscribe;
    }, [load, openFiles]);

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

    const canBack = active.kind === "files" && active.index > 0;
    const canForward = active.kind === "files" && active.index < active.history.length - 1;

    const goBack = () => {
        if (canBack) void goTo(active.id, active.history[active.index - 1], active.index - 1);
    };

    const goForward = () => {
        if (canForward) void goTo(active.id, active.history[active.index + 1], active.index + 1);
    };

    return (
        <Root>
            <TitleBar
                activeId={active.id}
                onClose={closeTab}
                onNewTab={() => openFiles()}
                onSelect={setActiveId}
                tabs={tabs.map((tab) => ({
                    id: tab.id,
                    kind: tab.kind,
                    path: tab.listing?.path ?? tab.path,
                    title: tab.kind === "files"
                        ? baseName(tab.listing?.path ?? tab.path) || "Files"
                        : viewTitles[tab.kind],
                }))}
            />

            <Body>
                <Sidebar
                    activeKind={active.kind}
                    currentPath={active.kind === "files" ? active.listing?.path ?? "" : ""}
                    drives={drives}
                    onNavigate={navigate}
                    onOpenView={openView}
                    places={places}
                />

                <Main>
                    {active.kind === "files" ? (
                        <>
                            <Toolbar>
                                <IconButton disabled={!canBack} onClick={goBack} title="Back" type="button">
                                    <ArrowLeftIcon/>
                                </IconButton>

                                <IconButton disabled={!canForward} onClick={goForward} title="Forward" type="button">
                                    <ArrowRightIcon/>
                                </IconButton>

                                <IconButton
                                    disabled={!active.listing?.parent}
                                    onClick={() => active.listing?.parent && navigate(active.listing.parent)}
                                    title="Up one level"
                                    type="button"
                                >
                                    <ArrowUpIcon/>
                                </IconButton>

                                <IconButton
                                    onClick={() => void goTo(active.id, active.path, active.index)}
                                    title="Refresh"
                                    type="button"
                                >
                                    <RefreshIcon/>
                                </IconButton>

                                <PathBar onNavigate={navigate} path={active.listing?.path ?? active.path}/>

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
                            </Toolbar>

                            <FileList
                                error={active.error}
                                filter={filter}
                                listing={active.listing}
                                loading={active.loading}
                                onOpen={navigate}
                            />

                            <StatusBar>
                                <span>{active.listing ? `${active.listing.entries.length} items` : "—"}</span>
                                <span>{appInfo ? `v${appInfo.version} · ${appInfo.platform}` : "browser preview"}</span>
                            </StatusBar>
                        </>
                    ) : active.kind === "home" ? (
                        <HomeView drives={drives} onOpen={navigate} places={places}/>
                    ) : active.kind === "settings" ? (
                        <SettingsView appInfo={appInfo}/>
                    ) : (
                        <RecycleView/>
                    )}
                </Main>
            </Body>

            <ResizeHandles/>
        </Root>
    );
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--bg-primary);
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
