import {type RefObject, useEffect} from "react";
import {type FindQuery, rangesOf} from "../find";

/** The subset of the find state the page search needs. */
export interface PageFind extends FindQuery {
    open: boolean;
    mode: "dim" | "hide";
    /** The match the user is on, zero-based. */
    index: number;
}

/**
 * Shared text search for pages that are not a file listing. It walks the text inside every block
 * (a settings section, an overview panel, a recycle-bin row), highlights every occurrence through
 * the CSS Custom Highlight API, dims or hides blocks without a match, and scrolls the current one
 * into view. The counts are reported back so the window's find bar can show `current/total`.
 */
export function useTextSearch(container: RefObject<HTMLElement | null>, find: PageFind | null,
                              blockSelector: string, onMatches: (count: number) => void, deps: unknown[] = []) {
    useEffect(() => {
            const root = container.current;
            if (!root) return;

            const blocks = [...root.querySelectorAll<HTMLElement>(blockSelector)];
            const clearBlocks = () => {
                for (const block of blocks) {
                    block.style.display = "";
                    block.style.opacity = "";
                }
            };

            clearBlocks();
            CSS.highlights?.delete("yafm-search");

            const query = find?.open ? find.query : "";
            if (!find || !query) {
                onMatches(0);
                return clearBlocks;
            }

            const flags: FindQuery = {query, matchCase: find.matchCase, regex: find.regex};
            const matched = new Set<HTMLElement>();
            const ranges: Range[] = [];

            for (const block of blocks) {
                const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
                let node: Node | null;

                while ((node = walker.nextNode())) {
                    const text = node.nodeValue ?? "";
                    const found = rangesOf(text, flags);
                    if (!found) continue;

                    for (const [start, end] of found) {
                        const range = document.createRange();
                        range.setStart(node, start);
                        range.setEnd(node, end);
                        ranges.push(range);
                    }

                    matched.add(block);
                }
            }

            if (ranges.length > 0 && typeof CSS !== "undefined" && "highlights" in CSS && typeof Highlight !== "undefined")
                CSS.highlights.set("yafm-search", new Highlight(...ranges));

            if (find.mode === "hide") {
                for (const block of blocks)
                    block.style.display = matched.has(block) ? "" : "none";
            } else {
                for (const block of blocks)
                    block.style.opacity = matched.has(block) ? "" : "0.35";
            }

            const ordered = [...matched];
            if (ordered.length > 0) {
                const index = Math.min(find.index, ordered.length - 1);
                ordered[index]?.scrollIntoView({block: "nearest"});
            }

            onMatches(ordered.length);

            return () => {
                clearBlocks();
                CSS.highlights?.delete("yafm-search");
            };
        },
        // The hook re-scans when the query, its flags, the mode or the current match changes, plus
        // whatever data the page itself needs in `deps`.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [find?.open, find?.query, find?.matchCase, find?.regex, find?.mode, find?.index, blockSelector, ...deps]);
}
