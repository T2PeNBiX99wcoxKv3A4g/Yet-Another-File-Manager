import bloomPoster from "./videos/bloom.jpg";
import bloomVideo from "./videos/bloom.mp4";
import driftPoster from "./videos/drift.jpg";
import driftVideo from "./videos/drift.mp4";
import emberPoster from "./videos/ember.jpg";
import emberVideo from "./videos/ember.mp4";
import {ThemePresets, type ThemePreset} from "../themePresets";

/**
 * The built-in wallpapers are drawn from the same palettes the theme presets use, so every
 * concept comes in the colours the app already ships with. The SVGs are written as strings
 * rather than 24 separate files: the art is the same, only the colours move.
 */

type ConceptId = "aurora" | "dunes" | "tide";

const Concepts: { id: ConceptId; name: string }[] = [
    {id: "aurora", name: "Aurora"},
    {id: "dunes", name: "Dunes"},
    {id: "tide", name: "Tide"},
];

export interface BackgroundVariant {
    /** Stable id stored in the settings, e.g. "builtin:aurora:violet". */
    id: string;
    concept: string;
    preset: string;
    url: string;
}

export interface VideoVariant {
    id: string;
    name: string;
    url: string;
    poster: string;
}

/** The short, silent loops generated for the app; they are ordinary files in the bundle. */
export const BuiltInVideos: VideoVariant[] = [
    {id: "builtin:video:drift", name: "Drift", url: driftVideo, poster: driftPoster},
    {id: "builtin:video:ember", name: "Ember", url: emberVideo, poster: emberPoster},
    {id: "builtin:video:bloom", name: "Bloom", url: bloomVideo, poster: bloomPoster},
];

/** One row per concept, each with a variant for every theme preset. */
export const BuiltInBackgrounds: { id: ConceptId; name: string; variants: BackgroundVariant[] }[] =
    Concepts.map((concept) => ({
        ...concept,
        variants: ThemePresets.map((preset) => ({
            id: `builtin:${concept.id}:${preset.name.toLowerCase()}`,
            concept: concept.name,
            preset: preset.name,
            url: svgUrl(draw(concept.id, preset)),
        })),
    }));

const variantsById = new Map(
    BuiltInBackgrounds.flatMap((concept) => concept.variants.map((variant) => [variant.id, variant] as const)),
);
const videosById = new Map(BuiltInVideos.map((video) => [video.id, video] as const));

/** Resolves a stored "builtin:" source; older saves omit the preset and get the indigo one. */
export function builtInUrl(source: string): string | null {
    if (variantsById.has(source)) return variantsById.get(source)!.url;
    if (videosById.has(source)) return videosById.get(source)!.url;

    const concept = source.split(":")[1];
    return concept ? variantsById.get(`builtin:${concept}:indigo`)?.url ?? null : null;
}

export function builtInName(source: string): string | null {
    if (variantsById.has(source)) {
        const variant = variantsById.get(source)!;
        return `${variant.concept} · ${variant.preset}`;
    }

    return videosById.get(source)?.name ?? null;
}

/** True for the bundled loops, which must be drawn with a video element rather than an image. */
export function isBuiltInVideo(source: string): boolean {
    return videosById.has(source);
}

function svgUrl(svg: string): string {
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function draw(concept: ConceptId, preset: ThemePreset): string {
    return concept === "dunes" ? dunes(preset) : concept === "tide" ? tide(preset) : aurora(preset);
}

/* ---------------------------------------------------------------------------------------------- */
/* Colour helpers: the templates need darker versions of the preset colours, not just the two.    */
/* ---------------------------------------------------------------------------------------------- */

function rgb(hex: string): [number, number, number] {
    const value = hex.replace("#", "");
    const full = value.length === 3 ? value.split("").map((part) => part + part).join("") : value;

    return [
        Number.parseInt(full.slice(0, 2), 16),
        Number.parseInt(full.slice(2, 4), 16),
        Number.parseInt(full.slice(4, 6), 16),
    ];
}

/** Mixes two hex colours; amount is how much of the second colour the result contains. */
function mix(a: string, b: string, amount: number): string {
    const [ar, ag, ab] = rgb(a);
    const [br, bg, bb] = rgb(b);
    const channel = (from: number, to: number) => Math.round(from + (to - from) * amount);

    return `#${[channel(ar, br), channel(ag, bg), channel(ab, bb)]
        .map((part) => part.toString(16).padStart(2, "0"))
        .join("")}`;
}

/* ---------------------------------------------------------------------------------------------- */
/* The three concepts. Each one takes the preset's two colours and tints its own dark base, so    */
/* the gold dunes stay gold while a violet preset turns them violet.  The blur filters keep a      */
/* wide region (x/y = -120%, 340% wide) or the glow gets a visible square edge where it is cut.   */
/* ---------------------------------------------------------------------------------------------- */

function aurora({accent, secondary}: ThemePreset): string {
    const base = mix(accent, "#05070f", 0.9);
    const middle = mix(secondary, "#070b1c", 0.85);
    const deep = mix(accent, "#04060c", 0.94);

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${base}"/>
            <stop offset="0.55" stop-color="${middle}"/>
            <stop offset="1" stop-color="${deep}"/>
        </linearGradient>
        <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="${accent}" stop-opacity="0"/>
            <stop offset="0.45" stop-color="${secondary}" stop-opacity="0.55"/>
            <stop offset="0.7" stop-color="${accent}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
        </linearGradient>
        <filter id="soft" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="110"/>
        </filter>
        <filter id="soft2" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="70"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#bg)"/>
    <ellipse cx="420" cy="260" rx="540" ry="300" fill="${accent}" opacity="0.7" filter="url(#soft)"/>
    <ellipse cx="1450" cy="220" rx="460" ry="260" fill="${secondary}" opacity="0.66" filter="url(#soft)"/>
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${mix(accent, secondary, 0.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${accent}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${secondary}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`;
}

function dunes({accent, secondary}: ThemePreset): string {
    const skyTop = mix(secondary, "#120a05", 0.84);
    const skyMiddle = mix(secondary, "#1c0f07", 0.7);
    const sand = mix(accent, secondary, 0.25);
    const sandDeep = mix(accent, "#160b04", 0.55);

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${skyTop}"/>
            <stop offset="0.5" stop-color="${skyMiddle}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${sand}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${sandDeep}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${secondary}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${mix(accent, "#1a0d05", 0.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${secondary}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${mix(secondary, "#ffffff", 0.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${mix(accent, "#0b0603", 0.82)}" opacity="0.75"/>
</svg>`;
}

function tide({accent, secondary}: ThemePreset): string {
    const base = mix(accent, "#02070a", 0.9);
    const middle = mix(secondary, "#03100f", 0.82);
    const deep = mix(accent, "#020609", 0.94);

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${base}"/>
            <stop offset="0.5" stop-color="${middle}"/>
            <stop offset="1" stop-color="${deep}"/>
        </linearGradient>
        <filter id="blur" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="120"/>
        </filter>
        <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="${accent}" stop-opacity="0"/>
            <stop offset="0.5" stop-color="${secondary}" stop-opacity="0.55"/>
            <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
        </linearGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#sea)"/>
    <ellipse cx="350" cy="840" rx="620" ry="280" fill="${accent}" opacity="0.45" filter="url(#blur)"/>
    <ellipse cx="1550" cy="240" rx="520" ry="260" fill="${secondary}" opacity="0.38" filter="url(#blur)"/>
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${mix(accent, secondary, 0.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`;
}
