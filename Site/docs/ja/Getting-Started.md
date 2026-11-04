# はじめに

YetAnotherFileManager は Windows と Linux 向けのデスクトップファイルマネージャーです。タブ、分割表示、
プレビュー、ギャラリー、ごみ箱を 1 つのウィンドウにまとめ、設定とキャッシュは閲覧するフォルダーの外に
置きます。

## インストール

[リリースページ](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest)から環境に合うパッケージを選びます。

| システム | パッケージ |
| --- | --- |
| Windows 10/11 | `YetAnotherFileManager-<version>-win-x64.msi` |
| Fedora | `yafm-<version>-1.*.x86_64.rpm` |
| Debian / Ubuntu | `yafm_<version>_amd64.deb` |
| Arch Linux | `yafm-<version>-1-x86_64.pkg.tar.zst` |

ビルドは自己完結型で、.NET ランタイムを同梱しているため追加のインストールは不要です。Windows では
WebView2 ランタイムも必要です（Windows 10 と 11 には入っています）。Linux では WebKitGTK 4.1 と
libnotify が必要で、パッケージが自動的に導入します。

Windows 版はコード署名されていないため、初回に SmartScreen の警告が出ることがあります。
**詳細情報** → **実行** を選んでください。

## 初回起動

ウィンドウは**概要**で開きます。クイックアクセス、よく使う、最近、ホーム、ドライブのパネルで作られた
ホーム画面です。左のサイドバーから概要、ごみ箱、ギャラリー、設定を開けます。ピン留めしたフォルダーも
ここに並びます。

終了して開き直すとタブが復元されます。[設定](Settings-and-Shortcuts)で無効にできます。

## フォルダーを開く

- フォルダーをダブルクリックするか、選んで `Enter`。
- 上部のアドレスバーにパスを入力します。`Ctrl+L` でそこへ移動します。
- ファイルやフォルダーをウィンドウにドロップするとコピーまたは移動します。
- `yafm://<path>` 形式のリンクは新しいタブでそのフォルダーを開きます。[設定](Settings-and-Shortcuts) →
  アプリケーションから登録できます。

## アプリがファイルを置く場所

- 設定: アプリの設定フォルダー（Windows は `%APPDATA%\YetAnotherFileManager`、Linux は
  `~/.config/YetAnotherFileManager`）。
- キャッシュとログ: 対応するデータフォルダー（`%LOCALAPPDATA%` または `~/.local/share`）。
- フォルダーごとのデータ: 各フォルダー内の隠しファイル `.yafm-index.db`。[設定](Settings-and-Shortcuts)
  でフォルダーインデックスを無効にすると、1 つの中央データベースを使います。

`.yafm-index.db` を削除しても次回の起動が遅くなるだけで、フォルダーの中身は変わりません。
