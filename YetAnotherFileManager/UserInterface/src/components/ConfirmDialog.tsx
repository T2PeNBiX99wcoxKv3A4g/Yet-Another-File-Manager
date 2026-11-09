import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";
import {fadeInStyle, popInStyle} from "../ui/motion";

interface ConfirmDialogProps {
    open: boolean;
    title: string;
    message: string;
    confirmLabel: string;
    danger?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

/**
 * The app's own confirmation dialog. The browser's `confirm` is a different window with a
 * different theme, and it blocks the web view; this one is part of the interface.
 */
export function ConfirmDialog({
                                  open, title, message, confirmLabel, danger = false, onConfirm, onCancel,
                              }: ConfirmDialogProps) {
    const t = useTranslation();
    const confirm = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!open) return;

        confirm.current?.focus();

        // Keep the file manager's shortcuts (Delete, Ctrl+A, typing to search) from firing behind
        // the dialog. Escape closes it; Enter activates the focused confirm button.
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
        return () => window.removeEventListener("keydown", onKey, true);
    }, [open, onCancel]);

    if (!open)
        return null;

    return createPortal(
        <Overlay
            onPointerDown={(event) => {
                if (event.target === event.currentTarget) onCancel();
            }}
        >
            <Card role="alertdialog" aria-modal="true">
                <Title>{title}</Title>
                <Message>{message}</Message>
                <Actions>
                    <Button onClick={onCancel} type="button">{t("Cancel")}</Button>
                    <Button $danger={danger} onClick={onConfirm} ref={confirm} type="button">
                        {confirmLabel}
                    </Button>
                </Actions>
            </Card>
        </Overlay>,
        document.body,
    );
}

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${fadeInStyle}
`;

const Card = styled.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${popInStyle}
`;

const Title = styled.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`;

const Message = styled.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`;

const Button = styled.button<{ $danger?: boolean }>`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid ${({$danger}) => $danger ? "rgba(248, 113, 113, 0.5)" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: ${({$danger}) => $danger ? "rgba(248, 113, 113, 0.16)" : "var(--bg-input)"};
    color: ${({$danger}) => $danger ? "#fca5a5" : "var(--text-secondary)"};
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: ${({$danger}) => $danger ? "rgba(248, 113, 113, 0.8)" : "var(--border-color-hover)"};
        color: ${({$danger}) => $danger ? "#fecaca" : "var(--text-primary)"};
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;
