using System.Text.Json;
using PhotinoNetUtils.Localization;
using PhotinoNetUtils.Services;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Owns <see cref="AppSettings" /> and its TOML file; the shared base answers
///     <c>settings.get</c> and <c>settings.save</c>, normalizes and writes atomically, and hands out
///     the process-wide <c>Instance</c>.
/// </summary>
internal sealed class SettingsService : SettingsServiceBase<SettingsService, AppSettings, AppSettings>
{
    private const string Header =
        "# Yet Another File Manager settings. The comments come from the app; values are rewritten on save.";

    /// <summary>The JSON file older builds wrote, read once and converted to TOML.</summary>
    private static readonly string? LegacySettingsPath = new[]
    {
        Path.Combine(Constants.SettingsDirectory, "settings.json"),
        Path.Combine(Constants.DataDirectory, "settings.json")
    }.FirstOrDefault(File.Exists);

    private readonly SemaphoreSlim _writeGate = new(1, 1);

    public SettingsService() : base(new TomlSettingsStore<AppSettings>(
        Path.Combine(Constants.SettingsDirectory, "settings.toml"),
        AppSettings.Default,
        AppTomlContext.Default.AppSettings,
        json => JsonSerializer.Deserialize(json, AppJsonContext.Default.AppSettings),
        LegacySettingsPath,
        Header))
    {
    }

    /// <summary>
    ///     The stored language setting: a locale code, or <see cref="Localization.SystemLocale" /> to follow
    ///     the operating system. A fresh install starts in English.
    /// </summary>
    public string Language => Current.Language is { Length: > 0 } language
        ? language
        : Localization.DefaultLocale;

    /// <summary>Applies a change to the current settings and stores the result.</summary>
    public async Task<AppSettings> UpdateAsync(Func<AppSettings, AppSettings> change)
    {
        await _writeGate.WaitAsync();
        try
        {
            await SaveAsync(change(Current));
            return Current;
        }
        finally
        {
            _writeGate.Release();
        }
    }

    /// <summary>
    ///     Applies a change the interface already made itself — the open tabs, the hidden-item
    ///     toggle — without pushing the whole settings document back at it.
    /// </summary>
    public async Task UpdateSilentlyAsync(Func<AppSettings, AppSettings> change)
    {
        await _writeGate.WaitAsync();
        try
        {
            await SaveSilentlyAsync(change(Current));
        }
        finally
        {
            _writeGate.Release();
        }
    }

    /// <summary>The settings as the interface reads them, with the protection rules filled in.</summary>
    protected override AppSettings Payload() => Protection.Resolve(Current);

    /// <summary>
    ///     Keeps the fields the interface must not own: the window records its own tabs, and the
    ///     registration and startup choices have their own messages, so a settings save must not
    ///     undo what those wrote.
    /// </summary>
    protected override AppSettings Merge(AppSettings incoming) => incoming with
    {
        OpenTabs = Current.OpenTabs,
        ActiveTab = Current.ActiveTab,
        DirectoryIndexBlacklist = incoming.DirectoryIndexBlacklist
                                  ?? Current.DirectoryIndexBlacklist
                                  ?? DirectoryIndexBlacklist.Defaults(),
        LinksEnabled = Current.LinksEnabled,
        DefaultFileManager = Current.DefaultFileManager,
        ArchiveHandler = Current.ArchiveHandler,
        StartupMode = Current.StartupMode
    };

    protected override void OnSaved(AppSettings settings) =>
        GlobalHotkey.Apply(settings.GlobalHotkey, () => WindowManager.Instance.ShowMainWindow());
}
