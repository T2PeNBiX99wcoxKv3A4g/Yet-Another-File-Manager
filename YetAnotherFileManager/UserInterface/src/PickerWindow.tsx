import styled from "styled-components";
import {Native, ResizeHandles, useTranslation, useWindowDrag} from "@photino-net-utils/bridge";
import {FolderPicker} from "./components/FolderPicker";
import {AppIcon, CrossIcon} from "./components/Icons";

interface PickerWindowProps {
    mode: "folder" | "file";
    multiple: boolean;
    extensions: string[];
    initial: string;
}

/**
 * The <c>--pick-folder</c> / <c>--pick-file</c> window. It is the same picker the app shows in a
 * modal, drawn as the whole window so a script can use it like the shell dialogs.
 */
export function PickerWindow({mode, multiple, extensions, initial}: PickerWindowProps) {
    const t = useTranslation();
    const drag = useWindowDrag();

    return (
        <Host>
            <Bar {...drag}>
                <Mark><AppIcon size={17}/></Mark>
                <BarTitle>{mode === "file" ? t("Choose a file") : t("Choose a folder")}</BarTitle>
                <CloseArea>
                    <Close onClick={() => Native.send({type: "pick.cancel"})} title={t("Cancel")} type="button">
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
                    onSelect={(paths) => Native.send({type: "pick.submit", payload: {paths}})}
                />
            </Content>

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
