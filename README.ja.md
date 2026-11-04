<div align="center">
  <img src="icon.svg" alt="" width="120">
  <h1>Yet Another File Manager</h1>
  <p><strong>すべてを 1 つのウィンドウにまとめるファイルマネージャー。</strong></p>
  <p>
    <a href="https://t2penbix99wcoxkv3a4g.github.io/Yet-Another-File-Manager/">ウェブサイト</a> ·
    <a href="https://t2penbix99wcoxkv3a4g.github.io/Yet-Another-File-Manager/#/docs/Getting-Started">ドキュメント</a>
  </p>
  <p>
    <a href="README.md">English</a> ·
    <a href="README.zh-CN.md">简体中文</a> ·
    <a href="README.zh-TW.md">繁體中文</a>
  </p>
</div>

Yet Another File Manager は Windows と Linux 向けのデスクトップファイルマネージャーです。フォルダーを
リストまたはグリッドで表示し、画像・動画・ドキュメントをその横でプレビューします。タブ、分割表示、
検索、ギャラリー、フォルダーごとのタグ、ごみ箱を同じウィンドウにまとめ、両方の OS で同じコードを
使っています。

<div align="center">
  <a href="docs/main-window.png"><img src="docs/main-window.png" alt="メインウィンドウ" width="880"></a>
  <br>
  <em>メインウィンドウと詳細パネル</em>
  <br><br>
  <a href="docs/overview.png"><img src="docs/overview.png" alt="概要" width="880"></a>
  <br>
  <em>概要</em>
  <br><br>
  <a href="docs/settings.png"><img src="docs/settings.png" alt="設定画面" width="880"></a>
  <br>
  <em>設定: 言語、カラープリセット、セクション一覧</em>
</div>

## なぜ作ったか

エクスプローラーは十分に便利ですが、2 つのフォルダーを並べたい、開く前に中身を確認したい、誤って
削除したものを戻したい、と思うことがあります。Yet Another File Manager は、慣れた操作を保ちながら、
毎日使う機能を有料プランの奥に隠さずに追加する試みです。Windows と Linux で同じインターフェースを
使うため、どちらでも同じ見た目になります。

## 機能

- **タブと分割表示** — 複数のフォルダーを同時に開き、そのうち 2 つを並べて表示します。タブはそれぞれ
  の履歴を持ち、仕切りはドラッグできます。
- **リストとグリッド** — 任意の列で並べ替え、列を選び、フォルダーごとにモード、アイコンサイズ、タイル
  の高さを記憶します。リストは仮想化されているため、巨大なフォルダーでも滑らかにスクロールします。
- **プレビュー** — 画像、動画、PDF、テキストを詳細パネルまたはリスト下の領域に表示し、選択項目の
  サイズ、日時、リンク先、属性も示します。
- **概要** — パネルで作るホーム画面。クイックアクセス、よく使うフォルダー、最近の項目、ドライブ、
  ピン留めしたフォルダーを 1〜5 列で並べられます。
- **検索** — 入力しながら絞り込むフローティング検索バー。大文字と小文字の区別、正規表現、残りを淡色
  表示にするか非表示にするかを選べます。
- **タグ** — フォルダーごとの色付きタグ。カタログから一度に名前変更や削除ができ、色もフォルダーと
  一緒に保存されます。
- **ギャラリー** — 画像のあるフォルダーを指定すると、すべての画像を日付ごとにまとめ、ダブルクリックで
  原寸表示になります。
- **ごみ箱** — 復元、完全削除、本体がすでにない残存レコードの一覧。管理者ビューでは全プロファイルの
  残りを表示します。
- **テーマと言語** — アクセント色とセカンダリ色、組み込みと保存したプリセット、English、繁體中文、
  简体中文、日本語のインターフェース。
- **必要な場所で速く** — フォルダーごとの小さなインデックス（または 1 つの中央データベース）、遅延
  読み込みのシステムアイコン、ギャラリーを走査する Rust ヘルパー。
- **`yafm://` リンク** — どこからでも新しいタブでフォルダーを開けます。ハンドラーはユーザーごとに
  登録されます。

## 使用技術

- **C# on .NET 10** — ファイルシステム操作、シェル統合、ごみ箱、アイコン、SQLite インデックス、
  トレイ。
- **React 19 + TypeScript**、 **Vite** でバンドル、 **styled-components** でスタイル — インターフェース
  は表示のみを担当し、C# 側と JSON メッセージをやり取りします。
- **Photino.NET** — デスクトップシェル。OS 自身の Web ビューにインターフェースを表示するため、
  Web ビューは実行時の依存です（Windows は WebView2、Linux は WebKitGTK）。
- **Rust**（`Native/yafm-native`）— 大量のギャラリースキャンと ZIP 作成。ヘルパーがない場合でも
  マネージドの代替実装で動作します。

## 実行

公開ビルドは **自己完結型**で、.NET ランタイムを同梱しているため追加のインストールは不要です。
OS 側で必要なものは、各システムの説明に記載しています。

プレーンなアーカイブのほかに、4 種類のパッケージを公開しています。

| ファイル                                      | 内容                                                                                                                                                                                |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `YetAnotherFileManager-<version>-win-x64.msi` | ユーザー単位の Windows インストーラー。`%LOCALAPPDATA%\Programs\Yet Another File Manager` に導入し、スタートメニューとデスクトップにショートカットを作成します。管理者権限は不要です。 |
| `yafm-<version>-1.fcXX.x86_64.rpm`            | Fedora パッケージ: `sudo dnf install ./yafm-<version>-*.rpm`。`/opt/YetAnotherFileManager` に導入し、`yafm` コマンド、デスクトップエントリ、アイコンを追加します。                  |
| `yafm_<version>_amd64.deb`                    | Debian/Ubuntu パッケージ: `sudo apt install ./yafm_<version>_amd64.deb`。配置は RPM と同じです。                                                                                    |
| `yafm-<version>-1-x86_64.pkg.tar.zst`         | Arch Linux パッケージ: `sudo pacman -U yafm-<version>-1-x86_64.pkg.tar.zst`。配置は RPM と同じです。                                                                                |

### Windows

1. Microsoft Edge **WebView2 ランタイム**。Windows 10 と 11 には入っています。それ以外では
   [Microsoft のインストーラー](https://developer.microsoft.com/microsoft-edge/webview2/) が必要です。
2. MSI はユーザー単位でインストールされ、昇格は不要です。
3. ビルドはコード署名されていないため、初回に SmartScreen の警告が出ることがあります。 **詳細情報** → **実行** を選んでください。

### Linux

1. Web ビュー用の **WebKitGTK 4.1** と、トレイアイコン用の **libnotify**。パッケージは両方を自動的に
   導入します。プレーンなアーカイブでは手動で入れてください。
2. Linux 版は主に **Fedora + KDE Plasma（Wayland）** で確認しています。他のディストリビューションや
   デスクトップ環境は未確認です。ウィンドウが起動しない場合は、まずランタイムライブラリを確認して
   ください。

## ソースからビルド

```bash
git clone https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager.git
cd YetAnotherFileManager
dotnet build YetAnotherFileManager/YetAnotherFileManager.csproj
```

インターフェースは独立した Vite プロジェクトです。

```bash
cd YetAnotherFileManager/UserInterface
npm install
npm run build     # Resources/wwwroot に書き込み、Release ビルドが配信します
```

**Debug** ビルドは Vite の開発サーバーに接続し、インターフェースをホットリロードします。

```bash
cd YetAnotherFileManager/UserInterface
npm run dev       # http://127.0.0.1:3100
```

Rust ヘルパーはビルドには必須ではありません。ない場合はギャラリーがマネージド実装に切り替わります。

```bash
cargo build --release --manifest-path YetAnotherFileManager/Native/yafm-native/Cargo.toml
```

ウェブサイトとドキュメントは `Site` にあります。

```bash
cd Site
npm install
npm run dev
```

## クレジット

- [Sigma File Manager](https://github.com/aleksey-hoffman/sigma-file-manager)（Aleksey Hoffman）—
  レイアウトと機能構成の初期の参考にしたプロジェクト。

## ライセンス

MIT — [LICENSE](LICENSE) を参照してください。
