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
