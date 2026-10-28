using System.Text.Json;
using Photino.NET;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;

namespace YetAnotherFileManager.Messaging;

/// <summary>
///     The transport for JSON messages exchanged with the React front-end.
///     It only parses, raises <see cref="MessageReceived" /> and serializes the reply — the actual
///     handling lives with the services that own each message type.
/// </summary>
internal static class NativeBridge
{
    /// <summary>
    ///     Raised for every incoming message. Handlers are awaited in subscription order and the first
    ///     non-null response wins.
    /// </summary>
    public static event NativeMessageHandler? MessageReceived;

    /// <summary>
    ///     Handles one message off the UI thread: listing a large folder, measuring a directory or
    ///     asking the shell for an icon must never block the window. The reply is posted back with
    ///     <see cref="PhotinoWindow.Invoke" />, which is the only part that has to run on the UI thread.
    /// </summary>
    public static Task HandleMessageAsync(PhotinoWindow? window, string rawMessage) =>
        Task.Run(() => HandleCoreAsync(window, rawMessage));

    private static async Task HandleCoreAsync(PhotinoWindow? window, string rawMessage)
    {
        Log.Debug("<< {Message}", rawMessage.RemoveControlChars().Truncate(600));

        NativeRequest? request;
        try
        {
            request = JsonSerializer.Deserialize(rawMessage, AppJsonContext.Default.NativeRequest);
        }
        catch (JsonException ex)
        {
            Log.Warning(ex, "Invalid JSON received");
            Send(window, NativeResponse.Failure(null, "error", "error.invalidJson"));
            return;
        }

        if (request?.Type is null or "")
            return;

        var context = new NativeContext(window, request);

        (await Try.Run(async () =>
        {
            var response = await RaiseAsync(context);

            if (response is not null)
                Send(window, response);
            else if (context.WantsReply)
                Send(window, context.Fail($"{request.Type}.result", "error.unsupported"));
        })).OnFailure(ex =>
        {
            Log.Error(ex, "Handler for {Type} failed", request.Type);

            if (context.WantsReply)
                Send(window, context.Fail($"{request.Type}.result", ex.Message));
        });
    }

    private static async Task<NativeResponse?> RaiseAsync(NativeContext context)
    {
        if (MessageReceived is not { } handlers)
            return null;

        foreach (var handler in handlers.GetInvocationList().Cast<NativeMessageHandler>())
            if (await handler(context) is { } response)
                return response;

        return null;
    }

    private static void Send(PhotinoWindow? window, NativeResponse response)
    {
        var json = NativeProtocol.SerializeResponse(response);
        Log.Debug(">> {Message}", json.RemoveControlChars().Truncate(600));

        if (window is null)
            return;

        Try.Run(() => window.Invoke(() => window.SendWebMessage(json)))
            .OnFailure(ex => Log.Warning(ex, "Could not send the reply"));
    }
}