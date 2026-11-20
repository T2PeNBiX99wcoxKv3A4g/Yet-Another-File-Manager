import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Native, ResizeHandles, useTheme, useWindowDrag, useTranslation} from "@photino-net-utils/bridge";
import {type AppSettings, getSettings} from "./api/settings";
import {DefaultViewDefaults, type DirectoryView, type ResolvedView} from "./api/files";
import {type ProtectedPrompt, setProtectedAsker} from "./api/safety";
import {applyTheme, normalizeThemeMode} from "./theme";
import {applyRelativeTime, applyTimeFormat} from "./utils/format";
import type {PickerFileType} from "./components/FolderPicker";
import {FolderPicker} from "./components/FolderPicker";
import {ViewMenu} from "./components/ViewMenu";
import {ProtectedDeleteDialog} from "./components/ProtectedDeleteDialog";
import {MessageDialog} from "./components/MessageDialog";
import {AppIcon, CrossIcon} from "./components/Icons";

interface PickerWindowProps {
    mode: "folder" | "file";
    /** Save mode returns the path the user typed, which does not have to exist yet. */
    save?: boolean;
    multiple: boolean;
    extensions: string[];
    /** The calling dialog's file types, as the JSON the mod sent: [{label, extensions}]. */
    types?: string;
    /** Which of the types the caller had selected, counting from 1. */
    typeIndex?: number;
    initial: string;
    initialName?: string;
    defaultExtension?: string;
}

/** Reads the type list from the URL; anything unreadable simply offers no types. */
function readTypes(value: string | undefined): PickerFileType[] {
    if (!value)
        return [];

    /** Programs send "tiff" as often as ".tiff"; the picker only works with the dotted form. */
    const clean = (extension: string): string => {
        const trimmed = extension.trim().replace(/^\*+/, "");
        if (trimmed.length === 0)
            return "";
        return trimmed.startsWith(".") ? trimmed : `.${trimmed}`;
    };

    try {
        const parsed: unknown = JSON.parse(value);
        if (!Array.isArray(parsed))
            return [];

        return parsed.flatMap((item: unknown) => {
            if (typeof item !== "object" || item === null)
                return [];

            const record = item as { label?: unknown; extensions?: unknown };
            const extensions = Array.isArray(record.extensions)
                ? record.extensions
                    .filter((extension): extension is string => typeof extension === "string")
                    .map(clean)
                    .filter((extension, index, all) => extension.length > 0 && all.indexOf(extension) === index)
                : [];

            return [{
                label: typeof record.label === "string" ? record.label : "",
                extensions,
            }];
        });
    } catch {
        return [];
    }
}

/**
 * The <c>--pick-folder</c> / <c>--pick-file</c> window. It is the same picker the app shows in a
 * modal, drawn as the whole window so a script can use it like the shell dialogs.
 */
export function PickerWindow({mode, save = false, multiple, extensions, types, typeIndex = 0, initial,
                             initialName = "", defaultExtension = ""}: PickerWindowProps) {
    const t = useTranslation();
    const drag = useWindowDrag();
    const [settings, setSettings] = useState<AppSettings | null>(null);
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

    // Times in the picker's list follow the same settings as the main window.
    useEffect(() => {
        applyTimeFormat(settings?.timeFormat, settings?.timeFormatPattern);
        applyRelativeTime(settings?.relativeTime, settings?.relativeTimeWindowMinutes);
    }, [settings?.timeFormat, settings?.timeFormatPattern, settings?.relativeTime,
        settings?.relativeTimeWindowMinutes]);

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
                    types={readTypes(types)}
                    typeIndex={typeIndex}
                    initial={initial}
                    initialName={initialName}
                    defaultExtension={defaultExtension}
                    inline
                    mode={mode}
                    multiple={multiple}
                    onCancel={() => Native.send({type: "pick.cancel"})}
                    onSelect={(paths, type) => Native.send({type: "pick.submit", payload: {paths, type}})}
                    save={save}
                    showImages={showImages ?? viewDefaults.showImages}
                    fileView={view}
                    theme={theme}
                />
            </Content>

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
