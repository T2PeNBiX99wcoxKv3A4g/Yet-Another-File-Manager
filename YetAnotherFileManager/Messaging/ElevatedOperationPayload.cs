namespace YetAnotherFileManager.Messaging;

/// <summary>
///     One file operation handed to an elevated copy of the app. The interface reaches a protected
///     folder with its own services instead of the shell, so the work keeps the app's conflict
///     naming, recycle bin records and speed.
/// </summary>
/// <param name="Kind">copy, delete, rename, newFolder, newFile or writeFile.</param>
/// <param name="Paths">Sources for copy; the entry for rename and delete; the temporary content for writeFile.</param>
/// <param name="Target">Destination folder for copy, new items and writeFile.</param>
/// <param name="Name">New name for rename and writeFile.</param>
/// <param name="Extension">Extension for newFile, with or without the dot.</param>
internal sealed record ElevatedOperationRequest(
    string Kind,
    string[] Paths,
    string? Target = null,
    string? Name = null,
    string? Extension = null,
    bool Move = false,
    bool Permanent = false,
    bool CaseSensitive = false,
    int? CodePage = null,
    string? Password = null,
    string? ProgressPath = null);

/// <summary>What the elevated copy managed to do, as the waiting window sees it.</summary>
internal sealed record ElevatedOperationResult(bool Ok, string? Error, string[] Created, string? Path);

/// <summary>The running task the elevated copy is on, so the window's status row can follow it.</summary>
internal sealed record ElevatedOperationProgress(int Done, int Total, long BytesDone, long BytesTotal, string? Label);
