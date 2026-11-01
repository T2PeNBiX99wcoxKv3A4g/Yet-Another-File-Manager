namespace YetAnotherFileManager.Models;

/// <summary>
///     How one directory is shown: the view mode, the list icon size, the grid tile size and the
///     sort order. Columns are a window-wide setting (<see cref="ViewDefaults" />).
/// </summary>
public sealed record DirectoryView(
    string Mode = "list",
    int IconSize = 20,
    int GridSize = 148,
    string Sort = "name",
    bool SortDescending = false);

/// <summary>The view a directory falls back to: the window-wide mode, sizes and columns.</summary>
public sealed record ViewDefaults(
    string Mode = "list",
    int IconSize = 20,
    int GridSize = 148,
    List<string>? Columns = null,
    bool ShowImages = true);
