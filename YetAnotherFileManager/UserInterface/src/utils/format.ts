/** Human-readable file size. Folders are reported as directories by the caller. */
export function formatBytes(bytes: number): string {
    if (bytes <= 0) return "—";

    const units = ["B", "KB", "MB", "GB", "TB"];
    const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
    const value = bytes / 1024 ** exponent;

    return `${value.toFixed(exponent === 0 ? 0 : 1)} ${units[exponent]}`;
}

/** Local date and time, in a compact table-friendly form. */
export function formatDate(unixMilliseconds: number): string {
    if (unixMilliseconds <= 0) return "—";

    return new Date(unixMilliseconds).toLocaleString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
}

/** The last path component, for titles and drive labels. */
export function baseName(path: string): string {
    const trimmed = path.replace(/[\\/]+$/, "");
    const parts = trimmed.split(/[\\/]/);

    return parts.at(-1) || path;
}
