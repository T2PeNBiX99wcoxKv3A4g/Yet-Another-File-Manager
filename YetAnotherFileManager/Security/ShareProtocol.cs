using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Security;

/// <summary>
///     The wire contract for share discovery, pairing and encrypted sessions. A frame is a 4-byte
///     big-endian length followed by UTF-8 JSON whose first field says which message it is.
/// </summary>
internal static class ShareProtocol
{
    /// <summary>Upper bound for one control frame (a browse listing with many rows still fits).</summary>
    public const int MaxFrame = 96 * 1024 * 1024;

    /// <summary>TCP port the encrypted share listener uses.</summary>
    public const int SyncPort = 45_701;

    /// <summary>UDP port used for local-network discovery.</summary>
    public const int DiscoveryPort = 45_700;

    /// <summary>Raw bytes per file chunk; base64 keeps one frame comfortably below the limit.</summary>
    public const int FileChunkBytes = 256 * 1024;

    public const string Discover = "discover";
    public const string Announce = "announce";

    public const string PairRequest = "pair.request";
    public const string PairChallenge = "pair.challenge";
    public const string PairAccept = "pair.accept";
    public const string PairReject = "pair.reject";

    public const string SessionHello = "session.hello";
    public const string SessionReply = "session.reply";
    public const string SecureData = "secure.data";
    public const string Status = "status";

    public const string CatalogRequest = "share.catalog.request";
    public const string Catalog = "share.catalog";
    public const string BrowseRequest = "share.browse.request";
    public const string Browse = "share.browse";
    public const string FileRequest = "share.file.request";
    public const string FileChunk = "share.file.chunk";
    public const string FileError = "share.file.error";

    /// <summary>How long a pairing request waits for the local user to confirm it.</summary>
    public static readonly TimeSpan PairTimeout = TimeSpan.FromMinutes(2);

    /// <summary>How long one connection may take before it is abandoned.</summary>
    public static readonly TimeSpan ConnectionTimeout = TimeSpan.FromSeconds(20);
}

/// <summary>A device's reply to a discovery query, and the identity a peer pins when it pairs.</summary>
internal sealed record ShareDiscoveryMessage(
    string Type,
    string DeviceId,
    string DeviceName,
    int Port,
    string PublicKey);

internal sealed record SharePairRequestMessage(
    string Type,
    string DeviceId,
    string DeviceName,
    int Port,
    string PublicKey,
    string Nonce,
    string Signature);

internal sealed record SharePairChallengeMessage(
    string Type,
    string DeviceId,
    string DeviceName,
    int Port,
    string PublicKey);

internal sealed record SharePairAcceptMessage(string Type, string Signature);

internal sealed record SharePairRejectMessage(string Type, string Reason);

/// <summary>The pairing details the local user confirms, including the code the other side shows.</summary>
internal sealed record SharePairingPrompt(string DeviceId, string DeviceName, string PublicKey, string Code);

internal sealed record ShareSessionHelloMessage(
    string Type,
    string DeviceId,
    string EphemeralKey,
    string Nonce,
    string Signature);

internal sealed record ShareSessionReplyMessage(string Type, string EphemeralKey, string Nonce, string Signature);

internal sealed record ShareSecureDataMessage(string Type, string Nonce, string Ciphertext);

internal sealed record ShareStatusMessage(string Type, bool Ok, string? Error);

internal sealed record ShareCatalogMessage(string Type, string DeviceName, ShareRemoteEntry[] Shares);

internal sealed record ShareBrowseRequestMessage(string Type, string ShareId, string Path);

internal sealed record ShareBrowseMessage(
    string Type,
    string ShareId,
    string Path,
    string? Parent,
    FileEntry[] Entries);

internal sealed record ShareFileRequestMessage(string Type, string ShareId, string Path, long Offset, int Length);

internal sealed record ShareFileChunkMessage(string Type, long Offset, long Total, string Data);

internal sealed record ShareFileErrorMessage(string Type, string Error);

/// <summary>A peer sent something that did not authenticate or did not follow the protocol.</summary>
internal sealed class ShareSecurityException(string message) : Exception(message);