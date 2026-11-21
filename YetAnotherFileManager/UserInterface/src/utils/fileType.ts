import type {LocalizationKey, Translate} from "@photino-net-utils/bridge";
import {iconForName} from "../icons/fileTypes";

/** The kind names the Type column uses, keyed by the built-in icon family of the name. */
const TypeLabels: Record<string, LocalizationKey> = {
    file: "file",
    folder: "folder",
    text: "text_file",
    code: "source_file",
    image: "image",
    video: "video_2",
    audio: "audio",
    archive: "archive",
    pdf: "pdf",
    executable: "application",
    font: "font",
    database: "database",
    config: "configuration",
    spreadsheet: "spreadsheet",
    presentation: "presentation",
    document: "document",
};

/**
 * What the Type column and the properties page call an entry: a shortcut and a symbolic link must
 * not look the same, and a file is named by its extension.
 */
export function typeLabel(name: string, directory: boolean, linkTarget: string | null, t: Translate): string {
    const lower = name.toLowerCase();

    if (lower.endsWith(".lnk"))
        return t("shortcut");
    if (lower.endsWith(".url") || lower.endsWith(".website"))
        return t("internet_shortcut");
    if (linkTarget != null)
        return directory ? t("folder_link") : t("symbolic_link");
    if (directory)
        return t("folder");

    const dot = name.lastIndexOf(".");
    const extension = dot > 0 && dot < name.length - 1 ? name.slice(dot + 1).toUpperCase() : "";
    const kind = t(TypeLabels[iconForName(name)] ?? "file");

    return extension.length > 0 ? `${extension} ${kind}` : t("file");
}
