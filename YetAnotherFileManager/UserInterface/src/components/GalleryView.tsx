import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import styled from "styled-components";
import {listGallery, type GalleryEntry} from "../api/files";
import {useThumbnail} from "../api/icons";
import {formatBytes} from "../utils/format";
import {RefreshIcon} from "./Icons";

/** How many pictures one request carries; the rest arrive while the user scrolls. */
const PageSize = 150;

/** A wall of thumbnails from the configured folders, newest first, grouped by day. */
export function GalleryView() {
    const [entries, setEntries] = useState<GalleryEntry[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [busy, setBusy] = useState(false);

    const loadingMore = useRef(false);
    const sentinel = useRef<HTMLDivElement | null>(null);

    const load = useCallback(async (refresh: boolean) => {
        setLoading(true);
        setError(null);

        try {
            const page = await listGallery(0, PageSize, refresh);
            setEntries(page.entries);
            setTotal(page.total);
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : String(cause));
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void load(false);
    }, [load]);

    // The next page is asked for before the sentinel is actually visible, so the wall keeps filling
    // while the user is still looking at the pictures that are already there.
    const loadMore = useCallback(async () => {
        if (loadingMore.current) return;

        loadingMore.current = true;

        try {
            const page = await listGallery(entries.length, PageSize, false);

            setEntries((current) => [...current, ...page.entries]);
            setTotal(page.total);
        } catch {
            // A failed page is not worth a banner; scrolling again asks once more.
        } finally {
            loadingMore.current = false;
        }
    }, [entries.length]);

    useEffect(() => {
        const target = sentinel.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            (rows) => {
                if (rows.some((row) => row.isIntersecting) && entries.length < total)
                    void loadMore();
            },
            {rootMargin: "800px"});

        observer.observe(target);
        return () => observer.disconnect();
    }, [entries.length, total, loadMore]);

    const groups = useMemo(() => byDay(entries), [entries]);

    const refresh = () => {
        setBusy(true);
        void load(true).finally(() => setBusy(false));
    };

    return (
        <Page>
            <Header>
                <Heading>
                    <span>Gallery</span>
                    <Count>{loading ? "scanning…" : `${entries.length} of ${total} pictures`}</Count>
                </Heading>

                <IconButton onClick={refresh} title="Scan the folders again" type="button">
                    <Spin $spinning={busy}><RefreshIcon size={14}/></Spin>
                </IconButton>
            </Header>

            {error && <Message>{error}</Message>}
            {!error && !loading && total === 0 && <Message>No pictures found.</Message>}

            <Grid>
                {groups.map((group) => (
                    <Group key={group.label}>
                        <GroupTitle>{group.label}</GroupTitle>
                        <Tiles>
                            {group.entries.map((entry) => (
                                <Tile key={entry.path} entry={entry}/>
                            ))}
                        </Tiles>
                    </Group>
                ))}

                <Sentinel ref={sentinel}/>
            </Grid>
        </Page>
    );
}

/** Thumbnails are only asked for once a tile is near the viewport, so a big library still opens fast. */
function Tile({entry}: { entry: GalleryEntry }) {
    const element = useRef<HTMLDivElement | null>(null);
    const [nearby, setNearby] = useState(false);
    const thumbnail = useThumbnail(nearby ? entry.path : null, 128);

    useEffect(() => {
        const target = element.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            (rows) => {
                if (rows.some((row) => row.isIntersecting))
                    setNearby(true);
            },
            // Ask well before the tile is on screen, so scrolling does not wait for the shell.
            {rootMargin: "1000px"});

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    return (
        <Cell ref={element} title={entry.name}>
            {thumbnail
                ? <img alt="" decoding="async" loading="lazy" src={thumbnail}/>
                : <Placeholder/>}
            <Caption>
                <CaptionName>{entry.name}</CaptionName>
                <CaptionMeta>{`${typeOf(entry.name)} · ${formatBytes(entry.size)}`}</CaptionMeta>
            </Caption>
        </Cell>
    );
}

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
    if (days < 7) return date.toLocaleDateString(undefined, {weekday: "long"});

    return date.toLocaleDateString(undefined, {year: "numeric", month: "long", day: "numeric"});
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

const Cell = styled.div`
    position: relative;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(15, 23, 42, 0.6);
    overflow: hidden;
    /* Tiles far below the viewport are laid out but not painted, which is what keeps a long
       scroll smooth. */
    content-visibility: auto;
    contain-intrinsic-size: 124px 200px;
    transition: border-color 120ms ease;

    &:hover {
        border-color: var(--border-color-hover);
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Placeholder = styled.div`
    position: absolute;
    inset: 0;
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

const Sentinel = styled.div`
    height: 1px;
`;

const Message = styled.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;
