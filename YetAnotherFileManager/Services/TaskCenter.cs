using PhotinoNetUtils.Utils;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The operations the status center shows: copies, moves, archives and anything else that takes
///     long enough to need progress. Updates are throttled, so a fast copy cannot flood the bridge
///     with one message per file.
/// </summary>
internal sealed class TaskCenter : Singleton<TaskCenter>
{
    private const int Capacity = 100;
    private const int NotifyDelay = 100;

    private readonly Lock _gate = new();
    private readonly Timer _notifyTimer;
    private readonly List<TaskInfo> _tasks = [];
    private bool _notifyPending;

    public TaskCenter() =>
        _notifyTimer = new(_ => Flush(), null, Timeout.Infinite, Timeout.Infinite);

    /// <summary>Registers a running operation and returns the id used to report progress.</summary>
    public string Start(string kind, string label, int total = 0, long bytesTotal = 0)
    {
        var task = new TaskInfo(
            Guid.NewGuid().ToString("N"),
            kind,
            label,
            "running",
            Math.Max(total, 0),
            0,
            Math.Max(bytesTotal, 0),
            0,
            null,
            DateTimeOffset.UtcNow.ToUnixTimeMilliseconds(),
            0);

        lock (_gate)
        {
            _tasks.Insert(0, task);

            if (_tasks.Count > Capacity)
                _tasks.RemoveRange(Capacity, _tasks.Count - Capacity);
        }

        ScheduleNotify();
        return task.Id;
    }

    /// <summary>Updates the totals after a directory was measured; the task itself started earlier.</summary>
    public void UpdateTotal(string id, int total, long bytesTotal)
    {
        lock (_gate)
        {
            var index = _tasks.FindIndex(task => task.Id == id);
            if (index < 0)
                return;

            _tasks[index] = _tasks[index] with
            {
                Total = Math.Max(total, 0),
                BytesTotal = Math.Max(bytesTotal, 0)
            };
        }

        ScheduleNotify();
    }

    public void Progress(string id, int done, long bytesDone)
    {
        lock (_gate)
        {
            var index = _tasks.FindIndex(task => task.Id == id);
            if (index < 0)
                return;

            _tasks[index] = _tasks[index] with
            {
                Done = Math.Max(done, 0),
                BytesDone = Math.Max(bytesDone, 0)
            };
        }

        ScheduleNotify();
    }

    public void Complete(string id) => Finish(id, "done", null);

    public void Fail(string id, string error) => Finish(id, "failed", error);

    public IReadOnlyList<TaskInfo> Snapshot()
    {
        lock (_gate)
            return [.. _tasks];
    }

    /// <summary>Drops everything that is no longer running, keeping the active operations.</summary>
    public void ClearFinished()
    {
        lock (_gate)
            _tasks.RemoveAll(task => task.State != "running");

        ScheduleNotify();
    }

    private void Finish(string id, string state, string? error)
    {
        lock (_gate)
        {
            var index = _tasks.FindIndex(task => task.Id == id);
            if (index < 0)
                return;

            var task = _tasks[index];
            _tasks[index] = task with
            {
                State = state,
                Done = task.Total,
                BytesDone = task.BytesTotal,
                Error = error,
                FinishedAt = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()
            };
        }

        ScheduleNotify();
    }

    private void ScheduleNotify()
    {
        lock (_gate)
        {
            if (_notifyPending)
                return;

            _notifyPending = true;
            _notifyTimer.Change(NotifyDelay, Timeout.Infinite);
        }
    }

    private void Flush()
    {
        TasksPayload payload;

        lock (_gate)
        {
            _notifyPending = false;
            payload = new([.. _tasks]);
        }

        WindowManager.Instance.RunOnMainWindow(() =>
            WindowManager.Instance.Notify("app.tasks.changed", payload));
    }
}