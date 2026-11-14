using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The salted verifier for the optional web-share password. It has a file of its own so a
///     settings save from the interface can never overwrite a password set through the native
///     password message, and the hash never travels to the page.
/// </summary>
[Singleton]
internal partial class SharePasswordStore
{
    private static readonly string FilePath = Path.Combine(Constants.SettingsDirectory, "share-password.json");

    private readonly Lock _gate = new();
    private readonly SemaphoreSlim _writeGate = new(1, 1);
    private SharePasswordSecret _current = new();

    public SharePasswordSecret Current
    {
        get
        {
            lock (_gate)
                return _current;
        }
    }

    public async Task InitializeAsync()
    {
        if (!File.Exists(FilePath))
            return;

        var read = await Try.Run(() => File.ReadAllTextAsync(FilePath));
        var json = read.OnFailure(ex => Log.Warning(ex, "Could not read {File}", FilePath)).GetOrNull();
        if (json is null)
            return;

        var stored = JsonSerializer.Deserialize(json, AppJsonContext.Default.SharePasswordSecret);
        if (stored is null)
            return;

        lock (_gate)
            _current = stored;
    }

    public async Task SetAsync(SharePasswordSecret? secret)
    {
        await _writeGate.WaitAsync();
        try
        {
            lock (_gate)
                _current = secret ?? new();

            if (secret is null || secret.Hash.Length == 0)
            {
                Try.Run(() => File.Delete(FilePath));
                return;
            }

            var write = await Try.Run(() => File.WriteAllTextAsync(FilePath,
                JsonSerializer.Serialize(secret, AppJsonContext.Default.SharePasswordSecret)));
            write.OnFailure(ex => Log.Warning(ex, "Could not write {File}", FilePath));
        }
        finally
        {
            _writeGate.Release();
        }
    }
}
