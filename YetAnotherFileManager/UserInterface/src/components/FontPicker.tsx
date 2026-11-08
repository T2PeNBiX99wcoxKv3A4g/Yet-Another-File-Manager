import {useEffect, useMemo, useRef, useState} from "react";
import {createPortal} from "react-dom";
import {useTranslation} from "@photino-net-utils/bridge";
import styled from "styled-components";
import {menuInStyle} from "../ui/motion";
import {CheckIcon, SearchIcon} from "./Icons";

interface FontPickerProps {
    /** The chosen family, or null/empty for the role's built-in font. */
    value: string | null;
    fonts: string[];
    /** What an empty choice is called, e.g. "Interface" or "Monospace". */
    defaultLabel: string;
    /** The text rendered in each family; roles choose something representative. */
    sample: string;
    disabled?: boolean;
    onChange: (family: string | null) => void;
}

/**
 * A font dropdown that renders every choice in its own face. The list is long on most systems, so
 * it has a filter field and its own scroll area; the popover is drawn in a portal so the settings
 * card cannot clip it.
 */
export function FontPicker({value, fonts, defaultLabel, sample, disabled, onChange}: FontPickerProps) {
    const t = useTranslation();
    const [anchor, setAnchor] = useState<{left: number; width: number; top: number; maxHeight: number} | null>(null);
    const [query, setQuery] = useState("");
    const button = useRef<HTMLButtonElement | null>(null);
    const search = useRef<HTMLInputElement | null>(null);

    const filtered = useMemo(() => {
        const needle = query.trim().toLowerCase();
        return needle.length === 0
            ? fonts
            : fonts.filter((family) => family.toLowerCase().includes(needle));
    }, [fonts, query]);

    useEffect(() => {
        if (!anchor) return;

        search.current?.focus();

        const close = () => setAnchor(null);
        const onPointerDown = (event: PointerEvent) => {
            const target = event.target;
            if (target instanceof Node && button.current?.contains(target)) return;
            if (target instanceof Element && target.closest("[data-font-menu]")) return;
            close();
        };
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") close();
        };

        window.addEventListener("pointerdown", onPointerDown, true);
        window.addEventListener("keydown", onKey, true);
        window.addEventListener("resize", close);

        return () => {
            window.removeEventListener("pointerdown", onPointerDown, true);
            window.removeEventListener("keydown", onKey, true);
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

        setQuery("");
        const available = window.innerHeight - rect.bottom - 16;
        const openUp = available < 280 && rect.top > available;
        setAnchor({
            left: rect.left,
            width: Math.max(rect.width, 280),
            top: openUp ? Math.max(8, rect.top - 340) : rect.bottom + 4,
            maxHeight: openUp ? Math.min(340, rect.top - 12) : Math.min(420, available),
        });
    };

    const choose = (family: string | null) => {
        onChange(family);
        setAnchor(null);
    };

    return (
        <>
            <Trigger
                aria-expanded={anchor !== null}
                aria-haspopup="listbox"
                disabled={disabled}
                onClick={toggle}
                ref={button}
                type="button"
            >
                <TriggerLabel style={value ? {fontFamily: `"${value}"`} : undefined}>
                    {value ?? defaultLabel}
                </TriggerLabel>
                <Chevron>▾</Chevron>
            </Trigger>
            {anchor && createPortal(
                <Menu
                    data-font-menu="true"
                    role="listbox"
                    style={{left: anchor.left, maxHeight: anchor.maxHeight, top: anchor.top, width: anchor.width}}
                >
                    <FilterRow>
                        <SearchIcon size={12}/>
                        <Filter
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={t("Filter fonts…")}
                            ref={search}
                            value={query}
                        />
                    </FilterRow>
                    <List>
                        <Choice
                            $active={!value}
                            aria-selected={!value}
                            onClick={() => choose(null)}
                            role="option"
                            type="button"
                        >
                            <ChoiceName>{defaultLabel} <Muted>{t("(default)")}</Muted></ChoiceName>
                            {!value && <CheckIcon size={11}/>}
                        </Choice>
                        {filtered.map((family) => (
                            <Choice
                                $active={value === family}
                                aria-selected={value === family}
                                key={family}
                                onClick={() => choose(family)}
                                role="option"
                                type="button"
                            >
                                <ChoiceText>
                                    <ChoiceName>{family}</ChoiceName>
                                    <Sample style={{fontFamily: `"${family}"`}}>{sample}</Sample>
                                </ChoiceText>
                                {value === family && <CheckIcon size={11}/>}
                            </Choice>
                        ))}
                        {filtered.length === 0 && <Empty>{t("No matching font.")}</Empty>}
                    </List>
                </Menu>,
                document.body,
            )}
        </>
    );
}

const Trigger = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-width: 180px;
    max-width: 320px;
    height: 32px;
    padding: 0 9px 0 10px;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
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

const Chevron = styled.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`;

const Menu = styled.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${menuInStyle}
`;

const FilterRow = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`;

const Filter = styled.input`
    flex: 1;
    min-width: 0;
    border: 0;
    background: transparent;
    color: var(--text-primary);
    font: inherit;
    font-size: 11.5px;
    outline: none;

    &::placeholder {
        color: var(--text-muted);
    }
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`;

const Choice = styled.button<{ $active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 7px 9px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.16)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.12);
        color: var(--text-primary);
    }
`;

const ChoiceText = styled.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`;

const ChoiceName = styled.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Sample = styled.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Muted = styled.span`
    color: var(--text-muted);
    font-size: 10px;
`;

const Empty = styled.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`;
