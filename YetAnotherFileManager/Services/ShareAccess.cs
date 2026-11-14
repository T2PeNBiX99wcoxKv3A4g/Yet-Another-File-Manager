using System.Collections.Concurrent;
using System.Net;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Http;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Notifications;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Decides whether a browser may use a web share. A device is identified by a long random
///     cookie, must be approved once on the desktop, and stays allowed or refused for the configured
///     time; the settings page can make either decision permanent.
/// </summary>
[Singleton]
internal partial class ShareAccess
{
    public const string CookieName = "yafm-device";

    /// <summary>One outstanding password challenge per device; five minutes is plenty.</summary>
    private static readonly TimeSpan ChallengeLifetime = TimeSpan.FromMinutes(5);

    private static readonly ConcurrentDictionary<string, Challenge> Challenges = new(StringComparer.Ordinal);

    /// <summary>Devices whose approval window is already open, so a poll does not ask again.</summary>
    private static readonly ConcurrentDictionary<string, byte> Asking = new(StringComparer.Ordinal);

    public static bool Enabled(AppSettings settings) => settings.ShareAccessEnabled ?? true;

    public static int ApprovalMinutes(AppSettings settings) =>
        Math.Clamp(settings.ShareApprovalMinutes ?? 60, 1, 24 * 60);

    public static int DenialSeconds(AppSettings settings) =>
        Math.Clamp(settings.ShareDenialSeconds ?? 10, 1, 3600);

    public async Task<ShareWebAccessPayload> EvaluateAsync(HttpContext context)
    {
        var settings = SettingsService.Instance.Current;
        var id = DeviceId(context);
        var name = DeviceName(context.Request.Headers.UserAgent);
        var address = Address(context);
        var approval = ApprovalMinutes(settings);
        var denial = DenialSeconds(settings);
        var now = Now;

        var device = await ShareDeviceStore.Instance.TouchAsync(id, name, address);

        if (!Enabled(settings))
            return Allowed(name, 0, false, approval, denial);

        if (device.State == "allowed" && Fresh(device, now))
            return Allowed(name, device.ExpiresAt, false, approval, denial);

        if (device.State == "denied" && Fresh(device, now))
            return new("denied", name, device.ExpiresAt, RetryAfter(device, now), false, null, null,
                approval, denial);

        if (SharePassword.IsConfigured(SharePasswordStore.Instance.Current))
        {
            var challenge = ChallengeFor(id);
            return new("password", name, null, null, true,
                SharePasswordStore.Instance.Current.Salt, challenge.Nonce, approval, denial);
        }

        // No password, so the desktop decides. The poll that first sees the device opens the
        // window; it is topmost and stays there until the user answers.
        if (Asking.TryAdd(id, 0))
            ShareAccessPrompt.Instance.Ask(id, name, address, approval);

        return new("pending", name, null, null, false, null, null, approval, denial);
    }

    /// <summary>
    ///     Checks a browser's password proof. A correct proof allows the device immediately; a wrong
    ///     one refuses it for the configured time. Either way the desktop gets a notification.
    /// </summary>
    public async Task<ShareWebAccessPayload> SubmitPasswordAsync(HttpContext context, string? nonce,
        string? proof)
    {
        var settings = SettingsService.Instance.Current;
        var id = DeviceId(context);
        var name = DeviceName(context.Request.Headers.UserAgent);
        var address = Address(context);

        if (SharePassword.Verify(SharePasswordStore.Instance.Current, nonce, proof))
        {
            await AllowAsync(id, name, address, false);
            Challenges.TryRemove(id, out _);
            NotificationService.Notify("share.access.allowed", "Web share access allowed",
                $"{name} signed in with the share password.");
        }
        else
        {
            await DenyAsync(id, name, address, false);
            Challenges.TryRemove(id, out _);
            NotificationService.Notify("share.access.denied", "Web share access refused",
                $"{name} entered a wrong share password.");
        }

        return await EvaluateAsync(context);
    }

    /// <summary>Allows the device for the approval time, or permanently.</summary>
    public async Task AllowAsync(string id, string name, string address, bool permanent) =>
        await SetStateAsync(id, "allowed", permanent, name, address);

    /// <summary>Refuses the device for the denial time, or permanently.</summary>
    public async Task DenyAsync(string id, string name, string address, bool permanent) =>
        await SetStateAsync(id, "denied", permanent, name, address);

    public async Task SetStateAsync(string id, string state, bool permanent, string? name = null,
        string? address = null)
    {
        if (state is not ("allowed" or "denied"))
            return;

        var settings = SettingsService.Instance.Current;
        var expiry = permanent
            ? 0
            : Now + (state == "allowed"
                ? ApprovalMinutes(settings) * 60_000L
                : DenialSeconds(settings) * 1000L);

        await ShareDeviceStore.Instance.SetStateAsync(id, state, expiry, name, address);
        Asking.TryRemove(id, out _);
        Challenges.TryRemove(id, out _);
        DeviceChanged();
    }

    /// <summary>Removes a device, so its next visit asks again.</summary>
    public async Task RemoveDeviceAsync(string id)
    {
        await ShareDeviceStore.Instance.RemoveAsync(id);
        Asking.TryRemove(id, out _);
        Challenges.TryRemove(id, out _);
        DeviceChanged();
    }

    /// <summary>Stores a new share password, or removes it when the value is empty.</summary>
    public async Task<bool> SetPasswordAsync(string? password)
    {
        if (string.IsNullOrEmpty(password))
        {
            await SharePasswordStore.Instance.SetAsync(null);
            Challenges.Clear();
            return false;
        }

        var (salt, hash) = SharePassword.Create(password);
        await SharePasswordStore.Instance.SetAsync(new SharePasswordSecret
        {
            Salt = salt,
            Hash = hash
        });
        Challenges.Clear();
        return true;
    }

    public static bool HasPassword => SharePassword.IsConfigured(SharePasswordStore.Instance.Current);

    /// <summary>The device cookie, created and sent back the first time a browser appears.</summary>
    public static string DeviceId(HttpContext context)
    {
        var existing = context.Request.Cookies[CookieName];
        if (existing is { Length: 32 })
            return existing;

        var id = Convert.ToHexString(RandomNumberGenerator.GetBytes(16)).ToLowerInvariant();
        context.Response.Cookies.Append(CookieName, id, new CookieOptions
        {
            HttpOnly = true,
            SameSite = SameSiteMode.Lax,
            Path = "/",
            IsEssential = true,
            Expires = DateTimeOffset.UtcNow.AddYears(1)
        });

        return id;
    }

    /// <summary>A readable "Chrome on Windows" label from the browser's user agent.</summary>
    public static string DeviceName(string? userAgent)
    {
        if (string.IsNullOrWhiteSpace(userAgent))
            return "Browser";

        var browser = userAgent.Contains("Edg/", StringComparison.Ordinal) ? "Edge"
            : userAgent.Contains("Firefox/", StringComparison.Ordinal) ? "Firefox"
            : userAgent.Contains("Chrome/", StringComparison.Ordinal) ? "Chrome"
            : userAgent.Contains("Safari/", StringComparison.Ordinal) ? "Safari"
            : "Browser";

        var system = userAgent.Contains("Android", StringComparison.Ordinal) ? "Android"
            : userAgent.Contains("iPhone", StringComparison.Ordinal)
              || userAgent.Contains("iPad", StringComparison.Ordinal) ? "iOS"
            : userAgent.Contains("Windows", StringComparison.Ordinal) ? "Windows"
            : userAgent.Contains("Macintosh", StringComparison.Ordinal)
              || userAgent.Contains("Mac OS", StringComparison.Ordinal) ? "macOS"
            : userAgent.Contains("Linux", StringComparison.Ordinal) ? "Linux"
            : "another device";

        return $"{browser} on {system}";
    }

    private static string Address(HttpContext context) =>
        context.Connection.RemoteIpAddress is { } address
            ? address.IsIPv4MappedToIPv6 ? address.MapToIPv4().ToString() : address.ToString()
            : "";

    private static long Now => DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();

    private static bool Fresh(ShareDevice device, long now) => device.ExpiresAt == 0 || device.ExpiresAt > now;

    private static int RetryAfter(ShareDevice device, long now) =>
        device.ExpiresAt == 0 ? 0 : (int)Math.Max(1, (device.ExpiresAt - now + 999) / 1000);

    private static ShareWebAccessPayload Allowed(string name, long expiresAt, bool hasPassword, int approval,
        int denial) =>
        new("allowed", name, expiresAt, null, hasPassword, null, null, approval, denial);

    private static Challenge ChallengeFor(string id)
    {
        var now = Now;
        if (Challenges.TryGetValue(id, out var existing) &&
            now - existing.CreatedAt < (long)ChallengeLifetime.TotalMilliseconds)
            return existing;

        var challenge = new Challenge(Convert.ToBase64String(RandomNumberGenerator.GetBytes(16)), now);
        Challenges[id] = challenge;
        return challenge;
    }

    /// <summary>Tells an open settings page that the device list changed.</summary>
    private static void DeviceChanged() =>
        Try.Run(() => WindowManager.Instance.Notify("share.devices.changed", new OkPayload()))
            .OnFailure(ex => Serilog.Log.Debug(ex, "Could not push the device list change"));

    private sealed record Challenge(string Nonce, long CreatedAt);
}
