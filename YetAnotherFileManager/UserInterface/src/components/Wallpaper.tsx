import styled from "styled-components";
import {useMediaUrl} from "../api/icons";
import type {AppSettings} from "../api/settings";
import auroraUrl from "../backgrounds/aurora.svg";
import dunesUrl from "../backgrounds/dunes.svg";
import tideUrl from "../backgrounds/tide.svg";

/** The concepts shipped with the app; any of them is a plain, scalable SVG. */
export const BuiltInBackgrounds: { id: string; name: string; url: string }[] = [
    {id: "builtin:aurora", name: "Aurora", url: auroraUrl},
    {id: "builtin:dunes", name: "Dunes", url: dunesUrl},
    {id: "builtin:tide", name: "Tide", url: tideUrl},
];

const builtInUrls = new Map(BuiltInBackgrounds.map((entry) => [entry.id, entry.url]));
const VideoPattern = /\.(mp4|webm|mov|m4v|ogv|mkv|avi)$/i;

/** The wallpaper behind the whole window, including the title bar. */
export function Wallpaper({settings}: { settings: AppSettings | null }) {
    const source = settings?.backgroundSource ?? null;
    const customPath = source?.startsWith("file:") ? source.slice(5) : null;
    const customUrl = useMediaUrl(customPath);
    const url = source?.startsWith("builtin:") ? builtInUrls.get(source) ?? null : customUrl;
    const video = customPath !== null && VideoPattern.test(customPath);

    if (!source || !url)
        return null;

    const blur = settings?.backgroundBlur ?? 0;
    const saturation = settings?.backgroundSaturation ?? 100;
    const brightness = settings?.backgroundBrightness ?? 100;
    const filter = `blur(${blur}px) saturate(${saturation}%) brightness(${brightness}%)`;

    return (
        <Layer aria-hidden>
            {video
                ? <Video autoPlay loop muted playsInline src={url} style={{filter}}/>
                : <Image src={url} style={{filter}}/>}
            <Shade/>
        </Layer>
    );
}

const Layer = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`;

/** A dark veil keeps the interface readable on bright pictures. */
const Shade = styled.div`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
        radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;
