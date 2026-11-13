import {Native} from "@photino-net-utils/bridge";

// The build and update clients come from the shared bridge; the messages this app adds itself
// (memory, the yafm:// registration and the startup modes) stay here.
export {
    cancelUpdateDownload,
    checkForUpdates as checkUpdate,
    getAppInfo,
    getUpdateStatus,
    installUpdate,
    onUpdateChangelog,
    onUpdateProgress,
    openLogsFolder,
    openReleasesPage as openReleasePage,
    openUrl,
    startUpdateDownload,
    type AppInfo,
    type UpdateAck,
    type UpdateCheck,
    type UpdatePhase,
    type UpdateProgress,
} from "@photino-net-utils/bridge";

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

/** Whether the shell opens yafm:// links with this copy, and where the entry points. */
export interface SchemeStatus {
    registered: boolean;
    pathMatches: boolean;
    registeredPath: string | null;
}

export const EmptyScheme: SchemeStatus = {registered: false, pathMatches: false, registeredPath: null};

/** Reads the current user's yafm:// registration without changing it. */
export async function getScheme(): Promise<SchemeStatus> {
    if (!Native.available) return EmptyScheme;

    return await Native.request<SchemeStatus>("app.scheme");
}

/** Registers or unregisters yafm:// for the current user, and answers with what is stored. */
export async function setScheme(enabled: boolean): Promise<SchemeStatus> {
    if (!Native.available) return EmptyScheme;

    return await Native.request<SchemeStatus>("app.scheme.set", {enabled});
}

/**
 * How the app is registered to start with the user's session. This app offers more than the
 * shared startup client (a logon task and a systemd unit as well as the Startup shortcut), so the
 * mode travels with the answer.
 */
export interface StartupStatus {
    supported: boolean;
    mode: "none" | "shortcut" | "task";
    active: boolean;
    error: string | null;
}

const EmptyStartup: StartupStatus = {supported: false, mode: "none", active: false, error: null};

/** Reads the startup entry without changing anything. */
export async function getStartup(): Promise<StartupStatus> {
    if (!Native.available) return EmptyStartup;

    return await Native.request<StartupStatus>("app.startup");
}

/** Creates or removes the chosen startup mechanism and returns what the host really has. */
export async function setStartup(mode: "none" | "shortcut" | "task"): Promise<StartupStatus> {
    if (!Native.available) return EmptyStartup;

    return await Native.request<StartupStatus>("app.startup.set", {mode});
}
