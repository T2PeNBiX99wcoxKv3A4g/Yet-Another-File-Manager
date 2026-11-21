using Microsoft.Data.Sqlite;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The icon source an entry stores is either a small reference (<c>file:</c>, <c>icon:</c>) or a
///     data URL. A base64 image is kept as bytes in SQLite; the data URL is rebuilt only when the
///     interface asks for it. This avoids the 33% base64 overhead in every cached row.
/// </summary>
internal static class IconSourceCodec
{
    /// <summary>Splits a base64 data URL into its media type and bytes; null for every other source.</summary>
    public static (string Mime, byte[] Data)? Decode(string? source)
    {
        if (source is not { Length: > 5 } || !source.StartsWith("data:", StringComparison.OrdinalIgnoreCase))
            return null;

        var comma = source.IndexOf(',');
        if (comma < 0)
            return null;

        var meta = source.AsSpan(5, comma - 5);
        var semicolon = meta.IndexOf(';');
        var mime = (semicolon < 0 ? meta : meta[..semicolon]).ToString();

        if (mime.Length == 0)
            mime = "application/octet-stream";

        if (semicolon < 0 || !meta[(semicolon + 1)..].Contains("base64", StringComparison.OrdinalIgnoreCase))
            return null;

        try
        {
            return (mime, Convert.FromBase64String(source[(comma + 1)..]));
        }
        catch (FormatException)
        {
            return null;
        }
    }

    /// <summary>Rebuilds the data URL the web view expects from the stored columns.</summary>
    public static string? Read(SqliteDataReader reader, int sourceColumn, int mimeColumn, int dataColumn)
    {
        if (!reader.IsDBNull(dataColumn))
        {
            var mime = reader.IsDBNull(mimeColumn) ? "application/octet-stream" : reader.GetString(mimeColumn);
            return $"data:{mime};base64,{Convert.ToBase64String((byte[])reader.GetValue(dataColumn))}";
        }

        return reader.IsDBNull(sourceColumn) ? null : reader.GetString(sourceColumn);
    }
}
