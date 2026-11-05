import {Native} from "@photino-net-utils/bridge";

/**
 * A promise-based folder picker. The app opens the same standalone picker window the command line
 * uses, so there is one implementation and the host process keeps no modal state.
 */
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

async function pick(mode: "file" | "folder", extensions: string[], initial: string): Promise<string | null> {
    if (!Native.available) return null;

    // The window is the user's to close, so the reply can take minutes; the bridge's default 15s
    // timeout would abandon a picker that is still on screen.
    const result = await Native.request<{ paths: string[] } | null>(
        "pick.open",
        {mode, extensions, initial},
        2_147_483_647,
    );

    return result?.paths[0] ?? null;
}

export function requestFolder(initial?: string): Promise<string | null> {
    return opener ? opener(initial) : pick("folder", [], initial ?? "");
}

export function requestFile(extensions?: string[]): Promise<string | null> {
    return fileOpener ? fileOpener(extensions) : pick("file", extensions ?? [], "");
}
