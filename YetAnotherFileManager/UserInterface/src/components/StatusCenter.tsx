import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import type {TaskInfo} from "../api/tasks";
import {formatBytes} from "../utils/format";
import {CheckIcon, ClockIcon, CrossIcon} from "./Icons";

interface StatusCenterProps {
    tasks: TaskInfo[];
    onClear: () => void;
}

/** The title bar's activity button and the floating list of running and finished operations. */
export function StatusCenter({tasks, onClear}: StatusCenterProps) {
    const [open, setOpen] = useState(false);
    const root = useRef<HTMLDivElement | null>(null);
    const running = tasks.filter((task) => task.state === "running").length;

    useEffect(() => {
        if (!open) return;

        const close = (event: PointerEvent) => {
            if (!root.current?.contains(event.target as Node)) setOpen(false);
        };

        window.addEventListener("pointerdown", close);
        return () => window.removeEventListener("pointerdown", close);
    }, [open]);

    return (
        <Root ref={root}>
            <ActivityButton
                $active={open}
                onClick={() => setOpen((value) => !value)}
                title={running > 0 ? `${running} operation(s) running` : "Activity"}
                type="button"
            >
                <ClockIcon size={13}/>
                {running > 0 && <Badge>{running > 9 ? "9+" : running}</Badge>}
            </ActivityButton>

            {open && (
                <Panel>
                    <PanelHead>
                        <PanelTitle>Activity</PanelTitle>
                        <PanelActions>
                            <TextButton
                                disabled={tasks.every((task) => task.state === "running")}
                                onClick={onClear}
                                type="button"
                            >
                                Clear finished
                            </TextButton>
                            <ClosePanel onClick={() => setOpen(false)} title="Close" type="button">
                                <CrossIcon size={10}/>
                            </ClosePanel>
                        </PanelActions>
                    </PanelHead>

                    {tasks.length === 0
                        ? <Empty>No operations yet.</Empty>
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
    background: ${({$active}) => $active ? "rgba(148, 163, 184, 0.14)" : "transparent"};
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: rgba(148, 163, 184, 0.14);
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
    background: var(--accent-primary);
    color: #fff;
    font-family: var(--font-mono);
    font-size: 8px;
    line-height: 13px;
    text-align: center;
`;

const Panel = styled.div`
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    z-index: 60;
    width: 340px;
    max-height: 380px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 40px rgba(2, 6, 23, 0.55);
`;

const PanelHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 9px 10px;
    border-bottom: 1px solid var(--border-color);
`;

const PanelTitle = styled.span`
    font-size: 11px;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: 0.04em;
    text-transform: uppercase;
`;

const PanelActions = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const TextButton = styled.button`
    padding: 3px 6px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
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
    width: 20px;
    height: 20px;
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
    padding: 7px 8px;
    border-radius: var(--radius-sm);

    & + & {
        border-top: 1px solid rgba(148, 163, 184, 0.08);
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
        : $state === "done" ? "rgba(34, 197, 94, 0.16)" : "rgba(59, 130, 246, 0.18)"};
    color: ${({$state}) => $state === "failed"
        ? "#f87171"
        : $state === "done" ? "#4ade80" : "var(--accent-primary)"};
`;

const Spin = styled.span`
    width: 9px;
    height: 9px;
    border: 2px solid rgba(59, 130, 246, 0.25);
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
    margin: 6px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(148, 163, 184, 0.16);
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
