using System.Net;
using Photino.NET;
using PhotinoNetUtils.Localization;
using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Interop;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The small, topmost window that asks whether a browser may use a web share. One window is
///     shown at a time; later requests wait in a queue, so a page that retries cannot bury the
///     desktop in prompts.
/// </summary>
[Singleton]
internal partial class ShareAccessPrompt
{
    private readonly Lock _gate = new();
    private readonly Queue<Request> _queue = new();
    private readonly HashSet<string> _queued = new(StringComparer.Ordinal);

    private PhotinoWindow? _window;
    private bool _showing;

    /// <summary>Queues a request for the desktop and shows it when the previous one is answered.</summary>
    public void Ask(string id, string name, string address, int minutes)
    {
        bool added;

        lock (_gate)
        {
            added = _queued.Add(id);
            if (added)
                _queue.Enqueue(new Request(id, name, address, minutes));
        }

        if (added)
            ShowNext();
    }

    private void ShowNext()
    {
        Request? request;

        lock (_gate)
        {
            if (_showing || _queue.Count == 0)
                return;

            request = _queue.Dequeue();
            _showing = true;
        }

        WindowManager.Instance.RunOnMainWindow(() =>
        {
            try
            {
                CreateWindow(request);
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "Could not show the share access prompt");
                _ = DecideAsync(request, false);
            }
        });
    }

    private void CreateWindow(Request request)
    {
        var window = new PhotinoWindow(WindowManager.Instance.MainWindow)
            .SetTitle(Localization.Get("share_access_request_title"))
            .SetUseOsDefaultSize(false)
            .SetUseOsDefaultLocation(false)
            .SetSize(460, 260)
            .SetResizable(false)
            .SetChromeless(true)
            .SetTopMost(true)
            .SetNotificationsEnabled(false)
            .SetContextMenuEnabled(false)
            .SetLogVerbosity(0)
            .Center()
            .RegisterWindowClosingHandler((_, _) =>
            {
                // Closing without an answer is a refusal; it must not leave the browser waiting.
                if (!request.Decided)
                    _ = DecideAsync(request, false);

                return false;
            })
            .RegisterWebMessageReceivedHandler((_, message) =>
            {
                if (!request.Decided)
                    _ = DecideAsync(request, message.Contains("allow", StringComparison.OrdinalIgnoreCase));
            });

        window.LoadRawString(Html(request));
        window.SetMinimized(false);

        // Photino creates the native window in WaitForClose. The main window already started the
        // shared message loop, so this call builds and shows this window without blocking.
        window.WaitForClose();

        // The interface paints the rounded corners and their border; Windows 11 has to clip the
        // window to the same shape, or the square background shows behind them.
        if (OperatingSystem.IsWindows())
            WindowCorners.Round(window.WindowHandle);

        _window = window;

        // Some window managers clear the topmost style while showing a chromeless window.
        _ = Task.Delay(700).ContinueWith(_ => Try.Run(() =>
            window.Invoke(() => window.SetTopMost(true))).OnFailure(ex =>
            Log.Debug(ex, "Could not re-assert the share prompt's topmost state")));
    }

    private async Task DecideAsync(Request request, bool allow)
    {
        if (request.Decided)
            return;

        request.Decided = true;

        try
        {
            if (allow)
                await ShareAccess.Instance.AllowAsync(request.Id, request.Name, request.Address, false);
            else
                await ShareAccess.Instance.DenyAsync(request.Id, request.Name, request.Address, false);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not store the share access decision");
        }

        PhotinoWindow? window;

        lock (_gate)
        {
            window = _window;
            _window = null;
            _showing = false;
            _queued.Remove(request.Id);
        }

        if (window is not null)
            Try.Run(() => window.Invoke(() => window.Close()));

        _ = Task.Delay(120).ContinueWith(_ => ShowNext());
    }

    private static string Html(Request request)
    {
        var title = WebUtility.HtmlEncode(Localization.Get("share_access_request_title"));
        var message = string.Format(WebUtility.HtmlEncode(Localization.Get("share_access_wants_to_open")),
            WebUtility.HtmlEncode(request.Name), WebUtility.HtmlEncode(request.Address));
        var hint = WebUtility.HtmlEncode(Localization.Get("share_access_device_hint"));
        var allowLabel = string.Format(
            WebUtility.HtmlEncode(Localization.Get("share_access_allow_for_minutes")), request.Minutes);
        var deny = WebUtility.HtmlEncode(Localization.Get("share_access_deny"));
        var allow = WebUtility.HtmlEncode(Localization.Get("share_access_allow"));

        // Windows 11 clips the window to this radius in code; elsewhere the window stays square and
        // only the border is drawn, so the corners do not show an unfilled gap.
        var frame = OperatingSystem.IsWindows()
            ? "border-radius: 8px; box-shadow: inset 0 0 0 1px #3a3d44;"
            : "";

        return $$"""
                 <!doctype html>
                 <html>
                 <head>
                 <meta charset="utf-8">
                 <style>
                   :root { color-scheme: light dark; }
                   * { box-sizing: border-box; }
                   html, body { height: 100%; margin: 0; }
                   body {
                     display: flex; align-items: center; justify-content: center;
                     padding: 24px;
                     font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
                     background: #1c1d21; color: #f2f3f5;
                     {{frame}}
                   }
                   .card { width: 100%; }
                   .badge {
                     display: inline-flex; align-items: center; justify-content: center;
                     width: 42px; height: 42px; border-radius: 12px;
                     background: #2f6fed; color: white; font-size: 20px; margin-bottom: 14px;
                   }
                   h1 { margin: 0 0 8px; font-size: 18px; font-weight: 600; }
                   p { margin: 0 0 6px; font-size: 13px; color: #c9cbd1; line-height: 1.45; }
                   .hint { color: #8f939c; font-size: 12px; }
                   .actions { display: flex; gap: 8px; justify-content: flex-end; margin-top: 22px; }
                   button {
                     height: 34px; padding: 0 16px; border-radius: 8px; border: 1px solid #3a3d44;
                     background: #26282d; color: #f2f3f5; font: inherit; font-size: 13px; cursor: pointer;
                   }
                   button:hover { background: #30333a; }
                   button.primary { background: #2f6fed; border-color: #2f6fed; }
                   button.primary:hover { background: #3b7bf5; }
                 </style>
                 </head>
                 <body>
                 <div class="card">
                   <div class="badge">&#128274;</div>
                   <h1>{{title}}</h1>
                   <p>{{message}}</p>
                   <p class="hint">{{hint}}</p>
                   <div class="actions">
                     <button onclick="answer('deny')">{{deny}}</button>
                     <button class="primary" onclick="answer('allow')">{{allowLabel}}</button>
                   </div>
                 </div>
                 <script>function answer(decision) { window.external.sendMessage(JSON.stringify({decision})); }</script>
                 </body>
                 </html>
                 """;
    }

    private sealed class Request(string id, string name, string address, int minutes)
    {
        public string Id { get; } = id;

        public string Name { get; } = name;

        public string Address { get; } = address;

        public int Minutes { get; } = minutes;

        public bool Decided { get; set; }
    }
}
