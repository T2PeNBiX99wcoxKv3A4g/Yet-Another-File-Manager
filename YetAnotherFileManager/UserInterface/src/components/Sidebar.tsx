import {useEffect, useState} from "react";
import {useTranslation} from "@photino-net-utils/bridge";
import styled from "styled-components";
import {listDirectory, listFrequent, openFile, type DirectoryListing, type Drive, type FileEntry, type FrequentEntry, type Place, type RecentEntry} from "../api/files";
import {getSettings, type AppSettings} from "../api/settings";
import type {TabKind} from "../tabs";
import {buildPanels, PanelGlyph, type Panel} from "../panels";
import {DriveIcon, GearIcon, ImageIcon, OverviewIcon, TrashIcon} from "./Icons";
import {PathIcon} from "./PathIcon";
import {PlaceIcon} from "./PlaceIcon";
import {quickPlace, useQuickAccess} from "../quick";
import {Native} from "@photino-net-utils/bridge";
import {baseName, driveName, formatBytes, plural, usageTone} from "../utils/format";
import {wantsNewTab} from "../shortcuts";

interface SidebarProps {
    places: Place[];
    drives: Drive[];
    recent: RecentEntry[];
    recentLimit: number;
    currentPath: string;
    activeKind: TabKind;
    homePath?: string;
    /** Bumped whenever the overview layout changes, so pinned panels follow along. */
    version?: number;
    /** Bumped when the recent or frequent history is cleared. */
    historyVersion?: number;
    /** Built-in pages that have no meaning outside the app, such as the picker omitting Settings. */
    hiddenViews?: TabKind[];
    onNavigate: (path: string, newTab?: boolean) => void;
    onOpenView: (kind: Exclude<TabKind, "files">, newTab?: boolean) => void;
}

/**
 * A rail that folds to icons and expands under the pointer. Below the fixed pages it shows the
 * overview panels that were pinned there, each opening in place and pushing the rest down.
 */
export function Sidebar({
    places,
    drives,
    recent,
    recentLimit,
    currentPath,
    activeKind,
    homePath = "",
    version = 0,
    historyVersion = 0,
    hiddenViews = [],
    onNavigate,
    onOpenView,
}: SidebarProps) {
    const [pinned, setPinned] = useState<Panel[]>([]);
    const t = useTranslation();
    const [settings, setSettings] = useState<AppSettings | null>(null);
    const quick = useQuickAccess();

    useEffect(() => {
        void getSettings().then((loaded) => {
            setSettings(loaded);
            setPinned(buildPanels(loaded).filter((panel) => panel.pinned));
        }, () => {
            setSettings(null);
            setPinned([]);
        });
    }, [version]);

    // Pinned folder panels are always on screen, whether the active tab is a folder, the overview,
    // or settings. Report their folders separately so they keep refreshing behind every page.
    useEffect(() => {
        if (!Native.available) return;

        const paths = pinned
            .filter((panel) => panel.kind === "home" || panel.kind === "folder")
            .map((panel) => panel.path || homePath)
            .filter((path) => path.length > 0);

        Native.send({type: "fs.watch", payload: {paths, owner: "sidebar"}});

        return () => Native.send({type: "fs.watch", payload: {paths: [], owner: "sidebar"}});
    }, [pinned, homePath]);

    const quickItems = (panel: Panel): Place[] => {
        if (panel.id === "quick")
            return places;

        return (panel.places ?? []).map((path) => {
            const known = places.find((place) => isSamePath(place.path, path));

            return {
                name: settings?.placeNames?.[path] ?? known?.name ?? (baseName(path) || path),
                path,
                kind: "folder",
                icon: known?.icon ?? settings?.placeIcons?.[path] ?? null,
            };
        });
    };

    const showFiles = activeKind === "files";

    return (
        <Aside>
            <List>
                {!hiddenViews.includes("home") && (
                    <Item $active={activeKind === "home"} onClick={(event) => onOpenView("home", wantsNewTab(event))} title={t("Overview")} type="button">
                        <OverviewIcon/>
                        <Label>{t("Overview")}</Label>
                    </Item>
                )}
                {!hiddenViews.includes("recycle") && (
                    <Item $active={activeKind === "recycle"} onClick={(event) => onOpenView("recycle", wantsNewTab(event))} title={t("Recycle Bin")} type="button">
                        <TrashIcon/>
                        <Label>{t("Recycle Bin")}</Label>
                    </Item>
                )}
                {!hiddenViews.includes("gallery") && (
                    <Item $active={activeKind === "gallery"} onClick={(event) => onOpenView("gallery", wantsNewTab(event))} title={t("Gallery")} type="button">
                        <ImageIcon/>
                        <Label>{t("Gallery")}</Label>
                    </Item>
                )}
            </List>

            {pinned.map((panel) => (
                <Menu key={panel.id}>
                    <Item as="div" $active={false}>
                        <Glyph><PanelGlyph panel={panel} size={16}/></Glyph>
                        <Label>{t(panel.title)}</Label>
                    </Item>
                    <Sub>
                        <Inner>
                            {panel.kind === "quick" && quickItems(panel).map((place) => (
                                <Item
                                    key={place.path}
                                    $active={showFiles && isSamePath(currentPath, place.path)}
                                    onClick={(event) => onNavigate(place.path, wantsNewTab(event))}
                                    title={place.path}
                                    type="button"
                                >
                                    <PlaceIcon place={place}/>
                                    <Label>{place.name}</Label>
                                </Item>
                            ))}

                            {panel.kind === "recent" && recent.slice(0, recentLimit).map((entry) => {
                                const place = quickPlace(quick, entry.path);

                                return (
                                    <Item
                                        key={entry.path}
                                        $active={showFiles && isSamePath(currentPath, entry.path)}
                                        onClick={(event) => entry.isDirectory
                                            ? onNavigate(entry.path, wantsNewTab(event))
                                            : void openFile(entry.path)}
                                        title={entry.path}
                                        type="button"
                                    >
                                        {place && quick.useIcons
                                            ? <PlaceIcon place={place}/>
                                            : <PathIcon
                                                isDirectory={entry.isDirectory}
                                                name={entry.name}
                                                path={entry.path}
                                                size={18}
                                            />}
                                        <Label>{place?.name || entry.name}</Label>
                                    </Item>
                                );
                            })}

                            {panel.kind === "frequent" && (
                                <FrequentItems historyVersion={historyVersion} onNavigate={onNavigate}/>
                            )}

                            {panel.kind === "drives" && drives.map((drive) => {
                                const used = drive.totalSize > 0 ? 1 - drive.freeSpace / drive.totalSize : 0;

                                return (
                                    <Item
                                        key={drive.name}
                                        $active={showFiles && isSamePath(currentPath, drive.name)}
                                        onClick={(event) => onNavigate(drive.name, wantsNewTab(event))}
                                        title={drive.name}
                                        type="button"
                                    >
                                        <DriveIcon/>
                                        <Label>
                                            {driveName(drive)}
                                            <Hint>{formatBytes(drive.freeSpace)} free</Hint>
                                            <Bar><Fill $used={used} $tone={usageTone(used)}/></Bar>
                                        </Label>
                                    </Item>
                                );
                            })}

                            {(panel.kind === "home" || panel.kind === "folder") && (
                                <FolderItems
                                    onNavigate={onNavigate}
                                    path={panel.path || homePath}
                                />
                            )}
                        </Inner>
                    </Sub>
                </Menu>
            ))}

            {!hiddenViews.includes("settings") && (
                <Bottom>
                    <Item $active={activeKind === "settings"} onClick={(event) => onOpenView("settings", wantsNewTab(event))} title={t("Settings")} type="button">
                        <GearIcon/>
                        <Label>{t("Settings")}</Label>
                    </Item>
                </Bottom>
            )}
        </Aside>
    );
}

/** A flyout shows a sample: long folders keep the files reachable instead of pushing them past a cap. */
const FolderListLimit = 10;
const FileListLimit = 40;

/** The folders opened most often, capped to a flyout-sized list. */
function FrequentItems({historyVersion = 0, onNavigate}: {
    historyVersion?: number;
    onNavigate: (path: string, newTab?: boolean) => void;
}) {
    const t = useTranslation();
    const [entries, setEntries] = useState<FrequentEntry[] | null>(null);
    const quick = useQuickAccess();

    useEffect(() => {
        listFrequent().then(setEntries, () => setEntries([]));
    }, [historyVersion]);

    return (entries ?? []).slice(0, 15).map((entry) => {
        const place = quickPlace(quick, entry.path);

        return (
            <Item
                key={entry.path}
                $active={false}
                onClick={(event) => onNavigate(entry.path, wantsNewTab(event))}
                title={plural(t, entry.count, "1 visit · {path}", "{count} visits · {path}", {path: entry.path})}
                type="button"
            >
                {place && quick.useIcons
                    ? <PlaceIcon place={place}/>
                    : <PathIcon isDirectory name={entry.name} path={entry.path} size={18}/>}
                <Label>{place?.name || entry.name}</Label>
            </Item>
        );
    });
}

/**
 * The contents of a pinned folder panel, loaded when the section is on screen. Folders come first,
 * the way Explorer shows them, then the files inside the folder the panel points at.
 */
function FolderItems({path, onNavigate}: { path: string; onNavigate: (path: string, newTab?: boolean) => void }) {
    const [listing, setListing] = useState<DirectoryListing | null>(null);

    useEffect(() => {
        if (!path) return;

        setListing(null);
        listDirectory(path, false).then(setListing, () => setListing(null));
    }, [path]);

    // A pinned folder is one of the folders the overview watches, so it stays current too.
    useEffect(() => {
        if (!path || !Native.available) return;

        return Native.on((evt) => {
            const event = evt as { type?: string; data?: { path?: string } };
            if (event.type !== "fs.changed" || typeof event.data?.path !== "string") return;
            if (!isSamePath(event.data.path, path)) return;

            void listDirectory(path, false).then(setListing, () => undefined);
        });
    }, [path]);

    const entries = listing?.entries ?? [];
    const folders = entries.filter((entry) => entry.isDirectory).slice(0, FolderListLimit);
    const files = entries.filter((entry) => !entry.isDirectory).slice(0, FileListLimit);

    return (
        <>
            {folders.map((entry) => (
                <SidebarEntry entry={entry} key={entry.fullPath} onNavigate={onNavigate}/>
            ))}

            {files.map((entry) => (
                <SidebarEntry entry={entry} key={entry.fullPath} onNavigate={onNavigate}/>
            ))}
        </>
    );
}

/** One entry of a sidebar folder panel: folders navigate, files open in their usual program. */
function SidebarEntry({entry, onNavigate}: { entry: FileEntry; onNavigate: (path: string, newTab?: boolean) => void }) {
    const quick = useQuickAccess();
    const place = quickPlace(quick, entry.fullPath);

    return (
        <Item
            $active={false}
            onClick={(event) => entry.isDirectory
                ? onNavigate(entry.fullPath, wantsNewTab(event))
                : void openFile(entry.fullPath)}
            title={entry.fullPath}
            type="button"
        >
            {place && quick.useIcons
                ? <PlaceIcon place={place}/>
                : <PathIcon isDirectory={entry.isDirectory} name={entry.name} path={entry.fullPath} size={18}/>}
            <Label>{place?.name || entry.name}</Label>
        </Item>
    );
}

/** Comparing paths is enough here: the backend always answers with canonical full paths. */
function isSamePath(left: string, right: string): boolean {
    const normalize = (value: string) => value.replace(/[\\/]+$/, "").toLowerCase();

    return normalize(left) === normalize(right);
}

const Aside = styled.aside`
    position: absolute;
    z-index: 20;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 52px;
    padding: 10px 9px;
    overflow: hidden;
    background: rgba(var(--bg-rgb), 0.78);
    border-right: 1px solid var(--border-color);
    backdrop-filter: blur(16px) saturate(115%);
    -webkit-backdrop-filter: blur(16px) saturate(115%);
    transition: width 150ms ease, padding 150ms ease, box-shadow 150ms ease, background 150ms ease;

    html.has-wallpaper & {
        background: rgba(var(--bg-rgb), 0.52);
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:hover {
        width: 224px;
        padding: 10px 10px;
        background: rgba(var(--bg-rgb), 0.90);
        box-shadow: 14px 0 36px rgba(0, 0, 0, 0.45), 0 0 28px rgba(var(--accent-secondary-rgb), 0.06);
        overflow-y: auto;
        scrollbar-width: none;
    }

    &:not(:hover) ${() => Hint},
    &:not(:hover) ${() => Bar} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`;

const Bottom = styled(List)`
    margin-top: auto;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
`;

const Sub = styled.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Aside}:hover ${Menu}:hover > & {
        grid-template-rows: 1fr;
    }
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-height: 0;
    max-height: 40vh;
    padding-left: 10px;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

const Item = styled.button<{ $active: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    padding: 7px 8px;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.12)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 12.5px;
    text-align: left;
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease, transform 130ms ease;

    &::before {
        content: "";
        position: absolute;
        left: -1px;
        top: 50%;
        width: 2px;
        height: 0;
        border-radius: 2px;
        background: var(--accent-primary);
        transform: translateY(-50%);
        transition: height 160ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    ${({$active}) => $active && "&::before { height: 56%; }"}

    svg {
        flex-shrink: 0;
        color: ${({$active}) => $active ? "var(--accent-primary)" : "var(--text-muted)"};
        transition: color 130ms ease, transform 160ms cubic-bezier(0.22, 1, 0.36, 1);
        transform: scale(${({$active}) => $active ? 1.08 : 1});
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
        border-color: var(--border-color);
        color: var(--text-primary);

        svg {
            transform: scale(1.08);
        }
    }

    &:active {
        transform: scale(0.99);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;

const Glyph = styled.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    img {
        width: 16px;
        height: 16px;
        object-fit: contain;
    }
`;

const Label = styled.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Hint = styled.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`;

const Bar = styled.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`;

const Fill = styled.span<{ $used: number; $tone: string }>`
    display: block;
    width: ${({$used}) => Math.min(Math.max($used, 0), 1) * 100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone}) => $tone};
`;
