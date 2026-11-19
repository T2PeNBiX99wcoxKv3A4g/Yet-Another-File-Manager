import {useEffect, useState} from "react";
import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";
import attributionsUrl from "../data/attributions.json?url";
import {CrossIcon} from "./Icons";

/** One entry of the generated notices file. */
interface Attribution {
    name: string;
    version: string;
    /** SPDX id, or a description when the package does not declare one. */
    license: string;
    /** The complete declaration shown when the entry is selected. */
    text: string;
}

/**
 * The open-source notices, shown as a floating panel from the settings: the projects are listed on
 * the left and the selected licence fills the right, because the texts are long.
 */
const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    z-index: 80;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    animation: attributionFade 160ms ease;

    @keyframes attributionFade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Panel = styled.div`
    display: flex;
    flex-direction: column;
    width: min(920px, 100%);
    max-height: min(680px, 100%);
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-dialog);
    animation: attributionIn 180ms cubic-bezier(0.22, 1, 0.36, 1);

    @keyframes attributionIn {
        from {
            opacity: 0;
            transform: translateY(8px);
        }
        to {
            opacity: 1;
            transform: none;
        }
    }
`;

const Header = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    flex-shrink: 0;
    padding: 16px 18px 14px;
    border-bottom: 1px solid var(--border-color);
`;

const Title = styled.h2`
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`;

const Intro = styled.p`
    margin: 4px 0 0;
    max-width: 620px;
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`;

const CloseButton = styled.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        border-color: rgba(248, 113, 113, 0.5);
        background: rgba(248, 113, 113, 0.12);
        color: #fca5a5;
    }
`;

const Body = styled.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;

const Sidebar = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 250px;
    flex-shrink: 0;
    padding: 8px;
    border-right: 1px solid var(--border-color);
    overflow-y: auto;
`;

const Item = styled.button<{ $active: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 1px;
    width: 100%;
    padding: 7px 9px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.14)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.18)" : "var(--bg-card-hover)"};
        color: var(--text-primary);
    }
`;

const ItemName = styled.span`
    font-size: 11px;
    font-weight: 600;
    word-break: break-word;
`;

const Meta = styled.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`;

const Article = styled.article`
    flex: 1;
    min-width: 0;
    padding: 16px 18px 20px;
    overflow-y: auto;
`;

const ArticleHead = styled.div`
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 2px 10px;
    margin-bottom: 10px;
`;

const ArticleName = styled.h3`
    margin: 0;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-primary);
`;

const Licence = styled.pre`
    margin: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    line-height: 1.6;
    color: var(--text-secondary);
    white-space: pre-wrap;
    word-break: break-word;
`;

const meta = (entry: {version: string; license: string}) =>
    [entry.version, entry.license].filter(Boolean).join(" · ");

/** Lists every project the app builds on; clicking one shows its complete licence. */
export function AttributionDialog({onClose}: { onClose: () => void }) {
    const t = useTranslation();
    const [attributions, setAttributions] = useState<Attribution[] | null>(null);
    const [selected, setSelected] = useState(0);

    // The notices are a 1.7 MB data file. Fetching them when the panel opens keeps them out of the
    // module graph the app starts with, and a JSON file is parsed much faster than a module of the
    // same size.
    useEffect(() => {
        let alive = true;

        void fetch(attributionsUrl)
            .then((response) => response.ok ? response.json() as Promise<Attribution[]> : [])
            .then((entries) => {
                if (alive) setAttributions(entries);
            }, () => {
                if (alive) setAttributions([]);
            });

        return () => {
            alive = false;
        };
    }, []);

    const list = attributions ?? [];
    const entry = list[selected] ?? list[0];

    // Escape closes the panel, like the other overlays.
    useEffect(() => {
        const close = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, [onClose]);

    return (
        <Backdrop onClick={onClose}>
            <Panel onClick={(event) => event.stopPropagation()} role="dialog">
                <Header>
                    <div>
                        <Title>{t("open_source_attribution")}</Title>
                        <Intro>
                            {t("this_app_ships_count_open_source_projects_pick_one_to_read_its_whole_licence",
                                {count: list.length})}
                        </Intro>
                    </div>
                    <CloseButton onClick={onClose} title={t("close")} type="button">
                        <CrossIcon size={12}/>
                    </CloseButton>
                </Header>

                <Body>
                    <Sidebar>
                        {list.map((item, position) => (
                            <Item
                                $active={position === selected}
                                key={item.name + "@" + item.version}
                                onClick={() => setSelected(position)}
                                type="button"
                            >
                                <ItemName>{item.name}</ItemName>
                                <Meta>{meta(item)}</Meta>
                            </Item>
                        ))}
                    </Sidebar>

                    {entry && (
                        <Article>
                            <ArticleHead>
                                <ArticleName>{entry.name}</ArticleName>
                                <Meta>{meta(entry)}</Meta>
                            </ArticleHead>
                            <Licence>{entry.text}</Licence>
                        </Article>
                    )}
                </Body>
            </Panel>
        </Backdrop>
    );
}
