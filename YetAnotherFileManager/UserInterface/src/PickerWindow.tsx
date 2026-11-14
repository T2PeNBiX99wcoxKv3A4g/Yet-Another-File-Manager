import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Native, ResizeHandles, useTheme, useWindowDrag, useTranslation} from "@photino-net-utils/bridge";
import {type AppSettings, getSettings} from "./api/settings";
import {DefaultViewDefaults, type DirectoryView, type ResolvedView} from "./api/files";
import {type ProtectedPrompt, setProtectedAsker} from "./api/safety";
import {showMessage} from "./api/dialogs";
import {inspectPaths} from "./api/operations";
import {applyTheme, normalizeThemeMode} from "./theme";
import {FolderPicker} from "./components/FolderPicker";
import {ViewMenu} from "./components/ViewMenu";
import {ProtectedDeleteDialog} from "./components/ProtectedDeleteDialog";
import {MessageDialog} from "./components/MessageDialog";
import {ConfirmDialog} from "./components/ConfirmDialog";
import {AppIcon, CrossIcon} from "./components/Icons";

interface PickerWindowProps {
    mode: "folder" | "file";
    /** Save mode returns the path the user typed, which does not have to exist yet. */
    save?: boolean;
    multiple: boolean;
    extensions: string[];
    initial: string;
    initialName?: string;
    defaultExtension?: string;
}

/**
 * The <c>--pick-folder</c> / <c>--pick-file</c> window. It is the same picker the app shows in a
 * modal, drawn as the whole window so a script can use it like the shell dialogs.
 */
export function PickerWindow({mode, save = false, multiple, extensions, initial, initialName = "",
                             defaultExtension = ""}: PickerWindowProps) {
    const t = useTranslation();
    const drag = useWindowDrag();
    const [settings, setSettings] = useState<AppSettings | null>(null);
    const [directory, setDirectory] = useState(initial);
    const [saveName, setSaveName] = useState(initialName);
    const [overwrite, setOverwrite] = useState<string | null>(null);
    const theme = useTheme(normalizeThemeMode(settings?.themeMode));
    // The picker's view is a session choice; it starts from the app defaults and is not saved.
    const [viewOverrides, setViewOverrides] = useState<Partial<DirectoryView>>({});
    const [columns, setColumns] = useState<string[] | null>(null);
    const [showImages, setShowImages] = useState<boolean | null>(null);
    const [protectedDelete, setProtectedDelete] = useState<{
        id: number;
        prompt: ProtectedPrompt;
        resolve: (allowed: boolean) => void;
    } | null>(null);
    const protectedDeleteId = useRef(0);

    useEffect(() => {
        // The recovery watcher reloads a page that never reports its first render, which used to
        // reset the picker to its starting folder after twenty seconds.
        Native.send({type: "app.ready"});
    }, []);

    useEffect(() => {
        setProtectedAsker((prompt) => new Promise<boolean>((resolve) => {
            setProtectedDelete({id: ++protectedDeleteId.current, prompt, resolve});
        }));

        return () => setProtectedAsker(null);
    }, []);

    useEffect(() => {
        void getSettings().then(setSettings, () => undefined);
    }, []);

    useEffect(() => {
        applyTheme(settings?.accentColor, settings?.secondaryColor, theme);
    }, [settings?.accentColor, settings?.secondaryColor, theme]);

    const viewDefaults = settings?.defaultView ?? DefaultViewDefaults;
    const view: ResolvedView = {
        mode: viewOverrides.mode ?? viewDefaults.mode,
        iconSize: viewOverrides.iconSize ?? viewDefaults.iconSize,
        gridSize: viewOverrides.gridSize ?? viewDefaults.gridSize,
        sort: "name",
        sortDescending: false,
        columns: columns ?? viewDefaults.columns ?? ["type", "size", "modified"],
    };
    const changeView = (change: Partial<DirectoryView>) =>
        setViewOverrides((current) => ({...current, ...change}));

    /** Joins the current folder and the typed name, then reports the path to the host. */
    const submitSave = async () => {
        const name = saveName.trim();

        if (name.length === 0 || name === "." || name === ".." || /[<>:"/\\|?*\u0000-\u001F]/.test(name)) {
            await showMessage(t("the_file_name_is_not_valid"));
            return;
        }

        const suffix = defaultExtension.length > 0 && !/\.[^.]*$/.test(name)
            ? defaultExtension.startsWith(".") ? defaultExtension : `.${defaultExtension}`
            : "";
        const separator = directory.includes("\\") ? "\\" : "/";
        const target = /[\\/]$/.test(directory)
            ? `${directory}${name}${suffix}`
            : `${directory}${separator}${name}${suffix}`;

        // Ask before replacing an existing file, like the system dialog does.
        const existing = await inspectPaths([target]).then((entries) => entries[0]?.exists ?? false,
            () => false);

        if (existing) {
            setOverwrite(target);
            return;
        }

        Native.send({type: "pick.submit", payload: {paths: [target]}});
    };

    return (
        <Host>
            <Bar>
                <Mark><AppIcon size={17}/></Mark>
                {/* Only the title drags; a bar-wide handler would swallow the view menu's clicks. */}
                <BarTitle {...drag}>{save ? t("save_as") : mode === "file" ? t("choose_a_file") : t("choose_a_folder")}</BarTitle>
                <ViewMenu
                    onChange={changeView}
                    onColumns={setColumns}
                    onShowImages={setShowImages}
                    showImages={showImages ?? viewDefaults.showImages}
                    view={view}
                />
                <CloseArea>
                    <Close
                        onClick={() => Native.send({type: "pick.cancel"})}
                        onMouseDown={(event) => event.stopPropagation()}
                        title={t("cancel")}
                        type="button"
                    >
                        <CrossIcon size={12}/>
                    </Close>
                </CloseArea>
            </Bar>

            <Content>
                <FolderPicker
                    extensions={extensions}
                    initial={initial}
                    inline
                    mode={mode}
                    multiple={multiple}
                    onCancel={() => Native.send({type: "pick.cancel"})}
                    onDirectoryChange={setDirectory}
                    onSelect={(paths) => Native.send({type: "pick.submit", payload: {paths}})}
                    showImages={showImages ?? viewDefaults.showImages}
                    fileView={view}
                    theme={theme}
                />
            </Content>

            {save && (
                <SaveBar>
                    <SaveInput
                        aria-label={t("file_name")}
                        autoFocus
                        onChange={(event) => setSaveName(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") void submitSave();
                        }}
                        placeholder={t("file_name")}
                        spellCheck={false}
                        value={saveName}
                    />
                    <SaveButton onClick={() => void submitSave()} type="button">
                        {t("save_as")}
                    </SaveButton>
                </SaveBar>
            )}

            {protectedDelete && (
                <ProtectedDeleteDialog
                    action={protectedDelete.prompt.action}
                    delaySeconds={protectedDelete.prompt.delaySeconds}
                    hits={protectedDelete.prompt.hits}
                    key={protectedDelete.id}
                    onCancel={() => {
                        protectedDelete.resolve(false);
                        setProtectedDelete(null);
                    }}
                    onConfirm={() => {
                        protectedDelete.resolve(true);
                        setProtectedDelete(null);
                    }}
                    permanent={protectedDelete.prompt.permanent}
                />
            )}

            <MessageDialog/>
            <ConfirmDialog
                confirmLabel={t("overwrite")}
                message={t("a_file_with_that_name_already_exists_overwrite_it")}
                onCancel={() => setOverwrite(null)}
                onConfirm={() => {
                    const path = overwrite;
                    setOverwrite(null);
                    if (path) Native.send({type: "pick.submit", payload: {paths: [path]}});
                }}
                open={overwrite !== null}
                title={t("overwrite")}
            />
            <ResizeHandles/>
        </Host>
    );
}

const Host = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`;

const Bar = styled.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`;

const Mark = styled.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`;

const BarTitle = styled.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const CloseArea = styled.div`
    display: flex;
    flex-shrink: 0;
`;

const Close = styled.button`
    display: grid;
    place-items: center;
    width: 46px;
    height: 44px;
    border: 0;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 100ms ease, color 100ms ease;

    &:hover {
        background: #e81123;
        color: #fff;
    }
`;

const Content = styled.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;

/** The save row: the typed name and the button that writes it back to the caller. */
const SaveBar = styled.footer`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    padding: 10px 12px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.96);
`;

const SaveInput = styled.input`
    flex: 1;
    min-width: 0;
    height: 32px;
    padding: 0 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;

    &:focus {
        border-color: var(--border-color-focus);
        outline: 0;
    }
`;

const SaveButton = styled.button`
    height: 32px;
    padding: 0 16px;
    border: 0;
    border-radius: var(--radius-md);
    background: var(--accent-gradient);
    color: #fff;
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`;
