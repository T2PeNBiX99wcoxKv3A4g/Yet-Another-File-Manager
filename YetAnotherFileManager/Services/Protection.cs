using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Applies the user's protected-path rules to delete requests. The matching itself lives in
///     <see cref="PathGlob" />; this type only reads the settings.
/// </summary>
internal static class Protection
{
    /// <summary>What a delete of this path would hit, if anything.</summary>
    public static List<ProtectedHit> Hits(IEnumerable<string> paths)
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

                hits[target] = new ProtectedHit(target, pattern);
                break;
            }
        }

        return hits.Values.ToList();
    }

    /// <summary>The stored patterns, or the defaults that ship with the app.</summary>
    public static List<string> Patterns(AppSettings settings) => settings.ProtectedPaths ?? PathGlob.Defaults();

    /// <summary>The confirmation wait, never below the two-second floor.</summary>
    public static int DelaySeconds(AppSettings settings) => Math.Clamp(settings.DeleteDelaySeconds ?? 5, 2, 3600);

    /// <summary>The platform defaults, for the "Restore defaults" button.</summary>
    public static List<string> Defaults() => PathGlob.Defaults();
}
