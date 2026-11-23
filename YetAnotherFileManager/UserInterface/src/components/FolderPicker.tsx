import {useCallback, useEffect, useMemo, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {Native, type ResolvedTheme, useTranslation} from "@photino-net-utils/bridge";
import {
    defaultDirectoryView,
    defaultViewSettings,
    type DirectoryListing,
    type Drive,
    listDirectory,
    listDrives,
    listPlaces,
    listRecent,
    openFile,
    type Place,
    type RecentEntry,
    type ResolvedView,
} from "../api/files";
import {type AppSettings, configDefaults, getSettings} from "../api/settings";
import {defaultShortcuts} from "../shortcuts";
import {newFile, newFolder, inspectPaths, type TransferConflict} from "../api/operations";
import {showMessage} from "../api/dialogs";
import {TransferConflictDialog} from "./TransferConflictDialog";
import {ContextMenu} from "./ContextMenu";
import {LocationGlyph, useLocationName} from "./LocationGlyph";
import {EmptyFind, type FindState, matchesName} from "../find";
import {elevatedPanel} from "../ui/panel";
import {fadeInStyle, popInStyle} from "../ui/motion";
import {FileMenu} from "./FileMenu";
import {FileList} from "./FileList";
import {FindBar} from "./FindBar";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckIcon,
    CrossIcon,
    FolderIcon,
    MenuIcon,
    PlusIcon,
    SearchIcon,
} from "./Icons";
import {GalleryView} from "./GalleryView";
import {OverviewView} from "./OverviewView";
import {PathBar} from "./PathBar";
import {SelectMenu} from "./SelectMenu";
import {Sidebar} from "./Sidebar";
import {baseName, normalizePath, parentPath} from "../utils/format";
import {useSelectionMenu} from "../ui/selectionMenu";

interface FolderPickerProps {
    initial?: string;
    mode?: "folder" | "file";
    /** Allow more than one row to be selected. */
    multiple?: boolean;
    /** Extensions (with the dot) to offer in file mode. */
    extensions?: string[];
    /** The file types the calling dialog offers; each one is a separate entry in the type list. */
    types?: PickerFileType[];
    /** Which of {@link types} the caller had selected, counting from 1. */
    typeIndex?: number;
    /** Render as the whole window (the CLI picker) instead of a modal. */
    inline?: boolean;
    /** The window title bar owns the view controls, so it passes the resolved view in. */
    fileView?: ResolvedView;
    showImages?: boolean;
    /** Save mode: the name box returns a path that does not have to exist yet. */
    save?: boolean;
    initialName?: string;
    defaultExtension?: string;
    /** The format the last save used, when the caller names none. */
    lastExtension?: string;
    /** Which palette the background previews follow. */
    theme: ResolvedTheme;
    places?: Place[];
    onCancel: () => void;
    /** The type the user ended on, counting from 1, for callers that ask which filter was used. */
    onSelect: (paths: string[], type?: number, extension?: string) => void;
}

/** One entry of a save/open dialog's "files of type" list. */
export interface PickerFileType {
    label: string;
    extensions: string[];
}

/**
 * An Explorer-shaped path picker drawn by the app. It reuses the app's own rail, breadcrumb bar
 * and colour system; the bottom holds the editable name box and, in file mode, the type filter.
 */
export function FolderPicker({
                                 initial = "",
                                 mode = "folder",
                                 multiple = false,
                                 extensions,
                                 types,
                                 typeIndex = 0,
                                 inline = false,
                                 places: suppliedPlaces,
                                 fileView,
                                 showImages,
                                 save = false,
                                 initialName = "",
                                 defaultExtension = "",
                                 lastExtension = "",
                                 theme,
                                 onCancel,
                                 onSelect,
                             }: FolderPickerProps) {
    const t = useTranslation();
    const locationName = useLocationName();
    const selectionMenu = useSelectionMenu("picker");
    const isFileMode = mode === "file";
    const supported = extensions ?? [];
    const offered = types ?? [];
    // Programs spell their default extension in every way there is: "jpeg", "tif;*tiff", "".
    const defaultExtensions = defaultExtension
        .split(/[;,|]/)
        .map((item) => item.trim().replace(/^\*+/, ""))
        .filter((item) => item.length > 0)
        .map((item) => (item.startsWith(".") ? item : `.${item}`).toLowerCase());
    // Which entry of the type list is showing: a number for one of the caller's types, or the two
    // entries the picker adds for itself when the caller named no types at all.
    const [typeChoice, setTypeChoice] = useState<number | "all" | "supported">(() => {
        if (offered.length === 0) return supported.length === 0 ? "all" : "supported";

        const typeOf = (wanted: string[]): number =>
            wanted.length === 0
                ? -1
                : offered.findIndex((type) => type.extensions.some((item) => wanted.includes(item.toLowerCase())));

        // A program that picked an entry explicitly means it, even when the name says otherwise.
        if (typeIndex >= 2 && typeIndex <= offered.length)
            return typeIndex - 1;

        // The default extension is the format this dialog is saving in. Programs like Clip Studio
        // change it with the export format while the proposed file name still carries the name of
        // the file exported last, so this has to win over the name.
        const byDefault = typeOf(defaultExtensions);
        if (byDefault >= 0)
            return byDefault;

        // With no other hint, the name the program proposes says which format the file is in.
        const dot = initialName.lastIndexOf(".");
        const byName = dot > 0 ? typeOf([initialName.slice(dot).toLowerCase()]) : -1;
        if (byName >= 0)
            return byName;

        // The shell's dialog remembers the last type used; a program that names none (Clip Studio
        // does this for several formats) then still opens on the format the last save wrote.
        const remembered = lastExtension.length > 0
            ? [lastExtension.startsWith(".") ? lastExtension.toLowerCase() : `.${lastExtension}`.toLowerCase()]
            : [];
        const byLast = typeOf(remembered);
        if (byLast >= 0)
            return byLast;

        return typeIndex >= 1 && typeIndex <= offered.length ? typeIndex - 1 : 0;
    });
    const chosenType = typeof typeChoice === "number" ? offered[typeChoice] ?? null : null;
    // The type on screen decides which files are listed and which extension a save gets.
    const typeExtensions = typeof typeChoice === "number"
        ? chosenType?.extensions ?? []
        : typeChoice === "supported" ? supported : [];
    const chosenTypeNumber = typeof typeChoice === "number" ? typeChoice + 1 : 0;

    /** Hands the picked paths back with the type and its extension, so the caller can remember it. */
    const submit = (paths: string[], type = chosenTypeNumber) =>
        onSelect(paths, type, typeExtensions[0] ?? "");

    /** Whether one of the offered types already claims this extension. */
    const isKnownExtension = (extension: string): boolean =>
        offered.some((type) => type.extensions.some((item) => item.toLowerCase() === extension));

    /** The type's name with its patterns, the way the system dialog spells it out. */
    const labelForType = (type: PickerFileType): string => {
        const patterns = type.extensions.map((extension) => `*${extension}`).join(";");

        if (patterns.length === 0)
            return type.label;

        // Programs often send just "Clip Studio Format"; the patterns say which files it means.
        return type.label.length === 0 || type.label.includes("(*")
            ? type.label || patterns
            : `${type.label} (${patterns})`;
    };

    /** Keeps the name box on the format being saved, the way the program's own dialog would. */
    const renameForType = (name: string, next: PickerFileType | null): string => {
        const extension = next?.extensions[0] ?? "";
        const dot = name.lastIndexOf(".");

        if (extension.length === 0 || dot <= 0)
            return name;

        return isKnownExtension(name.slice(dot).toLowerCase())
            ? name.slice(0, dot) + extension
            : name;
    };

    /** Switches the type and moves the name box to that format's extension. */
    const chooseType = (value: number | "all" | "supported") => {
        setTypeChoice(value);
        setFileName((current) => renameForType(current, typeof value === "number" ? offered[value] ?? null : null));
    };
    const [path, setPath] = useState(initial);
    const [listing, setListing] = useState<DirectoryListing | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selected, setSelected] = useState<Set<string>>(() => new Set());
    const [places, setPlaces] = useState<Place[]>(suppliedPlaces ?? []);
    const [drives, setDrives] = useState<Drive[]>([]);

    const [recent, setRecent] = useState<RecentEntry[]>([]);
    const [back, setBack] = useState<string[]>([]);
    const [forward, setForward] = useState<string[]>([]);
    // Right-clicking Back or Forward lists the folders behind (or ahead of) this one.
    const [historyMenu, setHistoryMenu] = useState<{
        x: number;
        y: number;
        direction: "back" | "forward";
    } | null>(null);
    // A name the program carried over from the last export keeps that format's extension; when the
    // dialog opens on another format, the name follows it right away so saving needs no extra step.
    const [fileName, setFileName] = useState(() => {
        const extension = typeExtensions[0] ?? "";
        const dot = initialName.lastIndexOf(".");

        if (extension.length === 0 || dot <= 0)
            return initialName;

        return isKnownExtension(initialName.slice(dot).toLowerCase())
            ? initialName.slice(0, dot) + extension
            : initialName;
    });
    const [overwrite, setOverwrite] = useState<{
        path: string;
        size: number;
        modified: number;
        created: number;
    } | null>(null);
    const [view, setView] = useState<"files" | "overview" | "gallery">("files");
    const [reload, setReload] = useState(0);
    const [find, setFind] = useState<FindState>(EmptyFind);
    const [findFocus, setFindFocus] = useState(0);
    const [findIndex, setFindIndex] = useState(0);
    const [selectMatchesToken, setSelectMatchesToken] = useState(0);
    const [createMenu, setCreateMenu] = useState<{ x: number; y: number } | null>(null);
    const [renamePath, setRenamePath] = useState<string | null>(null);
    const [renameToken, setRenameToken] = useState(0);
    const [settings, setSettings] = useState<AppSettings | null>(null);
    const [stripHeight, setStripHeight] = useState(() => defaultViewSettings().imageStripHeight);

    useEffect(() => {
        void getSettings().then(setSettings, () => setSettings(null));
    }, []);

    useEffect(() => {
        if (suppliedPlaces) {
            setPlaces(suppliedPlaces);
            return;
        }

        void listPlaces().then(setPlaces, () => setPlaces([]));
    }, [suppliedPlaces]);

    useEffect(() => {
        void listDrives().then(setDrives, () => setDrives([]));
        void listRecent().then(setRecent, () => setRecent([]));
    }, []);

    useEffect(() => {
        let alive = true;
        setLoading(true);
        setError(null);
        setSelected(new Set());
        if (!save)
            setFileName(isFileMode ? "" : baseName(path));

        void listDirectory(path || undefined, false).then(
            (result) => {
                if (!alive) return;
                setListing(result);
                setPath(result.path);
                if (!save)
                    setFileName(isFileMode ? "" : baseName(result.path));
                setLoading(false);
            },
            (cause) => {
                if (!alive) return;
                setError(cause instanceof Error ? cause.message : String(cause));
                setLoading(false);
            },
        );

        return () => {
            alive = false;
        };
    }, [path, reload, isFileMode]);

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.defaultPrevented)
                return;

            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "f") {
                event.preventDefault();
                setFind((current) => ({...current, open: true}));
                setFindFocus((token) => token + 1);
                return;
            }

            if (event.key === "Escape") {
                if (find.open) {
                    setFind((current) => ({...current, open: false, query: ""}));
                    setFindIndex(0);
                } else {
                    onCancel();
                }
                return;
            }

            // Alt+Left / Alt+Right walk the picker's own history, like the main window.
            if (event.altKey && event.key === "ArrowLeft") {
                event.preventDefault();
                goBack();
                return;
            }

            if (event.altKey && event.key === "ArrowRight") {
                event.preventDefault();
                goForward();
                return;
            }

            // Typing anywhere in the list starts a search with that letter, exactly like the file
            // browser; fields keep their own text.
            if (event.key.length === 1 && event.key !== " "
                && !event.ctrlKey && !event.altKey && !event.metaKey) {
                const target = event.target;
                if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement
                    || target instanceof HTMLSelectElement)
                    return;

                event.preventDefault();
                setFind((current) => ({
                    ...current,
                    open: true,
                    query: current.open ? current.query + event.key : event.key,
                }));
                setFindFocus((token) => token + 1);
                return;
            }

            if (event.key !== "Enter")
                return;

            const target = event.target;
            if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement)
                return;

            choose();
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    });

    // Mouse back and forward buttons; WebView2 would otherwise walk its own history.
    useEffect(() => {
        const onDown = (event: MouseEvent) => {
            if (event.button === 3 || event.button === 8) {
                event.preventDefault();
                goBack();
            } else if (event.button === 4 || event.button === 9) {
                event.preventDefault();
                goForward();
            }
        };

        window.addEventListener("mousedown", onDown);
        return () => window.removeEventListener("mousedown", onDown);
    });

    const navigate = (target: string) => {
        const next = target.trim();
        if (next.length === 0 || normalizePath(next) === normalizePath(path))
            return;

        setBack((stack) => [...stack, path]);
        setForward([]);
        setView("files");
        setPath(next);
    };

    const goBack = () => {
        const target = back.at(-1);
        if (target === undefined)
            return;

        setBack((stack) => stack.slice(0, -1));
        setForward((stack) => [path, ...stack]);
        setPath(target);
    };

    const goForward = () => {
        const target = forward[0];
        if (target === undefined)
            return;

        setForward((stack) => stack.slice(1));
        setBack((stack) => [...stack, path]);
        setPath(target);
    };

    /** Jumps to one entry of the history list, keeping the entries in between on the other side. */
    const goToHistory = (direction: "back" | "forward", index: number) => {
        if (direction === "back") {
            const target = back[index];
            if (target === undefined)
                return;

            setBack(back.slice(0, index));
            setForward([...back.slice(index + 1), path, ...forward]);
            setPath(target);
            return;
        }

        const target = forward[index];
        if (target === undefined)
            return;

        setBack([...back, path, ...forward.slice(0, index)]);
        setForward(forward.slice(index + 1));
        setPath(target);
    };

    // WebKitGTK does not report the side buttons to the page, so the native layer forwards them.
    useEffect(() => {
        if (!Native.available)
            return;

        return Native.on((evt) => {
            const event = evt as { type?: string; data?: { direction?: string } };
            if (event.type !== "picker.navigation") return;

            switch (event.data?.direction) {
                case "back":
                    goBack();
                    break;
                case "forward":
                    goForward();
                    break;
            }
        });
    });

    const currentFolder = listing?.path ?? path;
    const parent = listing?.parent ?? (path ? parentPath(path) : null);

    // Only the folder on screen is watched; the host tells us when something in it changes.
    useEffect(() => {
        if (!Native.available || !currentFolder)
            return;

        Native.send({type: "fs.watch", payload: {paths: [currentFolder], owner: "picker"}});
    }, [currentFolder]);

    // A change in the folder refreshes the list in place, the way the app's file view does.
    useEffect(() => {
        if (!Native.available || !currentFolder)
            return;

        let alive = true;

        return Native.on((evt) => {
            const event = evt as { type?: string; data?: { path?: string } };
            if (event.type !== "fs.changed" || typeof event.data?.path !== "string") return;
            if (normalizePath(event.data.path) !== normalizePath(currentFolder)) return;

            void listDirectory(currentFolder, false).then((result) => {
                if (!alive) return;

                setListing(result);
                const paths = new Set(result.entries.map((entry) => entry.fullPath));
                setSelected((current) => new Set([...current].filter((item) => paths.has(item))));
            }, () => undefined);
        });
    }, [currentFolder]);

    const visibleEntries = (listing?.entries ?? []).filter((entry) =>
        entry.isDirectory
        || (isFileMode && (typeExtensions.length === 0
            || typeExtensions.some((extension) => entry.name.toLowerCase().endsWith(extension.toLowerCase())))));

    const pickerListing: DirectoryListing | null = listing
        ? {...listing, entries: visibleEntries}
        : null;

    const searching = find.open && find.query.length > 0;
    const findHits = useMemo(
        () => searching
            ? visibleEntries.filter((entry) => matchesName(entry.name, find)).map((entry) => entry.fullPath)
            : [],
        [searching, visibleEntries, find],
    );

    useEffect(() => {
        setFindIndex(0);
    }, [find.query, find.matchCase, find.regex, listing?.path]);

    const findCurrent = findHits.length === 0 ? -1 : Math.min(findIndex, findHits.length - 1);
    const findView = useMemo(
        () => ({...find, currentPath: findCurrent >= 0 ? findHits[findCurrent] : null}),
        [find, findCurrent, findHits],
    );

    const viewDefaults = settings?.defaultView ?? defaultViewSettings();
    const pickerView: ResolvedView = fileView ?? {
        mode: viewDefaults.mode,
        iconSize: viewDefaults.iconSize,
        gridSize: viewDefaults.gridSize,
        sort: "name",
        sortDescending: false,
        columns: viewDefaults.columns ?? ["type", "size", "modified"],
    };
    // The strip belongs to the list; a grid already shows the pictures themselves.
    const stripVisible = (showImages ?? viewDefaults.showImages) && pickerView.mode === "list";

    // A file dialog that offers every file is the "open something" kind - Rider's Open, and others -
    // where a folder is an answer as well; a dialog filtered to certain files asks for a file.
    const picksFolders = !isFileMode || typeExtensions.length === 0;
    const oneSelected = selected.size === 1 ? [...selected][0] : null;
    const folderSelected = oneSelected !== null
        && (listing?.entries.find((entry) => entry.fullPath === oneSelected)?.isDirectory ?? false);
    // Nothing selected and nothing typed leaves the folder the picker stands in as the answer.
    const folderIsTheAnswer = !save && picksFolders && (folderSelected
        || selected.size === 0 && fileName.trim().length === 0);
    const typed = fileName.trim();
    const typedPath = typed.length > 0
        ? isAbsolutePath(typed) ? typed : joinPath(currentFolder, typed)
        : null;

    const choose = () => {
        if (loading || error)
            return;

        // Save mode reports the typed name, even when a row happens to be selected: the name box
        // is the save dialog's "File name" field, exactly like the system dialog.
        if (save) {
            const name = typed;

            if (name.length === 0)
                return;

            if (name === "." || name === ".." || /[<>:"/\\|?*\u0000-\u001F]/.test(name)) {
                void showMessage(t("the_file_name_is_not_valid"));
                return;
            }

            // The type on screen names the extension; the program's default is only a fallback for
            // a type that has no extension of its own. A program that keeps its default extension
            // from the document's old format would otherwise save the wrong format.
            const fallback = typeExtensions[0] ?? defaultExtensions[0] ?? "";
            const suffix = fallback.length > 0 && !/\.[^.]*$/.test(name)
                ? fallback.startsWith(".") ? fallback : `.${fallback}`
                : "";
            const target = isAbsolutePath(name) ? name + suffix : joinPath(currentFolder, name + suffix);

            void inspectPaths([target])
                .then((entries) => {
                    if (!entries[0]?.exists) {
                        submit([target]);
                        return;
                    }

                    const known = listing?.entries.find((entry) =>
                        normalizePath(entry.fullPath) === normalizePath(target));

                    setOverwrite({
                        path: target,
                        size: known?.size ?? 0,
                        modified: known?.modified ?? 0,
                        created: known?.created ?? 0,
                    });
                }, () => submit([target]));
            return;
        }

        const picked = multiple ? [...selected] : [...selected].slice(0, 1);

        if (picked.length > 0) {
            submit(picked);
            return;
        }

        if (typedPath !== null && typed !== baseName(currentFolder)) {
            submit([typedPath]);
            return;
        }

        // Nothing selected and nothing typed: the folder the picker is standing in is the answer.
        if (picksFolders && currentFolder)
            onSelect([currentFolder]);
    };

    /** The file list and the gallery both report their selection; the footer follows it. */
    const handleSelection = useCallback((paths: string[]) => {
        setSelected(new Set(paths));

        // A save dialog keeps the name the user is writing; clicking a folder there is a step into
        // it, not a new name. A path from the folder that was just left is one too, and the report
        // of a selection can trail behind a step into it.
        const folder = paths.length === 1 && (parentPath(paths[0]) !== currentFolder
            || listing?.entries.find((entry) => entry.fullPath === paths[0])?.isDirectory === true);

        if (paths.length === 1 && !(save && folder))
            setFileName(baseName(paths[0]));
        else if (!save)
            setFileName(paths.length === 0 && !isFileMode ? baseName(currentFolder) : "");
    }, [currentFolder, isFileMode, listing, save]);

    /** The menu's first entry: choose what it points at and end the dialog. */
    const selectEntry = (paths: string[]) => {
        if (paths.length === 0)
            return;

        // A save dialog keeps the name it was given; choosing a file there only fills it in.
        if (save) {
            setFileName(baseName(paths[0]));
            return;
        }

        submit(paths);
    };

    /// The menu's "open": a folder is entered, a file goes to the system, and the picker stays.
    const openExternally = (target: string) => {
        if (listing?.entries.find((item) => item.fullPath === target)?.isDirectory)
            navigate(target);
        else
            void openFile(target);
    };

    const openEntry = (target: string) => {
        const entry = listing?.entries.find((item) => item.fullPath === target);

        if (entry?.isDirectory) {
            navigate(target);
            return;
        }

        // In save mode a double click only puts the file's name in the box; the user still has to
        // press Save, which is what the system dialog does.
        if (save) {
            setFileName(baseName(target));
            return;
        }

        if (isFileMode) submit([target]);
    };

    const typeName = (value: string) => setFileName(value);

    const startCreate = async (extension: string | null) => {
        const menu = createMenu;
        setCreateMenu(null);

        if (!menu || !currentFolder)
            return;

        const result = extension === null
            ? await newFolder(currentFolder)
            : await newFile(currentFolder, extension);

        if (!result.ok || result.path === null)
            return;

        // The new entry has to be visible before FileList can focus its rename box.
        setFind((current) => ({...current, open: false, query: ""}));
        if (extension !== null) setTypeChoice("all");
        setReload((value) => value + 1);

        // Let the refreshed listing paint first; otherwise the rename request can be consumed
        // before the new entry is in the list, especially from the context menu.
        window.setTimeout(() => {
            setRenamePath(result.path);
            setRenameToken((token) => token + 1);
        }, 120);
    };

    const openFind = () => {
        setFind((current) => ({...current, open: true}));
        setFindFocus((token) => token + 1);
    };

    // Two or more picked files have no single name, so the bar says how many were picked instead
    // of leaving an empty box that looks like nothing is selected.
    const multiplePicked = !save && multiple && selected.size > 1;

    const stepFind = (delta: number) => {
        setFindIndex((index) => {
            if (findHits.length === 0) return 0;
            return (index + delta + findHits.length) % findHits.length;
        });
    };

    const selectionBar = (onName: (value: string) => void) => (
        <Footer>
            {/* The file type gets its own line, so the name keeps the whole width above it. */}
            <SelectionGrid>
                <FieldLabel>{isFileMode || save ? t("file_name") : t("folder_3")}</FieldLabel>
                <NameInput
                    onChange={(event) => onName(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            choose();
                        }
                    }}
                    placeholder={multiplePicked ? t("count_items_selected", {count: selected.size}) : undefined}
                    spellCheck={false}
                    value={fileName}
                />

                {multiplePicked && (
                    <SelectionHint>{t("count_items_selected", {count: selected.size})}</SelectionHint>
                )}

                {isFileMode && (
                    <>
                        <FieldLabel>{t("files_of_type")}</FieldLabel>
                        <SelectMenu
                            onChange={(value) => chooseType(
                                value === "all" || value === "supported" ? value : Number(value)
                            )}
                            options={offered.length > 0
                                ? [
                                    ...offered.map((type, index) => ({
                                        value: String(index),
                                        label: labelForType(type),
                                    })),
                                    {value: "all", label: `${t("all_files")} (*.*)`},
                                ]
                                : [
                                    ...(supported.length > 0
                                        ? [{
                                            value: "supported",
                                            label: `${t("supported_files")} (${supported.map((extension) => `*${extension}`).join(";")})`,
                                        }]
                                        : []),
                                    {value: "all", label: `${t("all_files")} (*.*)`},
                                ]}
                            value={String(typeChoice)}
                        />
                    </>
                )}
            </SelectionGrid>

            <Actions>
                <Button onClick={onCancel} type="button">{t("cancel")}</Button>
                <Button
                    $primary
                    disabled={loading || error !== null || (save
                        ? typed.length === 0
                        : selected.size === 0 && typed.length === 0 && !picksFolders)}
                    onClick={choose}
                    type="button"
                >
                    <CheckIcon size={12}/>
                    {save
                        ? t("save_as")
                        : multiplePicked
                            ? t("select_count_files", {count: selected.size})
                            : folderIsTheAnswer ? t("select_this_folder") : t("select_this_file")}
                </Button>
            </Actions>

            {overwrite !== null && (
                <TransferConflictDialog
                    conflicts={[{
                        source: overwrite.path,
                        destination: overwrite.path,
                        name: baseName(overwrite.path),
                        directory: false,
                        sourceSize: 0,
                        sourceModified: 0,
                        sourceCreated: 0,
                        targetSize: overwrite.size,
                        targetModified: overwrite.modified,
                        targetCreated: overwrite.created,
                        samePath: false,
                        suggestedName: suggestedSaveName(overwrite.path),
                    } satisfies TransferConflict]}
                    defaultAction={settings?.conflictDefaultAction ?? configDefaults().conflictDefaultAction}
                    move={false}
                    onResolve={(decisions) => {
                        const target = overwrite.path;
                        setOverwrite(null);

                        const decision = decisions?.[0];
                        if (!decision || decision.action === "skip") return;

                        if (decision.action === "rename") {
                            const name = decision.name?.trim() ?? "";
                            if (name.length === 0) return;

                            const next = joinPath(currentFolder, name);
                            void inspectPaths([next]).then(
                                (entries) => {
                                    if (!entries[0]?.exists) {
                                        submit([next]);
                                        return;
                                    }

                                    const known = listing?.entries.find((entry) =>
                                        normalizePath(entry.fullPath) === normalizePath(next));

                                    setOverwrite({
                                        path: next,
                                        size: known?.size ?? 0,
                                        modified: known?.modified ?? 0,
                                        created: known?.created ?? 0,
                                    });
                                },
                                () => submit([next]));
                            return;
                        }

                        submit([target]);
                    }}
                    remember={settings?.conflictRememberChoice ?? configDefaults().conflictRememberChoice}
                    subtitle={t("an_entry_with_that_name_already_exists")}
                    title={t("overwrite")}
                />
            )}
            {historyMenu && (
                <ContextMenu
                    items={historyMenu.direction === "back"
                        ? [...back].reverse().map((entry, offset) => ({
                            label: locationName(entry),
                            icon: <LocationGlyph location={entry}/>,
                            tooltip: entry,
                            onSelect: () => {
                                setHistoryMenu(null);
                                goToHistory("back", back.length - 1 - offset);
                            },
                        }))
                        : forward.map((entry, index) => ({
                            label: locationName(entry),
                            icon: <LocationGlyph location={entry}/>,
                            tooltip: entry,
                            onSelect: () => {
                                setHistoryMenu(null);
                                goToHistory("forward", index);
                            },
                        }))}
                    onClose={() => setHistoryMenu(null)}
                    x={historyMenu.x}
                    y={historyMenu.y}
                />
            )}
        </Footer>
    );

    const card = (
        <Card $inline={inline} role="dialog" aria-modal={!inline}>
            {!inline && (
                <Header>
                    <Title>
                        <FolderIcon size={16}/>
                        {save ? t("save_as") : isFileMode ? t("choose_a_file") : t("choose_a_folder")}
                    </Title>
                    <CloseButton onClick={onCancel} title={t("cancel")} type="button">
                        <CrossIcon size={12}/>
                    </CloseButton>
                </Header>
            )}

            <Body>
                <Sidebar
                    activeKind={view === "overview" ? "home" : view === "gallery" ? "gallery" : "files"}
                    currentPath={currentFolder}
                    drives={drives}
                    hiddenViews={isFileMode ? ["recycle", "settings"] : ["recycle", "gallery", "settings"]}
                    homePath={places.find((place) => place.kind === "home")?.path ?? ""}
                    onNavigate={(target) => navigate(target)}
                    onOpenView={(kind) => {
                        if (kind === "home") {
                            setSelected(new Set());
                            setFileName(isFileMode ? "" : baseName(currentFolder));
                            setView("overview");
                        } else if (kind === "gallery" && isFileMode) {
                            setSelected(new Set());
                            setFileName("");
                            setView("gallery");
                        }
                    }}
                    places={places}
                    recent={recent}
                    recentLimit={10}
                />

                <Main>
                    {view === "overview" ? (
                        <>
                            <OverviewView
                                drives={drives}
                                theme={theme}
                                historyVersion={0}
                                homePath={places.find((place) => place.kind === "home")?.path ?? ""}
                                onOpen={(target) => navigate(target)}
                                onPick={isFileMode ? (target) => submit([target]) : undefined}
                                selectCards
                                onPlacesChanged={() => undefined}
                                onRecentCleared={() => undefined}
                                onSelectionChange={handleSelection}
                                places={places}
                                readOnly
                                recent={recent}
                                recentLimit={10}
                                visibilityVersion={0}
                            />
                            {selectionBar(setFileName)}
                        </>
                    ) : view === "gallery" ? (
                        <>
                            <GalleryView
                                onPick={(path) => submit([path])}
                                onSelectionChange={handleSelection}
                                showCheckboxes={settings?.showCheckboxes ?? configDefaults().showCheckboxes}
                                view={{...defaultDirectoryView(), columns: []}}
                            />
                            {selectionBar(setFileName)}
                        </>
                    ) : (
                        <>
                            <Toolbar>
                                <IconButton
                                    disabled={back.length === 0}
                                    onClick={goBack}
                                    onContextMenu={(event) => {
                                        if (back.length === 0) return;
                                        event.preventDefault();
                                        const rect = event.currentTarget.getBoundingClientRect();
                                        setHistoryMenu({x: rect.left, y: rect.bottom + 4, direction: "back"});
                                    }}
                                    title={t("back")}
                                    type="button"
                                >
                                    <ArrowLeftIcon/>
                                </IconButton>
                                <IconButton
                                    disabled={forward.length === 0}
                                    onClick={goForward}
                                    onContextMenu={(event) => {
                                        if (forward.length === 0) return;
                                        event.preventDefault();
                                        const rect = event.currentTarget.getBoundingClientRect();
                                        setHistoryMenu({x: rect.left, y: rect.bottom + 4, direction: "forward"});
                                    }}
                                    title={t("forward")}
                                    type="button"
                                >
                                    <ArrowRightIcon/>
                                </IconButton>
                                <IconButton
                                    disabled={!parent}
                                    onClick={() => parent && navigate(parent)}
                                    title={t("up_one_level")}
                                    type="button"
                                >
                                    <ArrowUpIcon/>
                                </IconButton>

                                <PathBar onNavigate={navigate} path={currentFolder}/>

                                <IconButton
                                    onClick={(event) => setCreateMenu({x: event.clientX, y: event.clientY})}
                                    title={t("new_folder_or_file")}
                                    type="button"
                                >
                                    <PlusIcon/>
                                </IconButton>
                                <IconButton onClick={openFind} title={t("search")} type="button">
                                    <SearchIcon/>
                                </IconButton>
                                {selectionMenu.available && (
                                    <IconButton
                                        onClick={(event) => selectionMenu.open(event.clientX, event.clientY)}
                                        title={t("selection_menu")}
                                        type="button"
                                    >
                                        <MenuIcon/>
                                    </IconButton>
                                )}
                            </Toolbar>

                            {find.open && (
                                <FindBar
                                    current={findCurrent}
                                    focusToken={findFocus}
                                    matchCase={find.matchCase}
                                    mode={find.mode}
                                    onClose={() => {
                                        setFind((current) => ({...current, open: false, query: ""}));
                                        setFindIndex(0);
                                    }}
                                    onMatchCase={() => setFind((current) => ({
                                        ...current,
                                        matchCase: !current.matchCase
                                    }))}
                                    onMode={() => setFind((current) => ({
                                        ...current,
                                        mode: current.mode === "dim" ? "hide" : "dim"
                                    }))}
                                    onNext={() => stepFind(1)}
                                    onPrevious={() => stepFind(-1)}
                                    onQuery={(query) => setFind((current) => ({...current, query}))}
                                    onRegex={() => setFind((current) => ({...current, regex: !current.regex}))}
                                    query={find.query}
                                    regex={find.regex}
                                    total={findHits.length}
                                    onSelectMatches={() => setSelectMatchesToken((token) => token + 1)}
                                />
                            )}

                            <FileList
                                allowBackgroundMenu
                                confirmDelete={settings?.confirmDelete ?? configDefaults().confirmDelete}
                                enableShortcuts
                                error={error}
                                find={findView}
                                selectMatchesToken={selectMatchesToken}
                                imageStripHeight={stripHeight}
                                loading={loading}
                                listing={pickerListing}
                                onImageStripHeight={setStripHeight}
                                onOpen={openEntry}
                                onOpenExternally={openExternally}
                                onOpenFile={openEntry}
                                onSelectEntry={selectEntry}
                                onRefresh={() => setReload((value) => value + 1)}
                                onSelectionChange={handleSelection}
                                selectionMenuId="picker"
                                onSort={() => undefined}
                                openOnSingleClick={settings?.openOnSingleClick ?? configDefaults().openOnSingleClick}
                                refreshToken={reload}
                                pendingRename={renamePath}
                                pendingRenameToken={renameToken}
                                showCheckboxes={settings?.showCheckboxes ?? configDefaults().showCheckboxes}
                                showDetails={false}
                                showImages={stripVisible}
                                singleSelect={!multiple}
                                view={pickerView}
                            />

                            {selectionBar(typeName)}
                        </>
                    )}
                </Main>
            </Body>

            {createMenu && (
                <FileMenu
                    creationOnly
                    directory={currentFolder}
                    menu={{x: createMenu.x, y: createMenu.y, paths: [], background: true}}
                    onClose={() => setCreateMenu(null)}
                    onCreateFile={isFileMode ? (extension) => void startCreate(extension) : undefined}
                    onCreateFolder={() => void startCreate(null)}
                    shortcuts={defaultShortcuts()}
                />
            )}
        </Card>
    );

    if (inline)
        return card;

    return createPortal(
        <Overlay onPointerDown={(event) => {
            if (event.target === event.currentTarget) onCancel();
        }}>
            {card}
        </Overlay>,
        document.body,
    );
}

/** Windows paths win when there is a drive letter; otherwise the folder decides. */
function joinPath(folder: string, name: string): string {
    const separator = folder.includes("\\") ? "\\" : "/";
    return folder.endsWith(separator) ? folder + name : folder + separator + name;
}

function isAbsolutePath(value: string): boolean {
    return /^[a-zA-Z]:[\\/]/.test(value) || value.startsWith("\\\\") || value.startsWith("/");
}

/** The "name (1).ext" the conflict dialog offers; the real existence check happens on save. */
function suggestedSaveName(path: string): string {
    const name = baseName(path);
    const dot = name.lastIndexOf(".");

    return dot > 0 ? `${name.slice(0, dot)} (1)${name.slice(dot)}` : `${name} (1)`;
}

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${fadeInStyle}
`;

const Card = styled.div<{ $inline: boolean }>`
    display: flex;
    flex-direction: column;
    width: ${({$inline}) => $inline ? "100%" : "min(1040px, 100%)"};
    height: ${({$inline}) => $inline ? "100%" : "min(720px, 90vh)"};
    overflow: hidden;
    ${({$inline}) => $inline ? "" : elevatedPanel}
    ${({$inline}) => $inline ? "" : popInStyle}
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`;

const Title = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`;

const CloseButton = styled.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const Body = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`;

const Main = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`;

const Toolbar = styled.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`;

const IconButton = styled.button`
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: color 130ms ease, border-color 130ms ease, background 130ms ease, transform 130ms ease;

    &:hover:not(:disabled) {
        color: var(--text-primary);
        border-color: var(--border-color-hover);
        background: rgba(var(--accent-rgb), 0.10);
        transform: translateY(-1px);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.32;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;

/** The picker's name box and buttons. */
const Footer = styled.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`;

const SelectionGrid = styled.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`;

const FieldLabel = styled.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`;

/** The "2 files selected" line that replaces the empty name box in a multi-pick. */
const SelectionHint = styled.span`
    grid-column: 1 / -1;
    color: var(--text-muted);
    font-size: 11px;
`;

const NameInput = styled.input`
    flex: 1;
    min-width: 0;
    height: 32px;
    padding: 0 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
        box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
    }
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`;

const Button = styled.button<{ $primary?: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 7px 12px;
    border: 1px solid ${({$primary}) => $primary ? "transparent" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: ${({$primary}) => $primary ? "var(--accent-gradient)" : "transparent"};
    color: ${({$primary}) => $primary ? "#fff" : "var(--text-secondary)"};
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: ${({$primary}) => $primary ? "transparent" : "var(--border-color-hover)"};
        color: ${({$primary}) => $primary ? "#fff" : "var(--text-primary)"};
        filter: ${({$primary}) => $primary ? "brightness(1.08)" : "none"};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;
