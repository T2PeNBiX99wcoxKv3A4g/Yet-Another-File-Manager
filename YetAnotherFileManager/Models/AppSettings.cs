using System.Text.Json.Serialization;

namespace YetAnotherFileManager.Models;

/// <summary>
///     The preferences the interface can change. Missing values in an older settings file mean "the
///     default", so the fields are nullable and read through the accessors below.
/// </summary>
public sealed record AppSettings(
    bool? SystemIcons = null,
    bool? CustomFolderIcons = null,
    bool? WriteDirectoryIndex = null,
    List<string>? DirectoryIndexBlacklist = null,
    Dictionary<string, string>? ExtensionIcons = null,
    List<string>? QuickAccess = null,
    int? RecentLimit = null,
    List<string>? GalleryRoots = null,
    List<string>? OverviewPanels = null,
    List<string>? OverviewHidden = null,
    int? OverviewColumns = null,
    Dictionary<string, string>? PlaceNames = null,
    Dictionary<string, string>? Shortcuts = null,
    Dictionary<string, string>? PlaceIcons = null,
    Dictionary<string, string>? OverviewTitles = null,
    Dictionary<string, string>? OverviewViews = null,
    Dictionary<string, string>? OverviewIcons = null,
    List<string>? OverviewPinned = null,
    bool? LinksEnabled = null,
    Dictionary<string, List<string>>? PanelPlaces = null,
    bool? RestoreTabs = null,
    List<string>? OpenTabs = null,
    int? ActiveTab = null,
    ViewDefaults? DefaultView = null,
    bool? ShowCheckboxes = null,
    bool? OpenOnSingleClick = null,
    bool? ConfirmDelete = null,
    bool? PreviewVideoAudio = null,
    bool? PreviewVideoAutoplay = null,
    /// <summary>Show the floating file tray when a drag starts; null means on.</summary>
    bool? TrayAutoShow = null,
    string? AccentColor = null,
    string? SecondaryColor = null,
    /// <summary>UI language; null means English, "system" follows the operating system.</summary>
    string? Language = null,
    List<ThemePreset>? ThemePresets = null,
    /// <summary>Register this app as the folder handler; off by default and per-user only.</summary>
    bool? DefaultFileManager = null,
    /// <summary>None, a built-in concept, or "file:&lt;path&gt;" for a custom image/video.</summary>
    string? BackgroundSource = null,
    /// <summary>Paths the user added to the background gallery; images, SVGs and videos.</summary>
    List<string>? BackgroundCustom = null,
    int? BackgroundBlur = null,
    int? BackgroundSaturation = null,
    int? BackgroundBrightness = null,
    /// <summary>Folders a delete must stop at; a trailing "**" includes the subtree.</summary>
    List<string>? ProtectedPaths = null,
    /// <summary>Seconds the protected-delete confirmation stays disabled.</summary>
    int? DeleteDelaySeconds = null,
    /// <summary>"system", "12", "24" or "custom" for every timestamp in the interface.</summary>
    string? TimeFormat = null,
    /// <summary>Pattern used when <see cref="TimeFormat" /> is "custom".</summary>
    string? TimeFormatPattern = null,
    /// <summary>Show ordinary hidden files; null follows Explorer (or off elsewhere).</summary>
    bool? ShowHidden = null,
    /// <summary>Register this app for the usual archive extensions, per user and reversible.</summary>
    bool? ArchiveHandler = null,
    /// <summary>Preferred width of the standalone folder/file picker window.</summary>
    int? PickerWindowWidth = null,
    /// <summary>Preferred height of the standalone folder/file picker window.</summary>
    int? PickerWindowHeight = null,
    /// <summary>"relative" or "absolute" for created symbolic links.</summary>
    string? LinkPathMode = null,
    /// <summary>Image or video shown above the overview panels; null hides the banner.</summary>
    string? OverviewBanner = null,
    /// <summary>Height of the overview banner in pixels.</summary>
    int? OverviewBannerHeight = null,
    /// <summary>Custom banner media the user added.</summary>
    List<string>? OverviewBanners = null,
    /// <summary>Vertical crop of the overview banner, 0 = top, 1 = bottom.</summary>
    double? OverviewBannerOffset = null,
    /// <summary>Global key combination that brings the window forward; empty disables it.</summary>
    string? GlobalHotkey = null,
    /// <summary>Font family per interface role, by role id; null or missing uses the built-in font.</summary>
    Dictionary<string, string>? Fonts = null,
    /// <summary>"random" (the OS picks a free port) or "custom" for <see cref="SharePort" />.</summary>
    string? SharePortMode = null,
    /// <summary>Port used when <see cref="SharePortMode" /> is custom; null or 0 picks a free port.</summary>
    int? SharePort = null,
    /// <summary>"none", "shortcut" or "task": how the app joins the user's login session.</summary>
    string? StartupMode = null,
    /// <summary>Start in the tray instead of showing the window at launch.</summary>
    bool? StartHidden = null,
    /// <summary>Files and folders pinned to the overview's Favorites panel.</summary>
    List<FavoriteEntry>? Favorites = null){
    public static AppSettings Default =>
        new(true, true, true, ["**/uv/cache/**", "**/scoop/buckets/**"], [], null, 10, null,
            ["quick", "frequent", "recent", "home", "drives", "share", "favorites"], null, 1, null,
            null, null, null, null, null, ["quick", "frequent", "recent", "drives"], null, null, true, null, 0, null,
            true, false, false, false, false, true, null, null, null, null, false, null, null, null, null, null, null, 5,
            "24", null, null, false, 1200, 800, "relative", null, 220, [], 0.3, null, null, null, null, null, null, null);

    // The accessors below are derived, so they are kept out of settings.toml entirely; only the
    // fields above are stored, and the JSON stays readable and stable.

    /// <summary>Ask the shell for the icon of each file type.</summary>
    [JsonIgnore]
    public bool UseSystemIcons => SystemIcons ?? true;

    /// <summary>Show the icon a folder defines for itself, even when system icons are off.</summary>
    [JsonIgnore]
    public bool UseCustomFolderIcons => CustomFolderIcons ?? true;

    /// <summary>Keep a <c>.yafm-index.db</c> inside every folder that is browsed.</summary>
    [JsonIgnore]
    public bool ShouldWriteDirectoryIndex => WriteDirectoryIndex ?? true;

    /// <summary>Extension (with the dot, lower case) to a built-in icon name or <c>file:&lt;path&gt;</c>.</summary>
    [JsonIgnore]
    public Dictionary<string, string> Overrides => ExtensionIcons ?? [];

    /// <summary>The folders pinned to Quick access, or null to use the well-known defaults.</summary>
    [JsonIgnore]
    public List<string>? PinnedPlaces => QuickAccess;

    /// <summary>How many recent folders to show; 0 turns the list off.</summary>
    [JsonIgnore]
    public int RecentCount => Math.Max(RecentLimit ?? 10, 0);

    /// <summary>Folders the gallery scans, or empty for the user's Pictures folder.</summary>
    [JsonIgnore]
    public List<string> ScanRoots => GalleryRoots ?? [];

    /// <summary>The overview panels in the order the user arranged them, or null for the default.</summary>
    [JsonIgnore]
    public List<string>? PanelOrder => OverviewPanels;

    /// <summary>Panels older versions hid instead of deleting. Only used to migrate them away.</summary>
    [JsonIgnore]
    public List<string> HiddenPanels => OverviewHidden ?? [];

    /// <summary>How many columns the overview uses; 1 to 5.</summary>
    [JsonIgnore]
    public int PanelColumns => Math.Clamp(OverviewColumns ?? 1, 1, 5);

    /// <summary>Names the user gave to quick-access folders, by path.</summary>
    [JsonIgnore]
    public Dictionary<string, string> PlaceNameOverrides => PlaceNames ?? [];

    /// <summary>Icons the user picked for quick-access folders, by path.</summary>
    [JsonIgnore]
    public Dictionary<string, string> PlaceIconOverrides => PlaceIcons ?? [];

    /// <summary>Key combination per action, as the interface stores them (e.g. <c>ctrl+w</c>).</summary>
    [JsonIgnore]
    public Dictionary<string, string> KeyBindings => Shortcuts ?? [];

    /// <summary>Titles the user gave to overview panels, by panel id.</summary>
    [JsonIgnore]
    public Dictionary<string, string> PanelTitles => OverviewTitles ?? [];

    /// <summary>List or grid per overview panel, by panel id.</summary>
    [JsonIgnore]
    public Dictionary<string, string> PanelViews => OverviewViews ?? [];

    /// <summary>Icon per overview panel, by panel id: a built-in name or <c>file:&lt;path&gt;</c>.</summary>
    [JsonIgnore]
    public Dictionary<string, string> PanelIcons => OverviewIcons ?? [];

    /// <summary>Overview panels that also appear in the sidebar.</summary>
    [JsonIgnore]
    public List<string> PinnedPanels => OverviewPinned ?? [];

    /// <summary>Folders shown by one Quick access panel, by panel id. The factory panel uses QuickAccess.</summary>
    [JsonIgnore]
    public Dictionary<string, List<string>> PanelFolderLists => PanelPlaces ?? [];

    /// <summary>
    ///     Whether this app should own <c>yafm://</c> links. Windows can lose the per-user registry
    ///     entry, so this choice is stored with the other settings and re-applied at every launch.
    /// </summary>
    [JsonIgnore]
    public bool OwnsLinks => LinksEnabled ?? false;

    /// <summary>Use this app for folder opens; the registration is per-user and re-applied at launch.</summary>
    [JsonIgnore]
    public bool IsDefaultFileManager => DefaultFileManager ?? false;

    /// <summary>Offer this app for archive files; the registration is per-user and re-applied at launch.</summary>
    [JsonIgnore]
    public bool HandlesArchives => ArchiveHandler ?? false;

    /// <summary>Show a selection checkbox in front of every name.</summary>
    [JsonIgnore]
    public bool UsesCheckboxes => ShowCheckboxes ?? true;

    /// <summary>Open a folder or file with one click instead of two.</summary>
    [JsonIgnore]
    public bool OpensOnSingleClick => OpenOnSingleClick ?? false;

    /// <summary>Ask before moving items to the recycle bin. Shift+Del always asks.</summary>
    [JsonIgnore]
    public bool ConfirmsDelete => ConfirmDelete ?? false;

    /// <summary>Play a video preview's audio; off means the preview is muted.</summary>
    [JsonIgnore]
    public bool PlaysPreviewVideoAudio => PreviewVideoAudio ?? false;

    /// <summary>Start a video preview automatically; off means the user presses play.</summary>
    [JsonIgnore]
    public bool AutoplaysPreviewVideo => PreviewVideoAutoplay ?? false;

    /// <summary>Standalone picker width; clamped so the window always stays usable.</summary>
    [JsonIgnore]
    public int PickerWidth => Math.Clamp(PickerWindowWidth ?? 1200, 640, 4000);

    /// <summary>Standalone picker height; clamped so the window always stays usable.</summary>
    [JsonIgnore]
    public int PickerHeight => Math.Clamp(PickerWindowHeight ?? 800, 400, 3000);

    /// <summary>Symbolic links point at their source relatively unless the user asks for absolute.</summary>
    [JsonIgnore]
    public bool UsesRelativeLinks => !string.Equals(LinkPathMode, "absolute", StringComparison.OrdinalIgnoreCase);

    /// <summary>Overview banner height; clamped so it always leaves room for the panels.</summary>
    [JsonIgnore]
    public int BannerHeight => Math.Clamp(OverviewBannerHeight ?? 220, 120, 900);

    /// <summary>"random" or "custom"; anything else falls back to the random port.</summary>
    [JsonIgnore]
    public bool UsesCustomSharePort =>
        string.Equals(SharePortMode, "custom", StringComparison.OrdinalIgnoreCase);

    /// <summary>The custom port, or null when the OS should pick a free one.</summary>
    [JsonIgnore]
    public int? CustomSharePort =>
        UsesCustomSharePort && SharePort is >= 1 and <= 65535 ? SharePort : null;

    /// <summary>"none", "shortcut" or "task"; anything unknown means no startup entry.</summary>
    [JsonIgnore]
    public string Startup =>
        StartupMode is "shortcut" or "task" ? StartupMode : "none";

    /// <summary>Whether the window starts in the tray instead of opening on screen.</summary>
    [JsonIgnore]
    public bool StartsHidden => StartHidden ?? false;
}