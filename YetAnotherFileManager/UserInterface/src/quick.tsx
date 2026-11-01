import {createContext, useContext} from "react";
import type {Place} from "./api/files";
import {normalizePath} from "./utils/format";

/** What every view needs to present a folder the way the Quick access panels do. */
export interface QuickAccess {
    /** Quick access folders by normalized path. */
    places: Record<string, Place>;
    /** True while the app draws its own glyphs, so a Quick access icon replaces the real one. */
    useIcons: boolean;
}

export const NoQuickAccess: QuickAccess = {places: {}, useIcons: false};

const Context = createContext<QuickAccess>(NoQuickAccess);

export const QuickAccessProvider = Context.Provider;

export function useQuickAccess(): QuickAccess {
    return useContext(Context);
}

/** The Quick access entry for a folder path, if any. */
export function quickPlace(quick: QuickAccess, path: string): Place | undefined {
    return quick.places[normalizePath(path)];
}

/** The name a folder is shown under: the Quick access one, or its own. */
export function quickName(quick: QuickAccess, path: string, fallback: string): string {
    return quickPlace(quick, path)?.name || fallback;
}
