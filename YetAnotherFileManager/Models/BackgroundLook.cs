namespace YetAnotherFileManager.Models;

/// <summary>
///     The blur, saturation and brightness the user tuned for one backdrop, kept per source so
///     switching wallpapers brings each one back the way it was left.
/// </summary>
public sealed record BackgroundLook(int Blur, int Saturation, int Brightness);
