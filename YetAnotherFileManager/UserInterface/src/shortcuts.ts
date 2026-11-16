/** The actions the interface binds; the names are what settings.toml holds. */
export type ShortcutAction =
    | "goBack"
    | "goForward"
    | "goUp"
    | "find"
    | "closeTab"
    | "newTab"
    | "reopenTab"
    | "copy"
    | "cut"
    | "paste"
    | "duplicate"
    | "undo"
    | "redo"
    | "delete"
    | "deletePermanently"
    | "rename"
    | "selectAll"
    | "invertSelection"
    | "open"
    | "newFolder"
    | "properties"
    | "home"
    | "location"
    | "iconsView"
    | "detailsView"
    | "nextTab"
    | "previousTab"
    | "terminal"
    | "hidden"
    | "splitView"
    | "openInNewTab";

/**
 * The key combinations each action listens for. An action may hold several, and an empty list
 * turns it off; settings.toml keeps one string per action with the combinations joined by "|".
 */
export type ShortcutMap = Record<ShortcutAction, string[]>;

export const DefaultShortcuts: ShortcutMap = {
    goBack: ["alt+arrowleft"],
    goForward: ["alt+arrowright"],
    goUp: ["alt+arrowup"],
    find: ["ctrl+f"],
    closeTab: ["ctrl+w"],
    newTab: ["ctrl+t"],
    reopenTab: ["ctrl+shift+t"],
    copy: ["ctrl+c"],
    cut: ["ctrl+x"],
    paste: ["ctrl+v"],
    duplicate: ["ctrl+d"],
    undo: ["ctrl+z"],
    redo: ["ctrl+shift+z"],
    delete: ["delete"],
    deletePermanently: ["shift+delete"],
    rename: ["f2"],
    selectAll: ["ctrl+a"],
    invertSelection: ["ctrl+shift+a"],
    open: ["enter"],
    newFolder: ["ctrl+shift+n"],
    properties: ["alt+enter"],
    home: ["alt+home"],
    location: ["ctrl+l"],
    iconsView: ["ctrl+1"],
    detailsView: ["ctrl+2"],
    nextTab: ["ctrl+tab"],
    previousTab: ["ctrl+shift+tab"],
    terminal: ["f4"],
    hidden: ["ctrl+h", "alt+."],
    splitView: ["f3"],
    /** Modifier held while clicking to open something in a new tab; empty turns it off. */
    openInNewTab: ["ctrl"],
};

/** The combinations a stored value holds. A value saved before several were allowed has none. */
export function shortcutList(value: string | null | undefined): string[] {
    return (value ?? "").split("|").map((part) => part.trim()).filter(Boolean);
}

/** The stored form of one action's combinations. */
export function shortcutValue(combos: string[]): string {
    return combos.join("|");
}

/** The whole map in its stored form, for a reset. */
export function storedShortcuts(map: ShortcutMap): Record<string, string> {
    const stored: Record<string, string> = {};

    for (const [action, combos] of Object.entries(map))
        stored[action] = shortcutValue(combos);

    return stored;
}

/**
 * The map the window listens to: the defaults with whatever the user changed applied. An action
 * whose stored value is empty is off, and one that was never stored keeps its default.
 */
export function resolveShortcuts(stored: Record<string, string> | null | undefined): ShortcutMap {
    const resolved = {...DefaultShortcuts} as Record<string, string[]>;

    for (const [action, value] of Object.entries(stored ?? {})) {
        if (action in resolved)
            resolved[action] = shortcutList(value);
    }

    return resolved as ShortcutMap;
}

/** True when the pressed combination is one of the action's own. */
export function comboMatches(map: ShortcutMap, action: ShortcutAction, combo: string): boolean {
    return map[action]?.includes(combo) ?? false;
}

/** The first combination of an action, or an empty string when it has none. */
export function firstShortcut(map: ShortcutMap, action: ShortcutAction): string {
    return map[action]?.[0] ?? "";
}

let clickModifier = firstShortcut(DefaultShortcuts, "openInNewTab");

export function setClickModifier(value: string) {
    clickModifier = value.trim();
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

/** Every combination of an action, for the tooltips and the menus. */
export function prettyShortcuts(values: string[] | null | undefined): string {
    return (values ?? []).filter(Boolean).map(prettyShortcut).join(" / ");
}

/** Keys whose own name is not readable enough when title-cased, or that read better as a glyph. */
const KeyLabels: Record<string, string> = {
    arrowleft: "←",
    arrowright: "→",
    arrowup: "↑",
    arrowdown: "↓",
    backspace: "Backspace",
    delete: "delete",
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
