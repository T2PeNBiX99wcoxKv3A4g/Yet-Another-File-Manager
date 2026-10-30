using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.Json.Serialization.Metadata;
using PhotinoNetUtils.Messaging;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Messaging;

/// <summary>
///     Source-generated serializer context. The Release build is trimmed, which turns off
///     reflection-based serialization, so every shape that crosses the native bridge or lands on
///     disk must be registered here.
/// </summary>
[JsonSourceGenerationOptions(
    PropertyNamingPolicy = JsonKnownNamingPolicy.CamelCase,
    PropertyNameCaseInsensitive = true,
    NumberHandling = JsonNumberHandling.AllowReadingFromString,
    DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
    ReadCommentHandling = JsonCommentHandling.Skip,
    AllowTrailingCommas = true)]
[JsonSerializable(typeof(NativeRequest))]
[JsonSerializable(typeof(NativeResponse))]
[JsonSerializable(typeof(NativeEvent))]
[JsonSerializable(typeof(OkPayload))]
[JsonSerializable(typeof(MemoryPayload))]
[JsonSerializable(typeof(SchemeRequest))]
[JsonSerializable(typeof(SchemePayload))]
[JsonSerializable(typeof(AppInfoPayload))]
[JsonSerializable(typeof(FsListRequest))]
[JsonSerializable(typeof(FsListPayload))]
[JsonSerializable(typeof(FileEntry))]
[JsonSerializable(typeof(List<FileEntry>))]
[JsonSerializable(typeof(PlaceEntry))]
[JsonSerializable(typeof(List<PlaceEntry>))]
[JsonSerializable(typeof(FsPlacesPayload))]
[JsonSerializable(typeof(DriveEntry))]
[JsonSerializable(typeof(List<DriveEntry>))]
[JsonSerializable(typeof(FsDrivesPayload))]
[JsonSerializable(typeof(FsRecyclePayload))]
[JsonSerializable(typeof(GalleryEntry))]
[JsonSerializable(typeof(List<GalleryEntry>))]
[JsonSerializable(typeof(FsGalleryPayload))]
[JsonSerializable(typeof(GalleryRequest))]
[JsonSerializable(typeof(ThumbnailRequest))]
[JsonSerializable(typeof(RecentEntry))]
[JsonSerializable(typeof(List<RecentEntry>))]
[JsonSerializable(typeof(FsRecentPayload))]
[JsonSerializable(typeof(PlacesRequest))]
[JsonSerializable(typeof(PlaceRenameRequest))]
[JsonSerializable(typeof(FsChangedPayload))]
[JsonSerializable(typeof(AdminOrphansPayload))]
[JsonSerializable(typeof(RecycleEntry))]
[JsonSerializable(typeof(List<RecycleEntry>))]
[JsonSerializable(typeof(FsVisibilityPayload))]
[JsonSerializable(typeof(IconRequest))]
[JsonSerializable(typeof(IconPayload))]
[JsonSerializable(typeof(RecycleRequest))]
[JsonSerializable(typeof(RecycleListRequest))]
[JsonSerializable(typeof(IconOverrideRequest))]
[JsonSerializable(typeof(FsSizesPayload))]
[JsonSerializable(typeof(PathPayload))]
[JsonSerializable(typeof(Dictionary<string, long>))]
[JsonSerializable(typeof(Dictionary<string, string>))]
[JsonSerializable(typeof(List<string>))]
[JsonSerializable(typeof(AppSettings))]
[JsonSerializable(typeof(NavigatePayload))]
[JsonSerializable(typeof(WindowStatePayload))]
[JsonSerializable(typeof(WindowResizeRequest))]
internal sealed partial class AppJsonContext : JsonSerializerContext;
