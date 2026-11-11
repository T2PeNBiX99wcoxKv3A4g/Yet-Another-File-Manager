import {Native} from "@photino-net-utils/bridge";
import type {DirectoryListing} from "./files";
import {openFile} from "./files";

/** How one folder is shared: only paired app clients, or the browser file server. */
export type ShareMode = "client" | "web";

export interface ShareEntry {
    id: string;
    path: string;
    name: string;
    mode: ShareMode;
}

/** One folder another device offers. */
export interface ShareRemoteEntry {
    id: string;
    name: string;
    mode: ShareMode;
}

/** A device on the network, paired or merely discovered. */
export interface SharePeerInfo {
    id: string;
    name: string;
    host: string;
    port: number;
    paired: boolean;
    online: boolean;
    shares: ShareRemoteEntry[];
}

/** The local share list plus the web server state. */
export interface ShareList {
    shares: ShareEntry[];
    webRunning: boolean;
    webPort: number;
    urls: string[];
    deviceId: string;
    deviceName: string;
    fingerprint: string;
}

const EmptyList: ShareList = {
    shares: [],
    webRunning: false,
    webPort: 0,
    urls: [],
    deviceId: "",
    deviceName: "",
    fingerprint: "",
};

export async function getShares(): Promise<ShareList> {
    if (!Native.available) return EmptyList;
    return await Native.request<ShareList>("share.list");
}

export async function addShare(path: string, mode: ShareMode): Promise<ShareList> {
    if (!Native.available) return EmptyList;
    return await Native.request<ShareList>("share.add", {path, mode});
}

export async function removeShare(id: string): Promise<ShareList> {
    if (!Native.available) return EmptyList;
    return await Native.request<ShareList>("share.remove", {id});
}

export async function setShareMode(id: string, mode: ShareMode): Promise<ShareList> {
    if (!Native.available) return EmptyList;
    return await Native.request<ShareList>("share.mode", {id, mode});
}

export async function getSharePeers(): Promise<SharePeerInfo[]> {
    if (!Native.available) return [];
    const data = await Native.request<{ peers: SharePeerInfo[] }>("share.peers");
    return data.peers ?? [];
}

export async function refreshSharePeers(): Promise<SharePeerInfo[]> {
    if (!Native.available) return [];
    const data = await Native.request<{ peers: SharePeerInfo[] }>("share.peers.refresh");
    return data.peers ?? [];
}

export async function pairShareDevice(host: string, port: number): Promise<void> {
    if (!Native.available) return;
    await Native.request("share.pair.start", {host, port});
}

export async function respondSharePair(requestId: string, accept: boolean): Promise<void> {
    if (!Native.available) return;
    await Native.request("share.pair.respond", {requestId, accept});
}

export async function removeSharePeer(deviceId: string): Promise<void> {
    if (!Native.available) return;
    await Native.request("share.peer.remove", {deviceId});
}

/** Changes the browser file server's port; null picks a free one in the default range. */
export async function setSharePort(port: number | null, mode: "random" | "custom"): Promise<void> {
    if (!Native.available) return;
    await Native.request("share.port", {mode, port});
}

const ShareScheme = "yafm://share/";

/** Whether a tab location points into another device's shared folder. */
export function isShareLocation(value: string): boolean {
    return value.toLowerCase().startsWith(ShareScheme);
}

export interface ShareLocation {
    deviceId: string;
    shareId: string;
    path: string;
}

export function parseShareLocation(value: string): ShareLocation | null {
    if (!isShareLocation(value)) return null;

    const [deviceId, shareId, ...segments] = value.slice(ShareScheme.length).split("/");

    if (!deviceId || !shareId) return null;

    return {
        deviceId: decodeURIComponent(deviceId),
        shareId: decodeURIComponent(shareId),
        path: segments.map(decodeURIComponent).join("/"),
    };
}

/** Builds a tab location for a remote folder; every segment is encoded. */
export function shareLocation(deviceId: string, shareId: string, path = ""): string {
    const base = `${ShareScheme}${encodeURIComponent(deviceId)}/${encodeURIComponent(shareId)}`;
    const clean = path.split("/").filter(Boolean).map(encodeURIComponent).join("/");

    return clean.length > 0 ? `${base}/${clean}` : base;
}

interface BrowsePayload {
    deviceId: string;
    shareId: string;
    path: string;
    parent: string | null;
    entries: DirectoryListing["entries"];
}

/** Lists a remote folder in the same shape the local file view consumes. */
export async function listSharedDirectory(location: string): Promise<DirectoryListing> {
    const parsed = parseShareLocation(location);
    if (!parsed || !Native.available)
        throw new Error("This shared folder is only available in the desktop app.");

    const data = await Native.request<BrowsePayload>("share.browse", {
        deviceId: parsed.deviceId,
        shareId: parsed.shareId,
        path: parsed.path,
    });

    return {
        path: shareLocation(parsed.deviceId, parsed.shareId, data.path ?? parsed.path),
        parent: data.parent === null || data.parent === undefined
            ? null
            : shareLocation(parsed.deviceId, parsed.shareId, data.parent),
        entries: data.entries ?? [],
        folderSizes: {},
        view: null,
        tags: {},
        tagColors: {},
        allTags: [],
        counts: {},
    };
}

/** Copies a remote file to the local temp folder and returns where it landed. */
export async function downloadSharedFile(location: string): Promise<string> {
    const parsed = parseShareLocation(location);
    if (!parsed || !Native.available)
        throw new Error("This shared file is only available in the desktop app.");

    const data = await Native.request<{ localPath?: string; error?: string }>("share.download", {
        deviceId: parsed.deviceId,
        shareId: parsed.shareId,
        path: parsed.path,
    });

    if (!data.localPath)
        throw new Error(data.error ?? "The file could not be downloaded.");

    return data.localPath;
}

/** Downloads a remote file and opens the local copy with the system's default application. */
export async function openSharedFile(location: string): Promise<void> {
    await openFile(await downloadSharedFile(location));
}
