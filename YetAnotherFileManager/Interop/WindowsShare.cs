using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using PhotinoNetUtils.Utils;
using Serilog;
using Windows.ApplicationModel.DataTransfer;
using Windows.Storage;
using YetAnotherFileManager.Messaging;
using YetAnotherFileManager.Services;

namespace YetAnotherFileManager.Interop;

/// <summary>
///     Opens the Windows share sheet for the selected files and folders. A desktop window has no
///     <c>DataTransferManager</c> of its own, so the manager is taken from
///     <c>IDataTransferManagerInterop</c> for this window and the data request is answered from the
///     same window; Linux has no equivalent and never calls this.
/// </summary>
[SupportedOSPlatform("windows10.0.17763")]
internal static class WindowsShare
{
    /// <summary>The interface behind <see cref="DataTransferManager" /> for a desktop window.</summary>
    private static readonly Guid TransferManagerIid =
        new(0xA5CAEE9B, 0x8708, 0x49D1, 0x8D, 0x36, 0x67, 0xD2, 0x5A, 0x8D, 0xA0, 0x0C);

    private static readonly Lock Gate = new();

    private static DataTransferManager? _manager;
    private static IntPtr _window;
    private static IStorageItem[] _items = [];

    public static async Task<ShareResultPayload> ShareAsync(IReadOnlyList<string> paths)
    {
        var items = new List<IStorageItem>();
        string? failure = null;

        foreach (var path in paths)
        {
            try
            {
                items.Add(Directory.Exists(path)
                    ? await StorageFolder.GetFolderFromPathAsync(path)
                    : await StorageFile.GetFileFromPathAsync(path));
            }
            catch (Exception ex)
            {
                // One unreadable entry must not stop the rest of the selection from being shared.
                Log.Debug(ex, "Could not open {Path} for the share sheet", path);
                failure ??= ex.Message;
            }
        }

        if (items.Count == 0)
            return new(false, failure ?? "The selection could not be opened.");

        var shown = new TaskCompletionSource<bool>();
        var error = failure;

        WindowManager.Instance.RunOnMainWindow(() =>
        {
            try
            {
                Show(items.ToArray());
                shown.TrySetResult(true);
            }
            catch (Exception ex)
            {
                Log.Warning(ex, "Could not open the share sheet");
                error = ex.Message;
                shown.TrySetResult(false);
            }
        });

        return new(await shown.Task, error);
    }

    /// <summary>Shows the sheet for the paths the data request answers with; must run on the window.</summary>
    private static void Show(IStorageItem[] items)
    {
        var handle = WindowManager.Instance.WindowHandle;
        if (handle == IntPtr.Zero)
            throw new InvalidOperationException("The window is not ready.");

        var interop = DataTransferManager.As<IDataTransferManagerInterop>();

        lock (Gate)
        {
            if (_manager is null || _window != handle)
            {
                _window = handle;
                var iid = TransferManagerIid;
                _manager = DataTransferManager.FromAbi(interop.GetForWindow(handle, ref iid));
                _manager.DataRequested += OnDataRequested;
            }

            _items = items;
        }

        interop.ShowShareUIForWindow(handle);
    }

    /// <summary>Hands the selection to the sheet; it asks once per show, and must be answered at once.</summary>
    private static void OnDataRequested(DataTransferManager sender, DataRequestedEventArgs args)
    {
        IStorageItem[] items;

        lock (Gate)
            items = _items;

        if (items.Length == 0)
            return;

        var data = args.Request.Data;
        data.Properties.Title = items.Length == 1 ? items[0].Name : $"{items.Length} items";
        data.Properties.Description = "Shared from Yet Another File Manager";
        data.SetStorageItems(items);
    }

    [ComImport]
    [Guid("3A3DCD6C-3EAB-43DC-BCDE-45671CE800C8")]
    [InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
    private interface IDataTransferManagerInterop
    {
        IntPtr GetForWindow(IntPtr window, ref Guid riid);

        void ShowShareUIForWindow(IntPtr window);
    }
}
