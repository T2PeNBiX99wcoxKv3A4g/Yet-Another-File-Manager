using System.Collections.Concurrent;
using System.Text.Json;
using Microsoft.Data.Sqlite;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The per-folder index: <c>.yafm-index.db</c> beside the files. It holds icons, cached folder
///     sizes and the last listing, so a folder can be painted before the disk is walked again.
/// </summary>
/// <remarks>
///     Everything here is best effort. A read-only volume, a locked file or a database written by an
///     older version must never break a listing, so every operation degrades to "no data" and the
///     schema is migrated through <c>PRAGMA user_version</c>.
/// </remarks>
internal static class FolderIndex
{
    public const string FileName = ".yafm-index.db";

    private const int SchemaVersion = 5;

    private static readonly ConcurrentDictionary<string, bool> Unusable = new(StringComparer.OrdinalIgnoreCase);

    /// <summary>SQLite allows one writer at a time; reads never take this gate.</summary>
    private static readonly IndexWriteGate WriteGate = new();

    /// <summary>Directories whose index attributes were already checked in this process.</summary>
    private static readonly ConcurrentDictionary<string, bool> Checked = new(StringComparer.OrdinalIgnoreCase);

    private static readonly string[] Schema =
    [
        // v1: per-entry icons and free-form metadata.
        """
        CREATE TABLE IF NOT EXISTS meta (
            key   TEXT NOT NULL CONSTRAINT PK_meta PRIMARY KEY,
            value TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS icons (
            name   TEXT NOT NULL CONSTRAINT PK_icons PRIMARY KEY,
            source TEXT NOT NULL
        );
        """,

        // v2: cached sizes of the entries, so a folder does not have to be walked every time.
        """
        CREATE TABLE IF NOT EXISTS sizes (
            name        TEXT NOT NULL CONSTRAINT PK_sizes PRIMARY KEY,
            bytes       INTEGER NOT NULL,
            computed_at INTEGER NOT NULL
        );
        """,

        // v3: the last listing, so the interface can paint it before the real scan finishes.
        """
        CREATE TABLE IF NOT EXISTS listing (
            name         TEXT NOT NULL CONSTRAINT PK_listing PRIMARY KEY,
            path         TEXT NOT NULL,
            is_directory INTEGER NOT NULL,
            size         INTEGER NOT NULL,
            modified     INTEGER NOT NULL,
            is_hidden    INTEGER NOT NULL,
            is_system    INTEGER NOT NULL,
            icon_source  TEXT
        );
        """,

        // v4: how this directory is shown, and the link/creation details the list can display.
        """
        ALTER TABLE listing ADD COLUMN created INTEGER NOT NULL DEFAULT 0;
        ALTER TABLE listing ADD COLUMN link_target TEXT;
        ALTER TABLE listing ADD COLUMN link_valid INTEGER;
        ALTER TABLE listing ADD COLUMN link_count INTEGER NOT NULL DEFAULT 1;
        CREATE TABLE IF NOT EXISTS settings (
            key   TEXT NOT NULL CONSTRAINT PK_settings PRIMARY KEY,
            value TEXT NOT NULL
        );
        """,

        // v5: user tags and how many entries each child directory holds. Both stay with the folder.
        """
        CREATE TABLE IF NOT EXISTS tags (
            name TEXT NOT NULL CONSTRAINT PK_tags PRIMARY KEY,
            tags TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS counts (
            name        TEXT NOT NULL CONSTRAINT PK_counts PRIMARY KEY,
            count       INTEGER NOT NULL,
            computed_at INTEGER NOT NULL
        );
        """
    ];

    public static string PathFor(string directory) => Path.Combine(directory, FileName);

    /// <summary>Excludes the index and SQLite's side files from a listing.</summary>
    public static bool IsIndexFile(string name) =>
        name.StartsWith(FileName, StringComparison.OrdinalIgnoreCase);

    /// <summary>Icons recorded for the entries of a directory, by entry name.</summary>
    public static async Task<Dictionary<string, string>> IconsAsync(string directory) =>
        await ReadAsync(directory, "SELECT name, source FROM icons", async reader =>
        {
            var icons = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

            while (await reader.ReadAsync())
                icons[reader.GetString(0)] = reader.GetString(1);

            return icons;
        }) ?? new Dictionary<string, string>();

    /// <summary>Every piece a listing reads from this folder, over a single connection.</summary>
    public static async Task<DirectoryIndex.MetadataSnapshot?> ReadMetadataAsync(string directory)
    {
        var result = await Try.Run(async () =>
        {
            await using var connection = await OpenAsync(directory, false);

            return connection is null ? null : await ReadMetadataOnConnectionAsync(connection);
        });

        return result.OnFailure(ex => Log.Debug(ex, "Could not read the index of {Directory}", directory))
            .GetOrNull();
    }

    /// <summary>
    ///     The saved listing and the rest of the index together. Both are read over one connection,
    ///     so painting a folder from the cache costs one open instead of two.
    /// </summary>
    public static async Task<(List<FileEntry>? Entries, DirectoryIndex.MetadataSnapshot Metadata)>
        ReadCachedAsync(string directory)
    {
        var result = await Try.Run(async () =>
        {
            await using var connection = await OpenAsync(directory, false);

            if (connection is null)
                return ((List<FileEntry>?)null, DirectoryIndex.MetadataSnapshot.Empty);

            // A damaged table must not take the saved listing down with it.
            var entries = await Try.Run(() => ReadListingOnConnectionAsync(connection)).GetOrNull();
            var metadata = await Try.Run(() => ReadMetadataOnConnectionAsync(connection))
                .GetOrElse(_ => Task.FromResult(DirectoryIndex.MetadataSnapshot.Empty));

            return (entries, metadata);
        });

        return result.OnFailure(ex => Log.Debug(ex, "Could not read the index of {Directory}", directory))
            .GetOrElse(_ => (null, DirectoryIndex.MetadataSnapshot.Empty));
    }

    private static async Task<DirectoryIndex.MetadataSnapshot> ReadMetadataOnConnectionAsync(SqliteConnection connection)
    {
        var icons = await ReadOnConnectionAsync(connection, "SELECT name, source FROM icons", async reader =>
        {
            var values = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

            while (await reader.ReadAsync())
                values[reader.GetString(0)] = reader.GetString(1);

            return values;
        });

        var sizes = await ReadOnConnectionAsync(connection, "SELECT name, bytes FROM sizes", async reader =>
        {
            var values = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);

            while (await reader.ReadAsync())
                values[reader.GetString(0)] = reader.GetInt64(1);

            return values;
        });

        var view = await ReadOnConnectionAsync(connection, "SELECT value FROM settings WHERE key = 'view'",
            async reader => await reader.ReadAsync()
                ? Try.Run(() => JsonSerializer.Deserialize(reader.GetString(0),
                    AppJsonContext.Default.DirectoryView)).GetOrNull()
                : null);

        var tags = await ReadOnConnectionAsync(connection, "SELECT name, tags FROM tags", async reader =>
        {
            var values = new Dictionary<string, List<string>>(StringComparer.OrdinalIgnoreCase);

            while (await reader.ReadAsync())
            {
                var list = Try.Run(() => JsonSerializer.Deserialize(reader.GetString(1),
                    AppJsonContext.Default.ListString)).GetOrNull();

                if (list is { Count: > 0 })
                    values[reader.GetString(0)] = list;
            }

            return values;
        });

        var tagColors = await ReadOnConnectionAsync(connection,
            "SELECT value FROM settings WHERE key = 'tag_colors'",
            async reader => await reader.ReadAsync()
                ? Try.Run(() => JsonSerializer.Deserialize(reader.GetString(0),
                    AppJsonContext.Default.DictionaryStringString)).GetOrNull()
                : null);

        var counts = await ReadOnConnectionAsync(connection, "SELECT name, count FROM counts", async reader =>
        {
            var values = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);

            while (await reader.ReadAsync())
                values[reader.GetString(0)] = reader.GetInt64(1);

            return values;
        });

        return new(icons, sizes, view, tags, tagColors ?? [], counts);
    }

    /// <summary>Cached sizes of the entries of a directory, by entry name.</summary>
    public static async Task<Dictionary<string, long>> SizesAsync(string directory) =>
        await ReadAsync(directory, "SELECT name, bytes FROM sizes", async reader =>
        {
            var sizes = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);

            while (await reader.ReadAsync())
                sizes[reader.GetString(0)] = reader.GetInt64(1);

            return sizes;
        }) ?? new Dictionary<string, long>();

    /// <summary>The last listing saved for this directory, or null when it was never cached.</summary>
    public static async Task<List<FileEntry>?> ListingAsync(string directory)
    {
        var result = await Try.Run(async () =>
        {
            await using var connection = await OpenAsync(directory, false);

            return connection is null ? null : await ReadListingOnConnectionAsync(connection);
        });

        return result.OnFailure(ex => Log.Debug(ex, "Could not read the listing of {Directory}", directory))
            .GetOrNull();
    }

    /// <summary>The saved rows, or null when this directory has never been listed through the index.</summary>
    private static async Task<List<FileEntry>?> ReadListingOnConnectionAsync(SqliteConnection connection)
    {
        var saved = await ReadOnConnectionAsync(connection, "SELECT value FROM meta WHERE key = 'listing'",
            async reader => await reader.ReadAsync() ? reader.GetString(0) : null);

        if (saved is null)
            return null;

        return await ReadOnConnectionAsync(connection,
            "SELECT name, path, is_directory, size, modified, is_hidden, is_system, icon_source, " +
            "created, link_target, link_valid, link_count FROM listing " +
            "ORDER BY is_directory DESC, name COLLATE NOCASE",
            async reader =>
            {
                var entries = new List<FileEntry>();

                while (await reader.ReadAsync())
                    entries.Add(new(
                        reader.GetString(0),
                        reader.GetString(1),
                        reader.GetInt64(2) != 0,
                        reader.GetInt64(3),
                        reader.GetInt64(4),
                        reader.GetInt64(5) != 0,
                        reader.GetInt64(6) != 0,
                        reader.IsDBNull(7) ? null : reader.GetString(7),
                        reader.GetInt64(8),
                        reader.IsDBNull(9) ? null : reader.GetString(9),
                        reader.IsDBNull(10) ? null : reader.GetInt64(10) != 0,
                        (int)reader.GetInt64(11)));

                return entries;
            });
    }

    /// <summary>Stores the complete listing, hidden and system entries included.</summary>
    public static async Task<bool> SaveListingAsync(string directory, IReadOnlyList<FileEntry> entries)
    {
        await WriteGate.WaitAsync(IndexFocus.Is(directory));
        try
        {
            var result = await Try.Run(async () =>
            {
                await using var connection = await OpenAsync(directory, true);
                if (connection is null)
                    return false;

                await using var transaction = await connection.BeginTransactionAsync();
                await using (var clear = connection.CreateCommand())
                {
                    clear.Transaction = (SqliteTransaction)transaction;
                    clear.CommandText = "DELETE FROM listing";
                    await clear.ExecuteNonQueryAsync();
                }

                await using (var insert = connection.CreateCommand())
                {
                    insert.Transaction = (SqliteTransaction)transaction;
                    insert.CommandText =
                        "INSERT INTO listing (name, path, is_directory, size, modified, is_hidden, is_system, " +
                        "icon_source, created, link_target, link_valid, link_count) " +
                        "VALUES ($name, $path, $directory, $size, $modified, $hidden, $system, $icon, " +
                        "$created, $target, $valid, $links)";
                    var name = insert.Parameters.Add("$name", SqliteType.Text);
                    var path = insert.Parameters.Add("$path", SqliteType.Text);
                    var isDirectory = insert.Parameters.Add("$directory", SqliteType.Integer);
                    var size = insert.Parameters.Add("$size", SqliteType.Integer);
                    var modified = insert.Parameters.Add("$modified", SqliteType.Integer);
                    var hidden = insert.Parameters.Add("$hidden", SqliteType.Integer);
                    var system = insert.Parameters.Add("$system", SqliteType.Integer);
                    var icon = insert.Parameters.Add("$icon", SqliteType.Text);
                    var created = insert.Parameters.Add("$created", SqliteType.Integer);
                    var target = insert.Parameters.Add("$target", SqliteType.Text);
                    var valid = insert.Parameters.Add("$valid", SqliteType.Integer);
                    var links = insert.Parameters.Add("$links", SqliteType.Integer);

                    insert.Prepare();

                    foreach (var entry in entries)
                    {
                        name.Value = entry.Name;
                        path.Value = entry.FullPath;
                        isDirectory.Value = entry.IsDirectory ? 1 : 0;
                        size.Value = entry.Size;
                        modified.Value = entry.Modified;
                        hidden.Value = entry.IsHidden ? 1 : 0;
                        system.Value = entry.IsSystem ? 1 : 0;
                        icon.Value = entry.IconSource is null ? DBNull.Value : entry.IconSource;
                        created.Value = entry.Created;
                        target.Value = entry.LinkTarget is null ? DBNull.Value : entry.LinkTarget;
                        valid.Value = entry.LinkValid is null ? DBNull.Value : entry.LinkValid.Value ? 1 : 0;
                        links.Value = entry.LinkCount;
                        await insert.ExecuteNonQueryAsync();
                    }
                }

                await using (var mark = connection.CreateCommand())
                {
                    mark.Transaction = (SqliteTransaction)transaction;
                    mark.CommandText = "INSERT INTO meta (key, value) VALUES ('listing', $now) " +
                                       "ON CONFLICT(key) DO UPDATE SET value = excluded.value";
                    mark.Parameters.AddWithValue("$now", DateTimeOffset.UtcNow.ToUnixTimeMilliseconds());
                    await mark.ExecuteNonQueryAsync();
                }

                await transaction.CommitAsync();
                return true;
            });

            return result.OnFailure(ex =>
            {
                Unusable[directory] = true;
                Log.Debug(ex, "Could not store the listing of {Directory}", directory);
            }).GetOrElse(_ => false);
        }
        finally
        {
            WriteGate.Release();
        }
    }

    /// <summary>Everything the folder has collected, for the move to the central database.</summary>
    public static async Task<IndexSnapshot?> SnapshotAsync(string directory)
    {
        if (!File.Exists(PathFor(directory)))
            return null;

        // A database that cannot be opened must not be imported as "empty" and then deleted.
        var readable = await Try.Run(async () =>
        {
            await using var connection = await OpenAsync(directory, false);
            return connection is not null;
        });

        if (!readable.GetOrElse(_ => false))
            return null;

        return new(
            await ListingAsync(directory),
            await IconsAsync(directory),
            await SizesAsync(directory),
            await ViewAsync(directory));
    }

    /// <summary>How this directory is stored to be shown, or null when it inherits the default.</summary>
    public static async Task<DirectoryView?> ViewAsync(string directory) =>
        await ReadAsync(directory, "SELECT value FROM settings WHERE key = 'view'",
            async reader => await reader.ReadAsync()
                ? Try.Run(() => JsonSerializer.Deserialize(reader.GetString(0),
                    AppJsonContext.Default.DirectoryView)).GetOrNull()
                : null);

    /// <summary>Stores this directory's own view settings, so it opens the same way next time.</summary>
    public static Task<bool> SaveViewAsync(string directory, DirectoryView view) =>
        WriteAsync(directory,
            "INSERT INTO settings (key, value) VALUES ('view', $value) " +
            "ON CONFLICT(key) DO UPDATE SET value = excluded.value",
            command => command.Parameters.AddWithValue("$value",
                JsonSerializer.Serialize(view, AppJsonContext.Default.DirectoryView)));

    /// <summary>Every entry that has tags, by entry name. Tags only ever live in the folder itself.</summary>
    public static async Task<Dictionary<string, List<string>>> TagsAsync(string directory) =>
        await ReadAsync(directory, "SELECT name, tags FROM tags", async reader =>
        {
            var tags = new Dictionary<string, List<string>>(StringComparer.OrdinalIgnoreCase);

            while (await reader.ReadAsync())
            {
                var list = Try.Run(() => JsonSerializer.Deserialize(reader.GetString(1),
                    AppJsonContext.Default.ListString)).GetOrNull();

                if (list is { Count: > 0 })
                    tags[reader.GetString(0)] = list;
            }

            return tags;
        }) ?? [];

    /// <summary>Replaces one entry's tags; an empty list removes the row.</summary>
    public static Task<bool> SetTagsAsync(string directory, string name, IReadOnlyList<string> tags) =>
        WriteAsync(directory,
            tags.Count == 0
                ? "DELETE FROM tags WHERE name = $name"
                : "INSERT INTO tags (name, tags) VALUES ($name, $tags) " +
                  "ON CONFLICT(name) DO UPDATE SET tags = excluded.tags",
            command =>
            {
                command.Parameters.AddWithValue("$name", name);
                if (tags.Count > 0)
                    command.Parameters.AddWithValue("$tags",
                        JsonSerializer.Serialize(tags.ToList(), AppJsonContext.Default.ListString));
            });

    /// <summary>Removes one tag from every entry in a folder's index.</summary>
    public static async Task<bool> RemoveTagAsync(string directory, string tag)
    {
        await WriteGate.WaitAsync(IndexFocus.Is(directory));

        try
        {
            var result = await Try.Run(async () =>
            {
                // Reading and writing happen in one pass, so the index must be opened writable.
                await using var connection = await OpenAsync(directory, true);
                if (connection is null)
                    return false;

                var rows = new List<(string Name, List<string> Tags)>();

                await using (var read = connection.CreateCommand())
                {
                    read.CommandText = "SELECT name, tags FROM tags";
                    await using var reader = await read.ExecuteReaderAsync();

                    while (await reader.ReadAsync())
                    {
                        var tags = Try.Run(() => JsonSerializer.Deserialize(reader.GetString(1),
                            AppJsonContext.Default.ListString)).GetOrNull();

                        if (tags is { Count: > 0 } && tags.Contains(tag, StringComparer.OrdinalIgnoreCase))
                            rows.Add((reader.GetString(0), tags));
                    }
                }

                await using var transaction = await connection.BeginTransactionAsync();

                foreach (var (name, tags) in rows)
                {
                    tags.RemoveAll(value => string.Equals(value, tag, StringComparison.OrdinalIgnoreCase));

                    await using var command = connection.CreateCommand();
                    command.Transaction = (SqliteTransaction)transaction;

                    if (tags.Count == 0)
                        command.CommandText = "DELETE FROM tags WHERE name = $name";
                    else
                    {
                        command.CommandText = "UPDATE tags SET tags = $tags WHERE name = $name";
                        command.Parameters.AddWithValue("$tags",
                            JsonSerializer.Serialize(tags, AppJsonContext.Default.ListString));
                    }

                    command.Parameters.AddWithValue("$name", name);
                    await command.ExecuteNonQueryAsync();
                }

                // A color left behind would resurrect the deleted tag the next time the folder is
                // listed, so the settings row is cleaned in the same transaction.
                await using (var read = connection.CreateCommand())
                {
                    read.CommandText = "SELECT value FROM settings WHERE key = 'tag_colors'";
                    read.Transaction = (SqliteTransaction)transaction;

                    var raw = await read.ExecuteScalarAsync() as string;
                    var colors = raw is null
                        ? null
                        : Try.Run(() => JsonSerializer.Deserialize(raw,
                            AppJsonContext.Default.DictionaryStringString)).GetOrNull();

                    if (colors is not null)
                    {
                        var key = colors.Keys.FirstOrDefault(value =>
                            string.Equals(value, tag, StringComparison.OrdinalIgnoreCase));

                        if (key is not null)
                        {
                            colors.Remove(key);

                            await using var write = connection.CreateCommand();
                            write.Transaction = (SqliteTransaction)transaction;

                            if (colors.Count == 0)
                                write.CommandText = "DELETE FROM settings WHERE key = 'tag_colors'";
                            else
                            {
                                write.CommandText =
                                    "UPDATE settings SET value = $value WHERE key = 'tag_colors'";
                                write.Parameters.AddWithValue("$value",
                                    JsonSerializer.Serialize(colors, AppJsonContext.Default.DictionaryStringString));
                            }

                            await write.ExecuteNonQueryAsync();
                        }
                    }
                }

                await transaction.CommitAsync();
                return true;
            });

            return result.OnFailure(ex => Log.Debug(ex, "Could not remove tag {Tag} from {Directory}", tag, directory))
                .GetOrElse(_ => false);
        }
        finally
        {
            WriteGate.Release();
        }
    }

    /// <summary>Renames one tag in every entry and color in a folder's index.</summary>
    public static async Task<bool> RenameTagAsync(string directory, string tag, string next)
    {
        await WriteGate.WaitAsync(IndexFocus.Is(directory));

        try
        {
            var result = await Try.Run(async () =>
            {
                // Reading and writing happen in one pass, so the index must be opened writable.
                await using var connection = await OpenAsync(directory, true);
                if (connection is null)
                    return false;

                var rows = new List<(string Name, List<string> Tags)>();

                await using (var read = connection.CreateCommand())
                {
                    read.CommandText = "SELECT name, tags FROM tags";
                    await using var reader = await read.ExecuteReaderAsync();

                    while (await reader.ReadAsync())
                    {
                        var tags = Try.Run(() => JsonSerializer.Deserialize(reader.GetString(1),
                            AppJsonContext.Default.ListString)).GetOrNull();

                        if (tags is { Count: > 0 } && tags.Contains(tag, StringComparer.OrdinalIgnoreCase))
                            rows.Add((reader.GetString(0), tags));
                    }
                }

                await using var transaction = await connection.BeginTransactionAsync();

                foreach (var (name, tags) in rows)
                {
                    var renamed = new List<string>(tags.Count);

                    foreach (var value in tags)
                    {
                        var text = string.Equals(value, tag, StringComparison.OrdinalIgnoreCase) ? next : value;

                        if (!renamed.Contains(text, StringComparer.OrdinalIgnoreCase))
                            renamed.Add(text);
                    }

                    await using var command = connection.CreateCommand();
                    command.Transaction = (SqliteTransaction)transaction;
                    command.CommandText = "UPDATE tags SET tags = $tags WHERE name = $name";
                    command.Parameters.AddWithValue("$tags",
                        JsonSerializer.Serialize(renamed, AppJsonContext.Default.ListString));
                    command.Parameters.AddWithValue("$name", name);
                    await command.ExecuteNonQueryAsync();
                }

                // The color is a separate settings row; move its key with the tag so the picker
                // keeps showing the same color under the new name.
                await using (var read = connection.CreateCommand())
                {
                    read.CommandText = "SELECT value FROM settings WHERE key = 'tag_colors'";
                    read.Transaction = (SqliteTransaction)transaction;

                    var raw = await read.ExecuteScalarAsync() as string;
                    var colors = raw is null
                        ? null
                        : Try.Run(() => JsonSerializer.Deserialize(raw,
                            AppJsonContext.Default.DictionaryStringString)).GetOrNull();

                    var key = colors?.Keys.FirstOrDefault(value =>
                        string.Equals(value, tag, StringComparison.OrdinalIgnoreCase));

                    if (colors is not null && key is not null)
                    {
                        var color = colors[key];
                        colors.Remove(key);

                        if (!colors.Keys.Any(value => string.Equals(value, next, StringComparison.OrdinalIgnoreCase)))
                            colors[next] = color;

                        await using var write = connection.CreateCommand();
                        write.Transaction = (SqliteTransaction)transaction;
                        write.CommandText = "UPDATE settings SET value = $value WHERE key = 'tag_colors'";
                        write.Parameters.AddWithValue("$value",
                            JsonSerializer.Serialize(colors, AppJsonContext.Default.DictionaryStringString));
                        await write.ExecuteNonQueryAsync();
                    }
                }

                await transaction.CommitAsync();
                return true;
            });

            return result.OnFailure(ex => Log.Debug(ex, "Could not rename tag {Tag} in {Directory}", tag, directory))
                .GetOrElse(_ => false);
        }
        finally
        {
            WriteGate.Release();
        }
    }

    /// <summary>The color each tag was given, by tag name.</summary>
    public static async Task<Dictionary<string, string>> TagColorsAsync(string directory) =>
        await ReadAsync(directory, "SELECT value FROM settings WHERE key = 'tag_colors'",
            async reader => await reader.ReadAsync()
                ? Try.Run(() => JsonSerializer.Deserialize(reader.GetString(0),
                    AppJsonContext.Default.DictionaryStringString)).GetOrNull()
                : null) ?? [];

    /// <summary>Stores the color of every tag in the folder, so chips keep their colors.</summary>
    public static Task<bool> SaveTagColorsAsync(string directory, IReadOnlyDictionary<string, string> colors) =>
        WriteAsync(directory,
            "INSERT INTO settings (key, value) VALUES ('tag_colors', $value) " +
            "ON CONFLICT(key) DO UPDATE SET value = excluded.value",
            command => command.Parameters.AddWithValue("$value",
                JsonSerializer.Serialize(colors.ToDictionary(pair => pair.Key, pair => pair.Value),
                    AppJsonContext.Default.DictionaryStringString)));

    /// <summary>How many entries each child directory holds, as last counted.</summary>
    public static async Task<Dictionary<string, long>> CountsAsync(string directory) =>
        await ReadAsync(directory, "SELECT name, count FROM counts", async reader =>
        {
            var counts = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);

            while (await reader.ReadAsync())
                counts[reader.GetString(0)] = reader.GetInt64(1);

            return counts;
        }) ?? [];

    /// <summary>Stores how many entries a child directory holds.</summary>
    public static Task<bool> SetCountAsync(string directory, string name, long count) =>
        WriteAsync(directory,
            "INSERT INTO counts (name, count, computed_at) VALUES ($name, $count, $now) " +
            "ON CONFLICT(name) DO UPDATE SET count = excluded.count, computed_at = excluded.computed_at",
            command =>
            {
                command.Parameters.AddWithValue("$name", name);
                command.Parameters.AddWithValue("$count", count);
                command.Parameters.AddWithValue("$now", DateTimeOffset.UtcNow.ToUnixTimeMilliseconds());
            });

    /// <summary>Removes the per-folder database after its data was moved elsewhere.</summary>
    public static async Task DeleteFilesAsync(string directory)
    {
        await WriteGate.WaitAsync(IndexFocus.Is(directory));
        try
        {
            foreach (var suffix in new[]
                     {
                         "", "-wal", "-shm"
                     })
            {
                var path = PathFor(directory) + suffix;
                await Task.Run(() => Try.Run(() =>
                {
                    if (!File.Exists(path))
                        return;

                    // Hidden and System do not block a delete; ReadOnly does. The app never writes
                    // a read-only index, but one copied from elsewhere may carry the flag.
                    var attributes = File.GetAttributes(path);
                    if (attributes.HasFlag(FileAttributes.ReadOnly))
                        File.SetAttributes(path, attributes & ~FileAttributes.ReadOnly);

                    File.Delete(path);
                }).OnFailure(ex => Log.Debug(ex, "Could not remove {Path}", path)));
            }

            Unusable.TryRemove(directory, out _);
        }
        finally
        {
            WriteGate.Release();
        }
    }

    /// <summary>
    ///     Re-applies the Windows attributes of an index that may have arrived from another system
    ///     (a folder copied from Linux keeps the file but not the hidden/system marking).
    /// </summary>
    public static void EnsureHidden(string directory)
    {
        if (!OperatingSystem.IsWindows() || !Checked.TryAdd(directory, true))
            return;

        var path = PathFor(directory);

        Try.Run(() =>
        {
            if (!File.Exists(path))
                return;

            var attributes = File.GetAttributes(path);
            var wanted = attributes | FileAttributes.Hidden | FileAttributes.System;

            if (wanted != attributes)
                File.SetAttributes(path, wanted);
        }).OnFailure(ex => Log.Debug(ex, "Could not hide {Path}", path));
    }

    /// <summary>Offloads the attribute check; it only touches the disk the first time.</summary>
    public static Task EnsureHiddenAsync(string directory) => Task.Run(() => EnsureHidden(directory));

    /// <summary>Stores the sizes of several entries in one transaction.</summary>
    public static Task<bool> SetSizesAsync(string directory, IReadOnlyDictionary<string, long> sizes) =>
        SetValuesAsync(directory, "sizes", "bytes", sizes);

    /// <summary>Stores the item counts of several entries in one transaction.</summary>
    public static Task<bool> SetCountsAsync(string directory, IReadOnlyDictionary<string, long> counts) =>
        SetValuesAsync(directory, "counts", "count", counts);

    private static async Task<bool> SetValuesAsync(string directory, string table, string column,
        IReadOnlyDictionary<string, long> values)
    {
        if (values.Count == 0)
            return true;

        await WriteGate.WaitAsync(IndexFocus.Is(directory));
        try
        {
            var result = await Try.Run(async () =>
            {
                await using var connection = await OpenAsync(directory, true);
                if (connection is null)
                    return false;

                await using var transaction = await connection.BeginTransactionAsync();
                await using var command = connection.CreateCommand();
                command.Transaction = (SqliteTransaction)transaction;
                command.CommandText = $"INSERT INTO {table} (name, {column}, computed_at) VALUES ($name, $value, $now) " +
                                      $"ON CONFLICT(name) DO UPDATE SET {column} = excluded.{column}, " +
                                      "computed_at = excluded.computed_at";

                var name = command.Parameters.Add("$name", SqliteType.Text);
                var value = command.Parameters.Add("$value", SqliteType.Integer);
                command.Parameters.AddWithValue("$now", DateTimeOffset.UtcNow.ToUnixTimeMilliseconds());

                foreach (var (entry, number) in values)
                {
                    name.Value = entry;
                    value.Value = number;
                    await command.ExecuteNonQueryAsync();
                }

                await transaction.CommitAsync();
                return true;
            });

            return result.OnFailure(ex =>
            {
                Unusable[directory] = true;
                Log.Debug(ex, "Could not store the {Table} of {Directory}", table, directory);
            }).GetOrElse(_ => false);
        }
        finally
        {
            WriteGate.Release();
        }
    }

    /// <summary>Stores an icon source for one entry; a null source removes the override.</summary>
    public static Task<bool> SetIconAsync(string directory, string name, string? source) =>
        WriteAsync(directory, source is null
                ? "DELETE FROM icons WHERE name = $name"
                : "INSERT INTO icons (name, source) VALUES ($name, $source) " +
                  "ON CONFLICT(name) DO UPDATE SET source = excluded.source",
            command =>
            {
                command.Parameters.AddWithValue("$name", name);
                if (source is not null)
                    command.Parameters.AddWithValue("$source", source);
            });

    public static Task<bool> SetSizeAsync(string directory, string name, long bytes) =>
        WriteAsync(directory, "INSERT INTO sizes (name, bytes, computed_at) VALUES ($name, $bytes, $now) " +
                              "ON CONFLICT(name) DO UPDATE SET bytes = excluded.bytes, computed_at = excluded.computed_at",
            command =>
            {
                command.Parameters.AddWithValue("$name", name);
                command.Parameters.AddWithValue("$bytes", bytes);
                command.Parameters.AddWithValue("$now", DateTimeOffset.UtcNow.ToUnixTimeMilliseconds());
            });

    // ---- plumbing ----

    private static async Task<T?> ReadAsync<T>(string directory, string sql, Func<SqliteDataReader, Task<T>> read,
        Action<SqliteCommand>? bind = null) where T : class
    {
        var result = await Try.Run(async () =>
        {
            await using var connection = await OpenAsync(directory, false);
            if (connection is null)
                return null;

            return await ReadOnConnectionAsync(connection, sql, read, bind);
        });

        return result.OnFailure(ex => Log.Debug(ex, "Could not read {Directory} from the index", directory))
            .GetOrNull();
    }

    private static async Task<T> ReadOnConnectionAsync<T>(SqliteConnection connection, string sql,
        Func<SqliteDataReader, Task<T>> read, Action<SqliteCommand>? bind = null)
    {
        await using var command = connection.CreateCommand();
        command.CommandText = sql;
        bind?.Invoke(command);

        await using var reader = await command.ExecuteReaderAsync();
        return await read(reader);
    }

    private static async Task<bool> WriteAsync(string directory, string sql, Action<SqliteCommand> bind)
    {
        await WriteGate.WaitAsync(IndexFocus.Is(directory));
        try
        {
            var result = await Try.Run(async () =>
            {
                await using var connection = await OpenAsync(directory, true);
                if (connection is null)
                    return false;

                await using var command = connection.CreateCommand();
                command.CommandText = sql;
                bind(command);
                await command.ExecuteNonQueryAsync();
                return true;
            });

            return result.OnFailure(ex =>
            {
                Unusable[directory] = true;
                Log.Warning(ex, "Could not write to the index of {Directory}", directory);
            }).GetOrElse(_ => false);
        }
        finally
        {
            WriteGate.Release();
        }
    }

    /// <summary>
    ///     Opens a database, creating and migrating it when asked to. A database that cannot be
    ///     opened is remembered so the next listing does not pay for the same failure again.
    /// </summary>
    private static async Task<SqliteConnection?> OpenAsync(string directory, bool create)
    {
        var path = PathFor(directory);

        if (Unusable.ContainsKey(directory))
            return null;

        if (!create && !File.Exists(path))
            return null;

        if (create && !Directory.Exists(directory))
            return null;

        var connection = new SqliteConnection(new SqliteConnectionStringBuilder
        {
            DataSource = path,
            Mode = create ? SqliteOpenMode.ReadWriteCreate : SqliteOpenMode.ReadOnly,
            // One pool per connection string would mean one pool per directory; browsing a big tree
            // then keeps a native connection (and its cache) alive for every folder ever opened.
            Pooling = false
        }.ToString());

        try
        {
            await connection.OpenAsync();

            await using (var timeout = connection.CreateCommand())
            {
                // A read that is only a head start gives up at once; the folder on screen, which the
                // window is actually waiting for, is allowed to wait out a short write.
                timeout.CommandText = (create, IndexFocus.Is(directory)) switch
                {
                    (true, _) => "PRAGMA busy_timeout = 2000",
                    (false, true) => "PRAGMA busy_timeout = 250",
                    _ => "PRAGMA busy_timeout = 100"
                };
                await timeout.ExecuteNonQueryAsync();
            }

            if (create)
            {
                await MigrateAsync(connection);
                Hide(directory, path);
            }

            return connection;
        }
        catch (Exception ex)
        {
            await connection.DisposeAsync();
            Unusable[directory] = true;
            Log.Debug(ex, "Could not open the index of {Directory}", directory);
            return null;
        }
    }

    private static async Task MigrateAsync(SqliteConnection connection)
    {
        var version = await VersionAsync(connection);

        for (var step = version; step < SchemaVersion; step++)
        {
            await using var command = connection.CreateCommand();
            command.CommandText = Schema[step];
            await command.ExecuteNonQueryAsync();
        }

        await using var stamp = connection.CreateCommand();
        stamp.CommandText = $"PRAGMA user_version = {SchemaVersion}";
        await stamp.ExecuteNonQueryAsync();
    }

    private static async Task<int> VersionAsync(SqliteConnection connection)
    {
        await using var command = connection.CreateCommand();
        command.CommandText = "PRAGMA user_version";
        return Convert.ToInt32(await command.ExecuteScalarAsync() ?? 0);
    }

    /// <summary>Windows keeps the index hidden and system, the way <c>thumbs.db</c> is.</summary>
    private static void Hide(string directory, string path)
    {
        if (!OperatingSystem.IsWindows())
            return;

        Try.Run(() => File.SetAttributes(path, FileAttributes.Hidden | FileAttributes.System))
            .OnFailure(ex => Log.Debug(ex, "Could not hide {Path}", path));
    }
}

/// <summary>A folder index loaded in memory so it can be copied into the central database.</summary>
internal sealed record IndexSnapshot(
    List<FileEntry>? Listing,
    Dictionary<string, string> Icons,
    Dictionary<string, long> Sizes,
    DirectoryView? View);