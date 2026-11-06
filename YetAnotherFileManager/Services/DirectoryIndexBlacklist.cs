namespace YetAnotherFileManager.Services;

/// <summary>Glob rules for folders that must keep their YAFM database in the central store.</summary>
internal static class DirectoryIndexBlacklist
{
    public static List<string> Defaults() => ["**/uv/cache/**"];

    public static bool Matches(string directory, IEnumerable<string>? patterns) =>
        (patterns ?? Defaults()).Any(pattern =>
            !string.IsNullOrWhiteSpace(pattern) && PathGlob.Covers(directory, pattern));
}
