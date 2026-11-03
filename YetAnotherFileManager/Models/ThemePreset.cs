namespace YetAnotherFileManager.Models;

/// <summary>
///     A colour pair the user saved from the settings page, so their own palettes sit beside the
///     built-in ones. The name is free text and is never translated.
/// </summary>
public sealed record ThemePreset(string Name, string Accent, string Secondary);
