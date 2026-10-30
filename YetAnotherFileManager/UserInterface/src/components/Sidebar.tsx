import {useState} from "react";
import styled from "styled-components";
import type {Drive, Place, RecentEntry} from "../api/files";
import type {TabKind} from "../tabs";
import {
    ChevronRightIcon,
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
 * A rail of icons that expands under the pointer. The lists are a collapsed tree: closed until the
 * section title is clicked, and only shown while the rail is open, so the closed rail stays small.
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
    const [open, setOpen] = useState<Record<string, boolean>>({});
    const showFiles = activeKind === "files";
    const isOpen = (id: string) => open[id] ?? false;
    const toggle = (id: string) => setOpen((current) => ({...current, [id]: !current[id]}));

    return (
        <Aside>
            <Section>
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
            </Section>

            <Tree $grow>
                <TreeHead onClick={() => toggle("places")} title="Places" type="button">
                    <Chevron $open={isOpen("places")}><ChevronRightIcon size={11}/></Chevron>
                    <SectionTitle>Places</SectionTitle>
                </TreeHead>
                {isOpen("places") && (
                    <List>
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
                    </List>
                )}
            </Tree>

            {recentLimit > 0 && recent.length > 0 && (
                <Tree>
                    <TreeHead onClick={() => toggle("recent")} title="Recent" type="button">
                        <Chevron $open={isOpen("recent")}><ChevronRightIcon size={11}/></Chevron>
                        <SectionTitle>Recent</SectionTitle>
                    </TreeHead>
                    {isOpen("recent") && (
                        <List>
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
                        </List>
                    )}
                </Tree>
            )}

            <Tree $grow>
                <TreeHead onClick={() => toggle("drives")} title="Drives" type="button">
                    <Chevron $open={isOpen("drives")}><ChevronRightIcon size={11}/></Chevron>
                    <SectionTitle>Drives</SectionTitle>
                </TreeHead>
                {isOpen("drives") && (
                    <List>
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
                    </List>
                )}
            </Tree>

            <Section $bottom>
                <List>
                    <Item
                        $active={activeKind === "settings"}
                        onClick={() => onOpenView("settings")}
                        title="Settings"
                        type="button"
                    >
                        <GearIcon/>
                        <Label>Settings</Label>
                    </Item>
                </List>
            </Section>
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
    gap: 8px;
    width: 52px;
    padding: 10px 9px;
    overflow: hidden;
    background: var(--bg-secondary);
    border-right: 1px solid var(--border-color);
    scrollbar-width: none;
    transition: width 150ms ease, padding 150ms ease, box-shadow 150ms ease;

    &::-webkit-scrollbar {
        display: none;
    }

    &:hover {
        width: 224px;
        padding: 10px 10px;
        box-shadow: 14px 0 34px rgba(0, 0, 0, 0.45);
    }

    /* The tree only exists while the rail is open; the closed rail is a strip of icons. */
    &:not(:hover) ${() => Tree} {
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

const Tree = styled.section<{ $grow?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: ${({$grow}) => $grow ? "1 1 0" : "0 0 auto"};
    min-height: 0;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const TreeHead = styled.button`
    display: flex;
    align-items: center;
    gap: 3px;
    width: 100%;
    padding: 4px 4px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-secondary);
    }
`;

const Chevron = styled.span<{ $open: boolean }>`
    display: grid;
    place-items: center;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    transform: rotate(${({$open}) => $open ? "90deg" : "0deg"});
    transition: transform 130ms ease;
    opacity: 1;
`;

const Section = styled.section<{ $bottom?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex-shrink: 0;
    margin-top: ${({$bottom}) => $bottom ? "auto" : "0"};
`;

const SectionTitle = styled.h2`
    padding: 0 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
    overflow: hidden;
    white-space: nowrap;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding-left: 12px;
`;

const Item = styled.button<{ $active: boolean }>`
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    padding: 6px 7px;
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
