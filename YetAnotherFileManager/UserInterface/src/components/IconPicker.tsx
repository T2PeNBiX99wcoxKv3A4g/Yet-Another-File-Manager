import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {requestFile} from "../folder-picker";
import {PanelIcons} from "../panels";
import {menuInStyle} from "../ui/motion";
import {CrossIcon, PlusIcon} from "./Icons";
import {useTranslation} from "@photino-net-utils/bridge";

interface IconPickerProps {
    value?: string | null;
    onPick: (icon: string | null) => void;
    /** Called when the pointer goes somewhere else, so the owner can hide the menu. */
    onClose?: () => void;
    /** Hide the "default" choice where the icon cannot be removed. */
    allowDefault?: boolean;
}

/**
 * The icon choices, shown in a fixed layer so a panel's scroll frame cannot clip it. It positions
 * itself under its parent element, which is why the owner renders it next to the trigger.
 */
export function IconPicker({value, onPick, onClose, allowDefault = true}: IconPickerProps) {
    const t = useTranslation();
    const anchor = useRef<HTMLSpanElement>(null);
    const menu = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

    useLayoutEffect(() => {
        const host = anchor.current?.parentElement;
        if (!host) return;

        const rect = host.getBoundingClientRect();
        setPosition({top: rect.bottom + 6, left: rect.left});
    }, []);

    // Keep the menu inside the window; the first pass only knows the anchor.
    useLayoutEffect(() => {
        if (!position || !menu.current) return;

        const rect = menu.current.getBoundingClientRect();
        const top = rect.bottom > window.innerHeight - 8
            ? Math.max(8, position.top - rect.height - 12)
            : position.top;
        const left = rect.right > window.innerWidth - 8
            ? Math.max(8, window.innerWidth - rect.width - 8)
            : position.left;

        if (top !== position.top || left !== position.left)
            setPosition({top, left});
    }, [position]);

    useEffect(() => {
        if (!onClose) return;

        const closeOnPointer = (event: PointerEvent) => {
            const target = event.target as Element | null;
            if (target?.closest("[data-icon-menu]")) return;

            onClose();
        };

        window.addEventListener("pointerdown", closeOnPointer);
        window.addEventListener("resize", onClose);
        document.addEventListener("scroll", onClose, true);
        return () => {
            window.removeEventListener("pointerdown", closeOnPointer);
            window.removeEventListener("resize", onClose);
            document.removeEventListener("scroll", onClose, true);
        };
    }, [onClose]);

    return (
        <>
            <span ref={anchor} style={{display: "none"}}/>
            {position && createPortal(
                <IconMenu
                    data-icon-menu="true"
                    onClick={(event) => event.stopPropagation()}
                    onPointerDown={(event) => event.stopPropagation()}
                    ref={menu}
                    style={{position: "fixed", top: position.top, left: position.left}}
                >
                    {Object.keys(PanelIcons).map((name) => (
                        <IconChoice
                            $active={value === name}
                            key={name}
                            onClick={() => onPick(name)}
                            title={name}
                            type="button"
                        >
                            {PanelIcons[name](16)}
                        </IconChoice>
                    ))}
                    <IconChoice
                        onClick={async () => {
                            const file = await requestFile([".png", ".ico", ".svg", ".jpg", ".jpeg", ".webp"]);
                            if (file) onPick(`file:${file}`);
                        }}
                        title={t("Choose an image")}
                        type="button"
                    >
                        <PlusIcon size={13}/>
                    </IconChoice>
                    {allowDefault && (
                        <IconChoice $active={!value} onClick={() => onPick(null)} title={t("Default")} type="button">
                            <CrossIcon size={12}/>
                        </IconChoice>
                    )}
                </IconMenu>,
                document.body
            )}
        </>
    );
}

const IconMenu = styled.div`
    position: absolute;
    z-index: 40;
    top: calc(100% + 6px);
    left: 0;
    display: grid;
    grid-template-columns: repeat(6, 24px);
    gap: 4px;
    width: max-content;
    max-height: 236px;
    overflow-y: auto;
    padding: 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
    ${menuInStyle}
    transform-origin: top left;
`;

const IconChoice = styled.button<{ $active?: boolean }>`
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: 1px solid ${({$active}) => $active ? "var(--border-color-focus)" : "transparent"};
    border-radius: 5px;
    background: ${({$active}) => $active ? "rgba(var(--accent-secondary-rgb), 0.24)" : "transparent"};
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;
