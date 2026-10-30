import {useIcon} from "../api/icons";
import {FolderIcon} from "./Icons";
import {BuiltinIcon, iconForName} from "../icons/fileTypes";

/**
 * A path's icon, resolved like the folder listing: the shell icon or the folder's own icon when
 * the settings allow it, then the built-in glyph for the file type. Folders always look like
 * folders, so a directory cannot be mistaken for the file that was recently opened inside it.
 */
export function PathIcon({path, name, isDirectory, size = 18}: {
    path: string;
    name: string;
    isDirectory: boolean;
    size?: number;
}) {
    const icon = useIcon(path, isDirectory);

    if (icon) return <img alt="" height={size} src={icon} style={{objectFit: "contain"}} width={size}/>;

    return isDirectory ? <FolderIcon size={size}/> : <BuiltinIcon name={iconForName(name)} size={size}/>;
}
