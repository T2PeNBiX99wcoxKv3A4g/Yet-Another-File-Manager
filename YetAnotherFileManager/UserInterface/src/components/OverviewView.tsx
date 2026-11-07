import {useEffect, useRef, useState, type CSSProperties, type DragEvent, type MouseEvent, type PointerEvent as ReactPointerEvent} from "react";
import styled from "styled-components";
import {
    clearFrequent,
    clearRecent,
    DefaultView,
    DefaultViewDefaults,
    listDirectory,
    listFrequent,
    listPlaces,
    openFile,
    renameDrive,
    type DirectoryListing,
    type Drive,
    type FrequentEntry,
    type Place,
    type RecentEntry,
} from "../api/files";
import {getSettings, saveSettings, type AppSettings} from "../api/settings";
import {useTextSearch, type PageFind} from "../ui/textSearch";
import {requestFile, requestFolder} from "../folder-picker";
import {useMediaUrl} from "../api/icons";
import {Native, useTranslation} from "@photino-net-utils/bridge";
import {FileList} from "./FileList";
import {ArrowUpIcon, CheckIcon, CrossIcon, DriveIcon, GridIcon, ListIcon, MenuIcon, PencilIcon, PinIcon, PlusIcon, VideoIcon} from "./Icons";
import {BuiltInBackgrounds, BuiltInVideos, builtInUrl, isBuiltInVideo} from "../backgrounds/concepts";
import {setSelectionMenu, useSelectionMenuGroup} from "../ui/selectionMenu";
import {PathIcon} from "./PathIcon";
import {PlaceIcon} from "./PlaceIcon";
import {quickPlace, useQuickAccess} from "../quick";
import {copyPaths} from "../api/operations";
import {DefaultShortcuts} from "../shortcuts";
import {FileMenu, type FileMenuTarget} from "./FileMenu";
import {baseName, driveLetter, driveName, formatBytes, plural, usageTone} from "../utils/format";
import {wantsNewTab} from "../shortcuts";
import {buildPanels, PanelGlyph, type Panel, type PanelKind, type ViewMode} from "../panels";
import {IconPicker} from "./IconPicker";

interface OverviewViewProps {
    places: Place[];
    drives: Drive[];
    recent: RecentEntry[];
    recentLimit: number;
    homePath: string;
    /** Bumped when the recent or frequent history is cleared, so those panels reload. */
    historyVersion: number;
    onOpen: (path: string, newTab?: boolean) => void;
    onPlacesChanged: (places: Place[]) => void;
    onRecentCleared: () => void;
    onLayoutChanged?: () => void;
    onHistoryChanged?: () => void;
    /** Called after a volume label was written, so the drive lists show the new name. */
    onDrivesChanged?: () => void;
    /** Bumped when the hidden-files override changes, so folder panels read again. */
    visibilityVersion?: number;
    /** Text to narrow the panels to; matching panels stay and are highlighted. */
    find?: PageFind | null;
    /** Reports how many panels matched, for the find bar's counter. */
    onSearchMatches?: (count: number) => void;
    /** The picker shows the overview as a browsing page, without the layout editor. */
    readOnly?: boolean;
    /** The picker chooses a card or a panel entry instead of opening it. */
    onPick?: (path: string) => void;
    /** Reports a selected entry from a folder panel, so the picker's footer can use it. */
    onSelectionChange?: (paths: string[]) => void;
    /** Adds an entry to the file tray, like the file browser's menu. */
    onAddToTray?: (paths: string[]) => void;
}

function BannerThumb({source, poster}: {source: string; poster?: string}) {
    const extension = source.split(".").pop()?.toLowerCase() ?? "";
    const file = source.startsWith("builtin:") ? null : source;
    const media = useMediaUrl(file, 0, extension ? `.${extension}` : "");
    const src = poster ?? builtInUrl(source) ?? media;
    const video = !poster && ["mp4", "webm", "mkv", "mov", "m4v", "ogv"].includes(extension);

    if (!src) return null;
    return video
        ? <video autoPlay loop muted playsInline src={src}/>
        : <img alt="" src={src}/>;
}

interface BannerFramingProps {
    source: string;
    video: boolean;
    height: number;
    offset: number;
    onCancel: () => void;
    onSave: (offset: number) => void;
}

/** Shows the whole image and a frame the user can slide to choose the banner's visible part. */
function BannerFraming({source, video, height, offset, onCancel, onSave}: BannerFramingProps) {
    const t = useTranslation();
    const media = useRef<HTMLImageElement | HTMLVideoElement | null>(null);
    const drag = useRef<{ y: number; top: number } | null>(null);
    const initialized = useRef(false);
    const [natural, setNatural] = useState<{ width: number; height: number } | null>(null);
    const [display, setDisplay] = useState<{ width: number; height: number } | null>(null);
    const [top, setTop] = useState(0);

    const measure = () => {
        const element = media.current;
        if (!element) return;

        const width = element instanceof HTMLVideoElement ? element.videoWidth : element.naturalWidth;
        const height = element instanceof HTMLVideoElement ? element.videoHeight : element.naturalHeight;
        const rect = element.getBoundingClientRect();

        // The bundled concepts are SVG data URLs and report a tiny intrinsic size; their real
        // design space is 1920x1080.
        if (source.startsWith("data:image/svg"))
            setNatural({width: 1920, height: 1080});
        else if (width > 0 && height > 0)
            setNatural({width, height});

        if (rect.width > 0 && rect.height > 0)
            setDisplay({width: rect.width, height: rect.height});
    };

    const frameHeight = display && natural
        ? Math.min(display.height, height * (display.width / natural.width))
        : 0;
    const maxTop = Math.max(0, (display?.height ?? 0) - frameHeight);

    useEffect(() => {
        if (!display || !natural || initialized.current) return;

        initialized.current = true;
        setTop(Math.min(maxTop, Math.max(0, offset * maxTop)));
    }, [display, natural, maxTop, offset]);

    useEffect(() => {
        const onResize = () => measure();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Cached images and SVG data URLs can finish before the load handler is attached.
    useEffect(() => {
        const frame = window.requestAnimationFrame(measure);
        return () => window.cancelAnimationFrame(frame);
    }, [source, video]);

    const startDrag = (event: ReactPointerEvent) => {
        drag.current = {y: event.clientY, top};
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const moveDrag = (event: ReactPointerEvent) => {
        const current = drag.current;
        if (!current) return;

        setTop(Math.min(maxTop, Math.max(0, current.top + event.clientY - current.y)));
    };

    const endDrag = (event: ReactPointerEvent) => {
        drag.current = null;
        if (event.currentTarget.hasPointerCapture(event.pointerId))
            event.currentTarget.releasePointerCapture(event.pointerId);
    };

    return (
        <FramingOverlay onPointerDown={(event) => {
            if (event.target === event.currentTarget) onCancel();
        }}>
            <FramingPanel>
                <FramingHead>
                    <span>{t("Adjust banner framing")}</span>
                    <CloseButton onClick={onCancel} title={t("Cancel")} type="button">
                        <CrossIcon size={12}/>
                    </CloseButton>
                </FramingHead>
                <FramingHint>{t("Drag the frame to choose the visible part.")}</FramingHint>

                <FramingStage>
                    {video
                        ? <video
                            muted
                            onLoadedMetadata={(event) => {
                                measure();
                                event.currentTarget.currentTime = Math.min(0.1, event.currentTarget.duration || 0);
                            }}
                            playsInline
                            preload="metadata"
                            ref={(element) => { media.current = element; }}
                            src={source}
                        />
                        : <img
                            alt=""
                            draggable={false}
                            onLoad={measure}
                            ref={(element) => { media.current = element; }}
                            src={source}
                        />}
                    {frameHeight > 0 && (
                        <FramingWindow
                            onPointerCancel={endDrag}
                            onPointerDown={startDrag}
                            onPointerMove={moveDrag}
                            onPointerUp={endDrag}
                            style={{height: frameHeight, top}}
                        >
                            <FramingGrip/>
                        </FramingWindow>
                    )}
                </FramingStage>

                <FramingActions>
                    <Button onClick={onCancel} type="button">{t("Cancel")}</Button>
                    <Button
                        $primary
                        onClick={() => onSave(maxTop > 0 ? top / maxTop : offset)}
                        type="button"
                    >
                        {t("Save")}
                    </Button>
                </FramingActions>
            </FramingPanel>
        </FramingOverlay>
    );
}

/** A few built-in concepts, each already drawn in the app's colour presets. */
const BuiltinImageBanners = [
    {concept: "aurora", preset: "Indigo"},
    {concept: "aurora", preset: "Violet"},
    {concept: "dunes", preset: "Amber"},
    {concept: "dunes", preset: "Rose"},
    {concept: "tide", preset: "Teal"},
    {concept: "tide", preset: "Green"},
].flatMap(({concept, preset}) => {
    const variant = BuiltInBackgrounds
        .find((item) => item.id === concept)?.variants
        .find((item) => item.preset === preset);
    return variant ? [variant] : [];
});

/** How far the panels rise into the banner, so the fade has no visible seam. */
const BannerOverlap = 96;

const Page = styled.div<{ $flush?: boolean }>`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush}) => $flush ? "0 26px 34px" : "14px 26px 34px"};
`;

const Banner = styled.div`
    position: relative;
    margin: 0 -26px 18px;
    overflow: hidden;
    background: transparent;

    img,
    video {
        width: 100%;
        height: auto;
        display: block;
        /* The image starts at the chosen crop and slides down as the page scrolls. */
        transform: translateY(calc(var(--banner-progress, 0) * var(--banner-move, 0px) - var(--banner-base, 0px)));
        will-change: transform;
    }
`;

const BannerMedia = styled.div`
    position: absolute;
    inset: 0;
    overflow: hidden;
    /* The fade belongs to the fixed frame; the moving image cannot drag the edge with it. */
    -webkit-mask-image: linear-gradient(to bottom,
        #000 0%,
        #000 18%,
        rgba(0, 0, 0, 0.9) 32%,
        rgba(0, 0, 0, 0.6) 50%,
        transparent calc(100% - min(120px, 40%)));
    mask-image: linear-gradient(to bottom,
        #000 0%,
        #000 18%,
        rgba(0, 0, 0, 0.9) 32%,
        rgba(0, 0, 0, 0.6) 50%,
        transparent calc(100% - min(120px, 40%)));
`;

const BannerHandle = styled.div`
    position: absolute;
    right: 0;
    bottom: ${BannerOverlap}px;
    left: 0;
    z-index: 2;
    display: grid;
    place-items: center;
    height: 14px;
    cursor: row-resize;
    background: transparent;

    /* A small centred grip; a full-width bar reads as a separator line. */
    &::before {
        content: "";
        width: 88px;
        height: 3px;
        border-radius: 999px;
        background: rgba(var(--accent-rgb), 0.35);
        transition: background 120ms ease;
    }

    &:hover::before {
        background: rgba(var(--accent-rgb), 0.7);
    }
`;

const Content = styled.div<{ $overlap?: boolean }>`
    position: relative;
    z-index: 2;
    margin-top: ${({$overlap}) => $overlap ? `-${BannerOverlap}px` : "0"};
`;

const BannerPanel = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    padding: 10px 12px 14px;
    /* A soft glass band: a bordered card here would draw a full-width line across the fading art. */
    background: linear-gradient(to bottom,
        rgba(var(--bg-rgb), 0) 0%,
        rgba(var(--bg-rgb), 0.38) 18%,
        rgba(var(--bg-rgb), 0.38) 82%,
        rgba(var(--bg-rgb), 0) 100%);
    backdrop-filter: blur(8px);
`;

const BannerPanelHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

const BannerPanelTitle = styled.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`;

const BannerChoices = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const BannerItem = styled.div`
    position: relative;
    width: 132px;
    height: 72px;
`;

const BannerChoice = styled.button<{ $active: boolean }>`
    width: 100%;
    height: 100%;
    padding: 0;
    overflow: hidden;
    border: 1px solid ${({$active}) => $active ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    box-shadow: ${({$active}) => $active ? "0 0 0 2px rgba(var(--accent-rgb), 0.25)" : "none"};
    cursor: pointer;

    img,
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`;

/** The remove badge on a banner the user added; built-in banners do not get one. */
const BannerRemove = styled.button`
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 50%;
    background: rgba(6, 8, 16, 0.78);
    color: #fff;
    cursor: pointer;

    &:hover {
        border-color: #e81123;
        background: #e81123;
    }
`;

const PlayBadge = styled.span`
    position: absolute;
    right: 5px;
    bottom: 4px;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(6, 8, 16, 0.66);
    color: #fff;
`;

const NoBanner = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`;

const FramingOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`;

const FramingPanel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(960px, 94vw);
    max-height: 92vh;
    overflow-y: auto;
    padding: 16px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: var(--accent-glow);
`;

const FramingHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`;

const FramingHint = styled.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`;

const FramingStage = styled.div`
    position: relative;
    align-self: center;
    width: 100%;
    overflow: hidden;
    border-radius: var(--radius-sm);
    background: var(--bg-media);

    img,
    video {
        display: block;
        width: 100%;
        height: auto;
        user-select: none;
        pointer-events: none;
    }
`;

const FramingWindow = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    border-top: 2px solid var(--accent-primary);
    border-bottom: 2px solid var(--accent-primary);
    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.55);
    cursor: grab;
    touch-action: none;

    &:active {
        cursor: grabbing;
    }
`;

const FramingGrip = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`;

const FramingActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`;

const Button = styled.button<{ $primary?: boolean }>`
    padding: 6px 12px;
    border: 1px solid ${({$primary}) => $primary ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: ${({$primary}) => $primary ? "rgba(var(--accent-rgb), 0.18)" : "transparent"};
    color: ${({$primary}) => $primary ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-focus);
        color: var(--text-primary);
    }
`;

const CloseButton = styled.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const AddBanner = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 132px;
    height: 72px;
    border: 1px dashed var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-focus);
        color: var(--text-primary);
    }
`;

const Toolbar = styled.div<{ $overlay?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;

    ${({$overlay}) => $overlay
        ? `
            position: absolute;
            z-index: 10;
            top: 10px;
            right: 18px;
            padding: 4px;
            border: 1px solid rgba(var(--accent-rgb), 0.14);
            border-radius: var(--radius-md);
            background: rgba(var(--bg-rgb), 0.42);
            backdrop-filter: blur(14px) saturate(1.2);
            -webkit-backdrop-filter: blur(14px) saturate(1.2);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
        `
        : "padding-bottom: 14px;"}
`;

const Segmented = styled.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`;

const Segment = styled.button<{ $active: boolean }>`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active}) => $active ? "rgba(var(--accent-secondary-rgb), 0.22)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-muted)"};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`;

const Ghost = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 8px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

/** The panel choices live in one menu, so another kind only ever needs one more option. */
const AddMenu = styled.div`
    position: relative;
    display: inline-flex;
`;

const PanelMenu = styled.div`
    position: absolute;
    z-index: 40;
    top: calc(100% + 6px);
    right: 0;
    display: flex;
    flex-direction: column;
    min-width: 150px;
    padding: 5px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
`;

const PanelMenuItem = styled.button`
    padding: 6px 10px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const Panels = styled.div<{ $columns: number }>`
    display: grid;
    grid-template-columns: repeat(${({$columns}) => $columns}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`;

const HeadStart = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`;

const HeadEnd = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const Title = styled.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`;

const TitleInput = styled.input`
    width: 100%;
    max-width: 190px;
    padding: 3px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    outline: 0;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;
    font-weight: 600;

    &:focus {
        border-color: var(--border-color-focus);
    }
`;

const IconButton = styled.button<{ $active?: boolean }>`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    padding: 0;
    border: 1px solid ${({$active}) => $active ? "var(--border-color-focus)" : "var(--border-color)"};
    border-radius: 5px;
    background: ${({$active}) => $active ? "rgba(var(--accent-secondary-rgb), 0.24)" : "var(--bg-input)"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-muted)"};
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }

    img {
        width: 14px;
        height: 14px;
        object-fit: contain;
    }
`;

const Places = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`;

const Card = styled.div<{ $plain: boolean; $selected?: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px 13px;
    border: 1px solid ${({$selected}) => $selected ? "rgba(var(--accent-rgb), 0.55)" : "var(--border-color)"};
    border-radius: var(--radius-md);
    background: ${({$selected}) => $selected ? "rgba(var(--accent-rgb), 0.12)" : "var(--bg-card)"};
    color: var(--text-primary);
    font: inherit;
    text-align: left;
    cursor: ${({$plain}) => $plain ? "default" : "pointer"};
    transition: background 130ms ease, border-color 130ms ease, transform 140ms cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 140ms ease;

    ${({$selected}) => $selected ? "box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.16);" : ""}

    &:hover {
        border-color: ${({$plain}) => $plain ? "var(--border-color)" : "var(--border-color-hover)"};
        background: ${({$plain}) => $plain ? "var(--bg-card)" : "var(--bg-card-hover)"};
        box-shadow: ${({$plain}) => $plain ? "none" : "0 8px 20px rgba(0, 0, 0, 0.22)"};
        transform: ${({$plain}) => $plain ? "none" : "translateY(-1px)"};
    }
`;

const Glyph = styled.span`
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 8px;
    background: rgba(var(--accent-secondary-rgb), 0.16);
    color: var(--accent-primary);

    img {
        width: 18px;
        height: 18px;
        object-fit: contain;
    }
`;

const CardText = styled.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`;

/** The second line of a card or row: a path, a capacity hint or a modification time. */
const Meta = styled.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Rows = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const Row = styled.button<{ $selected?: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 7px 10px;
    border: 1px solid ${({$selected}) => $selected ? "rgba(var(--accent-rgb), 0.55)" : "transparent"};
    border-radius: var(--radius-sm);
    background: ${({$selected}) => $selected ? "rgba(var(--accent-rgb), 0.12)" : "transparent"};
    color: ${({$selected}) => $selected ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }
`;

const RowText = styled.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`;

/** A fake directory entry at the end of Quick access; it only exists in edit mode. */
const AddFolder = styled.button<{ $row?: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: ${({$row}) => $row ? "7px 10px" : "11px 13px"};
    border: 1px dashed var(--border-color-hover);
    border-radius: ${({$row}) => $row ? "var(--radius-sm)" : "var(--radius-md)"};
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    text-align: left;
    cursor: pointer;

    strong {
        font-size: ${({$row}) => $row ? "12.5px" : "13px"};
        font-weight: ${({$row}) => $row ? 500 : 600};
    }

    &:hover {
        border-color: var(--border-color-focus);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const Bar = styled.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`;

const Fill = styled.span<{ $used: number; $tone: string }>`
    display: block;
    width: ${({$used}) => Math.min(Math.max($used, 0), 1) * 100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone}) => $tone};
`;

const Preview = styled.div`
    display: flex;
    flex-direction: column;
    height: 320px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow: hidden;

    & > div {
        min-height: 0;
    }
`;

const Scroller = styled.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`;

const Tiles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`;

const Tile = styled.button<{ $selected?: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 7px 9px;
    border: 1px solid ${({$selected}) => $selected ? "rgba(var(--accent-rgb), 0.55)" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: ${({$selected}) => $selected ? "rgba(var(--accent-rgb), 0.12)" : "var(--bg-card)"};
    color: ${({$selected}) => $selected ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;
    content-visibility: auto;
    contain-intrinsic-size: auto 35px;

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    img {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        object-fit: contain;
    }

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

/** Anchors an icon's picker to the icon itself, so the list opens right where it is used. */
const IconAnchor = styled.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`;

const IconTrigger = styled.button`
    display: inline-grid;
    place-items: center;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-secondary-rgb), 0.22);
    }
`;



/** Removes a folder from one Quick access panel; only shown while the overview is being edited. */
const RemovePlaceButton = styled.button<{ $inline?: boolean }>`
    position: ${({$inline}) => $inline ? "static" : "absolute"};
    top: 5px;
    right: 5px;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    padding: 0;
    border: 0;
    border-radius: 5px;
    background: rgba(148, 163, 184, 0.18);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: rgba(239, 68, 68, 0.25);
        color: #fca5a5;
    }
`;

/** The rename action sits right after the drive name, not at the far end of the row. */
const RenameButton = styled.button`
    display: inline-grid;
    place-items: center;
    width: 16px;
    height: 16px;
    margin-left: 4px;
    padding: 0;
    border: 0;
    border-radius: 4px;
    background: transparent;
    color: var(--text-muted);
    opacity: 0.55;
    vertical-align: -3px;
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-secondary-rgb), 0.28);
        color: #c7d2fe;
        opacity: 1;
    }
`;

/** The name turns into a text box with cancel and apply, the way the path bar does. */
const InlineEditorBox = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 2px;
    max-width: 100%;
    padding: 1px 2px 1px 6px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);

    input {
        min-width: 4ch;
        border: 0;
        outline: 0;
        background: transparent;
        color: var(--text-primary);
        font: inherit;
        font-size: 12.5px;
    }
`;

const EditorButton = styled.button<{ $apply?: boolean }>`
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: ${({$apply}) => $apply ? "rgba(34, 197, 94, 0.22)" : "rgba(148, 163, 184, 0.2)"};
        color: ${({$apply}) => $apply ? "#4ade80" : "var(--text-primary)"};
    }
`;

const Notice = styled.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`;

const Empty = styled.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`;

export function OverviewView({
    places,
    drives,
    recent,
    recentLimit,
    homePath,
    historyVersion,
    onOpen,
    onPlacesChanged,
    onRecentCleared,
    onLayoutChanged,
    onHistoryChanged,
    onDrivesChanged,
    visibilityVersion = 0,
    find,
    onSearchMatches,
    readOnly = false,
    onPick,
    onSelectionChange,
    onAddToTray,
}: OverviewViewProps) {
    const t = useTranslation();
    const quick = useQuickAccess();
    const [editing, setEditing] = useState(false);
    const [settings, setSettings] = useState<AppSettings | null>(null);
    const bannerPath = settings?.overviewBanner ?? null;
    const bannerBuiltin = bannerPath?.startsWith("builtin:") ?? false;
    const bannerExtension = bannerBuiltin ? "" : bannerPath?.split(".").pop()?.toLowerCase() ?? "";
    const bannerVideo = bannerBuiltin
        ? isBuiltInVideo(bannerPath!)
        : ["mp4", "webm", "mkv", "mov", "m4v", "ogv"].includes(bannerExtension);
    const bannerMedia = useMediaUrl(bannerBuiltin ? null : bannerPath, 0,
        bannerExtension ? `.${bannerExtension}` : "");
    const bannerSource = bannerPath ? builtInUrl(bannerPath) ?? bannerMedia : null;
    const [iconEditor, setIconEditor] = useState<{ kind: "panel" | "place"; id: string } | null>(null);
    const [addOpen, setAddOpen] = useState(false);
    const [driveRename, setDriveRename] = useState<{ drive: Drive; label: string } | null>(null);
    const [placeRename, setPlaceRename] = useState<{ path: string; name: string } | null>(null);
    const [driveNotice, setDriveNotice] = useState<string | null>(null);
    const [selectedPath, setSelectedPath] = useState<string | null>(null);
    const [selectedTarget, setSelectedTarget] = useState<{ path: string; isDirectory: boolean } | null>(null);
    const selectionMenu = useSelectionMenuGroup("overview");
    const [menu, setMenu] = useState<{ x: number; y: number; target: FileMenuTarget } | null>(null);
    const [bannerDraft, setBannerDraft] = useState<number | null>(null);
    const bannerDrag = useRef<{ y: number; height: number } | null>(null);
    const bannerDraftRef = useRef<number | null>(null);
    const pageRef = useRef<HTMLDivElement | null>(null);
    const bannerRef = useRef<HTMLDivElement | null>(null);
    const bannerImageRef = useRef<HTMLImageElement | null>(null);
    const bannerHeight = bannerDraft ?? settings?.overviewBannerHeight ?? 220;
    const bannerHeightRef = useRef(bannerHeight);
    bannerHeightRef.current = bannerHeight;
    const [bannerWidth, setBannerWidth] = useState(0);
    const [mediaSize, setMediaSize] = useState<{ width: number; height: number } | null>(null);
    const bannerOffset = Math.min(1, Math.max(0, settings?.overviewBannerOffset ?? 0.3));
    const bannerSpare = mediaSize && bannerWidth > 0
        ? Math.max(0, mediaSize.height * (bannerWidth / mediaSize.width) - bannerHeight)
        : 0;
    const bannerBase = bannerSpare * bannerOffset;
    const bannerMove = Math.min(bannerHeight * 0.5, bannerBase);
    const [framing, setFraming] = useState(false);

    /** In the picker, a card selects for the footer instead of opening a tab. */
    const pickCard = (path: string, isDirectory = false): boolean => {
        if (!onPick)
            return false;

        setSelectedPath(path);
        setSelectedTarget({path, isDirectory});
        onSelectionChange?.([path]);
        return true;
    };

    const openCardMenu = (event: MouseEvent<HTMLElement>, path: string, isDirectory: boolean) => {
        event.preventDefault();
        event.stopPropagation();
        setSelectedPath(path);
        setSelectedTarget({path, isDirectory});
        setMenu({x: event.clientX, y: event.clientY, target: {path, isDirectory}});
    };

    useEffect(() => {
        setSelectionMenu("overview", selectedTarget
            ? (x, y) => setMenu({x, y, target: selectedTarget})
            : null);
        return () => setSelectionMenu("overview", null);
    }, [selectedTarget]);

    const openMenuTarget = (path: string, newTab?: boolean) => onOpen(path, newTab);

    useEffect(() => {
        void getSettings().then(setSettings, () => setSettings(null));
    }, []);

    // Scroll-linked banner motion. Updating a CSS variable avoids re-rendering the whole overview
    // for every wheel tick, while the banner and its media still move on the same frame as the page.
    useEffect(() => {
        const page = pageRef.current;
        if (!page) return;

        let frame = 0;
        const update = () => {
            frame = 0;
            const progress = Math.min(page.scrollTop / Math.max(bannerHeightRef.current, 1), 1);
            page.style.setProperty("--banner-progress", `${progress}`);
        };
        const onScroll = () => {
            if (frame === 0) frame = window.requestAnimationFrame(update);
        };

        page.addEventListener("scroll", onScroll, {passive: true});
        update();
        return () => {
            page.removeEventListener("scroll", onScroll);
            if (frame !== 0) window.cancelAnimationFrame(frame);
        };
    }, []);

    // A new banner has its own natural size; the old crop cannot be reused until it loads.
    useEffect(() => {
        if (bannerBuiltin && !bannerVideo) {
            // Bundled concepts are SVG data URLs; they report a tiny default intrinsic size and
            // their load event may already have fired before React attached the handler.
            setMediaSize({width: 1920, height: 1080});
            return;
        }

        setMediaSize(null);
        const image = bannerImageRef.current;
        if (image?.complete && image.naturalWidth > 0)
            setMediaSize({width: image.naturalWidth, height: image.naturalHeight});
    }, [bannerPath, bannerBuiltin, bannerVideo]);

    // The image is rendered at the banner's width, so its spare vertical room decides how far it
    // can move without exposing an edge.
    useEffect(() => {
        const element = bannerRef.current;
        if (!element) return;

        const update = () => setBannerWidth(element.clientWidth);
        update();

        const observer = new ResizeObserver(update);
        observer.observe(element);
        return () => observer.disconnect();
    }, [settings?.overviewBanner]);

    // Any click outside an open icon list closes it, the way a menu should.
    useEffect(() => {
        if (!iconEditor) return;

        const close = () => setIconEditor(null);
        const closeOnPointer = (event: PointerEvent) => {
            const target = event.target as Element | null;
            if (target?.closest("[data-icon-menu]")) return;
            setIconEditor(null);
        };

        window.addEventListener("pointerdown", closeOnPointer);
        window.addEventListener("resize", close);
        document.addEventListener("scroll", close, true);
        return () => {
            window.removeEventListener("pointerdown", closeOnPointer);
            window.removeEventListener("resize", close);
            document.removeEventListener("scroll", close, true);
        };
    }, [iconEditor]);

    // The add-panel menu behaves the same way.
    useEffect(() => {
        if (!addOpen) return;

        const close = () => setAddOpen(false);
        window.addEventListener("pointerdown", close);
        return () => window.removeEventListener("pointerdown", close);
    }, [addOpen]);

    const panels = buildPanels(settings);
    const ids = panels.map((panel) => panel.id);
    const panelsRef = useRef<HTMLDivElement | null>(null);
    const isPanelIconOpen = (id: string) => iconEditor?.kind === "panel" && iconEditor.id === id;
    const isPlaceIconOpen = (path: string) => iconEditor?.kind === "place" && iconEditor.id === path;

    // The overview watches every folder it shows; the tab it lives in is the only one that matters.
    useEffect(() => {
        if (!Native.available) return;

        const paths = panels
            .filter((panel) => panel.kind === "home" || panel.kind === "folder")
            .map((panel) => panel.path ?? homePath)
            .filter((path) => path.length > 0);

        Native.send({type: "fs.watch", payload: {paths}});
    }, [panels.map((panel) => panel.path ?? panel.id).join("|"), homePath]);

    // The shared page search highlights matches and dims or hides panels without any.
    useTextSearch(panelsRef, find ?? null, "section", onSearchMatches ?? (() => undefined),
        [recent.length, places.length, drives.length, visibilityVersion]);

    const setPlaceIcon = async (path: string, icon: string | null) => {
        const icons = {...settings?.placeIcons};

        if (icon) icons[path] = icon;
        else delete icons[path];

        setIconEditor(null);
        await save({placeIcons: icons});
        onPlacesChanged(await listPlaces());
    };

    /** Renames a folder in any Quick access panel; the name is stored by path for the path bar too. */
    const renamePlaceName = async (path: string, name: string) => {
        const names = {...settings?.placeNames};
        const trimmed = name.trim();

        if (trimmed.length > 0) names[path] = trimmed;
        else delete names[path];

        setPlaceRename(null);
        await save({placeNames: names});
        onPlacesChanged(await listPlaces());
    };

    /** Starts a drive rename in place: the name itself becomes the editor. */
    const startDriveRename = (drive: Drive) => {
        setDriveNotice(null);
        setDriveRename({drive, label: drive.label || "Local Disk"});
    };

    /** Writes the label straight back to Windows; access denied means it needs elevation. */
    const applyDriveRename = async () => {
        if (!driveRename) return;

        const {drive, label} = driveRename;
        setDriveRename(null);

        const result = await renameDrive(drive.name, label.trim());

        if (result.ok) {
            setDriveNotice(null);
            onDrivesChanged?.();
            return;
        }

        setDriveNotice(result.needsAdmin
            ? "Windows needs administrator rights to rename a volume. Restart the app as administrator and try again."
            : result.error ?? "Windows refused the volume label.");
    };

    const columns = settings?.overviewColumns ?? 1;

    const save = async (patch: Partial<AppSettings>) => {
        if (!settings) return;

        // The panel list is the whole truth now: one delete removes a panel for good. Writing it on
        // every change also migrates ids that older versions only hid.
        const next = {...settings, ...patch, overviewPanels: patch.overviewPanels ?? ids, overviewHidden: []};
        setSettings(await saveSettings(next));
        onLayoutChanged?.();
    };

    const chooseBanner = async () => {
        const file = await requestFile([".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif",
            ".mp4", ".webm", ".mkv", ".mov", ".m4v"]);
        if (!file) return;

        const banners = settings?.overviewBanners ?? [];
        await save({overviewBanner: file,
            overviewBanners: banners.includes(file) ? banners : [...banners, file]});
    };

    const removeBanner = () => void save({overviewBanner: null});

    /** Deletes one of the user's own banner files, clearing the banner when it was the active one. */
    const removeCustomBanner = (path: string) => void save({
        overviewBanners: (settings?.overviewBanners ?? []).filter((item) => item !== path),
        ...(settings?.overviewBanner === path ? {overviewBanner: null} : {}),
    });

    const startBannerDrag = (event: ReactPointerEvent) => {
        bannerDrag.current = {y: event.clientY, height: bannerHeight};
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const moveBanner = (event: ReactPointerEvent) => {
        const current = bannerDrag.current;
        if (!current) return;

        const height = Math.min(900, Math.max(120, current.height + event.clientY - current.y));
        bannerDraftRef.current = height;
        setBannerDraft(height);
    };

    const endBannerDrag = (event: ReactPointerEvent) => {
        bannerDrag.current = null;
        if (event.currentTarget.hasPointerCapture(event.pointerId))
            event.currentTarget.releasePointerCapture(event.pointerId);

        // Save the last drag position even if the pointer-up arrives before React has rendered the
        // final move; the ref is updated immediately and is what the user sees.
        if (bannerDraftRef.current !== null) {
            void save({overviewBannerHeight: bannerDraftRef.current});
            bannerDraftRef.current = null;
        }
    };

    const move = (id: string, offset: number) => {        const index = ids.indexOf(id);
        const target = index + offset;
        if (index < 0 || target < 0 || target >= ids.length) return;

        const next = [...ids];
        [next[index], next[target]] = [next[target], next[index]];
        void save({overviewPanels: next});
    };

    const rename = (id: string, value: string) => {
        const titles = {...settings?.overviewTitles};
        const trimmed = value.trim();

        if (trimmed.length > 0) titles[id] = trimmed;
        else delete titles[id];

        void save({overviewTitles: titles});
    };

    const setView = (id: string, view: ViewMode) =>
        void save({overviewViews: {...settings?.overviewViews, [id]: view}});

    const togglePin = (id: string) => {
        // No stored list yet: start from the panels' default pin state, not from nothing.
        const pinned = settings?.overviewPinned ?? panels.filter((panel) => panel.pinned).map((panel) => panel.id);

        void save({overviewPinned: panels.find((panel) => panel.id === id)?.pinned
            ? pinned.filter((item) => item !== id)
            : [...pinned, id]});
    };

    /** Deletes the panel outright; any kind can be added again from the toolbar. */
    const remove = (id: string) => {
        setIconEditor(null);

        // Deleting a panel forgets everything that belonged to it, so a new one starts clean.
        const without = <T,>(record: Record<string, T> | null | undefined) => {
            const next = {...record};
            delete next[id];
            return next;
        };
        const pinned = settings?.overviewPinned ?? panels.filter((panel) => panel.pinned).map((panel) => panel.id);

        void save({
            overviewPanels: ids.filter((item) => item !== id),
            overviewPinned: pinned.filter((item) => item !== id),
            overviewTitles: without(settings?.overviewTitles),
            overviewViews: without(settings?.overviewViews),
            overviewIcons: without(settings?.overviewIcons),
            panelPlaces: without(settings?.panelPlaces),
        });
    };

    const setIcon = (id: string, icon: string | null) => {
        const icons = {...settings?.overviewIcons};

        if (icon) icons[id] = icon;
        else delete icons[id];

        setIconEditor(null);
        void save({overviewIcons: icons});
    };

    /** Adds another block of a kind; "quick", "quick:2", … so each block is independent. */
    const addBlock = async (kind: PanelKind) => {
        if (!settings) return;

        if (kind === "folder") {
            const folder = await requestFolder();
            if (!folder) return;

            const id = `folder:${folder}`;
            if (!ids.includes(id)) await save({overviewPanels: [...ids, id]});
            return;
        }

        // A hand-made Quick access always starts empty; "quick" is reserved for the factory panel.
        if (kind === "quick") {
            let suffix = 2;
            while (ids.includes(`quick:${suffix}`)) suffix += 1;
            await save({overviewPanels: [...ids, `quick:${suffix}`]});
            return;
        }

        // Gaps are allowed after deleting a numbered block, so the first unused id wins.
        let id: string = kind;
        for (let suffix = 2; ids.includes(id); suffix += 1)
            id = `${kind}:${suffix}`;

        await save({overviewPanels: [...ids, id]});
    };

    /** Pins one more folder to the chosen Quick access panel. */
    const addPlace = async (panel: Panel) => {
        const folder = await requestFolder();
        if (!folder) return;

        if (panel.id === "quick") {
            await save({quickAccess: [...new Set([...places.map((place) => place.path), folder])]});
            onPlacesChanged(await listPlaces());
            return;
        }

        const current = panel.places ?? [];
        if (current.some((path) => samePath(path, folder))) return;

        await save({panelPlaces: {...settings?.panelPlaces, [panel.id]: [...current, folder]}});
    };

    /** Takes one folder out of the chosen Quick access panel. */
    const removePlace = async (panel: Panel, path: string) => {
        setIconEditor(null);

        if (panel.id === "quick") {
            await save({quickAccess: places.filter((place) => !samePath(place.path, path)).map((place) => place.path)});
            onPlacesChanged(await listPlaces());
            return;
        }

        await save({
            panelPlaces: {
                ...settings?.panelPlaces,
                [panel.id]: (panel.places ?? []).filter((item) => !samePath(item, path))
            }
        });
    };

    /** Moves one folder in a Quick access panel; dragging is only armed while the overview is edited. */
    const reorderPlace = async (panel: Panel, from: string, to: string) => {
        if (samePath(from, to)) return;

        const paths = panel.id === "quick" ? places.map((place) => place.path) : panel.places ?? [];
        const fromIndex = paths.findIndex((path) => samePath(path, from));
        const toIndex = paths.findIndex((path) => samePath(path, to));

        if (fromIndex < 0 || toIndex < 0) return;

        const next = [...paths];
        const [moved] = next.splice(fromIndex, 1);
        next.splice(toIndex, 0, moved);

        if (panel.id === "quick") {
            await save({quickAccess: next});
            onPlacesChanged(await listPlaces());
            return;
        }

        await save({panelPlaces: {...settings?.panelPlaces, [panel.id]: next}});
    };

    /** The drag handlers every folder in a Quick access panel shares. */
    const placeDrop = (panel: Panel, target: string) => ({
        draggable: editing,
        onDragOver: (event: DragEvent) => {
            if (!editing) return;
            event.preventDefault();
            event.dataTransfer.dropEffect = "move";
        },
        onDragStart: (event: DragEvent) => {
            if (!editing) return;
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", target);
        },
        onDrop: (event: DragEvent) => {
            if (!editing) return;
            event.preventDefault();
            void reorderPlace(panel, event.dataTransfer.getData("text/plain"), target);
        },
    });

    /** The folders one Quick access panel shows: the factory panel uses the global places. */
    const quickItems = (panel: Panel): Place[] => {
        if (panel.id === "quick")
            return places;

        return (panel.places ?? []).map((path) => {
            const known = places.find((place) => samePath(place.path, path));

            return {
                name: settings?.placeNames?.[path] ?? known?.name ?? (baseName(path) || path),
                path,
                kind: "folder",
                icon: known?.icon ?? settings?.placeIcons?.[path] ?? null,
            };
        });
    };

    /** Recent is one kind: the same entries, shown as cards or rows, with one empty state. */
    const renderRecent = (panel: Panel) => {
        if (recent.length === 0)
            return <Empty>{t("Files and folders you open show up here.")}</Empty>;

        const entries = recent.slice(0, recentLimit);

        return panel.view === "grid"
            ? (
                <Places>
                    {entries.map((entry) => {
                        const place = quickPlace(quick, entry.path);

                        return (
                            <Card
                                key={entry.path}
                                $plain={false}
                                $selected={selectedPath === entry.path}
                                onClick={(event) => {
                                    if (pickCard(entry.path, entry.isDirectory)) return;
                                    if (entry.isDirectory) onOpen(entry.path, wantsNewTab(event));
                                    else void openFile(entry.path);
                                }}
                                onDoubleClick={() => onPick?.(entry.path)}
                                onContextMenu={(event) => openCardMenu(event, entry.path, entry.isDirectory)}
                                title={entry.path}
                            >
                                <Glyph>
                                    {place && quick.useIcons
                                        ? <PlaceIcon place={place} size={18}/>
                                        : <PathIcon isDirectory={entry.isDirectory} name={entry.name} path={entry.path} size={18}/>}
                                </Glyph>
                                <CardText>
                                    <strong>{place?.name || entry.name}</strong>
                                    <Meta>{entry.path}</Meta>
                                </CardText>
                            </Card>
                        );
                    })}
                </Places>
            )
            : (
                <Rows>
                    {entries.map((entry) => {
                        const place = quickPlace(quick, entry.path);

                        return (
                            <Row
                                key={entry.path}
                                $selected={selectedPath === entry.path}
                                onClick={(event) => {
                                    if (pickCard(entry.path, entry.isDirectory)) return;
                                    if (entry.isDirectory) onOpen(entry.path, wantsNewTab(event));
                                    else void openFile(entry.path);
                                }}
                                onDoubleClick={() => onPick?.(entry.path)}
                                onContextMenu={(event) => openCardMenu(event, entry.path, entry.isDirectory)}
                                title={entry.path}
                                type="button"
                            >
                                {place && quick.useIcons
                                    ? <PlaceIcon place={place} size={15}/>
                                    : <PathIcon isDirectory={entry.isDirectory} name={entry.name} path={entry.path} size={15}/>}
                                <RowText>
                                    <strong>{place?.name || entry.name}</strong>
                                    <Meta>{entry.path}</Meta>
                                </RowText>
                            </Row>
                        );
                    })}
                </Rows>
            );
    };

    /** Drives are one kind: the same volumes, shown as cards or rows, with one empty state. */
    const renderDrives = (panel: Panel) => {
        if (drives.length === 0)
            return <Empty>{t("No drives are available.")}</Empty>;

        const items = drives.map((drive) => {
            const used = drive.totalSize > 0 ? 1 - drive.freeSpace / drive.totalSize : 0;
            const editingName = driveRename?.drive.name === drive.name;
            const name = editingName ? (
                <InlineEditor
                    maxLength={32}
                    onCancel={() => setDriveRename(null)}
                    onChange={(label) => setDriveRename({...driveRename, label})}
                    onCommit={() => void applyDriveRename()}
                    value={driveRename?.label ?? ""}
                />
            ) : (
                <>{driveName(drive)}</>
            );
            const rename = !editingName && editing && (
                <RenameButton
                    onClick={(event) => {
                        event.stopPropagation();
                        startDriveRename(drive);
                    }}
                    title={t("Rename volume")}
                    type="button"
                >
                    <PencilIcon size={11}/>
                </RenameButton>
            );
            const meta = <Meta>{t("{free} free of {total}", {free: formatBytes(drive.freeSpace), total: formatBytes(drive.totalSize)})}</Meta>;

            return panel.view === "grid"
                ? (
                    <Card
                        key={drive.name}
                        $plain={false}
                        $selected={selectedPath === drive.name}
                        onClick={(event) => {
                            if (editingName || !pickCard(drive.name, true)) {
                                if (!editingName) onOpen(drive.name, wantsNewTab(event));
                            }
                        }}
                        onDoubleClick={() => !editingName && onPick?.(drive.name)}
                        onContextMenu={(event) => !editingName && openCardMenu(event, drive.name, true)}
                        title={drive.name}
                    >
                        <Glyph><DriveIcon size={18}/></Glyph>
                        <CardText>
                            <strong>
                                {name}
                                {editingName && driveLetter(drive)}
                                {rename}
                            </strong>
                            {meta}
                        </CardText>
                    </Card>
                )
                : (
                    <Row
                        as={editingName ? "div" : "button"}
                        key={drive.name}
                        $selected={selectedPath === drive.name}
                        onClick={editingName ? undefined : (event: MouseEvent<HTMLElement>) => {
                            if (!pickCard(drive.name, true)) onOpen(drive.name, wantsNewTab(event));
                        }}
                        onDoubleClick={editingName ? undefined : () => onPick?.(drive.name)}
                        onContextMenu={editingName ? undefined : (event: MouseEvent<HTMLElement>) => openCardMenu(event, drive.name, true)}
                        title={drive.name}
                        type={editingName ? undefined : "button"}
                    >
                        <DriveIcon size={18}/>
                        <RowText>
                            <strong>
                                {name}
                                {editingName && driveLetter(drive)}
                                {rename}
                            </strong>
                            {meta}
                        </RowText>
                        <Bar><Fill $used={used} $tone={usageTone(used)}/></Bar>
                    </Row>
                );
        });

        return panel.view === "grid" ? <Places>{items}</Places> : <Rows>{items}</Rows>;
    };

    const body = (panel: Panel) => {
        switch (panel.kind) {
            case "quick": {
                const items = quickItems(panel);

                if (!editing && items.length === 0)
                    return <Empty>{t("No folders in this Quick access panel yet.")}</Empty>;

                return panel.view === "grid"
                    ? (
                        <Places>
                            {items.map((place) => (
                                <Card
                                    key={place.path}
                                    $plain={editing}
                                    $selected={selectedPath === place.path}
                                    {...placeDrop(panel, place.path)}
                                    onClick={(event) => {
                                        if (!editing && !pickCard(place.path, true))
                                            onOpen(place.path, wantsNewTab(event));
                                    }}
                                    onDoubleClick={() => !editing && onPick?.(place.path)}
                                    onContextMenu={(event) => !editing && openCardMenu(event, place.path, true)}
                                    title={place.path}
                                >
                                    {editing && (
                                        <RemovePlaceButton
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                void removePlace(panel, place.path);
                                            }}
                                            title={t("Remove from Quick access")}
                                            type="button"
                                        >
                                            <CrossIcon size={11}/>
                                        </RemovePlaceButton>
                                    )}
                                    <IconAnchor>
                                        {editing ? (
                                            <IconTrigger
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setIconEditor(isPlaceIconOpen(place.path) ? null : {kind: "place", id: place.path});
                                                }}
                                                onPointerDown={(event) => event.stopPropagation()}
                                                title={t("Change icon")}
                                                type="button"
                                            >
                                                <Glyph><PlaceIcon place={place}/></Glyph>
                                            </IconTrigger>
                                        ) : (
                                            <Glyph><PlaceIcon place={place}/></Glyph>
                                        )}
                                        {isPlaceIconOpen(place.path) && (
                                            <IconPicker
                                                onPick={(icon) => void setPlaceIcon(place.path, icon)}
                                                value={settings?.placeIcons?.[place.path] ?? place.icon}
                                            />
                                        )}
                                    </IconAnchor>
                                    <CardText>
                                        {placeRename?.path === place.path ? (
                                            <strong>
                                                <InlineEditor
                                                    onCancel={() => setPlaceRename(null)}
                                                    onChange={(name) => setPlaceRename({path: place.path, name})}
                                                    onCommit={() => void renamePlaceName(place.path, placeRename?.name ?? "")}
                                                    value={placeRename?.name ?? ""}
                                                />
                                            </strong>
                                        ) : (
                                            <strong>
                                                {place.name}
                                                {editing && (
                                                    <RenameButton
                                                        onClick={(event) => {
                                                            event.stopPropagation();
                                                            setIconEditor(null);
                                                            setPlaceRename({path: place.path, name: place.name});
                                                        }}
                                                        title={t("Rename folder")}
                                                        type="button"
                                                    >
                                                        <PencilIcon size={11}/>
                                                    </RenameButton>
                                                )}
                                            </strong>
                                        )}
                                        <Meta>{place.path}</Meta>
                                    </CardText>
                                </Card>
                            ))}

                            {editing && (
                                <AddFolder onClick={() => void addPlace(panel)} title={t("Pin a folder here")} type="button">
                                    <Glyph><PlusIcon size={15}/></Glyph>
                                    <CardText>
                                        <strong>{t("Add folder")}</strong>
                                        <Meta>{t("Pin a directory here")}</Meta>
                                    </CardText>
                                </AddFolder>
                            )}
                        </Places>
                    )
                    : (
                        <Rows>
                            {items.map((place) => (
                                <Row
                                    key={place.path}
                                    $selected={selectedPath === place.path}
                                    {...placeDrop(panel, place.path)}
                                    onClick={(event) => {
                                        if (!editing && !pickCard(place.path, true))
                                            onOpen(place.path, wantsNewTab(event));
                                    }}
                                    onDoubleClick={() => !editing && onPick?.(place.path)}
                                    onContextMenu={(event) => !editing && openCardMenu(event, place.path, true)}
                                    title={place.path}
                                    type="button"
                                >
                                    <IconAnchor>
                                        {editing ? (
                                            <IconTrigger
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setIconEditor(isPlaceIconOpen(place.path) ? null : {kind: "place", id: place.path});
                                                }}
                                                onPointerDown={(event) => event.stopPropagation()}
                                                title={t("Change icon")}
                                                type="button"
                                            >
                                                <PlaceIcon place={place} size={15}/>
                                            </IconTrigger>
                                        ) : (
                                            <PlaceIcon place={place} size={15}/>
                                        )}
                                        {isPlaceIconOpen(place.path) && (
                                            <IconPicker
                                                onPick={(icon) => void setPlaceIcon(place.path, icon)}
                                                value={settings?.placeIcons?.[place.path] ?? place.icon}
                                            />
                                        )}
                                    </IconAnchor>
                                    <RowText>
                                        {placeRename?.path === place.path ? (
                                            <strong>
                                                <InlineEditor
                                                    onCancel={() => setPlaceRename(null)}
                                                    onChange={(name) => setPlaceRename({path: place.path, name})}
                                                    onCommit={() => void renamePlaceName(place.path, placeRename?.name ?? "")}
                                                    value={placeRename?.name ?? ""}
                                                />
                                            </strong>
                                        ) : (
                                            <strong>
                                                {place.name}
                                                {editing && (
                                                    <RenameButton
                                                        onClick={(event) => {
                                                            event.stopPropagation();
                                                            setIconEditor(null);
                                                            setPlaceRename({path: place.path, name: place.name});
                                                        }}
                                                        title={t("Rename folder")}
                                                        type="button"
                                                    >
                                                        <PencilIcon size={11}/>
                                                    </RenameButton>
                                                )}
                                            </strong>
                                        )}
                                        <Meta>{place.path}</Meta>
                                    </RowText>
                                    {editing && (
                                        <RemovePlaceButton
                                            $inline
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                void removePlace(panel, place.path);
                                            }}
                                            title={t("Remove from Quick access")}
                                            type="button"
                                        >
                                            <CrossIcon size={11}/>
                                        </RemovePlaceButton>
                                    )}
                                </Row>
                            ))}

                            {editing && (
                                <AddFolder $row onClick={() => void addPlace(panel)} title={t("Pin a folder here")} type="button">
                                    <PlusIcon size={15}/>
                                    <RowText>
                                        <strong>{t("Add folder")}</strong>
                                        <Meta>{t("Pin a directory here")}</Meta>
                                    </RowText>
                                </AddFolder>
                            )}
                        </Rows>
                    );
            }

            case "frequent":
                return <FrequentBody mode={panel.view} onContextMenu={openCardMenu} onOpen={onOpen} onPick={onPick} onSelectionChange={onSelectionChange} version={historyVersion}/>;

            case "recent":
                return renderRecent(panel);

            case "drives":
                return renderDrives(panel);

            default:
                return (
                    <FolderBody
                        mode={panel.view}
                        onContextMenu={openCardMenu}
                        onOpen={onOpen}
                        onPick={onPick}
                        onSelectionChange={onSelectionChange}
                        openOnSingleClick={settings?.openOnSingleClick ?? false}
                        path={panel.path ?? homePath}
                        selectionMenuId={`overview:${panel.id}`}
                        showCheckboxes={settings?.showCheckboxes ?? true}
                        visibilityVersion={visibilityVersion}
                    />
                );
        }
    };

    return (
        <Page $flush={!!settings?.overviewBanner} ref={pageRef}>
            {!readOnly && (
                <Toolbar $overlay={!!settings?.overviewBanner}>
                <Segmented role="group" title={t("Columns")}>
                    {[1, 2, 3, 4, 5].map((count) => (
                        <Segment
                            key={count}
                            $active={columns === count}
                            onClick={() => void save({overviewColumns: count})}
                            title={plural(t, count, "1 column", "{count} columns")}
                            type="button"
                        >
                            {count}
                        </Segment>
                    ))}
                </Segmented>

                {editing && (
                    <AddMenu>
                        <Ghost
                            onClick={() => setAddOpen((current) => !current)}
                            onPointerDown={(event) => event.stopPropagation()}
                            title={t("Add a panel")}
                            type="button"
                        >
                            <PlusIcon size={12}/>
                            {t("Add panel ▾")}
                        </Ghost>
                        {addOpen && (
                            <PanelMenu onPointerDown={(event) => event.stopPropagation()}>
                                {(["quick", "recent", "frequent", "home", "drives", "folder"] as PanelKind[]).map((kind) => (
                                    <PanelMenuItem
                                        key={kind}
                                        onClick={() => {
                                            setAddOpen(false);
                                            void addBlock(kind);
                                        }}
                                        type="button"
                                    >
                                        {kind === "quick" ? t("Quick access")
                                            : kind === "recent" ? t("Recent")
                                                : kind === "frequent" ? t("Frequent")
                                                    : kind === "home" ? t("Home")
                                                        : kind === "drives" ? t("This PC") : t("Folder…")}
                                    </PanelMenuItem>
                                ))}
                            </PanelMenu>
                        )}
                    </AddMenu>
                )}

                {selectionMenu.available && (
                    <IconButton
                        onClick={(event) => selectionMenu.open(event.clientX, event.clientY)}
                        title={t("Selection menu")}
                        type="button"
                    >
                        <MenuIcon size={14}/>
                    </IconButton>
                )}

                <Ghost
                    onClick={() => {
                        setEditing((current) => !current);
                        setAddOpen(false);
                        setIconEditor(null);
                        setPlaceRename(null);
                        setDriveRename(null);
                    }}
                    title={editing ? t("Done") : t("Edit")}
                    type="button"
                >
                    {editing ? <CheckIcon size={13}/> : <PencilIcon size={13}/>}
                    {editing ? t("Done") : t("Edit")}
                </Ghost>
            </Toolbar>
            )}

            {driveNotice && <Notice>{driveNotice}</Notice>}

            {settings?.overviewBanner && (
                <Banner
                    ref={bannerRef}
                    style={{
                        height: `${bannerHeight}px`,
                        "--banner-base": `${bannerBase}px`,
                        "--banner-move": `${bannerMove}px`,
                    } as CSSProperties}
                >
                    <BannerMedia>
                        {bannerVideo
                            ? <video
                                autoPlay
                                loop
                                muted
                                onLoadedMetadata={(event) => {
                                    if (event.currentTarget.videoWidth > 0 && event.currentTarget.videoHeight > 0)
                                        setMediaSize({
                                            width: event.currentTarget.videoWidth,
                                            height: event.currentTarget.videoHeight,
                                        });
                                }}
                                playsInline
                                src={bannerSource ?? undefined}
                            />
                            : <img
                                alt=""
                                onLoad={(event) => {
                                    const width = bannerBuiltin ? 1920 : event.currentTarget.naturalWidth || 1920;
                                    const height = bannerBuiltin ? 1080 : event.currentTarget.naturalHeight || 1080;
                                    setMediaSize({width, height});
                                }}
                                ref={bannerImageRef}
                                src={bannerSource ?? undefined}
                            />}
                    </BannerMedia>
                    {editing && (
                        <BannerHandle
                            onDoubleClick={() => {
                                bannerDraftRef.current = null;
                                setBannerDraft(null);
                                void save({overviewBannerHeight: 220});
                            }}
                            onPointerCancel={endBannerDrag}
                            onPointerDown={startBannerDrag}
                            onPointerMove={moveBanner}
                            onPointerUp={endBannerDrag}
                            title={t("Drag to resize; double-click to reset")}
                        />
                    )}
                </Banner>
            )}

            <Content $overlap={!!settings?.overviewBanner}>
            {editing && (
                <BannerPanel>
                    <BannerPanelHead>
                        <BannerPanelTitle>{t("Banners")}</BannerPanelTitle>
                        {settings?.overviewBanner && (
                            <Ghost onClick={() => setFraming(true)} title={t("Adjust framing…")} type="button">
                                <PencilIcon size={12}/>
                                {t("Adjust framing…")}
                            </Ghost>
                        )}
                    </BannerPanelHead>
                    <BannerChoices>
                        <BannerItem>
                            <BannerChoice
                                $active={!settings?.overviewBanner}
                                onClick={removeBanner}
                                title={t("No banner")}
                                type="button"
                            >
                                <NoBanner>
                                    <CrossIcon size={16}/>
                                    <span>{t("No banner")}</span>
                                </NoBanner>
                            </BannerChoice>
                        </BannerItem>

                        {BuiltinImageBanners.map((variant) => (
                            <BannerItem key={variant.id}>
                                <BannerChoice
                                    $active={settings?.overviewBanner === variant.id}
                                    onClick={() => void save({overviewBanner: variant.id})}
                                    title={`${t(variant.concept)} · ${t(variant.preset)}`}
                                    type="button"
                                >
                                    <BannerThumb poster={variant.url} source={variant.id}/>
                                </BannerChoice>
                            </BannerItem>
                        ))}

                        {BuiltInVideos.map((video) => (
                            <BannerItem key={video.id}>
                                <BannerChoice
                                    $active={settings?.overviewBanner === video.id}
                                    onClick={() => void save({overviewBanner: video.id})}
                                    title={t(video.name)}
                                    type="button"
                                >
                                    <BannerThumb poster={video.poster} source={video.id}/>
                                    <PlayBadge><VideoIcon size={11}/></PlayBadge>
                                </BannerChoice>
                            </BannerItem>
                        ))}

                        {(settings?.overviewBanners ?? []).map((path) => (
                            <BannerItem key={path}>
                                <BannerChoice
                                    $active={settings?.overviewBanner === path}
                                    onClick={() => void save({overviewBanner: path})}
                                    title={path}
                                    type="button"
                                >
                                    <BannerThumb source={path}/>
                                </BannerChoice>
                                <BannerRemove
                                    onClick={() => removeCustomBanner(path)}
                                    title={t("Remove")}
                                    type="button"
                                >
                                    <CrossIcon size={10}/>
                                </BannerRemove>
                            </BannerItem>
                        ))}

                        <AddBanner onClick={() => void chooseBanner()} title={t("Add banner…")} type="button">
                            <PlusIcon size={18}/>
                            <span>{t("Add banner…")}</span>
                        </AddBanner>
                    </BannerChoices>
                </BannerPanel>
            )}

            <Panels ref={panelsRef} $columns={columns}>
                {panels
                    .map((panel) => {
                        const index = ids.indexOf(panel.id);

                        return (
                            <Section key={panel.id}>
                                <Head>
                                    <HeadStart>
                                        <IconAnchor>
                                            {editing ? (
                                                <IconTrigger
                                                    onClick={() => setIconEditor(isPanelIconOpen(panel.id) ? null : {kind: "panel", id: panel.id})}
                                                    onPointerDown={(event) => event.stopPropagation()}
                                                    title={t("Change icon")}
                                                    type="button"
                                                >
                                                    <PanelGlyph panel={panel} size={15}/>
                                                </IconTrigger>
                                            ) : (
                                                <PanelGlyph panel={panel} size={15}/>
                                            )}
                                            {isPanelIconOpen(panel.id) && (
                                                <IconPicker
                                                    onPick={(icon) => setIcon(panel.id, icon)}
                                                    value={panel.icon}
                                                />
                                            )}
                                        </IconAnchor>

                                        {editing
                                            ? (
                                                <TitleInput
                                                    defaultValue={panel.title}
                                                    onBlur={(event) => rename(panel.id, event.target.value)}
                                                    onKeyDown={(event) => {
                                                        if (event.key === "Enter") (event.target as HTMLInputElement).blur();
                                                    }}
                                                />
                                            )
                                            : <Title>{t(panel.title)}</Title>}
                                    </HeadStart>

                                    <HeadEnd>
                                        {!editing && panel.kind === "recent" && (
                                            <Ghost onClick={() => void clearRecent().then(onRecentCleared)} title={t("Clear")} type="button">
                                                {t("Clear")}
                                            </Ghost>
                                        )}

                                        {!editing && panel.kind === "frequent" && (
                                            <Ghost
                                                onClick={() => void clearFrequent().then(() => onHistoryChanged?.())}
                                                title={t("Clear the frequent list")}
                                                type="button"
                                            >
                                                {t("Clear")}
                                            </Ghost>
                                        )}

                                        {!editing && (panel.kind === "home" || panel.kind === "folder") && (
                                            <Ghost onClick={() => onOpen(panel.path ?? homePath)} title={t("Open folder")} type="button">
                                                {t("Open")}
                                            </Ghost>
                                        )}

                                        {editing && (
                                            <>
                                                <IconButton
                                                    $active={panel.pinned}
                                                    onClick={() => togglePin(panel.id)}
                                                    title={panel.pinned ? t("Unpin from the sidebar") : t("Pin to the sidebar")}
                                                    type="button"
                                                >
                                                    <PinIcon size={12}/>
                                                </IconButton>
                                                <IconButton
                                                    $active={panel.view === "list"}
                                                    onClick={() => setView(panel.id, "list")}
                                                    title={t("List")}
                                                    type="button"
                                                >
                                                    <ListIcon size={13}/>
                                                </IconButton>
                                                <IconButton
                                                    $active={panel.view === "grid"}
                                                    onClick={() => setView(panel.id, "grid")}
                                                    title={t("Grid")}
                                                    type="button"
                                                >
                                                    <GridIcon size={13}/>
                                                </IconButton>
                                                <IconButton
                                                    disabled={index === 0}
                                                    onClick={() => move(panel.id, -1)}
                                                    title={t("Move up")}
                                                    type="button"
                                                >
                                                    <ArrowUpIcon size={12}/>
                                                </IconButton>
                                                <IconButton
                                                    disabled={index === ids.length - 1}
                                                    onClick={() => move(panel.id, 1)}
                                                    title={t("Move down")}
                                                    type="button"
                                                >
                                                    <ArrowUpIcon size={12}/>
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => remove(panel.id)}
                                                    title={t("Remove panel")}
                                                    type="button"
                                                >
                                                    <CrossIcon size={12}/>
                                                </IconButton>
                                            </>
                                        )}
                                    </HeadEnd>
                                </Head>

                                {panel.kind === "home" || panel.kind === "folder"
                                    ? body(panel)
                                    : <Scroller>{body(panel)}</Scroller>}
                            </Section>
                        );
                    })}
            </Panels>
            </Content>

            {framing && bannerSource && (
                <BannerFraming
                    height={bannerHeight}
                    offset={bannerOffset}
                    onCancel={() => setFraming(false)}
                    onSave={(value) => {
                        void save({overviewBannerOffset: value});
                        setFraming(false);
                    }}
                    source={bannerSource}
                    video={bannerVideo}
                />
            )}

            {menu && (
                <FileMenu
                    directory={homePath}
                    menu={{x: menu.x, y: menu.y, paths: [menu.target.path]}}
                    onClose={() => setMenu(null)}
                    onCopy={(paths, cut) => void copyPaths(paths, cut)}
                    onAddToTray={onAddToTray}
                    onOpen={openMenuTarget}
                    onOpenFile={(path) => onPick ? onPick(path) : void openFile(path)}
                    shortcuts={DefaultShortcuts}
                    target={menu.target}
                />
            )}
        </Page>
    );
}

/** A name turns into a text box with cancel and apply, the way the path bar does. */
function InlineEditor({value, onChange, onCommit, onCancel, maxLength = 120}: {
    value: string;
    onChange: (value: string) => void;
    onCommit: () => void;
    onCancel: () => void;
    maxLength?: number;
}) {
    const t = useTranslation();

    return (
        <InlineEditorBox onClick={(event) => event.stopPropagation()} onPointerDown={(event) => event.stopPropagation()}>
            <input
                autoFocus
                maxLength={maxLength}
                onChange={(event) => onChange(event.target.value)}
                onFocus={(event) => event.currentTarget.select()}
                onKeyDown={(event) => {
                    if (event.key === "Enter") onCommit();
                    if (event.key === "Escape") onCancel();
                }}
                spellCheck={false}
                style={{width: `${Math.max(value.length + 1, 8)}ch`}}
                value={value}
            />
            <EditorButton onClick={onCancel} title={t("Cancel")} type="button">
                <CrossIcon size={11}/>
            </EditorButton>
            <EditorButton $apply onClick={onCommit} title={t("Rename volume")} type="button">
                <CheckIcon size={12}/>
            </EditorButton>
        </InlineEditorBox>
    );
}

/** Windows paths compare case-insensitively and ignore a trailing separator. */
function samePath(left: string, right: string): boolean {
    const normalize = (value: string) => value.replace(/[\\/]+$/, "").toLowerCase();

    return normalize(left) === normalize(right);
}

/** The folders this user opens most often, ranked by how many visits the host counted. */
function FrequentBody({mode, onOpen, onContextMenu, onPick, onSelectionChange, version}: {
    mode: ViewMode;
    onOpen: (path: string, newTab?: boolean) => void;
    onContextMenu?: (event: MouseEvent<HTMLElement>, path: string, isDirectory: boolean) => void;
    onPick?: (path: string) => void;
    onSelectionChange?: (paths: string[]) => void;
    version: number;
}) {
    const t = useTranslation();
    const [entries, setEntries] = useState<FrequentEntry[] | null>(null);
    const [selectedPath, setSelectedPath] = useState<string | null>(null);
    const quick = useQuickAccess();

    const pick = (path: string): boolean => {
        if (!onPick)
            return false;

        setSelectedPath(path);
        onSelectionChange?.([path]);
        return true;
    };

    useEffect(() => {
        listFrequent().then(setEntries, () => setEntries([]));
    }, [version]);

    if (!entries)
        return <Empty>{t("Reading…")}</Empty>;

    if (entries.length === 0)
        return <Empty>{t("Folders you open often show up here.")}</Empty>;

    const subtitle = (entry: FrequentEntry) =>
        plural(t, entry.count, "1 visit · {path}", "{count} visits · {path}", {path: entry.path});

    if (mode === "grid")
        return (
            <Places>
                {entries.map((entry) => {
                    const place = quickPlace(quick, entry.path);

                    return (
                        <Card
                            key={entry.path}
                            $plain={false}
                            $selected={selectedPath === entry.path}
                            onClick={(event) => {
                                if (!pick(entry.path)) onOpen(entry.path, wantsNewTab(event));
                            }}
                            onDoubleClick={() => onPick?.(entry.path)}
                            onContextMenu={(event) => onContextMenu?.(event, entry.path, true)}
                            title={entry.path}
                        >
                            <Glyph>
                                {place && quick.useIcons
                                    ? <PlaceIcon place={place} size={18}/>
                                    : <PathIcon isDirectory name={entry.name} path={entry.path} size={18}/>}
                            </Glyph>
                            <CardText>
                                <strong>{place?.name || entry.name}</strong>
                                <Meta>{subtitle(entry)}</Meta>
                            </CardText>
                        </Card>
                    );
                })}
            </Places>
        );

    return (
        <Rows>
            {entries.map((entry) => {
                const place = quickPlace(quick, entry.path);

                return (
                    <Row
                        key={entry.path}
                        $selected={selectedPath === entry.path}
                        onClick={(event) => {
                            if (!pick(entry.path)) onOpen(entry.path, wantsNewTab(event));
                        }}
                        onDoubleClick={() => onPick?.(entry.path)}
                        onContextMenu={(event) => onContextMenu?.(event, entry.path, true)}
                        title={entry.path}
                        type="button"
                    >
                        {place && quick.useIcons
                            ? <PlaceIcon place={place} size={15}/>
                            : <PathIcon isDirectory name={entry.name} path={entry.path} size={15}/>}
                        <RowText>
                            <strong>{place?.name || entry.name}</strong>
                            <Meta>{subtitle(entry)}</Meta>
                        </RowText>
                    </Row>
                );
            })}
        </Rows>
    );
}

/** One folder rendered as a panel: a table or a grid of its entries. */
function FolderBody({path, mode, onOpen, onContextMenu, onPick, onSelectionChange, selectionMenuId, showCheckboxes, openOnSingleClick, visibilityVersion}: {
    path: string;
    mode: ViewMode;
    onOpen: (path: string, newTab?: boolean) => void;
    onContextMenu?: (event: MouseEvent<HTMLElement>, path: string, isDirectory: boolean) => void;
    onPick?: (path: string) => void;
    onSelectionChange?: (paths: string[]) => void;
    selectionMenuId?: string;
    showCheckboxes: boolean;
    openOnSingleClick: boolean;
    visibilityVersion: number;
}) {
    const t = useTranslation();
    const [listing, setListing] = useState<DirectoryListing | null>(null);
    const [selectedPath, setSelectedPath] = useState<string | null>(null);
    const quick = useQuickAccess();

    useEffect(() => {
        if (!path) return;

        // Sizes are measured once, when the overview is entered; refreshing never re-measures.
        setListing(null);
        listDirectory(path).then(setListing, () => setListing(null));
    }, [path, visibilityVersion]);

    // The folder is one of the ones the overview watches, so it keeps itself current.
    useEffect(() => {
        if (!Native.available) return;

        return Native.on((evt) => {
            const event = evt as { type?: string; data?: { path?: string } };
            if (event.type !== "fs.changed" || typeof event.data?.path !== "string") return;
            if (event.data.path.replace(/[\\\\/]+$/, "").toLowerCase() !== path.replace(/[\\\\/]+$/, "").toLowerCase()) return;

            void listDirectory(path, false).then(setListing, () => undefined);
        });
    }, [path]);

    if (!listing)
        return <Empty>{t("Reading…")}</Empty>;

    if (mode === "list")
        return (
            <Preview>
                <FileList
                    error={null}
                    listing={listing}
                    loading={false}
                    onOpen={onPick ?? onOpen}
                    onOpenFile={onPick ?? ((file) => void openFile(file))}
                    onSelectionChange={onSelectionChange}
                    selectionMenuId={selectionMenuId}
                    onSort={() => undefined}
                    openOnSingleClick={openOnSingleClick}
                    enableShortcuts={false}
                    showCheckboxes={showCheckboxes}
                    showDetails={false}
                    showImages={false}
                    view={{...DefaultView, columns: DefaultViewDefaults.columns ?? []}}
                />
            </Preview>
        );

    return (
        <Scroller>
            {listing.entries.length === 0
                ? <Empty>{t("This folder is empty.")}</Empty>
                : (
                    <Tiles>
                        {listing.entries.map((entry) => {
                            const place = quickPlace(quick, entry.fullPath);

                            return (
                                <Tile
                                    key={entry.fullPath}
                                    $selected={selectedPath === entry.fullPath}
                                    onClick={(event) => {
                                        if (onPick) {
                                            setSelectedPath(entry.fullPath);
                                            onSelectionChange?.([entry.fullPath]);
                                            return;
                                        }

                                        if (entry.isDirectory) onOpen(entry.fullPath, wantsNewTab(event));
                                        else void openFile(entry.fullPath);
                                    }}
                                    onDoubleClick={() => onPick?.(entry.fullPath)}
                                    onContextMenu={(event) => onContextMenu?.(event, entry.fullPath, entry.isDirectory)}
                                    title={entry.name}
                                    type="button"
                                >
                                    {place && quick.useIcons
                                        ? <PlaceIcon place={place} size={16}/>
                                        : <PathIcon isDirectory={entry.isDirectory} name={entry.name} path={entry.fullPath} size={16}/>}
                                    <span>{place?.name || entry.name}</span>
                                </Tile>
                            );
                        })}
                    </Tiles>
                )}
        </Scroller>
    );
}



