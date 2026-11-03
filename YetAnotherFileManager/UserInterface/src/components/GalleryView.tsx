import {startTransition, useCallback, useEffect, useMemo, useRef, useState} from "react";
import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";
import {
    listGallery,
    openFile,
    type DirectoryListing,
    type FileEntry,
    type GalleryEntry,
    type ResolvedView,
} from "../api/files";
import type {ShortcutMap} from "../shortcuts";
import {appLocale} from "../utils/format";
import {RefreshIcon} from "./Icons";
import {FileList} from "./FileList";

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
    /** Ask before moving a picture to the recycle bin, following the file browser's setting. */
    confirmDelete?: boolean;
    /** The window's key bindings, so the gallery behaves like the file browser. */
    shortcuts?: ShortcutMap;
    /** The grid size and icon size of the file browser. */
    view: ResolvedView;
}

/**
 * A wall of thumbnails from the configured folders, newest first, grouped by day. Selection,
 * keyboard handling and the context menu are the file browser's own grid, not a copy of it.
 */
export function GalleryView({
    openOnSingleClick = false,
    showCheckboxes = true,
    confirmDelete = false,
    shortcuts,
    view,
}: GalleryViewProps) {
    const t = useTranslation();
    const [entries, setEntries] = useState<GalleryEntry[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [busy, setBusy] = useState(false);

    const entriesRef = useRef<GalleryEntry[]>([]);
    const totalRef = useRef(0);
    const loadingMore = useRef(false);
    const loadingRef = useRef(true);
    const generation = useRef(0);
    const sentinel = useRef<HTMLDivElement | null>(null);
    const scrollTick = useRef(0);

    const load = useCallback(async (refresh: boolean) => {
        const token = ++generation.current;

        setLoading(true);
        loadingRef.current = true;
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
            if (token === generation.current) {
                loadingRef.current = false;
                setLoading(false);
            }
        }
    }, []);

    useEffect(() => {
        void load(false);
    }, [load]);

    /**
     * Pulls a few pages at once. The grid calls this before the bottom is reached, so the wall keeps
     * filling while the user is still looking at pictures that are already there.
     */
    const loadMore = useCallback(async () => {
        if (loadingRef.current || loadingMore.current || entriesRef.current.length >= totalRef.current)
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

    /** Starts loading while the grid still has a few screens to go. */
    const onScroll = useCallback((element: HTMLDivElement) => {
        if (scrollTick.current)
            return;

        scrollTick.current = window.requestAnimationFrame(() => {
            scrollTick.current = 0;

            const remaining = element.scrollHeight - element.scrollTop - element.clientHeight;
            if (remaining < PrefetchDistance)
                void loadMore();
        });
    }, [loadMore]);

    // The observer covers the case where the whole first page fits on screen and no scroll event
    // ever happens. Its root is the grid the sentinel lives in, so it follows the real scrollbar.
    useEffect(() => {
        const target = sentinel.current;
        if (!target)
            return;

        const observer = new IntersectionObserver(
            (rows) => {
                if (rows.some((row) => row.isIntersecting))
                    void loadMore();
            },
            {root: target.parentElement, rootMargin: `${PrefetchDistance}px 0px`},
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
            const element = sentinel.current?.parentElement;
            if (!element)
                return;

            const remaining = element.scrollHeight - element.scrollTop - element.clientHeight;
            if (remaining < PrefetchDistance)
                void loadMore();
        }, 200);

        return () => window.clearTimeout(timer);
    }, [entries.length, total, loadMore]);

    const listing = useMemo<DirectoryListing>(() => ({
        path: "",
        parent: null,
        entries: entries.map(asFileEntry),
        folderSizes: {},
        view: null,
        tags: {},
        tagColors: {},
        allTags: [],
        counts: {},
    }), [entries]);

    const galleryView = useMemo<ResolvedView>(() => ({
        ...view,
        mode: "grid",
        sort: "modified",
        sortDescending: true,
        columns: [],
    }), [view]);

    const open = useCallback((path: string) => {
        void openFile(path);
    }, []);

    /** Pictures arrive newest first, so one calendar day is one contiguous section. */
    const groupOf = useCallback((entry: FileEntry) => {
        const label = dayLabel(entry.modified);
        return {id: label, label};
    }, []);

    const refresh = () => {
        setBusy(true);
        void load(true).finally(() => setBusy(false));
    };

    const hasMore = entries.length < total;

    return (
        <Page>
            <Header>
                <Heading>
                    <span>{t("Gallery")}</span>
                    <Count>{loading ? t("scanning…") : t("{shown} of {total} pictures", {shown: entries.length, total})}</Count>
                </Heading>

                <IconButton onClick={refresh} title={t("Scan the folders again")} type="button">
                    <Spin $spinning={busy}><RefreshIcon size={14}/></Spin>
                </IconButton>
            </Header>

            {error && <Message>{error}</Message>}
            {!error && !loading && total === 0 && <Message>{t("No pictures found.")}</Message>}

            {!error && (loading || total > 0) && (
                <FileList
                    confirmDelete={confirmDelete}
                    listing={loading && entries.length === 0 ? null : listing}
                    loading={loading}
                    error={null}
                    view={galleryView}
                    showImages={false}
                    showDetails={false}
                    showCheckboxes={showCheckboxes}
                    openOnSingleClick={openOnSingleClick}
                    shortcuts={shortcuts}
                    onSort={() => undefined}
                    onOpen={open}
                    onOpenFile={open}
                    onRefresh={refresh}
                    groupOf={groupOf}
                    onGridScroll={onScroll}
                    gridFooter={<Sentinel $space={hasMore ? MoreSpace : 1} ref={sentinel}/>}
                    allowBackgroundMenu={false}
                />
            )}
        </Page>
    );
}

/** The gallery's rows are ordinary files; only their paths span several folders. */
function asFileEntry(entry: GalleryEntry): FileEntry {
    return {
        name: entry.name,
        fullPath: entry.path,
        isDirectory: false,
        size: entry.size,
        modified: entry.modified,
        created: entry.modified,
        isHidden: false,
        isSystem: false,
        iconSource: null,
        linkTarget: null,
        linkValid: null,
        linkCount: 0,
    };
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

const Sentinel = styled.div<{ $space: number }>`
    height: ${({$space}) => $space}px;
`;

const Message = styled.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;
