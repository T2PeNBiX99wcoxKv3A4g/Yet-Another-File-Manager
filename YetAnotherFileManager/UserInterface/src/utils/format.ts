/** Human-readable file size. An empty file is "0 B", an unknown size is "—". */
export function formatBytes(bytes: number): string {
    if (bytes < 0) return "—";
    if (bytes === 0) return "0 B";

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

/**
 * A drive gets a warning colour once it is mostly full, so the bar says something before the
 * numbers do.
 */
export function usageTone(used: number): string {
    if (used >= 0.9) return "#ef4444";
    if (used >= 0.75) return "#f59e0b";

    return "var(--accent-gradient)";
}

/** The last path component, for titles and drive labels. */
export function baseName(path: string): string {
    const trimmed = path.replace(/[\\/]+$/, "");
    const parts = trimmed.split(/[\\/]/);

    return parts.at(-1) || path;
}

/** " (C:)" — the letter Windows uses, or nothing for a volume mounted at a path. */
export function driveLetter(drive: { name: string }): string {
    const root = drive.name.replace(/[\\/]+$/, "");

    return /^[a-z]:$/i.test(root) ? ` (${root.toUpperCase()})` : "";
}

/** "Local Disk (C:)" — the label the user gave, plus the letter Windows uses. */
export function driveName(drive: { name: string; label: string }): string {
    return `${drive.label || "Local Disk"}${driveLetter(drive)}`;
}
