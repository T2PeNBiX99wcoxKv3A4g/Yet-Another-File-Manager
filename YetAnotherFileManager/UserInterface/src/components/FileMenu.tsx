import {useEffect, useRef, useState} from "react";
import {useTranslation} from "@photino-net-utils/bridge";
import {
    compressPaths,
    createLink,
    inspectPaths,
    invokeShellVerb,
    listOpenWith,
    listShellVerbs,
    openTerminal,
    openWith,
    openWithProgram,
    setCaseSensitive,
    isCaseSensitive,
    showInExplorer,
    showProperties,
    type LinkKind,
    type CompressOptions,
    type OpenWithProgram,
    type ShellVerb,
} from "../api/operations";
import {requestFolder} from "../folder-picker";
import {showMessage} from "../api/dialogs";
import {prettyShortcut, type ShortcutMap} from "../shortcuts";
import {CreateFileTypes} from "../create-types";
import {baseName, isArchiveLocation, isArchivePath, normalizePath} from "../utils/format";
import {setLinkSource, useLinkSource} from "../ui/linkSource";
import {ContextMenu, type ContextMenuItem} from "./ContextMenu";
import {
    ArchiveIcon,
    ArrowRightIcon,
    AppIcon,
    CaseSensitiveIcon,
    CopyIcon,
    CrossIcon,
    CutIcon,
    DocumentIcon,
    ExecutableIcon,
    FileIcon,
    FolderIcon,
    GearIcon,
    HeartIcon,
    HeartMinusIcon,
    PackageIcon,
    PasteIcon,
    PencilIcon,
    PinIcon,
    PlusIcon,
    RefreshIcon,
    ShareIcon,
    StarIcon,
    TerminalIcon,
    TrashIcon,
} from "./Icons";

/** What the menu points at: one entry, or the background of a folder. */
export interface FileMenuTarget {
    path: string;
    isDirectory: boolean;
}

export interface FileMenuState {
    x: number;
    y: number;
    paths: string[];
    background?: boolean;
}

/** What the extraction entry should do; "choose" asks for a target folder first. */
export type ArchiveExtractMode = "here" | "named" | "auto" | "choose";

interface FileMenuProps {
    menu: FileMenuState | null;
    /** The folder the menu belongs to; used by the background entries. */
    directory: string;
    /** The single entry the menu points at, when it is not a multi-selection. */
    target?: FileMenuTarget | null;
    shortcuts: ShortcutMap;
    canPaste?: boolean;
    onClose: () => void;
    onOpen?: (path: string, newTab?: boolean) => void;
    onOpenFile?: (path: string) => void;
    onRename?: (path: string) => void;
    onDelete?: (paths: string[]) => void;
    onCopy?: (paths: string[], cut: boolean) => void;
    onPaste?: (directory: string) => void;
    onCreateFolder?: (caseSensitive?: boolean) => void;
    /** Creates a folder (null) or a file with this extension. */
    onCreateFile?: (extension: string | null) => void;
    /** The New button only needs the creation entries, not the folder background actions. */
    creationOnly?: boolean;
    onRefresh?: () => void;
    onAddToTray?: (paths: string[]) => void;
    /** Pins the selected files and folders to the overview's Favorites panel. */
    onAddFavorite?: (paths: string[]) => void;
    /** Removes the selected paths from Favorites when they are already pinned. */
    onRemoveFavorite?: (paths: string[]) => void;
    /** Normalized favorite paths, so the menu can offer the opposite action. */
    favoritePaths?: string[];
    /** Extracts one archive to the chosen place; "choose" asks for a folder first. */
    onExtractArchive?: (path: string, mode: ArchiveExtractMode) => void;
    allowCompression?: boolean;
    onCompressTo?: (paths: string[], name: string) => void;
    onArchiveCreated?: (path: string, rename: boolean) => void;
}

/**
 * The one right-click menu the file list, the gallery and the overview share. It owns the shell
 * extension and "open with" lookups, so every surface shows the same actions in the same order.
 */
export function FileMenu({
    menu, directory, target, shortcuts, canPaste = false, onClose,
    onOpen, onOpenFile, onRename, onDelete, onCopy, onPaste, onCreateFolder, onCreateFile, creationOnly = false,
    onRefresh, onAddToTray, onAddFavorite, onRemoveFavorite, favoritePaths, onExtractArchive, allowCompression = false, onCompressTo, onArchiveCreated,
}: FileMenuProps) {
    const t = useTranslation();
    const linkSource = useLinkSource();
    const archiveView = isArchiveLocation(directory);
    const [shell, setShell] = useState<{ verbs: ShellVerb[]; safe: boolean; loading: boolean }>({
        verbs: [], safe: true, loading: false,
    });
    const [openWithApps, setOpenWithApps] = useState<{
        recommended: OpenWithProgram[];
        other: OpenWithProgram[];
        loading: boolean;
    }>({recommended: [], other: [], loading: false});
    const [caseState, setCaseState] = useState<boolean | null>(null);
    const shellRequest = useRef(0);
    const openWithRequest = useRef(0);

    const single = menu?.paths.length === 1;
    const shellPaths = menu?.background ? (directory ? [directory] : []) : menu?.paths ?? [];
    /** The folder the menu acts on when it was opened over empty space. */
    const casePath = menu?.background
        ? directory || null
        : single && target?.isDirectory ? target.path : null;

    useEffect(() => {
        if (!menu) {
            setShell({verbs: [], safe: true, loading: false});
            setOpenWithApps({recommended: [], other: [], loading: false});
            return;
        }

        const shellToken = ++shellRequest.current;
        setShell({verbs: [], safe: true, loading: shellPaths.length > 0 && !archiveView});

        if (shellPaths.length > 0 && !archiveView) {
            void listShellVerbs(shellPaths).then(
                (result) => {
                    if (shellRequest.current === shellToken) setShell({...result, loading: false});
                },
                () => {
                    if (shellRequest.current === shellToken) setShell({verbs: [], safe: true, loading: false});
                },
            );
        }

        const openWithToken = ++openWithRequest.current;

        if (!archiveView && single && target) {
            setOpenWithApps({recommended: [], other: [], loading: true});
            void listOpenWith(target.path).then(
                (result) => {
                    if (openWithRequest.current === openWithToken)
                        setOpenWithApps({...result, loading: false});
                },
                () => {
                    if (openWithRequest.current === openWithToken)
                        setOpenWithApps({recommended: [], other: [], loading: false});
                },
            );
        } else {
            setOpenWithApps({recommended: [], other: [], loading: false});
        }
    }, [menu, single, target?.path, target?.isDirectory, shellPaths.length, archiveView]);

    // The case flag lives on the folder itself, so it is read when the menu opens.
    useEffect(() => {
        if (!menu || archiveView || !casePath) {
            setCaseState(null);
            return;
        }

        let alive = true;
        void isCaseSensitive(casePath).then(
            (enabled) => {
                if (alive) setCaseState(enabled);
            },
            () => {
                if (alive) setCaseState(null);
            },
        );

        return () => {
            alive = false;
        };
    }, [menu, casePath, archiveView]);

    if (!menu)
        return null;

    const items: ContextMenuItem[] = [];
    const quick: ContextMenuItem[] = [];
    const favoriteSet = new Set((favoritePaths ?? []).map(normalizePath));
    const favoriteTargets = menu.background ? (directory ? [directory] : []) : menu.paths;
    const allFavorites = favoriteTargets.length > 0
        && favoriteTargets.every((path) => favoriteSet.has(normalizePath(path)));

    const selectedArchiveName = () => {
        if (!target) return "Archive";
        return archiveNameFor(target.path, target.isDirectory);
    };

    const archiveNameFor = (path: string, isDirectory: boolean) => {
        const name = baseName(path);
        if (isDirectory) return name || "Archive";
        const dot = name.lastIndexOf(".");
        return dot > 0 ? name.slice(0, dot) : name || "Archive";
    };

    const compressZip = async (paths: string[], name = selectedArchiveName()) => {
        const options: CompressOptions = {
            directory,
            name,
            format: "zip",
            level: 5,
        };
        const result = await compressPaths(paths, options);
        if (result.ok && result.path) onArchiveCreated?.(result.path, true);
        else void showMessage(result.error ?? t("Could not create the archive."));
    };

    const copyAsPath = async (paths: string[]) => {
        try {
            await navigator.clipboard.writeText(paths.join("\n"));
        } catch {
            // The web view refused the clipboard; nothing sensible to show.
        }
    };

    const toggleCaseSensitivity = async () => {
        if (!casePath || caseState === null) return;

        const result = await setCaseSensitive(casePath, !caseState);

        if (!result.ok) {
            void showMessage(result.error ?? t("Could not change the case sensitivity."));
            return;
        }

        setCaseState(result.enabled);
        onRefresh?.();
    };

    /** Creates the link under a folder and adds (1)…(9) before the extension only on conflict. */
    const createLinkIn = async (kind: LinkKind, source: string, folder: string, name: string,
        allowExisting = false) => {
        const root = folder.replace(/[\\/]+$/, "");
        let result = await createLink(kind, source, `${root}\\${name}`);

        if (!allowExisting && !result.ok && /exist/i.test(result.error ?? "")) {
            for (let attempt = 1; attempt <= 9; attempt++) {
                result = await createLink(kind, source, `${root}\\${numberedName(name, attempt)}`);
                if (result.ok || !/exist/i.test(result.error ?? ""))
                    break;
            }
        }

        if (!result.ok) {
            void showMessage(result.error ?? t("Could not create the link."));
            return;
        }

        onRefresh?.();
    };

    /** Sends the link to a folder the user picks; the menu never guesses where it belongs. */
    const makeLink = async (kind: LinkKind) => {
        if (!target) return;

        const folder = await requestFolder(directory);
        if (!folder) return;

        await createLinkIn(kind, target.path, folder, baseName(target.path), kind.endsWith("-copy"));
    };

    /** Creates a link or copy for every remembered source, each beside its own destination name. */
    const makeSourceLink = async (kind: LinkKind) => {
        const sources = linkSource?.paths ?? [];

        for (const entry of sources) {
            const actual: LinkKind = kind === "symbolic-file" && entry.isDirectory
                ? "symbolic-folder"
                : kind === "symbolic-folder" && !entry.isDirectory ? "symbolic-file" : kind;

            if (actual === "hard" && entry.isDirectory)
                continue;

            const copyKind = actual === "smart-copy" || actual === "smart-mirror"
                || actual === "multi-version-smart-copy" || actual === "hard-copy"
                || actual === "symbolic-copy";
            if (copyKind && !entry.isDirectory)
                continue;

            const sourceParent = entry.path.replace(/[\\/][^\\/]+$/, "");
            const sameFolder = normalizePath(sourceParent) === normalizePath(directory);

            await createLinkIn(actual, entry.path, directory, baseName(entry.path),
                copyKind && !sameFolder);
        }
    };

    const chooseLinkSource = async () => {
        const entries = await inspectPaths(menu?.paths ?? []);
        const paths = entries.filter((entry) => entry.exists)
            .map((entry) => ({path: entry.path, isDirectory: entry.isDirectory}));

        if (paths.length > 0)
            setLinkSource({paths});
    };

    /** Background entries that depend on the remembered link source. */
    const sourceLinkItems = (): ContextMenuItem[] => {
        const paths = linkSource?.paths ?? [];
        if (paths.length === 0)
            return [];

        const anyFile = paths.some((entry) => !entry.isDirectory);
        const anyDirectory = paths.some((entry) => entry.isDirectory);
        const clear: ContextMenuItem = {
            label: t("Cancel selected link"), icon: <CrossIcon size={14}/>,
            onSelect: () => setLinkSource(null),
        };

        return [
            clear,
            ...(anyFile
                ? [{
                    label: t("Hard link"), icon: <FileIcon size={14}/>, separatorBefore: true,
                    onSelect: () => void makeSourceLink("hard"),
                }]
                : []),
            {
                label: t("Symbolic link"), icon: <FileIcon size={14}/>, separatorBefore: !anyFile,
                onSelect: () => void makeSourceLink("symbolic-file"),
            },
            ...(anyDirectory
                ? [
                    {
                        label: t("Directory junction"), icon: <FolderIcon size={14}/>,
                        onSelect: () => void makeSourceLink("junction"),
                    },
                    {
                        label: t("Smart copy"), icon: <CopyIcon size={14}/>, separatorBefore: true,
                        onSelect: () => void makeSourceLink("smart-copy"),
                    },
                    {
                        label: t("Smart mirror"), icon: <CopyIcon size={14}/>,
                        onSelect: () => void makeSourceLink("smart-mirror"),
                    },
                    {
                        label: t("Multi-version smart copy"), icon: <CopyIcon size={14}/>,
                        onSelect: () => void makeSourceLink("multi-version-smart-copy"),
                    },
                    {
                        label: t("Hardlink copy"), icon: <CopyIcon size={14}/>, separatorBefore: true,
                        onSelect: () => void makeSourceLink("hard-copy"),
                    },
                    {
                        label: t("Symbolic link copy"), icon: <CopyIcon size={14}/>,
                        onSelect: () => void makeSourceLink("symbolic-copy"),
                    },
                ]
                : []),
        ];
    };

    if (menu.background) {
        if (onCreateFolder) {
            quick.push({
                label: t("New folder"), icon: <PlusIcon size={16}/>,
                shortcut: prettyShortcut(shortcuts.newFolder),
                onSelect: onCreateFolder,
            });
        }

        if (onCreateFile || onCreateFolder) {
            const newItems: ContextMenuItem[] = [];

            if (onCreateFolder) {
                newItems.push({
                    label: t("Folder"), icon: <FolderIcon size={14}/>,
                    onSelect: () => onCreateFolder(false),
                });
                if (!archiveView)
                    newItems.push({
                        label: t("Case-sensitive folder"), icon: <CaseSensitiveIcon size={14}/>,
                        onSelect: () => onCreateFolder(true),
                    });
            }

            if (onCreateFile) {
                newItems.push(...CreateFileTypes.map((type, index) => ({
                    label: `${t(type.label)} (${type.extension})`,
                    icon: <FileIcon size={14}/>,
                    separatorBefore: index === 0,
                    onSelect: () => onCreateFile(type.extension),
                })));
            }

            items.push({
                label: t("New"),
                icon: <PlusIcon size={14}/>,
                children: newItems,
                onSelect: () => undefined,
            });
        }

        if (!archiveView) {
            items.push({
                label: t("Create link"),
                icon: <ShareIcon size={14}/>,
                disabled: !linkSource,
                children: sourceLinkItems(),
                onSelect: () => undefined,
            });
        }

        if (creationOnly)
            return <ContextMenu items={items} onClose={onClose} quick={quick} x={menu.x} y={menu.y}/>;

        // The empty area belongs to the folder the view shows, so it offers the same harmless
        // folder actions as right-clicking that folder in its parent. Delete and rename stay out:
        // they would move the view itself out from under the user.
        if (!archiveView && onOpen) {
            items.push({
                label: t("Open in new tab"), icon: <PlusIcon size={14}/>,
                onSelect: () => onOpen(directory, true),
            });
        }

        items.push({
            label: t("Copy as path"), icon: <CopyIcon size={14}/>,
            onSelect: () => void copyAsPath([directory]),
        });

        if (onAddToTray) {
            items.push({
                label: t("Add to file tray"), icon: <PackageIcon size={14}/>,
                onSelect: () => onAddToTray([directory]),
            });
        }

        if (!archiveView && (allFavorites ? onRemoveFavorite : onAddFavorite)) {
            items.push({
                label: allFavorites ? t("Remove from favorites") : t("Add to favorites"),
                icon: allFavorites ? <HeartMinusIcon size={14}/> : <HeartIcon size={14}/>,
                onSelect: () => allFavorites
                    ? onRemoveFavorite?.([directory])
                    : onAddFavorite?.([directory]),
            });
        }

        if (!archiveView && caseState !== null) {
            items.push({
                label: t("Case-sensitive names"), icon: <CaseSensitiveIcon size={14}/>,
                checked: caseState,
                onSelect: () => void toggleCaseSensitivity(),
            });
        }

        if (!archiveView && allowCompression) {
            items.push({
                label: t("Open in Terminal"), icon: <TerminalIcon size={14}/>,
                onSelect: () => void openTerminal(directory),
            });
            items.push({
                label: t("Show in Explorer"), icon: <FolderIcon size={14}/>, separatorBefore: true,
                onSelect: () => void showInExplorer(directory),
            });
        }

        if (onPaste) {
            quick.push({
                label: t("Paste"), icon: <PasteIcon size={16}/>, disabled: !canPaste,
                shortcut: prettyShortcut(shortcuts.paste),
                onSelect: () => onPaste(directory),
            });
        }
        if (onRefresh) {
            quick.push({
                label: t("Refresh"), icon: <RefreshIcon size={16}/>,
                shortcut: prettyShortcut(shortcuts.refresh),
                onSelect: onRefresh,
            });
        }
        if (!archiveView)
            quick.push({
                label: t("Properties"), icon: <GearIcon size={16}/>,
                shortcut: prettyShortcut(shortcuts.properties),
                onSelect: () => void showProperties([directory]),
            });
    } else {
        if (onOpen) {
            items.push({
                label: t("Open"), icon: <ArrowRightIcon size={14}/>, onSelect: () => {
                    if (target?.isDirectory) onOpen(target.path);
                    else if (target) onOpenFile?.(target.path);
                },
            });
        }

        if (target?.isDirectory) {
            if (onOpen) {
                items.push({
                    label: t("Open in new tab"), icon: <PlusIcon size={14}/>,
                    onSelect: () => onOpen(target.path, true),
                });
            }
            if (onPaste) {
                items.push({
                    label: t("Paste into folder"), icon: <PasteIcon size={14}/>, disabled: !canPaste,
                    onSelect: () => onPaste(target.path),
                });
            }
            if (!archiveView)
                items.push({
                    label: t("Open in Terminal"), icon: <TerminalIcon size={14}/>,
                    onSelect: () => void openTerminal(target.path),
                });
        }

        if (!archiveView && single && target && !target.isDirectory && isArchivePath(target.path) && onExtractArchive) {
            items.push({
                label: t("Extract archive"),
                icon: <ArchiveIcon size={14}/>,
                separatorBefore: true,
                children: [
                    {
                        label: t("Extract here"), icon: <ArchiveIcon size={14}/>,
                        onSelect: () => onExtractArchive(target.path, "here"),
                    },
                    {
                        label: t("Extract to a folder named after the archive"), icon: <ArchiveIcon size={14}/>,
                        onSelect: () => onExtractArchive(target.path, "named"),
                    },
                    {
                        label: t("Auto extract to the current folder"), icon: <ArchiveIcon size={14}/>,
                        onSelect: () => onExtractArchive(target.path, "auto"),
                    },
                    {
                        label: t("Extract to…"), icon: <FolderIcon size={14}/>, separatorBefore: true,
                        onSelect: () => onExtractArchive(target.path, "choose"),
                    },
                ],
                onSelect: () => undefined,
            });
        }

        if (!archiveView && single && target) {
            const children: ContextMenuItem[] = [];

            if (openWithApps.loading) {
                children.push({label: t("Loading apps…"), loading: true, disabled: true, onSelect: () => undefined});
            } else {
                for (const app of openWithApps.recommended) {
                    children.push({
                        label: app.name,
                        group: t("Suggested apps"),
                        icon: app.icon ? <img alt="" height={14} src={app.icon} width={14}/> : <ExecutableIcon size={14}/>,
                        onSelect: () => void openWithProgram(target.path, app.path).then((opened) => {
                            if (!opened) void openWith(target.path);
                        }),
                    });
                }

                for (const app of openWithApps.other) {
                    children.push({
                        label: app.name,
                        group: t("Other apps"),
                        icon: app.icon ? <img alt="" height={14} src={app.icon} width={14}/> : <ExecutableIcon size={14}/>,
                        onSelect: () => void openWithProgram(target.path, app.path).then((opened) => {
                            if (!opened) void openWith(target.path);
                        }),
                    });
                }
            }

            children.push({
                label: t("Choose another app…"),
                icon: <ExecutableIcon size={14}/>,
                separatorBefore: true,
                onSelect: () => void openWith(target.path),
            });

            items.push({
                label: t("Open with"),
                icon: <ExecutableIcon size={14}/>,
                children,
                onSelect: () => void openWith(target.path),
            });
        }

        if (!archiveView) {
            items.push({
                label: t("Compress"), icon: <ArchiveIcon size={14}/>, separatorBefore: true,
                children: [
                    {
                        label: t("Compress to ZIP"), icon: <ArchiveIcon size={14}/>,
                        onSelect: () => void compressZip(menu.paths),
                    },
                    {
                        label: t("Compress to…"), icon: <ArchiveIcon size={14}/>,
                        onSelect: () => onCompressTo?.(menu.paths, selectedArchiveName()),
                    },
                ],
                onSelect: () => undefined,
            });
        }

        if (!archiveView && (menu?.paths.length ?? 0) > 0) {
            const links: ContextMenuItem[] = [
                {
                    label: t("Select link source"), icon: <ShareIcon size={14}/>,
                    onSelect: () => void chooseLinkSource(),
                },
                ...(linkSource
                    ? [{
                        label: t("Cancel selected link"), icon: <CrossIcon size={14}/>,
                        onSelect: () => setLinkSource(null),
                    }]
                    : []),
                ...(single && target
                    ? target.isDirectory
                        ? [
                            {
                                label: t("Symbolic link"), icon: <FolderIcon size={14}/>, separatorBefore: true,
                                onSelect: () => void makeLink("symbolic-folder"),
                            },
                            {
                                label: t("Directory junction"), icon: <FolderIcon size={14}/>,
                                onSelect: () => void makeLink("junction"),
                            },
                            {
                                label: t("Smart copy"), icon: <CopyIcon size={14}/>, separatorBefore: true,
                                onSelect: () => void makeLink("smart-copy"),
                            },
                            {
                                label: t("Smart mirror"), icon: <CopyIcon size={14}/>,
                                onSelect: () => void makeLink("smart-mirror"),
                            },
                            {
                                label: t("Multi-version smart copy"), icon: <CopyIcon size={14}/>,
                                onSelect: () => void makeLink("multi-version-smart-copy"),
                            },
                            {
                                label: t("Hardlink copy"), icon: <CopyIcon size={14}/>, separatorBefore: true,
                                onSelect: () => void makeLink("hard-copy"),
                            },
                            {
                                label: t("Symbolic link copy"), icon: <CopyIcon size={14}/>,
                                onSelect: () => void makeLink("symbolic-copy"),
                            },
                        ]
                        : [
                            {
                                label: t("Symbolic link"), icon: <FileIcon size={14}/>, separatorBefore: true,
                                onSelect: () => void makeLink("symbolic-file"),
                            },
                            {
                                label: t("Hard link"), icon: <FileIcon size={14}/>,
                                onSelect: () => void makeLink("hard"),
                            },
                        ]
                    : []),
            ];

            items.push({
                label: t("Create link"), icon: <ShareIcon size={14}/>,
                children: links,
                onSelect: () => undefined,
            });
        }

        if (!archiveView && target?.isDirectory && caseState !== null) {
            items.push({
                label: t("Case-sensitive names"), icon: <CaseSensitiveIcon size={14}/>,
                checked: caseState,
                onSelect: () => void toggleCaseSensitivity(),
            });
        }

        items.push({
            label: t("Copy as path"), icon: <CopyIcon size={14}/>,
            onSelect: () => void copyAsPath(menu.paths),
        });

        if (onAddToTray) {
            items.push({
                label: t("Add to file tray"), icon: <PackageIcon size={14}/>,
                onSelect: () => onAddToTray(menu.paths),
            });
        }

        if (!archiveView && (allFavorites ? onRemoveFavorite : onAddFavorite)) {
            items.push({
                label: allFavorites ? t("Remove from favorites") : t("Add to favorites"),
                icon: allFavorites ? <HeartMinusIcon size={14}/> : <HeartIcon size={14}/>,
                onSelect: () => allFavorites
                    ? onRemoveFavorite?.(favoriteTargets)
                    : onAddFavorite?.(favoriteTargets),
            });
        }

        if (!archiveView)
            items.push({
                label: t("Show in Explorer"), icon: <FolderIcon size={14}/>, separatorBefore: true,
                onSelect: () => void showInExplorer(favoriteTargets[0]),
            });

        if (onCopy) {
            quick.push(
                {
                    label: t("Cut"), icon: <CutIcon size={16}/>, shortcut: prettyShortcut(shortcuts.cut),
                    onSelect: () => onCopy(menu.paths, true),
                },
                {
                    label: t("Copy"), icon: <CopyIcon size={16}/>, shortcut: prettyShortcut(shortcuts.copy),
                    onSelect: () => onCopy(menu.paths, false),
                },
            );
        }

        if (single && target && onRename) {
            quick.push({
                label: t("Rename"), icon: <PencilIcon size={16}/>, shortcut: prettyShortcut(shortcuts.rename),
                onSelect: () => onRename(target.path),
            });
        }

        if (onDelete) {
            quick.push({
                label: t("Delete"), icon: <TrashIcon size={16}/>, danger: true,
                shortcut: prettyShortcut(shortcuts.delete),
                onSelect: () => onDelete(menu.paths),
            });
        }

        if (!archiveView)
            quick.push({
                label: t("Properties"), icon: <GearIcon size={16}/>,
                shortcut: prettyShortcut(shortcuts.properties),
                onSelect: () => void showProperties(menu.paths),
            });
    }

    if (shell.loading) {
        items.push({
            label: t("More actions"),
            icon: <ExecutableIcon size={14}/>,
            loading: true,
            disabled: true,
            separatorBefore: true,
            onSelect: () => undefined,
        });
    } else if (shell.verbs.length > 0) {
        type ShellNode = { items: ShellVerb[]; children: Map<string, ShellNode> };
        const root: ShellNode = {items: [], children: new Map()};

        for (const verb of shell.verbs) {
            let node = root;

            for (const label of verb.groupPath ?? []) {
                let child = node.children.get(label);

                if (!child) {
                    child = {items: [], children: new Map()};
                    node.children.set(label, child);
                }

                node = child;
            }

            node.items.push(verb);
        }

        const toItems = (node: ShellNode): ContextMenuItem[] => [
            ...node.items.map((verb) => ({
                label: verb.label,
                icon: <MenuIcon source={verb.icon}/>,
                disabled: !verb.enabled,
                checked: verb.checked,
                onSelect: () => void invokeShellVerb(shellPaths, shell.safe, verb.verb, verb.offset),
            })),
            ...[...node.children.entries()].map(([label, child]) => ({
                label,
                children: toItems(child),
                onSelect: () => undefined,
            })),
        ];

        items.push({
            label: t(shell.safe ? "More actions" : "More actions (extensions)"),
            icon: <ExecutableIcon size={14}/>,
            separatorBefore: true,
            children: toItems(root),
            onSelect: () => undefined,
        });
    }

    return <ContextMenu items={items} onClose={onClose} quick={quick} x={menu.x} y={menu.y}/>;
}

function MenuIcon({source}: {source: string | null}) {
    if (!source) return null;
    if (source.startsWith("data:")) return <img alt="" height={14} src={source} width={14}/>;

    switch (source.startsWith("icon:") ? source.slice(5) : source) {
        case "open":
            return <ArrowRightIcon size={14}/>;
        case "document":
            return <DocumentIcon size={14}/>;
        case "cut":
            return <CutIcon size={14}/>;
        case "copy":
            return <CopyIcon size={14}/>;
        case "paste":
            return <PasteIcon size={14}/>;
        case "trash":
            return <TrashIcon size={14}/>;
        case "pencil":
            return <PencilIcon size={14}/>;
        case "gear":
            return <GearIcon size={14}/>;
        case "star":
            return <StarIcon size={14}/>;
        case "pin":
            return <PinIcon size={14}/>;
        case "executable":
            return <ExecutableIcon size={14}/>;
        case "share":
            return <ShareIcon size={14}/>;
        case "arrow":
            return <ArrowRightIcon size={14}/>;
        default:
            return <AppIcon size={14}/>;
    }
}

/** Inserts " (n)" before the extension, keeping the original name and suffix intact. */
function numberedName(name: string, index: number): string {
    const dot = name.lastIndexOf(".");
    return dot > 0 ? `${name.slice(0, dot)} (${index})${name.slice(dot)}` : `${name} (${index})`;
}
