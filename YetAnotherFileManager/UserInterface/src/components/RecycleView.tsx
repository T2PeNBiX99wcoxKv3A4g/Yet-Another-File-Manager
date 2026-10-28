import {useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {listRecycle, type RecycleEntry} from "../api/files";
import {formatBytes, formatDate} from "../utils/format";
import {RefreshIcon, TrashIcon} from "./Icons";

export function RecycleView() {
    const [entries, setEntries] = useState<RecycleEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const reload = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            setEntries(await listRecycle());
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : String(cause));
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void reload();
    }, [reload]);

    return (
        <Page>
            <Header>
                <Heading>
                    <TrashIcon size={16}/>
                    <span>Recycle Bin</span>
                    <Count>{loading ? "…" : `${entries.length} items`}</Count>
                </Heading>

                <RefreshButton onClick={() => void reload()} title="Refresh" type="button">
                    <RefreshIcon size={14}/>
                </RefreshButton>
            </Header>

            {error && <Message>{error}</Message>}

            {!error && !loading && entries.length === 0 && <Message>The recycle bin is empty.</Message>}

            {entries.length > 0 && (
                <Table>
                    <Head>
                        <span>Name</span>
                        <span>Original location</span>
                        <span>Deleted</span>
                        <span>Size</span>
                    </Head>
                    <Body>
                        {entries.map((entry, index) => (
                            <Row key={`${entry.originalPath}-${index}`} title={entry.originalPath}>
                                <Name>{entry.name}</Name>
                                <Origin>{entry.originalPath}</Origin>
                                <Deleted>{formatDate(entry.deleted)}</Deleted>
                                <Size>{entry.isDirectory ? "—" : formatBytes(entry.size)}</Size>
                            </Row>
                        ))}
                    </Body>
                </Table>
            )}
        </Page>
    );
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`;

const Count = styled.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`;

const RefreshButton = styled.button`
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const Table = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`;

const Head = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr) 170px 110px;
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

const Row = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr) 170px 110px;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    font-size: 13px;
    color: var(--text-secondary);

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const Cell = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Name = styled(Cell)``;

const Origin = styled(Cell)`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`;

const Deleted = styled(Cell)`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`;

const Size = styled(Cell)`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`;

const Message = styled.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;
