import styled from "styled-components";
import type {Drive, Place, RecentEntry} from "../api/files";
import type {TabKind} from "../tabs";
import {
    ClockIcon,
    DriveIcon,
    FolderIcon,
    GearIcon,
    HomeIcon,
    ImageIcon,
    OverviewIcon,
    TrashIcon,
} from "./Icons";
import {formatBytes, usageTone} from "../utils/format";

interface SidebarProps {
    places: Place[];
    drives: Drive[];
    recent: RecentEntry[];
    recentLimit: number;
    currentPath: string;
    activeKind: TabKind;
    onNavigate: (path: string) => void;
    onOpenView: (kind: Exclude<TabKind, "files">) => void;
}

/**
 * Two levels of collapsing. The rail folds to a strip of icons when the pointer leaves it, and the
 * lists (places, recent folders, drives) open in place under their button on hover and push the\n * rest of the rail down.
 */
export function Sidebar({
    places,
    drives,
    recent,
    recentLimit,
    currentPath,
    activeKind,
    onNavigate,
    onOpenView,
}: SidebarProps) {
    const showFiles = activeKind === "files";
    const hasRecent = recentLimit > 0 && recent.length > 0;

    return (
        <Aside>
            <List>
                <Item
                    $active={activeKind === "home"}
                    onClick={() => onOpenView("home")}
                    title="Overview"
                    type="button"
                >
                    <OverviewIcon/>
                    <Label>Overview</Label>
                </Item>
                <Item
                    $active={activeKind === "recycle"}
                    onClick={() => onOpenView("recycle")}
                    title="Recycle Bin"
                    type="button"
                >
                    <TrashIcon/>
                    <Label>Recycle Bin</Label>
                </Item>
                <Item
                    $active={activeKind === "gallery"}
                    onClick={() => onOpenView("gallery")}
                    title="Gallery"
                    type="button"
                >
                    <ImageIcon/>
                    <Label>Gallery</Label>
                </Item>
            </List>

            <List>
                <Menu>
                    <Item as="div" $active={false}>
                        <FolderIcon/>
                        <Label>Places</Label>
                    </Item>
                    <Sub>
                        <Inner>
                            {places.map((place) => (
                                <Item
                                    key={place.path}
                                    $active={showFiles && isSamePath(currentPath, place.path)}
                                    onClick={() => onNavigate(place.path)}
                                    title={place.path}
                                    type="button"
                                >
                                    {place.kind === "home" ? <HomeIcon/> : <FolderIcon/>}
                                    <Label>{place.name}</Label>
                                </Item>
                            ))}
                        </Inner>
                    </Sub>
                </Menu>

                {hasRecent && (
                    <Menu>
                        <Item as="div" $active={false}>
                            <ClockIcon/>
                            <Label>Recent</Label>
                        </Item>
                        <Sub>
                            <Inner>
                                {recent.slice(0, recentLimit).map((entry) => (
                                    <Item
                                        key={entry.path}
                                        $active={showFiles && isSamePath(currentPath, entry.path)}
                                        onClick={() => onNavigate(entry.path)}
                                        title={entry.path}
                                        type="button"
                                    >
                                        <FolderIcon/>
                                        <Label>{entry.name}</Label>
                                    </Item>
                                ))}
                            </Inner>
                        </Sub>
                    </Menu>
                )}

                <Menu>
                    <Item as="div" $active={false}>
                        <DriveIcon/>
                        <Label>Drives</Label>
                    </Item>
                    <Sub>
                        <Inner>
                            {drives.map((drive) => {
                                const used = drive.totalSize > 0 ? 1 - drive.freeSpace / drive.totalSize : 0;

                                return (
                                    <Item
                                        key={drive.name}
                                        $active={showFiles && isSamePath(currentPath, drive.name)}
                                        onClick={() => onNavigate(drive.name)}
                                        title={`${drive.label || drive.name} · ${formatBytes(drive.freeSpace)} free of ${formatBytes(drive.totalSize)}`}
                                        type="button"
                                    >
                                        <DriveIcon/>
                                        <Label>
                                            {drive.label || drive.name}
                                            <Hint>{formatBytes(drive.freeSpace)} free of {formatBytes(drive.totalSize)}</Hint>
                                            <Bar>
                                                <Fill $used={used} $tone={usageTone(used)}/>
                                            </Bar>
                                        </Label>
                                    </Item>
                                );
                            })}
                        </Inner>
                    </Sub>
                </Menu>
            </List>

            <Bottom>
                <Item
                    $active={activeKind === "settings"}
                    onClick={() => onOpenView("settings")}
                    title="Settings"
                    type="button"
                >
                    <GearIcon/>
                    <Label>Settings</Label>
                </Item>
            </Bottom>
        </Aside>
    );
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

    &:hover {
        width: 224px;
        padding: 10px 10px;
        box-shadow: 14px 0 34px rgba(0, 0, 0, 0.45);
        /* The open lists can outgrow the window; the rail scrolls instead of clipping them. */
        overflow-y: auto;
        scrollbar-width: none;
    }

    &:hover::-webkit-scrollbar {
        width: 0;
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

/** A button whose list opens in place, pushing everything below it down. */
const Menu = styled.div`
    display: flex;
    flex-direction: column;
`;

const Sub = styled.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    /* Only while the whole rail is open: collapsing the rail collapses every list with it. */
    ${Aside}:hover ${Menu}:hover > &,
    ${Aside}:hover ${Menu}:focus-within > & {
        grid-template-rows: 1fr;
    }
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-height: 0;
    max-height: 42vh;
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
    transition: background 120ms ease, color 120ms ease, border-color 120ms ease;

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
