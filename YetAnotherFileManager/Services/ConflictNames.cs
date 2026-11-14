using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The suffix put after a name that is already taken. The first duplicate becomes number one:
///     <c>Test (1).txt</c>, <c>Test_1.txt</c> or <c>Test.1.txt</c>, depending on the setting.
/// </summary>
internal static class ConflictNames
{
    public const string Default = "space_parentheses";

    /// <summary>The stored style, or the familiar Explorer one when the setting is unknown.</summary>
    public static string CurrentStyle()
    {
        var style = Try.Run(() => SettingsService.Instance.Current.ConflictNameStyle).GetOrNull();
        return style is "underscore" or "dot" ? style : Default;
    }

    /// <summary>"Test" and 1 become "Test (1)", "Test_1" or "Test.1".</summary>
    public static string Suffix(string baseName, int copy, string style) =>
        style switch
        {
            "underscore" => $"{baseName}_{copy}",
            "dot" => $"{baseName}.{copy}",
            _ => $"{baseName} ({copy})"
        };
}
