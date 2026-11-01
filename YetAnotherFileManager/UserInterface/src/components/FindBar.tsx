import {useEffect, useRef} from "react";
import styled from "styled-components";
import type {FindMode} from "../find";
import {ChevronRightIcon, CrossIcon, SearchIcon} from "./Icons";

interface FindBarProps {
    query: string;
    mode: FindMode;
    matchCase: boolean;
    regex: boolean;
    /** How many entries match, and which one the list is on (zero-based, -1 for none). */
    total: number;
    current: number;
    /** Bumped by the window when the next typed key should land in the box. */
    focusToken: number;
    onQuery: (query: string) => void;
    onPrevious: () => void;
    onNext: () => void;
    onMatchCase: () => void;
    onRegex: () => void;
    onMode: () => void;
    onClose: () => void;
}

/**
 * The floating search box, shown only while a search is open. It sits over the listing instead of
 * taking a row from the toolbar, so it can be as wide as the query needs.
 */
export function FindBar({
    query, mode, matchCase, regex, total, current, focusToken,
    onQuery, onPrevious, onNext, onMatchCase, onRegex, onMode, onClose,
}: FindBarProps) {
    const input = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const element = input.current;
        if (!element) return;

        element.focus();
        element.setSelectionRange(element.value.length, element.value.length);
    }, [focusToken]);

    /** A toggle should not steal the caret from the box. */
    const toggle = (action: () => void) => {
        action();
        input.current?.focus();
    };

    return (
        <Bar>
            <SearchIcon/>

            <Input
                aria-label="Search this folder"
                onChange={(event) => onQuery(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        if (event.shiftKey) onPrevious();
                        else onNext();
                    }

                    if (event.key === "Escape") {
                        event.preventDefault();
                        onClose();
                    }
                }}
                placeholder="Search this folder"
                ref={input}
                spellCheck={false}
                value={query}
            />

            <Counter>{total === 0 ? "0/0" : `${current + 1}/${total}`}</Counter>

            <Tool onClick={() => toggle(onPrevious)} title="Previous match (Shift+Enter)" type="button">
                <ChevronRightIcon size={12}/>
            </Tool>

            <Tool $down onClick={() => toggle(onNext)} title="Next match (Enter)" type="button">
                <ChevronRightIcon size={12}/>
            </Tool>

            <Toggle $on={matchCase} onClick={() => toggle(onMatchCase)} title="Match case" type="button">
                Aa
            </Toggle>

            <Toggle $on={regex} onClick={() => toggle(onRegex)} title="Regular expression" type="button">
                .*
            </Toggle>

            <Mode
                $on={mode === "hide"}
                onClick={() => toggle(onMode)}
                title={mode === "hide" ? "Non-matching entries are hidden" : "Non-matching entries are dimmed"}
                type="button"
            >
                {mode === "hide" ? "Hide" : "Dim"}
            </Mode>

            <Tool onClick={onClose} title="Close search (Esc)" type="button">
                <CrossIcon size={12}/>
            </Tool>
        </Bar>
    );
}

const Bar = styled.div`
    position: absolute;
    top: 10px;
    right: 16px;
    z-index: 20;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 5px 6px 5px 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(10px);
    color: var(--text-muted);
`;

const Input = styled.input`
    width: 180px;
    padding: 4px 2px;
    border: 0;
    background: transparent;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 12px;
    outline: none;

    &::placeholder {
        color: var(--text-muted);
    }
`;

const Counter = styled.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`;

const Tool = styled.button<{ $down?: boolean }>`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;

    svg {
        transform: rotate(${({$down}) => $down ? "90deg" : "-90deg"});
    }

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const Toggle = styled.button<{ $on: boolean }>`
    min-width: 24px;
    height: 22px;
    padding: 0 4px;
    border: 1px solid ${({$on}) => $on ? "var(--border-color-focus)" : "transparent"};
    border-radius: var(--radius-sm);
    background: ${({$on}) => $on ? "rgba(59, 130, 246, 0.18)" : "transparent"};
    color: ${({$on}) => $on ? "var(--text-primary)" : "var(--text-secondary)"};
    font-family: var(--font-mono);
    font-size: 10px;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
    }
`;

const Mode = styled(Toggle)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;
