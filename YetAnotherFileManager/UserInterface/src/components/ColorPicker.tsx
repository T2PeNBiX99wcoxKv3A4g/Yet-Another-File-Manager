import {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";
import {
    forgetSavedColor,
    normalizeHex,
    rememberColor,
    saveColor,
    useColorBook,
} from "../colors";
import {CrossIcon, PlusIcon} from "./Icons";
import {elevatedPanel} from "../ui/panel";
import {popInStyle} from "../ui/motion";

interface Hsv {
    h: number;
    s: number;
    v: number;
}

interface Rgb {
    r: number;
    g: number;
    b: number;
}

function hexToRgb(value: string | null | undefined): Rgb | null {
    const hex = normalizeHex(value);
    if (!hex) return null;

    return {
        r: Number.parseInt(hex.slice(1, 3), 16),
        g: Number.parseInt(hex.slice(3, 5), 16),
        b: Number.parseInt(hex.slice(5, 7), 16),
    };
}

function rgbToHex({r, g, b}: Rgb): string {
    const part = (value: number) => Math.round(Math.max(0, Math.min(255, value))).toString(16).padStart(2, "0");
    return `#${part(r)}${part(g)}${part(b)}`;
}

function rgbToHsv({r, g, b}: Rgb): Hsv {
    const red = r / 255;
    const green = g / 255;
    const blue = b / 255;
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const delta = max - min;

    let hue = 0;

    if (delta !== 0) {
        if (max === red) hue = 60 * (((green - blue) / delta) % 6);
        else if (max === green) hue = 60 * ((blue - red) / delta + 2);
        else hue = 60 * ((red - green) / delta + 4);
    }

    if (hue < 0) hue += 360;

    return {h: hue, s: max === 0 ? 0 : delta / max, v: max};
}

function hsvToRgb({h, s, v}: Hsv): Rgb {
    const chroma = v * s;
    const part = h / 60;
    const x = chroma * (1 - Math.abs((part % 2) - 1));
    const match = v - chroma;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (part < 1) [red, green] = [chroma, x];
    else if (part < 2) [red, green] = [x, chroma];
    else if (part < 3) [green, blue] = [chroma, x];
    else if (part < 4) [green, blue] = [x, chroma];
    else if (part < 5) [red, blue] = [x, chroma];
    else [red, blue] = [chroma, x];

    return {r: (red + match) * 255, g: (green + match) * 255, b: (blue + match) * 255};
}

/**
 * The colour picker every control shares: a saturation/value square, a hue bar, a hex box and the
 * window's saved colours and recent history. The palette is one store, so a colour saved in the
 * theme page shows up in the tag rows too.
 */
export function ColorPicker({value, onChange, disabled = false, title, ariaLabel, variant = "dot"}: {
    value: string;
    onChange: (color: string) => void;
    disabled?: boolean;
    title?: string;
    ariaLabel?: string;
    variant?: "dot" | "well";
}) {
    const t = useTranslation();
    const trigger = useRef<HTMLButtonElement | null>(null);
    const panel = useRef<HTMLDivElement | null>(null);
    const area = useRef<HTMLDivElement | null>(null);
    const dragging = useRef(false);
    const changed = useRef(false);
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState<{top: number; left: number} | null>(null);
    const initial = hexToRgb(value) ?? {r: 0, g: 0, b: 0};
    const [hsv, setHsv] = useState<Hsv>(() => rgbToHsv(initial));
    const [draft, setDraft] = useState(value);
    const {saved, history} = useColorBook();
    const hex = rgbToHex(hsvToRgb(hsv));
    const rgb = hsvToRgb(hsv);
    const [rgbDraft, setRgbDraft] = useState(() => ({
        r: String(Math.round(rgb.r)),
        g: String(Math.round(rgb.g)),
        b: String(Math.round(rgb.b)),
    }));
    const latest = useRef(hex);
    latest.current = hex;

    const close = useCallback(() => {
        setOpen(false);

        if (changed.current) {
            rememberColor(latest.current);
            changed.current = false;
        }
    }, []);

    const emit = (next: Hsv) => {
        setHsv(next);
        const color = rgbToHex(hsvToRgb(next));
        setDraft(color);
        changed.current = true;
        onChange(color);
    };

    const setChannel = (key: "r" | "g" | "b", text: string) => {
        setRgbDraft((current) => ({...current, [key]: text}));

        const number = Number(text);
        if (text.trim().length === 0 || !Number.isInteger(number) || number < 0 || number > 255)
            return;

        emit(rgbToHsv({...rgb, [key]: number}));
    };

    const resetChannel = (key: "r" | "g" | "b") =>
        setRgbDraft((current) => ({...current, [key]: String(Math.round(rgb[key]))}));

    // A colour changed from outside (a preset, a reset) is picked up while the panel is closed.
    useEffect(() => {
        if (open) return;

        const picked = hexToRgb(value);
        if (!picked) return;

        setHsv(rgbToHsv(picked));
        setDraft(value);
    }, [value, open]);

    // The numeric boxes follow the chosen colour; while one is being typed the text stays as typed.
    useEffect(() => {
        setRgbDraft({
            r: String(Math.round(rgb.r)),
            g: String(Math.round(rgb.g)),
            b: String(Math.round(rgb.b)),
        });
    }, [hex]);

    useLayoutEffect(() => {
        if (!open || !trigger.current) return;

        const rect = trigger.current.getBoundingClientRect();
        const width = 236;
        const left = Math.max(8, Math.min(rect.left, window.innerWidth - width - 8));
        const bottom = rect.bottom + 6 + 322 > window.innerHeight;
        const top = bottom ? Math.max(8, rect.top - 328) : rect.bottom + 6;

        setPosition({top, left});
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const outside = (event: PointerEvent) => {
            const target = event.target as Node | null;
            if (panel.current?.contains(target) || trigger.current?.contains(target)) return;
            close();
        };
        const escape = (event: KeyboardEvent) => {
            if (event.key !== "Escape") return;

            event.preventDefault();
            event.stopPropagation();
            close();
        };

        window.addEventListener("pointerdown", outside);
        window.addEventListener("keydown", escape, true);
        window.addEventListener("blur", close);
        window.addEventListener("resize", close);
        document.addEventListener("scroll", close, true);

        return () => {
            window.removeEventListener("pointerdown", outside);
            window.removeEventListener("keydown", escape, true);
            window.removeEventListener("blur", close);
            window.removeEventListener("resize", close);
            document.removeEventListener("scroll", close, true);
        };
    }, [open, close]);

    const toggle = () => {
        if (disabled) return;

        if (open) {
            close();
            return;
        }

        const rgb = hexToRgb(value);
        if (rgb) {
            setHsv(rgbToHsv(rgb));
            setDraft(value);
        }

        setOpen(true);
    };

    const pickArea = (event: React.PointerEvent<HTMLDivElement>) => {
        const rect = area.current?.getBoundingClientRect();
        if (!rect) return;

        const s = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
        const v = 1 - Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
        emit({...hsv, s, v});
    };

    const apply = (color: string) => {
        const rgb = hexToRgb(color);
        if (!rgb) return;

        setHsv(rgbToHsv(rgb));
        setDraft(color);
        latest.current = color;
        changed.current = false;
        onChange(color);
        rememberColor(color);
        setOpen(false);
    };

    const shown = normalizeHex(value) ?? hex;

    return (
        <>
            <Trigger $variant={variant} aria-label={ariaLabel ?? title} disabled={disabled}
                     onClick={toggle} ref={trigger} title={title} type="button">
                <Swatch $color={shown}/>
            </Trigger>

            {open && position && createPortal(
                <Panel ref={panel} style={{top: position.top, left: position.left}}>
                    <Area $hue={hsv.h}
                          onPointerDown={(event) => {
                              event.preventDefault();
                              event.currentTarget.setPointerCapture(event.pointerId);
                              dragging.current = true;
                              pickArea(event);
                          }}
                          onPointerMove={(event) => {
                              if (dragging.current) pickArea(event);
                          }}
                          onPointerUp={(event) => {
                              dragging.current = false;

                              if (event.currentTarget.hasPointerCapture(event.pointerId))
                                  event.currentTarget.releasePointerCapture(event.pointerId);
                          }}
                          ref={area}>
                        <Cursor style={{left: `${hsv.s * 100}%`, top: `${(1 - hsv.v) * 100}%`, background: shown}}/>
                    </Area>

                    <Hue aria-label={t("color")} max={359} min={0} onChange={(event) => emit({...hsv, h: Number(event.target.value)})}
                         type="range" value={Math.round(hsv.h)}/>

                    <HexRow>
                        <Hex aria-label={t("hex_color")} maxLength={7} onBlur={() => setDraft(hex)}
                             onChange={(event) => {
                                 const text = event.target.value;
                                 setDraft(text);

                                 const color = normalizeHex(text);
                                 const rgb = color ? hexToRgb(color) : null;
                                 if (!rgb) return;

                                 setHsv(rgbToHsv(rgb));
                                 changed.current = true;
                                 onChange(color!);
                             }}
                             spellCheck={false} value={draft}/>
                        <Save onClick={() => saveColor(hex)} title={t("save_color")} type="button">
                            <PlusIcon size={11}/>
                        </Save>
                    </HexRow>

                    <RgbRow>
                        {(["r", "g", "b"] as const).map((channel) => (
                            <RgbField key={channel}>
                                <RgbLabel>{channel.toUpperCase()}</RgbLabel>
                                <RgbInput aria-label={channel.toUpperCase()} inputMode="numeric" maxLength={3}
                                          onBlur={() => resetChannel(channel)}
                                          onChange={(event) => setChannel(channel, event.target.value)}
                                          value={rgbDraft[channel]}/>
                            </RgbField>
                        ))}
                    </RgbRow>

                    {saved.length > 0 && (
                        <Section>
                            <Label>{t("saved_colors")}</Label>
                            <Swatches>
                                {saved.map((color) => (
                                    <Saved key={color}>
                                        <Chip $color={color} onClick={() => apply(color)} title={color} type="button"/>
                                        <Forget onClick={(event) => {
                                            event.stopPropagation();
                                            forgetSavedColor(color);
                                        }} title={t("remove_saved_color")} type="button">
                                            <CrossIcon size={8}/>
                                        </Forget>
                                    </Saved>
                                ))}
                            </Swatches>
                        </Section>
                    )}

                    {history.length > 0 && (
                        <Section>
                            <Label>{t("color_history")}</Label>
                            <Swatches>
                                {history.map((color) => (
                                    <Chip $color={color} key={color} onClick={() => apply(color)}
                                          title={color} type="button"/>
                                ))}
                            </Swatches>
                        </Section>
                    )}
                </Panel>,
                document.body,
            )}
        </>
    );
}

const Trigger = styled.button<{ $variant: "dot" | "well" }>`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: ${({$variant}) => $variant === "well" ? "26px" : "18px"};
    height: ${({$variant}) => $variant === "well" ? "26px" : "18px"};
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: ${({$variant}) => $variant === "well" ? "6px" : "50%"};
    background: transparent;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;

const Swatch = styled.span<{ $color: string }>`
    width: 70%;
    height: 70%;
    border-radius: inherit;
    background: ${({$color}) => $color};
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.18);
`;

const Panel = styled.div`
    position: fixed;
    z-index: 3600;
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 236px;
    padding: 8px;
    ${elevatedPanel}
    ${popInStyle}
`;

const Area = styled.div<{ $hue: number }>`
    position: relative;
    height: 132px;
    border-radius: var(--radius-sm);
    cursor: crosshair;
    touch-action: none;
    background:
        linear-gradient(to top, #000, transparent),
        linear-gradient(to right, #fff, hsl(${({$hue}) => $hue} 100% 50%));
`;

const Cursor = styled.span`
    position: absolute;
    width: 12px;
    height: 12px;
    margin: -6px 0 0 -6px;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
    pointer-events: none;
`;

const Hue = styled.input`
    width: 100%;
    height: 10px;
    margin: 1px 0;
    appearance: none;
    border-radius: 999px;
    background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
    cursor: pointer;

    &::-webkit-slider-thumb {
        width: 14px;
        height: 14px;
        appearance: none;
        border: 2px solid #fff;
        border-radius: 50%;
        background: transparent;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
    }
`;

const HexRow = styled.div`
    display: flex;
    gap: 5px;
`;

const Hex = styled.input`
    flex: 1;
    min-width: 0;
    padding: 4px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;

    &:focus {
        border-color: var(--border-color-focus);
        outline: none;
    }
`;

const RgbRow = styled.div`
    display: flex;
    gap: 5px;
`;

const RgbField = styled.label`
    display: flex;
    flex: 1;
    align-items: center;
    gap: 4px;
    min-width: 0;
    padding: 3px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);

    &:focus-within {
        border-color: var(--border-color-focus);
    }
`;

const RgbLabel = styled.span`
    color: var(--text-muted);
    font-size: 9px;
`;

const RgbInput = styled.input`
    flex: 1;
    width: 100%;
    min-width: 0;
    padding: 0;
    border: 0;
    background: none;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 10.5px;
    outline: none;
`;

const Save = styled.button`    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Label = styled.span`
    color: var(--text-muted);
    font-size: 9.5px;
`;

const Swatches = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
`;

const Saved = styled.div`
    position: relative;
`;

const Chip = styled.button<{ $color: string }>`
    width: 18px;
    height: 18px;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    background: ${({$color}) => $color};
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.18);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-focus);
    }
`;

const Forget = styled.button`
    position: absolute;
    top: -4px;
    right: -4px;
    display: none;
    place-items: center;
    width: 12px;
    height: 12px;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    background: var(--bg-secondary);
    color: var(--text-muted);
    cursor: pointer;

    ${Saved}:hover & {
        display: grid;
    }

    &:hover {
        color: var(--text-primary);
    }
`;
