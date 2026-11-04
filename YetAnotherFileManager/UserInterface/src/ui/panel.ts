import {css} from "styled-components";

/**
 * The floating surfaces used by the title-bar menus, the context menu and the file tray. They were
 * copied into every component; keeping one definition stops the panels from drifting apart.
 */
export const elevatedPanel = css`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`;
