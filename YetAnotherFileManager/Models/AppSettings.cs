using System.Text.Json.Serialization;
using PhotinoNetUtils.Settings;

namespace YetAnotherFileManager.Models;

/// <summary>
///     The preferences the interface can change. Missing values in an older settings file mean "the
///     default", so the fields are nullable and read through the accessors below.
/// </summary>
[SettingsModel]
public sealed record AppSettings(
    [property: Setting(Comment = "Use the shell's icon for each file type.")]
    bool? SystemIcons = null,
    [property: Setting(Comment = "Let a folder show the icon it carries.")]
    bool? CustomFolderIcons = null,
    [property: Setting(Comment = "Keep a hidden .yafm-index.db inside every folder that is browsed.")]
    bool? WriteDirectoryIndex = null,
    [property: Setting(Comment = "Glob rules for folders that keep their index in the central store.")]
    List<string>? DirectoryIndexBlacklist = null,
    [property: Setting(Comment = "Built-in icon name or file:<path> for one extension.")]
    Dictionary<string, string>? ExtensionIcons = null,
    [property: Setting(Comment = "Quick access folders, in order; empty keeps the well-known defaults.")]
    List<string>? QuickAccess = null,
    [property: Setting(Comment = "How many recent folders to show; 0 turns the list off.")]
    int? RecentLimit = null,
    [property: Setting(Comment = "Folders the gallery scans; empty uses the Pictures folder.")]
    List<string>? GalleryRoots = null,
    [property: Setting(Comment = "Overview panels, in the order they are shown.")]
    List<string>? OverviewPanels = null,
    [property: Setting(Comment = "Panels older versions hid; only read to migrate them away.")]
    List<string>? OverviewHidden = null,
    [property: Setting(Comment = "Overview columns, 1 to 5.")]
    int? OverviewColumns = null,
    [property: Setting(Comment = "Name given to a quick-access folder, by path.")]
    Dictionary<string, string>? PlaceNames = null,
    [property: Setting(Comment = "Key combination per action, e.g. ctrl+w.")]
    Dictionary<string, string>? Shortcuts = null,
    [property: Setting(Comment = "Icon given to a quick-access folder, by path.")]
    Dictionary<string, string>? PlaceIcons = null,
    [property: Setting(Comment = "Title given to an overview panel, by panel id.")]
    Dictionary<string, string>? OverviewTitles = null,
    [property: Setting(Comment = "List or grid per overview panel, by panel id.")]
    Dictionary<string, string>? OverviewViews = null,
    [property: Setting(Comment = "Icon per overview panel, by panel id.")]
    Dictionary<string, string>? OverviewIcons = null,
    [property: Setting(Comment = "Overview panels that also appear in the sidebar.")]
    List<string>? OverviewPinned = null,
    [property: Setting(Comment = "Open yafm:// links with this app.")]
    bool? LinksEnabled = null,
    [property: Setting(Comment = "Folders shown by one quick-access panel, by panel id.")]
    Dictionary<string, List<string>>? PanelPlaces = null,
    [property: Setting(Comment = "Reopen the tabs that were open when the app closed.")]
    bool? RestoreTabs = null,
    [property: Setting(Comment = "Tabs open at the last close; the window keeps these up to date.")]
    List<string>? OpenTabs = null,
    [property: Setting(Comment = "Index of the tab that was focused.")]
    int? ActiveTab = null,
    [property: Setting(Comment = "View mode, sizes and preview strip every folder starts with.")]
    ViewDefaults? DefaultView = null,
    [property: Setting(Comment = "Show a selection checkbox before every name.")]
    bool? ShowCheckboxes = null,
    [property: Setting(Comment = "Open a folder or file with one click instead of two.")]
    bool? OpenOnSingleClick = null,
    [property: Setting(Comment = "Ask before moving items to the recycle bin.")]
    bool? ConfirmDelete = null,
    [property: Setting(Comment = "Play audio in video previews.")]
    bool? PreviewVideoAudio = null,
    [property: Setting(Comment = "Start a video preview automatically.")]
    bool? PreviewVideoAutoplay = null,
    [property: Setting(Comment = "Show the floating file tray when a drag starts.")]
    bool? TrayAutoShow = null,
    [property: Setting(Comment = "Colour the whole interface is built around.")]
    string? AccentColor = null,
    [property: Setting(Comment = "Second colour of the accent gradient.")]
    string? SecondaryColor = null,
    [property: Setting(Comment = "Interface language; 'system' follows the operating system.")]
    string? Language = null,
    [property: Setting(Comment = "Colour pairs the user saved.")]
    List<ThemePreset>? ThemePresets = null,
    [property: Setting(Comment = "Register this app for folder opens.")]
    bool? DefaultFileManager = null,
    [property: Setting(Comment = "Backdrop picture, video or built-in concept; empty keeps the dark surface.")]
    string? BackgroundSource = null,
    [property: Setting(Comment = "Backdrop files the user added.")]
    List<string>? BackgroundCustom = null,
    [property: Setting(Comment = "Backdrop blur, in pixels.")]
    int? BackgroundBlur = null,
    [property: Setting(Comment = "Backdrop saturation, in percent.")]
    int? BackgroundSaturation = null,
    [property: Setting(Comment = "Backdrop brightness, in percent.")]
    int? BackgroundBrightness = null,
    [property: Setting(Comment = "Paths a change must stop at; a trailing ** covers the subtree.")]
    List<string>? ProtectedPaths = null,
    [property: Setting(Comment = "Seconds the protected-folder confirmation stays disabled.")]
    int? DeleteDelaySeconds = null,
    [property: Setting(Comment = "Every timestamp: 'system', '12', '24' or 'custom'.")]
    string? TimeFormat = null,
    [property: Setting(Comment = "Pattern used when timeFormat is custom.")]
    string? TimeFormatPattern = null,
    [property: Setting(Comment = "Show ordinary hidden files.")]
    bool? ShowHidden = null,
    [property: Setting(Comment = "Register this app for archive files.")]
    bool? ArchiveHandler = null,
    [property: Setting(Comment = "Width of the folder and file picker window.")]
    int? PickerWindowWidth = null,
    [property: Setting(Comment = "Height of the folder and file picker window.")]
    int? PickerWindowHeight = null,
    [property: Setting(Comment = "Links are created relative unless this is 'absolute'.")]
    string? LinkPathMode = null,
    [property: Setting(Comment = "Picture or video above the overview panels.")]
    string? OverviewBanner = null,
    [property: Setting(Comment = "Overview banner height, in pixels.")]
    int? OverviewBannerHeight = null,
    [property: Setting(Comment = "Banner media the user added.")]
    List<string>? OverviewBanners = null,
    [property: Setting(Comment = "Vertical crop of the banner, 0 is the top.")]
    double? OverviewBannerOffset = null,
    [property: Setting(Comment = "Key combination that brings the window forward; empty disables it.")]
    string? GlobalHotkey = null,
    [property: Setting(Comment = "Font family per interface role; empty uses the built-in faces.")]
    Dictionary<string, string>? Fonts = null,
    [property: Setting(Comment = "'random' lets the OS pick a free port; 'custom' uses sharePort.")]
    string? SharePortMode = null,
    [property: Setting(Comment = "Port used when sharePortMode is custom.")]
    int? SharePort = null,
    [property: Setting(Comment = "'none', 'shortcut' or 'task': how the app joins the session.")]
    string? StartupMode = null,
    [property: Setting(Comment = "Start in the tray instead of showing the window.")]
    bool? StartHidden = null,
    [property: Setting(Comment = "Files and folders pinned to the overview Favorites panel.")]
    List<FavoriteEntry>? Favorites = null)
{
    public static AppSettings Default =>
        new(true, true, true, ["**/uv/cache/**", "**/scoop/buckets/**"], [], null, 10, null,
            ["quick", "frequent", "recent", "home", "drives", "share", "favorites"], null, 1, null,
            null, null, null, null, null, ["quick", "frequent", "recent", "drives"], null, null, true, null, 0, null,
            true, false, false, false, false, true, null, null, null, null, false, null, null, null, null, null, null, 5,
            "24", null, null, false, 1200, 800, "relative", null, 220, [], 0.3, null, null, null, null, null, null, null);

    // The accessors below are derived, so they are kept out of settings.toml entirely; only the
    // fields above are stored, and the JSON stays readable and stable.

    [JsonIgnore]
    public bool UseSystemIcons => SystemIcons ?? true;

    [JsonIgnore]
    public bool UseCustomFolderIcons => CustomFolderIcons ?? true;

    [JsonIgnore]
    public bool ShouldWriteDirectoryIndex => WriteDirectoryIndex ?? true;

    [JsonIgnore]
    public Dictionary<string, string> Overrides => ExtensionIcons ?? [];

    [JsonIgnore]
    public List<string>? PinnedPlaces => QuickAccess;

    [JsonIgnore]
    public int RecentCount => Math.Max(RecentLimit ?? 10, 0);

    [JsonIgnore]
    public List<string> ScanRoots => GalleryRoots ?? [];

    [JsonIgnore]
    public List<string>? PanelOrder => OverviewPanels;

    [JsonIgnore]
    public List<string> HiddenPanels => OverviewHidden ?? [];

    [JsonIgnore]
    public int PanelColumns => Math.Clamp(OverviewColumns ?? 1, 1, 5);

    [JsonIgnore]
    public Dictionary<string, string> PlaceNameOverrides => PlaceNames ?? [];

    [JsonIgnore]
    public Dictionary<string, string> PlaceIconOverrides => PlaceIcons ?? [];

    [JsonIgnore]
    public Dictionary<string, string> KeyBindings => Shortcuts ?? [];

    [JsonIgnore]
    public Dictionary<string, string> PanelTitles => OverviewTitles ?? [];

    [JsonIgnore]
    public Dictionary<string, string> PanelViews => OverviewViews ?? [];

    [JsonIgnore]
    public Dictionary<string, string> PanelIcons => OverviewIcons ?? [];

    [JsonIgnore]
    public List<string> PinnedPanels => OverviewPinned ?? [];

    [JsonIgnore]
    public Dictionary<string, List<string>> PanelFolderLists => PanelPlaces ?? [];

    [JsonIgnore]
    public bool OwnsLinks => LinksEnabled ?? false;

    [JsonIgnore]
    public bool IsDefaultFileManager => DefaultFileManager ?? false;

    [JsonIgnore]
    public bool HandlesArchives => ArchiveHandler ?? false;

    [JsonIgnore]
    public bool UsesCheckboxes => ShowCheckboxes ?? true;

    [JsonIgnore]
    public bool OpensOnSingleClick => OpenOnSingleClick ?? false;

    [JsonIgnore]
    public bool ConfirmsDelete => ConfirmDelete ?? false;

    [JsonIgnore]
    public bool PlaysPreviewVideoAudio => PreviewVideoAudio ?? false;

    [JsonIgnore]
    public bool AutoplaysPreviewVideo => PreviewVideoAutoplay ?? false;

    [JsonIgnore]
    public int PickerWidth => Math.Clamp(PickerWindowWidth ?? 1200, 640, 4000);

    [JsonIgnore]
    public int PickerHeight => Math.Clamp(PickerWindowHeight ?? 800, 400, 3000);

    [JsonIgnore]
    public bool UsesRelativeLinks => !string.Equals(LinkPathMode, "absolute", StringComparison.OrdinalIgnoreCase);

    [JsonIgnore]
    public int BannerHeight => Math.Clamp(OverviewBannerHeight ?? 220, 120, 900);

    [JsonIgnore]
    public bool UsesCustomSharePort =>
        string.Equals(SharePortMode, "custom", StringComparison.OrdinalIgnoreCase);

    [JsonIgnore]
    public int? CustomSharePort =>
        UsesCustomSharePort && SharePort is >= 1 and <= 65535 ? SharePort : null;

    [JsonIgnore]
    public string Startup =>
        StartupMode is "shortcut" or "task" ? StartupMode : "none";

    [JsonIgnore]
    public bool StartsHidden => StartHidden ?? false;
}