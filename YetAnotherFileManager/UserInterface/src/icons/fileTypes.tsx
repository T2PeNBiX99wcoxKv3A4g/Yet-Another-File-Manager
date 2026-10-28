import type {ComponentType} from "react";
import {
    ArchiveIcon,
    AudioIcon,
    CodeIcon,
    ConfigIcon,
    DatabaseIcon,
    DocumentIcon,
    ExecutableIcon,
    FileIcon,
    FolderIcon,
    FontIcon,
    ImageIcon,
    PdfIcon,
    PresentationIcon,
    SpreadsheetIcon,
    TextIcon,
    VideoIcon,
} from "../components/Icons";

/** The icons the app can draw itself, without asking the shell. */
export const builtinIcons = [
    "file",
    "folder",
    "text",
    "code",
    "image",
    "video",
    "audio",
    "archive",
    "pdf",
    "executable",
    "font",
    "database",
    "config",
    "spreadsheet",
    "presentation",
    "document",
] as const;

export type BuiltinIconName = typeof builtinIcons[number];

interface IconProps {
    size?: number;
}

const components: Record<BuiltinIconName, ComponentType<IconProps>> = {
    file: FileIcon,
    folder: FolderIcon,
    text: TextIcon,
    code: CodeIcon,
    image: ImageIcon,
    video: VideoIcon,
    audio: AudioIcon,
    archive: ArchiveIcon,
    pdf: PdfIcon,
    executable: ExecutableIcon,
    font: FontIcon,
    database: DatabaseIcon,
    config: ConfigIcon,
    spreadsheet: SpreadsheetIcon,
    presentation: PresentationIcon,
    document: DocumentIcon,
};

/** Extension to icon. Anything not listed falls back to the plain file icon. */
export const defaultExtensionIcons: Record<string, BuiltinIconName> = {
    ".png": "image", ".jpg": "image", ".jpeg": "image", ".gif": "image", ".webp": "image",
    ".bmp": "image", ".svg": "image", ".ico": "image", ".avif": "image", ".tif": "image", ".tiff": "image",

    ".mp4": "video", ".mkv": "video", ".avi": "video", ".mov": "video", ".webm": "video", ".wmv": "video",
    ".flv": "video", ".m4v": "video", ".mpg": "video", ".mpeg": "video",

    ".mp3": "audio", ".flac": "audio", ".wav": "audio", ".ogg": "audio", ".m4a": "audio", ".aac": "audio",
    ".wma": "audio", ".opus": "audio",

    ".zip": "archive", ".rar": "archive", ".7z": "archive", ".tar": "archive", ".gz": "archive",
    ".bz2": "archive", ".xz": "archive", ".zst": "archive", ".iso": "archive",

    ".cs": "code", ".js": "code", ".mjs": "code", ".ts": "code", ".tsx": "code", ".jsx": "code",
    ".py": "code", ".java": "code", ".kt": "code", ".rs": "code", ".go": "code", ".c": "code",
    ".h": "code", ".cpp": "code", ".hpp": "code", ".csproj": "code", ".sln": "code", ".json": "code",
    ".xml": "code", ".yml": "code", ".yaml": "code", ".toml": "code", ".sh": "code", ".ps1": "code",
    ".bat": "code", ".cmd": "code", ".lua": "code", ".html": "code", ".css": "code", ".scss": "code",

    ".txt": "text", ".md": "text", ".log": "text", ".rtf": "document",

    ".pdf": "pdf",

    ".doc": "document", ".docx": "document", ".odt": "document", ".pages": "document",
    ".xls": "spreadsheet", ".xlsx": "spreadsheet", ".csv": "spreadsheet", ".ods": "spreadsheet",
    ".ppt": "presentation", ".pptx": "presentation", ".odp": "presentation",

    ".exe": "executable", ".msi": "executable", ".com": "executable", ".appimage": "executable",
    ".dll": "executable", ".lnk": "executable",

    ".ttf": "font", ".otf": "font", ".woff": "font", ".woff2": "font",

    ".db": "database", ".sqlite": "database", ".sqlite3": "database", ".mdb": "database",

    ".ini": "config", ".cfg": "config", ".conf": "config", ".env": "config", ".properties": "config",
};

/** The icon for a file name, using the extension map. */
export function iconForName(name: string): BuiltinIconName {
    const dot = name.lastIndexOf(".");

    return dot > 0 ? defaultExtensionIcons[name.slice(dot).toLowerCase()] ?? "file" : "file";
}

export function BuiltinIcon({name, size}: { name?: string | null; size?: number }) {
    const Component = components[(name ?? "file") as BuiltinIconName] ?? FileIcon;

    return <Component size={size}/>;
}
