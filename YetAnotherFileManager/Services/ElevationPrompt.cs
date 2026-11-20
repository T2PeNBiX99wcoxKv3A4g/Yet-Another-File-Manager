namespace YetAnotherFileManager.Services;

/// <summary>What the interface shows before an elevated copy of the app runs.</summary>
internal sealed record ElevationAskPayload(string Token, string Action, string Path);

/// <summary>The interface's answer to <see cref="ElevationAskPayload" />.</summary>
internal sealed record ElevationAnswerPayload(string? Token, bool Allow);

/// <summary>
///     Asks the window before an operation is handed to an elevated copy of the app. Windows shows
///     its own consent prompt, but the user still deserves to know which file was blocked and why
///     the app is restarting with more rights; without this the elevation came out of nowhere.
/// </summary>
internal static class ElevationPrompt
{
    private static TaskCompletionSource<bool>? _pending;
    private static string _token = "";

    /// <summary>
    ///     True when the elevated copy may run. There is no dialog when the interface never reported
    ///     ready, which also covers the elevated copy itself.
    /// </summary>
    public static async Task<bool> AskAsync(string action, string path)
    {
        var window = WindowManager.Instance;
        if (!window.IsWebViewReady)
            return true;

        var token = Guid.NewGuid().ToString("N");
        var pending = new TaskCompletionSource<bool>(TaskCreationOptions.RunContinuationsAsynchronously);
        _pending = pending;
        _token = token;

        window.Notify("fs.elevation.ask", new ElevationAskPayload(token, action, path));

        // A window that never answers must not hang the operation forever; treating silence as
        // "no" keeps the user in control of their own machine.
        using var timeout = new CancellationTokenSource(TimeSpan.FromMinutes(2));
        await using (timeout.Token.Register(() => pending.TrySetResult(false)))
            return await pending.Task;
    }

    /// <summary>Records the window's answer; a stale token from a closed dialog is ignored.</summary>
    public static bool Answer(string? token, bool allow)
    {
        if (_pending is not { } pending || token != _token)
            return false;

        return pending.TrySetResult(allow);
    }
}
