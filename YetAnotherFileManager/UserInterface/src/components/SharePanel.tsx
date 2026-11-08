import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";
import {
    addShare,
    getShares,
    removeShare,
    setShareMode,
    type ShareList,
} from "../api/share";
import {openUrl} from "../api/system";
import {elevatedPanel} from "../ui/panel";
import {panelInStyle} from "../ui/motion";
import {AppIcon, CrossIcon, GlobeIcon, PlusIcon, ServerIcon} from "./Icons";

/** The title bar's share panel: the folders this device offers and how each one is reachable. */
export function SharePanel({currentFolder}: { currentFolder: string }) {
    const t = useTranslation();
    const [open, setOpen] = useState(false);
    const [list, setList] = useState<ShareList | null>(null);
    const [busy, setBusy] = useState(false);
    const root = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!open) return;

        const load = () => void getShares().then(setList, () => undefined);
        load();
        const timer = window.setInterval(load, 2500);
        const close = (event: PointerEvent) => {
            if (!root.current?.contains(event.target as Node)) setOpen(false);
        };
        window.addEventListener("pointerdown", close);

        return () => {
            window.clearInterval(timer);
            window.removeEventListener("pointerdown", close);
        };
    }, [open]);

    const run = async (action: () => Promise<ShareList>) => {
        setBusy(true);
        try {
            setList(await action());
        } finally {
            setBusy(false);
        }
    };

    const alreadyShared = list?.shares.some((share) =>
        share.path.replace(/[\\/]+$/, "").toLowerCase() === currentFolder.replace(/[\\/]+$/, "").toLowerCase()) ?? false;

    return (
        <Root ref={root}>
            <Button
                $active={open}
                onClick={() => setOpen((value) => !value)}
                title={t("Share folders")}
                type="button"
            >
                <ServerIcon size={15}/>
            </Button>

            {open && (
                <Panel>
                    <Head>
                        <Title>{t("Share")}</Title>
                        <Close onClick={() => setOpen(false)} title={t("Close")} type="button">
                            <CrossIcon size={10}/>
                        </Close>
                    </Head>

                    <Body>
                        <Device>
                            <AppIcon size={15}/>
                            <span>
                                <strong>{list?.deviceName || t("This device")}</strong>
                                <Small>{list?.fingerprint ?? ""}</Small>
                            </span>
                        </Device>

                        {list?.shares.length === 0 && <Empty>{t("No folders are shared yet.")}</Empty>}

                        {list?.shares.map((share) => (
                            <Row key={share.id}>
                                <RowTop>
                                    <Name title={share.path}>{share.name}</Name>
                                    <Remove
                                        disabled={busy}
                                        onClick={() => void run(() => removeShare(share.id))}
                                        title={t("Stop sharing")}
                                        type="button"
                                    >
                                        <CrossIcon size={10}/>
                                    </Remove>
                                </RowTop>
                                <PathText title={share.path}>{share.path}</PathText>
                                <Modes>
                                    <ModeButton
                                        $active={share.mode === "client"}
                                        onClick={() => void run(() => setShareMode(share.id, "client"))}
                                        title={t("Only paired devices can open this folder in the app.")}
                                        type="button"
                                    >
                                        <AppIcon size={11}/>{t("App")}
                                    </ModeButton>
                                    <ModeButton
                                        $active={share.mode === "web"}
                                        onClick={() => void run(() => setShareMode(share.id, "web"))}
                                        title={t("Any device with a browser can open this folder.")}
                                        type="button"
                                    >
                                        <GlobeIcon size={11}/>{t("Web")}
                                    </ModeButton>
                                </Modes>
                            </Row>
                        ))}

                        <Add
                            disabled={busy || currentFolder.length === 0 || alreadyShared}
                            onClick={() => void run(() => addShare(currentFolder, "client"))}
                            title={alreadyShared ? t("This folder is already shared.") : currentFolder}
                            type="button"
                        >
                            <PlusIcon size={12}/>
                            {t("Share this folder")}
                        </Add>

                        {list?.webRunning && (
                            <Web>
                                <WebHead>
                                    <GlobeIcon size={12}/>
                                    {t("Browser access")}
                                </WebHead>
                                {list.urls.map((url) => (
                                    <UrlButton key={url} onClick={() => void openUrl(url)} type="button">
                                        {url}
                                    </UrlButton>
                                ))}
                                <Small>{t("Open one of these addresses on any device on the same network.")}</Small>
                            </Web>
                        )}
                    </Body>
                </Panel>
            )}
        </Root>
    );
}

const Root = styled.div`
    position: relative;
    display: flex;
`;

const Button = styled.button<{ $active: boolean }>`
    display: grid;
    place-items: center;
    width: 38px;
    height: 100%;
    border: 0;
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.12)" : "transparent"};
    color: ${({$active}) => $active ? "var(--accent-primary)" : "var(--text-secondary)"};
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`;

const Panel = styled.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${elevatedPanel}
    ${panelInStyle}
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`;

const Title = styled.span`
    display: flex;
    align-items: center;
    gap: 7px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    &::before {
        content: "";
        width: 2px;
        height: 10px;
        border-radius: 2px;
        background: var(--accent-gradient);
    }
`;

const Close = styled.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`;

const Device = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.4);

    span {
        display: flex;
        flex-direction: column;
        min-width: 0;
    }

    strong {
        color: var(--text-primary);
        font-size: 12px;
        font-weight: 600;
    }
`;

const Small = styled.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`;

const Empty = styled.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`;

const RowTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`;

const Name = styled.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const PathText = styled.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Remove = styled.button`
    display: grid;
    flex-shrink: 0;
    place-items: center;
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: rgba(232, 17, 35, 0.18);
        color: #ff8a95;
    }
`;

const Modes = styled.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`;

const ModeButton = styled.button<{ $active: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 8px;
    border: 1px solid ${({$active}) => $active ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: 999px;
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.14)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-muted)"};
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`;

const Add = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 2px;
    padding: 8px;
    border: 1px dashed var(--border-color-hover);
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 11.5px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.08);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`;

const Web = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`;

const WebHead = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`;

const UrlButton = styled.button`
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--accent-primary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-align: left;
    cursor: pointer;
    overflow-wrap: anywhere;

    &:hover {
        text-decoration: underline;
    }
`;
