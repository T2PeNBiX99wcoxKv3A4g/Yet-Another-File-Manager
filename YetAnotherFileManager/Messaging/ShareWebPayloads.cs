namespace YetAnotherFileManager.Messaging;

// The browser-facing share page is a small React app, so its data is JSON rather than server-
// rendered HTML. These shapes are source-generated like the rest of the app's JSON.

/// <summary>Body for <c>/api/config</c>: the bits the share page uses for its header and theme.</summary>
internal sealed record ShareWebConfigPayload(
    string App,
    string Device,
    string? Accent,
    string? Secondary,
    string Version,
    string Language);

/// <summary>One web-shared folder in the browser page's list.</summary>
internal sealed record ShareWebShare(string Id, string Name);

/// <summary>Body for <c>/api/shares</c>.</summary>
internal sealed record ShareWebSharesPayload(IReadOnlyList<ShareWebShare> Shares);

/// <summary>One row in a browser folder listing.</summary>
internal sealed record ShareWebEntry(string Name, bool IsDirectory, long Size, long Modified, string Path);

/// <summary>Body for <c>/api/browse</c>: one folder and its breadcrumb parent.</summary>
internal sealed record ShareWebListingPayload(
    string Id,
    string Name,
    string Path,
    string? Parent,
    IReadOnlyList<ShareWebEntry> Entries);

/// <summary>Body for <c>/api/upload</c>: how many files were written.</summary>
internal sealed record ShareWebUploadPayload(int Saved);

/// <summary>Body for a failed browser request.</summary>
internal sealed record ShareWebErrorPayload(string Error);
