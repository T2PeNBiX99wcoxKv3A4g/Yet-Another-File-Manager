import {useEffect, useRef, useState, type PointerEvent as ReactPointerEvent} from "react";
import styled from "styled-components";
import {previewText, type TextPreview} from "../api/files";
import {useIcon, useMediaUrl, usePdfPreview, useThumbnail} from "../api/icons";
import {FileIcon, FolderIcon, PlayIcon} from "./Icons";

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
const TextExtensions = new Set([
    "txt", "text", "log", "md", "markdown", "json", "jsonc", "xml", "yaml", "yml", "toml", "ini",
    "cfg", "conf", "csv", "tsv", "html", "htm", "css", "scss", "less", "js", "jsx", "mjs", "cjs",
    "ts", "tsx", "cs", "fs", "vb", "java", "kt", "kts", "py", "rb", "php", "rs", "go", "c", "h", "cpp",
    "cc", "cxx", "hpp", "hxx", "sh", "bash", "zsh", "fish", "ps1", "psm1", "bat", "cmd", "sql", "lua",
    "r", "pl", "swift", "dart", "gradle", "properties", "env", "gitignore", "editorconfig",
]);

/**
 * The right-side details pane shared by the file browser and the recycle bin. The media area shows
 * an image, a playable video/audio file, or the entry's icon; the splitter on its left resizes it.
 */
export function PreviewPane({info, width, onWidth, videoAudio, videoAutoplay, selectionNote}: PreviewPaneProps) {
    const [videoFailed, setVideoFailed] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [videoHover, setVideoHover] = useState(false);
    const [duration, setDuration] = useState(0);
    const [position, setPosition] = useState(0);
    const [textPreview, setTextPreview] = useState<TextPreview | null>(null);
    const [textLoading, setTextLoading] = useState(false);
    const [pdfFailed, setPdfFailed] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const drag = useRef<{ x: number; width: number } | null>(null);
    const path = info?.path ?? null;
    const extension = info ? extensionOf(info.name) : "";
    const video = !!info && !info.isDirectory && VideoExtensions.has(extension);
    const audio = !!info && !info.isDirectory && AudioExtensions.has(extension);
    const image = !!info && !info.isDirectory && ImageExtensions.has(extension);
    const text = !!info && !info.isDirectory && TextExtensions.has(extension);
    const pdf = !!info && !info.isDirectory && extension === "pdf";

    const poster = useThumbnail(video ? path : null, 512, info?.modified ?? 0);
    const imagePreview = useMediaUrl(image ? path : null, info?.modified ?? 0, extension);
    const media = useMediaUrl(video || audio ? path : null, info?.modified ?? 0, extension);
    const pdfPreview = usePdfPreview(pdf ? path : null, info?.modified ?? 0);
    const icon = useIcon(!video && !audio && !image && !text && !pdf ? path : null, info?.isDirectory ?? false);

    useEffect(() => {
        setVideoFailed(false);
        setPlaying(false);
        setVideoHover(false);
        setDuration(0);
        setPosition(0);
        setPdfFailed(false);
    }, [path]);

    useEffect(() => {
        if (!path || !text) {
            setTextPreview(null);
            setTextLoading(false);
            return;
        }

        let alive = true;
        setTextLoading(true);
        setTextPreview(null);

        void previewText(path).then((preview) => {
            if (alive) {
                setTextPreview(preview);
                setTextLoading(false);
            }
        }, () => {
            if (alive) {
                setTextPreview({text: null, truncated: false, error: "Could not read this file."});
                setTextLoading(false);
            }
        });

        return () => {
            alive = false;
        };
    }, [path, text]);

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
                            <VideoStage
                                onPointerEnter={() => setVideoHover(true)}
                                onPointerLeave={() => setVideoHover(false)}
                            >
                                <video
                                    autoPlay={videoAutoplay}
                                    controls={false}
                                    muted={!videoAudio}
                                    onClick={toggleVideo}
                                    onDurationChange={(event) => setDuration(event.currentTarget.duration || 0)}
                                    onError={() => setVideoFailed(true)}
                                    onLoadedMetadata={(event) => {
                                        setDuration(event.currentTarget.duration || 0);
                                        setPosition(event.currentTarget.currentTime);
                                    }}
                                    onPause={() => setPlaying(false)}
                                    onPlay={() => setPlaying(true)}
                                    onTimeUpdate={(event) => setPosition(event.currentTarget.currentTime)}
                                    playsInline
                                    poster={poster ?? undefined}
                                    preload="metadata"
                                    ref={videoRef}
                                    src={media}
                                />

                                {!playing && (
                                    <CenterPlay onClick={toggleVideo} title="Play" type="button">
                                        <PlayIcon size={28}/>
                                    </CenterPlay>
                                )}

                                {videoHover && (
                                    <VideoControls onClick={(event) => event.stopPropagation()}>
                                        <Times>
                                            <span>{formatTime(position)}</span>
                                            <span>{formatTime(duration)}</span>
                                        </Times>
                                        <Range
                                            aria-label="Seek"
                                            max={duration || 0}
                                            min={0}
                                            onChange={(event) => {
                                                const element = videoRef.current;
                                                if (!element)
                                                    return;

                                                const next = Number(event.target.value);
                                                element.currentTime = next;
                                                setPosition(next);
                                            }}
                                            step={0.1}
                                            type="range"
                                            value={Math.min(position, duration || 0)}
                                        />
                                    </VideoControls>
                                )}
                            </VideoStage>
                        )
                        : audio && media
                            ? <audio controls src={media}/>
                            : image && imagePreview
                                ? <img alt="" decoding="async" loading="lazy" src={imagePreview}/>
                                : pdf && pdfPreview && !pdfFailed
                                    ? (
                                        <img
                                            alt=""
                                            decoding="async"
                                            loading="lazy"
                                            onError={() => setPdfFailed(true)}
                                            src={pdfPreview}
                                        />
                                    )
                                    : pdf
                                        ? <FileIcon size={64}/>
                                        : text
                                            ? (
                                        <TextBox>
                                            {textLoading || !textPreview
                                                ? <TextNote>Loading…</TextNote>
                                                : textPreview.error
                                                    ? <TextNote>{textPreview.error}</TextNote>
                                                    : (
                                                        <>
                                                            <Pre>{textPreview.text}</Pre>
                                                            {textPreview.truncated && (
                                                                <TextNote>Showing the first 256 KB.</TextNote>
                                                            )}
                                                        </>
                                                    )}
                                        </TextBox>
                                    )
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

/** Seconds as m:ss, or h:mm:ss once the video is longer than an hour. */
function formatTime(seconds: number): string {
    if (!Number.isFinite(seconds) || seconds < 0)
        return "0:00";

    const total = Math.floor(seconds);
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const rest = total % 60;

    return hours > 0
        ? `${hours}:${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`
        : `${minutes}:${String(rest).padStart(2, "0")}`;
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
        background: rgba(var(--accent-rgb), 0.25);
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

const VideoStage = styled.div`
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    overflow: hidden;

    video {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
`;

const CenterPlay = styled.button`
    position: absolute;
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 50%;
    background: rgba(2, 6, 23, 0.62);
    color: #fff;
    cursor: pointer;
    backdrop-filter: blur(4px);

    svg {
        margin-left: 3px;
        fill: currentColor;
        stroke: currentColor;
    }

    &:hover {
        border-color: var(--border-color-focus);
        background: rgba(15, 23, 42, 0.86);
    }
`;

const VideoControls = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 10px 8px;
    background: linear-gradient(to top, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0));
`;

const Times = styled.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`;

const Range = styled.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`;

const TextBox = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: var(--bg-secondary);
`;

const Pre = styled.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`;

const TextNote = styled.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
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
