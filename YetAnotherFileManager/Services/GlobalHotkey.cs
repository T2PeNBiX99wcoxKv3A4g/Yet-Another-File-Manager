using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using Serilog;

namespace YetAnotherFileManager.Services;

/// <summary>
///     A global key combination that brings the window forward. It polls the keyboard instead of
///     registering a hotkey, so it also works when another process owns the foreground window.
/// </summary>
[SupportedOSPlatform("windows")]
internal static class GlobalHotkey
{
    private static readonly Dictionary<string, int> Keys = new(StringComparer.OrdinalIgnoreCase)
    {
        ["ctrl"] = 0x11,
        ["control"] = 0x11,
        ["shift"] = 0x10,
        ["alt"] = 0x12,
        ["win"] = 0x5B,
        ["space"] = 0x20,
        ["enter"] = 0x0D,
        ["return"] = 0x0D,
        ["tab"] = 0x09,
        ["escape"] = 0x1B,
        ["esc"] = 0x1B,
        ["insert"] = 0x2D,
        ["delete"] = 0x2E,
        ["home"] = 0x24,
        ["end"] = 0x23,
        ["pageup"] = 0x21,
        ["pagedown"] = 0x22,
        ["up"] = 0x26,
        ["down"] = 0x28,
        ["left"] = 0x25,
        ["right"] = 0x27
    };

    private static CancellationTokenSource? _stop;
    private static bool _wasDown;

    public static void Apply(string? combination)
    {
        Stop();

        if (!OperatingSystem.IsWindows() || string.IsNullOrWhiteSpace(combination))
            return;

        var parts = combination.Split('+', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
        var keys = new List<int>();

        foreach (var part in parts)
            if (part.Length == 1 && char.IsLetterOrDigit(part[0]))
                keys.Add(char.ToUpperInvariant(part[0]));
            else if (part.StartsWith('f') && int.TryParse(part[1..], out var function) && function is >= 1 and <= 24)
                keys.Add(0x70 + function - 1);
            else if (Keys.TryGetValue(part, out var code))
                keys.Add(code);
            else
                return;

        if (keys.Count == 0)
            return;

        _wasDown = false;
        _stop = new();
        var token = _stop.Token;

        Task.Run(() =>
        {
            while (!token.IsCancellationRequested)
            {
                try
                {
                    var down = keys.All(key => (GetAsyncKeyState(key) & 0x8000) != 0);

                    if (down && !_wasDown)
                    {
                        _wasDown = true;
                        WindowManager.Instance.ShowMainWindow();
                    }
                    else if (!down)
                        _wasDown = false;
                }
                catch (Exception ex)
                {
                    Log.Debug(ex, "Could not poll the global hotkey");
                }

                Thread.Sleep(80);
            }
        }, token);
    }

    private static void Stop()
    {
        _stop?.Cancel();
        _stop?.Dispose();
        _stop = null;
    }

    [DllImport("user32.dll")]
    private static extern short GetAsyncKeyState(int virtualKey);
}