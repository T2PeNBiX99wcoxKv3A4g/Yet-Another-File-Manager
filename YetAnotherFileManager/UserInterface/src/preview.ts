/** The kinds a previewable file can belong to; the grid groups its tiles by these. */
export type PreviewKind = "image" | "video" | "document" | "audio" | "design";

/** The groups the interface draws, in the order it draws them. */
export const PreviewKindLabels: { kind: PreviewKind; label: string }[] = [
    {kind: "image", label: "Images"},
    {kind: "video", label: "Videos"},
    {kind: "document", label: "Documents"},
    {kind: "audio", label: "Audio"},
    {kind: "design", label: "Design files"},
];

/**
 * The formats whose shell thumbnail shows the file's own content. Windows asks the installed
 * thumbnail providers, so a missing codec still falls back to the file's icon.
 */
const KindExtensions: Record<PreviewKind, Set<string>> = {
    image: new Set([
        ".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".avif", ".heic", ".heif",
        ".tif", ".tiff", ".svg", ".ico",
    ]),
    video: new Set([
        ".mp4", ".m4v", ".mov", ".wmv", ".avi", ".mkv", ".webm", ".mpg", ".mpeg",
        ".3gp", ".3g2", ".ts", ".m2ts", ".mts", ".flv", ".ogv", ".asf", ".vob", ".rm", ".rmvb",
    ]),
    document: new Set([
        ".pdf", ".xps", ".oxps", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx",
        ".odt", ".ods", ".odp",
    ]),
    audio: new Set([".mp3", ".m4a", ".aac", ".flac", ".wav", ".ogg", ".oga", ".opus", ".wma"]),
    design: new Set([".psd", ".psb", ".ai", ".eps"]),
};

/** The kind of preview this file has, or null when the shell has none to show. */
export function previewKindOf(name: string): PreviewKind | null {
    const extension = extensionOf(name);

    for (const {kind} of PreviewKindLabels)
        if (KindExtensions[kind].has(extension)) return kind;

    return null;
}

/** Whether the shell can show this file's content as an icon-sized preview. */
export function canPreview(name: string): boolean {
    return previewKindOf(name) !== null;
}

function extensionOf(name: string): string {
    const dot = name.lastIndexOf(".");

    return dot > 0 && dot < name.length - 1 ? name.slice(dot).toLowerCase() : "";
}
