import {archiveFile, isArchiveLocation, normalizePath} from "../utils/format";

const passwords = new Map<string, string>();

function keyOf(path: string): string {
    return normalizePath(isArchiveLocation(path) ? archiveFile(path) : path);
}

/** The password remembered for an archive, if the user already entered one. */
export function getArchivePassword(path: string): string | undefined {
    return passwords.get(keyOf(path));
}

export function setArchivePassword(path: string, password: string) {
    passwords.set(keyOf(path), password);
}

export function clearArchivePassword(path: string) {
    passwords.delete(keyOf(path));
}

/** SharpCompress phrases the failure differently per encryption method. */
export function isArchivePasswordError(message: string | null | undefined): boolean {
    return !!message && /password|encrypt/i.test(message);
}
