import type {ResolvedTheme, ThemeMode} from "@photino-net-utils/bridge";

/** The blue theme the app ships with. Custom colours override these two tokens. */
export const DefaultAccentColor = "#3b82f6";
export const DefaultSecondaryColor = "#6366f1";

const hex = /^#?([0-9a-f]{6})$/i;

/** A usable `#rrggbb` value, or the fallback when the stored value is missing or malformed. */
export function normalizeColor(value: string | null | undefined, fallback: string): string {
    if (!value)
        return fallback;

    const match = hex.exec(value.trim());
    return match ? `#${match[1].toLowerCase()}` : fallback;
}

function rgb(value: string): [number, number, number] {
    const match = hex.exec(value);
    if (!match)
        return [59, 130, 246];

    const number = Number.parseInt(match[1], 16);
    return [(number >> 16) & 255, (number >> 8) & 255, number & 255];
}

/** Hue and saturation, which is all the surface colours need from the accent. */
function hueOf(value: string): { hue: number; saturation: number } {
    const [r, g, b] = rgb(value).map((channel) => channel / 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lightness = (max + min) / 2;
    const delta = max - min;

    if (delta === 0)
        return {hue: 0, saturation: 0};

    const saturation = delta / (1 - Math.abs(2 * lightness - 1));
    const raw = max === r
        ? ((g - b) / delta) % 6
        : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4;

    return {hue: (raw * 60 + 360) % 360, saturation: saturation * 100};
}

/** The dark surfaces follow the accent's hue, so a violet theme does not sit on a blue window. */
function surface(hue: number, saturation: number, lightness: number, alpha = 1): string {
    return alpha === 1
        ? `hsl(${hue.toFixed(1)} ${saturation}% ${lightness}%)`
        : `hsl(${hue.toFixed(1)} ${saturation}% ${lightness}% / ${alpha})`;
}

/** `--bg-rgb` lets overlays dim the surface colour instead of painting navy over it. */
function surfaceRgb(hue: number, saturation: number, lightness: number): string {
    const s = saturation / 100;
    const l = lightness / 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((hue / 60) % 2 - 1));
    const m = l - c / 2;
    const [r, g, b] = hue < 60 ? [c, x, 0]
        : hue < 120 ? [x, c, 0]
            : hue < 180 ? [0, c, x]
                : hue < 240 ? [0, x, c]
                    : hue < 300 ? [x, 0, c] : [c, 0, x];

    return [r, g, b].map((channel) => Math.round((channel + m) * 255)).join(", ");
}

/** A stored theme mode, whatever an older settings file may contain. */
export function normalizeThemeMode(value: string | null | undefined): ThemeMode {
    return value === "light" || value === "dark" ? value : "system";
}

/**
 * Applies the two theme colours as CSS variables; null values restore the default blue theme.
 * The surfaces follow the accent's hue in both palettes: the dark one stays near black, the light
 * one near white, so every preset has a light and a dark version without a second colour table.
 */
export function applyTheme(accent: string | null | undefined, secondary: string | null | undefined,
                           theme: ResolvedTheme) {
    const primary = normalizeColor(accent, DefaultAccentColor);
    const second = normalizeColor(secondary, DefaultSecondaryColor);
    const [r, g, b] = rgb(primary);
    const [sr, sg, sb] = rgb(second);
    const {hue, saturation} = hueOf(primary);
    const light = theme === "light";
    // Muted accents (slate, grey) still tint the window, just less than a saturated one.
    const tint = Math.round(Math.min(Math.max(saturation * (light ? 0.20 : 0.35), light ? 4 : 6),
        light ? 18 : 30));
    const root = document.documentElement.style;

    root.setProperty("color-scheme", theme);
    root.setProperty("--accent-primary", primary);
    root.setProperty("--accent-rgb", `${r}, ${g}, ${b}`);
    root.setProperty("--accent-secondary", second);
    root.setProperty("--accent-secondary-rgb", `${sr}, ${sg}, ${sb}`);
    root.setProperty("--border-color", `rgba(${r}, ${g}, ${b}, ${light ? 0.20 : 0.13})`);
    root.setProperty("--border-color-hover", `rgba(${r}, ${g}, ${b}, ${light ? 0.45 : 0.40})`);
    root.setProperty("--border-color-focus", primary);
    root.setProperty("--accent-gradient", `linear-gradient(135deg, ${primary} 0%, ${second} 100%)`);
    root.setProperty("--accent-glow", `0 0 28px rgba(${r}, ${g}, ${b}, ${light ? 0.16 : 0.28})`);
    root.setProperty("--selection-bg", `rgba(${r}, ${g}, ${b}, ${light ? 0.16 : 0.11})`);
    root.setProperty("--selection-border", `rgba(${r}, ${g}, ${b}, ${light ? 0.42 : 0.36})`);

    root.setProperty("--bg-primary", surface(hue, tint, light ? 96 : 7));
    root.setProperty("--bg-secondary", surface(hue, tint, light ? 93 : 11));
    root.setProperty("--bg-card", surface(hue, tint, light ? 99 : 14, light ? 0.72 : 0.75));
    root.setProperty("--bg-card-hover", surface(hue, tint, light ? 96 : 20, light ? 0.90 : 0.85));
    root.setProperty("--bg-input", surface(hue, tint, light ? 99 : 9, light ? 0.80 : 0.75));
    root.setProperty("--bg-elevated", surface(hue, tint, light ? 99 : 8, light ? 0.97 : 0.96));
    root.setProperty("--bg-media", surface(hue, tint, light ? 91 : 4));
    root.setProperty("--bg-rgb", surfaceRgb(hue, tint, light ? 96 : 7));
}
