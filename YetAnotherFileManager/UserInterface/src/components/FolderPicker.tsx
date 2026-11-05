import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";
import {
    listDirectory,
    listDrives,
    listPlaces,
    type DirectoryListing,
    type Drive,
    type FileEntry,
    type Place,
} from "../api/files";
import {elevatedPanel} from "../ui/panel";
import {fadeInStyle, popInStyle} from "../ui/motion";
import {ArrowUpIcon, CheckIcon, ChevronRightIcon, CrossIcon, DriveIcon, FolderIcon, RefreshIcon} from "./Icons";
import {PathIcon} from "./PathIcon";
import {PlaceIcon} from "./PlaceIcon";
import {baseName, formatBytes, formatDate, parentPath} from "../utils/format";

interface FolderPickerProps {
    initial?: string;
    mode?: "folder" | "file";
    /** Allow more than one row to be selected. */
    multiple?: boolean;
    /** Extensions (with the dot) to offer in file mode. */
    extensions?: string[];
    /** Render as the whole window (the CLI picker) instead of a modal. */
    inline?: boolean;
    places?: Place[];
    onCancel: () => void;
    onSelect: (paths: string[]) => void;
}

/**
 * An Explorer-shaped path picker drawn by the app. The left rail holds Quick access and the
 * volumes; the right side has the address bar, the folder/file list and the action buttons.
 */
export function FolderPicker({
    initial = "", mode = "folder", multiple = false, extensions, inline = false, places: suppliedPlaces,
    onCancel, onSelect,
}: FolderPickerProps) {
    const t = useTranslation();
    const isFileMode = mode === "file";
    const [path, setPath] = useState(initial);
    const [draft, setDraft] = useState(initial);
    const [listing, setListing] = useState<DirectoryListing | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selected, setSelected] = useState<Set<string>>(() => new Set());
    const [places, setPlaces] = useState<Place[]>(suppliedPlaces ?? []);
    const [drives, setDrives] = useState<Drive[]>([]);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        if (suppliedPlaces) {
            setPlaces(suppliedPlaces);
            return;
        }

        void listPlaces().then(setPlaces, () => setPlaces([]));
    }, [suppliedPlaces]);

    useEffect(() => {
        void listDrives().then(setDrives, () => setDrives([]));
    }, []);

    useEffect(() => {
        let alive = true;
        setLoading(true);
        setError(null);
        setSelected(new Set());

        void listDirectory(path || undefined, false).then(
            (result) => {
                if (!alive) return;
                setListing(result);
                setPath(result.path);
                setDraft(result.path);
                setLoading(false);
            },
            (cause) => {
                if (!alive) return;
                setError(cause instanceof Error ? cause.message : String(cause));
                setLoading(false);
            },
        );

        return () => {
            alive = false;
        };
    }, [path]);

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") onCancel();
            if (event.key === "Enter" && selected.size > 0) choose();
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    });

    const navigate = (target: string) => {
        const next = target.trim();
        if (next.length > 0) setPath(next);
    };

    const currentFolder = listing?.path ?? path;
    const parent = listing?.parent ?? (path ? parentPath(path) : null);
    const folders = listing?.entries.filter((entry: FileEntry) => entry.isDirectory) ?? [];
    const files = isFileMode
        ? (listing?.entries ?? []).filter((entry: FileEntry) => !entry.isDirectory && (
            !extensions?.length
            || extensions.some((extension) => entry.name.toLowerCase().endsWith(extension.toLowerCase()))
        ))
        : [];

    const choose = () => {
        if (loading || error) return;

        // A single pick still uses the checkbox column, but only the first ticked row is returned.
        const picked = multiple ? [...selected] : [...selected].slice(0, 1);

        if (isFileMode) {
            if (picked.length > 0) onSelect(picked);
            return;
        }

        if (picked.length > 0) {
            onSelect(picked);
            return;
        }

        onSelect(currentFolder ? [currentFolder] : []);
    };

    const selectable = [...folders, ...files];
    const allSelected = selectable.length > 0 && selectable.every((entry) => selected.has(entry.fullPath));
    const someSelected = !allSelected && selectable.some((entry) => selected.has(entry.fullPath));

    const toggleAll = () => {
        if (allSelected) {
            setSelected(new Set());
            return;
        }

        setSelected(new Set(selectable.map((entry) => entry.fullPath)));
    };

    const toggle = (entry: FileEntry) => {
        if (multiple) {
            setSelected((current) => {
                const next = new Set(current);
                if (!next.delete(entry.fullPath)) next.add(entry.fullPath);
                return next;
            });
            return;
        }

        setSelected(new Set([entry.fullPath]));
    };

    const open = (entry: FileEntry) => {
        if (entry.isDirectory) {
            setSelected(new Set());
            navigate(entry.fullPath);
            return;
        }

        setSelected(new Set([entry.fullPath]));
        if (!multiple) onSelect([entry.fullPath]);
    };

    const row = (entry: FileEntry) => {
        const checked = selected.has(entry.fullPath);

        return (
            <Row
                $checked={checked}
                key={entry.fullPath}
                onClick={() => toggle(entry)}
                onDoubleClick={() => open(entry)}
                title={entry.fullPath}
                type="button"
            >
                <CheckBox $checked={checked}>
                    {checked && <CheckIcon size={9}/>}
                </CheckBox>
                <PathIcon isDirectory={entry.isDirectory} name={entry.name} path={entry.fullPath} size={18}/>
                <NameCell>{entry.name}</NameCell>
                <TypeCell>{entry.isDirectory ? t("Folder") : baseName(entry.name).includes(".") ? baseName(entry.name).split(".").at(-1)!.toUpperCase() : t("File")}</TypeCell>
                <SizeCell>{entry.isDirectory ? "—" : formatBytes(entry.size)}</SizeCell>
                <DateCell>{formatDate(entry.modified)}</DateCell>
            </Row>
        );
    };

    const card = (
        <Card $inline={inline} role="dialog" aria-modal={!inline}>
            {!inline && (
                <Header>
                    <Title>
                        <FolderIcon size={16}/>
                        {isFileMode ? t("Choose a file") : t("Choose a folder")}
                    </Title>
                    <CloseButton onClick={onCancel} title={t("Cancel")} type="button">
                        <CrossIcon size={12}/>
                    </CloseButton>
                </Header>
            )}

            <Body>
                <Sidebar $collapsed={collapsed}>
                    <SidebarHead $collapsed={collapsed}>
                        {!collapsed && <SectionTitle $first>{t("Quick access")}</SectionTitle>}
                        <CollapseButton
                            onClick={() => setCollapsed((value) => !value)}
                            title={collapsed ? t("Expand sidebar") : t("Collapse sidebar")}
                            type="button"
                        >
                            <ChevronRightIcon
                                size={12}
                                style={{transform: collapsed ? "none" : "rotate(180deg)"}}
                            />
                        </CollapseButton>
                    </SidebarHead>
                    {places.map((place) => (
                        <SideItem
                            $active={currentFolder === place.path}
                            $collapsed={collapsed}
                            key={place.path}
                            onClick={() => navigate(place.path)}
                            title={place.path}
                            type="button"
                        >
                            <SideGlyph><PlaceIcon place={place} size={15}/></SideGlyph>
                            {!collapsed && <SideName>{place.name}</SideName>}
                        </SideItem>
                    ))}
                    {drives.length > 0 && !collapsed && <SectionTitle>{t("Drives")}</SectionTitle>}
                    {drives.map((drive) => (
                        <SideItem
                            $active={currentFolder === drive.name}
                            $collapsed={collapsed}
                            key={drive.name}
                            onClick={() => navigate(drive.name)}
                            title={drive.name}
                            type="button"
                        >
                            <SideGlyph><DriveIcon size={15}/></SideGlyph>
                            {!collapsed && <SideName>{drive.label || drive.name}</SideName>}
                        </SideItem>
                    ))}
                </Sidebar>

                <Main>
                    <PathRow>
                        <IconButton
                            $disabled={!parent}
                            onClick={() => parent && navigate(parent)}
                            title={t("Up one level")}
                            type="button"
                        >
                            <ArrowUpIcon size={14}/>
                        </IconButton>
                        <PathInput
                            onChange={(event) => setDraft(event.target.value)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") navigate(draft);
                            }}
                            spellCheck={false}
                            value={draft}
                        />
                        <IconButton onClick={() => navigate(draft)} title={t("Refresh")} type="button">
                            <RefreshIcon size={14}/>
                        </IconButton>
                    </PathRow>

                    <List>
                        <HeadRow>
                            <HeadCheck
                                aria-label={t("Select all")}
                                onClick={toggleAll}
                                title={t("Select all")}
                                type="button"
                            >
                                <CheckBox $checked={allSelected} $mixed={someSelected}>
                                    {allSelected && <CheckIcon size={9}/>}
                                </CheckBox>
                            </HeadCheck>
                            <span/>
                            <span>{t("Name")}</span>
                            <span>{t("Type")}</span>
                            <span>{t("Size")}</span>
                            <span>{t("Modified")}</span>
                        </HeadRow>

                        {loading && <Notice>{t("Working…")}</Notice>}
                        {!loading && error && <Notice $error>{error}</Notice>}
                        {!loading && !error && folders.length === 0 && files.length === 0 && (
                            <Notice>{t("This folder is empty.")}</Notice>
                        )}
                        {!loading && !error && folders.map(row)}
                        {!loading && !error && files.map(row)}
                    </List>

                    <Footer>
                        <SelectedPath>
                            {selected.size > 0
                                ? selected.size === 1 ? [...selected][0] : t("{count} selected", {count: selected.size})
                                : currentFolder || t("Home")}
                        </SelectedPath>
                        <FooterActions>
                            <Button onClick={onCancel} type="button">{t("Cancel")}</Button>
                            <Button
                                $primary
                                disabled={loading || error !== null || (isFileMode && selected.size === 0)}
                                onClick={choose}
                                type="button"
                            >
                                <CheckIcon size={12}/>
                                {isFileMode ? t("Select this file") : t("Select this folder")}
                            </Button>
                        </FooterActions>
                    </Footer>
                </Main>
            </Body>
        </Card>
    );

    if (inline)
        return card;

    return createPortal(
        <Overlay onPointerDown={(event) => {
            if (event.target === event.currentTarget) onCancel();
        }}>
            {card}
        </Overlay>,
        document.body,
    );
}

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${fadeInStyle}
`;

const Card = styled.div<{ $inline: boolean }>`
    display: flex;
    flex-direction: column;
    width: ${({$inline}) => $inline ? "100%" : "min(1040px, 100%)"};
    height: ${({$inline}) => $inline ? "100%" : "min(720px, 90vh)"};
    overflow: hidden;
    ${({$inline}) => $inline ? "" : elevatedPanel}
    ${({$inline}) => $inline ? "" : popInStyle}
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`;

const Title = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`;

const CloseButton = styled.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const Body = styled.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;

const Sidebar = styled.nav<{ $collapsed: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: ${({$collapsed}) => $collapsed ? "52px" : "232px"};
    flex-shrink: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: ${({$collapsed}) => $collapsed ? "10px 6px 14px" : "10px 10px 14px"};
    border-right: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.55);
    scrollbar-width: none;
    transition: width 150ms ease, padding 150ms ease;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

const SidebarHead = styled.div<{ $collapsed: boolean }>`
    display: flex;
    align-items: center;
    justify-content: ${({$collapsed}) => $collapsed ? "center" : "space-between"};
    gap: 4px;
    min-height: 30px;
`;

const CollapseButton = styled.button`
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.08);
        color: var(--text-primary);
    }
`;

const SectionTitle = styled.div<{ $first?: boolean }>`
    padding: ${({$first}) => $first ? "0 8px" : "10px 8px 5px"};
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`;

const SideGlyph = styled.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border-radius: 7px;
    background: rgba(var(--accent-secondary-rgb), 0.16);
    color: var(--accent-primary);
`;

const SideItem = styled.button<{ $active: boolean; $collapsed: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: ${({$collapsed}) => $collapsed ? "center" : "flex-start"};
    gap: 10px;
    width: 100%;
    padding: ${({$collapsed}) => $collapsed ? "6px 4px" : "6px 8px"};
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: ${({$active}) => $active ? "rgba(var(--accent-rgb), 0.12)" : "transparent"};
    color: ${({$active}) => $active ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 12.5px;
    text-align: left;
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &::before {
        content: "";
        position: absolute;
        left: -1px;
        top: 50%;
        width: 2px;
        height: ${({$active}) => $active ? "56%" : 0};
        border-radius: 2px;
        background: var(--accent-primary);
        transform: translateY(-50%);
        transition: height 160ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    &:hover {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.08);
        color: var(--text-primary);
    }

    &:active {
        transform: scale(0.99);
    }
`;

const SideName = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Main = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`;

const PathRow = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 9px 12px;
    border-bottom: 1px solid var(--border-color);
`;

const PathInput = styled.input`
    flex: 1;
    min-width: 0;
    height: 30px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 12px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`;

const IconButton = styled.button<{ $disabled?: boolean }>`
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: ${({$disabled}) => $disabled ? "default" : "pointer"};
    opacity: ${({$disabled}) => $disabled ? 0.35 : 1};

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const List = styled.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 4px 8px 10px;
`;

const Columns = "18px 24px minmax(0, 1.4fr) 90px 90px 140px";

const HeadRow = styled.div`
    display: grid;
    grid-template-columns: ${Columns};
    gap: 10px;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
`;

const Row = styled.button<{ $checked: boolean }>`
    display: grid;
    grid-template-columns: ${Columns};
    gap: 10px;
    align-items: center;
    width: 100%;
    padding: 6px 8px;
    border: 1px solid ${({$checked}) => $checked ? "rgba(var(--accent-rgb), 0.38)" : "transparent"};
    border-radius: var(--radius-sm);
    background: ${({$checked}) => $checked ? "rgba(var(--accent-rgb), 0.1)" : "transparent"};
    color: ${({$checked}) => $checked ? "var(--text-primary)" : "var(--text-secondary)"};
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: default;
    user-select: none;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const HeadCheck = styled.button`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
`;

const CheckBox = styled.span<{ $checked: boolean; $mixed?: boolean }>`
    position: relative;
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked, $mixed}) => $checked || $mixed ? "var(--border-color-focus)" : "var(--border-color-hover)"};
    border-radius: 4px;
    background: ${({$checked, $mixed}) => $checked || $mixed ? "var(--accent-primary)" : "transparent"};
    color: #fff;

    &::after {
        content: "";
        position: absolute;
        width: 7px;
        height: 2px;
        border-radius: 1px;
        background: #fff;
        opacity: ${({$mixed}) => $mixed ? 1 : 0};
    }
`;

const NameCell = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const TypeCell = styled.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const SizeCell = styled.span`
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-align: right;
`;

const DateCell = styled.span`
    color: var(--text-muted);
    font-size: 10px;
    white-space: nowrap;
`;

const Notice = styled.p<{ $error?: boolean }>`
    padding: 18px;
    color: ${({$error}) => $error ? "#fca5a5" : "var(--text-muted)"};
    font-size: 11px;
    text-align: center;
`;

const Footer = styled.footer`
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: space-between;
    padding: 10px 14px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`;

const SelectedPath = styled.span`
    min-width: 0;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const FooterActions = styled.span`
    display: flex;
    gap: 7px;
    flex-shrink: 0;
`;

const Button = styled.button<{ $primary?: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 7px 12px;
    border: 1px solid ${({$primary}) => $primary ? "transparent" : "var(--border-color)"};
    border-radius: var(--radius-sm);
    background: ${({$primary}) => $primary ? "var(--accent-gradient)" : "transparent"};
    color: ${({$primary}) => $primary ? "#fff" : "var(--text-secondary)"};
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: ${({$primary}) => $primary ? "transparent" : "var(--border-color-hover)"};
        color: ${({$primary}) => $primary ? "#fff" : "var(--text-primary)"};
        filter: ${({$primary}) => $primary ? "brightness(1.08)" : "none"};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;
