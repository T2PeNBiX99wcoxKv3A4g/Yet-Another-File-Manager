import {useCallback, useEffect, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {Native, useTranslation} from "@photino-net-utils/bridge";
import {
    DefaultView,
    listDirectory,
    listDrives,
    listPlaces,
    listRecent,
    type DirectoryListing,
    type Drive,
    type FileEntry,
    type Place,
    type RecentEntry,
} from "../api/files";
import {elevatedPanel} from "../ui/panel";
import {fadeInStyle, popInStyle} from "../ui/motion";
import {ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, CheckIcon, CrossIcon, FolderIcon} from "./Icons";
import {GalleryView} from "./GalleryView";
import {OverviewView} from "./OverviewView";
import {PathBar} from "./PathBar";
import {PathIcon} from "./PathIcon";
import {Sidebar} from "./Sidebar";
import {baseName, formatBytes, formatDate, normalizePath, parentPath} from "../utils/format";

interface FolderPickerProps {
    initial?: string;
    mode?: "folder" | "file";
    /** Allow more than one row to be selected. */
    multiple?: boolean;
    /** Extensions (with the dot) to offer in file mode. */
    extensions?: string[];
    /** Render as the whole window (the CLI picker) instead of a modal. */
    inline?: boolean;
    places?: Place[];
    onCancel: () => void;
    onSelect: (paths: string[]) => void;
}

/**
 * An Explorer-shaped path picker drawn by the app. It reuses the app's own rail, breadcrumb bar
 * and colour system; the bottom holds the editable name box and, in file mode, the type filter.
 */
export function FolderPicker({
    initial = "", mode = "folder", multiple = false, extensions, inline = false, places: suppliedPlaces,
    onCancel, onSelect,
}: FolderPickerProps) {
    const t = useTranslation();
    const isFileMode = mode === "file";
    const supported = extensions ?? [];
    const [path, setPath] = useState(initial);
    const [listing, setListing] = useState<DirectoryListing | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selected, setSelected] = useState<Set<string>>(() => new Set());
    const [places, setPlaces] = useState<Place[]>(suppliedPlaces ?? []);
    const [drives, setDrives] = useState<Drive[]>([]);
    const [recent, setRecent] = useState<RecentEntry[]>([]);
    const [back, setBack] = useState<string[]>([]);
    const [forward, setForward] = useState<string[]>([]);
    const [fileName, setFileName] = useState("");
    const [allFiles, setAllFiles] = useState(supported.length === 0);
    const [view, setView] = useState<"files" | "overview" | "gallery">("files");

    useEffect(() => {
        if (suppliedPlaces) {
            setPlaces(suppliedPlaces);
            return;
        }

        void listPlaces().then(setPlaces, () => setPlaces([]));
    }, [suppliedPlaces]);

    useEffect(() => {
        void listDrives().then(setDrives, () => setDrives([]));
        void listRecent().then(setRecent, () => setRecent([]));
    }, []);

    useEffect(() => {
        let alive = true;
        setLoading(true);
        setError(null);
        setSelected(new Set());
        setFileName(isFileMode ? "" : baseName(path));

        void listDirectory(path || undefined, false).then(
            (result) => {
                if (!alive) return;
                setListing(result);
                setPath(result.path);
                setFileName(isFileMode ? "" : baseName(result.path));
                setLoading(false);
            },
            (cause) => {
                if (!alive) return;
                setError(cause instanceof Error ? cause.message : String(cause));
                setLoading(false);
            },
        );

        return () => {
            alive = false;
        };
    }, [path, isFileMode]);

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onCancel();
                return;
            }

            if (event.key !== "Enter")
                return;

            const target = event.target;
            if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement)
                return;

            choose();
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    });

    const navigate = (target: string) => {
        const next = target.trim();
        if (next.length === 0 || normalizePath(next) === normalizePath(path))
            return;

        setBack((stack) => [...stack, path]);
        setForward([]);
        setView("files");
        setPath(next);
    };

    const goBack = () => {
        const target = back.at(-1);
        if (target === undefined)
            return;

        setBack((stack) => stack.slice(0, -1));
        setForward((stack) => [path, ...stack]);
        setPath(target);
    };

    const goForward = () => {
        const target = forward[0];
        if (target === undefined)
            return;

        setForward((stack) => stack.slice(1));
        setBack((stack) => [...stack, path]);
        setPath(target);
    };

    const currentFolder = listing?.path ?? path;
    const parent = listing?.parent ?? (path ? parentPath(path) : null);

    // Only the folder on screen is watched; the host tells us when something in it changes.
    useEffect(() => {
        if (!Native.available || !currentFolder)
            return;

        Native.send({type: "fs.watch", payload: {paths: [currentFolder]}});
    }, [currentFolder]);

    // A change in the folder refreshes the list in place, the way the app's file view does.
    useEffect(() => {
        if (!Native.available || !currentFolder)
            return;

        let alive = true;

        return Native.on((evt) => {
            const event = evt as { type?: string; data?: { path?: string } };
            if (event.type !== "fs.changed" || typeof event.data?.path !== "string") return;
            if (normalizePath(event.data.path) !== normalizePath(currentFolder)) return;

            void listDirectory(currentFolder, false).then((result) => {
                if (!alive) return;

                setListing(result);
                const paths = new Set(result.entries.map((entry) => entry.fullPath));
                setSelected((current) => new Set([...current].filter((item) => paths.has(item))));
            }, () => undefined);
        });
    }, [currentFolder]);

    const folders = listing?.entries.filter((entry: FileEntry) => entry.isDirectory) ?? [];
    const files = isFileMode
        ? (listing?.entries ?? []).filter((entry: FileEntry) => !entry.isDirectory && (
            allFiles
            || supported.length === 0
            || supported.some((extension) => entry.name.toLowerCase().endsWith(extension.toLowerCase()))
        ))
        : [];

    const typed = fileName.trim();
    const typedPath = typed.length > 0
        ? isAbsolutePath(typed) ? typed : joinPath(currentFolder, typed)
        : null;

    const choose = () => {
        if (loading || error)
            return;

        const picked = multiple ? [...selected] : [...selected].slice(0, 1);

        if (picked.length > 0) {
            onSelect(picked);
            return;
        }

        if (typedPath !== null && typed !== baseName(currentFolder)) {
            onSelect([typedPath]);
            return;
        }

        if (!isFileMode && currentFolder)
            onSelect([currentFolder]);
    };

    const selectable = [...folders, ...files];
    const allSelected = selectable.length > 0 && selectable.every((entry) => selected.has(entry.fullPath));
    const someSelected = !allSelected && selectable.some((entry) => selected.has(entry.fullPath));

    const toggleAll = () => {
        if (!multiple)
            return;

        if (allSelected) {
            setSelected(new Set());
            return;
        }

        setSelected(new Set(selectable.map((entry) => entry.fullPath)));
        if (selectable.length > 0 && !isFileMode)
            setFileName(baseName(selectable[0].fullPath));
    };

    const toggle = (entry: FileEntry) => {
        if (multiple) {
            setSelected((current) => {
                const next = new Set(current);
                if (!next.delete(entry.fullPath)) next.add(entry.fullPath);
                return next;
            });
            setFileName(entry.name);
            return;
        }

        setSelected(new Set([entry.fullPath]));
        setFileName(entry.name);
    };

    const open = (entry: FileEntry) => {
        if (entry.isDirectory) {
            navigate(entry.fullPath);
            return;
        }

        setSelected(new Set([entry.fullPath]));
        setFileName(entry.name);
        if (!multiple) onSelect([entry.fullPath]);
    };

    /** The gallery keeps its own grid selection; mirror it into the shared footer. */
    const handleGallerySelection = useCallback((paths: string[]) => {
        setSelected(new Set(paths));
        setFileName(paths.length === 1 ? baseName(paths[0]) : "");
    }, []);

    const typeName = (value: string) => {        setFileName(value);

        const match = listing?.entries.find(
            (entry) => entry.name.toLowerCase() === value.trim().toLowerCase()
                && entry.isDirectory !== isFileMode);

        if (match) {
            setSelected(new Set([match.fullPath]));
            return;
        }

        if (!multiple)
            setSelected(new Set());
    };

    const row = (entry: FileEntry) => {
        const checked = selected.has(entry.fullPath);

        return (
            <Row
                $checked={checked}
                key={entry.fullPath}
                onClick={() => toggle(entry)}
                onDoubleClick={() => open(entry)}
                title={entry.fullPath}
                type="button"
            >
                <CheckBox $checked={checked}>
                    {checked && <CheckIcon size={9}/>}
                </CheckBox>
                <PathIcon isDirectory={entry.isDirectory} name={entry.name} path={entry.fullPath} size={18}/>
                <NameCell>{entry.name}</NameCell>
                <TypeCell>{entry.isDirectory ? t("Folder") : baseName(entry.name).includes(".") ? baseName(entry.name).split(".").at(-1)!.toUpperCase() : t("File")}</TypeCell>
                <SizeCell>{entry.isDirectory ? "—" : formatBytes(entry.size)}</SizeCell>
                <DateCell>{formatDate(entry.modified)}</DateCell>
            </Row>
        );
    };

    const selectionBar = (onName: (value: string) => void) => (
        <Footer>
            <SelectionRow>
                <FieldLabel>{isFileMode ? t("File name:") : t("Folder:")}</FieldLabel>
                <NameInput
                    onChange={(event) => onName(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            choose();
                        }
                    }}
                    spellCheck={false}
                    value={fileName}
                />

                {isFileMode && (
                    <>
                        <FieldLabel>{t("Files of type:")}</FieldLabel>
                        <TypeSelect
                            onChange={(event) => setAllFiles(event.target.value === "all")}
                            value={allFiles ? "all" : "supported"}
                        >
                            {supported.length > 0 && (
                                <option value="supported">
                                    {t("Supported files")} ({supported.map((extension) => `*${extension}`).join(";")})
                                </option>
                            )}
                            <option value="all">{t("All files")} (*.*)</option>
                        </TypeSelect>
                    </>
                )}
            </SelectionRow>

            <Actions>
                <Button onClick={onCancel} type="button">{t("Cancel")}</Button>
                <Button
                    $primary
                    disabled={loading || error !== null || (isFileMode && selected.size === 0 && typed.length === 0)}
                    onClick={choose}
                    type="button"
                >
                    <CheckIcon size={12}/>
                    {isFileMode ? t("Select this file") : t("Select this folder")}
                </Button>
            </Actions>
        </Footer>
    );

    const card = (
        <Card $inline={inline} role="dialog" aria-modal={!inline}>
            {!inline && (
                <Header>
                    <Title>
                        <FolderIcon size={16}/>
                        {isFileMode ? t("Choose a file") : t("Choose a folder")}
                    </Title>
                    <CloseButton onClick={onCancel} title={t("Cancel")} type="button">
                        <CrossIcon size={12}/>
                    </CloseButton>
                </Header>
            )}

            <Body>
                <Sidebar
                    activeKind={view === "overview" ? "home" : view === "gallery" ? "gallery" : "files"}
                    currentPath={currentFolder}
                    drives={drives}
                    hiddenViews={isFileMode ? ["recycle", "settings"] : ["recycle", "gallery", "settings"]}
                    homePath={places.find((place) => place.kind === "home")?.path ?? ""}
                    onNavigate={(target) => navigate(target)}
                    onOpenView={(kind) => {
                        if (kind === "home") {
                            setSelected(new Set());
                            setFileName(isFileMode ? "" : baseName(currentFolder));
                            setView("overview");
                        } else if (kind === "gallery" && isFileMode) {
                            setSelected(new Set());
                            setFileName("");
                            setView("gallery");
                        }
                    }}
                    places={places}
                    recent={recent}
                    recentLimit={10}
                />

                <Main>
                    {view === "overview" ? (
                        <>
                            <OverviewView
                                drives={drives}
                                historyVersion={0}
                                homePath={places.find((place) => place.kind === "home")?.path ?? ""}
                                onOpen={(target) => navigate(target)}
                                onPlacesChanged={() => undefined}
                                onRecentCleared={() => undefined}
                                places={places}
                                readOnly
                                recent={recent}
                                recentLimit={10}
                                visibilityVersion={0}
                            />
                            {selectionBar(setFileName)}
                        </>
                    ) : view === "gallery" ? (
                        <>
                            <GalleryView
                                onPick={(path) => onSelect([path])}
                                onSelectionChange={handleGallerySelection}
                                view={{...DefaultView, columns: []}}
                            />
                            {selectionBar(setFileName)}
                        </>
                    ) : (
                        <>
                            <Toolbar>
                                <IconButton
                                    disabled={back.length === 0}
                                    onClick={goBack}
                                    title={t("Back")}
                                    type="button"
                                >
                                    <ArrowLeftIcon/>
                                </IconButton>
                                <IconButton
                                    disabled={forward.length === 0}
                                    onClick={goForward}
                                    title={t("Forward")}
                                    type="button"
                                >
                                    <ArrowRightIcon/>
                                </IconButton>
                                <IconButton
                                    disabled={!parent}
                                    onClick={() => parent && navigate(parent)}
                                    title={t("Up one level")}
                                    type="button"
                                >
                                    <ArrowUpIcon/>
                                </IconButton>

                                <PathBar onNavigate={navigate} path={currentFolder}/>
                            </Toolbar>

                            <List>
                                <HeadRow>
                                    <HeadCheck
                                        aria-label={t("Select all")}
                                        disabled={!multiple}
                                        onClick={toggleAll}
                                        title={multiple ? t("Select all") : undefined}
                                        type="button"
                                    >
                                        <CheckBox $checked={multiple && allSelected} $mixed={multiple && someSelected}>
                                            {multiple && allSelected && <CheckIcon size={9}/>}
                                        </CheckBox>
                                    </HeadCheck>
                                    <span/>
                                    <span>{t("Name")}</span>
                                    <span>{t("Type")}</span>
                                    <span>{t("Size")}</span>
                                    <span>{t("Modified")}</span>
                                </HeadRow>

                                {loading && <Notice>{t("Working…")}</Notice>}
                                {!loading && error && <Notice $error>{error}</Notice>}
                                {!loading && !error && folders.length === 0 && files.length === 0 && (
                                    <Notice>{t("This folder is empty.")}</Notice>
                                )}
                                {!loading && !error && folders.map(row)}
                                {!loading && !error && files.map(row)}
                            </List>

                            {selectionBar(typeName)}
                        </>
                    )}
                </Main>
            </Body>
        </Card>
    );

    if (inline)
        return card;

    return createPortal(
        <Overlay onPointerDown={(event) => {
            if (event.target === event.currentTarget) onCancel();
        }}>
            {card}
        </Overlay>,
        document.body,
    );
}

/** Windows paths win when there is a drive letter; otherwise the folder decides. */
function joinPath(folder: string, name: string): string {
    const separator = folder.includes("\\") ? "\\" : "/";
    return folder.endsWith(separator) ? folder + name : folder + separator + name;
}

function isAbsolutePath(value: string): boolean {
    return /^[a-zA-Z]:[\\/]/.test(value) || value.startsWith("\\\\") || value.startsWith("/");
}

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${fadeInStyle}
`;

const Card = styled.div<{ $inline: boolean }>`
    display: flex;
    flex-direction: column;
    width: ${({$inline}) => $inline ? "100%" : "min(1040px, 100%)"};
    height: ${({$inline}) => $inline ? "100%" : "min(720px, 90vh)"};
    overflow: hidden;
    ${({$inline}) => $inline ? "" : elevatedPanel}
    ${({$inline}) => $inline ? "" : popInStyle}
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`;

const Title = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`;

const CloseButton = styled.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const Body = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`;

const Main = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
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

const List = styled.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 4px 8px 10px;
`;

const Columns = "18px 24px minmax(0, 1.4fr) 90px 90px 140px";

const HeadRow = styled.div`
    display: grid;
    grid-template-columns: ${Columns};
    gap: 10px;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
`;

const Row = styled.button<{ $checked: boolean }>`
    display: grid;
    grid-template-columns: ${Columns};
    gap: 10px;
    align-items: center;
    width: 100%;
    padding: 6px 8px;
    border: 1px solid ${({$checked}) => $checked ? "rgba(var(--accent-rgb), 0.38)" : "transparent"};
    border-radius: var(--radius-sm);
    background: ${({$checked}) => $checked ? "rgba(var(--accent-rgb), 0.1)" : "transparent"};
    color: ${({$checked}) => $checked ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: default;
    user-select: none;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const HeadCheck = styled.button`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;

    &:disabled {
        opacity: 0.32;
        cursor: default;
    }
`;

const CheckBox = styled.span<{ $checked: boolean; $mixed?: boolean }>`
    position: relative;
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked, $mixed}) => $checked || $mixed ? "var(--border-color-focus)" : "var(--border-color-hover)"};
    border-radius: 4px;
    background: ${({$checked, $mixed}) => $checked || $mixed ? "var(--accent-primary)" : "transparent"};
    color: #fff;

    &::after {
        content: "";
        position: absolute;
        width: 7px;
        height: 2px;
        border-radius: 1px;
        background: #fff;
        opacity: ${({$mixed}) => $mixed ? 1 : 0};
    }
`;

const NameCell = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const TypeCell = styled.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const SizeCell = styled.span`
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-align: right;
`;

const DateCell = styled.span`
    color: var(--text-muted);
    font-size: 10px;
    white-space: nowrap;
`;

const Notice = styled.p<{ $error?: boolean }>`
    padding: 18px;
    color: ${({$error}) => $error ? "#fca5a5" : "var(--text-muted)"};
    font-size: 11px;
    text-align: center;
`;

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`;

const SelectionRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`;

const FieldLabel = styled.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`;

const NameInput = styled.input`
    flex: 1;
    min-width: 0;
    height: 32px;
    padding: 0 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
        box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
    }
`;

const TypeSelect = styled.select`
    width: 220px;
    height: 32px;
    padding: 0 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
        box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
    }
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`;

const Button = styled.button<{ $primary?: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 7px 12px;
    border: 1px solid ${({$primary}) => $primary ? "transparent" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: ${({$primary}) => $primary ? "var(--accent-gradient)" : "transparent"};
    color: ${({$primary}) => $primary ? "#fff" : "var(--text-secondary)"};
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: ${({$primary}) => $primary ? "transparent" : "var(--border-color-hover)"};
        color: ${({$primary}) => $primary ? "#fff" : "var(--text-primary)"};
        filter: ${({$primary}) => $primary ? "brightness(1.08)" : "none"};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;
