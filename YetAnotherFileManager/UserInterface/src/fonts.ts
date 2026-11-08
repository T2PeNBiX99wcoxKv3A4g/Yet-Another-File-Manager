import {Native} from "@photino-net-utils/bridge";

/** One part of the interface the user can give its own font family. */
export interface FontRole {
    id: string;
    label: string;
    /** What the preview shows in the picker. */
    sample: string;
    /** The CSS variable every component with that role reads. */
    variable: string;
    /** Shown as the default in the picker. */
    fallback: string;
}

/**
 * The roles the settings page offers. "ui" is the app-wide font; the others are the places where a
 * different face is useful (titles, file names, monospace paths and previews).
 */
export const FontRoles: FontRole[] = [
    {id: "ui", label: "Interface", sample: "Yet Another File Manager", variable: "--font-sans", fallback: "Inter"},
    {id: "title", label: "Titles", sample: "Overview · Settings", variable: "--font-title", fallback: "Interface"},
    {id: "names", label: "File names", sample: "holiday-photo.jpg", variable: "--font-names", fallback: "Interface"},
    {id: "details", label: "Details panel", sample: "Size · Modified · Attributes", variable: "--font-details", fallback: "Interface"},
    {id: "path", label: "Address bar", sample: "C:\\Users\\me\\Documents", variable: "--font-path", fallback: "Monospace"},
    {id: "mono", label: "Monospace", sample: "const answer = 42;", variable: "--font-mono", fallback: "JetBrains Mono"},
    {id: "preview", label: "Text preview", sample: "The quick brown fox jumps over the lazy dog.", variable: "--font-preview", fallback: "Monospace"},
];

/** Quotes a family name so spaces and punctuation survive the CSS parser. */
function family(value: string): string {
    return `"${value.replaceAll('"', "")}"`;
}

/**
 * Writes the chosen families onto the root element. A role without a choice falls back to the
 * built-in stack from globals.scss, so removing a font restores the shipped look immediately.
 */
export function applyFonts(fonts: Record<string, string> | null | undefined): void {
    const root = document.documentElement.style;

    for (const role of FontRoles) {
        const chosen = fonts?.[role.id]?.trim();

        if (chosen)
            root.setProperty(role.variable, `${family(chosen)}, var(--font-cjk)`);
        else
            root.removeProperty(role.variable);
    }
}

/** Every font family the operating system offers, for the pickers. */
export async function listFonts(): Promise<string[]> {
    if (!Native.available) return [];

    const data = await Native.request<{ fonts: string[] }>("app.fonts");
    return data.fonts ?? [];
}
