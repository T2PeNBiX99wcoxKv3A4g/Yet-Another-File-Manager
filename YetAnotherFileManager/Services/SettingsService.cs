using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>Stores <see cref="AppSettings" /> next to the app's other user data.</summary>
internal sealed class SettingsService : Singleton<SettingsService>
{
    private static readonly string SettingsPath = Path.Combine(Constants.SettingsDirectory, "settings.json");

    private AppSettings _current = AppSettings.Default;

    private readonly SemaphoreSlim _writeGate = new(1, 1);

    public AppSettings Current => _current;

    /// <summary>Reads the settings once at startup, before any service asks for <see cref="Current" />.</summary>
    public async Task InitializeAsync()
    {
        if (!File.Exists(SettingsPath))
        {
            _current = AppSettings.Default;
            return;
        }

        var result = await Try.Run(() => File.ReadAllTextAsync(SettingsPath));
        var json = result.OnFailure(ex => Log.Warning(ex, "Could not read the settings")).GetOrNull();

        _current = json is null
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
            _current = change(_current);
            await WriteAsync(_current);
            return _current;
        }
        finally
        {
            _writeGate.Release();
        }
    }

    public async Task<AppSettings> SaveAsync(AppSettings settings)
    {
        await _writeGate.WaitAsync();
        try
        {
            _current = settings;
            await WriteAsync(_current);
            return _current;
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
