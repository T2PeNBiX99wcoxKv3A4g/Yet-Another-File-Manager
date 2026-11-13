import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {useTranslation} from "../api/i18n";
import type {DirectoryView, ResolvedView} from "../api/files";
import {GlobalTag} from "./GlobalTag";
import {elevatedPanel} from "../ui/panel";
import {ViewColumns, ResetColumnWidthsEvent} from "./FileList";
import {GridIcon, ListIcon} from "./Icons";

interface ViewMenuProps {
    view: ResolvedView;
    onChange: (change: Partial<DirectoryView>) => void;
    onColumns: (columns: string[]) => void;
    showImages: boolean;
    onShowImages: (value: boolean) => void;
    disabled?: boolean;
}

/** The capture-style view button that sits with the window controls, and the panel it opens. */
export function ViewMenu({view, onChange, onColumns, showImages, onShowImages, disabled}: ViewMenuProps) {
    const t = useTranslation();
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
            <Trigger
                $active={open}
                disabled={disabled}
                onClick={() => setOpen((current) => !current)}
                title={t("View")}
                type="button"
            >
                {view.mode === "grid" ? <GridIcon size={14}/> : <ListIcon size={14}/>}
            </Trigger>

            {open && (
                <Panel>
                    <SectionTitle>{t("View")}</SectionTitle>
                    <Segmented>
                        <Choice $on={view.mode === "list"} onClick={() => onChange({mode: "list"})} type="button">
                            <ListIcon size={12}/> {t("List")}
                        </Choice>
                        <Choice $on={view.mode === "grid"} onClick={() => onChange({mode: "grid"})} type="button">
                            <GridIcon size={12}/> {t("Grid")}
                        </Choice>
                    </Segmented>

                    <SectionTitle>{t("List icon size")}</SectionTitle>
                    <SliderRow>
                        <input
                            aria-label={t("List icon size")}
                            max={48}
                            min={16}
                            onChange={(event) => onChange({iconSize: Number(event.target.value)})}
                            step={2}
                            type="range"
                            value={view.iconSize}
                        />
                        <SizeValue>{view.iconSize}px</SizeValue>
                    </SliderRow>

                    <SectionTitle>{t("Grid size")}</SectionTitle>
                    <SliderRow>
                        <input
                            aria-label={t("Grid size")}
                            max={260}
                            min={100}
                            onChange={(event) => onChange({gridSize: Number(event.target.value)})}
                            step={4}
                            type="range"
                            value={view.gridSize}
                        />
                        <SizeValue>{view.gridSize}px</SizeValue>
                    </SliderRow>

                    <SectionTitle>
                        {t("Columns")}<GlobalTag/>
                        <ResetButton
                            onClick={() => window.dispatchEvent(new Event(ResetColumnWidthsEvent))}
                            title={t("Reset column widths")}
                            type="button"
                        >
                            {t("Reset widths")}
                        </ResetButton>
                    </SectionTitle>
                    {ViewColumns.map((column) => (
                        <Check key={column.id}>
                            <input
                                checked={columns.includes(column.id)}
                                onChange={() => toggleColumn(column.id)}
                                type="checkbox"
                            />
                            <span>{t(column.label)}</span>
                        </Check>
                    ))}
                    <Check>
                        <input
                            checked={columns.includes("linkTarget")}
                            onChange={() => toggleColumn("linkTarget")}
                            type="checkbox"
                        />
                        <span>{t("Link target after the name")}</span>
                    </Check>

                    <SectionTitle>{t("Preview panel")}<GlobalTag/></SectionTitle>
                    <Check>
                        <input
                            checked={showImages}
                            onChange={() => onShowImages(!showImages)}
                            type="checkbox"
                        />
                        <span>{t("Preview under the list")}</span>
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

const Trigger = styled.button<{ $active: boolean }>`
    display: grid;
    place-items: center;
    width: 42px;
    height: 100%;
    border: 0;
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.12)" : "transparent"};
    color: ${({$active}) => $active ? "var(--accent-primary)" : "var(--text-secondary)"};
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
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
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${elevatedPanel}
    animation: yafm-view-in 150ms cubic-bezier(0.22, 1, 0.36, 1);

    @keyframes yafm-view-in {
        from {
            opacity: 0;
            transform: translateY(-6px) scale(0.985);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`;

const SectionTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 12px 0 6px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);

    &::before {
        content: "";
        width: 2px;
        height: 9px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    &:first-child {
        margin-top: 2px;
    }
`;

/** Sits at the right end of the Columns title, so resetting is one click from where widths are set. */
const ResetButton = styled.button`
    margin-left: auto;
    padding: 2px 7px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 10px;
    letter-spacing: 0;
    text-transform: none;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`;

const Segmented = styled.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`;

const Choice = styled.button<{ $on: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex: 1;
    padding: 5px 6px;
    border: 1px solid ${({$on}) => $on ? "rgba(var(--accent-rgb), 0.55)" : "transparent"};
    border-radius: var(--radius-sm);
    background: ${({$on}) => $on ? "rgba(var(--accent-rgb), 0.16)" : "transparent"};
    color: ${({$on}) => $on ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 11px;
    font-weight: ${({$on}) => $on ? 600 : 500};
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
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
    padding: 4px 6px;
    margin: 0 -6px;
    border-radius: var(--radius-sm);
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    input {
        margin: 0;
        accent-color: var(--accent-primary);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
        color: var(--text-primary);
    }
`;
