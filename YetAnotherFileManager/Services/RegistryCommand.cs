namespace YetAnotherFileManager.Services;

/// <summary>Reads the executable from a command line stored in the registry.</summary>
internal static class RegistryCommand
{
    /// <summary>The executable path, with environment variables expanded, or null when there is none.</summary>
    public static string? Executable(string? command)
    {
        if (string.IsNullOrWhiteSpace(command))
            return null;

        var trimmed = command.Trim();

        if (trimmed.StartsWith('"'))
        {
            var closing = trimmed.IndexOf('"', 1);
            return closing > 1 ? Environment.ExpandEnvironmentVariables(trimmed[1..closing]) : null;
        }

        var space = trimmed.IndexOf(' ');
        return Environment.ExpandEnvironmentVariables(space > 0 ? trimmed[..space] : trimmed);
    }
}