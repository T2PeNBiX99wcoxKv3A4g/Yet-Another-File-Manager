namespace YetAnotherFileManager.Services;

/// <summary>Joins a shared folder and a relative path, and refuses anything that escapes the folder.</summary>
internal static class SharePaths
{
    /// <summary>Normalises a share-relative path to forward slashes without leading or trailing ones.</summary>
    public static string Clean(string? relative) =>
        (relative ?? "").Replace('\\', '/').Trim('/');

    /// <summary>The full local path, or null when <paramref name="relative" /> points outside the root.</summary>
    public static string? Resolve(string root, string? relative)
    {
        var fullRoot = Path.GetFullPath(root);
        var comparison = OperatingSystem.IsWindows() ? StringComparison.OrdinalIgnoreCase : StringComparison.Ordinal;
        var combined = Path.GetFullPath(Path.Combine(fullRoot,
            Clean(relative).Replace('/', Path.DirectorySeparatorChar)));

        if (combined.Equals(fullRoot, comparison))
            return combined;

        return combined.StartsWith(fullRoot + Path.DirectorySeparatorChar, comparison) ? combined : null;
    }

    /// <summary>The parent of a share-relative path, for breadcrumbs; null at the share root.</summary>
    public static string? ParentOf(string relative)
    {
        if (relative.Length == 0)
            return null;

        var cut = relative.LastIndexOf('/');
        return cut < 0 ? "" : relative[..cut];
    }
}
