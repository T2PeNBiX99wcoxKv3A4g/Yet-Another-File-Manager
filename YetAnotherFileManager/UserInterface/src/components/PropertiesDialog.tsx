import {type ReactNode, useEffect, useMemo, useRef, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {type Translate, useTranslation} from "@photino-net-utils/bridge";
import {useIcon} from "../api/icons";
import {
    applyProperties,
    closeProperties,
    type PathHashes,
    type PathPropertiesInfo,
    type PropertiesRequest,
    readHashes,
    readProperties,
} from "../api/properties";
import {renamePath, showSystemProperties} from "../api/operations";
import {formatBytes} from "../utils/format";
import {typeLabel} from "../utils/fileType";
import {FileIcon, FolderIcon} from "./Icons";
import {Timestamp} from "./Timestamp";
import {fadeInStyle, popInStyle} from "../ui/motion";

type Tab = "general" | "details" | "hashes" | "permissions";

/** Bits of the unix mode the permissions tab edits, in the order the grid draws them. */
const PermissionBits = [
    {bit: 0o400, group: "owner", action: "read"},
    {bit: 0o200, group: "owner", action: "write"},
    {bit: 0o100, group: "owner", action: "execute"},
    {bit: 0o040, group: "group", action: "read"},
    {bit: 0o020, group: "group", action: "write"},
    {bit: 0o010, group: "group", action: "execute"},
    {bit: 0o004, group: "other", action: "read"},
    {bit: 0o002, group: "other", action: "write"},
    {bit: 0o001, group: "other", action: "execute"},
] as const;

/**
 * The app's own properties page, laid out and behaving like the shell's General tab. Linux has no
 * shell sheet, so this page also carries the permissions grid; Windows keeps both and can hand the
 * entry to its own sheet from the footer.
 */
export function PropertiesDialog({request}: { request: PropertiesRequest }) {
    const t = useTranslation();
    const close = useRef<HTMLButtonElement | null>(null);
    const single = request.items.length === 1;
    const windows = request.canUseSystemSheet;
    const [tab, setTab] = useState<Tab>("general");
    const [info, setInfo] = useState<PathPropertiesInfo>(request.items[0]);
    const [name, setName] = useState(info.name);
    const [readOnly, setReadOnly] = useState(has(info, "ReadOnly"));
    const [hidden, setHidden] = useState(has(info, "Hidden"));
    const [archive, setArchive] = useState(has(info, "Archive"));
    const [mode, setMode] = useState(info.unixModeValue ?? 0);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hashes, setHashes] = useState<PathHashes | null>(null);
    const [hashing, setHashing] = useState(false);
    const hashStarted = useRef(false);

    const editable = single && !info.error;
    const canHash = single && !info.directory && !info.error;
    const nameChanged = editable && name.trim() !== info.name;
    const flagsChanged = editable && windows
        && (readOnly !== has(info, "ReadOnly")
            || hidden !== has(info, "Hidden")
            || (info.directory ? false : archive !== has(info, "Archive")));
    const modeChanged = editable && !windows && mode !== (info.unixModeValue ?? 0);
    const dirty = nameChanged || flagsChanged || modeChanged;

    const resetDrafts = (next: PathPropertiesInfo) => {
        setInfo(next);
        setName(next.name);
        setReadOnly(has(next, "ReadOnly"));
        setHidden(has(next, "Hidden"));
        setArchive(has(next, "Archive"));
        setMode(next.unixModeValue ?? 0);
    };

    /** Writes the drafts; answers false when something refused, so OK stays open. */
    const commit = async (): Promise<boolean> => {
        if (!dirty || busy) return true;

        setBusy(true);
        setError(null);

        try {
            let path = info.path;

            if (nameChanged) {
                const renamed = await renamePath(path, name.trim());
                if (!renamed.ok) {
                    setError(renamed.error ?? t("could_not_rename_the_entry"));
                    return false;
                }

                path = renamed.path ?? path;
            }

            if (flagsChanged || modeChanged) {
                const result = await applyProperties({
                    path,
                    readOnly: windows ? readOnly : undefined,
                    hidden: windows ? hidden : undefined,
                    archive: windows && !info.directory ? archive : undefined,
                    unixMode: windows ? undefined : mode,
                });

                if (!result.ok) {
                    setError(result.error ?? t("could_not_change_the_properties"));
                    return false;
                }

                if (result.info) {
                    resetDrafts(result.info);
                    return true;
                }
            }

            if (nameChanged) {
                const fresh = await readProperties(path);
                if (fresh) resetDrafts(fresh);
            }

            return true;
        } finally {
            setBusy(false);
        }
    };

    const closeDialog = () => closeProperties();

    const accept = async () => {
        if (await commit()) closeDialog();
    };

    // The digest waits until the tab is opened: hashing a large file is the slowest thing this page
    // can do, and most visits never look at it.
    useEffect(() => {
        if (tab !== "hashes" || hashStarted.current || !canHash) return;

        hashStarted.current = true;
        setHashing(true);

        void readHashes(info.path)
            .then((result) => setHashes(result), () => setHashes({md5: null, sha256: null, sha512: null}))
            .finally(() => setHashing(false));
    }, [tab, canHash, info.path]);

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
            if (event.target === event.currentTarget) closeDialog();
        }}>
            <Card role="dialog" aria-modal="true" aria-label={t("properties")}>
                <Top>
                    {single ? (
                        <>
                            <IconBox><EntryIcon info={info}/></IconBox>
                            <HeadText>
                                <NameInput
                                    aria-label={t("name")}
                                    disabled={!editable}
                                    onChange={(event) => setName(event.target.value)}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter") void accept();
                                    }}
                                    spellCheck={false}
                                    value={name}
                                />
                                <Kind>{typeLabel(info.name, info.directory, info.linkTarget, t)}</Kind>
                            </HeadText>
                        </>
                    ) : (
                        <>
                            <IconBox><FolderIcon size={30}/></IconBox>
                            <HeadText>
                                <Name>{t("count_items", {count: request.items.length})}</Name>
                                <Kind>{t("selection")}</Kind>
                            </HeadText>
                        </>
                    )}
                </Top>

                <Rule/>

                {single && (
                    <Tabs role="tablist">
                        <TabButton $active={tab === "general"} onClick={() => setTab("general")} role="tab" type="button">
                            {t("general")}
                        </TabButton>
                        <TabButton $active={tab === "details"} onClick={() => setTab("details")} role="tab" type="button">
                            {t("details")}
                        </TabButton>
                        {canHash && (
                            <TabButton $active={tab === "hashes"} onClick={() => setTab("hashes")} role="tab"
                                       type="button">
                                {t("hashes")}
                            </TabButton>
                        )}
                        {!windows && (
                            <TabButton $active={tab === "permissions"} onClick={() => setTab("permissions")}
                                       role="tab" type="button">
                                {t("permissions")}
                            </TabButton>
                        )}
                    </Tabs>
                )}

                <Body>
                    {!single
                        ? <List>
                            {request.items.map((item) => (
                                <ListRow key={item.path}>
                                    <ListName title={item.path}>{item.name}</ListName>
                                    <ListMeta>{item.error
                                        ? item.error
                                        : item.directory ? t("folder") : formatBytes(item.size)}</ListMeta>
                                </ListRow>
                            ))}
                        </List>
                        : info.error
                            ? <ErrorText>{info.error}</ErrorText>
                            : tab === "general"
                                ? <General info={info} readOnly={readOnly} hidden={hidden} archive={archive}
                                           windows={windows} editable={editable}
                                           onReadOnly={setReadOnly} onHidden={setHidden} onArchive={setArchive}/>
                                : tab === "details"
                                    ? <Details info={info}/>
                                    : <Permissions mode={mode} onChange={setMode}/>}

                    {error && <ErrorText>{error}</ErrorText>}
                </Body>

                <Rule/>

                <Footer>
                    {windows && (
                        <TextButton onClick={() => void showSystemProperties(request.items.map((item) => item.path))}
                                    type="button">
                            {t("windows_properties")}
                        </TextButton>
                    )}
                    <Spacer/>
                    <Button disabled={busy} onClick={() => void accept()} ref={close} type="button">
                        {t("ok")}
                    </Button>
                    <Button disabled={busy} onClick={closeDialog} type="button">{t("cancel")}</Button>
                    <Button disabled={busy || !dirty} onClick={() => void commit()} type="button">
                        {t("apply")}
                    </Button>
                </Footer>
            </Card>
        </Overlay>,
        document.body,
    );
}

function General({info, readOnly, hidden, archive, windows, editable, onReadOnly, onHidden, onArchive}: {
    info: PathPropertiesInfo;
    readOnly: boolean;
    hidden: boolean;
    archive: boolean;
    windows: boolean;
    editable: boolean;
    onReadOnly: (value: boolean) => void;
    onHidden: (value: boolean) => void;
    onArchive: (value: boolean) => void;
}) {
    const t = useTranslation();
    const location = info.path.slice(0, Math.max(0, info.path.length - info.name.length - 1));

    return (
        <Fields>
            <Field label={t("type")} value={typeLabel(info.name, info.directory, info.linkTarget, t)}/>
            <Field label={t("location")} value={location} wrap/>
            <Field label={info.directory ? t("items") : t("size")}
                   value={info.directory ? String(info.entries ?? 0) : formatBytes(info.size)}/>
            <Field label={t("created")} value={<Timestamp value={info.created}/>}/>
            <Field label={t("modified")} value={<Timestamp value={info.modified}/>}/>
            <Field label={t("accessed")} value={<Timestamp value={info.accessed}/>}/>
            {windows
                ? (
                    <Field label={t("attributes")} value={
                        <Checks>
                            <Check checked={readOnly} disabled={!editable} label={t("read_only")}
                                   onChange={onReadOnly}/>
                            <Check checked={hidden} disabled={!editable} label={t("hidden")} onChange={onHidden}/>
                            {!info.directory && (
                                <Check checked={archive} disabled={!editable} label={t("archive")}
                                       onChange={onArchive}/>
                            )}
                        </Checks>
                    }/>
                )
                : (
                    <Field label={t("attributes")} value={
                        info.attributes.map((attribute) => attributeName(t, attribute)).join(", ") || "—"
                    }/>
                )}
        </Fields>
    );
}

function Details({info}: { info: PathPropertiesInfo }) {
    const t = useTranslation();

    return (
        <Fields>
            <Field label={t("path")} value={info.path} wrap/>
            {info.linkTarget && <Field label={t("link_target")} value={info.linkTarget} wrap/>}
            {info.unixMode && <Field label={t("permissions")} value={info.unixMode}/>}
            <Field label={t("attributes")}
                   value={info.attributes.map((attribute) => attributeName(t, attribute)).join(", ") || "—"}/>
            <Field label={t("created")} value={<Timestamp value={info.created}/>}/>
            <Field label={t("modified")} value={<Timestamp value={info.modified}/>}/>
            <Field label={t("accessed")} value={<Timestamp value={info.accessed}/>}/>
        </Fields>
    );
}

function Permissions({mode, onChange}: { mode: number; onChange: (value: number) => void }) {
    const t = useTranslation();

    const symbol = useMemo(() => {
        const letters = "rwx";
        return PermissionBits
            .map((entry, index) => (mode & entry.bit) !== 0 ? letters[index % 3] : "-")
            .join("");
    }, [mode]);

    return (
        <Fields>
            <Field label={t("permissions")} value={<Mono>{symbol}</Mono>}/>
            {(["owner", "group", "other"] as const).map((group) => (
                <Field key={group} label={t(group)} value={
                    <Checks>
                        {PermissionBits.filter((entry) => entry.group === group).map((entry) => (
                            <Check
                                checked={(mode & entry.bit) !== 0}
                                key={entry.bit}
                                label={t(entry.action)}
                                onChange={(checked) => onChange(checked ? mode | entry.bit : mode & ~entry.bit)}
                            />
                        ))}
                    </Checks>
                }/>
            ))}
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

function Check({checked, disabled = false, label, onChange}: {
    checked: boolean;
    disabled?: boolean;
    label: string;
    onChange: (value: boolean) => void;
}) {
    return (
        <CheckLabel $disabled={disabled}>
            <input
                checked={checked}
                disabled={disabled}
                onChange={(event) => onChange(event.target.checked)}
                type="checkbox"
            />
            {label}
        </CheckLabel>
    );
}

function EntryIcon({info}: { info: PathPropertiesInfo }) {
    const icon = useIcon(info.path, info.directory, true);

    return icon
        ? <Icon alt="" src={icon}/>
        : info.directory ? <FolderIcon size={30}/> : <FileIcon size={30}/>;
}

function has(info: PathPropertiesInfo, attribute: string): boolean {
    return info.attributes.some((value) => value.toLowerCase() === attribute.toLowerCase());
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
    width: min(470px, 100%);
    max-height: min(720px, 88vh);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${popInStyle}
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    padding: 16px 18px 12px;
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
    gap: 3px;
    min-width: 0;
    flex: 1;
`;

const Name = styled.div`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13.5px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const NameInput = styled.input`
    width: 100%;
    padding: 3px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;
    font-weight: 600;

    &:focus {
        border-color: var(--border-color-focus);
        outline: none;
    }

    &:disabled {
        border-color: transparent;
        background: none;
    }
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

const Tabs = styled.div`
    display: flex;
    gap: 2px;
    padding: 8px 18px 0;
`;

const TabButton = styled.button<{ $active: boolean }>`
    padding: 6px 12px;
    border: 0;
    border-bottom: 2px solid ${({$active}) => $active ? "var(--accent-primary)" : "transparent"};
    background: none;
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-muted)"};
    font: inherit;
    font-size: 11.5px;
    cursor: pointer;

    &:hover {
        color: var(--text-primary);
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

const Fields = styled.div`
    display: grid;
    grid-template-columns: 96px minmax(0, 1fr);
    gap: 7px 12px;
    padding: 12px 18px 14px;
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

const Checks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 14px;
    align-items: center;
`;

const CheckLabel = styled.label<{ $disabled?: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: ${({$disabled}) => $disabled ? "var(--text-muted)" : "var(--text-primary)"};
    font-size: 11.5px;
    cursor: ${({$disabled}) => $disabled ? "default" : "pointer"};

    input {
        accent-color: var(--accent-primary);
        width: 13px;
        height: 13px;
    }
`;

const Mono = styled.span`
    font-family: var(--font-mono);
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 320px;
    overflow-y: auto;
    padding: 10px 18px 12px;
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
    padding: 0 18px 12px;
    color: #fca5a5;
    font-size: 11.5px;
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
    min-width: 74px;
    padding: 6px 14px;
    border: 1px solid var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;
