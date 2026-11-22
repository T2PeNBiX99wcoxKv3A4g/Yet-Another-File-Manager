import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";
import type {TransferConflict, TransferDecision} from "../api/operations";
import {formatBytes, formatDate} from "../utils/format";
import {FileIcon, FolderIcon} from "./Icons";
import {fadeInStyle, popInStyle} from "../ui/motion";

type Action = "overwrite" | "rename" | "skip";

interface Choice {
    action: Action;
    name: string;
}

/**
 * One dialog for every copy and move that lands on a name already in the target: paste, the tray
 * and a drop all come through here, so the same conflict always gets the same question.
 */
export function TransferConflictDialog({conflicts, move, onResolve}: {
    conflicts: TransferConflict[];
    move: boolean;
    onResolve: (decisions: TransferDecision[] | null) => void;
}) {
    const t = useTranslation();
    const [choices, setChoices] = useState<Record<string, Choice>>(() =>
        Object.fromEntries(conflicts.map((conflict) => [conflict.source, {
            action: conflict.samePath ? "skip" : "rename",
            name: conflict.suggestedName,
        }])));

    const acceptButton = useRef<HTMLButtonElement | null>(null);
    const change = (source: string, patch: Partial<Choice>) =>
        setChoices((current) => ({...current, [source]: {...current[source], ...patch}}));

    const ready = conflicts.every((conflict) => {
        const choice = choices[conflict.source];
        return choice.action !== "rename" || choice.name.trim().length > 0;
    });

    const accept = () => {
        if (!ready)
            return;

        onResolve(conflicts.map((conflict) => {
            const choice = choices[conflict.source];

            return {
                source: conflict.source,
                action: choice.action,
                name: choice.action === "rename" ? choice.name.trim() : null,
            };
        }));
    };

    useEffect(() => {
        acceptButton.current?.focus();

        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                event.stopPropagation();
                onResolve(null);
                return;
            }

            if (event.key !== "Tab")
                event.stopPropagation();
        };

        window.addEventListener("keydown", onKey, true);
        return () => window.removeEventListener("keydown", onKey, true);
    }, [onResolve]);

    return createPortal(
        <Overlay onPointerDown={(event) => {
            if (event.target === event.currentTarget) onResolve(null);
        }}>
            <Card aria-label={t("copy_conflicts")} aria-modal="true" role="dialog">
                <Head>
                    <Title>{t("copy_conflicts")}</Title>
                    <Sub>
                        {move ? t("move_1_item") : t("copy_1_item")}
                        {" · "}
                        {t("these_items_already_exist_in_the_target_folder")}
                    </Sub>
                </Head>

                <List>
                    {conflicts.map((conflict) => {
                        const choice = choices[conflict.source];
                        const older = conflict.targetModified > 0 && conflict.sourceModified < conflict.targetModified;
                        const newer = conflict.targetModified > 0 && conflict.sourceModified > conflict.targetModified;

                        return (
                            <Row key={conflict.source}>
                                <RowHead>
                                    <Kind>{conflict.directory ? <FolderIcon size={16}/> : <FileIcon size={16}/>}</Kind>
                                    <Name title={conflict.source}>{conflict.name}</Name>
                                    {conflict.samePath
                                        ? <Warning>{t("this_is_the_same_path")}</Warning>
                                        : <Hint $older={older}>{older
                                            ? t("source_is_older")
                                            : newer ? t("source_is_newer") : t("same_time")}</Hint>}
                                </RowHead>

                                <Compare>
                                    <span/>
                                    <Column>{t("source")}</Column>
                                    <Column>{t("destination")}</Column>
                                    <Label>{t("modified")}</Label>
                                    <Value>{formatDate(conflict.sourceModified)}</Value>
                                    <Value>{conflict.targetModified > 0 ? formatDate(conflict.targetModified) : "—"}</Value>
                                    <Label>{t("created")}</Label>
                                    <Value>{formatDate(conflict.sourceCreated)}</Value>
                                    <Value>{conflict.targetCreated > 0 ? formatDate(conflict.targetCreated) : "—"}</Value>
                                    {!conflict.directory && (
                                        <>
                                            <Label>{t("size")}</Label>
                                            <Value>{formatBytes(conflict.sourceSize)}</Value>
                                            <Value>{conflict.targetSize > 0 ? formatBytes(conflict.targetSize) : "—"}</Value>
                                        </>
                                    )}
                                </Compare>

                                <Actions>
                                    <ChoiceButton $on={choice.action === "overwrite"}
                                                  disabled={conflict.samePath}
                                                  onClick={() => change(conflict.source, {action: "overwrite"})}
                                                  type="button">
                                        {t("overwrite")}
                                    </ChoiceButton>
                                    <ChoiceButton $on={choice.action === "rename"}
                                                  onClick={() => change(conflict.source, {action: "rename"})}
                                                  type="button">
                                        {t("rename")}
                                    </ChoiceButton>
                                    <ChoiceButton $on={choice.action === "skip"}
                                                  onClick={() => change(conflict.source, {action: "skip"})}
                                                  type="button">
                                        {t("skip")}
                                    </ChoiceButton>
                                </Actions>

                                {choice.action === "rename" && (
                                    <RenameRow>
                                        <input
                                            onChange={(event) => change(conflict.source, {name: event.target.value})}
                                            spellCheck={false}
                                            value={choice.name}
                                        />
                                        <SmallButton onClick={() => change(conflict.source, {name: conflict.suggestedName})}
                                                     type="button">
                                            {t("auto_name")}
                                        </SmallButton>
                                    </RenameRow>
                                )}

                                {choice.action === "overwrite" && conflict.directory && (
                                    <Warning>{t("replace_the_whole_folder")}</Warning>
                                )}
                            </Row>
                        );
                    })}
                </List>

                <Footer>
                    <Spacer/>
                    <Button onClick={() => onResolve(null)} type="button">{t("cancel")}</Button>
                    <Button $primary disabled={!ready} onClick={accept} ref={acceptButton} type="button">
                        {t("ok")}
                    </Button>
                </Footer>
            </Card>
        </Overlay>,
        document.body,
    );
}

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 3450;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.64);
    ${fadeInStyle}
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: min(640px, 100%);
    max-height: min(780px, 88vh);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${popInStyle}
`;

const Head = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 15px 18px 10px;
`;

const Title = styled.div`
    color: var(--text-primary);
    font-size: 13.5px;
    font-weight: 600;
`;

const Sub = styled.div`
    color: var(--text-muted);
    font-size: 10.5px;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: auto;
    padding: 0 18px 12px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`;

const RowHead = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`;

const Kind = styled.span`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    color: var(--accent-primary);
`;

const Name = styled.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11.5px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Hint = styled.span<{ $older: boolean }>`
    flex: 0 0 auto;
    margin-left: auto;
    color: ${({$older}) => $older ? "#fbbf24" : "var(--text-muted)"};
    font-size: 9.5px;
`;

const Warning = styled.span`
    flex: 1;
    color: #fbbf24;
    font-size: 9.5px;
    text-align: right;
`;

const Compare = styled.div`
    display: grid;
    grid-template-columns: 62px minmax(0, 1fr) minmax(0, 1fr);
    gap: 2px 8px;
    padding-left: 22px;
`;

const Column = styled.span`
    color: var(--text-muted);
    font-size: 9px;
    text-transform: uppercase;
`;

const Label = styled.span`
    color: var(--text-muted);
    font-size: 9.5px;
`;

const Value = styled.span`
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Actions = styled.div`
    display: flex;
    gap: 4px;
    padding-left: 22px;
`;

const ChoiceButton = styled.button<{ $on: boolean }>`
    padding: 3px 9px;
    border: 1px solid ${({$on}) => $on ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: 999px;
    background: ${({$on}) => $on ? "rgba(var(--accent-rgb), 0.18)" : "transparent"};
    color: ${({$on}) => $on ? "var(--accent-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;

const RenameRow = styled.div`
    display: flex;
    gap: 5px;
    padding-left: 22px;

    input {
        flex: 1;
        min-width: 0;
        padding: 3px 6px;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-sm);
        background: var(--bg-secondary);
        color: var(--text-primary);
        font: inherit;
        font-size: 10.5px;

        &:focus {
            border-color: var(--border-color-focus);
            outline: none;
        }
    }
`;

const SmallButton = styled.button`
    flex: 0 0 auto;
    padding: 3px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    color: var(--text-secondary);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-top: 1px solid var(--border-color);
`;

const Spacer = styled.div`
    flex: 1;
`;

const Button = styled.button<{ $primary?: boolean }>`
    min-width: 74px;
    padding: 6px 14px;
    border: 1px solid var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: ${({$primary}) => $primary ? "rgba(var(--accent-rgb), 0.18)" : "var(--bg-input)"};
    color: ${({$primary}) => $primary ? "var(--accent-primary)" : "var(--text-primary)"};
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;
