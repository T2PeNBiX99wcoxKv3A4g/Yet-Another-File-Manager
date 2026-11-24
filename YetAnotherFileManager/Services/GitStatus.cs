using System.Collections.Concurrent;
using System.ComponentModel;
using System.Diagnostics;
using System.Text;
using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The git side of a folder: the repository it belongs to and the status of its direct children.
///     A folder outside a repository has none, so the interface simply shows nothing there.
/// </summary>
/// <remarks>
///     The status is read with the <c>git</c> command rather than a library, so a repository is seen
///     exactly the way the shell and the user's tooling see it: filters, sparse checkouts, worktrees
///     and submodules all behave the same. One run covers the whole repository, so every folder in it
///     shares the answer for a few seconds; the watcher drops it when a folder changes.
/// </remarks>
[Singleton]
internal sealed partial class GitStatus
{
    /// <summary>How long one repository's status is reused, since every folder in it asks.</summary>
    private static readonly TimeSpan Lifetime = TimeSpan.FromSeconds(3);

    /// <summary>How long a folder is remembered as belonging to a repository, or to none.</summary>
    private static readonly TimeSpan RootLifetime = TimeSpan.FromSeconds(30);

    /// <summary>A repository with a very large working tree must not stall the listing behind it.</summary>
    private const int TimeoutMilliseconds = 4000;

    /// <summary>Staging a big folder is real work, but the window waits for the answer.</summary>
    private const int ChangeTimeoutMilliseconds = 30_000;

    /// <summary>What <c>git status</c> is asked for; the executable and the paths are added outside.</summary>
    private static readonly string[] StatusArguments =
    [
        "-c", "status.submoduleSummary=false",
        "status", "--porcelain=v2", "--branch", "-z", "--untracked-files=normal"
    ];

    /// <summary>The answer for a repository path.</summary>
    private readonly ConcurrentDictionary<string, CachedRepository> _repositories =
        new(StringComparer.OrdinalIgnoreCase);

    private readonly ConcurrentDictionary<string, CachedRoot> _roots =
        new(StringComparer.OrdinalIgnoreCase);

    /// <summary>One run per repository at a time, so a folder wall shares it instead of starting more.</summary>
    private readonly ConcurrentDictionary<string, Task<Repository?>> _running =
        new(StringComparer.OrdinalIgnoreCase);

    /// <summary>
    ///     Repositories whose status could not be read (a timeout, a broken repository). They are left
    ///     alone for a minute instead of making every folder in them wait for the timeout again.
    /// </summary>
    private readonly ConcurrentDictionary<string, long> _unavailable =
        new(StringComparer.OrdinalIgnoreCase);

    /// <summary>Set once git turned out not to be installed, so no listing keeps asking for it.</summary>
    private volatile bool _missing;

    /// <summary>Drops a repository's status after something changed in it.</summary>
    public static void Invalidate(string? path)
    {
        if (string.IsNullOrWhiteSpace(path))
            return;

        Instance.Drop(path);
    }

    /// <summary>
    ///     Moves paths into or out of the index. The paths may be files, folders or entries that
    ///     were deleted; git is told exactly which, so nothing else in the folder is touched.
    /// </summary>
    public async Task<GitChangePayload> ChangeAsync(IReadOnlyList<string>? paths, bool unstage)
    {
        var list = (paths ?? []).Where(path => !string.IsNullOrWhiteSpace(path)).ToList();

        if (list.Count == 0)
            return new(false, "Nothing was selected.");

        var first = list[0];
        var anchor = Directory.Exists(first) ? first : Path.GetDirectoryName(first);
        var root = anchor is null ? null : RootOf(anchor);

        if (root is null)
            return new(false, "This folder is not inside a git repository.");

        var relative = list
            .Select(path => Path.GetRelativePath(root, path).Replace('\\', '/'))
            .Where(path => path.Length > 0 && path != "." && !path.StartsWith("..", StringComparison.Ordinal))
            .ToList();

        if (relative.Count == 0)
            return new(false, "The selection is outside the repository.");

        List<string> arguments = unstage ? ["restore", "--staged", "--"] : ["add", "-A", "--"];
        arguments.AddRange(relative);
        // The window keeps a hidden index beside the files; staging a folder must not stage it.
        arguments.Add(":(exclude)*yafm-index.db*");

        var result = await RunCommandAsync(root, arguments, ChangeTimeoutMilliseconds);

        if (result is null)
            return new(false, "git could not be started.");

        if (result.Code != 0 && unstage)
        {
            // An unborn branch has no HEAD for restore to compare against; dropping the entries from
            // the index is the same thing the first commit expects.
            List<string> fallback = ["rm", "--cached", "--ignore-unmatch", "-r", "--"];
            fallback.AddRange(relative);
            fallback.Add(":(exclude)*yafm-index.db*");

            var removed = await RunCommandAsync(root, fallback, ChangeTimeoutMilliseconds);
            if (removed is { Code: 0 })
            {
                _repositories.TryRemove(root, out _);
                return new(true);
            }
        }

        if (result.Code != 0)
        {
            var message = result.Error.Trim();

            return new(false, message.Length > 0 ? message : "git refused the change.");
        }

        _repositories.TryRemove(root, out _);
        return new(true);
    }

    /// <summary>
    ///     The repository around <paramref name="directory" /> and the status of each of its direct
    ///     children, or null when the folder is not inside a working tree.
    /// </summary>
    public async Task<GitListingPayload?> ListingAsync(string directory)
    {
        if (string.IsNullOrEmpty(directory) || _missing || Archives.TrySplit(directory, out _, out _))
            return null;

        var root = await Task.Run(() => RootOf(directory));
        if (root is null)
            return null;

        var repository = await StatusAsync(root);

        return repository?.Listing(directory);
    }

    /// <summary>
    ///     The folder's repository root, or null when no parent holds a <c>.git</c>. A worktree and a
    ///     submodule both use a <c>.git</c> file, so both a file and a directory count.
    /// </summary>
    private string? RootOf(string directory)
    {
        var full = Try.Run(() => Path.GetFullPath(directory)).GetOrElse(_ => directory);

        if (_roots.TryGetValue(full, out var cached)
            && Environment.TickCount64 - cached.At <= (long)RootLifetime.TotalMilliseconds)
            return cached.Root;

        var root = FindRoot(full);
        _roots[full] = new CachedRoot(root, Environment.TickCount64);
        return root;
    }

    private static string? FindRoot(string directory)
    {
        var current = Try.Run(() => new DirectoryInfo(directory)).GetOrElse(_ => null);

        while (current is not null)
        {
            var marker = Path.Combine(current.FullName, ".git");

            if (Directory.Exists(marker) || File.Exists(marker))
                return current.FullName;

            current = current.Parent;
        }

        return null;
    }

    private async Task<Repository?> StatusAsync(string root)
    {
        if (_repositories.TryGetValue(root, out var cached)
            && Environment.TickCount64 - cached.At <= (long)Lifetime.TotalMilliseconds)
            return cached.Repository;

        if (_unavailable.TryGetValue(root, out var failedAt)
            && Environment.TickCount64 - failedAt <= 60_000)
            return null;

        if (_running.TryGetValue(root, out var running))
            return await running;

        var task = ReadAsync(root);
        _running[root] = task;

        try
        {
            var repository = await task;

            if (repository is not null)
            {
                _repositories[root] = new CachedRepository(repository, Environment.TickCount64);
                _unavailable.TryRemove(root, out _);
            }
            else
            {
                _unavailable[root] = Environment.TickCount64;
            }

            return repository;
        }
        finally
        {
            _running.TryRemove(new KeyValuePair<string, Task<Repository?>>(root, task));
        }
    }

    private async Task<Repository?> ReadAsync(string root)
    {
        var result = await RunCommandAsync(root, StatusArguments, TimeoutMilliseconds);

        return result is null || result.Code != 0 ? null : Parse(root, result.Output);
    }

    private sealed record CommandResult(int Code, string Output, string Error);

    /// <summary>Runs git in a repository and returns its exit code and both streams.</summary>
    private async Task<CommandResult?> RunCommandAsync(string root, IReadOnlyList<string> arguments,
        int timeoutMilliseconds)
    {
        var start = new ProcessStartInfo("git")
        {
            WorkingDirectory = root,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            UseShellExecute = false,
            CreateNoWindow = true,
            StandardOutputEncoding = new UTF8Encoding(false),
            StandardErrorEncoding = new UTF8Encoding(false)
        };

        // The optional locks rewrite the index (`git status` would refresh it). A file manager
        // looking at a folder must never leave its own mark on the repository.
        start.ArgumentList.Add("--no-optional-locks");
        start.ArgumentList.Add("-c");
        start.ArgumentList.Add("core.quotepath=false");

        foreach (var argument in arguments)
            start.ArgumentList.Add(argument);

        start.Environment["GIT_OPTIONAL_LOCKS"] = "0";
        start.Environment["GIT_TERMINAL_PROMPT"] = "0";

        Process? process;

        try
        {
            process = Process.Start(start);
        }
        catch (Win32Exception)
        {
            // Git is not installed or not on PATH; nothing in this session will change that.
            _missing = true;
            return null;
        }
        catch (Exception ex)
        {
            Serilog.Log.Debug(ex, "Could not start git for {Root}", root);
            return null;
        }

        if (process is null)
            return null;

        using (process)
        using (var timeout = new CancellationTokenSource(timeoutMilliseconds))
        {
            try
            {
                var output = process.StandardOutput.ReadToEndAsync(timeout.Token);
                var error = process.StandardError.ReadToEndAsync(timeout.Token);

                await process.WaitForExitAsync(timeout.Token);

                return new CommandResult(process.ExitCode, await output, await error);
            }
            catch (OperationCanceledException)
            {
                Try.Run(() => process.Kill(true));
                return null;
            }
        }
    }

    private static Repository? Parse(string root, string output)
    {
        if (output.Length == 0)
            return null;

        var branch = "";
        var detached = false;
        var ahead = 0;
        var behind = 0;
        var statuses = new Dictionary<string, string>(StringComparer.Ordinal);
        var records = output.Split('\0');

        for (var index = 0; index < records.Length; index++)
        {
            var record = records[index];

            if (record.Length == 0)
                continue;

            if (record[0] == '#')
            {
                if (record.StartsWith("# branch.head ", StringComparison.Ordinal))
                {
                    branch = record[14..];

                    if (branch == "(detached)")
                    {
                        detached = true;
                        branch = "";
                    }
                }
                else if (record.StartsWith("# branch.oid ", StringComparison.Ordinal) && branch.Length == 0)
                {
                    var oid = record[13..];
                    branch = oid == "(initial)" ? "" : oid[..Math.Min(7, oid.Length)];
                }
                else if (record.StartsWith("# branch.ab ", StringComparison.Ordinal))
                {
                    foreach (var part in record[12..].Split(' '))
                    {
                        if (part.Length < 2)
                            continue;

                        if (part[0] == '+' && int.TryParse(part[1..], out var parsedAhead))
                            ahead = parsedAhead;
                        else if (part[0] == '-' && int.TryParse(part[1..], out var parsedBehind))
                            behind = parsedBehind;
                    }
                }

                continue;
            }

            switch (record[0])
            {
                // 1 <XY> <sub> <mH> <mI> <mW> <hH> <hI> <path>
                case '1':
                {
                    var fields = record.Split(' ', 9);

                    if (fields.Length == 9)
                        Remember(statuses, fields[8], fields[1]);

                    break;
                }

                // 2 <XY> <sub> <mH> <mI> <mW> <hH> <hI> <X><score> <path>\0<original path>
                case '2':
                {
                    var fields = record.Split(' ', 10);

                    if (fields.Length == 10)
                        Remember(statuses, fields[9], fields[1]);

                    index++;
                    break;
                }

                // u <XY> <sub> <m1> <m2> <m3> <mW> <h1> <h2> <h3> <path>
                case 'u':
                {
                    var fields = record.Split(' ', 11);

                    if (fields.Length == 11)
                        Remember(statuses, fields[10], "UU");

                    break;
                }

                case '?':
                {
                    var path = record[2..].TrimEnd('/');

                    if (path.Length > 0)
                        Remember(statuses, path, "??");

                    break;
                }

                case '!':
                {
                    var path = record[2..].TrimEnd('/');

                    if (path.Length > 0)
                        Remember(statuses, path, "!!");

                    break;
                }
            }
        }

        return new Repository(root, branch, detached, ahead, behind, statuses);
    }

    /// <summary>
    ///     Records one changed path, unless it is the app's own per-folder index: that file is this
    ///     window's bookkeeping, not a change the user made.
    /// </summary>
    private static void Remember(Dictionary<string, string> statuses, string path, string code)
    {
        var slash = path.LastIndexOf('/');
        var name = slash < 0 ? path : path[(slash + 1)..];

        if (FolderIndex.IsIndexFile(name))
            return;

        statuses[path] = code;
    }

    /// <summary>Forgets the repository a changed folder belongs to, and the folders it was cached for.</summary>
    private void Drop(string path)
    {
        var root = FindRoot(path);

        if (root is null)
            return;

        _repositories.TryRemove(root, out _);
        _unavailable.TryRemove(root, out _);

        foreach (var key in _roots.Keys)
            if (key.StartsWith(root, StringComparison.OrdinalIgnoreCase))
                _roots.TryRemove(key, out _);
    }

    private sealed record CachedRepository(Repository Repository, long At);

    private sealed record CachedRoot(string? Root, long At);

    /// <summary>One repository: its branch and the status of each path git reported as changed.</summary>
    private sealed record Repository(
        string Root,
        string Branch,
        bool Detached,
        int Ahead,
        int Behind,
        Dictionary<string, string> Statuses)
    {
        /// <summary>
        ///     The repository-wide facts plus the direct children of one folder. A changed path below
        ///     a subfolder marks that subfolder, so a folder that holds changes is obvious before it
        ///     is opened; the most serious status wins.
        /// </summary>
        public GitListingPayload Listing(string directory)
        {
            var relative = Path.GetRelativePath(Root, directory);
            if (relative == ".")
                relative = "";

            relative = relative.Replace('\\', '/').Trim('/');
            var prefix = relative.Length == 0 ? "" : relative + "/";
            var comparison = OperatingSystem.IsWindows()
                ? StringComparison.OrdinalIgnoreCase
                : StringComparison.Ordinal;
            var entries = new Dictionary<string, string>(OperatingSystem.IsWindows()
                ? StringComparer.OrdinalIgnoreCase
                : StringComparer.Ordinal);

            foreach (var (path, code) in Statuses)
            {
                if (!path.StartsWith(prefix, comparison))
                    continue;

                var rest = path[prefix.Length..];
                if (rest.Length == 0)
                    continue;

                var slash = rest.IndexOf('/');
                var child = slash < 0 ? rest : rest[..slash];

                if (child.Length > 0)
                    entries[child] = Worse(entries.GetValueOrDefault(child), code);
            }

            return new GitListingPayload(Root, Branch, Detached, Ahead, Behind, Statuses.Count, entries);
        }

        /// <summary>The status a folder shows when its own children have several.</summary>
        private static string Worse(string? current, string candidate)
        {
            if (current is null)
                return candidate;

            return Rank(candidate) < Rank(current) ? candidate : current;
        }

        private static int Rank(string code) => code switch
        {
            "UU" or "AA" or "DD" => 0,
            _ when code.Contains('D') => 1,
            _ when code.Contains('M') => 2,
            _ when code.Contains('R') || code.Contains('C') => 3,
            _ when code.Contains('A') => 4,
            "??" => 5,
            _ => 6
        };
    }
}
