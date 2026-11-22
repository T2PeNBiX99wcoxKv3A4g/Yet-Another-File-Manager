import {type ReactNode, useEffect, useMemo, useRef, useState, useSyncExternalStore} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {type Translate, useTranslation} from "@photino-net-utils/bridge";
import {useIcon} from "../api/icons";
import {
    applyProperties,
    closeProperties,
    type EntryDetails,
    type PathHashes,
    type PathPropertiesInfo,
    type PropertiesRequest,
    readEntryDetails,
    readHashes,
    readProperties,
    saveEntryDetails,
} from "../api/properties";
import {listTags, type TagCatalogEntry} from "../api/tags";
import {renamePath, showSystemProperties} from "../api/operations";
import {formatBytes, formatDate, formatTimestamp, usageTone} from "../utils/format";
import {clockNow, subscribeClock} from "../utils/clock";
import {typeLabel} from "../utils/fileType";
import {FileIcon, FolderIcon, CopyIcon, PlusIcon, RefreshIcon, StarIcon} from "./Icons";
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
    const [details, setDetails] = useState<EntryDetails | null>(null);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [catalog, setCatalog] = useState<TagCatalogEntry[]>([]);
    const [recursive, setRecursive] = useState(false);
    const [advanced, setAdvanced] = useState(false);
    const detailsStarted = useRef(false);

    const editable = single && !info.error;
    const canHash = single && !info.directory && !info.error;
    const nameChanged = editable && name.trim() !== info.name;
    const flagsChanged = editable && windows
        && (readOnly !== has(info, "ReadOnly")
            || hidden !== has(info, "Hidden")
            || (info.directory ? false : archive !== has(info, "Archive")));
    const modeChanged = editable && !windows && mode !== (info.unixModeValue ?? 0);
    // Ticking "apply to all" with the mode unchanged still has work to do: it walks the tree.
    const modeToApply = editable && !windows && (modeChanged || (recursive && info.directory));
    const tagsChanged = details !== null && !sameTags(tags, details.tags);
    const ratingChanged = details !== null && rating !== details.rating;
    const commentChanged = details !== null && comment !== (details.comment ?? "");
    const detailsDirty = tagsChanged || ratingChanged || commentChanged;
    const dirty = nameChanged || flagsChanged || modeToApply || detailsDirty;

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

            if (flagsChanged || modeToApply) {
                const result = await applyProperties({
                    path,
                    readOnly: windows ? readOnly : undefined,
                    hidden: windows ? hidden : undefined,
                    archive: windows && !info.directory ? archive : undefined,
                    unixMode: windows ? undefined : mode,
                    recursive: !windows && info.directory ? recursive : undefined,
                });

                if (!result.ok) {
                    setError(result.error ?? t("could_not_change_the_properties"));
                    return false;
                }

                if (result.info) {
                    resetDrafts(result.info);
                    path = result.info.path;
                }
            }

            if (detailsDirty) {
                const saved = await saveEntryDetails({
                    path,
                    tags: tagsChanged ? tags : undefined,
                    rating: ratingChanged ? rating : undefined,
                    comment: commentChanged ? comment : undefined,
                });

                if (!saved) {
                    setError(t("could_not_change_the_properties"));
                    return false;
                }

                setDetails({tags: [...tags], rating, comment: comment.length > 0 ? comment : null, editable: true});
            }

            if (nameChanged && !flagsChanged && !modeChanged) {
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
            .then((result) => setHashes(result), () => setHashes({items: []}))
            .finally(() => setHashing(false));
    }, [tab, canHash, info.path]);

    // Tags, rating and comment live in the folder's own index, so they are only read once the tab
    // is opened; the tag catalog is only needed to suggest names.
    useEffect(() => {
        if (tab !== "details" || detailsStarted.current || !single) return;

        detailsStarted.current = true;

        void readEntryDetails(info.path).then((result) => {
            if (!result) return;

            setDetails(result);
            setRating(result.rating);
            setComment(result.comment ?? "");
            setTags(result.tags);
        }, () => undefined);

        void listTags().then(setCatalog, () => undefined);
    }, [tab, single, info.path]);

    const refresh = async () => {
        const fresh = await readProperties(info.path);
        if (fresh) resetDrafts(fresh);
    };

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
                                           windows={windows} editable={editable} onRefresh={() => void refresh()}
                                           onReadOnly={setReadOnly} onHidden={setHidden} onArchive={setArchive}/>
                                : tab === "details"
                                    ? <Details info={info} editable={editable && details !== null}
                                               tags={tags} catalog={catalog} rating={rating} comment={comment}
                                               onTags={setTags} onRating={setRating} onComment={setComment}/>
                                    : tab === "hashes"
                                        ? <Hashes hashes={hashes} hashing={hashing}/>
                                        : <Permissions info={info} mode={mode} recursive={recursive}
                                                       advanced={advanced} onAdvanced={setAdvanced}
                                                       onRecursive={setRecursive} onChange={setMode}/>}

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

function General({info, readOnly, hidden, archive, windows, editable, onRefresh, onReadOnly, onHidden, onArchive}: {
    info: PathPropertiesInfo;
    readOnly: boolean;
    hidden: boolean;
    archive: boolean;
    windows: boolean;
    editable: boolean;
    onRefresh: () => void;
    onReadOnly: (value: boolean) => void;
    onHidden: (value: boolean) => void;
    onArchive: (value: boolean) => void;
}) {
    const t = useTranslation();
    const location = info.path.slice(0, Math.max(0, info.path.length - info.name.length - 1));
    const used = Math.max(0, info.volumeTotal - info.volumeFree);
    const share = info.volumeTotal > 0 ? used / info.volumeTotal : 0;

    return (
        <Section>
            <SectionHead>
                <SectionTitle>{t("general")}</SectionTitle>
                <IconButton onClick={onRefresh} title={t("refresh")} type="button">
                    <RefreshIcon size={12}/>
                </IconButton>
            </SectionHead>

            <Fields>
                <Field label={t("type")} value={typeLabel(info.name, info.directory, info.linkTarget, t)}/>
                <Field label={t("location")} value={location} wrap/>
                <Field label={t("size")} value={info.size > 0
                    ? t("bytes_in_parentheses", {size: formatBytes(info.size), bytes: info.size.toLocaleString()})
                    : "—"}/>
                {info.directory && (
                    <Field label={t("items")} value={t("count_files_and_folders",
                        {files: info.fileCount, folders: info.folderCount})}/>
                )}
                {!info.directory && info.sizeOnDisk > 0 && (
                    <Field label={t("size_on_disk")} value={formatBytes(info.sizeOnDisk)}/>
                )}
                {info.fileSystem && <Field label={t("filesystem")} value={info.fileSystem}/>}
                {info.mountPoint && <Field label={t("mount_point")} value={info.mountPoint} wrap/>}
                {info.mountSource && <Field label={t("mount_source")} value={info.mountSource} wrap/>}
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
                <Field label={t("created")} value={<When value={info.created}/>}/>
                <Field label={t("modified")} value={<When value={info.modified}/>}/>
                <Field label={t("accessed")} value={<When value={info.accessed}/>}/>
            </Fields>

            {info.volumeTotal > 0 && (
                <Space>
                    <SpaceLine>
                        <span>{t("free_space")}</span>
                        <span>{formatBytes(info.volumeFree)} / {formatBytes(info.volumeTotal)}</span>
                    </SpaceLine>
                    <Bar><Fill $tone={usageTone(share)} $width={Math.round(share * 100)}/></Bar>
                    <SpaceHint>{Math.round((1 - share) * 100)}%</SpaceHint>
                </Space>
            )}
        </Section>
    );
}

function Details({info, editable, tags, catalog, rating, comment, onTags, onRating, onComment}: {
    info: PathPropertiesInfo;
    editable: boolean;
    tags: string[];
    catalog: TagCatalogEntry[];
    rating: number;
    comment: string;
    onTags: (value: string[]) => void;
    onRating: (value: number) => void;
    onComment: (value: string) => void;
}) {
    const t = useTranslation();
    const [draft, setDraft] = useState("");
    const suggestions = catalog.filter((entry) => !tags.includes(entry.name));

    const add = () => {
        const name = draft.trim();
        if (name.length === 0) return;

        if (!tags.includes(name))
            onTags([...tags, name]);

        setDraft("");
    };

    return (
        <Section>
            <SectionHead>
                <SectionTitle>{t("details")}</SectionTitle>
            </SectionHead>

            <Fields>
                <Field label={t("type")} value={typeLabel(info.name, info.directory, info.linkTarget, t)}/>
                <Field label={t("path")} value={info.path} wrap/>
                {info.linkTarget && <Field label={t("link_target")} value={info.linkTarget} wrap/>}
                {info.unixMode && <Field label={t("permissions")} value={<Mono>{info.unixMode}</Mono>}/>}
            </Fields>

            <Block>
                <BlockTitle>{t("tags")}</BlockTitle>
                <TagRow>
                    {tags.map((tag) => (
                        <Tag key={tag}>
                            {tag}
                            <TagRemove disabled={!editable} onClick={() => onTags(tags.filter((item) => item !== tag))}
                                       title={t("remove")} type="button">×</TagRemove>
                        </Tag>
                    ))}
                    <TagInput
                        disabled={!editable}
                        list="properties-tag-catalog"
                        onChange={(event) => setDraft(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                event.preventDefault();
                                add();
                            }
                        }}
                        placeholder={t("tags")}
                        value={draft}
                    />                    <datalist id="properties-tag-catalog">
                        {suggestions.map((entry) => <option key={entry.name} value={entry.name}/>)}
                    </datalist>
                    <SmallButton disabled={!editable || draft.trim().length === 0} onClick={add} type="button">
                        <PlusIcon size={11}/>{t("add")}
                    </SmallButton>
                </TagRow>
            </Block>

            <Block>
                <BlockTitle>{t("rating")}</BlockTitle>
                <Stars>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star $on={star <= rating} aria-label={String(star)} disabled={!editable} key={star}
                              onClick={() => onRating(rating === star ? 0 : star)} type="button">
                            <StarIcon size={16}/>
                        </Star>
                    ))}
                </Stars>
            </Block>

            <Block>
                <BlockTitle>{t("comment")}</BlockTitle>
                <TextArea disabled={!editable} onChange={(event) => onComment(event.target.value)}
                          rows={3} spellCheck={false} value={comment}/>
            </Block>
        </Section>
    );
}

function Hashes({hashes, hashing}: { hashes: PathHashes | null; hashing: boolean }) {
    const t = useTranslation();
    const [needle, setNeedle] = useState("");

    if (hashing || !hashes)
        return <Busy>{t("calculating")}…</Busy>;

    if (hashes.error)
        return <ErrorText>{hashes.error}</ErrorText>;

    const values = (hashes.items ?? []).filter((entry) => entry.value.length > 0);

    const wanted = needle.trim().toLowerCase();
    const match = wanted.length > 0
        ? values.some((entry) => entry.value.toLowerCase() === wanted)
        : null;

    return (
        <div>
            <Fields>
                {values.map((entry) => (
                    <Field key={entry.name} label={entry.name} value={
                        <HashRow>
                            <HashText>{entry.value}</HashText>
                            <CopyButton
                                onClick={() => void navigator.clipboard.writeText(entry.value)}
                                title={t("copy")}
                                type="button"
                            >
                                <CopyIcon size={11}/>
                            </CopyButton>
                        </HashRow>
                    } wrap/>
                ))}
            </Fields>

            <Verify>
                <VerifyLabel>{t("paste_a_hash_to_compare")}</VerifyLabel>
                <Input
                    onChange={(event) => setNeedle(event.target.value)}
                    placeholder="…"
                    spellCheck={false}
                    value={needle}
                />
                {match !== null && (
                    <Verdict $ok={match}>{match ? t("hash_matches") : t("hash_does_not_match")}</Verdict>
                )}
            </Verify>
        </div>
    );
}

function Permissions({info, mode, recursive, advanced, onAdvanced, onRecursive, onChange}: {
    info: PathPropertiesInfo;
    mode: number;
    recursive: boolean;
    advanced: boolean;
    onAdvanced: (value: boolean) => void;
    onRecursive: (value: boolean) => void;
    onChange: (value: number) => void;
}) {
    const t = useTranslation();

    const symbol = useMemo(() => {
        const letters = "rwx";
        return PermissionBits
            .map((entry, index) => (mode & entry.bit) !== 0 ? letters[index % 3] : "-")
            .join("");
    }, [mode]);

    // "View only" still needs the execute bit on a folder, or the user cannot open it.
    const viewOnly = 0o4 | (info.directory ? 0o1 : 0);
    const modify = 0o6 | (info.directory ? 0o1 : 0);

    const levels = [
        {value: 0, label: t("no_access")},
        {value: viewOnly, label: t("view_only")},
        {value: modify, label: t("can_view_and_modify")},
    ];

    const groupValue = (group: "owner" | "group" | "other") =>
        PermissionBits.filter((entry) => entry.group === group)
            .reduce((total, entry) => (mode & entry.bit) !== 0 ? total | entry.bit : total, 0);

    const setGroup = (group: "owner" | "group" | "other", value: number) => {
        const mask = PermissionBits
            .filter((entry) => entry.group === group)
            .reduce((total, entry) => total | entry.bit, 0);

        onChange((mode & ~mask) | (value & mask));
    };

    return (
        <Section>
            <SectionHead>
                <SectionTitle>{t("permissions")}</SectionTitle>
            </SectionHead>

            <Fields>
                <Field label={t("permissions")} value={<Mono>{symbol}</Mono>}/>
                {info.owner && <Field label={t("owner")} value={info.owner}/>}
                {info.group && <Field label={t("group")} value={info.group}/>}
            </Fields>

            <Block>
                <BlockTitle>{t("permissions")}</BlockTitle>
                {(["owner", "group", "other"] as const).map((group) => (
                    <Row key={group}>
                        <RowLabel>{t(group)}</RowLabel>
                        <Select onChange={(event) => setGroup(group, Number(event.target.value))}
                                value={groupValue(group)}>
                            {levels.map((level) => (
                                <option key={level.value} value={level.value}>{level.label}</option>
                            ))}
                        </Select>
                    </Row>
                ))}
            </Block>

            <Block>
                <Advanced onClick={() => onAdvanced(!advanced)} type="button">
                    <span>{advanced ? "▾" : "▸"}</span>{t("advanced_permissions")}
                </Advanced>
                {advanced && (
                    <Grid>
                        <GridCell/>
                        <GridCell>{t("read")}</GridCell>
                        <GridCell>{t("write")}</GridCell>
                        <GridCell>{t("execute")}</GridCell>
                        {(["owner", "group", "other"] as const).map((group) => (
                            <GridRow key={group}>
                                <GridCell>{t(group)}</GridCell>
                                {PermissionBits.filter((entry) => entry.group === group).map((entry) => (
                                    <GridCell key={entry.bit}>
                                        <input
                                            checked={(mode & entry.bit) !== 0}
                                            onChange={(event) => onChange(event.target.checked
                                                ? mode | entry.bit
                                                : mode & ~entry.bit)}
                                            type="checkbox"
                                        />
                                    </GridCell>
                                ))}
                            </GridRow>
                        ))}
                    </Grid>
                )}
            </Block>

            {info.directory && (
                <Block>
                    <Check checked={recursive} label={t("apply_to_all_subfolders")} onChange={onRecursive}/>
                </Block>
            )}
        </Section>
    );
}

/** A time with its wall clock value and, while it is recent, how long ago that was. */
function When({value}: { value: number }) {
    const now = useSyncExternalStore(subscribeClock, clockNow);
    const absolute = formatDate(value);
    const relative = formatTimestamp(value, now);

    return (
        <span>
            {absolute}
            {relative !== absolute && <Ago> · {relative}</Ago>}
        </span>
    );
}

function sameTags(left: string[], right: string[]): boolean {
    return left.length === right.length && left.every((tag, index) => tag === right[index]);
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
    width: min(540px, 100%);
    max-height: min(760px, 88vh);
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

const Section = styled.div`
    display: flex;
    flex-direction: column;
`;

const SectionHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 12px 18px 0;
`;

const SectionTitle = styled.div`
    color: var(--text-muted);
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
`;

const IconButton = styled.button`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 22px;
    height: 22px;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`;

const Ago = styled.span`
    color: var(--text-muted);
`;

const Space = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 18px 14px;
`;

const SpaceLine = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    color: var(--text-muted);
    font-size: 11px;
`;

const Bar = styled.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: var(--bg-input);
`;

const Fill = styled.div<{ $tone: string; $width: number }>`
    height: 100%;
    width: ${({$width}) => $width}%;
    background: ${({$tone}) => $tone};
    border-radius: 3px;
`;

const SpaceHint = styled.div`
    color: var(--text-muted);
    font-size: 10.5px;
    text-align: right;
`;

const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0 18px 14px;
`;

const BlockTitle = styled.div`
    color: var(--text-muted);
    font-size: 11px;
`;

const TagRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
`;

const Tag = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 2px 4px 2px 7px;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    background: var(--bg-input);
    color: var(--text-primary);
    font-size: 10.5px;
`;

const TagRemove = styled.button`
    display: grid;
    place-items: center;
    width: 14px;
    height: 14px;
    padding: 0;
    border: 0;
    background: none;
    color: var(--text-muted);
    font-size: 12px;
    line-height: 1;
    cursor: pointer;

    &:hover:not(:disabled) {
        color: var(--text-primary);
    }
`;

const TagInput = styled.input`
    flex: 1 1 90px;
    min-width: 70px;
    padding: 3px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;

    &:focus {
        border-color: var(--border-color-focus);
        outline: none;
    }
`;

const SmallButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 7px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 10.5px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;

const Stars = styled.div`
    display: flex;
    gap: 2px;
`;

const Star = styled.button<{ $on: boolean }>`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    padding: 0;
    border: 0;
    background: none;
    color: ${({$on}) => $on ? "var(--accent-primary)" : "var(--text-muted)"};
    cursor: pointer;

    &:hover:not(:disabled) {
        color: var(--accent-primary);
    }

    &:disabled {
        cursor: default;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 6px 7px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11.5px;
    resize: vertical;

    &:focus {
        border-color: var(--border-color-focus);
        outline: none;
    }
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const RowLabel = styled.span`
    flex: 0 0 96px;
    color: var(--text-muted);
    font-size: 11.5px;
`;

const Select = styled.select`
    flex: 1;
    padding: 4px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11.5px;
`;

const Advanced = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    align-self: flex-start;
    padding: 0;
    border: 0;
    background: none;
    color: var(--text-primary);
    font: inherit;
    font-size: 11.5px;
    cursor: pointer;

    span {
        color: var(--text-muted);
        font-size: 10px;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 96px repeat(3, 1fr);
    gap: 5px 10px;
    margin-top: 6px;
`;

const GridRow = styled.div`
    display: contents;
`;

const GridCell = styled.div`
    color: var(--text-primary);
    font-size: 11px;

    &:first-child {
        color: var(--text-muted);
    }

    input {
        accent-color: var(--accent-primary);
        width: 13px;
        height: 13px;
    }
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

const Busy = styled.p`
    margin: 0;
    padding: 14px 18px;
    color: var(--text-muted);
    font-size: 11.5px;
`;

const HashRow = styled.span`
    display: flex;
    align-items: flex-start;
    gap: 6px;
    min-width: 0;
`;

const HashText = styled.span`
    min-width: 0;
    overflow-wrap: anywhere;
    font-family: var(--font-mono);
    font-size: 10.5px;
    line-height: 1.45;
`;

const CopyButton = styled.button`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 18px;
    height: 18px;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`;

const Verify = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0 18px 14px;
`;

const VerifyLabel = styled.span`
    color: var(--text-muted);
    font-size: 11px;
`;

const Input = styled.input`
    width: 100%;
    padding: 5px 7px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 10.5px;

    &:focus {
        border-color: var(--border-color-focus);
        outline: none;
    }
`;

const Verdict = styled.span<{ $ok: boolean }>`
    color: ${({$ok}) => $ok ? "#4ade80" : "#fca5a5"};
    font-size: 11px;
    font-weight: 600;
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
