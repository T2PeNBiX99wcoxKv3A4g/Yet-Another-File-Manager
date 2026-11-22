import {Native} from "@photino-net-utils/bridge";

/** One operation the status center shows. */
export interface TaskInfo {
    id: string;
    kind: string;
    label: string;
    /** "running", "done" or "failed". */
    state: string;
    total: number;
    done: number;
    bytesTotal: number;
    bytesDone: number;
    error: string | null;
    startedAt: number;
    finishedAt: number;
}

/** What the status center currently knows, newest first. */
export async function listTasks(): Promise<TaskInfo[]> {
    if (!Native.available) return [];

    const data = await Native.request<{ tasks: TaskInfo[] }>("app.tasks");
    return data.tasks;
}

/** Drops everything that already finished; running tasks stay. */
export async function clearTasks(): Promise<void> {
    if (!Native.available) return;

    await Native.request("app.tasks.clear");
}

/**
 * A row for work the window is waiting on, such as a conflict dialog. It has no total, so the
 * status center draws the moving bar that says "waiting for you".
 */
export async function startWaitingTask(kind: string, label: string): Promise<string | null> {
    if (!Native.available) return null;

    const data = await Native.request<{ id: string }>("app.tasks.start", {kind, label});
    return data.id ?? null;
}

/** Closes a waiting row; a failure keeps the message in the status center. */
export async function finishWaitingTask(id: string | null, error: string | null = null): Promise<void> {
    if (!Native.available || !id) return;

    await Native.request("app.tasks.finish", {id, failed: error !== null, error});
}
