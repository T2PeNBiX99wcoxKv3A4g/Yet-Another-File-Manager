import {useCallback, useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import type {GitListing} from "../api/files";
import {type GitCommit, getGitLog} from "../api/git";
import {plural} from "../utils/format";
import {CheckIcon, CrossIcon, GitBranchIcon} from "./Icons";
import {Timestamp} from "./Timestamp";
import {elevatedPanel} from "../ui/panel";
import {panelInStyle} from "../ui/motion";
import {useTranslation} from "@photino-net-utils/bridge";

/** How many commits one page of the panel asks for. */
const PageSize = 50;

/** How close to the bottom the list has to be before it asks for the next page. */
const LoadAhead = 160;

/** The three states the footer has to tell apart at a glance. */
type SyncState = "synced" | "pending" | "local";

interface GitStatusButtonProps {
    git: GitListing;
}

/**
 * The footer's repository chip and the history panel that opens above it. The chip never navigates:
 * a click opens the panel, whose commit list keeps loading as it is scrolled.
 */
export function GitStatusButton({git}: GitStatusButtonProps) {
    const t = useTranslation();
    const chip = useRef<HTMLButtonElement | null>(null);
    const list = useRef<HTMLDivElement | null>(null);
    const generation = useRef(0);
    const loadingNow = useRef(false);
    const [open, setOpen] = useState(false);
    const [anchor, setAnchor] = useState<{right: number; bottom: number} | null>(null);
    const [commits, setCommits] = useState<GitCommit[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const state = syncState(git);
    const branch = git.detached ? t("git_detached") : git.branch || t("git");

    const load = useCallback(async (path: string, skip: number, reset: boolean) => {
        // A scroll fires many times before the answer arrives; one page at a time is enough.
        if (!reset && loadingNow.current) return;
        loadingNow.current = true;

        const ticket = ++generation.current;
        setLoading(true);
        setError(null);

        try {
            const page = await getGitLog(path, skip, PageSize);
            if (ticket !== generation.current) return;

            setCommits((current) => reset ? page.commits : [...current, ...page.commits]);
            setHasMore(page.hasMore);
        } catch (cause) {
            if (ticket === generation.current)
                setError(cause instanceof Error ? cause.message : t("git_log_failed"));
        } finally {
            if (ticket === generation.current) {
                loadingNow.current = false;
                setLoading(false);
            }
        }
    }, [t]);

    const show = () => {
        const rect = chip.current?.getBoundingClientRect();
        if (!rect) return;

        setAnchor({right: window.innerWidth - rect.right, bottom: window.innerHeight - rect.top + 8});
        setOpen(true);
        setCommits([]);
        setHasMore(false);
        // A request from the previous opening may still be in flight; this one owns the panel now.
        loadingNow.current = false;
        void load(git.root, 0, true);
    };

    const hide = useCallback(() => setOpen(false), []);

    const loadNext = useCallback(() => {
        if (!hasMore || loadingNow.current) return;

        void load(git.root, commits.length, false);
    }, [commits.length, git.root, hasMore, load]);

    useEffect(() => {
        if (!open) return;

        const closeOnPointer = (event: PointerEvent) => {
            const target = event.target;
            if (target instanceof Element && (target.closest("[data-git-panel]") || target.closest("[data-git-chip]")))
                return;

            hide();
        };
        const closeOnKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") hide();
        };
        const dismiss = () => hide();

        window.addEventListener("pointerdown", closeOnPointer);
        window.addEventListener("keydown", closeOnKey);
        window.addEventListener("resize", dismiss);
        window.addEventListener("blur", dismiss);

        return () => {
            window.removeEventListener("pointerdown", closeOnPointer);
            window.removeEventListener("keydown", closeOnKey);
            window.removeEventListener("resize", dismiss);
            window.removeEventListener("blur", dismiss);
        };
    }, [open, hide]);

    // A different repository behind the chip means the open panel is showing the old one.
    useEffect(() => {
        setOpen(false);
    }, [git.root]);

    // A page that does not fill the panel would otherwise never scroll, so it asks for one more.
    useEffect(() => {
        const element = list.current;
        if (!open || !element || !hasMore || loading) return;
        if (element.scrollHeight <= element.clientHeight + 4) loadNext();
    }, [open, commits.length, hasMore, loading, loadNext]);

    const syncText = state === "pending"
        ? [git.ahead > 0 ? t("git_ahead", {count: git.ahead}) : "",
            git.behind > 0 ? t("git_behind", {count: git.behind}) : ""].filter(Boolean).join(" · ")
        : state === "synced" ? t("git_synced") : t("git_no_upstream");

    return (
        <>
            <Chip
                $open={open}
                $state={state}
                aria-expanded={open}
                data-git-chip
                onClick={() => open ? hide() : show()}
                ref={chip}
                title={[
                    branch,
                    syncText,
                    git.changed > 0
                        ? plural(t, git.changed, "k_1_uncommitted_change", "count_uncommitted_changes")
                        : "",
                    git.root,
                ].filter(Boolean).join("\n")}
                type="button"
            >
                <GitBranchIcon size={11}/>
                <GitName>{branch}</GitName>
                {state === "synced" && <SyncGlyph $state="synced" title={t("git_synced")}><CheckIcon size={9}/></SyncGlyph>}
                {state === "pending" && (
                    <>
                        {git.ahead > 0 && <SyncGlyph $state="pending">↑{git.ahead}</SyncGlyph>}
                        {git.behind > 0 && <SyncGlyph $state="pending">↓{git.behind}</SyncGlyph>}
                    </>
                )}
                {state === "local" && <LocalDot title={t("git_no_upstream")}/>}
                {git.changed > 0 && <ChangeCount>{git.changed}</ChangeCount>}
            </Chip>

            {open && anchor && createPortal(
                <Panel
                    $bottom={anchor.bottom}
                    $right={anchor.right}
                    aria-label={t("git")}
                    data-git-panel
                    role="dialog"
                >
                    <PanelHead>
                        <PanelTitle><GitBranchIcon size={12}/>{t("git")}</PanelTitle>
                        <ClosePanel aria-label={t("close")} onClick={hide} title={t("close")} type="button">
                            <CrossIcon size={10}/>
                        </ClosePanel>
                    </PanelHead>

                    <RepoPath title={git.root}>{git.root}</RepoPath>

                    <Facts>
                        <BranchChip title={branch}><GitBranchIcon size={10}/>{branch}</BranchChip>
                        {git.upstream && <Upstream>→ {git.upstream}</Upstream>}
                        <SyncPill $state={state}>
                            {state === "synced" && <CheckIcon size={9}/>}
                            {syncText}
                        </SyncPill>
                    </Facts>

                    {git.changed > 0 && (
                        <ChangeLine>
                            <ChangeDot/>
                            {plural(t, git.changed, "k_1_uncommitted_change", "count_uncommitted_changes")}
                        </ChangeLine>
                    )}

                    <SectionHead>
                        {t("commits")}
                        {commits.length > 0 && (
                            <SectionCount>{commits.length}{hasMore ? "+" : ""}</SectionCount>
                        )}
                    </SectionHead>

                    <List
                        onScroll={(event) => {
                            const element = event.currentTarget;
                            if (element.scrollTop + element.clientHeight >= element.scrollHeight - LoadAhead)
                                loadNext();
                        }}
                        ref={list}
                    >
                        {commits.length === 0 && !error && (
                            <Hint>{loading ? t("git_loading_commits") : t("no_commits_yet")}</Hint>
                        )}

                        {commits.map((commit) => <CommitRow commit={commit} key={commit.hash}/>)}

                        {loading && commits.length > 0 && <LoadingRow>{t("git_loading_commits")}</LoadingRow>}

                        {error && (
                            <ErrorLine>
                                <span>{error}</span>
                                <Retry
                                    onClick={() => void load(git.root, commits.length, commits.length === 0)}
                                    type="button"
                                >
                                    {t("refresh")}
                                </Retry>
                            </ErrorLine>
                        )}
                    </List>
                </Panel>,
                document.body,
            )}
        </>
    );
}

/** How the chip should read: an upstream that matches, one that does not, or none at all. */
function syncState(git: GitListing): SyncState {
    if (!git.upstream) return "local";

    return git.ahead > 0 || git.behind > 0 ? "pending" : "synced";
}

/** Outlook-style refs are long; the last two tell the reader enough, the rest is a count. */
function refsOf(commit: GitCommit): string[] {
    return (commit.refs ?? "").split(",").map((ref) => ref.trim()).filter(Boolean);
}

function CommitRow({commit}: {commit: GitCommit}) {
    const refs = refsOf(commit);
    const shown = refs.slice(0, 2);

    return (
        <Commit>
            <CommitTop>
                <ShortHash title={commit.hash}>{commit.short}</ShortHash>
                <Subject title={commit.subject}>{commit.subject}</Subject>
            </CommitTop>
            <CommitMeta>
                <span>{commit.author}</span>
                <Sep>·</Sep>
                <Timestamp value={Date.parse(commit.date)}/>
                {shown.length > 0 && (
                    <Refs>
                        {shown.map((ref) => <Ref key={ref} title={ref}>{ref}</Ref>)}
                        {refs.length > shown.length && <RefMore>+{refs.length - shown.length}</RefMore>}
                    </Refs>
                )}
            </CommitMeta>
        </Commit>
    );
}

/** Mixes a status colour with the theme's text colour, so it reads on dark and light palettes. */
function ink(tone: string): string {
    return `color-mix(in srgb, ${tone} 62%, var(--text-primary))`;
}

function tint(tone: string, percent: number): string {
    return `color-mix(in srgb, ${tone} ${percent}%, transparent)`;
}

const Green = "#58c982";
const Amber = "#e7b341";

const Chip = styled.button<{ $open: boolean; $state: SyncState }>`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    max-width: 280px;
    padding: 1px 8px;
    border: 1px solid ${({$state}) => $state === "synced" ? tint(Green, 50) : tint(Amber, 55)};
    border-radius: 999px;
    background: ${({$state}) => $state === "synced" ? tint(Green, 10) : tint(Amber, 12)};
    color: var(--text-secondary);
    font: inherit;
    font-size: 10px;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease, color 130ms ease;

    svg {
        flex-shrink: 0;
        color: ${({$state}) => $state === "synced" ? ink(Green) : ink(Amber)};
    }

    &:hover {
        border-color: ${({$state}) => $state === "synced" ? tint(Green, 70) : tint(Amber, 75)};
        color: var(--text-primary);
    }

    ${({$open}) => $open && "background: rgba(var(--accent-rgb), 0.16); border-color: var(--border-color-focus);"}
`;

const GitName = styled.span`
    overflow: hidden;
    max-width: 170px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

/** No upstream: the branch has nowhere to be in sync with, so the chip only carries a dot. */
const LocalDot = styled.span`
    width: 5px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${ink(Amber)};
`;

const SyncGlyph = styled.span<{ $state: SyncState }>`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    color: ${({$state}) => $state === "synced" ? ink(Green) : ink(Amber)};
`;

const ChangeCount = styled.span`
    flex-shrink: 0;
    min-width: 15px;
    padding: 0 4px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.20);
    color: var(--accent-primary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    text-align: center;
`;

const Panel = styled.div<{ $right: number; $bottom: number }>`
    position: fixed;
    right: ${({$right}) => $right}px;
    bottom: ${({$bottom}) => $bottom}px;
    z-index: 80;
    display: flex;
    flex-direction: column;
    width: min(440px, calc(100vw - 32px));
    max-height: min(540px, calc(100vh - 96px));
    overflow: hidden;
    font-family: var(--font-sans);
    ${elevatedPanel}
    ${panelInStyle}
`;

const PanelHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-shrink: 0;
    padding: 10px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`;

const PanelTitle = styled.span`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.1em;
    text-transform: uppercase;

    &::before {
        content: "";
        width: 2px;
        height: 10px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`;

const ClosePanel = styled.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`;

const RepoPath = styled.div`
    overflow: hidden;
    flex-shrink: 0;
    padding: 7px 12px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9.5px;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Facts = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 7px;
    flex-shrink: 0;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border-color);
`;

const BranchChip = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    max-width: 190px;
    padding: 1px 7px;
    border: 1px solid rgba(var(--accent-rgb), 0.25);
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.10);
    color: var(--text-secondary);
    font-size: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`;

const Upstream = styled.span`
    overflow: hidden;
    max-width: 150px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const SyncPill = styled.span<{ $state: SyncState }>`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
    padding: 1px 8px;
    border-radius: 999px;
    border: 1px solid ${({$state}) => $state === "synced" ? tint(Green, 50) : tint(Amber, 55)};
    background: ${({$state}) => $state === "synced" ? tint(Green, 10) : tint(Amber, 12)};
    color: ${({$state}) => $state === "synced" ? ink(Green) : ink(Amber)};
    font-size: 9.5px;
    font-weight: 600;
    white-space: nowrap;

    svg {
        flex-shrink: 0;
    }
`;

const ChangeLine = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    padding: 6px 12px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
    font-size: 10px;
`;

const ChangeDot = styled.span`
    width: 6px;
    height: 6px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.16);
`;

const SectionHead = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    padding: 9px 12px 5px;
    color: var(--text-muted);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`;

const SectionCount = styled.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--bg-rgb), 0.55);
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8.5px;
    letter-spacing: 0;
`;

const List = styled.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 0 6px;
`;

const Commit = styled.div`
    padding: 6px 7px;
    border-radius: var(--radius-sm);

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`;

const CommitTop = styled.div`
    display: flex;
    align-items: baseline;
    gap: 8px;
    min-width: 0;
`;

const ShortHash = styled.span`
    flex-shrink: 0;
    padding: 0 4px;
    border: 1px solid rgba(var(--accent-rgb), 0.22);
    border-radius: 3px;
    background: rgba(var(--accent-rgb), 0.10);
    color: var(--accent-primary);
    font-family: var(--font-mono);
    font-size: 9px;
    line-height: 15px;
`;

const Subject = styled.span`
    overflow: hidden;
    min-width: 0;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const CommitMeta = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 3px;
    min-width: 0;
    color: var(--text-muted);
    font-size: 9.5px;
    white-space: nowrap;
`;

const Sep = styled.span`
    opacity: 0.6;
`;

const Refs = styled.span`
    display: inline-flex;
    gap: 4px;
    overflow: hidden;
    margin-left: auto;
`;

const Ref = styled.span`
    overflow: hidden;
    max-width: 110px;
    padding: 0 4px;
    border: 1px solid rgba(var(--accent-rgb), 0.22);
    border-radius: 3px;
    background: rgba(var(--accent-rgb), 0.08);
    color: var(--accent-primary);
    font-family: var(--font-mono);
    font-size: 8px;
    line-height: 13px;
    text-overflow: ellipsis;
`;

const RefMore = styled.span`
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
`;

const Hint = styled.p`
    margin: 0;
    padding: 22px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`;

const ErrorLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 14px 12px;
    color: #f07171;
    font-size: 10.5px;
`;

const Retry = styled.button`
    flex-shrink: 0;
    padding: 3px 8px;
    border: 1px solid rgba(240, 113, 113, 0.4);
    border-radius: var(--radius-sm);
    background: rgba(240, 113, 113, 0.10);
    color: #f07171;
    font: inherit;
    font-size: 9.5px;
    cursor: pointer;

    &:hover {
        background: rgba(240, 113, 113, 0.18);
    }
`;

const LoadingRow = styled.div`
    padding: 9px 8px 12px;
    color: var(--text-muted);
    font-size: 9.5px;
    text-align: center;
`;
