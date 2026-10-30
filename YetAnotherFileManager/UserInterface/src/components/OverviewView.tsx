import {useEffect, useState} from "react";
import styled from "styled-components";
import {
    clearRecent,
    listDirectory,
    listPlaces,
    openFile,
    type DirectoryListing,
    type Drive,
    type Place,
    type RecentEntry,
} from "../api/files";
import {getSettings, pickFolder, pickIconFile, saveSettings, type AppSettings} from "../api/settings";
import {Native} from "@photino-net-utils/bridge";
import {useIcon} from "../api/icons";
import {FileList} from "./FileList";
import {ArrowUpIcon, CheckIcon, CrossIcon, DriveIcon, FileIcon, FolderIcon, ImageIcon, PencilIcon, PlusIcon, TextIcon} from "./Icons";
import {formatBytes, usageTone} from "../utils/format";
import {wantsNewTab} from "../shortcuts";
import {buildPanels, kindOfPanel, PanelGlyph, PanelIcons, type Panel, type PanelKind, type ViewMode} from "../panels";

interface OverviewViewProps {
    places: Place[];
    drives: Drive[];
    recent: RecentEntry[];
    recentLimit: number;
    homePath: string;
    onOpen: (path: string, newTab?: boolean) => void;
    onPlacesChanged: (places: Place[]) => void;
    onRecentCleared: () => void;
    onLayoutChanged?: () => void;
}

const Page = styled.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 14px 26px 34px;
`;

const Toolbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
    padding-bottom: 14px;
`;

const Segmented = styled.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`;

const Segment = styled.button<{ $active: boolean }>`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active}) => $active ? "rgba(99, 102, 241, 0.22)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-muted)"};
    font: inherit;
    font-size: 11px;
    cursor: pointer;
`;

const Ghost = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 8px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const Panels = styled.div<{ $columns: number }>`
    display: grid;
    grid-template-columns: repeat(${({$columns}) => $columns}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`;

const Section = styled.section<{ $hidden?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
    opacity: ${({$hidden}) => $hidden ? 0.45 : 1};
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`;

const HeadStart = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`;

const HeadEnd = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const Title = styled.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`;

const TitleInput = styled.input`
    width: 100%;
    max-width: 190px;
    padding: 3px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    outline: 0;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;
    font-weight: 600;

    &:focus {
        border-color: var(--border-color-focus);
    }
`;

const IconButton = styled.button<{ $active?: boolean }>`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    padding: 0;
    border: 1px solid ${({$active}) => $active ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: 5px;
    background: ${({$active}) => $active ? "rgba(99, 102, 241, 0.24)" : "var(--bg-input)"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-muted)"};
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }

    img {
        width: 14px;
        height: 14px;
        object-fit: contain;
    }
`;

const Places = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 10px;
`;

const Card = styled.div<{ $plain: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px 13px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    color: var(--text-primary);
    font: inherit;
    text-align: left;
    cursor: ${({$plain}) => $plain ? "default" : "pointer"};

    &:hover {
        border-color: ${({$plain}) => $plain ? "var(--border-color)" : "var(--border-color-hover)"};
        background: ${({$plain}) => $plain ? "var(--bg-card)" : "var(--bg-card-hover)"};
    }
`;

const Glyph = styled.span`
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 8px;
    background: rgba(99, 102, 241, 0.16);
    color: var(--accent-primary);

    img {
        width: 18px;
        height: 18px;
        object-fit: contain;
    }
`;

const CardText = styled.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }

    span {
        overflow: hidden;
        font-family: var(--font-mono);
        font-size: 10px;
        color: var(--text-muted);
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const Rows = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const Row = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 7px 10px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }
`;

const RowText = styled.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }

    span {
        overflow: hidden;
        font-family: var(--font-mono);
        font-size: 10px;
        color: var(--text-muted);
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const Bar = styled.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`;

const Fill = styled.span<{ $used: number; $tone: string }>`
    display: block;
    width: ${({$used}) => Math.min(Math.max($used, 0), 1) * 100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone}) => $tone};
`;

const Preview = styled.div`
    display: flex;
    flex-direction: column;
    height: 320px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow: hidden;

    & > div {
        min-height: 0;
    }
`;

const Scroller = styled.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`;

const Tiles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`;

const Tile = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 7px 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-card);
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    img {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        object-fit: contain;
    }

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const PlaceIconButton = styled.button<{ $inline?: boolean }>`
    position: ${({$inline}) => $inline ? "static" : "absolute"};
    top: ${({$inline}) => $inline ? "auto" : "5px"};
    right: ${({$inline}) => $inline ? "auto" : "5px"};
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    border: 0;
    border-radius: 5px;
    background: rgba(148, 163, 184, 0.18);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: rgba(99, 102, 241, 0.28);
        color: #c7d2fe;
    }
`;

const Empty = styled.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`;

const Picker = styled.div`
    position: sticky;
    bottom: 0;
    display: flex;
    gap: 4px;
    margin-top: 14px;
    padding: 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
`;



export function OverviewView({
    places,
    drives,
    recent,
    recentLimit,
    homePath,
    onOpen,
    onPlacesChanged,
    onRecentCleared,
    onLayoutChanged,
}: OverviewViewProps) {
    const [editing, setEditing] = useState(false);
    const [settings, setSettings] = useState<AppSettings | null>(null);
    const [iconFor, setIconFor] = useState<string | null>(null);
    const [placeIconFor, setPlaceIconFor] = useState<string | null>(null);

    useEffect(() => {
        void getSettings().then(setSettings, () => setSettings(null));
    }, []);

    const panels = buildPanels(settings);

    // The overview watches every folder it shows; the tab it lives in is the only one that matters.
    useEffect(() => {
        if (!Native.available) return;

        const paths = panels
            .filter((panel) => panel.kind === "home" || panel.kind === "folder")
            .map((panel) => panel.path ?? homePath)
            .filter((path) => path.length > 0);

        Native.send({type: "fs.watch", payload: {paths}});
    }, [panels.map((panel) => panel.path ?? panel.id).join("|"), homePath]);

    const setPlaceIcon = async (path: string, icon: string | null) => {
        const icons = {...settings?.placeIcons};

        if (icon) icons[path] = icon;
        else delete icons[path];

        setPlaceIconFor(null);
        await save({placeIcons: icons});
        onPlacesChanged(await listPlaces());
    };
    const columns = settings?.overviewColumns ?? 1;
    const hidden = settings?.overviewHidden ?? [];

    const save = async (patch: Partial<AppSettings>) => {
        if (!settings) return;

        const next = {...settings, ...patch};
        setSettings(await saveSettings(next));
        onLayoutChanged?.();
    };

    const ids = panels.map((panel) => panel.id);

    const move = (id: string, offset: number) => {
        const index = ids.indexOf(id);
        const target = index + offset;
        if (index < 0 || target < 0 || target >= ids.length) return;

        const next = [...ids];
        [next[index], next[target]] = [next[target], next[index]];
        void save({overviewPanels: next});
    };

    const rename = (id: string, value: string) => {
        const titles = {...settings?.overviewTitles};
        const trimmed = value.trim();

        if (trimmed.length > 0) titles[id] = trimmed;
        else delete titles[id];

        void save({overviewTitles: titles});
    };

    const setView = (id: string, view: ViewMode) =>
        void save({overviewViews: {...settings?.overviewViews, [id]: view}});

    const togglePin = (id: string) =>
        void save({overviewPinned: panels.find((panel) => panel.id === id)?.pinned
            ? (settings?.overviewPinned ?? []).filter((item) => item !== id)
            : [...(settings?.overviewPinned ?? []), id]});

    const toggleHidden = (id: string) =>
        void save({overviewHidden: hidden.includes(id) ? hidden.filter((item) => item !== id) : [...hidden, id]});

    const remove = (id: string) => {
        const next = ids.filter((item) => item !== id);
        void save({overviewPanels: next});
    };

    const setIcon = (id: string, icon: string | null) => {
        const icons = {...settings?.overviewIcons};

        if (icon) icons[id] = icon;
        else delete icons[id];

        setIconFor(null);
        void save({overviewIcons: icons});
    };

    /** Adds another block of a kind; "quick", "quick:2", … so each block is independent. */
    const addBlock = async (kind: PanelKind) => {
        if (!settings) return;

        if (kind === "folder") {
            const folder = await pickFolder();
            if (!folder) return;

            const id = `folder:${folder}`;
            if (!ids.includes(id)) await save({overviewPanels: [...ids, id]});
            return;
        }

        const count = ids.filter((id) => kindOfPanel(id) === kind).length;
        const id = count === 0 ? kind : `${kind}:${count + 1}`;
        await save({overviewPanels: [...ids, id]});
    };

    const body = (panel: Panel) => {
        if (panel.view === "grid" && panel.kind === "recent")
            return (
                <Places>
                    {recent.slice(0, recentLimit).map((entry) => (
                        <Card
                            key={entry.path}
                            $plain={false}
                            onClick={(event) => entry.isDirectory
                                ? onOpen(entry.path, wantsNewTab(event))
                                : void openFile(entry.path)}
                            title={entry.path}
                        >
                            <Glyph>{entry.isDirectory ? <FolderIcon size={18}/> : <FileIcon size={18}/>}</Glyph>
                            <CardText>
                                <strong>{entry.name}</strong>
                                <span>{entry.path}</span>
                            </CardText>
                        </Card>
                    ))}
                </Places>
            );

        if (panel.view === "grid" && panel.kind === "drives")
            return (
                <Places>
                    {drives.map((drive) => (
                        <Card
                            key={drive.name}
                            $plain={false}
                            onClick={(event) => onOpen(drive.name, wantsNewTab(event))}
                            title={drive.name}
                        >
                            <Glyph><DriveIcon size={18}/></Glyph>
                            <CardText>
                                <strong>{drive.label || drive.name}</strong>
                                <span>{formatBytes(drive.freeSpace)} free of {formatBytes(drive.totalSize)}</span>
                            </CardText>
                        </Card>
                    ))}
                </Places>
            );

        switch (panel.kind) {
            case "quick":
                return panel.view === "grid"
                    ? (
                        <Places>
                            {places.map((place) => (
                                <Card
                                    key={place.path}
                                    $plain={editing}
                                    onClick={(event) => !editing && onOpen(place.path, wantsNewTab(event))}
                                    title={place.path}
                                >
                                    {editing && (
                                        <PlaceIconButton
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setPlaceIconFor(placeIconFor === place.path ? null : place.path);
                                            }}
                                            title="Icon"
                                            type="button"
                                        >
                                            <ImageIcon size={11}/>
                                        </PlaceIconButton>
                                    )}
                                    <Glyph><FolderIcon size={18}/></Glyph>
                                    <CardText>
                                        <strong>{place.name}</strong>
                                        <span>{place.path}</span>
                                    </CardText>
                                </Card>
                            ))}
                        </Places>
                    )
                    : (
                        <Rows>
                            {places.map((place) => (
                                <Row
                                    key={place.path}
                                    onClick={(event) => !editing && onOpen(place.path, wantsNewTab(event))}
                                    title={place.path}
                                    type="button"
                                >
                                    <FolderIcon size={15}/>
                                    <RowText>
                                        <strong>{place.name}</strong>
                                        <span>{place.path}</span>
                                    </RowText>
                                    {editing && (
                                        <PlaceIconButton
                                            $inline
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setPlaceIconFor(placeIconFor === place.path ? null : place.path);
                                            }}
                                            title="Icon"
                                            type="button"
                                        >
                                            <ImageIcon size={11}/>
                                        </PlaceIconButton>
                                    )}
                                </Row>
                            ))}
                        </Rows>
                    );

            case "recent":
                return recent.length === 0
                    ? <Empty>Folders you open show up here.</Empty>
                    : (
                        <Rows>
                            {recent.slice(0, recentLimit).map((entry) => (
                                <Row
                                    key={entry.path}
                                    onClick={(event) => onOpen(entry.path, wantsNewTab(event))}
                                    title={entry.path}
                                    type="button"
                                >
                                    <FolderIcon size={15}/>
                                    <RowText>
                                        <strong>{entry.name}</strong>
                                        <span>{entry.path}</span>
                                    </RowText>
                                </Row>
                            ))}
                        </Rows>
                    );

            case "drives":
                return (
                    <Rows>
                        {drives.map((drive) => {
                            const used = drive.totalSize > 0 ? 1 - drive.freeSpace / drive.totalSize : 0;

                            return (
                                <Row
                                    key={drive.name}
                                    onClick={(event) => onOpen(drive.name, wantsNewTab(event))}
                                    title={drive.name}
                                    type="button"
                                >
                                    <DriveIcon size={18}/>
                                    <RowText>
                                        <strong>{drive.label || drive.name}</strong>
                                        <span>{formatBytes(drive.freeSpace)} free of {formatBytes(drive.totalSize)}</span>
                                    </RowText>
                                    <Bar><Fill $used={used} $tone={usageTone(used)}/></Bar>
                                </Row>
                            );
                        })}
                    </Rows>
                );

            default:
                return <FolderBody mode={panel.view} onOpen={onOpen} path={panel.path ?? homePath}/>;
        }
    };

    return (
        <Page>
            <Toolbar>
                <Segmented role="group" title="Columns">
                    {[1, 2, 3].map((count) => (
                        <Segment
                            key={count}
                            $active={columns === count}
                            onClick={() => void save({overviewColumns: count})}
                            title={`${count} column${count > 1 ? "s" : ""}`}
                            type="button"
                        >
                            {count}
                        </Segment>
                    ))}
                </Segmented>

                {editing && (
                    <>
                        {(["quick", "recent", "drives", "folder"] as PanelKind[]).map((kind) => (
                            <Ghost key={kind} onClick={() => void addBlock(kind)} title={`Add a ${kind} block`} type="button">
                                <PlusIcon size={12}/>
                                {kind === "quick" ? "Quick access" : kind === "recent" ? "Recent" : kind === "drives" ? "This PC" : "Folder"}
                            </Ghost>
                        ))}
                    </>
                )}

                <Ghost onClick={() => setEditing((current) => !current)} title={editing ? "Done" : "Edit"} type="button">
                    {editing ? <CheckIcon size={13}/> : <PencilIcon size={13}/>}
                    {editing ? "Done" : "Edit"}
                </Ghost>
            </Toolbar>

            <Panels $columns={columns}>
                {panels
                    .filter((panel) => editing || (!hidden.includes(panel.id)
                        && (panel.kind !== "recent" || (recentLimit > 0 && recent.length > 0))))
                    .map((panel) => {
                        const index = ids.indexOf(panel.id);
                        const isHidden = hidden.includes(panel.id);

                        return (
                            <Section key={panel.id} $hidden={isHidden}>
                                <Head>
                                    <HeadStart>
                                        <PanelGlyph panel={panel} size={15}/>

                                        {editing
                                            ? (
                                                <TitleInput
                                                    defaultValue={panel.title}
                                                    onBlur={(event) => rename(panel.id, event.target.value)}
                                                    onKeyDown={(event) => {
                                                        if (event.key === "Enter") (event.target as HTMLInputElement).blur();
                                                    }}
                                                />
                                            )
                                            : <Title>{panel.title}</Title>}
                                    </HeadStart>

                                    <HeadEnd>
                                        {!editing && panel.kind === "recent" && recent.length > 0 && (
                                            <Ghost onClick={() => void clearRecent().then(onRecentCleared)} title="Clear" type="button">
                                                Clear
                                            </Ghost>
                                        )}

                                        {!editing && (panel.kind === "home" || panel.kind === "folder") && (
                                            <Ghost onClick={() => onOpen(panel.path ?? homePath)} title="Open folder" type="button">
                                                Open
                                            </Ghost>
                                        )}

                                        {editing && (
                                            <>
                                                <IconButton
                                                    onClick={() => setIconFor(iconFor === panel.id ? null : panel.id)}
                                                    title="Icon"
                                                    type="button"
                                                >
                                                    <ImageIcon size={12}/>
                                                </IconButton>
                                                <IconButton
                                                    $active={panel.pinned}
                                                    onClick={() => togglePin(panel.id)}
                                                    title={panel.pinned ? "Unpin from the sidebar" : "Pin to the sidebar"}
                                                    type="button"
                                                >
                                                    <PinMark/>
                                                </IconButton>
                                                <IconButton
                                                    $active={panel.view === "list"}
                                                    onClick={() => setView(panel.id, "list")}
                                                    title="List"
                                                    type="button"
                                                >
                                                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
                                                         stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                                                        <path d="M8.5 6h11M8.5 12h11M8.5 18h11"/>
                                                        <path d="M4 6h.01M4 12h.01M4 18h.01"/>
                                                    </svg>
                                                </IconButton>
                                                <IconButton
                                                    $active={panel.view === "grid"}
                                                    onClick={() => setView(panel.id, "grid")}
                                                    title="Grid"
                                                    type="button"
                                                >
                                                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
                                                         stroke="currentColor" strokeWidth="1.8">
                                                        <rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/>
                                                        <rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/>
                                                        <rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/>
                                                        <rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>
                                                    </svg>
                                                </IconButton>
                                                <IconButton
                                                    disabled={index === 0}
                                                    onClick={() => move(panel.id, -1)}
                                                    title="Move up"
                                                    type="button"
                                                >
                                                    <ArrowUpIcon size={12}/>
                                                </IconButton>
                                                <IconButton
                                                    disabled={index === ids.length - 1}
                                                    onClick={() => move(panel.id, 1)}
                                                    title="Move down"
                                                    type="button"
                                                >
                                                    <ArrowUpIcon size={12}/>
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => panel.kind === "folder" ? remove(panel.id) : toggleHidden(panel.id)}
                                                    title={panel.kind === "folder" ? "Remove" : isHidden ? "Show" : "Hide"}
                                                    type="button"
                                                >
                                                    {panel.kind === "folder" || !isHidden ? <CrossIcon size={12}/> : <CheckIcon size={12}/>}
                                                </IconButton>
                                            </>
                                        )}
                                    </HeadEnd>
                                </Head>

                                {body(panel)}
                            </Section>
                        );
                    })}
            </Panels>

            {editing && placeIconFor && (
                <Picker>
                    {Object.keys(PanelIcons).map((name) => (
                        <IconButton key={name} onClick={() => void setPlaceIcon(placeIconFor, name)} title={name} type="button">
                            {PanelIcons[name](16)}
                        </IconButton>
                    ))}
                    <IconButton onClick={() => void setPlaceIcon(placeIconFor, null)} title="Default" type="button">
                        <CrossIcon size={12}/>
                    </IconButton>
                    <Ghost
                        onClick={async () => {
                            const file = await pickIconFile();
                            if (file) await setPlaceIcon(placeIconFor, `file:${file}`);
                        }}
                        title="Choose an image"
                        type="button"
                    >
                        <PlusIcon size={13}/>
                        Image
                    </Ghost>
                </Picker>
            )}

            {editing && iconFor && (
                <Picker>
                    {Object.keys(PanelIcons).map((name) => (
                        <IconButton key={name} onClick={() => setIcon(iconFor, name)} title={name} type="button">
                            {PanelIcons[name](16)}
                        </IconButton>
                    ))}
                    <IconButton onClick={() => setIcon(iconFor, null)} title="Default" type="button">
                        <CrossIcon size={12}/>
                    </IconButton>
                    <Ghost
                        onClick={async () => {
                            const file = await pickIconFile();
                            if (file) setIcon(iconFor, `file:${file}`);
                        }}
                        title="Choose an image"
                        type="button"
                    >
                        <PlusIcon size={13}/>
                        Image
                    </Ghost>
                </Picker>
            )}
        </Page>
    );
}

/** One folder rendered as a panel: a table or a grid of its entries. */
function FolderBody({path, mode, onOpen}: { path: string; mode: ViewMode; onOpen: (path: string, newTab?: boolean) => void }) {
    const [listing, setListing] = useState<DirectoryListing | null>(null);

    useEffect(() => {
        if (!path) return;

        // Sizes are measured once, when the overview is entered; refreshing never re-measures.
        setListing(null);
        listDirectory(path).then(setListing, () => setListing(null));
    }, [path]);

    // The folder is one of the ones the overview watches, so it keeps itself current.
    useEffect(() => {
        if (!Native.available) return;

        return Native.on((evt) => {
            const event = evt as { type?: string; data?: { path?: string } };
            if (event.type !== "fs.changed" || typeof event.data?.path !== "string") return;
            if (event.data.path.replace(/[\\\\/]+$/, "").toLowerCase() !== path.replace(/[\\\\/]+$/, "").toLowerCase()) return;

            void listDirectory(path).then(setListing, () => undefined);
        });
    }, [path]);

    if (!listing)
        return <Empty>Reading…</Empty>;

    if (mode === "list")
        return (
            <Preview>
                <FileList
                    error={null}
                    filter=""
                    listing={listing}
                    loading={false}
                    onOpen={onOpen}
                    onOpenFile={(file) => void openFile(file)}
                />
            </Preview>
        );

    return (
        <Scroller>
        <Tiles>
            {listing.entries.map((entry) => (
                <Tile
                    key={entry.fullPath}
                    onClick={(event) => entry.isDirectory
                        ? onOpen(entry.fullPath, wantsNewTab(event))
                        : void openFile(entry.fullPath)}
                    title={entry.name}
                    type="button"
                >
                    <EntryGlyph entry={entry}/>
                    <span>{entry.name}</span>
                </Tile>
            ))}
        </Tiles>
        </Scroller>
    );
}

function EntryGlyph({entry}: { entry: DirectoryListing["entries"][number] }) {
    const icon = useIcon(entry.fullPath, entry.isDirectory);

    if (icon) return <img alt="" src={icon}/>;

    return entry.isDirectory ? <FolderIcon size={16}/> : <TextIcon size={16}/>;
}

/** A small pin, drawn inline so the header does not need another icon file. */
function PinMark() {
    return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8"
             strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 3h6l-1 6 3 3H7l3-3z"/>
            <path d="M12 12v8"/>
        </svg>
    );
}
