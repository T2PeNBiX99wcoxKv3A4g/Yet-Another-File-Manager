using System.Collections.Concurrent;
using Microsoft.Data.Sqlite;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;

namespace YetAnotherFileManager.Services;

/// <summary>
///     A SQLite index that lives inside the directory it describes: <c>.yafm-index.db</c>, the way
///     macOS keeps <c>.DS_Store</c> beside the files. It holds per-entry icons and free-form metadata
///     (cached folder sizes today, anything else later), so the data travels with the folder.
/// </summary>
/// <remarks>
///     Everything here is best effort. A read-only volume, a locked file or a database written by an
///     older version must never break a listing, so every operation degrades to "no data" and the
///     schema is migrated through <c>PRAGMA user_version</c>.
/// </remarks>
internal static class DirectoryIndex
{
    public const string FileName = ".yafm-index.db";

    private const int SchemaVersion = 2;

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

    /// <summary>Creates the index of a directory if it is not there yet. Returns false when it cannot.</summary>
    public static async Task<bool> EnsureAsync(string directory)
    {
        await WriteGate.WaitAsync();
        try
        {
            var connection = await OpenAsync(directory, true);
            if (connection is null)
                return false;

            await connection.DisposeAsync();
            return true;
        }
        finally
        {
            WriteGate.Release();
        }
    }

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
