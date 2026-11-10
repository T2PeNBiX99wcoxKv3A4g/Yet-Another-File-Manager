<div align="center">
  <img src="icon.svg" alt="" width="120">
  <h1>Yet Another File Manager</h1>
  <p><strong>把所有东西放进一个窗口的文件管理器。</strong></p>
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

标签页、预览、压缩包、标签和图库都在同一个窗口里的桌面文件管理器。

<div align="center">
  <a href="docs/main-window.png"><img src="docs/main-window.png" alt="主窗口" width="880"></a>
  <br>
  <em>主窗口，带详细信息面板</em>
  <br><br>
  <a href="docs/overview.png"><img src="docs/overview.png" alt="概览" width="880"></a>
  <br>
  <em>概览</em>
  <br><br>
  <a href="docs/settings.png"><img src="docs/settings.png" alt="设置页" width="880"></a>
  <br>
  <em>设置：颜色预设与分区列表</em>
</div>

## 能做什么

- **标签页与分屏** — 同时打开多个文件夹，并排显示两个；每个标签页有自己的历史记录。
- **列表与网格** — 按任意列排序、选择要显示的列、拖动标题调整列宽，每个文件夹记住自己的布局。
- **预览** — 图片、视频、PDF 和文本显示在列表旁边或下方，并列出选中项目的大小、日期、链接目标和属性。
- **压缩包** — 把 ZIP、7z、RAR、TAR 以及 7-Zip 能读的格式当作文件夹打开，分卷和加密的也一样；创建
  ZIP、7z、TAR 时可指定 AES 与分卷，ZIP 还可选择压缩方式。
- **概览** — 由面板组成的主页：快速访问、常用、最近、驱动器、共享、收藏和任意文件夹，一到五列。
- **搜索与标签** — 输入即过滤的搜索栏（区分大小写、正则表达式）；标签只有一个全局目录，颜色也共享。
- **图库** — 把指定文件夹里的图片按日期分组，双击即可原尺寸查看。
- **回收站** — 还原、永久删除，或清理文件已不存在的记录。
- **文件操作在应用内完成** — 复制、移动、重命名和删除都由应用执行，显示进度并自己写入回收站记录；
  历史记录可以撤销。
- **共享** — 把文件夹提供给已配对的设备，或同一网络中的任何浏览器。
- **速度** — 每个文件夹的小型索引（或一个中央数据库）、延迟加载的图标，以及处理批量工作的 Rust 辅助程序。
- **剪切与粘贴** — 托盘中显示剪贴板内容，以及下次粘贴会移动哪些项目。

## 用了什么

- **C# / .NET 10** — 文件操作、Shell 集成、回收站、图标、SQLite 索引和托盘。
- **React 19 + TypeScript**（**Vite**、**styled-components**） — 界面。只负责显示，通过 JSON 消息与
  C# 端通信。
- **Photino.NET** — 桌面外壳。Web 视图来自系统：Windows 用 WebView2，Linux 用 WebKitGTK。
- **Rust**（`Native/yafm-native`） — 图库扫描、创建压缩包（ZIP 与 7z）、测量和删除目录树。它是构建的
  一部分：没有 cargo 构建会停止，缺少库应用无法启动。

## 安装

发布版本自带 .NET 运行时，除了 Web 视图（以及 Linux 的托盘库）外不需要安装别的东西。

| 文件 | 适用 |
| --- | --- |
| `YetAnotherFileManager-<version>-win-x64.msi` | Windows（按用户安装，无需管理员权限） |
| `yafm-<version>-1.fcXX.x86_64.rpm` | Fedora — `sudo dnf install ./yafm-<version>-*.rpm` |
| `yafm_<version>_amd64.deb` | Debian / Ubuntu — `sudo apt install ./yafm_<version>_amd64.deb` |
| `yafm-<version>-1-x86_64.pkg.tar.zst` | Arch — `sudo pacman -U yafm-<version>-1-x86_64.pkg.tar.zst` |

Windows 10/11 自带 WebView2；构建没有代码签名，首次运行时 SmartScreen 可能提示一次。Linux 需要
WebKitGTK 4.1 和 libnotify，目前在 Fedora + KDE Plasma（Wayland）上测试。剪贴板在 Wayland 使用
wl-clipboard，在 X11 使用 xclip。

脚本可以用同一个选择器代替系统对话框：

```bash
yafm --pick-folder [--multiple] [--initial <path>] [--output <file>]
yafm --pick-file --filter "*.png;*.jpg" [--multiple] [--initial <path>] [--output <file>]
```

选中的路径会逐行输出到标准输出；取消时退出码为 `1`。

## 构建

```bash
git clone https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager.git
cd YetAnotherFileManager
dotnet build YetAnotherFileManager/YetAnotherFileManager.csproj   # 同时会运行 cargo
```

界面是单独的 Vite 项目：

```bash
cd YetAnotherFileManager/UserInterface
npm install
npm run build     # 输出到 Resources/wwwroot，Release 构建会使用它
npm run dev       # Debug 构建连接这里: http://127.0.0.1:3100
```

cargo 是必需的，缺少时构建会停止。网站与文档在 `Site`：

```bash
cd Site
npm install
npm run dev
```

## 致谢

- [Sigma File Manager](https://github.com/aleksey-hoffman/sigma-file-manager)（Aleksey Hoffman） —
  早期布局与功能组成的参考。

## 许可

MIT — 见 [LICENSE](LICENSE)。
