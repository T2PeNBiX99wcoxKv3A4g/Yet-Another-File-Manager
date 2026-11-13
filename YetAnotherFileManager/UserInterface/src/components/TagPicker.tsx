import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {popInStyle} from "../ui/motion";
import {CheckIcon, CrossIcon} from "./Icons";
import {useTranslation} from "@photino-net-utils/bridge";

/** The color a tag gets until the user picks one. */
export const DefaultTagColor = "#64748b";

/** A readable text color for a tag chip, based on how bright the tag color is. */
export function inkFor(color: string): string {
    const value = color.replace("#", "");
    if (value.length !== 6)
        return "#f9fafb";

    const red = Number.parseInt(value.slice(0, 2), 16);
    const green = Number.parseInt(value.slice(2, 4), 16);
    const blue = Number.parseInt(value.slice(4, 6), 16);
    const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

    return luminance > 0.62 ? "#0b0f19" : "#f9fafb";
}

interface TagPickerProps {
    x: number;
    y: number;
    /** The tags this entry has now. */
    tags: string[];
    /** Every tag that already exists in the folder. */
    allTags: string[];
    /** The color of each tag, by name. */
    colors: Record<string, string>;
    onChange: (tags: string[], colors?: Record<string, string>) => void;
    onClose: () => void;
}

/** A floating panel for choosing existing tags, creating one, and giving each its own color. */
export function TagPicker({x, y, tags, allTags, colors, onChange, onClose}: TagPickerProps) {
    const t = useTranslation();
    const [draft, setDraft] = useState("");
    const [draftColor, setDraftColor] = useState("#2dd4bf");
    const root = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const closeOnPointer = (event: PointerEvent) => {
            const target = event.target as Element | null;
            if (target?.closest("[data-tag-menu]")) return;

            onClose();
        };
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("pointerdown", closeOnPointer);
        window.addEventListener("keydown", closeOnEscape);
        window.addEventListener("blur", onClose);
        return () => {
            window.removeEventListener("pointerdown", closeOnPointer);
            window.removeEventListener("keydown", closeOnEscape);
            window.removeEventListener("blur", onClose);
        };
    }, [onClose]);

    const known = [...new Set([...allTags, ...tags])].sort((left, right) => left.localeCompare(right));

    const colorOf = (tag: string) => colors[tag] ?? DefaultTagColor;

    const toggle = (tag: string) => {
        onChange(tags.includes(tag) ? tags.filter((value) => value !== tag) : [...tags, tag]);
    };

    const recolor = (tag: string, color: string) => {
        onChange(tags, {...colors, [tag]: color});
    };

    const add = () => {
        const value = draft.trim();
        if (value.length === 0)
            return;

        onChange(tags.includes(value) ? tags : [...tags, value], {...colors, [value]: draftColor});
        setDraft("");
    };

    const left = Math.max(8, Math.min(x, window.innerWidth - 272));
    const top = Math.max(8, Math.min(y + 8, window.innerHeight - 320));

    return createPortal(
        <Panel data-tag-menu="true" ref={root} style={{left, top}}>
            <Header>
                <span>{t("tags")}</span>
                <Close onClick={onClose} title={t("close")} type="button">
                    <CrossIcon size={11}/>
                </Close>
            </Header>

            <List>
                {known.length === 0 && <Empty>{t("no_tags_yet")}</Empty>}
                {known.map((tag) => {
                    const color = colorOf(tag);
                    const on = tags.includes(tag);

                    return (
                        <TagRow key={tag}>
                            <ColorInput
                                aria-label={t("color_of_tag", {tag})}
                                onChange={(event) => recolor(tag, event.target.value)}
                                title={t("change_this_tag_s_color")}
                                type="color"
                                value={color}
                            />
                            <TagToggle
                                $color={color}
                                $ink={inkFor(color)}
                                $on={on}
                                onClick={() => toggle(tag)}
                                type="button"
                            >
                                {on && <CheckIcon size={11}/>}
                                <span>{tag}</span>
                            </TagToggle>
                        </TagRow>
                    );
                })}
            </List>

            <NewRow>
                <ColorInput
                    aria-label={t("color_of_the_new_tag")}
                    onChange={(event) => setDraftColor(event.target.value)}
                    title={t("color_of_the_new_tag")}
                    type="color"
                    value={draftColor}
                />
                <input
                    onChange={(event) => setDraft(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            add();
                        }
                    }}
                    placeholder={t("new_tag")}
                    spellCheck={false}
                    value={draft}
                />
                <Add onClick={add} type="button">{t("add")}</Add>
            </NewRow>
        </Panel>,
        document.body
    );
}

const Panel = styled.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${popInStyle}
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`;

const Close = styled.button`
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

/** Existing tags are a vertical list, each with its own color swatch. */
const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`;

const TagRow = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const ColorInput = styled.input`
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background: transparent;
    cursor: pointer;

    &::-webkit-color-swatch-wrapper {
        padding: 1px;
    }

    &::-webkit-color-swatch {
        border: 0;
        border-radius: 3px;
    }
`;

const TagToggle = styled.button<{ $on: boolean; $color: string; $ink: string }>`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    max-width: 100%;
    padding: 3px 9px;
    border: 1px solid ${({$on, $color}) => $on ? $color : "var(--border-color)"};
    border-radius: 999px;
    background: ${({$on, $color}) => $on ? $color : "transparent"};
    color: ${({$on, $ink}) => $on ? $ink : "var(--text-secondary)"};
    font-size: 11px;
    text-align: left;
    cursor: pointer;

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &:hover {
        border-color: ${({$color}) => $color};
    }
`;

const Empty = styled.span`
    font-size: 11px;
    color: var(--text-muted);
`;

const NewRow = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 9px;

    input:not([type="color"]) {
        flex: 1;
        min-width: 0;
        padding: 4px 6px;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-sm);
        background: var(--bg-input);
        color: var(--text-primary);
        font-size: 11px;
        outline: 0;

        &:focus {
            border-color: var(--border-color-focus);
        }
    }
`;

const Add = styled.button`
    padding: 4px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`;
