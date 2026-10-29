import styled from "styled-components";
import type {Drive, Place} from "../api/files";
import {DriveIcon, FolderIcon, HomeIcon} from "./Icons";
import {formatBytes, usageTone} from "../utils/format";

interface OverviewViewProps {
    places: Place[];
    drives: Drive[];
    onOpen: (path: string) => void;
}

/** The overview page: the same shortcuts the sidebar offers, with the volumes beside them. */
export function OverviewView({places, drives, onOpen}: OverviewViewProps) {
    return (
        <Page>
            <Section>
                <Title>Quick access</Title>
                <Places>
                    {places.map((place) => (
                        <Card key={place.path} onClick={() => onOpen(place.path)} title={place.path} type="button">
                            <CardIcon>{place.kind === "home" ? <HomeIcon size={20}/> : <FolderIcon size={20}/>}</CardIcon>
                            <CardText>
                                <strong>{place.name}</strong>
                                <span>{place.path}</span>
                            </CardText>
                        </Card>
                    ))}
                </Places>
            </Section>

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

const Title = styled.h1`
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--text-primary);
`;

const Places = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 10px;
`;

const Card = styled.button`
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
    cursor: pointer;
    transition: border-color 120ms ease, background 120ms ease, transform 120ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        transform: translateY(-1px);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
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
