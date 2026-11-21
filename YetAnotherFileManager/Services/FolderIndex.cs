using System.Collections.Concurrent;
using System.Text.Json;
using Microsoft.Data.Sqlite;
using PhotinoNetUtils.Data;
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

    private const int SchemaVersion = 6;

    private static readonly ConcurrentDictionary<string, bool> Unusable = new(StringComparer.OrdinalIgnoreCase);

    /// <summary>
    ///     A portable folder file keeps its writes in the main database, not in a WAL that a copied
    ///     folder would leave behind. The library still gates writes per file and retries a busy lock.
    /// </summary>
    private static readonly SqliteDatabaseOptions WriteOptions = new()
    {
        Pooling = false,
        Wal = false,
        BusyTimeout = 2000,
        RetryCount = 10,
        RetryDelay = 50
    };

    private static readonly SqliteDatabaseOptions ReadOptions = new()
    {
        Pooling = false,
        Wal = false,
        BusyTimeout = 100,
        RetryCount = 2,
        RetryDelay = 25
    };

    private static readonly SqliteDatabaseOptions FocusedReadOptions = new()
    {
        Pooling = false,
        Wal = false,
        BusyTimeout = 250,
        RetryCount = 3,
        RetryDelay = 25
    };

    /// <summary>Directories whose index attributes were already checked in this process.</summary>
    private static readonly ConcurrentDictionary<string, bool> Checked = new(StringComparer.OrdinalIgnoreCase);

    /// <summary>Indexes already known to carry the current schema, so a read pays no extra open.</summary>
    private static readonly ConcurrentDictionary<string, bool> SchemaReady = new(StringComparer.OrdinalIgnoreCase);

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
        """,

        // v6: image data as bytes, instead of a base64 data URL inside a text column.
        """
        ALTER TABLE icons ADD COLUMN kind TEXT;
        ALTER TABLE icons ADD COLUMN mime TEXT;
        ALTER TABLE icons ADD COLUMN data BLOB;
        """
    ];

    public static string PathFor(string directory) => Path.Combine(directory, FileName);

    /// <summary>Excludes the index and SQLite's side files from a listing.</summary>
    public static bool IsIndexFile(string name) =>
        name.StartsWith(FileName, StringComparison.OrdinalIgnoreCase);

    /// <summary>Icons recorded for the entries of a directory, by entry name.</summary>
    public static Task<Dictionary<string, string>> IconsAsync(string directory) =>
        ReadAsync(directory, async (connection, token) =>
            await ReadOnConnectionAsync(connection, "SELECT name, source, mime, data FROM icons", async reader =>
            {
                var icons = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

                while (await reader.ReadAsync(token))
                    if (IconSourceCodec.Read(reader, 1, 2, 3) is { } source)
                        icons[reader.GetString(0)] = source;

                return icons;
            }, token: token),
            new Dictionary<string, string>());

    /// <summary>Every piece a listing reads from this folder, over a single connection.</summary>
    public static Task<DirectoryIndex.MetadataSnapshot?> ReadMetadataAsync(string directory) =>
        ReadAsync(directory, async (connection, token) =>
            (DirectoryIndex.MetadataSnapshot?)await ReadMetadataOnConnectionAsync(connection, token), null);

    /// <summary>
    ///     The saved listing and the rest of the index together. Both are read over one connection,
    ///     so painting a folder from the cache costs one open instead of two.
    /// </summary>
    public static Task<(List<FileEntry>? Entries, DirectoryIndex.MetadataSnapshot Metadata)>
        ReadCachedAsync(string directory) =>
        ReadAsync(directory, async (connection, token) =>
        {
            // A damaged table must not take the saved listing down with it.
            var entries = await Try.Run(() => ReadListingOnConnectionAsync(connection, token)).GetOrNull();
            var metadata = await Try.Run(() => ReadMetadataOnConnectionAsync(connection, token))
                .GetOrElse(_ => Task.FromResult(DirectoryIndex.MetadataSnapshot.Empty));

            return (entries, metadata);
        }, (null, DirectoryIndex.MetadataSnapshot.Empty));

    private static async Task<DirectoryIndex.MetadataSnapshot> ReadMetadataOnConnectionAsync(
        SqliteConnection connection, CancellationToken token = default)
    {
        var icons = await ReadOnConnectionAsync(connection, "SELECT name, source, mime, data FROM icons", async reader =>
        {
            var values = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

            while (await reader.ReadAsync(token))
                if (IconSourceCodec.Read(reader, 1, 2, 3) is { } source)
                    values[reader.GetString(0)] = source;

            return values;
        }, token: token);

        var sizes = await ReadOnConnectionAsync(connection, "SELECT name, bytes FROM sizes", async reader =>
        {
            var values = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);

            while (await reader.ReadAsync(token))
                values[reader.GetString(0)] = reader.GetInt64(1);

            return values;
        }, token: token);

        var view = await ReadOnConnectionAsync(connection, "SELECT value FROM settings WHERE key = 'view'",
            async reader => await reader.ReadAsync(token)
                ? Try.Run(() => JsonSerializer.Deserialize(reader.GetString(0),
                    AppJsonContext.Default.DirectoryView)).GetOrNull()
                : null, token: token);

        var tags = await ReadOnConnectionAsync(connection, "SELECT name, tags FROM tags", async reader =>
        {
            var values = new Dictionary<string, List<string>>(StringComparer.OrdinalIgnoreCase);

            while (await reader.ReadAsync(token))
            {
                var list = Try.Run(() => JsonSerializer.Deserialize(reader.GetString(1),
                    AppJsonContext.Default.ListString)).GetOrNull();

                if (list is { Count: > 0 })
                    values[reader.GetString(0)] = list;
            }

            return values;
        }, token: token);

        var tagColors = await ReadOnConnectionAsync(connection,
            "SELECT value FROM settings WHERE key = 'tag_colors'",
            async reader => await reader.ReadAsync(token)
                ? Try.Run(() => JsonSerializer.Deserialize(reader.GetString(0),
                    AppJsonContext.Default.DictionaryStringString)).GetOrNull()
                : null, token: token);

        var counts = await ReadOnConnectionAsync(connection, "SELECT name, count FROM counts", async reader =>
        {
            var values = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);

            while (await reader.ReadAsync(token))
                values[reader.GetString(0)] = reader.GetInt64(1);

            return values;
        }, token: token);

        return new(icons, sizes, view, tags, tagColors ?? [], counts);
    }

    /// <summary>Cached sizes of the entries of a directory, by entry name.</summary>
    public static Task<Dictionary<string, long>> SizesAsync(string directory) =>
        ReadAsync(directory, async (connection, token) =>
            await ReadOnConnectionAsync(connection, "SELECT name, bytes FROM sizes", async reader =>
            {
                var sizes = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);

                while (await reader.ReadAsync(token))
                    sizes[reader.GetString(0)] = reader.GetInt64(1);

                return sizes;
            }, token: token),
            new Dictionary<string, long>());

    /// <summary>The last listing saved for this directory, or null when it was never cached.</summary>
    public static Task<List<FileEntry>?> ListingAsync(string directory) =>
        ReadAsync<List<FileEntry>?>(directory,
            (connection, token) => ReadListingOnConnectionAsync(connection, token), null);

    /// <summary>The saved rows, or null when this directory has never been listed through the index.</summary>
    private static async Task<List<FileEntry>?> ReadListingOnConnectionAsync(SqliteConnection connection,
        CancellationToken token = default)
    {
        var saved = await ReadOnConnectionAsync(connection, "SELECT value FROM meta WHERE key = 'listing'",
            async reader => await reader.ReadAsync(token) ? reader.GetString(0) : null, token: token);

        if (saved is null)
            return null;

        // Rows are read synchronously: Microsoft.Data.Sqlite runs its async API on the calling thread,
        // so awaiting every row only allocates one task per row.
        return ReadOnConnection(connection,
            "SELECT name, path, is_directory, size, modified, is_hidden, is_system, icon_source, " +
            "created, link_target, link_valid, link_count FROM listing " +
            "ORDER BY is_directory DESC, name COLLATE NOCASE",
            reader =>
            {
                var entries = new List<FileEntry>();

                while (reader.Read())
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
    public static Task<bool> SaveListingAsync(string directory, IReadOnlyList<FileEntry> entries) =>
        WriteAsync(directory, async (connection, transaction, token) =>
        {
            await using (var clear = connection.CreateCommand())
            {
                clear.Transaction = transaction;
                clear.CommandText = "DELETE FROM listing";
                await clear.ExecuteNonQueryAsync(token);
            }

            await using (var insert = connection.CreateCommand())
            {
                insert.Transaction = transaction;
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
                    // The icon table is the cache; repeating a data URL in every listing row would
                    // only make the file larger.
                    icon.Value = DBNull.Value;
                    created.Value = entry.Created;
                    target.Value = entry.LinkTarget is null ? DBNull.Value : entry.LinkTarget;
                    valid.Value = entry.LinkValid is null ? DBNull.Value : entry.LinkValid.Value ? 1 : 0;
                    links.Value = entry.LinkCount;
                    // Synchronous on purpose: the async overload allocates a task per row and
                    // then runs it on this very thread.
                    insert.ExecuteNonQuery();
                }
            }

            await using (var mark = connection.CreateCommand())
            {
                mark.Transaction = transaction;
                mark.CommandText = "INSERT INTO meta (key, value) VALUES ('listing', $now) " +
                                   "ON CONFLICT(key) DO UPDATE SET value = excluded.value";
                mark.Parameters.AddWithValue("$now", DateTimeOffset.UtcNow.ToUnixTimeMilliseconds());
                await mark.ExecuteNonQueryAsync(token);
            }
        });

    /// <summary>Everything the folder has collected, for the move to the central database.</summary>
    public static async Task<IndexSnapshot?> SnapshotAsync(string directory)
    {
        if (!File.Exists(PathFor(directory)))
            return null;

        // A database that cannot be opened must not be imported as "empty" and then deleted.
        await using var connection = (await Database(directory, false).OpenReadAsync()).GetOrNull();
        if (connection is null)
            return null;

        return new(
            await ListingAsync(directory),
            await IconsAsync(directory),
            await SizesAsync(directory),
            await ViewAsync(directory));
    }

    /// <summary>How this directory is stored to be shown, or null when it inherits the default.</summary>
    public static Task<DirectoryView?> ViewAsync(string directory) =>
        ReadAsync<DirectoryView?>(directory, async (connection, token) =>
            await ReadOnConnectionAsync(connection, "SELECT value FROM settings WHERE key = 'view'",
                async reader => await reader.ReadAsync(token)
                    ? Try.Run(() => JsonSerializer.Deserialize(reader.GetString(0),
                        AppJsonContext.Default.DirectoryView)).GetOrNull()
                    : null, token: token), null);

    /// <summary>Stores this directory's own view settings, so it opens the same way next time.</summary>
    public static Task<bool> SaveViewAsync(string directory, DirectoryView view) =>
        WriteAsync(directory, async (connection, transaction, token) =>
        {
            await using var command = connection.CreateCommand();
            command.Transaction = transaction;
            command.CommandText = "INSERT INTO settings (key, value) VALUES ('view', $value) " +
                                  "ON CONFLICT(key) DO UPDATE SET value = excluded.value";
            command.Parameters.AddWithValue("$value",
                JsonSerializer.Serialize(view, AppJsonContext.Default.DirectoryView));
            await command.ExecuteNonQueryAsync(token);
        });

    /// <summary>Every entry that has tags, by entry name. Tags only ever live in the folder itself.</summary>
    public static Task<Dictionary<string, List<string>>> TagsAsync(string directory) =>
        ReadAsync(directory, async (connection, token) =>
            await ReadOnConnectionAsync(connection, "SELECT name, tags FROM tags", async reader =>
            {
                var tags = new Dictionary<string, List<string>>(StringComparer.OrdinalIgnoreCase);

                while (await reader.ReadAsync(token))
                {
                    var list = Try.Run(() => JsonSerializer.Deserialize(reader.GetString(1),
                        AppJsonContext.Default.ListString)).GetOrNull();

                    if (list is { Count: > 0 })
                        tags[reader.GetString(0)] = list;
                }

                return tags;
            }, token: token), []);

    /// <summary>Replaces one entry's tags; an empty list removes the row.</summary>
    public static Task<bool> SetTagsAsync(string directory, string name, IReadOnlyList<string> tags) =>
        WriteAsync(directory, async (connection, transaction, token) =>
        {
            await using var command = connection.CreateCommand();
            command.Transaction = transaction;
            command.CommandText = tags.Count == 0
                ? "DELETE FROM tags WHERE name = $name"
                : "INSERT INTO tags (name, tags) VALUES ($name, $tags) " +
                  "ON CONFLICT(name) DO UPDATE SET tags = excluded.tags";

            command.Parameters.AddWithValue("$name", name);
            if (tags.Count > 0)
                command.Parameters.AddWithValue("$tags",
                    JsonSerializer.Serialize(tags.ToList(), AppJsonContext.Default.ListString));

            await command.ExecuteNonQueryAsync(token);
        });

    /// <summary>Removes one tag from every entry in a folder's index.</summary>
    public static Task<bool> RemoveTagAsync(string directory, string tag) =>
        WriteAsync(directory, async (connection, transaction, token) =>
        {
            foreach (var (name, tags) in await ReadTagRowsAsync(connection, transaction, tag, token))
            {
                tags.RemoveAll(value => string.Equals(value, tag, StringComparison.OrdinalIgnoreCase));

                await using var command = connection.CreateCommand();
                command.Transaction = transaction;
                command.CommandText = tags.Count == 0
                    ? "DELETE FROM tags WHERE name = $name"
                    : "UPDATE tags SET tags = $tags WHERE name = $name";

                command.Parameters.AddWithValue("$name", name);
                if (tags.Count > 0)
                    command.Parameters.AddWithValue("$tags",
                        JsonSerializer.Serialize(tags, AppJsonContext.Default.ListString));

                await command.ExecuteNonQueryAsync(token);
            }

            // A color left behind would resurrect the deleted tag the next time the folder is
            // listed, so the settings row is cleaned in the same transaction.
            await using var read = connection.CreateCommand();
            read.Transaction = transaction;
            read.CommandText = "SELECT value FROM settings WHERE key = 'tag_colors'";

            var raw = await read.ExecuteScalarAsync(token) as string;
            var colors = raw is null
                ? null
                : Try.Run(() => JsonSerializer.Deserialize(raw,
                    AppJsonContext.Default.DictionaryStringString)).GetOrNull();

            var key = colors?.Keys.FirstOrDefault(value =>
                string.Equals(value, tag, StringComparison.OrdinalIgnoreCase));

            if (colors is null || key is null)
                return;

            colors.Remove(key);
            await SetTagColorsAsync(connection, transaction, colors, token);
        });

    /// <summary>Renames one tag in every entry and color in a folder's index.</summary>
    public static Task<bool> RenameTagAsync(string directory, string tag, string next) =>
        WriteAsync(directory, async (connection, transaction, token) =>
        {
            foreach (var (name, tags) in await ReadTagRowsAsync(connection, transaction, tag, token))
            {
                var renamed = new List<string>(tags.Count);

                foreach (var value in tags)
                {
                    var text = string.Equals(value, tag, StringComparison.OrdinalIgnoreCase) ? next : value;

                    if (!renamed.Contains(text, StringComparer.OrdinalIgnoreCase))
                        renamed.Add(text);
                }

                await using var command = connection.CreateCommand();
                command.Transaction = transaction;
                command.CommandText = "UPDATE tags SET tags = $tags WHERE name = $name";
                command.Parameters.AddWithValue("$tags",
                    JsonSerializer.Serialize(renamed, AppJsonContext.Default.ListString));
                command.Parameters.AddWithValue("$name", name);
                await command.ExecuteNonQueryAsync(token);
            }

            // The color is a separate settings row; move its key with the tag so the picker keeps
            // showing the same color under the new name.
            await using var read = connection.CreateCommand();
            read.Transaction = transaction;
            read.CommandText = "SELECT value FROM settings WHERE key = 'tag_colors'";

            var raw = await read.ExecuteScalarAsync(token) as string;
            var colors = raw is null
                ? null
                : Try.Run(() => JsonSerializer.Deserialize(raw,
                    AppJsonContext.Default.DictionaryStringString)).GetOrNull();

            var key = colors?.Keys.FirstOrDefault(value =>
                string.Equals(value, tag, StringComparison.OrdinalIgnoreCase));

            if (colors is null || key is null)
                return;

            var color = colors[key];
            colors.Remove(key);

            if (!colors.Keys.Any(value => string.Equals(value, next, StringComparison.OrdinalIgnoreCase)))
                colors[next] = color;

            await SetTagColorsAsync(connection, transaction, colors, token);
        });

    private static async Task<List<(string Name, List<string> Tags)>> ReadTagRowsAsync(
        SqliteConnection connection, SqliteTransaction transaction, string tag, CancellationToken token)
    {
        var rows = new List<(string Name, List<string> Tags)>();

        await using var read = connection.CreateCommand();
        read.Transaction = transaction;
        read.CommandText = "SELECT name, tags FROM tags";

        await using var reader = await read.ExecuteReaderAsync(token);
        while (await reader.ReadAsync(token))
        {
            var tags = Try.Run(() => JsonSerializer.Deserialize(reader.GetString(1),
                AppJsonContext.Default.ListString)).GetOrNull();

            if (tags is { Count: > 0 } && tags.Contains(tag, StringComparer.OrdinalIgnoreCase))
                rows.Add((reader.GetString(0), tags));
        }

        return rows;
    }

    private static async Task SetTagColorsAsync(SqliteConnection connection, SqliteTransaction transaction,
        IReadOnlyDictionary<string, string> colors, CancellationToken token)
    {
        await using var write = connection.CreateCommand();
        write.Transaction = transaction;
        write.CommandText = colors.Count == 0
            ? "DELETE FROM settings WHERE key = 'tag_colors'"
            : "UPDATE settings SET value = $value WHERE key = 'tag_colors'";

        if (colors.Count > 0)
            write.Parameters.AddWithValue("$value",
                JsonSerializer.Serialize(colors, AppJsonContext.Default.DictionaryStringString));

        await write.ExecuteNonQueryAsync(token);
    }

    /// <summary>The color each tag was given, by tag name.</summary>
    public static Task<Dictionary<string, string>> TagColorsAsync(string directory) =>
        ReadAsync(directory, async (connection, token) =>
            await ReadOnConnectionAsync(connection, "SELECT value FROM settings WHERE key = 'tag_colors'",
                async reader => await reader.ReadAsync(token)
                    ? Try.Run(() => JsonSerializer.Deserialize(reader.GetString(0),
                        AppJsonContext.Default.DictionaryStringString)).GetOrNull()
                    : null, token: token) ?? [], []);

    /// <summary>Stores the color of every tag in the folder, so chips keep their colors.</summary>
    public static Task<bool> SaveTagColorsAsync(string directory, IReadOnlyDictionary<string, string> colors) =>
        WriteAsync(directory, async (connection, transaction, token) =>
        {
            await using var command = connection.CreateCommand();
            command.Transaction = transaction;
            command.CommandText = "INSERT INTO settings (key, value) VALUES ('tag_colors', $value) " +
                                  "ON CONFLICT(key) DO UPDATE SET value = excluded.value";
            command.Parameters.AddWithValue("$value",
                JsonSerializer.Serialize(colors.ToDictionary(pair => pair.Key, pair => pair.Value),
                    AppJsonContext.Default.DictionaryStringString));
            await command.ExecuteNonQueryAsync(token);
        });

    /// <summary>How many entries each child directory holds, as last counted.</summary>
    public static Task<Dictionary<string, long>> CountsAsync(string directory) =>
        ReadAsync(directory, async (connection, token) =>
            await ReadOnConnectionAsync(connection, "SELECT name, count FROM counts", async reader =>
            {
                var counts = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);

                while (await reader.ReadAsync(token))
                    counts[reader.GetString(0)] = reader.GetInt64(1);

                return counts;
            }, token: token), []);

    /// <summary>Stores how many entries a child directory holds.</summary>
    public static Task<bool> SetCountAsync(string directory, string name, long count) =>
        WriteAsync(directory, async (connection, transaction, token) =>
        {
            await using var command = connection.CreateCommand();
            command.Transaction = transaction;
            command.CommandText = "INSERT INTO counts (name, count, computed_at) VALUES ($name, $count, $now) " +
                                  "ON CONFLICT(name) DO UPDATE SET count = excluded.count, computed_at = excluded.computed_at";
            command.Parameters.AddWithValue("$name", name);
            command.Parameters.AddWithValue("$count", count);
            command.Parameters.AddWithValue("$now", DateTimeOffset.UtcNow.ToUnixTimeMilliseconds());
            await command.ExecuteNonQueryAsync(token);
        });

    /// <summary>Removes the per-folder database after its data was moved elsewhere.</summary>
    public static async Task DeleteFilesAsync(string directory)
    {
        var result = await Database(directory, true).ExclusiveAsync(async token =>
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
            SchemaReady.TryRemove(directory, out _);
            return true;
        });

        result.OnFailure(ex => Log.Debug(ex, "Could not remove the index of {Directory}", directory));
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

    private static Task<bool> SetValuesAsync(string directory, string table, string column,
        IReadOnlyDictionary<string, long> values)
    {
        if (values.Count == 0)
            return Task.FromResult(true);

        return WriteAsync(directory, async (connection, transaction, token) =>
        {
            await using var command = connection.CreateCommand();
            command.Transaction = transaction;
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
                await command.ExecuteNonQueryAsync(token);
            }
        });
    }

    /// <summary>Stores an icon source for one entry; a null source removes the override.</summary>
    public static Task<bool> SetIconAsync(string directory, string name, string? source) =>
        WriteAsync(directory, async (connection, transaction, token) =>
        {
            await using var command = connection.CreateCommand();
            command.Transaction = transaction;

            if (source is null)
            {
                command.CommandText = "DELETE FROM icons WHERE name = $name";
                command.Parameters.AddWithValue("$name", name);
            }
            else if (IconSourceCodec.Decode(source) is { } icon)
            {
                command.CommandText =
                    "INSERT INTO icons (name, source, kind, mime, data) " +
                    "VALUES ($name, '', 'data', $mime, $data) " +
                    "ON CONFLICT(name) DO UPDATE SET source = '', kind = 'data', " +
                    "mime = excluded.mime, data = excluded.data";
                command.Parameters.AddWithValue("$name", name);
                command.Parameters.AddWithValue("$mime", icon.Mime);
                command.Parameters.AddWithValue("$data", icon.Data);
            }
            else
            {
                command.CommandText =
                    "INSERT INTO icons (name, source, kind, mime, data) " +
                    "VALUES ($name, $source, 'text', NULL, NULL) " +
                    "ON CONFLICT(name) DO UPDATE SET source = excluded.source, kind = 'text', " +
                    "mime = NULL, data = NULL";
                command.Parameters.AddWithValue("$name", name);
                command.Parameters.AddWithValue("$source", source);
            }

            await command.ExecuteNonQueryAsync(token);
        });

    public static Task<bool> SetSizeAsync(string directory, string name, long bytes) =>
        WriteAsync(directory, async (connection, transaction, token) =>
        {
            await using var command = connection.CreateCommand();
            command.Transaction = transaction;
            command.CommandText = "INSERT INTO sizes (name, bytes, computed_at) VALUES ($name, $bytes, $now) " +
                                  "ON CONFLICT(name) DO UPDATE SET bytes = excluded.bytes, computed_at = excluded.computed_at";
            command.Parameters.AddWithValue("$name", name);
            command.Parameters.AddWithValue("$bytes", bytes);
            command.Parameters.AddWithValue("$now", DateTimeOffset.UtcNow.ToUnixTimeMilliseconds());
            await command.ExecuteNonQueryAsync(token);
        });

    // ---- plumbing ----

    /// <summary>
    ///     A read can arrive before the first write after an upgrade, so the schema is brought up to
    ///     date once here instead of making the first listing miss its cached icons.
    /// </summary>
    private static async Task EnsureSchemaAsync(string directory)
    {
        if (SchemaReady.ContainsKey(directory) || !File.Exists(PathFor(directory)) ||
            Unusable.ContainsKey(directory))
            return;

        var versionResult = await Database(directory, false).ReadAsync(async (connection, token) =>
        {
            await using var command = connection.CreateCommand();
            command.CommandText = "PRAGMA user_version";
            return Convert.ToInt32(await command.ExecuteScalarAsync(token) ?? 0);
        }).ConfigureAwait(false);

        if (!versionResult.TryGet(out var version))
            return;

        if (version < SchemaVersion)
            await WriteAsync(directory, (_, _, _) => Task.CompletedTask);

        if (!Unusable.ContainsKey(directory))
            SchemaReady[directory] = true;
    }

    private static async Task<T> ReadAsync<T>(string directory,
        Func<SqliteConnection, CancellationToken, Task<T>> read, T fallback)
    {
        await EnsureSchemaAsync(directory);

        if (Unusable.ContainsKey(directory))
            return fallback;

        var result = await Database(directory, false).ReadAsync(read);
        return result.OnFailure(ex =>
            {
                if (ex is not FileNotFoundException)
                    Unusable[directory] = true;

                Log.Debug(ex, "Could not read the index of {Directory}", directory);
            })
            .GetOrElse(_ => fallback);
    }

    private static async Task<T> ReadOnConnectionAsync<T>(SqliteConnection connection, string sql,
        Func<SqliteDataReader, Task<T>> read, Action<SqliteCommand>? bind = null,
        CancellationToken token = default) where T : class?
    {
        await using var command = connection.CreateCommand();
        command.CommandText = sql;
        bind?.Invoke(command);

        await using var reader = await command.ExecuteReaderAsync(token);
        return await read(reader);
    }

    private static T ReadOnConnection<T>(SqliteConnection connection, string sql,
        Func<SqliteDataReader, T> read, Action<SqliteCommand>? bind = null) where T : class?
    {
        using var command = connection.CreateCommand();
        command.CommandText = sql;
        bind?.Invoke(command);

        using var reader = command.ExecuteReader();
        return read(reader);
    }

    private static async Task<bool> WriteAsync(string directory,
        Func<SqliteConnection, SqliteTransaction, CancellationToken, Task> write)
    {
        if (!Directory.Exists(directory) || Unusable.ContainsKey(directory))
            return false;

        var result = await Database(directory, true).WriteAsync(async (connection, transaction, token) =>
        {
            await MigrateAsync(connection, transaction, token);
            await write(connection, transaction, token);
        });

        if (result.IsSuccess)
        {
            EnsureHidden(directory);
            SchemaReady[directory] = true;
        }

        return result.OnFailure(ex =>
        {
            Unusable[directory] = true;
            Log.Warning(ex, "Could not write to the index of {Directory}", directory);
        }).IsSuccess;
    }

    private static async Task MigrateAsync(SqliteConnection connection, SqliteTransaction transaction,
        CancellationToken token)
    {
        var version = await VersionAsync(connection, transaction, token);

        for (var step = version; step < SchemaVersion; step++)
        {
            await using var command = connection.CreateCommand();
            command.Transaction = transaction;
            command.CommandText = Schema[step];
            await command.ExecuteNonQueryAsync(token);
        }

        if (version >= SchemaVersion)
            return;

        await using var stamp = connection.CreateCommand();
        stamp.Transaction = transaction;
        stamp.CommandText = $"PRAGMA user_version = {SchemaVersion}";
        await stamp.ExecuteNonQueryAsync(token);
    }

    private static async Task<int> VersionAsync(SqliteConnection connection, SqliteTransaction transaction,
        CancellationToken token)
    {
        await using var command = connection.CreateCommand();
        command.Transaction = transaction;
        command.CommandText = "PRAGMA user_version";
        return Convert.ToInt32(await command.ExecuteScalarAsync(token) ?? 0);
    }

    private static SqliteDatabase Database(string directory, bool write) =>
        new(PathFor(directory), write ? WriteOptions : IndexFocus.Is(directory) ? FocusedReadOptions : ReadOptions);
}

/// <summary>A folder index loaded in memory so it can be copied into the central database.</summary>
internal sealed record IndexSnapshot(
    List<FileEntry>? Listing,
    Dictionary<string, string> Icons,
    Dictionary<string, long> Sizes,
    DirectoryView? View);