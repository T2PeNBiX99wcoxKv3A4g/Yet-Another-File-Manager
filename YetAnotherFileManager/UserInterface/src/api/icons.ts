import {useEffect, useState} from "react";
import {Native} from "@photino-net-utils/bridge";
import {extractArchiveEntry} from "./files";
import {getArchivePassword} from "./archivePassword";
import {isArchiveLocation} from "../utils/format";

const iconCache = new Map<string, string | null>();
const fileCache = new Map<string, string | null>();
const listeners = new Set<() => void>();

/** Icons are data URLs of a few kilobytes; a long session over a tree would keep them all. */
const CacheLimit = 4096;

let version = 0;

/** Stores an answer and drops the oldest ones once the cache outgrows its budget. */
function remember(cache: Map<string, string | null>, key: string, value: string | null) {
    cache.set(key, value);

    while (cache.size > CacheLimit) {
        const oldest = cache.keys().next().value;

        if (oldest === undefined) break;

        cache.delete(oldest);
    }
}

/** Icons depend on the settings, so a change has to invalidate every cached answer. */
export function clearIconCache() {
    iconCache.clear();
    fileCache.clear();
    version += 1;
    listeners.forEach((notify) => notify());
}

/**
 * Forgets only the icons that belong to one folder. A file appearing, disappearing or being
 * renamed there says nothing about any other folder, so the rest of the cache — and the work
 * behind every other visible row — is left alone.
 */
export function refreshIconCache(folder: string) {
    if (!folder) return;

    const prefix = folder.toLowerCase();
    let dropped = false;

    // Deleting while walking a Map is safe, and the copy this used to make held every key again.
    for (const key of iconCache.keys()) {
        if (!key.toLowerCase().includes(prefix)) continue;

        iconCache.delete(key);
        dropped = true;
    }

    if (!dropped) return;

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

/** These carry their icon inside the file — or in the handler they register — so the path is the key. */
const perFileIcons = new Set([
    ".lnk", ".url", ".website", ".pif", ".scf", ".application", ".appref-ms",
    ".exe", ".com", ".scr", ".cpl", ".msi", ".msp", ".mst", ".ico",
    ".appx", ".appxbundle", ".msix", ".msixbundle", ".appinstaller",
    ".gadget", ".settingcontent-ms", ".library-ms", ".searchconnector-ms", ".wsc",
    ".contact", ".diagcpl", ".diagpkg", ".diagcab", ".theme", ".themepack",
]);

/** Folders are cached by path (custom icons differ per folder); files usually by extension. */
function cacheKey(path: string, isDirectory: boolean, large: boolean): string {
    const size = large ? "1" : "0";

    if (isDirectory) return `d:${size}:${path}`;

    const dot = path.lastIndexOf(".");
    const slash = Math.max(path.lastIndexOf("/"), path.lastIndexOf("\\"));
    const extension = dot > slash ? path.slice(dot).toLowerCase() : "";

    return perFileIcons.has(extension) ? `f:${size}:${path}` : `f:${size}:${extension}`;
}

/**
 * The icons being fetched by their cache key. A wall of pictures mounts hundreds of tiles that all
 * ask for the same extension's icon at once; sharing one request keeps that from becoming hundreds
 * of round trips through the native bridge.
 */
const iconLoads = new Map<string, Promise<string | null>>();

/** The icon the shell would show, as a data URL, or null while it loads or when unavailable. */
export function useIcon(path: string | null, isDirectory: boolean, large = false): string | null {
    const revision = useIconVersion();
    const id = path === null ? "" : cacheKey(path, isDirectory, large);
    const [icon, setIcon] = useState<string | null>(() => iconCache.get(id) ?? null);

    useEffect(() => {
        if (path === null) {
            setIcon(null);
            return;
        }

        if (!Native.available) return;

        if (iconCache.has(id)) {
            setIcon(iconCache.get(id) ?? null);
            return;
        }

        let alive = true;

        // The first ask can race the shell's own start-up, and a folder on a slow volume may need a
        // moment. A null is retried a couple of times instead of leaving the built-in glyph there
        // until the row happens to be mounted again.
        let load = iconLoads.get(id);

        if (!load) {
            load = (async () => {
                for (let attempt = 0; attempt < 3; attempt++) {
                    const data = await Native.request<{ dataUrl: string | null }>("fs.icon",
                        {path, directory: isDirectory, large}).catch(() => null);

                    if (data?.dataUrl) {
                        remember(iconCache, id, data.dataUrl);
                        return data.dataUrl;
                    }

                    iconCache.delete(id);

                    if (attempt < 2)
                        await new Promise((resolve) => window.setTimeout(resolve, 1200));
                }

                return null;
            })().finally(() => iconLoads.delete(id));

            iconLoads.set(id, load);
        }

        void load.then((dataUrl) => {
            if (alive) setIcon(dataUrl);
        });

        return () => {
            alive = false;
        };
    }, [id, path, isDirectory, large, revision]);

    return icon;
}

/** A physical path for previewing a file that lives inside an archive. */
export function useArchiveEntryPath(path: string | null): string | null {
    const [resolved, setResolved] = useState<string | null>(path);

    useEffect(() => {
        if (!path) {
            setResolved(null);
            return;
        }

        if (!isArchiveLocation(path)) {
            setResolved(path);
            return;
        }

        let alive = true;
        void extractArchiveEntry(path, 0, getArchivePassword(path)).then(
            (result) => {
                if (alive) setResolved(result.path ?? null);
            },
            () => {
                if (alive) setResolved(null);
            },
        );

        return () => {
            alive = false;
        };
    }, [path]);

    return resolved;
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
                remember(fileCache, path, result.dataUrl);
                if (alive) setData(result.dataUrl);
            }, () => {
                remember(fileCache, path, null);
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

export function dataBase(): Promise<string> {
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
 *
 * Vector and AVIF pictures skip the shell: its thumbnail provider paints them onto an opaque
 * canvas, so a transparent drawing comes back on black. The web view draws those files itself,
 * transparency and all, and a vector stays sharp at any tile size. Everything else - including the
 * PSD, TGA, DDS, HDR and EXR formats the app decodes itself - comes from the thumbnail server.
 */
export function useThumbnail(path: string | null, size = 128, version = 0): string | null {
    const [base, setBase] = useState<string | null>(thumbnailBase);

    useEffect(() => {
        if (!path || base !== null) return;

        let alive = true;
        void dataBase().then((value) => {
            if (alive) setBase(value);
        });

        return () => {
            alive = false;
        };
    }, [path, base]);

    if (!path || !base) return null;

    // Vector and AVIF files are drawn by the web view itself: the shell's thumbnail provider paints
    // them onto an opaque canvas, so what should be transparent comes out black.
    const lower = path.toLowerCase();
    if (lower.endsWith(".svg") || lower.endsWith(".avif")) {
        const extension = lower.slice(lower.lastIndexOf("."));
        return `${base}/media?path=${encodeURIComponent(path)}&v=${version}&ext=${encodeURIComponent(extension)}`;
    }

    return `${base}/thumb?path=${encodeURIComponent(path)}&size=${size}&v=${version}-${ThumbnailRevision}`;
}

/** Bump when the thumbnail encoding changes, so the web view drops the bitmaps it cached. */
const ThumbnailRevision = 2;

/**
 * A loopback URL for the original media file, for a video or audio element. The server supports
 * byte ranges, so seeking and progressive playback work without loading the whole file.
 */
export function useMediaUrl(path: string | null, version = 0, extension = ""): string | null {
    const [base, setBase] = useState<string | null>(thumbnailBase);

    useEffect(() => {
        if (!path || base !== null) return;

        let alive = true;
        void dataBase().then((value) => {
            if (alive) setBase(value);
        });

        return () => {
            alive = false;
        };
    }, [path, base]);

    if (!path || !base) return null;

    const ext = extension ? `&ext=${encodeURIComponent(extension)}` : "";
    return `${base}/media?path=${encodeURIComponent(path)}&v=${version}${ext}`;
}

/** A PNG rendered by the isolated PDF helper; the web view never receives the PDF itself. */
export function usePdfPreview(path: string | null, version = 0): string | null {
    const [base, setBase] = useState<string | null>(thumbnailBase);

    useEffect(() => {
        if (!path || base !== null) return;

        let alive = true;
        void dataBase().then((value) => {
            if (alive) setBase(value);
        });

        return () => {
            alive = false;
        };
    }, [path, base]);

    if (!path || !base) return null;

    return `${base}/pdf?path=${encodeURIComponent(path)}&v=${version}`;
}