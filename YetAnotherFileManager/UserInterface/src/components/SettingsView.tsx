import {type MouseEvent, useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import {
    type LocalizationKey,
    loadStrings,
    Markdown,
    type ThemeMode,
    type Translate,
    useTheme,
    useTranslation,
} from "@photino-net-utils/bridge";
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
import {DefaultAccentColor, DefaultSecondaryColor, normalizeColor, normalizeThemeMode} from "../theme";
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
        label: "back",
        note: "the_previous_folder_in_this_tab_the_mouse_back_button_and_the_browser_back_key_always_work"
    },
    {
        id: "goForward",
        label: "forward",
        note: "the_next_folder_in_this_tab_the_mouse_forward_button_and_the_browser_forward_key_always_work"
    },
    {id: "goUp", label: "up_one_level", note: "opens_the_folder_that_contains_the_current_one"},
    {id: "home", label: "home_folder", note: "jumps_to_the_user_s_home_folder_like_alt_home_in_dolphin"},
    {id: "find", label: "search", note: "opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too"},
    {id: "location", label: "edit_location", note: "turns_the_breadcrumbs_into_an_editable_path_ctrl_l_in_dolphin"},
    {id: "closeTab", label: "close_tab", note: "closes_the_tab_that_is_open"},
    {id: "newTab", label: "new_tab", note: "opens_the_overview_in_a_new_tab"},
    {id: "reopenTab", label: "reopen_closed_tab", note: "brings_back_the_tab_you_closed_last_folder_and_all"},
    {id: "nextTab", label: "next_tab", note: "cycles_to_the_next_tab"},
    {id: "previousTab", label: "previous_tab", note: "cycles_to_the_previous_tab"},
    {id: "copy", label: "copy", note: "ctrl_d_copies_too_following_kde_s_file_manager"},
    {id: "cut", label: "cut", note: "moves_the_selection_on_the_next_paste"},
    {id: "paste", label: "paste", note: "copies_or_moves_the_clipboard_s_files_into_the_current_folder"},
    {id: "undo", label: "undo", note: "undoes_the_last_file_operation_in_this_session"},
    {id: "redo", label: "redo", note: "repeats_the_operation_that_was_just_undone"},
    {id: "delete", label: "move_to_the_recycle_bin", note: "delete_is_del_by_default_not_ctrl_d"},
    {
        id: "deletePermanently",
        label: "delete_permanently",
        note: "bypasses_the_recycle_bin_dolphin_uses_shift_delete"
    },
    {id: "rename", label: "rename", note: "renames_the_single_selected_entry"},
    {id: "selectAll", label: "select_all", note: "selects_every_entry_in_the_current_folder"},
    {
        id: "invertSelection",
        label: "invert_selection",
        note: "selects_everything_that_is_not_selected_dolphin_uses_ctrl_shift_a"
    },
    {id: "open", label: "open", note: "opens_the_selected_folder_or_file"},
    {id: "newFolder", label: "new_folder", note: "creates_a_folder_in_the_current_directory_f10_also_works"},
    {id: "properties", label: "properties", note: "opens_the_shell_properties_sheet"},
    {id: "iconsView", label: "icons_view", note: "switches_the_folder_to_the_grid_view"},
    {id: "detailsView", label: "details_view", note: "switches_the_folder_to_the_list_view"},
    {
        id: "terminal",
        label: "open_terminal",
        note: "opens_windows_terminal_in_the_current_folder_dolphin_uses_f4_for_its_terminal_panel"
    },
    {
        id: "hidden",
        label: "show_hidden_files",
        note: "toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer"
    },
    {id: "splitView", label: "split_view", note: "shows_the_next_file_tab_beside_the_current_one_f3_in_dolphin"},
    {id: "openInNewTab", label: "open_in_a_new_tab", note: "hold_this_while_clicking_a_folder"},
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

const ThemeModes: { id: ThemeMode; label: LocalizationKey }[] = [
    {id: "system", label: "follow_system"},
    {id: "light", label: "light"},
    {id: "dark", label: "dark"},
];

/** The choices offered for every timestamp; "custom" reveals the pattern box. */
const TimeModes: { id: string; label: LocalizationKey }[] = [
    {id: "system", label: "system"},
    {id: "24", label: "k_24_hour"},
    {id: "12", label: "k_12_hour"},
    {id: "custom", label: "custom"},
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
    {id: "application", label: "application"},
    {id: "startup", label: "startup"},
    {id: "fonts", label: "fonts"},
    {id: "time", label: "time_format"},
    {id: "updates", label: "updates"},
    {id: "colors", label: "colors"},
    {id: "background", label: "background"},
    {id: "safety", label: "safety"},
    {id: "tags", label: "tags"},
    {id: "files-view", label: "files_view"},
    {id: "shortcuts", label: "shortcuts"},
    {id: "memory", label: "memory"},
    {id: "overview", label: "overview"},
    {id: "gallery", label: "gallery"},
    {id: "icons", label: "icons"},
    {id: "extension-icons", label: "icons_by_extension"},
    {id: "folder-icons", label: "folder_icons"},
    {id: "folder-index", label: "folder_index"},
    {id: "indexing", label: "index_tasks"},
    {id: "files", label: "files"},
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
    // The background gallery previews the artwork the window would show right now.
    const theme = useTheme(normalizeThemeMode(settings?.themeMode));
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
            setUpdateError(t("could_not_check_for_updates"));
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
            if (!ack.ok) failDownload(ack.error ?? t("the_update_failed"));
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
            setTagError(t("could_not_add_the_tag"));
        } finally {
            setTagBusy(false);
        }
    };

    const recolorTag = async (name: string, color: string) => {
        setTags((current) => current.map((tag) => tag.name === name ? {...tag, color} : tag));

        if (!await setTagColor(name, color))
            setTagError(t("could_not_change_the_tag_s_color"));
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
                        note="the_build_its_yafm_links_and_what_reopens_at_launch"
                        title="application"
                    />
                    <Rows>
                        <Row>
                            <Label>{t("version")}</Label>
                            <Value>{appInfo ? `v${appInfo.version}` : "—"}</Value>
                        </Row>
                        <Row>
                            <Label>{t("platform")}</Label>
                            <Value>{appInfo?.platform ?? "—"}</Value>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("language")}</Label>
                                <Note>{t("the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system")}</Note>
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
                                <Label>{t("picker_window_size")}</Label>
                                <Note>{t("the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels")}</Note>
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
                                <Label>{t("web_server_port")}</Label>
                                <Note>{t("random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below")}</Note>
                            </RowText>
                            <RowEnd>
                                <SelectMenu
                                    disabled={!settings}
                                    onChange={(value) => void changeSharePortMode(value)}
                                    options={[
                                        {value: "random", label: t("random")},
                                        {value: "custom", label: t("custom_port")},
                                    ]}
                                    value={settings?.sharePortMode ?? "random"}
                                    width={160}
                                />
                            </RowEnd>
                        </Row>
                        {settings?.sharePortMode === "custom" && (
                            <Row>
                                <RowText>
                                    <Label>{t("custom_port")}</Label>
                                    <Note>{t("a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead")}</Note>
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
                                <Label>{t("link_paths")}</Label>
                                <Note>{t("relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path")}</Note>
                            </RowText>
                            <RowEnd>
                                <SelectMenu
                                    disabled={!settings}
                                    onChange={(value) => void update({linkPathMode: value})}
                                    options={[
                                        {value: "relative", label: t("relative")},
                                        {value: "absolute", label: t("absolute")},
                                    ]}
                                    value={settings?.linkPathMode ?? "relative"}
                                    width={160}
                                />
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("global_hotkey")}</Label>
                                <Note>{t("brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut")}</Note>
                            </RowText>
                            <RowEnd>
                                <KeyButton
                                    $listening={capturingGlobal}
                                    disabled={!settings}
                                    onClick={() => setCapturingGlobal(true)}
                                    type="button"
                                >
                                    {capturingGlobal
                                        ? t("press_a_key")
                                        : settings?.globalHotkey
                                            ? prettyShortcut(settings.globalHotkey)
                                            : t("none")}
                                </KeyButton>
                                {settings?.globalHotkey && (
                                    <SmallButton onClick={() => void update({globalHotkey: null})} type="button">
                                        {t("clear")}
                                    </SmallButton>
                                )}
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("open_yafm_links")}</Label>
                                <Note>
                                    {t("registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry")}
                                </Note>
                                {scheme.registered && !scheme.pathMatches && (
                                    <TagError>
                                        {t("the_registered_path_points_to_path_register_again_to_use_this_build",
                                            {path: scheme.registeredPath ?? "?"})}
                                    </TagError>
                                )}
                                {schemeError && <TagError>{schemeError}</TagError>}
                            </RowText>
                            <RowEnd>
                                <State $on={schemeActive}>{schemeActive ? t("active") : t("off")}</State>
                                <Toggle
                                    $on={schemeActive}
                                    disabled={schemeBusy}
                                    onClick={() => void toggleScheme()}
                                    title={schemeActive ? t("stop_opening_yafm_links") : t("open_yafm_links_with_this_app")}
                                    type="button"
                                >
                                    <Knob/>
                                </Toggle>
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("use_as_the_default_file_manager")}</Label>
                                <Note>
                                    {t("registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default")}
                                </Note>
                                {defaultManagerStatus?.registered && !defaultManagerStatus.pathMatches && (
                                    <TagError>
                                        {t("the_registered_path_points_to_path_register_again_to_use_this_build",
                                            {path: defaultManagerStatus.registeredPath ?? "?"})}
                                    </TagError>
                                )}
                                {defaultManagerError && <TagError>{defaultManagerError}</TagError>}
                            </RowText>
                            <RowEnd>
                                <State $on={defaultManagerRegistered}>
                                    {defaultManagerRegistered ? t("active") : t("off")}
                                </State>
                                <Toggle
                                    $on={defaultManagerRegistered}
                                    disabled={!settings || defaultManagerBusy}
                                    onClick={() => void changeDefaultManager()}
                                    title={defaultManagerRegistered
                                        ? t("stop_using_this_app_for_folders")
                                        : t("use_this_app_for_folders")}
                                    type="button"
                                >
                                    <Knob/>
                                </Toggle>
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("open_archives_with_this_app")}</Label>
                                <Note>
                                    {t("registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use")}
                                </Note>
                                <Note>
                                    {t("when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead")}
                                </Note>
                                {archiveStatus?.registered && !archiveStatus.pathMatches && (
                                    <TagError>
                                        {t("the_registered_path_points_to_path_register_again_to_use_this_build",
                                            {path: archiveStatus.registeredPath ?? "?"})}
                                    </TagError>
                                )}
                                {archiveError && <TagError>{archiveError}</TagError>}
                            </RowText>
                            <RowEnd>
                                <State $on={archiveRegistered}>
                                    {archiveRegistered ? t("active") : t("off")}
                                </State>
                                <ActionButton
                                    disabled={!settings || archiveBusy || archiveRegistered}
                                    onClick={() => void registerArchives()}
                                    type="button"
                                >
                                    {t("register")}
                                </ActionButton>
                                {appInfo?.platform === "windows" && (
                                    <ActionButton
                                        onClick={() => void openUrl("ms-settings:defaultapps")}
                                        type="button"
                                    >
                                        {t("default_apps")}
                                    </ActionButton>
                                )}
                                <DangerButton
                                    disabled={!settings || archiveBusy || !archivePresent}
                                    onClick={() => void unregisterArchives()}
                                    type="button"
                                >
                                    {t("unregister")}
                                </DangerButton>
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("reopen_the_tabs_that_were_open")}</Label>
                                <Note>
                                    {t("keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead")}
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
                        note="how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray"
                        title="startup"
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <Label>{t("start_with_the_computer")}</Label>
                                <Note>{t("a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster")}</Note>
                                {startupError && <TagError>{startupError}</TagError>}
                                {startup && !startup.supported &&
                                    <TagError>{t("this_platform_cannot_create_a_per_user_startup_entry")}</TagError>}
                            </RowText>
                            <RowEnd>
                                <SelectMenu
                                    disabled={!settings || startupBusy || (startup !== null && !startup.supported)}
                                    onChange={(value) => void changeStartup(value)}
                                    options={[
                                        {value: "none", label: t("none")},
                                        {value: "shortcut", label: t("shortcut")},
                                        {value: "task", label: t("scheduled_task")},
                                    ]}
                                    value={startup?.mode ?? settings?.startupMode ?? "none"}
                                    width={170}
                                />
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("start_hidden_in_the_tray")}</Label>
                                <Note>{t("launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again")}</Note>
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
                        note="choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face"
                        title="fonts"
                    />
                    <Rows>
                        {FontRoles.map((role) => (
                            <Row key={role.id}>
                                <RowText>
                                    <Label>{t(role.label)}</Label>
                                    <Note>{t("falls_back_to_font_until_another_family_is_chosen", {font: t(role.fallback as LocalizationKey)})}</Note>
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
                                <Label>{t("reset")}</Label>
                                <Note>{t("back_to_the_app_s_built_in_font_for_every_role")}</Note>
                            </RowText>
                            <RowEnd>
                                <ActionButton onClick={() => void update({fonts: {}})} type="button">
                                    {t("reset")}
                                </ActionButton>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("time")}>
                    <Head
                        note="every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern"
                        title="time_format"
                    />
                    <Rows>
                        <Block>
                            <BlockHead>
                                <Label>{t("format")}</Label>
                                <Note>{t("follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern")}</Note>
                            </BlockHead>
                            <SegmentRow>
                                {TimeModes.map((mode) => (
                                    <SegmentButton
                                        $active={(settings?.timeFormat ?? "24") === mode.id}
                                        key={mode.id}
                                        onClick={() => void update({timeFormat: mode.id})}
                                        type="button"
                                    >
                                        {t(mode.label)}
                                    </SegmentButton>
                                ))}
                            </SegmentRow>
                            {(settings?.timeFormat ?? "24") === "custom" && (
                                <>
                                    <TimePatternInput
                                        aria-label={t("pattern")}
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
                                    <Note>{t("tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied")}</Note>
                                </>
                            )}
                            <TimePreview>
                                <span>{t("preview")}</span>
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
                        note="the_running_build_and_the_newest_one_published"
                        title="updates"
                    />
                    <Rows>
                        <Row>
                            <Label>{t("current_version")}</Label>
                            <Value>{appInfo ? `v${appInfo.version}` : "—"}</Value>
                        </Row>
                        <Row>
                            <Label>{t("latest_version")}</Label>
                            <Value>{updateState ? `v${updateState.latest}` : "—"}</Value>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>
                                    {updateState
                                        ? updateState.available
                                            ? t("version_version_is_available", {version: updateState.latest})
                                            : t("you_are_on_the_latest_version")
                                        : t("not_checked_yet")}
                                </Label>
                                <Note>
                                    {updateState?.available
                                        ? t("the_installer_downloads_installs_itself_and_closes_the_app")
                                        : t("reads_the_version_file_the_release_workflow_publishes")}
                                </Note>
                            </RowText>
                            <RowEnd>
                                {updateState?.available ? (
                                    <>
                                        <ActionButton
                                            onClick={() => void openReleasePage()}
                                            type="button"
                                        >
                                            {t("open_release_page")}
                                        </ActionButton>
                                        {isWindows && (
                                            <ActionButton
                                                disabled={updateDialog !== null}
                                                onClick={() => void downloadAndInstall()}
                                                type="button"
                                            >
                                                {t("download_and_install")}
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
                                            {updateBusy ? t("checking") : t("check_for_updates")}
                                        </ActionButton>
                                        <ActionButton
                                            onClick={() => void openLogsFolder()}
                                            type="button"
                                        >
                                            {t("open_log_folder")}
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
                        note="the_accent_and_highlight_colours_the_whole_window_uses"
                        title="colors"
                    />
                    <Rows>
                        <Block>
                            <BlockHead>
                                <Label>{t("theme")}</Label>
                                <Note>{t("follow_the_operating_system_or_always_use_the_light_or_dark_palette")}</Note>
                            </BlockHead>
                            <SegmentRow>
                                {ThemeModes.map((mode) => (
                                    <SegmentButton
                                        $active={(settings?.themeMode ?? "system") === mode.id}
                                        key={mode.id}
                                        onClick={() => void update({themeMode: mode.id})}
                                        type="button"
                                    >
                                        {t(mode.label)}
                                    </SegmentButton>
                                ))}
                            </SegmentRow>
                        </Block>
                        <Block>
                            <BlockHead>
                                <Label>{t("presets")}</Label>
                                <Note>{t("one_click_changes_the_accent_and_the_highlight_together")}</Note>
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
                                            title={t("remove_preset")}
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
                                                placeholder={t("preset_name")}
                                                spellCheck={false}
                                                value={draftPreset.name}
                                            />
                                            <SmallButton onClick={() => void savePreset()} type="button">
                                                {t("save")}
                                            </SmallButton>
                                            <SmallButton onClick={() => setDraftPreset(null)} type="button">
                                                {t("cancel")}
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
                                            title={t("save_the_current_colours_as_a_preset")}
                                            type="button"
                                        >
                                            <PlusIcon size={12}/>
                                            {t("add_preset")}
                                        </AddPreset>
                                    )}
                            </PresetGrid>
                        </Block>
                        <Row>
                            <RowText>
                                <Label>{t("accent_color")}</Label>
                                <Note>{t("buttons_selections_focus_rings_and_active_navigation")}</Note>
                            </RowText>
                            <RowEnd>
                                <RecentSwatches
                                    colors={recentColors.accent}
                                    current={accentNow}
                                    onApply={(color) => applyColor("accent", color)}
                                />
                                <ColorWell
                                    aria-label={t("accent_color")}
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
                                <Label>{t("secondary_color")}</Label>
                                <Note>{t("gradients_highlights_and_the_second_end_of_the_accent_ramp")}</Note>
                            </RowText>
                            <RowEnd>
                                <RecentSwatches
                                    colors={recentColors.secondary}
                                    current={secondaryNow}
                                    onApply={(color) => applyColor("secondary", color)}
                                />
                                <ColorWell
                                    aria-label={t("secondary_color")}
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
                                <Label>{t("reset_colors")}</Label>
                                <Note>{t("returns_the_interface_to_the_default_blue_and_indigo_theme")}</Note>
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
                                    {t("reset")}
                                </SmallButton>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("background")}>
                    <Head
                        note="a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom"
                        title="background"
                    />
                    <Rows>
                        <Block>
                            <BlockHead>
                                <Label>{t("wallpaper")}</Label>
                                <Note>{t("none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery")}</Note>
                            </BlockHead>
                            <VariantRow>
                                <Variant
                                    $active={!settings?.backgroundSource}
                                    onClick={() => void update({backgroundSource: null})}
                                    title={t("none")}
                                    type="button"
                                >
                                    <NoneLabel>{t("none")}</NoneLabel>
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
                                                    <img alt="" src={theme === "light" ? variant.lightUrl : variant.url}/>
                                                </Variant>
                                            ))}
                                        </VariantRow>
                                    </GalleryGroup>
                                ))}

                                <GalleryGroup>
                                    <GalleryLabel>{t("motion")}</GalleryLabel>
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
                                    <GalleryLabel>{t("custom")}</GalleryLabel>
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
                                            <PlusIcon size={12}/>{t("image_2")}
                                        </AddTile>
                                        <AddTile
                                            onClick={() => void addBackground([".mp4", ".webm", ".mkv", ".mov", ".m4v", ".avi", ".wmv", ".ogv"])}
                                            type="button"
                                        >
                                            <PlusIcon size={12}/>{t("video")}
                                        </AddTile>
                                    </VariantRow>
                                </GalleryGroup>
                            </Gallery>
                        </Block>
                        <Row>
                            <RowText>
                                <Label>{t("image_or_video_url")}</Label>
                                <Note>{t("paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts")}</Note>
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
                                    {t("add")}
                                </SmallButton>
                            </RowEnd>
                        </Row>
                        <Row>
                            <Label>{t("blur")}</Label>
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
                            <Label>{t("saturation")}</Label>
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
                            <Label>{t("brightness")}</Label>
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
                        note="deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation"
                        title="safety"
                    />
                    <Rows>
                        <Block>
                            <BlockHead>
                                <Label>{t("protected_folders")}</Label>
                                <Note>{t("rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first")}</Note>
                            </BlockHead>
                            <ProtectList>
                                {(settings?.protectedPaths ?? []).map((pattern) => (
                                    <ProtectRow key={pattern}>
                                        <ProtectInput
                                            aria-label={t("protected_path")}
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
                                            title={t("remove")}
                                            type="button"
                                        >
                                            <CrossIcon size={10}/>
                                        </ProtectRemove>
                                    </ProtectRow>
                                ))}
                            </ProtectList>
                            <ProtectNewRule>
                                <RuleInput
                                    aria-label={t("new_protected_rule")}
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
                                    {t("add_the_rule")}
                                </SmallButton>
                            </ProtectNewRule>
                            <ProtectAdd>
                                <SmallButton onClick={() => void restoreProtectedDefaults()} type="button">
                                    {t("restore_defaults")}
                                </SmallButton>
                                <SmallButton onClick={() => void addProtectedFolder()} type="button">
                                    {t("add_folder_2")}
                                </SmallButton>
                            </ProtectAdd>
                        </Block>
                        <Row>
                            <RowText>
                                <Label>{t("confirmation_delay")}</Label>
                                <Note>{t("the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2")}</Note>
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
                        note="every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here"
                        title="tags"
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <LabelRow>
                                    <TagColorInput
                                        aria-label={t("color_of_the_new_tag")}
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
                                        placeholder={t("new_tag")}
                                        spellCheck={false}
                                        value={newTagName}
                                    />
                                </LabelRow>
                                <Note>{t("add_a_tag_here_it_is_available_in_every_folder")}</Note>
                            </RowText>
                            <RowEnd>
                                <SmallButton
                                    disabled={tagBusy || newTagName.trim().length === 0}
                                    onClick={() => void addTag()}
                                    type="button"
                                >
                                    {t("add")}
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
                                    {t("no_tags_yet_add_one_below_it_is_available_in_every_folder")}
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
                                                        aria-label={t("color_of_tag", {tag: tag.name})}
                                                        onChange={(event) => void recolorTag(tag.name, event.target.value)}
                                                        title={t("change_this_tag_s_color")}
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
                                                <Note>{t("press_enter_to_save_escape_to_cancel")}</Note>
                                            </RowText>
                                            <RowEnd>
                                                <SmallButton disabled={tagBusy} onClick={() => void saveTagName()}
                                                             type="button">
                                                    {t("save")}
                                                </SmallButton>
                                                <SmallButton disabled={tagBusy} onClick={() => setEditingTag(null)}
                                                             type="button">
                                                    {t("cancel")}
                                                </SmallButton>
                                            </RowEnd>
                                        </>
                                    )
                                    : (
                                        <>
                                            <RowText>
                                                <LabelRow>
                                                    <TagColorInput
                                                        aria-label={t("color_of_tag", {tag: tag.name})}
                                                        onChange={(event) => void recolorTag(tag.name, event.target.value)}
                                                        title={t("change_this_tag_s_color")}
                                                        type="color"
                                                        value={tag.color ?? DefaultTagColor}
                                                    />
                                                    <Label>{tag.name}</Label>
                                                </LabelRow>
                                                <Note>
                                                    {plural(t, tag.folders, "used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index", "used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes")}
                                                </Note>
                                            </RowText>
                                            <RowEnd>
                                                <SmallButton
                                                    disabled={tagBusy}
                                                    onClick={() => setEditingTag({name: tag.name, value: tag.name})}
                                                    type="button"
                                                >
                                                    {t("edit")}
                                                </SmallButton>
                                                <DangerButton
                                                    disabled={tagBusy}
                                                    onClick={() => void removeTag(tag.name)}
                                                    type="button"
                                                >
                                                    <TrashIcon size={13}/>
                                                    {t("remove")}
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
                        note="the_defaults_every_folder_starts_with_a_folder_can_still_override_them"
                        title="files_view"
                        global
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <Label>{t("default_view")}</Label>
                                <Note>
                                    {t("the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar")}
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
                                        {t("list")}
                                    </Segment>
                                    <Segment
                                        $on={defaultView.mode === "grid"}
                                        onClick={() => void update({
                                            defaultView: {...defaultView, mode: "grid"},
                                        })}
                                        type="button"
                                    >
                                        {t("grid")}
                                    </Segment>
                                </Segmented>
                            </RowEnd>
                        </Row>
                        <Row>
                            <RowText>
                                <Label>{t("list_icon_size")}</Label>
                                <Note>{t("the_icon_in_the_list_rows")}</Note>
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
                                <Label>{t("grid_size")}</Label>
                                <Note>{t("the_height_of_a_grid_tile_the_icon_inside_follows_it")}</Note>
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
                                    <Label>{t("selection_checkboxes")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    {t("show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together")}
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
                                    <Label>{t("open_with_a_single_click")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    {t("off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry")}
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
                                    <Label>{t("open_the_file_tray_while_dragging")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    {t("the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button")}
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
                                    <Label>{t("confirm_before_deleting")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    {t("asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently")}
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
                                    <Label>{t("play_audio_in_video_previews")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    {t("video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open")}
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
                                    <Label>{t("autoplay_video_previews")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    {t("off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off")}
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
                                    <Label>{t("preview_panel_under_the_list")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>
                                    {t("shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode")}
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
                                    <Label>{t("columns")}</Label>
                                    <GlobalTag/>
                                </LabelRow>
                                <Note>{t("shown_in_every_folder_changing_them_changes_all_folders_at_once")}</Note>
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
                                    <span>{t("link_target_after_the_name")}</span>
                                </ColumnCheck>
                            </ColumnGrid>
                        </Row>
                    </Rows>
                    <Footnote>
                        {t("the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar")}{" "}
                        <GlobalTag/> {t("anything_marked_as_global_always_applies_to_every_folder")}
                    </Footnote>
                </Section>

                <Section ref={anchor("shortcuts")}>
                    <Head
                        note="the_keys_this_window_listens_for_click_a_combination_to_record_a_new_one"
                        title="shortcuts"
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
                                        {capturing === id ? t("press_a_key") : prettyShortcut(keys[id])}
                                    </KeyButton>
                                </RowEnd>
                            </Row>
                        ))}
                        <Row>
                            <RowText>
                                <Label>{t("reset")}</Label>
                                <Note>{t("back_to_the_default_combination_for_every_action")}</Note>
                            </RowText>
                            <RowEnd>
                                <ActionButton
                                    onClick={() => void update({shortcuts: {...DefaultShortcuts}})}
                                    type="button"
                                >
                                    {t("reset")}
                                </ActionButton>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("memory")}>
                    <Head
                        note="what_the_process_holds_and_how_to_give_it_back"
                        title="memory"
                    />
                    <Rows>
                        <Gauge>
                            <GaugeHead>
                                <Label>{t("process_memory")}</Label>
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
                                    ? t("committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process",
                                        {
                                            available: formatBytes(memory.available),
                                            resident: formatBytes(memory.workingSet)
                                        })
                                    : t("reading_the_current_usage")}
                            </Note>
                        </Gauge>

                        <Gauge>
                            <GaugeHead>
                                <Label>{t("managed_heap")}</Label>
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
                                {t("share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection")}
                            </Note>
                        </Gauge>

                        <Gauge>
                            <GaugeHead>
                                <Label>{t("native_and_runtime")}</Label>
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
                                {t("the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure")}
                            </Note>
                        </Gauge>

                        <Row>
                            <RowText>
                                <Label>{t("free_memory")}</Label>
                                <Note>{t("compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe")}</Note>
                            </RowText>
                            <RowEnd>
                                <ActionButton onClick={() => void trimMemory().then(setMemory)} type="button">
                                    {t("trim_now")}
                                </ActionButton>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("overview")}>
                    <Head
                        note="the_home_tab_s_history_and_how_much_of_it_it_shows"
                        title="overview"
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <Label>{t("recent_items")}</Label>
                                <Note>{t("how_many_recently_opened_folders_the_overview_lists_0_hides_the_section")}</Note>
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
                        note="the_folders_the_gallery_scans_for_pictures_and_videos"
                        title="gallery"
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
                                        title={t("stop_scanning_this_folder")}
                                        type="button"
                                    >
                                        <CrossIcon size={12}/>
                                    </IconButton>
                                </RowEnd>
                            </Row>
                        ))}

                        <Row>
                            <RowText>
                                <Label>{t("scan_folders")}</Label>
                                <Note>
                                    {(settings?.galleryRoots ?? []).length === 0
                                        ? t("nothing_added_yet_so_the_gallery_reads_the_pictures_folder")
                                        : t("only_these_folders_are_scanned_three_levels_deep")}
                                </Note>
                            </RowText>
                            <RowEnd>
                                <ActionButton onClick={() => void addGalleryRoot()} type="button">
                                    {t("choose_folder")}
                                </ActionButton>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("icons")}>
                    <Head
                        note="where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from"
                        title="icons"
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <Label>{t("use_system_file_icons")}</Label>
                                <Note>{t("ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs")}</Note>
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
                                <Label>{t("use_custom_folder_icons")}</Label>
                                <Note>
                                    {t("folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off")}
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
                        note="a_custom_glyph_for_one_file_extension"
                        title="icons_by_extension"
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
                                            title={t("remove_this_rule")}
                                            type="button"
                                        >
                                            <CrossIcon size={12}/>
                                        </IconButton>
                                    </RowEnd>
                                </Row>
                            ))}

                        <Row>
                            <RowText>
                                <Label>{t("add_a_rule")}</Label>
                                <Note>{t("extension_and_the_icon_to_draw_for_it")}</Note>
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
                                        title={t("choose_the_icon")}
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
                                <IconButton onClick={() => void addRule()} title={t("add_the_rule")} type="button">
                                    <PlusIcon size={13}/>
                                </IconButton>
                            </RowEnd>
                        </Row>
                    </Rows>
                </Section>

                <Section ref={anchor("folder-icons")}>
                    <Head
                        note="a_single_folder_can_carry_an_icon_of_its_own"
                        title="folder_icons"
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <Label>{t("give_a_folder_its_own_icon")}</Label>
                                <Note>
                                    {t("stored_in_the_folder_s_parent_index_so_it_stays_with_the_files", {index: ".yafm-index.db"})}
                                </Note>
                            </RowText>
                            <RowEnd>
                                {folderIcon && <Thumb src={folderIcon.icon}/>}
                                <ActionButton disabled={busy} onClick={() => void assignFolderIcon()} type="button">
                                    {busy ? t("choosing") : t("choose_folder_and_icon")}
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
                                    <Badge><CheckIcon size={11}/> {t("saved")}</Badge>
                                </RowEnd>
                            </Row>
                        )}
                    </Rows>
                </Section>

                <Section ref={anchor("folder-index")}>
                    <Head
                        note="the_hidden_cache_that_makes_a_folder_open_instantly_next_time"
                        title="folder_index"
                    />
                    <Rows>
                        <Row>
                            <RowText>
                                <Label>{t("keep_a_index_in_every_folder", {index: ".yafm-index.db"})}</Label>
                                <Note>
                                    {t("holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only")}
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
                                <Label>{t("directory_index_blacklist")}</Label>
                                <Note>{t("rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files")}</Note>
                            </BlockHead>
                            <ProtectList>
                                {(settings?.directoryIndexBlacklist ?? []).map((pattern) => (
                                    <ProtectRow key={pattern}>
                                        <ProtectInput
                                            aria-label={t("directory_index_blacklist_rule")}
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
                                            title={t("remove")}
                                            type="button"
                                        >
                                            <CrossIcon size={10}/>
                                        </ProtectRemove>
                                    </ProtectRow>
                                ))}
                            </ProtectList>
                            <ProtectNewRule>
                                <RuleInput
                                    aria-label={t("directory_index_blacklist_rule")}
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
                                    {t("add_the_rule")}
                                </SmallButton>
                            </ProtectNewRule>
                            <ProtectAdd>
                                <SmallButton onClick={restoreDirectoryRules} type="button">
                                    {t("restore_defaults")}
                                </SmallButton>
                                <SmallButton onClick={() => void addDirectoryFolder()} type="button">
                                    {t("add_folder_2")}
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
                        note="background_folder_size_and_item_count_walks"
                        title="index_tasks"
                    />
                    <IndexTaskList/>
                </Section>

                <Section ref={anchor("files")}>
                    <Head
                        note="what_the_listings_include"
                        title="files"
                    />
                    <Rows>
                        <Row>
                            <Label>{t("hidden_items")}</Label>
                            <Value>{describe(t, visibility?.showHidden)}</Value>
                        </Row>
                        <Row>
                            <Label>{t("protected_operating_system_files")}</Label>
                            <Value>{describe(t, visibility?.showSystem)}</Value>
                        </Row>
                    </Rows>
                    <Footnote>
                        {t("listings_follow_the_file_manager_s_own_settings_hidden_and_protected_items_are_only_shown_when_the_operating_system_is_set_to_show_them")}
                    </Footnote>
                </Section>
            </Main>

            <Toc aria-label={t("settings_sections")}>
                <TocLabel>{t("sections")}</TocLabel>
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
                <TocNote>{t("changes_are_saved_as_you_make_them")}</TocNote>
            </Toc>

            {updateDialog && createPortal(
                <UpdateOverlay>
                    <UpdatePanel aria-modal="true" role="dialog">
                        <UpdateHead>
                            <h2>{t("software_update")}</h2>
                            <p>
                                {updateState?.latest
                                    ? t("version_version", {version: updateState.latest})
                                    : t("preparing_the_update")}
                            </p>
                        </UpdateHead>

                        <ChangelogHead>{t("changelog")}</ChangelogHead>
                        {updateDialog.changelog
                            ? <Changelog onClick={openChangelogLink}>
                                <Markdown source={updateDialog.changelog}/>
                            </Changelog>
                            : <ChangelogNote>
                                {updateDialog.phase === "changelog"
                                    ? t("loading_the_changelog")
                                    : t("the_changelog_could_not_be_loaded")}
                            </ChangelogNote>}

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
                                    {t("cancel")}
                                </ActionButton>
                            )}
                            {updateDialog.phase === "ready" && (
                                <ActionButton onClick={() => void installNow()} type="button">
                                    {t("install_update")}
                                </ActionButton>
                            )}
                            {updateDialog.phase === "installing" && (
                                <ActionButton disabled type="button">{t("installing")}</ActionButton>
                            )}
                            {(updateDialog.phase === "ready" || updateDialog.phase === "error"
                                || updateDialog.phase === "cancelled" || updateDialog.phase === "installing") && (
                                <ActionButton onClick={() => setUpdateDialog(null)} type="button">
                                    {t("close")}
                                </ActionButton>
                            )}
                        </UpdateActions>
                    </UpdatePanel>
                </UpdateOverlay>, document.body)}
        </Page>
    );
}

function describe(t: Translate, value: boolean | undefined): string {
    if (value === undefined) return t("reading");

    return value ? t("shown") : t("hidden");
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
        return <Notice>{t("index_task_information_is_unavailable")}</Notice>;

    if (tasks.count === 0)
        return <Notice>{t("no_indexing_tasks_are_running")}</Notice>;

    return (
        <Rows>
            <Row>
                <Label>{t("count_indexing_tasks", {count: tasks.count})}</Label>
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
    const place = t(platform === "windows" ? "appdata_which_sits_on_the_system_drive_usually_c"
        : platform === "linux" ? "your_home_folder_which_often_shares_a_partition_with_the_system"
            : "the_app_s_settings_folder_which_usually_sits_on_the_system_drive");

    return t("indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files",
        {place});
}

function describeSource(t: Translate, source: string): string {
    return source.startsWith("file:") ? source.slice(5) : t("built_in_source", {source});
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
            <Remove onClick={onRemove} title={t("remove")} type="button">
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
        window.addEventListener("blur", close);
        window.addEventListener("scroll", close, true);
        window.addEventListener("resize", close);

        return () => {
            window.removeEventListener("pointerdown", onPointerDown, true);
            window.removeEventListener("keydown", onKey, true);
            window.removeEventListener("blur", close);
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
    if (code === SystemLanguage) return t("system_default");

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
                title={t("previous_colour_colour", {colour: previous})}
                type="button"
            >
                <i/>
                {t("previous")}
            </PreviousColor>
            {rest.map((color) => (
                <Swatch
                    $color={color}
                    key={color}
                    onClick={() => onApply(color)}
                    title={t("use_colour", {colour: color})}
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
            return t("preparing_the_update");
        case "downloading":
            return t("downloading_the_update");
        case "ready":
            return t("download_complete");
        case "cancelled":
            return t("update_cancelled");
        case "error":
            return t("the_update_failed");
        case "installing":
            return t("installing");
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
    box-shadow: var(--shadow-dialog);
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

/** The release notes, rendered from Markdown by the shared bridge component. */
const Changelog = styled.div`
    max-height: 260px;
    overflow: auto;
    font-size: 12px;
    line-height: 1.55;
    color: var(--text-secondary);

    > :first-child {
        margin-top: 0;
    }

    h1,
    h2,
    h3 {
        margin: 10px 0 4px;
        font-family: var(--font-title), var(--font-cjk);
        font-size: 12px;
        color: var(--text-primary);
    }

    p {
        margin: 4px 0;
    }

    ul,
    ol {
        margin: 4px 0;
        padding-left: 18px;
    }

    li {
        margin: 2px 0;
    }

    a {
        color: var(--accent-primary);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    code {
        padding: 1px 4px;
        border-radius: 4px;
        background: rgba(var(--accent-rgb), 0.14);
        font-family: var(--font-mono);
        font-size: 11px;
    }

    pre {
        margin: 6px 0;
        padding: 8px 10px;
        border-radius: var(--radius-sm);
        background: var(--bg-input);
        overflow: auto;

        code {
            padding: 0;
            background: none;
        }
    }

    blockquote {
        margin: 6px 0;
        padding-left: 10px;
        border-left: 2px solid var(--border-color-hover);
        color: var(--text-muted);
    }

    hr {
        margin: 8px 0;
        border: 0;
        border-top: 1px solid var(--border-color);
    }
`;

const ChangelogNote = styled.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;

/** Release notes link to GitHub; opening them in the window would replace the interface. */
function openChangelogLink(event: MouseEvent<HTMLDivElement>) {
    const anchor = (event.target as Element | null)?.closest("a");
    if (!anchor) return;

    event.preventDefault();
    void openUrl(anchor.href);
}

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
    box-shadow: var(--shadow-menu);
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

const SegmentRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`;

const SegmentButton = styled.button<{ $active?: boolean }>`
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
