import {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {listDirectory, listDrives, listPlaces, type DirectoryListing, type Drive, type Place} from "./api/files";
import {getAppInfo, type AppInfo} from "./api/system";
import {FileList} from "./components/FileList";
import {ArrowUpIcon, RefreshIcon, SearchIcon} from "./components/Icons";
import {Sidebar} from "./components/Sidebar";
import {TitleBar} from "./components/TitleBar";
import {ResizeHandles} from "./components/ResizeHandles";
import {Native} from "@photino-net-utils/bridge";
import {baseName} from "./utils/format";

interface Tab {
    id: string;
    path: string;
    listing: DirectoryListing | null;
    loading: boolean;
    error: string | null;
    /** Nothing has been opened in it yet, so a path arriving from the host can take it over. */
    fresh: boolean;
}

let nextTabId = 0;

function createTab(): Tab {
    nextTabId += 1;

    return {id: `tab-${nextTabId}`, path: "", listing: null, loading: true, error: null, fresh: true};
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

    const update = useCallback((id: string, patch: Partial<Tab>) => {
        setTabs((current) => current.map((tab) => tab.id === id ? {...tab, ...patch} : tab));
    }, []);

    const load = useCallback(async (id: string, path?: string, keepFresh = false) => {
        update(id, {loading: true, error: null, ...(keepFresh ? {} : {fresh: false})});
        setFilter("");

        try {
            const listing = await listDirectory(path);
            update(id, {listing, loading: false, path: listing.path});
        } catch (cause) {
            update(id, {loading: false, error: cause instanceof Error ? cause.message : String(cause)});
        }
    }, [update]);

    const openTab = useCallback((path?: string) => {
        const tab = createTab();

        setTabs((current) => [...current, tab]);
        setActiveId(tab.id);
        void load(tab.id, path);
    }, [load]);

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

        const unsubscribe = Native.on((message) => {
            const event = message as { type?: string; data?: { path?: unknown; startup?: unknown } };
            if (event.type !== "app.navigate" || typeof event.data?.path !== "string") return;

            const path = event.data.path;
            const {tabs: current} = stateRef.current;
            const isStartup = event.data.startup === true;

            if (isStartup && current.length === 1 && current[0].fresh)
                void load(current[0].id, path);
            else
                openTab(path);
        });

        Native.send({type: "app.ready"});
        return unsubscribe;
    }, [load, openTab]);

    const crumbs = active.listing ? breadcrumbs(active.listing.path) : [];

    return (
        <Root>
            <TitleBar
                activeId={active.id}
                onClose={closeTab}
                onNewTab={() => openTab()}
                onSelect={setActiveId}
                tabs={tabs.map((tab) => ({
                    id: tab.id,
                    path: tab.listing?.path ?? tab.path,
                    title: baseName(tab.listing?.path ?? tab.path) || "Home",
                }))}
            />

            <Body>
                <Sidebar
                    currentPath={active.listing?.path ?? ""}
                    drives={drives}
                    onNavigate={navigate}
                    places={places}
                />

                <Main>
                    <Toolbar>
                        <IconButton
                            disabled={!active.listing?.parent}
                            onClick={() => active.listing?.parent && navigate(active.listing.parent)}
                            title="Up one level"
                            type="button"
                        >
                            <ArrowUpIcon/>
                        </IconButton>

                        <IconButton
                            onClick={() => navigate(active.listing?.path)}
                            title="Refresh"
                            type="button"
                        >
                            <RefreshIcon/>
                        </IconButton>

                        <Crumbs>
                            {crumbs.map((crumb, index) => (
                                <Crumb key={crumb.path} type="button" onClick={() => navigate(crumb.path)}>
                                    {index > 0 && <Separator>/</Separator>}
                                    {crumb.label}
                                </Crumb>
                            ))}
                        </Crumbs>

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

                    {active.listing && (
                        <Heading>
                            <h1>{baseName(active.listing.path) || active.listing.path}</h1>
                            <span>{active.listing.path}</span>
                        </Heading>
                    )}

                    <FileList
                        error={active.error}
                        filter={filter}
                        listing={active.listing}
                        loading={active.loading}
                        onOpen={navigate}
                    />

                    <StatusBar>
                        <span>{active.listing ? `${active.listing.entries.length} items` : "—"}</span>
                        <span>
                            {appInfo ? `v${appInfo.version} · ${appInfo.platform}` : "browser preview"}
                        </span>
                    </StatusBar>
                </Main>
            </Body>

            <ResizeHandles/>
        </Root>
    );
}

/** Splits a path into clickable ancestors, keeping the Windows drive root intact. */
function breadcrumbs(path: string): { label: string; path: string }[] {
    const separator = path.includes("\\") ? "\\" : "/";
    const parts = path.split(/[\\/]/).filter((part) => part.length > 0);
    const crumbs: { label: string; path: string }[] = [];

    let current = separator === "\\" ? "" : "/";
    parts.forEach((part, index) => {
        if (separator === "\\") {
            current = index === 0 ? `${part}\\` : `${current.replace(/\\$/, "")}\\${part}`;
        } else {
            current = current === "/" ? `/${part}` : `${current}/${part}`;
        }

        crumbs.push({label: part, path: current});
    });

    return crumbs;
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
    gap: 8px;
    padding: 14px 18px;
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
        opacity: 0.4;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;

const Crumbs = styled.nav`
    display: flex;
    align-items: center;
    gap: 2px;
    min-width: 0;
    flex: 1;
    overflow: hidden;
    padding: 0 4px;
`;

const Crumb = styled.button`
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    padding: 5px 8px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;

const Separator = styled.span`
    color: var(--text-muted);
`;

const Search = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 210px;
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

const Heading = styled.div`
    display: flex;
    align-items: baseline;
    gap: 14px;
    padding: 20px 22px 6px;

    h1 {
        font-size: 17px;
        font-weight: 600;
        letter-spacing: -0.01em;
    }

    span {
        overflow: hidden;
        font-family: var(--font-mono);
        font-size: 11px;
        color: var(--text-muted);
        text-overflow: ellipsis;
        white-space: nowrap;
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
