namespace YetAnotherFileManager.Models;

/// <summary>
///     How one directory is shown: the view mode, the icon size and the sort order. Columns are a
///     window-wide setting (<see cref="ViewDefaults" />), not a per-directory one.
/// </summary>
public sealed record DirectoryView(
    string Mode = "list",
    int IconSize = 20,
    string Sort = "name",
    bool SortDescending = false);

/// <summary>The view a directory falls back to: the window-wide mode, icon size and columns.</summary>
public sealed record ViewDefaults(
    string Mode = "list",
    int IconSize = 20,
    List<string>? Columns = null);
