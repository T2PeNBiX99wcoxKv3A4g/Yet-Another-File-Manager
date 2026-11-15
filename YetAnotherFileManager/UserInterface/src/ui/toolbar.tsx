import styled from "styled-components";

/**
 * The path bar's controls. They were defined in App and copied into the pages that draw their own
 * header (the gallery, the recycle bin); a page that adds its actions to the one toolbar now uses
 * the same pair, so the row cannot drift apart.
 */
export const ToolbarButton = styled.button`
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: color 130ms ease, border-color 130ms ease, background 130ms ease, transform 130ms ease;

    &:hover:not(:disabled) {
        color: var(--text-primary);
        border-color: var(--border-color-hover);
        background: rgba(var(--accent-rgb), 0.10);
        transform: translateY(-1px);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.32;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;

/** Splits the toolbar into groups; a page that adds actions brings its own. */
export const ToolbarSeparator = styled.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`;
