/** How a search treats the entries it does not match. */
export type FindMode = "dim" | "hide";

/** What the list needs to decide a match. */
export interface FindQuery {
    query: string;
    /** Match case exactly instead of folding it. */
    matchCase: boolean;
    /** Treat the query as a regular expression. */
    regex: boolean;
}

/** The find bar's state; the query flags stay as they were when the bar is closed. */
export interface FindState extends FindQuery {
    open: boolean;
    mode: FindMode;
}

/** The part of the find state a listing uses to highlight and dim rows. */
export interface FindView extends FindQuery {
    mode: FindMode;
    /** The entry the find bar is on, scrolled into view by the list. */
    currentPath: string | null;
}

export const EmptyFind: FindState = {
    open: false,
    query: "",
    mode: "dim",
    matchCase: false,
    regex: false,
};

/** A listing that is not part of a search, for the preview lists on the overview. */
export const NoFind: FindView = {
    query: "",
    mode: "dim",
    matchCase: false,
    regex: false,
    currentPath: null,
};

/**
 * The ranges of the query inside a name. An empty list means "it matches, there is nothing to
 * highlight"; null means the name does not match at all.
 */
export function rangesOf(name: string, find: FindQuery): [number, number][] | null {
    if (find.query.length === 0) return [];

    if (!find.regex) {
        const haystack = find.matchCase ? name : name.toLowerCase();
        const needle = find.matchCase ? find.query : find.query.toLowerCase();
        const ranges: [number, number][] = [];

        let from = 0;
        while (true) {
            const at = haystack.indexOf(needle, from);
            if (at < 0) break;

            ranges.push([at, at + needle.length]);
            from = at + Math.max(needle.length, 1);
        }

        return ranges.length > 0 ? ranges : null;
    }

    try {
        const pattern = new RegExp(find.query, find.matchCase ? "g" : "gi");
        const ranges: [number, number][] = [];

        for (const match of name.matchAll(pattern)) {
            // A pattern that can match nothing would otherwise spin forever.
            if (match[0].length === 0 || match.index === undefined) continue;

            ranges.push([match.index, match.index + match[0].length]);
        }

        return ranges.length > 0 ? ranges : null;
    } catch {
        // A half-typed expression is not an error the user needs to see; nothing matches yet.
        return null;
    }
}

export function matchesName(name: string, find: FindQuery): boolean {
    return rangesOf(name, find) !== null;
}
