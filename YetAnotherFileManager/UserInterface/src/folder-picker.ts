/** A promise-based folder picker, so any view can ask for a folder without the shell dialog. */
type Opener = (initial?: string) => Promise<string | null>;
type FileOpener = (extensions?: string[]) => Promise<string | null>;

let opener: Opener | null = null;
let fileOpener: FileOpener | null = null;

export function setFolderPickerOpener(value: Opener | null) {
    opener = value;
}

export function setFilePickerOpener(value: FileOpener | null) {
    fileOpener = value;
}

export function requestFolder(initial?: string): Promise<string | null> {
    return opener ? opener(initial) : Promise.resolve(null);
}

export function requestFile(extensions?: string[]): Promise<string | null> {
    return fileOpener ? fileOpener(extensions) : Promise.resolve(null);
}
