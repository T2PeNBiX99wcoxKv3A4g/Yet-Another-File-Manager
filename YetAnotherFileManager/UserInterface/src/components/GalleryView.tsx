import {
    memo, startTransition, useCallback, useEffect, useMemo, useRef, useState,
    type MouseEvent as ReactMouseEvent,
} from "react";
import styled from "styled-components";
import {listGallery, openFile, type GalleryEntry} from "../api/files";
import {compressPaths, copyPaths, deletePaths, openWith, showInExplorer, showProperties} from "../api/operations";
import {useThumbnail} from "../api/icons";
import {appLocale, formatBytes} from "../utils/format";
import {
    ArchiveIcon,
    ArrowRightIcon,
    CheckIcon,
    CopyIcon,
    CutIcon,
    ExecutableIcon,
    FolderIcon,
    GearIcon,
    RefreshIcon,
    TrashIcon,
} from "./Icons";
import {ConfirmDialog} from "./ConfirmDialog";
import {ContextMenu, type ContextMenuItem} from "./ContextMenu";

/** How many pictures one request carries; the rest are prefetched before the bottom is reached. */
const PageSize = 150;

/** Start asking for more when the scrollbar is still this far from the end. */
const PrefetchDistance = 2500;

/** How many pages one trigger may pull; a huge burst would render too much at once. */
const PagesPerBurst = 3;

/** Empty space kept below the last tile while more pages exist; scrolling never hits a hard end. */
const MoreSpace = 600;

interface GalleryViewProps {
    /** Open a picture with one click instead of two, following the file browser's setting. */
    openOnSingleClick?: boolean;
    /** Show the selection checkbox on each picture, following the file browser's setting. */
    showCheckboxes?: boolean;
}

/** A wall of thumbnails from the configured folders, newest first, grouped by day. */
export function GalleryView({openOnSingleClick = false, showCheckboxes = true}: GalleryViewProps) {
    const [entries, setEntries] = useState<GalleryEntry[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [busy, setBusy] = useState(false);
    const [selected, setSelected] = useState<Set<string>>(() => new Set());
    const [menu, setMenu] = useState<{ x: number; y: number; entry: GalleryEntry } | null>(null);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const entriesRef = useRef<GalleryEntry[]>([]);
    const totalRef = useRef(0);
    const loadingMore = useRef(false);
    const generation = useRef(0);
    const sentinel = useRef<HTMLDivElement | null>(null);
    const scroller = useRef<HTMLDivElement | null>(null);
    const scrollTick = useRef(0);
    const anchor = useRef<string | null>(null);

    const load = useCallback(async (refresh: boolean) => {
        const token = ++generation.current;

        setLoading(true);
        setError(null);

        try {
            const page = await listGallery(0, PageSize, refresh);
            if (token !== generation.current)
                return;

            entriesRef.current = page.entries;
            totalRef.current = page.total;
            setEntries(page.entries);
            setTotal(page.total);
        } catch (cause) {
            if (token === generation.current)
                setError(cause instanceof Error ? cause.message : String(cause));
        } finally {
            if (token === generation.current)
                setLoading(false);
        }
    }, []);

    useEffect(() => {
        void load(false);
    }, [load]);

    /**
     * Pulls a few pages at once. The scroll handler fires well before the end, so the wall keeps
     * filling while the user is still looking at pictures that are already there. State is replaced
     * once per burst, not once per page, which keeps the scroll position stable.
     */
    const loadMore = useCallback(async () => {
        if (loadingMore.current || entriesRef.current.length >= totalRef.current)
            return;

        const token = generation.current;
        loadingMore.current = true;

        try {
            let current = entriesRef.current;
            let currentTotal = totalRef.current;

            for (let page = 0; page < PagesPerBurst && current.length < currentTotal; page++) {
                const next = await listGallery(current.length, PageSize, false);
                if (token !== generation.current)
                    return;

                if (next.entries.length === 0) {
                    currentTotal = current.length;
                    break;
                }

                current = [...current, ...next.entries];
                currentTotal = next.total;

                if (next.entries.length < PageSize)
                    break;
            }

            if (token !== generation.current)
                return;

            entriesRef.current = current;
            totalRef.current = currentTotal;

            // Appending is not urgent; a transition keeps the current scroll responsive.
            startTransition(() => {
                setEntries(current);
                setTotal(currentTotal);
            });
        } catch {
            // A failed page is not worth a banner; scrolling again asks once more.
        } finally {
            loadingMore.current = false;
        }
    }, []);

    /** Starts loading while the scrollbar still has a few screens to go. */
    const onScroll = useCallback(() => {
        if (scrollTick.current)
            return;

        scrollTick.current = window.requestAnimationFrame(() => {
            scrollTick.current = 0;

            const element = scroller.current;
            if (!element)
                return;

            const remaining = element.scrollHeight - element.scrollTop - element.clientHeight;
            if (remaining < PrefetchDistance)
                void loadMore();
        });
    }, [loadMore]);

    // The observer covers the case where the whole first page fits on screen and no scroll event
    // ever happens. The scroll handler above covers fast wheel movement.
    useEffect(() => {
        const target = sentinel.current;
        if (!target)
            return;

        const observer = new IntersectionObserver(
            (rows) => {
                if (rows.some((row) => row.isIntersecting))
                    void loadMore();
            },
            {root: scroller.current, rootMargin: `${PrefetchDistance}px 0px`},
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, [loadMore]);

    // If a burst still left the sentinel near the viewport, check again shortly; this keeps the
    // wall filling without waiting for the user to wiggle the wheel.
    useEffect(() => {
        if (entries.length >= total)
            return;

        const timer = window.setTimeout(() => {
            const element = scroller.current;
            if (!element)
                return;

            const remaining = element.scrollHeight - element.scrollTop - element.clientHeight;
            if (remaining < PrefetchDistance)
                void loadMore();
        }, 200);

        return () => window.clearTimeout(timer);
    }, [entries.length, total, loadMore]);

    const groups = useMemo(() => byDay(entries), [entries]);
    const hasMore = entries.length < total;

    const open = useCallback((entry: GalleryEntry) => {
        void openFile(entry.path);
    }, []);

    /** Explorer's selection rules, using the loaded order for Shift ranges. */
    const select = useCallback((event: ReactMouseEvent, entry: GalleryEntry) => {
        const additive = event.ctrlKey || event.metaKey;
        const paths = entriesRef.current.map((item) => item.path);

        setSelected((current) => {
            if (event.shiftKey && anchor.current) {
                const from = paths.indexOf(anchor.current);
                const to = paths.indexOf(entry.path);

                if (from >= 0 && to >= 0) {
                    const next = additive ? new Set(current) : new Set<string>();
                    const start = Math.min(from, to);
                    const end = Math.max(from, to);

                    for (let index = start; index <= end; index++)
                        next.add(paths[index]);

                    return next;
                }
            }

            if (additive) {
                const next = new Set(current);
                if (!next.delete(entry.path)) next.add(entry.path);
                return next;
            }

            return new Set([entry.path]);
        });

        anchor.current = entry.path;
    }, []);

    const toggle = useCallback((entry: GalleryEntry) => {
        setSelected((current) => {
            const next = new Set(current);
            if (!next.delete(entry.path)) next.add(entry.path);
            return next;
        });
        anchor.current = entry.path;
    }, []);

    // Ctrl+A selects the pictures already loaded; Escape clears the selection.
    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            const target = event.target as HTMLElement | null;
            if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable))
                return;

            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "a") {
                event.preventDefault();
                setSelected(new Set(entriesRef.current.map((entry) => entry.path)));
                anchor.current = entriesRef.current[0]?.path ?? null;
            } else if (event.key === "Escape") {
                setSelected(new Set());
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const openMenu = useCallback((event: ReactMouseEvent, entry: GalleryEntry) => {
        event.preventDefault();
        setSelected((current) => current.has(entry.path) ? current : new Set([entry.path]));
        anchor.current = entry.path;
        setMenu({x: event.clientX, y: event.clientY, entry});
    }, []);

    const refresh = () => {
        setBusy(true);
        setSelected(new Set());
        void load(true).finally(() => setBusy(false));
    };

    const menuPaths = selected.size > 0 ? [...selected] : menu ? [menu.entry.path] : [];
    const menuItems: ContextMenuItem[] = menu
        ? [
            {
                label: "Open",
                icon: <ArrowRightIcon size={14}/>,
                onSelect: () => open(menu.entry),
            },
            {
                label: "Open with…",
                icon: <ExecutableIcon size={14}/>,
                onSelect: () => void openWith(menu.entry.path),
            },
            {
                label: "Compress to ZIP",
                icon: <ArchiveIcon size={14}/>,
                separatorBefore: true,
                onSelect: () => void compressPaths(menuPaths).then(() => refresh()),
            },
            {
                label: "Copy as path",
                icon: <CopyIcon size={14}/>,
                onSelect: () => void navigator.clipboard.writeText(menuPaths.join("\n")),
            },
            {
                label: "Show in Explorer",
                icon: <FolderIcon size={14}/>,
                separatorBefore: true,
                onSelect: () => void showInExplorer(menu.entry.path),
            },
            {
                label: menuPaths.length > 1 ? `Delete ${menuPaths.length} pictures` : "Delete",
                icon: <TrashIcon size={14}/>,
                danger: true,
                onSelect: () => setConfirmDelete(true),
            },
            {
                label: "Properties",
                icon: <GearIcon size={14}/>,
                separatorBefore: true,
                onSelect: () => void showProperties(menuPaths),
            },
            {
                label: "Select all",
                separatorBefore: true,
                onSelect: () => setSelected(new Set(entriesRef.current.map((entry) => entry.path))),
            },
            {
                label: "Refresh",
                icon: <RefreshIcon size={14}/>,
                onSelect: refresh,
            },
        ]
        : [];

    const quickActions: ContextMenuItem[] = menu
        ? [
            {
                label: "Cut",
                icon: <CutIcon size={16}/>,
                onSelect: () => void copyPaths(menuPaths, true),
            },
            {
                label: "Copy",
                icon: <CopyIcon size={16}/>,
                onSelect: () => void copyPaths(menuPaths, false),
            },
            {
                label: "Delete",
                icon: <TrashIcon size={16}/>,
                danger: true,
                onSelect: () => setConfirmDelete(true),
            },
            {
                label: "Properties",
                icon: <GearIcon size={16}/>,
                onSelect: () => void showProperties(menuPaths),
            },
        ]
        : [];

    return (
        <Page>
            <Header>
                <Heading>
                    <span>Gallery</span>
                    <Count>
                        {loading ? "scanning…" : `${entries.length} of ${total} pictures`}
                        {selected.size > 0 && ` · ${selected.size} selected`}
                    </Count>
                </Heading>

                <IconButton onClick={refresh} title="Scan the folders again" type="button">
                    <Spin $spinning={busy}><RefreshIcon size={14}/></Spin>
                </IconButton>
            </Header>

            {error && <Message>{error}</Message>}
            {!error && !loading && total === 0 && <Message>No pictures found.</Message>}

            <Grid
                onClick={(event) => {
                    if (!(event.target instanceof Element) || !event.target.closest("[data-path]"))
                        setSelected(new Set());
                }}
                onScroll={onScroll}
                ref={scroller}
            >
                {groups.map((group) => (
                    <Group key={group.label}>
                        <GroupTitle>{group.label}</GroupTitle>
                        <Tiles>
                            {group.entries.map((entry) => (
                                <Tile
                                    entry={entry}
                                    key={entry.path}
                                    onContextMenu={openMenu}
                                    onOpen={open}
                                    onSelect={select}
                                    onToggle={toggle}
                                    openOnSingleClick={openOnSingleClick}
                                    selected={selected.has(entry.path)}
                                    showCheckboxes={showCheckboxes}
                                />
                            ))}
                        </Tiles>
                    </Group>
                ))}

                <Sentinel $space={hasMore ? MoreSpace : 1} ref={sentinel}/>
            </Grid>

            {menu && (
                <ContextMenu
                    items={menuItems}
                    onClose={() => setMenu(null)}
                    quick={quickActions}
                    x={menu.x}
                    y={menu.y}
                />
            )}

            <ConfirmDialog
                confirmLabel="Delete"
                danger
                message={`Move ${menuPaths.length} selected picture${menuPaths.length === 1 ? "" : "s"} to the recycle bin?`}
                onCancel={() => setConfirmDelete(false)}
                onConfirm={() => {
                    setConfirmDelete(false);
                    void deletePaths(menuPaths).then(() => refresh());
                }}
                open={confirmDelete}
                title="Move to the recycle bin"
            />
        </Page>
    );
}

/** Thumbnails are fetched by the web view itself; a lazy image is enough to keep the wall fast. */
const Tile = memo(function Tile({
    entry, selected, showCheckboxes, openOnSingleClick, onSelect, onToggle, onOpen, onContextMenu,
}: {
    entry: GalleryEntry;
    selected: boolean;
    showCheckboxes: boolean;
    openOnSingleClick: boolean;
    onSelect: (event: ReactMouseEvent, entry: GalleryEntry) => void;
    onToggle: (entry: GalleryEntry) => void;
    onOpen: (entry: GalleryEntry) => void;
    onContextMenu: (event: ReactMouseEvent, entry: GalleryEntry) => void;
}) {
    const thumbnail = useThumbnail(entry.path, 128, entry.modified);
    const [loaded, setLoaded] = useState(false);
    const [failed, setFailed] = useState(false);

    return (
        <Cell
            $selected={selected}
            onClick={(event) => {
                onSelect(event, entry);

                if (openOnSingleClick && !event.ctrlKey && !event.metaKey && !event.shiftKey)
                    onOpen(entry);
            }}
            onContextMenu={(event) => onContextMenu(event, entry)}
            onDoubleClick={() => {
                if (!openOnSingleClick)
                    onOpen(entry);
            }}
            title={entry.name}
            data-path={entry.path}
        >
            {showCheckboxes && (
                <GalleryCheck
                    $checked={selected}
                    onClick={(event) => {
                        event.stopPropagation();
                        onToggle(entry);
                    }}
                    onDoubleClick={(event) => event.stopPropagation()}
                    title={selected ? "Deselect" : "Select"}
                    type="button"
                >
                    {selected && <CheckIcon size={9}/>}
                </GalleryCheck>
            )}
            {(!thumbnail || !loaded || failed) && <Placeholder/>}
            {thumbnail && !failed && (
                <img
                    alt=""
                    decoding="async"
                    loading="lazy"
                    onError={() => setFailed(true)}
                    onLoad={() => setLoaded(true)}
                    src={thumbnail}
                />
            )}
            <Caption>
                <CaptionName>{entry.name}</CaptionName>
                <CaptionMeta>{`${typeOf(entry.name)} · ${formatBytes(entry.size)}`}</CaptionMeta>
            </Caption>
        </Cell>
    );
});

/** "PNG", or "FILE" for a picture without an extension worth showing. */
function typeOf(name: string): string {
    const dot = name.lastIndexOf(".");

    return dot > 0 && dot < name.length - 1 ? name.slice(dot + 1).toUpperCase() : "FILE";
}

/** Pictures are sorted newest first, so a day is one contiguous run and the labels stay unique. */
function byDay(entries: GalleryEntry[]): { label: string; entries: GalleryEntry[] }[] {
    const groups: { label: string; entries: GalleryEntry[] }[] = [];

    for (const entry of entries) {
        const label = dayLabel(entry.modified);
        const last = groups[groups.length - 1];

        if (last?.label === label)
            last.entries.push(entry);
        else
            groups.push({label, entries: [entry]});
    }

    return groups;
}

function dayLabel(unixMilliseconds: number): string {
    const date = new Date(unixMilliseconds);
    const today = new Date();
    const day = (value: Date) => new Date(value.getFullYear(), value.getMonth(), value.getDate()).getTime();
    const days = Math.round((day(today) - day(date)) / 86_400_000);

    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return date.toLocaleDateString(appLocale(), {weekday: "long"});

    return date.toLocaleDateString(appLocale(), {year: "numeric", month: "long", day: "numeric"});
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`;

const Heading = styled.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`;

const Count = styled.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`;

const IconButton = styled.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const Spin = styled.span<{ $spinning: boolean }>`
    display: grid;
    place-items: center;
    animation: ${({$spinning}) => $spinning ? "yafm-gallery-spin 900ms linear infinite" : "none"};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

const Grid = styled.div`
    flex: 1;
    min-height: 0;
    padding: 14px 22px 30px;
    overflow-y: auto;
`;

const Group = styled.section`
    & + & {
        margin-top: 28px;
    }
`;

const GroupTitle = styled.h2`
    position: sticky;
    top: -14px;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 -22px 12px;
    padding: 9px 22px;
    background: var(--bg-primary);
    font-size: 12px;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.01em;

    /* A short accent bar marks the day; the rule then carries the eye across to the first tile. */
    &::before {
        content: "";
        width: 3px;
        height: 12px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: linear-gradient(to right, var(--border-color), transparent);
    }
`;

const Tiles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    /* Explicit row height: an auto row collapses to nothing in Chromium when the tile is a shrinking
       flex box, which once left the gallery as a wall of empty strips. */
    grid-auto-rows: 124px;
    gap: 12px;
    align-content: start;
`;

const Cell = styled.div<{ $selected: boolean }>`
    position: relative;
    border: 1px solid ${({$selected}) => $selected ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: var(--radius-md);
    /* Transparent pictures show the app's own background, not a black box. */
    background: var(--bg-primary);
    box-shadow: ${({$selected}) => $selected ? "inset 0 0 0 2px var(--border-color-focus)" : "none"};
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    /* Tiles far below the viewport are laid out but not painted, which is what keeps a long
       scroll smooth. The intrinsic size matches the real cell so the scrollbar does not jump. */
    content-visibility: auto;
    contain-intrinsic-size: 200px 124px;
    transition: border-color 120ms ease, box-shadow 120ms ease;

    &:hover {
        border-color: var(--border-color-hover);
    }

    &:hover > button {
        opacity: 1;
    }

    img {
        position: relative;
        z-index: 1;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
    }
`;

const GalleryCheck = styled.button<{ $checked: boolean }>`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    display: grid;
    place-items: center;
    width: 17px;
    height: 17px;
    padding: 0;
    border: 1px solid ${({$checked}) => $checked ? "var(--border-color-focus)" : "rgba(255, 255, 255, 0.55)"};
    border-radius: 4px;
    background: ${({$checked}) => $checked ? "var(--accent-primary)" : "rgba(2, 6, 23, 0.55)"};
    color: #fff;
    opacity: ${({$checked}) => $checked ? 1 : 0.55};
    cursor: pointer;
    transition: opacity 100ms ease, background 100ms ease;
`;

const Placeholder = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    background:
            radial-gradient(circle at 50% 45%, rgba(99, 102, 241, 0.12), transparent 60%),
            rgba(15, 23, 42, 0.6);
`;

/** The name and its details sit on the picture itself, on a scrim so they stay readable. */
const Caption = styled.span`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 20px 8px 7px;
    background: linear-gradient(to top, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0));
    overflow: hidden;
`;

const CaptionName = styled.span`
    overflow: hidden;
    font-size: 11px;
    color: #e5e7eb;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const CaptionMeta = styled.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: #9ca3af;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Sentinel = styled.div<{ $space: number }>`
    height: ${({$space}) => $space}px;
`;

const Message = styled.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;
