import {Native} from "@photino-net-utils/bridge";

export interface AppSettings {
    systemIcons: boolean;
    customFolderIcons: boolean;
}

const fallback: AppSettings = {systemIcons: false, customFolderIcons: false};

/** The interface settings, persisted by the host. */
export async function getSettings(): Promise<AppSettings> {
    if (!Native.available) return fallback;

    return await Native.request<AppSettings>("app.settings");
}

/** Stores the settings and answers with what the host actually kept. */
export async function saveSettings(settings: AppSettings): Promise<AppSettings> {
    if (!Native.available) return settings;

    return await Native.request<AppSettings>("app.settings.set", settings);
}
