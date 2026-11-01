using Microsoft.Data.Sqlite;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The central directory index, used instead of the per-folder <c>.yafm-index.db</c> when the
///     user turns that option off. It keeps the same data — icons, cached folder sizes and the last
///     listing — for every folder in one SQLite database next to the settings.
/// </summary>
/// <remarks>
///     Reads run on their own connections without a lock; only writes are serialized, which is what
///     SQLite needs. A folder that still has its own index is imported the first time it is touched
///     and its files are removed afterwards.
/// </remarks>
internal sealed class CentralIndex : Singleton<CentralIndex>
{
    private const string Schema =
        """
        CREATE TABLE IF NOT EXISTS Listing (
            DirectoryKey TEXT NOT NULL,
            Position     INTEGER NOT NULL,
            Name         TEXT NOT NULL,
            Path         TEXT NOT NULL,
            IsDirectory  INTEGER NOT NULL,
            Size         INTEGER NOT NULL,
            Modified     INTEGER NOT NULL,
            IsHidden     INTEGER NOT NULL,
            IsSystem     INTEGER NOT NULL,
            IconSource   TEXT,
            CONSTRAINT PK_Listing PRIMARY KEY (DirectoryKey, Name)
        );

        CREATE TABLE IF NOT EXISTS ListingState (
            DirectoryKey TEXT NOT NULL CONSTRAINT PK_ListingState PRIMARY KEY,
            SavedAt      INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Icons (
            DirectoryKey TEXT NOT NULL,
            Name         TEXT NOT NULL,
            Source       TEXT NOT NULL,
            CONSTRAINT PK_Icons PRIMARY KEY (DirectoryKey, Name)
        );

        CREATE TABLE IF NOT EXISTS Sizes (
            DirectoryKey TEXT NOT NULL,
            Name         TEXT NOT NULL,
            Bytes        INTEGER NOT NULL,
            ComputedAt   INTEGER NOT NULL,
            CONSTRAINT PK_Sizes PRIMARY KEY (DirectoryKey, Name)
        );
        """;

    private static readonly string DatabasePath = Path.Combine(Constants.SettingsDirectory, "directory-index.db");

    private readonly string _connectionString;
    private readonly Lazy<Task> _ready;
    private readonly SemaphoreSlim _writeGate = new(1, 1);

    public CentralIndex()
    {
        _connectionString = new SqliteConnectionStringBuilder { DataSource = DatabasePath }.ToString();
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
                // WAL lets readers keep going while one writer is busy.
                command.CommandText = "PRAGMA journal_mode=WAL; PRAGMA busy_timeout=3000;";
                await command.ExecuteNonQueryAsync();
            }

            await using (var command = connection.CreateCommand())
            {
                command.CommandText = Schema;
                await command.ExecuteNonQueryAsync();
            }
        })).OnFailure(ex => Log.Warning(ex, "Could not initialize the directory index"));
    }

    /// <summary>Icons recorded for the entries of a directory, by entry name.</summary>
    public async Task<Dictionary<string, string>> IconsAsync(string directory)
    {
        await _ready.Value;
        await ImportAsync(directory);

        var result = await Try.Run(async () =>
        {
            await using var connection = await OpenAsync();
            await using var command = connection.CreateCommand();
            command.CommandText = "SELECT Name, Source FROM Icons WHERE DirectoryKey = $key";
            command.Parameters.AddWithValue("$key", KeyFor(directory));

            await using var reader = await command.ExecuteReaderAsync();
            var icons = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            while (await reader.ReadAsync())
                icons[reader.GetString(0)] = reader.GetString(1);

            return icons;
        });

        return result.OnFailure(ex => Log.Debug(ex, "Could not read the icons of {Directory}", directory))
            .GetOrElse(_ => []);
    }

    /// <summary>Cached sizes of the entries of a directory, by entry name.</summary>
    public async Task<Dictionary<string, long>> SizesAsync(string directory)
    {
        await _ready.Value;
        await ImportAsync(directory);

        var result = await Try.Run(async () =>
        {
            await using var connection = await OpenAsync();
            await using var command = connection.CreateCommand();
            command.CommandText = "SELECT Name, Bytes FROM Sizes WHERE DirectoryKey = $key";
            command.Parameters.AddWithValue("$key", KeyFor(directory));

            await using var reader = await command.ExecuteReaderAsync();
            var sizes = new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase);
            while (await reader.ReadAsync())
                sizes[reader.GetString(0)] = reader.GetInt64(1);

            return sizes;
        });

        return result.OnFailure(ex => Log.Debug(ex, "Could not read the sizes of {Directory}", directory))
            .GetOrElse(_ => []);
    }

    /// <summary>The last listing saved for this directory, or null when it was never cached.</summary>
    public async Task<List<FileEntry>?> ListingAsync(string directory)
    {
        await _ready.Value;
        await ImportAsync(directory);

        var result = await Try.Run(async () =>
        {
            await using var connection = await OpenAsync();

            if (!await HasListingAsync(connection, directory))
                return null;

            await using var command = connection.CreateCommand();
            command.CommandText =
                "SELECT Name, Path, IsDirectory, Size, Modified, IsHidden, IsSystem, IconSource " +
                "FROM Listing WHERE DirectoryKey = $key ORDER BY Position";
            command.Parameters.AddWithValue("$key", KeyFor(directory));

            await using var reader = await command.ExecuteReaderAsync();
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

        return result.OnFailure(ex => Log.Debug(ex, "Could not read the listing of {Directory}", directory))
            .GetOrNull();
    }

    /// <summary>Stores the complete listing, hidden and system entries included.</summary>
    public async Task<bool> SaveListingAsync(string directory, IReadOnlyList<FileEntry> entries)
    {
        await _ready.Value;

        return await WriteAsync(directory, async (connection, transaction) =>
        {
            await WriteListingAsync(connection, transaction, directory, entries);
            return true;
        });
    }

    /// <summary>Stores the sizes of several entries in one transaction.</summary>
    public async Task<bool> SetSizesAsync(string directory, IReadOnlyDictionary<string, long> sizes)
    {
        if (sizes.Count == 0)
            return true;

        await _ready.Value;

        return await WriteAsync(directory, async (connection, transaction) =>
        {
            await using var command = connection.CreateCommand();
            command.Transaction = transaction;
            command.CommandText = "INSERT INTO Sizes (DirectoryKey, Name, Bytes, ComputedAt) " +
                                  "VALUES ($key, $name, $bytes, $now) " +
                                  "ON CONFLICT(DirectoryKey, Name) DO UPDATE SET Bytes = excluded.Bytes, " +
                                  "ComputedAt = excluded.ComputedAt";

            command.Parameters.AddWithValue("$key", KeyFor(directory));
            var name = command.Parameters.Add("$name", SqliteType.Text);
            var bytes = command.Parameters.Add("$bytes", SqliteType.Integer);
            command.Parameters.AddWithValue("$now", Now());

            foreach (var (entry, size) in sizes)
            {
                name.Value = entry;
                bytes.Value = size;
                await command.ExecuteNonQueryAsync();
            }

            return true;
        });
    }

    public Task<bool> SetSizeAsync(string directory, string name, long bytes) =>
        SetSizesAsync(directory, new Dictionary<string, long>(StringComparer.OrdinalIgnoreCase) { [name] = bytes });

    /// <summary>Stores an icon source for one entry; a null source removes the override.</summary>
    public async Task<bool> SetIconAsync(string directory, string name, string? source)
    {
        await _ready.Value;

        return await WriteAsync(directory, async (connection, transaction) =>
        {
            await using var command = connection.CreateCommand();
            command.Transaction = transaction;
            command.CommandText = source is null
                ? "DELETE FROM Icons WHERE DirectoryKey = $key AND Name = $name"
                : "INSERT INTO Icons (DirectoryKey, Name, Source) VALUES ($key, $name, $source) " +
                  "ON CONFLICT(DirectoryKey, Name) DO UPDATE SET Source = excluded.Source";

            command.Parameters.AddWithValue("$key", KeyFor(directory));
            command.Parameters.AddWithValue("$name", name);
            if (source is not null)
                command.Parameters.AddWithValue("$source", source);

            await command.ExecuteNonQueryAsync();
            return true;
        });
    }

    // ---- plumbing ----

    private static long Now() => DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();

    /// <summary>Windows paths are case-insensitive, so the key folds the case and the separator.</summary>
    private static string KeyFor(string directory) =>
        Path.TrimEndingDirectorySeparator(directory).ToLowerInvariant();

    private async Task<SqliteConnection> OpenAsync()
    {
        var connection = new SqliteConnection(_connectionString);
        await connection.OpenAsync();
        return connection;
    }

    /// <summary>Runs one write transaction, after moving any per-folder index into the central one.</summary>
    private async Task<T> WriteAsync<T>(string directory, Func<SqliteConnection, SqliteTransaction, Task<T>> write)
    {
        await _writeGate.WaitAsync();
        try
        {
            await ImportCoreAsync(directory);

            var result = await Try.Run(async () =>
            {
                await using var connection = await OpenAsync();
                await using var transaction = await connection.BeginTransactionAsync();
                var value = await write(connection, (SqliteTransaction)transaction);
                await transaction.CommitAsync();
                return value;
            });

            return result.OnFailure(ex => Log.Debug(ex, "Could not write the index of {Directory}", directory))
                .GetOrElse(_ => default!);
        }
        finally
        {
            _writeGate.Release();
        }
    }

    private async Task WriteListingAsync(SqliteConnection connection, SqliteTransaction transaction, string directory,
        IReadOnlyList<FileEntry> entries)
    {
        var key = KeyFor(directory);

        await using (var clear = connection.CreateCommand())
        {
            clear.Transaction = transaction;
            clear.CommandText = "DELETE FROM Listing WHERE DirectoryKey = $key";
            clear.Parameters.AddWithValue("$key", key);
            await clear.ExecuteNonQueryAsync();
        }

        await using (var insert = connection.CreateCommand())
        {
            insert.Transaction = transaction;
            insert.CommandText =
                "INSERT INTO Listing (DirectoryKey, Position, Name, Path, IsDirectory, Size, Modified, IsHidden, " +
                "IsSystem, IconSource) VALUES ($key, $position, $name, $path, $directory, $size, $modified, " +
                "$hidden, $system, $icon)";

            insert.Parameters.AddWithValue("$key", key);
            var position = insert.Parameters.Add("$position", SqliteType.Integer);
            var name = insert.Parameters.Add("$name", SqliteType.Text);
            var path = insert.Parameters.Add("$path", SqliteType.Text);
            var isDirectory = insert.Parameters.Add("$directory", SqliteType.Integer);
            var size = insert.Parameters.Add("$size", SqliteType.Integer);
            var modified = insert.Parameters.Add("$modified", SqliteType.Integer);
            var hidden = insert.Parameters.Add("$hidden", SqliteType.Integer);
            var system = insert.Parameters.Add("$system", SqliteType.Integer);
            var icon = insert.Parameters.Add("$icon", SqliteType.Text);

            for (var index = 0; index < entries.Count; index++)
            {
                var entry = entries[index];
                position.Value = index;
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

        await using var mark = connection.CreateCommand();
        mark.Transaction = transaction;
        mark.CommandText = "INSERT INTO ListingState (DirectoryKey, SavedAt) VALUES ($key, $now) " +
                           "ON CONFLICT(DirectoryKey) DO UPDATE SET SavedAt = excluded.SavedAt";
        mark.Parameters.AddWithValue("$key", key);
        mark.Parameters.AddWithValue("$now", Now());
        await mark.ExecuteNonQueryAsync();
    }

    private static async Task<bool> HasListingAsync(SqliteConnection connection, string directory)
    {
        await using var command = connection.CreateCommand();
        command.CommandText = "SELECT 1 FROM ListingState WHERE DirectoryKey = $key";
        command.Parameters.AddWithValue("$key", KeyFor(directory));
        return await command.ExecuteScalarAsync() is not null;
    }

    /// <summary>
    ///     Moves a folder's own <c>.yafm-index.db</c> into the central database the first time the
    ///     folder is touched after per-folder indexes were turned off.
    /// </summary>
    private async Task ImportAsync(string directory)
    {
        if (!File.Exists(FolderIndex.PathFor(directory)))
            return;

        await _writeGate.WaitAsync();
        try
        {
            await ImportCoreAsync(directory);
        }
        finally
        {
            _writeGate.Release();
        }
    }

    /// <summary>Unlocked body of <see cref="ImportAsync" />; callers must hold the write gate.</summary>
    private async Task ImportCoreAsync(string directory)
    {
        if (!File.Exists(FolderIndex.PathFor(directory)))
            return;

        var snapshot = await FolderIndex.SnapshotAsync(directory);
        if (snapshot is not { } data)
            return;

        await using (var connection = await OpenAsync())
        {
            await using var transaction = await connection.BeginTransactionAsync();

            if (data.Listing is { } listing)
                await WriteListingAsync(connection, (SqliteTransaction)transaction, directory, listing);

            await MergeIconsAsync(connection, (SqliteTransaction)transaction, directory, data.Icons);
            await MergeSizesAsync(connection, (SqliteTransaction)transaction, directory, data.Sizes);

            await transaction.CommitAsync();
        }

        // Only now that the data is safely in the central database may the folder's copy go.
        await FolderIndex.DeleteFilesAsync(directory);
    }

    private static async Task MergeIconsAsync(SqliteConnection connection, SqliteTransaction transaction,
        string directory, Dictionary<string, string> icons)
    {
        if (icons.Count == 0)
            return;

        await using var command = connection.CreateCommand();
        command.Transaction = transaction;
        command.CommandText =
            "INSERT OR REPLACE INTO Icons (DirectoryKey, Name, Source) VALUES ($key, $name, $source)";
        command.Parameters.AddWithValue("$key", KeyFor(directory));
        var name = command.Parameters.Add("$name", SqliteType.Text);
        var source = command.Parameters.Add("$source", SqliteType.Text);

        foreach (var (entry, value) in icons)
        {
            name.Value = entry;
            source.Value = value;
            await command.ExecuteNonQueryAsync();
        }
    }

    private static async Task MergeSizesAsync(SqliteConnection connection, SqliteTransaction transaction,
        string directory, Dictionary<string, long> sizes)
    {
        if (sizes.Count == 0)
            return;

        await using var command = connection.CreateCommand();
        command.Transaction = transaction;
        command.CommandText =
            "INSERT OR REPLACE INTO Sizes (DirectoryKey, Name, Bytes, ComputedAt) " +
            "VALUES ($key, $name, $bytes, $now)";
        command.Parameters.AddWithValue("$key", KeyFor(directory));
        command.Parameters.AddWithValue("$now", Now());
        var name = command.Parameters.Add("$name", SqliteType.Text);
        var bytes = command.Parameters.Add("$bytes", SqliteType.Integer);

        foreach (var (entry, value) in sizes)
        {
            name.Value = entry;
            bytes.Value = value;
            await command.ExecuteNonQueryAsync();
        }
    }
}
