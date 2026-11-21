import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";
import {useIcon} from "../api/icons";
import {fadeInStyle, popInStyle} from "../ui/motion";

/** One running program the backend reported, as the delete saw it. */
export interface RunningProgram {
    name: string;
    id: number;
    path: string;
}

/**
 * Lists the programs that keep a path open, each with its shell icon and process id, so the delete
 * can say what is in the way instead of guessing. A program's own image can still reach the recycle
 * bin, so that case has a confirm button; a folder cannot move, so it only informs.
 */
export function RunningProgramsDialog({programs, message, confirmLabel, onCancel, onConfirm}: {
    programs: RunningProgram[];
    message: string;
    confirmLabel?: string;
    onCancel: () => void;
    onConfirm?: () => void;
}) {
    const t = useTranslation();
    const cancel = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        cancel.current?.focus();

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
    }, [onCancel]);

    return createPortal(
        <Overlay onPointerDown={(event) => {
            if (event.target === event.currentTarget) onCancel();
        }}>
            <Card role="alertdialog" aria-modal="true">
                <Title>{t("the_program_is_running")}</Title>
                <Lead>{message}</Lead>
                <List>
                    {programs.map((program) => (
                        <Program key={program.id} program={program} title={t("process_id_n", {id: program.id})}/>
                    ))}
                </List>
                <Actions>
                    <Button onClick={onCancel} ref={cancel} type="button">
                        {onConfirm ? t("cancel") : t("ok")}
                    </Button>
                    {onConfirm && (
                        <Button $primary onClick={onConfirm} type="button">{confirmLabel ?? t("delete")}</Button>
                    )}
                </Actions>
            </Card>
        </Overlay>,
        document.body,
    );
}

function Program({program, title}: { program: RunningProgram; title: string }) {
    const icon = useIcon(program.path, false, true);

    return (
        <Row title={program.path}>
            <IconBox>
                {icon ? <Icon alt="" src={icon}/> : <Dot/>}
            </IconBox>
            <Text>
                <Name>{program.name}</Name>
                <Meta>{title}</Meta>
            </Text>
        </Row>
    );
}

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${fadeInStyle}
`;

const Card = styled.div`
    width: min(520px, 100%);
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

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-height: 220px;
    margin-bottom: 14px;
    overflow-y: auto;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.55);
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 3px 0;
`;

const IconBox = styled.span`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 20px;
    height: 20px;
`;

const Icon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`;

const Dot = styled.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--text-muted);
`;

const Text = styled.span`
    display: flex;
    align-items: baseline;
    gap: 8px;
    min-width: 0;
`;

const Name = styled.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Meta = styled.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10.5px;
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`;

const Button = styled.button<{ $primary?: boolean }>`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid ${({$primary}) => $primary ? "rgba(248, 113, 113, 0.5)" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: ${({$primary}) => $primary ? "rgba(248, 113, 113, 0.16)" : "var(--bg-input)"};
    color: ${({$primary}) => $primary ? "#fca5a5" : "var(--text-secondary)"};
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: ${({$primary}) => $primary ? "rgba(248, 113, 113, 0.8)" : "var(--border-color-hover)"};
        color: ${({$primary}) => $primary ? "#fecaca" : "var(--text-primary)"};
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;
