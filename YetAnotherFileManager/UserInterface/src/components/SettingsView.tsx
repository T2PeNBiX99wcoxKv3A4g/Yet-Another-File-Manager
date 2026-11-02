import {useEffect, useState} from "react";
import styled from "styled-components";
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
import {CheckIcon, CrossIcon, PlusIcon} from "./Icons";
import {IconPicker} from "./IconPicker";
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
    {id: "find", label: "Search", note: "Opens the floating search box. Typing a letter in a folder opens it too."},
    {id: "closeTab", label: "Close tab", note: "Closes the tab that is open."},
    {id: "newTab", label: "New tab", note: "Opens the overview in a new tab."},
    {id: "openInNewTab", label: "Open in a new tab", note: "Hold this while clicking a folder."},
];

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
    const defaultView = settings?.defaultView ?? DefaultViewDefaults;

    useEffect(() => {
        void getVisibility().then(setVisibility, () => setVisibility(null));
        void getSettings().then(setSettings, () => setSettings(null));
        void getScheme().then(setSchemeState, () => setSchemeState(false));
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
            setSettings((current) => current ? {...current, linksEnabled: wanted} : current);

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
            <Section>
                <Title>Application</Title>
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
                                {schemeError ? ` ${schemeError}` : ""}
                            </Note>
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

            <Section>
                <Title>Files view (global)</Title>
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

            <Section>
                <Title>Shortcuts</Title>
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

            <Section>
                <Title>Memory</Title>
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

            <Section>
                <Title>Overview</Title>
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

            <Section>
                <Title>Gallery</Title>
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

            <Section>
                <Title>Icons</Title>
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

            <Section>
                <Title>Icons by extension</Title>
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

            <Section>
                <Title>Folder icons</Title>
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

            <Section>
                <Title>Folder index</Title>
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

            <Section>
                <Title>Files</Title>
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

const Page = styled.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 26px 26px 34px;
    max-width: 860px;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & + & {
        margin-top: 30px;
    }
`;

const Title = styled.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`;

const Rows = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow: hidden;
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
    padding: 13px 16px;

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
    font-size: 13px;
    color: var(--text-secondary);
`;

/** A label with its always-global marker, kept on one line. */
const LabelRow = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const Note = styled.span`
    font-size: 11px;
    color: var(--text-muted);
`;

const Value = styled.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
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
`;

const Segment = styled.button<{ $on: boolean }>`
    padding: 5px 14px;
    border: 1px solid ${({$on}) => $on ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: ${({$on}) => $on ? "rgba(59, 130, 246, 0.18)" : "var(--bg-input)"};
    color: ${({$on}) => $on ? "var(--text-primary)" : "var(--text-secondary)"};
    font-size: 11px;
    cursor: pointer;
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
    background: ${({$listening}) => $listening ? "rgba(59, 130, 246, 0.16)" : "var(--bg-input)"};
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
