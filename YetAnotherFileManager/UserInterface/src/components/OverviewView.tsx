import {useEffect, useMemo, useState, type ReactNode} from "react";
import styled from "styled-components";
import {
    clearRecent,
    listDirectory,
    listPlaces,
    openFile,
    renamePlace,
    setPlaces,
    type DirectoryListing,
    type Drive,
    type Place,
    type RecentEntry,
} from "../api/files";
import {getSettings, pickFolder, pickIconFile, saveSettings, type AppSettings} from "../api/settings";
import {useIcon, useIconFile} from "../api/icons";
import {FileList} from "./FileList";
import {
    ArrowUpIcon,
    CheckIcon,
    CodeIcon,
    CrossIcon,
    DriveIcon,
    FolderIcon,
    HomeIcon,
    ImageIcon,
    PencilIcon,
    PlusIcon,
    TextIcon,
} from "./Icons";
import {formatBytes, usageTone} from "../utils/format";
import {wantsNewTab} from "../shortcuts";

interface OverviewViewProps {
    places: Place[];
    drives: Drive[];
    recent: RecentEntry[];
    recentLimit: number;
    homePath: string;
    onOpen: (path: string, newTab?: boolean) => void;
    onPlacesChanged: (places: Place[]) => void;
    onRecentCleared: () => void;
}

type PanelKind = "quick" | "recent" | "home" | "drives" | "folder";
type ViewMode = "list" | "grid";

interface Panel {
    id: string;
    kind: PanelKind;
    path?: string;
    title: string;
    view: ViewMode;
}

const DefaultPanels = ["quick", "recent", "home", "drives"];

const DefaultTitles: Record<string, string> = {
    quick: "Quick access",
    recent: "Recent",
    home: "Home",
    drives: "This PC",
};

/** Built-in icons the user can give a quick-access folder. */
const PlaceIcons: Record<string, (size: number) => ReactNode> = {
    folder: (size) => <FolderIcon size={size}/>,
    home: (size) => <HomeIcon size={size}/>,
    drive: (size) => <DriveIcon size={size}/>,
    image: (size) => <ImageIcon size={size}/>,
    text: (size) => <TextIcon size={size}/>,
    code: (size) => <CodeIcon size={size}/>,
};

/**
 * The overview is a page of panels: pinned folders, recent folders and any other folder the user
 * wants to keep an eye on. Order, titles, which panel shows and how each one lays out are the
 * user's, and every list can be switched between list and grid on its own.
 */
export function OverviewView({
    places,
    drives,
    recent,
    recentLimit,
    homePath,
    onOpen,
    onPlacesChanged,
    onRecentCleared,
}: OverviewViewProps) {
    const [editing, setEditing] = useState(false);
    const [renaming, setRenaming] = useState<string | null>(null);
    const [draft, setDraft] = useState("");
    const [iconsFor, setIconsFor] = useState<string | null>(null);
    const [settings, setSettings] = useState<AppSettings | null>(null);

    useEffect(() => {
        void getSettings().then(setSettings, () => setSettings(null));
    }, []);

    const panels = useMemo(() => buildPanels(settings), [settings]);
    const columns = settings?.overviewColumns ?? 1;

    const save = async (patch: Partial<AppSettings>) => {
        if (!settings) return;

        const next = {...settings, ...patch};
        setSettings(next);
        setSettings(await saveSettings(next));
    };

    const panelIds = panels.map((panel) => panel.id);

    const move = (id: string, offset: number) => {
        const index = panelIds.indexOf(id);
        const target = index + offset;
        if (index < 0 || target < 0 || target >= panelIds.length) return;

        const next = [...panelIds];
        [next[index], next[target]] = [next[target], next[index]];
        void save({overviewPanels: next});
    };

    const hidden = settings?.overviewHidden ?? [];

    const togglePanel = (id: string) =>
        void save({overviewHidden: hidden.includes(id) ? hidden.filter((item) => item !== id) : [...hidden, id]});

    const removePanel = async (id: string) => {
        const next = panelIds.filter((item) => item !== id);
        await save({overviewPanels: next.length > 0 ? next : DefaultPanels});
    };

    const rename = async (id: string, title: string) => {
        const titles = {...settings?.overviewTitles};
        const trimmed = title.trim();

        if (trimmed.length > 0) titles[id] = trimmed;
        else delete titles[id];

        await save({overviewTitles: titles});
    };

    const setView = (id: string, view: ViewMode) =>
        void save({overviewViews: {...settings?.overviewViews, [id]: view}});

    const addPanel = async () => {
        const folder = await pickFolder();
        if (!folder) return;

        const id = `folder:${folder}`;
        if (panelIds.includes(id)) return;

        await save({overviewPanels: [...panelIds, id]});
    };

    const setPlaceName = async (path: string, name: string) => {
        const trimmed = name.trim();
        setRenaming(null);
        onPlacesChanged(await renamePlace(path, trimmed.length > 0 ? trimmed : null));
    };

    const setPlaceIcon = async (path: string, icon: string | null) => {
        const icons = {...settings?.placeIcons};

        if (icon) icons[path] = icon;
        else delete icons[path];

        await save({placeIcons: icons});
        setIconsFor(null);
        onPlacesChanged(await listPlaces());
    };

    const pickPlaceIcon = async (path: string) => {
        const file = await pickIconFile();
        if (file) await setPlaceIcon(path, `file:${file}`);
    };

    const savePlaces = async (paths: string[]) => {
        onPlacesChanged(await setPlaces(paths));
    };

    const addPlace = async () => {
        const folder = await pickFolder();

        if (!folder || places.some((place) => place.path.toLowerCase() === folder.toLowerCase()))
            return;

        await savePlaces([...places.map((place) => place.path), folder]);
    };

    const body = (panel: Panel) => {
        switch (panel.kind) {
            case "quick":
                return panel.view === "grid"
                    ? (
                        <Places>
                            {places.map((place) => (
                                <Card
                                    key={place.path}
                                    $editing={editing}
                                    onClick={(event) => !editing && onOpen(place.path, wantsNewTab(event))}
                                    title={place.path}
                                >
                                    {editing && (
                                        <>
                                            <SmallButton
                                                $left
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setIconsFor(iconsFor === place.path ? null : place.path);
                                                }}
                                                title="Change the icon"
                                                type="button"
                                            >
                                                <ImageIcon size={11}/>
                                            </SmallButton>
                                            <SmallButton
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setDraft(place.name);
                                                    setRenaming(place.path);
                                                }}
                                                title="Rename"
                                                type="button"
                                            >
                                                <PencilIcon size={11}/>
                                            </SmallButton>
                                            <SmallButton
                                                $remove
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    void savePlaces(places.filter((item) => item.path !== place.path)
                                                        .map((item) => item.path));
                                                }}
                                                title="Remove from Quick access"
                                                type="button"
                                            >
                                                <CrossIcon size={11}/>
                                            </SmallButton>
                                        </>
                                    )}

                                    <CardIcon><PlaceGlyph place={place} size={20}/></CardIcon>
                                    <CardText>
                                        {renaming === place.path
                                            ? (
                                                <Name
                                                    autoFocus
                                                    onBlur={() => void setPlaceName(place.path, draft)}
                                                    onChange={(event) => setDraft(event.target.value)}
                                                    onClick={(event) => event.stopPropagation()}
                                                    onKeyDown={(event) => {
                                                        if (event.key === "Enter") void setPlaceName(place.path, draft);
                                                        if (event.key === "Escape") setRenaming(null);
                                                    }}
                                                    value={draft}
                                                />
                                            )
                                            : <strong>{place.name}</strong>}
                                        <span>{place.path}</span>
                                    </CardText>
                                </Card>
                            ))}

                            {editing && (
                                <AddCard onClick={() => void addPlace()} title="Add a folder" type="button">
                                    <PlusIcon size={18}/>
                                    <span>Add folder</span>
                                </AddCard>
                            )}
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
                                    <PlaceGlyph place={place} size={16}/>
                                    <RowText>
                                        <strong>{place.name}</strong>
                                        <span>{place.path}</span>
                                    </RowText>
                                    {editing && (
                                        <RowTools>
                                            <SmallButton
                                                $left
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setIconsFor(iconsFor === place.path ? null : place.path);
                                                }}
                                                title="Change the icon"
                                                type="button"
                                            >
                                                <ImageIcon size={11}/>
                                            </SmallButton>
                                            <SmallButton
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setDraft(place.name);
                                                    setRenaming(place.path);
                                                }}
                                                title="Rename"
                                                type="button"
                                            >
                                                <PencilIcon size={11}/>
                                            </SmallButton>
                                        </RowTools>
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
                return (
                    <FolderPanel
                        mode={panel.view}
                        onOpen={onOpen}
                        path={panel.path ?? homePath}
                    />
                );
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
                    <GhostButton onClick={() => void addPanel()} title="Pin a folder to the overview" type="button">
                        <PlusIcon size={12}/>
                        Folder panel
                    </GhostButton>
                )}

                <GhostButton
                    onClick={() => setEditing((current) => !current)}
                    title={editing ? "Done" : "Edit the overview"}
                    type="button"
                >
                    {editing ? <CheckIcon size={13}/> : <PencilIcon size={13}/>}
                    {editing ? "Done" : "Edit"}
                </GhostButton>
            </Toolbar>

            <Panels $columns={columns}>
                {panels
                    .filter((panel) => editing || (!hidden.includes(panel.id) && (panel.kind !== "recent" || (recentLimit > 0 && recent.length > 0))))
                    .map((panel) => {
                        const index = panelIds.indexOf(panel.id);
                        const isHidden = hidden.includes(panel.id);
                        const isFolder = panel.kind === "folder";

                        return (
                            <Section key={panel.id} $hidden={isHidden}>
                                <SectionHead>
                                    {editing
                                        ? (
                                            <TitleInput
                                                onBlur={(event) => void rename(panel.id, event.target.value)}
                                                onKeyDown={(event) => {
                                                    if (event.key === "Enter") (event.target as HTMLInputElement).blur();
                                                }}
                                                defaultValue={panel.title}
                                            />
                                        )
                                        : <Title>{panel.title}</Title>}

                                    <HeadEnd>
                                        {!editing && panel.kind === "recent" && recent.length > 0 && (
                                            <GhostButton
                                                onClick={() => void clearRecent().then(onRecentCleared)}
                                                title="Forget the recent folders"
                                                type="button"
                                            >
                                                Clear
                                            </GhostButton>
                                        )}

                                        {!editing && (panel.kind === "home" || isFolder) && (
                                            <GhostButton
                                                onClick={() => onOpen(panel.path ?? homePath)}
                                                title="Open this folder"
                                                type="button"
                                            >
                                                Open folder
                                            </GhostButton>
                                        )}

                                        {editing && (
                                            <>
                                                <ViewToggle
                                                    $active={panel.view === "list"}
                                                    onClick={() => setView(panel.id, "list")}
                                                    title="List"
                                                    type="button"
                                                >
                                                    List
                                                </ViewToggle>
                                                <ViewToggle
                                                    $active={panel.view === "grid"}
                                                    onClick={() => setView(panel.id, "grid")}
                                                    title="Grid"
                                                    type="button"
                                                >
                                                    Grid
                                                </ViewToggle>

                                                <MoveButton
                                                    disabled={index === 0}
                                                    onClick={() => move(panel.id, -1)}
                                                    title="Move up"
                                                    type="button"
                                                >
                                                    <ArrowUpIcon size={12}/>
                                                </MoveButton>
                                                <MoveButton
                                                    $down
                                                    disabled={index === panelIds.length - 1}
                                                    onClick={() => move(panel.id, 1)}
                                                    title="Move down"
                                                    type="button"
                                                >
                                                    <ArrowUpIcon size={12}/>
                                                </MoveButton>
                                                <MoveButton
                                                    onClick={() => isFolder
                                                        ? void removePanel(panel.id)
                                                        : togglePanel(panel.id)}
                                                    title={isFolder ? "Remove this panel" : isHidden ? "Show" : "Hide"}
                                                    type="button"
                                                >
                                                    {isFolder || !isHidden ? <CrossIcon size={12}/> : <CheckIcon size={12}/>}
                                                </MoveButton>
                                            </>
                                        )}
                                    </HeadEnd>
                                </SectionHead>

                                {body(panel)}

                            </Section>
                        );
                    })}
            </Panels>

            {editing && iconsFor && (
                <IconPicker
                    onPick={(icon) => void setPlaceIcon(iconsFor, icon)}
                    onPickFile={() => void pickPlaceIcon(iconsFor)}
                />
            )}
        </Page>
    );
}

/** One folder shown as a panel: its own listing, in list or grid form. */
function FolderPanel({path, mode, onOpen}: { path: string; mode: ViewMode; onOpen: (path: string, newTab?: boolean) => void }) {
    const [listing, setListing] = useState<DirectoryListing | null>(null);

    useEffect(() => {
        if (!path) return;

        setListing(null);
        listDirectory(path).then(setListing, () => setListing(null));
    }, [path]);

    if (!listing)
        return <Empty>Reading {path || "the folder"}…</Empty>;

    if (mode === "grid")
        return (
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
                        <TileIcon entry={entry}/>
                        <span>{entry.name}</span>
                    </Tile>
                ))}
            </Tiles>
        );

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
}

function TileIcon({entry}: { entry: DirectoryListing["entries"][number] }) {
    const icon = useIcon(entry.fullPath, entry.isDirectory);

    if (icon) return <img alt="" src={icon}/>;

    return entry.isDirectory ? <FolderIcon size={16}/> : <TextIcon size={16}/>;
}

/** The icon a quick-access folder was given, or its default glyph. */
function PlaceGlyph({place, size = 18}: { place: Place; size?: number }) {
    const custom = place.icon?.startsWith("file:") ? place.icon.slice(5) : null;
    const image = useIconFile(custom);

    if (image) return <img alt="" src={image} style={{width: size, height: size, objectFit: "contain"}}/>;

    const builtin = place.icon ? PlaceIcons[place.icon] : undefined;
    if (builtin) return <>{builtin(size)}</>;

    return place.kind === "home" ? <HomeIcon size={size}/> : <FolderIcon size={size}/>;
}

function IconPicker({onPick, onPickFile}: { onPick: (icon: string) => void; onPickFile: () => void }) {
    return (
        <Picker>
            {Object.keys(PlaceIcons).map((name) => (
                <PickerButton key={name} onClick={() => onPick(name)} title={name} type="button">
                    <PlaceGlyph place={{name: "", path: "", kind: "folder", icon: name}} size={16}/>
                </PickerButton>
            ))}
            <PickerButton onClick={onPickFile} title="Choose an image" type="button">
                <PlusIcon size={14}/>
            </PickerButton>
        </Picker>
    );
}

/** Turns the stored panel ids into panels, filling in titles and view modes. */
function buildPanels(settings: AppSettings | null): Panel[] {
    const stored = settings?.overviewPanels ?? [];
    const known = stored.filter((id) => id.startsWith("folder:") || DefaultPanels.includes(id));
    const ids = [...known, ...DefaultPanels.filter((id) => !known.includes(id))];
    const titles = settings?.overviewTitles ?? {};
    const views = settings?.overviewViews ?? {};

    return ids.map((id) => {
        const kind: PanelKind = id.startsWith("folder:")
            ? "folder"
            : id as PanelKind;

        return {
            id,
            kind,
            path: id.startsWith("folder:") ? id.slice("folder:".length) : undefined,
            title: titles[id] ?? (kind === "folder"
                ? id.slice("folder:".length).split(/[\\/]/).filter(Boolean).pop() ?? id
                : DefaultTitles[id] ?? id),
            view: views[id] === "grid" ? "grid" : views[id] === "list" ? "list" : (kind === "quick" ? "grid" : "list"),
        };
    });
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
    gap: 10px;
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

const SectionHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

const HeadEnd = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const Title = styled.h1`
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--text-primary);
`;

const TitleInput = styled.input`
    width: 100%;
    max-width: 220px;
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

const GhostButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
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

const ViewToggle = styled.button<{ $active: boolean }>`
    padding: 2px 7px;
    border: 1px solid ${({$active}) => $active ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: ${({$active}) => $active ? "rgba(99, 102, 241, 0.2)" : "var(--bg-input)"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-muted)"};
    font: inherit;
    font-size: 10px;
    cursor: pointer;
`;

const MoveButton = styled.button<{ $down?: boolean }>`
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    background: var(--bg-input);
    color: var(--text-secondary);
    cursor: pointer;
    transform: ${({$down}) => $down ? "rotate(180deg)" : "none"};

    &:disabled {
        opacity: 0.35;
        cursor: default;
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

const Places = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
`;

const Card = styled.div<{ $editing: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    color: var(--text-primary);
    font: inherit;
    text-align: left;
    cursor: ${({$editing}) => $editing ? "default" : "pointer"};
    transition: border-color 120ms ease, background 120ms ease;

    &:hover {
        border-color: ${({$editing}) => $editing ? "var(--border-color)" : "var(--border-color-hover)"};
        background: ${({$editing}) => $editing ? "var(--bg-card)" : "var(--bg-card-hover)"};
    }
`;

const CardIcon = styled.span`
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 9px;
    background: rgba(99, 102, 241, 0.16);
    color: var(--accent-primary);
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

const SmallButton = styled.button<{ $left?: boolean; $remove?: boolean }>`
    position: absolute;
    top: 5px;
    right: ${({$left, $remove}) => $remove ? "5px" : $left ? "49px" : "27px"};
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
        background: ${({$remove}) => $remove ? "rgba(248, 113, 113, 0.25)" : "rgba(99, 102, 241, 0.28)"};
        color: ${({$remove}) => $remove ? "#fca5a5" : "#c7d2fe"};
    }
`;

const Name = styled.input`
    width: 100%;
    min-width: 0;
    padding: 1px 4px;
    border: 1px solid var(--border-color-focus);
    border-radius: 4px;
    outline: 0;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;
    font-weight: 600;
`;

const AddCard = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 58px;
    border: 1px dashed var(--border-color-hover);
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--accent-primary);
        background: rgba(99, 102, 241, 0.08);
        color: var(--text-primary);
    }
`;

const Picker = styled.div`
    position: sticky;
    bottom: 0;
    margin-top: 14px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`;

const PickerButton = styled.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border: 1px solid transparent;
    border-radius: 5px;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    img {
        width: 16px;
        height: 16px;
        object-fit: contain;
    }
`;

const Rows = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const Row = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 8px 12px;
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

const RowTools = styled.span`
    display: flex;
    gap: 4px;

    & > button {
        position: static;
    }
`;

const Bar = styled.span`
    width: 110px;
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

const Tiles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 4px;
`;

const Tile = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 7px 10px;
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
