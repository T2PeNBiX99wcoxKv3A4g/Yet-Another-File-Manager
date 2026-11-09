import {
    type DragEvent as ReactDragEvent,
    memo,
    type MouseEvent as ReactMouseEvent,
    type PointerEvent as ReactPointerEvent,
    type ReactNode,
    type RefObject,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import styled from "styled-components";
import {comboOf, DefaultShortcuts, isTyping, type ShortcutMap, wantsNewTab} from "../shortcuts";
import type {DirectoryListing, FileEntry, Place, ResolvedView} from "../api/files";
import {useIcon, useIconFile, useThumbnail} from "../api/icons";
import {
    type CompressOptions,
    compressPaths,
    copyPaths,
    deletePaths,
    hasClipboardFiles,
    newFile,
    newFolder,
    openTerminal,
    pasteInto,
    renamePath,
    showProperties,
} from "../api/operations";
import {type FindView, NoFind, rangesOf} from "../find";
import {canPreview, PreviewKindLabels, previewKindOf} from "../preview";
import {quickPlace, useQuickAccess} from "../quick";
import {baseName, formatBytes, formatDate, plural} from "../utils/format";
import {readStoredNumber, writeStoredNumber} from "../storage";
import {type Translate, useTranslation} from "@photino-net-utils/bridge";
import {CheckIcon, CutIcon, FolderIcon, LinkIcon, LockIcon} from "./Icons";
import {type ArchiveExtractMode, FileMenu} from "./FileMenu";
import {CompressDialog} from "./CompressDialog";
import {ConfirmDialog} from "./ConfirmDialog";
import {type PreviewInfo, PreviewPane} from "./PreviewPane";
import {PlaceIcon} from "./PlaceIcon";
import {DefaultTagColor, inkFor, TagPicker} from "./TagPicker";
import {BuiltinIcon, iconForName} from "../icons/fileTypes";
import {isPathDrag, readDraggedPaths, writeDraggedPaths} from "./FileTray";
import {showMessage} from "../api/dialogs";
import {setSelectionMenu} from "../ui/selectionMenu";

/** The strip is a glance, not a gallery; thousands of thumbnails would stall the window. */
const PreviewLimit = 60;

/** Rows appended per scroll page; a huge cache folder would otherwise create thousands at once. */
const RowPage = 300;

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
    onOpenFile?: (path: string, newTab?: boolean) => void;
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
    /** Applies a successful rename to the owner's listing, so a stale row cannot be renamed again. */
    onRename?: (from: string, to: string) => void;
    /** Called after a copy or cut put files on the system clipboard. */
    onClipboardChanged?: () => void;
    /** Paths that were cut, so their rows can say they are about to move. */
    cutPaths?: ReadonlySet<string>;
    /** Moves or copies dropped paths into a folder. */
    onTransfer?: (paths: string[], target: string, move: boolean) => void;
    /** Adds the selection to the floating file tray without dragging it. */
    onAddToTray?: (paths: string[]) => void;
    /** Pins the selection to the overview's Favorites panel. */
    onAddFavorite?: (paths: string[]) => void;
    /** Removes the selection from Favorites; shown when every selected path is already pinned. */
    onRemoveFavorite?: (paths: string[]) => void;
    /** Normalized favorite paths, so the menu can pick Add or Remove. */
    favoritePaths?: string[];
    /** Extracts an archive selected in the list to the chosen place. */
    onExtractArchive?: (path: string, mode: ArchiveExtractMode) => void;
    /** Called after a paste, so the tray can drop entries the move consumed. */
    onPaste?: () => void;
    /** Ask before moving items to the recycle bin. Shift+Del always asks. */
    confirmDelete?: boolean;
    /** Play audio in video previews; off means muted. */
    previewVideoAudio?: boolean;
    /** Start a video preview automatically; off means the user presses play. */
    previewVideoAutoplay?: boolean;
    /** Draw the right-side details pane for this list. */
    showDetails?: boolean;
    /** Reports the entry (or current folder) the details pane should show. */
    onPreviewInfo?: (info: PreviewInfo | null) => void;
    /** Called when the user interacts with this pane, so a shared pane knows which side is active. */
    onActivate?: () => void;
    /** Gallery pages group by a label instead of the file browser's type sections. */
    groupOf?: (entry: FileEntry) => { id: string; label: string };
    /** Called as the grid scrolls; the gallery uses it to load the next page. */
    onGridScroll?: (element: HTMLDivElement) => void;
    /** Rendered after the tiles, such as the gallery's load-more sentinel. */
    gridFooter?: ReactNode;
    /** The gallery has no folder of its own, so a right click on blank space does nothing. */
    allowBackgroundMenu?: boolean;
    /** The picker only chooses entries; no context menu and no drop operations. */
    readOnly?: boolean;
    /** Reports the checked paths, so a host that draws its own footer can follow the selection. */
    onSelectionChange?: (paths: string[]) => void;
    /** Reports how many entries are selected, for a toolbar menu button. */
    onSelectionCountChange?: (count: number) => void;
    /** Opens this list's context menu for the current selection from a host button. */
    selectionMenuRequest?: { token: number; x: number; y: number } | null;
    /** Registry id for a header button that reopens this list's context menu. */
    selectionMenuId?: string;
    /** A picker that returns one path still uses the checkboxes, but only one at a time. */
    singleSelect?: boolean;
    /** A freshly created path that should enter rename as soon as the listing shows it. */
    pendingRename?: string | null;
    pendingRenameToken?: number;
}

interface RowModel {
    entry: FileEntry;
    place?: Place;
    label: string;
    ranges: [number, number][] | null;
    tags: string[];
    /** True when the entry was cut and will move the next time something is pasted. */
    cut?: boolean;
}

/** Used when nothing is cut, so the prop has a stable identity. */
const NoPaths: ReadonlySet<string> = new Set();

/** The height the strip starts at, and the one a double-click on the divider brings back. */
const DefaultStripHeight = 190;
const MinStripHeight = 120;

export function FileList({
                             listing,
                             loading,
                             error,
                             find = NoFind,
                             view,
                             showImages,
                             imageStripHeight = DefaultStripHeight,
                             onImageStripHeight,
                             onSort,
                             onSetTags,
                             onOpen,
                             onOpenFile,
                             showCheckboxes = true,
                             openOnSingleClick = false,
                             shortcuts = DefaultShortcuts,
                             enableShortcuts = true,
                             refreshToken = 0,
                             onRefresh,
                             onRename,
                             onClipboardChanged,
                             cutPaths = NoPaths,
                             onTransfer,
                             onAddToTray,
                             onAddFavorite,
                             onRemoveFavorite,
                             favoritePaths,
                             onExtractArchive,
                             onPaste,
                             confirmDelete = false,
                             previewVideoAudio = false,
                             previewVideoAutoplay = false,
                             showDetails = true,
                             onPreviewInfo,
                             onActivate,
                             groupOf,
                             onGridScroll,
                             gridFooter,
                             allowBackgroundMenu = true,
                             readOnly = false,
                             onSelectionChange,
                             onSelectionCountChange,
                             selectionMenuRequest,
                             selectionMenuId,
                             singleSelect = false,
                             pendingRename = null,
                             pendingRenameToken = 0,
                         }: FileListProps) {
    const t = useTranslation();
    const quick = useQuickAccess();
    const currentRow = useRef<HTMLDivElement | null>(null);
    const head = useRef<HTMLDivElement | null>(null);
    const body = useRef<HTMLDivElement | null>(null);
    const [rowLimit, setRowLimit] = useState(RowPage);
    const [listWindow, setListWindow] = useState({top: 0, height: 640});
    const stripDrag = useRef<{ y: number; height: number } | null>(null);
    const anchor = useRef<string | null>(null);
    const [tagTarget, setTagTarget] = useState<{ entry: FileEntry; x: number; y: number } | null>(null);
    const [stripHeight, setStripHeight] = useState(imageStripHeight);
    const [selected, setSelected] = useState<Set<string>>(() => new Set());
    // The context menu reads these through refs so its handler stays stable; otherwise every
    // selection change would hand new props to every memoized row.
    const selectedRef = useRef(selected);
    const rowsRef = useRef<RowModel[]>([]);
    selectedRef.current = selected;
    // A host that draws its own status bar follows the same selection the grid uses.
    useEffect(() => onSelectionChange?.([...selected]), [selected, onSelectionChange]);
    useEffect(() => onSelectionCountChange?.(selected.size), [selected, onSelectionCountChange]);

    // The toolbar's menu button asks this list to open exactly the menu a right click would.
    useEffect(() => {
        const request = selectionMenuRequest;
        if (!request || request.token === lastSelectionMenu.current)
            return;

        lastSelectionMenu.current = request.token;
        const paths = [...selectedRef.current];
        if (paths.length === 0)
            return;

        setMenu({x: request.x, y: request.y, paths, background: false});
        void hasClipboardFiles().then(setCanPaste, () => setCanPaste(false));
    }, [selectionMenuRequest]);
    const [menu, setMenu] = useState<{ x: number; y: number; paths: string[]; background: boolean } | null>(null);
    const lastSelectionMenu = useRef(0);
    const [compressDialog, setCompressDialog] = useState<{ paths: string[]; name: string } | null>(null);
    const [pendingConfirm, setPendingConfirm] = useState<{
        paths: string[];
        permanent: boolean;
        resolve: (ok: boolean) => void;
    } | null>(null);
    const [renaming, setRenaming] = useState<{ path: string; value: string } | null>(null);
    const renamingRef = useRef(renaming);
    renamingRef.current = renaming;
    const handledRenameRequest = useRef(0);
    const activateRef = useRef(onActivate);
    activateRef.current = onActivate;
    const [previewWidth, setPreviewWidth] = useState(() => {
        const saved = readStoredNumber("yafm.preview.width", 320);
        return saved >= 220 ? saved : 320;
    });

    const resizePreview = useCallback((width: number) => {
        setPreviewWidth(width);
        writeStoredNumber("yafm.preview.width", width);
    }, []);
    const [canPaste, setCanPaste] = useState(false);

    /** Opens the same menu a right click would, for the current selection. */
    const openSelectionMenuAt = useCallback((x: number, y: number) => {
        const paths = [...selectedRef.current];
        if (paths.length === 0)
            return;

        setMenu({x, y, paths, background: false});
        void hasClipboardFiles().then(setCanPaste, () => setCanPaste(false));
    }, []);

    useEffect(() => {
        if (!selectionMenuId)
            return;

        setSelectionMenu(selectionMenuId, selected.size > 0 ? openSelectionMenuAt : null);
        return () => setSelectionMenu(selectionMenuId, null);
    }, [selectionMenuId, selected, openSelectionMenuAt]);

    // A new folder starts with nothing selected; an operation that renamed a path drops it too.
    useEffect(() => {
        setSelected(new Set());
        setRenaming(null);
        setMenu(null);
        anchor.current = null;
    }, [listing?.path]);

    useEffect(() => {
        setStripHeight(imageStripHeight);
    }, [imageStripHeight]);

    // An outside operation (undo, hidden files) invalidates the selected paths.
    useEffect(() => {
        setSelected(new Set());
        setRenaming(null);
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
    const searching = find.query.length > 0;
    // Kept stable so a memoized row only re-renders when the columns themselves change.
    const visible = useMemo(
        () => ViewColumns.filter((column) => view.columns?.includes(column.id)),
        [view.columns],
    );
    const showTarget = view.columns?.includes("linkTarget") ?? false;
    const template = useMemo(
        () => `minmax(160px, 1fr) ${visible.map((column) => `${column.width}px`).join(" ")}`.trim(),
        [visible],
    );

    const rows = useMemo(() => {
        if (!listing) return [];

        const matched = listing.entries
            .map((entry): RowModel => {
                // Quick access places are folders; looking them up for every file would normalize
                // two paths per file on each sort or search.
                const place = entry.isDirectory ? quickPlace(quick, entry.fullPath) : undefined;
                const label = place?.name || entry.name;

                return {
                    entry,
                    place,
                    label,
                    ranges: searching ? rangesOf(label, find) : null,
                    tags: listing.tags[entry.name] ?? [],
                    cut: cutPaths.has(entry.fullPath),
                };
            })
            .filter((row) => !searching || find.mode === "dim" || row.ranges !== null);

        return sortRows(matched, view, listing, t);
    }, [
        listing?.entries, listing?.tags,
        view.sort === "size" || view.sort === "items" ? listing?.folderSizes : null,
        view.sort === "size" || view.sort === "items" ? listing?.counts : null,
        searching, find, quick, view.sort, view.sortDescending, t, cutPaths,
    ]);

    rowsRef.current = rows;

    // A list row keeps one height, so the scrollbar can represent all rows while only the rows
    // around the viewport exist in the DOM.
    const rowHeight = Math.max(40, view.iconSize + 20);
    const windowStart = Math.max(0, Math.floor(listWindow.top / rowHeight) - 4);
    const windowEnd = Math.min(rows.length, windowStart + Math.ceil(listWindow.height / rowHeight) + 10);
    const windowRows = useMemo(() => rows.slice(windowStart, windowEnd), [rows, windowStart, windowEnd]);

    useEffect(() => {
        const node = body.current;
        if (!node || view.mode !== "list") return;

        const measure = () => setListWindow((current) =>
            current.height === node.clientHeight ? current : {...current, height: node.clientHeight});

        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(node);
        return () => observer.disconnect();
    }, [view.mode]);

    useEffect(() => {
        setListWindow((current) => ({...current, top: 0}));
        if (body.current) body.current.scrollTop = 0;
    }, [listing?.path]);

    // A search hit can be far outside the rendered window; scroll the list to its row.
    useEffect(() => {
        if (!find.currentPath) return;

        if (view.mode === "list") {
            const index = rows.findIndex((row) => row.entry.fullPath === find.currentPath);
            const node = body.current;
            if (index < 0 || !node) return;

            const top = index * rowHeight;
            if (top < node.scrollTop || top + rowHeight > node.scrollTop + node.clientHeight)
                node.scrollTop = Math.max(0, top - node.clientHeight / 2);
            return;
        }

        currentRow.current?.scrollIntoView({block: "nearest"});
    }, [find.currentPath, view.mode, rows, rowHeight]);

    const visibleRows = useMemo(() => rows.slice(0, rowLimit), [rows, rowLimit]);

    // A new folder starts at the first page; scrolling appends more.
    useEffect(() => {
        setRowLimit(RowPage);
    }, [listing?.path]);

    // A search hit can land past the rendered page; make sure its row exists.
    useEffect(() => {
        if (!find.currentPath) return;

        const index = rows.findIndex((row) => row.entry.fullPath === find.currentPath);
        if (index >= 0)
            setRowLimit((limit) => Math.max(limit, index + RowPage));
    }, [find.currentPath, rows]);

    const growRows = useCallback((element: HTMLElement) => {
        if (element.scrollTop + element.clientHeight >= element.scrollHeight - 600)
            setRowLimit((limit) => Math.min(rows.length, limit + RowPage));
    }, [rows.length]);

    // Grouping only feeds the grid; a list view would pay for the rule matching and never use it.
    const gridMode = view.mode === "grid";
    const groups = useMemo(() => {
        if (!gridMode)
            return [];

        if (!groupOf)
            return groupRows(visibleRows, GridRules);

        const order: string[] = [];
        const sections = new Map<string, RowGroup>();

        for (const row of visibleRows) {
            const label = groupOf(row.entry);
            let section = sections.get(label.id);

            if (!section) {
                section = {id: label.id, label: label.label, rows: []};
                sections.set(label.id, section);
                order.push(label.id);
            }

            section.rows.push(row);
        }

        return order.map((id) => sections.get(id)!);
    }, [visibleRows, gridMode, groupOf]);

    // The panel repeats what the rows already show; only types the shell can preview belong in it.
    const previews = useMemo(
        () => showImages
            ? rows.filter((row) => !row.entry.isDirectory && canPreview(row.entry.name))
            : [],
        [rows, showImages]
    );
    const previewTotal = previews.length;
    const shownPreviews = useMemo(() => previews.slice(0, PreviewLimit), [previews]);
    const previewGroups = useMemo(
        () => showImages ? groupRows(shownPreviews, PreviewKindRules) : [],
        [shownPreviews, showImages]
    );

    const allPaths = useMemo(() => rows.map((row) => row.entry.fullPath), [rows]);
    const allSelected = rows.length > 0 && selected.size >= rows.length;
    const someSelected = selected.size > 0 && !allSelected;
    const toggleAll = () => {
        if (singleSelect)
            return;

        if (allSelected) clearSelection();
        else setSelected(new Set(allPaths));
    };
    const currentDirectory = listing?.path ?? "";

    /** Applies Explorer's plain, Ctrl and Shift selection rules to one click. */
    const selectRow = useCallback((event: ReactMouseEvent, path: string) => {
        if (singleSelect) {
            anchor.current = path;
            setSelected(new Set([path]));
            return;
        }

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
    }, [allPaths, singleSelect]);

    /** The checkbox toggles one path without disturbing the rest of the selection. */
    const toggleRow = useCallback((path: string) => {
        if (singleSelect) {
            anchor.current = path;
            setSelected(new Set([path]));
            return;
        }

        anchor.current = path;
        setSelected((current) => {
            const next = new Set(current);

            if (!next.delete(path)) next.add(path);

            return next;
        });
    }, [singleSelect]);

    const clearSelection = useCallback(() => {
        anchor.current = null;
        setSelected(new Set());
    }, []);

    // The picker asks for this after creating a folder or file; the listing may not carry the new
    // path yet, so the request waits until the refreshed listing really shows it.
    useEffect(() => {
        if (pendingRenameToken === 0 || !pendingRename || handledRenameRequest.current === pendingRenameToken)
            return;

        if (!listing?.entries.some((entry) => entry.fullPath === pendingRename))
            return;

        handledRenameRequest.current = pendingRenameToken;
        anchor.current = pendingRename;
        setSelected(new Set([pendingRename]));
        setRenaming({path: pendingRename, value: baseName(pendingRename)});

        const index = rows.findIndex((row) => row.entry.fullPath === pendingRename);
        const node = body.current;
        if (index < 0 || !node)
            return;

        if (view.mode === "list") {
            const top = index * rowHeight;
            node.scrollTop = Math.max(0, top - node.clientHeight / 2);
            return;
        }

        window.requestAnimationFrame(() => {
            document
                .querySelector<HTMLElement>(`[data-path="${CSS.escape(pendingRename)}"]`)
                ?.scrollIntoView({block: "nearest"});
        });
    }, [body, listing, pendingRename, pendingRenameToken, rowHeight, rows, view.mode]);

    // A new folder/file sets the rename state before the refreshed listing arrives; once its row is
    // in the list, bring it into view so the inline editor is visible.
    useEffect(() => {
        if (!renaming)
            return;

        const index = rows.findIndex((row) => row.entry.fullPath === renaming.path);
        const node = body.current;
        if (index < 0 || !node)
            return;

        if (view.mode === "list") {
            const top = index * rowHeight;
            node.scrollTop = Math.max(0, top - node.clientHeight / 2);
            return;
        }

        window.requestAnimationFrame(() => {
            document
                .querySelector<HTMLElement>(`[data-path="${CSS.escape(renaming.path)}"]`)
                ?.scrollIntoView({block: "nearest"});
        });
    }, [body, renaming, rowHeight, rows, view.mode]);

    const closeMenu = useCallback(() => setMenu(null), []);

    const openRow = useCallback((entry: FileEntry, event: ReactMouseEvent) => {
        if (entry.isDirectory)
            onOpen(entry.fullPath, wantsNewTab(event));
        else
            onOpenFile?.(entry.fullPath, wantsNewTab(event));
    }, [onOpen, onOpenFile]);

    const editTags = useCallback((entry: FileEntry, x: number, y: number) => {
        setTagTarget({entry, x, y});
    }, []);

    // Drag and drop is delegated to the listing container: every row and tile carries its path, so
    // the same three handlers work for the list, the grid and the empty background.
    const dropTarget = useRef<string | null>(null);

    const startListDrag = useCallback((event: ReactDragEvent<HTMLDivElement>) => {
        const element = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-path]");
        if (!element?.dataset.path) return;

        const path = element.dataset.path;
        writeDraggedPaths(event, selected.has(path) ? [...selected] : [path]);
    }, [selected]);

    const overListDrag = useCallback((event: ReactDragEvent<HTMLDivElement>) => {
        if (!isPathDrag(event.dataTransfer))
            return;

        event.preventDefault();

        const element = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-path]");
        dropTarget.current = element?.dataset.directory === "true"
            ? element.dataset.path ?? currentDirectory
            : currentDirectory;

        event.dataTransfer.dropEffect = event.ctrlKey ? "copy" : "move";
    }, [currentDirectory]);

    const dropOnList = useCallback((event: ReactDragEvent<HTMLDivElement>) => {
        if (readOnly) return;

        const {paths, move} = readDraggedPaths(event);
        const target = dropTarget.current ?? currentDirectory;
        dropTarget.current = null;

        if (paths.length === 0 || !onTransfer) return;

        event.preventDefault();
        onTransfer(paths, target, event.ctrlKey ? false : move);
    }, [currentDirectory, onTransfer, readOnly]);

    const openMenu = useCallback((event: ReactMouseEvent, path?: string) => {
        event.preventDefault();
        event.stopPropagation();

        if (readOnly)
            return;

        if (!path && !allowBackgroundMenu)
            return;

        const selectedNow = selectedRef.current;

        if (path && !selectedNow.has(path))
            setSelected(new Set([path]));

        if (path)
            anchor.current = path;

        const paths = path ? (selectedNow.has(path) ? [...selectedNow] : [path]) : [];

        setMenu({x: event.clientX, y: event.clientY, paths, background: !path});
        void hasClipboardFiles().then(setCanPaste, () => setCanPaste(false));
    }, [allowBackgroundMenu, currentDirectory]);

    const refresh = useCallback(() => onRefresh?.(), [onRefresh]);

    const archiveCreated = (path: string, rename: boolean) => {
        anchor.current = path;
        setSelected(new Set([path]));
        if (rename) setRenaming({path, value: baseName(path)});
        refresh();
    };

    const compressDialogElement = compressDialog && (
        <CompressDialog
            initialDirectory={currentDirectory}
            initialName={compressDialog.name}
            onCancel={() => setCompressDialog(null)}
            onCompress={async (options: CompressOptions) => {
                const result = await compressPaths(compressDialog.paths, options);
                if (!result.ok || !result.path) {
                    void showMessage(result.error ?? t("Could not create the archive."));
                    return false;
                }

                archiveCreated(result.path, false);
                return true;
            }}
        />
    );

    const copy = async (paths: string[], cut = false) => {
        if (await copyPaths(paths, cut)) {
            setCanPaste(true);
            onClipboardChanged?.();
        }
    };

    const paste = async (directory: string) => {
        if (!directory)
            return;

        if (!await pasteInto(directory))
            void showMessage(t("Nothing on the clipboard could be pasted here."));
        else {
            refresh();
            onPaste?.();
        }
    };

    const createEntry = async (extension: string | null, caseSensitive = false) => {
        if (!currentDirectory)
            return;

        const result = extension === null
            ? await newFolder(currentDirectory, caseSensitive)
            : await newFile(currentDirectory, extension);

        if (!result.ok || result.path === null) {
            void showMessage(result.error ?? t("Could not create the item."));
            return;
        }

        anchor.current = result.path;
        setSelected(new Set([result.path]));
        setRenaming({path: result.path, value: baseName(result.path)});
        refresh();
    };

    const rename = (entry: FileEntry) => {
        setSelected(new Set([entry.fullPath]));
        anchor.current = entry.fullPath;
        setRenaming({path: entry.fullPath, value: entry.name});
    };

    const changeRename = useCallback((value: string) =>
        setRenaming((current) => current ? {...current, value} : current), []);

    const cancelRename = useCallback(() => setRenaming(null), []);

    const commitRename = useCallback(async () => {
        const target = renamingRef.current;
        setRenaming(null);

        if (!target)
            return;

        const value = target.value.trim();
        if (value.length === 0)
            return;

        const entry = rowsRef.current.find((row) => row.entry.fullPath === target.path)?.entry;
        if (!entry || value === entry.name)
            return;

        const result = await renamePath(target.path, value);

        if (result.ok) {
            clearSelection();
            // The row keeps the old path until the folder is read again, which made an immediate
            // second rename fail; the owner renames it in its listing right away.
            if (result.path) onRename?.(target.path, result.path);
            refresh();
            // Windows can still be settling the directory entry; a second read a moment later
            // guarantees the name on disk is the one on screen.
            window.setTimeout(() => refresh(), 250);
        } else {
            void showMessage(result.error ?? t("Could not rename the entry."));
        }
    }, [clearSelection, onRename, refresh, t]);

    const remove = async (paths: string[], permanent = false) => {
        if ((permanent || confirmDelete) && !await askDelete(paths, permanent))
            return;

        let result = await deletePaths(paths, permanent);

        // The volume's recycle bin is turned off, so the selection would be deleted for good. Explorer
        // asks in that case too, whatever the "ask before deleting" setting says.
        if (!result.ok && result.needsPermanent) {
            if (!await askDelete(paths, true))
                return;

            result = await deletePaths(paths, true);
        }

        if (!result.ok) {
            if (result.cancelled)
                return;

            void showMessage(result.error ?? (permanent
                ? t("Could not delete the selection.")
                : t("Could not move the selection to the recycle bin.")));
            return;
        }

        clearSelection();
        refresh();
    };

    const askDelete = useCallback((paths: string[], permanent: boolean) =>
        new Promise<boolean>((resolve) => setPendingConfirm({paths, permanent, resolve})), []);

    const settleDelete = useCallback((ok: boolean) => {
        setPendingConfirm((pending) => {
            pending?.resolve(ok);
            return null;
        });
    }, []);

    // File-manager shortcuts. Ctrl+D copies as KDE's file manager does; Ctrl+C also copies.
    useEffect(() => {
        if (!enableShortcuts || menu) return;

        const onKey = (event: KeyboardEvent) => {
            if (isTyping(event.target)) return;

            activateRef.current?.();

            const combo = comboOf(event);
            const paths = [...selected];
            const selectedEntry = paths.length === 1
                ? rows.find((row) => row.entry.fullPath === paths[0])?.entry
                : undefined;

            const run = (action: () => void) => {
                event.preventDefault();
                action();
            };

            // Explorer's arrow-key navigation: move the selection through the visible order and
            // keep the new row in view. Home/End jump to the ends.
            if (combo === "arrowup" || combo === "arrowdown" || combo === "home" || combo === "end") {
                if (allPaths.length === 0)
                    return;

                event.preventDefault();

                const currentPath = anchor.current && allPaths.includes(anchor.current)
                    ? anchor.current
                    : selected.size === 1 ? [...selected][0] : null;
                const currentIndex = currentPath ? allPaths.indexOf(currentPath) : -1;
                const nextIndex = combo === "home"
                    ? 0
                    : combo === "end"
                        ? allPaths.length - 1
                        : Math.max(0, Math.min(allPaths.length - 1,
                            currentIndex + (combo === "arrowdown" ? 1 : -1)));
                const next = allPaths[nextIndex];

                setSelected(new Set([next]));
                anchor.current = next;

                window.requestAnimationFrame(() => {
                    document
                        .querySelector<HTMLElement>(`[data-path="${CSS.escape(next)}"]`)
                        ?.scrollIntoView({block: "nearest"});
                });

                return;
            }

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
                run(() => void createEntry(null));
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
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [allPaths, copy, createEntry, currentDirectory, enableShortcuts, menu, onOpen, onOpenFile, paste,
        remove, rename, rows, selected, shortcuts]);

    const confirmDialog = pendingConfirm && (
        <ConfirmDialog
            confirmLabel={pendingConfirm.permanent ? t("Delete") : t("Move")}
            danger={pendingConfirm.permanent}
            message={pendingConfirm.permanent
                ? t("Permanently delete {target}? This cannot be undone.",
                    {target: pendingConfirm.paths.length === 1 ? t("this item") : t("{count} items", {count: pendingConfirm.paths.length})})
                : t("Move {target} to the recycle bin?",
                    {target: pendingConfirm.paths.length === 1 ? t("this item") : t("{count} items", {count: pendingConfirm.paths.length})})}
            onCancel={() => settleDelete(false)}
            onConfirm={() => settleDelete(true)}
            open
            title={pendingConfirm.permanent ? t("Delete permanently") : t("Move to the recycle bin")}
        />
    );

    const previewEntry = useMemo(() => {
        if (!listing || selected.size === 0)
            return null;

        const first = allPaths.find((path) => selected.has(path));
        return first ? rows.find((row) => row.entry.fullPath === first)?.entry ?? null : null;
    }, [allPaths, listing, rows, selected]);

    const directoryInfo = useMemo<PreviewInfo | null>(() => {
        if (!listing)
            return null;

        const total = listing.entries.reduce((sum, entry) => sum + (entry.isDirectory
            ? listing.folderSizes[entry.name] ?? 0
            : Math.max(entry.size, 0)), 0);
        const count = listing.entries.length;

        return {
            name: baseName(listing.path) || listing.path,
            path: listing.path,
            isDirectory: true,
            size: total,
            modified: 0,
            fields: [
                {label: t("Type"), value: t("Folder")},
                {label: t("Location"), value: listing.parent ?? "—"},
                {label: t("Path"), value: listing.path},
                {label: t("Size"), value: formatBytes(total)},
                {label: t("Items"), value: plural(t, count, "1 item", "{count} items")},
                {label: t("Modified"), value: "—"},
                {label: t("Created"), value: "—"},
                {label: t("Attributes"), value: "—"},
            ],
        };
    }, [listing, t]);

    const selectionInfo = useMemo<PreviewInfo | null>(() => {
        if (!previewEntry || !listing)
            return null;

        const folderSize = previewEntry.isDirectory ? listing.folderSizes[previewEntry.name] : undefined;
        const tags = listing.tags[previewEntry.name] ?? [];
        const dot = previewEntry.name.lastIndexOf(".");
        const extension = dot > 0 && dot < previewEntry.name.length - 1
            ? previewEntry.name.slice(dot + 1).toUpperCase()
            : "—";

        return {
            name: previewEntry.name,
            path: previewEntry.fullPath,
            isDirectory: previewEntry.isDirectory,
            size: previewEntry.size,
            modified: previewEntry.modified,
            created: previewEntry.created,
            fields: [
                {label: t("Type"), value: typeLabel(previewEntry, t)},
                ...(previewEntry.isEncrypted
                    ? [{label: t("Encryption"), value: t("Password required")}]
                    : []),
                {label: t("Extension"), value: previewEntry.isDirectory ? "—" : extension},
                {label: t("Location"), value: listing.path},
                {label: t("Full path"), value: previewEntry.fullPath},
                {
                    label: t("Size"),
                    value: previewEntry.isDirectory
                        ? folderSize === undefined ? "—" : formatBytes(folderSize)
                        : formatBytes(previewEntry.size),
                },
                ...(previewEntry.isDirectory
                    ? [{
                        label: t("Items"),
                        value: `${listing.counts[previewEntry.name] ?? "—"}`,
                    }]
                    : []),
                {label: t("Modified"), value: formatDate(previewEntry.modified)},
                {label: t("Created"), value: formatDate(previewEntry.created)},
                {
                    label: t("Link status"),
                    value: previewEntry.linkTarget != null
                        ? previewEntry.linkValid ? "OK" : t("Broken")
                        : previewEntry.linkCount > 1 ? t("Hard link") : "—",
                },
                ...(previewEntry.linkTarget
                    ? [{label: t("Target"), value: previewEntry.linkTarget}]
                    : []),
                ...(previewEntry.linkCount > 1
                    ? [{label: t("Links"), value: String(previewEntry.linkCount)}]
                    : []),
                {
                    label: t("Attributes"),
                    value: [
                        previewEntry.isHidden ? t("Hidden") : "",
                        previewEntry.isSystem ? t("System") : "",
                    ].filter(Boolean).join(", ") || "—",
                },
                ...(tags.length > 0 ? [{label: t("Tags"), value: tags.join(", ")}] : []),
            ],
        };
    }, [listing, previewEntry, t]);

    const menuTargetPath = menu?.paths.length === 1 ? menu.paths[0] : null;
    const menuEntry = menuTargetPath ? rows.find((row) => row.entry.fullPath === menuTargetPath)?.entry : undefined;
    const menuTarget = menuEntry ? {path: menuEntry.fullPath, isDirectory: menuEntry.isDirectory} : null;

    const previewInfo = selectionInfo ?? directoryInfo;
    const previewInfoRef = useRef(onPreviewInfo);
    previewInfoRef.current = onPreviewInfo;

    useEffect(() => {
        previewInfoRef.current?.(previewInfo);
    }, [onPreviewInfo, previewInfo]);

    const previewPane = showDetails && previewInfo && (
        <PreviewPane
            info={previewInfo}
            onWidth={resizePreview}
            selectionNote={selected.size > 1 ? plural(t, selected.size, "1 item selected", "{count} items selected") : undefined}
            videoAudio={previewVideoAudio}
            videoAutoplay={previewVideoAutoplay}
            width={previewWidth}
        />
    );

    if (error && !listing)
        return <Center><ErrorText>{error}</ErrorText></Center>;

    if (!listing && !loading)
        return <Center><Muted>{t("Nothing selected.")}</Muted></Center>;

    if (view.mode === "grid")
        return (
            <SplitPane onPointerDown={onActivate}>
                <Wrapper>
                    <GridBody
                        onClick={(event) => {
                            if (!(event.target instanceof Element) || !event.target.closest("[data-path]"))
                                clearSelection();
                        }}
                        onContextMenu={(event) => openMenu(event)}
                        onDragOver={overListDrag}
                        onDragStart={startListDrag}
                        onDrop={dropOnList}
                        onScroll={(event) => {
                            onGridScroll?.(event.currentTarget);
                            growRows(event.currentTarget);
                        }}
                    >
                        {showCheckboxes && rows.length > 0 && (
                            <GridSelectAll>
                                <SelectAll
                                    $checked={!singleSelect && allSelected}
                                    $partial={!singleSelect && someSelected}
                                    aria-label={allSelected ? t("Select none") : t("Select all")}
                                    disabled={singleSelect}
                                    onClick={toggleAll}
                                    title={allSelected ? t("Select none") : t("Select all")}
                                    type="button"
                                >
                                    {allSelected ? <CheckIcon size={10}/> : someSelected ? <Dash/> : null}
                                </SelectAll>
                                <span>{allSelected ? t("Select none") : t("Select all")}</span>
                            </GridSelectAll>
                        )}

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
                                onRenameCancel={cancelRename}
                                onRenameChange={changeRename}
                                onRenameCommit={commitRename}
                                onSelect={selectRow}
                                onToggle={toggleRow}
                                openOnSingleClick={openOnSingleClick}
                                renaming={renaming}
                                searching={searching}
                                selected={selected}
                                showCheckboxes={showCheckboxes}
                                showTarget={showTarget}
                            />}

                        {!loading && listing && rows.length === 0 && (
                            <EmptyCell>
                                <Muted>
                                    {error ?? (searching && find.mode === "hide"
                                        ? t("No entries match the search.")
                                        : t("This folder is empty."))}
                                </Muted>
                            </EmptyCell>
                        )}

                        {gridFooter}
                    </GridBody>

                    {menu && (
                        <FileMenu
                            canPaste={canPaste}
                            directory={currentDirectory}
                            allowCompression
                            menu={menu}
                            onAddToTray={onAddToTray}
                            onAddFavorite={onAddFavorite}
                            onRemoveFavorite={onRemoveFavorite}
                            favoritePaths={favoritePaths}
                            onExtractArchive={onExtractArchive}
                            onArchiveCreated={archiveCreated}
                            onClose={closeMenu}
                            onCompressTo={(paths, name) => setCompressDialog({paths, name})}
                            onCopy={copy}
                            onCreateFile={(extension) => void createEntry(extension)}
                            onCreateFolder={(caseSensitive) => void createEntry(null, caseSensitive)}
                            onDelete={remove}
                            onOpen={onOpen}
                            onOpenFile={onOpenFile}
                            onPaste={paste}
                            onRefresh={refresh}
                            onRename={(path) => {
                                const target = rows.find((row) => row.entry.fullPath === path)?.entry;
                                if (target) rename(target);
                            }}
                            shortcuts={shortcuts}
                            target={menuTarget}
                        />
                    )}
                    {compressDialogElement}
                    {confirmDialog}
                </Wrapper>
                {previewPane}
            </SplitPane>
        );

    return (
        <SplitPane onPointerDown={onActivate}>
            <Wrapper>
                <Head
                    onScroll={(event) => {
                        if (body.current && body.current.scrollLeft !== event.currentTarget.scrollLeft)
                            body.current.scrollLeft = event.currentTarget.scrollLeft;
                    }}
                    ref={head}
                    style={{gridTemplateColumns: template}}
                >
                    <HeaderName>
                        {showCheckboxes && (
                            <SelectAll
                                $checked={!singleSelect && allSelected}
                                $partial={!singleSelect && someSelected}
                                aria-label={allSelected ? t("Select none") : t("Select all")}
                                disabled={singleSelect}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    toggleAll();
                                }}
                                title={allSelected ? t("Select none") : t("Select all")}
                                type="button"
                            >
                                {allSelected ? <CheckIcon size={10}/> : someSelected ? <Dash/> : null}
                            </SelectAll>
                        )}
                        <HeaderButton onClick={() => onSort("name")} type="button">
                            {t("Name")}{markOf(view, "name")}
                        </HeaderButton>
                    </HeaderName>
                    {visible.map((column) => (
                        <HeaderButton key={column.id} onClick={() => onSort(column.id)} type="button">
                            {t(column.label)}{markOf(view, column.id)}
                        </HeaderButton>
                    ))}
                </Head>

                <Body
                    onClick={(event) => {
                        if (event.target === event.currentTarget) clearSelection();
                    }}
                    onContextMenu={(event) => openMenu(event)}
                    onDragOver={overListDrag}
                    onDragStart={startListDrag}
                    onDrop={dropOnList}
                    onScroll={(event) => {
                        if (head.current && head.current.scrollLeft !== event.currentTarget.scrollLeft)
                            head.current.scrollLeft = event.currentTarget.scrollLeft;

                        const node = event.currentTarget;
                        setListWindow((current) => current.top === node.scrollTop && current.height === node.clientHeight
                            ? current
                            : {top: node.scrollTop, height: node.clientHeight});
                    }}
                    ref={body}
                >
                    {loading && !listing
                        ? <PlaceholderRows template={template} columns={visible.length}/>
                        : (
                            <>
                                {windowStart > 0 && <div style={{height: windowStart * rowHeight}}/>}
                                {windowRows.map((row) => {
                                    const path = row.entry.fullPath;

                                    return (
                                        <ListRow
                                            current={searching && path === find.currentPath}
                                            dim={searching && row.ranges === null}
                                            height={rowHeight}
                                            iconSize={view.iconSize}
                                            innerRef={currentRow}
                                            key={path}
                                            listing={listing!}
                                            onContextMenu={openMenu}
                                            onOpen={openRow}
                                            onRenameCancel={cancelRename}
                                            onRenameChange={changeRename}
                                            onRenameCommit={commitRename}
                                            onSelect={selectRow}
                                            onTagEdit={editTags}
                                            onToggle={toggleRow}
                                            openOnSingleClick={openOnSingleClick}
                                            renaming={renaming?.path === path ? {value: renaming.value} : null}
                                            row={row}
                                            selected={selected.has(path)}
                                            showCheckboxes={showCheckboxes}
                                            showTarget={showTarget}
                                            template={template}
                                            visible={visible}
                                        />
                                    );
                                })}
                                {windowEnd < rows.length &&
                                    <div style={{height: (rows.length - windowEnd) * rowHeight}}/>}
                            </>
                        )}

                    {!loading && listing && rows.length === 0 && (
                        <Center>
                            <Muted>
                                {error ?? (searching && find.mode === "hide"
                                    ? t("No entries match the search.")
                                    : t("This folder is empty."))}
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
                            title={t("Drag to resize; double-click to reset")}
                        />
                        <Strip style={{height: stripHeight}}>
                            <StripHead>
                                {t("Preview")}
                                <StripCount>
                                    {previewTotal > PreviewLimit
                                        ? `${shownPreviews.length} / ${previewTotal}`
                                        : previewTotal}
                                </StripCount>
                            </StripHead>
                            <GridBody
                                onClick={(event) => {
                                    if (!(event.target instanceof Element) || !event.target.closest("[data-path]"))
                                        clearSelection();
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

                {menu && (
                    <FileMenu
                        canPaste={canPaste}
                        directory={currentDirectory}
                        allowCompression
                        menu={menu}
                        onAddToTray={onAddToTray}
                        onAddFavorite={onAddFavorite}
                        onRemoveFavorite={onRemoveFavorite}
                        favoritePaths={favoritePaths}
                        onExtractArchive={onExtractArchive}
                        onArchiveCreated={archiveCreated}
                        onClose={closeMenu}
                        onCompressTo={(paths, name) => setCompressDialog({paths, name})}
                        onCopy={copy}
                        onCreateFile={(extension) => void createEntry(extension)}
                        onCreateFolder={(caseSensitive) => void createEntry(null, caseSensitive)}
                        onDelete={remove}
                        onOpen={onOpen}
                        onOpenFile={onOpenFile}
                        onPaste={paste}
                        onRefresh={refresh}
                        onRename={(path) => {
                            const target = rows.find((row) => row.entry.fullPath === path)?.entry;
                            if (target) rename(target);
                        }}
                        shortcuts={shortcuts}
                        target={menuTarget}
                    />
                )}
                {compressDialogElement}
                {confirmDialog}
            </Wrapper>
            {previewPane}
        </SplitPane>
    );
}

/** "↑"/"↓" beside the column that is sorted. */
function markOf(view: ResolvedView, column: string): string {
    if (view.sort !== column) return "";

    return view.sortDescending ? " ↓" : " ↑";
}

/** One collator for every listing: `localeCompare` with options allocates per comparison. */
const NameCollator = new Intl.Collator(undefined, {numeric: true, sensitivity: "base"});

/** Folders stay first, the way Explorer keeps them, and the chosen column orders the rest. */
function sortRows(rows: RowModel[], view: ResolvedView, listing: DirectoryListing, t: Translate): RowModel[] {
    const value = (entry: FileEntry): string | number => {
        switch (view.sort) {
            case "type":
                return typeLabel(entry, t);
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

    // Sort keys are computed once per row instead of on every comparison; a column like Type or
    // Tags would otherwise be rebuilt tens of thousands of times for one listing.
    const keys = new Map(rows.map((row) => [row, value(row.entry)]));

    return [...rows].sort((left, right) => {
        if (left.entry.isDirectory !== right.entry.isDirectory)
            return left.entry.isDirectory ? -1 : 1;

        const a = keys.get(left)!;
        const b = keys.get(right)!;
        const order = typeof a === "number" && typeof b === "number"
            ? a - b
            : NameCollator.compare(String(a), String(b));

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
    file: "File",
    folder: "Folder",
    text: "Text file",
    code: "source file",
    image: "image",
    video: "Video",
    audio: "Audio",
    archive: "archive",
    pdf: "PDF",
    executable: "Application",
    font: "font",
    database: "database",
    config: "configuration",
    spreadsheet: "spreadsheet",
    presentation: "presentation",
    document: "document",
};

/** What the Type column says: a shortcut and a symbolic link must not look the same. */
function typeLabel(entry: FileEntry, t: Translate): string {
    const lower = entry.name.toLowerCase();

    if (lower.endsWith(".lnk"))
        return t("Shortcut");
    if (lower.endsWith(".url") || lower.endsWith(".website"))
        return t("Internet shortcut");
    if (entry.linkTarget != null)
        return entry.isDirectory ? t("Folder link") : t("Symbolic link");
    if (entry.isDirectory)
        return t("Folder");

    const dot = entry.name.lastIndexOf(".");
    const extension = dot > 0 && dot < entry.name.length - 1 ? entry.name.slice(dot + 1).toUpperCase() : "";
    const kind = t(TypeLabels[iconForName(entry.name)] ?? "file");

    return extension.length > 0 ? `${extension} ${kind}` : t("File");
}

/** What one list cell shows. */
function cellValue(column: string, entry: FileEntry, listing: DirectoryListing, t: Translate): string {
    switch (column) {
        case "type":
            return typeLabel(entry, t);
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
            if (entry.linkTarget != null) return entry.linkValid ? "OK" : t("Broken");
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
    const t = useTranslation();
    const slot = useRef<HTMLSpanElement | null>(null);
    const [onScreen, setOnScreen] = useState(false);

    // Only visible icons ask the shell; a cache with hundreds of folders must not do that up front.
    useEffect(() => {
        if (onScreen) return;

        const node = slot.current;
        if (!node) return;

        if (!("IntersectionObserver" in window)) {
            setOnScreen(true);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries.some((item) => item.isIntersecting)) {
                setOnScreen(true);
                observer.disconnect();
            }
        }, {rootMargin: "250px"});

        observer.observe(node);
        return () => observer.disconnect();
    }, [onScreen]);

    const shellIcon = useIcon(onScreen ? entry.fullPath : null, entry.isDirectory, size > 32);
    const customFile = entry.iconSource?.startsWith("file:") ? entry.iconSource.slice(5) : null;
    const customImage = useIconFile(customFile);

    return (
        <IconSlot $size={size} ref={slot}>
            {entry.iconSource?.startsWith("icon:")
                ? <BuiltinIcon name={entry.iconSource.slice(5)} size={size}/>
                : customImage
                    ? <img alt="" height={size} src={customImage} width={size}/>
                    : shellIcon
                        ? <img alt="" height={size} src={shellIcon} width={size}/>
                        : entry.isDirectory
                            ? <FolderIcon size={size}/>
                            : <BuiltinIcon name={iconForName(entry.name)} size={size}/>}
            {entry.isEncrypted && (
                <EncryptedMark title={t("This archive is encrypted and asks for a password when opened.")}>
                    <LockIcon size={Math.max(8, Math.round(size * 0.52))}/>
                </EncryptedMark>
            )}
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
                                            row,
                                            current,
                                            dim,
                                            iconSize,
                                            itemCount,
                                            showTarget,
                                            innerRef,
                                            selected,
                                            showCheckboxes,
                                            openOnSingleClick,
                                            renaming,
                                            onRenameChange,
                                            onRenameCommit,
                                            onRenameCancel,
                                            onSelect,
                                            onToggle,
                                            onContextMenu,
                                            onOpen,
                                            onOpenFile,
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
    renaming?: { value: string } | null;
    onRenameChange?: (value: string) => void;
    onRenameCommit?: () => void;
    onRenameCancel?: () => void;
    onSelect: (event: ReactMouseEvent, path: string) => void;
    onToggle: (path: string) => void;
    onContextMenu: (event: ReactMouseEvent, path: string) => void;
    onOpen: (path: string, newTab?: boolean) => void;
    onOpenFile?: (path: string, newTab?: boolean) => void;
}) {
    const t = useTranslation();
    const quick = useQuickAccess();
    const previewable = !row.entry.isDirectory && canPreview(row.entry.name);
    const tileRef = useRef<HTMLDivElement | null>(null);
    const [onScreen, setOnScreen] = useState(false);

    // Thousands of cache images must not each ask the shell for a thumbnail up front.
    useEffect(() => {
        if (!previewable || onScreen) return;

        const node = tileRef.current;
        if (!node) return;

        if (!("IntersectionObserver" in window)) {
            setOnScreen(true);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                setOnScreen(true);
                observer.disconnect();
            }
        }, {rootMargin: "300px"});

        observer.observe(node);
        return () => observer.disconnect();
    }, [previewable, onScreen]);

    const preview = useThumbnail(previewable && onScreen ? row.entry.fullPath : null, 192, row.entry.modified);
    const [failed, setFailed] = useState(false);
    const path = row.entry.fullPath;

    const open = (event: ReactMouseEvent) => {
        if (row.entry.isDirectory) onOpen(path, wantsNewTab(event));
        else onOpenFile?.(path, wantsNewTab(event));
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
            ref={(node) => {
                tileRef.current = node;
                if (current && innerRef) innerRef.current = node;
            }}
            title={row.entry.name}
            data-directory={row.entry.isDirectory ? "true" : undefined}
            data-path={path}
            draggable={!renaming}
        >
            {showCheckboxes && (
                <TileCheck
                    $checked={selected}
                    onClick={(event) => {
                        event.stopPropagation();
                        onToggle(path);
                    }}
                    onDoubleClick={(event) => event.stopPropagation()}
                    title={selected ? t("Deselect") : t("Select")}
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
                {renaming
                    ? (
                        <RenameInput
                            onCancel={() => onRenameCancel?.()}
                            onChange={(value) => onRenameChange?.(value)}
                            onCommit={() => onRenameCommit?.()}
                            value={renaming.value}
                        />
                    )
                    : (
                        <TileName $broken={row.entry.linkValid === false}>
                            <Highlighted name={row.label} ranges={row.ranges}/>
                        </TileName>
                    )}
                {row.entry.isEncrypted && (
                    <EncryptedBadge title={t("This archive is encrypted and asks for a password when opened.")}>
                        <LockIcon size={9}/>
                        {t("Encrypted")}
                    </EncryptedBadge>
                )}
                {row.cut && (
                    <CutBadge title={t("This item is cut and will move when something is pasted.")}>
                        <CutIcon size={9}/>
                        {t("Cut")}
                    </CutBadge>
                )}
                <TileMeta>
                    {row.entry.isDirectory
                        ? (itemCount === undefined
                            ? typeLabel(row.entry, t)
                            : t("{type} · {count} items", {type: typeLabel(row.entry, t), count: itemCount}))
                        : t("{type} · {size}", {type: typeLabel(row.entry, t), size: formatBytes(row.entry.size)})}
                </TileMeta>
                {showTarget && row.entry.linkTarget && (
                    <LinkBadge $block $broken={row.entry.linkValid === false} title={row.entry.linkTarget}>
                        <LinkIcon size={9}/>
                        <span>{row.entry.linkTarget}</span>
                    </LinkBadge>
                )}
            </TileCaption>
        </Tile>
    );
});

/** The sections of tiles, shared by the full grid and the preview panel under the list. */
function GridContent({
                         groups,
                         gridSize,
                         counts,
                         showTarget,
                         searching,
                         currentPath,
                         innerRef,
                         selected,
                         showCheckboxes,
                         openOnSingleClick,
                         renaming,
                         onSelect,
                         onToggle,
                         onContextMenu,
                         onOpen,
                         onOpenFile,
                         onRenameChange,
                         onRenameCommit,
                         onRenameCancel,
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
    renaming?: { path: string; value: string } | null;
    onSelect: (event: ReactMouseEvent, path: string) => void;
    onToggle: (path: string) => void;
    onContextMenu: (event: ReactMouseEvent, path: string) => void;
    onOpen: (path: string, newTab?: boolean) => void;
    onOpenFile?: (path: string, newTab?: boolean) => void;
    onRenameChange?: (value: string) => void;
    onRenameCommit?: () => void;
    onRenameCancel?: () => void;
}) {
    const t = useTranslation();

    return (
        <>
            {groups.map((group) => (
                <GridSection key={group.id}>
                    <GridHeader>
                        {t(group.label)}
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
                                onRenameCancel={onRenameCancel}
                                onRenameChange={onRenameChange}
                                onRenameCommit={onRenameCommit}
                                renaming={renaming?.path === row.entry.fullPath ? renaming : null}
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

/** Explorer-style inline name editor; the base name is selected, the extension is not. */
function RenameInput({
                         value, onChange, onCommit, onCancel,
                     }: {
    value: string;
    onChange: (value: string) => void;
    onCommit: () => void;
    onCancel: () => void;
}) {
    const input = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const element = input.current;
        if (!element)
            return;

        element.focus();

        const dot = value.lastIndexOf(".");
        element.setSelectionRange(0, dot > 0 ? dot : value.length);
    }, []);

    return (
        <RenameBox
            onClick={(event) => event.stopPropagation()}
            onDoubleClick={(event) => event.stopPropagation()}
            onChange={(event) => onChange(event.target.value)}
            onKeyDown={(event) => {
                event.stopPropagation();

                if (event.key === "Enter") {
                    event.preventDefault();
                    onCommit();
                } else if (event.key === "Escape") {
                    event.preventDefault();
                    onCancel();
                }
            }}
            onBlur={onCommit}
            ref={input}
            value={value}
        />
    );
}

/**
 * One list row, memoized so selecting an entry repaints two rows instead of reconciling every row
 * of a folder with tens of thousands of entries. Props are primitives or references that only change
 * when the listing, the columns or the selection do.
 */
const ListRow = memo(function ListRow({
                                          row, current, dim, selected, showCheckboxes, showTarget, openOnSingleClick,
                                          iconSize, height, template, visible, listing, innerRef, renaming,
                                          onSelect, onToggle, onContextMenu, onOpen, onTagEdit,
                                          onRenameChange, onRenameCommit, onRenameCancel,
                                      }: {
    row: RowModel;
    current: boolean;
    dim: boolean;
    selected: boolean;
    showCheckboxes: boolean;
    showTarget: boolean;
    openOnSingleClick: boolean;
    iconSize: number;
    height: number;
    template: string;
    visible: typeof ViewColumns;
    listing: DirectoryListing;
    innerRef?: RefObject<HTMLDivElement | null>;
    renaming: { value: string } | null;
    onSelect: (event: ReactMouseEvent, path: string) => void;
    onToggle: (path: string) => void;
    onContextMenu: (event: ReactMouseEvent, path: string) => void;
    onOpen: (entry: FileEntry, event: ReactMouseEvent) => void;
    onTagEdit: (entry: FileEntry, x: number, y: number) => void;
    onRenameChange: (value: string) => void;
    onRenameCommit: () => void;
    onRenameCancel: () => void;
}) {
    const t = useTranslation();
    const quick = useQuickAccess();
    const path = row.entry.fullPath;

    return (
        <Row
            $current={current}
            $dim={dim}
            $height={height}
            $hidden={row.entry.isHidden}
            $selected={selected}
            onClick={(event) => {
                onSelect(event, path);

                if (openOnSingleClick)
                    onOpen(row.entry, event);
            }}
            onContextMenu={(event) => onContextMenu(event, path)}
            onDoubleClick={(event) => {
                if (!openOnSingleClick)
                    onOpen(row.entry, event);
            }}
            ref={current ? innerRef : undefined}
            style={{gridTemplateColumns: template}}
            data-directory={row.entry.isDirectory ? "true" : undefined}
            data-path={path}
            draggable={!renaming}
        >
            <Name>
                {showCheckboxes && (
                    <SelectionBox
                        $checked={selected}
                        onClick={(event) => {
                            event.stopPropagation();
                            onToggle(path);
                        }}
                        onDoubleClick={(event) => event.stopPropagation()}
                        title={selected ? t("Deselect") : t("Select")}
                        type="button"
                    >
                        {selected && <CheckIcon size={10}/>}
                    </SelectionBox>
                )}
                {row.place && quick.useIcons
                    ? <IconSlot><PlaceIcon place={row.place} size={iconSize}/></IconSlot>
                    : <EntryIcon entry={row.entry} size={iconSize}/>}
                {renaming
                    ? (
                        <RenameInput
                            onCancel={onRenameCancel}
                            onChange={onRenameChange}
                            onCommit={onRenameCommit}
                            value={renaming.value}
                        />
                    )
                    : (
                        <NameText $broken={row.entry.linkValid === false} title={row.entry.name}>
                            <Highlighted name={row.label} ranges={row.ranges}/>
                        </NameText>
                    )}
                {row.entry.isEncrypted && (
                    <EncryptedBadge title={t("This archive is encrypted and asks for a password when opened.")}>
                        <LockIcon size={9}/>
                        {t("Encrypted")}
                    </EncryptedBadge>
                )}
                {row.cut && (
                    <CutBadge title={t("This item is cut and will move when something is pasted.")}>
                        <CutIcon size={9}/>
                        {t("Cut")}
                    </CutBadge>
                )}
                {showTarget && row.entry.linkTarget && (
                    <LinkBadge $broken={row.entry.linkValid === false} title={row.entry.linkTarget}>
                        <LinkIcon size={9}/>
                        <span>{row.entry.linkTarget}</span>
                    </LinkBadge>
                )}
            </Name>
            {visible.map((column) => (
                <Cell key={column.id}>
                    {column.id === "tags"
                        ? (
                            <TagsButton
                                onClick={(event) => {
                                    event.stopPropagation();
                                    onTagEdit(row.entry, event.clientX, event.clientY);
                                }}
                                title={t("Edit tags")}
                                type="button"
                            >
                                {row.tags.length > 0
                                    ? row.tags.map((tag) => {
                                        const color = listing.tagColors?.[tag] ?? DefaultTagColor;

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
                            ? <Broken>{t("Broken")}</Broken>
                            : cellValue(column.id, row.entry, listing, t)}
                </Cell>
            ))}
        </Row>
    );
});

const IconSlot = styled.span<{ $size?: number }>`
    position: relative;
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

/** Sits on the icon itself, so an encrypted archive is obvious even in a dense list. */
const EncryptedMark = styled.span`
    position: absolute;
    right: -4px;
    bottom: -4px;
    display: grid;
    place-items: center;
    width: 14px;
    height: 14px;
    border: 1px solid var(--bg-primary);
    border-radius: 50%;
    background: #fbbf24;
    color: #1f2937;

    svg {
        color: inherit;
        stroke-width: 2.4;
    }
`;

/** The Explorer-style selection box in front of a name. */
const HeaderName = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`;

/** The header checkbox: one click selects every row, or clears the selection again. */
const SelectAll = styled.button<{ $checked: boolean; $partial: boolean }>`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid ${({$checked, $partial}) => $checked || $partial
            ? "var(--border-color-focus)"
            : "var(--border-color-hover)"};
    border-radius: 4px;
    background: ${({$checked, $partial}) => $checked || $partial
            ? "rgba(var(--accent-rgb), 0.8)"
            : "transparent"};
    color: #fff;
    cursor: pointer;
    transition: background 100ms ease, border-color 100ms ease;

    &:hover {
        border-color: var(--border-color-focus);
        background: ${({$checked, $partial}) => $checked || $partial
                ? "rgba(var(--accent-rgb), 0.9)"
                : "rgba(148, 163, 184, 0.16)"};
    }

    &:disabled {
        opacity: 0.32;
        cursor: default;

        &:hover {
            border-color: var(--border-color-hover);
            background: transparent;
        }
    }
`;

/** The mark a partly selected folder shows instead of a check. */
const Dash = styled.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`;

const GridSelectAll = styled.div`
    position: sticky;
    top: -12px;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: -12px -14px 10px;
    padding: 9px 14px;
    background: var(--bg-primary);
    color: var(--text-muted);
    font-size: 11px;

    html.has-wallpaper & {
        background: rgba(var(--bg-rgb), 0.65);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }
`;

const SelectionBox = styled.button<{ $checked: boolean }>`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid ${({$checked}) => $checked ? "var(--border-color-focus)" : "var(--border-color-hover)"};
    border-radius: 4px;
    background: ${({$checked}) => $checked ? "rgba(var(--accent-rgb), 0.8)" : "transparent"};
    color: #fff;
    cursor: pointer;
    transition: background 100ms ease, border-color 100ms ease;

    &:hover {
        border-color: var(--border-color-focus);
        background: ${({$checked}) => $checked ? "rgba(var(--accent-rgb), 0.9)" : "rgba(148, 163, 184, 0.16)"};
    }
`;

/** The same box, floated over the top-left corner of a grid tile. */
const TileCheck = styled(SelectionBox)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked}) => $checked ? "rgba(var(--accent-rgb), 0.9)" : "rgba(var(--bg-rgb), 0.6)"};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`;

const SplitPane = styled.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`;

const Head = styled.div`
    display: grid;
    gap: 16px;
    padding: 10px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 11px;
    min-width: 0;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        height: 0;
    }

    font-weight: 600;
    letter-spacing: 0.08em;
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
    min-width: 0;
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
        background: rgba(var(--accent-rgb), 0.35);
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

const Row = styled.div<{ $height: number; $hidden: boolean; $dim: boolean; $current: boolean; $selected: boolean }>`
    display: grid;
    gap: 16px;
    align-items: center;
    height: ${({$height}) => $height}px;
    padding: 9px 12px;
    border: 1px solid ${({$selected}) => $selected ? "rgba(var(--accent-rgb), 0.35)" : "transparent"};
    border-radius: var(--radius-md);
    background: ${({$current, $selected}) => $current
            ? "rgba(var(--accent-rgb), 0.14)"
            : $selected ? "rgba(var(--accent-rgb), 0.09)" : "transparent"};
    box-shadow: ${({$current}) => $current ? "inset 3px 0 0 var(--accent-primary)" : "none"};
    font-size: 13px;
    color: var(--text-secondary);
    opacity: ${({$hidden, $dim}) => $dim ? 0.3 : $hidden ? 0.55 : 1};
    cursor: default;
    user-select: none;
    overflow: hidden;
    transition: background 110ms ease, border-color 110ms ease, opacity 110ms ease;

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
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken}) => $broken ? "#f87171" : "inherit"};
    text-decoration: ${({$broken}) => $broken ? "line-through" : "none"};
    text-overflow: ellipsis;
    white-space: nowrap;
`;

/** A deliberate, high-contrast marker: an encrypted archive must be obvious before opening. */
const EncryptedBadge = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid rgba(251, 191, 36, 0.5);
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.15);
    color: #fbbf24;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    white-space: nowrap;
`;

/** Marks a row the user cut, in the same pill the archive and link hints use. */
const CutBadge = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid rgba(var(--accent-rgb), 0.4);
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--accent-primary);
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    white-space: nowrap;
    opacity: 0.85;
`;

/** The inline rename editor; it sits exactly where the name was. */
const RenameBox = styled.input`
    flex: 1;
    min-width: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-focus);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;
    outline: none;
`;

/** A symlink's destination, shown as a chip so it never reads as part of the name. */
const LinkBadge = styled.span<{ $block?: boolean; $broken?: boolean }>`
    display: inline-flex;
    flex: ${({$block}) => $block ? "0 0 auto" : "0 1 auto"};
    align-items: center;
    gap: 4px;
    overflow: hidden;
    min-width: 0;
    max-width: 100%;
    width: ${({$block}) => $block ? "100%" : "auto"};
    padding: 1px 7px;
    border: 1px solid ${({$broken}) => $broken ? "rgba(248, 113, 113, 0.45)" : "rgba(var(--accent-rgb), 0.35)"};
    border-radius: 999px;
    background: ${({$broken}) => $broken ? "rgba(248, 113, 113, 0.12)" : "rgba(var(--accent-rgb), 0.12)"};
    color: ${({$broken}) => $broken ? "#f87171" : "var(--accent-primary)"};
    font-family: var(--font-mono);
    font-size: ${({$block}) => $block ? "9px" : "10px"};
    white-space: nowrap;

    svg {
        flex-shrink: 0;
        opacity: 0.85;
    }

    span {
        overflow: hidden;
        min-width: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const Cell = styled.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
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
    padding: 2px 8px;
    overflow: hidden;
    border-radius: 999px;
    background: ${({$color}) => $color};
    color: ${({$ink}) => $ink};
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const TagEmpty = styled.span`
    color: var(--text-muted);
    font-size: 11px;
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
            ? "rgba(var(--accent-rgb), 0.5)"
            : $selected ? "rgba(var(--accent-rgb), 0.4)" : "var(--border-color)"};
    border-radius: var(--radius-lg);
    background: ${({$current, $selected}) => $current
            ? "rgba(var(--accent-rgb), 0.14)"
            : $selected ? "rgba(var(--accent-rgb), 0.1)" : "var(--bg-primary)"};
    opacity: ${({$dim}) => $dim ? 0.3 : 1};
    cursor: default;
    user-select: none;
    content-visibility: auto;
    transition: background 120ms ease, border-color 120ms ease, opacity 120ms ease,
    transform 140ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 140ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color-hover);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        transform: translateY(-1px);
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
    background: linear-gradient(to top, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0));
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

const Mark = styled.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
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

