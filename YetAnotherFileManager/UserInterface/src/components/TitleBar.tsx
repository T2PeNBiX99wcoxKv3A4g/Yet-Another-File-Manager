import {useEffect, useState} from "react";
import styled from "styled-components";
import {Native} from "@photino-net-utils/bridge";
import {FolderIcon} from "./Icons";

export function TitleBar() {
    const [maximized, setMaximized] = useState(false);

    useEffect(() => {
        if (!Native.available) return;

        return Native.on((message) => {
            if (message.type !== "window.state") return;

            const data = message.data as { maximized?: unknown };
            if (typeof data?.maximized === "boolean") setMaximized(data.maximized);
        });
    }, []);

    const send = (type: string) => Native.send({type});
    const toggleMaximize = () => send("window.toggleMaximize");

    return (
        <Bar>
            <DragArea
                onMouseDown={(event) => {
                    if (event.button === 0) send("window.drag");
                }}
            >
                <Mark><FolderIcon size={15}/></Mark>
                <Name>YetAnotherFileManager</Name>
                <Divider/>
                <Hint>files</Hint>
            </DragArea>

            <Controls>
                <ControlButton onClick={() => send("window.minimize")} title="Minimize" type="button">
                    <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M2 5h6"/></svg>
                </ControlButton>
                <ControlButton
                    onClick={toggleMaximize}
                    title={maximized ? "Restore" : "Maximize"}
                    type="button"
                >
                    {maximized
                        ? <svg viewBox="0 0 10 10" aria-hidden="true">
                            <rect height="6" width="6" x="3" y="1"/>
                            <rect height="6" width="6" x="1" y="3"/>
                        </svg>
                        : <svg viewBox="0 0 10 10" aria-hidden="true"><rect height="6" width="6" x="2" y="2"/></svg>}
                </ControlButton>
                <CloseButton onClick={() => send("window.close")} title="Close" type="button">
                    <svg viewBox="0 0 10 10" aria-hidden="true"><path d="m2 2 6 6M8 2 2 8"/></svg>
                </CloseButton>
            </Controls>
        </Bar>
    );
}

const Bar = styled.header`
    display: flex;
    align-items: stretch;
    height: 38px;
    flex-shrink: 0;
    background: rgba(7, 11, 18, 0.95);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`;

const DragArea = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
    flex: 1;
    min-width: 0;
    padding: 0 12px;
`;

const Mark = styled.span`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border-radius: 7px;
    color: #041016;
    background: var(--accent-gradient);
`;

const Name = styled.span`
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.01em;
`;

const Divider = styled.span`
    width: 1px;
    height: 12px;
    background: var(--border-color);
`;

const Hint = styled.span`
    font-family: var(--font-mono);
    font-size: 9px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`;

const Controls = styled.div`
    display: flex;
    flex-shrink: 0;
`;

const ControlButton = styled.button`
    display: grid;
    place-items: center;
    width: 46px;
    height: 100%;
    border: 0;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 100ms ease, color 100ms ease;

    svg {
        width: 10px;
        height: 10px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.2;
    }

    &:hover {
        background: rgba(148, 163, 184, 0.14);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -2px;
    }
`;

const CloseButton = styled(ControlButton)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;
