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
 * lists (places, recent folders, drives) live in flyouts that drop down from their button on hover.
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
                    <Flyout>
                        <FlyoutList>
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
                        </FlyoutList>
                    </Flyout>
                </Menu>

                {hasRecent && (
                    <Menu>
                        <Item as="div" $active={false}>
                            <ClockIcon/>
                            <Label>Recent</Label>
                        </Item>
                        <Flyout>
                            <FlyoutList>
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
                            </FlyoutList>
                        </Flyout>
                    </Menu>
                )}

                <Menu>
                    <Item as="div" $active={false}>
                        <DriveIcon/>
                        <Label>Drives</Label>
                    </Item>
                    <Flyout>
                        <FlyoutList>
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
                        </FlyoutList>
                    </Flyout>
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
    }

    /* A flyout is only meaningful while the rail is open; clipped otherwise. */
    &:not(:hover) ${() => Flyout} {
        display: none;
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

/** A button with a list that drops down from it while the pointer is on it. */
const Menu = styled.div`
    position: relative;
`;

const Flyout = styled.div`
    position: absolute;
    z-index: 30;
    top: calc(100% + 3px);
    left: 0;
    display: none;
    width: 200px;
    max-height: 340px;
    padding: 4px;
    overflow-y: auto;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);

    ${Menu}:hover > &,
    ${Menu}:focus-within > & {
        display: block;
    }

    &::-webkit-scrollbar {
        width: 6px;
    }
`;

const FlyoutList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
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
