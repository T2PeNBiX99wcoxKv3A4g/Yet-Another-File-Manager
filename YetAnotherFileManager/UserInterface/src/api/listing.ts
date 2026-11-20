import type {FileEntry, GalleryEntry} from "./files";
import {dataBase} from "./icons";

/**
 * One page of a folder listing, decoded from the binary block the local server sends.
 *
 * The block is columnar: every size, every timestamp and every name offset sits in its own array,
 * so the decoder wraps them in typed-array views instead of parsing an object per entry, and the
 * full path is rebuilt from the folder path the block carries once.
 */

/** "YLST" */
const Magic = 0x54534c59;
const Version = 1;
const HeaderSize = 32;

const None = 0xffff;

const DirectoryFlag = 1;
const HiddenFlag = 2;
const SystemFlag = 4;
const EncryptedFlag = 8;
const LinkValidFlag = 16;

export interface ListingPage {
    path: string;
    signature: number;
    total: number;
    entries: FileEntry[];
}

export interface ListingOptions {
    from?: number;
    count?: number;
    sort?: string;
    descending?: boolean;
    signal?: AbortSignal;
}

/** Asks the local server for one page of a folder, newest layout first. */
export async function fetchListing(path: string, options: ListingOptions = {}): Promise<ListingPage> {
    const base = await dataBase();

    if (!base)
        throw new Error("The data server is not running.");

    const query = new URLSearchParams({
        path,
        from: String(options.from ?? 0),
        count: String(options.count ?? 400)
    });

    if (options.sort) query.set("sort", options.sort);
    if (options.descending) query.set("dir", "desc");

    const response = await fetch(`${base}/list?${query}`, {
        cache: "no-cache",
        signal: options.signal
    });

    if (!response.ok)
        throw new Error(`The listing failed (${response.status}).`);

    const total = Number(response.headers.get("x-yafm-total") ?? 0);
    const signature = Number.parseInt((response.headers.get("etag") ?? "").replaceAll('"', ""), 16) || 0;

    return decodeListing(await response.arrayBuffer(), total, signature);
}

/** The block itself, for a caller that already has the bytes. */
export function decodeListing(buffer: ArrayBuffer, total: number, signature: number): ListingPage {
    const view = new DataView(buffer);

    if (buffer.byteLength < HeaderSize || view.getUint32(0, true) !== Magic)
        throw new Error("Not a listing block.");

    if (view.getUint16(4, true) !== Version)
        throw new Error("This build cannot read that listing version.");

    const count = view.getUint32(8, true);
    const poolBytes = view.getUint32(12, true);
    const pathBytes = view.getUint32(16, true);
    const iconCount = view.getUint32(20, true);
    const extraCount = view.getUint32(24, true);

    // A list that spans folders carries complete paths, and the window takes the file name from them.
    const absolute = (view.getUint16(6, true) & 1) !== 0;

    let at = HeaderSize;

    // A view over the same bytes: nothing is copied, and the columns stay 8-byte aligned because
    // the writer puts the three f64 columns first.
    const take = <T>(Type: new (buffer: ArrayBuffer, offset: number, length: number) => T, size: number): T => {
        const array = new Type(buffer, at, count);
        at += size * count;
        return array;
    };

    const size = take(Float64Array, 8);
    const modified = take(Float64Array, 8);
    const created = take(Float64Array, 8);
    const nameOffset = take(Uint32Array, 4);
    const nameLength = take(Uint16Array, 2);
    const iconIndex = take(Uint16Array, 2);
    const linkIndex = take(Uint16Array, 2);
    const flags = take(Uint8Array, 1);
    const linkCount = take(Uint8Array, 1);

    const icons: { offset: number; length: number }[] = [];
    for (let index = 0; index < iconCount; index++) {
        icons.push({offset: view.getUint32(at, true), length: view.getUint16(at + 4, true)});
        at += 6;
    }

    const links = new Map<number, { offset: number; length: number }>();
    for (let index = 0; index < extraCount; index++) {
        links.set(view.getUint32(at, true), {
            offset: view.getUint32(at + 4, true),
            length: view.getUint16(at + 8, true)
        });
        at += 10;
    }

    const pool = new Uint8Array(buffer, at, poolBytes);
    const decoder = new TextDecoder();
    const decode = (offset: number, length: number) => decoder.decode(pool.subarray(offset, offset + length));

    const path = decode(0, pathBytes);
    const separator = path.includes("\\") ? "\\" : "/";
    const iconValues = icons.map((icon) => decode(icon.offset, icon.length));

    const entries = new Array<FileEntry>(count);

    for (let index = 0; index < count; index++) {
        const entryFlags = flags[index];
        const stored = decode(nameOffset[index], nameLength[index]);
        const link = linkIndex[index] === None ? undefined : links.get(index);

        // In an absolute block the stored name is the whole path, and the label is its last segment.
        const fullPath = absolute
            ? stored
            : path.endsWith(separator) ? path + stored : path + separator + stored;

        const name = absolute
            ? stored.slice(Math.max(stored.lastIndexOf("/"), stored.lastIndexOf("\\")) + 1)
            : stored;

        entries[index] = {
            name,
            fullPath,
            isDirectory: (entryFlags & DirectoryFlag) !== 0,
            size: size[index],
            modified: modified[index],
            isHidden: (entryFlags & HiddenFlag) !== 0,
            isSystem: (entryFlags & SystemFlag) !== 0,
            iconSource: iconIndex[index] === None ? null : iconValues[iconIndex[index]] ?? null,
            created: created[index],
            linkTarget: link ? decode(link.offset, link.length) : null,
            linkValid: linkIndex[index] === None ? null : (entryFlags & LinkValidFlag) !== 0,
            linkCount: linkCount[index],
            isEncrypted: (entryFlags & EncryptedFlag) !== 0 ? true : null
        };
    }

    return {path, signature, total, entries};
}

/**
 * One page of the gallery: a scan across folders, so its block carries complete paths and is
 * decoded the same way as a folder listing.
 */
export async function fetchGalleryPage(offset: number, count: number, refresh = false,
                                       signal?: AbortSignal): Promise<{ entries: GalleryEntry[]; total: number }> {
    const base = await dataBase();

    if (!base)
        throw new Error("The data server is not running.");

    const query = new URLSearchParams({offset: String(offset), count: String(count)});
    if (refresh) query.set("refresh", "1");

    const response = await fetch(`${base}/gallery?${query}`, {cache: "no-cache", signal});

    if (!response.ok)
        throw new Error(`The gallery failed (${response.status}).`);

    const total = Number(response.headers.get("x-yafm-total") ?? 0);
    const page = decodeListing(await response.arrayBuffer(), total, 0);

    return {
        entries: page.entries.map((entry) => ({
            path: entry.fullPath,
            name: entry.name,
            modified: entry.modified,
            size: entry.size
        })),
        total
    };
}