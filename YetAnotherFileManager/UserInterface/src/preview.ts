/** The picture formats the grid and the preview panel render as an image. */
const ImageExtensions = new Set([
    ".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".avif", ".heic", ".heif",
    ".tif", ".tiff", ".svg", ".ico",
]);

/**
 * The other formats whose shell thumbnail shows the file's own content. Windows asks the installed
 * thumbnail providers, so a missing codec still falls back to the file's icon.
 */
const ContentExtensions = new Set([
    // Videos
    ".mp4", ".m4v", ".mov", ".wmv", ".avi", ".mkv", ".webm", ".mpg", ".mpeg",
    ".3gp", ".3g2", ".ts", ".m2ts", ".mts", ".flv", ".ogv", ".asf", ".vob", ".rm", ".rmvb",
    // Documents
    ".pdf", ".xps", ".oxps", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx",
    ".odt", ".ods", ".odp",
    // Audio, usually with the cover art embedded in the file
    ".mp3", ".m4a", ".aac", ".flac", ".wav", ".ogg", ".oga", ".opus", ".wma",
    // Design files
    ".psd", ".psb", ".ai", ".eps",
]);

/** Whether the shell can show this file's content as an icon-sized preview. */
export function canPreview(name: string): boolean {
    const extension = extensionOf(name);

    return ImageExtensions.has(extension) || ContentExtensions.has(extension);
}

/** Whether the file is a picture, which the grid groups apart from the other previews. */
export function isImage(name: string): boolean {
    return ImageExtensions.has(extensionOf(name));
}

function extensionOf(name: string): string {
    const dot = name.lastIndexOf(".");

    return dot > 0 && dot < name.length - 1 ? name.slice(dot).toLowerCase() : "";
}
