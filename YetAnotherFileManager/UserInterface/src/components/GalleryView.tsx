import {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {listGallery, type GalleryEntry} from "../api/files";
import {useThumbnail} from "../api/icons";
import {formatBytes} from "../utils/format";
import {ImageIcon, RefreshIcon} from "./Icons";

/** A wall of thumbnails from the configured folders, newest first. */
export function GalleryView() {
    const [entries, setEntries] = useState<GalleryEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const reload = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            setEntries(await listGallery());
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : String(cause));
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void reload();
    }, [reload]);

    return (
        <Page>
            <Header>
                <Heading>
                    <ImageIcon size={16}/>
                    <span>Gallery</span>
                    <Count>{loading ? "…" : `${entries.length} pictures`}</Count>
                </Heading>

                <IconButton onClick={() => void reload()} title="Refresh" type="button">
                    <RefreshIcon size={14}/>
                </IconButton>
            </Header>

            {error && <Message>{error}</Message>}
            {!error && !loading && entries.length === 0 && <Message>No pictures found.</Message>}

            <Grid>
                {entries.map((entry) => (
                    <Tile key={entry.path} entry={entry}/>
                ))}
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
            {rootMargin: "300px"});

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    return (
        <Cell ref={element} title={`${entry.name} · ${formatBytes(entry.size)}`}>
            {thumbnail
                ? <img alt="" loading="lazy" src={thumbnail}/>
                : <Placeholder><ImageIcon size={22}/></Placeholder>}
            <Caption>{entry.name}</Caption>
        </Cell>
    );
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
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
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

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    /* Explicit row height: an auto row collapses to nothing in Chromium when the tile is a shrinking
       flex box, which once left the gallery as a wall of empty strips. */
    grid-auto-rows: 124px;
    gap: 12px;
    padding: 16px 22px 26px;
    overflow-y: auto;
    align-content: start;
    flex: 1;
    min-height: 0;
`;

const Cell = styled.div`
    position: relative;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(15, 23, 42, 0.6);
    overflow: hidden;
    transition: border-color 120ms ease, transform 120ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        transform: translateY(-1px);
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
    display: grid;
    place-items: center;
    color: var(--text-muted);
`;

/** The name sits on the picture itself, on a scrim so it stays readable over bright photos. */
const Caption = styled.span`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 18px 8px 6px;
    background: linear-gradient(to top, rgba(2, 6, 23, 0.88), rgba(2, 6, 23, 0));
    overflow: hidden;
    font-size: 11px;
    color: #e5e7eb;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Message = styled.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;