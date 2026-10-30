import type {Place} from "../api/files";
import {useIconFile} from "../api/icons";
import {PanelIcons} from "../panels";
import {FolderIcon} from "./Icons";

/** The icon a quick-access folder was given, with the folder glyph as its default. */
export function PlaceIcon({place, size = 18}: { place: Place; size?: number }) {
    const custom = place.icon?.startsWith("file:") ? place.icon.slice(5) : null;
    const image = useIconFile(custom);

    if (image) return <img alt="" height={size} src={image} style={{objectFit: "contain"}} width={size}/>;
    if (place.icon && PanelIcons[place.icon]) return <>{PanelIcons[place.icon](size)}</>;

    return <FolderIcon size={size}/>;
}
