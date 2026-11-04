import {useEffect, useMemo, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";
import {listDirectory, listDrives, type DirectoryListing, type Drive, type FileEntry, type Place} from "../api/files";
import {useQuickAccess} from "../quick";
import {elevatedPanel} from "../ui/panel";
import {fadeInStyle, popInStyle} from "../ui/motion";
import {ArrowUpIcon, CheckIcon, CrossIcon, DriveIcon, FolderIcon, RefreshIcon} from "./Icons";
import {PathIcon} from "./PathIcon";
import {PlaceIcon} from "./PlaceIcon";
import {parentPath} from "../utils/format";

interface FolderPickerProps {
    initial?: string;
    onCancel: () => void;
    onSelect: (path: string) => void;
}

/**
 * A folder picker drawn by the app itself, used instead of the shell's IFileOpenDialog. It browses
 * with the same listing call as the file view and returns the folder that is on screen.
 */
export function FolderPicker({initial = "", onCancel, onSelect}: FolderPickerProps) {
    const t = useTranslation();
    const quick = useQuickAccess();
    const [path, setPath] = useState(initial);
    const [draft, setDraft] = useState(initial);
    const [listing, setListing] = useState<DirectoryListing | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [drives, setDrives] = useState<Drive[]>([]);

    const places = useMemo(
        () => Object.values(quick.places).filter((place: Place) => place.path.length > 0),
        [quick.places]
    );

    useEffect(() => {
        void listDrives().then(setDrives, () => setDrives([]));
    }, []);

    useEffect(() => {
        let alive = true;
        setLoading(true);
        setError(null);

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
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onCancel]);

    const navigate = (target: string) => {
        const next = target.trim();
        if (next.length > 0) setPath(next);
    };

    const choose = () => {
        if (!loading && !error) onSelect(listing?.path || path);
    };

    const parent = listing?.parent ?? (path ? parentPath(path) : null);
    const folders = listing?.entries.filter((entry: FileEntry) => entry.isDirectory) ?? [];

    return createPortal(
        <Overlay onPointerDown={(event) => {
            if (event.target === event.currentTarget) onCancel();
        }}>
            <Card role="dialog" aria-modal="true">
                <Header>
                    <Title>
                        <FolderIcon size={16}/>
                        {t("Choose a folder")}
                    </Title>
                    <CloseButton onClick={onCancel} title={t("Cancel")} type="button">
                        <CrossIcon size={12}/>
                    </CloseButton>
                </Header>

                <PathRow>
                    <IconButton $disabled={!parent} onClick={() => parent && navigate(parent)} title={t("Up one level")} type="button">
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

                <Shortcuts>
                    {places.map((place) => (
                        <Shortcut key={place.path} onClick={() => navigate(place.path)} title={place.path} type="button">
                            <PlaceIcon place={place} size={14}/>
                            {place.name}
                        </Shortcut>
                    ))}
                    {drives.map((drive) => (
                        <Shortcut key={drive.name} onClick={() => navigate(drive.name)} title={drive.name} type="button">
                            <DriveIcon size={14}/>
                            {drive.label || drive.name}
                        </Shortcut>
                    ))}
                </Shortcuts>

                <List>
                    {loading && <Notice>{t("Working…")}</Notice>}
                    {!loading && error && <Notice $error>{error}</Notice>}
                    {!loading && !error && folders.length === 0 && <Notice>{t("This folder is empty.")}</Notice>}
                    {!loading && !error && folders.map((entry) => (
                        <Entry
                            key={entry.fullPath}
                            onClick={() => navigate(entry.fullPath)}
                            onDoubleClick={() => navigate(entry.fullPath)}
                            title={entry.fullPath}
                            type="button"
                        >
                            <PathIcon isDirectory name={entry.name} path={entry.fullPath} size={18}/>
                            <EntryName>{entry.name}</EntryName>
                        </Entry>
                    ))}
                </List>

                <Footer>
                    <CurrentPath>{listing?.path || path || t("Home")}</CurrentPath>
                    <FooterActions>
                        <Button onClick={onCancel} type="button">{t("Cancel")}</Button>
                        <Button $primary disabled={loading || error !== null} onClick={choose} type="button">
                            <CheckIcon size={12}/>
                            {t("Select this folder")}
                        </Button>
                    </FooterActions>
                </Footer>
            </Card>
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

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: min(720px, 100%);
    height: min(580px, 86vh);
    overflow: hidden;
    ${elevatedPanel}
    ${popInStyle}
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
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
    width: 24px;
    height: 24px;
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
    height: 28px;
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
    width: 28px;
    height: 28px;
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

const Shortcuts = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border-color);
`;

const Shortcut = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    max-width: 190px;
    padding: 4px 8px;
    border: 1px solid var(--border-color);
    border-radius: 999px;
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 10px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`;

const List = styled.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 5px;
`;

const Entry = styled.button`
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    padding: 6px 8px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const EntryName = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Notice = styled.p<{ $error?: boolean }>`
    padding: 14px;
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

const CurrentPath = styled.span`
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
    padding: 6px 11px;
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
