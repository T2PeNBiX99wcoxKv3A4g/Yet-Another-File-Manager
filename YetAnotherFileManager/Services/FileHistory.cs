using PhotinoNetUtils.Utils;
using Serilog;
using YetAnotherFileManager.Messaging;

namespace YetAnotherFileManager.Services;

/// <summary>
///     A small undo/redo history for file operations. Each entry knows how to run its inverse and how
///     to run itself again; the operations that perform the work do not record themselves, so undo and
///     redo never grow the stack. The history lives for the session only.
/// </summary>
internal sealed class FileHistory : Singleton<FileHistory>
{
    private const int Limit = 50;

    private readonly List<Entry> _entries = [];
    private readonly SemaphoreSlim _gate = new(1, 1);
    private int _index;
    private long _nextId;

    public sealed record Step(bool Ok, List<string> Paths, string? Error = null);

    private sealed record Entry(
        long Id,
        string Label,
        IReadOnlyList<string> Paths,
        long At,
        Func<Task<Step>> Undo,
        Func<Task<Step>> Redo);

    public void Record(string label, Func<Task<Step>> undo, Func<Task<Step>> redo,
        IReadOnlyList<string>? paths = null)
    {
        lock (_entries)
        {
            if (_index < _entries.Count)
                _entries.RemoveRange(_index, _entries.Count - _index);

            _entries.Add(new Entry(++_nextId, label, paths ?? [], DateTimeOffset.UtcNow.ToUnixTimeMilliseconds(),
                undo, redo));

            if (_entries.Count > Limit)
                _entries.RemoveAt(0);

            _index = _entries.Count;
        }
    }

    /// <summary>The panel's list, newest first; applied entries can be undone.</summary>
    public HistoryListPayload List()
    {
        lock (_entries)
        {
            return new HistoryListPayload(
                [.. _entries.Select((entry, index) => new HistoryEntryPayload(
                    entry.Id, entry.Label, entry.Paths, entry.At, index < _index)).Reverse()]);
        }
    }

    /// <summary>Undoes the newest operation down to and including <paramref name="id" />.</summary>
    public async Task<HistoryOperationPayload> UndoToAsync(long id)
    {
        while (true)
        {
            int target;
            lock (_entries)
            {
                target = _entries.FindIndex((entry) => entry.Id == id);
                if (target < 0 || target >= _index)
                    return new HistoryOperationPayload(true, null, []);
            }

            var step = await UndoAsync();
            if (!step.Ok)
                return step;

            lock (_entries)
            {
                if (_index - 1 <= target)
                    return step;
            }
        }
    }

    public HistoryStatePayload State()
    {
        lock (_entries)
        {
            return new HistoryStatePayload(
                _index > 0,
                _index < _entries.Count,
                _index > 0 ? _entries[_index - 1].Label : null,
                _index < _entries.Count ? _entries[_index].Label : null);
        }
    }

    public async Task<HistoryOperationPayload> UndoAsync()
    {
        await _gate.WaitAsync();

        try
        {
            Entry? entry;

            lock (_entries)
            {
                if (_index == 0)
                    return new HistoryOperationPayload(false, "Nothing to undo.", []);

                entry = _entries[_index - 1];
            }

            var step = await entry.Undo();

            if (step.Ok)
                lock (_entries)
                {
                    if (_index > 0) _index -= 1;
                }

            return new HistoryOperationPayload(step.Ok, step.Error, step.Paths);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not undo a file operation");
            return new HistoryOperationPayload(false, ex.Message, []);
        }
        finally
        {
            _gate.Release();
        }
    }

    public async Task<HistoryOperationPayload> RedoAsync()
    {
        await _gate.WaitAsync();

        try
        {
            Entry? entry;

            lock (_entries)
            {
                if (_index >= _entries.Count)
                    return new HistoryOperationPayload(false, "Nothing to redo.", []);

                entry = _entries[_index];
            }

            var step = await entry.Redo();

            if (step.Ok)
                lock (_entries)
                {
                    if (_index < _entries.Count) _index += 1;
                }

            return new HistoryOperationPayload(step.Ok, step.Error, step.Paths);
        }
        catch (Exception ex)
        {
            Log.Warning(ex, "Could not redo a file operation");
            return new HistoryOperationPayload(false, ex.Message, []);
        }
        finally
        {
            _gate.Release();
        }
    }
}
