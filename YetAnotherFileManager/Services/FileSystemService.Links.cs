using System.Runtime.Versioning;
using PhotinoNetUtils.Localization;
using YetAnotherFileManager.Interop;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>The Open with list and the link verbs, kept away from the general listing handlers.</summary>
internal partial class FileSystemService
{
    [SupportedOSPlatform("windows")]
    private static Task<OpenWithProgramsPayload> ReadOpenWithAsync(string path) =>
        StaThread.RunAsync(() => AssociatedPrograms.Read(path));

    [SupportedOSPlatform("windows")]
    private static Task<bool> OpenWithProgramAsync(string filePath, string programPath) =>
        StaThread.RunAsync(() => AssociatedPrograms.Open(filePath, programPath));

    /// <summary>
    ///     Creates a link normally and asks for elevation only when Windows says it is required.
    ///     Linux uses its own symbolic and hard link calls, so the same menu works there.
    /// </summary>
    private static async Task<LinkPayload> CreateLinkAsync(LinkRequest? request)
    {
        if (request is null || request.Source.Length == 0 || request.Link.Length == 0)
            return new(false, null, Localization.Get("no_link_was_given"));

        var isDirectory = Directory.Exists(request.Source);

        if (!isDirectory && !File.Exists(request.Source))
            return new(false, null, Localization.Get("the_source_no_longer_exists"));

        if (request.Kind is LinkCopy.HardCopy or LinkCopy.SymbolicCopy or LinkCopy.SmartCopy
            or LinkCopy.SmartMirror or LinkCopy.MultiVersionSmartCopy)
        {
            if (!isDirectory)
                return new(false, null, Localization.Get("a_link_copy_needs_a_folder_source"));

            var copied = await Task.Run(() => LinkCopy.Create(request.Kind, request.Source, request.Link));
            return copied.Ok
                ? new(true, request.Link)
                : new LinkPayload(false, null, copied.Error);
        }

        var error = request.Kind switch
        {
            FileLinkCreation.Hard when isDirectory => "A hard link can only point at a file.",
            FileLinkCreation.Junction when !isDirectory => "A junction can only point at a folder.",
            FileLinkCreation.SymbolicFile when isDirectory => "A file link cannot point at a folder.",
            FileLinkCreation.SymbolicFolder when !isDirectory => "A folder link cannot point at a file.",
            _ => null
        };

        if (error is not null)
            return new(false, null, error);

        var sourceToWrite = request.Source;
        if (request.Kind is FileLinkCreation.SymbolicFile or FileLinkCreation.SymbolicFolder
            && SettingsService.Instance.Current.UsesRelativeLinks)
        {
            var linkDirectory = Path.GetDirectoryName(Path.GetFullPath(request.Link));
            if (linkDirectory is { Length: > 0 })
                sourceToWrite = Path.GetRelativePath(linkDirectory, Path.GetFullPath(request.Source));
        }

        var result = await Task.Run(() => FileLinkCreation.Create(request.Kind, sourceToWrite, request.Link));
        if (result.Ok)
            return new(true, request.Link);

        var symbolic = request.Kind is FileLinkCreation.SymbolicFile or FileLinkCreation.SymbolicFolder;
        var needsElevation = result.ErrorCode is FileLinkCreation.ErrorAccessDenied
            or FileLinkCreation.ErrorPrivilegeNotHeld;

        if (symbolic && needsElevation
                     && await RunElevatedAsync(Constants.CreateLinkArgument, request.Kind, sourceToWrite, request.Link))
            return new(true, request.Link);

        return new(false, null, result.Error);
    }
}