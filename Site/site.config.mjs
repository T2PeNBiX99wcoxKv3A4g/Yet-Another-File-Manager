/**
 * Everything about this project that is not text: where it lives, how it looks, and which pages the
 * documentation holds. Plain JavaScript, because the generators read it with node.
 */
export const site = {
    name: "Yet Another File Manager",
    tagline: "A file manager that keeps previews, a gallery, tags and a recycle bin in one window.",
    description: "Yet Another File Manager is a tabbed file manager with previews, a gallery and tags.",
    url: "https://t2penbix99wcoxkv3a4g.github.io/Yet-Another-File-Manager/",
    icon: "./icon.svg",
    webView2Url: "https://developer.microsoft.com/microsoft-edge/webview2/",
    repository: "https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager",
    languages: ["en", "ja", "zh-CN", "zh-TW"],
    screenshots: {
        gallery: [
            {src: "https://raw.githubusercontent.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/master/docs/main-window.png", alt: "The file list, previews and tabs"},
            {src: "https://raw.githubusercontent.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/master/docs/overview.png", alt: "The overview with its panels"},
            {src: "https://raw.githubusercontent.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/master/docs/settings.png", alt: "The settings"},
        ],
    },
    docs: [
        {
            "slug": "Getting-Started",
            "group": "setup"
        },
        {
            "slug": "Files-and-Views",
            "group": "setup"
        },
        {
            "slug": "Overview-and-Gallery",
            "group": "reference"
        },
        {
            "slug": "Search-Tags-Recycle",
            "group": "reference"
        },
        {
            "slug": "Archives",
            "group": "reference"
        },
        {
            "slug": "Sharing",
            "group": "reference"
        },
        {
            "slug": "Settings-and-Shortcuts",
            "group": "reference"
        }
    ],
    theme: {
        "accent": "#7aa2ff",
        "accentStrong": "#6366f1",
        "background": "#0b0a10",
        "card": "rgba(21, 23, 36, 0.78)",
        "topBar": "rgba(11, 10, 16, 0.82)",
        "textPrimary": "#eef2ff",
        "textSecondary": "#b6c0d8",
        "textMuted": "#6d7893",
        "body": "#d5dcf0",
        "border": "rgba(122, 162, 255, 0.16)",
        "borderHover": "rgba(122, 162, 255, 0.45)"
    },
    creditsUrl: "https://github.com/aleksey-hoffman/sigma-file-manager",
};
