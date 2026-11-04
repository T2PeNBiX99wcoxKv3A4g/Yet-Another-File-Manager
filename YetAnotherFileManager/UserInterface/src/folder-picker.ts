/** A promise-based folder picker, so any view can ask for a folder without the shell dialog. */
type Opener = (initial?: string) => Promise<string | null>;

let opener: Opener | null = null;

export function setFolderPickerOpener(value: Opener | null) {
    opener = value;
}

export function requestFolder(initial?: string): Promise<string | null> {
    return opener ? opener(initial) : Promise.resolve(null);
}
