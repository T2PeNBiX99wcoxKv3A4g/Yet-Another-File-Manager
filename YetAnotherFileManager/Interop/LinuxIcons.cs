using System.Collections.Concurrent;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using PhotinoNetUtils.Extensions;
using PhotinoNetUtils.Utils;
using Serilog;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     The icon a KDE icon theme would draw for a file, read straight from the theme directories.
///     GIO supplies the themed icon names for the MIME type; the theme's <c>Inherits</c> chain is
///     followed, so a sparse theme still falls back to Breeze or hicolor for the types it lacks.
/// </summary>
[SupportedOSPlatform("linux")]
internal static partial class LinuxIcons
{
    /// <summary>The resolved theme and every directory that may hold one of its icons.</summary>
    private static readonly Lazy<IReadOnlyList<string>> ThemeDirectories = new(LoadThemeDirectories);

    /// <summary>Icon files per theme directory, built once and shared by every request.</summary>
    private static readonly ConcurrentDictionary<string, Dictionary<string, List<string>>> Indexes =
        new(StringComparer.Ordinal);

    /// <summary>Resolved data URLs, keyed by folder or file type; a listing asks for the same few.</summary>
    private static readonly ConcurrentDictionary<string, string?> Cache = new(StringComparer.Ordinal);

    /// <summary>The PNG or SVG for a path as a data URL, or null when the theme has no glyph.</summary>
    public static string? DataUrl(string path, bool directory, bool large)
    {
        var key = directory
            ? "dir"
            : $"{Path.GetExtension(path).ToLowerInvariant()}|{Path.GetFileNameWithoutExtension(path)}";

        return Cache.GetOrAdd(key, _ => Resolve(path, directory, large));
    }

    private static string? Resolve(string path, bool directory, bool large)
    {
        foreach (var name in NamesFor(path, directory))
            if (FindIcon(name, directory, large) is { } file)
                return ReadDataUrl(file);

        return null;
    }

    /// <summary>The themed names GIO gives this path, most specific first.</summary>
    private static IEnumerable<string> NamesFor(string path, bool directory)
    {
        if (directory)
            return ["folder", "inode-directory", "folder-symbolic"];

        return Try.Run(() =>
        {
            var names = new List<string>();
            var type = g_content_type_guess(path, IntPtr.Zero, 0, out _);

            if (type != IntPtr.Zero)
                try
                {
                    var icon = g_content_type_get_icon(Marshal.PtrToStringUTF8(type) ?? "");

                    if (icon != IntPtr.Zero)
                        try
                        {
                            var value = g_icon_to_string(icon);
                            if (value == IntPtr.Zero)
                                return names;

                            try
                            {
                                var text = Marshal.PtrToStringUTF8(value) ?? "";

                                foreach (var token in text.Split(' ', StringSplitOptions.RemoveEmptyEntries))
                                    if (token is not "." and not "GThemedIcon" and not "GFileIcon"
                                        && !token.EndsWith("-symbolic", StringComparison.Ordinal))
                                        names.Add(token);
                            }
                            finally
                            {
                                g_free(value);
                            }
                        }
                        finally
                        {
                            g_object_unref(icon);
                        }
                }
                finally
                {
                    g_free(type);
                }

            names.Add("text-x-generic");
            names.Add("application-x-generic");
            return names;
        }).GetOrElse(ex =>
        {
            Log.Debug(ex, "GIO could not name an icon for {Path}", path);
            return ["text-x-generic", "application-x-generic"];
        });
    }

    /// <summary>The best file for an icon name, following the theme's inheritance chain.</summary>
    private static string? FindIcon(string name, bool directory, bool large)
    {
        foreach (var root in ThemeDirectories.Value)
        {
            var index = Indexes.GetOrAdd(root, BuildIndex);
            if (!index.TryGetValue(name, out var files) || files.Count == 0)
                continue;

            return files
                .OrderBy(file => Score(file, directory, large))
                .FirstOrDefault();
        }

        return null;
    }

    /// <summary>Lower is better: the right category, a scalable SVG, then a size near the request.</summary>
    private static int Score(string file, bool directory, bool large)
    {
        var path = file.Replace('\\', '/');
        var score = 0;

        if (directory)
            score += path.Contains("/places/", StringComparison.Ordinal) ? 0
                : path.Contains("/apps/", StringComparison.Ordinal) ? 20
                : 40;
        else
            score += path.Contains("/mimetypes/", StringComparison.Ordinal) ? 0
                : path.Contains("/apps/", StringComparison.Ordinal) ? 20
                : 40;

        if (path.Contains("/symbolic/", StringComparison.Ordinal))
            score += 200;

        if (path.EndsWith(".svg", StringComparison.OrdinalIgnoreCase))
            score += path.Contains("/scalable/", StringComparison.Ordinal) ? 0 : 10;
        else
            score += 30;

        var wanted = large ? 48 : 32;
        var size = path.Split('/')
            .Select(segment => int.TryParse(segment, out var value) ? value : 0)
            .FirstOrDefault(value => value > 0);

        score += size == 0 ? 0 : Math.Abs(size - wanted);

        return score;
    }

    private static Dictionary<string, List<string>> BuildIndex(string root) =>
        Try.Run(() =>
        {
            var index = new Dictionary<string, List<string>>(StringComparer.OrdinalIgnoreCase);

            foreach (var file in Directory.EnumerateFiles(root, "*", new EnumerationOptions
                     {
                         RecurseSubdirectories = true,
                         IgnoreInaccessible = true,
                         AttributesToSkip = 0
                     }))
            {
                var extension = Path.GetExtension(file);

                if (!extension.Equals(".svg", StringComparison.OrdinalIgnoreCase)
                    && !extension.Equals(".png", StringComparison.OrdinalIgnoreCase))
                    continue;

                var name = Path.GetFileNameWithoutExtension(file);

                if (!index.TryGetValue(name, out var files))
                    index[name] = files = [];

                files.Add(file);
            }

            return index;
        }).GetOrElse(ex =>
        {
            Log.Debug(ex, "Could not read the icon theme at {Root}", root);
            return [];
        });

    private static string? ReadDataUrl(string file) =>
        Try.Run(() =>
        {
            var mime = Path.GetExtension(file).Equals(".svg", StringComparison.OrdinalIgnoreCase)
                ? "image/svg+xml"
                : "image/png";

            return $"data:{mime};base64,{Convert.ToBase64String(File.ReadAllBytes(file))}";
        }).GetOrElse(ex =>
        {
            Log.Debug(ex, "Could not read the icon {File}", file);
            return null;
        });

    /// <summary>
    ///     The configured KDE theme first, then everything it inherits. A theme installed for the
    ///     user wins over the system copy, the way KDE resolves it.
    /// </summary>
    private static IReadOnlyList<string> LoadThemeDirectories()
    {
        var home = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
        var dataHome = Environment.GetEnvironmentVariable("XDG_DATA_HOME") is { Length: > 0 } custom
            ? custom
            : Path.Combine(home, ".local", "share");
        var dataDirs = (Environment.GetEnvironmentVariable("XDG_DATA_DIRS") ?? "/usr/local/share:/usr/share")
            .Split(':', StringSplitOptions.RemoveEmptyEntries);

        var roots = new List<string>
        {
            Path.Combine(dataHome, "icons"),
            Path.Combine(home, ".icons")
        };
        roots.AddRange(dataDirs.Select(directory => Path.Combine(directory, "icons")));

        var directories = new List<string>();
        var visited = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        var pending = new Queue<string>();

        pending.Enqueue(ReadThemeName());
        pending.Enqueue("breeze");
        pending.Enqueue("hicolor");

        while (pending.Count > 0)
        {
            var theme = pending.Dequeue();
            if (string.IsNullOrWhiteSpace(theme) || !visited.Add(theme))
                continue;

            foreach (var root in roots)
            {
                var directory = Path.Combine(root, theme);
                if (!Directory.Exists(directory))
                    continue;

                if (!directories.Contains(directory))
                    directories.Add(directory);

                foreach (var inherited in ReadInherits(Path.Combine(directory, "index.theme")))
                    pending.Enqueue(inherited);

                // The first root that has this theme is the one KDE would use.
                break;
            }
        }

        return directories;
    }

    /// <summary>The theme KDE selected, then the GTK one, then Breeze and hicolor.</summary>
    private static string ReadThemeName()
    {
        foreach (var (command, arguments) in new (string, string[])[]
                 {
                     ("kreadconfig6", ["--file", "kdeglobals", "--group", "Icons", "--key", "Theme"]),
                     ("kreadconfig5", ["--file", "kdeglobals", "--group", "Icons", "--key", "Theme"])
                 })
        {
            var name = Try.Run(() =>
            {
                var startInfo = new ProcessStartInfo(command)
                {
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                };

                foreach (var argument in arguments)
                    startInfo.ArgumentList.Add(argument);

                var process = Process.Start(startInfo);
                if (process is null)
                    return null;

                using (process)
                {
                    var output = process.StandardOutput.ReadToEnd().Trim();
                    return process.WaitForExit(1000) && process.ExitCode == 0 && output.Length > 0 ? output : null;
                }
            }).GetOrNull();

            if (name is { Length: > 0 })
                return name;
        }

        var settings = Path.Combine(
            Environment.GetFolderPath(Environment.SpecialFolder.UserProfile),
            ".config", "gtk-3.0", "settings.ini");

        if (File.Exists(settings))
        {
            var name = File.ReadLines(settings)
                .Select(line => line.Split('=', 2))
                .Where(parts => parts.Length == 2 && parts[0].Trim() == "gtk-icon-theme-name")
                .Select(parts => parts[1].Trim())
                .FirstOrDefault();

            if (name is { Length: > 0 })
                return name;
        }

        return "breeze";
    }

    private static IEnumerable<string> ReadInherits(string indexFile)
    {
        if (!File.Exists(indexFile))
            return [];

        var line = File.ReadLines(indexFile)
            .FirstOrDefault(value => value.StartsWith("Inherits=", StringComparison.Ordinal));

        return line is null
            ? []
            : line["Inherits=".Length..].Split(',', StringSplitOptions.RemoveEmptyEntries)
                .Select(value => value.Trim());
    }

    [LibraryImport("libgio-2.0.so.0", StringMarshalling = StringMarshalling.Utf8)]
    private static partial IntPtr g_content_type_guess(string filename, IntPtr data, nuint dataSize,
        [MarshalAs(UnmanagedType.Bool)] out bool uncertain);

    [LibraryImport("libgio-2.0.so.0", StringMarshalling = StringMarshalling.Utf8)]
    private static partial IntPtr g_content_type_get_icon(string type);

    [LibraryImport("libgio-2.0.so.0")]
    private static partial IntPtr g_icon_to_string(IntPtr icon);

    [LibraryImport("libgio-2.0.so.0")]
    private static partial void g_object_unref(IntPtr obj);

    [LibraryImport("libglib-2.0.so.0")]
    private static partial void g_free(IntPtr pointer);
}