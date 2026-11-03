/**
 * Small, failure-tolerant wrappers around `localStorage`. The web view may refuse storage (private
 * mode, policy), and every caller only needs the value for the current run in that case.
 */
export function readStoredNumber(key: string, fallback: number): number {
    try {
        const value = Number(localStorage.getItem(key));
        return Number.isFinite(value) ? value : fallback;
    } catch {
        return fallback;
    }
}

export function writeStoredNumber(key: string, value: number) {
    try {
        localStorage.setItem(key, String(value));
    } catch {
        // Storage may be unavailable; the value still works for this run.
    }
}

export function readStoredJson<T>(key: string): T | null {
    try {
        return JSON.parse(localStorage.getItem(key) ?? "null") as T | null;
    } catch {
        return null;
    }
}

export function writeStoredJson(key: string, value: unknown) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        // Storage may be unavailable; the value still works for this run.
    }
}
