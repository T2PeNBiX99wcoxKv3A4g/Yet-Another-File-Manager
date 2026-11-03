import {useEffect, useRef, useState, type PointerEvent as ReactPointerEvent} from "react";
import styled from "styled-components";
import {useIcon, useMediaUrl, useThumbnail} from "../api/icons";
import {FileIcon, FolderIcon, PauseIcon, PlayIcon} from "./Icons";

export interface PreviewInfo {
    name: string;
    /** The file used for the preview; for recycled entries this is the stored `$R` content. */
    path: string;
    isDirectory: boolean;
    size: number;
    modified: number;
    created?: number;
    fields: { label: string; value: string }[];
}

interface PreviewPaneProps {
    info: PreviewInfo | null;
    width: number;
    onWidth: (width: number) => void;
    /** Play video previews with sound; off means muted. */
    videoAudio: boolean;
    /** Start a video preview automatically; off means the user presses play. */
    videoAutoplay: boolean;
    /** A note such as "3 items selected". */
    selectionNote?: string;
}

const VideoExtensions = new Set(["mp4", "webm", "mkv", "mov", "m4v", "avi", "wmv", "ogv"]);
const AudioExtensions = new Set(["mp3", "m4a", "wav", "flac", "ogg", "oga", "aac"]);
const ImageExtensions = new Set([
    "png", "jpg", "jpeg", "gif", "webp", "bmp", "avif", "tif", "tiff", "ico", "svg",
]);

/**
 * The right-side details pane shared by the file browser and the recycle bin. The media area shows
 * an image, a playable video/audio file, or the entry's icon; the splitter on its left resizes it.
 */
export function PreviewPane({info, width, onWidth, videoAudio, videoAutoplay, selectionNote}: PreviewPaneProps) {
    const [videoFailed, setVideoFailed] = useState(false);
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const drag = useRef<{ x: number; width: number } | null>(null);
    const path = info?.path ?? null;
    const extension = info ? extensionOf(info.name) : "";
    const video = !!info && !info.isDirectory && VideoExtensions.has(extension);
    const audio = !!info && !info.isDirectory && AudioExtensions.has(extension);
    const image = !!info && !info.isDirectory && ImageExtensions.has(extension);

    const poster = useThumbnail(video ? path : null, 512, info?.modified ?? 0);
    const imagePreview = useMediaUrl(image ? path : null, info?.modified ?? 0, extension);
    const media = useMediaUrl(video || audio ? path : null, info?.modified ?? 0, extension);
    const icon = useIcon(!video && !audio && !image ? path : null, info?.isDirectory ?? false);

    useEffect(() => {
        setVideoFailed(false);
        setPlaying(false);
    }, [path]);

    if (!info)
        return null;

    const start = (event: ReactPointerEvent) => {
        drag.current = {x: event.clientX, width};
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const move = (event: ReactPointerEvent) => {
        const current = drag.current;
        if (!current)
            return;

        onWidth(Math.max(220, Math.min(560, current.width + current.x - event.clientX)));
    };

    const end = (event: ReactPointerEvent) => {
        drag.current = null;
        event.currentTarget.releasePointerCapture(event.pointerId);
    };

    const toggleVideo = () => {
        const element = videoRef.current;
        if (!element)
            return;

        if (element.paused)
            void element.play().catch(() => undefined);
        else
            element.pause();
    };

    return (
        <Root>
            <Splitter
                onPointerDown={start}
                onPointerMove={move}
                onPointerUp={end}
                onDoubleClick={() => onWidth(320)}
                title="Drag to resize; double-click to reset"
            />

            <Panel style={{width}}>
                <Media>
                    {video && media && !videoFailed
                        ? (
                            <>
                                <video
                                    autoPlay={videoAutoplay}
                                    controls
                                    muted={!videoAudio}
                                    onError={() => setVideoFailed(true)}
                                    onPause={() => setPlaying(false)}
                                    onPlay={() => setPlaying(true)}
                                    playsInline
                                    poster={poster ?? undefined}
                                    preload="metadata"
                                    ref={videoRef}
                                    src={media}
                                />
                                <VideoToggle
                                    $playing={playing}
                                    onClick={toggleVideo}
                                    title={playing ? "Pause" : "Play"}
                                    type="button"
                                >
                                    {playing ? <PauseIcon size={13}/> : <PlayIcon size={13}/>}
                                    {playing ? "Pause" : "Play"}
                                </VideoToggle>
                            </>
                        )
                        : audio && media
                            ? <audio controls src={media}/>
                            : image && imagePreview
                                ? <img alt="" decoding="async" loading="lazy" src={imagePreview}/>
                                : video && poster
                                    ? <img alt="" src={poster}/>
                                    : icon
                                        ? <img alt="" src={icon}/>
                                        : info.isDirectory
                                            ? <FolderIcon size={64}/>
                                            : <FileIcon size={64}/>}
                </Media>

                <Body>
                    <Name title={info.path}>{info.name}</Name>
                    {selectionNote && <Selection>{selectionNote}</Selection>}

                    <Fields>
                        {info.fields.map((field) => (
                            <Field key={field.label}>
                                <FieldLabel>{field.label}</FieldLabel>
                                <FieldValue title={field.value}>{field.value}</FieldValue>
                            </Field>
                        ))}
                    </Fields>
                </Body>
            </Panel>
        </Root>
    );
}

/** "PNG" style extension, lower case, without the dot. */
function extensionOf(name: string): string {
    const dot = name.lastIndexOf(".");
    return dot > 0 && dot < name.length - 1 ? name.slice(dot + 1).toLowerCase() : "";
}

const Root = styled.div`
    display: flex;
    flex-shrink: 0;
    align-self: stretch;
    min-height: 0;
`;

const Splitter = styled.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(59, 130, 246, 0.25);
    }
`;

const Panel = styled.aside`
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    background: var(--bg-secondary);
`;

const Media = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    height: 210px;
    flex-shrink: 0;
    overflow: hidden;
    background: #05080f;

    img,
    video {
        display: block;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    audio {
        width: calc(100% - 20px);
    }

    svg {
        color: var(--text-muted);
    }
`;

const VideoToggle = styled.button<{ $playing: boolean }>`
    position: absolute;
    top: 8px;
    left: 8px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 9px;
    border: 1px solid ${({$playing}) => $playing ? "var(--border-color-focus)" : "rgba(148, 163, 184, 0.35)"};
    border-radius: 999px;
    background: rgba(2, 6, 23, 0.72);
    color: #e2e8f0;
    font: inherit;
    font-size: 10px;
    cursor: pointer;
    backdrop-filter: blur(4px);

    &:hover {
        border-color: var(--border-color-focus);
        background: rgba(15, 23, 42, 0.9);
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`;

const Name = styled.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`;

const Selection = styled.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`;

const Fields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`;

const Field = styled.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`;

const FieldLabel = styled.span`
    color: var(--text-muted);
`;

const FieldValue = styled.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`;
