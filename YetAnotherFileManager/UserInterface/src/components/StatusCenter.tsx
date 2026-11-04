import {useEffect, useRef} from "react";
import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";
import type {TaskInfo} from "../api/tasks";
import {formatBytes, plural} from "../utils/format";
import {CheckIcon, ClockIcon, CrossIcon} from "./Icons";
import {elevatedPanel} from "../ui/panel";

interface StatusCenterProps {
    tasks: TaskInfo[];
    onClear: () => void;
    /** The window opens the panel itself when a delete starts. */
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

/** The title bar's activity button and the floating list of running and finished operations. */
export function StatusCenter({tasks, onClear, open, onOpenChange}: StatusCenterProps) {
    const t = useTranslation();
    const root = useRef<HTMLDivElement | null>(null);
    const running = tasks.filter((task) => task.state === "running").length;

    useEffect(() => {
        if (!open) return;

        const close = (event: PointerEvent) => {
            if (!root.current?.contains(event.target as Node)) onOpenChange(false);
        };

        window.addEventListener("pointerdown", close);
        return () => window.removeEventListener("pointerdown", close);
    }, [open, onOpenChange]);

    return (
        <Root ref={root}>
            <ActivityButton
                $active={open}
                onClick={() => onOpenChange(!open)}
                title={running > 0 ? plural(t, running, "1 operation running", "{count} operations running") : t("Activity")}
                type="button"
            >
                <ClockIcon size={13}/>
                {running > 0 && <Badge>{running > 9 ? "9+" : running}</Badge>}
            </ActivityButton>

            {open && (
                <Panel>
                    <PanelHead>
                        <PanelTitle>{t("Activity")}</PanelTitle>
                        <PanelActions>
                            <TextButton
                                disabled={tasks.every((task) => task.state === "running")}
                                onClick={onClear}
                                type="button"
                            >
                                {t("Clear finished")}
                            </TextButton>
                            <ClosePanel onClick={() => onOpenChange(false)} title={t("Close")} type="button">
                                <CrossIcon size={10}/>
                            </ClosePanel>
                        </PanelActions>
                    </PanelHead>

                    {tasks.length === 0
                        ? <Empty>{t("No operations yet.")}</Empty>
                        : (
                            <List>
                                {tasks.map((task) => <TaskRow key={task.id} task={task}/>)}
                            </List>
                        )}
                </Panel>
            )}
        </Root>
    );
}

function TaskRow({task}: { task: TaskInfo }) {
    const total = task.bytesTotal > 0 ? task.bytesTotal : task.total;
    const done = task.bytesTotal > 0 ? task.bytesDone : task.done;
    const percent = total > 0 ? Math.min(100, (done / total) * 100) : 0;
    const running = task.state === "running";

    return (
        <Row>
            <RowHead>
                <State $state={task.state}>
                    {task.state === "done"
                        ? <CheckIcon size={10}/>
                        : task.state === "failed"
                            ? <CrossIcon size={10}/>
                            : <Spin/>}
                </State>
                <RowLabel title={task.label}>{task.label}</RowLabel>
                {task.bytesTotal > 0 && (
                    <RowMeta>{formatBytes(task.bytesDone)} / {formatBytes(task.bytesTotal)}</RowMeta>
                )}
                {task.bytesTotal === 0 && task.total > 0 && (
                    <RowMeta>{task.done} / {task.total}</RowMeta>
                )}
            </RowHead>

            {running && <Bar><Fill $percent={percent} $indeterminate={total === 0}/></Bar>}
            {task.error && <RowError>{task.error}</RowError>}
        </Row>
    );
}

const Root = styled.div`
    position: relative;
    display: flex;
`;

const ActivityButton = styled.button<{ $active: boolean }>`
    position: relative;
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

const Badge = styled.span`
    position: absolute;
    top: 6px;
    right: 5px;
    min-width: 13px;
    height: 13px;
    padding: 0 3px;
    border-radius: 999px;
    background: var(--accent-gradient);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.5);
    color: #fff;
    font-family: var(--font-mono);
    font-size: 8px;
    line-height: 13px;
    text-align: center;
`;

const Panel = styled.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${elevatedPanel}
    animation: yafm-activity-in 150ms cubic-bezier(0.22, 1, 0.36, 1);

    @keyframes yafm-activity-in {
        from {
            opacity: 0;
            transform: translateY(-6px) scale(0.985);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`;

const PanelHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`;

const PanelTitle = styled.span`
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

const PanelActions = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const TextButton = styled.button`
    padding: 4px 7px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 10px;
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover:not(:disabled) {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`;

const ClosePanel = styled.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`;

const Empty = styled.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;

const Row = styled.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`;

const RowHead = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`;

const State = styled.span<{ $state: string }>`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state}) => $state === "failed"
        ? "rgba(239, 68, 68, 0.18)"
        : $state === "done" ? "rgba(34, 197, 94, 0.16)" : "rgba(var(--accent-rgb), 0.18)"};
    color: ${({$state}) => $state === "failed"
        ? "#f87171"
        : $state === "done" ? "#4ade80" : "var(--accent-primary)"};
`;

const Spin = styled.span`
    width: 9px;
    height: 9px;
    border: 2px solid rgba(var(--accent-rgb), 0.25);
    border-top-color: var(--accent-primary);
    border-radius: 50%;
    animation: yafm-task-spin 800ms linear infinite;

    @keyframes yafm-task-spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

const RowLabel = styled.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const RowMeta = styled.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`;

const Bar = styled.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`;

const Fill = styled.div<{ $percent: number; $indeterminate: boolean }>`
    width: ${({$percent, $indeterminate}) => $indeterminate ? "35%" : `${$percent}%`};
    height: 100%;
    border-radius: inherit;
    background: var(--accent-gradient);
    transition: width 120ms linear;
    animation: ${({$indeterminate}) => $indeterminate ? "yafm-task-slide 1.1s ease-in-out infinite" : "none"};

    @keyframes yafm-task-slide {
        0% {
            transform: translateX(-120%);
        }
        100% {
            transform: translateX(320%);
        }
    }
`;

const RowError = styled.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;
