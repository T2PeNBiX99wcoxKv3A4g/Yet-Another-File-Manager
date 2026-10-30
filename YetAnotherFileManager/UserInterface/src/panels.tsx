import type {ReactNode} from "react";
import type {AppSettings} from "./api/settings";
import {useIconFile} from "./api/icons";
import {ClockIcon, CodeIcon, DesktopIcon, DocumentsIcon, DownloadsIcon, DriveIcon, FolderIcon, HomeIcon, ImageIcon, MusicIcon, PicturesIcon, StarIcon, TextIcon, VideosIcon} from "./components/Icons";

export type PanelKind = "quick" | "recent" | "frequent" | "home" | "drives" | "folder";
export type ViewMode = "list" | "grid";

/** One block on the overview; several blocks of the same kind are allowed. */
export interface Panel {
    id: string;
    kind: PanelKind;
    path?: string;
    /** Folders of a manually added Quick access panel; the factory "quick" uses the global places. */
    places?: string[];
    title: string;
    view: ViewMode;
    icon?: string;
    pinned: boolean;
}

export const DefaultPanels = ["quick", "recent", "home", "drives"];

/** Panel kinds that can be stored in the layout. Frequent is not part of the factory layout. */
export const KnownPanels = [...DefaultPanels, "frequent"];

export const DefaultTitles: Record<string, string> = {
    quick: "Quick access",
    recent: "Recent",
    frequent: "Frequent",
    home: "Home",
    drives: "Drives",
};

/** Built-in icons a panel can be given. */
export const PanelIcons: Record<string, (size: number) => ReactNode> = {
    folder: (size) => <FolderIcon size={size}/>,
    home: (size) => <HomeIcon size={size}/>,
    desktop: (size) => <DesktopIcon size={size}/>,
    documents: (size) => <DocumentsIcon size={size}/>,
    downloads: (size) => <DownloadsIcon size={size}/>,
    pictures: (size) => <PicturesIcon size={size}/>,
    music: (size) => <MusicIcon size={size}/>,
    videos: (size) => <VideosIcon size={size}/>,
    drive: (size) => <DriveIcon size={size}/>,
    image: (size) => <ImageIcon size={size}/>,
    text: (size) => <TextIcon size={size}/>,
    code: (size) => <CodeIcon size={size}/>,
    clock: (size) => <ClockIcon size={size}/>,
    star: (size) => <StarIcon size={size}/>,
};

/** The kind of a panel id: "quick", "quick:2", "folder:D:\x". */
export function kindOfPanel(id: string): PanelKind {
    if (id.startsWith("folder:")) return "folder";

    return id.split(":")[0] as PanelKind;
}

/** Every panel, in order, with its title, view, icon and pin state filled in. */
export function buildPanels(settings: AppSettings | null): Panel[] {
    const stored = settings?.overviewPanels;
    const hidden = settings?.overviewHidden ?? [];
    const source = stored ?? DefaultPanels;
    // A stored list is the whole truth: deleting a default panel has to keep it deleted.
    const ids = [...new Set(source)].filter((id) => !hidden.includes(id)
        && (id.startsWith("folder:") || KnownPanels.some((base) => id === base || id.startsWith(`${base}:`))));
    const titles = settings?.overviewTitles ?? {};
    const views = settings?.overviewViews ?? {};
    const icons = settings?.overviewIcons ?? {};
    // Quick access, recent folders and the drives are in the sidebar until the user says otherwise.
    const pinned = settings?.overviewPinned ?? ["quick", "recent", "drives"];

    return ids.map((id) => {
        const kind = kindOfPanel(id);

        return {
            id,
            kind,
            path: kind === "folder" ? id.slice("folder:".length) : undefined,
            places: kind === "quick" && id !== "quick" ? settings?.panelPlaces?.[id] ?? [] : undefined,
            title: titles[id] ?? (kind === "folder"
                ? id.slice("folder:".length).split(/[\\/]/).filter(Boolean).pop() ?? id
                : kind === "home" ? "Home" : `${DefaultTitles[kind] ?? kind}${suffix(id)}`),
            view: views[id] === "grid" ? "grid" : views[id] === "list" ? "list" : (kind === "quick" ? "grid" : "list"),
            icon: icons[id],
            pinned: pinned.includes(id),
        };
    });
}

/** "quick:2" → " 2", so the second block is told apart from the first. */
function suffix(id: string): string {
    const parts = id.split(":");
    return parts.length > 1 ? ` ${parts[1]}` : "";
}

/** A panel's icon, which the sidebar shows too. */
export function PanelGlyph({panel, size = 16}: { panel: Pick<Panel, "icon" | "kind">; size?: number }) {
    const custom = panel.icon?.startsWith("file:") ? panel.icon.slice(5) : null;
    const image = useIconFile(custom);

    if (image) return <img alt="" src={image} style={{width: size, height: size, objectFit: "contain"}}/>;

    const builtin = panel.icon ? PanelIcons[panel.icon] : undefined;
    if (builtin) return <>{builtin(size)}</>;

    switch (panel.kind) {
        case "quick":
            return <FolderIcon size={size}/>;
        case "recent":
            return <ClockIcon size={size}/>;
        case "frequent":
            return <StarIcon size={size}/>;
        case "drives":
            return <DriveIcon size={size}/>;
        case "home":
            return <HomeIcon size={size}/>;
        default:
            return <FolderIcon size={size}/>;
    }
}
