import {useEffect, useState} from "react";
import styled from "styled-components";
import {getVisibility, type FileVisibility} from "../api/files";
import type {AppInfo} from "../api/system";

interface SettingsViewProps {
    appInfo: AppInfo | null;
}

export function SettingsView({appInfo}: SettingsViewProps) {
    const [visibility, setVisibility] = useState<FileVisibility | null>(null);

    useEffect(() => {
        void getVisibility().then(setVisibility, () => setVisibility(null));
    }, []);

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
                <Note>
                    Listings follow the file manager's own settings: hidden and protected items are only
                    shown when the operating system is set to show them.
                </Note>
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
    max-width: 760px;
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

const Label = styled.span`
    font-size: 13px;
    color: var(--text-secondary);
`;

const Value = styled.span`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`;

const Note = styled.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`;
