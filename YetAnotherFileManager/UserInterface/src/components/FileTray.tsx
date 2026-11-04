import {useEffect, useMemo, useRef, useState, type DragEvent, type PointerEvent as ReactPointerEvent} from "react";
import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";
import {PathIcon} from "./PathIcon";
import {CheckIcon, CrossIcon, PackageIcon} from "./Icons";
import {elevatedPanel} from "../ui/panel";
import {popInStyle} from "../ui/motion";
import {parentPath} from "../utils/format";

/** One entry the tray holds; it can come from an in-app copy, a cut, or the system clipboard. */
export interface TrayItem {
    path: string;
    name: string;
    isDirectory: boolean;
}

interface FileTrayProps {
    /** Entries the user dragged into the tray; these are only handled inside the app. */
    items: TrayItem[];
    /** A mirror of the system clipboard; replaced whenever its contents change. */
    clipboardItems: TrayItem[];
    /** True when the clipboard entries were cut rather than copied. */
    clipboardMove: boolean;
    visible: boolean;
    position: { x: number; y: number };
    currentDirectory: string;
    onPosition: (position: { x: number; y: number }) => void;
    onAdd: (paths: string[]) => void;
    onRemove: (paths: string[]) => void;
    onClear: () => void;
    onClose: () => void;
    /** Writes the selected tray entries to the system clipboard. */
    onCopyToClipboard: (paths: string[]) => void;
    onTransfer: (paths: string[], target: string, move: boolean) => void;
}

const DragType = "application/x-yafm-paths";

/** The drag types the app can turn into paths: its own rows, and files dragged in from elsewhere. */
const PathDragTypes = [DragType, "text/uri-list"];

/** Whether a drag carries paths the tray or a folder can accept. */
export function isPathDrag(transfer: DataTransfer | null): boolean {
    return transfer?.types.some((type) => PathDragTypes.includes(type.toLowerCase())) ?? false;
}

/** Reads the paths another part of the app put on a drag, or the plain-text fallback. */
export function readDraggedPaths(event: { dataTransfer: DataTransfer | null }): { paths: string[]; move: boolean } {
    const transfer = event.dataTransfer;
    if (!transfer)
        return {paths: [], move: true};

    const custom = transfer.getData(DragType);

    if (custom) {
        try {
            const parsed = JSON.parse(custom) as { paths?: unknown; move?: unknown };
            if (Array.isArray(parsed.paths)) {
                return {
                    paths: parsed.paths.filter((path): path is string => typeof path === "string"),
                    move: parsed.move !== false,
                };
            }
        } catch {
            // A malformed drag is ignored; the drop just does nothing.
        }
    }

    // Dropping from another file manager: the URIs are absolute, unlike a plain-text drop.
    const uris = transfer.getData("text/uri-list");
    if (uris) {
        const paths = uris.split(/\r?\n/)
            .map((line) => line.trim())
            .filter((line) => line.length > 0 && !line.startsWith("#"))
            .map(uriToPath)
            .filter((path): path is string => path !== null);

        if (paths.length > 0)
            return {paths, move: true};
    }

    return {
        paths: transfer.getData("text/plain")
            .split(/\r?\n/)
            .map((path) => path.trim())
            .filter((path) => /^[a-zA-Z]:[\\/]|^\\\\|^\//.test(path)),
        move: true,
    };
}

/** Windows paths arrive as "/C:/…" from the URI parser; Linux paths already start with "/". */
const UsesWindowsPaths = typeof navigator !== "undefined" && /windows/i.test(navigator.userAgent);

/** The local path behind a <c>file://</c> URI, or the path itself when it is already one. */
function uriToPath(uri: string): string | null {
    if (!uri.toLowerCase().startsWith("file://")) {
        return /^[a-zA-Z]:[\\/]|^\\\\|^\//.test(uri) ? uri : null;
    }

    try {
        const url = new URL(uri);
        const path = decodeURIComponent(url.pathname);

        // Windows keeps the drive letter, but the URI path starts with a slash ("/C:/…").
        return UsesWindowsPaths ? path.replace(/^\/(?=[a-zA-Z]:)/, "") : path;
    } catch {
        return null;
    }
}

/** Puts the paths on a drag so the tray, the list and any future target can read them. */
export function writeDraggedPaths(event: { dataTransfer: DataTransfer }, paths: string[], move = true) {
    event.dataTransfer.setData(DragType, JSON.stringify({paths, move}));
    event.dataTransfer.setData("text/plain", paths.join("\r\n"));
    // The target decides whether it copies or moves; a single effect here would make the tray's
    // copy drop incompatible with a row dragged for a move and the browser would refuse it.
    event.dataTransfer.effectAllowed = "copyMove";
}

/**
 * A floating shelf of files and folders. It mirrors the clipboard, accepts drops from the list and
 * lets the user drag the items onto a folder to move them — the reason it exists is moving entries
 * that live in different folders into one target.
 */
export function FileTray({
    items, clipboardItems, clipboardMove, visible, position, currentDirectory, onPosition, onAdd, onRemove,
    onClear, onClose, onCopyToClipboard, onTransfer,
}: FileTrayProps) {
    const t = useTranslation();
    const [selected, setSelected] = useState<Set<string>>(() => new Set());
    const [dragging, setDragging] = useState(false);
    const dragStart = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
    const selectedItems = useMemo(
        () => items.filter((item) => selected.has(item.path)),
        [items, selected]
    );
    const selectedClipboard = useMemo(
        () => clipboardItems.filter((item) => selected.has(item.path)),
        [clipboardItems, selected]
    );
    const panelRef = useRef<HTMLDivElement | null>(null);

    // The panel can appear during a drag; hit-testing then misses it. A window listener over the
    // same rectangle keeps the tray a reliable drop target.
    useEffect(() => {
        if (!visible) return;

        const inside = (x: number, y: number) => {
            const rect = panelRef.current?.getBoundingClientRect();
            return rect !== undefined && x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
        };
        const over = (event: globalThis.DragEvent) => {
            const transfer = event.dataTransfer;
            if (!transfer || !isPathDrag(transfer) || !inside(event.clientX, event.clientY))
                return;

            event.preventDefault();
            transfer.dropEffect = "copy";
        };
        const drop = (event: globalThis.DragEvent) => {
            if (event.defaultPrevented || !inside(event.clientX, event.clientY)) return;

            const {paths} = readDraggedPaths(event);
            if (paths.length === 0) return;

            event.preventDefault();
            onAdd(paths);
        };

        window.addEventListener("dragover", over, true);
        window.addEventListener("drop", drop, true);
        return () => {
            window.removeEventListener("dragover", over, true);
            window.removeEventListener("drop", drop, true);
        };
    }, [visible, onAdd]);

    if (!visible)
        return null;

    const allPaths = new Set([...items, ...clipboardItems].map((item) => item.path));
    const allSelected = allPaths.size > 0 && [...allPaths].every((path) => selected.has(path));
    const total = allPaths.size;

    const toggle = (path: string) => {
        setSelected((current) => {
            const next = new Set(current);
            if (!next.delete(path)) next.add(path);
            return next;
        });
    };

    const toggleAll = () => {
        setSelected(allSelected ? new Set() : allPaths);
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
        setSelected((current) => {
            const next = new Set(current);
            paths.forEach((path) => next.delete(path));
            return next;
        });
    };

    const copySelectedToClipboard = () => {
        const paths = selectedItems.map((item) => item.path);
        if (paths.length === 0) return;

        onCopyToClipboard(paths);
    };

    const moveHere = () => {
        // A path can be in the tray and in the clipboard section at once; move it once, and let the
        // tray copy win for the direction.
        const directions = new Map<string, boolean>();

        for (const item of selectedItems)
            directions.set(item.path, true);

        for (const item of selectedClipboard)
            if (!directions.has(item.path))
                directions.set(item.path, clipboardMove);

        const moving = [...directions].filter(([, move]) => move).map(([path]) => path);
        const copying = [...directions].filter(([, move]) => !move).map(([path]) => path);

        if (moving.length > 0)
            onTransfer(moving, currentDirectory, true);

        if (copying.length > 0)
            onTransfer(copying, currentDirectory, false);

        setSelected(new Set());
    };

    const row = (item: TrayItem, move: boolean) => {
        const checked = selected.has(item.path);

        return (
            <Item
                $checked={checked}
                draggable
                key={`${move ? "tray" : "clipboard"}:${item.path}`}
                onClick={() => toggle(item.path)}
                onDragStart={(event) => {
                    const paths = checked && selected.size > 0
                        ? [...new Set([...selectedItems, ...selectedClipboard].map((entry) => entry.path))]
                        : [item.path];

                    writeDraggedPaths(event, paths, move);
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
                    <Parent>{parentPath(item.path)}</Parent>
                </Names>
            </Item>
        );
    };

    const acceptDrag = (event: DragEvent<HTMLDivElement>) => {
        if (!isPathDrag(event.dataTransfer))
            return;

        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    };

    return (
        <Panel
            $dragging={dragging}
            data-tray="true"
            ref={panelRef}
            style={{left: position.x, top: position.y}}
            onDragEnter={acceptDrag}
            onDragOver={acceptDrag}
            onDrop={(event) => {
                const {paths} = readDraggedPaths(event);
                if (paths.length > 0) {
                    event.preventDefault();
                    onAdd(paths);
                }
            }}
        >
            <Head onPointerDown={startDrag} onPointerMove={movePanel} onPointerUp={endDrag}>
                <Title>
                    <PackageIcon size={13}/>
                    {t("Tray")}
                    <Count>{total}</Count>
                </Title>
                <HeadActions onPointerDown={(event) => event.stopPropagation()}>
                    <SmallButton onClick={toggleAll} title={allSelected ? t("Select none") : t("Select all")} type="button">
                        {allSelected ? t("None") : t("All")}
                    </SmallButton>
                    <SmallButton onClick={onClear} title={t("Remove everything from the tray")} type="button">
                        {t("Clear")}
                    </SmallButton>
                    <IconButton onClick={onClose} title={t("Hide the tray")} type="button">
                        <CrossIcon size={10}/>
                    </IconButton>
                </HeadActions>
            </Head>

            <List>
                <SectionHead>
                    {t("In this app")}
                    <Count>{items.length}</Count>
                </SectionHead>

                {items.length === 0 && <DropHint>{t("Drag files or folders here")}</DropHint>}
                {items.map((item) => row(item, true))}

                {clipboardItems.length > 0 && (
                    <>
                        <SectionHead $clipboard>
                            {t("Clipboard")}
                            <Count>{clipboardItems.length}</Count>
                            {clipboardMove && <CutTag>{t("cut")}</CutTag>}
                        </SectionHead>
                        {clipboardItems.map((item) => row(item, clipboardMove))}
                    </>
                )}
            </List>

            <Foot>
                <FootButton
                    $plain
                    disabled={selectedItems.length === 0}
                    onClick={copySelectedToClipboard}
                    title={t("Write the selected tray entries to the system clipboard")}
                    type="button"
                >
                    {t("To clipboard")}
                </FootButton>
                <FootButton
                    disabled={selected.size === 0 || !currentDirectory}
                    onClick={moveHere}
                    type="button"
                >
                    {t("Move here")}
                </FootButton>
                <FootButton
                    $danger
                    disabled={selectedItems.length === 0}
                    onClick={removeSelected}
                    type="button"
                >
                    {t("Remove")}
                </FootButton>
            </Foot>
        </Panel>
    );
}

const Panel = styled.div<{ $dragging: boolean }>`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${elevatedPanel}
    ${popInStyle}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging}) => $dragging ? "grabbing" : "default"};
    transition: box-shadow 160ms ease;
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 9px 10px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
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
    background: rgba(var(--accent-rgb), 0.16);
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
    padding: 3px 7px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 9px;
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`;

const IconButton = styled.button`
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
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`;

const DropHint = styled.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`;

const SectionHead = styled.div<{ $clipboard?: boolean }>`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: ${({$clipboard}) => $clipboard ? "8px 6px 3px" : "3px 6px"};
    margin-top: ${({$clipboard}) => $clipboard ? "4px" : "0"};
    border-top: ${({$clipboard}) => $clipboard ? "1px solid var(--border-color)" : "0"};
    color: var(--text-muted);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`;

const CutTag = styled.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`;

const Item = styled.div<{ $checked: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 5px 6px;
    border: 1px solid ${({$checked}) => $checked ? "rgba(var(--accent-rgb), 0.4)" : "transparent"};
    border-radius: var(--radius-sm);
    background: ${({$checked}) => $checked ? "rgba(var(--accent-rgb), 0.1)" : "transparent"};
    cursor: grab;
    transition: background 120ms ease, border-color 120ms ease, transform 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.07);
        transform: translateX(1px);
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
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`;

const FootButton = styled.button<{ $danger?: boolean; $plain?: boolean }>`
    flex: 1 1 30%;
    min-width: 78px;
    padding: 5px 6px;
    border: 1px solid ${({$danger, $plain}) => $danger
        ? "rgba(248, 113, 113, 0.35)"
        : $plain ? "var(--border-color)" : "transparent"};
    border-radius: var(--radius-sm);
    background: ${({$danger, $plain}) => $danger || $plain ? "transparent" : "var(--accent-gradient)"};
    color: ${({$danger, $plain}) => $danger ? "#fca5a5" : $plain ? "var(--text-secondary)" : "#fff"};
    font: inherit;
    font-size: 10px;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease, color 130ms ease, filter 130ms ease;

    &:hover:not(:disabled) {
        border-color: ${({$danger, $plain}) => $danger
            ? "rgba(248, 113, 113, 0.6)"
            : $plain ? "var(--border-color-hover)" : "transparent"};
        background: ${({$danger, $plain}) => $danger
            ? "rgba(248, 113, 113, 0.14)"
            : $plain ? "rgba(var(--accent-rgb), 0.10)" : "var(--accent-gradient)"};
        color: ${({$danger, $plain}) => $danger ? "#fecaca" : $plain ? "var(--text-primary)" : "#fff"};
        filter: ${({$danger, $plain}) => $danger || $plain ? "none" : "brightness(1.08)"};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;
