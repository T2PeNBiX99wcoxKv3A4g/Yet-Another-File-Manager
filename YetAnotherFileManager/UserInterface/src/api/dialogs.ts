type MessageAsker = (text: string) => Promise<void>;
type PasswordAsker = (archive: string, wrong: boolean) => Promise<string | null>;

let asker: MessageAsker | null = null;
let passwordAsker: PasswordAsker | null = null;

/** The window installs the dialog; callers only wait for it to be dismissed. */
export function setMessageAsker(value: MessageAsker | null) {
    asker = value;
}

/** Shows a themed message instead of the browser's alert, and resolves when it closes. */
export function showMessage(text: string): Promise<void> {
    return asker ? asker(text) : Promise.resolve();
}

export function setPasswordAsker(value: PasswordAsker | null) {
    passwordAsker = value;
}

/** Asks for an archive password; null means the user cancelled. */
export function requestArchivePassword(archive: string, wrong = false): Promise<string | null> {
    return passwordAsker ? passwordAsker(archive, wrong) : Promise.resolve(null);
}
