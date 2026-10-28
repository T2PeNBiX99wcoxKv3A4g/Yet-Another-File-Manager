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
    public static Dictionary<string, string> Icons(string directory) =>
        Read(directory, "SELECT name, source FROM icons", reader =>
        {
            var icons = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

            while (reader.Read())
                icons[reader.GetString(0)] = reader.GetString(1);

            return icons;
        }) ?? new Dictionary<string, string>();

    /// <summary>Cached sizes of the entries of a directory that were measured after <paramref name="since" />.</summary>
    public static Dictionary<string, long> Sizes(string directory, long since) =>
        Read(directory, "SELECT name, bytes FROM sizes WHERE computed_at >= $since", reader =>
        {
            var sizes = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);

            while (reader.Read())
                sizes[reader.GetString(0)] = reader.GetInt64(1);

            return sizes;
        }, command => command.Parameters.AddWithValue("$since", since)) ?? new Dictionary<string, long>();

    /// <summary>Creates the index of a directory if it is not there yet. Returns false when it cannot.</summary>
    public static bool Ensure(string directory) =>
        Try.Run(() =>
        {
            using var connection = Open(directory, true);
            return connection is not null;
        }).GetOrElse(_ => false);

    public static string? Icon(string directory, string name) =>
        Read(directory, "SELECT source FROM icons WHERE name = $name", reader =>
        {
            return reader.Read() ? reader.GetString(0) : null;
        });

    /// <summary>Stores an icon source for one entry; a null source removes the override.</summary>
    public static bool SetIcon(string directory, string name, string? source) =>
        Write(directory, source is null
            ? "DELETE FROM icons WHERE name = $name"
            : "INSERT INTO icons (name, source) VALUES ($name, $source) " +
              "ON CONFLICT(name) DO UPDATE SET source = excluded.source",
            command =>
            {
                command.Parameters.AddWithValue("$name", name);
                if (source is not null)
                    command.Parameters.AddWithValue("$source", source);
            });

    public static string? Meta(string directory, string key) =>
        Read(directory, "SELECT value FROM meta WHERE key = $key", reader =>
        {
            return reader.Read() ? reader.GetString(0) : null;
        }, command => command.Parameters.AddWithValue("$key", key));

    public static bool SetMeta(string directory, string key, string value) =>
        Write(directory, "INSERT INTO meta (key, value) VALUES ($key, $value) " +
                         "ON CONFLICT(key) DO UPDATE SET value = excluded.value",
            command =>
            {
                command.Parameters.AddWithValue("$key", key);
                command.Parameters.AddWithValue("$value", value);
            });

    public static bool SetSize(string directory, string name, long bytes) =>
        Write(directory, "INSERT INTO sizes (name, bytes, computed_at) VALUES ($name, $bytes, $now) " +
                         "ON CONFLICT(name) DO UPDATE SET bytes = excluded.bytes, computed_at = excluded.computed_at",
            command =>
            {
                command.Parameters.AddWithValue("$name", name);
                command.Parameters.AddWithValue("$bytes", bytes);
                command.Parameters.AddWithValue("$now", DateTimeOffset.UtcNow.ToUnixTimeMilliseconds());
            });

    // ---- plumbing ----

    private static T? Read<T>(string directory, string sql, Func<SqliteDataReader, T> read,
        Action<SqliteCommand>? bind = null) where T : class =>
        Try.Run(() =>
        {
            using var connection = Open(directory, false);
            if (connection is null)
                return null;

            using var command = connection.CreateCommand();
            command.CommandText = sql;
            bind?.Invoke(command);

            using var reader = command.ExecuteReader();
            return read(reader);
        }).OnFailure(ex => Log.Debug(ex, "Could not read {Directory} from the index", directory)).GetOrNull();

    private static bool Write(string directory, string sql, Action<SqliteCommand> bind) =>
        Try.Run(() =>
        {
            using var connection = Open(directory, true);
            if (connection is null)
                return false;

            using var command = connection.CreateCommand();
            command.CommandText = sql;
            bind(command);
            command.ExecuteNonQuery();
            return true;
        }).OnFailure(ex =>
        {
            Unusable[directory] = true;
            Log.Warning(ex, "Could not write to the index of {Directory}", directory);
        }).GetOrElse(_ => false);

    /// <summary>
    ///     Opens a database, creating and migrating it when asked to. A database that cannot be
    ///     opened is remembered so the next listing does not pay for the same failure again.
    /// </summary>
    private static SqliteConnection? Open(string directory, bool create)
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
            Pooling = true
        }.ToString());

        try
        {
            connection.Open();
            using var timeout = connection.CreateCommand();
            timeout.CommandText = "PRAGMA busy_timeout = 300";
            timeout.ExecuteNonQuery();

            if (create)
            {
                Migrate(connection);
                Hide(directory, path);
            }

            return connection;
        }
        catch (Exception ex)
        {
            connection.Dispose();
            Unusable[directory] = true;
            Log.Warning(ex, "Could not open the index of {Directory}", directory);
            return null;
        }
    }

    private static void Migrate(SqliteConnection connection)
    {
        var version = Version(connection);

        for (var step = version; step < SchemaVersion; step++)
        {
            using var command = connection.CreateCommand();
            command.CommandText = Schema[step];
            command.ExecuteNonQuery();
        }

        using var stamp = connection.CreateCommand();
        stamp.CommandText = $"PRAGMA user_version = {SchemaVersion}";
        stamp.ExecuteNonQuery();
    }

    private static int Version(SqliteConnection connection)
    {
        using var command = connection.CreateCommand();
        command.CommandText = "PRAGMA user_version";
        return Convert.ToInt32(command.ExecuteScalar() ?? 0);
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
