import {useEffect, useRef, useState, type MouseEvent as ReactMouseEvent, type ReactNode} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {CheckIcon, ChevronRightIcon} from "./Icons";

export interface ContextMenuItem {
    label: string;
    onSelect: () => void;
    disabled?: boolean;
    danger?: boolean;
    separatorBefore?: boolean;
    /** A built-in glyph or an extracted PNG; the quick row only shows the glyph. */
    icon?: ReactNode;
    /** A section label; a change starts a new section. */
    group?: string;
    /** Indentation for entries that came from a submenu. */
    depth?: number;
    checked?: boolean;
    /** The key combination, if this action has one. */
    shortcut?: string;
    /** Shows a small pulse instead of a glyph while the entry is on its way. */
    loading?: boolean;
    /** Entries shown in a flyout beside this item. */
    children?: ContextMenuItem[];
}

interface ContextMenuProps {
    x: number;
    y: number;
    items: ContextMenuItem[];
    /** The icon strip at the top, like the modern Explorer menu's primary actions. */
    quick?: ContextMenuItem[];
    onClose: () => void;
}

/**
 * The file manager's own right-click menu. It is portalled to the body so no panel's overflow can
 * clip it, and closes the way a native menu does.
 */
export function ContextMenu({x, y, items, quick = [], onClose}: ContextMenuProps) {
    const [flyouts, setFlyouts] = useState<{ items: ContextMenuItem[]; left: number; top: number }[]>([]);
    const closeTimer = useRef<number | undefined>(undefined);

    useEffect(() => {
        const inside = (target: EventTarget | null) =>
            target instanceof Element && target.closest("[data-yafm-menu]") !== null;

        const closeOnPointer = (event: PointerEvent) => {
            if (!inside(event.target)) onClose();
        };
        const closeOnKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        const close = () => onClose();
        const closeOnScroll = (event: Event) => {
            if (!inside(event.target)) onClose();
        };

        window.addEventListener("pointerdown", closeOnPointer);
        window.addEventListener("keydown", closeOnKey);
        window.addEventListener("blur", close);
        window.addEventListener("resize", close);
        window.addEventListener("scroll", closeOnScroll, true);

        return () => {
            window.removeEventListener("pointerdown", closeOnPointer);
            window.removeEventListener("keydown", closeOnKey);
            window.removeEventListener("blur", close);
            window.removeEventListener("resize", close);
            window.removeEventListener("scroll", closeOnScroll, true);
        };
    }, [onClose]);

    useEffect(() => () => window.clearTimeout(closeTimer.current), []);

    if (items.length === 0 && quick.length === 0) return null;

    const left = Math.max(8, Math.min(x, window.innerWidth - 280));
    const top = Math.max(8, Math.min(y, window.innerHeight - (items.length * 32 + 76)));

    const cancelClose = () => window.clearTimeout(closeTimer.current);

    const scheduleClose = (depth: number) => {
        cancelClose();
        closeTimer.current = window.setTimeout(
            () => setFlyouts((current) => current.slice(0, depth)),
            180,
        );
    };

    const openFlyout = (
        event: ReactMouseEvent<HTMLButtonElement>,
        children: ContextMenuItem[],
        depth: number,
    ) => {
        cancelClose();

        const rect = event.currentTarget.getBoundingClientRect();
        const leftSide = rect.right + 248 > window.innerWidth;
        const flyoutLeft = leftSide ? Math.max(8, rect.left - 248) : rect.right + 4;
        const estimatedHeight = Math.min(320, children.length * 30 + 16);
        const flyoutTop = Math.max(8, Math.min(rect.top, window.innerHeight - estimatedHeight - 8));

        // Keep the parents and replace everything below this level. A nested submenu therefore
        // stacks beside its parent instead of replacing it.
        setFlyouts((current) => [
            ...current.slice(0, depth),
            {items: children, left: flyoutLeft, top: flyoutTop},
        ]);
    };

    const select = (item: ContextMenuItem) => {
        onClose();
        item.onSelect();
    };

    const renderRows = (list: ContextMenuItem[], depth: number): ReactNode[] => {
        const nodes: ReactNode[] = [];
        let group: string | undefined;

        list.forEach((item, index) => {
            if (item.group && item.group !== group) {
                if (nodes.length > 0)
                    nodes.push(<Rule key={`group-rule-${index}`}/>);

                nodes.push(<Group key={`group-${index}`}>{item.group}</Group>);
                group = item.group;
            }

            if (item.separatorBefore && nodes.length > 0)
                nodes.push(<Rule key={`rule-${index}`}/>);

            const hasChildren = (item.children?.length ?? 0) > 0;

            nodes.push(
                <Item
                    $danger={item.danger}
                    $depth={item.depth}
                    data-shortcut={item.shortcut}
                    disabled={item.disabled}
                    key={`${item.label}-${index}`}
                    onClick={(event) => {
                        if (hasChildren) openFlyout(event, item.children!, depth);
                        else select(item);
                    }}
                    onPointerEnter={hasChildren
                        ? (event) => openFlyout(event, item.children!, depth)
                        : undefined}
                    onPointerLeave={hasChildren ? () => scheduleClose(depth) : undefined}
                    role="menuitem"
                    title={item.label}
                    type="button"
                >
                    <ItemIcon>{item.loading ? <Loading/> : item.icon}</ItemIcon>
                    <ItemLabel>{item.label}</ItemLabel>
                    {hasChildren ? <ChevronRightIcon size={12}/> : item.checked && <CheckIcon size={12}/>}
                </Item>,
            );
        });

        return nodes;
    };

    return createPortal(
        <>
            <Menu
                data-yafm-menu
                onContextMenu={(event) => event.preventDefault()}
                onPointerLeave={() => scheduleClose(0)}
                role="menu"
                style={{left, top, maxHeight: Math.max(160, window.innerHeight - top - 8)}}
            >
                {quick.length > 0 && (
                    <>
                        <QuickRow>
                            {quick.map((item, index) => (
                                <QuickButton
                                    $danger={item.danger}
                                    data-shortcut={item.shortcut}
                                    disabled={item.disabled}
                                    key={`${item.label}-${index}`}
                                    onClick={() => select(item)}
                                    title={item.label}
                                    type="button"
                                >
                                    <QuickIcon>{item.icon}</QuickIcon>
                                    <QuickLabel>{item.label}</QuickLabel>
                                </QuickButton>
                            ))}
                        </QuickRow>
                        <Rule/>
                    </>
                )}
                {renderRows(items, 0)}
            </Menu>

            {flyouts.map((flyout, index) => (
                <Menu
                    data-yafm-menu
                    key={`${index}-${flyout.left}-${flyout.top}`}
                    onPointerEnter={cancelClose}
                    onPointerLeave={() => scheduleClose(index)}
                    role="menu"
                    style={{
                        left: flyout.left,
                        minWidth: 240,
                        top: flyout.top,
                        maxHeight: Math.max(160, window.innerHeight - flyout.top - 8),
                    }}
                >
                    {renderRows(flyout.items, index + 1)}
                </Menu>
            ))}
        </>,
        document.body,
    );
}

const Menu = styled.div`
    position: fixed;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: var(--bg-elevated);
    backdrop-filter: blur(18px) saturate(120%);
    -webkit-backdrop-filter: blur(18px) saturate(120%);
    box-shadow: var(--shadow-panel);
`;

const QuickRow = styled.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`;

const QuickButton = styled.button<{ $danger?: boolean }>`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    min-width: 48px;
    padding: 5px 4px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: ${({$danger}) => $danger ? "#fca5a5" : "var(--text-secondary)"};
    cursor: pointer;

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
        color: ${({$danger}) => $danger ? "#fecaca" : "var(--text-primary)"};
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`;

const QuickIcon = styled.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`;

const QuickLabel = styled.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Item = styled.button<{ $danger?: boolean; $depth?: number }>`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 7px 10px 7px ${({$depth = 0}) => 10 + $depth * 14}px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: ${({$danger}) => $danger ? "#fca5a5" : "var(--text-secondary)"};
    font: inherit;
    font-size: 13px;
    text-align: left;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
        color: ${({$danger}) => $danger ? "#fecaca" : "var(--text-primary)"};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;

const ItemIcon = styled.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`;

const ItemLabel = styled.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Group = styled.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`;

const Rule = styled.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`;

const Loading = styled.span`
    width: 10px;
    height: 10px;
    border: 1px solid var(--border-color-hover);
    border-top-color: var(--accent-primary);
    border-radius: 50%;
    animation: yafm-menu-spin 700ms linear infinite;

    @keyframes yafm-menu-spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
