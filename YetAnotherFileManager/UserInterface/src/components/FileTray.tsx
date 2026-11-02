import {useMemo, useRef, useState, type DragEvent, type PointerEvent as ReactPointerEvent} from "react";
import styled from "styled-components";
import {PathIcon} from "./PathIcon";
import {CheckIcon, CrossIcon, PackageIcon} from "./Icons";

/** One entry the tray holds; it can come from an in-app copy, a cut, or the system clipboard. */
export interface TrayItem {
    path: string;
    name: string;
    isDirectory: boolean;
}

interface FileTrayProps {
    items: TrayItem[];
    visible: boolean;
    position: { x: number; y: number };
    currentDirectory: string;
    onPosition: (position: { x: number; y: number }) => void;
    onAdd: (paths: string[]) => void;
    onRemove: (paths: string[]) => void;
    onClear: () => void;
    onClose: () => void;
    onTransfer: (paths: string[], target: string, move: boolean) => void;
}

const DragType = "application/x-yafm-paths";

/** Reads the paths another part of the app put on a drag, or the plain-text fallback. */
export function readDraggedPaths(event: DragEvent): string[] {
    const custom = event.dataTransfer.getData(DragType);

    if (custom) {
        try {
            const parsed = JSON.parse(custom) as { paths?: unknown };
            if (Array.isArray(parsed.paths))
                return parsed.paths.filter((path): path is string => typeof path === "string");
        } catch {
            // A malformed drag is ignored; the drop just does nothing.
        }
    }

    return event.dataTransfer.getData("text/plain")
        .split(/\r?\n/)
        .map((path) => path.trim())
        .filter((path) => /^[a-zA-Z]:[\\/]|^\\\\/.test(path));
}

/** Puts the paths on a drag so the tray, the list and any future target can read them. */
export function writeDraggedPaths(event: DragEvent, paths: string[]) {
    event.dataTransfer.setData(DragType, JSON.stringify({paths}));
    event.dataTransfer.setData("text/plain", paths.join("\r\n"));
    event.dataTransfer.effectAllowed = "move";
}

/**
 * A floating shelf of files and folders. It mirrors the clipboard, accepts drops from the list and
 * lets the user drag the items onto a folder to move them — the reason it exists is moving entries
 * that live in different folders into one target.
 */
export function FileTray({
    items, visible, position, currentDirectory, onPosition, onAdd, onRemove, onClear, onClose, onTransfer,
}: FileTrayProps) {
    const [selected, setSelected] = useState<Set<string>>(() => new Set());
    const [dragging, setDragging] = useState(false);
    const dragStart = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
    const selectedItems = useMemo(
        () => items.filter((item) => selected.has(item.path)),
        [items, selected]
    );

    if (!visible)
        return null;

    const allSelected = selected.size === items.length && items.length > 0;

    const toggle = (path: string) => {
        setSelected((current) => {
            const next = new Set(current);
            if (!next.delete(path)) next.add(path);
            return next;
        });
    };

    const toggleAll = () => {
        setSelected(allSelected ? new Set() : new Set(items.map((item) => item.path)));
    };

    const startDrag = (event: ReactPointerEvent) => {
        dragStart.current = {
            x: event.clientX,
            y: event.clientY,
            left: position.x,
            top: position.y
        };
        event.currentTarget.setPointerCapture(event.pointerId);
        setDragging(true);
    };

    const movePanel = (event: ReactPointerEvent) => {
        const start = dragStart.current;
        if (!start) return;

        const x = Math.max(0, Math.min(window.innerWidth - 120, start.left + event.clientX - start.x));
        const y = Math.max(38, Math.min(window.innerHeight - 80, start.top + event.clientY - start.y));
        onPosition({x, y});
    };

    const endDrag = (event: ReactPointerEvent) => {
        if (!dragStart.current) return;

        dragStart.current = null;
        setDragging(false);
        event.currentTarget.releasePointerCapture(event.pointerId);
    };

    const removeSelected = () => {
        const paths = selectedItems.map((item) => item.path);
        if (paths.length === 0) return;

        onRemove(paths);
        setSelected(new Set());
    };

    const moveHere = () => {
        const paths = selectedItems.map((item) => item.path);
        if (paths.length === 0) return;

        onTransfer(paths, currentDirectory, true);
        setSelected(new Set());
    };

    return (
        <Panel
            $dragging={dragging}
            style={{left: position.x, top: position.y}}
            onDragOver={(event) => {
                if (event.dataTransfer.types.some((type) => type.toLowerCase() === DragType)) {
                    event.preventDefault();
                    event.dataTransfer.dropEffect = "copy";
                }
            }}
            onDrop={(event) => {
                const paths = readDraggedPaths(event);
                if (paths.length > 0) {
                    event.preventDefault();
                    onAdd(paths);
                }
            }}
        >
            <Head onPointerDown={startDrag} onPointerMove={movePanel} onPointerUp={endDrag}>
                <Title>
                    <PackageIcon size={13}/>
                    Tray
                    <Count>{items.length}</Count>
                </Title>
                <HeadActions onPointerDown={(event) => event.stopPropagation()}>
                    <SmallButton onClick={toggleAll} title={allSelected ? "Select none" : "Select all"} type="button">
                        {allSelected ? "None" : "All"}
                    </SmallButton>
                    <SmallButton onClick={onClear} title="Remove everything from the tray" type="button">
                        Clear
                    </SmallButton>
                    <IconButton onClick={onClose} title="Hide the tray" type="button">
                        <CrossIcon size={10}/>
                    </IconButton>
                </HeadActions>
            </Head>

            <List>
                {items.length === 0 && <DropHint>Drag files or folders here</DropHint>}
                {items.map((item) => {
                    const checked = selected.has(item.path);

                    return (
                        <Item
                            $checked={checked}
                            draggable
                            key={item.path}
                            onClick={() => toggle(item.path)}
                            onDragStart={(event) => {
                                const paths = checked && selected.size > 0
                                    ? selectedItems.map((entry) => entry.path)
                                    : [item.path];

                                writeDraggedPaths(event, paths);
                            }}
                            title={item.path}
                        >
                            <Check
                                $checked={checked}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    toggle(item.path);
                                }}
                                type="button"
                            >
                                {checked && <CheckIcon size={8}/>}
                            </Check>
                            <PathIcon isDirectory={item.isDirectory} name={item.name} path={item.path} size={16}/>
                            <Names>
                                <Name>{item.name}</Name>
                                <Parent>{parentOf(item.path)}</Parent>
                            </Names>
                        </Item>
                    );
                })}
            </List>

            <Foot>
                <FootButton
                    disabled={selectedItems.length === 0 || !currentDirectory}
                    onClick={moveHere}
                    type="button"
                >
                    Move {selectedItems.length || ""} here
                </FootButton>
                <FootButton
                    $danger
                    disabled={selectedItems.length === 0}
                    onClick={removeSelected}
                    type="button"
                >
                    Remove
                </FootButton>
            </Foot>
        </Panel>
    );
}

/** The folder that holds a path, shortened for the second line of a tray row. */
function parentOf(path: string): string {
    const trimmed = path.replace(/[\\/]+$/, "");
    const cut = Math.max(trimmed.lastIndexOf("\\"), trimmed.lastIndexOf("/"));

    return cut > 0 ? trimmed.slice(0, cut) : trimmed;
}

const Panel = styled.div<{ $dragging: boolean }>`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(10, 15, 24, 0.97);
    box-shadow: 0 22px 50px rgba(2, 6, 23, 0.6);
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging}) => $dragging ? "grabbing" : "default"};
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 7px 8px;
    border-bottom: 1px solid var(--border-color);
    cursor: grab;

    &:active {
        cursor: grabbing;
    }
`;

const Title = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`;

const Count = styled.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(148, 163, 184, 0.18);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`;

const HeadActions = styled.span`
    display: flex;
    align-items: center;
    gap: 3px;
`;

const SmallButton = styled.button`
    padding: 2px 6px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 9px;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const IconButton = styled.button`
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
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`;

const DropHint = styled.p`
    margin: 0;
    padding: 18px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`;

const Item = styled.div<{ $checked: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 5px 6px;
    border: 1px solid ${({$checked}) => $checked ? "rgba(59, 130, 246, 0.4)" : "transparent"};
    border-radius: var(--radius-sm);
    background: ${({$checked}) => $checked ? "rgba(59, 130, 246, 0.1)" : "transparent"};
    cursor: grab;

    &:hover {
        background: var(--bg-card-hover);
    }

    &:active {
        cursor: grabbing;
    }
`;

const Check = styled.button<{ $checked: boolean }>`
    display: grid;
    place-items: center;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid ${({$checked}) => $checked ? "var(--border-color-focus)" : "var(--border-color-hover)"};
    border-radius: 4px;
    background: ${({$checked}) => $checked ? "var(--accent-primary)" : "transparent"};
    color: #fff;
    cursor: pointer;
`;

const Names = styled.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`;

const Name = styled.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Parent = styled.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Foot = styled.div`
    display: flex;
    gap: 5px;
    padding: 6px 8px;
    border-top: 1px solid var(--border-color);
`;

const FootButton = styled.button<{ $danger?: boolean }>`
    flex: 1;
    padding: 5px 6px;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: ${({$danger}) => $danger ? "transparent" : "var(--accent-primary)"};
    color: ${({$danger}) => $danger ? "var(--text-secondary)" : "#fff"};
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover:not(:disabled) {
        filter: brightness(1.08);
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;
