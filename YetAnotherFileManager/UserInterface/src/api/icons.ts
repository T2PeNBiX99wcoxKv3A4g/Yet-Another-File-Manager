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

const thumbnailCache = new Map<string, string | null>();

/** Thumbnails are big strings; keep the last screenfuls rather than every picture ever scrolled past. */
const ThumbnailCacheLimit = 480;

/** A screenful of tiles must not turn into a burst of hundreds of decodes at once, but a small
 *  limit makes the wall fill a tile at a time. */
const MaxThumbnailRequests = 8;

const thumbnailQueue: (() => void)[] = [];
let thumbnailRequests = 0;

function scheduleThumbnail(task: () => void) {
    thumbnailQueue.push(task);

    while (thumbnailRequests < MaxThumbnailRequests) {
        const next = thumbnailQueue.shift();
        if (!next) break;

        thumbnailRequests += 1;
        next();
    }
}

function finishThumbnail() {
    thumbnailRequests -= 1;

    const next = thumbnailQueue.shift();
    if (!next) return;

    thumbnailRequests += 1;
    next();
}

function rememberThumbnail(path: string, data: string | null) {
    thumbnailCache.delete(path);
    thumbnailCache.set(path, data);

    if (thumbnailCache.size <= ThumbnailCacheLimit) return;

    const oldest = thumbnailCache.keys().next().value;
    if (oldest !== undefined) thumbnailCache.delete(oldest);
}

/** A shell thumbnail for the gallery, requested only once the tile is close to the viewport. */
export function useThumbnail(path: string | null, size = 128): string | null {
    const revision = useIconVersion();
    const [data, setData] = useState<string | null>(() => path ? thumbnailCache.get(path) ?? null : null);

    useEffect(() => {
        if (!path || !Native.available) {
            setData(null);
            return;
        }

        if (thumbnailCache.has(path)) {
            setData(thumbnailCache.get(path) ?? null);
            return;
        }

        let alive = true;
        let started = false;

        const task = () => {
            started = true;

            if (!alive) {
                finishThumbnail();
                return;
            }

            void Native.request<{ dataUrl: string | null }>("fs.thumbnail", {path, size})
                .then((result) => {
                    rememberThumbnail(path, result.dataUrl);
                    if (alive) setData(result.dataUrl);
                }, () => {
                    rememberThumbnail(path, null);
                    if (alive) setData(null);
                })
                .finally(finishThumbnail);
        };

        scheduleThumbnail(task);

        return () => {
            alive = false;

            // A task that never started holds no slot, so it is simply taken back out of the queue.
            if (started) return;

            const index = thumbnailQueue.indexOf(task);
            if (index >= 0) thumbnailQueue.splice(index, 1);
        };
    }, [path, size, revision]);

    return data;
}