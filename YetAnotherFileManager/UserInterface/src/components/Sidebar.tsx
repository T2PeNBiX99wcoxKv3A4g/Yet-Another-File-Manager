import styled from "styled-components";
import type {Drive, Place} from "../api/files";
import {DriveIcon, FolderIcon, HomeIcon} from "./Icons";
import {formatBytes} from "../utils/format";

interface SidebarProps {
    places: Place[];
    drives: Drive[];
    currentPath: string;
    onNavigate: (path: string) => void;
}

/**
 * A rail of icons that expands under the pointer. It is positioned over the content rather than
 * beside it, so revealing the labels never reflows the file list.
 */
export function Sidebar({places, drives, currentPath, onNavigate}: SidebarProps) {
    return (
        <Aside>
            <Section>
                <SectionTitle>Places</SectionTitle>
                <List>
                    {places.map((place) => (
                        <Item
                            key={place.path}
                            $active={isSamePath(currentPath, place.path)}
                            onClick={() => onNavigate(place.path)}
                            title={place.path}
                            type="button"
                        >
                            {place.kind === "home" ? <HomeIcon/> : <FolderIcon/>}
                            <Label>{place.name}</Label>
                        </Item>
                    ))}
                </List>
            </Section>

            <Section>
                <SectionTitle>Drives</SectionTitle>
                <List>
                    {drives.map((drive) => (
                        <Item
                            key={drive.name}
                            $active={isSamePath(currentPath, drive.name)}
                            onClick={() => onNavigate(drive.name)}
                            title={`${drive.label || drive.name} · ${formatBytes(drive.freeSpace)} free of ${formatBytes(drive.totalSize)}`}
                            type="button"
                        >
                            <DriveIcon/>
                            <Label>
                                {drive.label || drive.name}
                                <Hint>{drive.name}</Hint>
                            </Label>
                        </Item>
                    ))}
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
    gap: 18px;
    width: 56px;
    padding: 14px 11px;
    overflow-x: hidden;
    overflow-y: auto;
    background: var(--bg-secondary);
    border-right: 1px solid var(--border-color);
    scrollbar-width: none;
    transition: width 150ms ease, padding 150ms ease, box-shadow 150ms ease;

    &::-webkit-scrollbar {
        display: none;
    }

    &:hover {
        width: 232px;
        padding: 14px 12px;
        box-shadow: 14px 0 34px rgba(0, 0, 0, 0.45);
    }

    &:hover span {
        opacity: 1;
    }
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex-shrink: 0;
`;

const SectionTitle = styled.h2`
    padding: 0 8px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    opacity: 0;
    transition: opacity 130ms ease;
    white-space: nowrap;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const Item = styled.button<{ $active: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 8px 8px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: ${({$active}) => $active ? "rgba(99, 102, 241, 0.14)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 13px;
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
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Hint = styled.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`;
