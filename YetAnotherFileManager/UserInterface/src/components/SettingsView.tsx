import {useEffect, useState} from "react";
import styled from "styled-components";
import {getVisibility, type FileVisibility} from "../api/files";
import {clearIconCache} from "../api/icons";
import {getSettings, saveSettings, type AppSettings} from "../api/settings";
import type {AppInfo} from "../api/system";

interface SettingsViewProps {
    appInfo: AppInfo | null;
}

export function SettingsView({appInfo}: SettingsViewProps) {
    const [visibility, setVisibility] = useState<FileVisibility | null>(null);
    const [settings, setSettings] = useState<AppSettings | null>(null);

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
                            title="Toggle system icons"
                            type="button"
                        >
                            <Knob/>
                        </Toggle>
                    </Row>
                    <Row>
                        <RowText>
                            <Label>Use custom folder icons</Label>
                            <Note>Folders that define an icon (desktop.ini) show it instead of the plain folder.</Note>
                        </RowText>
                        <Toggle
                            $on={settings?.customFolderIcons ?? false}
                            disabled={!settings || !settings.systemIcons}
                            onClick={() => void update({customFolderIcons: !settings?.customFolderIcons})}
                            title="Toggle custom folder icons"
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

const Page = styled.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 26px 26px 34px;
    max-width: 780px;
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

const Footnote = styled.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`;
