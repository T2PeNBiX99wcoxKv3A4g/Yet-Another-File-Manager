import type {ReactNode} from "react";
import type {AppSettings} from "./api/settings";
import {useIconFile} from "./api/icons";
import {
    AppIcon,
    ArchiveIcon,
    AudioIcon,
    BookIcon,
    BriefcaseIcon,
    CameraIcon,
    ClockIcon,
    CloudIcon,
    CodeIcon,
    ConfigIcon,
    DatabaseIcon,
    DesktopIcon,
    DocumentIcon,
    DocumentsIcon,
    DownloadsIcon,
    DriveIcon,
    ExecutableIcon,
    FileIcon,
    FolderIcon,
    FontIcon,
    GamepadIcon,
    GearIcon,
    GlobeIcon,
    HeartIcon,
    HomeIcon,
    ImageIcon,
    MusicIcon,
    OverviewIcon,
    PackageIcon,
    PdfIcon,
    PicturesIcon,
    PinIcon,
    PresentationIcon,
    ServerIcon,
    SpreadsheetIcon,
    StarIcon,
    TerminalIcon,
    TextIcon,
    TrashIcon,
    VideoIcon,
    VideosIcon,
} from "./components/Icons";

export type PanelKind = "quick" | "recent" | "frequent" | "home" | "drives" | "folder" | "share" | "favorites";
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

export const DefaultPanels = ["quick", "frequent", "recent", "home", "drives", "share", "favorites"];

/** Panel kinds that can be stored in the layout. */
export const KnownPanels = [...DefaultPanels];

export const DefaultTitles: Record<string, string> = {
    quick: "quick_access",
    recent: "recent",
    frequent: "frequent",
    home: "home",
    drives: "drives",
    share: "shared",
    favorites: "favorites",
};

/** Built-in icons a panel or a Quick access folder can be given. */
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
    video: (size) => <VideoIcon size={size}/>,
    audio: (size) => <AudioIcon size={size}/>,
    text: (size) => <TextIcon size={size}/>,
    code: (size) => <CodeIcon size={size}/>,
    clock: (size) => <ClockIcon size={size}/>,
    star: (size) => <StarIcon size={size}/>,
    file: (size) => <FileIcon size={size}/>,
    archive: (size) => <ArchiveIcon size={size}/>,
    pdf: (size) => <PdfIcon size={size}/>,
    executable: (size) => <ExecutableIcon size={size}/>,
    font: (size) => <FontIcon size={size}/>,
    database: (size) => <DatabaseIcon size={size}/>,
    config: (size) => <ConfigIcon size={size}/>,
    spreadsheet: (size) => <SpreadsheetIcon size={size}/>,
    presentation: (size) => <PresentationIcon size={size}/>,
    document: (size) => <DocumentIcon size={size}/>,
    app: (size) => <AppIcon size={size}/>,
    gear: (size) => <GearIcon size={size}/>,
    pin: (size) => <PinIcon size={size}/>,
    trash: (size) => <TrashIcon size={size}/>,
    overview: (size) => <OverviewIcon size={size}/>,
    book: (size) => <BookIcon size={size}/>,
    briefcase: (size) => <BriefcaseIcon size={size}/>,
    cloud: (size) => <CloudIcon size={size}/>,
    gamepad: (size) => <GamepadIcon size={size}/>,
    camera: (size) => <CameraIcon size={size}/>,
    terminal: (size) => <TerminalIcon size={size}/>,
    server: (size) => <ServerIcon size={size}/>,
    package: (size) => <PackageIcon size={size}/>,
    globe: (size) => <GlobeIcon size={size}/>,
    heart: (size) => <HeartIcon size={size}/>,
    share: (size) => <ServerIcon size={size}/>,
    favorites: (size) => <HeartIcon size={size}/>,
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
    // Quick access, frequent folders, recent folders and the drives are in the sidebar by default.
    const pinned = settings?.overviewPinned ?? ["quick", "frequent", "recent", "drives"];

    return ids.map((id) => {
        const kind = kindOfPanel(id);

        return {
            id,
            kind,
            path: kind === "folder" ? id.slice("folder:".length) : undefined,
            places: kind === "quick" && id !== "quick" ? settings?.panelPlaces?.[id] ?? [] : undefined,
            title: titles[id] ?? (kind === "folder"
                ? id.slice("folder:".length).split(/[\\/]/).filter(Boolean).pop() ?? id
                : kind === "home" ? "home" : `${DefaultTitles[kind] ?? kind}${suffix(id)}`),
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
        case "share":
            return <ServerIcon size={size}/>;
        case "favorites":
            return <HeartIcon size={size}/>;
        default:
            return <FolderIcon size={size}/>;
    }
}
