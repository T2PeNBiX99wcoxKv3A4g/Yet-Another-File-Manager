import {useEffect, useRef, useState} from "react";
import {useTranslation} from "@photino-net-utils/bridge";
import {
    compressPaths,
    createLink,
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
import {baseName, isArchiveLocation, normalizePath} from "../utils/format";
import {setLinkSource, useLinkSource} from "../ui/linkSource";
import {ContextMenu, type ContextMenuItem} from "./ContextMenu";
import {
    ArchiveIcon,
    ArrowRightIcon,
    AppIcon,
    CopyIcon,
    CutIcon,
    DocumentIcon,
    ExecutableIcon,
    FileIcon,
    FolderIcon,
    GearIcon,
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
    onRefresh, onAddToTray, allowCompression = false, onCompressTo, onArchiveCreated,
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

        if (!archiveView && single && target && !target.isDirectory) {
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
        if (!menu || menu.background || !single || !target?.isDirectory) {
            setCaseState(null);
            return;
        }

        let alive = true;
        void isCaseSensitive(target.path).then(
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
    }, [menu, single, target?.path, target?.isDirectory]);

    if (!menu)
        return null;

    const items: ContextMenuItem[] = [];
    const quick: ContextMenuItem[] = [];

    const selectedArchiveName = () => {
        if (!single || !target) return "Archive";
        const name = baseName(target.path);
        if (target.isDirectory) return name;
        const dot = name.lastIndexOf(".");
        return dot > 0 ? name.slice(0, dot) : name;
    };

    const compressZip = async (paths: string[]) => {
        const options: CompressOptions = {
            directory,
            name: selectedArchiveName(),
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
        if (!target || caseState === null) return;

        const result = await setCaseSensitive(target.path, !caseState);

        if (!result.ok) {
            void showMessage(result.error ?? t("Could not change the case sensitivity."));
            return;
        }

        setCaseState(result.enabled);
        onRefresh?.();
    };

    /** Creates the link under a folder and keeps trying numbered names when one is taken. */
    const createLinkIn = async (kind: LinkKind, source: string, folder: string, name: string) => {
        const root = folder.replace(/[\\/]+$/, "");
        let result = await createLink(kind, source, `${root}\\${name}`);

        for (let attempt = 2; !result.ok && /exist/i.test(result.error ?? "") && attempt <= 99; attempt++)
            result = await createLink(kind, source, `${root}\\${name} ${attempt}`);

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

        await createLinkIn(kind, target.path, folder, `${baseName(target.path)} - link`);
    };

    /** Creates a link or copy at the background folder, using the remembered source. */
    const makeSourceLink = async (kind: LinkKind) => {
        if (!linkSource) return;

        const name = baseName(linkSource.path);
        const sourceParent = linkSource.path.replace(/[\\/][^\\/]+$/, "");
        const copyKind = kind === "smart-mirror" || kind.endsWith("-copy");
        const sameFolder = normalizePath(sourceParent) === normalizePath(directory);

        // Smart copies can update an existing folder when the destination is elsewhere; in the
        // source's own folder they need the usual " - link" name to avoid copying onto itself.
        await createLinkIn(kind, linkSource.path, directory,
            copyKind && !sameFolder ? name : `${name} - link`);
    };

    const chooseLinkSource = () => {
        if (target)
            setLinkSource({path: target.path, isDirectory: target.isDirectory});
    };

    /** Background entries that depend on the remembered link source. */
    const sourceLinkItems = (): ContextMenuItem[] => {
        if (!linkSource)
            return [];

        const clear: ContextMenuItem = {
            label: t("Cancel selected link"),
            onSelect: () => setLinkSource(null),
        };

        if (linkSource.isDirectory) {
            return [
                clear,
                {
                    label: t("Symbolic link"), icon: <FolderIcon size={14}/>, separatorBefore: true,
                    onSelect: () => void makeSourceLink("symbolic-folder"),
                },
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
            ];
        }

        return [
            clear,
            {
                label: t("Hard link"), icon: <FileIcon size={14}/>, separatorBefore: true,
                onSelect: () => void makeSourceLink("hard"),
            },
            {
                label: t("Symbolic link"), icon: <FileIcon size={14}/>,
                onSelect: () => void makeSourceLink("symbolic-file"),
            },
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
                        label: t("Case-sensitive folder"), icon: <FolderIcon size={14}/>,
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

        if (!archiveView && single && target && !target.isDirectory) {
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
                label: t("Compress to ZIP"), icon: <ArchiveIcon size={14}/>, separatorBefore: true,
                onSelect: () => void compressZip(menu.paths),
            });
            items.push({
                label: t("Compress to…"), icon: <ArchiveIcon size={14}/>,
                onSelect: () => onCompressTo?.(menu.paths, selectedArchiveName()),
            });
        }

        if (!archiveView && single && target) {
            const links: ContextMenuItem[] = [
                {
                    label: t("Select link source"), icon: <ShareIcon size={14}/>,
                    onSelect: chooseLinkSource,
                },
                ...(linkSource
                    ? [{
                        label: t("Cancel selected link"),
                        onSelect: () => setLinkSource(null),
                    }]
                    : []),
                ...(target.isDirectory
                    ? [
                        {
                            label: t("Symbolic link"), icon: <FolderIcon size={14}/>, separatorBefore: true,
                            onSelect: () => void makeLink("symbolic-folder"),
                        },
                        {
                            label: t("Directory junction"), icon: <FolderIcon size={14}/>,
                            onSelect: () => void makeLink("junction"),
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
                    ]),
            ];

            items.push({
                label: t("Create link"), icon: <ShareIcon size={14}/>,
                children: links,
                onSelect: () => undefined,
            });
        }

        if (!archiveView && target?.isDirectory && caseState !== null) {
            items.push({
                label: t("Case-sensitive names"), icon: <FolderIcon size={14}/>,
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

        if (!archiveView)
            items.push({
                label: t("Show in Explorer"), icon: <FolderIcon size={14}/>, separatorBefore: true,
                onSelect: () => void showInExplorer(menu.paths[0]),
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
