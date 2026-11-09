import {Native} from "@photino-net-utils/bridge";

export interface AppInfo {
    version: string;
    platform: string;
    /** True when the interface has to paint the window's rounded corners itself (Linux). */
    rounded: boolean;
    /** Where the application writes its logs; empty in a browser. */
    logDirectory: string;
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
    if (!Native.available) return {version: "dev", platform: "web", rounded: false, logDirectory: ""};

    return await Native.request<AppInfo>("app.info");
}

/** Body of `app.updateStatus` and `app.checkUpdate`: the running version and the published one. */
export interface UpdateCheck {
    current: string;
    latest: string;
    available: boolean;
}

/** The cached update answer; null when the version file could not be read. */
export async function getUpdateStatus(): Promise<UpdateCheck | null> {
    if (!Native.available) return null;

    return (await Native.request<UpdateCheck | null>("app.updateStatus")) ?? null;
}

/** Compares this build with the version file the release workflow publishes, ignoring the cache. */
export async function checkUpdate(): Promise<UpdateCheck> {
    if (!Native.available) return {current: "dev", latest: "dev", available: false};

    return await Native.request<UpdateCheck>("app.checkUpdate");
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
