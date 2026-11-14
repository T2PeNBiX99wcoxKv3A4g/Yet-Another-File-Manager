import {StrictMode} from "react";
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
import {PickerWindow} from "./PickerWindow";
import {LocalizationProvider, systemPrefersDark} from "@photino-net-utils/bridge";
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
const pickFilter = parameters.get("filter") ?? "";

if (rootElement) {
    // The stored panel sizes are read as the components mount, so they are loaded first.
    loadStoredState();

    createRoot(rootElement).render(
        <StrictMode>
            <LocalizationProvider>
                {pickMode === "folder" || pickMode === "file" || pickMode === "save"
                    ? <PickerWindow
                        defaultExtension={parameters.get("ext") ?? ""}
                        extensions={pickFilter ? pickFilter.split(";").filter(Boolean) : []}
                        initial={parameters.get("initial") ?? ""}
                        initialName={parameters.get("name") ?? ""}
                        mode={pickMode === "folder" ? "folder" : "file"}
                        multiple={parameters.get("multiple") === "1"}
                        save={pickMode === "save"}
                    />
                    : <App/>}
            </LocalizationProvider>
        </StrictMode>
    );
}
