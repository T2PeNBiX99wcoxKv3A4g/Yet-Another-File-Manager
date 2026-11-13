import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import {loadStrings, type LocalizationKey, type Translate, useTranslation} from "@photino-net-utils/bridge";
import styled, {css} from "styled-components";
import {DefaultViewDefaults, type FileVisibility, getVisibility, type IndexTasks, listIndexTasks} from "../api/files";
import {clearIconCache, useIconFile, useMediaUrl} from "../api/icons";
import {
    type AppSettings,
    type ArchiveStatus,
    type DefaultManagerStatus,
    getArchiveStatus,
    getDefaultManagerStatus,
    getDefaultProtectedPaths,
    getSettings,
    registerArchiveHandler,
    saveSettings,
    setDefaultManager,
    setEntryIcon,
    unregisterArchiveHandler,
} from "../api/settings";
import type {AppInfo} from "../api/system";
import {
    cancelUpdateDownload,
    checkUpdate,
    EmptyScheme,
    getMemory,
    getScheme,
    getStartup,
    getUpdateStatus,
    installUpdate,
    type MemoryUsage,
    onUpdateChangelog,
    onUpdateProgress,
    openLogsFolder,
    openReleasePage,
    openUrl,
    type SchemeStatus,
    setScheme,
    setStartup as setStartupEntry,
    startUpdateDownload,
    type StartupStatus,
    trimMemory,
    type UpdateCheck
} from "../api/system";
import {requestFile, requestFolder} from "../folder-picker";
import {SelectMenu} from "./SelectMenu";
import {type PageFind, useTextSearch} from "../ui/textSearch";
import {createTag, deleteTag, listTags, renameTag, setTagColor, type TagCatalogEntry} from "../api/tags";
import {CheckIcon, ChevronRightIcon, CrossIcon, PlusIcon, TrashIcon, VideoIcon} from "./Icons";
import {IconPicker} from "./IconPicker";
import {DefaultTagColor} from "./TagPicker";
import {DefaultAccentColor, DefaultSecondaryColor, normalizeColor} from "../theme";
import {comboOf, DefaultShortcuts, prettyShortcut, type ShortcutMap} from "../shortcuts";
import {BuiltinIcon} from "../icons/fileTypes";
import {ThemePresets} from "../themePresets";
import {GlobalTag} from "./GlobalTag";
import {ViewColumns} from "./FileList";
import {BuiltInBackgrounds, BuiltInVideos} from "../backgrounds/concepts";
import {isVideoPath} from "./Wallpaper";
import {
    baseName,
    DefaultTimePattern,
    formatBytes,
    formatDateWith,
    isRemoteUrl,
    plural,
    usageTone
} from "../utils/format";
import {readStoredJson, writeStoredJson} from "../storage";
import {FontRoles, listFonts} from "../fonts";
import {FontPicker} from "./FontPicker";
import {setSharePort} from "../api/share";

interface SettingsViewProps {
    appInfo: AppInfo | null;
    /** A section the footer's update dot asked for. */
    focusSection?: string | null;
    onSettingsChanged: () => void;
    /** The page search; matching text is highlighted, other sections dim or hide. */
    find?: PageFind | null;
    /** Reports how many sections matched, for the find bar's counter. */
    onSearchMatches?: (count: number) => void;
}

/** The actions the interface can bind; the ids are what settings.toml stores. */
const ShortcutRows: { id: keyof ShortcutMap; label: LocalizationKey; note: LocalizationKey }[] = [
    {
        id: "goBack",
        label: "Back",
        note: "The previous folder in this tab. The mouse back button and the browser back key always work."
    },
    {
        id: "goForward",
        label: "Forward",
        note: "The next folder in this tab. The mouse forward button and the browser forward key always work."
    },
    {id: "goUp", label: "Up one level", note: "Opens the folder that contains the current one."},
    {id: "home", label: "Home folder", note: "Jumps to the user's home folder, like Alt+Home in Dolphin."},
    {id: "find", label: "Search", note: "Opens the floating search box. Typing a letter in a folder opens it too."},
    {id: "location", label: "Edit location", note: "Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin."},
    {id: "closeTab", label: "Close tab", note: "Closes the tab that is open."},
    {id: "newTab", label: "New tab", note: "Opens the overview in a new tab."},
    {id: "reopenTab", label: "Reopen closed tab", note: "Brings back the tab you closed last, folder and all."},
    {id: "nextTab", label: "Next tab", note: "Cycles to the next tab."},
    {id: "previousTab", label: "Previous tab", note: "Cycles to the previous tab."},
    {id: "copy", label: "Copy", note: "Ctrl+D copies too, following KDE's file manager."},
    {id: "cut", label: "Cut", note: "Moves the selection on the next paste."},
    {id: "paste", label: "Paste", note: "Copies or moves the clipboard's files into the current folder."},
    {id: "undo", label: "Undo", note: "Undoes the last file operation in this session."},
    {id: "redo", label: "Redo", note: "Repeats the operation that was just undone."},
    {id: "delete", label: "Move to the recycle bin", note: "Delete is Del by default, not Ctrl+D."},
    {
        id: "deletePermanently",
        label: "Delete permanently",
        note: "Bypasses the recycle bin; Dolphin uses Shift+Delete."
    },
    {id: "rename", label: "Rename", note: "Renames the single selected entry."},
    {id: "selectAll", label: "Select all", note: "Selects every entry in the current folder."},
    {
        id: "invertSelection",
        label: "Invert selection",
        note: "Selects everything that is not selected; Dolphin uses Ctrl+Shift+A."
    },
    {id: "open", label: "Open", note: "Opens the selected folder or file."},
    {id: "newFolder", label: "New folder", note: "Creates a folder in the current directory. F10 also works."},
    {id: "properties", label: "Properties", note: "Opens the shell properties sheet."},
    {id: "iconsView", label: "Icons view", note: "Switches the folder to the grid view."},
    {id: "detailsView", label: "Details view", note: "Switches the folder to the list view."},
    {
        id: "terminal",
        label: "Open terminal",
        note: "Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel."
    },
    {
        id: "hidden",
        label: "Show hidden files",
        note: "Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer."
    },
    {id: "splitView", label: "Split view", note: "Shows the next file tab beside the current one; F3 in Dolphin."},
    {id: "openInNewTab", label: "Open in a new tab", note: "Hold this while clicking a folder."},
];

/** The language a fresh install uses until the picker changes it. */
const DefaultLanguage = "en";

/** What the floating update panel shows while the installer is fetched and run. */
interface UpdateDialogState {
    phase: "changelog" | "downloading" | "ready" | "cancelled" | "error" | "installing";
    changelog: string;
    downloaded: number;
    total: number;
    percent: number;
    error?: string;
}

/** The choices offered for every timestamp; "custom" reveals the pattern box. */
const TimeModes: { id: string; label: LocalizationKey }[] = [
    {id: "system", label: "System"},
    {id: "24", label: "24-hour"},
    {id: "12", label: "12-hour"},
    {id: "custom", label: "Custom"},
];

/** A fixed afternoon so the preview shows both the date and the hour clearly. */
const TimePreviewSample = new Date(2026, 10, 5, 16, 8).getTime();

/** The stored value the shared localization library reads as "follow the operating system". */
const SystemLanguage = "system";

/** Endonyms, so the picker reads the same whichever language is active. */
const LocaleNames: Record<string, string> = {
    en: "English",
    "zh-CN": "简体中文",
    "zh-TW": "繁體中文",
    ja: "日本語",
};

/** The sections the table of contents jumps to; the ids are what the list shows. */
const SettingSections: { id: string; label: LocalizationKey }[] = [
    {id: "application", label: "Application"},
    {id: "startup", label: "Startup"},
    {id: "fonts", label: "Fonts"},
    {id: "time", label: "Time format"},
    {id: "updates", label: "Updates"},
    {id: "colors", label: "Colors"},
    {id: "background", label: "Background"},
    {id: "safety", label: "Safety"},
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
    {id: "indexing", label: "Index tasks"},
    {id: "files", label: "Files"},
];

type ColorRole = "accent" | "secondary";

/** Colours the user applied before, most recent first; kept locally like the recycle bin sort. */
type RecentColors = Record<ColorRole, string[]>;

const RecentColorsKey = "yafm.colors.recent";

function readRecentColors(): RecentColors {
    const saved = readStoredJson<Partial<Record<ColorRole, string[]>>>(RecentColorsKey);

    return {
        accent: (saved?.accent ?? []).filter((color) => typeof color === "string").slice(0, 8),
        secondary: (saved?.secondary ?? []).filter((color) => typeof color === "string").slice(0, 8),
    };
}

export function SettingsView({
                                 appInfo,
                                 focusSection,
                                 onSettingsChanged,
                                 find,
                                 onSearchMatches
                             }: SettingsViewProps) {
    const t = useTranslation();
    const [languages, setLanguages] = useState<string[]>([]);
    const [visibility, setVisibility] = useState<FileVisibility | null>(null);
    const [settings, setSettings] = useState<AppSettings | null>(null);
    const [folderIcon, setFolderIcon] = useState<{ folder: string; icon: string } | null>(null);
    const [newExtension, setNewExtension] = useState("");
    const [newIcon, setNewIcon] = useState<string>("file");
    const [pickingIcon, setPickingIcon] = useState(false);
    const [busy, setBusy] = useState(false);
    const [memory, setMemory] = useState<MemoryUsage | null>(null);
    const [scheme, setSchemeState] = useState<SchemeStatus>(EmptyScheme);
    const [schemeBusy, setSchemeBusy] = useState(false);
    const [schemeError, setSchemeError] = useState<string | null>(null);
    const [archiveStatus, setArchiveStatus] = useState<ArchiveStatus | null>(null);
    const [defaultManagerStatus, setDefaultManagerStatus] = useState<DefaultManagerStatus | null>(null);
    const [archiveBusy, setArchiveBusy] = useState(false);
    const [archiveError, setArchiveError] = useState<string | null>(null);
    const [defaultManagerBusy, setDefaultManagerBusy] = useState(false);
    const [defaultManagerError, setDefaultManagerError] = useState<string | null>(null);
    const [capturing, setCapturing] = useState<string | null>(null);
    const [capturingGlobal, setCapturingGlobal] = useState(false);
    const [tags, setTags] = useState<TagCatalogEntry[]>([]);
    const [editingTag, setEditingTag] = useState<{ name: string; value: string } | null>(null);
    const [tagBusy, setTagBusy] = useState(false);
    const [tagError, setTagError] = useState<string | null>(null);
    const [newTagName, setNewTagName] = useState("");
    const [newTagColor, setNewTagColor] = useState(DefaultTagColor);
    const [ruleDraft, setRuleDraft] = useState<{ from: string; value: string } | null>(null);
    const [directoryRuleDraft, setDirectoryRuleDraft] = useState<{ from: string; value: string } | null>(null);
    const [newProtectedRule, setNewProtectedRule] = useState("");
    const [newDirectoryRule, setNewDirectoryRule] = useState("");
    const [timeDraft, setTimeDraft] = useState<string | null>(null);
    const [recentColors, setRecentColors] = useState<RecentColors>(readRecentColors);
    const [pickerSizeDraft, setPickerSizeDraft] = useState<{ width?: string; height?: string }>({});
    const [draftPreset, setDraftPreset] = useState<{ name: string; accent: string; secondary: string } | null>(null);
    const [updateState, setUpdateState] = useState<UpdateCheck | null>(null);
    const [updateBusy, setUpdateBusy] = useState(false);
    const [updateError, setUpdateError] = useState<string | null>(null);
    const [updateDialog, setUpdateDialog] = useState<UpdateDialogState | null>(null);
    const [colorStart, setColorStart] = useState<{ role: ColorRole; color: string } | null>(null);
    const [activeSection, setActiveSection] = useState(SettingSections[0].id);
    const [fonts, setFonts] = useState<string[]>([]);
    const [portDraft, setPortDraft] = useState<string | null>(null);
    const [startup, setStartup] = useState<StartupStatus | null>(null);
    const [startupError, setStartupError] = useState<string | null>(null);
    const [startupBusy, setStartupBusy] = useState(false);
    const [backgroundUrl, setBackgroundUrl] = useState("");
    const page = useRef<HTMLDivElement | null>(null);
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    const defaultView = settings?.defaultView ?? DefaultViewDefaults;
    const customPresets = settings?.themePresets ?? [];
    const isWindows = appInfo?.platform === "windows";
    const archiveRegistered = isWindows
        ? archiveStatus
            ? archiveStatus.registered && archiveStatus.pathMatches
            : false
        : settings?.archiveHandler ?? false;
    const archivePresent = archiveStatus?.registered ?? settings?.archiveHandler ?? false;
    const defaultManagerRegistered = isWindows
        ? defaultManagerStatus
            ? defaultManagerStatus.registered && defaultManagerStatus.pathMatches
            : false
        : settings?.defaultFileManager ?? false;
    const schemeActive = isWindows
        ? scheme.registered && scheme.pathMatches
        : settings?.linksEnabled ?? false;

    // The shared page search highlights matches and dims or hides sections without any.
    useTextSearch(page, find ?? null, "section", onSearchMatches ?? (() => undefined), [settings]);

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

    // The footer's update dot opens this page straight at the update section.
    useEffect(() => {
        if (focusSection) jumpTo(focusSection);
    }, [focusSection]);

    // The translation files that exist, for the language picker; the list does not change at runtime.
    useEffect(() => {
        void loadStrings().then((payload) => setLanguages(payload.available), () => setLanguages([]));
    }, []);

    // The system font list is read once; a font installed later needs a restart to appear.
    useEffect(() => {
        void listFonts().then(setFonts, () => setFonts([]));
    }, []);

    // The startup entry lives outside the settings, so its real state is read from the host.
    useEffect(() => {
        void getStartup().then(setStartup, () => setStartup(null));
    }, []);

    // The footer already asked on start, so this normally answers from the backend's cache.
    useEffect(() => {
        void getUpdateStatus().then(setUpdateState, () => undefined);
    }, []);

    useEffect(() => {
        void getVisibility().then(setVisibility, () => setVisibility(null));
        void getSettings().then(setSettings, () => setSettings(null));
        void getScheme().then(setSchemeState, () => setSchemeState(EmptyScheme));
        void getArchiveStatus().then(setArchiveStatus, () => setArchiveStatus(null));
        void getDefaultManagerStatus().then(setDefaultManagerStatus, () => setDefaultManagerStatus(null));
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
        // A colour well can fire the same value over and over while its dialog is open; saving
        // those would re-render the input and keep the dialog feeding it.
        if ((Object.keys(patch) as (keyof AppSettings)[]).every((key) => next[key] === settings[key]))
            return;

        setSettings(next);
        clearIconCache();
        setSettings(await saveSettings(next));
        // The window keeps its own copy of the settings; a toggle here has to reach it too.
        onSettingsChanged();
    };

    /** Adds a picture or video to the gallery and selects it right away. */
    const addBackground = async (extensions: string[]) => {
        const file = await requestFile(extensions);
        if (!file) return;

        const known = settings?.backgroundCustom ?? [];
        await update({
            backgroundCustom: known.includes(file) ? known : [...known, file],
            backgroundSource: `file:${file}`,
        });
    };

    /** Adds a picture or video by URL; the source is stored with a "url:" marker. */
    const addBackgroundUrl = async () => {
        const url = backgroundUrl.trim();
        if (!settings || !isRemoteUrl(url)) return;

        const known = settings.backgroundCustom ?? [];
        setBackgroundUrl("");
        await update({
            backgroundCustom: known.includes(url) ? known : [...known, url],
            backgroundSource: `url:${url}`,
        });
    };

    /** Removing the selected wallpaper falls back to the plain window. */
    const removeBackground = (path: string) => {
        if (!settings) return;

        const active = settings.backgroundSource;
        void update({
            backgroundCustom: settings.backgroundCustom.filter((item) => item !== path),
            backgroundSource: active === `file:${path}` || active === `url:${path}` || active === path
                ? null
                : active,
        });
    };

    /** Adds the picked folder to the protected list as a "folder and everything below" rule. */
    const addProtectedFolder = async () => {
        if (!settings) return;

        const folder = await requestFolder();
        if (!folder) return;

        const separator = appInfo?.platform === "windows" ? "\\" : "/";
        const base = folder.replace(/[\\/]+$/, "");
        const pattern = `${base}${separator}**`;

        if (settings.protectedPaths.includes(pattern))
            return;

        await update({protectedPaths: [...settings.protectedPaths, pattern]});
    };

    /** Adds a rule exactly as typed, so a name or glob does not need a folder picker. */
    const addProtectedRule = () => {
        const value = newProtectedRule.trim();
        if (!settings || !value || settings.protectedPaths.includes(value)) return;

        setNewProtectedRule("");
        void update({protectedPaths: [...settings.protectedPaths, value]});
    };

    /** Saves the edited rule when the field loses focus or Enter is pressed. */
    const commitRule = () => {
        if (!settings || !ruleDraft) return;

        const value = ruleDraft.value.trim();
        const from = ruleDraft.from;
        setRuleDraft(null);

        if (value.length === 0 || value === from)
            return;

        void update({protectedPaths: settings.protectedPaths.map((item) => item === from ? value : item)});
    };

    const removeProtected = (pattern: string) => {
        if (!settings) return;

        void update({protectedPaths: settings.protectedPaths.filter((item) => item !== pattern)});
    };

    /** Replaces the list with the platform defaults, for when every rule was removed by mistake. */
    const restoreProtectedDefaults = async () => {
        const paths = await getDefaultProtectedPaths();
        if (paths.length > 0)
            await update({protectedPaths: paths});
    };

    const commitDirectoryRule = () => {
        if (!settings || !directoryRuleDraft) return;

        const value = directoryRuleDraft.value.trim();
        const from = directoryRuleDraft.from;
        setDirectoryRuleDraft(null);
        if (!value || value === from) return;

        void update({
            directoryIndexBlacklist: settings.directoryIndexBlacklist
                .map((item) => item === from ? value : item)
        });
    };

    const addDirectoryRule = () => {
        const value = newDirectoryRule.trim();
        if (!settings || !value || settings.directoryIndexBlacklist.includes(value)) return;

        setNewDirectoryRule("");
        void update({directoryIndexBlacklist: [...settings.directoryIndexBlacklist, value]});
    };

    /** Adds the picked folder and its subtree as a blacklist rule. */
    const addDirectoryFolder = async () => {
        if (!settings) return;

        const folder = await requestFolder();
        if (!folder) return;

        const separator = appInfo?.platform === "windows" ? "\\" : "/";
        const base = folder.replace(/[\\/]+$/, "");
        const pattern = `${base}${separator}**`;

        if (settings.directoryIndexBlacklist.includes(pattern))
            return;

        await update({directoryIndexBlacklist: [...settings.directoryIndexBlacklist, pattern]});
    };

    const removeDirectoryRule = (pattern: string) => {
        if (!settings) return;
        void update({directoryIndexBlacklist: settings.directoryIndexBlacklist.filter((item) => item !== pattern)});
    };

    const restoreDirectoryRules = () => {
        void update({directoryIndexBlacklist: ["**/uv/cache/**", "**/scoop/buckets/**"]});
    };

    /** Saves the custom time pattern when the field loses focus or Enter is pressed. */
    const commitTimePattern = () => {
        if (!settings || timeDraft === null) return;

        const value = timeDraft.trim() || DefaultTimePattern;
        setTimeDraft(null);

        if (value !== settings.timeFormatPattern)
            void update({timeFormatPattern: value});
    };

    /** Keeps the last few applied colours, so a palette click and a revert are one click each. */
    const rememberColor = (role: ColorRole, color: string) => {
        setRecentColors((current) => {
            const list = [
                color,
                ...current[role].filter((item) => item.toLowerCase() !== color.toLowerCase()),
            ].slice(0, 8);

            const next = {...current, [role]: list};
            writeStoredJson(RecentColorsKey, next);
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

    /** Reads the published version file and shows whether this build is behind. */
    const checkNow = async () => {
        setUpdateBusy(true);
        setUpdateError(null);

        try {
            setUpdateState(await checkUpdate());
        } catch {
            // The host answers a failed check with its own key; the interface has the sentence.
            setUpdateError(t("Could not check for updates."));
        } finally {
            setUpdateBusy(false);
        }
    };

    /** Opens the update panel and starts fetching the installer; progress arrives as events. */
    const downloadAndInstall = async () => {
        setUpdateError(null);
        setUpdateDialog({phase: "changelog", changelog: "", downloaded: 0, total: 0, percent: 0});

        try {
            const ack = await startUpdateDownload();
            if (!ack.ok) failDownload(ack.error ?? "");
        } catch (reason) {
            failDownload(reason instanceof Error ? reason.message : String(reason));
        }
    };

    const failDownload = (message: string) =>
        setUpdateDialog((current) => current ? {...current, phase: "error", error: message} : current);

    const cancelDownload = async () => {
        try {
            await cancelUpdateDownload();
        } catch (reason) {
            setUpdateError(reason instanceof Error ? reason.message : String(reason));
        }
    };

    /** Runs the installer the download left behind; the app closes from there. */
    const installNow = async () => {
        setUpdateDialog((current) => current ? {...current, phase: "installing"} : current);

        try {
            const ack = await installUpdate();
            if (!ack.ok) failDownload(ack.error ?? t("The update failed."));
        } catch (reason) {
            failDownload(reason instanceof Error ? reason.message : String(reason));
        }
    };

    // The host reports the download through progress events, and the changelog once it is fetched.
    useEffect(() => onUpdateProgress((progress) => setUpdateDialog((current) => current
        ? {
            ...current,
            phase: progress.phase,
            downloaded: progress.downloaded,
            total: progress.total,
            percent: progress.percent,
            error: progress.error ?? current.error
        }
        : current)), []);

    useEffect(() => onUpdateChangelog((changelog) => setUpdateDialog((current) =>
        current ? {...current, changelog: changelog.text} : current)), []);

    /** Saves the current pair under the name in the draft, or the two colours when it is blank. */
    const savePreset = async () => {
        if (!settings || !draftPreset) return;

        const name = draftPreset.name.trim()
            || `${draftPreset.accent.toUpperCase()} / ${draftPreset.secondary.toUpperCase()}`;
        const presets = [...settings.themePresets, {
            name,
            accent: draftPreset.accent,
            secondary: draftPreset.secondary
        }];

        setDraftPreset(null);
        await update({themePresets: presets});
    };

    const removePreset = async (index: number) => {
        if (!settings) return;

        await update({themePresets: settings.themePresets.filter((_, position) => position !== index)});
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

    const addTag = async () => {
        const name = newTagName.trim();
        if (!name || tagBusy) return;

        setTagBusy(true);
        setTagError(null);

        try {
            setTags(await createTag(name, newTagColor));
            setNewTagName("");
        } catch {
            setTagError(t("Could not add the tag."));
        } finally {
            setTagBusy(false);
        }
    };

    const recolorTag = async (name: string, color: string) => {
        setTags((current) => current.map((tag) => tag.name === name ? {...tag, color} : tag));

        if (!await setTagColor(name, color))
            setTagError(t("Could not change the tag's color."));
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

    /// <summary>Applies the choice now and remembers it, so the next launch can put a lost entry back.</summary>
    const toggleScheme = async () => {
        if (schemeBusy) return;

        const wanted = !schemeActive;
        setSchemeBusy(true);
        setSchemeError(null);

        try {
            const status = await setScheme(wanted);
            const active = status.registered && status.pathMatches;

            setSchemeState(status);
            setSettings((current) => current ? {...current, linksEnabled: active} : current);
            // The window keeps its own copy of the settings; a save from elsewhere would otherwise
            // write the old link choice back.
            onSettingsChanged();

            if (active !== wanted)
                setSchemeError(wanted
                    ? "Windows did not accept the registration. Try again."
                    : "The registration is still there. Try turning it off again.");
        } catch {
            setSchemeError("The request to Windows failed. Try again.");
        } finally {
            setSchemeBusy(false);
        }
    };

    const changeDefaultManager = async () => {
        if (defaultManagerBusy || !settings) return;

        const enable = !defaultManagerRegistered;

        setDefaultManagerBusy(true);
        setDefaultManagerError(null);

        try {
            // A dedicated request, so re-registering is not skipped as "the setting did not change"
            // when the registry still points at another copy.
            const status = await setDefaultManager(enable);
            setDefaultManagerStatus(status);

            const active = isWindows ? status.registered && status.pathMatches : enable;
            setSettings((current) => current ? {...current, defaultFileManager: active} : current);
            onSettingsChanged();

            if (isWindows && active !== enable)
                setDefaultManagerError(enable
                    ? "Windows did not accept the folder registration. Try again."
                    : "The registration is still there. Try turning it off again.");
        } catch {
            setDefaultManagerError("The request to Windows failed. Try again.");
        } finally {
            setDefaultManagerBusy(false);
        }
    };

    const registerArchives = async () => {
        if (archiveBusy) return;
        setArchiveBusy(true);
        setArchiveError(null);

        try {
            const status = await registerArchiveHandler();
            setArchiveStatus(status);
            const active = status.registered && status.pathMatches;
            setSettings((current) => current ? {...current, archiveHandler: active} : current);
            onSettingsChanged();

            if (!active)
                setArchiveError("Windows did not accept the archive registration. Try again.");
        } catch {
            setArchiveError("The request to Windows failed. Try again.");
        } finally {
            setArchiveBusy(false);
        }
    };

    const unregisterArchives = async () => {
        if (archiveBusy) return;
        setArchiveBusy(true);
        setArchiveError(null);

        try {
            const status = await unregisterArchiveHandler();
            setArchiveStatus(status);
            setSettings((current) => current ? {...current, archiveHandler: false} : current);
            onSettingsChanged();

            if (status.registered)
                setArchiveError("The registration is still there. Try turning it off again.");
        } catch {
            setArchiveError("The request to Windows failed. Try again.");
        } finally {
            setArchiveBusy(false);
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

    // The global hotkey uses the same recorder, but stores a single combination.
    useEffect(() => {
        if (!capturingGlobal) return;

        const record = (event: KeyboardEvent) => {
            event.preventDefault();
            event.stopPropagation();

            if (event.key === "Escape") {
                setCapturingGlobal(false);
                return;
            }

            const combo = comboOf(event);
            if (!combo) return;

            setCapturingGlobal(false);
            void update({globalHotkey: combo});
        };

        window.addEventListener("keydown", record, true);
        return () => window.removeEventListener("keydown", record, true);
    }, [capturingGlobal, settings]);

    /** Recent items are a display preference, stored like every other setting. */
    const setRecentLimit = async (limit: number) => {
        await update({recentLimit: Math.min(Math.max(limit, 0), 50)});
    };

    /** The picker size stays editable while typing; it is clamped only when the field is left. */
    const commitPickerSize = (field: "width" | "height", rawValue?: string) => {
        const raw = rawValue ?? pickerSizeDraft[field];
        if (raw === undefined) return;

        const value = Number(raw);
        const next = field === "width"
            ? {pickerWindowWidth: Math.min(4000, Math.max(640, Number.isFinite(value) && value > 0 ? value : 1200))}
            : {pickerWindowHeight: Math.min(3000, Math.max(400, Number.isFinite(value) && value > 0 ? value : 800))};

        setPickerSizeDraft((current) => ({...current, [field]: undefined}));
        void update(next);
    };

    /** An empty field means "pick a free port"; the host restarts the browser server either way. */
    /** A custom port below 1 is not a port; the host falls back to a random one. */
    const commitSharePort = async (raw: string) => {
        const value = Number(raw.trim());
        const port = Number.isFinite(value) && value >= 1 && value <= 65535 ? Math.round(value) : null;

        setPortDraft(null);
        await update({sharePortMode: "custom", sharePort: port});
        await setSharePort(port, "custom");
    };

    const changeSharePortMode = async (mode: string) => {
        const custom = mode === "custom";
        const port = custom ? settings?.sharePort ?? 8080 : null;

        await update({sharePortMode: custom ? "custom" : "random", sharePort: port});
        await setSharePort(port, custom ? "custom" : "random");
    };

    const changeStartup = async (mode: string) => {
        const next = mode === "shortcut" || mode === "task" ? mode : "none";

        setStartupBusy(true);
        setStartupError(null);
        try {
            const result = await setStartupEntry(next);
            setStartup(result);
            setStartupError(result.error);

            if (!result.error)
                await update({startupMode: next});
        } finally {
            setStartupBusy(false);
        }
    };

    const saveGallery = async (paths: string[]) => {
        await update({galleryRoots: paths.length > 0 ? paths : null});
    };

    const addGalleryRoot = async () => {
        const folder = await requestFolder();
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
            const folder = await requestFolder();
            if (!folder) return;

            const icon = await requestFile([".png", ".ico", ".svg", ".jpg", ".jpeg", ".webp"]);
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

    const setFont = async (id: string, family: string | null) => {
        const fonts = {...settings?.fonts};

        if (family) fonts[id] = family;
        else delete fonts[id];

        await update({fonts});
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
                            <Label>{t("Version")}</Label>
                            <Value>{appInfo ? `v${appInfo.version}` : "—"}</Value>
                        </Row>
                        <Row>
                            <Label>{t("Platform")}</Label>
                            <Value>{appInfo?.platform ?? "—"}</Value>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("Language")}</Label>
                                <Note>{t("The language the interface uses. English is the default; the system option follows the operating system.")}</Note>
                            </RowText>
                            <RowEnd>
                                <LanguagePicker
                                    disabled={!settings}
                                    onChange={(code) => void update({language: code})}
                                    options={[SystemLanguage, ...(languages.length > 0 ? languages : [DefaultLanguage])]}
                                    value={settings?.language ?? DefaultLanguage}
                                />
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("Picker window size")}</Label>
                                <Note>{t("The size the folder and file picker opens at. Width and height are in pixels.")}</Note>
                            </RowText>
                            <RowEnd>
                                <Input
                                    inputMode="numeric"
                                    onBlur={(event) => commitPickerSize("width", event.currentTarget.value)}
                                    onChange={(event) => setPickerSizeDraft((current) => ({
                                        ...current,
                                        width: event.target.value.replace(/\D/g, ""),
                                    }))}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter") event.currentTarget.blur();
                                    }}
                                    value={pickerSizeDraft.width ?? String(settings?.pickerWindowWidth ?? 1200)}
                                />
                                <Value>×</Value>
                                <Input
                                    inputMode="numeric"
                                    onBlur={(event) => commitPickerSize("height", event.currentTarget.value)}
                                    onChange={(event) => setPickerSizeDraft((current) => ({
                                        ...current,
                                        height: event.target.value.replace(/\D/g, ""),
                                    }))}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter") event.currentTarget.blur();
                                    }}
                                    value={pickerSizeDraft.height ?? String(settings?.pickerWindowHeight ?? 800)}
                                />
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("Web server port")}</Label>
                                <Note>{t("Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.")}</Note>
                            </RowText>
                            <RowEnd>
                                <SelectMenu
                                    disabled={!settings}
                                    onChange={(value) => void changeSharePortMode(value)}
                                    options={[
                                        {value: "random", label: t("Random")},
                                        {value: "custom", label: t("Custom port")},
                                    ]}
                                    value={settings?.sharePortMode ?? "random"}
                                    width={160}
                                />
                            </RowEnd>
                        </Row>
                        {settings?.sharePortMode === "custom" && (
                            <Row>
                                <RowText>
                                    <Label>{t("Custom port")}</Label>
                                    <Note>{t("A number from 1 to 65535. If it is already in use the app asks for a free port instead.")}</Note>
                                </RowText>
                                <RowEnd>
                                    <Input
                                        inputMode="numeric"
                                        onBlur={(event) => void commitSharePort(event.currentTarget.value)}
                                        onChange={(event) => setPortDraft(event.target.value.replace(/\D/g, ""))}
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter") event.currentTarget.blur();
                                        }}
                                        placeholder="8080"
                                        value={portDraft ?? (settings?.sharePort ? String(settings.sharePort) : "")}
                                    />
                                </RowEnd>
                            </Row>
                        )}
                        <Row>
                            <RowText>
                                <Label>{t("Link paths")}</Label>
                                <Note>{t("Relative links keep working when the link and its target move together. Absolute links always store the full target path.")}</Note>
                            </RowText>
                            <RowEnd>
                                <SelectMenu
                                    disabled={!settings}
                                    onChange={(value) => void update({linkPathMode: value})}
                                    options={[
                                        {value: "relative", label: t("Relative")},
                                        {value: "absolute", label: t("Absolute")},
                                    ]}
                                    value={settings?.linkPathMode ?? "relative"}
                                    width={160}
                                />
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("Global hotkey")}</Label>
                                <Note>{t("Brings the window forward from anywhere while the app is running. Empty means no global shortcut.")}</Note>
                            </RowText>
                            <RowEnd>
                                <KeyButton
                                    $listening={capturingGlobal}
                                    disabled={!settings}
                                    onClick={() => setCapturingGlobal(true)}
                                    type="button"
                                >
                                    {capturingGlobal
                                        ? t("Press a key…")
                                        : settings?.globalHotkey
                                            ? prettyShortcut(settings.globalHotkey)
                                            : t("None")}
                                </KeyButton>
                                {settings?.globalHotkey && (
                                    <SmallButton onClick={() => void update({globalHotkey: null})} type="button">
                                        {t("Clear")}
                                    </SmallButton>
                                )}
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("Open yafm:// links")}</Label>
                                <Note>
                                    {t("Registers this app for yafm:// links, for the current user only. Turning it on writes this copy's path; starting the app never touches the registry.")}
                                </Note>
                                {scheme.registered && !scheme.pathMatches && (
                                    <TagError>
                                        {t("The registered path points to {path}. Register again to use this build.",
                                            {path: scheme.registeredPath ?? "?"})}
                                    </TagError>
                                )}
                                {schemeError && <TagError>{schemeError}</TagError>}
                            </RowText>
                            <RowEnd>
                                <State $on={schemeActive}>{schemeActive ? t("Active") : t("Off")}</State>
                                <Toggle
                                    $on={schemeActive}
                                    disabled={schemeBusy}
                                    onClick={() => void toggleScheme()}
                                    title={schemeActive ? t("Stop opening yafm:// links") : t("Open yafm:// links with this app")}
                                    type="button"
                                >
                                    <Knob/>
                                </Toggle>
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("Use as the default file manager")}</Label>
                                <Note>
                                    {t("Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.")}
                                </Note>
                                {defaultManagerStatus?.registered && !defaultManagerStatus.pathMatches && (
                                    <TagError>
                                        {t("The registered path points to {path}. Register again to use this build.",
                                            {path: defaultManagerStatus.registeredPath ?? "?"})}
                                    </TagError>
                                )}
                                {defaultManagerError && <TagError>{defaultManagerError}</TagError>}
                            </RowText>
                            <RowEnd>
                                <State $on={defaultManagerRegistered}>
                                    {defaultManagerRegistered ? t("Active") : t("Off")}
                                </State>
                                <Toggle
                                    $on={defaultManagerRegistered}
                                    disabled={!settings || defaultManagerBusy}
                                    onClick={() => void changeDefaultManager()}
                                    title={defaultManagerRegistered
                                        ? t("Stop using this app for folders")
                                        : t("Use this app for folders")}
                                    type="button"
                                >
                                    <Knob/>
                                </Toggle>
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("Open archives with this app")}</Label>
                                <Note>
                                    {t("Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.")}
                                </Note>
                                <Note>
                                    {t("When this is off, opening an archive uses the system's default application instead.")}
                                </Note>
                                {archiveStatus?.registered && !archiveStatus.pathMatches && (
                                    <TagError>
                                        {t("The registered path points to {path}. Register again to use this build.",
                                            {path: archiveStatus.registeredPath ?? "?"})}
                                    </TagError>
                                )}
                                {archiveError && <TagError>{archiveError}</TagError>}
                            </RowText>
                            <RowEnd>
                                <State $on={archiveRegistered}>
                                    {archiveRegistered ? t("Active") : t("Off")}
                                </State>
                                <ActionButton
                                    disabled={!settings || archiveBusy || archiveRegistered}
                                    onClick={() => void registerArchives()}
                                    type="button"
                                >
                                    {t("Register")}
                                </ActionButton>
                                {appInfo?.platform === "windows" && (
                                    <ActionButton
                                        onClick={() => void openUrl("ms-settings:defaultapps")}
                                        type="button"
                                    >
                                        {t("Default apps…")}
                                    </ActionButton>
                                )}
                                <DangerButton
                                    disabled={!settings || archiveBusy || !archivePresent}
                                    onClick={() => void unregisterArchives()}
                                    type="button"
                                >
                                    {t("Unregister")}
                                </DangerButton>
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("Reopen the tabs that were open")}</Label>
                                <Note>
                                    {t("Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.")}
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

                <Section ref={anchor("startup")}>
                    <Head
                        note="How the app joins your login session, and whether it opens quietly in the tray."
                        title="Startup"
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <Label>{t("Start with the computer")}</Label>
                                <Note>{t("A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.")}</Note>
                                {startupError && <TagError>{startupError}</TagError>}
                                {startup && !startup.supported &&
                                    <TagError>{t("This platform cannot create a per-user startup entry.")}</TagError>}
                            </RowText>
                            <RowEnd>
                                <SelectMenu
                                    disabled={!settings || startupBusy || (startup !== null && !startup.supported)}
                                    onChange={(value) => void changeStartup(value)}
                                    options={[
                                        {value: "none", label: t("None")},
                                        {value: "shortcut", label: t("Shortcut")},
                                        {value: "task", label: t("Scheduled task")},
                                    ]}
                                    value={startup?.mode ?? settings?.startupMode ?? "none"}
                                    width={170}
                                />
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("Start hidden in the tray")}</Label>
                                <Note>{t("Launch straight to the tray icon instead of showing the window. The tray menu opens it again.")}</Note>
                            </RowText>
                            <RowEnd>
                                <Toggle
                                    $on={settings?.startHidden ?? false}
                                    disabled={!settings}
                                    onClick={() => void update({startHidden: !settings?.startHidden})}
                                    type="button"
                                >
                                    <Knob/>
                                </Toggle>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("fonts")}>
                    <Head
                        note="Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face."
                        title="Fonts"
                    />
                    <Rows>
                        {FontRoles.map((role) => (
                            <Row key={role.id}>
                                <RowText>
                                    <Label>{t(role.label)}</Label>
                                    <Note>{t("Falls back to {font} until another family is chosen.", {font: t(role.fallback as LocalizationKey)})}</Note>
                                </RowText>
                                <RowEnd>
                                    <FontPicker
                                        defaultLabel={t(role.fallback as LocalizationKey)}
                                        disabled={!settings}
                                        fonts={fonts}
                                        onChange={(family) => void setFont(role.id, family)}
                                        sample={role.sample}
                                        value={settings?.fonts?.[role.id] ?? null}
                                    />
                                </RowEnd>
                            </Row>
                        ))}
                        <Row>
                            <RowText>
                                <Label>{t("Reset")}</Label>
                                <Note>{t("Back to the app's built-in font for every role.")}</Note>
                            </RowText>
                            <RowEnd>
                                <ActionButton onClick={() => void update({fonts: {}})} type="button">
                                    {t("Reset")}
                                </ActionButton>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("time")}>
                    <Head
                        note="Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern."
                        title="Time format"
                    />
                    <Rows>
                        <Block>
                            <BlockHead>
                                <Label>{t("Format")}</Label>
                                <Note>{t("Follow the system, force 24-hour or 12-hour time, or define your own pattern.")}</Note>
                            </BlockHead>
                            <TimeModesRow>
                                {TimeModes.map((mode) => (
                                    <TimeMode
                                        $active={(settings?.timeFormat ?? "24") === mode.id}
                                        key={mode.id}
                                        onClick={() => void update({timeFormat: mode.id})}
                                        type="button"
                                    >
                                        {t(mode.label)}
                                    </TimeMode>
                                ))}
                            </TimeModesRow>
                            {(settings?.timeFormat ?? "24") === "custom" && (
                                <>
                                    <TimePatternInput
                                        aria-label={t("Pattern")}
                                        onBlur={commitTimePattern}
                                        onChange={(event) => setTimeDraft(event.target.value)}
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter") {
                                                event.preventDefault();
                                                commitTimePattern();
                                            } else if (event.key === "Escape") {
                                                setTimeDraft(null);
                                            }
                                        }}
                                        spellCheck={false}
                                        value={timeDraft ?? settings?.timeFormatPattern ?? DefaultTimePattern}
                                    />
                                    <Note>{t("Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.")}</Note>
                                </>
                            )}
                            <TimePreview>
                                <span>{t("Preview")}</span>
                                <code>
                                    {formatDateWith(
                                        TimePreviewSample,
                                        settings?.timeFormat,
                                        timeDraft ?? settings?.timeFormatPattern,
                                    )}
                                </code>
                            </TimePreview>
                        </Block>
                    </Rows>
                </Section>

                <Section ref={anchor("updates")}>
                    <Head
                        note="The running build and the newest one published."
                        title="Updates"
                    />
                    <Rows>
                        <Row>
                            <Label>{t("Current version")}</Label>
                            <Value>{appInfo ? `v${appInfo.version}` : "—"}</Value>
                        </Row>
                        <Row>
                            <Label>{t("Latest version")}</Label>
                            <Value>{updateState ? `v${updateState.latest}` : "—"}</Value>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>
                                    {updateState
                                        ? updateState.available
                                            ? t("Version {version} is available.", {version: updateState.latest})
                                            : t("You are on the latest version.")
                                        : t("Not checked yet")}
                                </Label>
                                <Note>
                                    {updateState?.available
                                        ? t("The installer downloads, installs itself, and closes the app.")
                                        : t("Reads the version file the release workflow publishes.")}
                                </Note>
                            </RowText>
                            <RowEnd>
                                {updateState?.available ? (
                                    <>
                                        <ActionButton
                                            onClick={() => void openReleasePage()}
                                            type="button"
                                        >
                                            {t("Open release page")}
                                        </ActionButton>
                                        {isWindows && (
                                            <ActionButton
                                                disabled={updateDialog !== null}
                                                onClick={() => void downloadAndInstall()}
                                                type="button"
                                            >
                                                {t("Download and install")}
                                            </ActionButton>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <ActionButton
                                            disabled={updateBusy}
                                            onClick={() => void checkNow()}
                                            type="button"
                                        >
                                            {updateBusy ? t("Checking…") : t("Check for updates")}
                                        </ActionButton>
                                        <ActionButton
                                            onClick={() => void openLogsFolder()}
                                            type="button"
                                        >
                                            {t("Open log folder")}
                                        </ActionButton>
                                    </>
                                )}
                            </RowEnd>
                        </Row>
                        {updateError && (
                            <Row>
                                <TagError>{updateError}</TagError>
                            </Row>
                        )}
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
                                <Label>{t("Presets")}</Label>
                                <Note>{t("One click changes the accent and the highlight together.")}</Note>
                            </BlockHead>
                            <PresetGrid>
                                {ThemePresets.map((preset) => (
                                    <Preset
                                        $on={accentNow.toLowerCase() === preset.accent
                                            && secondaryNow.toLowerCase() === preset.secondary}
                                        key={preset.name}
                                        onClick={() => applyPreset(preset.accent, preset.secondary)}
                                        title={`${t(preset.name)} · ${preset.accent} / ${preset.secondary}`}
                                        type="button"
                                    >
                                        <PresetDots>
                                            <i style={{background: preset.accent}}/>
                                            <i style={{background: preset.secondary}}/>
                                        </PresetDots>
                                        <PresetName>{t(preset.name)}</PresetName>
                                    </Preset>
                                ))}

                                {customPresets.map((preset, index) => (
                                    <PresetSlot key={`${preset.name}-${index}`}>
                                        <Preset
                                            $on={accentNow.toLowerCase() === preset.accent.toLowerCase()
                                                && secondaryNow.toLowerCase() === preset.secondary.toLowerCase()}
                                            onClick={() => applyPreset(preset.accent, preset.secondary)}
                                            title={`${preset.name} · ${preset.accent} / ${preset.secondary}`}
                                            type="button"
                                        >
                                            <PresetDots>
                                                <i style={{background: preset.accent}}/>
                                                <i style={{background: preset.secondary}}/>
                                            </PresetDots>
                                            <PresetName>{preset.name}</PresetName>
                                        </Preset>
                                        <PresetRemove
                                            onClick={() => void removePreset(index)}
                                            title={t("Remove preset")}
                                            type="button"
                                        >
                                            <CrossIcon size={9}/>
                                        </PresetRemove>
                                    </PresetSlot>
                                ))}

                                {draftPreset
                                    ? (
                                        <PresetDraft>
                                            <PresetDots>
                                                <i style={{background: draftPreset.accent}}/>
                                                <i style={{background: draftPreset.secondary}}/>
                                            </PresetDots>
                                            <PresetInput
                                                autoFocus
                                                maxLength={24}
                                                onChange={(event) => setDraftPreset({
                                                    ...draftPreset,
                                                    name: event.target.value
                                                })}
                                                onKeyDown={(event) => {
                                                    if (event.key === "Enter") {
                                                        event.preventDefault();
                                                        void savePreset();
                                                    } else if (event.key === "Escape") {
                                                        event.preventDefault();
                                                        setDraftPreset(null);
                                                    }
                                                }}
                                                placeholder={t("Preset name")}
                                                spellCheck={false}
                                                value={draftPreset.name}
                                            />
                                            <SmallButton onClick={() => void savePreset()} type="button">
                                                {t("Save")}
                                            </SmallButton>
                                            <SmallButton onClick={() => setDraftPreset(null)} type="button">
                                                {t("Cancel")}
                                            </SmallButton>
                                        </PresetDraft>
                                    )
                                    : (
                                        <AddPreset
                                            disabled={!settings}
                                            onClick={() => setDraftPreset({
                                                name: "",
                                                accent: accentNow,
                                                secondary: secondaryNow,
                                            })}
                                            title={t("Save the current colours as a preset")}
                                            type="button"
                                        >
                                            <PlusIcon size={12}/>
                                            {t("Add preset")}
                                        </AddPreset>
                                    )}
                            </PresetGrid>
                        </Block>
                        <Row>
                            <RowText>
                                <Label>{t("Accent color")}</Label>
                                <Note>{t("Buttons, selections, focus rings, and active navigation.")}</Note>
                            </RowText>
                            <RowEnd>
                                <RecentSwatches
                                    colors={recentColors.accent}
                                    current={accentNow}
                                    onApply={(color) => applyColor("accent", color)}
                                />
                                <ColorWell
                                    aria-label={t("Accent color")}
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
                                <Label>{t("Secondary color")}</Label>
                                <Note>{t("Gradients, highlights, and the second end of the accent ramp.")}</Note>
                            </RowText>
                            <RowEnd>
                                <RecentSwatches
                                    colors={recentColors.secondary}
                                    current={secondaryNow}
                                    onApply={(color) => applyColor("secondary", color)}
                                />
                                <ColorWell
                                    aria-label={t("Secondary color")}
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
                                <Label>{t("Reset colors")}</Label>
                                <Note>{t("Returns the interface to the default blue and indigo theme.")}</Note>
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
                                    {t("Reset")}
                                </SmallButton>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("background")}>
                    <Head
                        note="A picture or video behind the whole window, from the title bar to the bottom."
                        title="Background"
                    />
                    <Rows>
                        <Block>
                            <BlockHead>
                                <Label>{t("Wallpaper")}</Label>
                                <Note>{t("None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.")}</Note>
                            </BlockHead>
                            <VariantRow>
                                <Variant
                                    $active={!settings?.backgroundSource}
                                    onClick={() => void update({backgroundSource: null})}
                                    title={t("None")}
                                    type="button"
                                >
                                    <NoneLabel>{t("None")}</NoneLabel>
                                </Variant>
                            </VariantRow>
                            <Gallery>
                                {BuiltInBackgrounds.map((concept) => (
                                    <GalleryGroup key={concept.id}>
                                        <GalleryLabel>{t(concept.name)}</GalleryLabel>
                                        <VariantRow>
                                            {concept.variants.map((variant) => (
                                                <Variant
                                                    $active={settings?.backgroundSource === variant.id}
                                                    key={variant.id}
                                                    onClick={() => void update({backgroundSource: variant.id})}
                                                    title={`${t(concept.name)} · ${t(variant.preset)}`}
                                                    type="button"
                                                >
                                                    <img alt="" src={variant.url}/>
                                                </Variant>
                                            ))}
                                        </VariantRow>
                                    </GalleryGroup>
                                ))}

                                <GalleryGroup>
                                    <GalleryLabel>{t("Motion")}</GalleryLabel>
                                    <VariantRow>
                                        {BuiltInVideos.map((video) => (
                                            <Variant
                                                $active={settings?.backgroundSource === video.id}
                                                key={video.id}
                                                onClick={() => void update({backgroundSource: video.id})}
                                                title={t(video.name)}
                                                type="button"
                                            >
                                                <img alt="" src={video.poster}/>
                                                <PlayBadge><VideoIcon size={11}/></PlayBadge>
                                            </Variant>
                                        ))}
                                    </VariantRow>
                                </GalleryGroup>

                                <GalleryGroup>
                                    <GalleryLabel>{t("Custom")}</GalleryLabel>
                                    <VariantRow>
                                        {(settings?.backgroundCustom ?? []).map((path) => (
                                            <CustomWallpaper
                                                active={settings?.backgroundSource === `file:${path}`
                                                    || settings?.backgroundSource === `url:${path}`
                                                    || settings?.backgroundSource === path}
                                                key={path}
                                                onRemove={() => removeBackground(path)}
                                                onSelect={() => void update({
                                                    backgroundSource: isRemoteUrl(path) ? `url:${path}` : `file:${path}`
                                                })}
                                                path={path}
                                            />
                                        ))}
                                        <AddTile
                                            onClick={() => void addBackground([".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp", ".svg"])}
                                            type="button"
                                        >
                                            <PlusIcon size={12}/>{t("Image…")}
                                        </AddTile>
                                        <AddTile
                                            onClick={() => void addBackground([".mp4", ".webm", ".mkv", ".mov", ".m4v", ".avi", ".wmv", ".ogv"])}
                                            type="button"
                                        >
                                            <PlusIcon size={12}/>{t("Video…")}
                                        </AddTile>
                                    </VariantRow>
                                </GalleryGroup>
                            </Gallery>
                        </Block>
                        <Row>
                            <RowText>
                                <Label>{t("Image or video URL")}</Label>
                                <Note>{t("Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.")}</Note>
                            </RowText>
                            <RowEnd>
                                <Input
                                    onChange={(event) => setBackgroundUrl(event.target.value)}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter") void addBackgroundUrl();
                                    }}
                                    placeholder="https://…"
                                    value={backgroundUrl}
                                />
                                <SmallButton
                                    disabled={!isRemoteUrl(backgroundUrl)}
                                    onClick={() => void addBackgroundUrl()}
                                    type="button"
                                >
                                    {t("Add")}
                                </SmallButton>
                            </RowEnd>
                        </Row>
                        <Row>
                            <Label>{t("Blur")}</Label>
                            <RowEnd>
                                <RangeInput
                                    max={40}
                                    min={0}
                                    onChange={(event) => void update({backgroundBlur: Number(event.target.value)})}
                                    type="range"
                                    value={settings?.backgroundBlur ?? 0}
                                />
                                <Value>{settings?.backgroundBlur ?? 0}px</Value>
                            </RowEnd>
                        </Row>
                        <Row>
                            <Label>{t("Saturation")}</Label>
                            <RowEnd>
                                <RangeInput
                                    max={200}
                                    min={0}
                                    onChange={(event) => void update({backgroundSaturation: Number(event.target.value)})}
                                    type="range"
                                    value={settings?.backgroundSaturation ?? 100}
                                />
                                <Value>{settings?.backgroundSaturation ?? 100}%</Value>
                            </RowEnd>
                        </Row>
                        <Row>
                            <Label>{t("Brightness")}</Label>
                            <RowEnd>
                                <RangeInput
                                    max={150}
                                    min={40}
                                    onChange={(event) => void update({backgroundBrightness: Number(event.target.value)})}
                                    type="range"
                                    value={settings?.backgroundBrightness ?? 100}
                                />
                                <Value>{settings?.backgroundBrightness ?? 100}%</Value>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("safety")}>
                    <Head
                        note="Deleting, moving, renaming or writing to a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation."
                        title="Safety"
                    />
                    <Rows>
                        <Block>
                            <BlockHead>
                                <Label>{t("Protected folders")}</Label>
                                <Note>{t("Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.")}</Note>
                            </BlockHead>
                            <ProtectList>
                                {(settings?.protectedPaths ?? []).map((pattern) => (
                                    <ProtectRow key={pattern}>
                                        <ProtectInput
                                            aria-label={t("Protected path")}
                                            onBlur={commitRule}
                                            onChange={(event) => setRuleDraft({
                                                from: pattern,
                                                value: event.target.value
                                            })}
                                            onFocus={() => setRuleDraft({from: pattern, value: pattern})}
                                            onKeyDown={(event) => {
                                                if (event.key === "Enter") {
                                                    event.preventDefault();
                                                    commitRule();
                                                } else if (event.key === "Escape") {
                                                    setRuleDraft(null);
                                                }
                                            }}
                                            spellCheck={false}
                                            value={ruleDraft?.from === pattern ? ruleDraft.value : pattern}
                                        />
                                        <ProtectRemove
                                            onClick={() => removeProtected(pattern)}
                                            title={t("Remove")}
                                            type="button"
                                        >
                                            <CrossIcon size={10}/>
                                        </ProtectRemove>
                                    </ProtectRow>
                                ))}
                            </ProtectList>
                            <ProtectNewRule>
                                <RuleInput
                                    aria-label={t("New protected rule")}
                                    onChange={(event) => setNewProtectedRule(event.target.value)}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter") {
                                            event.preventDefault();
                                            addProtectedRule();
                                        }
                                    }}
                                    placeholder="*.log"
                                    spellCheck={false}
                                    value={newProtectedRule}
                                />
                                <SmallButton onClick={addProtectedRule} type="button">
                                    {t("Add the rule")}
                                </SmallButton>
                            </ProtectNewRule>
                            <ProtectAdd>
                                <SmallButton onClick={() => void restoreProtectedDefaults()} type="button">
                                    {t("Restore defaults")}
                                </SmallButton>
                                <SmallButton onClick={() => void addProtectedFolder()} type="button">
                                    {t("Add folder…")}
                                </SmallButton>
                            </ProtectAdd>
                        </Block>
                        <Row>
                            <RowText>
                                <Label>{t("Confirmation delay")}</Label>
                                <Note>{t("The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.")}</Note>
                            </RowText>
                            <RowEnd>
                                <RangeInput
                                    max={30}
                                    min={2}
                                    onChange={(event) => void update({deleteDelaySeconds: Number(event.target.value)})}
                                    type="range"
                                    value={settings?.deleteDelaySeconds ?? 5}
                                />
                                <Value>{settings?.deleteDelaySeconds ?? 5}s</Value>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("tags")}>
                    <Head
                        note="Every tag in the catalogue; add, rename, recolour or remove them here."
                        title="Tags"
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <LabelRow>
                                    <TagColorInput
                                        aria-label={t("Color of the new tag")}
                                        onChange={(event) => setNewTagColor(event.target.value)}
                                        type="color"
                                        value={newTagColor}
                                    />
                                    <Input
                                        onChange={(event) => setNewTagName(event.target.value)}
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter") {
                                                event.preventDefault();
                                                void addTag();
                                            }
                                        }}
                                        placeholder={t("New tag")}
                                        spellCheck={false}
                                        value={newTagName}
                                    />
                                </LabelRow>
                                <Note>{t("Add a tag here; it is available in every folder.")}</Note>
                            </RowText>
                            <RowEnd>
                                <SmallButton
                                    disabled={tagBusy || newTagName.trim().length === 0}
                                    onClick={() => void addTag()}
                                    type="button"
                                >
                                    {t("Add")}
                                </SmallButton>
                            </RowEnd>
                        </Row>

                        {tagError && (
                            <Row>
                                <TagError>{tagError}</TagError>
                            </Row>
                        )}
                        {tags.length === 0 && (
                            <Row>
                                <Note>
                                    {t("No tags yet. Add one below; it is available in every folder.")}
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
                                                    <TagColorInput
                                                        aria-label={t("Color of {tag}", {tag: tag.name})}
                                                        onChange={(event) => void recolorTag(tag.name, event.target.value)}
                                                        title={t("Change this tag's color")}
                                                        type="color"
                                                        value={tag.color ?? DefaultTagColor}
                                                    />
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
                                                <Note>{t("Press Enter to save, Escape to cancel.")}</Note>
                                            </RowText>
                                            <RowEnd>
                                                <SmallButton disabled={tagBusy} onClick={() => void saveTagName()}
                                                             type="button">
                                                    {t("Save")}
                                                </SmallButton>
                                                <SmallButton disabled={tagBusy} onClick={() => setEditingTag(null)}
                                                             type="button">
                                                    {t("Cancel")}
                                                </SmallButton>
                                            </RowEnd>
                                        </>
                                    )
                                    : (
                                        <>
                                            <RowText>
                                                <LabelRow>
                                                    <TagColorInput
                                                        aria-label={t("Color of {tag}", {tag: tag.name})}
                                                        onChange={(event) => void recolorTag(tag.name, event.target.value)}
                                                        title={t("Change this tag's color")}
                                                        type="color"
                                                        value={tag.color ?? DefaultTagColor}
                                                    />
                                                    <Label>{tag.name}</Label>
                                                </LabelRow>
                                                <Note>
                                                    {plural(t, tag.folders, "Used in 1 folder. Renaming or removing it updates that folder's index.", "Used in {count} folders. Renaming or removing it updates those folders' indexes.")}
                                                </Note>
                                            </RowText>
                                            <RowEnd>
                                                <SmallButton
                                                    disabled={tagBusy}
                                                    onClick={() => setEditingTag({name: tag.name, value: tag.name})}
                                                    type="button"
                                                >
                                                    {t("Edit")}
                                                </SmallButton>
                                                <DangerButton
                                                    disabled={tagBusy}
                                                    onClick={() => void removeTag(tag.name)}
                                                    type="button"
                                                >
                                                    <TrashIcon size={13}/>
                                                    {t("Remove")}
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
                        title="Files view"
                        global
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <Label>{t("Default view")}</Label>
                                <Note>
                                    {t("The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.")}
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
                                        {t("List")}
                                    </Segment>
                                    <Segment
                                        $on={defaultView.mode === "grid"}
                                        onClick={() => void update({
                                            defaultView: {...defaultView, mode: "grid"},
                                        })}
                                        type="button"
                                    >
                                        {t("Grid")}
                                    </Segment>
                                </Segmented>
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("List icon size")}</Label>
                                <Note>{t("The icon in the list rows.")}</Note>
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
                                <Label>{t("Grid size")}</Label>
                                <Note>{t("The height of a grid tile; the icon inside follows it.")}</Note>
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
                                    <Label>{t("Selection checkboxes")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    {t("Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.")}
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
                                    <Label>{t("Open with a single click")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    {t("Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.")}
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
                                    <Label>{t("Open the file tray while dragging")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    {t("The tray appears when a drag starts and closes again if it is still empty. Off leaves it to the title bar button.")}
                                </Note>
                            </RowText>
                            <Toggle
                                $on={settings?.trayAutoShow ?? true}
                                disabled={!settings}
                                onClick={() => void update({trayAutoShow: !(settings?.trayAutoShow ?? true)})}
                                type="button"
                            >
                                <Knob/>
                            </Toggle>
                        </Row>
                        <Row>
                            <RowText>
                                <LabelRow>
                                    <Label>{t("Confirm before deleting")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    {t("Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.")}
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
                                    <Label>{t("Play audio in video previews")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    {t("Video previews play muted by default. Turn this on to hear their audio while the details panel is open.")}
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
                                    <Label>{t("Autoplay video previews")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    {t("Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.")}
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
                                    <Label>{t("Preview panel under the list")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    {t("Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.")}
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
                                    <Label>{t("Columns")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>{t("Shown in every folder; changing them changes all folders at once.")}</Note>
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
                                        <span>{t(column.label)}</span>
                                    </ColumnCheck>
                                ))}
                                <ColumnCheck>
                                    <input
                                        checked={(defaultView.columns ?? []).includes("linkTarget")}
                                        onChange={() => void toggleColumn("linkTarget")}
                                        type="checkbox"
                                    />
                                    <span>{t("Link target after the name")}</span>
                                </ColumnCheck>
                            </ColumnGrid>
                        </Row>
                    </Rows>
                    <Footnote>
                        {t("The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.")}{" "}
                        <GlobalTag/> {t("Anything marked as global always applies to every folder.")}
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
                                    <Label>{t(label)}</Label>
                                    <Note>{t(note)}</Note>
                                </RowText>
                                <RowEnd>
                                    <KeyButton
                                        $listening={capturing === id}
                                        onClick={() => setCapturing(id)}
                                        type="button"
                                    >
                                        {capturing === id ? t("Press a key…") : prettyShortcut(keys[id])}
                                    </KeyButton>
                                </RowEnd>
                            </Row>
                        ))}
                        <Row>
                            <RowText>
                                <Label>{t("Reset")}</Label>
                                <Note>{t("Back to the default combination for every action.")}</Note>
                            </RowText>
                            <RowEnd>
                                <ActionButton
                                    onClick={() => void update({shortcuts: {...DefaultShortcuts}})}
                                    type="button"
                                >
                                    {t("Reset")}
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
                                <Label>{t("Process memory")}</Label>
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
                                    ? t("Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.",
                                        {
                                            available: formatBytes(memory.available),
                                            resident: formatBytes(memory.workingSet)
                                        })
                                    : t("Reading the current usage…")}
                            </Note>
                        </Gauge>

                        <Gauge>
                            <GaugeHead>
                                <Label>{t("Managed heap")}</Label>
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
                                {t("Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.")}
                            </Note>
                        </Gauge>

                        <Gauge>
                            <GaugeHead>
                                <Label>{t("Native and runtime")}</Label>
                                <Value>
                                    {memory
                                        ? `${formatBytes(Math.max(0, memory.private - memory.managed))} · ${percent(Math.max(0, memory.private - memory.managed), memory.private)}`
                                        : "—"}
                                </Value>
                            </GaugeHead>
                            <Track>
                                <TrackFill
                                    $ratio={memory ? Math.max(0, memory.private - memory.managed) / Math.max(memory.private, 1) : 0}
                                    $tone="var(--accent-primary)"
                                />
                            </Track>
                            <Note>
                                {t("The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.")}
                            </Note>
                        </Gauge>

                        <Row>
                            <RowText>
                                <Label>{t("Free memory")}</Label>
                                <Note>{t("Compacts the heap and returns unused pages to the system. Always safe.")}</Note>
                            </RowText>
                            <RowEnd>
                                <ActionButton onClick={() => void trimMemory().then(setMemory)} type="button">
                                    {t("Trim now")}
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
                                <Label>{t("Recent items")}</Label>
                                <Note>{t("How many recently opened folders the overview lists. 0 hides the section.")}</Note>
                            </RowText>
                            <RowEnd>
                                <Input
                                    max={50}
                                    min={0}
                                    onChange={(event) => void setRecentLimit(Number(event.target.value))} type="number"
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
                                        title={t("Stop scanning this folder")}
                                        type="button"
                                    >
                                        <CrossIcon size={12}/>
                                    </IconButton>
                                </RowEnd>
                            </Row>
                        ))}

                        <Row>
                            <RowText>
                                <Label>{t("Scan folders")}</Label>
                                <Note>
                                    {(settings?.galleryRoots ?? []).length === 0
                                        ? t("Nothing added yet, so the gallery reads the Pictures folder.")
                                        : t("Only these folders are scanned, three levels deep.")}
                                </Note>
                            </RowText>
                            <RowEnd>
                                <ActionButton onClick={() => void addGalleryRoot()} type="button">
                                    {t("Choose folder…")}
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
                                <Label>{t("Use system file icons")}</Label>
                                <Note>{t("Ask the shell for the icon of each file type instead of the built-in glyphs.")}</Note>
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
                                <Label>{t("Use custom folder icons")}</Label>
                                <Note>
                                    {t("Folders that define an icon (desktop.ini) keep showing it even when system icons are off.")}
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
                                        <Note>{describeSource(t, source)}</Note>
                                    </RowText>
                                    <RowEnd>
                                        <Preview source={source}/>
                                        <IconButton
                                            onClick={() => void setOverride(extension, null)}
                                            title={t("Remove this rule")}
                                            type="button"
                                        >
                                            <CrossIcon size={12}/>
                                        </IconButton>
                                    </RowEnd>
                                </Row>
                            ))}

                        <Row>
                            <RowText>
                                <Label>{t("Add a rule")}</Label>
                                <Note>{t("Extension and the icon to draw for it.")}</Note>
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
                                        title={t("Choose the icon")}
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
                                <IconButton onClick={() => void addRule()} title={t("Add the rule")} type="button">
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
                                <Label>{t("Give a folder its own icon")}</Label>
                                <Note>
                                    {t("Stored in the folder's parent {index}, so it stays with the files.", {index: ".yafm-index.db"})}
                                </Note>
                            </RowText>
                            <RowEnd>
                                {folderIcon && <Thumb src={folderIcon.icon}/>}
                                <ActionButton disabled={busy} onClick={() => void assignFolderIcon()} type="button">
                                    {busy ? t("Choosing…") : t("Choose folder and icon…")}
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
                                    <Badge><CheckIcon size={11}/> {t("Saved")}</Badge>
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
                                <Label>{t("Keep a {index} in every folder", {index: ".yafm-index.db"})}</Label>
                                <Note>
                                    {t("Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.")}
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
                        <Block>
                            <BlockHead>
                                <Label>{t("Directory index blacklist")}</Label>
                                <Note>{t("Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.")}</Note>
                            </BlockHead>
                            <ProtectList>
                                {(settings?.directoryIndexBlacklist ?? []).map((pattern) => (
                                    <ProtectRow key={pattern}>
                                        <ProtectInput
                                            aria-label={t("Directory index blacklist rule")}
                                            onBlur={commitDirectoryRule}
                                            onChange={(event) => setDirectoryRuleDraft({
                                                from: pattern,
                                                value: event.target.value
                                            })}
                                            onFocus={() => setDirectoryRuleDraft({from: pattern, value: pattern})}
                                            onKeyDown={(event) => {
                                                if (event.key === "Enter") {
                                                    event.preventDefault();
                                                    commitDirectoryRule();
                                                } else if (event.key === "Escape") {
                                                    setDirectoryRuleDraft(null);
                                                }
                                            }}
                                            spellCheck={false}
                                            value={directoryRuleDraft?.from === pattern ? directoryRuleDraft.value : pattern}
                                        />
                                        <ProtectRemove
                                            onClick={() => removeDirectoryRule(pattern)}
                                            title={t("Remove")}
                                            type="button"
                                        >
                                            <CrossIcon size={10}/>
                                        </ProtectRemove>
                                    </ProtectRow>
                                ))}
                            </ProtectList>
                            <ProtectNewRule>
                                <RuleInput
                                    aria-label={t("Directory index blacklist rule")}
                                    onChange={(event) => setNewDirectoryRule(event.target.value)}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter") {
                                            event.preventDefault();
                                            addDirectoryRule();
                                        }
                                    }}
                                    placeholder="**/uv/cache/**"
                                    spellCheck={false}
                                    value={newDirectoryRule}
                                />
                                <SmallButton onClick={addDirectoryRule} type="button">
                                    {t("Add the rule")}
                                </SmallButton>
                            </ProtectNewRule>
                            <ProtectAdd>
                                <SmallButton onClick={restoreDirectoryRules} type="button">
                                    {t("Restore defaults")}
                                </SmallButton>
                                <SmallButton onClick={() => void addDirectoryFolder()} type="button">
                                    {t("Add folder…")}
                                </SmallButton>
                            </ProtectAdd>
                        </Block>
                    </Rows>
                    {!(settings?.writeDirectoryIndex ?? true) && (
                        <Notice>{folderIndexNotice(t, appInfo?.platform)}</Notice>
                    )}
                </Section>

                <Section ref={anchor("indexing")}>
                    <Head
                        note="Background folder size and item-count walks."
                        title="Index tasks"
                    />
                    <IndexTaskList/>
                </Section>

                <Section ref={anchor("files")}>
                    <Head
                        note="What the listings include."
                        title="Files"
                    />
                    <Rows>
                        <Row>
                            <Label>{t("Hidden items")}</Label>
                            <Value>{describe(t, visibility?.showHidden)}</Value>
                        </Row>
                        <Row>
                            <Label>{t("Protected operating system files")}</Label>
                            <Value>{describe(t, visibility?.showSystem)}</Value>
                        </Row>
                    </Rows>
                    <Footnote>
                        {t("Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.")}
                    </Footnote>
                </Section>
            </Main>

            <Toc aria-label={t("Settings sections")}>
                <TocLabel>{t("Sections")}</TocLabel>
                <TocList>
                    {SettingSections.map(({id, label}) => (
                        <TocItem
                            $active={activeSection === id}
                            key={id}
                            onClick={() => jumpTo(id)}
                            type="button"
                        >
                            <span>{t(label)}</span>
                        </TocItem>
                    ))}
                </TocList>
                <TocNote>{t("Changes are saved as you make them.")}</TocNote>
            </Toc>

            {updateDialog && createPortal(
                <UpdateOverlay>
                    <UpdatePanel aria-modal="true" role="dialog">
                        <UpdateHead>
                            <h2>{t("Software update")}</h2>
                            <p>
                                {updateState?.latest
                                    ? t("Version {version}", {version: updateState.latest})
                                    : t("Preparing the update…")}
                            </p>
                        </UpdateHead>

                        <ChangelogHead>{t("Changelog")}</ChangelogHead>
                        <Changelog>
                            {updateDialog.changelog || (updateDialog.phase === "changelog"
                                ? t("Loading the changelog…")
                                : t("The changelog could not be loaded."))}
                        </Changelog>

                        <ProgressRow>
                            <span>{updatePhaseLabel(updateDialog, t)}</span>
                            <span>{updateSizeLabel(updateDialog)}</span>
                        </ProgressRow>

                        <ProgressBar>
                            <ProgressFill $percent={Math.max(0, Math.min(100, updateDialog.percent))}/>
                        </ProgressBar>

                        {updateDialog.error && <TagError>{updateDialog.error}</TagError>}

                        <UpdateActions>
                            {(updateDialog.phase === "changelog" || updateDialog.phase === "downloading") && (
                                <ActionButton onClick={() => void cancelDownload()} type="button">
                                    {t("Cancel")}
                                </ActionButton>
                            )}
                            {updateDialog.phase === "ready" && (
                                <ActionButton onClick={() => void installNow()} type="button">
                                    {t("Install update")}
                                </ActionButton>
                            )}
                            {updateDialog.phase === "installing" && (
                                <ActionButton disabled type="button">{t("Installing…")}</ActionButton>
                            )}
                            {(updateDialog.phase === "ready" || updateDialog.phase === "error"
                                || updateDialog.phase === "cancelled" || updateDialog.phase === "installing") && (
                                <ActionButton onClick={() => setUpdateDialog(null)} type="button">
                                    {t("Close")}
                                </ActionButton>
                            )}
                        </UpdateActions>
                    </UpdatePanel>
                </UpdateOverlay>, document.body)}
        </Page>
    );
}

function describe(t: Translate, value: boolean | undefined): string {
    if (value === undefined) return t("Reading…");

    return value ? t("Shown") : t("Hidden");
}

/**
 * Shown only while per-folder indexes are off, and names the drive the central database grows on.
 * Windows and Linux keep the settings in different places, and only the user knows where that is.
 */
/** Live view of the folders waiting for a background size/index walk. */
function IndexTaskList() {
    const t = useTranslation();
    const [tasks, setTasks] = useState<IndexTasks | null>(null);

    useEffect(() => {
        let alive = true;
        const load = () => listIndexTasks().then(
            (result) => {
                if (alive) setTasks(result);
            },
            () => {
                if (alive) setTasks(null);
            },
        );

        load();
        const timer = window.setInterval(load, 1000);
        return () => {
            alive = false;
            window.clearInterval(timer);
        };
    }, []);

    if (!tasks)
        return <Notice>{t("Index task information is unavailable.")}</Notice>;

    if (tasks.count === 0)
        return <Notice>{t("No indexing tasks are running.")}</Notice>;

    return (
        <Rows>
            <Row>
                <Label>{t("{count} indexing tasks", {count: tasks.count})}</Label>
            </Row>
            {tasks.directories.slice(0, 50).map((directory) => (
                <Row key={directory}>
                    <Value title={directory}>{directory}</Value>
                </Row>
            ))}
        </Rows>
    );
}

function folderIndexNotice(t: Translate, platform: string | undefined): string {
    const place = t(platform === "windows" ? "%APPDATA%, which sits on the system drive (usually C:)"
        : platform === "linux" ? "your home folder, which often shares a partition with the system"
            : "the app's settings folder, which usually sits on the system drive");

    return t("Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.",
        {place});
}

function describeSource(t: Translate, source: string): string {
    return source.startsWith("file:") ? source.slice(5) : t("built-in: {source}", {source});
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

/**
 * A wallpaper the user added to the gallery. The cross in its corner removes it; the media URL
 * goes through the shared thumbnail server, so a video shows its first frame and an SVG its art.
 */
function CustomWallpaper({path, active, onSelect, onRemove}: {
    path: string;
    active: boolean;
    onSelect: () => void;
    onRemove: () => void;
}) {
    const t = useTranslation();
    const remote = isRemoteUrl(path);
    const media = useMediaUrl(remote ? null : path);
    const url = remote ? path : media;
    const video = isVideoPath(path.split(/[?#]/)[0]);

    return (
        <CustomItem>
            <Variant $active={active} onClick={onSelect} title={path} type="button">
                {url && (video
                    ? <video muted preload="metadata" src={`${url}#t=0.5`}/>
                    : <img alt="" src={url}/>)}
                {video && <PlayBadge><VideoIcon size={11}/></PlayBadge>}
            </Variant>
            <Remove onClick={onRemove} title={t("Remove")} type="button">
                <CrossIcon size={9}/>
            </Remove>
        </CustomItem>
    );
}

/**
 * The language menu is drawn by the app rather than the browser, so it follows the theme and the
 * CJK fonts the rest of the interface uses. It renders in a portal because the settings column
 * scrolls and would clip an inline popup.
 */
function LanguagePicker({value, options, onChange, disabled}: {
    value: string;
    options: string[];
    onChange: (code: string) => void;
    disabled?: boolean;
}) {
    const t = useTranslation();
    const [anchor, setAnchor] = useState<{ left: number; top: number; width: number } | null>(null);
    const button = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!anchor) return;

        const close = () => setAnchor(null);
        const onPointerDown = (event: PointerEvent) => {
            const target = event.target;
            if (target instanceof Node && button.current?.contains(target)) return;
            if (target instanceof Element && target.closest("[data-language-menu]")) return;

            close();
        };
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") close();
        };

        window.addEventListener("pointerdown", onPointerDown, true);
        window.addEventListener("keydown", onKey, true);
        window.addEventListener("scroll", close, true);
        window.addEventListener("resize", close);

        return () => {
            window.removeEventListener("pointerdown", onPointerDown, true);
            window.removeEventListener("keydown", onKey, true);
            window.removeEventListener("scroll", close, true);
            window.removeEventListener("resize", close);
        };
    }, [anchor]);

    const toggle = () => {
        if (anchor) {
            setAnchor(null);
            return;
        }

        const rect = button.current?.getBoundingClientRect();
        if (rect) setAnchor({left: rect.left, top: rect.bottom + 4, width: rect.width});
    };

    return (
        <>
            <PickerButton
                aria-expanded={anchor !== null}
                aria-haspopup="listbox"
                disabled={disabled}
                onClick={toggle}
                ref={button}
                type="button"
            >
                <span>{labelOf(t, value)}</span>
                <PickerChevron><ChevronRightIcon size={11}/></PickerChevron>
            </PickerButton>
            {anchor && createPortal(
                <PickerMenu
                    data-language-menu="true"
                    role="listbox"
                    style={{left: anchor.left, minWidth: anchor.width, top: anchor.top}}
                >
                    {options.map((code) => (
                        <PickerOption
                            $active={code === value}
                            aria-selected={code === value}
                            key={code}
                            onClick={() => {
                                onChange(code);
                                setAnchor(null);
                            }}
                            role="option"
                            type="button"
                        >
                            <span>{labelOf(t, code)}</span>
                            {code === value && <CheckIcon size={11}/>}
                        </PickerOption>
                    ))}
                </PickerMenu>,
                document.body,
            )}
        </>
    );
}

/** What the picker shows for a stored value: an endonym, or the auto option. */
function labelOf(t: Translate, code: string): string {
    if (code === SystemLanguage) return t("System default");

    return LocaleNames[code] ?? code;
}

/** The colour that was applied before, then the rest of the recent ones. */
function RecentSwatches({colors, current, onApply}: {
    colors: string[];
    current: string;
    onApply: (color: string) => void;
}) {
    const t = useTranslation();

    if (colors.length === 0)
        return null;

    const [previous, ...rest] = colors;

    return (
        <Swatches>
            <PreviousColor
                $color={previous}
                onClick={() => onApply(previous)}
                title={t("Previous colour · {colour}", {colour: previous})}
                type="button"
            >
                <i/>
                {t("Previous")}
            </PreviousColor>
            {rest.map((color) => (
                <Swatch
                    $color={color}
                    key={color}
                    onClick={() => onApply(color)}
                    title={t("Use {colour}", {colour: color})}
                    type="button"
                >
                    {color.toLowerCase() === current.toLowerCase() && <CheckIcon size={9}/>}
                </Swatch>
            ))}
        </Swatches>
    );
}

/** The title block above a card; every section explains itself in one line. */
function Head({title, note, global = false}: { title: LocalizationKey; note: LocalizationKey; global?: boolean }) {
    const t = useTranslation();

    return (
        <SectionHead>
            <h2>{t(title)}{global && <GlobalTag/>}</h2>
            <p>{t(note)}</p>
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
    -webkit-backdrop-filter: blur(10px);
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

const PresetName = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

/** A saved preset plus its remove button, so the pair reads as one tile. */
const PresetSlot = styled.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`;

const PresetRemove = styled.button`
    display: grid;
    place-items: center;
    width: 24px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: rgba(248, 113, 113, 0.55);
        color: #fca5a5;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;

const AddPreset = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }

    &:disabled {
        opacity: 0.55;
        cursor: default;
    }
`;

const PresetDraft = styled.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`;

const PresetInput = styled.input`
    flex: 1;
    min-width: 0;
    padding: 4px 7px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
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

/** What the update panel says while the installer is fetched and run. */
function updatePhaseLabel(progress: UpdateDialogState, t: Translate): string {
    switch (progress.phase) {
        case "changelog":
            return t("Preparing the update…");
        case "downloading":
            return t("Downloading the update…");
        case "ready":
            return t("Download complete.");
        case "cancelled":
            return t("Update cancelled.");
        case "error":
            return t("The update failed.");
        case "installing":
            return t("Installing…");
        default:
            return "";
    }
}

/** How much of the installer has arrived, in the same units the rest of the app uses. */
function updateSizeLabel(state: UpdateDialogState): string {
    if (state.total > 0)
        return `${formatBytes(state.downloaded)} / ${formatBytes(state.total)}`;

    return state.downloaded > 0 ? formatBytes(state.downloaded) : "";
}

/** The floating panel that shows the changelog and the installer's download progress. */
const UpdateOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`;

const UpdatePanel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(560px, 100%);
    max-height: min(620px, 100%);
    padding: 18px 20px 16px;
    overflow: auto;
    border: 1px solid var(--border-color);
    border-radius: 14px;
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
`;

const UpdateHead = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    h2 {
        margin: 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--text-primary);
    }

    p {
        margin: 0;
        font-family: var(--font-mono);
        font-size: 11px;
        color: var(--text-muted);
    }
`;

const ChangelogHead = styled.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`;

/** The changelog the release publishes, kept short enough to sit inside the panel. */
const Changelog = styled.pre`
    margin: 0;
    max-height: 260px;
    overflow: auto;
    font-family: var(--font-mono);
    font-size: 11px;
    line-height: 1.6;
    white-space: pre-wrap;
    color: var(--text-secondary);
`;

const ProgressRow = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`;

/** The install progress bar, filled from the left as the file arrives. */
const ProgressBar = styled.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`;

const ProgressFill = styled.div<{ $percent: number }>`
    width: ${({$percent}) => `${$percent}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`;

const UpdateActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`;

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

const TagColorInput = styled.input`
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background: transparent;
    cursor: pointer;

    &::-webkit-color-swatch-wrapper {
        padding: 1px;
    }

    &::-webkit-color-swatch {
        border: 0;
        border-radius: 3px;
    }
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

const PickerButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-width: 150px;
    padding: 6px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }

    &:disabled {
        opacity: 0.55;
        cursor: default;
    }
`;

const PickerChevron = styled.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`;

const PickerMenu = styled.div`
    position: fixed;
    z-index: 2600;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
`;

const PickerOption = styled.button<{ $active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 6px 9px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.16)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 11px;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.12);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -1px;
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

const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`;

const GalleryGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const GalleryLabel = styled.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`;

const VariantRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`;

/** Twice the old 48x32 strip, so the art is actually readable before it is applied. */
const Variant = styled.button<{ $active?: boolean }>`
    position: relative;
    width: 102px;
    height: 58px;
    padding: 0;
    overflow: hidden;
    border: 1px solid ${({$active}) => $active ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: var(--bg-primary);
    box-shadow: ${({$active}) => $active ? "0 0 0 2px rgba(var(--accent-rgb), 0.28)" : "none"};
    cursor: pointer;

    img,
    video {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        border-color: var(--border-color-hover);
    }
`;

const CustomItem = styled.div`
    position: relative;
    width: 102px;
    height: 58px;
`;

const Remove = styled.button`
    position: absolute;
    top: 3px;
    right: 3px;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 17px;
    height: 17px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 50%;
    background: rgba(6, 8, 16, 0.78);
    color: #fff;
    cursor: pointer;

    &:hover {
        background: #e81123;
        border-color: #e81123;
    }
`;

const PlayBadge = styled.span`
    position: absolute;
    right: 5px;
    bottom: 4px;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(6, 8, 16, 0.66);
    color: #fff;
`;

const AddTile = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 102px;
    height: 58px;
    padding: 0;
    border: 1px dashed var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 10.5px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-focus);
        color: var(--text-primary);
    }
`;

const NoneLabel = styled.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`;

const ProtectList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const ProtectRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`;

const ProtectInput = styled.input`
    flex: 1;
    min-width: 0;
    padding: 4px 6px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
    outline: 0;

    &:hover {
        border-color: var(--border-color);
    }

    &:focus {
        border-color: var(--border-color-focus);
        background: var(--bg-input);
    }
`;

const ProtectRemove = styled.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    padding: 0;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: rgba(248, 113, 113, 0.14);
        color: #fca5a5;
    }
`;

const ProtectAdd = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`;

/** The new-rule row sits under the list and matches its width, with the add button after it. */
const ProtectNewRule = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`;

const RuleInput = styled.input`
    flex: 1;
    min-width: 0;
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
        box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
    }
`;

const TimeModesRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`;

const TimeMode = styled.button<{ $active?: boolean }>`
    padding: 6px 12px;
    border: 1px solid ${({$active}) => $active ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.14)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`;

const TimePatternInput = styled.input`
    width: 100%;
    height: 32px;
    padding: 0 9px;
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

const TimePreview = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    color: var(--text-muted);
    font-size: 11px;

    code {
        padding: 2px 7px;
        border-radius: var(--radius-sm);
        background: rgba(var(--bg-rgb), 0.45);
        color: var(--text-primary);
        font-family: var(--font-mono);
        font-size: 11px;
    }
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
