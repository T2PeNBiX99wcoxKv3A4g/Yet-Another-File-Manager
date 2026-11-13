import type {Translate} from "@photino-net-utils/bridge";

/**
 * Picks the singular or plural English key, so a sentence reads naturally in English instead of
 * carrying a "(s)" marker. Languages without plural forms translate both keys the same way.
 */
export function plural<TKey extends string>(t: Translate<TKey>, count: number, one: TKey, many: TKey,
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

export type TimeFormatMode = "system" | "12" | "24" | "custom";

/** The shipped default: the interface reads 24-hour time out of the box. */
export const DefaultTimeFormat: TimeFormatMode = "24";
export const DefaultTimePattern = "yyyy/MM/dd HH:mm";

let currentTimeFormat: TimeFormatMode = DefaultTimeFormat;
let currentTimePattern = DefaultTimePattern;

/** Applies the saved time settings to every formatter; called whenever the settings change. */
export function applyTimeFormat(format: string | null | undefined, pattern: string | null | undefined) {
    currentTimeFormat = normalizeTimeFormat(format);
    currentTimePattern = pattern?.trim() || DefaultTimePattern;
}

export function normalizeTimeFormat(format: string | null | undefined): TimeFormatMode {
    return format === "system" || format === "12" || format === "custom" ? format : "24";
}

/** Date and time in a compact table-friendly form, using the configured format. */
export function formatDate(unixMilliseconds: number): string {
    return formatDateWith(unixMilliseconds, currentTimeFormat, currentTimePattern);
}

/** Same as formatDate but with an explicit format, for the settings preview. */
export function formatDateWith(unixMilliseconds: number, format: string | null | undefined,
                               pattern: string | null | undefined): string {
    if (unixMilliseconds <= 0) return "—";

    const date = new Date(unixMilliseconds);
    const mode = normalizeTimeFormat(format);

    if (mode === "custom")
        return applyTimePattern(date, pattern?.trim() || DefaultTimePattern);

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    };

    if (mode === "24") options.hourCycle = "h23";
    if (mode === "12") options.hour12 = true;

    return date.toLocaleString(appLocale(), options);
}

/** Time only, for the history panel. */
export function formatClock(unixMilliseconds: number): string {
    if (unixMilliseconds <= 0) return "—";

    const date = new Date(unixMilliseconds);

    if (currentTimeFormat === "custom")
        return applyTimePattern(date, currentTimePattern);

    const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };

    if (currentTimeFormat === "24") options.hourCycle = "h23";
    if (currentTimeFormat === "12") options.hour12 = true;

    return date.toLocaleTimeString(appLocale(), options);
}

const TimeTokens = ["yyyy", "yy", "MM", "M", "dd", "d", "HH", "H", "hh", "h", "mm", "m", "ss", "s", "a"];

/** Replaces the documented tokens; every other character is copied as-is. */
function applyTimePattern(date: Date, pattern: string): string {
    let result = "";

    for (let index = 0; index < pattern.length;) {
        const token = TimeTokens.find((candidate) => pattern.startsWith(candidate, index));

        if (!token) {
            result += pattern[index];
            index++;
            continue;
        }

        result += timeTokenValue(date, token);
        index += token.length;
    }

    return result;
}

function timeTokenValue(date: Date, token: string): string {
    const hours = date.getHours();
    const twelve = ((hours + 11) % 12) + 1;

    switch (token) {
        case "yyyy":
            return String(date.getFullYear());
        case "yy":
            return pad2(date.getFullYear() % 100);
        case "MM":
            return pad2(date.getMonth() + 1);
        case "M":
            return String(date.getMonth() + 1);
        case "dd":
            return pad2(date.getDate());
        case "d":
            return String(date.getDate());
        case "HH":
            return pad2(hours);
        case "H":
            return String(hours);
        case "hh":
            return pad2(twelve);
        case "h":
            return String(twelve);
        case "mm":
            return pad2(date.getMinutes());
        case "m":
            return String(date.getMinutes());
        case "ss":
            return pad2(date.getSeconds());
        case "s":
            return String(date.getSeconds());
        case "a":
            return dayPeriod(date);
        default:
            return "";
    }
}

function pad2(value: number): string {
    return String(value).padStart(2, "0");
}

function dayPeriod(date: Date): string {
    const part = new Intl.DateTimeFormat(appLocale(), {hour: "numeric", hour12: true})
        .formatToParts(date)
        .find((piece) => piece.type === "dayPeriod")?.value;

    return part ?? (date.getHours() < 12 ? "AM" : "PM");
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

const archiveExtensions = [".zip", ".7z", ".rar", ".tar", ".gz", ".tgz", ".bz2", ".xz"];

/** Whether the path itself names an archive file, such as `C:\show.zip`. */
export function isArchivePath(path: string): boolean {
    const trimmed = path.replace(/[\\/]+$/, "").toLowerCase();
    return archiveExtensions.some((extension) => trimmed.endsWith(extension));
}

/** Whether any part of the path is an archive, such as `C:\show.zip\text`. */
export function isArchiveLocation(path: string): boolean {
    if (isArchivePath(path)) return true;

    return path.toLowerCase().split(/[\\/]/).some((part) =>
        archiveExtensions.some((extension) => part.endsWith(extension)));
}

/** The archive file a virtual path points into, such as `C:\show.zip`. */
export function archiveFile(path: string): string {
    const parts = path.split(/[\\/]/);
    const index = parts.findIndex((part) =>
        archiveExtensions.some((extension) => part.toLowerCase().endsWith(extension)));

    return index < 0 ? path : parts.slice(0, index + 1).join("\\");
}

/** ZIP archives can be edited through a temporary working copy and atomically rebuilt. */
export function isZipArchiveLocation(path: string): boolean {
    return archiveFile(path).toLowerCase().endsWith(".zip");
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

/** Whether two paths name the same place, ignoring separators, a trailing slash and case. */
export function samePath(left: string, right: string): boolean {
    return normalizePath(left) === normalizePath(right);
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

/** An http(s) address; used for wallpapers and banners loaded from the network. */
export function isRemoteUrl(value: string | null | undefined): boolean {
    return !!value && /^https?:\/\//i.test(value);
}
