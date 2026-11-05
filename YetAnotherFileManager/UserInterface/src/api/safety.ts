/** One path a protected-folder pattern intercepted, and the pattern responsible. */
export interface ProtectedHit {
    path: string;
    pattern: string;
}

/** Everything the confirmation dialog needs; the delete has already been blocked. */
export interface ProtectedDeletePrompt {
    hits: ProtectedHit[];
    delaySeconds: number;
    permanent: boolean;
}

/** The extra fields shared by every delete reply that can hit a protected path. */
export interface GuardedDelete {
    ok: boolean;
    required?: boolean;
    token?: string | null;
    protected?: ProtectedHit[] | null;
    delaySeconds?: number;
    cancelled?: boolean;
}

type Asker = (prompt: ProtectedDeletePrompt) => Promise<boolean>;

let asker: Asker | null = null;

/** The window installs the dialog; the API wrappers only know the promise. */
export function setProtectedDeleteAsker(value: Asker | null) {
    asker = value;
}

/** Answers false when no dialog is mounted, which keeps the delete blocked. */
export function askProtectedDelete(prompt: ProtectedDeletePrompt): Promise<boolean> {
    return asker ? asker(prompt) : Promise.resolve(false);
}
