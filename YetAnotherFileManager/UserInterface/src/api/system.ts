import {Native} from "@photino-net-utils/bridge";

export interface AppInfo {
    version: string;
    platform: string;
    /** True when the interface has to paint the window's rounded corners itself (Linux). */
    rounded: boolean;
    /** Where the application writes its logs; empty in a browser. */
    logDirectory: string;
    /** True for a development build; shown in the status bar. */
    debug: boolean;
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
    if (!Native.available) return {version: "dev", platform: "web", rounded: false, logDirectory: "", debug: true};

    return await Native.request<AppInfo>("app.info");
}

/** Body of `update.status` and `update.check`: the running version and the published one. */
export interface UpdateCheck {
    current: string;
    latest: string;
    available: boolean;
}

/** Body of an update action: whether it started, and why it did not. */
export interface UpdateAck {
    ok: boolean;
    error?: string;
}

export type UpdatePhase = "changelog" | "downloading" | "ready" | "cancelled" | "error";

/** One `update.progress` event from the host. */
export interface UpdateProgress {
    phase: UpdatePhase;
    downloaded: number;
    total: number;
    percent: number;
    error?: string;
}

/** The cached update answer; null when the version file could not be read. */
export async function getUpdateStatus(): Promise<UpdateCheck | null> {
    if (!Native.available) return null;

    return (await Native.request<UpdateCheck | null>("update.status")) ?? null;
}

/** Compares this build with the version file the release workflow publishes, ignoring the cache. */
export async function checkUpdate(): Promise<UpdateCheck> {
    if (!Native.available) return {current: "dev", latest: "dev", available: false};

    return await Native.request<UpdateCheck>("update.check");
}

async function requireAck(type: string, payload?: unknown, timeout = 30_000): Promise<void> {
    const ack = await Native.request<UpdateAck>(type, payload, timeout);
    if (!ack.ok) throw new Error(ack.error ?? "The update action failed.");
}

/** Opens the releases page, where the newest build is published. */
export async function openReleasePage(): Promise<void> {
    if (!Native.available) return;

    await requireAck("update.openRelease");
}

/** Opens the folder the application writes its logs to. */
export async function openLogsFolder(): Promise<void> {
    if (!Native.available) return;

    await requireAck("update.openLogs");
}

/** Starts the installer download; progress arrives through {@link onUpdateProgress}. */
export async function startUpdateDownload(): Promise<UpdateAck> {
    if (!Native.available) return {ok: false, error: "The desktop host is not available."};

    return await Native.request<UpdateAck>("update.download", undefined, 30_000);
}

/** Stops a download that is still running and removes the partial file. */
export async function cancelUpdateDownload(): Promise<void> {
    if (!Native.available) return;

    await requireAck("update.cancel");
}

/** Runs the downloaded installer; the host closes once it starts. */
export async function installUpdate(): Promise<UpdateAck> {
    if (!Native.available) return {ok: false, error: "The desktop host is not available."};

    return await Native.request<UpdateAck>("update.install", undefined, 30_000);
}

export function onUpdateProgress(handler: (progress: UpdateProgress) => void): () => void {
    return Native.on((message) => {
        if (message.type === "update.progress") handler(message.data as UpdateProgress);
    });
}

export function onUpdateChangelog(handler: (text: string) => void): () => void {
    return Native.on((message) => {
        if (message.type === "update.changelog") handler((message.data as { text: string }).text);
    });
}

/** Hands a URL to the system browser. */
export async function openUrl(url: string): Promise<boolean> {
    if (!Native.available || !url) return false;

    const data = await Native.request<{ ok: boolean }>("app.openUrl", {url});
    return data.ok;
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

/** Whether Windows is set up to open yafm:// links with this app. */
export async function getScheme(): Promise<boolean> {
    if (!Native.available) return false;

    const data = await Native.request<{ registered: boolean }>("app.scheme");
    return data.registered;
}

/** Registers or unregisters yafm:// for the current user. */
export async function setScheme(enabled: boolean): Promise<boolean> {
    if (!Native.available) return false;

    const data = await Native.request<{ registered: boolean }>("app.scheme.set", {enabled});
    return data.registered;
}

/** How the app is registered to start with the user's session. */
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
