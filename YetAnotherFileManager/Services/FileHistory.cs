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
    private const int Limit = 100;

    private readonly List<Entry> _entries = [];
    private readonly SemaphoreSlim _gate = new(1, 1);
    private int _index;

    public sealed record Step(bool Ok, List<string> Paths, string? Error = null);

    private sealed record Entry(string Label, Func<Task<Step>> Undo, Func<Task<Step>> Redo);

    public void Record(string label, Func<Task<Step>> undo, Func<Task<Step>> redo)
    {
        lock (_entries)
        {
            if (_index < _entries.Count)
                _entries.RemoveRange(_index, _entries.Count - _index);

            _entries.Add(new Entry(label, undo, redo));

            if (_entries.Count > Limit)
                _entries.RemoveAt(0);

            _index = _entries.Count;
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
