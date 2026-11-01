import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {CrossIcon} from "./Icons";

interface TagPickerProps {
    x: number;
    y: number;
    /** The tags this entry has now. */
    tags: string[];
    /** Every tag that already exists in the folder. */
    allTags: string[];
    onChange: (tags: string[]) => void;
    onClose: () => void;
}

/** A small floating panel for choosing existing tags or creating a new one. */
export function TagPicker({x, y, tags, allTags, onChange, onClose}: TagPickerProps) {
    const [draft, setDraft] = useState("");
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
        return () => {
            window.removeEventListener("pointerdown", closeOnPointer);
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, [onClose]);

    const known = [...new Set([...allTags, ...tags])].sort((left, right) => left.localeCompare(right));

    const toggle = (tag: string) => {
        onChange(tags.includes(tag) ? tags.filter((value) => value !== tag) : [...tags, tag]);
    };

    const add = () => {
        const value = draft.trim();
        if (value.length === 0 || tags.includes(value)) return;

        onChange([...tags, value]);
        setDraft("");
    };

    const left = Math.max(8, Math.min(x, window.innerWidth - 252));
    const top = Math.max(8, Math.min(y + 8, window.innerHeight - 260));

    return createPortal(
        <Panel data-tag-menu="true" ref={root} style={{left, top}}>
            <Header>
                <span>Tags</span>
                <Close onClick={onClose} title="Close" type="button">
                    <CrossIcon size={11}/>
                </Close>
            </Header>

            <Chips>
                {known.length === 0 && <Empty>No tags yet.</Empty>}
                {known.map((tag) => (
                    <Chip $on={tags.includes(tag)} key={tag} onClick={() => toggle(tag)} type="button">
                        {tag}
                    </Chip>
                ))}
            </Chips>

            <NewRow>
                <input
                    autoFocus
                    onChange={(event) => setDraft(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            add();
                        }
                    }}
                    placeholder="New tag"
                    spellCheck={false}
                    value={draft}
                />
                <Add onClick={add} type="button">Add</Add>
            </NewRow>
        </Panel>,
        document.body
    );
}

const Panel = styled.div`
    position: fixed;
    z-index: 80;
    width: 244px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
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

const Chips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    max-height: 130px;
    overflow-y: auto;
`;

const Chip = styled.button<{ $on: boolean }>`
    padding: 3px 8px;
    border: 1px solid ${({$on}) => $on ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: 999px;
    background: ${({$on}) => $on ? "rgba(59, 130, 246, 0.22)" : "var(--bg-input)"};
    color: ${({$on}) => $on ? "var(--text-primary)" : "var(--text-secondary)"};
    font-size: 10px;
    cursor: pointer;
`;

const Empty = styled.span`
    font-size: 10px;
    color: var(--text-muted);
`;

const NewRow = styled.div`
    display: flex;
    gap: 4px;
    margin-top: 8px;

    input {
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
