import {useEffect, useRef, type ReactNode} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {CheckIcon} from "./Icons";

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
    /** Shows a small pulse instead of a glyph while the entry is on its way. */
    loading?: boolean;
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
    const root = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const closeOnPointer = (event: PointerEvent) => {
            if (!root.current?.contains(event.target as Node)) onClose();
        };
        const closeOnKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        const close = () => onClose();
        const closeOnScroll = (event: Event) => {
            if (!root.current?.contains(event.target as Node)) onClose();
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

    if (items.length === 0 && quick.length === 0) return null;

    const left = Math.max(8, Math.min(x, window.innerWidth - 280));
    const top = Math.max(8, Math.min(y, window.innerHeight - (items.length * 32 + 76)));

    const rows: ReactNode[] = [];
    let group: string | undefined;

    const select = (item: ContextMenuItem) => {
        onClose();
        item.onSelect();
    };

    items.forEach((item, index) => {
        if (item.group && item.group !== group) {
            if (rows.length > 0)
                rows.push(<Rule key={`group-rule-${index}`}/>);

            rows.push(<Group key={`group-${index}`}>{item.group}</Group>);
            group = item.group;
        }

        if (item.separatorBefore && rows.length > 0)
            rows.push(<Rule key={`rule-${index}`}/>);

        rows.push(
            <Item
                $danger={item.danger}
                $depth={item.depth}
                disabled={item.disabled}
                key={`${item.label}-${index}`}
                onClick={() => select(item)}
                role="menuitem"
                type="button"
            >
                <ItemIcon>{item.loading ? <Loading/> : item.icon}</ItemIcon>
                <ItemLabel>{item.label}</ItemLabel>
                {item.checked && <CheckIcon size={12}/>}
            </Item>,
        );
    });

    return createPortal(
        <Menu
            onContextMenu={(event) => event.preventDefault()}
            ref={root}
            role="menu"
            style={{left, top}}
        >
            {quick.length > 0 && (
                <>
                    <QuickRow>
                        {quick.map((item, index) => (
                            <QuickButton
                                $danger={item.danger}
                                disabled={item.disabled}
                                key={`${item.label}-${index}`}
                                onClick={() => select(item)}
                                title={item.label}
                                type="button"
                            >
                                {item.icon}
                            </QuickButton>
                        ))}
                    </QuickRow>
                    <Rule/>
                </>
            )}
            {rows}
        </Menu>,
        document.body,
    );
}

const Menu = styled.div`
    position: fixed;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    min-width: 230px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 5px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.55);
`;

const QuickRow = styled.div`
    display: flex;
    gap: 4px;
    padding: 3px;
`;

const QuickButton = styled.button<{ $danger?: boolean }>`
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
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
    font-size: 12px;
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
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.08em;
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
