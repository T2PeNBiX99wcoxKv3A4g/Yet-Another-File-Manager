/**
 * One clock for every timestamp on screen. A relative time ("3 minutes ago") only stays right if
 * something re-renders it, so the components that show one subscribe here and the interval runs
 * only while at least one of them is mounted.
 */

let now = Date.now();
const listeners = new Set<() => void>();
let timer: number | null = null;

const tick = () => {
    now = Date.now();

    for (const listener of listeners)
        listener();
};

export function subscribeClock(listener: () => void): () => void {
    listeners.add(listener);

    if (timer === null)
        timer = window.setInterval(tick, 5000);

    return () => {
        listeners.delete(listener);

        if (listeners.size === 0 && timer !== null) {
            window.clearInterval(timer);
            timer = null;
        }
    };
}

/** The snapshot React reads; it only changes when the interval fires. */
export function clockNow(): number {
    return now;
}
