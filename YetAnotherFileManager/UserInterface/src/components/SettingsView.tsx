import {useEffect, useState} from "react";
import styled from "styled-components";
import {getVisibility, type FileVisibility} from "../api/files";
import {clearIconCache, useIconFile} from "../api/icons";
import {
    getSettings,
    pickFolder,
    pickIconFile,
    saveSettings,
    setEntryIcon,
    type AppSettings,
} from "../api/settings";
import type {AppInfo} from "../api/system";
import {CheckIcon, CrossIcon, FolderIcon, PlusIcon} from "./Icons";
import {BuiltinIcon, builtinIcons} from "../icons/fileTypes";
import {baseName} from "../utils/format";

interface SettingsViewProps {
    appInfo: AppInfo | null;
}

export function SettingsView({appInfo}: SettingsViewProps) {
    const [visibility, setVisibility] = useState<FileVisibility | null>(null);
    const [settings, setSettings] = useState<AppSettings | null>(null);
    const [folderIcon, setFolderIcon] = useState<{ folder: string; icon: string } | null>(null);
    const [newExtension, setNewExtension] = useState("");
    const [newIcon, setNewIcon] = useState<string>("file");
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        void getVisibility().then(setVisibility, () => setVisibility(null));
        void getSettings().then(setSettings, () => setSettings(null));
    }, []);

    const update = async (patch: Partial<AppSettings>) => {
        if (!settings) return;

        const next = {...settings, ...patch};
        setSettings(next);
        clearIconCache();
        setSettings(await saveSettings(next));
    };

    const setOverride = async (extension: string, source: string | null) => {
        if (!settings) return;

        const icons = {...settings.extensionIcons};

        if (source === null)
            delete icons[extension];
        else
            icons[extension] = source;

        await update({extensionIcons: icons});
    };

    const addRule = async () => {
        const extension = newExtension.trim().toLowerCase();

        if (!extension || !extension.startsWith(".") || extension.length < 2)
            return;

        await setOverride(extension, newIcon);
        setNewExtension("");
    };

    const pickCustomIcon = async () => {
        const path = await pickIconFile();

        if (path)
            setNewIcon(`file:${path}`);
    };

    const assignFolderIcon = async () => {
        setBusy(true);

        try {
            const folder = await pickFolder();
            if (!folder) return;

            const icon = await pickIconFile();
            if (!icon) return;

            const parent = folder.replace(/[\\/][^\\/]+$/, "");
            const name = baseName(folder);
            const source = `file:${icon}`;

            if (await setEntryIcon(parent, name, source)) {
                clearIconCache();
                setFolderIcon({folder, icon});
            }
        } finally {
            setBusy(false);
        }
    };

    return (
        <Page>
            <Section>
                <Title>Application</Title>
                <Rows>
                    <Row>
                        <Label>Version</Label>
                        <Value>{appInfo ? `v${appInfo.version}` : "—"}</Value>
                    </Row>
                    <Row>
                        <Label>Platform</Label>
                        <Value>{appInfo?.platform ?? "—"}</Value>
                    </Row>
                </Rows>
            </Section>

            <Section>
                <Title>Icons</Title>
                <Rows>
                    <Row>
                        <RowText>
                            <Label>Use system file icons</Label>
                            <Note>Ask the shell for the icon of each file type instead of the built-in glyphs.</Note>
                        </RowText>
                        <Toggle
                            $on={settings?.systemIcons ?? false}
                            disabled={!settings}
                            onClick={() => void update({systemIcons: !settings?.systemIcons})}
                            type="button"
                        >
                            <Knob/>
                        </Toggle>
                    </Row>
                    <Row>
                        <RowText>
                            <Label>Use custom folder icons</Label>
                            <Note>
                                Folders that define an icon (desktop.ini) keep showing it even when system
                                icons are off.
                            </Note>
                        </RowText>
                        <Toggle
                            $on={settings?.customFolderIcons ?? false}
                            disabled={!settings}
                            onClick={() => void update({customFolderIcons: !settings?.customFolderIcons})}
                            type="button"
                        >
                            <Knob/>
                        </Toggle>
                    </Row>
                </Rows>
            </Section>

            <Section>
                <Title>Icons by extension</Title>
                <Rows>
                    {Object.entries(settings?.extensionIcons ?? {})
                        .sort(([left], [right]) => left.localeCompare(right))
                        .map(([extension, source]) => (
                            <Row key={extension}>
                                <RowText>
                                    <Label>{extension}</Label>
                                    <Note>{describeSource(source)}</Note>
                                </RowText>
                                <RowEnd>
                                    <Preview source={source}/>
                                    <IconButton
                                        onClick={() => void setOverride(extension, null)}
                                        title="Remove this rule"
                                        type="button"
                                    >
                                        <CrossIcon size={12}/>
                                    </IconButton>
                                </RowEnd>
                            </Row>
                        ))}

                    <Row>
                        <RowText>
                            <Label>Add a rule</Label>
                            <Note>Extension and the icon to draw for it.</Note>
                        </RowText>
                        <RowEnd>
                            <Input
                                onChange={(event) => setNewExtension(event.target.value)}
                                placeholder=".psd"
                                spellCheck={false}
                                value={newExtension}
                            />
                            <Select onChange={(event) => setNewIcon(event.target.value)} value={newIcon}>
                                {newIcon.startsWith("file:") && <option value={newIcon}>Custom image</option>}
                                {builtinIcons.map((name) => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </Select>
                            <IconButton onClick={() => void pickCustomIcon()} title="Choose an image" type="button">
                                <FolderIcon size={13}/>
                            </IconButton>
                            <IconButton onClick={() => void addRule()} title="Add the rule" type="button">
                                <PlusIcon size={13}/>
                            </IconButton>
                        </RowEnd>
                    </Row>
                </Rows>
            </Section>

            <Section>
                <Title>Folder icons</Title>
                <Rows>
                    <Row>
                        <RowText>
                            <Label>Give a folder its own icon</Label>
                            <Note>
                                Stored in the folder's parent <Index>.yafm-index.db</Index>, so it stays with
                                the files.
                            </Note>
                        </RowText>
                        <RowEnd>
                            {folderIcon && <Thumb src={folderIcon.icon}/>}
                            <ActionButton disabled={busy} onClick={() => void assignFolderIcon()} type="button">
                                {busy ? "Choosing…" : "Choose folder and icon…"}
                            </ActionButton>
                        </RowEnd>
                    </Row>
                    {folderIcon && (
                        <Row>
                            <RowText>
                                <Label>{baseName(folderIcon.folder)}</Label>
                                <Note>{folderIcon.folder}</Note>
                            </RowText>
                            <RowEnd>
                                <Badge><CheckIcon size={11}/> Saved</Badge>
                            </RowEnd>
                        </Row>
                    )}
                </Rows>
            </Section>

            <Section>
                <Title>Folder index</Title>
                <Rows>
                    <Row>
                        <RowText>
                            <Label>Keep a <Index>.yafm-index.db</Index> in every folder</Label>
                            <Note>
                                Holds icons, cached folder sizes and other per-folder data. Hidden and marked
                                as a system file on Windows; skipped where the folder is read-only.
                            </Note>
                        </RowText>
                        <Toggle
                            $on={settings?.writeDirectoryIndex ?? true}
                            disabled={!settings}
                            onClick={() => void update({writeDirectoryIndex: !settings?.writeDirectoryIndex})}
                            type="button"
                        >
                            <Knob/>
                        </Toggle>
                    </Row>
                </Rows>
            </Section>

            <Section>
                <Title>Files</Title>
                <Rows>
                    <Row>
                        <Label>Hidden items</Label>
                        <Value>{describe(visibility?.showHidden)}</Value>
                    </Row>
                    <Row>
                        <Label>Protected operating system files</Label>
                        <Value>{describe(visibility?.showSystem)}</Value>
                    </Row>
                </Rows>
                <Footnote>
                    Listings follow the file manager's own settings: hidden and protected items are only
                    shown when the operating system is set to show them.
                </Footnote>
            </Section>
        </Page>
    );
}

function describe(value: boolean | undefined): string {
    if (value === undefined) return "Reading…";

    return value ? "Shown" : "Hidden";
}

function describeSource(source: string): string {
    return source.startsWith("file:") ? source.slice(5) : `built-in: ${source}`;
}

function Preview({source}: { source: string }) {
    const image = useIconFile(source.startsWith("file:") ? source.slice(5) : null);

    return (
        <PreviewSlot>
            {image ? <img alt="" height={16} src={image} width={16}/> : <BuiltinIcon name={source} size={16}/>}
        </PreviewSlot>
    );
}

function Thumb({src}: { src: string }) {
    const image = useIconFile(src);

    return <PreviewSlot>{image && <img alt="" height={18} src={image} width={18}/>}</PreviewSlot>;
}

const Page = styled.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 26px 26px 34px;
    max-width: 860px;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & + & {
        margin-top: 30px;
    }
`;

const Title = styled.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`;

const Rows = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow: hidden;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 13px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`;

const RowText = styled.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`;

const RowEnd = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`;

const Label = styled.span`
    font-size: 13px;
    color: var(--text-secondary);
`;

const Note = styled.span`
    font-size: 11px;
    color: var(--text-muted);
`;

const Value = styled.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`;

const Index = styled.code`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-secondary);
`;

const Toggle = styled.button<{ $on: boolean }>`
    position: relative;
    width: 38px;
    height: 21px;
    flex-shrink: 0;
    border: 1px solid ${({$on}) => $on ? "transparent" : "var(--border-color)"};
    border-radius: 999px;
    background: ${({$on}) => $on ? "var(--accent-gradient)" : "rgba(148, 163, 184, 0.22)"};
    cursor: pointer;
    transition: background 140ms ease, border-color 140ms ease;

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 2px;
    }

    span {
        transform: translateX(${({$on}) => $on ? "17px" : "0"});
    }
`;

const Knob = styled.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`;

const Input = styled.input`
    width: 92px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`;

const Select = styled.select`
    max-width: 130px;
    padding: 5px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
    outline: 0;
`;

const ActionButton = styled.button`
    padding: 6px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;

const IconButton = styled.button`
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;

const PreviewSlot = styled.span`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
    }
`;

const Badge = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`;

const Footnote = styled.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`;
