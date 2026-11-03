import {useEffect, useRef, useState} from "react";
import styled, {css} from "styled-components";
import {getVisibility, type FileVisibility} from "../api/files";
import {DefaultViewDefaults} from "../api/files";
import {clearIconCache, useIconFile} from "../api/icons";
import {
    getSettings,
    pickFolder,
    pickIconFile,
    saveSettings,
    setEntryIcon,
    type AppSettings,
} from "../api/settings";
import type {AppInfo} from "../api/system";
import {getMemory, getScheme, setScheme, trimMemory, type MemoryUsage} from "../api/system";
import {deleteTag, listTags, renameTag, type TagCatalogEntry} from "../api/tags";
import {CheckIcon, CrossIcon, PlusIcon, TrashIcon} from "./Icons";
import {IconPicker} from "./IconPicker";
import {DefaultTagColor} from "./TagPicker";
import {DefaultAccentColor, DefaultSecondaryColor, normalizeColor} from "../theme";
import {comboOf, DefaultShortcuts, prettyShortcut, type ShortcutMap} from "../shortcuts";
import {BuiltinIcon} from "../icons/fileTypes";
import {GlobalTag} from "./GlobalTag";
import {ViewColumns} from "./FileList";
import {baseName, formatBytes, usageTone} from "../utils/format";

interface SettingsViewProps {
    appInfo: AppInfo | null;
    onSettingsChanged: () => void;
}

/** The actions the interface can bind; the ids are what settings.json stores. */
const ShortcutRows: { id: keyof ShortcutMap; label: string; note: string }[] = [
    {id: "goBack", label: "Back", note: "The previous folder in this tab. The mouse back button and the browser back key always work."},
    {id: "goForward", label: "Forward", note: "The next folder in this tab. The mouse forward button and the browser forward key always work."},
    {id: "goUp", label: "Up one level", note: "Opens the folder that contains the current one."},
    {id: "home", label: "Home folder", note: "Jumps to the user's home folder, like Alt+Home in Dolphin."},
    {id: "find", label: "Search", note: "Opens the floating search box. Typing a letter in a folder opens it too."},
    {id: "location", label: "Edit location", note: "Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin."},
    {id: "closeTab", label: "Close tab", note: "Closes the tab that is open."},
    {id: "newTab", label: "New tab", note: "Opens the overview in a new tab."},
    {id: "nextTab", label: "Next tab", note: "Cycles to the next tab."},
    {id: "previousTab", label: "Previous tab", note: "Cycles to the previous tab."},
    {id: "copy", label: "Copy", note: "Ctrl+D copies too, following KDE's file manager."},
    {id: "cut", label: "Cut", note: "Moves the selection on the next paste."},
    {id: "paste", label: "Paste", note: "Copies or moves the clipboard's files into the current folder."},
    {id: "undo", label: "Undo", note: "Undoes the last file operation in this session."},
    {id: "redo", label: "Redo", note: "Repeats the operation that was just undone."},
    {id: "delete", label: "Move to recycle bin", note: "Delete is Del by default, not Ctrl+D."},
    {id: "deletePermanently", label: "Delete permanently", note: "Bypasses the recycle bin; Dolphin uses Shift+Delete."},
    {id: "rename", label: "Rename", note: "Renames the single selected entry."},
    {id: "selectAll", label: "Select all", note: "Selects every entry in the current folder."},
    {id: "invertSelection", label: "Invert selection", note: "Selects everything that is not selected; Dolphin uses Ctrl+Shift+A."},
    {id: "open", label: "Open", note: "Opens the selected folder or file."},
    {id: "newFolder", label: "New folder", note: "Creates a folder in the current directory. F10 also works."},
    {id: "properties", label: "Properties", note: "Opens the shell properties sheet."},
    {id: "refresh", label: "Refresh", note: "Reads the current folder again."},
    {id: "iconsView", label: "Icons view", note: "Switches the folder to the grid view."},
    {id: "detailsView", label: "Details view", note: "Switches the folder to the list view."},
    {id: "terminal", label: "Open terminal", note: "Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel."},
    {id: "hidden", label: "Show hidden files", note: "Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer."},
    {id: "splitView", label: "Split view", note: "Shows the next file tab beside the current one; F3 in Dolphin."},
    {id: "openInNewTab", label: "Open in a new tab", note: "Hold this while clicking a folder."},
];

/** Two colours the presets apply at once, like a Windows accent palette does with one. */
const ThemePresets: { name: string; accent: string; secondary: string }[] = [
    {name: "Blue", accent: "#3b82f6", secondary: "#6366f1"},
    {name: "Indigo", accent: "#6366f1", secondary: "#8b5cf6"},
    {name: "Violet", accent: "#8b5cf6", secondary: "#d946ef"},
    {name: "Teal", accent: "#14b8a6", secondary: "#0ea5e9"},
    {name: "Green", accent: "#22c55e", secondary: "#14b8a6"},
    {name: "Amber", accent: "#f59e0b", secondary: "#f97316"},
    {name: "Rose", accent: "#f43f5e", secondary: "#ec4899"},
    {name: "Slate", accent: "#64748b", secondary: "#94a3b8"},
];

/** The sections the table of contents jumps to; the ids are what the list shows. */
const SettingSections: { id: string; label: string }[] = [
    {id: "application", label: "Application"},
    {id: "colors", label: "Colors"},
    {id: "tags", label: "Tags"},
    {id: "files-view", label: "Files view"},
    {id: "shortcuts", label: "Shortcuts"},
    {id: "memory", label: "Memory"},
    {id: "overview", label: "Overview"},
    {id: "gallery", label: "Gallery"},
    {id: "icons", label: "Icons"},
    {id: "extension-icons", label: "Icons by extension"},
    {id: "folder-icons", label: "Folder icons"},
    {id: "folder-index", label: "Folder index"},
    {id: "files", label: "Files"},
];

type ColorRole = "accent" | "secondary";

/** Colours the user applied before, most recent first; kept locally like the recycle bin sort. */
type RecentColors = Record<ColorRole, string[]>;

const RecentColorsKey = "yafm.colors.recent";

function readRecentColors(): RecentColors {
    try {
        const saved = JSON.parse(localStorage.getItem(RecentColorsKey) ?? "null") as
            Partial<Record<ColorRole, string[]>> | null;

        return {
            accent: (saved?.accent ?? []).filter((color) => typeof color === "string").slice(0, 8),
            secondary: (saved?.secondary ?? []).filter((color) => typeof color === "string").slice(0, 8),
        };
    } catch {
        return {accent: [], secondary: []};
    }
}

export function SettingsView({appInfo, onSettingsChanged}: SettingsViewProps) {
    const [visibility, setVisibility] = useState<FileVisibility | null>(null);
    const [settings, setSettings] = useState<AppSettings | null>(null);
    const [folderIcon, setFolderIcon] = useState<{ folder: string; icon: string } | null>(null);
    const [newExtension, setNewExtension] = useState("");
    const [newIcon, setNewIcon] = useState<string>("file");
    const [pickingIcon, setPickingIcon] = useState(false);
    const [busy, setBusy] = useState(false);
    const [memory, setMemory] = useState<MemoryUsage | null>(null);
    const [scheme, setSchemeState] = useState(false);
    const [schemeBusy, setSchemeBusy] = useState(false);
    const [schemeError, setSchemeError] = useState<string | null>(null);
    const [capturing, setCapturing] = useState<string | null>(null);
    const [tags, setTags] = useState<TagCatalogEntry[]>([]);
    const [editingTag, setEditingTag] = useState<{ name: string; value: string } | null>(null);
    const [tagBusy, setTagBusy] = useState(false);
    const [tagError, setTagError] = useState<string | null>(null);
    const [recentColors, setRecentColors] = useState<RecentColors>(readRecentColors);
    const [colorStart, setColorStart] = useState<{ role: ColorRole; color: string } | null>(null);
    const [activeSection, setActiveSection] = useState(SettingSections[0].id);
    const page = useRef<HTMLDivElement | null>(null);
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    const defaultView = settings?.defaultView ?? DefaultViewDefaults;

    // The table of contents follows the section that is currently at the top of the scroller.
    useEffect(() => {
        const scroller = page.current;
        if (!scroller) return;

        const updateActive = () => {
            const top = scroller.getBoundingClientRect().top;
            const atBottom = scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 8;

            if (atBottom) {
                setActiveSection(SettingSections[SettingSections.length - 1].id);
                return;
            }

            const threshold = top + 110;
            let current = SettingSections[0].id;

            for (const {id} of SettingSections) {
                const element = sectionRefs.current[id];
                if (element && element.getBoundingClientRect().top <= threshold)
                    current = id;
            }

            setActiveSection(current);
        };

        updateActive();
        scroller.addEventListener("scroll", updateActive, {passive: true});
        window.addEventListener("resize", updateActive);

        return () => {
            scroller.removeEventListener("scroll", updateActive);
            window.removeEventListener("resize", updateActive);
        };
    }, []);

    const anchor = (id: string) => (node: HTMLElement | null) => {
        sectionRefs.current[id] = node;
    };

    const jumpTo = (id: string) => {
        sectionRefs.current[id]?.scrollIntoView({behavior: "smooth", block: "start"});
        setActiveSection(id);
    };

    useEffect(() => {
        void getVisibility().then(setVisibility, () => setVisibility(null));
        void getSettings().then(setSettings, () => setSettings(null));
        void getScheme().then(setSchemeState, () => setSchemeState(false));
        void listTags().then(setTags, () => setTags([]));
    }, []);

    // Usage changes while the page is open, so the numbers refresh themselves.
    useEffect(() => {
        const load = () => void getMemory().then(setMemory, () => setMemory(null));

        load();
        const timer = setInterval(load, 4000);
        return () => clearInterval(timer);
    }, []);

    const update = async (patch: Partial<AppSettings>) => {
        if (!settings) return;

        const next = {...settings, ...patch};
        setSettings(next);
        clearIconCache();
        setSettings(await saveSettings(next));
        // The window keeps its own copy of the settings; a toggle here has to reach it too.
        onSettingsChanged();
    };

    /** Keeps the last few applied colours, so a palette click and a revert are one click each. */
    const rememberColor = (role: ColorRole, color: string) => {
        setRecentColors((current) => {
            const list = [
                color,
                ...current[role].filter((item) => item.toLowerCase() !== color.toLowerCase()),
            ].slice(0, 8);

            const next = {...current, [role]: list};

            try {
                localStorage.setItem(RecentColorsKey, JSON.stringify(next));
            } catch {
                // Storage may be unavailable; the chips still work for this run.
            }

            return next;
        });
    };

    const accentNow = normalizeColor(settings?.accentColor, DefaultAccentColor);
    const secondaryNow = normalizeColor(settings?.secondaryColor, DefaultSecondaryColor);

    /** Applies one of the paired palettes, remembering what the window looked like before. */
    const applyPreset = (accent: string, secondary: string) => {
        if (!settings) return;

        rememberColor("accent", accentNow);
        rememberColor("secondary", secondaryNow);
        void update({accentColor: accent, secondaryColor: secondary});
    };

    const applyColor = (role: ColorRole, color: string) => {
        if (!settings) return;

        rememberColor(role, role === "accent" ? accentNow : secondaryNow);
        void update(role === "accent" ? {accentColor: color} : {secondaryColor: color});
    };

    /** The colour well fires while the picker is open; only the value it ends on is remembered. */
    const finishColor = (role: ColorRole) => {
        const start = colorStart;
        setColorStart(null);

        if (!start || start.role !== role) return;

        const color = role === "accent" ? accentNow : secondaryNow;
        if (color.toLowerCase() !== start.color.toLowerCase())
            rememberColor(role, start.color);
    };

    const removeTag = async (name: string) => {
        if (tagBusy) return;

        setTagBusy(true);
        setTagError(null);

        const removed = await deleteTag(name);
        setTags(await listTags());

        if (!removed)
            setTagError(`"${name}" is still used by a folder whose index could not be updated.`);

        setTagBusy(false);
    };

    const saveTagName = async () => {
        const edit = editingTag;
        if (!edit || tagBusy)
            return;

        const value = edit.value.trim();

        if (value.length === 0 || value === edit.name) {
            setEditingTag(null);
            return;
        }

        setTagBusy(true);
        setTagError(null);

        if (await renameTag(edit.name, value)) {
            setTags(await listTags());
            setEditingTag(null);
        } else {
            setTagError(`Could not rename "${edit.name}".`);
        }

        setTagBusy(false);
    };

    /** Columns are a window-wide setting, so the order stays the same everywhere. */
    const toggleColumn = async (id: string) => {
        const wanted = new Set(defaultView.columns ?? DefaultViewDefaults.columns ?? []);
        if (wanted.has(id)) wanted.delete(id);
        else wanted.add(id);

        const ordered = ViewColumns.map((column) => column.id).filter((column) => wanted.has(column));
        if (wanted.has("linkTarget")) ordered.push("linkTarget");

        await update({defaultView: {...defaultView, columns: ordered}});
    };

    /** Applies the choice now and remembers it, so the next launch can put a lost entry back. */
    const toggleScheme = async () => {
        if (schemeBusy) return;

        const wanted = !scheme;
        setSchemeBusy(true);
        setSchemeError(null);

        try {
            const registered = await setScheme(wanted);

            setSchemeState(registered);
            setSettings((current) => current ? {...current, linksEnabled: registered} : current);
            // The window keeps its own copy of the settings; a save from elsewhere would otherwise
            // write the old link choice back.
            onSettingsChanged();

            if (registered !== wanted)
                setSchemeError(wanted
                    ? "Windows did not accept the registration. Try again."
                    : "The registration is still there. Try turning it off again.");
        } catch {
            setSchemeError("The request to Windows failed. Try again.");
        } finally {
            setSchemeBusy(false);
        }
    };

    const setOverride = async (extension: string, source: string | null) => {
        if (!settings) return;

        const icons = {...settings.extensionIcons};

        if (source === null)
            delete icons[extension];
        else
            icons[extension] = source;

        await update({extensionIcons: icons});
    };

    const keys = {...DefaultShortcuts, ...settings?.shortcuts};

    // While a shortcut is being recorded, the next key press becomes the new combination.
    useEffect(() => {
        if (!capturing) return;

        const record = (event: KeyboardEvent) => {
            event.preventDefault();
            event.stopPropagation();

            if (event.key === "Escape") {
                setCapturing(null);
                return;
            }

            const combo = comboOf(event);
            if (!combo) return;

            setCapturing(null);
            void update({shortcuts: {...keys, [capturing]: combo}});
        };

        window.addEventListener("keydown", record, true);
        return () => window.removeEventListener("keydown", record, true);
    }, [capturing, settings]);

    /** Recent items are a display preference, stored like every other setting. */
    const setRecentLimit = async (limit: number) => {
        await update({recentLimit: Math.min(Math.max(limit, 0), 50)});
    };

    const saveGallery = async (paths: string[]) => {
        await update({galleryRoots: paths.length > 0 ? paths : null});
    };

    const addGalleryRoot = async () => {
        const folder = await pickFolder();
        const paths = settings?.galleryRoots ?? [];

        if (!folder || paths.some((path) => path.toLowerCase() === folder.toLowerCase()))
            return;

        await saveGallery([...paths, folder]);
    };

    const addRule = async () => {
        const extension = newExtension.trim().toLowerCase();

        if (!extension || !extension.startsWith(".") || extension.length < 2)
            return;

        await setOverride(extension, newIcon);
        setNewExtension("");
    };

    const assignFolderIcon = async () => {
        setBusy(true);

        try {
            const folder = await pickFolder();
            if (!folder) return;

            const icon = await pickIconFile();
            if (!icon) return;

            const parent = folder.replace(/[\\/][^\\/]+$/, "");
            const name = baseName(folder);
            const source = `file:${icon}`;

            if (await setEntryIcon(parent, name, source)) {
                clearIconCache();
                setFolderIcon({folder, icon});
            }
        } finally {
            setBusy(false);
        }
    };

    return (
        <Page>
            <Main ref={page}>
                <Section ref={anchor("application")}>
                    <Head
                        note="The build, its yafm:// links, and what reopens at launch."
                        title="Application"
                    />
                    <Rows>
                        <Row>
                            <Label>Version</Label>
                            <Value>{appInfo ? `v${appInfo.version}` : "—"}</Value>
                        </Row>
                        <Row>
                            <Label>Platform</Label>
                            <Value>{appInfo?.platform ?? "—"}</Value>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>Open yafm:// links</Label>
                                <Note>
                                    Registers this app for yafm:// links, for the current user only.
                                    While this is on, the app repairs the entry at every launch.
                                </Note>
                                {schemeError && <TagError>{schemeError}</TagError>}
                            </RowText>
                            <RowEnd>
                                <State $on={scheme}>{scheme ? "Active" : "Off"}</State>
                                <Toggle
                                    $on={scheme}
                                    disabled={schemeBusy}
                                    onClick={() => void toggleScheme()}
                                    title={scheme ? "Stop opening yafm:// links" : "Open yafm:// links with this app"}
                                    type="button"
                                >
                                    <Knob/>
                                </Toggle>
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>Reopen the tabs that were open</Label>
                                <Note>
                                    Keeps the tabs and the folder each one shows, so they come back after a
                                    restart. A folder passed on the command line takes over instead.
                                </Note>
                            </RowText>
                            <Toggle
                                $on={settings?.restoreTabs ?? true}
                                disabled={!settings}
                                onClick={() => void update({restoreTabs: !settings?.restoreTabs})}
                                type="button"
                            >
                                <Knob/>
                            </Toggle>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("colors")}>
                    <Head
                        note="The accent and highlight colours the whole window uses."
                        title="Colors"
                    />
                    <Rows>
                        <Block>
                            <BlockHead>
                                <Label>Presets</Label>
                                <Note>One click changes the accent and the highlight together.</Note>
                            </BlockHead>
                            <PresetGrid>
                                {ThemePresets.map((preset) => (
                                    <Preset
                                        $on={accentNow.toLowerCase() === preset.accent
                                            && secondaryNow.toLowerCase() === preset.secondary}
                                        key={preset.name}
                                        onClick={() => applyPreset(preset.accent, preset.secondary)}
                                        title={`${preset.name} · ${preset.accent} / ${preset.secondary}`}
                                        type="button"
                                    >
                                        <PresetDots>
                                            <i style={{background: preset.accent}}/>
                                            <i style={{background: preset.secondary}}/>
                                        </PresetDots>
                                        {preset.name}
                                    </Preset>
                                ))}
                            </PresetGrid>
                        </Block>
                        <Row>
                            <RowText>
                                <Label>Accent color</Label>
                                <Note>Buttons, selections, focus rings, and active navigation.</Note>
                            </RowText>
                            <RowEnd>
                                <RecentSwatches
                                    colors={recentColors.accent}
                                    current={accentNow}
                                    onApply={(color) => applyColor("accent", color)}
                                />
                                <ColorWell
                                    aria-label="Accent color"
                                    disabled={!settings}
                                    onBlur={() => finishColor("accent")}
                                    onChange={(event) => void update({accentColor: event.target.value})}
                                    onFocus={() => setColorStart({role: "accent", color: accentNow})}
                                    type="color"
                                    value={accentNow}
                                />
                                <ColorCode>{accentNow.toUpperCase()}</ColorCode>
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>Secondary color</Label>
                                <Note>Gradients, highlights, and the second end of the accent ramp.</Note>
                            </RowText>
                            <RowEnd>
                                <RecentSwatches
                                    colors={recentColors.secondary}
                                    current={secondaryNow}
                                    onApply={(color) => applyColor("secondary", color)}
                                />
                                <ColorWell
                                    aria-label="Secondary color"
                                    disabled={!settings}
                                    onBlur={() => finishColor("secondary")}
                                    onChange={(event) => void update({secondaryColor: event.target.value})}
                                    onFocus={() => setColorStart({role: "secondary", color: secondaryNow})}
                                    type="color"
                                    value={secondaryNow}
                                />
                                <ColorCode>{secondaryNow.toUpperCase()}</ColorCode>
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>Reset colors</Label>
                                <Note>Returns the interface to the default blue and indigo theme.</Note>
                            </RowText>
                            <RowEnd>
                                <SmallButton
                                    disabled={!settings}
                                    onClick={() => {
                                        rememberColor("accent", accentNow);
                                        rememberColor("secondary", secondaryNow);
                                        void update({accentColor: null, secondaryColor: null});
                                    }}
                                    type="button"
                                >
                                    Reset
                                </SmallButton>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("tags")}>
                    <Head
                        note="Every tag the catalogue has seen, ready to rename or remove."
                        title="Tags"
                    />
                    <Rows>
                        {tagError && (
                            <Row>
                                <TagError>{tagError}</TagError>
                            </Row>
                        )}
                        {tags.length === 0 && (
                            <Row>
                                <Note>
                                    No tags yet. Add one from an entry's Tags cell; every tag you use will
                                    appear here.
                                </Note>
                            </Row>
                        )}
                        {tags.map((tag) => (
                            <Row key={tag.name}>
                                {editingTag?.name === tag.name
                                    ? (
                                        <>
                                            <RowText>
                                                <LabelRow>
                                                    <TagDot $color={tag.color ?? DefaultTagColor}/>
                                                    <RenameTagInput
                                                        autoFocus
                                                        disabled={tagBusy}
                                                        onChange={(event) => setEditingTag({
                                                            name: tag.name,
                                                            value: event.target.value,
                                                        })}
                                                        onKeyDown={(event) => {
                                                            if (event.key === "Enter") {
                                                                event.preventDefault();
                                                                void saveTagName();
                                                            } else if (event.key === "Escape") {
                                                                event.preventDefault();
                                                                setEditingTag(null);
                                                            }
                                                        }}
                                                        value={editingTag.value}
                                                    />
                                                </LabelRow>
                                                <Note>Press Enter to save, Escape to cancel.</Note>
                                            </RowText>
                                            <RowEnd>
                                                <SmallButton disabled={tagBusy} onClick={() => void saveTagName()} type="button">
                                                    Save
                                                </SmallButton>
                                                <SmallButton disabled={tagBusy} onClick={() => setEditingTag(null)} type="button">
                                                    Cancel
                                                </SmallButton>
                                            </RowEnd>
                                        </>
                                    )
                                    : (
                                        <>
                                            <RowText>
                                                <LabelRow>
                                                    <TagDot $color={tag.color ?? DefaultTagColor}/>
                                                    <Label>{tag.name}</Label>
                                                </LabelRow>
                                                <Note>
                                                    Used in {tag.folders} folder{tag.folders === 1 ? "" : "s"}.
                                                    Renaming or removing it updates those folders' indexes.
                                                </Note>
                                            </RowText>
                                            <RowEnd>
                                                <SmallButton
                                                    disabled={tagBusy}
                                                    onClick={() => setEditingTag({name: tag.name, value: tag.name})}
                                                    type="button"
                                                >
                                                    Edit
                                                </SmallButton>
                                                <DangerButton
                                                    disabled={tagBusy}
                                                    onClick={() => void removeTag(tag.name)}
                                                    type="button"
                                                >
                                                    <TrashIcon size={13}/>
                                                    Remove
                                                </DangerButton>
                                            </RowEnd>
                                        </>
                                    )}
                            </Row>
                        ))}
                    </Rows>
                </Section>

                <Section ref={anchor("files-view")}>
                    <Head
                        note="The defaults every folder starts with; a folder can still override them."
                        title="Files view (global)"
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <Label>Default view</Label>
                                <Note>
                                    The mode every folder starts with. A folder can still remember its own
                                    list or grid mode from the title bar.
                                </Note>
                            </RowText>
                            <RowEnd>
                                <Segmented>
                                    <Segment
                                        $on={defaultView.mode === "list"}
                                        onClick={() => void update({
                                            defaultView: {...defaultView, mode: "list"},
                                        })}
                                        type="button"
                                    >
                                        List
                                    </Segment>
                                    <Segment
                                        $on={defaultView.mode === "grid"}
                                        onClick={() => void update({
                                            defaultView: {...defaultView, mode: "grid"},
                                        })}
                                        type="button"
                                    >
                                        Grid
                                    </Segment>
                                </Segmented>
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>List icon size</Label>
                                <Note>The icon in the list rows.</Note>
                            </RowText>
                            <RowEnd>
                                <RangeInput
                                    max={48}
                                    min={16}
                                    onChange={(event) => void update({
                                        defaultView: {...defaultView, iconSize: Number(event.target.value)},
                                    })}
                                    step={2}
                                    type="range"
                                    value={defaultView.iconSize}
                                />
                                <Value>{defaultView.iconSize}px</Value>
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>Grid size</Label>
                                <Note>The height of a grid tile; the icon inside follows it.</Note>
                            </RowText>
                            <RowEnd>
                                <RangeInput
                                    max={260}
                                    min={100}
                                    onChange={(event) => void update({
                                        defaultView: {...defaultView, gridSize: Number(event.target.value)},
                                    })}
                                    step={4}
                                    type="range"
                                    value={defaultView.gridSize}
                                />
                                <Value>{defaultView.gridSize}px</Value>
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <LabelRow>
                                    <Label>Selection checkboxes</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    Show a checkbox before every name, the way Explorer does. Checked entries
                                    can be copied, cut or deleted together.
                                </Note>
                            </RowText>
                            <Toggle
                                $on={settings?.showCheckboxes ?? true}
                                disabled={!settings}
                                onClick={() => void update({showCheckboxes: !(settings?.showCheckboxes ?? true)})}
                                type="button"
                            >
                                <Knob/>
                            </Toggle>
                        </Row>
                        <Row>
                            <RowText>
                                <LabelRow>
                                    <Label>Open with a single click</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    Off means double-click, like Explorer's default. The checkbox still
                                    only selects, so a click on it never opens the entry.
                                </Note>
                            </RowText>
                            <Toggle
                                $on={settings?.openOnSingleClick ?? false}
                                disabled={!settings}
                                onClick={() => void update({openOnSingleClick: !(settings?.openOnSingleClick ?? false)})}
                                type="button"
                            >
                                <Knob/>
                            </Toggle>
                        </Row>
                        <Row>
                            <RowText>
                                <LabelRow>
                                    <Label>Confirm before deleting</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    Asks before moving items to the recycle bin. Shift+Del always asks,
                                    because that deletes permanently.
                                </Note>
                            </RowText>
                            <Toggle
                                $on={settings?.confirmDelete ?? false}
                                disabled={!settings}
                                onClick={() => void update({confirmDelete: !(settings?.confirmDelete ?? false)})}
                                type="button"
                            >
                                <Knob/>
                            </Toggle>
                        </Row>
                        <Row>
                            <RowText>
                                <LabelRow>
                                    <Label>Play audio in video previews</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    Video previews play muted by default. Turn this on to hear their audio
                                    while the details panel is open.
                                </Note>
                            </RowText>
                            <Toggle
                                $on={settings?.previewVideoAudio ?? false}
                                disabled={!settings}
                                onClick={() => void update({previewVideoAudio: !(settings?.previewVideoAudio ?? false)})}
                                type="button"
                            >
                                <Knob/>
                            </Toggle>
                        </Row>
                        <Row>
                            <RowText>
                                <LabelRow>
                                    <Label>Autoplay video previews</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    Off by default. Turn this on to start a video as soon as its details
                                    panel opens; the play button still works when it is off.
                                </Note>
                            </RowText>
                            <Toggle
                                $on={settings?.previewVideoAutoplay ?? false}
                                disabled={!settings}
                                onClick={() => void update({
                                    previewVideoAutoplay: !(settings?.previewVideoAutoplay ?? false),
                                })}
                                type="button"
                            >
                                <Knob/>
                            </Toggle>
                        </Row>
                        <Row>
                            <RowText>
                                <LabelRow>
                                    <Label>Preview panel under the list</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    Shows the pictures, videos and documents the shell can preview as grid
                                    tiles below the list. The tiles follow the grid size, and the panel only
                                    appears in list mode.
                                </Note>
                            </RowText>
                            <Toggle
                                $on={defaultView.showImages ?? true}
                                onClick={() => void update({
                                    defaultView: {...defaultView, showImages: !(defaultView.showImages ?? true)},
                                })}
                                type="button"
                            >
                                <Knob/>
                            </Toggle>
                        </Row>
                        <Row>
                            <RowText>
                                <LabelRow>
                                    <Label>Columns</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>Shown in every folder; changing them changes all folders at once.</Note>
                            </RowText>
                        </Row>
                        <Row>
                            <ColumnGrid>
                                {ViewColumns.map((column) => (
                                    <ColumnCheck key={column.id}>
                                        <input
                                            checked={(defaultView.columns ?? []).includes(column.id)}
                                            onChange={() => void toggleColumn(column.id)}
                                            type="checkbox"
                                        />
                                        <span>{column.label}</span>
                                    </ColumnCheck>
                                ))}
                                <ColumnCheck>
                                    <input
                                        checked={(defaultView.columns ?? []).includes("linkTarget")}
                                        onChange={() => void toggleColumn("linkTarget")}
                                        type="checkbox"
                                    />
                                    <span>Link target after the name</span>
                                </ColumnCheck>
                            </ColumnGrid>
                        </Row>
                    </Rows>
                    <Footnote>
                        The default view, list icon size and grid size are only defaults: a folder can still
                        remember its own from the title bar. Anything marked <GlobalTag/> always applies to
                        every folder.
                    </Footnote>
                </Section>

                <Section ref={anchor("shortcuts")}>
                    <Head
                        note="The keys this window listens for. Click a combination to record a new one."
                        title="Shortcuts"
                    />
                    <Rows>
                        {ShortcutRows.map(({id, label, note}) => (
                            <Row key={id}>
                                <RowText>
                                    <Label>{label}</Label>
                                    <Note>{note}</Note>
                                </RowText>
                                <RowEnd>
                                    <KeyButton
                                        $listening={capturing === id}
                                        onClick={() => setCapturing(id)}
                                        type="button"
                                    >
                                        {capturing === id ? "Press a key…" : prettyShortcut(keys[id])}
                                    </KeyButton>
                                </RowEnd>
                            </Row>
                        ))}
                        <Row>
                            <RowText>
                                <Label>Reset</Label>
                                <Note>Back to the default combination for every action.</Note>
                            </RowText>
                            <RowEnd>
                                <ActionButton
                                    onClick={() => void update({shortcuts: {...DefaultShortcuts}})}
                                    type="button"
                                >
                                    Reset
                                </ActionButton>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("memory")}>
                    <Head
                        note="What the process holds and how to give it back."
                        title="Memory"
                    />
                    <Rows>
                        <Gauge>
                            <GaugeHead>
                                <Label>Process memory</Label>
                                <Value>
                                    {memory ? `${formatBytes(memory.private)} · ${percent(memory.private, memory.available)}` : "—"}
                                </Value>
                            </GaugeHead>
                            <Track>
                                <TrackFill
                                    $ratio={memory ? memory.private / Math.max(memory.available, 1) : 0}
                                    $tone={usageTone(memory ? memory.private / Math.max(memory.available, 1) : 0)}
                                />
                            </Track>
                            <Note>
                                {memory
                                    ? `Committed of ${formatBytes(memory.available)} the runtime can use; ${formatBytes(memory.workingSet)} is resident. The webview runs in its own process.`
                                    : "Reading the current usage…"}
                            </Note>
                        </Gauge>

                        <Gauge>
                            <GaugeHead>
                                <Label>Managed heap</Label>
                                <Value>
                                    {memory ? `${formatBytes(memory.managed)} · ${percent(memory.managed, memory.private)}` : "—"}
                                </Value>
                            </GaugeHead>
                            <Track>
                                <TrackFill
                                    $ratio={memory ? memory.managed / Math.max(memory.private, 1) : 0}
                                    $tone="var(--accent-secondary)"
                                />
                            </Track>
                            <Note>
                                Share of this process that the .NET heap holds; thumbnails and folder
                                size walks live here. The runtime grows it on demand and gives it back
                                after a collection.
                            </Note>
                        </Gauge>

                        <Row>
                            <RowText>
                                <Label>Free memory</Label>
                                <Note>Compacts the heap and returns unused pages to the system. Always safe.</Note>
                            </RowText>
                            <RowEnd>
                                <ActionButton onClick={() => void trimMemory().then(setMemory)} type="button">
                                    Trim now
                                </ActionButton>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("overview")}>
                    <Head
                        note="The home tab's history and how much of it it shows."
                        title="Overview"
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <Label>Recent items</Label>
                                <Note>How many recently opened folders the overview lists. 0 hides the section.</Note>
                            </RowText>
                            <RowEnd>
                                <Input
                                    max={50}
                                    min={0}
                                    onChange={(event) => void setRecentLimit(Number(event.target.value))}                                type="number"
                                    value={settings?.recentLimit ?? 10}
                                />
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("gallery")}>
                    <Head
                        note="The folders the gallery scans for pictures and videos."
                        title="Gallery"
                    />
                    <Rows>
                        {(settings?.galleryRoots ?? []).map((path) => (
                            <Row key={path}>
                                <RowText>
                                    <Label>{baseName(path)}</Label>
                                    <Note>{path}</Note>
                                </RowText>
                                <RowEnd>
                                    <IconButton
                                        onClick={() => void saveGallery((settings?.galleryRoots ?? []).filter((item) => item !== path))}
                                        title="Stop scanning this folder"
                                        type="button"
                                    >
                                        <CrossIcon size={12}/>
                                    </IconButton>
                                </RowEnd>
                            </Row>
                        ))}

                        <Row>
                            <RowText>
                                <Label>Scan folders</Label>
                                <Note>
                                    {(settings?.galleryRoots ?? []).length === 0
                                        ? "Nothing added yet, so the gallery reads the Pictures folder."
                                        : "Only these folders are scanned, three levels deep."}
                                </Note>
                            </RowText>
                            <RowEnd>
                                <ActionButton onClick={() => void addGalleryRoot()} type="button">
                                    Choose folder…
                                </ActionButton>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("icons")}>
                    <Head
                        note="Where the shell's own icons and the built-in glyphs come from."
                        title="Icons"
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <Label>Use system file icons</Label>
                                <Note>Ask the shell for the icon of each file type instead of the built-in glyphs.</Note>
                            </RowText>
                            <Toggle
                                $on={settings?.systemIcons ?? false}
                                disabled={!settings}
                                onClick={() => void update({systemIcons: !settings?.systemIcons})}
                                type="button"
                            >
                                <Knob/>
                            </Toggle>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>Use custom folder icons</Label>
                                <Note>
                                    Folders that define an icon (desktop.ini) keep showing it even when system
                                    icons are off.
                                </Note>
                            </RowText>
                            <Toggle
                                $on={settings?.customFolderIcons ?? false}
                                disabled={!settings}
                                onClick={() => void update({customFolderIcons: !settings?.customFolderIcons})}
                                type="button"
                            >
                                <Knob/>
                            </Toggle>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("extension-icons")}>
                    <Head
                        note="A custom glyph for one file extension."
                        title="Icons by extension"
                    />
                    <Rows>
                        {Object.entries(settings?.extensionIcons ?? {})
                            .sort(([left], [right]) => left.localeCompare(right))
                            .map(([extension, source]) => (
                                <Row key={extension}>
                                    <RowText>
                                        <Label>{extension}</Label>
                                        <Note>{describeSource(source)}</Note>
                                    </RowText>
                                    <RowEnd>
                                        <Preview source={source}/>
                                        <IconButton
                                            onClick={() => void setOverride(extension, null)}
                                            title="Remove this rule"
                                            type="button"
                                        >
                                            <CrossIcon size={12}/>
                                        </IconButton>
                                    </RowEnd>
                                </Row>
                            ))}

                        <Row>
                            <RowText>
                                <Label>Add a rule</Label>
                                <Note>Extension and the icon to draw for it.</Note>
                            </RowText>
                            <RowEnd>
                                <Input
                                    onChange={(event) => setNewExtension(event.target.value)}
                                    placeholder=".psd"
                                    spellCheck={false}
                                    value={newExtension}
                                />
                                <IconTrigger>
                                    <IconButton
                                        onClick={() => setPickingIcon((current) => !current)}
                                        title="Choose the icon"
                                        type="button"
                                    >
                                        <Preview source={newIcon}/>
                                    </IconButton>
                                    {pickingIcon && (
                                        <IconPicker
                                            allowDefault={false}
                                            onClose={() => setPickingIcon(false)}
                                            onPick={(icon) => {
                                                setNewIcon(icon ?? "file");
                                                setPickingIcon(false);
                                            }}
                                            value={newIcon}
                                        />
                                    )}
                                </IconTrigger>
                                <IconButton onClick={() => void addRule()} title="Add the rule" type="button">
                                    <PlusIcon size={13}/>
                                </IconButton>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("folder-icons")}>
                    <Head
                        note="A single folder can carry an icon of its own."
                        title="Folder icons"
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <Label>Give a folder its own icon</Label>
                                <Note>
                                    Stored in the folder's parent <Index>.yafm-index.db</Index>, so it stays with
                                    the files.
                                </Note>
                            </RowText>
                            <RowEnd>
                                {folderIcon && <Thumb src={folderIcon.icon}/>}
                                <ActionButton disabled={busy} onClick={() => void assignFolderIcon()} type="button">
                                    {busy ? "Choosing…" : "Choose folder and icon…"}
                                </ActionButton>
                            </RowEnd>
                        </Row>
                        {folderIcon && (
                            <Row>
                                <RowText>
                                    <Label>{baseName(folderIcon.folder)}</Label>
                                    <Note>{folderIcon.folder}</Note>
                                </RowText>
                                <RowEnd>
                                    <Badge><CheckIcon size={11}/> Saved</Badge>
                                </RowEnd>
                            </Row>
                        )}
                    </Rows>
                </Section>

                <Section ref={anchor("folder-index")}>
                    <Head
                        note="The hidden cache that makes a folder open instantly next time."
                        title="Folder index"
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <Label>Keep a <Index>.yafm-index.db</Index> in every folder</Label>
                                <Note>
                                    Holds icons, cached folder sizes and the folder's last listing, so it opens
                                    instantly next time. Hidden and marked as a system file on Windows; skipped
                                    where the folder is read-only.
                                </Note>
                            </RowText>
                            <Toggle
                                $on={settings?.writeDirectoryIndex ?? true}
                                disabled={!settings}
                                onClick={() => void update({writeDirectoryIndex: !settings?.writeDirectoryIndex})}
                                type="button"
                            >
                                <Knob/>
                            </Toggle>
                        </Row>
                    </Rows>
                    {!(settings?.writeDirectoryIndex ?? true) && (
                        <Notice>{folderIndexNotice(appInfo?.platform)}</Notice>
                    )}
                </Section>

                <Section ref={anchor("files")}>
                    <Head
                        note="What the listings include."
                        title="Files"
                    />
                    <Rows>
                        <Row>
                            <Label>Hidden items</Label>
                            <Value>{describe(visibility?.showHidden)}</Value>
                        </Row>
                        <Row>
                            <Label>Protected operating system files</Label>
                            <Value>{describe(visibility?.showSystem)}</Value>
                        </Row>
                    </Rows>
                    <Footnote>
                        Listings follow the file manager's own settings: hidden and protected items are only
                        shown when the operating system is set to show them.
                    </Footnote>
                </Section>
            </Main>

            <Toc aria-label="Settings sections">
                <TocLabel>Sections</TocLabel>
                <TocList>
                    {SettingSections.map(({id, label}) => (
                        <TocItem
                            $active={activeSection === id}
                            key={id}
                            onClick={() => jumpTo(id)}
                            type="button"
                        >
                            <span>{label}</span>
                        </TocItem>
                    ))}
                </TocList>
                <TocNote>Changes are saved as you make them.</TocNote>
            </Toc>
        </Page>
    );
}

function describe(value: boolean | undefined): string {
    if (value === undefined) return "Reading…";

    return value ? "Shown" : "Hidden";
}

/**
 * Shown only while per-folder indexes are off, and names the drive the central database grows on.
 * Windows and Linux keep the settings in different places, and only the user knows where that is.
 */
function folderIndexNotice(platform: string | undefined): string {
    const place = platform === "windows" ? "%APPDATA%, which sits on the system drive (usually C:)"
        : platform === "linux" ? "your home folder, which often shares a partition with the system"
            : "the app's settings folder, which usually sits on the system drive";

    return `Indexes are off. Every folder's icons, sizes and cached listing now live in one database in ${place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`;
}

function describeSource(source: string): string {
    return source.startsWith("file:") ? source.slice(5) : `built-in: ${source}`;
}

function Preview({source}: { source: string }) {
    const image = useIconFile(source.startsWith("file:") ? source.slice(5) : null);

    return (
        <PreviewSlot>
            {image ? <img alt="" height={16} src={image} width={16}/> : <BuiltinIcon name={source} size={16}/>}
        </PreviewSlot>
    );
}

function Thumb({src}: { src: string }) {
    const image = useIconFile(src);

    return <PreviewSlot>{image && <img alt="" height={18} src={image} width={18}/>}</PreviewSlot>;
}

/** The colour that was applied before, then the rest of the recent ones. */
function RecentSwatches({colors, current, onApply}: {
    colors: string[];
    current: string;
    onApply: (color: string) => void;
}) {
    if (colors.length === 0)
        return null;

    const [previous, ...rest] = colors;

    return (
        <Swatches>
            <PreviousColor
                $color={previous}
                onClick={() => onApply(previous)}
                title={`Previous colour · ${previous}`}
                type="button"
            >
                <i/>
                Previous
            </PreviousColor>
            {rest.map((color) => (
                <Swatch
                    $color={color}
                    key={color}
                    onClick={() => onApply(color)}
                    title={`Use ${color}`}
                    type="button"
                >
                    {color.toLowerCase() === current.toLowerCase() && <CheckIcon size={9}/>}
                </Swatch>
            ))}
        </Swatches>
    );
}

/** The title block above a card; every section explains itself in one line. */
function Head({title, note}: { title: string; note: string }) {
    return (
        <SectionHead>
            <h2>{title}</h2>
            <p>{note}</p>
        </SectionHead>
    );
}

const Page = styled.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`;

/** The settings column scrolls on its own, so the section list on the right can stay put. */
const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 900px;
    scroll-margin-top: 10px;
`;

const SectionHead = styled.header`
    display: flex;
    flex-direction: column;
    gap: 2px;

    h2 {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 600;
        color: var(--text-primary);
    }

    h2::before {
        content: "";
        width: 3px;
        height: 13px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    p {
        padding-left: 11px;
        font-size: 10.5px;
        color: var(--text-muted);
    }
`;

const Rows = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    overflow: hidden;
`;

const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`;

const BlockHead = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`;

const PresetGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`;

const Preset = styled.button<{ $on: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 10px;
    border: 1px solid ${({$on}) => $on ? "rgba(var(--accent-rgb), 0.55)" : "var(--border-color)"};
    border-radius: var(--radius-md);
    background: ${({$on}) => $on ? "rgba(var(--accent-rgb), 0.12)" : "var(--bg-input)"};
    color: ${({$on}) => $on ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 11px;
    text-align: left;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease, color 130ms ease, transform 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }
`;

const PresetDots = styled.span`
    display: inline-flex;
    flex-shrink: 0;

    i {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
    }

    i + i {
        margin-left: -4px;
    }
`;

const Swatches = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`;

const Swatch = styled.button<{ $color: string }>`
    display: grid;
    place-items: center;
    width: 17px;
    height: 17px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 50%;
    background: ${({$color}) => $color};
    color: #fff;
    cursor: pointer;
    transition: transform 120ms ease, box-shadow 120ms ease;

    &:hover {
        transform: scale(1.15);
        box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.3);
    }
`;

const PreviousColor = styled.button<{ $color: string }>`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 8px 3px 4px;
    border: 1px solid var(--border-color);
    border-radius: 999px;
    background: var(--bg-input);
    color: var(--text-muted);
    font: inherit;
    font-size: 9.5px;
    cursor: pointer;
    transition: border-color 130ms ease, color 130ms ease;

    i {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: ${({$color}) => $color};
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.16);
    }

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`;

const Toc = styled.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`;

const TocLabel = styled.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`;

const TocList = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2px;

    &::before {
        content: "";
        position: absolute;
        top: 12px;
        bottom: 12px;
        left: 5px;
        width: 1px;
        background: var(--border-color);
    }
`;

const TocItem = styled.button<{ $active: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    padding: 6px 6px 6px 17px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.10)" : "transparent"};
    color: ${({$active}) => $active ? "var(--accent-primary)" : "var(--text-muted)"};
    font: inherit;
    font-size: 10.5px;
    text-align: left;
    white-space: nowrap;
    cursor: pointer;
    transition: color 120ms ease, background 120ms ease;

    &::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 50%;
        width: 7px;
        height: 7px;
        border: 1px solid var(--border-color-hover);
        border-radius: 50%;
        background: var(--bg-secondary);
        transform: translateY(-50%);
        transition: background 120ms ease, border-color 120ms ease, box-shadow 120ms ease;
    }

    ${({$active}) => $active && css`
        &::before {
            border-color: var(--accent-primary);
            background: var(--accent-primary);
            box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.16);
        }
    `}

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;

const TocNote = styled.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;

/** A share of something, always drawn the same way so the numbers stay comparable. */
function percent(part: number, whole: number): string {
    return whole > 0 ? `${(part / whole * 100).toFixed(1)}%` : "—";
}

const Gauge = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`;

const GaugeHead = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`;

const Track = styled.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`;

const TrackFill = styled.div<{ $ratio: number; $tone: string }>`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio}) => Math.min(Math.max($ratio, 0), 1) * 100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone}) => $tone};
    transition: width 220ms ease;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`;

const RowText = styled.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`;

const RowEnd = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`;

const Label = styled.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`;

/** A label with its always-global marker, kept on one line. */
const LabelRow = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const Note = styled.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`;

const TagError = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 2px 0;
    font-size: 11px;
    color: var(--danger);

    &::before {
        content: "";
        width: 5px;
        height: 5px;
        flex-shrink: 0;
        border-radius: 50%;
        background: currentColor;
    }
`;

const Value = styled.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`;

const TagDot = styled.span<{ $color: string }>`
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$color}) => $color};
`;

const RenameTagInput = styled.input`
    min-width: 0;
    flex: 1;
    padding: 3px 8px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;
    outline: none;
`;

const SmallButton = styled.button`
    padding: 5px 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`;

const ColorWell = styled.input`
    width: 42px;
    height: 30px;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    cursor: pointer;

    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    &::-webkit-color-swatch {
        border: 0;
        border-radius: 4px;
    }
`;

const ColorCode = styled.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`;

const DangerButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border: 1px solid rgba(248, 113, 113, 0.35);
    border-radius: var(--radius-sm);
    background: transparent;
    color: #fca5a5;
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(248, 113, 113, 0.14);
        color: #fecaca;
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`;

const State = styled.span<{ $on: boolean }>`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on}) => $on ? "#34d399" : "var(--text-muted)"};
`;

const Index = styled.code`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-secondary);
`;

const Toggle = styled.button<{ $on: boolean }>`
    position: relative;
    width: 38px;
    height: 21px;
    flex-shrink: 0;
    border: 1px solid ${({$on}) => $on ? "transparent" : "var(--border-color)"};
    border-radius: 999px;
    background: ${({$on}) => $on ? "var(--accent-gradient)" : "rgba(148, 163, 184, 0.22)"};
    cursor: pointer;
    transition: background 140ms ease, border-color 140ms ease;

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 2px;
    }

    span {
        transform: translateX(${({$on}) => $on ? "17px" : "0"});
    }
`;

const Knob = styled.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`;

const Input = styled.input`
    width: 92px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`;

const IconTrigger = styled.span`
    position: relative;
    display: inline-flex;
`;

const Segmented = styled.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`;

const Segment = styled.button<{ $on: boolean }>`
    padding: 5px 14px;
    border: 1px solid ${({$on}) => $on ? "rgba(var(--accent-rgb), 0.55)" : "transparent"};
    border-radius: var(--radius-sm);
    background: ${({$on}) => $on ? "rgba(var(--accent-rgb), 0.16)" : "transparent"};
    color: ${({$on}) => $on ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 11px;
    font-weight: ${({$on}) => $on ? 600 : 500};
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`;

const RangeInput = styled.input`
    width: 150px;
    accent-color: var(--accent-primary);
`;

const ColumnGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`;

const ColumnCheck = styled.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`;

const KeyButton = styled.button<{ $listening: boolean }>`
    min-width: 92px;
    padding: 4px 10px;
    border: 1px solid ${({$listening}) => $listening ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: ${({$listening}) => $listening ? "rgba(var(--accent-rgb), 0.16)" : "var(--bg-input)"};
    color: ${({$listening}) => $listening ? "var(--text-primary)" : "var(--text-secondary)"};
    font-family: var(--font-mono);
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`;

const ActionButton = styled.button`
    padding: 6px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;

const IconButton = styled.button`
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const PreviewSlot = styled.span`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
    }
`;

const Badge = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`;

const Footnote = styled.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`;

/** A consequence the user should read before flipping a switch, not a quiet footnote. */
const Notice = styled.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`;
