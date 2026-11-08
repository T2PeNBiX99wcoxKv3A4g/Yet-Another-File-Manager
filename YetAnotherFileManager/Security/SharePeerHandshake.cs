using System.Text;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Security;

/// <summary>
///     The initiating and accepting halves of the encrypted share session handshake. It only needs a
///     connected <see cref="Stream" />, so the same authentication is used for every transport.
/// </summary>
internal static class SharePeerHandshake
{
    public static async Task<ShareSecureSession> ConnectAsync(Stream stream, ShareIdentity identity,
        SharePeer peer, CancellationToken token, IDisposable? owner = null)
    {
        var peerKey = ShareCrypto.FromBase64(peer.PublicKey);
        if (peerKey is not { Length: ShareCrypto.KeySize })
            throw new ShareSecurityException("The peer has no usable public key.");

        var (ephemeralPrivate, ephemeralPublic) = ShareCrypto.GenerateEphemeralKeyPair();
        var nonce = ShareCrypto.RandomBytes(ShareCrypto.HandshakeNonceSize);

        var helloSignature = ShareCrypto.Sign(identity.PrivateKey, ShareCrypto.Transcript(
            "YafmShare.Session.Hello.v1", identity.PublicKey, Utf8(identity.Id), peerKey, Utf8(peer.Id),
            ephemeralPublic, nonce));

        await ShareFrames.WriteAsync(stream,
            new ShareSessionHelloMessage(ShareProtocol.SessionHello, identity.Id,
                ShareCrypto.ToBase64(ephemeralPublic), ShareCrypto.ToBase64(nonce),
                ShareCrypto.ToBase64(helloSignature)),
            AppJsonContext.Default.ShareSessionHelloMessage, token);

        var replyFrame = await ShareFrames.ReadFrameAsync(stream, token)
                         ?? throw new ShareSecurityException("The peer closed the handshake.");
        var replyType = ShareFrames.ReadType(replyFrame);

        if (replyType == ShareProtocol.Status)
        {
            var status = ShareFrames.Read(replyFrame, AppJsonContext.Default.ShareStatusMessage);
            throw new ShareSecurityException(status?.Error ?? "The peer refused the session.");
        }

        if (replyType != ShareProtocol.SessionReply)
            throw new ShareSecurityException("The peer sent an unexpected handshake message.");

        var reply = ShareFrames.Read(replyFrame, AppJsonContext.Default.ShareSessionReplyMessage)
                    ?? throw new ShareSecurityException("The handshake reply could not be read.");

        var peerEphemeral = ShareCrypto.FromBase64(reply.EphemeralKey);
        var peerNonce = ShareCrypto.FromBase64(reply.Nonce);
        var peerSignature = ShareCrypto.FromBase64(reply.Signature);

        if (peerEphemeral is not { Length: ShareCrypto.KeySize } ||
            peerNonce is not { Length: ShareCrypto.HandshakeNonceSize } || peerSignature is null)
            throw new ShareSecurityException("The handshake reply is malformed.");

        var expected = ShareCrypto.Transcript("YafmShare.Session.Reply.v1",
            peerKey, Utf8(peer.Id), identity.PublicKey, Utf8(identity.Id),
            ephemeralPublic, peerEphemeral, nonce, peerNonce);

        if (!ShareCrypto.Verify(peerKey, expected, peerSignature))
            throw new ShareSecurityException("The peer could not prove its identity.");

        var shared = ShareCrypto.SharedSecret(ephemeralPrivate, peerEphemeral);
        var key = ShareCrypto.DeriveKey(shared, [.. nonce, .. peerNonce], "YafmShare.Session.v1");
        var associatedData = ShareCrypto.Transcript("YafmShare.Session.Data.v1",
            ephemeralPublic, peerEphemeral, nonce, peerNonce);

        return new(stream, key, associatedData, peer.Id, true, owner);
    }

    public static async Task<ShareSecureSession> AcceptAsync(Stream stream, ShareIdentity identity,
        Func<string, SharePeer?> findPeer, byte[] helloFrame, CancellationToken token, IDisposable? owner = null)
    {
        if (ShareFrames.ReadType(helloFrame) != ShareProtocol.SessionHello)
            throw new ShareSecurityException("The peer did not start an encrypted handshake.");

        var hello = ShareFrames.Read(helloFrame, AppJsonContext.Default.ShareSessionHelloMessage)
                    ?? throw new ShareSecurityException("The handshake could not be read.");

        var peer = findPeer(hello.DeviceId)
                   ?? throw new ShareSecurityException("The device is not paired.");
        var peerKey = ShareCrypto.FromBase64(peer.PublicKey);
        var ephemeral = ShareCrypto.FromBase64(hello.EphemeralKey);
        var nonce = ShareCrypto.FromBase64(hello.Nonce);
        var signature = ShareCrypto.FromBase64(hello.Signature);

        if (peerKey is not { Length: ShareCrypto.KeySize } ||
            ephemeral is not { Length: ShareCrypto.KeySize } ||
            nonce is not { Length: ShareCrypto.HandshakeNonceSize } || signature is null)
            throw new ShareSecurityException("The handshake is malformed.");

        var expected = ShareCrypto.Transcript("YafmShare.Session.Hello.v1",
            peerKey, Utf8(peer.Id), identity.PublicKey, Utf8(identity.Id), ephemeral, nonce);

        if (!ShareCrypto.Verify(peerKey, expected, signature))
            throw new ShareSecurityException("The peer could not prove its identity.");

        var (replyPrivate, replyPublic) = ShareCrypto.GenerateEphemeralKeyPair();
        var replyNonce = ShareCrypto.RandomBytes(ShareCrypto.HandshakeNonceSize);

        var replySignature = ShareCrypto.Sign(identity.PrivateKey, ShareCrypto.Transcript(
            "YafmShare.Session.Reply.v1", identity.PublicKey, Utf8(identity.Id), peerKey, Utf8(peer.Id),
            ephemeral, replyPublic, nonce, replyNonce));

        await ShareFrames.WriteAsync(stream,
            new ShareSessionReplyMessage(ShareProtocol.SessionReply, ShareCrypto.ToBase64(replyPublic),
                ShareCrypto.ToBase64(replyNonce), ShareCrypto.ToBase64(replySignature)),
            AppJsonContext.Default.ShareSessionReplyMessage, token);

        var shared = ShareCrypto.SharedSecret(replyPrivate, ephemeral);
        var key = ShareCrypto.DeriveKey(shared, [.. nonce, .. replyNonce], "YafmShare.Session.v1");
        var associatedData = ShareCrypto.Transcript("YafmShare.Session.Data.v1",
            ephemeral, replyPublic, nonce, replyNonce);

        return new(stream, key, associatedData, peer.Id, false, owner);
    }

    private static byte[] Utf8(string value) => Encoding.UTF8.GetBytes(value);
}
