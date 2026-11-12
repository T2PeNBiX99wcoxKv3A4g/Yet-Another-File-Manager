using System.Text;
using System.Text.Json;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Messaging;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Keeps the interface's own state — panel widths, split ratios, the tray position, column widths
///     and sort orders — in a file next to the settings.
/// </summary>
/// <remarks>
///     This used to live in the web view's local storage, which belongs to an origin and sits inside a
///     profile that has to be thrown away when an engine keeps serving an old interface, so every
///     build and every launch started from the defaults. The file is the app's, and the interface
///     gets the values in its page address, which is the only thing it can read before the shell
///     starts answering messages.
/// </remarks>
internal sealed class UiStateService : Singleton<UiStateService>
{
    private static readonly string StatePath = Path.Combine(Constants.SettingsDirectory, "ui-state.json");

    private readonly Lock _sync = new();
    private readonly SemaphoreSlim _writeGate = new(1, 1);
    private readonly Dictionary<string, string> _values;

    public UiStateService()
    {
        _values = Read();
        NativeBridge.MessageReceived += HandleMessageAsync;
    }

    /// <summary>
    ///     The stored values as a URL-safe blob, for the page address. The interface parses it while
    ///     it starts, so the panels come up at their stored size instead of a default.
    /// </summary>
    public string Encoded
    {
        get
        {
            string json;

            lock (_sync)
                json = JsonSerializer.Serialize(_values, AppJsonContext.Default.DictionaryStringString);

            return Convert.ToBase64String(Encoding.UTF8.GetBytes(json))
                .TrimEnd('=')
                .Replace('+', '-')
                .Replace('/', '_');
        }
    }

    private Task<NativeResponse?> HandleMessageAsync(NativeContext context) => context.Request.Type switch
    {
        "ui.state.set" => SetAsync(context),
        _ => Task.FromResult<NativeResponse?>(null)
    };

    /// <summary>Stores the values the interface changed and answers once they are on disk.</summary>
    private async Task<NativeResponse?> SetAsync(NativeContext context)
    {
        if (context.Payload<UiStateSetRequest>()?.Entries is { Count: > 0 } entries)
            await WriteAsync(entries);

        return context.Reply("ui.state.set.result", new OkPayload());
    }

    private async Task WriteAsync(Dictionary<string, string> entries)
    {
        await _writeGate.WaitAsync();
        try
        {
            string json;

            lock (_sync)
            {
                foreach (var (key, value) in entries)
                    _values[key] = value;

                json = JsonSerializer.Serialize(_values, AppJsonContext.Default.DictionaryStringString);
            }

            var result = await Try.Run(() => File.WriteAllTextAsync(StatePath, json));
            result.OnFailure(ex => Log.Warning(ex, "Could not save the interface state"));
        }
        finally
        {
            _writeGate.Release();
        }
    }

    /// <summary>An unreadable or missing file simply means nothing has been stored yet.</summary>
    private static Dictionary<string, string> Read()
    {
        if (!File.Exists(StatePath))
            return [];

        return Try.Run(() => File.ReadAllText(StatePath)).GetOrNull() is { Length: > 0 } json
            ? Try.Run(() => JsonSerializer.Deserialize(json, AppJsonContext.Default.DictionaryStringString))
                .GetOrNull() ?? []
            : [];
    }
}
