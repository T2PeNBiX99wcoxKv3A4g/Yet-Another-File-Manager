using Org.BouncyCastle.Crypto.Parameters;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;

namespace YetAnotherFileManager.Security;

/// <summary>
///     This device's long-term share identity: a stable id and an Ed25519 key pair, kept beside the
///     settings. Peers pin the public key when they pair, and every handshake is signed with it.
/// </summary>
[Singleton]
internal partial class ShareIdentity
{
    private const string KeyFileName = "share-device.key";
    private const string IdFileName = "share-device.id";

    private ShareIdentity()
    {
        var directory = Constants.SettingsDirectory;
        var keyPath = Path.Combine(directory, KeyFileName);
        var idPath = Path.Combine(directory, IdFileName);

        var privateKey = Try.Run(() => ReadKey(keyPath)).GetOrNull();
        if (privateKey is null)
        {
            if (File.Exists(keyPath))
                Constants.Logger.Warning("The share device key at {Path} is unusable; generating a new one", keyPath);

            privateKey = ShareCrypto.RandomBytes(ShareCrypto.KeySize);
            Try.Run(() => File.WriteAllText(keyPath, ShareCrypto.ToBase64(privateKey)))
                .OnFailure(ex => Constants.Logger.Warning(ex, "Failed to save the share device key at {Path}", keyPath));
        }

        PrivateKey = privateKey;
        PublicKey = new Ed25519PrivateKeyParameters(privateKey, 0).GeneratePublicKey().GetEncoded();
        Id = ReadId(idPath);

        Constants.Logger.Information("Share identity {Id} ({Fingerprint})", Id, Fingerprint);
    }

    public string Id { get; }

    public byte[] PrivateKey { get; }

    public byte[] PublicKey { get; }

    public string PublicKeyBase64 => ShareCrypto.ToBase64(PublicKey);

    /// <summary>The name other devices show; the machine name is a sensible default.</summary>
    public string DeviceName => Environment.MachineName;

    public string Fingerprint => ShareCrypto.Fingerprint(PublicKey);

    private static byte[]? ReadKey(string path)
    {
        if (!File.Exists(path))
            return null;

        return Try.Run(() => ShareCrypto.FromBase64(File.ReadAllText(path)))
            .GetOrElse(ex =>
            {
                Constants.Logger.Warning(ex, "Failed to read the share device key at {Path}", path);
                return null;
            }) is { Length: ShareCrypto.KeySize } key
            ? key
            : null;
    }

    private string ReadId(string path)
    {
        if (File.Exists(path) &&
            Try.Run(() => File.ReadAllText(path).Trim()).GetOrNull() is { Length: > 0 } stored)
            return stored;

        var id = Guid.NewGuid().ToString("N");
        Try.Run(() => File.WriteAllText(path, id))
            .OnFailure(ex => Constants.Logger.Warning(ex, "Failed to save the share device id at {Path}", path));

        return id;
    }
}