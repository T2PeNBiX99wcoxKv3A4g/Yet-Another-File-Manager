using System.Text;
using PhotinoNetUtils.Localization;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Reads what the app's own properties dialog shows. The shell's property sheet is richer, but
///     it only exists on Windows; this keeps the same action useful everywhere.
/// </summary>
internal static class PathProperties
{
    private const int EntryLimit = 100_000;

    /// <summary>One entry's details; a failure keeps the name so the dialog can still show a row.</summary>
    public static PathPropertiesInfo Read(string path)
    {
        try
        {
            var directory = Directory.Exists(path);

            if (!directory && !File.Exists(path))
                return Failed(path, Localization.Get("the_path_no_longer_exists"));

            FileSystemInfo info = directory ? new DirectoryInfo(path) : new FileInfo(path);
            var size = directory ? 0 : ((FileInfo)info).Length;
            long? entries = directory ? CountEntries(path) : null;

            return new(
                path,
                info.Name,
                directory,
                size,
                entries,
                ToMilliseconds(info.CreationTimeUtc),
                ToMilliseconds(info.LastWriteTimeUtc),
                ToMilliseconds(info.LastAccessTimeUtc),
                Attributes(path),
                OperatingSystem.IsWindows() ? null : UnixMode(File.GetUnixFileMode(path)),
                LinkTarget(info),
                null);
        }
        catch (Exception ex)
        {
            return Failed(path, ex.Message);
        }
    }

    private static PathPropertiesInfo Failed(string path, string error) =>
        new(path, Path.GetFileName(path), false, 0, null, 0, 0, 0, [], null, null, error);

    /// <summary>The attribute flags as tokens, translated by the dialog where it knows them.</summary>
    private static List<string> Attributes(string path) =>
        [.. File.GetAttributes(path).ToString().Split(", ", StringSplitOptions.RemoveEmptyEntries)];

    /// <summary>Where a symbolic link points, resolved against its own folder.</summary>
    private static string? LinkTarget(FileSystemInfo info) =>
        info.LinkTarget is { Length: > 0 } target
            ? Path.GetFullPath(Path.Combine(Path.GetDirectoryName(info.FullName) ?? "", target))
            : null;

    private static long ToMilliseconds(DateTime value) =>
        new DateTimeOffset(value).ToUnixTimeMilliseconds();

    private static long CountEntries(string path) =>
        Directory.EnumerateFileSystemEntries(path).Take(EntryLimit).LongCount();

    /// <summary>The permission bits as rwx triples; the owner and group come from the shell tools.</summary>
    private static string UnixMode(UnixFileMode mode)
    {
        const string Letters = "rwx";
        UnixFileMode[] bits =
        [
            UnixFileMode.UserRead, UnixFileMode.UserWrite, UnixFileMode.UserExecute,
            UnixFileMode.GroupRead, UnixFileMode.GroupWrite, UnixFileMode.GroupExecute,
            UnixFileMode.OtherRead, UnixFileMode.OtherWrite, UnixFileMode.OtherExecute
        ];

        var text = new StringBuilder(9);
        for (var index = 0; index < bits.Length; index++)
            text.Append(mode.HasFlag(bits[index]) ? Letters[index % 3] : '-');

        return text.ToString();
    }
}
