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

/** These carry their icon inside the file, so every one of them needs its own lookup. */
const perFileIcons = new Set([".lnk", ".exe", ".ico", ".url", ".msi", ".appref-ms"]);

/** Folders are cached by path (custom icons differ per folder); files usually by extension. */
function cacheKey(path: string, isDirectory: boolean): string {
    if (isDirectory) return `d:${path}`;

    const dot = path.lastIndexOf(".");
    const slash = Math.max(path.lastIndexOf("/"), path.lastIndexOf("\\"));
    const extension = dot > slash ? path.slice(dot).toLowerCase() : "";

    return perFileIcons.has(extension) ? `f:${path}` : `f:${extension}`;
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

let thumbnailBase: string | null = null;
let thumbnailBaseTask: Promise<string> | null = null;

function loadThumbnailBase(): Promise<string> {
    if (thumbnailBase !== null) return Promise.resolve(thumbnailBase);
    if (!Native.available) return Promise.resolve("");

    thumbnailBaseTask ??= Native.request<{ base: string }>("app.thumbnails")
        .then((data) => {
            thumbnailBase = data.base ?? "";
            return thumbnailBase;
        }, () => {
            thumbnailBase = "";
            return "";
        });

    return thumbnailBaseTask;
}

/**
 * A loopback URL for the shell thumbnail. The web view fetches it with its own connection pool and
 * cache, which is far cheaper than pushing base64 strings through the native message bridge.
 */
export function useThumbnail(path: string | null, size = 128, version = 0): string | null {
    const [base, setBase] = useState<string | null>(thumbnailBase);

    useEffect(() => {
        if (!path || base !== null) return;

        let alive = true;
        void loadThumbnailBase().then((value) => {
            if (alive) setBase(value);
        });

        return () => {
            alive = false;
        };
    }, [path, base]);

    if (!path || !base) return null;

    return `${base}/thumb?path=${encodeURIComponent(path)}&size=${size}&v=${version}`;
}