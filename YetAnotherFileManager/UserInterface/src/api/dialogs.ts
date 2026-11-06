type MessageAsker = (text: string) => Promise<void>;

let asker: MessageAsker | null = null;

/** The window installs the dialog; callers only wait for it to be dismissed. */
export function setMessageAsker(value: MessageAsker | null) {
    asker = value;
}

/** Shows a themed message instead of the browser's alert, and resolves when it closes. */
export function showMessage(text: string): Promise<void> {
    return asker ? asker(text) : Promise.resolve();
}
