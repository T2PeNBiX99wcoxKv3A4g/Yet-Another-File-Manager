using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Localization;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>Stores <see cref="AppSettings" /> next to the app's other user data.</summary>
[Singleton]
internal partial class SettingsService
{
    private static readonly string SettingsPath = Path.Combine(Constants.SettingsDirectory, "settings.json");

    private readonly SemaphoreSlim _writeGate = new(1, 1);

    public AppSettings Current { get; private set; } = AppSettings.Default;

    /// <summary>
    ///     The stored language setting: a locale code, or <see cref="Localization.SystemLocale" /> to follow
    ///     the operating system. A fresh install starts in English.
    /// </summary>
    public string Language => Current.Language is { Length: > 0 } language
        ? language
        : Localization.DefaultLocale;

    /// <summary>Reads the settings once at startup, before any service asks for <see cref="Current" />.</summary>
    public async Task InitializeAsync()
    {
        if (!File.Exists(SettingsPath))
        {
            Current = AppSettings.Default;
            return;
        }

        var result = await Try.Run(() => File.ReadAllTextAsync(SettingsPath));
        var json = result.OnFailure(ex => Log.Warning(ex, "Could not read the settings")).GetOrNull();

        Current = json is null
            ? AppSettings.Default
            : Try.Run(() => JsonSerializer.Deserialize(json, AppJsonContext.Default.AppSettings))
                .GetOrNull() ?? AppSettings.Default;
    }

    /// <summary>Applies a change to the current settings and stores the result.</summary>
    public async Task<AppSettings> UpdateAsync(Func<AppSettings, AppSettings> change)
    {
        await _writeGate.WaitAsync();
        try
        {
            Current = change(Current);
            await WriteAsync(Current);
            return Current;
        }
        finally
        {
            _writeGate.Release();
        }
    }

    private async Task WriteAsync(AppSettings settings)
    {
        var json = JsonSerializer.Serialize(settings, AppJsonContext.Default.AppSettings);
        var result = await Try.Run(() => File.WriteAllTextAsync(SettingsPath, json));
        result.OnFailure(ex => Log.Warning(ex, "Could not save the settings"));
    }
}