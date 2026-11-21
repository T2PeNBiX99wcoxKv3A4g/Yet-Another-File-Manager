import {type ReactNode, useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {type Translate, useTranslation} from "@photino-net-utils/bridge";
import {useIcon} from "../api/icons";
import {closeProperties, type PathPropertiesInfo, type PropertiesRequest} from "../api/properties";
import {showSystemProperties} from "../api/operations";
import {formatBytes} from "../utils/format";
import {typeLabel} from "../utils/fileType";
import {FileIcon, FolderIcon} from "./Icons";
import {Timestamp} from "./Timestamp";
import {fadeInStyle, popInStyle} from "../ui/motion";

/**
 * The app's own properties page, laid out like the one the shell shows. Linux has no shell sheet to
 * fall back on, and Windows keeps both: this page everywhere, plus a button for the shell sheet
 * where it exists. The setting "properties opens the Windows sheet" skips this page on Windows.
 */
export function PropertiesDialog({request}: { request: PropertiesRequest }) {
    const t = useTranslation();
    const close = useRef<HTMLButtonElement | null>(null);
    const many = request.items.length > 1;

    useEffect(() => {
        close.current?.focus();

        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                event.stopPropagation();
                closeProperties();
                return;
            }

            if (event.key !== "Tab")
                event.stopPropagation();
        };

        window.addEventListener("keydown", onKey, true);
        return () => window.removeEventListener("keydown", onKey, true);
    }, []);

    return createPortal(
        <Overlay onPointerDown={(event) => {
            if (event.target === event.currentTarget) closeProperties();
        }}>
            <Card role="dialog" aria-modal="true" aria-label={t("properties")}>
                {many
                    ? <Head>
                        <IconBox><FolderIcon size={30}/></IconBox>
                        <HeadText>
                            <Name>{t("count_items", {count: request.items.length})}</Name>
                            <Kind>{t("selection")}</Kind>
                        </HeadText>
                    </Head>
                    : <EntryHead info={request.items[0]}/>}

                <Rule/>

                {many
                    ? <List>
                        {request.items.map((info) => (
                            <ListRow key={info.path}>
                                <ListName title={info.path}>{info.name}</ListName>
                                <ListMeta>{info.error
                                    ? info.error
                                    : info.directory ? t("folder") : formatBytes(info.size)}</ListMeta>
                            </ListRow>
                        ))}
                    </List>
                    : <Details info={request.items[0]}/>}

                <Rule/>

                <Footer>
                    {request.canUseSystemSheet && (
                        <TextButton onClick={() => void showSystemProperties(request.items.map((info) => info.path))}
                                    type="button">
                            {t("windows_properties")}
                        </TextButton>
                    )}
                    <Spacer/>
                    <Button onClick={closeProperties} ref={close} type="button">{t("ok")}</Button>
                </Footer>
            </Card>
        </Overlay>,
        document.body,
    );
}

function EntryHead({info}: { info: PathPropertiesInfo }) {
    const t = useTranslation();
    const icon = useIcon(info.path, info.directory, true);
    const kind = typeLabel(info.name, info.directory, info.linkTarget, t);

    return (
        <Head>
            <IconBox>
                {icon
                    ? <Icon alt="" src={icon}/>
                    : info.directory ? <FolderIcon size={30}/> : <FileIcon size={30}/>}
            </IconBox>
            <HeadText>
                <Name title={info.path}>{info.name}</Name>
                <Kind>{kind}</Kind>
            </HeadText>
        </Head>
    );
}

function Details({info}: { info: PathPropertiesInfo }) {
    const t = useTranslation();

    if (info.error)
        return <ErrorText>{info.error}</ErrorText>;

    const kind = typeLabel(info.name, info.directory, info.linkTarget, t);
    const location = info.path.slice(0, Math.max(0, info.path.length - info.name.length - 1));

    return (
        <Fields>
            <Field label={t("type")} value={kind}/>
            <Field label={t("location")} value={location} wrap/>
            <Field label={info.directory ? t("items") : t("size")}
                   value={info.directory ? String(info.entries ?? 0) : formatBytes(info.size)}/>
            <Field label={t("created")} value={<Timestamp value={info.created}/>}/>
            <Field label={t("modified")} value={<Timestamp value={info.modified}/>}/>
            <Field label={t("accessed")} value={<Timestamp value={info.accessed}/>}/>
            {info.attributes.length > 0 && (
                <Field label={t("attributes")}
                       value={info.attributes.map((attribute) => attributeName(t, attribute)).join(", ")}/>
            )}
            {info.unixMode && <Field label={t("permissions")} value={info.unixMode}/>}
            {info.linkTarget && <Field label={t("link_target")} value={info.linkTarget} wrap/>}
        </Fields>
    );
}

function Field({label, value, wrap = false}: { label: string; value: ReactNode; wrap?: boolean }) {
    return (
        <>
            <FieldLabel>{label}</FieldLabel>
            <FieldValue $wrap={wrap} title={typeof value === "string" ? value : undefined}>{value}</FieldValue>
        </>
    );
}

/** The flags the app can name; anything else stays as the platform reported it. */
function attributeName(t: Translate, attribute: string): string {
    switch (attribute.toLowerCase()) {
        case "readonly":
            return t("read_only");
        case "hidden":
            return t("hidden");
        case "system":
            return t("system");
        case "directory":
            return t("folder");
        case "archive":
            return t("archive");
        case "compressed":
            return t("compressed");
        case "encrypted":
            return t("encrypted");
        case "reparsepoint":
            return t("link");
        case "temporary":
            return t("temporary");
        default:
            return attribute;
    }
}

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 3400;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.64);
    ${fadeInStyle}
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: min(460px, 100%);
    max-height: min(720px, 86vh);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${popInStyle}
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    padding: 16px 18px 14px;
`;

const IconBox = styled.div`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 38px;
    height: 38px;
    color: var(--accent-primary);
`;

const Icon = styled.img`
    width: 34px;
    height: 34px;
    object-fit: contain;
`;

const HeadText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`;

const Name = styled.div`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13.5px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Kind = styled.div`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Rule = styled.hr`
    height: 0;
    margin: 0;
    border: 0;
    border-top: 1px solid var(--border-color);
`;

const Fields = styled.div`
    display: grid;
    grid-template-columns: 96px minmax(0, 1fr);
    gap: 7px 12px;
    overflow-y: auto;
    padding: 14px 18px;
`;

const FieldLabel = styled.div`
    color: var(--text-muted);
    font-size: 11px;
    line-height: 1.5;
`;

const FieldValue = styled.div<{ $wrap?: boolean }>`
    overflow: ${({$wrap}) => $wrap ? "visible" : "hidden"};
    color: var(--text-primary);
    font-size: 11.5px;
    line-height: 1.5;
    text-overflow: ellipsis;
    ${({$wrap}) => $wrap ? "overflow-wrap: anywhere;" : "white-space: nowrap;"}
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 320px;
    overflow-y: auto;
    padding: 10px 18px;
`;

const ListRow = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding: 2px 0;
`;

const ListName = styled.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const ListMeta = styled.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-size: 10.5px;
`;

const ErrorText = styled.p`
    margin: 0;
    padding: 14px 18px;
    color: #fca5a5;
    font-size: 12px;
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
`;

const Spacer = styled.div`
    flex: 1;
`;

const TextButton = styled.button`
    padding: 4px 2px;
    border: 0;
    background: none;
    color: var(--accent-primary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const Button = styled.button`
    min-width: 84px;
    padding: 6px 14px;
    border: 1px solid var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;
