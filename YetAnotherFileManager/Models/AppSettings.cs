namespace YetAnotherFileManager.Models;

/// <summary>The preferences the interface can change. Everything is on by default.</summary>
public sealed record AppSettings(bool SystemIcons, bool CustomFolderIcons)
{
    public static readonly AppSettings Default = new(true, true);
}
