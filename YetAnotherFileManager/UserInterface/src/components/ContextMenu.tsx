import {Fragment, useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";

export interface ContextMenuItem {
    label: string;
    onSelect: () => void;
    disabled?: boolean;
    danger?: boolean;
    separatorBefore?: boolean;
}

interface ContextMenuProps {
    x: number;
    y: number;
    items: ContextMenuItem[];
    onClose: () => void;
}

/**
 * A small fixed-position menu used by the file list. It is portalled to the body so no panel's
 * overflow can clip it, and closes the way a native menu does.
 */
export function ContextMenu({x, y, items, onClose}: ContextMenuProps) {
    const root = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const closeOnPointer = (event: PointerEvent) => {
            if (!root.current?.contains(event.target as Node)) onClose();
        };
        const closeOnKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        const close = () => onClose();

        window.addEventListener("pointerdown", closeOnPointer);
        window.addEventListener("keydown", closeOnKey);
        window.addEventListener("blur", close);
        window.addEventListener("resize", close);
        window.addEventListener("scroll", close, true);

        return () => {
            window.removeEventListener("pointerdown", closeOnPointer);
            window.removeEventListener("keydown", closeOnKey);
            window.removeEventListener("blur", close);
            window.removeEventListener("resize", close);
            window.removeEventListener("scroll", close, true);
        };
    }, [onClose]);

    if (items.length === 0) return null;

    const left = Math.max(8, Math.min(x, window.innerWidth - 250));
    const top = Math.max(8, Math.min(y, window.innerHeight - items.length * 31 - 18));

    return createPortal(
        <Menu
            onContextMenu={(event) => event.preventDefault()}
            ref={root}
            role="menu"
            style={{left, top}}
        >
            {items.map((item, index) => (
                <Fragment key={`${item.label}-${index}`}>
                    {item.separatorBefore && index > 0 && <Rule/>}
                    <Item
                        $danger={item.danger}
                        disabled={item.disabled}
                        onClick={() => {
                            onClose();
                            item.onSelect();
                        }}
                        role="menuitem"
                        type="button"
                    >
                        {item.label}
                    </Item>
                </Fragment>
            ))}
        </Menu>,
        document.body,
    );
}

const Menu = styled.div`
    position: fixed;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    min-width: 210px;
    padding: 5px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.55);
`;

const Item = styled.button<{ $danger?: boolean }>`
    position: relative;
    display: block;
    width: 100%;
    padding: 7px 10px;
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

const Rule = styled.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`;
