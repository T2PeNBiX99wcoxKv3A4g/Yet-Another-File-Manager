import {type ReactNode, useEffect, useLayoutEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {listDirectory, type Place} from "../api/files";
import {getSharePeers, isShareLocation, parseShareLocation, shareLocation} from "../api/share";
import {openWith, showProperties} from "../api/operations";
import {useQuickAccess} from "../quick";
import {
    ArrowRightIcon,
    CheckIcon,
    ChevronRightIcon,
    CopyIcon,
    CrossIcon,
    ExecutableIcon,
    GearIcon,
    PlusIcon,
    ServerIcon
} from "./Icons";
import {PathIcon} from "./PathIcon";
import {PlaceIcon} from "./PlaceIcon";
import {ContextMenu} from "./ContextMenu";
import {elevatedPanel} from "../ui/panel";
import {samePath} from "../utils/format";
import {isViewLocation} from "../views";
import {useTranslation} from "@photino-net-utils/bridge";

interface PathBarProps {
    path: string;
    /** Shown instead of the path when the tab is on a built-in page, e.g. "overview". */
    label?: string;
    /** The built-in page's icon, shown beside its label. */
    icon?: ReactNode;
    /** A bump opens the editor, which is how Ctrl+L replaces the location. */
    focusToken?: number;
    onNavigate: (path: string, newTab?: boolean) => void;
    /** Opens the host's full directory menu; without it a small local menu is used. */
    onContextMenu?: (path: string, x: number, y: number) => void;
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
export function PathBar({path, label, icon, focusToken, onNavigate, onContextMenu}: PathBarProps) {
    const t = useTranslation();
    const quick = useQuickAccess();
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState("");
    const [suggestions, setSuggestions] = useState<{ name: string; path: string }[]>([]);
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [anchor, setAnchor] = useState<{ left: number; top: number; width: number } | null>(null);
    const [crumbMenu, setCrumbMenu] = useState<{ x: number; y: number; path: string } | null>(null);
    const [shareNames, setShareNames] = useState<{ device: string; share: string } | null>(null);
    const input = useRef<HTMLInputElement | null>(null);
    const wrap = useRef<HTMLDivElement | null>(null);
    const lastFocus = useRef(0);

    // A shared folder shows the device and share names instead of the ids in its location.
    useEffect(() => {
        if (!isShareLocation(path)) {
            setShareNames(null);
            return;
        }

        const parsed = parseShareLocation(path);
        if (!parsed) {
            setShareNames(null);
            return;
        }

        let alive = true;

        void getSharePeers().then((peers) => {
            if (!alive)
                return;

            const peer = peers.find((item) => item.id === parsed.deviceId);
            const share = peer?.shares.find((item) => item.id === parsed.shareId);
            setShareNames({
                device: peer?.name ?? parsed.deviceId,
                share: share?.name ?? parsed.shareId,
            });
        }, () => alive && setShareNames(null));

        return () => {
            alive = false;
        };
    }, [path]);

    useEffect(() => {
        if (!editing) setDraft(path.replace(/\\/g, "/"));
    }, [path, editing]);

    useEffect(() => {
        if (!focusToken || focusToken === lastFocus.current) return;

        lastFocus.current = focusToken;
        setDraft(path.replace(/\\/g, "/"));
        setEditing(true);
    }, [focusToken, path]);

    useEffect(() => {
        if (editing) input.current?.select();
    }, [editing]);

    // Anything that takes the focus away (a click on the file list, another tab) abandons the edit.
    useEffect(() => {
        if (!editing) return;

        const cancel = () => setEditing(false);
        window.addEventListener("pointerdown", cancel);
        window.addEventListener("blur", cancel);
        return () => {
            window.removeEventListener("pointerdown", cancel);
            window.removeEventListener("blur", cancel);
        };
    }, [editing]);

    const start = () => {
        setDraft(path.replace(/\\/g, "/"));
        setEditing(true);
    };

    const commit = (event?: { ctrlKey?: boolean; metaKey?: boolean }) => {
        const target = draft.trim();
        const newTab = Boolean(event?.ctrlKey || event?.metaKey);
        setEditing(false);
        if (target.length > 0 && (target !== path || newTab)) onNavigate(target, newTab);
    };

    // Explorer's address bar suggests the folders beside what is being typed. The listing is
    // debounced so holding a key down does not ask the disk for every character.
    useEffect(() => {
        if (!editing) {
            setSuggestions([]);
            return;
        }

        const query = completionQuery(draft);
        if (!query) {
            setSuggestions([]);
            return;
        }

        let cancelled = false;
        const timer = window.setTimeout(() => {
            void listDirectory(query.parent, false).then(
                (listing) => {
                    if (cancelled) return;

                    const prefix = query.prefix.toLowerCase();
                    const matches = listing.entries
                        .filter((entry) => entry.isDirectory && entry.name.toLowerCase().startsWith(prefix))
                        .sort((left, right) => left.name.localeCompare(right.name))
                        .slice(0, 40)
                        .map((entry) => ({name: entry.name, path: entry.fullPath}));

                    setSuggestions(matches);
                    setActiveSuggestion(0);
                },
                () => {
                    if (!cancelled) setSuggestions([]);
                },
            );
        }, 120);

        return () => {
            cancelled = true;
            window.clearTimeout(timer);
        };
    }, [draft, editing]);

    const choose = (suggestion: { path: string }, newTab = false) => {
        setEditing(false);
        onNavigate(suggestion.path, newTab);
    };

    // The list lives in a portal, so it is positioned from the editor's rectangle instead of
    // inheriting the toolbar's stacking context (which the file list otherwise covers).
    useLayoutEffect(() => {
        if (!editing) {
            setAnchor(null);
            return;
        }

        const update = () => {
            const rect = wrap.current?.getBoundingClientRect();
            if (!rect)
                return;

            const width = Math.max(rect.width, 260);
            setAnchor({
                left: Math.max(8, Math.min(rect.left, window.innerWidth - width - 8)),
                top: rect.bottom + 6,
                width,
            });
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [editing]);

    if (editing)
        return (
            <EditorWrap onPointerDown={(event) => event.stopPropagation()} ref={wrap}>
                <Editor>
                    <input
                        onChange={(event) => setDraft(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "ArrowDown" && suggestions.length > 0) {
                                event.preventDefault();
                                setActiveSuggestion((current) => (current + 1) % suggestions.length);
                                return;
                            }

                            if (event.key === "ArrowUp" && suggestions.length > 0) {
                                event.preventDefault();
                                setActiveSuggestion((current) => (current - 1 + suggestions.length) % suggestions.length);
                                return;
                            }

                            if (event.key === "Tab" && suggestions.length > 0) {
                                event.preventDefault();
                                const suggestion = suggestions[Math.min(activeSuggestion, suggestions.length - 1)];
                                setDraft(`${suggestion.path.replace(/\\/g, "/")}/`);
                                return;
                            }

                            if (event.key === "Enter") {
                                if (suggestions.length > 0)
                                    choose(suggestions[Math.min(activeSuggestion, suggestions.length - 1)],
                                        event.ctrlKey || event.metaKey);
                                else
                                    commit(event);
                                return;
                            }

                            if (event.key === "Escape") {
                                if (suggestions.length > 0) setSuggestions([]);
                                else setEditing(false);
                            }
                        }}
                        ref={input}
                        spellCheck={false}
                        value={draft}
                    />
                    <EditorButton onClick={() => setEditing(false)} title={t("cancel")} type="button">
                        <CrossIcon size={12}/>
                    </EditorButton>
                    <EditorButton
                        $apply
                        onClick={commit}
                        onPointerDown={(event) => event.stopPropagation()}
                        title={t("open_this_path")}
                        type="button"
                    >
                        <CheckIcon size={14}/>
                    </EditorButton>
                </Editor>

                {suggestions.length > 0 && anchor && createPortal(
                    <Completions
                        onPointerDown={(event) => event.stopPropagation()}
                        style={{left: anchor.left, top: anchor.top, width: anchor.width}}
                    >
                        {suggestions.map((suggestion, index) => (
                            <Completion
                                $active={index === activeSuggestion}
                                key={suggestion.path}
                                onClick={(event) => choose(suggestion, event.ctrlKey || event.metaKey)}
                                onMouseEnter={() => setActiveSuggestion(index)}
                                type="button"
                            >
                                <PathIcon isDirectory name={suggestion.name} path={suggestion.path} size={14}/>
                                <CompletionName>{suggestion.name}</CompletionName>
                            </Completion>
                        ))}
                    </Completions>,
                    document.body,
                )}
            </EditorWrap>
        );

    const crumbs: Crumb[] = label
        ? [{label, path, icon}]
        : shareTrail(path, shareNames) ?? crumbsFor(path, quick.places);

    return (
        <>
            <Trail onClick={start} title={t("click_to_type_a_path")}>
                {crumbs.map((crumb, index) => (
                    <Crumb key={crumb.path} $last={index === crumbs.length - 1}>
                        {index > 0 && <Chevron><ChevronRightIcon size={9}/></Chevron>}
                        <CrumbButton
                            onClick={(event) => {
                                event.stopPropagation();
                                const newTab = event.ctrlKey || event.metaKey;
                                if (newTab || crumb.path !== path) onNavigate(crumb.path, newTab);
                            }}
                            onContextMenu={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                if (onContextMenu) onContextMenu(crumb.path, event.clientX, event.clientY);
                                else setCrumbMenu({x: event.clientX, y: event.clientY, path: crumb.path});
                            }}
                            type="button"
                        >
                            {crumb.place
                                ? <CrumbGlyph><PlaceIcon place={crumb.place} size={13}/></CrumbGlyph>
                                : crumb.icon && <CrumbGlyph>{crumb.icon}</CrumbGlyph>}
                            {crumb.label}
                        </CrumbButton>
                    </Crumb>
                ))}
            </Trail>
            {crumbMenu && (
                <ContextMenu
                    items={[
                        {
                            label: t("open"),
                            icon: <ArrowRightIcon size={14}/>,
                            onSelect: () => onNavigate(crumbMenu.path),
                        },
                        {
                            label: t("open_in_new_tab"),
                            icon: <PlusIcon size={14}/>,
                            onSelect: () => onNavigate(crumbMenu.path, true),
                        },
                        {
                            label: t("copy_as_path"),
                            icon: <CopyIcon size={14}/>,
                            separatorBefore: true,
                            onSelect: () => void navigator.clipboard.writeText(crumbMenu.path),
                        },
                        // yafm:// pages are not file system objects, so neither the shell's
                        // "open_with_2" nor the shell's Properties dialog can do anything for them.
                        ...(!isViewLocation(crumbMenu.path)
                            ? []
                            : [
                                {
                                    label: t("open_with"),
                                    icon: <ExecutableIcon size={14}/>,
                                    onSelect: () => void openWith(crumbMenu.path),
                                },
                                {
                                    label: t("properties"),
                                    icon: <GearIcon size={14}/>,
                                    onSelect: () => void showProperties([crumbMenu.path]),
                                },
                            ]),
                    ]}
                    onClose={() => setCrumbMenu(null)}
                    x={crumbMenu.x}
                    y={crumbMenu.y}
                />
            )}
        </>
    );
}

/**
 * The breadcrumbs of a shared folder: the device (with its icon), the share, then the folders
 * inside it. The ids stand in until the peer list arrives with the names.
 */
function shareTrail(path: string, names: { device: string; share: string } | null): Crumb[] | null {
    const parsed = parseShareLocation(path);
    if (!parsed)
        return null;

    const root = shareLocation(parsed.deviceId, parsed.shareId);
    const crumbs: Crumb[] = [
        {label: names?.device ?? parsed.deviceId, path: root, icon: <ServerIcon size={13}/>},
        {label: names?.share ?? parsed.shareId, path: root},
    ];

    let current = root;

    for (const segment of parsed.path.split("/").filter(Boolean)) {
        current = `${current}/${encodeURIComponent(segment)}`;
        crumbs.push({label: segment, path: current});
    }

    return crumbs;
}

/** Splits a path into clickable ancestors, keeping the Windows drive root intact. */
function breadcrumbs(path: string): Crumb[] {    const separator = path.includes("\\") ? "\\" : "/";
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
 * Breadcrumbs with the longest named folder folded into its Quick access name, so "documents"
 * replaces "C: / Users / me / Documents" — the full path only appears while editing.
 */
function crumbsFor(path: string, quick: Record<string, Place>): Crumb[] {
    const crumbs = breadcrumbs(path);

    let deepest = -1;
    let match: Place | null = null;

    for (const place of Object.values(quick)) {
        if (place.name.trim().length === 0) continue;

        const index = crumbs.findIndex((crumb) => samePath(crumb.path, place.path));

        if (index > deepest) {
            deepest = index;
            match = place;
        }
    }

    if (match && deepest >= 0)
        crumbs.splice(0, deepest + 1, {label: match.name, path: crumbs[deepest].path, place: match});

    return crumbs;
}

/**
 * Splits the text being typed into the folder to list and the part still being completed. Text
 * without a separator is not a path yet, so it gets no suggestions.
 */
function completionQuery(value: string): { parent: string; prefix: string } | null {
    if (isViewLocation(value) || isShareLocation(value)) return null;

    const cut = Math.max(value.lastIndexOf("/"), value.lastIndexOf("\\"));
    if (cut < 0) return null;

    return {parent: value.slice(0, cut + 1), prefix: value.slice(cut + 1)};
}

const Trail = styled.div`
    display: flex;
    align-items: center;
    min-width: 0;
    flex: 1;
    height: 32px;
    padding: 0 10px;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    overflow: hidden;
    cursor: text;
    font-family: var(--font-path), var(--font-cjk);
    transition: border-color 130ms ease, background 130ms ease, box-shadow 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-input);
        box-shadow: inset 0 0 0 1px rgba(var(--accent-secondary-rgb), 0.08);
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

const EditorWrap = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`;

const Completions = styled.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${elevatedPanel}
    animation: yafm-path-in 130ms cubic-bezier(0.22, 1, 0.36, 1);
    transform-origin: top left;

    @keyframes yafm-path-in {
        from {
            opacity: 0;
            transform: translateY(-4px) scale(0.99);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`;

const Completion = styled.button<{ $active: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 6px 8px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.14)" : "transparent"};
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;
    transition: background 100ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.14);
    }
`;

const CompletionName = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    border-radius: var(--radius-md);
    background: var(--bg-input);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);

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
