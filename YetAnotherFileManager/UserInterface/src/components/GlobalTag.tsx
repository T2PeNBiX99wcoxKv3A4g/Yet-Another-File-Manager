import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";

/** Marks a view setting that applies to every folder, not only the one on screen. */
export function GlobalTag() {
    const t = useTranslation();

    return <Tag title={t("always_applies_to_every_folder")}>{t("global")}</Tag>;
}

const Tag = styled.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`;
