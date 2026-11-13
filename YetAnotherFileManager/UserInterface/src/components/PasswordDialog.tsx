import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {setPasswordAsker} from "../api/dialogs";
import {fadeInStyle, popInStyle} from "../ui/motion";
import {useTranslation} from "@photino-net-utils/bridge";

interface Prompt {
    archive: string;
    wrong: boolean;
}

/** Asks for an archive password and resolves with null when the user cancels. */
export function PasswordDialog() {
    const t = useTranslation();
    const [prompt, setPrompt] = useState<Prompt | null>(null);
    const [value, setValue] = useState("");
    const resolve = useRef<((password: string | null) => void) | null>(null);
    const input = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        setPasswordAsker((archive, wrong) => new Promise<string | null>((done) => {
            resolve.current = done;
            setValue("");
            setPrompt({archive, wrong});
        }));

        return () => setPasswordAsker(null);
    }, []);

    useEffect(() => {
        if (prompt) window.setTimeout(() => input.current?.focus(), 0);
    }, [prompt]);

    const close = (password: string | null) => {
        const done = resolve.current;
        resolve.current = null;
        setPrompt(null);
        done?.(password);
    };

    if (!prompt)
        return null;

    const submit = () => {
        if (value.length > 0)
            close(value);
    };

    return createPortal(
        <Overlay onPointerDown={(event) => {
            if (event.target === event.currentTarget) close(null);
        }}>
            <Card role="dialog" aria-modal="true">
                <Title>{t("Archive password")}</Title>
                <Body>
                    {prompt.wrong
                        ? t("That password did not open the archive. Try again.")
                        : t("This archive is encrypted. Enter its password.")}
                </Body>
                <ArchiveName title={prompt.archive}>{prompt.archive}</ArchiveName>
                <Input
                    onChange={(event) => setValue(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            submit();
                        } else if (event.key === "Escape") {
                            event.preventDefault();
                            close(null);
                        }
                    }}
                    ref={input}
                    spellCheck={false}
                    type="password"
                    value={value}
                />
                <Actions>
                    <Button onClick={() => close(null)} type="button">{t("Cancel")}</Button>
                    <Primary disabled={value.length === 0} onClick={submit} type="button">{t("OK")}</Primary>
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
    width: min(430px, 100%);
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
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`;

const ArchiveName = styled.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Input = styled.input`
    width: 100%;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    outline: 0;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;

    &:focus {
        border-color: var(--border-color-focus);
        box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
    }
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
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

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`;

const Primary = styled(Button)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;
