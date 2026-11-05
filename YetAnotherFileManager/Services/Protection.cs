using System.Text.RegularExpressions;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Turns the user's protected-folder patterns into normalized paths and answers whether a
///     delete would touch one of them. A pattern ending in <c>**</c> covers the whole subtree; a
///     plain pattern protects only that folder, but deleting a parent of it is still held back.
/// </summary>
internal static partial class Protection
{
    /// <summary>How much of the tree a rule covers.</summary>
    public enum Depth
    {
        /// <summary>A plain path: the folder itself only.</summary>
        Folder,

        /// <summary>A trailing <c>*</c>: the folder and the entries directly inside it.</summary>
        Children,

        /// <summary>A trailing <c>**</c>: the folder and everything below it.</summary>
        Everything
    }

    /// <summary>What a delete of this path would hit, if anything.</summary>
    public static List<ProtectedHit> Hits(IEnumerable<string> paths)
    {
        var settings = SettingsService.Instance.Current;
        var patterns = Patterns(settings);
        var hits = new Dictionary<string, ProtectedHit>(StringComparer.Ordinal);

        foreach (var raw in paths)
        {
            var target = Normalize(raw);
            if (target.Length == 0)
                continue;

            foreach (var pattern in patterns)
            {
                var (basePath, depth) = Parse(pattern);
                if (basePath.Length == 0 || !Covers(target, basePath, depth))
                    continue;

                hits[target] = new ProtectedHit(target, pattern);
                break;
            }
        }

        return hits.Values.ToList();
    }

    /// <summary>The stored patterns, or the defaults that ship with the app.</summary>
    public static List<string> Patterns(AppSettings settings) => settings.ProtectedPaths ?? Defaults();

    /// <summary>The confirmation wait, never below the two-second floor.</summary>
    public static int DelaySeconds(AppSettings settings) => Math.Clamp(settings.DeleteDelaySeconds ?? 5, 2, 3600);

    /// <summary>
    ///     Folders where a stray delete would be expensive. The defaults stay in environment-variable
    ///     form, so they follow the profile and system drive instead of freezing one machine's paths.
    /// </summary>
    public static List<string> Defaults()
    {
        var paths = new List<string>();

        if (OperatingSystem.IsWindows())
        {
            paths.Add(@"%SystemRoot%\**");
            paths.Add(@"%USERPROFILE%\*");
            paths.Add(@"%ProgramFiles%\**");

            if (!string.IsNullOrEmpty(Environment.GetEnvironmentVariable("ProgramFiles(x86)")))
                paths.Add(@"%ProgramFiles(x86)%\**");

            paths.Add(@"%ProgramData%\**");
        }
        else
        {
            foreach (var folder in new[] { "/boot", "/etc", "/usr", "/var", "/dev", "/proc", "/sys", "/bin", "/sbin", "/lib", "/lib64" })
                paths.Add($"{folder}/**");

            paths.Add(string.IsNullOrEmpty(Environment.GetEnvironmentVariable("HOME"))
                ? $"{Environment.GetFolderPath(Environment.SpecialFolder.UserProfile)}/*"
                : "$HOME/*");
        }

        return paths;
    }

    /// <summary>Whether <paramref name="target" /> is covered by a rule, or would take it down as a parent.</summary>
    public static bool Covers(string target, string basePath, Depth depth)
    {
        var comparison = OperatingSystem.IsWindows()
            ? StringComparison.OrdinalIgnoreCase
            : StringComparison.Ordinal;

        if (target.Equals(basePath, comparison))
            return true;

        if (depth == Depth.Everything && target.StartsWith(WithSeparator(basePath), comparison))
            return true;

        // A single star covers exactly one level: entries whose remaining path has no separator.
        if (depth == Depth.Children)
        {
            var prefix = WithSeparator(basePath);

            if (target.StartsWith(prefix, comparison))
            {
                var rest = target[prefix.Length..];

                if (rest.Length > 0
                    && !rest.Contains(Path.DirectorySeparatorChar)
                    && !rest.Contains(Path.AltDirectorySeparatorChar))
                    return true;
            }
        }

        // Deleting a parent would take the protected folder down with it.
        return basePath.StartsWith(WithSeparator(target), comparison);
    }

    /// <summary>Splits a rule into its folder and how deep it reaches.</summary>
    public static (string BasePath, Depth Depth) Parse(string pattern)
    {
        var trimmed = pattern.Trim();
        var depth = Depth.Folder;

        if (trimmed.EndsWith("**", StringComparison.Ordinal))
        {
            depth = Depth.Everything;
            trimmed = trimmed[..^2];
        }
        else if (trimmed.EndsWith("*", StringComparison.Ordinal))
        {
            depth = Depth.Children;
            trimmed = trimmed[..^1];
        }

        return (Normalize(trimmed), depth);
    }

    /// <summary>Expands environment variables and "~", then makes the path absolute and canonical.</summary>
    public static string Normalize(string path)
    {
        var value = path.Trim().Trim('"');
        if (value.Length == 0)
            return "";

        value = Environment.ExpandEnvironmentVariables(value);

        if (value == "~" || value.StartsWith("~/", StringComparison.Ordinal)
            || value.StartsWith("~\\", StringComparison.Ordinal))
        {
            var home = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
            value = home + value[1..];
        }

        value = EnvironmentVariable().Replace(value,
            match => Environment.GetEnvironmentVariable(match.Groups[1].Value) ?? match.Value);

        try
        {
            value = Path.GetFullPath(value);
        }
        catch
        {
            return "";
        }

        var root = Path.GetPathRoot(value);
        if (root is { Length: > 0 } && value.Equals(root, StringComparison.OrdinalIgnoreCase))
            return value;

        return value.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
    }

    private static string WithSeparator(string path) =>
        path.EndsWith(Path.DirectorySeparatorChar) || path.EndsWith(Path.AltDirectorySeparatorChar)
            ? path
            : path + Path.DirectorySeparatorChar;

    [GeneratedRegex(@"\$\{?([A-Za-z_][A-Za-z0-9_]*)\}?")]
    private static partial Regex EnvironmentVariable();
}
