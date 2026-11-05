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
                var (basePath, recursive) = Parse(pattern);
                if (basePath.Length == 0 || !Covers(target, basePath, recursive))
                    continue;

                hits[target] = new ProtectedHit(target, pattern);
                break;
            }
        }

        return hits.Values.ToList();
    }

    /// <summary>The stored patterns, or the defaults that ship with the app.</summary>
    public static List<string> Patterns(AppSettings settings) => settings.ProtectedPaths ?? Defaults();

    /// <summary>The confirmation wait, never zero; a saved zero still gets the minimum.</summary>
    public static int DelaySeconds(AppSettings settings) => Math.Clamp(settings.DeleteDelaySeconds ?? 5, 1, 3600);

    /// <summary>
    ///     Folders where a stray delete would be expensive. Windows protects the system folders
    ///     recursively and the profile folder itself; Linux protects the system trees and $HOME.
    /// </summary>
    public static List<string> Defaults()
    {
        var paths = new List<string>();

        if (OperatingSystem.IsWindows())
        {
            Add(paths, Environment.GetFolderPath(Environment.SpecialFolder.Windows), true);
            Add(paths, Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), false);
            Add(paths, Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles), true);
            Add(paths, Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86), true);
            Add(paths, Environment.GetFolderPath(Environment.SpecialFolder.CommonApplicationData), true);
        }
        else
        {
            foreach (var folder in new[] { "/boot", "/etc", "/usr", "/var", "/dev", "/proc", "/sys", "/bin", "/sbin", "/lib", "/lib64" })
                Add(paths, folder, true);

            Add(paths, Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), false);
        }

        return paths;
    }

    /// <summary>Whether <paramref name="target" /> is the protected folder, inside it, or its parent.</summary>
    public static bool Covers(string target, string basePath, bool recursive)
    {
        var comparison = OperatingSystem.IsWindows()
            ? StringComparison.OrdinalIgnoreCase
            : StringComparison.Ordinal;

        if (target.Equals(basePath, comparison))
            return true;

        // Anything below a recursive entry is protected; an exact entry only protects itself.
        if (recursive && target.StartsWith(WithSeparator(basePath), comparison))
            return true;

        // Deleting a parent would take the protected folder down with it.
        return basePath.StartsWith(WithSeparator(target), comparison);
    }

    /// <summary>Splits a pattern into its folder and whether the subtree is included.</summary>
    public static (string BasePath, bool Recursive) Parse(string pattern)
    {
        var trimmed = pattern.Trim();
        var recursive = trimmed.EndsWith("**", StringComparison.Ordinal);

        if (recursive)
            trimmed = trimmed[..^2].TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);

        return (Normalize(trimmed), recursive);
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

    private static void Add(List<string> paths, string? folder, bool recursive)
    {
        if (string.IsNullOrWhiteSpace(folder))
            return;

        var normalized = Normalize(folder);
        if (normalized.Length == 0)
            return;

        paths.Add(recursive ? $"{normalized}{Path.DirectorySeparatorChar}**" : normalized);
    }

    private static string WithSeparator(string path) =>
        path.EndsWith(Path.DirectorySeparatorChar) || path.EndsWith(Path.AltDirectorySeparatorChar)
            ? path
            : path + Path.DirectorySeparatorChar;

    [GeneratedRegex(@"\$\{?([A-Za-z_][A-Za-z0-9_]*)\}?")]
    private static partial Regex EnvironmentVariable();
}
