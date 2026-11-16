import {LayoutPanelLeft, Table2, Image as ImageIcon, LayoutDashboard, Search, Tags, Images, Trash2, Palette} from "lucide-react";
import {siArchlinux, siFedora, siUbuntu} from "simple-icons";
import type {SiteIcons} from "@photino-net-utils/site";

/** simple-icons dropped the Windows mark, so the four squares are drawn here. */
const windows = {path: "M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z"};

/** The glyphs the home page draws, in the order its copy lists the entries. */
export const icons: SiteIcons = {
    features: [LayoutPanelLeft, Table2, ImageIcon, LayoutDashboard, Search, Tags, Images, Trash2, Palette],
    platforms: [windows, siFedora, siUbuntu, siArchlinux],
};
