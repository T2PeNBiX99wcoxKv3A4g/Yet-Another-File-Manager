using System.Collections.Concurrent;
using System.Net;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Http;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Localization;
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

    /// <summary>Wrong passwords allowed before the browser and its address are shut out.</summary>
    private const int PasswordAttempts = 5;
    private static readonly TimeSpan PasswordLockout = TimeSpan.FromMinutes(5);
    private static readonly ConcurrentDictionary<string, int> Failures = new(StringComparer.Ordinal);
    private static readonly ConcurrentDictionary<string, long> LockedUntil = new(StringComparer.Ordinal);

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

        if (await ShareDeviceStore.Instance.PruneAsync())
            DeviceChanged();

        var device = await ShareDeviceStore.Instance.TouchAsync(id, name, address);

        if (!Enabled(settings))
            return Allowed(name, 0, false, approval, denial);

        if (device.State == "allowed" && Fresh(device, now))
            return Allowed(name, device.ExpiresAt, false, approval, denial);

        if (device.State == "denied" && Fresh(device, now))
            return new("denied", name, device.ExpiresAt, RetryAfter(device, now),
                HasPassword, null, null, approval, denial, 0);

        // Too many wrong passwords shut the browser and its address out for a while, whatever the
        // device's own window says.
        var locked = LockoutSeconds(id, address);
        if (locked > 0)
            return new("denied", name, null, locked, HasPassword, null, null, approval,
                denial, 0);

        if (SharePassword.IsConfigured(SharePasswordStore.Instance.Current))
        {
            var secret = SharePasswordStore.Instance.Current;
            var challenge = ChallengeFor(id);
            return new("password", name, null, null, true, secret.Salt, challenge.Nonce, approval, denial,
                secret.Iterations);
        }

        // No password, so the desktop decides. The poll that first sees the device opens the
        // window; it is topmost and stays there until the user answers.
        if (Asking.TryAdd(id, 0))
            ShareAccessPrompt.Instance.Ask(id, name, address, approval);

        return new("pending", name, null, null, false, null, null, approval, denial, 0);
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

        var locked = LockoutSeconds(id, address);
        if (locked > 0)
            return new("denied", name, null, locked, HasPassword, null, null,
                ApprovalMinutes(settings), DenialSeconds(settings), 0);

        if (SharePassword.Verify(SharePasswordStore.Instance.Current, nonce, proof))
        {
            ClearFailures(id, address);
            await AllowAsync(id, name, address, false);
            Challenges.TryRemove(id, out _);
            // Keyed by its own text, so no identifier can ever reach the toast: the title says what
            // happened and the line under it names the browser and where it came from.
            NotificationService.Notify(
                Localization.Get("a_browser_was_allowed_to_use_a_web_share"), $"{name} · {address}");
        }
        else
        {
            RecordFailure(id, address);
            await DenyAsync(id, name, address, false);
            Challenges.TryRemove(id, out _);
            NotificationService.Notify(
                Localization.Get("a_browser_was_refused_a_web_share"), $"{name} · {address}");
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

        var (salt, hash, iterations) = SharePassword.Create(password);
        await SharePasswordStore.Instance.SetAsync(new SharePasswordSecret
        {
            Salt = salt,
            Hash = hash,
            Iterations = iterations
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

    /// <summary>
    ///     A readable label for the browser that asked: the phone, tablet or desktop its user agent
    ///     names - an Android model rather than just "Android" - and the browser with its version.
    /// </summary>
    public static string DeviceName(string? userAgent)
    {
        if (string.IsNullOrWhiteSpace(userAgent))
            return "Browser";

        var browser = userAgent.Contains("Edg/", StringComparison.Ordinal) ? "Edge"
            : userAgent.Contains("OPR/", StringComparison.Ordinal) ? "Opera"
            : userAgent.Contains("Firefox/", StringComparison.Ordinal) ? "Firefox"
            : userAgent.Contains("Chrome/", StringComparison.Ordinal) ? "Chrome"
            : userAgent.Contains("Safari/", StringComparison.Ordinal) ? "Safari"
            : "Browser";

        var version = MajorVersion(userAgent, browser switch
        {
            "Edge" => "Edg/",
            "Opera" => "OPR/",
            "Firefox" => "Firefox/",
            "Chrome" => "Chrome/",
            "Safari" => "Version/",
            _ => ""
        });

        var model = DeviceModel(userAgent);
        var system = OsVersion(userAgent);
        var browserLabel = version.Length > 0 ? $"{browser} {version}" : browser;
        var label = string.Join(" · ", new[] { model, system, browserLabel });

        return label;
    }

    /// <summary>The major version after a token such as "Chrome/", or an empty string.</summary>
    private static string MajorVersion(string userAgent, string token)
    {
        if (token.Length == 0)
            return "";

        var at = userAgent.IndexOf(token, StringComparison.Ordinal);
        if (at < 0)
            return "";

        var rest = userAgent[(at + token.Length)..];
        var end = rest.IndexOfAny(['.', ' ', ';', ')']);

        return end < 0 ? rest : rest[..end];
    }

    /// <summary>The system's own version, where the user agent spells it out, or an empty string.</summary>
    private static string OsVersion(string userAgent)
    {
        if (userAgent.Contains("Android", StringComparison.Ordinal))
            return Prefix("Android", Segment(userAgent, "Android "));

        if (userAgent.Contains("iPhone", StringComparison.Ordinal) ||
            userAgent.Contains("iPad", StringComparison.Ordinal))
            return Prefix("iOS", Segment(userAgent, "OS "));

        if (userAgent.Contains("CrOS", StringComparison.Ordinal))
            return "ChromeOS";

        if (userAgent.Contains("Macintosh", StringComparison.Ordinal))
            return Prefix("macOS", Segment(userAgent, "Mac OS X ").Replace('_', '.'));

        if (userAgent.Contains("Windows NT ", StringComparison.Ordinal))
            return Segment(userAgent, "Windows NT ") switch
            {
                "10.0" => "Windows 10/11",
                "6.3" => "Windows 8.1",
                "6.2" => "Windows 8",
                "6.1" => "Windows 7",
                _ => "Windows"
            };

        return userAgent.Contains("Linux", StringComparison.Ordinal) ? "Linux" : "";
    }

    /// <summary>A name and its version, or just the name when the user agent left the version out.</summary>
    private static string Prefix(string name, string version) =>
        version.Length > 0 ? $"{name} {version}" : name;

    /// <summary>The text after a token, up to the next separator: "Android 14;" gives "14".</summary>
    private static string Segment(string userAgent, string token)
    {
        var at = userAgent.IndexOf(token, StringComparison.Ordinal);

        if (at < 0)
            return "";

        var rest = userAgent[(at + token.Length)..];
        var end = rest.IndexOfAny([';', ')', ' ', ',']);
        var value = end < 0 ? rest : rest[..end];

        return value.Trim();
    }

    /// <summary>The phone, tablet or desktop the user agent names, or an empty string.</summary>
    private static string DeviceModel(string userAgent)
    {
        // An Android user agent names the model between the system version and "Build/", which is
        // the only place a phone tells us what it is.
        if (userAgent.Contains("Android", StringComparison.Ordinal))
        {
            var parts = userAgent.Split(';', StringSplitOptions.TrimEntries);
            var index = Array.FindIndex(parts, part => part.StartsWith("Android ", StringComparison.Ordinal));

            if (index >= 0 && index + 1 < parts.Length)
            {
                var model = parts[index + 1];
                var cut = model.IndexOf(" Build", StringComparison.Ordinal);
                if (cut > 0)
                    model = model[..cut];

                model = model.Trim();
                if (model.Length > 0 && model is not ("wv" or "K" or "Mobile"))
                    return model;
            }

            return "Android";
        }

        if (userAgent.Contains("iPhone", StringComparison.Ordinal))
            return "iPhone";

        if (userAgent.Contains("iPad", StringComparison.Ordinal))
            return "iPad";

        if (userAgent.Contains("Windows", StringComparison.Ordinal))
            return "Windows";

        if (userAgent.Contains("CrOS", StringComparison.Ordinal))
            return "ChromeOS";

        if (userAgent.Contains("Macintosh", StringComparison.Ordinal))
            return "macOS";

        return userAgent.Contains("Linux", StringComparison.Ordinal) ? "Linux" : "";
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
        new("allowed", name, expiresAt, null, hasPassword, null, null, approval, denial, 0);

    /// <summary>The keys one wrong password counts against: this browser and the address it came from.</summary>
    private static string[] AttemptKeys(string id, string address) =>
        address.Length > 0 ? [$"device:{id}", $"address:{address}"] : [$"device:{id}"];

    /// <summary>How long the browser still has to wait after too many wrong passwords.</summary>
    private static int LockoutSeconds(string id, string address)
    {
        var now = Now;
        var longest = 0L;

        foreach (var key in AttemptKeys(id, address))
            if (LockedUntil.TryGetValue(key, out var until) && until > now)
                longest = Math.Max(longest, until - now);

        return (int)Math.Ceiling(longest / 1000d);
    }

    /// <summary>Counts one wrong password, and shuts the browser and its address out once too many came.</summary>
    private static void RecordFailure(string id, string address)
    {
        var until = Now + (long)PasswordLockout.TotalMilliseconds;

        foreach (var key in AttemptKeys(id, address))
            if (Failures.AddOrUpdate(key, 1, (_, current) => current + 1) >= PasswordAttempts)
                LockedUntil[key] = until;
    }

    private static void ClearFailures(string id, string address)
    {
        foreach (var key in AttemptKeys(id, address))
        {
            Failures.TryRemove(key, out _);
            LockedUntil.TryRemove(key, out _);
        }
    }

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
    public static void DeviceChanged() =>
        Try.Run(() => WindowManager.Instance.Notify("share.devices.changed", new OkPayload()))
            .OnFailure(ex => Serilog.Log.Debug(ex, "Could not push the device list change"));

    private sealed record Challenge(string Nonce, long CreatedAt);
}
