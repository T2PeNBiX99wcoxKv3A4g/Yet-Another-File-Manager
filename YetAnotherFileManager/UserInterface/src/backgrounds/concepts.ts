import bloomPoster from "./videos/bloom.jpg";
import bloomVideo from "./videos/bloom.mp4";
import driftPoster from "./videos/drift.jpg";
import driftVideo from "./videos/drift.mp4";
import emberPoster from "./videos/ember.jpg";
import emberVideo from "./videos/ember.mp4";
import {type ThemePreset, ThemePresets} from "../themePresets";

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

type BannerConceptId = "ridgeline" | "skyline" | "orbit";

const BannerConcepts: { id: BannerConceptId; name: string }[] = [
    {id: "ridgeline", name: "Ridgeline"},
    {id: "skyline", name: "Skyline"},
    {id: "orbit", name: "Orbit"},
];

/**
 * Banner-only concepts. They are deliberately more graphic than the wallpapers: a strong outline
 * or a hard band makes the scroll-linked movement visible even when the picture is mostly dark.
 */
export const BuiltinBanners: BackgroundVariant[] = BannerConcepts.flatMap((concept) =>
    ThemePresets.map((preset) => ({
        id: `builtin:${concept.id}:${preset.name.toLowerCase()}`,
        concept: concept.name,
        preset: preset.name,
        url: svgUrl(drawBanner(concept.id, preset)),
    })));

const variantsById = new Map(
    [
        ...BuiltInBackgrounds.flatMap((concept) => concept.variants),
        ...BuiltinBanners,
    ].map((variant) => [variant.id, variant] as const),
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

function drawBanner(concept: BannerConceptId, preset: ThemePreset): string {
    return concept === "skyline" ? skyline(preset) : concept === "orbit" ? orbit(preset) : ridgeline(preset);
}

/* ---------------------------------------------------------------------------------------------- */
/* Banner concepts. They share the preset colours but use strong silhouettes so a small vertical   */
/* scroll is easy to see against the dark surface.                                                 */

/* ---------------------------------------------------------------------------------------------- */

function ridgeline({accent, secondary}: ThemePreset): string {
    const skyTop = mix(secondary, "#05070f", 0.86);
    const skyBottom = mix(accent, "#0b1020", 0.72);
    const far = mix(secondary, "#0a0f1d", 0.66);
    const near = mix(accent, "#060a14", 0.74);

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${skyTop}"/>
            <stop offset="0.62" stop-color="${skyBottom}"/>
            <stop offset="1" stop-color="#05070d"/>
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stop-color="${secondary}" stop-opacity="0.95"/>
            <stop offset="0.4" stop-color="${accent}" stop-opacity="0.45"/>
            <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
        </radialGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1450" cy="330" r="360" fill="url(#sun)"/>
    <circle cx="1450" cy="330" r="120" fill="${mix(secondary, "#ffffff", 0.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${far}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${near}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${mix(accent, "#03050a", 0.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${accent}" stroke-width="2.5" opacity="0.5"/>
    </svg>`;
}

function skyline({accent, secondary}: ThemePreset): string {
    const skyTop = mix(secondary, "#07040d", 0.84);
    const skyBottom = mix(accent, "#100716", 0.7);
    const building = mix(accent, "#08050e", 0.82);
    const buildingLight = mix(secondary, "#0b0613", 0.78);

    const towers = [
        [60, 560, 110], [190, 470, 90], [300, 620, 130], [450, 390, 100], [570, 510, 120],
        [710, 330, 110], [840, 580, 150], [1010, 450, 90], [1120, 360, 120], [1260, 540, 110],
        [1390, 420, 100], [1510, 590, 150], [1680, 460, 120], [1820, 520, 100],
    ];

    const blocks = towers.map(([x, y, w], index) =>
        `<rect x="${x}" y="${y}" width="${w}" height="${1080 - y}" fill="${index % 2 ? building : buildingLight}" opacity="0.92"/>`
        + Array.from({length: 5}, (_, row) =>
            `<rect x="${x + 14}" y="${y + 24 + row * 34}" width="${Math.max(8, w - 28)}" height="9" fill="${accent}" opacity="${0.16 + (index % 3) * 0.05}"/>`).join(""))
        .join("");

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${skyTop}"/>
            <stop offset="0.7" stop-color="${skyBottom}"/>
            <stop offset="1" stop-color="#05030a"/>
        </linearGradient>
        <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="${accent}" stop-opacity="0"/>
            <stop offset="0.5" stop-color="${secondary}" stop-opacity="0.26"/>
            <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
        </linearGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="420" cy="260" r="180" fill="${secondary}" opacity="0.16"/>
    <path d="M0 600 L1920 520 V700 L0 780 Z" fill="url(#beam)"/>
    ${blocks}
    <rect x="0" y="720" width="1920" height="360" fill="${mix(accent, "#040208", 0.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${accent}" stroke-width="2" opacity="0.35"/>
    </svg>`;
}

function orbit({accent, secondary}: ThemePreset): string {
    const base = mix(accent, "#03050d", 0.9);
    const deep = mix(secondary, "#05030c", 0.94);
    const ring = mix(secondary, accent, 0.35);

    const stars = Array.from({length: 90}, (_, index) => {
        const x = (index * 197 + 83) % 1920;
        const y = (index * 311 + 149) % 1080;
        const r = index % 9 === 0 ? 2.4 : 1.2;
        return `<circle cx="${x}" cy="${y}" r="${r}" fill="#ffffff" opacity="${0.18 + (index % 5) * 0.08}"/>`;
    }).join("");

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${mix(accent, secondary, 0.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${base}"/>
            <stop offset="1" stop-color="${deep}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${mix(secondary, "#ffffff", 0.32)}"/>
            <stop offset="0.6" stop-color="${secondary}"/>
            <stop offset="1" stop-color="${mix(accent, "#08050f", 0.7)}"/>
        </radialGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#space)"/>
    ${stars}
    <g transform="rotate(-18 960 540)">
        <ellipse cx="960" cy="540" rx="610" ry="210" fill="none" stroke="${ring}" stroke-width="3" opacity="0.55"/>
        <ellipse cx="960" cy="540" rx="480" ry="150" fill="none" stroke="${accent}" stroke-width="1.6" opacity="0.4"/>
        <ellipse cx="960" cy="540" rx="760" ry="280" fill="none" stroke="${secondary}" stroke-width="1.2" opacity="0.25"/>
    </g>
    <circle cx="960" cy="540" r="170" fill="url(#planet)"/>
    <circle cx="960" cy="540" r="220" fill="none" stroke="${accent}" stroke-width="2" opacity="0.5"/>
    <circle cx="1450" cy="300" r="18" fill="${mix(secondary, "#ffffff", 0.4)}" opacity="0.9"/>
    </svg>`;
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
