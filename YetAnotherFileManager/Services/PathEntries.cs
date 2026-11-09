using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>Describes paths for the tray, the clipboard panel and batch inspection.</summary>
internal static class PathEntries
{
    public static List<ClipboardEntry> Describe(IReadOnlyList<string> paths) =>
        paths
            .Where(path => path.Length > 0)
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .Select(path =>
            {
                var isDirectory = Directory.Exists(path);

                return new ClipboardEntry(
                    path,
                    Path.GetFileName(path.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar)),
                    isDirectory,
                    isDirectory || File.Exists(path));
            })
            .ToList();
}