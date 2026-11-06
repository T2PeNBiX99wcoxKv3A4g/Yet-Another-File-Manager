import {useSyncExternalStore} from "react";

type Opener = (x: number, y: number) => void;

const providers = new Map<string, Opener>();
const listeners = new Set<() => void>();
let version = 0;

function emit() {
    version += 1;
    for (const listener of listeners) listener();
}

/** A view registers while it has a selection whose context menu can be reopened. */
export function setSelectionMenu(id: string, open: Opener | null) {
    if (open) providers.set(id, open);
    else providers.delete(id);

    emit();
}

export function hasSelectionMenu(id: string): boolean {
    return providers.has(id);
}

export function openSelectionMenu(id: string, x: number, y: number) {
    providers.get(id)?.(x, y);
}

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

function snapshot(): number {
    return version;
}

/** Lets a header draw its menu button only while the matching view has a selection. */
export function useSelectionMenu(id: string) {
    useSyncExternalStore(subscribe, snapshot, snapshot);

    return {
        available: hasSelectionMenu(id),
        open: (x: number, y: number) => openSelectionMenu(id, x, y),
    };
}

function groupIds(prefix: string): string[] {
    return [...providers.keys()].filter((id) => id === prefix || id.startsWith(`${prefix}:`));
}

/** A header that owns several child views, such as the overview's folder panels. */
export function useSelectionMenuGroup(prefix: string) {
    useSyncExternalStore(subscribe, snapshot, snapshot);
    const ids = groupIds(prefix);

    return {
        available: ids.length > 0,
        open: (x: number, y: number) => {
            const id = groupIds(prefix).at(-1);
            if (id) openSelectionMenu(id, x, y);
        },
    };
}
