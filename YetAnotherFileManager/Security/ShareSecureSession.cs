using System.Text.Json;
using System.Text.Json.Serialization.Metadata;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Security;

/// <summary>
///     An authenticated, encrypted stream between two paired devices. The handshake produced a fresh
///     X25519 secret, HKDF derived the session key, and every frame is a ChaCha20-Poly1305 message
///     bound to the handshake transcript.
/// </summary>
internal sealed class ShareSecureSession : IDisposable
{
    private readonly byte[] _associatedData;
    private readonly byte[] _key;
    private readonly IDisposable? _owner;
    private readonly Stream _stream;

    internal ShareSecureSession(Stream stream, byte[] key, byte[] associatedData, string peerDeviceId,
        bool isInitiator, IDisposable? owner = null)
    {
        _stream = stream;
        _key = key;
        _associatedData = associatedData;
        _owner = owner;
        PeerDeviceId = peerDeviceId;
        IsInitiator = isInitiator;
    }

    public string PeerDeviceId { get; }

    public bool IsInitiator { get; }

    /// <summary>Closes the socket that produced this session, when the session owns one.</summary>
    public void Dispose() => _owner?.Dispose();

    public async Task SendAsync(byte[] plaintext, CancellationToken token)
    {
        var nonce = ShareCrypto.RandomBytes(ShareCrypto.NonceSize);
        var ciphertext = ShareCrypto.Encrypt(_key, nonce, plaintext, _associatedData);

        await ShareFrames.WriteAsync(_stream,
            new(ShareProtocol.SecureData, ShareCrypto.ToBase64(nonce),
                ShareCrypto.ToBase64(ciphertext)),
            AppJsonContext.Default.ShareSecureDataMessage, token);
    }

    /// <summary>Reads and decrypts one frame; null means the peer closed the stream.</summary>
    public async Task<byte[]?> ReceiveAsync(CancellationToken token)
    {
        var frame = await ShareFrames.ReadFrameAsync(_stream, token);
        if (frame is null)
            return null;

        if (ShareFrames.ReadType(frame) != ShareProtocol.SecureData)
            throw new ShareSecurityException("Unexpected frame in an encrypted session.");

        var message = ShareFrames.Read(frame, AppJsonContext.Default.ShareSecureDataMessage)
                      ?? throw new ShareSecurityException("The encrypted frame could not be read.");
        var nonce = ShareCrypto.FromBase64(message.Nonce);
        var ciphertext = ShareCrypto.FromBase64(message.Ciphertext);

        if (nonce is not { Length: ShareCrypto.NonceSize } || ciphertext is null)
            throw new ShareSecurityException("The encrypted frame is malformed.");

        return ShareCrypto.TryDecrypt(_key, nonce, ciphertext, _associatedData)
               ?? throw new ShareSecurityException("The encrypted frame could not be decrypted.");
    }

    public async Task SendJsonAsync<T>(T payload, JsonTypeInfo<T> typeInfo, CancellationToken token)
    {
        var plaintext = JsonSerializer.SerializeToUtf8Bytes(payload, typeInfo);
        await SendAsync(plaintext, token);
    }

    public async Task<T?> ReceiveJsonAsync<T>(JsonTypeInfo<T> typeInfo, CancellationToken token) where T : class
    {
        var plaintext = await ReceiveAsync(token);
        return plaintext is null ? null : JsonSerializer.Deserialize(plaintext, typeInfo);
    }
}