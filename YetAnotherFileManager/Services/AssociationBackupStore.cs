using System.Text.Json;
using Serilog;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The one file that remembers what this app replaced: archive handlers and the default
///     folder handler. Both services share it so enabling or disabling one never clobbers the
///     backups of the other.
/// </summary>
internal static class AssociationBackupStore
{
    private static readonly Lock Gate = new();

    public static string FilePath => Path.Combine(Constants.SettingsDirectory, "associations.json");

    public static AssociationBackupFile Read()
    {
        lock (Gate)
            return ReadCore();
    }

    /// <summary>Reads, changes and writes while holding the lock, so the two services cannot race.</summary>
    public static bool Update(Action<AssociationBackupFile> change)
    {
        lock (Gate)
        {
            var store = ReadCore();
            change(store);
            return WriteCore(store);
        }
    }

    public static bool Write(AssociationBackupFile store)
    {
        lock (Gate)
            return WriteCore(store);
    }

    private static AssociationBackupFile ReadCore()
    {
        try
        {
            if (!File.Exists(FilePath))
                return new();

            var json = File.ReadAllText(FilePath);
            return JsonSerializer.Deserialize(json, AppJsonContext.Default.AssociationBackupFile)
                   ?? new AssociationBackupFile();
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not read {Path}", FilePath);
            return new();
        }
    }

    private static bool WriteCore(AssociationBackupFile store)
    {
        try
        {
            Directory.CreateDirectory(Constants.SettingsDirectory);
            File.WriteAllText(FilePath,
                JsonSerializer.Serialize(store, AppJsonContext.Default.AssociationBackupFile));
            return true;
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not save {Path}", FilePath);
            return false;
        }
    }
}