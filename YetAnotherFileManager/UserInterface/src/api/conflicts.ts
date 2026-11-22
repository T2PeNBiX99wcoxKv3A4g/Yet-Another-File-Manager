import type {TransferConflict, TransferDecision} from "./operations";

/**
 * The one place a copy or move asks the window how to handle names that already exist. Both the
 * paste path and the tray's drag and drop call it, so they always behave the same way.
 */
export interface ConflictPrompt {
    conflicts: TransferConflict[];
    move: boolean;
    resolve: (decisions: TransferDecision[] | null) => void;
}

let handler: ((prompt: ConflictPrompt) => void) | null = null;

/** The window mounts one host; without it the old automatic renaming stays in charge. */
export function setConflictHandler(next: ((prompt: ConflictPrompt) => void) | null) {
    handler = next;
}

/** Null means the user cancelled the dialog and nothing should be written. */
export function askConflictDecisions(conflicts: TransferConflict[],
                                     move: boolean): Promise<TransferDecision[] | null> {
    if (conflicts.length === 0) return Promise.resolve([]);
    if (!handler) return Promise.resolve([]);

    return new Promise((resolve) => handler?.({conflicts, move, resolve}));
}
