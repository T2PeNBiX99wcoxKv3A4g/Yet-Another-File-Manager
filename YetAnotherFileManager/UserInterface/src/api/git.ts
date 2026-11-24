import {Native} from "@photino-net-utils/bridge";

/** What git answered after it was asked to move paths in or out of the index. */
export interface GitChange {
    ok: boolean;
    /** Git's own message when it refused, such as a path that no longer matches. */
    error?: string | null;
}

/** One commit in the repository's history. */
export interface GitCommit {
    hash: string;
    short: string;
    subject: string;
    author: string;
    /** ISO 8601 author date, so the interface can show it in the user's own format. */
    date: string;
    /** Decorations such as `HEAD -> master`, `origin/master` or `tag: v1.0.0`. */
    refs?: string | null;
}

/** The repository facts and one page of its history. */
export interface GitLog {
    root: string;
    branch: string;
    detached: boolean;
    upstream?: string | null;
    ahead: number;
    behind: number;
    changed: number;
    commits: GitCommit[];
    hasMore: boolean;
}

/**
 * Stages or unstages the given paths. Git is the one deciding what the paths mean, so a deleted
 * file, a folder and a renamed file all behave exactly as they do on the command line.
 */
export async function changeGitIndex(paths: string[], unstage: boolean): Promise<GitChange> {
    if (!Native.available) return {ok: false, error: "Git is unavailable in the browser preview."};

    try {
        return await Native.request<GitChange>(unstage ? "git.unstage" : "git.stage", {paths});
    } catch (cause) {
        return {ok: false, error: cause instanceof Error ? cause.message : String(cause)};
    }
}

/** One page of the repository's history, newest first. */
export async function getGitLog(path: string, skip = 0, limit = 50): Promise<GitLog> {
    if (!Native.available) throw new Error("Git is unavailable in the browser preview.");

    return await Native.request<GitLog>("git.log", {path, skip, limit});
}
