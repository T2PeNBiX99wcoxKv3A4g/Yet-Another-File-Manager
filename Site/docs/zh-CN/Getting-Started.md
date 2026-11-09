# 开始使用

Yet Another File Manager 是 Windows 和 Linux 上的桌面文件管理器。它是一个窗口，内含标签页、分屏视图、
预览、图库和回收站，并把设置和缓存放在你浏览的文件夹之外。

## 安装

从[发布页面](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest)选择适合你系统的包：

| 系统 | 包 |
| --- | --- |
| Windows 10/11 | `YetAnotherFileManager-<version>-win-x64.msi` |
| Fedora | `yafm-<version>-1.*.x86_64.rpm` |
| Debian / Ubuntu | `yafm_<version>_amd64.deb` |
| Arch Linux | `yafm-<version>-1-x86_64.pkg.tar.zst` |

构建版本是自包含的：.NET 运行时已一并打包，因此无需另外安装。Windows 需要 WebView2 运行时
（Windows 10 和 11 已内置）。Linux 需要 WebKitGTK 4.1 和 libnotify，安装包会自动带上。

Windows 版本未经代码签名，因此首次运行时 SmartScreen 可能会警告；请选择 **更多信息** →
**仍要运行**。

## 首次启动

窗口会打开在**概览**，也就是由面板组成的主页：快速访问、常用、最近、主文件夹、驱动器、共享和收藏。
左侧边栏可打开概览、回收站、图库和设置，并列出你固定到快速访问的文件夹。

关闭再打开程序时会恢复标签页，除非你在[设置](Settings-and-Shortcuts)中关闭此行为。

关闭窗口不会退出程序，而是隐藏到托盘，标签页与分享会继续运行；要重新打开或退出，请使用托盘图标。

## 打开文件夹

- 双击文件夹，或选中后按 `Enter`。
- 在上方地址栏输入路径；`Ctrl+L` 会把焦点移到那里。
- 把文件或文件夹拖放到窗口上即可复制或移动。
- `yafm://<path>` 形式的链接会在新标签页打开该文件夹。可在[设置](Settings-and-Shortcuts) → 应用中
  注册此处理方式。

## 程序把文件放在哪里

- 设置：程序的设置文件夹（Windows 为 `%APPDATA%\YetAnotherFileManager`，Linux 为
  `~/.config/YetAnotherFileManager`）。
- 缓存与日志：对应的数据文件夹（`%LOCALAPPDATA%` 或 `~/.local/share`）。
- 每个文件夹的数据：文件夹内的隐藏文件 `.yafm-index.db`；若在[设置](Settings-and-Shortcuts)中关闭
  文件夹索引，则改用单一中央数据库。

删除 `.yafm-index.db` 只会让下次打开变慢，文件夹本身不受影响。
