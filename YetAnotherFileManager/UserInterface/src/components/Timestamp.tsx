import {useSyncExternalStore} from "react";
import {clockNow, subscribeClock} from "../utils/clock";
import {formatTimestamp} from "../utils/format";

/**
 * One file time. It re-renders itself as the clock moves, so "12 seconds ago" keeps counting
 * without repainting the whole list around it.
 */
export function Timestamp({value}: { value: number }) {
    const now = useSyncExternalStore(subscribeClock, clockNow);

    return <>{formatTimestamp(value, now)}</>;
}
