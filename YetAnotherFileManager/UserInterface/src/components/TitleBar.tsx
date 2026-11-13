import {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {useWindowControls, useWindowDrag} from "@photino-net-utils/bridge";
import {useTranslation} from "../api/i18n";
import type {TabInfo} from "../tabs";
import type {DirectoryView, ResolvedView} from "../api/files";
import {prettyShortcut, type ShortcutMap} from "../shortcuts";
import {isPathDrag, readDraggedPaths} from "./FileTray";
import {PlaceIcon} from "./PlaceIcon";
import {StatusCenter} from "./StatusCenter";
import {HistoryPanel} from "./HistoryPanel";
import {SharePanel} from "./SharePanel";
import {CountBadge} from "./CountBadge";
import {ViewMenu} from "./ViewMenu";
import type {TaskInfo} from "../api/tasks";
import {isArchiveLocation, isZipArchiveLocation} from "../utils/format";
import {
    AppIcon,
    ArchiveIcon,
    FolderIcon,
    GearIcon,
    HomeIcon,
    PackageIcon,
    PanelIcon,
    PlusIcon,
    SplitIcon,
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
    onTransferToTab: (paths: string[], target: string, move: boolean) => void;
    view: ResolvedView;
    onViewChange: (change: Partial<DirectoryView>) => void;
    onColumns: (columns: string[]) => void;
    showImages: boolean;
    onShowImages: (value: boolean) => void;
    tasks: TaskInfo[];
    onClearTasks: () => void;
    activityOpen: boolean;
    onActivityOpenChange: (open: boolean) => void;
    trayCount: number;
    trayVisible: boolean;
    onToggleTray: () => void;
    split: boolean;
    canSplit: boolean;
    onToggleSplit: () => void;
    details: boolean;
    canDetails: boolean;
    onToggleDetails: () => void;
    shortcuts: ShortcutMap;
    /** The folder the active tab shows, so the share panel can add it. */
    currentFolder: string;
}

export function TitleBar({
                             tabs,
                             activeId,
                             onSelect,
                             onClose,
                             onNewTab,
                             onReorder,
                             onTransferToTab,
                             view,
                             onViewChange,
                             onColumns,
                             showImages,
                             onShowImages,
                             tasks,
                             onClearTasks,
                             activityOpen,
                             onActivityOpenChange,
                             trayCount,
                             trayVisible,
                             onToggleTray,
                             split,
                             canSplit,
                             onToggleSplit,
                             details,
                             canDetails,
                             onToggleDetails,
                             shortcuts,
                             currentFolder,
                         }: TitleBarProps) {
    const t = useTranslation();
    const controls = useWindowControls();
    const drag = useWindowDrag();
    const [overflow, setOverflow] = useState({left: false, right: false});
    const [dragging, setDragging] = useState<string | null>(null);
    const [dropTab, setDropTab] = useState<string | null>(null);
    const tabHover = useRef<{ id: string; timer: number } | null>(null);
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

    useEffect(() => () => {
        if (tabHover.current) window.clearTimeout(tabHover.current.timer);
    }, []);

    // Keep the tab that was just activated inside the visible strip.
    useEffect(() => {
        activeTab.current?.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
    }, [activeId]);

    const scrollBy = (delta: number) => scroller.current?.scrollBy({left: delta, behavior: "smooth"});

    const cancelTabHover = () => {
        if (tabHover.current) window.clearTimeout(tabHover.current.timer);
        tabHover.current = null;
        setDropTab(null);
    };

    return (
        <Bar>
            <Mark><AppIcon size={19}/></Mark>

            <Tabs>
                {overflow.left && (
                    <ScrollButton onClick={() => scrollBy(-180)} title={t("Scroll tabs left")} type="button">
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
                            $dropTarget={dropTab === tab.id}
                            $split={Boolean(tab.split)}
                            draggable
                            onDragEnter={(event) => {
                                if (!isPathDrag(event.dataTransfer) || !canDropOnTab(tab)) return;
                                event.preventDefault();
                                if (tabHover.current?.id === tab.id) return;
                                cancelTabHover();
                                setDropTab(tab.id);
                                const timer = window.setTimeout(() => {
                                    onSelect(tab.id);
                                    tabHover.current = null;
                                }, 500);
                                tabHover.current = {id: tab.id, timer};
                            }}
                            onDragLeave={(event) => {
                                const related = event.relatedTarget;
                                if (related instanceof Node && event.currentTarget.contains(related)) return;
                                if (tabHover.current?.id === tab.id || dropTab === tab.id) cancelTabHover();
                            }}
                            onDragEnd={() => {
                                setDragging(null);
                                cancelTabHover();
                            }}
                            onDragOver={(event) => {
                                if (dragging || (isPathDrag(event.dataTransfer) && canDropOnTab(tab))) {
                                    event.preventDefault();
                                    if (isPathDrag(event.dataTransfer))
                                        event.dataTransfer.dropEffect = event.ctrlKey ? "copy" : "move";
                                }
                            }}
                            onDragStart={() => setDragging(tab.id)}
                            onDrop={(event) => {
                                event.preventDefault();
                                if (dragging) {
                                    onReorder(dragging, tab.id);
                                } else if (canDropOnTab(tab) && isPathDrag(event.dataTransfer)) {
                                    const {paths, move} = readDraggedPaths(event);
                                    if (paths.length > 0) {
                                        onSelect(tab.id);
                                        onTransferToTab(paths, tab.path, event.ctrlKey ? false : move);
                                    }
                                }
                                setDragging(null);
                                cancelTabHover();
                            }}
                            onClick={() => onSelect(tab.id)}
                            ref={tab.id === activeId ? activeTab : undefined}
                            title={tab.path || tab.title}
                            type="button"
                        >
                            <TabGlyph tab={tab}/>
                            <TabName>{tab.title}</TabName>
                            {tab.partner && (
                                <>
                                    <TabDivider>|</TabDivider>
                                    <FilesTabGlyph place={tab.partner.place}/>
                                    <TabName>{tab.partner.title}</TabName>
                                </>
                            )}
                            <TabClose
                                data-shortcut={prettyShortcut(shortcuts.closeTab)}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    onClose(tab.id);
                                }}
                                title={t("Close tab")}
                            >
                                <CloseSmallSvg/>
                            </TabClose>
                        </Tab>
                    ))}
                </Scroller>

                {overflow.right && (
                    <ScrollButton onClick={() => scrollBy(180)} title={t("Scroll tabs right")} type="button">
                        <ChevronRightSmallSvg/>
                    </ScrollButton>
                )}

                <NewTab
                    data-shortcut={prettyShortcut(shortcuts.newTab)}
                    onClick={onNewTab}
                    title={t("New tab")}
                    type="button"
                >
                    <PlusIcon size={13}/>
                </NewTab>
            </Tabs>

            <DragArea {...drag}/>

            <Controls>
                <UtilityButton
                    $active={split}
                    data-shortcut={prettyShortcut(shortcuts.splitView)}
                    disabled={!canSplit}
                    onClick={onToggleSplit}
                    title={split ? t("Close split view") : t("Split view")}
                    type="button"
                >
                    <SplitIcon size={15}/>
                </UtilityButton>
                <UtilityButton
                    $active={details}
                    disabled={!canDetails}
                    onClick={onToggleDetails}
                    title={details ? t("Hide details panel") : t("Show details panel")}
                    type="button"
                >
                    <PanelIcon size={15}/>
                </UtilityButton>
                <TrayButton
                    $active={trayVisible}
                    onClick={onToggleTray}
                    title={trayVisible ? t("Hide file tray") : t("Show file tray")}
                    type="button"
                >
                    <PackageIcon size={14}/>
                    {trayCount > 0 && <CountBadge>{trayCount > 9 ? "9+" : trayCount}</CountBadge>}
                </TrayButton>
                <HistoryPanel/>
                <SharePanel currentFolder={currentFolder}/>
                <StatusCenter
                    tasks={tasks}
                    onClear={onClearTasks}
                    open={activityOpen}
                    onOpenChange={onActivityOpenChange}
                />
                <ViewMenu
                    disabled={tabs.find((tab) => tab.id === activeId)?.kind !== "files"}
                    onChange={onViewChange}
                    onColumns={onColumns}
                    onShowImages={onShowImages}
                    showImages={showImages}
                    view={view}
                />
                <ControlButton onClick={controls.minimize} title={t("Minimize")} type="button">
                    <MinimizeSvg/>
                </ControlButton>
                <ControlButton
                    onClick={controls.toggleMaximize}
                    title={controls.maximized ? t("Restore") : t("Maximize")}
                    type="button"
                >
                    {controls.maximized
                        ? <RestoreSmallSvg/>
                        : <MaximizeSvg/>}
                </ControlButton>
                <CloseButton onClick={controls.close} title={t("Close")} type="button">
                    <CloseSmallSvg/>
                </CloseButton>
            </Controls>
        </Bar>
    );
}

function canDropOnTab(tab: TabInfo): boolean {
    return tab.kind === "files" && (!isArchiveLocation(tab.path) || isZipArchiveLocation(tab.path));
}

function TabGlyph({tab}: { tab: TabInfo }) {
    switch (tab.kind) {
        case "home":
            return <HomeIcon size={13}/>;
        case "settings":
            return <GearIcon size={13}/>;
        case "recycle":
            return <TrashIcon size={13}/>;
        default:
            return tab.archive ? <ArchiveIcon size={13}/> : <FilesTabGlyph place={tab.place}/>;
    }
}

/** A files tab always uses the Quick access glyph, or the folder glyph — never a shell icon. */
function FilesTabGlyph({place}: { place?: TabInfo["place"] }) {
    return place ? <PlaceIcon place={place} size={13}/> : <FolderIcon size={13}/>;
}

const Bar = styled.header`
    position: relative;
    z-index: 2;
    display: flex;
    align-items: stretch;
    height: 44px;
    flex-shrink: 0;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    font-family: var(--font-title), var(--font-cjk);
    user-select: none;
    -webkit-user-select: none;

    html.has-wallpaper & {
        background: rgba(var(--bg-rgb), 0.5);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
    }
`;

const Mark = styled.span`
    display: grid;
    place-items: center;
    align-self: center;
    width: 26px;
    height: 26px;
    margin-left: 12px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`;

const Tabs = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
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

const Tab = styled.button<{ $active: boolean; $dragging: boolean; $split: boolean; $dropTarget: boolean }>`
    display: flex;
    align-items: center;
    gap: 7px;
    width: ${({$split}) => $split ? "300px" : "176px"};
    height: 32px;
    flex: 0 0 auto;
    padding: 0 6px 0 10px;
    border: 1px solid ${({$dropTarget, $active}) => $dropTarget
            ? "var(--accent-primary)"
            : $active ? "var(--border-color)" : "transparent"};
    border-bottom: 0;
    border-radius: 9px 9px 0 0;
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.10)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-muted)"};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
    opacity: ${({$dragging}) => $dragging ? 0.45 : 1};
    box-shadow: ${({$dropTarget, $active}) => $dropTarget
            ? "inset 0 -2px 0 var(--accent-primary), 0 0 12px rgba(var(--accent-rgb), 0.22)"
            : $active ? "inset 0 -2px 0 var(--accent-primary)" : "none"};
    transition: background 120ms ease, color 120ms ease, opacity 120ms ease, box-shadow 120ms ease;

    svg {
        flex-shrink: 0;
        color: ${({$active}) => $active ? "var(--accent-primary)" : "var(--text-muted)"};
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
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

const TabDivider = styled.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
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
        background: rgba(var(--accent-rgb), 0.14);
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
    border: 1px solid transparent;
    border-radius: 8px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        border-color: var(--border-color);
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

const TrayButton = styled.button<{ $active: boolean }>`
    position: relative;
    display: grid;
    place-items: center;
    width: 34px;
    height: 100%;
    border: 0;
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.12)" : "transparent"};
    color: var(--text-secondary);
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`;

const UtilityButton = styled.button<{ $active: boolean }>`
    display: grid;
    place-items: center;
    width: 34px;
    height: 100%;
    border: 0;
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.12)" : "transparent"};
    color: ${({$active}) => $active ? "var(--accent-primary)" : "var(--text-secondary)"};
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
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
        background: rgba(var(--accent-rgb), 0.14);
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
