import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import type {ProtectedAction, ProtectedHit} from "../api/safety";
import {fadeInStyle, popInStyle} from "../ui/motion";
import {type Translate, useTranslation} from "@photino-net-utils/bridge";

/**
 * The last stop before an operation touches a protected path. The confirm button is dead for the
 * configured number of seconds and the full paths are listed, so a stray double-click cannot
 * confirm it. The backend enforces the same wait with a one-shot token.
 */
export function ProtectedDeleteDialog({action, hits, delaySeconds, permanent, onCancel, onConfirm}: {
    action?: ProtectedAction;
    hits: ProtectedHit[];
    delaySeconds: number;
    permanent?: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}) {
    const t = useTranslation();
    const cancel = useRef<HTMLButtonElement | null>(null);
    const [left, setLeft] = useState(() => Math.max(1, Math.ceil(delaySeconds)));
    const what = action ?? "delete";

    useEffect(() => {
        cancel.current?.focus();

        const started = Date.now();
        const timer = window.setInterval(() => {
            const remaining = Math.max(0, Math.ceil(delaySeconds - (Date.now() - started) / 1000));
            setLeft(remaining);
            if (remaining === 0) window.clearInterval(timer);
        }, 200);

        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                event.stopPropagation();
                onCancel();
                return;
            }

            if (event.key !== "Tab")
                event.stopPropagation();
        };

        window.addEventListener("keydown", onKey, true);
        return () => {
            window.clearInterval(timer);
            window.removeEventListener("keydown", onKey, true);
        };
    }, [delaySeconds, onCancel]);

    return createPortal(
        <Overlay onPointerDown={(event) => {
            if (event.target === event.currentTarget) onCancel();
        }}>
            <Card role="alertdialog" aria-modal="true">
                <Title>{t("protected_folder")}</Title>
                <Lead>{t("these_paths_are_protected_by_the_safety_settings")}</Lead>
                <Hits>
                    {hits.map((hit) => (
                        <Hit key={`${hit.path}|${hit.pattern}`}>
                            <PathTitle>{hit.path}</PathTitle>
                            <PathPattern>{t("protected_by_pattern", {pattern: hit.pattern})}</PathPattern>
                        </Hit>
                    ))}
                </Hits>
                <Mode>{modeLabel(t, what, permanent ?? false)}</Mode>
                <Warn>{warningLabel(t, what)}</Warn>
                <Wait>{t("this_waits_seconds_s_before_the_button_works", {seconds: delaySeconds})}</Wait>
                <Actions>
                    <Button onClick={onCancel} ref={cancel} type="button">{t("cancel")}</Button>
                    <Danger disabled={left > 0} onClick={onConfirm} type="button">
                        {left > 0 ? confirmLabel(t, what, left) : confirmLabel(t, what, 0)}
                    </Danger>
                </Actions>
            </Card>
        </Overlay>,
        document.body,
    );
}

/** What the operation would do, in one short line. */
function modeLabel(t: Translate, action: ProtectedAction, permanent: boolean): string {
    switch (action) {
        case "delete":
            return permanent ? t("deletes_permanently") : t("moves_to_the_recycle_bin");
        case "move":
            return t("moves_the_entries");
        case "rename":
            return t("renames_the_entry");
        case "write":
            return t("writes_into_this_folder");
    }
}

/** Reassurance that nothing has happened yet. */
function warningLabel(t: Translate, action: ProtectedAction): string {
    switch (action) {
        case "delete":
            return t("nothing_has_been_deleted");
        case "move":
            return t("nothing_has_been_moved");
        case "rename":
            return t("nothing_has_been_renamed");
        case "write":
            return t("nothing_has_been_written");
    }
}

function confirmLabel(t: Translate,
                      action: ProtectedAction, seconds: number): string {
    const key = seconds > 0
        ? action === "delete" ? "delete_anyway_seconds_s"
            : action === "move" ? "move_anyway_seconds_s"
                : action === "rename" ? "rename_anyway_seconds_s"
                    : "write_anyway_seconds_s"
        : action === "delete" ? "delete_anyway"
            : action === "move" ? "move_anyway"
                : action === "rename" ? "rename_anyway"
                    : "write_anyway";

    return seconds > 0 ? t(key, {seconds}) : t(key);
}

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${fadeInStyle}
`;

const Card = styled.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${popInStyle}
`;

const Title = styled.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`;

const Lead = styled.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`;

const Hits = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 220px;
    margin-bottom: 12px;
    overflow-y: auto;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.55);
`;

const Hit = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`;

const PathTitle = styled.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`;

const PathPattern = styled.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`;

const Mode = styled.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`;

const Warn = styled.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`;

const Wait = styled.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`;

const Button = styled.button`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;

const Danger = styled.button`
    min-width: 110px;
    padding: 7px 12px;
    border: 1px solid rgba(248, 113, 113, 0.5);
    border-radius: var(--radius-sm);
    background: rgba(248, 113, 113, 0.16);
    color: #fca5a5;
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: rgba(248, 113, 113, 0.8);
        color: #fecaca;
    }

    &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }
`;
