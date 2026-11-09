namespace YetAnotherFileManager.Services;

/// <summary>Maps virtual archive paths to staging paths and writes staged edits back.</summary>
internal sealed partial class FileSystemService
{
    /// <summary>Maps a virtual archive entry to a writable per-archive staging directory.</summary>
    private static async Task<string> MapWorkspacePathAsync(string path, bool directory = false)
    {
        if (!Archives.TrySplit(path, out var archivePath, out _))
            return path;

        // The archive file itself remains a normal file unless the caller is treating it as the
        // virtual root directory (paste, drag-and-drop, or create-folder target).
        if (!directory && string.Equals(Path.GetFullPath(path), Path.GetFullPath(archivePath),
                StringComparison.OrdinalIgnoreCase))
            return path;

        return await Archives.WorkspacePathAsync(path) ?? path;
    }

    private static async Task<string> ResolveArchiveEntryAsync(string path)
    {
        if (Archives.TryGetWorkspacePath(path, out var staged) && File.Exists(staged))
            return staged;

        if (Archives.TrySplit(path, out _, out var inner) && inner.Length > 0)
            return await Task.Run(() => Archives.ExtractEntry(path));

        return path;
    }

    private static async Task<List<string>> MapWorkspacePathsAsync(IReadOnlyList<string> paths)
    {
        var mapped = new List<string>(paths.Count);
        foreach (var path in paths)
            mapped.Add(await MapWorkspacePathAsync(path));

        return mapped;
    }

    /// <summary>
    ///     Writes the staged archive back as soon as an edit finishes, so the archive on disk always
    ///     matches what the view shows and no separate "apply" step is needed.
    /// </summary>
    private static async Task ApplyArchiveChangesAsync(IReadOnlyList<string> paths)
    {
        var archives = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

        foreach (var path in paths)
            if (Archives.TryGetArchivePath(path, out var archive))
                archives.Add(archive);

        foreach (var archive in archives)
            await Task.Run(() =>
            {
                if (!Archives.ApplyChanges(archive, out var error))
                    Serilog.Log.Warning("Could not write the archive {Path}: {Error}", archive, error);
            });
    }
}
