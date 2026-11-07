import {useSyncExternalStore} from "react";

export interface LinkSourceEntry {
    path: string;
    isDirectory: boolean;
}

export interface LinkSource {
    paths: LinkSourceEntry[];
}

let source: LinkSource | null = null;
let version = 0;
const listeners = new Set<() => void>();

function emit() {
    version += 1;
    for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

function snapshot(): number {
    return version;
}

/** Remembers the entries chosen as "link source" until the app closes. */
export function setLinkSource(value: LinkSource | null) {
    source = value;
    emit();
}

export function getLinkSource(): LinkSource | null {
    return source;
}

export function useLinkSource(): LinkSource | null {
    useSyncExternalStore(subscribe, snapshot, snapshot);
    return source;
}
