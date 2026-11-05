import {useEffect, useRef, useState} from "react";
import {useTranslation} from "@photino-net-utils/bridge";
import {
    compressPaths,
    invokeShellVerb,
    listOpenWith,
    listShellVerbs,
    openTerminal,
    openWith,
    openWithProgram,
    showInExplorer,
    showProperties,
    type OpenWithProgram,
    type ShellVerb,
} from "../api/operations";
import {prettyShortcut, type ShortcutMap} from "../shortcuts";
import {ContextMenu, type ContextMenuItem} from "./ContextMenu";
import {
    ArchiveIcon,
    ArrowRightIcon,
    AppIcon,
    CopyIcon,
    CutIcon,
    DocumentIcon,
    ExecutableIcon,
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
    onCreateFolder?: () => void;
    onRefresh?: () => void;
    onAddToTray?: (paths: string[]) => void;
}

/**
 * The one right-click menu the file list, the gallery and the overview share. It owns the shell
 * extension and "open with" lookups, so every surface shows the same actions in the same order.
 */
export function FileMenu({
    menu, directory, target, shortcuts, canPaste = false, onClose,
    onOpen, onOpenFile, onRename, onDelete, onCopy, onPaste, onCreateFolder, onRefresh, onAddToTray,
}: FileMenuProps) {
    const t = useTranslation();
    const [shell, setShell] = useState<{ verbs: ShellVerb[]; safe: boolean; loading: boolean }>({
        verbs: [], safe: true, loading: false,
    });
    const [openWithApps, setOpenWithApps] = useState<{
        recommended: OpenWithProgram[];
        other: OpenWithProgram[];
        loading: boolean;
    }>({recommended: [], other: [], loading: false});
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
        setShell({verbs: [], safe: true, loading: shellPaths.length > 0});

        if (shellPaths.length > 0) {
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

        if (single && target && !target.isDirectory) {
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
    }, [menu, single, target?.path, target?.isDirectory, shellPaths.length]);

    if (!menu)
        return null;

    const items: ContextMenuItem[] = [];
    const quick: ContextMenuItem[] = [];

    const compress = async (paths: string[]) => {
        const result = await compressPaths(paths);
        if (result.ok) onRefresh?.();
        else window.alert(result.error ?? t("Could not create the ZIP file."));
    };

    const copyAsPath = async (paths: string[]) => {
        try {
            await navigator.clipboard.writeText(paths.join("\n"));
        } catch {
            // The web view refused the clipboard; nothing sensible to show.
        }
    };

    if (menu.background) {
        items.push({
            label: t("Open in Terminal"), icon: <TerminalIcon size={14}/>,
            onSelect: () => void openTerminal(directory),
        });
        items.push({
            label: t("Show in Explorer"), icon: <FolderIcon size={14}/>, separatorBefore: true,
            onSelect: () => void showInExplorer(directory),
        });

        if (onCreateFolder) {
            quick.push({
                label: t("New folder"), icon: <PlusIcon size={16}/>,
                shortcut: prettyShortcut(shortcuts.newFolder),
                onSelect: onCreateFolder,
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
            items.push({
                label: t("Open in Terminal"), icon: <TerminalIcon size={14}/>,
                onSelect: () => void openTerminal(target.path),
            });
        }

        if (single && target && !target.isDirectory) {
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

        items.push({
            label: t("Compress to ZIP"), icon: <ArchiveIcon size={14}/>, separatorBefore: true,
            onSelect: () => void compress(menu.paths),
        });
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
