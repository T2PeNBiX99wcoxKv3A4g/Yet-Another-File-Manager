import {Native} from "@photino-net-utils/bridge";

export interface AppInfo {
    version: string;
    platform: string;
    /** True when the interface has to paint the window's rounded corners itself (Linux). */
    rounded: boolean;
}

export interface MemoryUsage {
    /** Bytes the managed heap holds right now. */
    managed: number;
    /** Bytes this process has committed, including native allocations. */
    private: number;
    /** Bytes currently resident in RAM, which is what the task manager shows. */
    workingSet: number;
    /** Bytes of RAM the runtime believes it can use, for the percentage. */
    available: number;
}

const EmptyMemory: MemoryUsage = {managed: 0, private: 0, workingSet: 0, available: 0};

/** Reads the app version declared in the csproj, plus the host platform id. */
export async function getAppInfo(): Promise<AppInfo> {
    if (!Native.available) return {version: "dev", platform: "web", rounded: false};

    return await Native.request<AppInfo>("app.info");
}

/** What the application process uses, in bytes. The webview keeps its own numbers. */
export async function getMemory(): Promise<MemoryUsage> {
    if (!Native.available) return EmptyMemory;

    return await Native.request<MemoryUsage>("app.memory");
}

/** Collects and hands memory back to the system, then reports what is left. */
export async function trimMemory(): Promise<MemoryUsage> {
    if (!Native.available) return EmptyMemory;

    return await Native.request<MemoryUsage>("app.memory.trim");
}
