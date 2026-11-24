import {
    type DragEvent as ReactDragEvent,
    memo,
    type MouseEvent as ReactMouseEvent,
    type PointerEvent as ReactPointerEvent,
    type ReactNode,
    type RefObject,
    useCallback,
    useDeferredValue,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import styled from "styled-components";
import {comboMatches, comboOf, defaultShortcuts, isTyping, type ShortcutMap, wantsNewTab} from "../shortcuts";
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
    transferPaths,
} from "../api/operations";
import {type FindQuery, type FindView, NoFind, rangesOf} from "../find";
import {canPreview, PreviewKindLabels, previewKindOf} from "../preview";
import {quickPlace, useQuickAccess} from "../quick";
import {baseName, formatBytes, formatDate, plural, samePath} from "../utils/format";
import {typeLabel} from "../utils/fileType";
import {Timestamp} from "./Timestamp";
import {readStoredJson, readStoredNumber, writeStoredJson, writeStoredNumber} from "../storage";
import {CheckIcon, CutIcon, FolderIcon, LinkIcon, LockIcon} from "./Icons";
import {type ArchiveExtractMode, FileMenu} from "./FileMenu";
import {CompressDialog} from "./CompressDialog";
import {ConfirmDialog} from "./ConfirmDialog";
import {type RunningProgram, RunningProgramsDialog} from "./RunningProgramsDialog";
import {type PreviewInfo, PreviewPane} from "./PreviewPane";
import {PlaceIcon} from "./PlaceIcon";
import {DefaultTagColor, inkFor, TagPicker} from "./TagPicker";
import {BuiltinIcon, iconForName} from "../icons/fileTypes";
import {isPathDrag, readDraggedPaths, writeDraggedPaths} from "./FileTray";
import {showMessage} from "../api/dialogs";
import {downloadSharedFile, isShareLocation} from "../api/share";
import {setSelectionMenu} from "../ui/selectionMenu";
import {type LocalizationKey, type Translate, useTranslation} from "@photino-net-utils/bridge";

/** The strip is a glance, not a gallery; thousands of thumbnails would stall the window. */
const PreviewLimit = 60;

/** The columns the list can show besides the name. `linkTarget` is drawn inside the name cell. */
export const ViewColumns: { id: string; label: LocalizationKey; width: number }[] = [
    {id: "type", label: "type", width: 150},
    {id: "size", label: "size", width: 100},
    {id: "modified", label: "modified", width: 150},
    {id: "created", label: "created", width: 150},
    {id: "items", label: "items", width: 70},
    {id: "linkCount", label: "links", width: 70},
    {id: "linkStatus", label: "link", width: 90},
    {id: "tags", label: "tags", width: 150},
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
    /** Asks for the next page when the end of what is loaded comes into view. */
    onLoadMore?: () => void;
    /** Selects every entry of the folder, fetching the pages that are not loaded yet. */
    onEnsureComplete?: () => void;
    /** Bumped after that backfill, so the select-all covers the rows that just arrived. */
    selectAllToken?: number;
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
    /** The host platform; the Windows share sheet has no Linux equivalent. */
    platform?: string;
    /** Pins the selection to the overview's Favorites panel. */
    onAddFavorite?: (paths: string[]) => void;
    /** Removes the selection from Favorites; shown when every selected path is already pinned. */
    onRemoveFavorite?: (paths: string[]) => void;
    /** Normalized favorite paths, so the menu can pick Add or Remove. */
    favoritePaths?: string[];
    /** Extracts an archive selected in the list to the chosen place. */
    onExtractArchive?: (path: string, mode: ArchiveExtractMode) => void;
    onOpenAsArchive?: (path: string) => void;
    onAddToStartMenu?: (path: string, scope: "user" | "machine", pin: boolean) => void;
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
    /** A picker's own way out: the menu's first entry chooses what it points at. */
    onSelectEntry?: (paths: string[]) => void;
    /** A picker opens a file with the system's application, leaving the dialog open. */
    onOpenExternally?: (path: string) => void;
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
    /** Bumped by the find bar's "select all matches" button. */
    selectMatchesToken?: number;
}

interface RowModel {
    entry: FileEntry;
    place?: Place;
    label: string;
    ranges: [number, number][] | null;
    tags: string[];
    /** Porcelain v2's two status letters for this entry, when it is inside a repository. */
    git: string | null;
    /** True when the entry was cut and will move the next time something is pasted. */
    cut?: boolean;
}

/** Used when nothing is cut, so the prop has a stable identity. */
const NoPaths: ReadonlySet<string> = new Set();

/** Where the dragged column widths live, and how narrow or wide one may become. */
const ColumnWidthKey = "yafm.columnWidths";

/** Fired by the view menu's reset button, so every list in the window drops its widths. */
export const ResetColumnWidthsEvent = "yafm.reset-column-widths";

const MinColumnWidth = 64;
const MaxColumnWidth = 720;
const MinNameWidth = 160;

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
                             onSelectEntry,
                             onOpenExternally,
                             showCheckboxes = true,
                             openOnSingleClick = false,
                             shortcuts = defaultShortcuts(),
                             enableShortcuts = true,
                             refreshToken = 0,
                             onRefresh,
                             onRename,
                             onClipboardChanged,
                             cutPaths = NoPaths,
                             onTransfer,
                             onAddToTray,
                             platform,
                             onAddFavorite,
                             onRemoveFavorite,
                             favoritePaths,
                             onExtractArchive,
                             onOpenAsArchive,
                             onAddToStartMenu,
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
                             selectMatchesToken = 0,
                             onLoadMore,
                             onEnsureComplete,
                             selectAllToken = 0,
                         }: FileListProps) {
    const t = useTranslation();
    const quick = useQuickAccess();
    const currentRow = useRef<HTMLDivElement | null>(null);
    const pendingSelect = useRef<string[] | null>(null);
    const head = useRef<HTMLDivElement | null>(null);
    const body = useRef<HTMLDivElement | null>(null);
    /** The scroll position waiting for the next frame, and the node it was read from. */
    const scrollFrame = useRef(0);
    const scrollNode = useRef<HTMLDivElement | null>(null);
    const [listWindow, setListWindow] = useState({top: 0, height: 640});
    const stripDrag = useRef<{ y: number; height: number } | null>(null);
    const anchor = useRef<string | null>(null);
    /** Whether the pointer is over the preview strip, where Ctrl+A means that strip alone. */
    const stripHover = useRef(false);

    /** Which pane the arrow keys walk: the preview strip after a click in it, else the list. */
    const stripFocused = useRef(false);

    /** The scrolling boxes the keys measure: the main grid, and the strip's own grid of pictures. */
    const gridPane = useRef<HTMLDivElement>(null);
    const stripPane = useRef<HTMLDivElement>(null);
    const [tagTarget, setTagTarget] = useState<{ entry: FileEntry; x: number; y: number } | null>(null);
    const [stripHeight, setStripHeight] = useState(imageStripHeight);
    const [selected, setSelected] = useState<Set<string>>(() => new Set());
    // Column widths the user dragged, by column id; a column without an entry keeps its default.
    const [widths, setWidths] = useState<Record<string, number>>(
        () => readStoredJson<Record<string, number>>(ColumnWidthKey) ?? {});
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
        /** The selection holds a running program, so the question is about its shortcuts. */
        running?: boolean;
        /** The delete cannot go ahead at all, so the dialog only informs. */
        blocked?: boolean;
        programs?: RunningProgram[];
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

    /** The width of one column, with whatever the user dragged for it. */
    const widthOf = useCallback(
        (column: { id: string; width: number }) =>
            Math.min(MaxColumnWidth, Math.max(MinColumnWidth, widths[column.id] ?? column.width)),
        [widths]);

    const template = useMemo(
        () => `minmax(160px, 1fr) ${visible.map((column) => `${widthOf(column)}px`).join(" ")}`.trim(),
        [visible, widthOf],
    );

    // A drag on a header's right edge. The window keeps its width: a divider takes room from the
    // column beside it, so nothing shifts sideways and the row never grows wider than the view.
    // The name column is the flexible one, so its divider simply squeezes the first column.
    const dragColumn = useRef<{
        left: { id: string; start: number };
        right?: { id: string; start: number };
        startX: number;
        nameStart: number;
    } | null>(null);

    const nameRef = useRef<HTMLDivElement | null>(null);

    const measuredName = () => Math.floor(nameRef.current?.getBoundingClientRect().width ?? MinNameWidth);

    /** Starts a drag between the name and the first column; dragging right widens the name. */
    const startNameResize = (event: ReactPointerEvent) => {
        const first = visible[0];
        if (!first) return;

        event.preventDefault();
        event.stopPropagation();

        dragColumn.current = {
            left: {id: first.id, start: widthOf(first)},
            startX: event.clientX,
            nameStart: measuredName(),
        };
    };

    /** Starts a drag between two columns; the room moves from one to the other. */
    const startColumnResize = (event: ReactPointerEvent, index: number) => {
        const left = visible[index];
        const right = visible[index + 1];
        if (!left || !right) return;

        event.preventDefault();
        event.stopPropagation();

        dragColumn.current = {
            left: {id: left.id, start: widthOf(left)},
            right: {id: right.id, start: widthOf(right)},
            startX: event.clientX,
            nameStart: 0,
        };
    };

    const resetWidth = (id: string) =>
        setWidths((current) => {
            const next = {...current};
            delete next[id];
            writeStoredJson(ColumnWidthKey, next);
            return next;
        });

    useEffect(() => {
        const move = (event: PointerEvent) => {
            const drag = dragColumn.current;
            if (!drag) return;

            const delta = event.clientX - drag.startX;

            setWidths((current) => {
                if (!drag.right) {
                    // The name divider: dragging right shrinks the first column and the flexible
                    // name takes that room, so it stops when the name or the column hits its limit.
                    const room = Math.max(0, drag.nameStart - MinNameWidth);
                    const width = Math.min(
                        Math.min(MaxColumnWidth, drag.left.start + room),
                        Math.max(MinColumnWidth, drag.left.start - delta));

                    return current[drag.left.id] === width ? current : {...current, [drag.left.id]: width};
                }

                const total = drag.left.start + drag.right.start;
                const wanted = Math.min(MaxColumnWidth, Math.max(MinColumnWidth, drag.left.start + delta));
                const leftWidth = Math.min(
                    Math.min(MaxColumnWidth, total - MinColumnWidth),
                    Math.max(Math.max(MinColumnWidth, total - MaxColumnWidth), wanted));

                return {...current, [drag.left.id]: leftWidth, [drag.right.id]: total - leftWidth};
            });
        };

        const stop = () => {
            if (!dragColumn.current) return;

            dragColumn.current = null;
            setWidths((current) => {
                writeStoredJson(ColumnWidthKey, current);
                return current;
            });
        };

        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", stop);
        window.addEventListener("pointercancel", stop);

        return () => {
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", stop);
            window.removeEventListener("pointercancel", stop);
        };
    }, []);

    // The view menu resets every dragged width at once; each list hears it, so both panes agree.
    useEffect(() => {
        const reset = () => setWidths(() => {
            writeStoredJson(ColumnWidthKey, {});
            return {};
        });

        window.addEventListener(ResetColumnWidthsEvent, reset);
        return () => window.removeEventListener(ResetColumnWidthsEvent, reset);
    }, []);

    // The window builds a fresh find object on every render; only its own values matter to the
    // listing, so the expensive memo below must not depend on that identity.
    const findQuery = useMemo<FindQuery>(
        () => ({
            query: find?.query ?? "",
            matchCase: find?.matchCase ?? false,
            regex: find?.regex ?? false,
        }),
        [find?.query, find?.matchCase, find?.regex]);

    const findMode = find?.mode ?? "dim";

    // The list follows the query one step behind: typing stays responsive in a folder with tens of
    // thousands of entries, and the bar still shows every character at once.
    const deferredQuery = useDeferredValue(findQuery);

    // Rebuilding every row on each page turned a long scroll into a stall: appending 400 entries to
    // a 100 000 entry folder mapped and sorted all 100 000 again. The cache keeps the rows that were
    // already built and only maps the page that arrived, as long as the listing is still the same
    // one. A rename bumps the signature, so a locally changed row is never kept by mistake.
    const rowCache = useRef<{ shape: unknown[]; entries: FileEntry[]; rows: RowModel[] } | null>(null);

    const rows = useMemo(() => {
        if (!listing) return [];

        // Git reports paths in the repository's casing; a folder entry may differ in case on a
        // case-insensitive volume, so the lookup ignores it. Only changed entries are present, so
        // this map is as small as the repository's working tree.
        const gitByName = listing.git
            ? new Map(Object.entries(listing.git.entries).map(([name, code]) => [name.toLowerCase(), code]))
            : null;

        const shape: unknown[] = [
            listing.path,
            listing.signature,
            listing.ordered ?? false,
            listing.tags,
            listing.git,
            view.sort === "size" || view.sort === "items" ? listing.folderSizes : null,
            view.sort === "size" || view.sort === "items" ? listing.counts : null,
            searching, deferredQuery, findMode, quick, view.sort, view.sortDescending, t, cutPaths,
        ];

        const toRow = (entry: FileEntry): RowModel => {
            // Quick access places are folders; looking them up for every file would normalize
            // two paths per file on each sort or search.
            const place = entry.isDirectory ? quickPlace(quick, entry.fullPath) : undefined;
            const label = place?.name || entry.name;

            return {
                entry,
                place,
                label,
                ranges: searching ? rangesOf(label, deferredQuery) : null,
                tags: listing.tags[entry.name] ?? [],
                git: gitByName?.get(entry.name.toLowerCase()) ?? null,
                cut: cutPaths.has(entry.fullPath),
            };
        };

        const cached = rowCache.current;
        const sameShape = cached !== null && shape.length === cached.shape.length
            && shape.every((value, index) => value === cached.shape[index]);
        const appended = cached !== null && sameShape
            && cached.entries.length <= listing.entries.length
            && (cached.entries.length === 0
                || (cached.entries[0] === listing.entries[0]
                    && cached.entries[cached.entries.length - 1] === listing.entries[cached.entries.length - 1]));

        // The paged route sorts the whole folder before it cuts pages, but it orders names by code
        // point: the window's natural, locale-aware order (2 before 10, the way Explorer shows it)
        // is different, so names are always put in place here. Times are plain numbers and match
        // the route exactly. Columns whose value only the window knows - a measured folder size, a
        // child count, a tag, the Type label or the link status - are sorted here as well.
        const routeSorts = listing.ordered && (view.sort === "modified" || view.sort === "created");
        const compare = rowComparator(view, listing, t);

        let built: RowModel[];

        if (appended && cached !== null) {
            const added: RowModel[] = [];

            for (let index = cached.entries.length; index < listing.entries.length; index++) {
                const row = toRow(listing.entries[index]);

                if (!searching || findMode === "dim" || row.ranges !== null)
                    added.push(row);
            }

            if (routeSorts) {
                built = added.length === 0 ? cached.rows : [...cached.rows, ...added];
            } else if (added.length > 4_000) {
                // A search or a select-all can bring the whole folder at once; sorting one batch is
                // cheaper than inserting tens of thousands of rows one by one.
                built = sortRows([...cached.rows, ...added], view, listing, t);
            } else {
                // The rows already on screen are sorted; only the page that arrived has to find its
                // place. Sorting the whole folder again on every page is what made a 100 000 entry
                // scroll stutter.
                built = insertSorted(cached.rows, added, compare);
            }
        } else {
            const matched = listing.entries
                .map(toRow)
                .filter((row) => !searching || findMode === "dim" || row.ranges !== null);

            built = routeSorts ? matched : sortRows(matched, view, listing, t);
        }

        rowCache.current = {shape, entries: listing.entries, rows: built};
        return built;
    }, [
        listing?.entries, listing?.tags, listing?.path, listing?.signature, listing?.ordered, listing?.git,
        view.sort === "size" || view.sort === "items" ? listing?.folderSizes : null,
        view.sort === "size" || view.sort === "items" ? listing?.counts : null,
        searching, deferredQuery, findMode, quick, view.sort, view.sortDescending, t, cutPaths,
    ]);

    rowsRef.current = rows;

    // The find bar's "select all matches" button asks the list to take every row the search matched,
    // including the ones dimmed rather than hidden.
    // The rest of the folder arrived for a select-all: take every row, not only the first page.
    useEffect(() => {
        if (selectAllToken === 0) return;

        setSelected(new Set(rowsRef.current.map((row) => row.entry.fullPath)));
    }, [selectAllToken]);

    useEffect(() => {
        if (selectMatchesToken === 0)
            return;

        setSelected(new Set(rowsRef.current
            .filter((row) => row.ranges !== null)
            .map((row) => row.entry.fullPath)));
    }, [selectMatchesToken]);

    // A list row keeps one height, so the scrollbar can represent all rows while only the rows
    // around the viewport exist in the DOM.
    const rowHeight = Math.max(40, view.iconSize + 20);
    const windowStart = Math.max(0, Math.floor(listWindow.top / rowHeight) - 4);
    const windowEnd = Math.min(rows.length, windowStart + Math.ceil(listWindow.height / rowHeight) + 10);
    const windowRows = useMemo(() => rows.slice(windowStart, windowEnd), [rows, windowStart, windowEnd]);

    // The end of what is loaded has come into view: ask the owner for the next page.
    useEffect(() => {
        if (onLoadMore && rows.length > 0 && windowEnd >= rows.length)
            onLoadMore();
    }, [onLoadMore, rows.length, windowEnd]);

    useEffect(() => {
        const node = body.current;
        if (!node || view.mode !== "list") return;

        // The grid draws its own scroll element, so the one the window last measured is gone when
        // the list comes back. Starting the window over at the top keeps the rendered rows and the
        // scrollbar together; otherwise the old spacer stays and the list looks empty until the
        // first scroll event.
        node.scrollTop = 0;
        setListWindow({top: 0, height: node.clientHeight});

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

    // The grid mounts only the rows around the viewport, but its scrollbar covers every row the
    // folder has loaded: a section's height follows from the tile size, the column count and its
    // header, so the rows that are not mounted become one spacer above and one below. Dragging the
    // bar then lands on the row it points at instead of inside a small window, and scrolling never
    // runs out of room at either end.
    const GridRows = 320;
    const [gridStart, setGridStart] = useState({section: 0, line: 0});
    const [gridMetrics, setGridMetrics] = useState({columns: 0, header: 44, gap: 10, margin: 22});
    const gridContent = useRef<HTMLDivElement | null>(null);

    const gridMode = view.mode === "grid";

    // Grouping only feeds the grid; a list view would pay for the rule matching and never use it.
    const gridSections = useMemo(() => {
        if (!gridMode)
            return [];

        if (!groupOf)
            return groupRows(rows, GridRules);

        // A day, a kind, a tag: a new label starts a section, and the same label arriving again
        // later starts another one, so the tiles keep the order the folder was sorted in.
        const built: RowGroup[] = [];

        for (const row of rows) {
            const label = groupOf(row.entry);
            const current = built[built.length - 1];

            if (!current || current.label !== label.label) {
                built.push({id: `${label.id}#${built.length}`, label: label.label, rows: [row]});
                continue;
            }

            current.rows.push(row);
        }

        return built;
    }, [rows, gridMode, groupOf]);

    // The column count and the header height decide where every row sits. Both are read from the
    // rendered sections, so a theme or a font change cannot make the spacers drift.
    useLayoutEffect(() => {
        const pane = gridPane.current;
        if (!pane) return;

        const header = pane.querySelector<HTMLElement>("h3");
        const tiles = header?.nextElementSibling as HTMLElement | null;

        if (!header || !tiles)
            return;

        const style = getComputedStyle(tiles);
        const columns = style.gridTemplateColumns.split(" ").filter(Boolean).length;
        const gap = Number.parseFloat(style.rowGap) || 0;
        const headerHeight = header.getBoundingClientRect().height
            + (Number.parseFloat(getComputedStyle(header).marginBottom) || 0);
        const all = pane.querySelectorAll("section");
        const margin = all.length > 1
            ? Number.parseFloat(getComputedStyle(all[1]).marginTop) || 0
            : gridMetrics.margin;

        setGridMetrics((current) => current.columns === columns && current.gap === gap
            && Math.abs(current.header - headerHeight) < 0.5 && Math.abs(current.margin - margin) < 0.5
                ? current
                : {columns, header: headerHeight, gap, margin});
    });

    // A wider or narrower window changes the column count even while nothing else re-renders, so the
    // measurements above are taken again whenever the grid's own box changes.
    const [, setGridResize] = useState(0);

    useEffect(() => {
        const node = gridPane.current;
        if (!node || view.mode !== "grid")
            return;

        const observer = new ResizeObserver(() => setGridResize((count) => count + 1));
        observer.observe(node);
        return () => observer.disconnect();
    }, [view.mode]);

    /** Every section's offset and height, so a row can be found without mounting the whole grid. */
    const gridLayout = useMemo(() => {
        const tile = view.gridSize;
        const columns = Math.max(1, gridMetrics.columns);
        const {header, gap, margin} = gridMetrics;
        let top = 0;

        const items = gridSections.map((section, index) => {
            const lines = Math.ceil(section.rows.length / columns);
            const body = lines === 0 ? 0 : lines * tile + (lines - 1) * gap;
            const item = {section, start: top, height: header + body};

            top = item.start + item.height + (index === gridSections.length - 1 ? 0 : margin);
            return item;
        });

        return {items, tile, columns, header, gap, margin, total: top};
    }, [gridSections, gridMetrics, view.gridSize]);

    /** The sections that are mounted, with the rows they leave out standing in as spacers. */
    const gridWindow = useMemo(() => {
        const {items, columns, tile, gap, header, margin, total} = gridLayout;

        if (items.length === 0)
            return {parts: [] as RowGroup[], top: 0, height: 0, total: 0};

        const index = Math.min(Math.max(gridStart.section, 0), items.length - 1);
        const item = items[index];
        const lines = Math.max(1, Math.ceil(item.section.rows.length / columns));
        const startLine = Math.min(Math.max(gridStart.line, 0), lines - 1);
        const top = item.start + (startLine > 0 ? header + startLine * (tile + gap) : 0);

        const parts: RowGroup[] = [];
        let remaining = GridRows;
        let height = 0;

        for (let at = index; at < items.length && remaining > 0; at++) {
            const current = items[at];
            const from = at === index ? startLine * columns : 0;
            const take = Math.min(current.section.rows.length - from, remaining);

            if (take <= 0)
                continue;

            const headerShown = !(at === index && startLine > 0);
            const partLines = Math.ceil(take / columns);

            parts.push({
                id: current.section.id,
                label: current.section.label,
                rows: current.section.rows.slice(from, from + take),
                total: current.section.rows.length,
                headerShown
            });

            height += (headerShown ? header : 0) + partLines * tile + (partLines - 1) * gap;
            if (parts.length > 1)
                height += margin;

            remaining -= take;
        }

        return {parts, top, height, total};
    }, [gridLayout, gridStart]);

    /** The row that is mounted first after the next scroll jump, applied once it is on screen. */
    const pendingGridScroll = useRef<{ top: number } | null>(null);

    // The column count changes with the window's width, and every section's height and offset change
    // with it. The window is put back under the scroll position, or the viewport would be left in the
    // spacer where the rows used to be and the grid would look empty.
    useLayoutEffect(() => {
        const element = gridPane.current;
        const content = gridContent.current;

        if (!element || !content)
            return;

        const base = content.getBoundingClientRect().top - element.getBoundingClientRect().top
            + element.scrollTop;
        const at = Math.max(0, element.scrollTop - base);
        const next = gridPositionAt(gridLayout, Math.max(0, at - element.clientHeight / 2));

        setGridStart((current) => current.section === next.section && current.line === next.line
            ? current
            : next);
    }, [gridLayout.columns, gridLayout.tile, gridLayout.header, gridLayout.gap, gridLayout.margin]);

    useLayoutEffect(() => {
        const pending = pendingGridScroll.current;
        const element = gridPane.current;
        const content = gridContent.current;

        pendingGridScroll.current = null;
        if (pending === null || !element || !content)
            return;

        const base = content.getBoundingClientRect().top - element.getBoundingClientRect().top
            + element.scrollTop;

        element.scrollTop = Math.max(0, base + pending.top - element.clientHeight / 3);
    }, [gridStart]);

    // The grid's own scroll frame: the window follows the bar, and the next page is asked for just
    // before the end of what is loaded comes into view.
    const gridScrollFrame = useRef(0);
    const gridOnScroll = useCallback((element: HTMLDivElement) => {
        if (gridScrollFrame.current !== 0)
            return;

        gridScrollFrame.current = requestAnimationFrame(() => {
            gridScrollFrame.current = 0;

            const content = gridContent.current;
            if (!content)
                return;

            const base = content.getBoundingClientRect().top - element.getBoundingClientRect().top
                + element.scrollTop;
            const at = Math.max(0, element.scrollTop - base);
            const view = element.clientHeight;
            const {top, height} = gridWindow;

            if (at < top - 2 || at + view * 1.5 > top + height) {
                const next = gridPositionAt(gridLayout, Math.max(0, at - view));

                setGridStart((current) => current.section === next.section && current.line === next.line
                    ? current
                    : next);
            }

            if (element.scrollTop + view >= element.scrollHeight - 600)
                onLoadMore?.();
        });
    }, [gridLayout, gridWindow, onLoadMore]);

    // A frame that is still scheduled when the list goes away would call into a stale setter.
    useEffect(() => () => {
        if (scrollFrame.current !== 0)
            cancelAnimationFrame(scrollFrame.current);
        if (gridScrollFrame.current !== 0)
            cancelAnimationFrame(gridScrollFrame.current);
    }, []);

    /** Brings one row into view, mounting the section that holds it first. */
    const scrollGridToPath = useCallback((path: string): boolean => {
        for (let at = 0; at < gridLayout.items.length; at++) {
            const section = gridLayout.items[at].section;
            const local = section.rows.findIndex((row) => samePath(row.entry.fullPath, path));

            if (local < 0)
                continue;

            const line = Math.floor(local / gridLayout.columns);
            const top = gridLayout.items[at].start
                + (line > 0 ? gridLayout.header + line * (gridLayout.tile + gridLayout.gap) : 0);

            pendingGridScroll.current = {top};
            setGridStart({section: at, line});
            return true;
        }

        return false;
    }, [gridLayout]);

    // A paste selects the entries it created, so a mistake is one click from undo and the eye
    // finds the result right away.
    useEffect(() => {
        const wanted = pendingSelect.current;
        if (!wanted || wanted.length === 0)
            return;

        const present = wanted.filter((path) => rows.some((row) => samePath(row.entry.fullPath, path)));
        if (present.length === 0)
            return;

        pendingSelect.current = null;
        const first = present[0];
        const index = rows.findIndex((row) => samePath(row.entry.fullPath, first));

        setSelected(new Set(present));
        anchor.current = first;

        if (view.mode === "list" && body.current && index >= 0)
            body.current.scrollTop = Math.max(0, index * rowHeight - body.current.clientHeight / 2);
        else
            scrollGridToPath(first);
    }, [rows, rowHeight, view.mode, scrollGridToPath]);

    // A new folder starts at the first section; the scrollbar then covers everything it loads.
    useEffect(() => {
        pendingGridScroll.current = null;
        setGridStart({section: 0, line: 0});
        if (gridPane.current) gridPane.current.scrollTop = 0;
    }, [listing?.path]);

    // A reload can return fewer rows than the grid was showing (the gallery is one example, with its
    // path never changing): the window goes back to the top with the shorter list.
    useEffect(() => {
        if (gridStart.section < gridSections.length) return;

        pendingGridScroll.current = null;
        setGridStart({section: 0, line: 0});
        if (gridPane.current) gridPane.current.scrollTop = 0;
    }, [gridSections.length, gridStart.section]);

    // A search hit can be anywhere in the folder; the grid scrolls to it and mounts its section.
    useEffect(() => {
        if (!find.currentPath || view.mode !== "grid") return;

        scrollGridToPath(find.currentPath);
    }, [find.currentPath, scrollGridToPath, view.mode]);

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
    const stripPaths = useMemo(
        () => previewGroups.flatMap((group) => group.rows.map((row) => row.entry.fullPath)),
        [previewGroups]
    );
    const stripSelected = stripPaths.filter((path) => selected.has(path)).length;
    const stripAll = stripPaths.length > 0 && stripSelected === stripPaths.length;
    const stripSome = stripSelected > 0 && !stripAll;

    const allPaths = useMemo(() => rows.map((row) => row.entry.fullPath), [rows]);

    /**
     * The paths in the order the view draws them. A grid sorts its files into sections, so the tab
     * order of the folder is not the order of the tiles; the list draws the rows as they are sorted.
     */
    const visualPaths = useMemo(
        () => gridMode ? gridSections.flatMap((group) => group.rows.map((row) => row.entry.fullPath)) : allPaths,
        [allPaths, gridMode, gridSections]
    );
    const allSelected = rows.length > 0 && selected.size >= rows.length;
    const someSelected = selected.size > 0 && !allSelected;
    const toggleAll = () => {
        if (singleSelect)
            return;

        if (allSelected) clearSelection();
        else setSelected(new Set(allPaths));
    };
    /** Adds or removes the given rows; the per-group and the strip checkboxes share it. */
    const togglePaths = useCallback((paths: string[], select: boolean) => {
        if (singleSelect || paths.length === 0)
            return;

        setSelected((current) => {
            const next = new Set(current);

            for (const path of paths) {
                if (select) next.add(path);
                else next.delete(path);
            }

            return next;
        });

        if (select)
            anchor.current = paths[0] ?? null;
    }, [singleSelect]);

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

    /** A click in the list takes the arrow keys back from the preview strip. */
    const selectFromList = useCallback((event: ReactMouseEvent, path: string) => {
        stripFocused.current = false;
        selectRow(event, path);
    }, [selectRow]);

    /** A click in the preview strip hands it the arrow keys, so they walk its pictures. */
    const selectFromStrip = useCallback((event: ReactMouseEvent, path: string) => {
        stripFocused.current = true;
        selectRow(event, path);
    }, [selectRow]);

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
        // Clicking the empty space of either pane hands the arrow keys back to the list.
        stripFocused.current = false;
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
                    void showMessage(result.error ?? t("could_not_create_the_archive"));
                    return false;
                }

                archiveCreated(result.path, false);
                return true;
            }}
        />
    );

    const copy = async (paths: string[], cut = false) => {
        let list = paths;
        let allowCut = cut;

        // A shared file has no local path to put on the system clipboard, so it is downloaded to
        // the app's cache first; pasting then copies a real file, here or in another program.
        if (paths.some(isShareLocation)) {
            const local: string[] = [];

            for (const path of paths) {
                if (!isShareLocation(path)) {
                    local.push(path);
                    continue;
                }

                const entry = rowsRef.current.find((row) => row.entry.fullPath === path)?.entry;
                if (entry?.isDirectory) {
                    void showMessage(t("folders_on_a_shared_device_cannot_be_copied_yet"));
                    return;
                }

                try {
                    local.push(await downloadSharedFile(path));
                } catch (error) {
                    void showMessage(error instanceof Error ? error.message : t("the_file_could_not_be_copied"));
                    return;
                }
            }

            list = local;
            allowCut = false;
        }

        if (await copyPaths(list, allowCut)) {
            setCanPaste(true);
            onClipboardChanged?.();
        }
    };

    const paste = async (directory: string) => {
        if (!directory)
            return;

        const result = await pasteInto(directory);

        if (result.cancelled)
            return;
        if (!result.ok) {
            void showMessage(t("nothing_on_the_clipboard_could_be_pasted_here"));
            return;
        }

        pendingSelect.current = result.created;
        refresh();
        onPaste?.();
    };

    const createEntry = async (extension: string | null, caseSensitive = false) => {
        if (!currentDirectory)
            return;

        const result = extension === null
            ? await newFolder(currentDirectory, caseSensitive)
            : await newFile(currentDirectory, extension);

        if (!result.ok || result.path === null) {
            void showMessage(result.error ?? t("could_not_create_the_item"));
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
            void showMessage(result.error ?? t("could_not_rename_the_entry"));
        }
    }, [clearSelection, onRename, refresh, t]);

    const remove = async (paths: string[], permanent = false) => {
        if ((permanent || confirmDelete) && !await askDelete(paths, permanent))
            return;

        let target = permanent;
        let result = await deletePaths(paths, target);

        // The volume's recycle bin is turned off, so the selection would be deleted for good. Explorer
        // asks in that case too, whatever the "ask before deleting" setting says.
        if (!result.ok && result.needsPermanent) {
            if (!await askDelete(paths, true))
                return;

            target = true;
            result = await deletePaths(paths, true);
        }

        // A running program reaches the recycle bin like any other file, but its shortcuts and
        // updates stop working, so the window asks first. A folder that holds one cannot move at
        // all, and the same dialog lists the programs for that case too.
        if (!result.ok && result.needsRunningConfirm) {
            if (!await askRunning(paths, target, result.running ?? [], false))
                return;

            result = await deletePaths(paths, target, true);
        }

        if (!result.ok && !result.needsRunningConfirm && (result.running?.length ?? 0) > 0) {
            await askRunning(paths, target, result.running ?? [], true);
            return;
        }

        if (!result.ok) {
            if (result.cancelled)
                return;

            void showMessage(result.error ?? (target
                ? t("could_not_delete_the_selection")
                : t("could_not_move_the_selection_to_the_recycle_bin")));
            return;
        }

        clearSelection();
        refresh();
    };

    const askDelete = useCallback((paths: string[], permanent: boolean) =>
        new Promise<boolean>((resolve) => setPendingConfirm({paths, permanent, resolve})), []);

    const askRunning = useCallback((paths: string[], permanent: boolean,
                                    programs: RunningProgram[], blocked: boolean) =>
        new Promise<boolean>((resolve) => setPendingConfirm({
            paths, permanent, running: true, blocked, programs, resolve,
        })), []);

    const settleDelete = useCallback((ok: boolean) => {
        setPendingConfirm((pending) => {
            pending?.resolve(ok);
            return null;
        });
    }, []);

    /** Whether the arrow keys belong to the preview strip, which only the list view draws. */
    const stripActive = useCallback(() => stripFocused.current && stripPane.current !== null, []);

    /** The paths the arrow keys step through: the strip's pictures, or the tiles of the view. */
    const panePaths = useCallback(() => stripActive() ? stripPaths : visualPaths, [stripActive, stripPaths, visualPaths]);

    /**
     * Steps the selection one tile in the pressed direction. Sideways the tiles read as one long line
     * in drawing order, so the end of a row - the last video, say - moves on into the next row and
     * the next section, and the line's two ends meet. Up and down are measured on the screen, so a
     * grid keeps its column; a row the list has not drawn yet has no tile to measure, so the order
     * picks up where the screen ends.
     */
    const stepSelection = useCallback((direction: NavDirection) => {
        const strip = stripActive();
        const pane = strip ? stripPane.current : view.mode === "grid" ? gridPane.current : body.current;

        if (!pane)
            return;

        // A single column has nothing beside its rows.
        if (!strip && view.mode === "list" && (direction === "left" || direction === "right"))
            return;

        const order = panePaths();
        if (order.length === 0)
            return;

        const currentPath = anchor.current && order.includes(anchor.current)
            ? anchor.current
            : selected.size === 1 ? [...selected][0] : null;

        const tiles = [...pane.querySelectorAll<HTMLElement>("[data-path]")];
        const from = currentPath ? tiles.find((tile) => tile.dataset.path === currentPath) : undefined;
        const index = currentPath ? order.indexOf(currentPath) : -1;
        const beside = direction === "left" ? -1 : 1;

        let next: string | undefined;

        if (!from)
            next = tiles[0]?.dataset.path ?? order[0];
        else if (direction === "left" || direction === "right") {
            const at = index < 0 ? (beside > 0 ? -1 : 0) : index;
            next = order[(at + beside + order.length) % order.length];
        } else
            next = stepTo(tiles, from.getBoundingClientRect(), direction)?.dataset.path
                ?? (index >= 0
                    ? order[index + (direction === "down" ? 1 : -1)]
                    : order[0]);

        if (!next)
            return;

        setSelected(new Set([next]));
        anchor.current = next;

        window.requestAnimationFrame(() => {
            pane.querySelector<HTMLElement>(`[data-path="${CSS.escape(next)}"]`)?.scrollIntoView({block: "nearest"});
        });
    }, [panePaths, selected, stripActive, view.mode]);

    // File-manager shortcuts. Every action may answer to several combinations, and none at all.
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

            // Arrow keys walk the tiles where they are drawn, so a grid steps by column and row and
            // the preview strip is walked the same way. Home/End jump to the ends of that pane.
            if (combo === "arrowup" || combo === "arrowdown" || combo === "arrowleft" || combo === "arrowright") {
                event.preventDefault();
                stepSelection(combo.slice("arrow".length) as NavDirection);
                return;
            }

            if (combo === "home" || combo === "end") {
                const order = panePaths();
                if (order.length === 0)
                    return;

                event.preventDefault();

                const next = combo === "home" ? order[0] : order[order.length - 1];

                setSelected(new Set([next]));
                anchor.current = next;

                window.requestAnimationFrame(() => {
                    document
                        .querySelector<HTMLElement>(`[data-path="${CSS.escape(next)}"]`)
                        ?.scrollIntoView({block: "nearest"});
                });

                return;
            }

            if (comboMatches(shortcuts, "copy", combo)) {
                run(() => {
                    if (paths.length > 0) void copy(paths);
                });
            }

            // A duplicate is a copy into the same folder: the copy engine gives the new entry the
            // next free name, so the original stays where it was and a "name (2)" appears beside it.
            if (comboMatches(shortcuts, "duplicate", combo)) {
                run(() => {
                    if (paths.length === 0 || !currentDirectory)
                        return;

                    void transferPaths(paths, currentDirectory, false).then((result) => {
                        if (!result.ok)
                            return;

                        if (result.created.length > 0)
                            setSelected(new Set(result.created));

                        refresh();
                    });
                });
            }

            if (comboMatches(shortcuts, "cut", combo)) {
                run(() => {
                    if (paths.length > 0) void copy(paths, true);
                });
            }

            if (comboMatches(shortcuts, "paste", combo)) {
                run(() => void paste(currentDirectory));
            }

            if (comboMatches(shortcuts, "delete", combo)) {
                run(() => {
                    if (paths.length > 0) void remove(paths);
                });
            }

            if (comboMatches(shortcuts, "deletePermanently", combo)) {
                run(() => {
                    if (paths.length > 0) void remove(paths, true);
                });
            }

            if (comboMatches(shortcuts, "selectAll", combo)) {
                run(() => {
                    // Over the preview strip, the shortcut takes the files the strip shows, which
                    // are the ones on screen there; the rest of the folder belongs to the list.
                    const paths = stripHover.current && showImages && shownPreviews.length > 0
                        ? shownPreviews.map((row) => row.entry.fullPath)
                        : allPaths;

                    setSelected(new Set(paths));

                    // Only the loaded pages are here: the owner fetches the rest and selects it.
                    onEnsureComplete?.();
                    anchor.current = paths[0] ?? null;
                });
            }

            if (comboMatches(shortcuts, "invertSelection", combo)) {
                run(() => {
                    setSelected(new Set(allPaths.filter((path) => !selected.has(path))));
                    anchor.current = allPaths[0] ?? null;
                });
            }

            if (comboMatches(shortcuts, "rename", combo) && selectedEntry) {
                run(() => void rename(selectedEntry));
            }

            if (comboMatches(shortcuts, "open", combo) && selectedEntry) {
                run(() => {
                    if (selectedEntry.isDirectory) onOpen(selectedEntry.fullPath);
                    else onOpenFile?.(selectedEntry.fullPath);
                });
            }

            if (comboMatches(shortcuts, "newFolder", combo)) {
                run(() => void createEntry(null));
            }

            if (comboMatches(shortcuts, "terminal", combo)) {
                run(() => void openTerminal(currentDirectory));
            }

            if (comboMatches(shortcuts, "properties", combo)) {
                run(() => void showProperties(paths.length > 0
                    ? paths
                    : currentDirectory ? [currentDirectory] : []));
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [allPaths, copy, createEntry, currentDirectory, enableShortcuts, menu, onOpen, onOpenFile, panePaths,
        paste, remove, rename, rows, selected, shortcuts, stepSelection]);

    const confirmDialog = pendingConfirm?.running ? (
        <RunningProgramsDialog
            confirmLabel={pendingConfirm.permanent ? t("delete") : t("move")}
            message={pendingConfirm.blocked
                ? t("programs_are_using_target_close_them_and_try_again",
                    {programs: programNames(pendingConfirm.programs), target: pendingConfirm.paths.length === 1
                            ? t("this_item") : t("count_items", {count: pendingConfirm.paths.length})})
                : t("programs_are_using_target_continue",
                    {programs: programNames(pendingConfirm.programs), target: pendingConfirm.paths.length === 1
                            ? t("this_item") : t("count_items", {count: pendingConfirm.paths.length})})}
            onCancel={() => settleDelete(false)}
            onConfirm={pendingConfirm.blocked ? undefined : () => settleDelete(true)}
            programs={pendingConfirm.programs ?? []}
        />
    ) : pendingConfirm ? (
        <ConfirmDialog
            confirmLabel={pendingConfirm.permanent ? t("delete") : t("move")}
            danger={pendingConfirm.permanent}
            message={pendingConfirm.permanent
                ? t("permanently_delete_target_this_cannot_be_undone",
                    {target: pendingConfirm.paths.length === 1 ? t("this_item") : t("count_items", {count: pendingConfirm.paths.length})})
                : t("move_target_to_the_recycle_bin",
                    {target: pendingConfirm.paths.length === 1 ? t("this_item") : t("count_items", {count: pendingConfirm.paths.length})})}
            onCancel={() => settleDelete(false)}
            onConfirm={() => settleDelete(true)}
            open
            title={pendingConfirm.permanent ? t("delete_permanently") : t("move_to_the_recycle_bin")}
        />
    ) : null;

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
                {label: t("type"), value: t("folder")},
                {label: t("location"), value: listing.parent ?? "—"},
                {label: t("path"), value: listing.path},
                {label: t("size"), value: formatBytes(total)},
                {label: t("items"), value: plural(t, count, "k_1_item", "count_items")},
                {label: t("modified"), value: "—"},
                {label: t("created"), value: "—"},
                {label: t("attributes"), value: "—"},
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
                {label: t("type"), value: typeLabel(previewEntry.name, previewEntry.isDirectory, previewEntry.linkTarget, t)},
                ...(previewEntry.isEncrypted
                    ? [{label: t("encryption"), value: t("password_required")}]
                    : []),
                {label: t("extension"), value: previewEntry.isDirectory ? "—" : extension},
                {label: t("location"), value: listing.path},
                {label: t("full_path"), value: previewEntry.fullPath},
                {
                    label: t("size"),
                    value: previewEntry.isDirectory
                        ? folderSize === undefined ? "—" : formatBytes(folderSize)
                        : formatBytes(previewEntry.size),
                },
                ...(previewEntry.isDirectory
                    ? [{
                        label: t("items"),
                        value: `${listing.counts[previewEntry.name] ?? "—"}`,
                    }]
                    : []),
                {label: t("modified"), value: formatDate(previewEntry.modified), time: previewEntry.modified},
                {label: t("created"), value: formatDate(previewEntry.created), time: previewEntry.created},
                {
                    label: t("link_status"),
                    value: previewEntry.linkTarget != null
                        ? previewEntry.linkValid ? "ok" : t("broken")
                        : previewEntry.linkCount > 1 ? t("hard_link") : "—",
                },
                ...(previewEntry.linkTarget
                    ? [{label: t("target"), value: previewEntry.linkTarget}]
                    : []),
                ...(previewEntry.linkCount > 1
                    ? [{label: t("links"), value: String(previewEntry.linkCount)}]
                    : []),
                {
                    label: t("attributes"),
                    value: [
                        previewEntry.isHidden ? t("hidden") : "",
                        previewEntry.isSystem ? t("system") : "",
                    ].filter(Boolean).join(", ") || "—",
                },
                ...(tags.length > 0 ? [{label: t("tags"), value: tags.join(", ")}] : []),
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
            selectionNote={selected.size > 1 ? plural(t, selected.size, "k_1_item_selected", "count_items_selected") : undefined}
            videoAudio={previewVideoAudio}
            videoAutoplay={previewVideoAutoplay}
            width={previewWidth}
        />
    );

    if (error && !listing)
        return <Center><ErrorText>{error}</ErrorText></Center>;

    if (!listing && !loading)
        return <Center><Muted>{t("nothing_selected")}</Muted></Center>;

    if (view.mode === "grid")
        return (
            <SplitPane onPointerDown={onActivate}>
                <Wrapper>
                    <GridBody
                        ref={gridPane}
                        onClick={(event) => {
                            if (!(event.target instanceof Element) || !event.target.closest("[data-path]"))
                                clearSelection();
                        }}
                        onContextMenu={(event) => openMenu(event)}
                        onDragOver={overListDrag}
                        onDragStart={startListDrag}
                        onDrop={dropOnList}
                        onScroll={(event) => {
                            const element = event.currentTarget;

                            onGridScroll?.(element);
                            gridOnScroll(element);
                        }}
                    >
                        {showCheckboxes && rows.length > 0 && (
                            <GridSelectAll>
                                <SelectAll
                                    $checked={!singleSelect && allSelected}
                                    $partial={!singleSelect && someSelected}
                                    aria-label={allSelected ? t("select_none") : t("select_all")}
                                    disabled={singleSelect}
                                    onClick={(event) => {
                                        // The grid body clears the selection on a click that misses
                                        // a row; without this the select-all click is undone at once.
                                        event.stopPropagation();
                                        toggleAll();
                                    }}
                                    title={allSelected ? t("select_none") : t("select_all")}
                                    type="button"
                                >
                                    {allSelected ? <CheckIcon size={10}/> : someSelected ? <Dash/> : null}
                                </SelectAll>
                                <span>{allSelected ? t("select_none") : t("select_all")}</span>
                            </GridSelectAll>
                        )}

                        {loading && !listing
                            ? <Tiles $size={view.gridSize}><PlaceholderTiles size={view.gridSize}/></Tiles>
                            : (
                                <div ref={gridContent}>
                                    <GridSpacer aria-hidden="true" style={{height: gridWindow.top}}/>
                                    <GridContent
                                        counts={listing?.counts}
                                        currentPath={searching ? find.currentPath : null}
                                        groups={gridWindow.parts}
                                        gridSize={view.gridSize}
                                        innerRef={currentRow}
                                        onContextMenu={openMenu}
                                        onOpen={onOpen}
                                        onOpenFile={onOpenFile}
                                        onRenameCancel={cancelRename}
                                        onRenameChange={changeRename}
                                        onRenameCommit={commitRename}
                                        onSelect={selectFromList}
                                        onToggle={toggleRow}
                                        onTogglePaths={singleSelect ? undefined : togglePaths}
                                        openOnSingleClick={openOnSingleClick}
                                        renaming={renaming}
                                        searching={searching}
                                        selected={selected}
                                        showCheckboxes={showCheckboxes}
                                        showTarget={showTarget}
                                    />
                                    <GridSpacer aria-hidden="true"
                                                style={{height: Math.max(0, gridWindow.total - gridWindow.top - gridWindow.height)}}/>
                                </div>
                            )}

                        {!loading && listing && rows.length === 0 && (
                            <EmptyCell>
                                <Muted>
                                    {error ?? (searching && find.mode === "hide"
                                        ? t("no_entries_match_the_search")
                                        : t("this_folder_is_empty"))}
                                </Muted>
                            </EmptyCell>
                        )}

                        {gridFooter}
                    </GridBody>

                    {menu && (
                        <FileMenu
                            canPaste={canPaste}
                            directory={currentDirectory}
                            platform={platform}
                            allowCompression
                            menu={menu}
                            onAddToTray={onAddToTray}
                            onAddFavorite={onAddFavorite}
                            onRemoveFavorite={onRemoveFavorite}
                            favoritePaths={favoritePaths}
                            onExtractArchive={onExtractArchive}
                            onOpenAsArchive={onOpenAsArchive}
                            onAddToStartMenu={onAddToStartMenu}
                            onArchiveCreated={archiveCreated}
                            gitEntries={listing?.git?.entries}
                            onGitChanged={refresh}
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
                    <HeaderName ref={nameRef}>
                        {showCheckboxes && (
                            <SelectAll
                                $checked={!singleSelect && allSelected}
                                $partial={!singleSelect && someSelected}
                                aria-label={allSelected ? t("select_none") : t("select_all")}
                                disabled={singleSelect}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    toggleAll();
                                }}
                                title={allSelected ? t("select_none") : t("select_all")}
                                type="button"
                            >
                                {allSelected ? <CheckIcon size={10}/> : someSelected ? <Dash/> : null}
                            </SelectAll>
                        )}
                        <HeaderButton onClick={() => onSort("name")} type="button">
                            {t("name")}{markOf(view, "name")}
                        </HeaderButton>
                        <ResizeHandle
                            aria-label={t("resize_column")}
                            onDoubleClick={() => visible[0] && resetWidth(visible[0].id)}
                            onPointerDown={startNameResize}
                            role="separator"
                        />
                    </HeaderName>
                    {visible.map((column, index) => (
                        <HeaderCell key={column.id}>
                            <HeaderButton onClick={() => onSort(column.id)} type="button">
                                {t(column.label)}{markOf(view, column.id)}
                            </HeaderButton>
                            {index < visible.length - 1 && (
                                <ResizeHandle
                                    aria-label={t("resize_column")}
                                    onDoubleClick={() => resetWidth(column.id)}
                                    onPointerDown={(event) => startColumnResize(event, index)}
                                    role="separator"
                                />
                            )}
                        </HeaderCell>
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
                        const node = event.currentTarget;

                        if (head.current && head.current.scrollLeft !== node.scrollLeft)
                            head.current.scrollLeft = node.scrollLeft;

                        scrollNode.current = node;

                        // A scroll fires many times per frame, and every update re-renders the
                        // window; one measurement per frame is all the list needs.
                        if (scrollFrame.current !== 0) return;

                        scrollFrame.current = requestAnimationFrame(() => {
                            scrollFrame.current = 0;

                            const scrolled = scrollNode.current;
                            if (!scrolled) return;

                            setListWindow((window) => window.top === scrolled.scrollTop
                                                        && window.height === scrolled.clientHeight
                                ? window
                                : {top: scrolled.scrollTop, height: scrolled.clientHeight});
                        });
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
                                            folderSizes={listing!.folderSizes}
                                            counts={listing!.counts}
                                            tagColors={listing!.tagColors}
                                            onContextMenu={openMenu}
                                            onOpen={openRow}
                                            onRenameCancel={cancelRename}
                                            onRenameChange={changeRename}
                                            onRenameCommit={commitRename}
                                            onSelect={selectFromList}
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
                                    ? t("no_entries_match_the_search")
                                    : t("this_folder_is_empty"))}
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
                            title={t("drag_to_resize_double_click_to_reset")}
                        />
                        <Strip
                            onPointerEnter={() => {
                                stripHover.current = true;
                            }}
                            onPointerLeave={() => {
                                stripHover.current = false;
                            }}
                            style={{height: stripHeight}}
                        >
                            <StripHead>
                                {showCheckboxes && !singleSelect && stripPaths.length > 0 && (
                                    <SelectAll
                                        $checked={stripAll}
                                        $partial={stripSome}
                                        aria-label={stripAll ? t("select_none") : t("select_all")}
                                        disabled={singleSelect}
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            togglePaths(stripPaths, !stripAll);
                                        }}
                                        title={stripAll ? t("select_none") : t("select_all")}
                                        type="button"
                                    >
                                        {stripAll ? <CheckIcon size={10}/> : stripSome ? <Dash/> : null}
                                    </SelectAll>
                                )}
                                {t("preview")}
                                <StripCount>
                                    {previewTotal > PreviewLimit
                                        ? `${shownPreviews.length} / ${previewTotal}`
                                        : previewTotal}
                                </StripCount>
                            </StripHead>
                            <GridBody
                                ref={stripPane}
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
                                    onSelect={selectFromStrip}
                                    onToggle={toggleRow}
                                    onTogglePaths={singleSelect ? undefined : togglePaths}
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
                        platform={platform}
                        allowCompression
                        menu={menu}
                        onAddToTray={onAddToTray}
                        onAddFavorite={onAddFavorite}
                        onRemoveFavorite={onRemoveFavorite}
                        favoritePaths={favoritePaths}
                        onExtractArchive={onExtractArchive}
                            onOpenAsArchive={onOpenAsArchive}
                            onAddToStartMenu={onAddToStartMenu}
                        onArchiveCreated={archiveCreated}
                        gitEntries={listing?.git?.entries}
                        onGitChanged={refresh}
                        onClose={closeMenu}
                        onCompressTo={(paths, name) => setCompressDialog({paths, name})}
                        onCopy={copy}
                        onCreateFile={(extension) => void createEntry(extension)}
                        onCreateFolder={(caseSensitive) => void createEntry(null, caseSensitive)}
                        onDelete={remove}
                        onOpen={onOpen}
                        onOpenExternally={onOpenExternally}
                        onOpenFile={onOpenFile}
                        onSelectEntry={onSelectEntry}
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

/** The direction an arrow key steps in. */
type NavDirection = "up" | "down" | "left" | "right";

/**
 * The tile one step away from a tile in the pressed direction, measured where the tiles sit on the
 * screen: a grid then moves by column and row instead of by the folder's sorted order, and the
 * preview strip is walked the same way. A tile only counts when the key points at it, so a step
 * sideways never leaves the row it started in.
 */
function stepTo(tiles: HTMLElement[], from: DOMRect, direction: NavDirection): HTMLElement | null {
    const vertical = direction === "up" || direction === "down";
    const sign = direction === "down" || direction === "right" ? 1 : -1;
    const middle = (box: DOMRect) => vertical
        ? {ahead: box.top + box.height / 2, apart: box.left + box.width / 2}
        : {ahead: box.left + box.width / 2, apart: box.top + box.height / 2};
    const start = middle(from);

    let best: HTMLElement | null = null;
    let bestScore = Infinity;

    for (const tile of tiles) {
        const {ahead, apart} = middle(tile.getBoundingClientRect());
        const forward = (ahead - start.ahead) * sign;

        if (forward <= 1) continue;

        // The nearest line first, then the nearest tile on it, so a step down keeps the column.
        const score = forward + Math.abs(apart - start.apart) * 4;

        if (score < bestScore) {
            bestScore = score;
            best = tile;
        }
    }

    return best;
}

/** One collator for every listing: `localeCompare` with options allocates per comparison. */
const NameCollator = new Intl.Collator(undefined, {numeric: true, sensitivity: "base"});

/** The value the view sorts one entry by. */
function sortValue(entry: FileEntry, view: ResolvedView, listing: DirectoryListing,
                   t: Translate): string | number {
    switch (view.sort) {
        case "type":
            return typeLabel(entry.name, entry.isDirectory, entry.linkTarget, t);
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
}

/** Folders stay first, the way Explorer keeps them, and the chosen column orders the rest. */
function rowComparator(view: ResolvedView, listing: DirectoryListing, t: Translate) {
    return (left: RowModel, right: RowModel): number => {
        if (left.entry.isDirectory !== right.entry.isDirectory)
            return left.entry.isDirectory ? -1 : 1;

        const a = sortValue(left.entry, view, listing, t);
        const b = sortValue(right.entry, view, listing, t);
        const order = typeof a === "number" && typeof b === "number"
            ? a - b
            : NameCollator.compare(String(a), String(b));

        return view.sortDescending ? -order : order;
    };
}

function sortRows(rows: RowModel[], view: ResolvedView, listing: DirectoryListing, t: Translate): RowModel[] {
    // Sort keys are computed once per row instead of on every comparison; a column like Type or
    // Tags would otherwise be rebuilt tens of thousands of times for one listing.
    const keys = new Map(rows.map((row) => [row, sortValue(row.entry, view, listing, t)]));

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

/** Puts a newly arrived page into the rows already sorted, without sorting them all again. */
function insertSorted(sorted: RowModel[], added: RowModel[], compare: (left: RowModel, right: RowModel) => number) {
    if (added.length === 0)
        return sorted;

    const tail = [...added].sort(compare);
    const merged = [...sorted];

    for (const row of tail) {
        // After the rows that compare equal, so two equal names keep the order they arrived in.
        let low = 0;
        let high = merged.length;

        while (low < high) {
            const middle = (low + high) >>> 1;

            if (compare(merged[middle], row) <= 0) low = middle + 1;
            else high = middle;
        }

        merged.splice(low, 0, row);
    }

    return merged;
}

interface RowGroup {
    id: string;
    label: string;
    rows: RowModel[];
    /** How many rows the whole section holds when the grid mounts only part of it. */
    total?: number;
    /** False for the section a window starts inside, whose header has scrolled off. */
    headerShown?: boolean;
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
    {id: "folders", label: "folders", match: (row) => row.entry.isDirectory},
    ...PreviewKindRules.filter((rule) => rule.id === "image" || rule.id === "video"),
    {id: "files", label: "other_files", match: () => true},
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

/** What one list cell shows. */
function cellValue(column: string, entry: FileEntry, folderSizes: Record<string, number>,
                   counts: Record<string, number>, t: Translate): string {
    switch (column) {
        case "type":
            return typeLabel(entry.name, entry.isDirectory, entry.linkTarget, t);
        case "size":
            return sizeOf(entry, folderSizes);
        case "modified":
            return formatDate(entry.modified);
        case "created":
            return formatDate(entry.created);
        case "items":
            return entry.isDirectory ? counts[entry.name]?.toString() ?? "—" : "—";
        case "linkCount":
            return entry.linkCount > 1 ? String(entry.linkCount) : "—";
        case "linkStatus":
            if (entry.linkTarget != null) return entry.linkValid ? "ok" : t("broken");
            return entry.linkCount > 1 ? "ok" : "—";
        default:
            return "";
    }
}

/** Porcelain v2's two letters trimmed to the one a row shows: the working tree wins over the index. */
function gitLetter(code: string): string {
    if (code === "??") return "?";
    if (code === "!!") return "!";
    if (code === "UU" || code === "AA" || code === "DD" || code[0] === "U" || code[1] === "U") return "U";

    return code[1] !== "." ? code[1] : code[0];
}

/** The color group a git status belongs to. */
function gitTone(code: string): string {
    switch (gitLetter(code)) {
        case "?":
            return "untracked";
        case "!":
            return code === "!!" ? "ignored" : "conflict";
        case "U":
            return "conflict";
        case "D":
            return "deleted";
        case "A":
        case "C":
            return "added";
        case "R":
            return "renamed";
        default:
            return "modified";
    }
}

/** What a status badge explains itself with: the change, and whether it is already in the index. */
function gitTitle(t: Translate, code: string): string {
    const letter = gitLetter(code);
    const label = letter === "?"
        ? t("git_untracked")
        : letter === "!"
            ? (code === "!!" ? t("git_ignored") : t("git_conflict"))
            : letter === "U"
                ? t("git_conflict")
                : letter === "D"
                    ? t("git_deleted")
                    : letter === "A" || letter === "C"
                        ? t("git_added")
                        : letter === "R"
                            ? t("git_renamed")
                            : t("git_modified");

    return code[1] === "." && code[0] !== "." ? `${label} · ${t("git_staged")}` : label;
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

/**
 * One observer per margin for every icon and tile. Each node used to create its own, so a scroll page
 * mounted dozens of observers and dropped them again. A margin gets its own observer because icons
 * and pictures are preloaded by different distances.
 */
const visibilityCallbacks = new WeakMap<Element, () => void>();
const visibilityObservers = new Map<string, IntersectionObserver>();

function observerFor(margin: string): IntersectionObserver {
    let observer = visibilityObservers.get(margin);

    if (!observer) {
        observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;

                const callback = visibilityCallbacks.get(entry.target);
                visibilityCallbacks.delete(entry.target);
                observer?.unobserve(entry.target);
                callback?.();
            }
        }, {rootMargin: margin});

        visibilityObservers.set(margin, observer);
    }

    return observer;
}

/**
 * The section and line the grid should mount for a scroll offset, from the section offsets that were
 * built for it. Sections hold their rows in lines of `columns`, so the line is the offset divided by
 * one tile row.
 */
function gridPositionAt(layout: {
    items: { start: number; height: number; section: RowGroup }[];
    columns: number;
    header: number;
    tile: number;
    gap: number;
}, at: number): { section: number; line: number } {
    const {items} = layout;
    let low = 0;
    let high = items.length - 1;
    let index = 0;

    while (low <= high) {
        const middle = (low + high) >>> 1;

        if (items[middle].start <= at) {
            index = middle;
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    const item = items[index];
    const local = Math.max(0, at - item.start - layout.header);
    const lines = Math.max(1, Math.ceil(item.section.rows.length / layout.columns));

    return {
        section: index,
        line: Math.min(lines - 1, Math.floor(local / (layout.tile + layout.gap)))
    };
}

function whenVisible(node: Element, onVisible: () => void, margin: string): () => void {
    const observer = observerFor(margin);

    visibilityCallbacks.set(node, onVisible);
    observer.observe(node);

    return () => {
        visibilityCallbacks.delete(node);
        observer.unobserve(node);
    };
}

/** The programs a delete is waiting on, named the way the dialog lists them. */
function programNames(programs?: RunningProgram[]): string {
    return [...new Set((programs ?? []).map((program) => program.name))].join(", ");
}

/** Folder sizes come from the folder's own index and appear once they have been measured. */
function sizeOf(entry: FileEntry, folderSizes: Record<string, number>): string {    if (!entry.isDirectory)
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

        return whenVisible(node, () => setOnScreen(true), "250px");
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
                <EncryptedMark title={t("this_archive_is_encrypted_and_asks_for_a_password_when_opened")}>
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
                <Tile $dim={false} $current={false} $image={false} $selected={false} key={index}>
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

        // Pictures are preloaded most of a screen ahead. A bigger margin made a fast scroll ask the
        // decoder for hundreds of pictures that were already gone, and the ones left on screen then
        // waited behind that queue.
        return whenVisible(node, () => setOnScreen(true), "400px");
    }, [previewable, onScreen]);

    const preview = useThumbnail(previewable && onScreen ? row.entry.fullPath : null, 192, row.entry.modified);
    const [failed, setFailed] = useState(false);
    const image = previewable && preview !== null && !failed;
    const path = row.entry.fullPath;

    const open = (event: ReactMouseEvent) => {
        if (row.entry.isDirectory) onOpen(path, wantsNewTab(event));
        else onOpenFile?.(path, wantsNewTab(event));
    };

    return (
        <Tile
            $current={current}
            $dim={dim}
            $image={image}
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
                    title={selected ? t("deselect") : t("select")}
                    type="button"
                >
                    {selected && <CheckIcon size={10}/>}
                </TileCheck>
            )}
            <TileMedia>
                {image
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
                {row.git && (
                    <GitMark $tone={gitTone(row.git)} title={row.entry.isDirectory ? t("git_changes_inside") : gitTitle(t, row.git)}>
                        {row.entry.isDirectory ? "●" : gitLetter(row.git)}
                    </GitMark>
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
                    <EncryptedBadge title={t("this_archive_is_encrypted_and_asks_for_a_password_when_opened")}>
                        <LockIcon size={9}/>
                        {t("encrypted")}
                    </EncryptedBadge>
                )}
                {row.cut && (
                    <CutBadge title={t("this_item_is_cut_and_will_move_when_something_is_pasted")}>
                        <CutIcon size={9}/>
                        {t("cut")}
                    </CutBadge>
                )}
                <TileMeta>
                    {row.entry.isDirectory
                        ? (itemCount === undefined
                            ? typeLabel(row.entry.name, row.entry.isDirectory, row.entry.linkTarget, t)
                            : t("type_count_items", {type: typeLabel(row.entry.name, row.entry.isDirectory, row.entry.linkTarget, t), count: itemCount}))
                        : t("type_size", {type: typeLabel(row.entry.name, row.entry.isDirectory, row.entry.linkTarget, t), size: formatBytes(row.entry.size)})}
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
                         onTogglePaths,
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
    /** Selects or clears a whole section; absent when only one row may be selected. */
    onTogglePaths?: (paths: string[], select: boolean) => void;
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
            {groups.map((group) => {
                const groupPaths = group.rows.map((row) => row.entry.fullPath);
                const groupChosen = groupPaths.filter((path) => selected.has(path)).length;
                const groupAll = groupPaths.length > 0 && groupChosen === groupPaths.length;
                const groupSome = groupChosen > 0 && !groupAll;
                // A section the window only partly mounted cannot select its missing rows.
                const partial = group.total !== undefined && group.rows.length < group.total;

                return (
                <GridSection key={group.id}>
                    {group.headerShown !== false && (
                        <GridHeader>
                            {showCheckboxes && onTogglePaths && !partial && groupPaths.length > 0 && (
                                <SelectAll
                                    $checked={groupAll}
                                    $partial={groupSome}
                                    aria-label={groupAll ? t("select_none") : t("select_all")}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        onTogglePaths(groupPaths, !groupAll);
                                    }}
                                    title={groupAll ? t("select_none") : t("select_all")}
                                    type="button"
                                >
                                    {groupAll ? <CheckIcon size={10}/> : groupSome ? <Dash/> : null}
                                </SelectAll>
                            )}
                            {t(group.label as LocalizationKey)}
                            <GridCount>{group.total ?? group.rows.length}</GridCount>
                            <GridRule/>
                        </GridHeader>
                    )}
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
                );
            })}
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
                                          iconSize, height, template, visible, folderSizes, counts, tagColors,
                                          innerRef, renaming,
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
    /** The three parts of the listing a row reads; passing the whole listing broke the memo every
     * time a measured size arrived. */
    folderSizes: Record<string, number>;
    counts: Record<string, number>;
    tagColors: Record<string, string>;
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
                        title={selected ? t("deselect") : t("select")}
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
                    <EncryptedBadge title={t("this_archive_is_encrypted_and_asks_for_a_password_when_opened")}>
                        <LockIcon size={9}/>
                        {t("encrypted")}
                    </EncryptedBadge>
                )}
                {row.git && (
                    <GitBadge $tone={gitTone(row.git)} title={row.entry.isDirectory ? t("git_changes_inside") : gitTitle(t, row.git)}>
                        {row.entry.isDirectory ? "●" : gitLetter(row.git)}
                    </GitBadge>
                )}
                {row.cut && (
                    <CutBadge title={t("this_item_is_cut_and_will_move_when_something_is_pasted")}>
                        <CutIcon size={9}/>
                        {t("cut")}
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
                                title={t("edit_tags")}
                                type="button"
                            >
                                {row.tags.length > 0
                                    ? row.tags.map((tag) => {
                                        const color = tagColors?.[tag] ?? DefaultTagColor;

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
                            ? <Broken>{t("broken")}</Broken>
                            : column.id === "modified"
                                ? <Timestamp value={row.entry.modified}/>
                                : column.id === "created"
                                    ? <Timestamp value={row.entry.created}/>
                                    : cellValue(column.id, row.entry, folderSizes, counts, t)}
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
    position: relative;
`;

/** A header cell holds its button and the handle that drags the column's right edge. */
const HeaderCell = styled.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`;

/** The drag handle sits over the gap between two columns, not inside either one. */
const ResizeHandle = styled.span`
    position: absolute;
    top: -10px;
    right: -13px;
    bottom: -10px;
    width: 10px;
    z-index: 2;
    cursor: col-resize;
    touch-action: none;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 4px;
        width: 1px;
        background: transparent;
        transition: background 120ms ease;
    }

    &:hover::after,
    &:active::after {
        background: rgba(var(--accent-rgb), 0.75);
    }
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
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
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
    /* The window is placed by the grid itself; the browser must not move it a second time. */
    overflow-anchor: none;
    padding: 12px 14px 24px;
`;

/** Stands in for a run of rows the grid is not mounting, so the scrollbar still covers them. */
const GridSpacer = styled.div`
    flex: none;
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

/** The color a git status is drawn in; one place so the list and the grid agree. */
function gitColor(tone: string): string {
    switch (tone) {
        case "untracked":
        case "added":
            return "#58c982";
        case "deleted":
            return "#f07171";
        case "renamed":
            return "#68a8f5";
        case "conflict":
            return "#f06bb0";
        case "ignored":
            return "#8b93a3";
        default:
            return "#e7b341";
    }
}

/** The one-letter git status a list row carries beside its name. */
const GitBadge = styled.span<{ $tone: string }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    min-width: 15px;
    height: 15px;
    padding: 0 3px;
    border-radius: 4px;
    background: ${({$tone}) => gitColor($tone)};
    color: #14181f;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    line-height: 1;
    opacity: 0.9;
`;

/** The same status on a tile's picture, where there is no room for a pill. */
const GitMark = styled.span<{ $tone: string }>`
    position: absolute;
    top: 5px;
    right: 5px;
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    border: 1px solid rgba(var(--bg-rgb), 0.6);
    border-radius: 5px;
    background: ${({$tone}) => gitColor($tone)};
    color: #14181f;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    line-height: 1;
    pointer-events: none;
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
    /* The border and the padding make the box six pixels taller than the line it edits. Pulling
       them back out of the flow keeps the text on the very line the name was on, instead of the
       grid sizing its row by the taller box and pushing the whole line down. */
    margin-block: -3px;
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

const Tile = styled.div<{ $dim: boolean; $current: boolean; $selected: boolean; $image: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    border: 1px solid ${({$current, $selected}) => $current
            ? "rgba(var(--accent-rgb), 0.5)"
            : $selected ? "rgba(var(--accent-rgb), 0.4)" : "var(--border-color)"};
    border-radius: var(--radius-lg);
    /* A picture tile has no surface of its own, so a transparent image shows the wallpaper. The
       other tiles only carry a tint: over the wallpaper an opaque card reads as a hole in the
       window, while a tinted one blends the way a list row does. */
    background: ${({$image, $current, $selected}) => $current
            ? "rgba(var(--accent-rgb), 0.14)"
            : $selected
                ? "rgba(var(--accent-rgb), 0.1)"
                : $image ? "transparent" : "rgba(var(--bg-rgb), 0.24)"};
    opacity: ${({$dim}) => $dim ? 0.3 : 1};
    cursor: default;
    user-select: none;
    content-visibility: auto;
    transition: background 120ms ease, border-color 120ms ease, opacity 120ms ease,
    transform 140ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 140ms ease;

    &:hover {
        background: ${({$image}) => $image ? "rgba(var(--bg-rgb), 0.2)" : "rgba(var(--bg-rgb), 0.45)"};
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

/** The name sits over the tile, on a scrim, the way the gallery draws its captions. The name and
    its editor share the tile's font, so the editor lands on the same line. */
const TileCaption = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 18px 8px 6px;
    font-size: 11px;
    background: linear-gradient(to top, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0));
    overflow: hidden;
`;

const TileName = styled.span<{ $broken?: boolean }>`
    width: 100%;
    overflow: hidden;
    color: ${({$broken}) => $broken ? "#f87171" : "var(--text-secondary)"};
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

