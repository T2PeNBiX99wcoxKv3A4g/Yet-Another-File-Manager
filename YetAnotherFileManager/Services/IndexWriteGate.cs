namespace YetAnotherFileManager.Services;

/// <summary>
///     One index writer at a time, with the folder on screen going first. A write for the directory
///     the user is looking at never waits behind the background writes queued before it, so the
///     current tab is always the first one the index answers.
/// </summary>
internal sealed class IndexWriteGate
{
    private readonly Queue<TaskCompletionSource> _background = new();
    private readonly Queue<TaskCompletionSource> _focused = new();
    private readonly Lock _gate = new();
    private bool _busy;

    /// <summary>Waits for the gate; <paramref name="focused" /> puts the caller ahead of the queue.</summary>
    public Task WaitAsync(bool focused)
    {
        lock (_gate)
        {
            if (!_busy)
            {
                _busy = true;
                return Task.CompletedTask;
            }

            var waiter = new TaskCompletionSource(TaskCreationOptions.RunContinuationsAsynchronously);
            (focused ? _focused : _background).Enqueue(waiter);
            return waiter.Task;
        }
    }

    public void Release()
    {
        TaskCompletionSource? next;

        lock (_gate)
        {
            next = _focused.TryDequeue(out var before) ? before
                : _background.TryDequeue(out var after) ? after
                : null;

            // The next waiter inherits the gate; without one it is simply free again.
            if (next is null)
                _busy = false;
        }

        next?.SetResult();
    }
}