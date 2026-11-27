import {lazy, StrictMode, Suspense} from "react";
import {createRoot} from "react-dom/client";
import "./globals.scss";
// Self-hosted so the interface does not depend on whatever the OS happens to have installed.
// Latin subsets only — the CJK faces stay system fonts, they are far too large to bundle.
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "@fontsource/jetbrains-mono/latin-500.css";
import App from "./App";
import {LocalizationProvider, systemPrefersDark} from "@photino-net-utils/bridge";
import {getPickerRequest} from "./api/picker";
import {getSettingDefaults} from "./api/settings";
import {applyShortcutDefaults} from "./shortcuts";
import {applyTimeFormat} from "./utils/format";
import {loadStoredState, flushStoredState} from "./storage";

// The palette is applied again once the settings arrive; this only keeps the first paint from
// flashing the other theme while that reply is still on its way.
document.documentElement.dataset.theme = systemPrefersDark() ? "dark" : "light";

// WebKit needs the prefixed property, and the effect is only worth using when the engine really
// has it: without it the floating panels keep an almost opaque background so text stays readable.
const supportsBackdrop = typeof CSS !== "undefined"
    && (CSS.supports("backdrop-filter", "blur(1px)")
        || CSS.supports("-webkit-backdrop-filter", "blur(1px)"));

document.documentElement.classList.toggle("backdrop-blur", supportsBackdrop);

// A resize is written 200 ms after it stops; a window that closes in between keeps the last value.
window.addEventListener("pagehide", flushStoredState);

const rootElement = document.getElementById("root");
const parameters = new URLSearchParams(window.location.search);
const pickMode = parameters.get("picker");

// A picker is a separate window with its own pages; a normal launch must not carry it, nor the
// overview and gallery it pulls in.
const PickerWindow = pickMode === "folder" || pickMode === "file" || pickMode === "save"
    ? lazy(() => import("./PickerWindow").then((module) => ({default: module.PickerWindow})))
    : null;

// The dialog's own parameters (its type list above all) are too big for a URL, so they come over
// the bridge while the rest of the startup work runs.
const pickRequest = PickerWindow === null
    ? Promise.resolve(null)
    : getPickerRequest().catch(() => null);

if (rootElement) {
    const start = (request: Awaited<typeof pickRequest>) => {
        // The stored panel sizes are read as the components mount, so they are loaded first.
        loadStoredState();

        createRoot(rootElement).render(
        <StrictMode>
            <LocalizationProvider>
                {PickerWindow === null
                    ? <App/>
                    : (
                        <Suspense fallback={null}>
                            <PickerWindow
                                defaultExtension={request?.defaultExtension ?? ""}
                                extensions={request?.extensions ?? []}
                                types={request?.types ?? ""}
                                typeIndex={request?.typeIndex ?? 0}
                                initial={request?.initial ?? ""}
                                initialName={request?.initialName ?? ""}
                                lastExtension={request?.lastExtension ?? ""}
                                mode={pickMode === "folder" ? "folder" : "file"}
                                multiple={request?.multiple ?? false}
                                save={pickMode === "save"}
                            />
                        </Suspense>
                    )}
            </LocalizationProvider>
        </StrictMode>
        );
    };

    // The host owns every default. Apply the ones the modules need synchronously before the
    // first paint, so no component has to carry a copy of them.
    void Promise.all([getSettingDefaults().catch(() => null), pickRequest])
        .then(([defaults, request]) => {
            if (defaults !== null) {
                applyShortcutDefaults(defaults.shortcuts);
                applyTimeFormat(defaults.timeFormat, defaults.timeFormatPattern);
            }

            start(request);
        });
}
