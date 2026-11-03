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

/** Applies the two theme colours as CSS variables; null values restore the default blue theme. */
export function applyTheme(accent: string | null | undefined, secondary: string | null | undefined) {
    const primary = normalizeColor(accent, DefaultAccentColor);
    const second = normalizeColor(secondary, DefaultSecondaryColor);
    const [r, g, b] = rgb(primary);
    const [sr, sg, sb] = rgb(second);
    const root = document.documentElement.style;

    root.setProperty("--accent-primary", primary);
    root.setProperty("--accent-rgb", `${r}, ${g}, ${b}`);
    root.setProperty("--accent-secondary", second);
    root.setProperty("--accent-secondary-rgb", `${sr}, ${sg}, ${sb}`);
    root.setProperty("--border-color", `rgba(${r}, ${g}, ${b}, 0.13)`);
    root.setProperty("--border-color-hover", `rgba(${r}, ${g}, ${b}, 0.40)`);
    root.setProperty("--border-color-focus", primary);
    root.setProperty("--accent-gradient", `linear-gradient(135deg, ${primary} 0%, ${second} 100%)`);
    root.setProperty("--accent-glow", `0 0 28px rgba(${r}, ${g}, ${b}, 0.28)`);
    root.setProperty("--selection-bg", `rgba(${r}, ${g}, ${b}, 0.11)`);
    root.setProperty("--selection-border", `rgba(${r}, ${g}, ${b}, 0.36)`);
}
