using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Applies the user's protected-path rules to delete requests. The matching itself lives in
///     <see cref="PathGlob" />; this type only reads the settings.
/// </summary>
internal static class Protection
{
    /// <summary>What a change of this path, or a write into this folder, would hit.</summary>
    public static List<ProtectedHit> Hits(IEnumerable<string> paths, string? contentDirectory = null)
    {
        var settings = SettingsService.Instance.Current;
        var patterns = Patterns(settings);
        var hits = new Dictionary<string, ProtectedHit>(StringComparer.Ordinal);

        foreach (var raw in paths)
        {
            var target = PathGlob.Normalize(raw);
            if (target.Length == 0)
                continue;

            foreach (var pattern in patterns)
            {
                if (!PathGlob.Covers(target, pattern))
                    continue;

                hits[target] = new(target, pattern);
                break;
            }
        }

        // A write into a folder is not the same as touching the folder itself: a non-recursive rule
        // such as "%USERPROFILE%\*" protects the profile and its immediate entries, not the inside
        // of one of those entries.
        if (contentDirectory is not null)
        {
            var target = PathGlob.Normalize(contentDirectory);
            if (target.Length > 0)
                foreach (var pattern in patterns)
                {
                    if (!PathGlob.CoversContents(target, pattern))
                        continue;

                    hits.TryAdd(target, new(target, pattern));
                    break;
                }
        }

        return hits.Values.ToList();
    }

    /// <summary>The stored patterns, or the defaults that ship with the app.</summary>
    public static List<string> Patterns(AppSettings settings) => settings.ProtectedPaths ?? PathGlob.Defaults();

    /// <summary>The settings as the interface reads them, with the rules and the delay filled in.</summary>
    public static AppSettings Resolve(AppSettings settings) =>
        settings with
        {
            ProtectedPaths = Patterns(settings),
            DeleteDelaySeconds = DelaySeconds(settings)
        };

    /// <summary>The confirmation wait, never below the two-second floor.</summary>
    public static int DelaySeconds(AppSettings settings) => Math.Clamp(settings.DeleteDelaySeconds ?? 5, 2, 3600);

    /// <summary>The platform defaults, for the "Restore defaults" button.</summary>
    public static List<string> Defaults() => PathGlob.Defaults();
}