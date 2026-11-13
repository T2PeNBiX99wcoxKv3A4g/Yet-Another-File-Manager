import type {LocalizationKey} from "./api/i18n";

/** Two colours a preset applies at once, like a Windows accent palette does with one. */
export interface ThemePreset {
    name: LocalizationKey;
    accent: string;
    secondary: string;
}

/** The palettes the app ships with; wallpapers use the same list for their colour variants. */
export const ThemePresets: ThemePreset[] = [
    {name: "Blue", accent: "#3b82f6", secondary: "#6366f1"},
    {name: "Indigo", accent: "#6366f1", secondary: "#8b5cf6"},
    {name: "Violet", accent: "#8b5cf6", secondary: "#d946ef"},
    {name: "Teal", accent: "#14b8a6", secondary: "#0ea5e9"},
    {name: "Green", accent: "#22c55e", secondary: "#14b8a6"},
    {name: "Amber", accent: "#f59e0b", secondary: "#f97316"},
    {name: "Rose", accent: "#f43f5e", secondary: "#ec4899"},
    {name: "Slate", accent: "#64748b", secondary: "#94a3b8"},
];
