import {useEffect, useRef, useState} from "react";
import styled, {createGlobalStyle} from "styled-components";
import {applyTheme} from "./theme";
import {formatBytes} from "./utils/format";

interface ShareWebConfig {
    app: string;
    device: string;
    accent: string | null;
    secondary: string | null;
    version: string;
}

interface ShareWebShare {
    id: string;
    name: string;
}

interface ShareWebEntry {
    name: string;
    isDirectory: boolean;
    size: number;
    modified: number;
    path: string;
}

interface ShareWebListing {
    id: string;
    name: string;
    path: string;
    parent: string | null;
    entries: ShareWebEntry[];
}

const Page = createGlobalStyle`
    html.share-web,
    html.share-web body,
    html.share-web #share-root {
        height: auto;
        min-height: 100%;
        overflow: auto;
    }

    html.share-web body {
        background: var(--bg-primary);
    }

    html.share-web {
        --panel-alpha: 0.92;
    }
`;

/** The browser-facing file server: one page that lists the web shares and lets visitors browse,
 *  download and upload, drawn with the same theme tokens as the desktop app. */
export function ShareWeb() {
    const [config, setConfig] = useState<ShareWebConfig | null>(null);
    const [shares, setShares] = useState<ShareWebShare[]>([]);
    const [active, setActive] = useState<string | null>(null);
    const [listing, setListing] = useState<ShareWebListing | null>(null);
    const [busy, setBusy] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const upload = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        void (async () => {
            try {
                const next = await getJson<ShareWebConfig>("/api/config");
                setConfig(next);
                applyTheme(next.accent, next.secondary);
                document.title = `${next.device} · ${next.app}`;
            } catch {
                // The page works with the default theme even when the header config fails.
            }

            try {
                const data = await getJson<{ shares: ShareWebShare[] }>("/api/shares");
                setShares(data.shares);
                setActive((current) => current ?? data.shares[0]?.id ?? null);
                if (data.shares.length === 0)
                    setBusy(false);
            } catch (cause) {
                setBusy(false);
                setError(message(cause));
            }
        })();
    }, []);

    const load = async (shareId: string, path: string) => {
        setBusy(true);
        setError(null);
        try {
            const data = await getJson<ShareWebListing>(
                `/api/browse/${encodeURIComponent(shareId)}?path=${encodeURIComponent(path)}`);
            setListing(data);
        } catch (cause) {
            setError(message(cause));
            setListing(null);
        } finally {
            setBusy(false);
        }
    };

    useEffect(() => {
        if (active)
            void load(active, "");
    }, [active]);

    const openShare = (id: string) => {
        setActive(id);
        setListing(null);
    };

    const uploadFiles = async (files: FileList | null) => {
        if (!active || !files || files.length === 0)
            return;

        setUploading(true);
        setError(null);
        try {
            const form = new FormData();
            for (const file of files)
                form.append("files", file);

            const response = await fetch(
                `/api/upload/${encodeURIComponent(active)}?path=${encodeURIComponent(listing?.path ?? "")}`,
                {method: "POST", body: form});

            if (!response.ok)
                throw new Error(await failure(response));

            await load(active, listing?.path ?? "");
        } catch (cause) {
            setError(message(cause));
        } finally {
            setUploading(false);
            if (upload.current)
                upload.current.value = "";
        }
    };

    const path = listing?.path ?? "";
    const crumbs = path.split("/").filter(Boolean);

    return (
        <Root>
            <Page/>
            <Header>
                <Brand>
                    <Logo><FolderGlyph size={22}/></Logo>
                    <BrandText>
                        <h1>{config?.device ?? "Shared folders"}</h1>
                        <span>{config?.app ?? "Yet Another File Manager"}{config?.version ? ` · v${config.version}` : ""}</span>
                    </BrandText>
                </Brand>

                <Tabs>
                    {shares.map((share) => (
                        <Tab
                            $active={share.id === active}
                            key={share.id}
                            onClick={() => openShare(share.id)}
                            type="button"
                        >
                            {share.name}
                        </Tab>
                    ))}
                </Tabs>
            </Header>

            <Main>
                {error && <Notice>{error}</Notice>}

                {shares.length === 0
                    ? <Empty>No folders are shared over the web on this device.</Empty>
                    : (
                        <>
                            <Toolbar>
                                <Crumbs>
                                    <Crumb
                                        onClick={() => active && void load(active, "")}
                                        type="button"
                                    >
                                        {listing?.name ?? "Shared folders"}
                                    </Crumb>
                                    {crumbs.map((part, index) => (
                                        <CrumbGroup key={`${part}-${index}`}>
                                            <Caret>/</Caret>
                                            <Crumb
                                                $last={index === crumbs.length - 1}
                                                onClick={() => active && void load(active, crumbs.slice(0, index + 1).join("/"))}
                                                type="button"
                                            >
                                                {part}
                                            </Crumb>
                                        </CrumbGroup>
                                    ))}
                                </Crumbs>

                                <Actions>
                                    {path.length > 0 && (
                                        <ToolButton
                                            onClick={() => active && void load(active, crumbs.slice(0, -1).join("/"))}
                                            title="Up one folder"
                                            type="button"
                                        >
                                            <ArrowUpGlyph size={15}/>
                                        </ToolButton>
                                    )}
                                    <ToolButton
                                        disabled={busy}
                                        onClick={() => active && void load(active, path)}
                                        title="Refresh"
                                        type="button"
                                    >
                                        <RefreshGlyph size={15}/>
                                    </ToolButton>
                                    <UploadButton
                                        disabled={uploading || !listing}
                                        onClick={() => upload.current?.click()}
                                        type="button"
                                    >
                                        <UploadGlyph size={14}/>
                                        {uploading ? "Uploading…" : "Upload"}
                                    </UploadButton>
                                    <input
                                        hidden
                                        multiple
                                        onChange={(event) => void uploadFiles(event.currentTarget.files)}
                                        ref={upload}
                                        type="file"
                                    />
                                </Actions>
                            </Toolbar>

                            <ListCard>
                                {busy && !listing
                                    ? <Empty>Reading…</Empty>
                                    : listing && listing.entries.length > 0
                                        ? (
                                            <Table>
                                                <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Size</th>
                                                    <th>Modified</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {listing.entries.map((entry) => (
                                                    <tr key={entry.path}>
                                                        <td>
                                                            {entry.isDirectory
                                                                ? (
                                                                    <NameButton
                                                                        onClick={() => active && void load(active, entry.path)}
                                                                        type="button"
                                                                    >
                                                                        <FolderGlyph size={16}/>
                                                                        <NameText>{entry.name}</NameText>
                                                                    </NameButton>
                                                                )
                                                                : (
                                                                    <Download
                                                                        href={fileUrl(active ?? "", entry.path)}
                                                                        title={`Download ${entry.name}`}
                                                                    >
                                                                        <FileGlyph size={16}/>
                                                                        <NameText>{entry.name}</NameText>
                                                                    </Download>
                                                                )}
                                                        </td>
                                                        <td data-label="Size">{entry.isDirectory ? "—" : formatBytes(entry.size)}</td>
                                                        <td data-label="Modified">{formatDate(entry.modified)}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </Table>
                                        )
                                        : <Empty>{busy ? "Reading…" : "This folder is empty."}</Empty>}
                            </ListCard>

                            <Footnote>
                                Click a file to download it. Uploaded files are written into the folder you are viewing.
                            </Footnote>
                        </>
                    )}
            </Main>
        </Root>
    );
}

async function getJson<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok)
        throw new Error(await failure(response));

    return await response.json() as T;
}

async function failure(response: Response): Promise<string> {
    try {
        const body = await response.json() as { error?: string };
        return body.error ?? response.statusText;
    } catch {
        return response.statusText;
    }
}

function fileUrl(shareId: string, path: string): string {
    return `/file/${encodeURIComponent(shareId)}/${path.split("/").filter(Boolean).map(encodeURIComponent).join("/")}`;
}

function message(cause: unknown): string {
    return cause instanceof Error ? cause.message : String(cause);
}

function formatDate(value: number): string {
    if (!value)
        return "—";

    return new Intl.DateTimeFormat(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(new Date(value));
}

function FolderGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={size}>
            <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17z"/>
        </svg>
    );
}

function FileGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={size}>
            <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5A1.5 1.5 0 0 1 6 3.5Z"/>
            <path d="M14 3.5V8h4"/>
        </svg>
    );
}

function RefreshGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" viewBox="0 0 24 24" width={size}>
            <path d="M20 11a8 8 0 1 0-2.3 6.7"/>
            <path d="M20 4v7h-7"/>
        </svg>
    );
}

function UploadGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width={size}>
            <path d="M12 16V4"/>
            <path d="m7 9 5-5 5 5"/>
            <path d="M5 16v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3"/>
        </svg>
    );
}

function ArrowUpGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width={size}>
            <path d="M12 19V5"/>
            <path d="m6 11 6-6 6 6"/>
        </svg>
    );
}

const Root = styled.div`
    min-height: 100vh;
    padding: 28px clamp(16px, 4vw, 48px) 48px;
    background:
        radial-gradient(1100px 620px at 8% -12%, rgba(var(--accent-secondary-rgb), 0.14), transparent 62%),
        radial-gradient(900px 520px at 108% 16%, rgba(var(--accent-rgb), 0.10), transparent 58%),
        linear-gradient(180deg, var(--bg-primary), var(--bg-media));
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 1180px;
    margin: 0 auto 22px;
`;

const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
`;

const Logo = styled.span`
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    background: rgba(var(--accent-rgb), 0.10);
    color: var(--accent-primary);
    box-shadow: 0 0 28px rgba(var(--accent-rgb), 0.14);
`;

const BrandText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    h1 {
        margin: 0;
        color: var(--text-primary);
        font-size: clamp(18px, 2.4vw, 24px);
        font-weight: 650;
        letter-spacing: -0.01em;
    }

    span {
        color: var(--text-muted);
        font-size: 12px;
    }
`;

const Tabs = styled.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 2px;
    scrollbar-width: thin;
`;

const Tab = styled.button<{ $active: boolean }>`
    flex-shrink: 0;
    padding: 8px 16px;
    border: 1px solid ${({$active}) => $active ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: 999px;
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.16)" : "rgba(var(--bg-rgb), 0.4)"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 12.5px;
    cursor: pointer;
    transition: border-color 140ms ease, background 140ms ease, color 140ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 1180px;
    margin: 0 auto;
`;

const Notice = styled.div`
    padding: 12px 14px;
    border: 1px solid rgba(248, 113, 113, 0.35);
    border-radius: var(--radius-md);
    background: rgba(239, 68, 68, 0.12);
    color: #fecaca;
    font-size: 12.5px;
    overflow-wrap: anywhere;
`;

const Toolbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`;

const Crumbs = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    flex-wrap: wrap;
`;

const CrumbGroup = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
`;

const Caret = styled.span`
    color: var(--text-muted);
    font-size: 12px;
`;

const Crumb = styled.button<{ $last?: boolean }>`
    padding: 4px 7px;
    border: 0;
    border-radius: 6px;
    background: transparent;
    color: ${({$last}) => $last ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 12.5px;
    font-weight: ${({$last}) => $last ? 600 : 400};
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`;

const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`;

const ToolButton = styled.button`
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border: 1px solid var(--border-color);
    border-radius: 9px;
    background: rgba(var(--bg-rgb), 0.45);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`;

const UploadButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 7px;
    height: 34px;
    padding: 0 14px;
    border: 0;
    border-radius: 9px;
    background: var(--accent-primary);
    color: #fff;
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover:not(:disabled) {
        filter: brightness(1.08);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;

const ListCard = styled.section`
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.55);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(10px);
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th {
        padding: 11px 16px;
        border-bottom: 1px solid var(--border-color);
        color: var(--text-muted);
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-align: left;
        text-transform: uppercase;
    }

    td {
        padding: 10px 16px;
        border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.10);
        color: var(--text-secondary);
        font-size: 12.5px;
        vertical-align: middle;
    }

    tr:last-child td {
        border-bottom: 0;
    }

    tr:hover td {
        background: rgba(var(--accent-rgb), 0.05);
    }

    td:nth-child(2),
    td:nth-child(3) {
        width: 1%;
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 10px;
        white-space: nowrap;
    }

    @media (max-width: 680px) {
        th:nth-child(2),
        th:nth-child(3),
        td:nth-child(2),
        td:nth-child(3) {
            display: none;
        }
    }
`;

const NameButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 9px;
    max-width: 100%;
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--text-primary);
    font: inherit;
    font-size: 12.5px;
    text-align: left;
    cursor: pointer;

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }

    &:hover span {
        text-decoration: underline;
    }
`;

const Download = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 9px;
    max-width: 100%;
    color: var(--text-primary);
    font-size: 12.5px;
    text-decoration: none;

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }

    &:hover span {
        text-decoration: underline;
    }
`;

const NameText = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Empty = styled.div`
    padding: 42px 20px;
    color: var(--text-muted);
    font-size: 13px;
    text-align: center;
`;

const Footnote = styled.p`
    margin: 2px 2px 0;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.55;
`;
