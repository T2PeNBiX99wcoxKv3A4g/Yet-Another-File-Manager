import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import type {DirectoryView, ResolvedView} from "../api/files";
import {ViewColumns} from "./FileList";
import {GridIcon, ListIcon} from "./Icons";

interface ViewMenuProps {
    view: ResolvedView;
    onChange: (change: Partial<DirectoryView>) => void;
    onColumns: (columns: string[]) => void;
    disabled?: boolean;
}

/** The capture-style view button that sits with the window controls, and the panel it opens. */
export function ViewMenu({view, onChange, onColumns, disabled}: ViewMenuProps) {
    const [open, setOpen] = useState(false);
    const root = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!open) return;

        const closeOnPointer = (event: PointerEvent) => {
            if (!root.current?.contains(event.target as Node)) setOpen(false);
        };
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };

        window.addEventListener("pointerdown", closeOnPointer);
        window.addEventListener("keydown", closeOnEscape);
        return () => {
            window.removeEventListener("pointerdown", closeOnPointer);
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, [open]);

    useEffect(() => {
        if (disabled) setOpen(false);
    }, [disabled]);

    const columns = view.columns;

    const toggleColumn = (id: string) => {
        const wanted = new Set(columns);
        if (wanted.has(id)) wanted.delete(id);
        else wanted.add(id);

        // Keep the menu's order no matter which box was ticked last.
        const ordered = ViewColumns.map((column) => column.id).filter((column) => wanted.has(column));
        if (wanted.has("linkTarget")) ordered.push("linkTarget");

        onColumns(ordered);
    };

    return (
        <Root ref={root}>
            <Trigger disabled={disabled} onClick={() => setOpen((current) => !current)} title="View" type="button">
                {view.mode === "grid" ? <GridIcon size={14}/> : <ListIcon size={14}/>}
            </Trigger>

            {open && (
                <Panel>
                    <SectionTitle>View</SectionTitle>
                    <Segmented>
                        <Choice $on={view.mode === "list"} onClick={() => onChange({mode: "list"})} type="button">
                            <ListIcon size={12}/> List
                        </Choice>
                        <Choice $on={view.mode === "grid"} onClick={() => onChange({mode: "grid"})} type="button">
                            <GridIcon size={12}/> Grid
                        </Choice>
                    </Segmented>

                    <SectionTitle>List icon size</SectionTitle>
                    <SliderRow>
                        <input
                            aria-label="List icon size"
                            max={48}
                            min={16}
                            onChange={(event) => onChange({iconSize: Number(event.target.value)})}
                            step={2}
                            type="range"
                            value={view.iconSize}
                        />
                        <SizeValue>{view.iconSize}px</SizeValue>
                    </SliderRow>

                    <SectionTitle>Grid size</SectionTitle>
                    <SliderRow>
                        <input
                            aria-label="Grid size"
                            max={260}
                            min={100}
                            onChange={(event) => onChange({gridSize: Number(event.target.value)})}
                            step={4}
                            type="range"
                            value={view.gridSize}
                        />
                        <SizeValue>{view.gridSize}px</SizeValue>
                    </SliderRow>

                    <SectionTitle>Columns</SectionTitle>
                    {ViewColumns.map((column) => (
                        <Check key={column.id}>
                            <input
                                checked={columns.includes(column.id)}
                                onChange={() => toggleColumn(column.id)}
                                type="checkbox"
                            />
                            <span>{column.label}</span>
                        </Check>
                    ))}
                    <Check>
                        <input
                            checked={columns.includes("linkTarget")}
                            onChange={() => toggleColumn("linkTarget")}
                            type="checkbox"
                        />
                        <span>Link target after the name</span>
                    </Check>
                </Panel>
            )}
        </Root>
    );
}

const Root = styled.div`
    position: relative;
    display: flex;
    height: 100%;
`;

const Trigger = styled.button`
    display: grid;
    place-items: center;
    width: 42px;
    height: 100%;
    border: 0;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: rgba(148, 163, 184, 0.14);
        color: var(--text-primary);
    }

    &:disabled {
        background: transparent;
        opacity: 0.4;
        cursor: default;
    }
`;

const Panel = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 60;
    width: 232px;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
`;

const SectionTitle = styled.div`
    margin: 10px 0 5px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);

    &:first-child {
        margin-top: 2px;
    }
`;

const Segmented = styled.div`
    display: flex;
    gap: 4px;
`;

const Choice = styled.button<{ $on: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex: 1;
    padding: 5px 6px;
    border: 1px solid ${({$on}) => $on ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: ${({$on}) => $on ? "rgba(59, 130, 246, 0.18)" : "var(--bg-input)"};
    color: ${({$on}) => $on ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 11px;
    cursor: pointer;
`;

const SliderRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`;

const SizeValue = styled.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`;

const Check = styled.label`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 3px 0;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`;
