import {useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {listDirectory, listDrives, listPlaces, type DirectoryListing, type Drive, type Place} from "./api/files";
import {getAppInfo, type AppInfo} from "./api/system";
import {FileList} from "./components/FileList";
import {ArrowUpIcon, RefreshIcon, SearchIcon} from "./components/Icons";
import {Sidebar} from "./components/Sidebar";
import {baseName} from "./utils/format";

export default function App() {
    const [places, setPlaces] = useState<Place[]>([]);
    const [drives, setDrives] = useState<Drive[]>([]);
    const [listing, setListing] = useState<DirectoryListing | null>(null);
    const [appInfo, setAppInfo] = useState<AppInfo | null>(null);
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useCallback(async (path?: string) => {
        setLoading(true);
        setError(null);
        setFilter("");

        try {
            setListing(await listDirectory(path));
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : String(cause));
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void navigate();
        void listPlaces().then(setPlaces, () => setPlaces([]));
        void listDrives().then(setDrives, () => setDrives([]));
        void getAppInfo().then(setAppInfo, () => setAppInfo(null));
    }, [navigate]);

    const crumbs = listing ? breadcrumbs(listing.path) : [];

    return (
        <Shell>
            <Sidebar
                currentPath={listing?.path ?? ""}
                drives={drives}
                onNavigate={(path) => void navigate(path)}
                places={places}
            />

            <Main>
                <Toolbar>
                    <IconButton
                        disabled={!listing?.parent}
                        onClick={() => listing?.parent && void navigate(listing.parent)}
                        title="Up one level"
                        type="button"
                    >
                        <ArrowUpIcon/>
                    </IconButton>

                    <IconButton onClick={() => void navigate(listing?.path)} title="Refresh" type="button">
                        <RefreshIcon/>
                    </IconButton>

                    <Crumbs>
                        {crumbs.map((crumb, index) => (
                            <Crumb key={crumb.path} type="button" onClick={() => void navigate(crumb.path)}>
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

                {listing && (
                    <Heading>
                        <h1>{baseName(listing.path) || listing.path}</h1>
                        <span>{listing.path}</span>
                    </Heading>
                )}

                <FileList
                    error={error}
                    filter={filter}
                    listing={listing}
                    loading={loading}
                    onOpen={(path) => void navigate(path)}
                />

                <StatusBar>
                    <span>{listing ? `${listing.entries.length} items` : "—"}</span>
                    <span>
                        {appInfo ? `v${appInfo.version} · ${appInfo.platform}` : "browser preview"}
                    </span>
                </StatusBar>
            </Main>
        </Shell>
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

const Shell = styled.div`
    display: flex;
    height: 100%;
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
