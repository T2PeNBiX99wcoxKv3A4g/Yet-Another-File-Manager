import {useCallback, useEffect, useMemo, useState} from "react";
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
    type Place,
    type RecentEntry,
} from "../api/files";
import {newFile, newFolder} from "../api/operations";
import {EmptyFind, matchesName, type FindState} from "../find";
import {elevatedPanel} from "../ui/panel";
import {fadeInStyle, popInStyle} from "../ui/motion";
import {ContextMenu, type ContextMenuItem} from "./ContextMenu";
import {FileList} from "./FileList";
import {FindBar} from "./FindBar";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckIcon,
    CrossIcon,
    FileIcon,
    FolderIcon,
    PlusIcon,
    SearchIcon,
} from "./Icons";
import {GalleryView} from "./GalleryView";
import {OverviewView} from "./OverviewView";
import {PathBar} from "./PathBar";
import {Sidebar} from "./Sidebar";
import {baseName, normalizePath, parentPath} from "../utils/format";

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
    const [reload, setReload] = useState(0);
    const [find, setFind] = useState<FindState>(EmptyFind);
    const [findFocus, setFindFocus] = useState(0);
    const [findIndex, setFindIndex] = useState(0);
    const [createMenu, setCreateMenu] = useState<{ x: number; y: number } | null>(null);
    const [renamePath, setRenamePath] = useState<string | null>(null);
    const [renameToken, setRenameToken] = useState(0);

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
    }, [path, reload, isFileMode]);

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.defaultPrevented)
                return;

            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "f") {
                event.preventDefault();
                setFind((current) => ({...current, open: true}));
                setFindFocus((token) => token + 1);
                return;
            }

            if (event.key === "Escape") {
                if (find.open) {
                    setFind((current) => ({...current, open: false, query: ""}));
                    setFindIndex(0);
                } else {
                    onCancel();
                }
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

    const visibleEntries = (listing?.entries ?? []).filter((entry) =>
        entry.isDirectory
        || (isFileMode && (allFiles || supported.length === 0
            || supported.some((extension) => entry.name.toLowerCase().endsWith(extension.toLowerCase())))));

    const pickerListing: DirectoryListing | null = listing
        ? {...listing, entries: visibleEntries}
        : null;

    const searching = find.open && find.query.length > 0;
    const findHits = useMemo(
        () => searching
            ? visibleEntries.filter((entry) => matchesName(entry.name, find)).map((entry) => entry.fullPath)
            : [],
        [searching, visibleEntries, find],
    );

    useEffect(() => {
        setFindIndex(0);
    }, [find.query, find.matchCase, find.regex, listing?.path]);

    const findCurrent = findHits.length === 0 ? -1 : Math.min(findIndex, findHits.length - 1);
    const findView = useMemo(
        () => ({...find, currentPath: findCurrent >= 0 ? findHits[findCurrent] : null}),
        [find, findCurrent, findHits],
    );

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

    /** The file list and the gallery both report their selection; the footer follows it. */
    const handleSelection = useCallback((paths: string[]) => {
        setSelected(new Set(paths));
        setFileName(paths.length === 1
            ? baseName(paths[0])
            : paths.length === 0 && !isFileMode ? baseName(currentFolder) : "");
    }, [currentFolder, isFileMode]);

    const openEntry = (target: string) => {
        const entry = listing?.entries.find((item) => item.fullPath === target);

        if (entry?.isDirectory) {
            navigate(target);
            return;
        }

        if (isFileMode) onSelect([target]);
    };

    const typeName = (value: string) => setFileName(value);

    const startCreate = async (file: boolean) => {
        const menu = createMenu;
        setCreateMenu(null);

        if (!menu || !currentFolder)
            return;

        const result = file
            ? await newFile(currentFolder)
            : await newFolder(currentFolder);

        if (!result.ok || result.path === null)
            return;

        // The new entry has to be visible before FileList can focus its rename box.
        setFind((current) => ({...current, open: false, query: ""}));
        if (file) setAllFiles(true);
        setRenamePath(result.path);
        setRenameToken((token) => token + 1);
        setReload((value) => value + 1);
    };

    const createItems: ContextMenuItem[] = createMenu
        ? [
            {
                label: t("New folder"),
                icon: <FolderIcon size={14}/>,
                onSelect: () => void startCreate(false),
            },
            ...(isFileMode
                ? [{
                    label: t("New file"),
                    icon: <FileIcon size={14}/>,
                    onSelect: () => void startCreate(true),
                }]
                : []),
        ]
        : [];

    const openFind = () => {
        setFind((current) => ({...current, open: true}));
        setFindFocus((token) => token + 1);
    };

    const stepFind = (delta: number) => {
        setFindIndex((index) => {
            if (findHits.length === 0) return 0;
            return (index + delta + findHits.length) % findHits.length;
        });
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
                                onPick={(target) => onSelect([target])}
                                onPlacesChanged={() => undefined}
                                onRecentCleared={() => undefined}
                                onSelectionChange={handleSelection}
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
                                onSelectionChange={handleSelection}
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

                                <IconButton
                                    onClick={(event) => setCreateMenu({x: event.clientX, y: event.clientY})}
                                    title={t("New folder or file")}
                                    type="button"
                                >
                                    <PlusIcon/>
                                </IconButton>
                                <IconButton onClick={openFind} title={t("Search")} type="button">
                                    <SearchIcon/>
                                </IconButton>
                            </Toolbar>

                            {find.open && (
                                <FindBar
                                    current={findCurrent}
                                    focusToken={findFocus}
                                    matchCase={find.matchCase}
                                    mode={find.mode}
                                    onClose={() => {
                                        setFind((current) => ({...current, open: false, query: ""}));
                                        setFindIndex(0);
                                    }}
                                    onMatchCase={() => setFind((current) => ({...current, matchCase: !current.matchCase}))}
                                    onMode={() => setFind((current) => ({...current, mode: current.mode === "dim" ? "hide" : "dim"}))}
                                    onNext={() => stepFind(1)}
                                    onPrevious={() => stepFind(-1)}
                                    onQuery={(query) => setFind((current) => ({...current, query}))}
                                    onRegex={() => setFind((current) => ({...current, regex: !current.regex}))}
                                    query={find.query}
                                    regex={find.regex}
                                    total={findHits.length}
                                />
                            )}

                            <FileList
                                allowBackgroundMenu
                                enableShortcuts={false}
                                error={error}
                                find={findView}
                                loading={loading}
                                listing={pickerListing}
                                onOpen={openEntry}
                                onOpenFile={openEntry}
                                onRefresh={() => setReload((value) => value + 1)}
                                onSelectionChange={handleSelection}
                                onSort={() => undefined}
                                refreshToken={reload}
                                pendingRename={renamePath}
                                pendingRenameToken={renameToken}
                                showCheckboxes
                                showDetails={false}
                                showImages={false}
                                singleSelect={!multiple}
                                view={{...DefaultView, columns: ["type", "size", "modified"]}}
                            />

                            {selectionBar(typeName)}
                        </>
                    )}
                </Main>
            </Body>

            {createMenu && (
                <ContextMenu
                    items={createItems}
                    onClose={() => setCreateMenu(null)}
                    x={createMenu.x}
                    y={createMenu.y}
                />
            )}
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
    position: relative;
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
