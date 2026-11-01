import {useEffect, useRef, type ReactNode} from "react";
import styled from "styled-components";
import {wantsNewTab} from "../shortcuts";
import type {DirectoryListing, FileEntry} from "../api/files";
import {useIcon, useIconFile} from "../api/icons";
import {NoFind, rangesOf, type FindView} from "../find";
import {quickPlace, useQuickAccess} from "../quick";
import {formatBytes, formatDate} from "../utils/format";
import {FolderIcon} from "./Icons";
import {PlaceIcon} from "./PlaceIcon";
import {BuiltinIcon, iconForName} from "../icons/fileTypes";

interface FileListProps {
    listing: DirectoryListing | null;
    loading: boolean;
    error: string | null;
    /** The search that is open, if any; absent means "no search". */
    find?: FindView;
    onOpen: (path: string, newTab?: boolean) => void;
    /** Double-clicking a file hands it to the system; without this, files are inert. */
    onOpenFile?: (path: string) => void;
}

export function FileList({listing, loading, error, find = NoFind, onOpen, onOpenFile}: FileListProps) {
    const quick = useQuickAccess();
    const currentRow = useRef<HTMLDivElement | null>(null);

    // Typing a letter jumps to the first match; the row has to be brought into view with it.
    useEffect(() => {
        currentRow.current?.scrollIntoView({block: "nearest"});
    }, [find.currentPath]);

    if (error)
        return <Center><ErrorText>{error}</ErrorText></Center>;

    if (!listing && !loading)
        return <Center><Muted>Nothing selected.</Muted></Center>;

    const searching = find.query.length > 0;
    const folderSizes = listing?.folderSizes ?? {};
    const rows = listing
        ? listing.entries
            .map((entry) => {
                const place = quickPlace(quick, entry.fullPath);
                const label = place?.name || entry.name;

                return {entry, place, label, ranges: searching ? rangesOf(label, find) : null};
            })
            .filter((row) => !searching || find.mode === "dim" || row.ranges !== null)
        : [];

    return (
        <Wrapper>
            <Head>
                <span>Name</span>
                <span>Size</span>
                <span>Modified</span>
            </Head>

            <Body>
                {loading && !listing
                    ? <PlaceholderRows/>
                    : rows.map(({entry, place, label, ranges}) => {
                        const dim = searching && ranges === null;
                        const current = searching && entry.fullPath === find.currentPath;

                        return (
                            <Row
                                key={entry.fullPath}
                                $hidden={entry.isHidden}
                                $dim={dim}
                                $current={current}
                                onClick={(event) => entry.isDirectory && wantsNewTab(event) && onOpen(entry.fullPath, true)}
                                onDoubleClick={(event) => entry.isDirectory
                                    ? onOpen(entry.fullPath, wantsNewTab(event))
                                    : onOpenFile?.(entry.fullPath)}
                                ref={current ? currentRow : undefined}
                            >
                                <Name>
                                    {place && quick.useIcons
                                        ? <IconSlot><PlaceIcon place={place}/></IconSlot>
                                        : <EntryIcon entry={entry}/>}
                                    <span title={entry.name}><Highlighted name={label} ranges={ranges}/></span>
                                </Name>
                                <Size>{sizeOf(entry, folderSizes)}</Size>
                                <Modified>{formatDate(entry.modified)}</Modified>
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
        </Wrapper>
    );
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
 * Stand-in rows while the folder is read, so the columns keep their shape and the wait looks like
 * the contents filling in instead of the whole list disappearing.
 */
function PlaceholderRows() {
    const widths = [42, 58, 36, 64, 48, 54, 39, 61, 45, 50, 57, 43, 66, 47];

    return (
        <>
            {widths.map((width, index) => (
                <Skeleton key={index}>
                    <Name>
                        <Bone style={{flexShrink: 0, height: 18, width: 18}}/>
                        <Bone style={{width: `${width}%`}}/>
                    </Name>
                    <Bone style={{width: 44}}/>
                    <Bone style={{width: 92}}/>
                </Skeleton>
            ))}
        </>
    );
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
function EntryIcon({entry}: { entry: FileEntry }) {
    const shellIcon = useIcon(entry.fullPath, entry.isDirectory);
    const customFile = entry.iconSource?.startsWith("file:") ? entry.iconSource.slice(5) : null;
    const customImage = useIconFile(customFile);

    return (
        <IconSlot>
            {entry.iconSource?.startsWith("icon:")
                ? <BuiltinIcon name={entry.iconSource.slice(5)} size={18}/>
                : customImage
                    ? <img alt="" height={18} src={customImage} width={18}/>
                    : shellIcon
                        ? <img alt="" height={18} src={shellIcon} width={18}/>
                        : entry.isDirectory
                            ? <FolderIcon/>
                            : <BuiltinIcon name={iconForName(entry.name)}/>}
        </IconSlot>
    );
}

const IconSlot = styled.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    flex: 1;
`;

const Head = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) 110px 170px;
    gap: 16px;
    padding: 10px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`;

const Body = styled.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`;

/** A row that mirrors the real one but holds no content, for the moment before the listing lands. */
const Skeleton = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) 110px 170px;
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

const Row = styled.div<{ $hidden: boolean; $dim: boolean; $current: boolean }>`
    display: grid;
    grid-template-columns: minmax(0, 1fr) 110px 170px;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: ${({$current}) => $current ? "rgba(59, 130, 246, 0.14)" : "transparent"};
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

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const Size = styled.span`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`;

const Modified = styled.span`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`;

const Mark = styled.mark`
    border-radius: 2px;
    background: rgba(59, 130, 246, 0.5);
    color: var(--text-primary);
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
