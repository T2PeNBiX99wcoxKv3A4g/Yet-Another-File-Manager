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
    List<string>? GalleryRoots)
{
    public static AppSettings Default => new(true, true, true, [], null, 10, null);

    /// <summary>Ask the shell for the icon of each file type.</summary>
    public bool UseSystemIcons => SystemIcons ?? true;

    /// <summary>Show the icon a folder defines for itself, even when system icons are off.</summary>
    public bool UseCustomFolderIcons => CustomFolderIcons ?? true;

    /// <summary>Keep a <c>.yafm-index.db</c> inside every folder that is browsed.</summary>
    public bool ShouldWriteDirectoryIndex => WriteDirectoryIndex ?? true;

    /// <summary>Extension (with the dot, lower case) to a built-in icon name or <c>file:&lt;path&gt;</c>.</summary>
    public Dictionary<string, string> Overrides => ExtensionIcons ?? [];

    /// <summary>The folders pinned to Quick access, or null to use the well-known defaults.</summary>
    public List<string>? PinnedPlaces => QuickAccess;

    /// <summary>How many recent folders to show; 0 turns the list off.</summary>
    public int RecentCount => Math.Max(RecentLimit ?? 10, 0);

    /// <summary>Folders the gallery scans, or empty for the user's Pictures folder.</summary>
    public List<string> ScanRoots => GalleryRoots ?? [];
}
