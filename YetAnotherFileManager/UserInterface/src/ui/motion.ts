import {css, keyframes} from "styled-components";

/**
 * Shared motion. Surfaces that float above the window pop, pages slide in, and side panels come
 * from the edge they live on. Keeping the curves in one place is what stops every component from
 * inventing its own timing; `globals.scss` collapses all of it when the OS asks for reduced motion.
 */

/** Menus, dialogs, the tray: a short drop with a little scale. */
export const popIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`;

/** A menu that grows out of its trigger instead of dropping from above. */
export const menuIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`;

/** A page replacing another one inside the same window. */
export const pageIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

/** A panel that lives on the right edge. */
export const slideInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

/** A bar that drops over the content, such as the find bar. */
export const slideDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

/** Backdrops behind dialogs. */
export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

/** The divider between split panes, growing out of the middle without moving either pane. */
export const splitLineIn = keyframes`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`;

export const popInStyle = css`animation: ${popIn} 150ms cubic-bezier(0.22, 1, 0.36, 1);`;
export const menuInStyle = css`animation: ${menuIn} 130ms cubic-bezier(0.22, 1, 0.36, 1);`;
export const pageInStyle = css`animation: ${pageIn} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;
export const slideInRightStyle = css`animation: ${slideInRight} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;
export const slideDownStyle = css`animation: ${slideDown} 150ms cubic-bezier(0.22, 1, 0.36, 1);`;
export const fadeInStyle = css`animation: ${fadeIn} 140ms ease-out;`;
export const splitLineInStyle = css`animation: ${splitLineIn} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;
