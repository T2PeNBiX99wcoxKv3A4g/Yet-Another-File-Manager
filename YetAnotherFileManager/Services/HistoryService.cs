using System.Text.Json;
using Microsoft.Data.Sqlite;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Stores the folders opened recently and the folders opened most often in one SQLite database
///     next to the settings. Reads run on their own connections without a lock; only writes are
///     serialized, which is what SQLite needs.
/// </summary>
internal sealed class HistoryService : Singleton<HistoryService>
{
    private const int RecentCapacity = 50;
    private const int FrequentCapacity = 100;

    private const string Schema =
        """
        CREATE TABLE IF NOT EXISTS Recent (
            PathKey     TEXT NOT NULL CONSTRAINT PK_Recent PRIMARY KEY,
            Path        TEXT NOT NULL,
            Name        TEXT NOT NULL,
            IsDirectory INTEGER NOT NULL,
            At          INTEGER NOT NULL
        );
        CREATE INDEX IF NOT EXISTS IX_Recent_At ON Recent (At DESC);

        CREATE TABLE IF NOT EXISTS Frequent (
            PathKey TEXT NOT NULL CONSTRAINT PK_Frequent PRIMARY KEY,
            Path    TEXT NOT NULL,
            Name    TEXT NOT NULL,
            Count   INTEGER NOT NULL,
            Last    INTEGER NOT NULL
        );
        CREATE INDEX IF NOT EXISTS IX_Frequent_Count ON Frequent (Count DESC, Last DESC);
        """;

    private static readonly string DatabasePath = Path.Combine(Constants.SettingsDirectory, "history.db");
    private static readonly string LegacyRecentPath = Path.Combine(Constants.SettingsDirectory, "recent.json");
    private static readonly string LegacyFrequentPath = Path.Combine(Constants.SettingsDirectory, "frequent.json");

    private readonly string _connectionString;

    private readonly Lazy<Task> _ready;

    private readonly SemaphoreSlim _writeGate = new(1, 1);

    public HistoryService()
    {
        _connectionString = new SqliteConnectionStringBuilder
        {
            DataSource = DatabasePath
        }.ToString();
        _ready = new(InitializeAsync, LazyThreadSafetyMode.ExecutionAndPublication);
    }

    private async Task InitializeAsync()
    {
        (await Try.Run(async () =>
        {
            Directory.CreateDirectory(Constants.SettingsDirectory);

            await using var connection = await OpenAsync();
            await using (var command = connection.CreateCommand())
            {
                // WAL lets readers continue while one writer is busy.
                command.CommandText = "PRAGMA journal_mode=WAL; PRAGMA busy_timeout=3000;";
                await command.ExecuteNonQueryAsync();
            }

            await using (var command = connection.CreateCommand())
            {
                command.CommandText = Schema;
                await command.ExecuteNonQueryAsync();
            }

            await ImportRecentAsync();
            await ImportFrequentAsync();
        })).OnFailure(ex => Log.Warning(ex, "Could not initialize the history database"));
    }

    /// <summary>The most recent entries, capped by the user's limit (0 means "not shown").</summary>
    public async Task<IReadOnlyList<RecentEntry>> RecentAsync(int limit)
    {
        if (limit <= 0)
            return [];

        await _ready.Value;

        var result = await Try.Run(async () =>
        {
            await using var connection = await OpenAsync();
            await using var command = connection.CreateCommand();
            command.CommandText = "SELECT Path, Name, IsDirectory, At FROM Recent ORDER BY At DESC LIMIT $limit";
            command.Parameters.AddWithValue("$limit", limit);

            await using var reader = await command.ExecuteReaderAsync();
            var entries = new List<RecentEntry>();
            while (await reader.ReadAsync())
                entries.Add(new(reader.GetString(0), reader.GetString(1), reader.GetInt64(2) != 0, reader.GetInt64(3)));

            return (IReadOnlyList<RecentEntry>)entries;
        });

        return result.OnFailure(ex => Log.Warning(ex, "Could not read the recent list")).GetOrElse(_ => []);
    }

    /// <summary>Moves a folder to the front, dropping the oldest entries beyond the capacity.</summary>
    public async Task RecordRecentAsync(string path, bool isDirectory = true)
    {
        if (string.IsNullOrWhiteSpace(path))
            return;

        var full = Try.Run(() => isDirectory ? new DirectoryInfo(path).FullName : new FileInfo(path).FullName)
            .GetOrElse(_ => path);
        var name = Try.Run(() => isDirectory ? new DirectoryInfo(full).Name : new FileInfo(full).Name)
            .GetOrElse(_ => full);

        await _ready.Value;
        await _writeGate.WaitAsync();
        try
        {
            (await Try.Run(async () =>
            {
                await using var connection = await OpenAsync();
                await using var command = connection.CreateCommand();
                command.CommandText =
                    """
                    INSERT INTO Recent (PathKey, Path, Name, IsDirectory, At)
                    VALUES ($key, $path, $name, $directory, $at)
                    ON CONFLICT(PathKey) DO UPDATE SET
                        Path = excluded.Path,
                        Name = excluded.Name,
                        IsDirectory = excluded.IsDirectory,
                        At = excluded.At
                    """;
                command.Parameters.AddWithValue("$key", KeyFor(full));
                command.Parameters.AddWithValue("$path", full);
                command.Parameters.AddWithValue("$name", name.Length > 0 ? name : full);
                command.Parameters.AddWithValue("$directory", isDirectory ? 1 : 0);
                command.Parameters.AddWithValue("$at", Now());
                await command.ExecuteNonQueryAsync();

                await TrimAsync(connection, "Recent", "At DESC", RecentCapacity);
            })).OnFailure(ex => Log.Warning(ex, "Could not record {Path} as recent", path));
        }
        finally
        {
            _writeGate.Release();
        }
    }

    public async Task ClearRecentAsync()
    {
        await _ready.Value;
        await ClearAsync("Recent");
    }

    /// <summary>The most-opened folders, highest count first and the newest first inside a tie.</summary>
    public async Task<IReadOnlyList<FrequentEntry>> FrequentAsync(int limit = 50)
    {
        if (limit <= 0)
            return [];

        await _ready.Value;

        var result = await Try.Run(async () =>
        {
            await using var connection = await OpenAsync();
            await using var command = connection.CreateCommand();
            command.CommandText = "SELECT Path, Name, Count, Last FROM Frequent ORDER BY Count DESC, Last DESC";

            await using var reader = await command.ExecuteReaderAsync();
            var entries = new List<FrequentEntry>();
            while (await reader.ReadAsync())
            {
                var path = reader.GetString(0);

                // A folder that was deleted should not keep a place in the list.
                if (!Try.Run(() => Directory.Exists(path)).GetOrElse(_ => false))
                    continue;

                entries.Add(new(path, reader.GetString(1), reader.GetInt32(2), reader.GetInt64(3)));
            }

            return (IReadOnlyList<FrequentEntry>)entries.Take(limit).ToList();
        });

        return result.OnFailure(ex => Log.Warning(ex, "Could not read the frequent list")).GetOrElse(_ => []);
    }

    /// <summary>Counts one visit of a folder.</summary>
    public async Task RecordFrequentAsync(string path)
    {
        if (string.IsNullOrWhiteSpace(path))
            return;

        var folder = Try.Run(() => new DirectoryInfo(path)).GetOrNull();
        if (folder is not { Exists: true })
            return;

        var name = folder.Name.Length > 0 ? folder.Name : folder.FullName;

        await _ready.Value;
        await _writeGate.WaitAsync();
        try
        {
            (await Try.Run(async () =>
            {
                await using var connection = await OpenAsync();
                await using var command = connection.CreateCommand();
                command.CommandText =
                    """
                    INSERT INTO Frequent (PathKey, Path, Name, Count, Last)
                    VALUES ($key, $path, $name, 1, $last)
                    ON CONFLICT(PathKey) DO UPDATE SET
                        Path = excluded.Path,
                        Name = excluded.Name,
                        Count = Frequent.Count + 1,
                        Last = excluded.Last
                    """;
                command.Parameters.AddWithValue("$key", KeyFor(folder.FullName));
                command.Parameters.AddWithValue("$path", folder.FullName);
                command.Parameters.AddWithValue("$name", name);
                command.Parameters.AddWithValue("$last", Now());
                await command.ExecuteNonQueryAsync();

                await TrimAsync(connection, "Frequent", "Count DESC, Last DESC", FrequentCapacity);
            })).OnFailure(ex => Log.Warning(ex, "Could not count a visit to {Path}", path));
        }
        finally
        {
            _writeGate.Release();
        }
    }

    public async Task ClearFrequentAsync()
    {
        await _ready.Value;
        await ClearAsync("Frequent");
    }

    // ---- plumbing ----

    private static long Now() => DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();

    /// <summary>Windows paths are case-insensitive, so the primary key folds the case.</summary>
    private static string KeyFor(string path) => path.TrimEnd('\\', '/').ToLowerInvariant();

    private async Task<SqliteConnection> OpenAsync()
    {
        var connection = new SqliteConnection(_connectionString);
        await connection.OpenAsync();
        return connection;
    }

    private async Task ClearAsync(string table)
    {
        await _writeGate.WaitAsync();
        try
        {
            (await Try.Run(async () =>
            {
                await using var connection = await OpenAsync();
                await using var command = connection.CreateCommand();
                command.CommandText = $"DELETE FROM {table}";
                await command.ExecuteNonQueryAsync();
            })).OnFailure(ex => Log.Warning(ex, "Could not clear {Table}", table));
        }
        finally
        {
            _writeGate.Release();
        }
    }

    private static async Task TrimAsync(SqliteConnection connection, string table, string order, int capacity)
    {
        await using var command = connection.CreateCommand();
        command.CommandText = $"DELETE FROM {table} WHERE PathKey NOT IN " +
                              $"(SELECT PathKey FROM {table} ORDER BY {order} LIMIT $capacity)";
        command.Parameters.AddWithValue("$capacity", capacity);
        await command.ExecuteNonQueryAsync();
    }

    /// <summary>Imports the old JSON list once; afterwards the file belongs to no one.</summary>
    private async Task ImportRecentAsync()
    {
        if (!File.Exists(LegacyRecentPath))
            return;

        var json = (await Try.Run(() => File.ReadAllTextAsync(LegacyRecentPath))).GetOrNull();
        if (json is null)
            return;

        var entries = Try.Run(() => JsonSerializer.Deserialize(json, AppJsonContext.Default.ListRecentEntry))
            .GetOrNull();
        if (entries is null)
            return;

        await using (var connection = await OpenAsync())
        {
            if (!await IsEmptyAsync(connection, "Recent") || entries.Count == 0)
            {
                await RemoveLegacyAsync(LegacyRecentPath);
                return;
            }

            await using var transaction = await connection.BeginTransactionAsync();
            await using var command = connection.CreateCommand();
            command.Transaction = (SqliteTransaction)transaction;
            command.CommandText =
                "INSERT OR REPLACE INTO Recent (PathKey, Path, Name, IsDirectory, At) " +
                "VALUES ($key, $path, $name, $directory, $at)";
            var key = command.Parameters.Add("$key", SqliteType.Text);
            var path = command.Parameters.Add("$path", SqliteType.Text);
            var name = command.Parameters.Add("$name", SqliteType.Text);
            var directory = command.Parameters.Add("$directory", SqliteType.Integer);
            var at = command.Parameters.Add("$at", SqliteType.Integer);

            foreach (var entry in entries.Where(entry => entry.Path.Length > 0))
            {
                key.Value = KeyFor(entry.Path);
                path.Value = entry.Path;
                name.Value = entry.Name;
                directory.Value = entry.IsDirectory ? 1 : 0;
                at.Value = entry.At;
                await command.ExecuteNonQueryAsync();
            }

            await transaction.CommitAsync();
        }

        await RemoveLegacyAsync(LegacyRecentPath);
    }

    /// <summary>Imports the old frequent list once, keeping the counts it had collected.</summary>
    private async Task ImportFrequentAsync()
    {
        if (!File.Exists(LegacyFrequentPath))
            return;

        var json = (await Try.Run(() => File.ReadAllTextAsync(LegacyFrequentPath))).GetOrNull();
        if (json is null)
            return;

        var entries = Try.Run(() => JsonSerializer.Deserialize(json, AppJsonContext.Default.ListFrequentEntry))
            .GetOrNull();
        if (entries is null)
            return;

        await using (var connection = await OpenAsync())
        {
            if (!await IsEmptyAsync(connection, "Frequent") || entries.Count == 0)
            {
                await RemoveLegacyAsync(LegacyFrequentPath);
                return;
            }

            await using var transaction = await connection.BeginTransactionAsync();
            await using var command = connection.CreateCommand();
            command.Transaction = (SqliteTransaction)transaction;
            command.CommandText =
                "INSERT OR REPLACE INTO Frequent (PathKey, Path, Name, Count, Last) " +
                "VALUES ($key, $path, $name, $count, $last)";
            var key = command.Parameters.Add("$key", SqliteType.Text);
            var path = command.Parameters.Add("$path", SqliteType.Text);
            var name = command.Parameters.Add("$name", SqliteType.Text);
            var count = command.Parameters.Add("$count", SqliteType.Integer);
            var last = command.Parameters.Add("$last", SqliteType.Integer);

            foreach (var entry in entries.Where(entry => entry.Path.Length > 0))
            {
                key.Value = KeyFor(entry.Path);
                path.Value = entry.Path;
                name.Value = entry.Name;
                count.Value = entry.Count;
                last.Value = entry.Last;
                await command.ExecuteNonQueryAsync();
            }

            await transaction.CommitAsync();
        }

        await RemoveLegacyAsync(LegacyFrequentPath);
    }

    private static async Task<bool> IsEmptyAsync(SqliteConnection connection, string table)
    {
        await using var command = connection.CreateCommand();
        command.CommandText = $"SELECT COUNT(*) FROM {table}";
        return Convert.ToInt64(await command.ExecuteScalarAsync()) == 0;
    }

    private static Task RemoveLegacyAsync(string path) =>
        Task.Run(() => Try.Run(() => File.Delete(path))
            .OnFailure(ex => Serilog.Log.Warning(ex, "Could not remove {Path}", path)));
}