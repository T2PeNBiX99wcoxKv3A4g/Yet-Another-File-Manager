namespace YetAnotherFileManager.Services;

/// <summary>
///     The folder the window is showing right now. Index work is ordered by it: the folder on screen
///     is read before anything else, and its listing is only written once the user has left it.
/// </summary>
internal static class IndexFocus
{
    private static string? _directory;

    /// <summary>Marks the folder of the active tab; an empty value means no folder is on screen.</summary>
    /// <returns>The folder that held the focus before this call.</returns>
    public static string? Set(string? directory) =>
        Interlocked.Exchange(ref _directory, Normalize(directory));

    /// <summary>The folder the active tab shows, if any.</summary>
    public static string? Current => Volatile.Read(ref _directory);

    /// <summary>Whether this directory is the one the user is looking at.</summary>
    public static bool Is(string directory) =>
        Current is { } current && current.Equals(Normalize(directory), StringComparison.OrdinalIgnoreCase);

    private static string? Normalize(string? directory) =>
        string.IsNullOrWhiteSpace(directory) ? null : Path.TrimEndingDirectorySeparator(directory);
}
