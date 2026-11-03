using System.Text.Json.Serialization;

namespace YetAnotherFileManager.Models;

/// <summary>
///     The preferences the interface can change. Missing values in an older settings file mean "the
///     default", so the fields are nullable and read through the accessors below.
/// </summary>
public sealed record AppSettings(
    bool? SystemIcons,
    bool? CustomFolderIcons,
    bool? WriteDirectoryIndex,
    Dictionary<string, string>? ExtensionIcons,
    List<string>? QuickAccess,
    int? RecentLimit,
    List<string>? GalleryRoots,
    List<string>? OverviewPanels,
    List<string>? OverviewHidden,
    int? OverviewColumns,
    Dictionary<string, string>? PlaceNames,
    Dictionary<string, string>? Shortcuts,
    Dictionary<string, string>? PlaceIcons,
    Dictionary<string, string>? OverviewTitles,
    Dictionary<string, string>? OverviewViews,
    Dictionary<string, string>? OverviewIcons,
    List<string>? OverviewPinned,
    bool? LinksEnabled,
    Dictionary<string, List<string>>? PanelPlaces,
    bool? RestoreTabs,
    List<string>? OpenTabs,
    int? ActiveTab,
    ViewDefaults? DefaultView,
    bool? ShowCheckboxes,
    bool? OpenOnSingleClick,
    bool? ConfirmDelete,
    bool? PreviewVideoAudio,
    bool? PreviewVideoAutoplay,
    string? AccentColor,
    string? SecondaryColor,
    /// <summary>UI language; null means English, "auto" follows the operating system.</summary>
    string? Language)
{
    public static AppSettings Default =>
        new(true, true, true, [], null, 10, null, ["quick", "frequent", "recent", "home", "drives"], null, 1, null,
            null, null, null, null, null, ["quick", "frequent", "recent", "drives"], null, null, true, null, 0, null,
            true, false, false, false, false, null, null, null);

    // The accessors below are derived, so they are kept out of settings.json entirely; only the
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
}