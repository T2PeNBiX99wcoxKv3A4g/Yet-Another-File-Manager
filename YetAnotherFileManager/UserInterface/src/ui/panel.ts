import {css} from "styled-components";

/**
 * The floating surfaces used by the title-bar menus, the context menu and the file tray. They were
 * copied into every component; keeping one definition stops the panels from drifting apart.
 */
export const elevatedPanel = css`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: var(--bg-elevated);
    backdrop-filter: blur(18px) saturate(120%);
    -webkit-backdrop-filter: blur(18px) saturate(120%);
    box-shadow: var(--shadow-panel);
`;
