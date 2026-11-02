import {
    memo, useCallback, useEffect, useMemo, useRef, useState, type MouseEvent as ReactMouseEvent,
    type PointerEvent as ReactPointerEvent, type ReactNode, type RefObject,
} from "react";
import styled from "styled-components";
import {wantsNewTab, isTyping, comboOf, DefaultShortcuts, type ShortcutMap} from "../shortcuts";
import type {DirectoryListing, FileEntry, Place, ResolvedView} from "../api/files";
import {useIcon, useIconFile, useThumbnail} from "../api/icons";
import {
    compressPaths,
    copyPaths,
    deletePaths,
    hasClipboardFiles,
    invokeShellVerb,
    listOpenWith,
    listShellVerbs,
    newFolder,
    openTerminal,
    openWith,
    openWithProgram,
    pasteInto,
    renamePath,
    showInExplorer,
    showProperties,
    type OpenWithProgram,
    type ShellVerb,
} from "../api/operations";
import {NoFind, rangesOf, type FindView} from "../find";
import {canPreview, previewKindOf, PreviewKindLabels} from "../preview";
import {quickPlace, useQuickAccess} from "../quick";
import {formatBytes, formatDate} from "../utils/format";
import {
    AppIcon,
    ArchiveIcon,
    ArrowRightIcon,
    CheckIcon,
    CopyIcon,
    CutIcon,
    DocumentIcon,
    ExecutableIcon,
    FolderIcon,
    GearIcon,
    PasteIcon,
    PencilIcon,
    PinIcon,
    PlusIcon,
    RefreshIcon,
    ShareIcon,
    StarIcon,
    TerminalIcon,
    TrashIcon,
} from "./Icons";
import {ContextMenu, type ContextMenuItem} from "./ContextMenu";
import {PlaceIcon} from "./PlaceIcon";
import {TagPicker, DefaultTagColor, inkFor} from "./TagPicker";
import {BuiltinIcon, iconForName} from "../icons/fileTypes";

/** The columns the list can show besides the name. `linkTarget` is drawn inside the name cell. */
export const ViewColumns: { id: string; label: string; width: number }[] = [
    {id: "type", label: "Type", width: 150},
    {id: "size", label: "Size", width: 100},
    {id: "modified", label: "Modified", width: 150},
    {id: "created", label: "Created", width: 150},
    {id: "items", label: "Items", width: 70},
    {id: "linkCount", label: "Links", width: 70},
    {id: "linkStatus", label: "Link", width: 90},
    {id: "tags", label: "Tags", width: 150},
];

interface FileListProps {
    listing: DirectoryListing | null;
    loading: boolean;
    error: string | null;
    /** The search that is open, if any; absent means "no search". */
    find?: FindView;
    /** List or grid, the icon size, the visible columns and the sort order. */
    view: ResolvedView;
    /** Draw the preview panel (pictures, videos, documents) under the list; a window-wide setting. */
    showImages: boolean;
    /** How tall the panel is; the divider above it changes this. */
    imageStripHeight?: number;
    onImageStripHeight?: (height: number) => void;
    onSort: (column: string) => void;
    onSetTags?: (name: string, tags: string[], colors?: Record<string, string>) => void;
    onOpen: (path: string, newTab?: boolean) => void;
    /** Double-clicking a file hands it to the system; without this, files are inert. */
    onOpenFile?: (path: string) => void;
    /** Show a checkbox in front of every entry. */
    showCheckboxes?: boolean;
    /** Open entries with one click instead of two. */
    openOnSingleClick?: boolean;
    /** Key bindings; the defaults are used when the overview does not pass them. */
    shortcuts?: ShortcutMap;
    /** Whether this list owns the global file-manager shortcuts. */
    enableShortcuts?: boolean;
    /** Bumped when an outside operation changed the listing, so stale selection is dropped. */
    refreshToken?: number;
    /** Reloads the folder after an operation changed it. */
    onRefresh?: () => void;
}

interface RowModel {
    entry: FileEntry;
    place?: Place;
    label: string;
    ranges: [number, number][] | null;
    tags: string[];
}

/** The height the strip starts at, and the one a double-click on the divider brings back. */
const DefaultStripHeight = 190;
const MinStripHeight = 120;

export function FileList({
    listing, loading, error, find = NoFind, view, showImages, imageStripHeight = DefaultStripHeight,
    onImageStripHeight, onSort, onSetTags, onOpen, onOpenFile, showCheckboxes = true,
    openOnSingleClick = false, shortcuts = DefaultShortcuts, enableShortcuts = true, refreshToken = 0, onRefresh,
}: FileListProps) {
    const quick = useQuickAccess();
    const currentRow = useRef<HTMLDivElement | null>(null);
    const stripDrag = useRef<{ y: number; height: number } | null>(null);
    const anchor = useRef<string | null>(null);
    const [tagTarget, setTagTarget] = useState<{ entry: FileEntry; x: number; y: number } | null>(null);
    const [stripHeight, setStripHeight] = useState(imageStripHeight);
    const [selected, setSelected] = useState<Set<string>>(() => new Set());
    const [menu, setMenu] = useState<{ x: number; y: number; paths: string[]; background: boolean } | null>(null);
    const [canPaste, setCanPaste] = useState(false);
    const shellRequest = useRef(0);
    const openWithRequest = useRef(0);
    const [shell, setShell] = useState<{ verbs: ShellVerb[]; safe: boolean; loading: boolean }>({
        verbs: [], safe: true, loading: false,
    });
    const [openWithApps, setOpenWithApps] = useState<{
        recommended: OpenWithProgram[];
        other: OpenWithProgram[];
        loading: boolean;
    }>({recommended: [], other: [], loading: false});

    // A new folder starts with nothing selected; an operation that renamed a path drops it too.
    useEffect(() => {
        setSelected(new Set());
        setMenu(null);
        setShell({verbs: [], safe: true, loading: false});
        setOpenWithApps({recommended: [], other: [], loading: false});
        shellRequest.current += 1;
        openWithRequest.current += 1;
        anchor.current = null;
    }, [listing?.path]);

    useEffect(() => {
        setStripHeight(imageStripHeight);
    }, [imageStripHeight]);

    // An outside operation (undo, hidden files) invalidates the selected paths.
    useEffect(() => {
        setSelected(new Set());
        anchor.current = null;
    }, [refreshToken]);

    const startStripDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
        stripDrag.current = {y: event.clientY, height: stripHeight};
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const dragStrip = (event: ReactPointerEvent<HTMLDivElement>) => {
        const start = stripDrag.current;
        if (!start) return;

        const tallest = Math.max(MinStripHeight, Math.round(window.innerHeight * 0.7));
        setStripHeight(Math.min(tallest, Math.max(MinStripHeight, start.height + start.y - event.clientY)));
    };

    const endStripDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
        if (!stripDrag.current) return;

        stripDrag.current = null;
        event.currentTarget.releasePointerCapture(event.pointerId);
        onImageStripHeight?.(stripHeight);
    };

    const resetStripHeight = () => {
        setStripHeight(DefaultStripHeight);
        onImageStripHeight?.(DefaultStripHeight);
    };

    // Typing a letter jumps to the first match; the row has to be brought into view with it.
    useEffect(() => {
        currentRow.current?.scrollIntoView({block: "nearest"});
    }, [find.currentPath]);

    const searching = find.query.length > 0;
    const visible = ViewColumns.filter((column) => view.columns?.includes(column.id));
    const showTarget = view.columns?.includes("linkTarget") ?? false;
    const template = `minmax(160px, 1fr) ${visible.map((column) => `${column.width}px`).join(" ")}`.trim();

    const rows = useMemo(() => {
        if (!listing) return [];

        const matched = listing.entries
            .map((entry): RowModel => {
                const place = quickPlace(quick, entry.fullPath);
                const label = place?.name || entry.name;

                return {
                    entry,
                    place,
                    label,
                    ranges: searching ? rangesOf(label, find) : null,
                    tags: listing.tags[entry.name] ?? [],
                };
            })
            .filter((row) => !searching || find.mode === "dim" || row.ranges !== null);

        return sortRows(matched, view, listing);
    }, [listing, searching, find, quick, view.sort, view.sortDescending]);

    const groups = useMemo(() => groupRows(rows, GridRules), [rows]);

    // The panel repeats what the rows already show; only types the shell can preview belong in it.
    const previews = useMemo(
        () => rows.filter((row) => !row.entry.isDirectory && canPreview(row.entry.name)),
        [rows]
    );
    const previewGroups = useMemo(() => groupRows(previews, PreviewKindRules), [previews]);

    const allPaths = useMemo(() => rows.map((row) => row.entry.fullPath), [rows]);
    const currentDirectory = listing?.path ?? "";

    /** Applies Explorer's plain, Ctrl and Shift selection rules to one click. */
    const selectRow = useCallback((event: ReactMouseEvent, path: string) => {
        const additive = event.ctrlKey || event.metaKey;

        setSelected((current) => {
            if (event.shiftKey && anchor.current !== null) {
                const from = allPaths.indexOf(anchor.current);
                const to = allPaths.indexOf(path);

                if (from >= 0 && to >= 0) {
                    const start = Math.min(from, to);
                    const end = Math.max(from, to);
                    const next = additive ? new Set(current) : new Set<string>();

                    for (let index = start; index <= end; index++)
                        next.add(allPaths[index]);

                    return next;
                }
            }

            if (additive) {
                const next = new Set(current);

                if (!next.delete(path)) next.add(path);

                anchor.current = path;
                return next;
            }

            anchor.current = path;
            return new Set([path]);
        });
    }, [allPaths]);

    /** The checkbox toggles one path without disturbing the rest of the selection. */
    const toggleRow = useCallback((path: string) => {
        anchor.current = path;
        setSelected((current) => {
            const next = new Set(current);

            if (!next.delete(path)) next.add(path);

            return next;
        });
    }, []);

    const clearSelection = useCallback(() => {
        anchor.current = null;
        setSelected(new Set());
    }, []);

    const closeMenu = useCallback(() => {
        shellRequest.current += 1;
        openWithRequest.current += 1;
        setMenu(null);
    }, []);

    const openRow = useCallback((entry: FileEntry, event: ReactMouseEvent) => {
        if (entry.isDirectory)
            onOpen(entry.fullPath, wantsNewTab(event));
        else
            onOpenFile?.(entry.fullPath);
    }, [onOpen, onOpenFile]);

    const openMenu = useCallback((event: ReactMouseEvent, path?: string) => {
        event.preventDefault();
        event.stopPropagation();

        if (path && !selected.has(path))
            setSelected(new Set([path]));

        if (path)
            anchor.current = path;

        const paths = path ? (selected.has(path) ? [...selected] : [path]) : [];
        const shellPaths = path ? paths : currentDirectory ? [currentDirectory] : [];
        const request = ++shellRequest.current;
        const targetRow = path ? rows.find((row) => row.entry.fullPath === path) : undefined;
        const openWithTarget = targetRow && !targetRow.entry.isDirectory && paths.length === 1
            ? targetRow.entry.fullPath
            : null;
        const openWithToken = ++openWithRequest.current;

        setMenu({x: event.clientX, y: event.clientY, paths, background: !path});
        setShell({verbs: [], safe: true, loading: shellPaths.length > 0});

        if (openWithTarget) {
            setOpenWithApps({recommended: [], other: [], loading: true});

            void listOpenWith(openWithTarget).then(
                (result) => {
                    if (openWithRequest.current === openWithToken)
                        setOpenWithApps({...result, loading: false});
                },
                () => {
                    if (openWithRequest.current === openWithToken)
                        setOpenWithApps({recommended: [], other: [], loading: false});
                },
            );
        }
        else
            setOpenWithApps({recommended: [], other: [], loading: false});

        void hasClipboardFiles().then(setCanPaste, () => setCanPaste(false));

        if (shellPaths.length === 0) return;

        void listShellVerbs(shellPaths).then(
            (result) => {
                if (shellRequest.current === request)
                    setShell({...result, loading: false});
            },
            () => {
                if (shellRequest.current === request)
                    setShell({verbs: [], safe: true, loading: false});
            },
        );
    }, [currentDirectory, rows, selected]);

    const refresh = () => onRefresh?.();

    const copy = async (paths: string[], cut = false) => {
        if (await copyPaths(paths, cut))
            setCanPaste(true);
    };

    const paste = async (directory: string) => {
        if (!await pasteInto(directory))
            window.alert("Nothing on the clipboard could be pasted here.");
        else
            refresh();
    };

    const createFolder = async () => {
        const result = await newFolder(currentDirectory);

        if (result.ok)
            refresh();
        else
            window.alert(result.error ?? "Could not create the folder.");
    };

    const rename = async (entry: FileEntry) => {
        const name = window.prompt("Rename", entry.name);
        if (name === null || name.trim().length === 0 || name === entry.name) return;

        const result = await renamePath(entry.fullPath, name);

        if (result.ok) {
            clearSelection();
            refresh();
        }
        else
            window.alert(result.error ?? "Could not rename the entry.");
    };

    const remove = async (paths: string[], permanent = false) => {
        const question = permanent
            ? `Permanently delete ${paths.length === 1 ? "this item" : `${paths.length} items`}? This cannot be undone.`
            : `Move ${paths.length === 1 ? "this item" : `${paths.length} items`} to the recycle bin?`;

        if (!window.confirm(question))
            return;

        if (!await deletePaths(paths, permanent))
            window.alert(permanent
                ? "The shell could not delete the selection."
                : "The shell could not move the selection to the recycle bin.");
        else {
            clearSelection();
            refresh();
        }
    };

    const compress = async (paths: string[]) => {
        const result = await compressPaths(paths);

        if (result.ok)
            refresh();
        else
            window.alert(result.error ?? "Could not create the ZIP file.");
    };

    const copyAsPath = async (paths: string[]) => {
        try {
            await navigator.clipboard.writeText(paths.join("\n"));
        } catch {
            // The web view refused the clipboard; nothing sensible to show.
        }
    };

    // File-manager shortcuts. Ctrl+D copies as KDE's file manager does; Ctrl+C also copies.
    useEffect(() => {
        if (!enableShortcuts || menu) return;

        const onKey = (event: KeyboardEvent) => {
            if (isTyping(event.target)) return;

            const combo = comboOf(event);
            const paths = [...selected];
            const selectedEntry = paths.length === 1
                ? rows.find((row) => row.entry.fullPath === paths[0])?.entry
                : undefined;

            const run = (action: () => void) => {
                event.preventDefault();
                action();
            };

            if (combo === "ctrl+d" || combo === shortcuts.copy) {
                run(() => {
                    if (paths.length > 0) void copy(paths);
                });
                return;
            }

            if (combo === shortcuts.cut) {
                run(() => {
                    if (paths.length > 0) void copy(paths, true);
                });
                return;
            }

            if (combo === shortcuts.paste) {
                run(() => void paste(currentDirectory));
                return;
            }

            if (combo === shortcuts.delete) {
                run(() => {
                    if (paths.length > 0) void remove(paths);
                });
                return;
            }

            if (combo === shortcuts.deletePermanently) {
                run(() => {
                    if (paths.length > 0) void remove(paths, true);
                });
                return;
            }

            if (combo === shortcuts.selectAll) {
                run(() => {
                    setSelected(new Set(allPaths));
                    anchor.current = allPaths[0] ?? null;
                });
                return;
            }

            if (combo === shortcuts.invertSelection) {
                run(() => {
                    setSelected(new Set(allPaths.filter((path) => !selected.has(path))));
                    anchor.current = allPaths[0] ?? null;
                });
                return;
            }

            if (combo === shortcuts.rename && selectedEntry) {
                run(() => void rename(selectedEntry));
                return;
            }

            if (combo === shortcuts.open && selectedEntry) {
                run(() => {
                    if (selectedEntry.isDirectory) onOpen(selectedEntry.fullPath);
                    else onOpenFile?.(selectedEntry.fullPath);
                });
                return;
            }

            if (combo === shortcuts.newFolder || combo === "f10") {
                run(() => void createFolder());
                return;
            }

            if (combo === shortcuts.terminal) {
                run(() => void openTerminal(currentDirectory));
                return;
            }

            if (combo === shortcuts.properties) {
                run(() => void showProperties(paths.length > 0
                    ? paths
                    : currentDirectory ? [currentDirectory] : []));
                return;
            }

            if (combo === shortcuts.refresh)
                run(refresh);
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [allPaths, copy, createFolder, currentDirectory, enableShortcuts, menu, onOpen, onOpenFile, paste, refresh,
        remove, rename, rows, selected, shortcuts]);

    const menuItems: ContextMenuItem[] = [];
    const quickActions: ContextMenuItem[] = [];
    const target = menu?.paths[0];
    const entry = target ? rows.find((row) => row.entry.fullPath === target)?.entry : undefined;
    const single = menu?.paths.length === 1;
    const shellPaths = menu?.background ? (currentDirectory ? [currentDirectory] : []) : menu?.paths ?? [];
    const shellGroup = shell.safe ? "Shell actions (standard)" : "Shell actions";

    if (menu?.background) {
        menuItems.push({
            label: "Open in Terminal", icon: <TerminalIcon size={14}/>,
            onSelect: () => void openTerminal(currentDirectory),
        });
        menuItems.push({
            label: "Show in Explorer", icon: <FolderIcon size={14}/>, separatorBefore: true,
            onSelect: () => void showInExplorer(currentDirectory),
        });

        quickActions.push(
            {label: "New folder", icon: <PlusIcon size={16}/>, onSelect: () => void createFolder()},
            {
                label: "Paste", icon: <PasteIcon size={16}/>, disabled: !canPaste,
                onSelect: () => void paste(currentDirectory),
            },
            {label: "Refresh", icon: <RefreshIcon size={16}/>, onSelect: refresh},
            {
                label: "Properties", icon: <GearIcon size={16}/>,
                onSelect: () => void showProperties([currentDirectory]),
            },
        );
    }
    else if (menu) {
        menuItems.push({
            label: "Open", icon: <ArrowRightIcon size={14}/>, onSelect: () => {
                if (!entry) return;

                if (entry.isDirectory) onOpen(entry.fullPath);
                else onOpenFile?.(entry.fullPath);
            },
        });

        if (entry?.isDirectory) {
            menuItems.push({
                label: "Open in new tab", icon: <PlusIcon size={14}/>,
                onSelect: () => onOpen(entry.fullPath, true),
            });
            menuItems.push({
                label: "Paste into folder", icon: <PasteIcon size={14}/>, disabled: !canPaste,
                onSelect: () => void paste(entry.fullPath),
            });
            menuItems.push({
                label: "Open in Terminal", icon: <TerminalIcon size={14}/>,
                onSelect: () => void openTerminal(entry.fullPath),
            });
        }

        if (single && entry && !entry.isDirectory) {
            const children: ContextMenuItem[] = [];

            if (openWithApps.loading)
                children.push({label: "Loading apps…", loading: true, disabled: true, onSelect: () => undefined});
            else {
                openWithApps.recommended.forEach((app) => {
                    children.push({
                        label: app.name,
                        group: "Suggested apps",
                        icon: app.icon
                            ? <img alt="" height={14} src={app.icon} width={14}/>
                            : <AppIcon size={14}/>,
                        onSelect: () => void openWithProgram(entry.fullPath, app.path).then((opened) => {
                            if (!opened) void openWith(entry.fullPath);
                        }),
                    });
                });

                openWithApps.other.forEach((app) => {
                    children.push({
                        label: app.name,
                        group: "Other apps",
                        icon: app.icon
                            ? <img alt="" height={14} src={app.icon} width={14}/>
                            : <AppIcon size={14}/>,
                        onSelect: () => void openWithProgram(entry.fullPath, app.path).then((opened) => {
                            if (!opened) void openWith(entry.fullPath);
                        }),
                    });
                });
            }

            children.push({
                label: "Choose another app…",
                icon: <AppIcon size={14}/>,
                separatorBefore: true,
                onSelect: () => void openWith(entry.fullPath),
            });

            menuItems.push({
                label: "Open with",
                icon: <AppIcon size={14}/>,
                children,
                onSelect: () => void openWith(entry.fullPath),
            });
        }

        menuItems.push({
            label: "Compress to ZIP", icon: <ArchiveIcon size={14}/>, separatorBefore: true,
            onSelect: () => void compress(menu.paths),
        });
        menuItems.push({
            label: "Copy as path", icon: <CopyIcon size={14}/>,
            onSelect: () => void copyAsPath(menu.paths),
        });

        menuItems.push({
            label: "Show in Explorer", icon: <FolderIcon size={14}/>, separatorBefore: true,
            onSelect: () => void showInExplorer(menu.paths[0]),
        });

        quickActions.push(
            {label: "Cut", icon: <CutIcon size={16}/>, onSelect: () => void copy(menu.paths, true)},
            {label: "Copy", icon: <CopyIcon size={16}/>, onSelect: () => void copy(menu.paths, false)},
        );

        if (single && entry)
            quickActions.push({label: "Rename", icon: <PencilIcon size={16}/>, onSelect: () => void rename(entry)});

        quickActions.push(
            {label: "Delete", icon: <TrashIcon size={16}/>, danger: true, onSelect: () => void remove(menu.paths)},
            {
                label: "Properties", icon: <GearIcon size={16}/>,
                onSelect: () => void showProperties(menu.paths),
            },
        );
    }

    if (menu) {
        if (shell.loading)
            menuItems.push({
                label: "Reading shell actions…", group: shellGroup, loading: true, disabled: true,
                onSelect: () => undefined,
            });
        else
            shell.verbs.forEach((verb) => {
                menuItems.push({
                    label: verb.label,
                    group: verb.group ?? shellGroup,
                    depth: verb.group ? verb.depth : 0,
                    icon: <MenuIcon source={verb.icon}/>,
                    disabled: !verb.enabled,
                    checked: verb.checked,
                    onSelect: () => void invokeShellVerb(shellPaths, shell.safe, verb.verb, verb.offset),
                });
            });
    }

    if (error)
        return <Center><ErrorText>{error}</ErrorText></Center>;

    if (!listing && !loading)
        return <Center><Muted>Nothing selected.</Muted></Center>;

    if (view.mode === "grid")
        return (
            <Wrapper>
                <GridBody
                    onClick={(event) => {
                        if (event.target === event.currentTarget) clearSelection();
                    }}
                    onContextMenu={(event) => openMenu(event)}
                >
                    {loading && !listing
                        ? <Tiles $size={view.gridSize}><PlaceholderTiles size={view.gridSize}/></Tiles>
                        : <GridContent
                            counts={listing?.counts}
                            currentPath={searching ? find.currentPath : null}
                            groups={groups}
                            gridSize={view.gridSize}
                            innerRef={currentRow}
                            onContextMenu={openMenu}
                            onOpen={onOpen}
                            onOpenFile={onOpenFile}
                            onSelect={selectRow}
                            onToggle={toggleRow}
                            openOnSingleClick={openOnSingleClick}
                            searching={searching}
                            selected={selected}
                            showCheckboxes={showCheckboxes}
                            showTarget={showTarget}
                        />}

                    {!loading && listing && rows.length === 0 && (
                        <EmptyCell>
                            <Muted>
                                {searching && find.mode === "hide"
                                    ? "No entries match the search."
                                    : "This folder is empty."}
                            </Muted>
                        </EmptyCell>
                    )}
                </GridBody>

                {menu && <ContextMenu items={menuItems} onClose={closeMenu} quick={quickActions} x={menu.x} y={menu.y}/>}
            </Wrapper>
        );

    return (
        <Wrapper>
            <Head style={{gridTemplateColumns: template}}>
                <HeaderButton onClick={() => onSort("name")} type="button">
                    Name{markOf(view, "name")}
                </HeaderButton>
                {visible.map((column) => (
                    <HeaderButton key={column.id} onClick={() => onSort(column.id)} type="button">
                        {column.label}{markOf(view, column.id)}
                    </HeaderButton>
                ))}
            </Head>

            <Body
                onClick={(event) => {
                    if (event.target === event.currentTarget) clearSelection();
                }}
                onContextMenu={(event) => openMenu(event)}
            >
                {loading && !listing
                    ? <PlaceholderRows template={template} columns={visible.length}/>
                    : rows.map((row) => {
                        const dim = searching && row.ranges === null;
                        const current = searching && row.entry.fullPath === find.currentPath;
                        const path = row.entry.fullPath;
                        const checked = selected.has(path);

                        return (
                            <Row
                                key={path}
                                $current={current}
                                $dim={dim}
                                $hidden={row.entry.isHidden}
                                $selected={checked}
                                onClick={(event) => {
                                    selectRow(event, path);

                                    if (openOnSingleClick)
                                        openRow(row.entry, event);
                                }}
                                onContextMenu={(event) => openMenu(event, path)}
                                onDoubleClick={(event) => {
                                    if (!openOnSingleClick)
                                        openRow(row.entry, event);
                                }}
                                ref={current ? currentRow : undefined}
                                style={{gridTemplateColumns: template}}
                            >
                                <Name>
                                    {showCheckboxes && (
                                        <SelectionBox
                                            $checked={checked}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                toggleRow(path);
                                            }}
                                            onDoubleClick={(event) => event.stopPropagation()}
                                            title={checked ? "Deselect" : "Select"}
                                            type="button"
                                        >
                                            {checked && <CheckIcon size={10}/>}
                                        </SelectionBox>
                                    )}
                                    {row.place && quick.useIcons
                                        ? <IconSlot><PlaceIcon place={row.place} size={view.iconSize}/></IconSlot>
                                        : <EntryIcon entry={row.entry} size={view.iconSize}/>}
                                    <NameText $broken={row.entry.linkValid === false} title={row.entry.name}>
                                        <Highlighted name={row.label} ranges={row.ranges}/>
                                    </NameText>
                                    {showTarget && row.entry.linkTarget && (
                                        <LinkTo title={row.entry.linkTarget}>→ {row.entry.linkTarget}</LinkTo>
                                    )}
                                </Name>
                                {visible.map((column) => (
                                    <Cell key={column.id}>
                                        {column.id === "tags"
                                            ? (
                                                <TagsButton
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        setTagTarget({
                                                            entry: row.entry,
                                                            x: event.clientX,
                                                            y: event.clientY,
                                                        });
                                                    }}
                                                    title="Edit tags"
                                                    type="button"
                                                >
                                                    {row.tags.length > 0
                                                        ? row.tags.map((tag) => {
                                                            const color = listing!.tagColors?.[tag] ?? DefaultTagColor;

                                                            return (
                                                                <TagChip $color={color} $ink={inkFor(color)} key={tag}>
                                                                    {tag}
                                                                </TagChip>
                                                            );
                                                        })
                                                        : <TagEmpty>+</TagEmpty>}
                                                </TagsButton>
                                            )
                                            : column.id === "linkStatus" && row.entry.linkValid === false
                                                ? <Broken>Broken</Broken>
                                                : cellValue(column.id, row.entry, listing!)}
                                    </Cell>
                                ))}
                            </Row>
                        );
                    })}

                {!loading && listing && rows.length === 0 && (
                    <Center>
                        <Muted>
                            {searching && find.mode === "hide"
                                ? "No entries match the search."
                                : "This folder is empty."}
                        </Muted>
                    </Center>
                )}
            </Body>

            {showImages && previews.length > 0 && (
                <>
                    <Splitter
                        onDoubleClick={resetStripHeight}
                        onPointerDown={startStripDrag}
                        onPointerMove={dragStrip}
                        onPointerUp={endStripDrag}
                        title="Drag to resize; double-click to reset"
                    />
                    <Strip style={{height: stripHeight}}>
                        <StripHead>
                            Preview
                            <StripCount>{previews.length}</StripCount>
                        </StripHead>
                        <GridBody
                            onClick={(event) => {
                                if (event.target === event.currentTarget) clearSelection();
                            }}
                            onContextMenu={(event) => openMenu(event)}
                        >
                            <GridContent
                                counts={listing?.counts}
                                currentPath={searching ? find.currentPath : null}
                                groups={previewGroups}
                                gridSize={view.gridSize}
                                onContextMenu={openMenu}
                                onOpen={onOpen}
                                onOpenFile={onOpenFile}
                                onSelect={selectRow}
                                onToggle={toggleRow}
                                openOnSingleClick={openOnSingleClick}
                                searching={searching}
                                selected={selected}
                                showCheckboxes={showCheckboxes}
                                showTarget={showTarget}
                            />
                        </GridBody>
                    </Strip>
                </>
            )}

            {tagTarget && listing && (
                <TagPicker
                    allTags={listing.allTags}
                    colors={listing.tagColors}
                    onChange={(tags, colors) => onSetTags?.(tagTarget.entry.name, tags, colors)}
                    onClose={() => setTagTarget(null)}
                    tags={listing.tags[tagTarget.entry.name] ?? []}
                    x={tagTarget.x}
                    y={tagTarget.y}
                />
            )}

            {menu && <ContextMenu items={menuItems} onClose={closeMenu} quick={quickActions} x={menu.x} y={menu.y}/>}
        </Wrapper>
    );
}

/** Maps an extracted shell icon source to the glyph the menu draws. */
function MenuIcon({source}: {source: string | null}) {
    if (!source) return <AppIcon size={14}/>;
    if (source.startsWith("data:")) return <img alt="" height={14} src={source} width={14}/>;

    switch (source.startsWith("icon:") ? source.slice(5) : source) {
        case "open":
            return <ArrowRightIcon size={14}/>;
        case "document":
            return <DocumentIcon size={14}/>;
        case "cut":
            return <CutIcon size={14}/>;
        case "copy":
            return <CopyIcon size={14}/>;
        case "paste":
            return <PasteIcon size={14}/>;
        case "trash":
            return <TrashIcon size={14}/>;
        case "pencil":
            return <PencilIcon size={14}/>;
        case "gear":
            return <GearIcon size={14}/>;
        case "star":
            return <StarIcon size={14}/>;
        case "pin":
            return <PinIcon size={14}/>;
        case "executable":
            return <ExecutableIcon size={14}/>;
        case "share":
            return <ShareIcon size={14}/>;
        case "arrow":
            return <ArrowRightIcon size={14}/>;
        default:
            return <AppIcon size={14}/>;
    }
}

/** "↑"/"↓" beside the column that is sorted. */
function markOf(view: ResolvedView, column: string): string {
    if (view.sort !== column) return "";

    return view.sortDescending ? " ↓" : " ↑";
}

/** Folders stay first, the way Explorer keeps them, and the chosen column orders the rest. */
function sortRows(rows: RowModel[], view: ResolvedView, listing: DirectoryListing): RowModel[] {
    const value = (entry: FileEntry): string | number => {
        switch (view.sort) {
            case "type":
                return typeLabel(entry);
            case "size":
                return entry.isDirectory ? listing.folderSizes[entry.name] ?? 0 : entry.size;
            case "modified":
                return entry.modified;
            case "created":
                return entry.created;
            case "items":
                return entry.isDirectory ? listing.counts[entry.name] ?? -1 : -1;
            case "linkCount":
                return entry.linkCount > 1 ? entry.linkCount : 0;
            case "linkStatus":
                if (entry.linkTarget != null) return entry.linkValid ? 0 : 1;
                return entry.linkCount > 1 ? 2 : 3;
            case "tags":
                return (listing.tags[entry.name] ?? []).join(", ");
            default:
                return entry.name;
        }
    };

    return [...rows].sort((left, right) => {
        if (left.entry.isDirectory !== right.entry.isDirectory)
            return left.entry.isDirectory ? -1 : 1;

        const a = value(left.entry);
        const b = value(right.entry);
        const order = typeof a === "number" && typeof b === "number"
            ? a - b
            : String(a).localeCompare(String(b), undefined, {numeric: true, sensitivity: "base"});

        return view.sortDescending ? -order : order;
    });
}

interface RowGroup {
    id: string;
    label: string;
    rows: RowModel[];
}

interface GroupRule {
    id: string;
    label: string;
    match: (row: RowModel) => boolean;
}

/** One rule per preview kind, shared by the grid and the panel below the list. */
const PreviewKindRules: GroupRule[] = PreviewKindLabels.map(({kind, label}) => ({
    id: kind,
    label,
    match: (row) => !row.entry.isDirectory && previewKindOf(row.entry.name) === kind,
}));

/** The grid keeps folders first, then pictures and videos, and everything else last. */
const GridRules: GroupRule[] = [
    {id: "folders", label: "Folders", match: (row) => row.entry.isDirectory},
    ...PreviewKindRules.filter((rule) => rule.id === "image" || rule.id === "video"),
    {id: "files", label: "Other files", match: () => true},
];

/** Splits rows into the first matching section, dropping the sections that stay empty. */
function groupRows(rows: RowModel[], rules: GroupRule[]): RowGroup[] {
    const groups = rules.map((rule) => ({id: rule.id, label: rule.label, rows: [] as RowModel[]}));

    for (const row of rows) {
        const index = rules.findIndex((rule) => rule.match(row));
        if (index >= 0) groups[index].rows.push(row);
    }

    return groups.filter((group) => group.rows.length > 0);
}

/** The icon inside a grid tile follows the tile height, the same in the grid and the panel. */
function gridIconSize(gridSize: number): number {
    return Math.max(24, Math.min(gridSize - 56, 160));
}

/** Human labels for the file categories the extension map knows. */
const TypeLabels: Record<string, string> = {
    file: "file",
    folder: "folder",
    text: "text file",
    code: "source file",
    image: "image",
    video: "video",
    audio: "audio",
    archive: "archive",
    pdf: "PDF",
    executable: "application",
    font: "font",
    database: "database",
    config: "configuration",
    spreadsheet: "spreadsheet",
    presentation: "presentation",
    document: "document",
};

/** What the Type column says: a shortcut and a symbolic link must not look the same. */
function typeLabel(entry: FileEntry): string {
    const lower = entry.name.toLowerCase();

    if (lower.endsWith(".lnk"))
        return "Shortcut";
    if (lower.endsWith(".url") || lower.endsWith(".website"))
        return "Internet shortcut";
    if (entry.linkTarget != null)
        return entry.isDirectory ? "Folder link" : "Symbolic link";
    if (entry.isDirectory)
        return "Folder";

    const dot = entry.name.lastIndexOf(".");
    const extension = dot > 0 && dot < entry.name.length - 1 ? entry.name.slice(dot + 1).toUpperCase() : "";
    const kind = TypeLabels[iconForName(entry.name)] ?? "file";

    return extension.length > 0 ? `${extension} ${kind}` : "File";
}

/** What one list cell shows. */
function cellValue(column: string, entry: FileEntry, listing: DirectoryListing): string {
    switch (column) {
        case "type":
            return typeLabel(entry);
        case "size":
            return sizeOf(entry, listing.folderSizes);
        case "modified":
            return formatDate(entry.modified);
        case "created":
            return formatDate(entry.created);
        case "items":
            return entry.isDirectory ? listing.counts[entry.name]?.toString() ?? "—" : "—";
        case "linkCount":
            return entry.linkCount > 1 ? String(entry.linkCount) : "—";
        case "linkStatus":
            if (entry.linkTarget != null) return entry.linkValid ? "OK" : "Broken";
            return entry.linkCount > 1 ? "OK" : "—";
        default:
            return "";
    }
}

/** The name with every match of the query marked, so a dimmed list still points at the hit. */
function Highlighted({name, ranges}: { name: string; ranges: [number, number][] | null }) {
    if (!ranges || ranges.length === 0) return <>{name}</>;

    const parts: ReactNode[] = [];
    let at = 0;

    for (const [start, end] of ranges) {
        if (start > at) parts.push(name.slice(at, start));
        parts.push(<Mark key={start}>{name.slice(start, end)}</Mark>);
        at = end;
    }

    if (at < name.length) parts.push(name.slice(at));

    return <>{parts}</>;
}

/** Folder sizes come from the folder's own index and appear once they have been measured. */
function sizeOf(entry: FileEntry, folderSizes: Record<string, number>): string {
    if (!entry.isDirectory)
        return formatBytes(entry.size);

    const measured = folderSizes[entry.name];

    return measured === undefined ? "—" : formatBytes(measured);
}

/**
 * Icon precedence: an icon recorded in the folder's index, then the shell (or the folder's own
 * desktop.ini when that is enabled), then the built-in icon for the file type.
 */
function EntryIcon({entry, size = 18}: { entry: FileEntry; size?: number }) {
    const shellIcon = useIcon(entry.fullPath, entry.isDirectory, size > 32);
    const customFile = entry.iconSource?.startsWith("file:") ? entry.iconSource.slice(5) : null;
    const customImage = useIconFile(customFile);

    return (
        <IconSlot $size={size}>
            {entry.iconSource?.startsWith("icon:")
                ? <BuiltinIcon name={entry.iconSource.slice(5)} size={size}/>
                : customImage
                    ? <img alt="" height={size} src={customImage} width={size}/>
                    : shellIcon
                        ? <img alt="" height={size} src={shellIcon} width={size}/>
                        : entry.isDirectory
                            ? <FolderIcon size={size}/>
                            : <BuiltinIcon name={iconForName(entry.name)} size={size}/>}
        </IconSlot>
    );
}

/** Stand-in rows while the folder is read, so the columns keep their shape. */
function PlaceholderRows({template, columns}: { template: string; columns: number }) {
    const widths = [42, 58, 36, 64, 48, 54, 39, 61, 45, 50, 57, 43, 66, 47];

    return (
        <>
            {widths.map((width, index) => (
                <Skeleton key={index} style={{gridTemplateColumns: template}}>
                    <Name>
                        <Bone style={{flexShrink: 0, height: 18, width: 18}}/>
                        <Bone style={{width: `${width}%`}}/>
                    </Name>
                    {Array.from({length: columns}, (_, column) => (
                        <Bone key={column} style={{width: column % 2 === 0 ? 44 : 92}}/>
                    ))}
                </Skeleton>
            ))}
        </>
    );
}

/** Stand-in tiles for a grid that has no listing yet. */
function PlaceholderTiles({size}: { size: number }) {
    return (
        <>
            {[42, 58, 36, 64, 48, 54, 39, 61, 45, 50, 57, 43].map((width, index) => (
                <Tile $dim={false} $current={false} $selected={false} key={index}>
                    <TileMedia>
                        <Bone style={{height: size, width: size}}/>
                    </TileMedia>
                    <TileCaption>
                        <Bone style={{height: 9, width: `${width}%`}}/>
                    </TileCaption>
                </Tile>
            ))}
        </>
    );
}

/** One rectangular grid tile: a content preview, or the entry's icon, with a caption underneath. */
const GridTile = memo(function GridTile({
    row, current, dim, iconSize, itemCount, showTarget, innerRef, selected, showCheckboxes, openOnSingleClick,
    onSelect, onToggle, onContextMenu, onOpen, onOpenFile,
}: {
    row: RowModel;
    current: boolean;
    dim: boolean;
    iconSize: number;
    itemCount?: number;
    showTarget: boolean;
    innerRef?: RefObject<HTMLDivElement | null>;
    selected: boolean;
    showCheckboxes: boolean;
    openOnSingleClick: boolean;
    onSelect: (event: ReactMouseEvent, path: string) => void;
    onToggle: (path: string) => void;
    onContextMenu: (event: ReactMouseEvent, path: string) => void;
    onOpen: (path: string, newTab?: boolean) => void;
    onOpenFile?: (path: string) => void;
}) {
    const quick = useQuickAccess();
    const previewable = !row.entry.isDirectory && canPreview(row.entry.name);
    const preview = useThumbnail(previewable ? row.entry.fullPath : null, 192, row.entry.modified);
    const [failed, setFailed] = useState(false);
    const path = row.entry.fullPath;

    const open = (event: ReactMouseEvent) => {
        if (row.entry.isDirectory) onOpen(path, wantsNewTab(event));
        else onOpenFile?.(path);
    };

    return (
        <Tile
            $current={current}
            $dim={dim}
            $selected={selected}
            onClick={(event) => {
                onSelect(event, path);

                if (openOnSingleClick)
                    open(event);
            }}
            onContextMenu={(event) => onContextMenu(event, path)}
            onDoubleClick={(event) => {
                if (!openOnSingleClick)
                    open(event);
            }}
            ref={current ? innerRef : undefined}
            title={row.entry.name}
        >
            {showCheckboxes && (
                <TileCheck
                    $checked={selected}
                    onClick={(event) => {
                        event.stopPropagation();
                        onToggle(path);
                    }}
                    onDoubleClick={(event) => event.stopPropagation()}
                    title={selected ? "Deselect" : "Select"}
                    type="button"
                >
                    {selected && <CheckIcon size={10}/>}
                </TileCheck>
            )}
            <TileMedia>
                {previewable && preview && !failed
                    ? (
                        <img
                            alt=""
                            decoding="async"
                            loading="lazy"
                            onError={() => setFailed(true)}
                            src={preview}
                        />
                    )
                    : (
                        <TileIcon>
                            {row.place && quick.useIcons
                                ? <PlaceIcon place={row.place} size={iconSize}/>
                                : <EntryIcon entry={row.entry} size={iconSize}/>}
                        </TileIcon>
                    )}
            </TileMedia>
            <TileCaption>
                <TileName $broken={row.entry.linkValid === false}>
                    <Highlighted name={row.label} ranges={row.ranges}/>
                </TileName>
                <TileMeta>
                    {row.entry.isDirectory
                        ? (itemCount === undefined ? typeLabel(row.entry) : `${typeLabel(row.entry)} · ${itemCount} items`)
                        : `${typeLabel(row.entry)} · ${formatBytes(row.entry.size)}`}
                </TileMeta>
                {showTarget && row.entry.linkTarget && (
                    <TileLink title={row.entry.linkTarget}>→ {row.entry.linkTarget}</TileLink>
                )}
            </TileCaption>
        </Tile>
    );
});

/** The sections of tiles, shared by the full grid and the preview panel under the list. */
function GridContent({
    groups, gridSize, counts, showTarget, searching, currentPath, innerRef, selected, showCheckboxes,
    openOnSingleClick, onSelect, onToggle, onContextMenu, onOpen, onOpenFile,
}: {
    groups: RowGroup[];
    gridSize: number;
    counts?: Record<string, number>;
    showTarget: boolean;
    searching: boolean;
    currentPath: string | null;
    innerRef?: RefObject<HTMLDivElement | null>;
    selected: Set<string>;
    showCheckboxes: boolean;
    openOnSingleClick: boolean;
    onSelect: (event: ReactMouseEvent, path: string) => void;
    onToggle: (path: string) => void;
    onContextMenu: (event: ReactMouseEvent, path: string) => void;
    onOpen: (path: string, newTab?: boolean) => void;
    onOpenFile?: (path: string) => void;
}) {
    return (
        <>
            {groups.map((group) => (
                <GridSection key={group.id}>
                    <GridHeader>
                        {group.label}
                        <GridCount>{group.rows.length}</GridCount>
                        <GridRule/>
                    </GridHeader>
                    <Tiles $size={gridSize}>
                        {group.rows.map((row) => (
                            <GridTile
                                current={searching && row.entry.fullPath === currentPath}
                                dim={searching && row.ranges === null}
                                iconSize={gridIconSize(gridSize)}
                                innerRef={innerRef}
                                itemCount={counts?.[row.entry.name]}
                                key={row.entry.fullPath}
                                onContextMenu={onContextMenu}
                                onOpen={onOpen}
                                onOpenFile={onOpenFile}
                                onSelect={onSelect}
                                onToggle={onToggle}
                                openOnSingleClick={openOnSingleClick}
                                row={row}
                                selected={selected.has(row.entry.fullPath)}
                                showCheckboxes={showCheckboxes}
                                showTarget={showTarget}
                            />
                        ))}
                    </Tiles>
                </GridSection>
            ))}
        </>
    );
}

const IconSlot = styled.span<{ $size?: number }>`
    display: grid;
    place-items: center;
    width: ${({$size = 18}) => $size}px;
    height: ${({$size = 18}) => $size}px;
    flex-shrink: 0;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
    }
`;

/** The Explorer-style selection box in front of a name. */
const SelectionBox = styled.button<{ $checked: boolean }>`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid ${({$checked}) => $checked ? "var(--border-color-focus)" : "var(--border-color-hover)"};
    border-radius: 4px;
    background: ${({$checked}) => $checked ? "rgba(59, 130, 246, 0.8)" : "transparent"};
    color: #fff;
    cursor: pointer;
    transition: background 100ms ease, border-color 100ms ease;

    &:hover {
        border-color: var(--border-color-focus);
        background: ${({$checked}) => $checked ? "rgba(59, 130, 246, 0.9)" : "rgba(148, 163, 184, 0.16)"};
    }
`;

/** The same box, floated over the top-left corner of a grid tile. */
const TileCheck = styled(SelectionBox)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked}) => $checked ? "rgba(59, 130, 246, 0.9)" : "rgba(15, 23, 42, 0.6)"};
    backdrop-filter: blur(4px);
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    flex: 1;
`;

const Head = styled.div`
    display: grid;
    gap: 16px;
    padding: 10px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`;

const HeaderButton = styled.button`
    display: flex;
    align-items: center;
    min-width: 0;
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

const Body = styled.div`
    flex: 1;
    min-height: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`;

/** The strip is resized by dragging the divider above it; the height is remembered by settings. */
const Splitter = styled.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(59, 130, 246, 0.35);
    }
`;

const Strip = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`;

const StripHead = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 6px 12px 0;
    margin-bottom: 5px;
    flex-shrink: 0;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`;

const StripCount = styled.span`
    font-family: var(--font-mono);
    font-size: 9px;
`;

const GridBody = styled.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`;

const GridSection = styled.section`
    & + & {
        margin-top: 22px;
    }
`;

const GridHeader = styled.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`;

const GridCount = styled.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`;

const GridRule = styled.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`;

const Tiles = styled.div<{ $size: number }>`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size}) => $size + 42}px, 1fr));
    grid-auto-rows: ${({$size}) => $size}px;
    gap: 10px;
    align-content: start;
`;

const Skeleton = styled.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`;

const Bone = styled.span`
    display: block;
    height: 9px;
    border-radius: 4px;
    background: var(--border-color);
    animation: yafm-bone 1.25s ease-in-out infinite;

    @keyframes yafm-bone {
        0%, 100% {
            opacity: 0.3;
        }
        50% {
            opacity: 0.7;
        }
    }
`;

const Row = styled.div<{ $hidden: boolean; $dim: boolean; $current: boolean; $selected: boolean }>`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
    border: 1px solid ${({$selected}) => $selected ? "rgba(59, 130, 246, 0.35)" : "transparent"};
    border-radius: var(--radius-sm);
    background: ${({$current, $selected}) => $current
        ? "rgba(59, 130, 246, 0.14)"
        : $selected ? "rgba(59, 130, 246, 0.09)" : "transparent"};
    box-shadow: ${({$current}) => $current ? "inset 0 0 0 1px rgba(59, 130, 246, 0.5)" : "none"};
    font-size: 13px;
    color: var(--text-secondary);
    opacity: ${({$hidden, $dim}) => $dim ? 0.3 : $hidden ? 0.55 : 1};
    cursor: default;
    user-select: none;
    transition: background 100ms ease, border-color 100ms ease, opacity 100ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color);
        color: var(--text-primary);
    }
`;

const Name = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`;

const NameText = styled.span<{ $broken?: boolean }>`
    overflow: hidden;
    color: ${({$broken}) => $broken ? "#f87171" : "inherit"};
    text-decoration: ${({$broken}) => $broken ? "line-through" : "none"};
    text-overflow: ellipsis;
    white-space: nowrap;
`;

/** A symlink's destination, shown after the name so the entry itself stays the label. */
const LinkTo = styled.span`
    overflow: hidden;
    min-width: 0;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--accent-primary);
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Cell = styled.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`;

/** The tags cell is a button so clicking it opens the picker; chips wrap horizontally. */
const TagsButton = styled.button`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 3px;
    width: 100%;
    max-height: 100%;
    overflow: hidden;
    padding: 2px 4px;
    border: 1px dashed transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    text-align: left;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
    }
`;

const TagChip = styled.span<{ $color: string; $ink: string }>`
    max-width: 100%;
    padding: 1px 7px;
    overflow: hidden;
    border-radius: 999px;
    background: ${({$color}) => $color};
    color: ${({$ink}) => $ink};
    font-family: var(--font-sans);
    font-size: 9px;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const TagEmpty = styled.span`
    color: var(--text-muted);
    font-size: 10px;
`;

const Broken = styled.span`
    color: #fca5a5;
`;

const Tile = styled.div<{ $dim: boolean; $current: boolean; $selected: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    border: 1px solid ${({$current, $selected}) => $current
        ? "rgba(59, 130, 246, 0.5)"
        : $selected ? "rgba(59, 130, 246, 0.4)" : "var(--border-color)"};
    border-radius: var(--radius-md);
    background: ${({$current, $selected}) => $current
        ? "rgba(59, 130, 246, 0.14)"
        : $selected ? "rgba(59, 130, 246, 0.1)" : "var(--bg-primary)"};
    opacity: ${({$dim}) => $dim ? 0.3 : 1};
    cursor: default;
    user-select: none;
    transition: background 100ms ease, border-color 100ms ease, opacity 100ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color-hover);
    }
`;

const TileMedia = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
    overflow: hidden;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

/** A directory's or file's glyph, aligned to the top-left of the tile like a file-manager icon. */
const TileIcon = styled.span`
    display: grid;
    place-items: start;
    width: 100%;
    height: 100%;
    padding: 6px;
    overflow: hidden;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
        object-fit: contain;
    }
`;

/** The name sits over the tile, on a scrim, the way the gallery draws its captions. */
const TileCaption = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 18px 8px 6px;
    background: linear-gradient(to top, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0));
    overflow: hidden;
`;

const TileName = styled.span<{ $broken?: boolean }>`
    width: 100%;
    overflow: hidden;
    color: ${({$broken}) => $broken ? "#f87171" : "var(--text-secondary)"};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken}) => $broken ? "line-through" : "none"};
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const TileMeta = styled.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`;

const TileLink = styled.span`
    width: 100%;
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--accent-primary);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Mark = styled.mark`
    border-radius: 2px;
    background: rgba(59, 130, 246, 0.5);
    color: var(--text-primary);
`;

const EmptyCell = styled.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`;

const Center = styled.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`;

const Muted = styled.p`
    font-size: 13px;
    color: var(--text-muted);
`;

const ErrorText = styled.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`;
