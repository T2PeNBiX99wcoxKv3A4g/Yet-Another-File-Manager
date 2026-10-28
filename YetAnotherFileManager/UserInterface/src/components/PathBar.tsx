import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {CheckIcon, ChevronRightIcon, CrossIcon} from "./Icons";

interface PathBarProps {
    path: string;
    onNavigate: (path: string) => void;
}

/**
 * Breadcrumbs that turn into a text box when clicked. The separators are the same on every
 * platform and the text box always uses forward slashes, which every supported OS accepts.
 */
export function PathBar({path, onNavigate}: PathBarProps) {
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState("");
    const input = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!editing) setDraft(path.replace(/\\/g, "/"));
    }, [path, editing]);

    useEffect(() => {
        if (editing) input.current?.select();
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
            <Editor>
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
                <EditorButton onClick={() => setDraft("")} title="Clear" type="button">
                    <CrossIcon size={12}/>
                </EditorButton>
                <EditorButton $apply onClick={commit} title="Open this path" type="button">
                    <CheckIcon size={14}/>
                </EditorButton>
            </Editor>
        );

    const crumbs = breadcrumbs(path);

    return (
        <Trail onClick={start} title="Click to type a path">
            {crumbs.map((crumb, index) => (
                <Crumb key={crumb.path} $last={index === crumbs.length - 1}>
                    {index > 0 && <Chevron><ChevronRightIcon size={9}/></Chevron>}
                    <CrumbButton
                        onClick={(event) => {
                            event.stopPropagation();
                            onNavigate(crumb.path);
                        }}
                        type="button"
                    >
                        {crumb.label}
                    </CrumbButton>
                </Crumb>
            ))}
        </Trail>
    );
}

/** Splits a path into clickable ancestors, keeping the Windows drive root intact. */
function breadcrumbs(path: string): { label: string; path: string }[] {
    const separator = path.includes("\\") ? "\\" : "/";
    const parts = path.split(/[\\/]/).filter((part) => part.length > 0);
    const crumbs: { label: string; path: string }[] = [];

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
