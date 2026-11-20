using System.Collections.Concurrent;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The folder a page request is answered from. A listing is enumerated once and kept with its
///     signature; the pages, and each sort of them, are slices of that list. Without it every scroll
///     would walk the disk again.
/// </summary>
internal static class ListingCache
{
    /// <summary>How many folders stay resident; a file manager moves between a handful at a time.</summary>
    private const int Keep = 6;

    private static readonly Lock Gate = new();
    private static readonly Dictionary<string, Entry> Entries = new(StringComparer.OrdinalIgnoreCase);
    private static readonly Queue<string> Order = new();

    /// <summary>One enumeration per folder at a time, so a burst of requests does not repeat the walk.</summary>
    private static readonly ConcurrentDictionary<string, Task<Entry>> Inflight = new(StringComparer.OrdinalIgnoreCase);

    public static async Task<Page> ReadAsync(string directory, string sort, bool descending, int from, int count,
        CancellationToken cancellationToken)
    {
        var entry = await LoadAsync(directory, cancellationToken);
        var list = Sorted(entry, sort, descending);
        var start = Math.Min(Math.Max(from, 0), list.Count);
        var length = Math.Min(count, list.Count - start);

        return new(entry.Path, entry.Signature, list.Count, list.GetRange(start, length));
    }

    private static async Task<Entry> LoadAsync(string directory, CancellationToken cancellationToken)
    {
        var task = Inflight.GetOrAdd(directory, path => LoadCoreAsync(path));

        try
        {
            return await task.WaitAsync(cancellationToken);
        }
        finally
        {
            if (task.IsCompleted)
                Inflight.TryRemove(new KeyValuePair<string, Task<Entry>>(directory, task));
        }
    }

    private static async Task<Entry> LoadCoreAsync(string directory)
    {
        // The same enumeration the window uses, so the index stays current and archive paths work;
        // measuring child folders is not needed for a page.
        var payload = await FileSystemService.List(directory, false);
        var signature = DirectoryIndex.SignatureOf(payload.Entries);

        lock (Gate)
        {
            if (Entries.TryGetValue(directory, out var known) && known.Signature == signature)
                return known;

            var entry = new Entry(signature, payload.Path, [.. payload.Entries]);

            Entries[directory] = entry;
            Order.Enqueue(directory);

            while (Order.Count > Keep)
                Entries.Remove(Order.Dequeue(), out _);

            return entry;
        }
    }

    private static List<FileEntry> Sorted(Entry entry, string sort, bool descending)
    {
        var key = $"{sort}|{(descending ? 1 : 0)}";

        lock (Gate)
        {
            if (entry.Sorted.TryGetValue(key, out var known))
                return known;

            var list = new List<FileEntry>(entry.Entries);
            list.Sort((left, right) => Compare(left, right, sort, descending));

            entry.Sorted[key] = list;
            return list;
        }
    }

    private static int Compare(FileEntry left, FileEntry right, string sort, bool descending)
    {
        // Folders first in both directions, the way Explorer orders a listing.
        if (left.IsDirectory != right.IsDirectory)
            return left.IsDirectory ? -1 : 1;

        var result = sort switch
        {
            "size" => left.Size.CompareTo(right.Size),
            "modified" => left.Modified.CompareTo(right.Modified),
            "created" => left.Created.CompareTo(right.Created),
            "type" => string.Compare(TypeOf(left), TypeOf(right), StringComparison.OrdinalIgnoreCase),
            _ => string.Compare(left.Name, right.Name, StringComparison.OrdinalIgnoreCase)
        };

        // Equal keys stay in name order, so a page is stable from one request to the next.
        if (result == 0 && sort != "name")
            result = string.Compare(left.Name, right.Name, StringComparison.OrdinalIgnoreCase);

        return descending ? -result : result;
    }

    private static string TypeOf(FileEntry entry) =>
        entry.IsDirectory ? "" : Path.GetExtension(entry.Name);

    internal sealed record Page(string Path, int Signature, int Total, IReadOnlyList<FileEntry> Entries);

    private sealed class Entry(int signature, string path, List<FileEntry> entries)
    {
        public int Signature { get; } = signature;

        public string Path { get; } = path;

        public List<FileEntry> Entries { get; } = entries;

        /// <summary>The same list under one sort, so scrolling never re-sorts.</summary>
        public Dictionary<string, List<FileEntry>> Sorted { get; } = new(StringComparer.Ordinal);
    }
}
