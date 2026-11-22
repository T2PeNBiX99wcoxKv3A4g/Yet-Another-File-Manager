using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>Glob rules for folders that must keep their YAFM database in the central store.</summary>
internal static class DirectoryIndexBlacklist
{
    /// <summary>
    ///     Git reads the folders under <c>.git</c> by name: a file in <c>refs</c>, <c>logs</c> or
    ///     <c>objects</c> is not inert, so nothing of ours may be written anywhere inside it.
    /// </summary>
    public static List<string> Defaults() => [.. AppSettings.Default.DirectoryIndexBlacklist ?? []];

    public static bool Matches(string directory, IEnumerable<string>? patterns) =>
        (patterns ?? Defaults()).Any(pattern =>
            !string.IsNullOrWhiteSpace(pattern) && PathGlob.Covers(directory, pattern));
}