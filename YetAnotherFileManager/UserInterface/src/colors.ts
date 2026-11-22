import {useMemo, useSyncExternalStore} from "react";
import {readStoredJson, writeStoredJson} from "./storage";

/**
 * One palette shared by every colour picker in the window. A colour saved anywhere appears
 * everywhere, and the history is one list rather than one per control.
 */
const SavedKey = "yafm.colors.saved";
const HistoryKey = "yafm.colors.history";
const SavedLimit = 24;
const HistoryLimit = 16;

let revision = 0;
const listeners = new Set<() => void>();

/** "#RRGGBB" in lower case, or null when the text is not a colour. Accepts three-digit input. */
export function normalizeHex(value: string | null | undefined): string | null {
    const text = (value ?? "").trim().replace(/^#/, "").toLowerCase();

    if (!/^[0-9a-f]{3}$/.test(text) && !/^[0-9a-f]{6}$/.test(text))
        return null;

    const full = text.length === 3 ? [...text].map((part) => part + part).join("") : text;
    return `#${full}`;
}

function readList(key: string, limit: number): string[] {
    const raw = readStoredJson<string[]>(key);
    const seen = new Set<string>();
    const list: string[] = [];

    for (const item of raw ?? []) {
        const color = normalizeHex(item);
        if (!color || seen.has(color)) continue;

        seen.add(color);
        list.push(color);
        if (list.length >= limit) break;
    }

    return list;
}

export function readSavedColors(): string[] {
    return readList(SavedKey, SavedLimit);
}

export function readColorHistory(): string[] {
    return readList(HistoryKey, HistoryLimit);
}

function changed() {
    revision += 1;
    for (const listener of listeners)
        listener();
}

/** Adds one colour to the front of the shared history. */
export function rememberColor(color: string | null | undefined) {
    const value = normalizeHex(color);
    if (!value) return;

    const list = [value, ...readColorHistory().filter((item) => item !== value)].slice(0, HistoryLimit);
    writeStoredJson(HistoryKey, list);
    changed();
}

/** Keeps one colour in the saved palette until the user removes it. */
export function saveColor(color: string | null | undefined) {
    const value = normalizeHex(color);
    if (!value) return;

    const list = [value, ...readSavedColors().filter((item) => item !== value)].slice(0, SavedLimit);
    writeStoredJson(SavedKey, list);
    changed();
}

export function forgetSavedColor(color: string) {
    const value = normalizeHex(color);
    if (!value) return;

    writeStoredJson(SavedKey, readSavedColors().filter((item) => item !== value));
    changed();
}

function subscribe(listener: () => void): () => void {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}

export interface ColorBook {
    saved: string[];
    history: string[];
}

/** The shared palette, re-read whenever any picker adds or removes a colour. */
export function useColorBook(): ColorBook {
    const current = useSyncExternalStore(subscribe, () => revision);

    return useMemo(() => ({saved: readSavedColors(), history: readColorHistory()}), [current]);
}
