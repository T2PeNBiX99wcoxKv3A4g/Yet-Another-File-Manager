import {type ReactNode, useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {menuInStyle} from "../ui/motion";
import {CheckIcon, ChevronRightIcon} from "./Icons";
import {useTranslation} from "@photino-net-utils/bridge";

export interface SelectOption {
    value: string;
    label: ReactNode;
    /** Optional tooltip, e.g. the full text when the trigger truncates it. */
    title?: string;
}

/**
 * The app's own dropdown. A native <select> would be drawn by the browser, which ignores the
 * theme and looks nothing like the rest of the surface, so the list is rendered in a portal.
 */
export function SelectMenu({value, options, onChange, disabled, width, icon, tooltip, zIndex = 3200}: {
    value: string;
    options: SelectOption[];
    onChange: (value: string) => void;
    disabled?: boolean;
    /** Width of the button; the menu never gets narrower than it. */
    width?: number;
    /** Draw the trigger as an icon button instead of showing the selected label. */
    icon?: ReactNode;
    /** Tooltip for an icon trigger; the menu itself still shows every label. */
    tooltip?: string;
    /** Place this menu above a modal that owns the trigger. */
    zIndex?: number;
}) {
    const t = useTranslation();
    const [anchor, setAnchor] = useState<{
        left: number;
        width: number;
        top?: number;
        bottom?: number;
    } | null>(null);
    const button = useRef<HTMLButtonElement | null>(null);
    const current = options.find((option) => option.value === value) ?? options[0];

    useEffect(() => {
        if (!anchor) return;

        const close = () => setAnchor(null);
        const onPointerDown = (event: PointerEvent) => {
            const target = event.target;
            if (target instanceof Node && button.current?.contains(target)) return;
            if (target instanceof Element && target.closest("[data-select-menu]")) return;

            close();
        };
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") close();
        };

        window.addEventListener("pointerdown", onPointerDown, true);
        window.addEventListener("keydown", onKey, true);
        window.addEventListener("blur", close);
        window.addEventListener("scroll", close, true);
        window.addEventListener("resize", close);

        return () => {
            window.removeEventListener("pointerdown", onPointerDown, true);
            window.removeEventListener("keydown", onKey, true);
            window.removeEventListener("blur", close);
            window.removeEventListener("scroll", close, true);
            window.removeEventListener("resize", close);
        };
    }, [anchor]);

    const toggle = () => {
        if (anchor) {
            setAnchor(null);
            return;
        }

        const rect = button.current?.getBoundingClientRect();
        if (!rect) return;

        // A trigger near the bottom of the window (the picker footer is one) opens upwards, or the
        // list would land outside the viewport.
        const needed = options.length * 31 + 10;
        const openUp = rect.bottom + 4 + needed > window.innerHeight;
        setAnchor({
            left: rect.left,
            width: rect.width,
            top: openUp ? undefined : rect.bottom + 4,
            bottom: openUp ? window.innerHeight - rect.top + 4 : undefined,
        });
    };

    return (
        <>
            <Trigger
                $icon={icon !== undefined}
                aria-expanded={anchor !== null}
                aria-haspopup="listbox"
                disabled={disabled}
                onClick={toggle}
                ref={button}
                style={width && !icon ? {width} : undefined}
                title={tooltip ?? current?.title}
                type="button"
            >
                {icon !== undefined
                    ? <TriggerIcon>{icon}</TriggerIcon>
                    : <TriggerLabel>{current?.label ?? ""}</TriggerLabel>}
                {icon === undefined && <Chevron><ChevronRightIcon size={11}/></Chevron>}
            </Trigger>
            {anchor && createPortal(
                <Menu
                    aria-label={t("options")}
                    data-select-menu="true"
                    $menuZIndex={zIndex}
                    role="listbox"
                    style={{bottom: anchor.bottom, left: anchor.left, minWidth: anchor.width, top: anchor.top}}
                >
                    {options.map((option) => (
                        <Option
                            $active={option.value === value}
                            aria-selected={option.value === value}
                            key={option.value}
                            onClick={() => {
                                onChange(option.value);
                                setAnchor(null);
                            }}
                            role="option"
                            title={option.title}
                            type="button"
                        >
                            <OptionLabel>{option.label}</OptionLabel>
                            {option.value === value && <CheckIcon size={11}/>}
                        </Option>
                    ))}
                </Menu>,
                document.body,
            )}
        </>
    );
}

const Trigger = styled.button<{ $icon?: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: ${({$icon}) => $icon ? "center" : "space-between"};
    gap: 10px;
    min-width: ${({$icon}) => $icon ? "34px" : "120px"};
    width: ${({$icon}) => $icon ? "34px" : undefined};
    height: 32px;
    padding: ${({$icon}) => $icon ? "0" : "0 9px 0 10px"};
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: ${({$icon}) => $icon ? "transparent" : "var(--bg-input)"};
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease, color 130ms ease, transform 130ms ease;

    &:hover {
        border-color: ${({$icon}) => $icon ? "var(--border-color-hover)" : "var(--border-color-hover)"};
        background: ${({$icon}) => $icon ? "rgba(var(--accent-rgb), 0.10)" : "var(--bg-input)"};
        color: var(--text-primary);
        transform: ${({$icon}) => $icon ? "translateY(-1px)" : "none"};
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }

    &:disabled {
        opacity: 0.55;
        cursor: default;
    }
`;

const TriggerLabel = styled.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const TriggerIcon = styled.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`;

const Chevron = styled.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`;

const Menu = styled.div<{ $menuZIndex: number }>`
    position: fixed;
    z-index: ${({$menuZIndex}) => $menuZIndex};
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-width: min(520px, 90vw);
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${menuInStyle}
`;

const Option = styled.button<{ $active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 7px 9px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.16)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 11px;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.12);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -2px;
    }
`;

const OptionLabel = styled.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
