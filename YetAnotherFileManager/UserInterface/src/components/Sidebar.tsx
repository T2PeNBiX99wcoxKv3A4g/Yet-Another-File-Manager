import {useEffect, useState} from "react";
import styled from "styled-components";
import {listDirectory, type DirectoryListing, type Drive, type Place, type RecentEntry} from "../api/files";
import {getSettings} from "../api/settings";
import type {TabKind} from "../tabs";
import {buildPanels, PanelGlyph, type Panel} from "../panels";
import {DriveIcon, FolderIcon, GearIcon, ImageIcon, OverviewIcon, TrashIcon} from "./Icons";
import {formatBytes, usageTone} from "../utils/format";
import {wantsNewTab} from "../shortcuts";

interface SidebarProps {
    places: Place[];
    drives: Drive[];
    recent: RecentEntry[];
    recentLimit: number;
    currentPath: string;
    activeKind: TabKind;
    homePath?: string;
    /** Bumped whenever the overview layout changes, so pinned panels follow along. */
    version?: number;
    onNavigate: (path: string, newTab?: boolean) => void;
    onOpenView: (kind: Exclude<TabKind, "files">) => void;
}

/**
 * A rail that folds to icons and expands under the pointer. Below the fixed pages it shows the
 * overview panels that were pinned there, each opening in place and pushing the rest down.
 */
export function Sidebar({
    places,
    drives,
    recent,
    recentLimit,
    currentPath,
    activeKind,
    homePath = "",
    version = 0,
    onNavigate,
    onOpenView,
}: SidebarProps) {
    const [pinned, setPinned] = useState<Panel[]>([]);

    useEffect(() => {
        void getSettings().then((settings) => {
            setPinned(buildPanels(settings).filter((panel) => panel.pinned));
        }, () => setPinned([]));
    }, [version]);

    const showFiles = activeKind === "files";

    return (
        <Aside>
            <List>
                <Item $active={activeKind === "home"} onClick={() => onOpenView("home")} title="Overview" type="button">
                    <OverviewIcon/>
                    <Label>Overview</Label>
                </Item>
                <Item $active={activeKind === "recycle"} onClick={() => onOpenView("recycle")} title="Recycle Bin" type="button">
                    <TrashIcon/>
                    <Label>Recycle Bin</Label>
                </Item>
                <Item $active={activeKind === "gallery"} onClick={() => onOpenView("gallery")} title="Gallery" type="button">
                    <ImageIcon/>
                    <Label>Gallery</Label>
                </Item>
            </List>

            {pinned.map((panel) => (
                <Menu key={panel.id}>
                    <Item as="div" $active={false}>
                        <Glyph><PanelGlyph panel={panel} size={16}/></Glyph>
                        <Label>{panel.title}</Label>
                    </Item>
                    <Sub>
                        <Inner>
                            {panel.kind === "quick" && places.map((place) => (
                                <Item
                                    key={place.path}
                                    $active={showFiles && isSamePath(currentPath, place.path)}
                                    onClick={(event) => onNavigate(place.path, wantsNewTab(event))}
                                    title={place.path}
                                    type="button"
                                >
                                    <FolderIcon/>
                                    <Label>{place.name}</Label>
                                </Item>
                            ))}

                            {panel.kind === "recent" && recent.slice(0, Math.max(recentLimit, 1)).map((entry) => (
                                <Item
                                    key={entry.path}
                                    $active={showFiles && isSamePath(currentPath, entry.path)}
                                    onClick={(event) => onNavigate(entry.path, wantsNewTab(event))}
                                    title={entry.path}
                                    type="button"
                                >
                                    <FolderIcon/>
                                    <Label>{entry.name}</Label>
                                </Item>
                            ))}

                            {panel.kind === "drives" && drives.map((drive) => {
                                const used = drive.totalSize > 0 ? 1 - drive.freeSpace / drive.totalSize : 0;

                                return (
                                    <Item
                                        key={drive.name}
                                        $active={showFiles && isSamePath(currentPath, drive.name)}
                                        onClick={(event) => onNavigate(drive.name, wantsNewTab(event))}
                                        title={drive.name}
                                        type="button"
                                    >
                                        <DriveIcon/>
                                        <Label>
                                            {drive.label || drive.name}
                                            <Hint>{formatBytes(drive.freeSpace)} free</Hint>
                                            <Bar><Fill $used={used} $tone={usageTone(used)}/></Bar>
                                        </Label>
                                    </Item>
                                );
                            })}

                            {(panel.kind === "home" || panel.kind === "folder") && (
                                <FolderItems
                                    onNavigate={onNavigate}
                                    path={panel.path || homePath}
                                />
                            )}
                        </Inner>
                    </Sub>
                </Menu>
            ))}

            <Bottom>
                <Item $active={activeKind === "settings"} onClick={() => onOpenView("settings")} title="Settings" type="button">
                    <GearIcon/>
                    <Label>Settings</Label>
                </Item>
            </Bottom>
        </Aside>
    );
}

/** The subfolders of a pinned folder panel, loaded when the section is on screen. */
function FolderItems({path, onNavigate}: { path: string; onNavigate: (path: string, newTab?: boolean) => void }) {
    const [listing, setListing] = useState<DirectoryListing | null>(null);

    useEffect(() => {
        if (!path) return;

        setListing(null);
        listDirectory(path).then(setListing, () => setListing(null));
    }, [path]);

    return (listing?.entries ?? [])
        .filter((entry) => entry.isDirectory)
        .slice(0, 40)
        .map((entry) => (
            <Item
                key={entry.fullPath}
                $active={false}
                onClick={(event) => onNavigate(entry.fullPath, wantsNewTab(event))}
                title={entry.fullPath}
                type="button"
            >
                <FolderIcon/>
                <Label>{entry.name}</Label>
            </Item>
        ));
}

/** Comparing paths is enough here: the backend always answers with canonical full paths. */
function isSamePath(left: string, right: string): boolean {
    const normalize = (value: string) => value.replace(/[\\/]+$/, "").toLowerCase();

    return normalize(left) === normalize(right);
}

const Aside = styled.aside`
    position: absolute;
    z-index: 20;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 52px;
    padding: 10px 9px;
    overflow: hidden;
    background: var(--bg-secondary);
    border-right: 1px solid var(--border-color);
    transition: width 150ms ease, padding 150ms ease, box-shadow 150ms ease;

    &::-webkit-scrollbar {
        display: none;
    }

    &:hover {
        width: 224px;
        padding: 10px 10px;
        box-shadow: 14px 0 34px rgba(0, 0, 0, 0.45);
        overflow-y: auto;
        scrollbar-width: none;
    }

    &:not(:hover) ${() => Hint},
    &:not(:hover) ${() => Bar} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`;

const Bottom = styled(List)`
    margin-top: auto;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
`;

const Sub = styled.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Aside}:hover ${Menu}:hover > & {
        grid-template-rows: 1fr;
    }
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-height: 0;
    max-height: 40vh;
    padding-left: 10px;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

const Item = styled.button<{ $active: boolean }>`
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    padding: 6px 8px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: ${({$active}) => $active ? "rgba(99, 102, 241, 0.14)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 12.5px;
    text-align: left;
    cursor: pointer;

    svg {
        flex-shrink: 0;
        color: ${({$active}) => $active ? "var(--accent-primary)" : "var(--text-muted)"};
    }

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;

const Glyph = styled.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    img {
        width: 16px;
        height: 16px;
        object-fit: contain;
    }
`;

const Label = styled.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Hint = styled.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`;

const Bar = styled.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`;

const Fill = styled.span<{ $used: number; $tone: string }>`
    display: block;
    width: ${({$used}) => Math.min(Math.max($used, 0), 1) * 100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone}) => $tone};
`;
