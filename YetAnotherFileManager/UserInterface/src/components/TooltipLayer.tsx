import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {fadeInStyle} from "../ui/motion";

interface TooltipState {
    text: string;
    shortcut: string;
    center: number;
    top: number;
    bottom: number;
}

/**
 * One hover panel for every `title` or `data-tooltip` element. Titles are moved to `data-tooltip`
 * as soon as they appear, so the browser's own black box can never race the custom panel.
 */
export function TooltipLayer() {
    const [tooltip, setTooltip] = useState<TooltipState | null>(null);
    const hovered = useRef<HTMLElement | null>(null);
    const timer = useRef<number | undefined>(undefined);

    useEffect(() => {
        const clearTimer = () => {
            window.clearTimeout(timer.current);
            timer.current = undefined;
        };

        const hide = () => {
            clearTimer();
            hovered.current = null;
            setTooltip(null);
        };

        const convert = (element: Element) => {
            const title = element.getAttribute("title");
            if (title === null)
                return;

            // A render can change the title; the panel has to follow, or the split button keeps
            // claiming "split_view" while the window is already split.
            element.setAttribute("data-tooltip", title);
            element.removeAttribute("title");
        };

        const convertTree = (root: Element) => {
            convert(root);
            root.querySelectorAll("[title]").forEach(convert);
        };

        const observer = new MutationObserver((records) => {
            for (const record of records) {
                if (record.type === "attributes") {
                    if (record.target instanceof Element)
                        convert(record.target);
                    continue;
                }

                record.addedNodes.forEach((node) => {
                    if (node instanceof Element)
                        convertTree(node);
                });
            }
        });

        observer.observe(document.body, {
            subtree: true,
            attributes: true,
            attributeFilter: ["title"],
            childList: true,
        });

        document.querySelectorAll("[title]").forEach(convert);

        const targetOf = (target: EventTarget | null): HTMLElement | null =>
            target instanceof Element
                ? target.closest<HTMLElement>("[data-tooltip]")
                : null;

        const show = (element: HTMLElement, immediate: boolean) => {
            const text = element.getAttribute("data-tooltip") ?? "";
            if (text.length === 0)
                return;

            const shortcut = element.dataset.shortcut ?? "";
            hovered.current = element;

            const place = () => {
                if (hovered.current !== element)
                    return;

                const rect = element.getBoundingClientRect();

                setTooltip({
                    text,
                    shortcut,
                    center: rect.left + rect.width / 2,
                    top: rect.top,
                    bottom: rect.bottom,
                });
            };

            clearTimer();

            if (immediate)
                place();
            else
                timer.current = window.setTimeout(place, 350);
        };

        const onPointerOver = (event: PointerEvent) => {
            const element = targetOf(event.target);

            if (element === hovered.current)
                return;

            hide();

            if (element)
                show(element, false);
        };

        const onPointerOut = (event: PointerEvent) => {
            const element = hovered.current;

            if (!element)
                return;

            if (event.relatedTarget instanceof Node && element.contains(event.relatedTarget))
                return;

            hide();
        };

        const onFocusIn = (event: FocusEvent) => {
            const element = targetOf(event.target);

            if (element && element !== hovered.current) {
                hide();
                show(element, true);
            }
        };

        const onFocusOut = () => hide();

        window.addEventListener("pointerover", onPointerOver);
        window.addEventListener("pointerout", onPointerOut);
        window.addEventListener("focusin", onFocusIn);
        window.addEventListener("focusout", onFocusOut);
        window.addEventListener("pointerdown", hide, true);
        window.addEventListener("blur", hide);
        window.addEventListener("scroll", hide, true);
        window.addEventListener("resize", hide);

        return () => {
            observer.disconnect();
            hide();
            window.removeEventListener("pointerover", onPointerOver);
            window.removeEventListener("pointerout", onPointerOut);
            window.removeEventListener("focusin", onFocusIn);
            window.removeEventListener("focusout", onFocusOut);
            window.removeEventListener("pointerdown", hide, true);
            window.removeEventListener("blur", hide);
            window.removeEventListener("scroll", hide, true);
            window.removeEventListener("resize", hide);
        };
    }, []);

    if (!tooltip)
        return null;

    return createPortal(<TooltipPanel tooltip={tooltip}/>, document.body);
}

function TooltipPanel({tooltip}: { tooltip: TooltipState }) {
    const panel = useRef<HTMLDivElement | null>(null);
    const [left, setLeft] = useState(() => Math.max(8, tooltip.center - 120));
    const [top, setTop] = useState(() => tooltip.bottom + 6);

    useLayoutEffect(() => {
        const element = panel.current;
        if (!element)
            return;

        const rect = element.getBoundingClientRect();
        const maxLeft = Math.max(8, window.innerWidth - rect.width - 8);
        const below = tooltip.bottom + 6;

        setLeft(Math.max(8, Math.min(tooltip.center - rect.width / 2, maxLeft)));
        setTop(below + rect.height <= window.innerHeight - 8
            ? below
            : Math.max(8, tooltip.top - rect.height - 6));
    }, [tooltip]);

    return (
        <Panel
            ref={panel}
            role="tooltip"
            style={{left, top}}
        >
            <Text>{tooltip.text}</Text>
            {tooltip.shortcut && <Shortcut>{tooltip.shortcut}</Shortcut>}
        </Panel>
    );
}

const Panel = styled.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: min(360px, calc(100vw - 16px));
    padding: 6px 9px;
    border: 1px solid var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: rgba(7, 11, 18, 0.96);
    box-shadow: var(--shadow-float);
    pointer-events: none;
    ${fadeInStyle}
`;

const Text = styled.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`;

const Shortcut = styled.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`;
