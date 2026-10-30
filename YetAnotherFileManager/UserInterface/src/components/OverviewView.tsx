import {useEffect, useState} from "react";
import styled from "styled-components";
import {
    clearRecent,
    listDirectory,
    renamePlace,
    setPlaces,
    type DirectoryListing,
    type Drive,
    type Place,
    type RecentEntry,
} from "../api/files";
import {getSettings, pickFolder, saveSettings, type AppSettings} from "../api/settings";
import {FileList} from "./FileList";
import {ArrowUpIcon, CheckIcon, CrossIcon, DriveIcon, FolderIcon, HomeIcon, PencilIcon, PlusIcon} from "./Icons";
import {formatBytes, usageTone} from "../utils/format";

interface OverviewViewProps {
    places: Place[];
    drives: Drive[];
    recent: RecentEntry[];
    recentLimit: number;
    homePath: string;
    onOpen: (path: string) => void;
    onPlacesChanged: (places: Place[]) => void;
    onRecentCleared: () => void;
}

const PreviewCount = 20;

/** The panels in their default order; the user can rearrange and hide them. */
const DefaultPanels = ["quick", "recent", "home", "drives"];

const PanelTitles: Record<string, string> = {
    quick: "Quick access",
    recent: "Recent",
    home: "Home",
    drives: "This PC",
};

/**
 * The overview is a page of panels: pinned folders, recent folders, a peek at the home folder and
 * the volumes. The order, which panels are shown and how many columns they take are the user's.
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
    const [home, setHome] = useState<DirectoryListing | null>(null);
    const [settings, setSettings] = useState<AppSettings | null>(null);

    useEffect(() => {
        if (!homePath) return;

        listDirectory(homePath).then(setHome, () => setHome(null));
    }, [homePath]);

    useEffect(() => {
        void getSettings().then(setSettings, () => setSettings(null));
    }, []);

    // A panel added by a later version is appended instead of being lost.
    const order = mergeOrder(settings?.overviewPanels);
    const hidden = settings?.overviewHidden ?? [];
    const columns = settings?.overviewColumns ?? 1;

    const save = async (patch: Partial<AppSettings>) => {
        if (!settings) return;

        const next = {...settings, ...patch};
        setSettings(next);
        setSettings(await saveSettings(next));
    };

    const move = (id: string, offset: number) => {
        const index = order.indexOf(id);
        const target = index + offset;

        if (index < 0 || target < 0 || target >= order.length) return;

        const next = [...order];
        [next[index], next[target]] = [next[target], next[index]];
        void save({overviewPanels: next});
    };

    const togglePanel = (id: string) =>
        void save({overviewHidden: hidden.includes(id) ? hidden.filter((item) => item !== id) : [...hidden, id]});

    const savePlaces = async (paths: string[]) => {
        onPlacesChanged(await setPlaces(paths));
    };

    /** Renames a pinned folder; an empty name goes back to the folder name. */
    const commitRename = async (path: string) => {
        const name = draft.trim();
        setRenaming(null);
        onPlacesChanged(await renamePlace(path, name.length > 0 ? name : null));
    };

    const addPlace = async () => {
        const folder = await pickFolder();

        if (!folder || places.some((place) => place.path.toLowerCase() === folder.toLowerCase()))
            return;

        await savePlaces([...places.map((place) => place.path), folder]);
    };

    const preview = home && {...home, entries: home.entries.slice(0, PreviewCount)};

    const body = (id: string) => {
        switch (id) {
            case "quick":
                return (
                    <>
                        <Places>
                            {places.map((place) => (
                                <Card
                                    key={place.path}
                                    $editing={editing}
                                    onClick={() => !editing && onOpen(place.path)}
                                    title={place.path}
                                >
                                    {editing && (
                                        <>
                                            <RenameButton
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setDraft(place.name);
                                                    setRenaming(place.path);
                                                }}
                                                title="Rename in Quick access"
                                                type="button"
                                            >
                                                <PencilIcon size={11}/>
                                            </RenameButton>

                                            <RemoveButton
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    void savePlaces(places.filter((item) => item.path !== place.path)
                                                        .map((item) => item.path));
                                                }}
                                                title="Remove from Quick access"
                                                type="button"
                                            >
                                                <CrossIcon size={11}/>
                                            </RemoveButton>
                                        </>
                                    )}

                                    <CardIcon>
                                        {place.kind === "home" ? <HomeIcon size={20}/> : <FolderIcon size={20}/>}
                                    </CardIcon>
                                    <CardText>
                                        {renaming === place.path
                                            ? (
                                                <Name
                                                    autoFocus
                                                    onBlur={() => void commitRename(place.path)}
                                                    onChange={(event) => setDraft(event.target.value)}
                                                    onClick={(event) => event.stopPropagation()}
                                                    onKeyDown={(event) => {
                                                        if (event.key === "Enter") void commitRename(place.path);
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
                    </>
                );

            case "recent":
                return recent.length > 0
                    ? (
                        <RecentList>
                            {recent.slice(0, recentLimit).map((entry) => (
                                <RecentRow
                                    key={entry.path}
                                    onClick={() => onOpen(entry.path)}
                                    title={entry.path}
                                    type="button"
                                >
                                    <FolderIcon size={15}/>
                                    <strong>{entry.name}</strong>
                                    <span>{entry.path}</span>
                                </RecentRow>
                            ))}
                        </RecentList>
                    )
                    : <Empty>Folders you open show up here.</Empty>;

            case "home":
                return (
                    <Preview>
                        <FileList
                            error={null}
                            filter=""
                            listing={preview}
                            loading={home === null}
                            onOpen={onOpen}
                        />
                    </Preview>
                );

            case "drives":
                return (
                    <Drives>
                        {drives.map((drive) => {
                            const used = drive.totalSize > 0 ? 1 - drive.freeSpace / drive.totalSize : 0;

                            return (
                                <DriveRow key={drive.name} onClick={() => onOpen(drive.name)} type="button">
                                    <DriveIcon size={20}/>
                                    <DriveText>
                                        <strong>{drive.label || drive.name}</strong>
                                        <span>
                                            {drive.name} · {formatBytes(drive.freeSpace)} free of {formatBytes(drive.totalSize)}
                                        </span>
                                    </DriveText>
                                    <Bar>
                                        <Fill $used={used} $tone={usageTone(used)}/>
                                    </Bar>
                                </DriveRow>
                            );
                        })}
                    </Drives>
                );

            default:
                return null;
        }
    };

    const action = (id: string) => {
        switch (id) {
            case "recent":
                return recent.length > 0 && (
                    <GhostButton
                        onClick={() => void clearRecent().then(onRecentCleared)}
                        title="Forget the recent folders"
                        type="button"
                    >
                        Clear
                    </GhostButton>
                );

            case "home":
                return (
                    <GhostButton onClick={() => onOpen(homePath)} title="Open the home folder" type="button">
                        Open folder
                    </GhostButton>
                );

            default:
                return null;
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
                {order
                    .filter((id) => editing || !hidden.includes(id))
                    .filter((id) => editing || id !== "recent" || (recentLimit > 0 && recent.length > 0))
                    .map((id) => {
                        const index = order.indexOf(id);
                        const isHidden = hidden.includes(id);

                        return (
                            <Section key={id} $hidden={isHidden}>
                                <SectionHead>
                                    <Title>{PanelTitles[id] ?? id}</Title>

                                    <HeadEnd>
                                        {action(id)}

                                        {editing && (
                                            <>
                                                <MoveButton
                                                    disabled={index === 0}
                                                    onClick={() => move(id, -1)}
                                                    title="Move up"
                                                    type="button"
                                                >
                                                    <ArrowUpIcon size={12}/>
                                                </MoveButton>
                                                <MoveButton
                                                    $down
                                                    disabled={index === order.length - 1}
                                                    onClick={() => move(id, 1)}
                                                    title="Move down"
                                                    type="button"
                                                >
                                                    <ArrowUpIcon size={12}/>
                                                </MoveButton>
                                                <MoveButton
                                                    onClick={() => togglePanel(id)}
                                                    title={isHidden ? "Show this panel" : "Hide this panel"}
                                                    type="button"
                                                >
                                                    {isHidden ? <CheckIcon size={12}/> : <CrossIcon size={12}/>}
                                                </MoveButton>
                                            </>
                                        )}
                                    </HeadEnd>
                                </SectionHead>

                                {body(id)}
                            </Section>
                        );
                    })}
            </Panels>
        </Page>
    );
}

/** The stored order with any panel it does not know about appended. */
function mergeOrder(stored: string[] | null | undefined): string[] {
    const known = (stored ?? []).filter((id) => DefaultPanels.includes(id));
    const missing = DefaultPanels.filter((id) => !known.includes(id));

    return known.length > 0 ? [...known, ...missing] : DefaultPanels;
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

    &:not(:disabled):hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
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
    transition: border-color 120ms ease, background 120ms ease, transform 120ms ease;

    &:hover {
        border-color: ${({$editing}) => $editing ? "var(--border-color)" : "var(--border-color-hover)"};
        background: ${({$editing}) => $editing ? "var(--bg-card)" : "var(--bg-card-hover)"};
        transform: ${({$editing}) => $editing ? "none" : "translateY(-1px)"};
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;

const RemoveButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
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
        background: rgba(248, 113, 113, 0.25);
        color: #fca5a5;
    }
`;

const RenameButton = styled.button`
    position: absolute;
    top: 5px;
    right: 27px;
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

/** The name turns into this while it is being renamed. */
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

const RecentList = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow: hidden;
`;

const RecentRow = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border: 0;
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    text-align: left;
    cursor: pointer;

    & + & {
        border-top: 1px solid var(--border-color);
    }

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }

    strong {
        font-size: 12.5px;
        font-weight: 500;
        white-space: nowrap;
    }

    span {
        min-width: 0;
        overflow: hidden;
        font-family: var(--font-mono);
        font-size: 10px;
        color: var(--text-muted);
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
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

const Drives = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

const DriveRow = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 9px 12px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    text-align: left;
    cursor: pointer;

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;

const DriveText = styled.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 13px;
        font-weight: 500;
    }

    span {
        font-family: var(--font-mono);
        font-size: 10px;
        color: var(--text-muted);
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
