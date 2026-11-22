using System.Security.Cryptography;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Digests;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     Hashes one file with the digests the properties page shows. One pass feeds every algorithm,
///     so a large file is still read only once; the platform's own implementations carry the SHA-2
///     family, and BouncyCastle supplies the rest.
/// </summary>
internal static class PathHasher
{
    public static async Task<PathHashPayload> HashAsync(string path)
    {
        try
        {
            await using var stream = new FileStream(path, FileMode.Open, FileAccess.Read,
                FileShare.ReadWrite, 1 << 20, FileOptions.Asynchronous | FileOptions.SequentialScan);

            (string Name, IncrementalHash Hash)[] managed =
            [
                ("MD5", IncrementalHash.CreateHash(HashAlgorithmName.MD5)),
                ("SHA-1", IncrementalHash.CreateHash(HashAlgorithmName.SHA1)),
                ("SHA-256", IncrementalHash.CreateHash(HashAlgorithmName.SHA256)),
                ("SHA-384", IncrementalHash.CreateHash(HashAlgorithmName.SHA384)),
                ("SHA-512", IncrementalHash.CreateHash(HashAlgorithmName.SHA512))
            ];

            (string Name, IDigest Digest)[] digests =
            [
                ("SHA-224", new Sha224Digest()),
                ("SHA3-256", new Sha3Digest(256)),
                ("SHA3-384", new Sha3Digest(384)),
                ("SHA3-512", new Sha3Digest(512)),
                ("BLAKE2b-256", new Blake2bDigest(256)),
                ("BLAKE2b-512", new Blake2bDigest(512)),
                ("BLAKE2s-256", new Blake2sDigest(256)),
                ("BLAKE3", new Blake3Digest()),
                ("RIPEMD-160", new RipeMD160Digest()),
                ("Whirlpool", new WhirlpoolDigest()),
                ("Streebog-256", new Gost3411_2012_256Digest()),
                ("Streebog-512", new Gost3411_2012_512Digest()),
                ("Tiger", new TigerDigest())
            ];

            var crc = uint.MaxValue;
            var buffer = new byte[1 << 20];
            int read;

            while ((read = await stream.ReadAsync(buffer)) > 0)
            {
                foreach (var (_, hash) in managed)
                    hash.AppendData(buffer, 0, read);

                foreach (var (_, digest) in digests)
                    digest.BlockUpdate(buffer, 0, read);

                crc = AppendCrc(crc, buffer, read);
            }

            var values = new List<PathHashValue>(managed.Length + digests.Length + 1);

            foreach (var (name, hash) in managed)
                values.Add(new(name, Hex(hash.GetHashAndReset())));

            foreach (var (name, digest) in digests)
            {
                var result = new byte[digest.GetDigestSize()];
                digest.DoFinal(result, 0);
                values.Add(new(name, Hex(result)));
            }

            values.Add(new("CRC32", (crc ^ uint.MaxValue).ToString("x8")));
            values.Sort((left, right) => string.Compare(left.Name, right.Name, StringComparison.OrdinalIgnoreCase));

            return new(values);
        }
        catch (Exception exception)
        {
            return new(null, exception.Message);
        }
    }

    private static string Hex(byte[] bytes) => Convert.ToHexString(bytes).ToLowerInvariant();

    /// <summary>The reflected CRC-32 table, built once.</summary>
    private static readonly uint[] CrcTable = BuildCrcTable();

    private static uint[] BuildCrcTable()
    {
        var table = new uint[256];

        for (uint index = 0; index < table.Length; index++)
        {
            var value = index;
            for (var bit = 0; bit < 8; bit++)
                value = (value & 1) != 0 ? 0xEDB88320u ^ (value >> 1) : value >> 1;

            table[index] = value;
        }

        return table;
    }

    private static uint AppendCrc(uint crc, byte[] buffer, int length)
    {
        for (var index = 0; index < length; index++)
            crc = CrcTable[(crc ^ buffer[index]) & 0xFF] ^ (crc >> 8);

        return crc;
    }
}
