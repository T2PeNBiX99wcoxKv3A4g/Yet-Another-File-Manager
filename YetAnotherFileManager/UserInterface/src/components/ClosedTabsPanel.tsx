import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";
import {elevatedPanel} from "../ui/panel";
import {panelInStyle} from "../ui/motion";
import {viewTitles} from "../tabs";
import {viewKind} from "../views";
import {isArchiveLocation} from "../utils/format";
import {ArchiveIcon, ClosedTabsIcon, CrossIcon, FolderIcon, GearIcon, HomeIcon, TrashIcon} from "./Icons";

interface ClosedTabsPanelProps {
    /** The locations closed in this window, oldest first. */
    tabs: string[];
    /** Brings back one entry, by its place in {@link tabs}. */
    onRestore: (index: number) => void;
}

/**
 * The tabs closed in this window, drawn in the title bar beside the operation history. It uses the
 * same button and panel shape as that history, so the two read as one family.
 */
export function ClosedTabsPanel({tabs, onRestore}: ClosedTabsPanelProps) {
    const t = useTranslation();
    const [open, setOpen] = useState(false);
    const root = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!open) return;

        const close = (event: PointerEvent) => {
            if (!root.current?.contains(event.target as Node)) setOpen(false);
        };
        const dismiss = () => setOpen(false);

        window.addEventListener("pointerdown", close);
        window.addEventListener("blur", dismiss);
        return () => {
            window.removeEventListener("pointerdown", close);
            window.removeEventListener("blur", dismiss);
        };
    }, [open]);

    return (
        <Root ref={root}>
            <Button
                $active={open}
                onClick={() => setOpen((value) => !value)}
                title={t("recently_closed_tabs")}
                type="button"
            >
                <ClosedTabsIcon size={15}/>
            </Button>

            {open && (
                <Panel>
                    <Head>
                        <Title><ClosedTabsIcon size={12}/>{t("recently_closed_tabs")}</Title>
                        <Close onClick={() => setOpen(false)} title={t("close")} type="button">
                            <CrossIcon size={10}/>
                        </Close>
                    </Head>

                    {tabs.length === 0
                        ? <Empty>{t("no_recently_closed_tabs")}</Empty>
                        : (
                            <Rows>
                                {[...tabs].reverse().map((location, offset) => {
                                    const index = tabs.length - 1 - offset;
                                    const kind = viewKind(location);

                                    return (
                                        <Row
                                            key={`${index}-${location}`}
                                            onClick={() => {
                                                setOpen(false);
                                                onRestore(index);
                                            }}
                                            title={location}
                                            type="button"
                                        >
                                            <Glyph location={location}/>
                                            <Text>
                                                <Name>
                                                    {kind ? t(viewTitles[kind]) : baseNameOf(location)}
                                                </Name>
                                                <Path>{kind ? t(viewTitles[kind]) : location}</Path>
                                            </Text>
                                        </Row>
                                    );
                                })}
                            </Rows>
                        )}
                </Panel>
            )}
        </Root>
    );
}

/** The glyph the tab itself showed: its page, an archive, or a folder. */
function Glyph({location}: { location: string }) {
    switch (viewKind(location)) {
        case "home":
            return <HomeIcon size={13}/>;
        case "settings":
            return <GearIcon size={13}/>;
        case "recycle":
            return <TrashIcon size={13}/>;
        case "gallery":
            return <FolderIcon size={13}/>;
        default:
            return isArchiveLocation(location) ? <ArchiveIcon size={13}/> : <FolderIcon size={13}/>;
    }
}

function baseNameOf(path: string): string {
    const trimmed = path.replace(/[\\/]+$/, "");
    const cut = Math.max(trimmed.lastIndexOf("\\"), trimmed.lastIndexOf("/"));
    return cut >= 0 ? trimmed.slice(cut + 1) : trimmed;
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
    transition: background 130ms ease, color 130ms ease;

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
    width: 390px;
    max-height: 440px;
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
    font-size: 10px;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.1em;
    text-transform: uppercase;

    &::before {
        content: "";
        width: 2px;
        height: 10px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
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

const Rows = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`;

const Row = styled.button`
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 12px;
    border: 0;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;

    &:last-child {
        border-bottom: 0;
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
    }

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }
`;

const Text = styled.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`;

const Name = styled.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Path = styled.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Empty = styled.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;
