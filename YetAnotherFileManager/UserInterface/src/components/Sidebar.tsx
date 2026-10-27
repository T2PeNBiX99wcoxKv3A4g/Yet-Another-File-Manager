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

export function Sidebar({places, drives, currentPath, onNavigate}: SidebarProps) {
    return (
        <Aside>
            <Brand>
                <BrandMark/>
                <BrandName>YetAnother<wbr/>FileManager</BrandName>
            </Brand>

            <Section>
                <SectionTitle>Places</SectionTitle>
                <List>
                    {places.map((place) => (
                        <Item
                            key={place.path}
                            $active={isSamePath(currentPath, place.path)}
                            onClick={() => onNavigate(place.path)}
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
                    {drives.length === 0 && <Muted>No volumes reported.</Muted>}
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
    display: flex;
    flex-direction: column;
    gap: 26px;
    width: 240px;
    flex-shrink: 0;
    padding: 22px 14px;
    background: var(--bg-secondary);
    border-right: 1px solid var(--border-color);
    overflow-y: auto;
`;

const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 8px;
`;

const BrandMark = styled.span`
    width: 22px;
    height: 22px;
    border-radius: 7px;
    background: var(--accent-gradient);
    box-shadow: var(--accent-glow);
`;

const BrandName = styled.span`
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--text-primary);
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const SectionTitle = styled.h2`
    padding: 0 10px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
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
    padding: 8px 10px;
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Hint = styled.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`;

const Muted = styled.p`
    padding: 4px 10px;
    font-size: 12px;
    color: var(--text-muted);
`;
