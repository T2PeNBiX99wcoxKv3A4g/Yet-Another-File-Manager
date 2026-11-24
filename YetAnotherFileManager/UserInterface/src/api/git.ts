import {Native} from "@photino-net-utils/bridge";

/** What git answered after it was asked to move paths in or out of the index. */
export interface GitChange {
    ok: boolean;
    /** Git's own message when it refused, such as a path that no longer matches. */
    error?: string | null;
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
