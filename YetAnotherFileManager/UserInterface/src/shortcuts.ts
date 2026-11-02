/** The key combinations the interface listens for; the values are what settings.json holds. */
export interface ShortcutMap {
    goBack: string;
    goForward: string;
    goUp: string;
    find: string;
    closeTab: string;
    newTab: string;
    copy: string;
    cut: string;
    paste: string;
    delete: string;
    deletePermanently: string;
    rename: string;
    selectAll: string;
    invertSelection: string;
    open: string;
    newFolder: string;
    properties: string;
    refresh: string;
    home: string;
    location: string;
    iconsView: string;
    detailsView: string;
    nextTab: string;
    previousTab: string;
    terminal: string;
    hidden: string;
    splitView: string;
    placesPanel: string;
    /** Modifier held while clicking to open something in a new tab. */
    openInNewTab: string;
}

export const DefaultShortcuts: ShortcutMap = {
    goBack: "alt+arrowleft",
    goForward: "alt+arrowright",
    goUp: "alt+arrowup",
    find: "ctrl+f",
    closeTab: "ctrl+w",
    newTab: "ctrl+t",
    copy: "ctrl+c",
    cut: "ctrl+x",
    paste: "ctrl+v",
    delete: "delete",
    deletePermanently: "shift+delete",
    rename: "f2",
    selectAll: "ctrl+a",
    invertSelection: "ctrl+shift+a",
    open: "enter",
    newFolder: "ctrl+shift+n",
    properties: "alt+enter",
    refresh: "f5",
    home: "alt+home",
    location: "ctrl+l",
    iconsView: "ctrl+1",
    detailsView: "ctrl+2",
    nextTab: "ctrl+tab",
    previousTab: "ctrl+shift+tab",
    terminal: "f4",
    hidden: "ctrl+h",
    splitView: "f3",
    placesPanel: "f9",
    openInNewTab: "ctrl",
};

let clickModifier = DefaultShortcuts.openInNewTab;

export function setClickModifier(value: string) {
    clickModifier = value.trim() || DefaultShortcuts.openInNewTab;
}

/** True when the click carried the configured modifier, so it should open a new tab. */
export function wantsNewTab(event: { ctrlKey: boolean; altKey: boolean; shiftKey: boolean }): boolean {
    const parts = clickModifier.split("+").filter(Boolean);
    if (parts.length === 0) return false;

    return parts.every((part) => part === "ctrl" ? event.ctrlKey
        : part === "alt" ? event.altKey
            : part === "shift" ? event.shiftKey
                : false);
}

/** The text form of a key event, e.g. "ctrl+w"; a modifier alone gives "ctrl". */
export function comboOf(event: KeyboardEvent): string {
    const parts: string[] = [];
    if (event.ctrlKey) parts.push("ctrl");
    if (event.altKey) parts.push("alt");
    if (event.shiftKey) parts.push("shift");
    if (event.metaKey) parts.push("meta");

    const key = event.key.toLowerCase();
    const modifier = key === "control" || key === "alt" || key === "shift" || key === "meta";

    if (!modifier) parts.push(key === " " ? "space" : key);

    return parts.join("+");
}

/** "ctrl+w" → "Ctrl + W", so the settings page reads like a keyboard. */
export function prettyShortcut(value: string): string {
    return value
        .split("+")
        .filter(Boolean)
        .map((part) => KeyLabels[part]
            ?? (part.length === 1 ? part.toUpperCase() : part.charAt(0).toUpperCase() + part.slice(1)))
        .join(" + ");
}

/** Keys whose own name is not readable enough when title-cased, or that read better as a glyph. */
const KeyLabels: Record<string, string> = {
    arrowleft: "←",
    arrowright: "→",
    arrowup: "↑",
    arrowdown: "↓",
    backspace: "Backspace",
    delete: "Delete",
    enter: "Enter",
    escape: "Esc",
    space: "Space",
    tab: "Tab",
};

/** Typing in a field must never trigger a global shortcut. */
export function isTyping(target: EventTarget | null): boolean {
    if (!(target instanceof HTMLElement)) return false;

    return target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
}
