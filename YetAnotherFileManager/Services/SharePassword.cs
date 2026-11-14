using System.Security.Cryptography;
using System.Text;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The optional password a browser can use instead of waiting for the desktop approval.
/// </summary>
/// <remarks>
///     The password itself is never stored or sent. The share page derives
///     <c>SHA-256(salt || password)</c>, uses it as an HMAC key over a one-time nonce, and sends only
///     the proof. A passive listener on the local network therefore cannot read the password. An
///     active man-in-the-middle can still relay the proof; only TLS would prevent that, which a
///     plain LAN share cannot promise.
/// </remarks>
internal static class SharePassword
{
    public static bool IsConfigured(SharePasswordSecret? secret) =>
        secret is { Salt.Length: > 0, Hash.Length: > 0 };

    /// <summary>A fresh salt and the key the browser will derive from the password.</summary>
    public static (string Salt, string Hash) Create(string password)
    {
        var salt = RandomNumberGenerator.GetBytes(16);
        return (Convert.ToBase64String(salt), Convert.ToBase64String(Key(password, salt)));
    }

    /// <summary>Whether the browser's HMAC over the nonce matches the stored key.</summary>
    public static bool Verify(SharePasswordSecret? secret, string? nonceBase64, string? proofBase64)
    {
        if (!IsConfigured(secret) || nonceBase64 is not { Length: > 0 } || proofBase64 is not { Length: > 0 })
            return false;

        return Try.Run(() =>
        {
            var key = Convert.FromBase64String(secret!.Hash);
            var nonce = Convert.FromBase64String(nonceBase64);
            var proof = Convert.FromBase64String(proofBase64);
            var expected = HMACSHA256.HashData(key, nonce);
            return CryptographicOperations.FixedTimeEquals(expected, proof);
        }).GetOrElse(_ => false);
    }

    /// <summary>SHA-256 over the salt followed by the password's UTF-8 bytes.</summary>
    private static byte[] Key(string password, byte[] salt)
    {
        var bytes = Encoding.UTF8.GetBytes(password);
        var buffer = new byte[salt.Length + bytes.Length];
        salt.CopyTo(buffer, 0);
        bytes.CopyTo(buffer, salt.Length);
        return SHA256.HashData(buffer);
    }
}
