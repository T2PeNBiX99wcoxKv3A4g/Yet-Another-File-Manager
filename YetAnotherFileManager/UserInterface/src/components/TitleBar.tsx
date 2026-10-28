import {useEffect, useState} from "react";
import styled from "styled-components";
import {Native} from "@photino-net-utils/bridge";
import {FolderIcon, PlusIcon} from "./Icons";

export interface TabInfo {
    id: string;
    title: string;
    path: string;
}

interface TitleBarProps {
    tabs: TabInfo[];
    activeId: string;
    onSelect: (id: string) => void;
    onClose: (id: string) => void;
    onNewTab: () => void;
}

export function TitleBar({tabs, activeId, onSelect, onClose, onNewTab}: TitleBarProps) {
    const [maximized, setMaximized] = useState(false);

    useEffect(() => {
        if (!Native.available) return;

        return Native.on((message) => {
            if (message.type !== "window.state") return;

            const data = message.data as { maximized?: unknown };
            if (typeof data?.maximized === "boolean") setMaximized(data.maximized);
        });
    }, []);

    const send = (type: string) => Native.send({type});
    const toggleMaximize = () => send("window.toggleMaximize");

    return (
        <Bar>
            <Mark><FolderIcon size={15}/></Mark>

            <Tabs>
                {tabs.map((tab) => (
                    <Tab
                        key={tab.id}
                        $active={tab.id === activeId}
                        onClick={() => onSelect(tab.id)}
                        title={tab.path}
                        type="button"
                    >
                        <FolderIcon size={13}/>
                        <TabName>{tab.title}</TabName>
                        <TabClose
                            onClick={(event) => {
                                event.stopPropagation();
                                onClose(tab.id);
                            }}
                            title="Close tab"
                        >
                            <svg viewBox="0 0 10 10" aria-hidden="true"><path d="m2 2 6 6M8 2 2 8"/></svg>
                        </TabClose>
                    </Tab>
                ))}

                <NewTab onClick={onNewTab} title="New tab" type="button">
                    <PlusIcon size={13}/>
                </NewTab>
            </Tabs>

            <DragArea onDoubleClick={toggleMaximize} onMouseDown={() => send("window.drag")}/>

            <Controls>
                <ControlButton onClick={() => send("window.minimize")} title="Minimize" type="button">
                    <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M2 5h6"/></svg>
                </ControlButton>
                <ControlButton
                    onClick={toggleMaximize}
                    title={maximized ? "Restore" : "Maximize"}
                    type="button"
                >
                    {maximized
                        ? <svg viewBox="0 0 10 10" aria-hidden="true">
                            <rect height="6" width="6" x="3" y="1"/>
                            <rect height="6" width="6" x="1" y="3"/>
                        </svg>
                        : <svg viewBox="0 0 10 10" aria-hidden="true"><rect height="6" width="6" x="2" y="2"/></svg>}
                </ControlButton>
                <CloseButton onClick={() => send("window.close")} title="Close" type="button">
                    <svg viewBox="0 0 10 10" aria-hidden="true"><path d="m2 2 6 6M8 2 2 8"/></svg>
                </CloseButton>
            </Controls>
        </Bar>
    );
}

const Bar = styled.header`
    display: flex;
    align-items: stretch;
    height: 38px;
    flex-shrink: 0;
    background: rgba(7, 11, 18, 0.95);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`;

const Mark = styled.span`
    display: grid;
    place-items: center;
    align-self: center;
    width: 22px;
    height: 22px;
    margin-left: 12px;
    flex-shrink: 0;
    border-radius: 7px;
    color: #041016;
    background: var(--accent-gradient);
`;

const Tabs = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex-shrink: 1;
    margin-left: 10px;
    padding-top: 4px;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Tab = styled.button<{ $active: boolean }>`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 96px;
    max-width: 190px;
    height: 30px;
    flex: 0 1 190px;
    padding: 0 6px 0 10px;
    border: 1px solid ${({$active}) => $active ? "var(--border-color)" : "transparent"};
    border-bottom: 0;
    border-radius: 7px 7px 0 0;
    background: ${({$active}) => $active ? "var(--bg-card-hover)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-muted)"};
    font: inherit;
    font-size: 11px;
    cursor: pointer;
    transition: background 110ms ease, color 110ms ease;

    svg {
        flex-shrink: 0;
        color: ${({$active}) => $active ? "var(--accent-primary)" : "var(--text-muted)"};
    }

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:hover > span:last-child {
        opacity: 1;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -2px;
    }
`;

const TabName = styled.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const TabClose = styled.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 4px;
    opacity: 0;

    svg {
        width: 8px;
        height: 8px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.3;
    }

    &:hover {
        background: rgba(148, 163, 184, 0.22);
        color: var(--text-primary);
    }
`;

const NewTab = styled.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    margin-bottom: 2px;
    border: 0;
    border-radius: 6px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const DragArea = styled.div`
    flex: 1;
    min-width: 28px;
`;

const Controls = styled.div`
    display: flex;
    flex-shrink: 0;
`;

const ControlButton = styled.button`
    display: grid;
    place-items: center;
    width: 46px;
    height: 100%;
    border: 0;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 100ms ease, color 100ms ease;

    svg {
        width: 10px;
        height: 10px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.2;
    }

    &:hover {
        background: rgba(148, 163, 184, 0.14);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -2px;
    }
`;

const CloseButton = styled(ControlButton)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;
