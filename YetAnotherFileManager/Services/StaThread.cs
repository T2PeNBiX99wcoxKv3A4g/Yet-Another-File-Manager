using System.Collections.Concurrent;

namespace YetAnotherFileManager.Services;

/// <summary>
///     A small STA pool for shell calls that load per-file icons. Some icon handlers — the default
///     browser of a <c>.url</c>, the target of a <c>.lnk</c> — only answer an apartment-threaded
///     caller; from the thread pool they quietly fall back to the generic shortcut glyph.
/// </summary>
internal static class StaThread
{
    private const int Workers = 6;

    private static readonly BlockingCollection<Action> Work = new();

    static StaThread()
    {
        for (var index = 0; index < Workers; index++)
        {
            var thread = new Thread(Run)
            {
                IsBackground = true,
                Name = $"Shell icon thread {index + 1}"
            };

            thread.SetApartmentState(ApartmentState.STA);
            thread.Start();
        }
    }

    public static Task<T> RunAsync<T>(Func<T> work)
    {
        var completion = new TaskCompletionSource<T>(TaskCreationOptions.RunContinuationsAsynchronously);

        Work.Add(() =>
        {
            try
            {
                completion.SetResult(work());
            }
            catch (Exception ex)
            {
                completion.SetException(ex);
            }
        });

        return completion.Task;
    }

    private static void Run()
    {
        foreach (var work in Work.GetConsumingEnumerable())
            work();
    }
}
