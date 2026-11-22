using System.Security.Cryptography;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Hashes one file with the three digests the properties page shows. One pass feeds every
///     algorithm, so a large file is still read only once.
/// </summary>
internal static class PathHasher
{
    public static async Task<PathHashPayload> HashAsync(string path)
    {
        try
        {
            await using var stream = new FileStream(path, FileMode.Open, FileAccess.Read,
                FileShare.ReadWrite, 1 << 20, FileOptions.Asynchronous | FileOptions.SequentialScan);

            using var md5 = IncrementalHash.CreateHash(HashAlgorithmName.MD5);
            using var sha256 = IncrementalHash.CreateHash(HashAlgorithmName.SHA256);
            using var sha512 = IncrementalHash.CreateHash(HashAlgorithmName.SHA512);

            var buffer = new byte[1 << 20];
            int read;

            while ((read = await stream.ReadAsync(buffer)) > 0)
            {
                md5.AppendData(buffer, 0, read);
                sha256.AppendData(buffer, 0, read);
                sha512.AppendData(buffer, 0, read);
            }

            return new(Hex(md5), Hex(sha256), Hex(sha512));
        }
        catch (Exception exception)
        {
            return new(null, null, null, exception.Message);
        }
    }

    private static string Hex(IncrementalHash hash) =>
        Convert.ToHexString(hash.GetHashAndReset()).ToLowerInvariant();
}
