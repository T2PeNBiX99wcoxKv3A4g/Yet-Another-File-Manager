export type ShareLanguage = "en" | "ja" | "zh-CN" | "zh-TW";

export const ShareLanguages: { id: ShareLanguage; label: string }[] = [
    {id: "en", label: "English"},
    {id: "ja", label: "日本語"},
    {id: "zh-CN", label: "简体中文"},
    {id: "zh-TW", label: "繁體中文"},
];

export interface ShareStrings {
    sharedFolders: string;
    noShares: string;
    reading: string;
    empty: string;
    upload: string;
    uploading: string;
    refresh: string;
    up: string;
    name: string;
    size: string;
    modified: string;
    footnote: string;
    showHidden: string;
    showSystem: string;
    language: string;
    download: string;
    error: string;
    checkingAccess: string;
    waitingForApproval: string;
    accessDenied: string;
    retryIn: string;
    tryAgain: string;
    password: string;
    unlock: string;
    wrongPassword: string;
    accessTitle: string;
    passwordNote: string;
}

const English: ShareStrings = {
    sharedFolders: "Shared folders",
    noShares: "No folders are shared over the web on this device.",
    reading: "reading",
    empty: "This folder is empty.",
    upload: "Upload",
    uploading: "Uploading…",
    refresh: "Refresh",
    up: "Up one folder",
    name: "Name",
    size: "Size",
    modified: "Modified",
    footnote: "Click a file to download it. Uploaded files are written into the folder you are viewing.",
    showHidden: "Show hidden files",
    showSystem: "Show system files",
    language: "Language",
    download: "Download",
    error: "Something went wrong.",
    checkingAccess: "Checking access…",
    waitingForApproval: "Waiting for approval on the device that shares these folders.",
    accessDenied: "This device is not allowed to open the share.",
    retryIn: "Try again in {seconds} seconds.",
    tryAgain: "Try again",
    password: "Share password",
    unlock: "Unlock",
    wrongPassword: "That password did not match. Try again after the wait.",
    accessTitle: "Web share access",
    passwordNote: "Enter the share password to open these folders. This device is then remembered.",
};

const Japanese: ShareStrings = {
    sharedFolders: "共有フォルダー",
    noShares: "この端末では Web で共有しているフォルダーがありません。",
    reading: "読み込み中…",
    empty: "このフォルダーは空です。",
    upload: "アップロード",
    uploading: "アップロード中…",
    refresh: "更新",
    up: "上の階層へ",
    name: "名前",
    size: "サイズ",
    modified: "更新日時",
    footnote: "ファイルをクリックするとダウンロードします。アップロードしたファイルは表示中のフォルダーに保存されます。",
    showHidden: "隠しファイルを表示",
    showSystem: "システムファイルを表示",
    language: "言語",
    download: "ダウンロード",
    error: "問題が発生しました。",
    checkingAccess: "アクセスを確認しています…",
    waitingForApproval: "共有元のデバイスで承認を待っています。",
    accessDenied: "このデバイスは共有を開くことを許可されていません。",
    retryIn: "{seconds} 秒後にもう一度お試しください。",
    tryAgain: "再試行",
    password: "共有パスワード",
    unlock: "ロック解除",
    wrongPassword: "パスワードが一致しません。待ってからもう一度お試しください。",
    accessTitle: "Web 共有アクセス",
    passwordNote: "これらのフォルダーを開くには共有パスワードを入力してください。このデバイスは記憶されます。",
};

const SimplifiedChinese: ShareStrings = {
    sharedFolders: "共享文件夹",
    noShares: "此设备没有通过网页共享任何文件夹。",
    reading: "读取中…",
    empty: "此文件夹是空的。",
    upload: "上传",
    uploading: "上传中…",
    refresh: "刷新",
    up: "上一级",
    name: "名称",
    size: "大小",
    modified: "修改时间",
    footnote: "点击文件即可下载。上传的文件会写入当前浏览的文件夹。",
    showHidden: "显示隐藏文件",
    showSystem: "显示系统文件",
    language: "语言",
    download: "下载",
    error: "发生错误。",
    checkingAccess: "正在检查访问权限…",
    waitingForApproval: "正在等待分享端设备批准。",
    accessDenied: "此设备没有打开分享的权限。",
    retryIn: "请在 {seconds} 秒后重试。",
    tryAgain: "重试",
    password: "分享密码",
    unlock: "解锁",
    wrongPassword: "密码不正确，请等待后再试。",
    accessTitle: "Web 分享访问",
    passwordNote: "输入分享密码即可打开这些文件夹，稍后会记住此设备。",
};

const TraditionalChinese: ShareStrings = {
    sharedFolders: "共享資料夾",
    noShares: "此裝置沒有透過網頁分享任何資料夾。",
    reading: "讀取中…",
    empty: "此資料夾是空的。",
    upload: "上傳",
    uploading: "上傳中…",
    refresh: "重新整理",
    up: "上一層",
    name: "名稱",
    size: "大小",
    modified: "修改時間",
    footnote: "點擊檔案即可下載。上傳的檔案會寫入目前瀏覽的資料夾。",
    showHidden: "顯示隱藏檔案",
    showSystem: "顯示系統檔案",
    language: "語言",
    download: "下載",
    error: "發生錯誤。",
    checkingAccess: "正在檢查存取權限…",
    waitingForApproval: "正在等待分享端裝置核准。",
    accessDenied: "此裝置沒有開啟分享的權限。",
    retryIn: "請在 {seconds} 秒後重試。",
    tryAgain: "重試",
    password: "分享密碼",
    unlock: "解鎖",
    wrongPassword: "密碼不正確，請等待後再試。",
    accessTitle: "Web 分享存取",
    passwordNote: "輸入分享密碼即可開啟這些資料夾，之後會記住此裝置。",
};

const Dictionaries: Record<ShareLanguage, ShareStrings> = {
    en: English,
    ja: Japanese,
    "zh-CN": SimplifiedChinese,
    "zh-TW": TraditionalChinese,
};

/** The browser's saved choice, then its own language, then English. */
export function detectShareLanguage(): ShareLanguage {
    try {
        const saved = localStorage.getItem("yafm.share.language");
        if (saved && saved in Dictionaries)
            return saved as ShareLanguage;
    } catch {
        // Private browsing can refuse storage; the system language still works.
    }

    return normalizeShareLanguage(navigator.language);
}

/** Maps a locale code to one of the four bundles the app ships. */
export function normalizeShareLanguage(value: string | null | undefined): ShareLanguage {
    const language = (value ?? "").toLowerCase();

    if (language.startsWith("ja"))
        return "ja";

    if (language.startsWith("zh"))
        return language.includes("tw") || language.includes("hk") || language.includes("hant")
            ? "zh-TW"
            : "zh-CN";

    return "en";
}

/** Whether the visitor already picked a language; a saved choice beats the app's setting. */
export function hasSavedShareLanguage(): boolean {
    try {
        return localStorage.getItem("yafm.share.language") !== null;
    } catch {
        return false;
    }
}

export function shareStrings(language: ShareLanguage): ShareStrings {
    return Dictionaries[language] ?? English;
}

export function rememberShareLanguage(language: ShareLanguage): void {
    try {
        localStorage.setItem("yafm.share.language", language);
    } catch {
        // The picker still works for this visit even when storage is unavailable.
    }
}
