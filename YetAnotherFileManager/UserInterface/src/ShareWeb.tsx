import {type FormEvent, useEffect, useMemo, useRef, useState} from "react";
import styled, {createGlobalStyle} from "styled-components";
import {useTheme} from "@photino-net-utils/bridge";
import {applyTheme} from "./theme";
import {formatBytes} from "./utils/format";
import {shareProof} from "./share-crypto";
import {
    detectShareLanguage,
    hasSavedShareLanguage,
    normalizeShareLanguage,
    rememberShareLanguage,
    type ShareLanguage,
    ShareLanguages,
    shareStrings,
} from "./share-i18n";

interface ShareWebConfig {
    app: string;
    device: string;
    accent: string | null;
    secondary: string | null;
    version: string;
    language: string | null;
}

interface ShareWebAccess {
    state: "allowed" | "pending" | "denied" | "password";
    device: string | null;
    expiresAt: number | null;
    retryAfter: number | null;
    hasPassword: boolean;
    salt: string | null;
    nonce: string | null;
    /** PBKDF2 rounds; 0 is a password stored before the stretching. */
    iterations: number;
    approvalMinutes: number;
    denialSeconds: number;
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
type SortColumn = "name" | "size" | "modified";

interface SortState {
    column: SortColumn;
    descending: boolean;
}

function readFlag(key: string): boolean {
    try {
        return localStorage.getItem(key) === "1";
    } catch {
        return false;
    }
}

function writeFlag(key: string, value: boolean): void {
    try {
        localStorage.setItem(key, value ? "1" : "0");
    } catch {
        // The toggle still applies to this visit.
    }
}

export function ShareWeb() {
    const [language, setLanguage] = useState<ShareLanguage>(detectShareLanguage);
    const t = shareStrings(language);
    const [config, setConfig] = useState<ShareWebConfig | null>(null);
    // A visitor's browser decides, not the machine that serves the share.
    const theme = useTheme("system");
    const [shares, setShares] = useState<ShareWebShare[]>([]);
    const [active, setActive] = useState<string | null>(null);
    const [listing, setListing] = useState<ShareWebListing | null>(null);
    const [busy, setBusy] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [access, setAccess] = useState<ShareWebAccess | null>(null);
    const [password, setPassword] = useState("");
    const [passwordBusy, setPasswordBusy] = useState(false);
    const [passwordWrong, setPasswordWrong] = useState(false);
    const [retryIn, setRetryIn] = useState(0);
    const pageLoaded = useRef(false);
    const [showHidden, setShowHidden] = useState(() => readFlag("yafm.share.hidden"));
    const [showSystem, setShowSystem] = useState(() => readFlag("yafm.share.system"));
    const [sort, setSort] = useState<SortState>(() => {
        try {
            const saved = JSON.parse(localStorage.getItem("yafm.share.sort") ?? "null") as SortState | null;
            if (saved && ["name", "size", "modified"].includes(saved.column))
                return saved;
        } catch {
            // Fall through to the default A-Z order.
        }

        return {column: "name", descending: false};
    });
    const upload = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    useEffect(() => {
        if (config) applyTheme(config.accent, config.secondary, theme);
    }, [config, theme]);

    const loadPage = async () => {
        try {
            const next = await getJson<ShareWebConfig>("/api/config");
            setConfig(next);
            document.title = `${next.device} · ${next.app}`;

            // A visitor's own choice wins; otherwise follow the app's language setting.
            if (!hasSavedShareLanguage() && next.language)
                setLanguage(normalizeShareLanguage(next.language));
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
    };

    const loadAccess = async (): Promise<ShareWebAccess | null> => {
        try {
            const state = await getJson<ShareWebAccess>("/api/access/state");
            setAccess(state);
            return state;
        } catch {
            return null;
        }
    };

    useEffect(() => {
        void (async () => {
            const state = await loadAccess();
            if (state?.state !== "allowed") {
                setBusy(false);
                return;
            }

            pageLoaded.current = true;
            await loadPage();
        })();
    }, []);

    // A device waiting for the desktop polls; a refused one counts its wait down and lets the
    // visitor ask again once it is over.
    useEffect(() => {
        if (!access)
            return;

        if (access.state === "pending") {
            const timer = window.setInterval(() => void loadAccess(), 2000);
            return () => window.clearInterval(timer);
        }

        if (access.state === "denied") {
            setRetryIn(access.retryAfter ?? 0);
            const timer = window.setInterval(() => setRetryIn((value) => Math.max(0, value - 1)), 1000);
            return () => window.clearInterval(timer);
        }

        // A fresh challenge means the previous refusal is over; the next attempt starts clean.
        if (access.state === "password")
            setPasswordWrong(false);

        if (access.state === "allowed" && !pageLoaded.current) {
            pageLoaded.current = true;
            void loadPage();
        }
    }, [access?.state, access?.retryAfter]);

    const submitPassword = async (event: FormEvent) => {
        event.preventDefault();

        if (!access?.salt || !access.nonce || passwordBusy || password.length === 0)
            return;

        setPasswordBusy(true);
        setPasswordWrong(false);

        // Deriving the key is deliberately slow; let the button paint its busy label first.
        await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));

        try {
            const body = new URLSearchParams({
                nonce: access.nonce,
                proof: shareProof(password, access.salt, access.nonce, access.iterations ?? 0)
            });
            const response = await fetch("/api/access/password", {
                method: "POST",
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body
            });
            const state = await response.json() as ShareWebAccess;
            setPassword("");
            setAccess(state);
            if (state.state !== "allowed")
                setPasswordWrong(true);
        } catch {
            setPasswordWrong(true);
        } finally {
            setPasswordBusy(false);
        }
    };

    const load = async (shareId: string, path: string, hidden = showHidden, system = showSystem) => {
        setBusy(true);
        setError(null);
        try {
            const data = await getJson<ShareWebListing>(
                `/api/browse/${encodeURIComponent(shareId)}?path=${encodeURIComponent(path)}`
                + `&hidden=${hidden ? 1 : 0}&system=${system ? 1 : 0}`);
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

    const toggleHidden = (value: boolean) => {
        setShowHidden(value);
        writeFlag("yafm.share.hidden", value);
        if (active)
            void load(active, listing?.path ?? "", value, showSystem);
    };

    const toggleSystem = (value: boolean) => {
        setShowSystem(value);
        writeFlag("yafm.share.system", value);
        if (active)
            void load(active, listing?.path ?? "", showHidden, value);
    };

    const toggleSort = (column: SortColumn) => {
        const next: SortState = sort.column === column
            ? {column, descending: !sort.descending}
            : {column, descending: false};

        setSort(next);
        try {
            localStorage.setItem("yafm.share.sort", JSON.stringify(next));
        } catch {
            // Sorting still applies for this visit.
        }
    };

    const entries = useMemo(() => {
        const list = [...(listing?.entries ?? [])];
        const direction = sort.descending ? -1 : 1;

        return list.sort((left, right) => {
            if (left.isDirectory !== right.isDirectory)
                return left.isDirectory ? -1 : 1;

            const result = sort.column === "name"
                ? left.name.localeCompare(right.name, undefined, {numeric: true, sensitivity: "base"})
                : sort.column === "size"
                    ? left.size - right.size
                    : left.modified - right.modified;

            return result * direction;
        });
    }, [listing, sort]);

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

    if (access?.state !== "allowed") {
        return (
            <Root>
                <Page/>
                <Gate>
                    <GateCard>
                        <Logo><img alt="" src="/app-icon"/></Logo>
                        <GateTitle><LockGlyph size={15}/>{t.accessTitle}</GateTitle>

                        {!access && (
                            <>
                                <GateNote>{t.checkingAccess}</GateNote>
                                <GateButton onClick={() => void loadAccess()}>{t.tryAgain}</GateButton>
                            </>
                        )}

                        {access?.state === "pending" && (
                            <>
                                <GateNote>{t.waitingForApproval}</GateNote>
                                <GateDevice>{access.device ?? ""}</GateDevice>
                            </>
                        )}

                        {access?.state === "denied" && (
                            <>
                                <GateNote>{passwordWrong ? t.wrongPassword : t.accessDenied}</GateNote>
                                <GateNote>{t.retryIn.replace("{seconds}", String(retryIn))}</GateNote>
                                <GateButton disabled={retryIn > 0} onClick={() => void loadAccess()}>
                                    {t.tryAgain}
                                </GateButton>
                            </>
                        )}

                        {access?.state === "password" && (
                            <GateForm onSubmit={(event) => void submitPassword(event)}>
                                <GateNote>{t.passwordNote}</GateNote>
                                <GateLabel htmlFor="share-password">{t.password}</GateLabel>
                                <GateInput
                                    autoFocus
                                    id="share-password"
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
                                    value={password}
                                />
                                <GateButton disabled={passwordBusy || password.length === 0} type="submit">
                                    {passwordBusy ? t.checkingAccess : t.unlock}
                                </GateButton>
                                {passwordWrong && <GateError>{t.wrongPassword}</GateError>}
                            </GateForm>
                        )}
                    </GateCard>
                </Gate>
            </Root>
        );
    }

    return (
        <Root>
            <Page/>
            <Header>
                <HeaderTop>
                    <Brand>
                        <Logo><img alt="" src="/app-icon"/></Logo>
                        <BrandText>
                            <h1>{config?.device ?? t.sharedFolders}</h1>
                            <span>{config?.app ?? "Yet Another File Manager"}{config?.version ? ` · v${config.version}` : ""}</span>
                        </BrandText>
                    </Brand>

                    <HeaderActions>
                        <LanguageBox title={t.language}>
                            <GlobeGlyph size={14}/>
                        <LanguageSelect
                            aria-label={t.language}
                            onChange={(event) => {
                                const next = event.target.value as ShareLanguage;
                                setLanguage(next);
                                rememberShareLanguage(next);
                            }}
                            title={t.language}
                            value={language}
                        >
                            {ShareLanguages.map((item) => (
                                <option key={item.id} value={item.id}>{item.label}</option>
                            ))}
                        </LanguageSelect>
                        </LanguageBox>
                    </HeaderActions>
                </HeaderTop>

                <Tabs>
                    {shares.map((share) => (
                        <Tab
                            $active={share.id === active}
                            key={share.id}
                            onClick={() => openShare(share.id)}
                            type="button"
                        >
                            <FolderGlyph size={13}/>
                            {share.name}
                        </Tab>
                    ))}
                </Tabs>
            </Header>

            <Main>
                {error && <Notice>{error}</Notice>}

                {shares.length === 0
                    ? <Empty>{t.noShares}</Empty>
                    : (
                        <>
                            <Toolbar>
                                <Crumbs>
                                    <Crumb
                                        onClick={() => active && void load(active, "")}
                                        type="button"
                                    >
                                        {listing?.name ?? t.sharedFolders}
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
                                    <ToggleLabel title={t.showHidden}>
                                        <EyeGlyph size={13}/>
                                        <input
                                            checked={showHidden}
                                            onChange={(event) => toggleHidden(event.currentTarget.checked)}
                                            type="checkbox"
                                        />
                                        {t.showHidden}
                                    </ToggleLabel>
                                    <ToggleLabel title={t.showSystem}>
                                        <GearGlyph size={13}/>
                                        <input
                                            checked={showSystem}
                                            onChange={(event) => toggleSystem(event.currentTarget.checked)}
                                            type="checkbox"
                                        />
                                        {t.showSystem}
                                    </ToggleLabel>
                                    {path.length > 0 && (
                                        <ToolButton
                                            onClick={() => active && void load(active, crumbs.slice(0, -1).join("/"))}
                                            title={t.up}
                                            type="button"
                                        >
                                            <ArrowUpGlyph size={15}/>
                                        </ToolButton>
                                    )}
                                    <ToolButton
                                        disabled={busy}
                                        onClick={() => active && void load(active, path)}
                                        title={t.refresh}
                                        type="button"
                                    >
                                        <RefreshGlyph size={15}/>
                                    </ToolButton>
                                    <UploadButton
                                        disabled={uploading || !listing}
                                        onClick={() => upload.current?.click()}
                                        title={t.upload}
                                        type="button"
                                    >
                                        <UploadGlyph size={14}/>
                                        {uploading ? t.uploading : t.upload}
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
                                    ? <Empty>{t.reading}</Empty>
                                    : entries.length > 0
                                        ? (
                                            <Table>
                                                <thead>
                                                <tr>
                                                    <th>
                                                        <SortButton onClick={() => toggleSort("name")} type="button">
                                                            {t.name}
                                                            <SortMark>{sort.column === "name" ? (sort.descending ? "▼" : "▲") : ""}</SortMark>
                                                        </SortButton>
                                                    </th>
                                                    <th>
                                                        <SortButton onClick={() => toggleSort("size")} type="button">
                                                            {t.size}
                                                            <SortMark>{sort.column === "size" ? (sort.descending ? "▼" : "▲") : ""}</SortMark>
                                                        </SortButton>
                                                    </th>
                                                    <th>
                                                        <SortButton onClick={() => toggleSort("modified")}
                                                                    type="button">
                                                            {t.modified}
                                                            <SortMark>{sort.column === "modified" ? (sort.descending ? "▼" : "▲") : ""}</SortMark>
                                                        </SortButton>
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {entries.map((entry) => (
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
                                                                        title={`${t.download} ${entry.name}`}
                                                                    >
                                                                        <EntryGlyph name={entry.name} size={16}/>
                                                                        <NameText>{entry.name}</NameText>
                                                                    </Download>
                                                                )}
                                                        </td>
                                                        <td data-label={t.size}>{entry.isDirectory ? "—" : formatBytes(entry.size)}</td>
                                                        <td data-label={t.modified}>{formatDate(entry.modified, language)}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </Table>
                                        )
                                        : <Empty>{busy ? t.reading : t.empty}</Empty>}
                            </ListCard>

                            <Footnote>{t.footnote}</Footnote>
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

/** The date in the page's own language, so an English page does not show a Chinese date. */
function formatDate(value: number, language: ShareLanguage): string {
    if (!value)
        return "—";

    const locale = language === "zh-CN" ? "zh-CN" : language === "zh-TW" ? "zh-TW" : language;

    return new Intl.DateTimeFormat(locale, {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(new Date(value));
}

function FolderGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"
             viewBox="0 0 24 24" width={size}>
            <path
                d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17z"/>
        </svg>
    );
}

/** By extension, so a picture, a film, a song, an archive and a text file read apart at a glance. */
const GlyphByExtension: Record<string, "image" | "video" | "audio" | "archive" | "text"> = {
    png: "image", jpg: "image", jpeg: "image", gif: "image", webp: "image", avif: "image", bmp: "image",
    svg: "image", tif: "image", tiff: "image", ico: "image", heic: "image",
    mp4: "video", mkv: "video", webm: "video", mov: "video", avi: "video", wmv: "video",
    mp3: "audio", flac: "audio", wav: "audio", ogg: "audio", m4a: "audio", aac: "audio", opus: "audio",
    zip: "archive", "7z": "archive", rar: "archive", tar: "archive", gz: "archive", xz: "archive",
    zst: "archive", bz2: "archive", iso: "archive",
    txt: "text", md: "text", json: "text", xml: "text", yml: "text", yaml: "text", toml: "text",
    ini: "text", cfg: "text", csv: "text", log: "text", html: "text", css: "text", js: "text",
    ts: "text", tsx: "text", cs: "text", py: "text", rs: "text", go: "text", java: "text", kt: "text",
};

function EntryGlyph({name, size}: { name: string; size: number }) {
    const extension = name.includes(".") ? name.split(".").pop()!.toLowerCase() : "";
    const kind = GlyphByExtension[extension];

    if (kind === "image")
        return <ImageGlyph size={size}/>;

    if (kind === "video")
        return <VideoGlyph size={size}/>;

    if (kind === "audio")
        return <AudioGlyph size={size}/>;

    if (kind === "archive")
        return <ArchiveGlyph size={size}/>;

    if (kind === "text")
        return <TextGlyph size={size}/>;

    return <FileGlyph size={size}/>;
}

function LockGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeWidth="1.6"
             viewBox="0 0 24 24" width={size}>
            <rect height="9" rx="2" width="14" x="5" y="11"/>
            <path d="M8 11V8a4 4 0 0 1 8 0v3"/>
        </svg>
    );
}

function GlobeGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
             width={size}>
            <circle cx="12" cy="12" r="8.5"/>
            <path d="M3.5 12h17M12 3.5c2.5 2.6 2.5 14.4 0 17M12 3.5c-2.5 2.6-2.5 14.4 0 17"/>
        </svg>
    );
}

function EyeGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
             width={size}>
            <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z"/>
            <circle cx="12" cy="12" r="2.6"/>
        </svg>
    );
}

function GearGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"
             viewBox="0 0 24 24" width={size}>
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2 2 2 0 1 1-4 0 1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 15a2 2 0 1 1 0-4 1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 10 4.6a2 2 0 1 1 4 0 1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.7 1.7 0 0 0 21 11a2 2 0 1 1 0 4Z"/>
        </svg>
    );
}

function ImageGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"
             viewBox="0 0 24 24" width={size}>
            <rect height="15" rx="2.5" width="18" x="3" y="4.5"/>
            <circle cx="8.5" cy="9.5" r="1.5"/>
            <path d="m4 17 4.5-4.5L12 16l3-3 5 4.5"/>
        </svg>
    );
}

function VideoGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"
             viewBox="0 0 24 24" width={size}>
            <rect height="14" rx="2.5" width="18" x="3" y="5"/>
            <path d="m10 9.5 5 2.5-5 2.5z"/>
        </svg>
    );
}

function AudioGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"
             viewBox="0 0 24 24" width={size}>
            <path d="M9 18V6l10-2v12"/>
            <circle cx="6.5" cy="18" r="2.5"/>
            <circle cx="16.5" cy="16" r="2.5"/>
        </svg>
    );
}

function ArchiveGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"
             viewBox="0 0 24 24" width={size}>
            <rect height="15" rx="2.5" width="16" x="4" y="4.5"/>
            <path d="M10 4.5v3M14 7.5v3M10 10.5v3M14 13.5v3"/>
            <path d="M9 19.5h6"/>
        </svg>
    );
}

function TextGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"
             viewBox="0 0 24 24" width={size}>
            <path d="M6 4.5h12v15H6z"/>
            <path d="M9 9h6M9 12.5h6M9 16h4"/>
        </svg>
    );
}

function FileGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"
             viewBox="0 0 24 24" width={size}>
            <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5A1.5 1.5 0 0 1 6 3.5Z"/>
            <path d="M14 3.5V8h4"/>
        </svg>
    );
}

function RefreshGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" viewBox="0 0 24 24"
             width={size}>
            <path d="M20 11a8 8 0 1 0-2.3 6.7"/>
            <path d="M20 4v7h-7"/>
        </svg>
    );
}

function UploadGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
             strokeWidth="1.6" viewBox="0 0 24 24" width={size}>
            <path d="M12 16V4"/>
            <path d="m7 9 5-5 5 5"/>
            <path d="M5 16v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3"/>
        </svg>
    );
}

function ArrowUpGlyph({size}: { size: number }) {
    return (
        <svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
             strokeWidth="1.6" viewBox="0 0 24 24" width={size}>
            <path d="M12 19V5"/>
            <path d="m6 11 6-6 6 6"/>
        </svg>
    );
}

const Gate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 24px;
`;

const GateCard = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(400px, 100%);
    padding: 26px;
    border: 1px solid var(--border-color);
    border-radius: 16px;
    background: rgba(var(--bg-rgb), 0.94);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
`;

const GateTitle = styled.h1`
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
`;

const GateNote = styled.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 13px;
    line-height: 1.5;
`;

const GateDevice = styled.span`
    color: var(--text-secondary);
    font-size: 12px;
`;

const GateForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 4px;
`;

const GateLabel = styled.label`
    color: var(--text-muted);
    font-size: 12px;
`;

const GateInput = styled.input`
    width: 100%;
    height: 34px;
    padding: 0 10px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;

    &:focus {
        border-color: var(--border-color-focus);
        outline: 0;
    }
`;

const GateButton = styled.button`
    height: 34px;
    padding: 0 16px;
    border: 0;
    border-radius: 8px;
    background: var(--accent-gradient);
    color: #fff;
    font: inherit;
    font-size: 13px;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;

const GateError = styled.p`
    margin: 0;
    color: var(--danger);
    font-size: 12px;
`;

const Root = styled.div`
    min-height: 100vh;
    padding: 28px clamp(16px, 4vw, 48px) 48px;
    background: radial-gradient(1100px 620px at 8% -12%, rgba(var(--accent-secondary-rgb), 0.14), transparent 62%),
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

const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    flex-wrap: wrap;
`;

const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const LanguageBox = styled.label`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 32px;
    padding-left: 9px;
    border: 1px solid var(--border-color);
    border-radius: 9px;
    background: rgba(var(--bg-rgb), 0.5);
    color: var(--text-muted);

    &:hover,
    &:focus-within {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    select {
        height: auto;
        padding: 0 9px 0 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        color: inherit;
        font-size: 12px;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }
`;

const LanguageSelect = styled.select`
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: 9px;
    background: rgba(var(--bg-rgb), 0.5);
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover,
    &:focus {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
        outline: none;
    }
`;

const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
`;

const Logo = styled.span`
    display: grid;
    place-items: center;
    width: 46px;
    height: 46px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: 13px;
    background: rgba(var(--accent-rgb), 0.10);
    color: var(--accent-primary);
    box-shadow: 0 0 28px rgba(var(--accent-rgb), 0.14);

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
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
    display: inline-flex;
    align-items: center;
    gap: 7px;
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

    svg {
        flex-shrink: 0;
        opacity: 0.8;
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
    flex-wrap: wrap;
`;

const ToggleLabel = styled.label`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: 9px;
    background: rgba(var(--bg-rgb), 0.42);
    color: var(--text-muted);
    font-size: 11px;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-secondary);
    }

    input {
        width: 13px;
        height: 13px;
        accent-color: var(--accent-primary);
        cursor: pointer;
    }
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
        thead {
            display: none;
        }

        table,
        tbody {
            display: block;
            width: 100%;
        }

        /* A row becomes a line: the name on its own, then what the table header used to say. */
        tr {
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            gap: 3px 16px;
            width: auto;
            padding: 10px 14px;
            border-top: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.10);
        }

        tr:first-child {
            border-top: 0;
        }

        tr:hover td {
            background: transparent;
        }

        td {
            display: block;
            padding: 0;
            border: 0;
        }

        td:first-child {
            flex: 1 1 100%;
            min-width: 0;
        }

        td:nth-child(2),
        td:nth-child(3) {
            display: inline-block;
            flex: 0 0 auto;
            width: auto;
            white-space: nowrap;
        }

        td:nth-child(2)::before,
        td:nth-child(3)::before {
            content: attr(data-label) " ";
            color: var(--text-muted);
            font-family: var(--font-sans, inherit);
        }
    }
`;

const SortButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    cursor: pointer;

    &:hover {
        color: var(--text-primary);
    }
`;

const SortMark = styled.span`
    color: var(--accent-primary);
    font-size: 8px;
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
