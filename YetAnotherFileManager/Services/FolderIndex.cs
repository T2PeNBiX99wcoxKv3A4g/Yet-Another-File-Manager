using System.Collections.Concurrent;
using Microsoft.Data.Sqlite;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
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

    private const int SchemaVersion = 3;

    private static readonly ConcurrentDictionary<string, bool> Unusable = new(StringComparer.OrdinalIgnoreCase);

    /// <summary>SQLite allows one writer at a time; reads never take this gate.</summary>
    private static readonly SemaphoreSlim WriteGate = new(1, 1);

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
        var saved = await MetaAsync(directory, "listing");
        if (saved is null)
            return null;

        return await ReadAsync(directory,
            "SELECT name, path, is_directory, size, modified, is_hidden, is_system, icon_source FROM listing " +
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
                        reader.IsDBNull(7) ? null : reader.GetString(7)));

                return entries;
            });
    }

    /// <summary>Stores the complete listing, hidden and system entries included.</summary>
    public static async Task<bool> SaveListingAsync(string directory, IReadOnlyList<FileEntry> entries)
    {
        await WriteGate.WaitAsync();
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
                        "INSERT INTO listing (name, path, is_directory, size, modified, is_hidden, is_system, icon_source) " +
                        "VALUES ($name, $path, $directory, $size, $modified, $hidden, $system, $icon)";
                    var name = insert.Parameters.Add("$name", SqliteType.Text);
                    var path = insert.Parameters.Add("$path", SqliteType.Text);
                    var isDirectory = insert.Parameters.Add("$directory", SqliteType.Integer);
                    var size = insert.Parameters.Add("$size", SqliteType.Integer);
                    var modified = insert.Parameters.Add("$modified", SqliteType.Integer);
                    var hidden = insert.Parameters.Add("$hidden", SqliteType.Integer);
                    var system = insert.Parameters.Add("$system", SqliteType.Integer);
                    var icon = insert.Parameters.Add("$icon", SqliteType.Text);

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

        return new IndexSnapshot(
            await ListingAsync(directory),
            await IconsAsync(directory),
            await SizesAsync(directory));
    }

    /// <summary>Removes the per-folder database after its data was moved elsewhere.</summary>
    public static async Task DeleteFilesAsync(string directory)
    {
        await WriteGate.WaitAsync();
        try
        {
            foreach (var suffix in new[] { "", "-wal", "-shm" })
            {
                var path = PathFor(directory) + suffix;
                await Task.Run(() => Try.Run(() => File.Delete(path))
                    .OnFailure(ex => Log.Debug(ex, "Could not remove {Path}", path)));
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
    public static async Task<bool> SetSizesAsync(string directory, IReadOnlyDictionary<string, long> sizes)
    {
        if (sizes.Count == 0)
            return true;

        await WriteGate.WaitAsync();
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
                command.CommandText = "INSERT INTO sizes (name, bytes, computed_at) VALUES ($name, $bytes, $now) " +
                                      "ON CONFLICT(name) DO UPDATE SET bytes = excluded.bytes, " +
                                      "computed_at = excluded.computed_at";

                var name = command.Parameters.Add("$name", SqliteType.Text);
                var bytes = command.Parameters.Add("$bytes", SqliteType.Integer);
                command.Parameters.AddWithValue("$now", DateTimeOffset.UtcNow.ToUnixTimeMilliseconds());

                foreach (var (entry, size) in sizes)
                {
                    name.Value = entry;
                    bytes.Value = size;
                    await command.ExecuteNonQueryAsync();
                }

                await transaction.CommitAsync();
                return true;
            });

            return result.OnFailure(ex =>
            {
                Unusable[directory] = true;
                Log.Debug(ex, "Could not store the sizes of {Directory}", directory);
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

    private static async Task<string?> MetaAsync(string directory, string key) =>
        await ReadAsync(directory, "SELECT value FROM meta WHERE key = $key",
            async reader => await reader.ReadAsync() ? reader.GetString(0) : null,
            command => command.Parameters.AddWithValue("$key", key));

    private static async Task<T?> ReadAsync<T>(string directory, string sql, Func<SqliteDataReader, Task<T>> read,
        Action<SqliteCommand>? bind = null) where T : class
    {
        var result = await Try.Run(async () =>
        {
            await using var connection = await OpenAsync(directory, false);
            if (connection is null)
                return null;

            await using var command = connection.CreateCommand();
            command.CommandText = sql;
            bind?.Invoke(command);

            await using var reader = await command.ExecuteReaderAsync();
            return await read(reader);
        });

        return result.OnFailure(ex => Log.Debug(ex, "Could not read {Directory} from the index", directory))
            .GetOrNull();
    }

    private static async Task<bool> WriteAsync(string directory, string sql, Action<SqliteCommand> bind)
    {
        await WriteGate.WaitAsync();
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
                timeout.CommandText = "PRAGMA busy_timeout = 300";
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
    Dictionary<string, long> Sizes);
