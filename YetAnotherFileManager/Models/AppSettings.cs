namespace YetAnotherFileManager.Models;

/// <summary>
///     The preferences the interface can change. Missing values in an older settings file mean "the
///     default", so the fields are nullable and read through the accessors below.
/// </summary>
public sealed record AppSettings(
    bool? SystemIcons,
    bool? CustomFolderIcons,
    bool? WriteDirectoryIndex,
    Dictionary<string, string>? ExtensionIcons)
{
    public static AppSettings Default => new(true, true, true, []);

    /// <summary>Ask the shell for the icon of each file type.</summary>
    public bool UseSystemIcons => SystemIcons ?? true;

    /// <summary>Show the icon a folder defines for itself, even when system icons are off.</summary>
    public bool UseCustomFolderIcons => CustomFolderIcons ?? true;

    /// <summary>Keep a <c>.yafm-index.db</c> inside every folder that is browsed.</summary>
    public bool ShouldWriteDirectoryIndex => WriteDirectoryIndex ?? true;

    /// <summary>Extension (with the dot, lower case) to a built-in icon name or <c>file:&lt;path&gt;</c>.</summary>
    public Dictionary<string, string> Overrides => ExtensionIcons ?? [];
}
