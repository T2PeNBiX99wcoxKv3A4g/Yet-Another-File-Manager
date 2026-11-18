using System.Security.Cryptography;
using System.Text;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The optional password a browser can use instead of waiting for the desktop approval.
/// </summary>
/// <remarks>
///     The password itself is never stored or sent. The share page derives
///     <c>PBKDF2-SHA256(salt, password, iterations)</c>, uses it as an HMAC key over a one-time
///     nonce, and sends only the proof. A passive listener on the local network therefore cannot read
///     the password, and the stretching makes guessing one from a captured proof expensive. An active
///     man-in-the-middle can still relay the proof; only TLS would prevent that, which a plain LAN
///     share cannot promise.
/// </remarks>
internal static class SharePassword
{
    /// <summary>The work a new password is stretched with; the page runs the same count.</summary>
    public const int DefaultIterations = 120_000;

    public static bool IsConfigured(SharePasswordSecret? secret) =>
        secret is { Salt.Length: > 0, Hash.Length: > 0 };

    /// <summary>A fresh salt and the key the browser will derive from the password.</summary>
    public static (string Salt, string Hash, int Iterations) Create(string password)
    {
        var salt = RandomNumberGenerator.GetBytes(16);
        return (Convert.ToBase64String(salt), Convert.ToBase64String(Derive(password, salt, DefaultIterations)),
            DefaultIterations);
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

    /// <summary>
    ///     PBKDF2-SHA256 over the password. A secret stored before the stretching was a single
    ///     SHA-256 over the salt and the password, and keeps verifying until the password is set again.
    /// </summary>
    private static byte[] Derive(string password, byte[] salt, int iterations)
    {
        var bytes = Encoding.UTF8.GetBytes(password);

        if (iterations > 0)
            return Rfc2898DeriveBytes.Pbkdf2(bytes, salt, iterations, HashAlgorithmName.SHA256, 32);

        var buffer = new byte[salt.Length + bytes.Length];
        salt.CopyTo(buffer, 0);
        bytes.CopyTo(buffer, salt.Length);
        return SHA256.HashData(buffer);
    }
}
