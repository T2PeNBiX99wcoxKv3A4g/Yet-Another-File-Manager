import {useCallback, useEffect, useMemo, useRef, useState, type MouseEvent as ReactMouseEvent} from "react";
import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";
import {
    deleteRecycleEntries,
    emptyRecycleBin,
    listOrphansAsAdmin,
    listRecycle,
    purgeOrphansAsAdmin,
    restoreRecycleEntries,
    showRecycleProperties,
    type RecycleEntry,
} from "../api/files";
import {useIcon} from "../api/icons";
import {formatBytes, formatDate, plural} from "../utils/format";
import {readStoredJson, readStoredNumber, writeStoredJson, writeStoredNumber} from "../storage";
import {CheckIcon, CopyIcon, FileIcon, FolderIcon, GearIcon, RefreshIcon, TrashIcon} from "./Icons";
import RestoreSvg from "./icons/restore.svg?react";
import {ConfirmDialog} from "./ConfirmDialog";
import {ContextMenu, type ContextMenuItem} from "./ContextMenu";
import {PreviewPane, type PreviewInfo} from "./PreviewPane";

type SortColumn = "name" | "original" | "deleted" | "size" | "type";

interface RecycleViewProps {
    /** Navigates to the folder that held the selected entry, when it still exists. */
    onOpenLocation: (path: string) => void;
    /** Draw the right-side details pane. */
    showDetails?: boolean;
    /** Called when a double click should reveal the details pane. */
    onShowDetails?: () => void;
    /** Play audio in video previews; off means muted. */
    videoAudio?: boolean;
    /** Start a video preview automatically; off means the user presses play. */
    videoAutoplay?: boolean;
    /** The host platform; the elevated all-profiles view only exists on Windows. */
    platform?: string;
}

/**
 * The recycle bin, in the same shape as the file browser: sortable columns, multi-selection, a
 * details strip and a context menu. Windows keeps the records under `$Recycle.Bin`; this view only
 * presents what the host read and asks it for restore/delete.
 */
export function RecycleView({
    onOpenLocation, showDetails = true, onShowDetails, videoAudio = false, videoAutoplay = false,
    platform,
}: RecycleViewProps) {
    const t = useTranslation();
    const isWindows = platform === "windows";
    const [entries, setEntries] = useState<RecycleEntry[]>([]);
    const [adminEntries, setAdminEntries] = useState<RecycleEntry[]>([]);
    const [adminLoaded, setAdminLoaded] = useState(false);
    const [adminNotice, setAdminNotice] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showOrphans, setShowOrphans] = useState(false);
    const [selected, setSelected] = useState<Set<string>>(() => new Set());
    const [anchor, setAnchor] = useState<string | null>(null);
    const [sort, setSort] = useState<{ column: SortColumn; descending: boolean }>(() => {
        const saved = readStoredJson<{ column?: SortColumn; descending?: boolean }>("yafm.recycle.sort");

        if (saved?.column)
            return {column: saved.column, descending: saved.descending === true};

        return {column: "name", descending: false};
    });
    const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);
    const [confirm, setConfirm] = useState<"delete" | "empty" | "purge" | null>(null);
    const [previewWidth, setPreviewWidth] = useState(() => {
        const saved = readStoredNumber("yafm.recycle.preview.width", 320);
        return saved >= 220 ? saved : 320;
    });
    const root = useRef<HTMLDivElement | null>(null);

    const resizePreview = (width: number) => {
        setPreviewWidth(width);
        writeStoredNumber("yafm.recycle.preview.width", width);
    };

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

    useEffect(() => {
        if (!showOrphans) {
            setAdminEntries([]);
            setAdminLoaded(false);
            setAdminNotice(null);
        }
    }, [showOrphans]);

    // A new listing invalidates ids that no longer exist.
    useEffect(() => {
        setSelected((current) => {
            const known = new Set(entries.map((entry) => entry.id));
            const next = new Set([...current].filter((id) => known.has(id)));
            return next.size === current.size ? current : next;
        });
    }, [entries]);

    const rows = useMemo(() => {
        const known = new Set(entries.map((entry) => entry.id));
        const merged = [
            ...entries,
            ...adminEntries.filter((entry) => !known.has(entry.id)).map((entry) => ({...entry, removable: false})),
        ];

        return merged.sort((left, right) => {
            const order = compare(left, right, sort.column);
            return sort.descending ? -order : order;
        });
    }, [entries, adminEntries, sort]);

    const selectedEntries = useMemo(
        () => rows.filter((entry) => selected.has(entry.id)),
        [rows, selected]
    );
    const removable = selectedEntries.filter((entry) => entry.removable && !entry.isOrphan);
    const deletable = selectedEntries.filter((entry) => entry.removable);

    const select = (entry: RecycleEntry, event: ReactMouseEvent) => {
        const additive = event.ctrlKey || event.metaKey;

        setSelected((current) => {
            if (event.shiftKey && anchor) {
                const from = rows.findIndex((row) => row.id === anchor);
                const to = rows.findIndex((row) => row.id === entry.id);

                if (from >= 0 && to >= 0) {
                    const next = additive ? new Set(current) : new Set<string>();
                    const start = Math.min(from, to);
                    const end = Math.max(from, to);

                    for (let index = start; index <= end; index++)
                        next.add(rows[index].id);

                    return next;
                }
            }

            if (additive) {
                const next = new Set(current);
                if (!next.delete(entry.id)) next.add(entry.id);
                return next;
            }

            return new Set([entry.id]);
        });

        setAnchor(entry.id);
    };

    const selectAll = useCallback(() => setSelected(new Set(rows.map((entry) => entry.id))), [rows]);
    const allSelected = rows.length > 0 && rows.every((entry) => selected.has(entry.id));

    const restoreSelected = useCallback(async () => {
        const ids = removable.map((entry) => entry.id);
        if (ids.length === 0) return;

        setBusy(true);
        try {
            const result = await restoreRecycleEntries(ids);
            if (!result.ok)
                window.alert(plural(t, ids.length, "Restored {done} of 1 item.", "Restored {done} of {total} items.", {done: result.done, total: ids.length}));
            setSelected(new Set());
            await reload();
        } finally {
            setBusy(false);
        }
    }, [reload, removable, t]);

    const deleteSelected = useCallback(async () => {
        const ids = deletable.map((entry) => entry.id);
        setConfirm(null);
        if (ids.length === 0) return;

        setBusy(true);
        try {
            const result = await deleteRecycleEntries(ids);
            if (!result.ok && !result.cancelled)
                window.alert(plural(t, ids.length, "Deleted {done} of 1 item.", "Deleted {done} of {total} items.", {done: result.done, total: ids.length}));
            setSelected(new Set());
            await reload();
        } finally {
            setBusy(false);
        }
    }, [deletable, reload, t]);

    const empty = async () => {
        setConfirm(null);
        setBusy(true);

        try {
            await emptyRecycleBin(showOrphans);
            setSelected(new Set());
            await reload();
        } finally {
            setBusy(false);
        }
    };

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

    const purgeAll = async () => {
        setBusy(true);
        setConfirm(null);

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

    const openOriginal = (entry: RecycleEntry) => {
        const cut = Math.max(entry.originalPath.lastIndexOf("\\"), entry.originalPath.lastIndexOf("/"));
        onOpenLocation(cut > 0 ? entry.originalPath.slice(0, cut) : entry.originalPath);
    };

    const copyPath = (entry: RecycleEntry) => {
        void navigator.clipboard.writeText(entry.originalPath);
    };

    const openMenu = (event: ReactMouseEvent, entry?: RecycleEntry) => {
        event.preventDefault();

        if (entry && !selected.has(entry.id))
            setSelected(new Set([entry.id]));

        setMenu({x: event.clientX, y: event.clientY});
    };

    // Keyboard handling only applies while this view is mounted. Text fields keep their keys.
    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            const target = event.target as HTMLElement | null;
            if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable))
                return;

            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "a") {
                event.preventDefault();
                selectAll();
            } else if (event.key === "Delete") {
                event.preventDefault();
                if (deletable.length > 0) setConfirm("delete");
            } else if (event.key === "Enter" && removable.length > 0) {
                event.preventDefault();
                void restoreSelected();
            } else if (event.key === "Escape") {
                setSelected(new Set());
                setMenu(null);
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [deletable.length, removable.length, restoreSelected, selectAll]);

    const menuItems: ContextMenuItem[] = [
        {
            label: t("Restore"),
            icon: <RestoreSvg width={14} height={14}/>,
            disabled: removable.length === 0,
            onSelect: () => void restoreSelected(),
        },
        {
            label: t("Delete permanently"),
            icon: <TrashIcon size={14}/>,
            danger: true,
            disabled: deletable.length === 0,
            onSelect: () => setConfirm("delete"),
        },
        {
            label: t("Properties"),
            icon: <GearIcon size={14}/>,
            disabled: selectedEntries.length !== 1,
            separatorBefore: true,
            onSelect: () => {
                const [entry] = selectedEntries;
                if (entry) void showRecycleProperties(entry.id);
            },
        },
        {
            label: t("Open original location"),
            icon: <FolderIcon size={14}/>,
            disabled: selectedEntries.length !== 1,
            onSelect: () => {
                const [entry] = selectedEntries;
                if (entry) openOriginal(entry);
            },
        },
        {
            label: t("Copy original path"),
            icon: <CopyIcon size={14}/>,
            disabled: selectedEntries.length !== 1,
            onSelect: () => {
                const [entry] = selectedEntries;
                if (entry) copyPath(entry);
            },
        },
        {
            label: t("Select all"),
            separatorBefore: true,
            onSelect: selectAll,
        },
        {
            label: t("Refresh"),
            icon: <RefreshIcon size={14}/>,
            onSelect: () => void reload(),
        },
    ];

    const previewEntry = selectedEntries.length > 0 ? selectedEntries[0] : null;
    const previewInfo: PreviewInfo | null = previewEntry
        ? {
            name: previewEntry.name,
            path: previewEntry.contentPath || previewEntry.originalPath,
            isDirectory: previewEntry.isDirectory,
            size: previewEntry.size,
            modified: previewEntry.deleted,
            fields: [
                {label: t("Type"), value: t(typeOf(previewEntry))},
                {label: t("Original location"), value: previewEntry.originalPath},
                {label: t("Date deleted"), value: formatDate(previewEntry.deleted)},
                {
                    label: t("Size"),
                    value: previewEntry.isDirectory ? "—" : formatBytes(previewEntry.size),
                },
                ...(previewEntry.owner ? [{label: t("Owner"), value: previewEntry.owner}] : []),
                {
                    label: t("Status"),
                    value: previewEntry.isOrphan
                        ? t("Metadata only")
                        : previewEntry.removable ? t("Restorable") : t("Other profile"),
                },
            ],
        }
        : null;

    return (
        <Page ref={root} onContextMenu={(event) => openMenu(event)}>
            <Header>
                <Heading>
                    <TrashIcon size={16}/>
                    <span>{t("Recycle Bin")}</span>
                    <Count>
                        {loading ? "…" : plural(t, rows.length, "1 item", "{count} items")}
                        {selected.size > 0 && ` · ${t("{count} selected", {count: selected.size})}`}
                    </Count>
                </Heading>

                <Actions>
                    <OrphanButton
                        $on={showOrphans}
                        onClick={() => setShowOrphans((current) => !current)}
                        title={t("Show metadata records whose content is already gone")}
                        type="button"
                    >
                        {t("Orphans")}
                    </OrphanButton>

                    {showOrphans && isWindows && (
                        <>
                            <ActionButton
                                disabled={busy || adminLoaded}
                                onClick={() => void loadAdmin()}
                                title={adminLoaded
                                    ? t("The administrator view is already loaded")
                                    : t("Ask for administrator rights and list every profile's leftovers")}
                                type="button"
                            >
                                {busy ? t("Working…") : adminLoaded ? t("Admin view loaded") : t("Show all (admin)…")}
                            </ActionButton>
                            {adminLoaded && adminEntries.length > 0 && (
                                <ActionButton disabled={busy} onClick={() => setConfirm("purge")} type="button">
                                    {t("Delete every orphan")}
                                </ActionButton>
                            )}
                        </>
                    )}

                    <ActionButton
                        disabled={busy || removable.length === 0}
                        onClick={() => void restoreSelected()}
                        type="button"
                    >
                        {t("Restore")}
                    </ActionButton>

                    <ActionButton
                        $danger
                        disabled={busy || deletable.length === 0}
                        onClick={() => setConfirm("delete")}
                        type="button"
                    >
                        {t("Delete")}
                    </ActionButton>

                    <ActionButton
                        disabled={busy || rows.length === 0}
                        onClick={() => setConfirm("empty")}
                        type="button"
                    >
                        {t("Empty")}
                    </ActionButton>

                    <IconButton onClick={() => void reload()} title={t("Refresh")} type="button">
                        <RefreshIcon size={14}/>
                    </IconButton>
                </Actions>
            </Header>

            {adminNotice && <Notice>{adminNotice}</Notice>}
            {error && <Message>{error}</Message>}
            {!error && !loading && rows.length === 0 && <Message>{t("The recycle bin is empty.")}</Message>}

            {rows.length > 0 && (
                <SplitPane>
                    <Table>
                        <Head>
                            <SelectAll
                                $checked={allSelected}
                                $partial={!allSelected && selected.size > 0}
                                onClick={() => allSelected ? setSelected(new Set()) : selectAll()}
                                title={allSelected ? t("Select none") : t("Select all")}
                                type="button"
                            >
                                {allSelected ? <CheckIcon size={9}/> : selected.size > 0 && <Dash/>}
                            </SelectAll>
                            <SortButton onClick={() => toggleSort("name")} type="button">
                                {t("Name")}{mark(sort, "name")}
                            </SortButton>
                            <SortButton onClick={() => toggleSort("original")} type="button">
                                {t("Original location")}{mark(sort, "original")}
                            </SortButton>
                            <SortButton onClick={() => toggleSort("deleted")} type="button">
                                {t("Date deleted")}{mark(sort, "deleted")}
                            </SortButton>
                            <SortButton onClick={() => toggleSort("size")} type="button">
                                {t("Size")}{mark(sort, "size")}
                            </SortButton>
                            <SortButton onClick={() => toggleSort("type")} type="button">
                                {t("Type")}{mark(sort, "type")}
                            </SortButton>
                            <span/>
                        </Head>
                        <Body
                            onClick={(event) => {
                                if (event.target === event.currentTarget)
                                    setSelected(new Set());
                            }}
                        >
                            {rows.map((entry) => (
                                <Row
                                    $checked={selected.has(entry.id)}
                                    $orphan={entry.isOrphan}
                                    key={entry.id}
                                    onClick={(event) => select(entry, event)}
                                    onContextMenu={(event) => openMenu(event, entry)}
                                    onDoubleClick={() => {
                                        // A double click only reveals the details pane; restoring
                                        // stays on the Restore button now.
                                        setSelected(new Set([entry.id]));
                                        setAnchor(entry.id);
                                        onShowDetails?.();
                                    }}
                                    title={entry.owner ? `${entry.originalPath} · ${entry.owner}` : entry.originalPath}
                                >
                                    <CheckBox $checked={selected.has(entry.id)}>
                                        {selected.has(entry.id) && <CheckIcon size={9}/>}
                                    </CheckBox>
                                    <NameCell>
                                        <EntryIcon entry={entry}/>
                                        <span>{entry.name}</span>
                                        {entry.isOrphan && <Tag>{t("metadata only")}</Tag>}
                                        {entry.owner && <Tag $other>{t("other profile")}</Tag>}
                                    </NameCell>
                                    <Origin>{entry.originalPath}</Origin>
                                    <Deleted>{formatDate(entry.deleted)}</Deleted>
                                    <Size>{entry.isDirectory ? "—" : formatBytes(entry.size)}</Size>
                                    <Type>{t(typeOf(entry))}</Type>
                                    <RowActions>
                                        {entry.removable && !entry.isOrphan && (
                                            <RowButton
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    void restoreRecycleEntries([entry.id]).then(reload);
                                                }}
                                                title={t("Restore to its original folder")}
                                                type="button"
                                            >
                                                <RestoreSvg/>
                                            </RowButton>
                                        )}
                                        {entry.removable && (
                                            <RowButton
                                                $danger
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setSelected(new Set([entry.id]));
                                                    setConfirm("delete");
                                                }}
                                                title={entry.isOrphan ? t("Remove the leftover record") : t("Delete permanently")}
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

                    {showDetails && (
                        <PreviewPane
                            emptyNote={t("Nothing selected.")}
                            info={previewInfo}
                            onWidth={resizePreview}
                            selectionNote={selectedEntries.length > 1
                                ? plural(t, selectedEntries.length, "1 item selected", "{count} items selected")
                                : undefined}
                            videoAudio={videoAudio}
                            videoAutoplay={videoAutoplay}
                            width={previewWidth}
                        />
                    )}
                </SplitPane>
            )}

            {menu && <ContextMenu items={menuItems} onClose={() => setMenu(null)} x={menu.x} y={menu.y}/>}

            <ConfirmDialog
                confirmLabel={confirm === "empty"
                    ? t("Empty the bin")
                    : confirm === "purge" ? t("Delete every orphan") : t("Delete")}
                danger
                message={confirm === "empty"
                    ? plural(t, rows.length, "Permanently delete 1 item? This cannot be undone.", "Permanently delete {count} items? This cannot be undone.")
                    : confirm === "purge"
                        ? t("Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.")
                        : plural(t, deletable.length, "Permanently delete 1 selected item? This cannot be undone.", "Permanently delete {count} selected items? This cannot be undone.")}
                onCancel={() => setConfirm(null)}
                onConfirm={() => {
                    if (confirm === "empty") void empty();
                    else if (confirm === "purge") void purgeAll();
                    else void deleteSelected();
                }}
                open={confirm !== null}
                title={confirm === "empty"
                    ? t("Empty the recycle bin")
                    : confirm === "purge" ? t("Delete every orphan") : t("Delete permanently")}
            />
        </Page>
    );

    function toggleSort(column: SortColumn) {
        setSort((current) => {
            const next = current.column === column
                ? {column, descending: !current.descending}
                : {column, descending: column === "deleted"};

            writeStoredJson("yafm.recycle.sort", next);
            return next;
        });
    }
}

function compare(left: RecycleEntry, right: RecycleEntry, column: SortColumn): number {
    switch (column) {
        case "name":
            return left.name.localeCompare(right.name, undefined, {numeric: true, sensitivity: "base"});
        case "original":
            return left.originalPath.localeCompare(right.originalPath, undefined, {numeric: true, sensitivity: "base"});
        case "deleted":
            return left.deleted - right.deleted;
        case "size":
            return left.size - right.size;
        case "type":
            return typeOf(left).localeCompare(typeOf(right), undefined, {sensitivity: "base"});
    }
}

function mark(sort: { column: SortColumn; descending: boolean }, column: SortColumn): string {
    if (sort.column !== column) return "";
    return sort.descending ? " ↓" : " ↑";
}

function typeOf(entry: RecycleEntry): string {
    if (entry.isDirectory) return "Folder";
    const dot = entry.name.lastIndexOf(".");
    return dot > 0 && dot < entry.name.length - 1 ? entry.name.slice(dot + 1).toUpperCase() : "File";
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

const ActionButton = styled.button<{ $danger?: boolean }>`
    padding: 5px 10px;
    border: 1px solid ${({$danger}) => $danger ? "rgba(248, 113, 113, 0.35)" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: ${({$danger}) => $danger ? "#fca5a5" : "var(--text-secondary)"};
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: ${({$danger}) => $danger ? "rgba(248, 113, 113, 0.6)" : "var(--border-color-hover)"};
        background: var(--bg-card-hover);
        color: ${({$danger}) => $danger ? "#fecaca" : "var(--text-primary)"};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;

const OrphanButton = styled(ActionButton)<{ $on: boolean }>`
    border-color: ${({$on}) => $on ? "var(--border-color-hover)" : "var(--border-color)"};
    background: ${({$on}) => $on ? "rgba(var(--accent-secondary-rgb), 0.16)" : "var(--bg-input)"};
    color: ${({$on}) => $on ? "var(--text-primary)" : "var(--text-secondary)"};
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

const Columns = `24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`;

const Head = styled.div`
    display: grid;
    grid-template-columns: ${Columns};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`;

const SortButton = styled.button`
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        color: var(--text-primary);
    }
`;

const Body = styled.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`;

const Row = styled.div<{ $orphan: boolean; $checked: boolean }>`
    display: grid;
    grid-template-columns: ${Columns};
    gap: 14px;
    align-items: center;
    padding: 8px 12px;
    border: 1px solid ${({$checked}) => $checked ? "rgba(var(--accent-rgb), 0.38)" : "transparent"};
    border-radius: var(--radius-sm);
    background: ${({$checked}) => $checked ? "rgba(var(--accent-rgb), 0.1)" : "transparent"};
    font-size: 13px;
    color: var(--text-secondary);
    opacity: ${({$orphan}) => $orphan ? 0.72 : 1};
    cursor: default;
    user-select: none;

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

const CheckBox = styled.span<{ $checked: boolean }>`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked}) => $checked ? "var(--border-color-focus)" : "var(--border-color-hover)"};
    border-radius: 4px;
    background: ${({$checked}) => $checked ? "var(--accent-primary)" : "transparent"};
    color: #fff;
`;

/** The header's select-all box; a dash means only some rows are selected. */
const SelectAll = styled.button<{ $checked: boolean; $partial: boolean }>`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    padding: 0;
    border: 1px solid ${({$checked, $partial}) => $checked || $partial
        ? "var(--border-color-focus)"
        : "var(--border-color-hover)"};
    border-radius: 4px;
    background: ${({$checked, $partial}) => $checked || $partial
        ? "var(--accent-primary)"
        : "transparent"};
    color: #fff;
    cursor: pointer;
    transition: border-color 120ms ease, background 120ms ease;

    &:hover {
        border-color: var(--border-color-focus);
    }
`;

const Dash = styled.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`;

const NameCell = styled(Cell)`
    display: flex;
    align-items: center;
    gap: 9px;
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
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`;

const Deleted = styled(Cell)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`;

const Size = styled(Cell)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`;

const Type = styled(Cell)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`;

const RowActions = styled.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`;

const RowButton = styled.button<{ $danger?: boolean }>`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
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

const SplitPane = styled.div`
    display: flex;
    flex: 1;
    min-height: 0;
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
