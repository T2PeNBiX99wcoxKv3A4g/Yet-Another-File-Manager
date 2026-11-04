<div align="center">
  <img src="icon.svg" alt="" width="120">
  <h1>Yet Another File Manager</h1>
  <p><strong>把所有東西集中在同一個視窗裡的檔案管理員。</strong></p>
  <p>
    <a href="https://t2penbix99wcoxkv3a4g.github.io/Yet-Another-File-Manager/">網站</a> ·
    <a href="https://t2penbix99wcoxkv3a4g.github.io/Yet-Another-File-Manager/#/docs/Getting-Started">說明文件</a>
  </p>
  <p>
    <a href="README.md">English</a> ·
    <a href="README.ja.md">日本語</a> ·
    <a href="README.zh-CN.md">简体中文</a>
  </p>
</div>

Yet Another File Manager 是 Windows 與 Linux 上的桌面檔案管理員。它以清單或格狀瀏覽資料夾，在旁邊預覽
圖片、影片與文件，並把分頁、分割檢視、搜尋、相簿、每個資料夾的標籤與資源回收筒都放在同一個視窗裡。
兩個系統共用同一份程式碼。

<div align="center">
  <a href="docs/main-window.png"><img src="docs/main-window.png" alt="主視窗" width="880"></a>
  <br>
  <em>主視窗與詳細資料面板</em>
  <br><br>
  <a href="docs/overview.png"><img src="docs/overview.png" alt="概覽" width="880"></a>
  <br>
  <em>概覽</em>
  <br><br>
  <a href="docs/settings.png"><img src="docs/settings.png" alt="設定頁" width="880"></a>
  <br>
  <em>設定：語言、配色預設集與區段清單</em>
</div>

## 為什麼

檔案總管一直夠用，直到你想要兩個資料夾並排、想在開啟前先預覽檔案，或想從誤刪中復原。Yet Another File Manager
是我嘗試保留熟悉的操作方式，並加入我每天都會用到的功能，而不是把它們藏在付費方案後面。Windows 與 Linux
共用同一個介面，因此兩邊的視窗看起來一樣。

## 功能

- **分頁與分割檢視** — 同時開啟多個資料夾，並把其中兩個並排顯示。每個分頁都有自己的歷程記錄，分隔線
  可以拖曳。
- **清單與格狀** — 可依任一欄位排序、自選欄位，並讓每個資料夾記住自己的模式、圖示大小與磚塊高度。
  清單採用虛擬化，因此再大的資料夾也能順暢捲動。
- **預覽** — 圖片、影片、PDF 與文字會顯示在詳細資料面板或清單下方的預覽區，並列出選取項目的大小、
  日期、連結目標與屬性。
- **概覽** — 由面板組成的首頁：快速存取、常用資料夾、最近項目、磁碟機，以及你釘選的任何資料夾，
  可排成一到五欄。
- **搜尋** — 浮動搜尋列會隨輸入即時過濾，支援區分大小寫、規則運算式，並可選擇把其餘項目變暗或隱藏。
- **標籤** — 每個資料夾的彩色標籤，可在目錄中一次重新命名或移除，顏色也會跟著資料夾保存。
- **相簿** — 指定存放圖片的資料夾後，會依日期把每張圖片分組，按兩下即可用全尺寸檢視。
- **資源回收筒** — 還原、永久刪除，並列出檔案本體已不存在的殘留記錄。管理員檢視涵蓋所有設定檔的
  殘留項目。
- **主題與語言** — 強調色與次要色、內建與自訂預設集，介面支援 English、繁體中文、简体中文與日本語。
- **該快的地方就快** — 每個資料夾的小型索引（或單一中央資料庫）、延遲載入的系統圖示，以及用 Rust
  掃描相簿的輔助程式。
- **`yafm://` 連結** — 從任何地方在新分頁開啟資料夾，處理常式會依使用者註冊。

## 使用技術

- **C# on .NET 10** — 檔案系統操作、殼層整合、資源回收筒、圖示、SQLite 索引與系統匣。
- **React 19 + TypeScript**，以 **Vite** 打包、 **styled-components** 設計樣式 — 介面本身只負責呈現，
  透過 JSON 訊息與 C# 端溝通。
- **Photino.NET** — 桌面外殼。它在作業系統自己的網頁檢視中顯示介面，因此網頁檢視是執行階段相依：
  Windows 使用 WebView2，Linux 使用 WebKitGTK。
- **Rust**（`Native/yafm-native`）— 大量相簿掃描與 ZIP 建立。輔助程式不存在時，受控的後備實作仍能
  讓程式正常運作。

## 執行

發行版本是 **自包含**的——已一併打包 .NET 執行階段，因此不需另外安裝。作業系統仍需提供什麼，列在下面
各系統的說明中。

除了純壓縮檔外，還發行四種套件格式：

| 檔案                                          | 用途                                                                                                                                      |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `YetAnotherFileManager-<version>-win-x64.msi` | 每位使用者的 Windows 安裝程式：安裝到 `%LOCALAPPDATA%\Programs\Yet Another File Manager`，建立開始功能表項目與桌面捷徑，且不需要管理員權限。 |
| `yafm-<version>-1.fcXX.x86_64.rpm`            | Fedora 套件：`sudo dnf install ./yafm-<version>-*.rpm`。安裝到 `/opt/YetAnotherFileManager`，提供 `yafm` 指令、桌面項目與圖示。           |
| `yafm_<version>_amd64.deb`                    | Debian/Ubuntu 套件：`sudo apt install ./yafm_<version>_amd64.deb`。配置與 RPM 相同。                                                      |
| `yafm-<version>-1-x86_64.pkg.tar.zst`         | Arch Linux 套件：`sudo pacman -U yafm-<version>-1-x86_64.pkg.tar.zst`。配置與 RPM 相同。                                                  |

### Windows

1. Microsoft Edge **WebView2 執行階段**。Windows 10 與 11 已內建；其他版本需要
   [Microsoft 的安裝程式](https://developer.microsoft.com/microsoft-edge/webview2/)。
2. MSI 以每位使用者安裝，不需要提高權限。
3. 建置版本未經程式碼簽署，因此第一次執行時 SmartScreen 可能會警告。請選擇 **更多資訊** → **仍要執行**。

### Linux

1. 網頁檢視需要 **WebKitGTK 4.1**，系統匣圖示需要 **libnotify**。套件會自動帶入；純壓縮檔則需自行安裝。
2. Linux 版本主要在 **Fedora 搭配 KDE Plasma（Wayland）** 上測試。其他發行版與桌面環境尚未測試；
   若視窗無法啟動，請先檢查執行階段函式庫。

## 從原始碼建置

```bash
git clone https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager.git
cd YetAnotherFileManager
dotnet build YetAnotherFileManager/YetAnotherFileManager.csproj
```

介面是獨立的 Vite 專案：

```bash
cd YetAnotherFileManager/UserInterface
npm install
npm run build     # 寫入 Resources/wwwroot，Release 建置會提供這些檔案
```

**Debug** 建置會連到 Vite 開發伺服器，介面可熱重載：

```bash
cd YetAnotherFileManager/UserInterface
npm run dev       # http://127.0.0.1:3100
```

Rust 輔助程式對建置而言是選用的；沒有它時相簿會改用受控的後備實作：

```bash
cargo build --release --manifest-path YetAnotherFileManager/Native/yafm-native/Cargo.toml
```

網站與說明文件位於 `Site`：

```bash
cd Site
npm install
npm run dev
```

## 致謝

- [Sigma File Manager](https://github.com/aleksey-hoffman/sigma-file-manager)，作者 Aleksey Hoffman —
  早期在版面與功能規劃上的參考。

## 授權

MIT — 請見 [LICENSE](LICENSE)。
