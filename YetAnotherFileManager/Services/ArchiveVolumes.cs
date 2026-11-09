using System.Text.RegularExpressions;
using SevenZipExtractor;

namespace YetAnotherFileManager.Services;

/// <summary>
///     A split archive is one file cut into numbered parts. 7z.dll only reads the file it is handed,
///     so the parts are joined into one seekable stream and the archive is opened from that.
/// </summary>
internal sealed class ArchiveVolumes : IDisposable
{
    /// <summary>7-Zip names the parts <c>name.zip.001</c>, <c>.002</c> and so on.</summary>
    private static readonly Regex Volume = new(@"^(?<stem>.+)\.(?<number>\d{3})$", RegexOptions.IgnoreCase);

    private readonly Stream? _stream;

    private ArchiveVolumes(ArchiveFile file, Stream? stream)
    {
        File = file;
        _stream = stream;
    }

    /// <summary>The archive 7z.dll opened.</summary>
    public ArchiveFile File { get; }

    public void Dispose()
    {
        File.Dispose();
        _stream?.Dispose();
    }

    /// <summary>Opens an archive, joining the parts of a split one first.</summary>
    public static ArchiveVolumes Open(string path, string libraryPath)
    {
        var parts = PartsOf(path);

        if (parts.Count <= 1)
            return new ArchiveVolumes(new ArchiveFile(path, libraryPath), null);

        var stream = new JoinedStream(parts);
        return new ArchiveVolumes(new ArchiveFile(stream, FormatOf(parts[0]), libraryPath), stream);
    }

    /// <summary>Every existing part from the first one up, or just this file when it is not a split.</summary>
    private static List<string> PartsOf(string path)
    {
        var name = Volume.Match(Path.GetFileName(path));

        if (!name.Success)
            return [path];

        var directory = Path.GetDirectoryName(path) ?? "";
        var stem = name.Groups["stem"].Value;
        var parts = new List<string>();

        for (var number = 1; number <= 999; number++)
        {
            var part = Path.Combine(directory, $"{stem}.{number:000}");
            if (!System.IO.File.Exists(part))
                break;

            parts.Add(part);
        }

        return parts.Count > 0 ? parts : [path];
    }

    /// <summary>The format of the content, which a stream cannot tell the library by itself.</summary>
    private static SevenZipFormat? FormatOf(string part) =>
        Path.GetExtension(Path.GetFileNameWithoutExtension(part)).ToLowerInvariant() switch
        {
            ".zip" or ".zipx" => SevenZipFormat.Zip,
            ".7z" => SevenZipFormat.SevenZip,
            ".tar" => SevenZipFormat.Tar,
            _ => null,
        };

    /// <summary>One stream over the parts of a split archive, seekable across the boundaries.</summary>
    private sealed class JoinedStream : Stream
    {
        private readonly FileStream[] _parts;
        private readonly long[] _starts;
        private long _position;

        public JoinedStream(IReadOnlyList<string> paths)
        {
            _parts = new FileStream[paths.Count];
            _starts = new long[paths.Count];

            long start = 0;

            for (var index = 0; index < paths.Count; index++)
            {
                _starts[index] = start;
                _parts[index] = System.IO.File.OpenRead(paths[index]);
                start += _parts[index].Length;
            }

            Length = start;
        }

        public override bool CanRead => true;
        public override bool CanSeek => true;
        public override bool CanWrite => false;
        public override long Length { get; }

        public override long Position
        {
            get => _position;
            set => Seek(value, SeekOrigin.Begin);
        }

        public override int Read(byte[] buffer, int offset, int count) => Read(buffer.AsSpan(offset, count));

        public override int Read(Span<byte> buffer)
        {
            var total = 0;

            while (buffer.Length > 0 && _position < Length)
            {
                var index = IndexOf(_position);
                var part = _parts[index];
                var offset = _position - _starts[index];

                if (part.Position != offset)
                    part.Position = offset;

                var read = part.Read(buffer[..(int)Math.Min(buffer.Length, part.Length - offset)]);
                if (read <= 0)
                    break;

                buffer = buffer[read..];
                _position += read;
                total += read;
            }

            return total;
        }

        public override long Seek(long offset, SeekOrigin origin)
        {
            _position = Math.Clamp(origin switch
            {
                SeekOrigin.Current => _position + offset,
                SeekOrigin.End => Length + offset,
                _ => offset
            }, 0, Length);

            return _position;
        }

        public override void Flush()
        {
        }

        public override void SetLength(long value) => throw new NotSupportedException();

        public override void Write(byte[] buffer, int offset, int count) => throw new NotSupportedException();

        protected override void Dispose(bool disposing)
        {
            if (disposing)
                foreach (var part in _parts)
                    part.Dispose();

            base.Dispose(disposing);
        }

        /// <summary>The part that holds this position.</summary>
        private int IndexOf(long position)
        {
            var index = 0;

            while (index + 1 < _starts.Length && _starts[index + 1] <= position)
                index++;

            return index;
        }
    }
}
