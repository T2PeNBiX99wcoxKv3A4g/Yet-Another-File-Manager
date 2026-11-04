<div align="center">
  <img src="icon.svg" alt="" width="120">
  <h1>Yet Another File Manager</h1>
  <p><strong>把所有东西集中在同一个窗口里的文件管理器。</strong></p>
  <p>
    <a href="https://t2penbix99wcoxkv3a4g.github.io/Yet-Another-File-Manager/">网站</a> ·
    <a href="https://t2penbix99wcoxkv3a4g.github.io/Yet-Another-File-Manager/#/docs/Getting-Started">文档</a>
  </p>
  <p>
    <a href="README.md">English</a> ·
    <a href="README.ja.md">日本語</a> ·
    <a href="README.zh-TW.md">繁體中文</a>
  </p>
</div>

Yet Another File Manager 是 Windows 和 Linux 上的桌面文件管理器。它以列表或网格浏览文件夹，在旁边预览
图片、视频和文档，并把标签页、分屏视图、搜索、图库、每个文件夹的标签和回收站都放在同一个窗口里。
两个系统共用同一份代码。

<div align="center">
  <a href="docs/main-window.png"><img src="docs/main-window.png" alt="主窗口" width="880"></a>
  <br>
  <em>主窗口与详细信息面板</em>
  <br><br>
  <a href="docs/overview.png"><img src="docs/overview.png" alt="概览" width="880"></a>
  <br>
  <em>概览</em>
  <br><br>
  <a href="docs/settings.png"><img src="docs/settings.png" alt="设置页" width="880"></a>
  <br>
  <em>设置：语言、颜色预设与分区列表</em>
</div>

## 为什么

资源管理器一直够用，直到你想要两个文件夹并排、想在打开前先预览文件，或想从误删中恢复。
Yet Another File Manager 是我尝试保留熟悉的操作方式，并加入我每天都会用到的功能，而不是把它们藏在付费
方案后面。Windows 与 Linux 共用同一个界面，因此两边的窗口看起来一样。

## 功能

- **标签页与分屏** — 同时打开多个文件夹，并把其中两个并排显示。每个标签页都有自己的历史记录，分隔线
  可以拖动。
- **列表与网格** — 可按任意列排序、自选列，并让每个文件夹记住自己的模式、图标大小和磁贴高度。
  列表采用虚拟化，因此再大的文件夹也能流畅滚动。
- **预览** — 图片、视频、PDF 和文本会显示在详细信息面板或列表下方的预览区，并列出选中项目的大小、
  日期、链接目标和属性。
- **概览** — 由面板组成的主页：快速访问、常用文件夹、最近项目、驱动器，以及你固定的任何文件夹，
  可排成一到五列。
- **搜索** — 浮动搜索栏会随输入即时过滤，支持区分大小写、正则表达式，并可选择把其余项目变暗或隐藏。
- **标签** — 每个文件夹的彩色标签，可在目录中一次重命名或移除，颜色也会随文件夹保存。
- **图库** — 指定存放图片的文件夹后，会按日期把每张图片分组，双击即可用原始尺寸查看。
- **回收站** — 还原、永久删除，并列出文件本体已不存在的残留记录。管理员视图涵盖所有配置文件的
  残留项。
- **主题与语言** — 强调色与辅助色、内置与自定义预设，界面支持 English、繁體中文、简体中文与日本語。
- **该快的地方就快** — 每个文件夹的小型索引（或单一中央数据库）、延迟加载的系统图标，以及用 Rust
  扫描图库的辅助程序。
- **`yafm://` 链接** — 从任何地方在新标签页打开文件夹，处理程序会按用户注册。

## 使用技术

- **C# on .NET 10** — 文件系统操作、外壳集成、回收站、图标、SQLite 索引与系统托盘。
- **React 19 + TypeScript**，以 **Vite** 打包、 **styled-components** 设计样式 — 界面本身只负责呈现，
  通过 JSON 消息与 C# 端通信。
- **Photino.NET** — 桌面外壳。它在操作系统自己的网页视图中显示界面，因此网页视图是运行时依赖：
  Windows 使用 WebView2，Linux 使用 WebKitGTK。
- **Rust**（`Native/yafm-native`）— 大量图库扫描与 ZIP 创建。辅助程序不存在时，托管的回退实现仍能
  让程序正常运行。

## 运行

发布版本是 **自包含**的——已一并打包 .NET 运行时，因此无需另外安装。操作系统仍需提供什么，列在下面
各系统的说明中。

除了纯压缩包外，还发布四种包格式：

| 文件                                          | 用途                                                                                                                                    |
|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| `YetAnotherFileManager-<version>-win-x64.msi` | 每位用户的 Windows 安装程序：安装到 `%LOCALAPPDATA%\Programs\Yet Another File Manager`，创建开始菜单项和桌面快捷方式，且不需要管理员权限。 |
| `yafm-<version>-1.fcXX.x86_64.rpm`            | Fedora 包：`sudo dnf install ./yafm-<version>-*.rpm`。安装到 `/opt/YetAnotherFileManager`，提供 `yafm` 命令、桌面项和图标。             |
| `yafm_<version>_amd64.deb`                    | Debian/Ubuntu 包：`sudo apt install ./yafm_<version>_amd64.deb`。布局与 RPM 相同。                                                      |
| `yafm-<version>-1-x86_64.pkg.tar.zst`         | Arch Linux 包：`sudo pacman -U yafm-<version>-1-x86_64.pkg.tar.zst`。布局与 RPM 相同。                                                  |

### Windows

1. Microsoft Edge **WebView2 运行时**。Windows 10 和 11 已内置；其他版本需要
   [Microsoft 的安装程序](https://developer.microsoft.com/microsoft-edge/webview2/)。
2. MSI 以每位用户安装，不需要提升权限。
3. 构建版本未经代码签名，因此首次运行时 SmartScreen 可能会警告。请选择 **更多信息** → **仍要运行**。

### Linux

1. 网页视图需要 **WebKitGTK 4.1**，系统托盘图标需要 **libnotify**。安装包会自动带上；纯压缩包则需
   自行安装。
2. Linux 版本主要在 **Fedora 搭配 KDE Plasma（Wayland）** 上测试。其他发行版和桌面环境尚未测试；
   若窗口无法启动，请先检查运行时库。

## 从源码构建

```bash
git clone https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager.git
cd YetAnotherFileManager
dotnet build YetAnotherFileManager/YetAnotherFileManager.csproj
```

界面是独立的 Vite 项目：

```bash
cd YetAnotherFileManager/UserInterface
npm install
npm run build     # 写入 Resources/wwwroot，Release 构建会提供这些文件
```

**Debug** 构建会连接 Vite 开发服务器，界面可热重载：

```bash
cd YetAnotherFileManager/UserInterface
npm run dev       # http://127.0.0.1:3100
```

Rust 辅助程序对构建而言是可选的；没有它时图库会改用托管的回退实现：

```bash
cargo build --release --manifest-path YetAnotherFileManager/Native/yafm-native/Cargo.toml
```

网站与文档位于 `Site`：

```bash
cd Site
npm install
npm run dev
```

## 致谢

- [Sigma File Manager](https://github.com/aleksey-hoffman/sigma-file-manager)，作者 Aleksey Hoffman —
  早期在布局与功能规划上的参考。

## 许可

MIT — 请见 [LICENSE](LICENSE)。
