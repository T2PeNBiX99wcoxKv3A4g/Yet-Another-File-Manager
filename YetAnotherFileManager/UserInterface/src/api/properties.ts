import {useEffect, useState} from "react";

/** One path the properties dialog was opened for. */
export interface PathPropertiesInfo {
    path: string;
    name: string;
    directory: boolean;
    size: number;
    entries: number | null;
    created: number;
    modified: number;
    accessed: number;
    attributes: string[];
    unixMode: string | null;
    linkTarget: string | null;
    error: string | null;
}

export interface PropertiesRequest {
    items: PathPropertiesInfo[];
    /** The host has a shell property sheet, so the dialog can offer it. */
    canUseSystemSheet: boolean;
}

/** The one dialog every surface opens, so App can render it once. */
let current: PropertiesRequest | null = null;
const listeners = new Set<(value: PropertiesRequest | null) => void>();

export function openProperties(request: PropertiesRequest) {
    current = request;
    listeners.forEach((listener) => listener(current));
}

export function closeProperties() {
    current = null;
    listeners.forEach((listener) => listener(null));
}

export function usePropertiesRequest(): PropertiesRequest | null {
    const [value, setValue] = useState<PropertiesRequest | null>(current);

    useEffect(() => {
        listeners.add(setValue);
        return () => {
            listeners.delete(setValue);
        };
    }, []);

    return value;
}
