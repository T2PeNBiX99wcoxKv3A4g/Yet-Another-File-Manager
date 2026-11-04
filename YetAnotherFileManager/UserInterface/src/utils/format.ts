import type {Translate} from "@photino-net-utils/bridge";

/**
 * Picks the singular or plural English key, so a sentence reads naturally in English instead of
 * carrying a "(s)" marker. Languages without plural forms translate both keys the same way.
 */
export function plural(t: Translate, count: number, one: string, many: string,
    params: Record<string, string | number> = {}): string {
    return t(count === 1 ? one : many, {count, ...params});
}

/** Human-readable file size. An empty file is "0 B", an unknown size is "—". */
export function formatBytes(bytes: number): string {
    if (bytes < 0) return "—";
    if (bytes === 0) return "0 B";

    const units = ["B", "KB", "MB", "GB", "TB"];
    const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
    const value = bytes / 1024 ** exponent;

    return `${value.toFixed(exponent === 0 ? 0 : 1)} ${units[exponent]}`;
}

/** The language the interface is shown in, so dates match it rather than the machine's locale. */
export function appLocale(): string | undefined {
    const lang = document.documentElement.lang.trim();

    return lang.length > 0 ? lang : undefined;
}

/** Date and time in a compact table-friendly form, using the interface's language. */
export function formatDate(unixMilliseconds: number): string {
    if (unixMilliseconds <= 0) return "—";

    return new Date(unixMilliseconds).toLocaleString(appLocale(), {
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

/** The folder that holds a path, without a trailing separator. */
export function parentPath(path: string): string {
    const trimmed = path.replace(/[\\/]+$/, "");
    const cut = Math.max(trimmed.lastIndexOf("\\"), trimmed.lastIndexOf("/"));

    return cut > 0 ? trimmed.slice(0, cut) : trimmed;
}

/** A path with one separator style, no trailing separator and folded case, for map lookups. */
export function normalizePath(path: string): string {
    // Most Windows paths already use single backslashes, so the regex only runs when needed.
    let value = path.includes("/") || path.includes("\\\\")
        ? path.replace(/[\\/]+/g, "\\")
        : path;

    if (value.endsWith("\\"))
        value = value.slice(0, -1);

    return value.toLowerCase();
}

/** " (C:)" — the letter Windows uses, or nothing for a volume mounted at a path. */
export function driveLetter(drive: { name: string }): string {
    const root = drive.name.replace(/[\\/]+$/, "");

    return /^[a-z]:$/i.test(root) ? ` (${root.toUpperCase()})` : "";
}

/** "Local Disk (C:)" — the label the user gave, plus the letter Windows uses. */
export function driveName(drive: { name: string; label: string }): string {
    const letter = driveLetter(drive);

    // Linux volumes have no drive letter; their mount point is the name the user recognizes.
    return letter ? `${drive.label || "Local Disk"}${letter}` : drive.label || drive.name;
}
