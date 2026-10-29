import {useEffect, useState} from "react";
import styled from "styled-components";
import {
    clearRecent,
    listDirectory,
    setPlaces,
    type DirectoryListing,
    type Drive,
    type Place,
    type RecentEntry,
} from "../api/files";
import {pickFolder} from "../api/settings";
import {FileList} from "./FileList";
import {CheckIcon, CrossIcon, DriveIcon, FolderIcon, HomeIcon, PencilIcon, PlusIcon} from "./Icons";
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

/** The overview: pinned folders, recent folders, a peek at the home folder and the volumes. */
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
    const [home, setHome] = useState<DirectoryListing | null>(null);

    useEffect(() => {
        if (!homePath) return;

        listDirectory(homePath).then(setHome, () => setHome(null));
    }, [homePath]);

    const save = async (paths: string[]) => {
        onPlacesChanged(await setPlaces(paths));
    };

    const addPlace = async () => {
        const folder = await pickFolder();

        if (!folder || places.some((place) => place.path.toLowerCase() === folder.toLowerCase()))
            return;

        await save([...places.map((place) => place.path), folder]);
    };

    const preview = home && { ...home, entries: home.entries.slice(0, PreviewCount) };

    return (
        <Page>
            <Section>
                <SectionHead>
                    <Title>Quick access</Title>
                    <GhostButton
                        onClick={() => setEditing((current) => !current)}
                        title={editing ? "Done" : "Edit Quick access"}
                        type="button"
                    >
                        {editing ? <CheckIcon size={13}/> : <PencilIcon size={13}/>}
                        {editing ? "Done" : "Edit"}
                    </GhostButton>
                </SectionHead>

                <Places>
                    {places.map((place) => (
                        <Card
                            key={place.path}
                            $editing={editing}
                            onClick={() => !editing && onOpen(place.path)}
                            title={place.path}
                            type="button"
                        >
                            {editing && (
                                <RemoveButton
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        void save(places.filter((item) => item.path !== place.path)
                                            .map((item) => item.path));
                                    }}
                                    title="Remove from Quick access"
                                    type="button"
                                >
                                    <CrossIcon size={11}/>
                                </RemoveButton>
                            )}

                            <CardIcon>
                                {place.kind === "home" ? <HomeIcon size={20}/> : <FolderIcon size={20}/>}
                            </CardIcon>
                            <CardText>
                                <strong>{place.name}</strong>
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
            </Section>

            {recentLimit > 0 && recent.length > 0 && (
                <Section>
                    <SectionHead>
                        <Title>Recent</Title>
                        <GhostButton
                            onClick={() => void clearRecent().then(onRecentCleared)}
                            title="Forget the recent folders"
                            type="button"
                        >
                            Clear
                        </GhostButton>
                    </SectionHead>

                    <RecentList>
                        {recent.slice(0, recentLimit).map((entry) => (
                            <RecentRow
                                key={entry.path}
                                onClick={() => onOpen(entry.path)}
                                title={entry.path}
                                type="button"
                            >
                                {entry.isDirectory ? <FolderIcon size={15}/> : <DriveIcon size={15}/>}
                                <strong>{entry.name}</strong>
                                <span>{entry.path}</span>
                            </RecentRow>
                        ))}
                    </RecentList>
                </Section>
            )}

            {homePath && (
                <Section>
                    <SectionHead>
                        <Title>Home</Title>
                        <GhostButton onClick={() => onOpen(homePath)} title="Open the home folder" type="button">
                            Open folder
                        </GhostButton>
                    </SectionHead>

                    <Preview>
                        <FileList
                            error={null}
                            filter=""
                            listing={preview}
                            loading={home === null}
                            onOpen={onOpen}
                        />
                    </Preview>
                </Section>
            )}

            <Section>
                <Title>This PC</Title>
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
            </Section>
        </Page>
    );
}

const Page = styled.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 26px 26px 34px;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;

    & + & {
        margin-top: 28px;
    }
`;

const SectionHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
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

const Places = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 10px;
`;

const Card = styled.button<{ $editing: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
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
    top: 6px;
    right: 6px;
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
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

const AddCard = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 64px;
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
    width: 34px;
    height: 34px;
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
    padding: 9px 14px;
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
        font-size: 13px;
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
    height: 300px;
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
    gap: 4px;
`;

const DriveRow = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
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
    width: 120px;
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
