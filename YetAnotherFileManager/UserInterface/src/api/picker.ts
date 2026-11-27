import {Native} from "@photino-net-utils/bridge";

/**
 * The dialog a picker window is, as the host holds it. A browser names every one of its upload
 * types, which is far more than a window URL can carry, so the whole request travels over the
 * bridge instead: the window URL only says that it is a picker.
 */
export interface PickerRequest {
    mode: "folder" | "file" | "save";
    multiple: boolean;
    /** Extensions (with the dot) the caller accepts. */
    extensions: string[];
    /** The caller's file types, as the JSON the host read from the dialog. */
    types: string;
    /** Which of {@link types} the caller had selected, counting from 1. */
    typeIndex: number;
    initial: string;
    initialName: string;
    defaultExtension: string;
    lastExtension: string;
}

/** Reads the dialog for this window, or null when the host did not have one. */
export async function getPickerRequest(): Promise<PickerRequest | null> {
    if (!Native.available) return null;

    // The host answers at once; a short bound keeps a silent host from holding the first paint.
    return await Native.request<PickerRequest | null>("picker.request", undefined, 5000);
}
