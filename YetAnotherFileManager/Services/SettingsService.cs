using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>Stores <see cref="AppSettings" /> next to the app's other data.</summary>
internal sealed class SettingsService : Singleton<SettingsService>
{
    private static readonly string SettingsPath = Path.Combine(Constants.SettingsDirectory, "settings.json");

    public AppSettings Current { get; private set; } = Load();

    /// <summary>Applies a change to the current settings and stores the result.</summary>
    public AppSettings Update(Func<AppSettings, AppSettings> change) => Save(change(Current));

    public AppSettings Save(AppSettings settings)
    {
        Current = settings;

        Try.Run(() => File.WriteAllText(SettingsPath,
                JsonSerializer.Serialize(settings, AppJsonContext.Default.AppSettings)))
            .OnFailure(ex => Log.Warning(ex, "Could not save the settings"));

        return Current;
    }

    private static AppSettings Load() =>
        Try.Run(() => JsonSerializer.Deserialize(File.ReadAllText(SettingsPath), AppJsonContext.Default.AppSettings))
            .GetOrNull() ?? AppSettings.Default;
}