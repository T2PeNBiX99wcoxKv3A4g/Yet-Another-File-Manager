import styled from "styled-components";

/**
 * The small number on a title-bar button. It deliberately matches the file tray's badge: the same
 * position, size, colour and 9+ cap, so the row of buttons reads as one control strip.
 */
export const CountBadge = styled.span`
    position: absolute;
    top: 6px;
    right: 2px;
    min-width: 13px;
    height: 13px;
    padding: 0 3px;
    border-radius: 999px;
    background: var(--accent-primary);
    color: #fff;
    font-family: var(--font-mono);
    font-size: 8px;
    line-height: 13px;
    text-align: center;
`;
