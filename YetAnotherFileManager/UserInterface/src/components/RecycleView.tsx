import {useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {
    deleteRecycleEntry,
    emptyRecycleBin,
    listOrphansAsAdmin,
    listRecycle,
    purgeOrphansAsAdmin,
    restoreRecycleEntry,
    type RecycleEntry,
} from "../api/files";
import {useIcon} from "../api/icons";
import {formatBytes, formatDate} from "../utils/format";
import {CheckIcon, CrossIcon, FileIcon, FolderIcon, RefreshIcon, TrashIcon} from "./Icons";
import RestoreSvg from "./icons/restore.svg?react";

export function RecycleView() {
    const [entries, setEntries] = useState<RecycleEntry[]>([]);
    const [adminEntries, setAdminEntries] = useState<RecycleEntry[]>([]);
    const [adminLoaded, setAdminLoaded] = useState(false);
    const [adminNotice, setAdminNotice] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [confirming, setConfirming] = useState(false);
    const [showOrphans, setShowOrphans] = useState(false);

    const reload = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            setEntries(await listRecycle(showOrphans));
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : String(cause));
        } finally {
            setLoading(false);
        }
    }, [showOrphans]);

    useEffect(() => {
        void reload();
    }, [reload]);

    // The elevated snapshot only makes sense while its mode is on.
    useEffect(() => {
        if (!showOrphans) {
            setAdminEntries([]);
            setAdminLoaded(false);
            setAdminNotice(null);
        }
    }, [showOrphans]);

    const restore = async (id: string) => {
        await restoreRecycleEntry(id);
        await reload();
    };

    const empty = async () => {
        setConfirming(false);
        await emptyRecycleBin(showOrphans);
        await reload();
    };

    const remove = async (id: string) => {
        await deleteRecycleEntry(id);
        await reload();
    };

    /** Asks the elevated copy for everything it can see; this window cannot read those folders. */
    const loadAdmin = async () => {
        setBusy(true);
        setAdminNotice(null);

        try {
            const result = await listOrphansAsAdmin();

            if (result.cancelled) {
                setAdminNotice("Elevation was declined — nothing was read.");
                return;
            }

            if (result.failed) {
                setAdminNotice("The elevated helper could not produce a report. Try again.");
                return;
            }

            setAdminEntries(result.entries);
            setAdminLoaded(true);
        } finally {
            setBusy(false);
        }
    };

    /** Deletes every leftover record, this profile's and the others'. */
    const purgeAll = async () => {
        setBusy(true);
        setConfirming(false);

        try {
            await purgeOrphansAsAdmin();
            setAdminEntries([]);
            setAdminLoaded(false);
            setAdminNotice(null);
            await reload();
        } finally {
            setBusy(false);
        }
    };

    // The normal listing wins on duplicates: it knows what this account may actually delete.
    const known = new Set(entries.map((entry) => entry.id));
    const rows = [
        ...entries,
        ...adminEntries.filter((entry) => !known.has(entry.id)).map((entry) => ({...entry, removable: false}))
    ].sort((left, right) => right.deleted - left.deleted);

    return (
        <Page>
            <Header>
                <Heading>
                    <TrashIcon size={16}/>
                    <span>Recycle Bin</span>
                    <Count>{loading ? "…" : `${rows.length} items`}</Count>
                </Heading>

                <Actions>
                    <OrphanButton
                        $on={showOrphans}
                        onClick={() => setShowOrphans((current) => !current)}
                        title="Show metadata records whose content is already gone"
                        type="button"
                    >
                        Orphans
                    </OrphanButton>

                    {showOrphans ? (
                        <>
                            <EmptyButton
                                disabled={busy || adminLoaded}
                                onClick={() => void loadAdmin()}
                                title={adminLoaded
                                    ? "The administrator view is already loaded"
                                    : "Ask for administrator rights and list every profile's leftovers"}
                                type="button"
                            >
                                {busy ? "Working…" : adminLoaded ? "Admin view loaded" : "Show all (admin)…"}
                            </EmptyButton>

                            {confirming ? (
                                <>
                                    <ConfirmButton $danger disabled={busy} onClick={() => void purgeAll()} type="button">
                                        <CheckIcon size={12}/> Delete every orphan
                                    </ConfirmButton>
                                    <IconButton onClick={() => setConfirming(false)} title="Cancel" type="button">
                                        <CrossIcon size={12}/>
                                    </IconButton>
                                </>
                            ) : (
                                <EmptyButton
                                    disabled={busy || rows.length === 0}
                                    onClick={() => setConfirming(true)}
                                    title="Runs an elevated copy of the app and deletes every leftover record"
                                    type="button"
                                >
                                    Delete all orphans…
                                </EmptyButton>
                            )}
                        </>
                    ) : confirming ? (
                        <>
                            <ConfirmButton $danger onClick={() => void empty()} type="button">
                                <CheckIcon size={12}/> Delete everything
                            </ConfirmButton>
                            <IconButton onClick={() => setConfirming(false)} title="Cancel" type="button">
                                <CrossIcon size={12}/>
                            </IconButton>
                        </>
                    ) : (
                        <EmptyButton
                            disabled={rows.length === 0}
                            onClick={() => setConfirming(true)}
                            type="button"
                        >
                            Empty
                        </EmptyButton>
                    )}

                    <IconButton onClick={() => void reload()} title="Refresh" type="button">
                        <RefreshIcon size={14}/>
                    </IconButton>
                </Actions>
            </Header>

            {adminNotice && <Notice>{adminNotice}</Notice>}

            {error && <Message>{error}</Message>}

            {!error && !loading && rows.length === 0 && <Message>The recycle bin is empty.</Message>}

            {rows.length > 0 && (
                <Table>
                    <Head>
                        <span>Name</span>
                        <span>Original location</span>
                        <span>Deleted</span>
                        <span>Size</span>
                        <span/>
                    </Head>
                    <Body>
                        {rows.map((entry) => (
                            <Row
                                key={entry.id}
                                $orphan={entry.isOrphan}
                                title={entry.owner ? `${entry.originalPath} · ${entry.owner}` : entry.originalPath}
                            >
                                <NameCell>
                                    <EntryIcon entry={entry}/>
                                    <span>{entry.name}</span>
                                    {entry.isOrphan && <Tag>metadata only</Tag>}
                                    {entry.owner && <Tag $other>other profile</Tag>}
                                </NameCell>
                                <Origin>{entry.originalPath}</Origin>
                                <Deleted>{formatDate(entry.deleted)}</Deleted>
                                <Size>{entry.isDirectory ? "—" : formatBytes(entry.size)}</Size>
                                <RowActions>
                                    {!entry.isOrphan && entry.removable && (
                                        <RowButton
                                            onClick={() => void restore(entry.id)}
                                            title="Restore to its original folder"
                                            type="button"
                                        >
                                            <RestoreSvg/>
                                        </RowButton>
                                    )}
                                    {entry.removable && (
                                        <RowButton
                                            $danger
                                            onClick={() => void remove(entry.id)}
                                            title={entry.isOrphan ? "Remove the leftover record" : "Delete permanently"}
                                            type="button"
                                        >
                                            <TrashIcon size={13}/>
                                        </RowButton>
                                    )}
                                </RowActions>
                            </Row>
                        ))}
                    </Body>
                </Table>
            )}
        </Page>
    );
}

function EntryIcon({entry}: { entry: RecycleEntry }) {
    // The stored file no longer exists, so the shell answers from the extension.
    const icon = useIcon(entry.originalPath, entry.isDirectory);

    return (
        <IconSlot>
            {icon
                ? <img alt="" height={18} src={icon} width={18}/>
                : entry.isDirectory ? <FolderIcon/> : <FileIcon/>}
        </IconSlot>
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

const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const OrphanButton = styled.button<{ $on: boolean }>`
    padding: 5px 10px;
    border: 1px solid ${({$on}) => $on ? "var(--border-color-hover)" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: ${({$on}) => $on ? "rgba(99, 102, 241, 0.16)" : "var(--bg-input)"};
    color: ${({$on}) => $on ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const Tag = styled.span<{ $other?: boolean }>`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other}) => $other ? "rgba(148, 163, 184, 0.35)" : "rgba(251, 191, 36, 0.35)"};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other}) => $other ? "var(--text-muted)" : "#fcd34d"};
    white-space: nowrap;
`;

const EmptyButton = styled.button`
    padding: 5px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;

const ConfirmButton = styled(EmptyButton)<{ $danger?: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-color: ${({$danger}) => $danger ? "rgba(248, 113, 113, 0.5)" : "var(--border-color)"};
    color: ${({$danger}) => $danger ? "#fca5a5" : "var(--text-secondary)"};

    &:hover:not(:disabled) {
        background: rgba(248, 113, 113, 0.14);
        color: #fecaca;
    }
`;

const IconButton = styled.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
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
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr) 170px 100px 56px;
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

const Row = styled.div<{ $orphan: boolean }>`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr) 170px 100px 56px;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    font-size: 13px;
    color: var(--text-secondary);
    opacity: ${({$orphan}) => $orphan ? 0.72 : 1};

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
        opacity: 1;
    }

    &:hover button {
        opacity: 1;
    }
`;

const Cell = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const NameCell = styled(Cell)`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const IconSlot = styled.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
    }
`;

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

const RowActions = styled.span`
    display: flex;
    justify-content: flex-end;
    gap: 4px;
`;

const RowButton = styled.button<{ $danger?: boolean }>`
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    opacity: 0;
    transition: opacity 120ms ease, background 120ms ease;

    svg {
        width: 13px;
        height: 13px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.7;
    }

    &:hover {
        background: ${({$danger}) => $danger ? "rgba(248, 113, 113, 0.2)" : "rgba(148, 163, 184, 0.2)"};
        color: ${({$danger}) => $danger ? "#fca5a5" : "var(--text-primary)"};
    }
`;

const Notice = styled.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`;

const Message = styled.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;
