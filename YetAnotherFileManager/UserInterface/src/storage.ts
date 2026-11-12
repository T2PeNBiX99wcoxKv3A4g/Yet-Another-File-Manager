import {Native} from "@photino-net-utils/bridge";

/**
 * The interface's own state: panel widths, split ratios, the tray position, column widths and sort
 * orders. The desktop host keeps it in `ui-state.json` next to the settings, so it survives a new
 * build, a new port and the web view's cache being cleared. A plain browser (the dev preview) falls
 * back to `localStorage`, which is fine there because nothing else owns that origin.
 *
 * The values arrive in the page address instead of over the message bridge: the shell only starts
 * answering once the interface says it is ready, and the panels need their sizes before that.
 */
const values = new Map<string, string>();
const pending = new Map<string, string>();
let flushTimer = 0;

/** Reads what the host put in the address. Called before the interface mounts, never later. */
export function loadStoredState() {
    try {
        const encoded = new URLSearchParams(window.location.search).get("state");
        if (!encoded) return;

        const base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
        const bytes = Uint8Array.from(atob(base64), (character) => character.charCodeAt(0));
        const stored = JSON.parse(new TextDecoder().decode(bytes)) as Record<string, string>;

        for (const [key, value] of Object.entries(stored))
            if (typeof value === "string") values.set(key, value);
    } catch {
        // Nothing stored yet, or an address written by an older build: the defaults are the fallback.
    }
}

function read(key: string): string | null {
    return Native.available ? values.get(key) ?? null : localStorage.getItem(key);
}

function store(key: string, value: string) {
    if (!Native.available) {
        localStorage.setItem(key, value);
        return;
    }

    values.set(key, value);
    pending.set(key, value);

    // A resize fires on every pointer move, so the changes are gathered before one write.
    window.clearTimeout(flushTimer);
    flushTimer = window.setTimeout(flush, 200);
}

function flush() {
    flushTimer = 0;

    if (pending.size === 0)
        return;

    const entries = Object.fromEntries(pending);
    pending.clear();

    void Native.request("ui.state.set", {entries}).catch(() => undefined);
}

/** Flushes whatever is still waiting, for a window that is about to go away. */
export function flushStoredState() {
    if (pending.size === 0) return;

    const entries = Object.fromEntries(pending);
    pending.clear();

    void Native.request("ui.state.set", {entries}).catch(() => undefined);
}

export function readStoredNumber(key: string, fallback: number): number {
    const raw = read(key);
    if (raw === null || raw === "") return fallback;

    const value = Number(raw);
    return Number.isFinite(value) ? value : fallback;
}

export function writeStoredNumber(key: string, value: number) {
    store(key, String(value));
}

export function readStoredJson<T>(key: string): T | null {
    try {
        return JSON.parse(read(key) ?? "null") as T | null;
    } catch {
        return null;
    }
}

export function writeStoredJson(key: string, value: unknown) {
    store(key, JSON.stringify(value));
}
