using System.Text;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Reads the recycle bin the way the shell stores it: under <c>$Recycle.Bin\&lt;SID&gt;</c> every
///     deleted item has an <c>$I…</c> record (original name, size, deletion time) beside the
///     <c>$R…</c> content. Reading those is enough to list the bin without COM.
/// </summary>
internal static class RecycleBin
{
    private const int MaxPathChars = 32 * 1024;

    public static IReadOnlyList<RecycleEntry> List() =>
    [
        .. DriveInfo.GetDrives()
            .Where(drive => Try.Run(() => drive.IsReady).GetOrNull())
            .SelectMany(drive => ListDrive(drive.Name))
            .OrderByDescending(entry => entry.Deleted)
    ];

    private static IEnumerable<RecycleEntry> ListDrive(string root)
    {
        var bin = Path.Combine(root, "$Recycle.Bin");
        if (!Directory.Exists(bin))
            yield break;

        // Other users' folders are usually unreadable without elevation; skipping them is fine.
        foreach (var folder in Try.Run(() => Directory.GetDirectories(bin)).GetOrElse(_ => []))
        foreach (var info in Try.Run(() => Directory.GetFiles(folder, "$I*")).GetOrElse(_ => []))
            if (Try.Run(() => Read(info)).GetOrNull() is { } entry)
                yield return entry;
    }

    private static RecycleEntry? Read(string infoPath)
    {
        using var reader = new BinaryReader(File.OpenRead(infoPath));

        var version = reader.ReadInt64();
        var size = reader.ReadInt64();
        var deleted = reader.ReadInt64();
        var original = version >= 2 ? ReadVariablePath(reader) : ReadLegacyPath(reader);

        if (string.IsNullOrWhiteSpace(original))
            return null;

        var content = Path.Combine(Path.GetDirectoryName(infoPath)!,
            "$R" + Path.GetFileName(infoPath)[2..]);

        return new RecycleEntry(
            Path.GetFileName(original.TrimEnd('\\', '/')),
            original,
            size,
            new DateTimeOffset(DateTime.FromFileTimeUtc(deleted)).ToUnixTimeMilliseconds(),
            Directory.Exists(content));
    }

    /// <summary>Version 2 stores the length in characters (including the terminator) before the path.</summary>
    private static string? ReadVariablePath(BinaryReader reader)
    {
        var length = reader.ReadInt32();
        if (length is <= 0 or > MaxPathChars)
            return null;

        return Encoding.Unicode.GetString(reader.ReadBytes(length * 2)).TrimEnd('\0');
    }

    /// <summary>The original layout reserved a fixed 260-character buffer for the path.</summary>
    private static string ReadLegacyPath(BinaryReader reader) =>
        Encoding.Unicode.GetString(reader.ReadBytes(520)).TrimEnd('\0');
}
