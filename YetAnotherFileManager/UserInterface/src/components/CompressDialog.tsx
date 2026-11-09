import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";
import {useTranslation} from "@photino-net-utils/bridge";
import type {CompressOptions} from "../api/operations";
import {requestFolder} from "../folder-picker";
import {fadeInStyle, popInStyle} from "../ui/motion";
import {SelectMenu} from "./SelectMenu";

const Formats: { value: CompressOptions["format"]; label: string; extension: string; level: boolean }[] = [
    {value: "zip", label: "ZIP archive", extension: ".zip", level: true},
    {value: "zipx", label: "ZIPX archive", extension: ".zipx", level: true},
    {value: "7z", label: "7z archive (LZMA2)", extension: ".7z", level: false},
    {value: "tar", label: "TAR archive", extension: ".tar", level: false},
    {value: "tar.gz", label: "TAR + GZip", extension: ".tar.gz", level: true},
    {value: "tar.bz2", label: "TAR + BZip2", extension: ".tar.bz2", level: false},
];

const Methods = [
    {value: "default", label: "Automatic"},
    {value: "store", label: "Store (no compression)"},
    {value: "deflate", label: "Deflate"},
    {value: "deflate64", label: "Deflate64"},
    {value: "bzip2", label: "BZip2"},
    {value: "lzma", label: "LZMA"},
    {value: "xz", label: "XZ"},
    {value: "ppmd", label: "PPMd"},
];

const Encryptions = [
    {value: "none", label: "None"},
    {value: "zipcrypto", label: "ZipCrypto"},
    {value: "aes128", label: "AES-128"},
    {value: "aes192", label: "AES-192"},
    {value: "aes256", label: "AES-256"},
];

const Splits = [
    {value: "0", label: "No split"},
    {value: String(10 * 1024 * 1024), label: "10 MB"},
    {value: String(50 * 1024 * 1024), label: "50 MB"},
    {value: String(100 * 1024 * 1024), label: "100 MB"},
    {value: String(500 * 1024 * 1024), label: "500 MB"},
    {value: String(1024 * 1024 * 1024), label: "1 GB"},
    {value: String(2 * 1024 * 1024 * 1024), label: "2 GB"},
];

const Levels = [
    {value: "0", label: "Store (no compression)"},
    {value: "1", label: "Fastest"},
    {value: "5", label: "Normal"},
    {value: "9", label: "Maximum"},
    {value: "-1", label: "Automatic"},
];

export function CompressDialog({initialDirectory, initialName, onCancel, onCompress}: {
    initialDirectory: string;
    initialName: string;
    onCancel: () => void;
    onCompress: (options: CompressOptions) => Promise<boolean>;
}) {
    const t = useTranslation();
    const nameInput = useRef<HTMLInputElement | null>(null);
    const [directory, setDirectory] = useState(initialDirectory);
    const [name, setName] = useState(initialName);
    const [format, setFormat] = useState<CompressOptions["format"]>("zip");
    const [level, setLevel] = useState("5");
    const [method, setMethod] = useState("default");
    const [encryption, setEncryption] = useState("none");
    const [password, setPassword] = useState("");
    const [split, setSplit] = useState("0");
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        nameInput.current?.focus();
        nameInput.current?.select();

        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                event.stopPropagation();
                onCancel();
            } else if (event.key !== "Tab") {
                event.stopPropagation();
            }
        };

        window.addEventListener("keydown", onKey, true);
        return () => window.removeEventListener("keydown", onKey, true);
    }, [onCancel]);

    const chosenFormat = Formats.find((item) => item.value === format) ?? Formats[0];
    const zipFormat = format === "zip" || format === "zipx";
    const encrypted = encryption !== "none";
    const canEncrypt = zipFormat || format === "7z";
    const canSplit = format === "zip" || format === "7z";
    const submit = async () => {
        if (busy || !name.trim() || !directory) return;
        if (encrypted && password.length === 0) return;
        setBusy(true);
        const ok = await onCompress({
            directory,
            name: name.trim(),
            format,
            level: chosenFormat.level ? Number(level) : 0,
            method: zipFormat ? method : format === "7z" ? null : null,
            encryption: canEncrypt ? encryption : "none",
            password: encrypted ? password : undefined,
            splitSize: canSplit ? Number(split) : 0,
        });
        setBusy(false);
        if (ok) onCancel();
    };

    return createPortal(
        <Overlay onPointerDown={(event) => {
            if (event.target === event.currentTarget && !busy) onCancel();
        }}>
            <Card aria-modal="true" role="dialog">
                <Title>{t("Compress to…")}</Title>
                <Field>
                    <Label>{t("Archive name")}</Label>
                    <NameInput
                        onChange={(event) => setName(event.target.value)}
                        ref={nameInput}
                        value={name}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") void submit();
                        }}
                    />
                    <Extension>{chosenFormat.extension}</Extension>
                </Field>
                <Field>
                    <Label>{t("Format")}</Label>
                    <SelectMenu
                        onChange={(value) => setFormat(value as CompressOptions["format"])}
                        options={Formats.map((item) => ({value: item.value, label: t(item.label)}))}
                        value={format}
                        width={236}
                        zIndex={3700}
                    />
                </Field>
                <Field>
                    <Label>{t("Method")}</Label>
                    <SelectMenu
                        disabled={!zipFormat}
                        onChange={setMethod}
                        options={Methods.map((item) => ({...item, label: t(item.label)}))}
                        value={zipFormat ? method : "default"}
                        width={236}
                        zIndex={3700}
                    />
                </Field>
                <Field>
                    <Label>{t("Encryption")}</Label>
                    <SelectMenu
                        disabled={!canEncrypt}
                        onChange={(value) => {
                            setEncryption(value);
                            if (value === "none") setPassword("");
                        }}
                        options={Encryptions.map((item) => ({...item, label: t(item.label)}))}
                        value={canEncrypt ? encryption : "none"}
                        width={236}
                        zIndex={3700}
                    />
                </Field>
                {encrypted && (
                    <Field>
                        <Label>{t("Password")}</Label>
                        <NameInput
                            autoFocus
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            value={password}
                        />
                    </Field>
                )}
                <Field>
                    <Label>{t("Split volumes")}</Label>
                    <SelectMenu
                        disabled={!canSplit}
                        onChange={setSplit}
                        options={Splits.map((item) => ({...item, label: t(item.label)}))}
                        value={canSplit ? split : "0"}
                        width={236}
                        zIndex={3700}
                    />
                </Field>
                <Field>
                    <Label>{t("Compression level")}</Label>
                    <SelectMenu
                        disabled={!chosenFormat.level}
                        onChange={setLevel}
                        options={Levels.map((item) => ({...item, label: t(item.label)}))}
                        value={chosenFormat.level ? level : format === "tar" ? "0" : "-1"}
                        width={236}
                        zIndex={3700}
                    />
                </Field>
                <Field $stack>
                    <Label>{t("Destination")}</Label>
                    <DestinationRow>
                        <Path title={directory}>{directory}</Path>
                        <Button disabled={busy} onClick={() => void requestFolder(directory).then((value) => {
                            if (value) setDirectory(value);
                        })} type="button">{t("Choose folder…")}</Button>
                    </DestinationRow>
                </Field>
                <Actions>
                    <Button disabled={busy} onClick={onCancel} type="button">{t("Cancel")}</Button>
                    <Primary disabled={busy || !name.trim() || (encrypted && password.length === 0)}
                             onClick={() => void submit()} type="button">
                        {busy ? t("Compressing…") : t("Compress")}
                    </Primary>
                </Actions>
            </Card>
        </Overlay>,
        document.body,
    );
}

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${fadeInStyle}
`;

const Card = styled.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${popInStyle}
`;

const Title = styled.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`;

const Field = styled.div<{ $stack?: boolean }>`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack}) => $stack && "display: block;"}
`;

const Label = styled.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`;

const NameInput = styled.input`
    min-width: 0;
    flex: 1;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    outline: none;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;

    &:focus {
        border-color: var(--border-color-focus);
    }
`;

const Extension = styled.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`;

const DestinationRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`;

const Path = styled.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`;

const Button = styled.button`
    min-height: 32px;
    padding: 0 11px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;

const Primary = styled(Button)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;
