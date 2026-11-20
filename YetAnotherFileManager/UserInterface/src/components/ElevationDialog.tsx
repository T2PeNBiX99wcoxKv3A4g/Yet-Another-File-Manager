import {useEffect, useState} from "react";
import {Native, useTranslation} from "@photino-net-utils/bridge";
import {ConfirmDialog} from "./ConfirmDialog";

interface ElevationAsk {
    token: string;
    action: string;
    path: string;
}

/**
 * Asks before an operation restarts the app with administrator rights. Windows shows its own
 * consent prompt afterwards; this one says which file was blocked and what was being done, so the
 * elevated copy never appears out of nowhere.
 */
export function ElevationDialog() {
    const t = useTranslation();
    const [ask, setAsk] = useState<ElevationAsk | null>(null);

    useEffect(() => Native.on((message) => {
        const event = message as { type?: string; data?: ElevationAsk };
        if (event.type === "fs.elevation.ask" && event.data) setAsk(event.data);
    }), []);

    const answer = (allow: boolean) => {
        const current = ask;
        setAsk(null);

        if (current)
            void Native.request("fs.elevation.answer", {token: current.token, allow});
    };

    const action = (kind: string): string => {
        switch (kind) {
            case "delete":
                return t("delete");
            case "rename":
                return t("rename");
            case "copy":
                return t("copy");
            case "moveTo":
                return t("move");
            case "extractArchive":
                return t("extract_archive");
            case "newFolder":
            case "newFolderAt":
                return t("new_folder");
            case "newFile":
            case "newFileAt":
                return t("new_file");
            case "restoreRecycle":
                return t("restore");
            case "writeFile":
                return t("save");
            default:
                return "";
        }
    };

    const verb = action(ask?.action ?? "");

    return (
        <ConfirmDialog
            confirmLabel={t("run_as_administrator")}
            message={t("this_path_needs_administrator_rights_to_action_restart_the_app_as_administrator_and_try_again", {
                path: ask?.path ?? "",
                action: verb.length > 0 ? verb.toLowerCase() : t("ok").toLowerCase(),
            })}
            onCancel={() => answer(false)}
            onConfirm={() => answer(true)}
            open={ask !== null}
            title={t("administrator_rights_required")}
        />
    );
}
