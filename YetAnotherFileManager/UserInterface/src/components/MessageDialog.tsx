import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {useTranslation} from "../api/i18n";
import {setMessageAsker} from "../api/dialogs";
import {fadeInStyle, popInStyle} from "../ui/motion";

/** The window's themed replacement for `window.alert`; one message at a time. */
export function MessageDialog() {
    const t = useTranslation();
    const [message, setMessage] = useState<string | null>(null);
    const resolve = useRef<(() => void) | null>(null);
    const button = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        setMessageAsker((text) => new Promise<void>((done) => {
            resolve.current = done;
            setMessage(text);
        }));

        return () => setMessageAsker(null);
    }, []);

    const close = () => {
        const done = resolve.current;
        resolve.current = null;
        setMessage(null);
        done?.();
    };

    useEffect(() => {
        if (message === null) return;

        button.current?.focus();

        const onKey = (event: KeyboardEvent) => {
            if (event.key !== "Escape" && event.key !== "Enter")
                return;

            event.preventDefault();
            event.stopPropagation();
            close();
        };

        window.addEventListener("keydown", onKey, true);
        return () => window.removeEventListener("keydown", onKey, true);
    }, [message]);

    if (message === null)
        return null;

    return createPortal(
        <Overlay onPointerDown={(event) => {
            if (event.target === event.currentTarget) close();
        }}>
            <Card role="alertdialog" aria-modal="true">
                <Title>{t("Notice")}</Title>
                <Body>{message}</Body>
                <Actions>
                    <Button onClick={close} ref={button} type="button">{t("OK")}</Button>
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
    width: min(440px, 100%);
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

const Body = styled.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
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
