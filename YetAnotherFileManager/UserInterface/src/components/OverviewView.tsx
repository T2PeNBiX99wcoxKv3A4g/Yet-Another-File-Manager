import {useEffect, useState} from "react";
import styled from "styled-components";
import {
    clearRecent,
    listDirectory,
    listPlaces,
    openFile,
    renameDrive,
    type DirectoryListing,
    type Drive,
    type Place,
    type RecentEntry,
} from "../api/files";
import {getSettings, pickFolder, pickIconFile, saveSettings, type AppSettings} from "../api/settings";
import {Native} from "@photino-net-utils/bridge";
import {FileList} from "./FileList";
import {ArrowUpIcon, CheckIcon, CrossIcon, DriveIcon, GridIcon, ListIcon, PencilIcon, PinIcon, PlusIcon} from "./Icons";
import {PathIcon} from "./PathIcon";
import {PlaceIcon} from "./PlaceIcon";
import {baseName, driveLetter, driveName, formatBytes, usageTone} from "../utils/format";
import {wantsNewTab} from "../shortcuts";
import {buildPanels, PanelGlyph, PanelIcons, type Panel, type PanelKind, type ViewMode} from "../panels";

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
    /** Called after a volume label was written, so the drive lists show the new name. */
    onDrivesChanged?: () => void;
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

/** The panel choices live in one menu, so another kind only ever needs one more option. */
const AddMenu = styled.div`
    position: relative;
    display: inline-flex;
`;

const PanelMenu = styled.div`
    position: absolute;
    z-index: 40;
    top: calc(100% + 6px);
    right: 0;
    display: flex;
    flex-direction: column;
    min-width: 150px;
    padding: 5px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
`;

const PanelMenuItem = styled.button`
    padding: 6px 10px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;

    &:hover {
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

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
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
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
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
`;

/** The second line of a card or row: a path, a capacity hint or a modification time. */
const Meta = styled.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
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
`;

/** A fake directory entry at the end of Quick access; it only exists in edit mode. */
const AddFolder = styled.button<{ $row?: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: ${({$row}) => $row ? "7px 10px" : "11px 13px"};
    border: 1px dashed var(--border-color-hover);
    border-radius: ${({$row}) => $row ? "var(--radius-sm)" : "var(--radius-md)"};
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    text-align: left;
    cursor: pointer;

    strong {
        font-size: ${({$row}) => $row ? "12.5px" : "13px"};
        font-weight: ${({$row}) => $row ? 500 : 600};
    }

    &:hover {
        border-color: var(--border-color-focus);
        background: var(--bg-card-hover);
        color: var(--text-primary);
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

/** Anchors an icon's picker to the icon itself, so the list opens right where it is used. */
const IconAnchor = styled.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`;

const IconTrigger = styled.button`
    display: inline-grid;
    place-items: center;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:hover {
        background: rgba(99, 102, 241, 0.22);
    }
`;

const IconMenu = styled.div`
    position: absolute;
    z-index: 40;
    top: calc(100% + 6px);
    left: 0;
    display: grid;
    grid-template-columns: repeat(4, 24px);
    gap: 4px;
    width: max-content;
    padding: 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
`;

const IconChoice = styled.button<{ $active?: boolean }>`
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: 1px solid ${({$active}) => $active ? "var(--border-color-focus)" : "transparent"};
    border-radius: 5px;
    background: ${({$active}) => $active ? "rgba(99, 102, 241, 0.24)" : "transparent"};
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

/** Removes a folder from one Quick access panel; only shown while the overview is being edited. */
const RemovePlaceButton = styled.button<{ $inline?: boolean }>`
    position: ${({$inline}) => $inline ? "static" : "absolute"};
    top: 5px;
    right: 5px;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    padding: 0;
    border: 0;
    border-radius: 5px;
    background: rgba(148, 163, 184, 0.18);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: rgba(239, 68, 68, 0.25);
        color: #fca5a5;
    }
`;

/** The rename action sits right after the drive name, not at the far end of the row. */
const DriveRenameButton = styled.button`
    display: inline-grid;
    place-items: center;
    width: 16px;
    height: 16px;
    margin-left: 4px;
    padding: 0;
    border: 0;
    border-radius: 4px;
    background: transparent;
    color: var(--text-muted);
    opacity: 0.55;
    vertical-align: -3px;
    cursor: pointer;

    &:hover {
        background: rgba(99, 102, 241, 0.28);
        color: #c7d2fe;
        opacity: 1;
    }
`;

/** The name turns into a text box with cancel and apply, the way the path bar does. */
const DriveEditorBox = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 2px;
    max-width: 100%;
    padding: 1px 2px 1px 6px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);

    input {
        min-width: 4ch;
        border: 0;
        outline: 0;
        background: transparent;
        color: var(--text-primary);
        font: inherit;
        font-size: 12.5px;
    }
`;

const EditorButton = styled.button<{ $apply?: boolean }>`
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: ${({$apply}) => $apply ? "rgba(34, 197, 94, 0.22)" : "rgba(148, 163, 184, 0.2)"};
        color: ${({$apply}) => $apply ? "#4ade80" : "var(--text-primary)"};
    }
`;

const Notice = styled.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`;

const Empty = styled.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
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
    onDrivesChanged,
}: OverviewViewProps) {
    const [editing, setEditing] = useState(false);
    const [settings, setSettings] = useState<AppSettings | null>(null);
    const [iconEditor, setIconEditor] = useState<{ kind: "panel" | "place"; id: string } | null>(null);
    const [addOpen, setAddOpen] = useState(false);
    const [driveRename, setDriveRename] = useState<{ drive: Drive; label: string } | null>(null);
    const [driveNotice, setDriveNotice] = useState<string | null>(null);

    useEffect(() => {
        void getSettings().then(setSettings, () => setSettings(null));
    }, []);

    // Any click outside an open icon list closes it, the way a menu should.
    useEffect(() => {
        if (!iconEditor) return;

        const close = () => setIconEditor(null);
        window.addEventListener("pointerdown", close);
        return () => window.removeEventListener("pointerdown", close);
    }, [iconEditor]);

    // The add-panel menu behaves the same way.
    useEffect(() => {
        if (!addOpen) return;

        const close = () => setAddOpen(false);
        window.addEventListener("pointerdown", close);
        return () => window.removeEventListener("pointerdown", close);
    }, [addOpen]);

    const panels = buildPanels(settings);
    const ids = panels.map((panel) => panel.id);
    const isPanelIconOpen = (id: string) => iconEditor?.kind === "panel" && iconEditor.id === id;
    const isPlaceIconOpen = (path: string) => iconEditor?.kind === "place" && iconEditor.id === path;

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

        setIconEditor(null);
        await save({placeIcons: icons});
        onPlacesChanged(await listPlaces());
    };

    /** Starts a drive rename in place: the name itself becomes the editor. */
    const startDriveRename = (drive: Drive) => {
        setDriveNotice(null);
        setDriveRename({drive, label: drive.label || "Local Disk"});
    };

    /** Writes the label straight back to Windows; access denied means it needs elevation. */
    const applyDriveRename = async () => {
        if (!driveRename) return;

        const {drive, label} = driveRename;
        setDriveRename(null);

        const result = await renameDrive(drive.name, label.trim());

        if (result.ok) {
            setDriveNotice(null);
            onDrivesChanged?.();
            return;
        }

        setDriveNotice(result.needsAdmin
            ? "Windows needs administrator rights to rename a volume. Restart the app as administrator and try again."
            : result.error ?? "Windows refused the volume label.");
    };

    const columns = settings?.overviewColumns ?? 1;

    const save = async (patch: Partial<AppSettings>) => {
        if (!settings) return;

        // The panel list is the whole truth now: one delete removes a panel for good. Writing it on
        // every change also migrates ids that older versions only hid.
        const next = {...settings, ...patch, overviewPanels: patch.overviewPanels ?? ids, overviewHidden: []};
        setSettings(await saveSettings(next));
        onLayoutChanged?.();
    };

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

    const togglePin = (id: string) => {
        // No stored list yet: start from the panels' default pin state, not from nothing.
        const pinned = settings?.overviewPinned ?? panels.filter((panel) => panel.pinned).map((panel) => panel.id);

        void save({overviewPinned: panels.find((panel) => panel.id === id)?.pinned
            ? pinned.filter((item) => item !== id)
            : [...pinned, id]});
    };

    /** Deletes the panel outright; any kind can be added again from the toolbar. */
    const remove = (id: string) => {
        setIconEditor(null);

        // A panel that comes back later starts empty, not with the folders it used to hold.
        const places = {...settings?.panelPlaces};
        delete places[id];

        void save({overviewPanels: ids.filter((item) => item !== id), panelPlaces: places});
    };

    const setIcon = (id: string, icon: string | null) => {
        const icons = {...settings?.overviewIcons};

        if (icon) icons[id] = icon;
        else delete icons[id];

        setIconEditor(null);
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

        // A hand-made Quick access always starts empty; "quick" is reserved for the factory panel.
        if (kind === "quick") {
            let suffix = 2;
            while (ids.includes(`quick:${suffix}`)) suffix += 1;
            await save({overviewPanels: [...ids, `quick:${suffix}`]});
            return;
        }

        // Gaps are allowed after deleting a numbered block, so the first unused id wins.
        let id: string = kind;
        for (let suffix = 2; ids.includes(id); suffix += 1)
            id = `${kind}:${suffix}`;

        await save({overviewPanels: [...ids, id]});
    };

    /** Pins one more folder to the chosen Quick access panel. */
    const addPlace = async (panel: Panel) => {
        const folder = await pickFolder();
        if (!folder) return;

        if (panel.id === "quick") {
            await save({quickAccess: [...new Set([...places.map((place) => place.path), folder])]});
            onPlacesChanged(await listPlaces());
            return;
        }

        const current = panel.places ?? [];
        if (current.some((path) => samePath(path, folder))) return;

        await save({panelPlaces: {...settings?.panelPlaces, [panel.id]: [...current, folder]}});
    };

    /** Takes one folder out of the chosen Quick access panel. */
    const removePlace = async (panel: Panel, path: string) => {
        setIconEditor(null);

        if (panel.id === "quick") {
            await save({quickAccess: places.filter((place) => !samePath(place.path, path)).map((place) => place.path)});
            onPlacesChanged(await listPlaces());
            return;
        }

        await save({
            panelPlaces: {
                ...settings?.panelPlaces,
                [panel.id]: (panel.places ?? []).filter((item) => !samePath(item, path))
            }
        });
    };

    /** The folders one Quick access panel shows: the factory panel uses the global places. */
    const quickItems = (panel: Panel): Place[] => {
        if (panel.id === "quick")
            return places;

        return (panel.places ?? []).map((path) => {
            const known = places.find((place) => samePath(place.path, path));

            return {
                name: known?.name ?? (baseName(path) || path),
                path,
                kind: "folder",
                icon: known?.icon ?? settings?.placeIcons?.[path] ?? null,
            };
        });
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
                            <Glyph>
                                <PathIcon isDirectory={entry.isDirectory} name={entry.name} path={entry.path} size={18}/>
                            </Glyph>
                            <CardText>
                                <strong>{entry.name}</strong>
                                <Meta>{entry.path}</Meta>
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
                                <strong>
                                    {driveRename?.drive.name === drive.name ? (
                                        <>
                                            <DriveEditor
                                                onCancel={() => setDriveRename(null)}
                                                onChange={(label) => setDriveRename({...driveRename, label})}
                                                onCommit={() => void applyDriveRename()}
                                                value={driveRename.label}
                                            />
                                            {driveLetter(drive)}
                                        </>
                                    ) : (
                                        <>
                                            {driveName(drive)}
                                            <DriveRenameButton
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    startDriveRename(drive);
                                                }}
                                                title="Rename volume"
                                                type="button"
                                            >
                                                <PencilIcon size={11}/>
                                            </DriveRenameButton>
                                        </>
                                    )}
                                </strong>
                                <Meta>{formatBytes(drive.freeSpace)} free of {formatBytes(drive.totalSize)}</Meta>
                            </CardText>
                        </Card>
                    ))}
                </Places>
            );

        switch (panel.kind) {
            case "quick": {
                const items = quickItems(panel);

                if (!editing && items.length === 0)
                    return <Empty>No folders in this Quick access panel yet.</Empty>;

                return panel.view === "grid"
                    ? (
                        <Places>
                            {items.map((place) => (
                                <Card
                                    key={place.path}
                                    $plain={editing}
                                    onClick={(event) => !editing && onOpen(place.path, wantsNewTab(event))}
                                    title={place.path}
                                >
                                    {editing && (
                                        <RemovePlaceButton
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                void removePlace(panel, place.path);
                                            }}
                                            title="Remove from Quick access"
                                            type="button"
                                        >
                                            <CrossIcon size={11}/>
                                        </RemovePlaceButton>
                                    )}
                                    <IconAnchor>
                                        {editing ? (
                                            <IconTrigger
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setIconEditor(isPlaceIconOpen(place.path) ? null : {kind: "place", id: place.path});
                                                }}
                                                onPointerDown={(event) => event.stopPropagation()}
                                                title="Change icon"
                                                type="button"
                                            >
                                                <Glyph><PlaceIcon place={place}/></Glyph>
                                            </IconTrigger>
                                        ) : (
                                            <Glyph><PlaceIcon place={place}/></Glyph>
                                        )}
                                        {isPlaceIconOpen(place.path) && (
                                            <IconPicker
                                                onPick={(icon) => void setPlaceIcon(place.path, icon)}
                                                value={settings?.placeIcons?.[place.path] ?? place.icon}
                                            />
                                        )}
                                    </IconAnchor>
                                    <CardText>
                                        <strong>{place.name}</strong>
                                        <Meta>{place.path}</Meta>
                                    </CardText>
                                </Card>
                            ))}

                            {editing && (
                                <AddFolder onClick={() => void addPlace(panel)} title="Pin a folder here" type="button">
                                    <Glyph><PlusIcon size={15}/></Glyph>
                                    <CardText>
                                        <strong>Add folder</strong>
                                        <Meta>Pin a directory here</Meta>
                                    </CardText>
                                </AddFolder>
                            )}
                        </Places>
                    )
                    : (
                        <Rows>
                            {items.map((place) => (
                                <Row
                                    key={place.path}
                                    onClick={(event) => !editing && onOpen(place.path, wantsNewTab(event))}
                                    title={place.path}
                                    type="button"
                                >
                                    <IconAnchor>
                                        {editing ? (
                                            <IconTrigger
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setIconEditor(isPlaceIconOpen(place.path) ? null : {kind: "place", id: place.path});
                                                }}
                                                onPointerDown={(event) => event.stopPropagation()}
                                                title="Change icon"
                                                type="button"
                                            >
                                                <PlaceIcon place={place} size={15}/>
                                            </IconTrigger>
                                        ) : (
                                            <PlaceIcon place={place} size={15}/>
                                        )}
                                        {isPlaceIconOpen(place.path) && (
                                            <IconPicker
                                                onPick={(icon) => void setPlaceIcon(place.path, icon)}
                                                value={settings?.placeIcons?.[place.path] ?? place.icon}
                                            />
                                        )}
                                    </IconAnchor>
                                    <RowText>
                                        <strong>{place.name}</strong>
                                        <Meta>{place.path}</Meta>
                                    </RowText>
                                    {editing && (
                                        <RemovePlaceButton
                                            $inline
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                void removePlace(panel, place.path);
                                            }}
                                            title="Remove from Quick access"
                                            type="button"
                                        >
                                            <CrossIcon size={11}/>
                                        </RemovePlaceButton>
                                    )}
                                </Row>
                            ))}

                            {editing && (
                                <AddFolder $row onClick={() => void addPlace(panel)} title="Pin a folder here" type="button">
                                    <PlusIcon size={15}/>
                                    <RowText>
                                        <strong>Add folder</strong>
                                        <Meta>Pin a directory here</Meta>
                                    </RowText>
                                </AddFolder>
                            )}
                        </Rows>
                    );
            }

            case "recent":
                return recent.length === 0
                    ? <Empty>Files and folders you open show up here.</Empty>
                    : (
                        <Rows>
                            {recent.slice(0, recentLimit).map((entry) => (
                                <Row
                                    key={entry.path}
                                    onClick={(event) => entry.isDirectory
                                        ? onOpen(entry.path, wantsNewTab(event))
                                        : void openFile(entry.path)}
                                    title={entry.path}
                                    type="button"
                                >
                                    <PathIcon isDirectory={entry.isDirectory} name={entry.name} path={entry.path} size={15}/>
                                    <RowText>
                                        <strong>{entry.name}</strong>
                                        <Meta>{entry.path}</Meta>
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

                            return driveRename?.drive.name === drive.name ? (
                                <Row as="div" key={drive.name}>
                                    <DriveIcon size={18}/>
                                    <RowText>
                                        <strong>
                                            <DriveEditor
                                                onCancel={() => setDriveRename(null)}
                                                onChange={(label) => setDriveRename({...driveRename, label})}
                                                onCommit={() => void applyDriveRename()}
                                                value={driveRename.label}
                                            />
                                            {driveLetter(drive)}
                                        </strong>
                                        <Meta>{formatBytes(drive.freeSpace)} free of {formatBytes(drive.totalSize)}</Meta>
                                    </RowText>
                                    <Bar><Fill $used={used} $tone={usageTone(used)}/></Bar>
                                </Row>
                            ) : (
                                <Row
                                    key={drive.name}
                                    onClick={(event) => onOpen(drive.name, wantsNewTab(event))}
                                    title={drive.name}
                                    type="button"
                                >
                                    <DriveIcon size={18}/>
                                    <RowText>
                                        <strong>
                                            {driveName(drive)}
                                            <DriveRenameButton
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    startDriveRename(drive);
                                                }}
                                                title="Rename volume"
                                                type="button"
                                            >
                                                <PencilIcon size={11}/>
                                            </DriveRenameButton>
                                        </strong>
                                        <Meta>{formatBytes(drive.freeSpace)} free of {formatBytes(drive.totalSize)}</Meta>
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
                    {[1, 2, 3, 4, 5].map((count) => (
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
                    <AddMenu>
                        <Ghost
                            onClick={() => setAddOpen((current) => !current)}
                            onPointerDown={(event) => event.stopPropagation()}
                            title="Add a panel"
                            type="button"
                        >
                            <PlusIcon size={12}/>
                            Add panel ▾
                        </Ghost>
                        {addOpen && (
                            <PanelMenu onPointerDown={(event) => event.stopPropagation()}>
                                {(["quick", "recent", "home", "drives", "folder"] as PanelKind[]).map((kind) => (
                                    <PanelMenuItem
                                        key={kind}
                                        onClick={() => {
                                            setAddOpen(false);
                                            void addBlock(kind);
                                        }}
                                        type="button"
                                    >
                                        {kind === "quick" ? "Quick access"
                                            : kind === "recent" ? "Recent"
                                                : kind === "home" ? "Home"
                                                    : kind === "drives" ? "This PC" : "Folder…"}
                                    </PanelMenuItem>
                                ))}
                            </PanelMenu>
                        )}
                    </AddMenu>
                )}

                <Ghost
                    onClick={() => {
                        setEditing((current) => !current);
                        setAddOpen(false);
                        setIconEditor(null);
                    }}
                    title={editing ? "Done" : "Edit"}
                    type="button"
                >
                    {editing ? <CheckIcon size={13}/> : <PencilIcon size={13}/>}
                    {editing ? "Done" : "Edit"}
                </Ghost>
            </Toolbar>

            {driveNotice && <Notice>{driveNotice}</Notice>}

            <Panels $columns={columns}>
                {panels
                    .filter((panel) => editing || (panel.kind !== "recent" || (recentLimit > 0 && recent.length > 0)))
                    .map((panel) => {
                        const index = ids.indexOf(panel.id);

                        return (
                            <Section key={panel.id}>
                                <Head>
                                    <HeadStart>
                                        <IconAnchor>
                                            {editing ? (
                                                <IconTrigger
                                                    onClick={() => setIconEditor(isPanelIconOpen(panel.id) ? null : {kind: "panel", id: panel.id})}
                                                    onPointerDown={(event) => event.stopPropagation()}
                                                    title="Change icon"
                                                    type="button"
                                                >
                                                    <PanelGlyph panel={panel} size={15}/>
                                                </IconTrigger>
                                            ) : (
                                                <PanelGlyph panel={panel} size={15}/>
                                            )}
                                            {isPanelIconOpen(panel.id) && (
                                                <IconPicker
                                                    onPick={(icon) => setIcon(panel.id, icon)}
                                                    value={panel.icon}
                                                />
                                            )}
                                        </IconAnchor>

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
                                                    $active={panel.pinned}
                                                    onClick={() => togglePin(panel.id)}
                                                    title={panel.pinned ? "Unpin from the sidebar" : "Pin to the sidebar"}
                                                    type="button"
                                                >
                                                    <PinIcon size={12}/>
                                                </IconButton>
                                                <IconButton
                                                    $active={panel.view === "list"}
                                                    onClick={() => setView(panel.id, "list")}
                                                    title="List"
                                                    type="button"
                                                >
                                                    <ListIcon size={13}/>
                                                </IconButton>
                                                <IconButton
                                                    $active={panel.view === "grid"}
                                                    onClick={() => setView(panel.id, "grid")}
                                                    title="Grid"
                                                    type="button"
                                                >
                                                    <GridIcon size={13}/>
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
                                                    onClick={() => remove(panel.id)}
                                                    title="Remove panel"
                                                    type="button"
                                                >
                                                    <CrossIcon size={12}/>
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
        </Page>
    );
}

/** The name turns into a text box with cancel and apply, like the path bar's editor. */
function DriveEditor({value, onChange, onCommit, onCancel}: {
    value: string;
    onChange: (value: string) => void;
    onCommit: () => void;
    onCancel: () => void;
}) {
    return (
        <DriveEditorBox onClick={(event) => event.stopPropagation()} onPointerDown={(event) => event.stopPropagation()}>
            <input
                autoFocus
                maxLength={32}
                onChange={(event) => onChange(event.target.value)}
                onFocus={(event) => event.currentTarget.select()}
                onKeyDown={(event) => {
                    if (event.key === "Enter") onCommit();
                    if (event.key === "Escape") onCancel();
                }}
                spellCheck={false}
                style={{width: `${Math.max(value.length + 1, 8)}ch`}}
                value={value}
            />
            <EditorButton onClick={onCancel} title="Cancel" type="button">
                <CrossIcon size={11}/>
            </EditorButton>
            <EditorButton $apply onClick={onCommit} title="Rename volume" type="button">
                <CheckIcon size={12}/>
            </EditorButton>
        </DriveEditorBox>
    );
}

/** The icon choices, shown right next to the icon being changed instead of in a bar below. */
function IconPicker({value, onPick}: { value?: string | null; onPick: (icon: string | null) => void }) {
    return (
        <IconMenu onClick={(event) => event.stopPropagation()} onPointerDown={(event) => event.stopPropagation()}>
            {Object.keys(PanelIcons).map((name) => (
                <IconChoice $active={value === name} key={name} onClick={() => onPick(name)} title={name} type="button">
                    {PanelIcons[name](16)}
                </IconChoice>
            ))}
            <IconChoice
                onClick={async () => {
                    const file = await pickIconFile();
                    if (file) onPick(`file:${file}`);
                }}
                title="Choose an image"
                type="button"
            >
                <PlusIcon size={13}/>
            </IconChoice>
            <IconChoice $active={!value} onClick={() => onPick(null)} title="Default" type="button">
                <CrossIcon size={12}/>
            </IconChoice>
        </IconMenu>
    );
}

/** Windows paths compare case-insensitively and ignore a trailing separator. */
function samePath(left: string, right: string): boolean {
    const normalize = (value: string) => value.replace(/[\\/]+$/, "").toLowerCase();

    return normalize(left) === normalize(right);
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

            void listDirectory(path, false).then(setListing, () => undefined);
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
                    <PathIcon isDirectory={entry.isDirectory} name={entry.name} path={entry.fullPath} size={16}/>
                    <span>{entry.name}</span>
                </Tile>
            ))}
        </Tiles>
        </Scroller>
    );
}

