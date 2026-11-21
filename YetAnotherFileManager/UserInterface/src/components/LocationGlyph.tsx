import {useTranslation} from "@photino-net-utils/bridge";
import {viewTitles} from "../tabs";
import {viewKind} from "../views";
import {isArchiveLocation} from "../utils/format";
import {ArchiveIcon, FolderIcon, GearIcon, HomeIcon, TrashIcon} from "./Icons";

/**
 * The glyph a tab or a history entry shows for a location: the page's own icon, an archive, or a
 * folder. Shared by the tab strip, the closed tabs panel and the back/forward menus.
 */
export function LocationGlyph({location, size = 13}: { location: string; size?: number }) {
    switch (viewKind(location)) {
        case "home":
            return <HomeIcon size={size}/>;
        case "settings":
            return <GearIcon size={size}/>;
        case "recycle":
            return <TrashIcon size={size}/>;
        case "gallery":
            return <FolderIcon size={size}/>;
        default:
            return isArchiveLocation(location) ? <ArchiveIcon size={size}/> : <FolderIcon size={size}/>;
    }
}

/** The folder's own name, without the rest of the path. */
export function folderName(location: string): string {
    const trimmed = location.replace(/[\\/]+$/, "");
    const cut = Math.max(trimmed.lastIndexOf("\\"), trimmed.lastIndexOf("/"));
    return cut >= 0 ? trimmed.slice(cut + 1) : trimmed;
}

/** The name a menu shows for a location: a page's title, or the folder's name. */
export function useLocationName(): (location: string) => string {
    const t = useTranslation();

    return (location: string): string => {
        const kind = viewKind(location);
        return kind ? t(viewTitles[kind]) : folderName(location);
    };
}
