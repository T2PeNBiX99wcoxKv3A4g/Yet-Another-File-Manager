using YetAnotherFileManager.Interop;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The copy-style entries in the link menu. Windows itself only has hard links, symbolic links
///     and junctions; the smart-copy variants are this app's own mirroring operations.
/// </summary>
internal static class LinkCopy
{
    public const string HardCopy = "hard-copy";
    public const string SymbolicCopy = "symbolic-copy";
    public const string SmartCopy = "smart-copy";
    public const string SmartMirror = "smart-mirror";
    public const string MultiVersionSmartCopy = "multi-version-smart-copy";

    public static (bool Ok, string Error) Create(string kind, string source, string link)
    {
        if (!Directory.Exists(source))
            return (false, "The source folder no longer exists.");

        if (File.Exists(link))
            return (false, "Something with that name already exists there.");

        var allowsExisting = kind is SmartCopy or SmartMirror or MultiVersionSmartCopy;
        if (!allowsExisting && Directory.Exists(link))
            return (false, "Something with that name already exists there.");

        var sourceFull = Path.GetFullPath(source);
        var linkFull = Path.GetFullPath(link);
        var prefix = sourceFull.TrimEnd(Path.DirectorySeparatorChar) + Path.DirectorySeparatorChar;

        if (linkFull.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
            return (false, "The copy cannot be created inside its own source folder.");

        try
        {
            switch (kind)
            {
                case HardCopy:
                    CopyTree(sourceFull, linkFull, CopyMode.HardLink);
                    break;
                case SymbolicCopy:
                    CopyTree(sourceFull, linkFull, CopyMode.SymbolicLink);
                    break;
                case SmartCopy:
                    SmartCopyTree(sourceFull, linkFull, false);
                    break;
                case SmartMirror:
                    SmartCopyTree(sourceFull, linkFull, true);
                    break;
                case MultiVersionSmartCopy:
                    if (Directory.Exists(linkFull))
                        Directory.Move(linkFull, VersionedName(linkFull));
                    SmartCopyTree(sourceFull, linkFull, false);
                    break;
                default:
                    return (false, "Unknown link copy type.");
            }

            return (true, "");
        }
        catch (Exception ex)
        {
            return (false, ex.Message);
        }
    }

    private enum CopyMode
    {
        HardLink,
        SymbolicLink,
    }

    private static void CopyTree(string source, string target, CopyMode mode)
    {
        Directory.CreateDirectory(target);

        foreach (var entry in Directory.EnumerateFileSystemEntries(source))
        {
            var name = Path.GetFileName(entry);
            var destination = Path.Combine(target, name);
            var info = new FileInfo(entry);

            if (Directory.Exists(entry))
            {
                // A reparse-point folder would otherwise let the walk loop back into the source.
                if (info.Attributes.HasFlag(FileAttributes.ReparsePoint))
                    continue;

                CopyTree(entry, destination, mode);
                continue;
            }

            var result = mode switch
            {
                CopyMode.HardLink => FileLinkCreation.Create(FileLinkCreation.Hard, entry, destination),
                _ => FileLinkCreation.Create(FileLinkCreation.SymbolicFile, entry, destination),
            };

            if (!result.Ok)
                throw new IOException(result.Error);
        }
    }

    private static void SmartCopyTree(string source, string target, bool mirror)
    {
        Directory.CreateDirectory(target);

        foreach (var entry in Directory.EnumerateFileSystemEntries(source))
        {
            var name = Path.GetFileName(entry);
            var destination = Path.Combine(target, name);

            if (Directory.Exists(entry))
            {
                var info = new FileInfo(entry);
                if (info.Attributes.HasFlag(FileAttributes.ReparsePoint))
                    continue;

                SmartCopyTree(entry, destination, mirror);
                continue;
            }

            CopyIfChanged(entry, destination);
        }

        if (!mirror)
            return;

        foreach (var entry in Directory.EnumerateFileSystemEntries(target))
        {
            var name = Path.GetFileName(entry);
            var counterpart = Path.Combine(source, name);

            if (File.Exists(counterpart) || Directory.Exists(counterpart))
                continue;

            if (Directory.Exists(entry))
                Directory.Delete(entry, true);
            else
                File.Delete(entry);
        }
    }

    private static void CopyIfChanged(string source, string destination)
    {
        var sourceInfo = new FileInfo(source);
        var destinationInfo = new FileInfo(destination);

        if (destinationInfo.Exists
            && destinationInfo.Length == sourceInfo.Length
            && destinationInfo.LastWriteTimeUtc == sourceInfo.LastWriteTimeUtc)
            return;

        Directory.CreateDirectory(Path.GetDirectoryName(destination)!);
        File.Copy(source, destination, true);
        File.SetLastWriteTimeUtc(destination, sourceInfo.LastWriteTimeUtc);
    }

    private static string VersionedName(string path)
    {
        var stamp = DateTime.Now.ToString("yyyyMMdd-HHmmss");
        var candidate = $"{path} ({stamp})";

        for (var attempt = 2; Directory.Exists(candidate) || File.Exists(candidate); attempt++)
            candidate = $"{path} ({stamp}-{attempt})";

        return candidate;
    }
}
