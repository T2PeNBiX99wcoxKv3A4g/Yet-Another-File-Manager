import {useEffect, useState} from "react";
import {Native} from "@photino-net-utils/bridge";

const iconCache = new Map<string, string | null>();
const fileCache = new Map<string, string | null>();
const listeners = new Set<() => void>();

let version = 0;

/** Icons depend on the settings, so a change has to invalidate every cached answer. */
export function clearIconCache() {
    iconCache.clear();
    fileCache.clear();
    version += 1;
    listeners.forEach((notify) => notify());
}

function useIconVersion(): number {
    const [value, setValue] = useState(version);

    useEffect(() => {
        const notify = () => setValue(version);

        listeners.add(notify);
        return () => {
            listeners.delete(notify);
        };
    }, []);

    return value;
}

/** Folders are cached by path (custom icons differ per folder); files by extension. */
function cacheKey(path: string, isDirectory: boolean): string {
    if (isDirectory) return `d:${path}`;

    const dot = path.lastIndexOf(".");
    const slash = Math.max(path.lastIndexOf("/"), path.lastIndexOf("\\"));

    return dot > slash ? `f:${path.slice(dot).toLowerCase()}` : "f:";
}

/** The icon the shell would show, as a data URL, or null while it loads or when unavailable. */
export function useIcon(path: string, isDirectory: boolean): string | null {
    const revision = useIconVersion();
    const id = cacheKey(path, isDirectory);
    const [icon, setIcon] = useState<string | null>(() => iconCache.get(id) ?? null);

    useEffect(() => {
        if (!Native.available) return;

        if (iconCache.has(id)) {
            setIcon(iconCache.get(id) ?? null);
            return;
        }

        let alive = true;

        void Native.request<{ dataUrl: string | null }>("fs.icon", {path, directory: isDirectory})
            .then((data) => {
                iconCache.set(id, data.dataUrl);
                if (alive) setIcon(data.dataUrl);
            }, () => {
                iconCache.set(id, null);
                if (alive) setIcon(null);
            });

        return () => {
            alive = false;
        };
    }, [id, path, isDirectory, revision]);

    return icon;
}

/** An image file the user picked as an icon, as a data URL. */
export function useIconFile(path: string | null): string | null {
    const revision = useIconVersion();
    const [data, setData] = useState<string | null>(() => path ? fileCache.get(path) ?? null : null);

    useEffect(() => {
        if (!path || !Native.available) {
            setData(null);
            return;
        }

        if (fileCache.has(path)) {
            setData(fileCache.get(path) ?? null);
            return;
        }

        let alive = true;

        void Native.request<{ dataUrl: string | null }>("fs.iconFile", {path})
            .then((result) => {
                fileCache.set(path, result.dataUrl);
                if (alive) setData(result.dataUrl);
            }, () => {
                fileCache.set(path, null);
                if (alive) setData(null);
            });

        return () => {
            alive = false;
        };
    }, [path, revision]);

    return data;
}
