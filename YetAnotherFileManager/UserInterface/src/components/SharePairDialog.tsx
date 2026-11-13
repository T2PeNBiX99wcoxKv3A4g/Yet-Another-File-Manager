import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {fadeInStyle, popInStyle} from "../ui/motion";
import {ServerIcon} from "./Icons";
import {useTranslation} from "@photino-net-utils/bridge";

/** The confirmation another device's pairing request produces. The code must match both screens. */
export function SharePairDialog({deviceName, code, onAccept, onReject}: {
    deviceName: string;
    code: string;
    onAccept: () => void;
    onReject: () => void;
}) {
    const t = useTranslation();
    const primary = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        primary.current?.focus();

        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                event.preventDefault();
                onAccept();
            } else if (event.key === "Escape") {
                event.preventDefault();
                onReject();
            }
        };

        window.addEventListener("keydown", onKey, true);
        return () => window.removeEventListener("keydown", onKey, true);
    }, [onAccept, onReject]);

    return createPortal(
        <Overlay>
            <Card role="alertdialog" aria-modal="true">
                <Title><ServerIcon size={15}/>{t("Pair for sharing")}</Title>
                <Body>
                    {t("{device} wants to pair with this device for sharing folders.", {device: deviceName})}
                </Body>
                <Code>{code}</Code>
                <Hint>{t("Check that the other device shows the same code before accepting.")}</Hint>
                <Actions>
                    <Button onClick={onReject} type="button">{t("Reject")}</Button>
                    <Primary onClick={onAccept} ref={primary} type="button">{t("Accept")}</Primary>
                </Actions>
            </Card>
        </Overlay>,
        document.body,
    );
}

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${fadeInStyle}
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${popInStyle}
`;

const Title = styled.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`;

const Body = styled.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`;

const Code = styled.div`
    padding: 10px;
    border: 1px solid rgba(var(--accent-rgb), 0.28);
    border-radius: var(--radius-sm);
    background: rgba(var(--accent-rgb), 0.10);
    color: var(--accent-primary);
    font-family: var(--font-mono);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-align: center;
`;

const Hint = styled.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`;

const Button = styled.button`
    padding: 7px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`;

const Primary = styled(Button)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`;
