using System.Collections.Concurrent;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Holds the short-lived confirmation tokens for deletes that touch a protected path. A token
///     is bound to the exact operation, so it cannot be reused for another selection, and it only
///     becomes valid after the configured delay has really passed; the button's countdown is a
///     convenience, not the enforcement.
/// </summary>
internal static class DeleteGuard
{
    private static readonly ConcurrentDictionary<string, Pending> PendingDeletes = new();
    private static readonly TimeSpan Lifetime = TimeSpan.FromMinutes(10);

    /// <summary>Creates a one-shot token for an operation that must wait for confirmation.</summary>
    public static string Issue(string key)
    {
        Cleanup();

        var token = Guid.NewGuid().ToString("N");
        PendingDeletes[token] = new(key, DateTime.UtcNow);
        return token;
    }

    /// <summary>
    ///     Accepts the token only once the delay has elapsed; <paramref name="remaining" /> is how
    ///     many seconds are still missing when it is too early.
    /// </summary>
    public static bool Validate(string? token, string key, int delaySeconds, out int remaining)
    {
        remaining = 0;

        if (string.IsNullOrEmpty(token) || !PendingDeletes.TryGetValue(token, out var pending))
            return false;

        if (!string.Equals(pending.Key, key, StringComparison.Ordinal))
            return false;

        var elapsed = DateTime.UtcNow - pending.IssuedAt;
        if (elapsed < TimeSpan.FromSeconds(delaySeconds))
        {
            remaining = Math.Max(1, (int)Math.Ceiling(delaySeconds - elapsed.TotalSeconds));
            return false;
        }

        PendingDeletes.TryRemove(token, out _);
        return true;
    }

    /// <summary>The paths of a normal delete, in a stable order so the token binds to them.</summary>
    public static string KeyForDelete(IEnumerable<string> paths, bool permanent) =>
        "delete|" + (permanent ? "1" : "0") + "|" + string.Join('\n',
            paths.Select(PathGlob.Normalize).OrderBy(path => path, StringComparer.Ordinal));

    /// <summary>
    ///     The paths of any other change — a move, a rename, a write into a folder — in a stable
    ///     order, tagged with the operation so a token for one cannot confirm another.
    /// </summary>
    public static string KeyFor(string operation, IEnumerable<string> paths) =>
        operation + "|" + string.Join('\n',
            paths.Select(PathGlob.Normalize).OrderBy(path => path, StringComparer.Ordinal));

    /// <summary>The ids of a recycle-bin delete.</summary>
    public static string KeyForRecycle(IEnumerable<string> ids) =>
        "recycle|" + string.Join('\n', ids.OrderBy(id => id, StringComparer.Ordinal));

    /// <summary>Emptying the recycle bin, with or without the orphan records.</summary>
    public static string KeyForEmpty(bool includeOrphans) => includeOrphans ? "empty|1" : "empty|0";

    private static void Cleanup()
    {
        var cutoff = DateTime.UtcNow - Lifetime;

        foreach (var (token, pending) in PendingDeletes)
            if (pending.IssuedAt < cutoff)
                PendingDeletes.TryRemove(token, out _);
    }

    private sealed record Pending(string Key, DateTime IssuedAt);
}