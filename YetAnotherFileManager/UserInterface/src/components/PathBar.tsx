import {useEffect, useRef, useState, type ReactNode} from "react";
import styled from "styled-components";
import type {Place} from "../api/files";
import {CheckIcon, ChevronRightIcon, CrossIcon, DriveIcon, FolderIcon} from "./Icons";
import {PlaceIcon} from "./PlaceIcon";

interface PathBarProps {
    path: string;
    /** Shown instead of the path when the tab is on a built-in page, e.g. "Overview". */
    label?: string;
    /** The built-in page's icon, shown beside its label. */
    icon?: ReactNode;
    /** Quick access entries by normalized path; the longest match folds the breadcrumbs. */
    quick: Record<string, Place>;
    onNavigate: (path: string) => void;
}

interface Crumb {
    label: string;
    path: string;
    /** Set when this crumb was folded from a Quick access entry, so its icon follows. */
    place?: Place;
    /** An explicit icon, used by the built-in pages. */
    icon?: ReactNode;
}

/**
 * Breadcrumbs that turn into a text box when clicked. The separators are the same on every
 * platform and the text box always uses forward slashes, which every supported OS accepts.
 * A folder that has a Quick access name shows that name and its icon instead of its real ones.
 */
export function PathBar({path, label, icon, quick, onNavigate}: PathBarProps) {
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState("");
    const input = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!editing) setDraft(path.replace(/\\/g, "/"));
    }, [path, editing]);

    useEffect(() => {
        if (editing) input.current?.select();
    }, [editing]);

    // Anything that takes the focus away (a click on the file list, another tab) abandons the edit.
    useEffect(() => {
        if (!editing) return;

        const cancel = () => setEditing(false);
        window.addEventListener("pointerdown", cancel);
        return () => window.removeEventListener("pointerdown", cancel);
    }, [editing]);

    const start = () => {
        setDraft(path.replace(/\\/g, "/"));
        setEditing(true);
    };

    const commit = () => {
        const target = draft.trim();
        setEditing(false);
        if (target.length > 0 && target !== path) onNavigate(target);
    };

    if (editing)
        return (
            <Editor onPointerDown={(event) => event.stopPropagation()}>
                <input
                    onChange={(event) => setDraft(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") commit();
                        if (event.key === "Escape") setEditing(false);
                    }}
                    ref={input}
                    spellCheck={false}
                    value={draft}
                />
                <EditorButton onClick={() => setEditing(false)} title="Cancel" type="button">
                    <CrossIcon size={12}/>
                </EditorButton>
                <EditorButton
                    $apply
                    onClick={commit}
                    onPointerDown={(event) => event.stopPropagation()}
                    title="Open this path"
                    type="button"
                >
                    <CheckIcon size={14}/>
                </EditorButton>
            </Editor>
        );

    const crumbs: Crumb[] = label
        ? [{label, path, icon}]
        : crumbsFor(path, quick);

    return (
        <Trail onClick={start} title="Click to type a path">
            {crumbs.map((crumb, index) => (
                <Crumb key={crumb.path} $last={index === crumbs.length - 1}>
                    {index > 0 && <Chevron><ChevronRightIcon size={9}/></Chevron>}
                    <CrumbButton
                        onClick={(event) => {
                            event.stopPropagation();
                            if (crumb.path !== path) onNavigate(crumb.path);
                        }}
                        type="button"
                    >
                        <CrumbGlyph>
                            {crumb.place
                                ? <PlaceIcon place={crumb.place} size={13}/>
                                : crumb.icon ?? (isDriveRoot(crumb.path) ? <DriveIcon size={13}/> : <FolderIcon size={13}/>)}
                        </CrumbGlyph>
                        {crumb.label}
                    </CrumbButton>
                </Crumb>
            ))}
        </Trail>
    );
}

/** "C:\" and "C:" both mean the drive itself, which gets the drive glyph. */
function isDriveRoot(path: string): boolean {
    return /^[a-z]:[\\/]?$/i.test(path);
}

/** Splits a path into clickable ancestors, keeping the Windows drive root intact. */
function breadcrumbs(path: string): Crumb[] {
    const separator = path.includes("\\") ? "\\" : "/";
    const parts = path.split(/[\\/]/).filter((part) => part.length > 0);
    const crumbs: Crumb[] = [];

    let current = separator === "\\" ? "" : "/";
    parts.forEach((part, index) => {
        if (separator === "\\") {
            current = index === 0 ? `${part}\\` : `${current.replace(/\\$/, "")}\\${part}`;
        } else {
            current = current === "/" ? `/${part}` : `${current}/${part}`;
        }

        crumbs.push({label: part, path: current});
    });

    return crumbs;
}

/**
 * Breadcrumbs with the longest named folder folded into its Quick access name, so "Documents"
 * replaces "C: / Users / me / Documents" — the full path only appears while editing.
 */
function crumbsFor(path: string, quick: Record<string, Place>): Crumb[] {
    const crumbs = breadcrumbs(path);
    const normalize = (value: string) => value.replace(/[\\/]+$/, "").toLowerCase();

    let deepest = -1;
    let match: Place | null = null;

    for (const place of Object.values(quick)) {
        if (place.name.trim().length === 0) continue;

        const index = crumbs.findIndex((crumb) => normalize(crumb.path) === normalize(place.path));

        if (index > deepest) {
            deepest = index;
            match = place;
        }
    }

    if (match && deepest >= 0)
        crumbs.splice(0, deepest + 1, {label: match.name, path: crumbs[deepest].path, place: match});

    return crumbs;
}

const Trail = styled.div`
    display: flex;
    align-items: center;
    min-width: 0;
    flex: 1;
    height: 32px;
    padding: 0 10px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    overflow: hidden;
    cursor: text;
    transition: border-color 130ms ease, background 130ms ease, box-shadow 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-input);
        box-shadow: inset 0 0 0 1px rgba(99, 102, 241, 0.08);
    }
`;

const Crumb = styled.span<{ $last: boolean }>`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last}) => $last ? "var(--text-primary)" : "var(--text-secondary)"};
`;

const CrumbGlyph = styled.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`;

const Chevron = styled.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`;

const CrumbButton = styled.button`
    display: inline-flex;
    align-items: center;
    padding: 4px 6px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: inherit;
    font: inherit;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -1px;
    }
`;

const Editor = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    min-width: 0;
    height: 32px;
    padding: 0 4px 0 10px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);

    input {
        flex: 1;
        min-width: 0;
        border: 0;
        outline: 0;
        background: transparent;
        color: var(--text-primary);
        font-family: var(--font-mono);
        font-size: 12px;
    }
`;

const EditorButton = styled.button<{ $apply?: boolean }>`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: ${({$apply}) => $apply ? "rgba(34, 197, 94, 0.22)" : "rgba(148, 163, 184, 0.2)"};
        color: ${({$apply}) => $apply ? "#4ade80" : "var(--text-primary)"};
    }
`;
