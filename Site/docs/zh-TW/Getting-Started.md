# 開始使用

Yet Another File Manager 是 Windows 與 Linux 上的桌面檔案管理員。它是一個視窗，內含分頁、分割檢視、
預覽、相簿與資源回收筒，並把設定與快取放在你瀏覽的資料夾之外。

## 安裝

從[發行頁面](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest)選擇適合你系統的套件：

| 系統 | 套件 |
| --- | --- |
| Windows 10/11 | `YetAnotherFileManager-<version>-win-x64.msi` |
| Fedora | `yafm-<version>-1.*.x86_64.rpm` |
| Debian / Ubuntu | `yafm_<version>_amd64.deb` |
| Arch Linux | `yafm-<version>-1-x86_64.pkg.tar.zst` |

建置版本是自包含的：.NET 執行階段已一併打包，因此不需另外安裝。Windows 需要 WebView2 執行階段
（Windows 10 與 11 已內建）。Linux 需要 WebKitGTK 4.1 與 libnotify，套件會自動帶入。

Windows 版本未經程式碼簽署，因此第一次執行時 SmartScreen 可能會警告；請選擇 **更多資訊** →
**仍要執行**。

## 第一次啟動

視窗會開啟在**概覽**，也就是由面板組成的首頁：快速存取、常用、最近、首頁、磁碟機、共享與收藏。左側
邊欄可開啟概覽、資源回收筒、相簿與設定，並列出你釘選到快速存取的資料夾。

關閉再開啟程式時會還原分頁，除非你在[設定](Settings-and-Shortcuts)中關閉這個行為。

## 開啟資料夾

- 按兩下資料夾，或選取後按 `Enter`。
- 在上方網址列輸入路徑；`Ctrl+L` 會將焦點移到那裡。
- 把檔案或資料夾拖放到視窗上，即可複製或移動。
- `yafm://<path>` 形式的連結會在新分頁開啟該資料夾。可在[設定](Settings-and-Shortcuts) → 應用程式中
  註冊此處理方式。

## 程式把檔案放在哪裡

- 設定：程式的設定資料夾（Windows 為 `%APPDATA%\YetAnotherFileManager`，Linux 為
  `~/.config/YetAnotherFileManager`）。
- 快取與記錄：對應的資料資料夾（`%LOCALAPPDATA%` 或 `~/.local/share`）。
- 每個資料夾的資料：資料夾內的隱藏檔 `.yafm-index.db`；若在[設定](Settings-and-Shortcuts)中關閉
  資料夾索引，則改用單一中央資料庫。

刪除 `.yafm-index.db` 只會讓下次開啟變慢，資料夾本身不受影響。
