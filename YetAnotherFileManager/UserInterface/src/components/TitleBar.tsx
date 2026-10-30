import {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {useWindowControls, useWindowDrag} from "@photino-net-utils/bridge";
import type {TabInfo} from "../tabs";
import {
    AppIcon,
    FolderIcon,
    GearIcon,
    HomeIcon,
    PlusIcon,
    TrashIcon,
} from "./Icons";
import ChevronLeftSmallSvg from "./icons/chevron-left-small.svg?react";
import ChevronRightSmallSvg from "./icons/chevron-right-small.svg?react";
import CloseSmallSvg from "./icons/close-small.svg?react";
import MinimizeSvg from "./icons/minimize.svg?react";
import MaximizeSvg from "./icons/maximize.svg?react";
import RestoreSmallSvg from "./icons/restore-small.svg?react";

interface TitleBarProps {
    tabs: TabInfo[];
    activeId: string;
    onSelect: (id: string) => void;
    onClose: (id: string) => void;
    onNewTab: () => void;
    onReorder: (id: string, beforeId: string) => void;
}

export function TitleBar({tabs, activeId, onSelect, onClose, onNewTab, onReorder}: TitleBarProps) {
    const controls = useWindowControls();
    const drag = useWindowDrag();
    const [overflow, setOverflow] = useState({left: false, right: false});
    const [dragging, setDragging] = useState<string | null>(null);
    const scroller = useRef<HTMLDivElement | null>(null);
    const activeTab = useRef<HTMLButtonElement | null>(null);

    const measure = useCallback(() => {
        const element = scroller.current;
        if (!element) return;

        const left = element.scrollLeft > 1;
        const right = element.scrollLeft + element.clientWidth < element.scrollWidth - 1;
        setOverflow((current) => current.left === left && current.right === right ? current : {left, right});
    }, []);

    useEffect(() => {
        measure();

        const element = scroller.current;
        if (!element) return;

        const observer = new ResizeObserver(measure);
        observer.observe(element);
        return () => observer.disconnect();
    }, [measure, tabs.length]);

    // Keep the tab that was just activated inside the visible strip.
    useEffect(() => {
        activeTab.current?.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
    }, [activeId]);

    const scrollBy = (delta: number) => scroller.current?.scrollBy({left: delta, behavior: "smooth"});

    return (
        <Bar>
            <Mark><AppIcon size={19}/></Mark>

            <Tabs>
                {overflow.left && (
                    <ScrollButton onClick={() => scrollBy(-180)} title="Scroll tabs left" type="button">
                        <ChevronLeftSmallSvg/>
                    </ScrollButton>
                )}

                <Scroller
                    onScroll={measure}
                    onWheel={(event) => {
                        const element = scroller.current;
                        if (!element || element.scrollWidth <= element.clientWidth) return;

                        element.scrollBy({left: event.deltaY || event.deltaX, behavior: "smooth"});
                    }}
                    ref={scroller}
                >
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            $active={tab.id === activeId}
                            $dragging={dragging === tab.id}
                            draggable
                            onDragEnd={() => setDragging(null)}
                            onDragOver={(event) => {
                                if (dragging) event.preventDefault();
                            }}
                            onDragStart={() => setDragging(tab.id)}
                            onDrop={(event) => {
                                event.preventDefault();
                                if (dragging) onReorder(dragging, tab.id);
                                setDragging(null);
                            }}
                            onClick={() => onSelect(tab.id)}
                            ref={tab.id === activeId ? activeTab : undefined}
                            title={tab.path || tab.title}
                            type="button"
                        >
                            <TabIcon kind={tab.kind}/>
                            <TabName>{tab.title}</TabName>
                            <TabClose
                                onClick={(event) => {
                                    event.stopPropagation();
                                    onClose(tab.id);
                                }}
                                title="Close tab"
                            >
                                <CloseSmallSvg/>
                            </TabClose>
                        </Tab>
                    ))}
                </Scroller>

                {overflow.right && (
                    <ScrollButton onClick={() => scrollBy(180)} title="Scroll tabs right" type="button">
                        <ChevronRightSmallSvg/>
                    </ScrollButton>
                )}

                <NewTab onClick={onNewTab} title="New tab" type="button">
                    <PlusIcon size={13}/>
                </NewTab>
            </Tabs>

            <DragArea {...drag}/>

            <Controls>
                <ControlButton onClick={controls.minimize} title="Minimize" type="button">
                    <MinimizeSvg/>
                </ControlButton>
                <ControlButton
                    onClick={controls.toggleMaximize}
                    title={controls.maximized ? "Restore" : "Maximize"}
                    type="button"
                >
                    {controls.maximized
                        ? <RestoreSmallSvg/>
                        : <MaximizeSvg/>}
                </ControlButton>
                <CloseButton onClick={controls.close} title="Close" type="button">
                    <CloseSmallSvg/>
                </CloseButton>
            </Controls>
        </Bar>
    );
}

function TabIcon({kind}: { kind: TabInfo["kind"] }) {
    switch (kind) {
        case "home":
            return <HomeIcon size={13}/>;
        case "settings":
            return <GearIcon size={13}/>;
        case "recycle":
            return <TrashIcon size={13}/>;
        default:
            return <FolderIcon size={13}/>;
    }
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
`;

const Tabs = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 4px;
`;

const Scroller = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const ScrollButton = styled.button`
    display: grid;
    place-items: center;
    width: 20px;
    height: 26px;
    flex-shrink: 0;
    margin-bottom: 2px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    svg {
        width: 10px;
        height: 10px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.4;
    }

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const Tab = styled.button<{ $active: boolean; $dragging: boolean }>`
    display: flex;
    align-items: center;
    gap: 7px;
    width: 168px;
    height: 30px;
    flex: 0 0 auto;
    padding: 0 6px 0 10px;
    border: 1px solid ${({$active}) => $active ? "var(--border-color)" : "transparent"};
    border-bottom: 0;
    border-radius: 7px 7px 0 0;
    background: ${({$active}) => $active ? "var(--bg-card-hover)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-muted)"};
    font: inherit;
    font-size: 11px;
    cursor: pointer;
    opacity: ${({$dragging}) => $dragging ? 0.45 : 1};
    transition: background 110ms ease, color 110ms ease, opacity 110ms ease;

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
