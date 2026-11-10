using PhotinoNetUtils.Utils;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Whether the current user may change a folder, and how a refusal shows up in managed code.
///     Kept apart from the elevation itself so the same answer serves the probe, the operations and
///     their error handling.
/// </summary>
internal static class Access
{
    /// <summary>True when the current user could create a file in the folder without help.</summary>
    public static bool CanWriteTo(string directory)
    {
        if (!OperatingSystem.IsWindows())
            return true;

        var probe = Path.Combine(directory, $".yafm-write-{Guid.NewGuid():N}.tmp");

        try
        {
            File.WriteAllBytes(probe, []);
            File.Delete(probe);
            return true;
        }
        catch (UnauthorizedAccessException)
        {
            return false;
        }
        catch (IOException)
        {
            // A read-only volume or an odd share is better left to the normal path, which reports
            // the real error instead of sending the user through a consent prompt that cannot help.
            return true;
        }
        finally
        {
            if (File.Exists(probe))
                Try.Run(() => File.Delete(probe));
        }
    }

    /// <summary>True for the exceptions a protected folder raises in managed code.</summary>
    public static bool IsAccessDenied(Exception exception) =>
        exception is UnauthorizedAccessException
        || (exception is IOException io && (io.HResult & 0xFFFF) == 5);
}
