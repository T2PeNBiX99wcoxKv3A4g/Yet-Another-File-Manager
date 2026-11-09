using System.Text;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Security;

/// <summary>
///     Both sides prove ownership of their Ed25519 key and derive a short code from the same
///     transcript. The local user compares the code before accepting; public keys are pinned after
///     that, so a later impersonation fails.
/// </summary>
internal static class SharePairingHandshake
{
    public static async Task<SharePeer> InitiateAsync(Stream stream, ShareIdentity identity,
        string localDeviceName, int localPort, string host,
        Func<string, SharePeer, Task> onChallenge, CancellationToken token)
    {
        var nonce = ShareCrypto.RandomBytes(ShareCrypto.HandshakeNonceSize);
        var requestSignature = ShareCrypto.Sign(identity.PrivateKey, ShareCrypto.Transcript(
            "YafmShare.Pair.Request.v1", identity.PublicKey, Utf8(identity.Id), nonce));

        await ShareFrames.WriteAsync(stream,
            new(ShareProtocol.PairRequest, identity.Id, localDeviceName, localPort,
                identity.PublicKeyBase64, ShareCrypto.ToBase64(nonce), ShareCrypto.ToBase64(requestSignature)),
            AppJsonContext.Default.SharePairRequestMessage, token);

        var replyFrame = await ShareFrames.ReadFrameAsync(stream, token)
                         ?? throw new ShareSecurityException("The peer closed the pairing.");
        var replyType = ShareFrames.ReadType(replyFrame);

        if (replyType == ShareProtocol.Status)
        {
            var status = ShareFrames.Read(replyFrame, AppJsonContext.Default.ShareStatusMessage);
            throw new ShareSecurityException(status?.Error ?? "The peer refused the pairing.");
        }

        if (replyType != ShareProtocol.PairChallenge)
            throw new ShareSecurityException("The peer sent an unexpected pairing message.");

        var challenge = ShareFrames.Read(replyFrame, AppJsonContext.Default.SharePairChallengeMessage)
                        ?? throw new ShareSecurityException("The pairing challenge could not be read.");

        var peerKey = ShareCrypto.FromBase64(challenge.PublicKey);
        if (peerKey is not { Length: ShareCrypto.KeySize })
            throw new ShareSecurityException("The peer has no usable public key.");

        var transcript = ShareCrypto.Transcript("YafmShare.Pair.v1",
            identity.PublicKey, Utf8(identity.Id), peerKey, Utf8(challenge.DeviceId), nonce);

        var peer = new SharePeer
        {
            Id = challenge.DeviceId,
            Name = challenge.DeviceName,
            Host = host,
            Port = challenge.Port,
            PublicKey = challenge.PublicKey
        };

        await onChallenge(ShareCrypto.PairingCode(transcript), peer);

        var decisionFrame = await ShareFrames.ReadFrameAsync(stream, token)
                            ?? throw new ShareSecurityException("The peer closed the pairing.");

        switch (ShareFrames.ReadType(decisionFrame))
        {
            case ShareProtocol.PairReject:
                var reject = ShareFrames.Read(decisionFrame, AppJsonContext.Default.SharePairRejectMessage);
                throw new ShareSecurityException(reject?.Reason ?? "The pairing was rejected.");

            case ShareProtocol.Status:
                var status = ShareFrames.Read(decisionFrame, AppJsonContext.Default.ShareStatusMessage);
                throw new ShareSecurityException(status?.Error ?? "The pairing failed.");

            case ShareProtocol.PairAccept:
            {
                var accept = ShareFrames.Read(decisionFrame, AppJsonContext.Default.SharePairAcceptMessage)
                             ?? throw new ShareSecurityException("The pairing answer could not be read.");
                var signature = ShareCrypto.FromBase64(accept.Signature);
                var expected = ShareCrypto.Transcript("YafmShare.Pair.Accept.v1", transcript);

                if (signature is null || !ShareCrypto.Verify(peerKey, expected, signature))
                    throw new ShareSecurityException("The peer could not confirm the pairing.");

                return peer;
            }

            default:
                throw new ShareSecurityException("The peer sent an unexpected pairing message.");
        }
    }

    public static async Task<SharePeer?> AcceptAsync(Stream stream, ShareIdentity identity,
        string localDeviceName, int localPort, string peerHost, byte[] requestFrame,
        Func<SharePairingPrompt, CancellationToken, Task<bool>> approve, CancellationToken token)
    {
        if (ShareFrames.ReadType(requestFrame) != ShareProtocol.PairRequest)
            throw new ShareSecurityException("The peer did not send a pairing request.");

        var request = ShareFrames.Read(requestFrame, AppJsonContext.Default.SharePairRequestMessage)
                      ?? throw new ShareSecurityException("The pairing request could not be read.");

        var peerKey = ShareCrypto.FromBase64(request.PublicKey);
        var nonce = ShareCrypto.FromBase64(request.Nonce);
        var signature = ShareCrypto.FromBase64(request.Signature);

        if (peerKey is not { Length: ShareCrypto.KeySize } ||
            nonce is not { Length: ShareCrypto.HandshakeNonceSize } || signature is null)
        {
            await WriteStatusAsync(stream, false, "The pairing request is malformed.", token);
            return null;
        }

        var requestTranscript = ShareCrypto.Transcript("YafmShare.Pair.Request.v1",
            peerKey, Utf8(request.DeviceId), nonce);

        if (!ShareCrypto.Verify(peerKey, requestTranscript, signature))
        {
            await WriteStatusAsync(stream, false, "The peer could not prove its identity.", token);
            return null;
        }

        var transcript = ShareCrypto.Transcript("YafmShare.Pair.v1",
            peerKey, Utf8(request.DeviceId), identity.PublicKey, Utf8(identity.Id), nonce);

        await ShareFrames.WriteAsync(stream,
            new(ShareProtocol.PairChallenge, identity.Id, localDeviceName, localPort,
                identity.PublicKeyBase64),
            AppJsonContext.Default.SharePairChallengeMessage, token);

        var prompt = new SharePairingPrompt(request.DeviceId, request.DeviceName, request.PublicKey,
            ShareCrypto.PairingCode(transcript));

        if (!await approve(prompt, token))
        {
            await ShareFrames.WriteAsync(stream,
                new(ShareProtocol.PairReject, "The pairing was rejected."),
                AppJsonContext.Default.SharePairRejectMessage, token);
            return null;
        }

        var accept = ShareCrypto.Sign(identity.PrivateKey,
            ShareCrypto.Transcript("YafmShare.Pair.Accept.v1", transcript));

        await ShareFrames.WriteAsync(stream,
            new(ShareProtocol.PairAccept, ShareCrypto.ToBase64(accept)),
            AppJsonContext.Default.SharePairAcceptMessage, token);

        return new()
        {
            Id = request.DeviceId,
            Name = request.DeviceName,
            Host = peerHost,
            Port = request.Port,
            PublicKey = request.PublicKey
        };
    }

    private static Task WriteStatusAsync(Stream stream, bool ok, string? error, CancellationToken token) =>
        ShareFrames.WriteAsync(stream, new(ShareProtocol.Status, ok, error),
            AppJsonContext.Default.ShareStatusMessage, token);

    private static byte[] Utf8(string value) => Encoding.UTF8.GetBytes(value);
}