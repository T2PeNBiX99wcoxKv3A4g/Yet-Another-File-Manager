import {Native} from "@photino-net-utils/bridge";

export interface AppSettings {
    systemIcons: boolean;
    customFolderIcons: boolean;
    writeDirectoryIndex: boolean;
    /** Extension (with the dot, lower case) to a built-in icon name or "file:<path>". */
    extensionIcons: Record<string, string>;
}

const fallback: AppSettings = {
    systemIcons: false,
    customFolderIcons: false,
    writeDirectoryIndex: true,
    extensionIcons: {},
};

/** The interface settings, persisted by the host. */
export async function getSettings(): Promise<AppSettings> {
    if (!Native.available) return fallback;

    const raw = await Native.request<Partial<AppSettings> | null>("app.settings");

    return {
        systemIcons: raw?.systemIcons ?? true,
        customFolderIcons: raw?.customFolderIcons ?? true,
        writeDirectoryIndex: raw?.writeDirectoryIndex ?? true,
        extensionIcons: raw?.extensionIcons ?? {},
    };
}

/** Stores the settings and answers with what the host actually kept. */
export async function saveSettings(settings: AppSettings): Promise<AppSettings> {
    if (!Native.available) return settings;

    const saved = await Native.request<Partial<AppSettings> | null>("app.settings.set", settings);

    return {
        systemIcons: saved?.systemIcons ?? settings.systemIcons,
        customFolderIcons: saved?.customFolderIcons ?? settings.customFolderIcons,
        writeDirectoryIndex: saved?.writeDirectoryIndex ?? settings.writeDirectoryIndex,
        extensionIcons: saved?.extensionIcons ?? settings.extensionIcons,
    };
}

/**
 * Records the icon of one entry in its folder's index, or removes it when the source is null.
 * The record lives in the folder itself, so the data travels with the files.
 */
export async function setEntryIcon(directory: string, name: string, source: string | null): Promise<boolean> {
    if (!Native.available) return false;

    const data = await Native.request<{ ok: boolean }>("fs.icon.set", {directory, name, source});
    return data.ok;
}

/** Asks the host for a native "choose an icon" dialog. */
export async function pickIconFile(): Promise<string | null> {
    if (!Native.available) return null;

    const data = await Native.request<{ path: string | null }>("app.pickIcon");
    return data.path;
}

/** Asks the host for a native "choose a folder" dialog. */
export async function pickFolder(): Promise<string | null> {
    if (!Native.available) return null;

    const data = await Native.request<{ path: string | null }>("app.pickFolder");
    return data.path;
}
