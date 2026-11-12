/** One path a protected-folder pattern intercepted, and the pattern responsible. */
export interface ProtectedHit {
    path: string;
    pattern: string;
}

/** What is about to happen to the protected path, so the dialog can say it plainly. */
export type ProtectedAction = "delete" | "move" | "rename" | "write";

/** Everything the confirmation dialog needs; the operation has already been blocked. */
export interface ProtectedPrompt {
    hits: ProtectedHit[];
    delaySeconds: number;
    action: ProtectedAction;
    /** Only a delete can be permanent; the other actions leave it undefined. */
    permanent?: boolean;
}

/** The extra fields shared by every reply that can hit a protected path. */
export interface GuardedChange {
    ok: boolean;
    required?: boolean;
    token?: string | null;
    protected?: ProtectedHit[] | null;
    delaySeconds?: number;
    /** The user closed the confirmation dialog; this is not an error. */
    cancelled?: boolean;
}

type Asker = (prompt: ProtectedPrompt) => Promise<boolean>;

let asker: Asker | null = null;

/** The window installs the dialog; the API wrappers only know the promise. */
export function setProtectedAsker(value: Asker | null) {
    asker = value;
}

/** Answers false when no dialog is mounted, which keeps the change blocked. */
export function askProtected(prompt: ProtectedPrompt): Promise<boolean> {
    return asker ? asker(prompt) : Promise.resolve(false);
}
