using System.Diagnostics;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     Runs a program that the shell has to start, such as an elevated copy of this app.
/// </summary>
/// <remarks>
///     .NET 11's <c>Process.RunAsync</c> and <c>Process.StartAndForget</c> refuse
///     <c>UseShellExecute</c>: the shell may hand the request to an already running program and
///     never create a process, so neither a handle nor an exit code could be returned. The
///     elevation verb needs the shell, so the process is started with <c>Process.Start</c>, which
///     may answer null, and waited on here.
/// </remarks>
internal static class ProcessRunner
{
    /// <summary>Starts the process and waits for it; null when the shell created no process.</summary>
    public static async Task<int?> RunAsync(ProcessStartInfo start)
    {
        using var process = Process.Start(start);
        if (process is null)
            return null;

        await process.WaitForExitAsync();
        return process.ExitCode;
    }
}
