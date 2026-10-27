import styled from "styled-components";
import type {DirectoryListing} from "../api/files";
import {formatBytes, formatDate} from "../utils/format";
import {FileIcon, FolderIcon} from "./Icons";

interface FileListProps {
    listing: DirectoryListing | null;
    loading: boolean;
    error: string | null;
    filter: string;
    onOpen: (path: string) => void;
}

export function FileList({listing, loading, error, filter, onOpen}: FileListProps) {
    if (loading && !listing)
        return <Center><Muted>Loading…</Muted></Center>;

    if (error)
        return <Center><ErrorText>{error}</ErrorText></Center>;

    if (!listing)
        return <Center><Muted>Nothing selected.</Muted></Center>;

    const needle = filter.trim().toLowerCase();
    const entries = needle
        ? listing.entries.filter((entry) => entry.name.toLowerCase().includes(needle))
        : listing.entries;

    return (
        <Wrapper>
            <Head>
                <span>Name</span>
                <span>Size</span>
                <span>Modified</span>
            </Head>

            <Body>
                {entries.map((entry) => (
                    <Row
                        key={entry.fullPath}
                        $hidden={entry.isHidden}
                        onDoubleClick={() => entry.isDirectory && onOpen(entry.fullPath)}
                        title={entry.fullPath}
                    >
                        <Name>
                            {entry.isDirectory ? <FolderIcon/> : <FileIcon/>}
                            <span>{entry.name}</span>
                        </Name>
                        <Size>{entry.isDirectory ? "—" : formatBytes(entry.size)}</Size>
                        <Modified>{formatDate(entry.modified)}</Modified>
                    </Row>
                ))}

                {entries.length === 0 && (
                    <Center>
                        <Muted>{needle ? "No entries match the filter." : "This folder is empty."}</Muted>
                    </Center>
                )}
            </Body>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    flex: 1;
`;

const Head = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) 110px 170px;
    gap: 16px;
    padding: 10px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`;

const Body = styled.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`;

const Row = styled.div<{ $hidden: boolean }>`
    display: grid;
    grid-template-columns: minmax(0, 1fr) 110px 170px;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    font-size: 13px;
    color: var(--text-secondary);
    opacity: ${({$hidden}) => $hidden ? 0.5 : 1};
    cursor: default;
    user-select: none;
    transition: background 100ms ease, border-color 100ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color);
        color: var(--text-primary);
    }
`;

const Name = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const Size = styled.span`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`;

const Modified = styled.span`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`;

const Center = styled.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`;

const Muted = styled.p`
    font-size: 13px;
    color: var(--text-muted);
`;

const ErrorText = styled.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`;
