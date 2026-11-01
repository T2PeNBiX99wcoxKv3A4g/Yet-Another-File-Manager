namespace YetAnotherFileManager.Models;

/// <summary>
///     How one directory is shown: the view mode, the icon size, the visible columns and the sort
///     order. A directory without one inherits the app's default.
/// </summary>
public sealed record DirectoryView(
    string Mode = "list",
    int IconSize = 20,
    List<string>? Columns = null,
    string Sort = "name",
    bool SortDescending = false);
