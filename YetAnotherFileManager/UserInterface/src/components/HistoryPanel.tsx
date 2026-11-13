import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {type HistoryEntry, listHistory, undoHistory} from "../api/history";
import {formatClock} from "../utils/format";
import {elevatedPanel} from "../ui/panel";
import {panelInStyle} from "../ui/motion";
import {ArchiveIcon, ArrowRightIcon, ClockIcon, CopyIcon, CrossIcon, PencilIcon, PlusIcon, TrashIcon} from "./Icons";
import {type Translate, useTranslation} from "@photino-net-utils/bridge";

/** The panel's session history, newest first, with an undo button per row. */
export function HistoryPanel() {
    const t = useTranslation();
    const [open, setOpen] = useState(false);
    const [entries, setEntries] = useState<HistoryEntry[]>([]);
    const [busy, setBusy] = useState(false);
    const root = useRef<HTMLDivElement | null>(null);

    const load = () => void listHistory().then(setEntries, () => setEntries([]));

    useEffect(() => {
        if (!open) return;

        load();
        const timer = window.setInterval(load, 1000);
        const close = (event: PointerEvent) => {
            if (!root.current?.contains(event.target as Node)) setOpen(false);
        };
        const dismiss = () => setOpen(false);
        window.addEventListener("pointerdown", close);
        window.addEventListener("blur", dismiss);
        return () => {
            window.clearInterval(timer);
            window.removeEventListener("pointerdown", close);
            window.removeEventListener("blur", dismiss);
        };
    }, [open]);

    const undo = async (id: number) => {
        setBusy(true);
        try {
            await undoHistory(id);
            load();
        } finally {
            setBusy(false);
        }
    };

    return (
        <Root ref={root}>
            <Button
                $active={open}
                onClick={() => setOpen((value) => !value)}
                title={t("history")}
                type="button"
            >
                <ClockIcon size={14}/>
            </Button>

            {open && (
                <Panel>
                    <Head>
                        <Title>{t("history")}</Title>
                        <Close onClick={() => setOpen(false)} title={t("close")} type="button">
                            <CrossIcon size={10}/>
                        </Close>
                    </Head>

                    {entries.length === 0
                        ? <Empty>{t("no_operations_yet")}</Empty>
                        : (
                            <Rows>
                                {entries.map((entry) => (
                                    <Row key={entry.id}>
                                        <RowHead>
                                            <Name>
                                                <HistoryIcon label={entry.label}/>
                                                {historyLabel(t, entry.label)}
                                            </Name>
                                            <Time>{formatClock(entry.at)}</Time>
                                        </RowHead>
                                        {entry.paths.length > 0 && (
                                            <Paths title={entry.paths.join("\n")}>
                                                {entry.paths.slice(0, 3).join(" · ")}
                                                {entry.paths.length > 3 ? ` +${entry.paths.length - 3}` : ""}
                                            </Paths>
                                        )}
                                        <Actions>
                                            <Undo
                                                disabled={!entry.applied || !entry.restorable || busy}
                                                onClick={() => void undo(entry.id)}
                                                type="button"
                                            >
                                                {t("undo")}
                                            </Undo>
                                        </Actions>
                                    </Row>
                                ))}
                            </Rows>
                        )}
                </Panel>
            )}
        </Root>
    );
}

function historyLabel(t: Translate, label: string): string {
    if (label === "new_folder") return t("new_folder");
    if (label === "new_file") return t("new_file");
    if (label === "paste_text") return t("paste_text");
    if (label === "paste_image") return t("paste_image");

    const counted = label.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);
    if (counted) {
        const action = counted[1];
        const count = Number(counted[2]);
        const key = action === "move" ? "move_count_items"
            : action === "copy" ? "copy_count_items" : "delete_count_items";
        return t(key, {count});
    }

    const compress = label.match(/^Compress (.+)$/);
    if (compress) return `${t("compress")} ${compress[1]}`;

    const rename = label.match(/^Rename (.+)$/);
    if (rename) return `${t("rename")} ${rename[1]}`;

    return label;
}

function HistoryIcon({label}: { label: string }) {
    if (label.startsWith("delete")) return <TrashIcon size={13}/>;
    if (label.startsWith("move") || label.startsWith("copy")) return <CopyIcon size={13}/>;
    if (label.startsWith("rename")) return <PencilIcon size={13}/>;
    if (label.startsWith("compress")) return <ArchiveIcon size={13}/>;
    if (label.startsWith("new")) return <PlusIcon size={13}/>;
    return <ArrowRightIcon size={13}/>;
}

const Root = styled.div`
    position: relative;
    display: flex;
`;

const Button = styled.button<{ $active: boolean }>`
    display: grid;
    place-items: center;
    width: 38px;
    height: 100%;
    border: 0;
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.12)" : "transparent"};
    color: ${({$active}) => $active ? "var(--accent-primary)" : "var(--text-secondary)"};
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`;

const Panel = styled.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${elevatedPanel}
    ${panelInStyle}
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`;

const Title = styled.span`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.1em;
    text-transform: uppercase;

    &::before {
        content: "";
        width: 2px;
        height: 10px;
        border-radius: 2px;
        background: var(--accent-gradient);
    }
`;

const Close = styled.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const Rows = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`;

const RowHead = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`;

const Name = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }
`;

const Time = styled.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`;

const Paths = styled.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Undo = styled.button`
    padding: 2px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`;

const Empty = styled.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;
