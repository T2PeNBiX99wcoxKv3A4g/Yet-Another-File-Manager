import {useEffect, useMemo, useRef, useState, type ReactNode} from "react";
import styled from "styled-components";
import {wantsNewTab} from "../shortcuts";
import type {DirectoryListing, FileEntry, Place, ResolvedView} from "../api/files";
import {useIcon, useIconFile} from "../api/icons";
import {NoFind, rangesOf, type FindView} from "../find";
import {quickPlace, useQuickAccess} from "../quick";
import {formatBytes, formatDate} from "../utils/format";
import {FolderIcon} from "./Icons";
import {PlaceIcon} from "./PlaceIcon";
import {TagPicker} from "./TagPicker";
import {BuiltinIcon, iconForName} from "../icons/fileTypes";

/** The columns the list can show besides the name. `linkTarget` is drawn inside the name cell. */
export const ViewColumns: { id: string; label: string; width: number }[] = [
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
    onSort: (column: string) => void;
    onSetTags?: (name: string, tags: string[]) => void;
    onOpen: (path: string, newTab?: boolean) => void;
    /** Double-clicking a file hands it to the system; without this, files are inert. */
    onOpenFile?: (path: string) => void;
}

interface RowModel {
    entry: FileEntry;
    place?: Place;
    label: string;
    ranges: [number, number][] | null;
    tags: string[];
}

export function FileList({
    listing, loading, error, find = NoFind, view, onSort, onSetTags, onOpen, onOpenFile,
}: FileListProps) {
    const quick = useQuickAccess();
    const currentRow = useRef<HTMLDivElement | null>(null);
    const [tagTarget, setTagTarget] = useState<{ entry: FileEntry; x: number; y: number } | null>(null);

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

    if (error)
        return <Center><ErrorText>{error}</ErrorText></Center>;

    if (!listing && !loading)
        return <Center><Muted>Nothing selected.</Muted></Center>;

    if (view.mode === "grid")
        return (
            <Wrapper>
                <GridBody $size={view.iconSize}>
                    {loading && !listing
                        ? <PlaceholderTiles size={view.iconSize}/>
                        : rows.map((row) => (
                            <Tile
                                $current={searching && row.entry.fullPath === find.currentPath}
                                $dim={searching && row.ranges === null}
                                key={row.entry.fullPath}
                                onClick={(event) => row.entry.isDirectory && wantsNewTab(event) && onOpen(row.entry.fullPath, true)}
                                onDoubleClick={(event) => row.entry.isDirectory
                                    ? onOpen(row.entry.fullPath, wantsNewTab(event))
                                    : onOpenFile?.(row.entry.fullPath)}
                                ref={searching && row.entry.fullPath === find.currentPath ? currentRow : undefined}
                                title={row.entry.name}
                            >
                                <TileGlyph>
                                    {row.place && quick.useIcons
                                        ? <PlaceIcon place={row.place} size={view.iconSize}/>
                                        : <EntryIcon entry={row.entry} size={view.iconSize}/>}
                                </TileGlyph>
                                <TileName>
                                    <Highlighted name={row.label} ranges={row.ranges}/>
                                </TileName>
                                {showTarget && row.entry.linkTarget && (
                                    <TileLink title={row.entry.linkTarget}>→ {row.entry.linkTarget}</TileLink>
                                )}
                            </Tile>
                        ))}

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

            <Body>
                {loading && !listing
                    ? <PlaceholderRows template={template} columns={visible.length}/>
                    : rows.map((row) => {
                        const dim = searching && row.ranges === null;
                        const current = searching && row.entry.fullPath === find.currentPath;

                        return (
                            <Row
                                key={row.entry.fullPath}
                                $current={current}
                                $dim={dim}
                                $hidden={row.entry.isHidden}
                                onClick={(event) => row.entry.isDirectory && wantsNewTab(event) && onOpen(row.entry.fullPath, true)}
                                onDoubleClick={(event) => row.entry.isDirectory
                                    ? onOpen(row.entry.fullPath, wantsNewTab(event))
                                    : onOpenFile?.(row.entry.fullPath)}
                                ref={current ? currentRow : undefined}
                                style={{gridTemplateColumns: template}}
                            >
                                <Name>
                                    {row.place && quick.useIcons
                                        ? <IconSlot><PlaceIcon place={row.place} size={view.iconSize}/></IconSlot>
                                        : <EntryIcon entry={row.entry} size={view.iconSize}/>}
                                    <NameText title={row.entry.name}>
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
                                                    {row.tags.length > 0 ? row.tags.join(", ") : "+"}
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

            {tagTarget && listing && (
                <TagPicker
                    allTags={listing.allTags}
                    onChange={(tags) => onSetTags?.(tagTarget.entry.name, tags)}
                    onClose={() => setTagTarget(null)}
                    tags={listing.tags[tagTarget.entry.name] ?? []}
                    x={tagTarget.x}
                    y={tagTarget.y}
                />
            )}
        </Wrapper>
    );
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

/** What one list cell shows. */
function cellValue(column: string, entry: FileEntry, listing: DirectoryListing): string {
    switch (column) {
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
    const shellIcon = useIcon(entry.fullPath, entry.isDirectory);
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
                <Tile $dim={false} $current={false} key={index}>
                    <Bone style={{height: size, width: size}}/>
                    <Bone style={{height: 9, width: `${width}%`}}/>
                </Tile>
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

const GridBody = styled.div<{ $size: number }>`
    display: grid;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    grid-template-columns: repeat(auto-fill, minmax(${({$size}) => $size + 70}px, 1fr));
    grid-auto-rows: auto;
    gap: 10px;
    align-content: start;
    padding: 12px 14px 24px;
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

const Row = styled.div<{ $hidden: boolean; $dim: boolean; $current: boolean }>`
    display: grid;
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
`;

const NameText = styled.span`
    overflow: hidden;
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

/** The tags cell is a button so clicking it opens the picker. */
const TagsButton = styled.button`
    display: block;
    width: 100%;
    overflow: hidden;
    padding: 2px 4px;
    border: 1px dashed transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-secondary);
    }
`;

const Broken = styled.span`
    color: #fca5a5;
`;

const Tile = styled.div<{ $dim: boolean; $current: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    min-width: 0;
    padding: 12px 8px 10px;
    border: 1px solid ${({$current}) => $current ? "rgba(59, 130, 246, 0.5)" : "transparent"};
    border-radius: var(--radius-md);
    background: ${({$current}) => $current ? "rgba(59, 130, 246, 0.14)" : "transparent"};
    opacity: ${({$dim}) => $dim ? 0.3 : 1};
    cursor: default;
    user-select: none;
    transition: background 100ms ease, border-color 100ms ease, opacity 100ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color);
    }
`;

const TileGlyph = styled.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;

    img {
        display: block;
        object-fit: contain;
    }

    svg {
        color: var(--text-muted);
    }
`;

const TileName = styled.span`
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    color: var(--text-secondary);
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const TileLink = styled.span`
    width: 100%;
    overflow: hidden;
    padding: 0 2px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--accent-primary);
    text-align: center;
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
