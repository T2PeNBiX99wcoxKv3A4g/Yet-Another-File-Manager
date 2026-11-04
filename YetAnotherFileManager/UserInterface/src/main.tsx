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
import {LocalizationProvider} from "@photino-net-utils/bridge";

// WebKit needs the prefixed property, and the effect is only worth using when the engine really
// has it: without it the floating panels keep an almost opaque background so text stays readable.
const supportsBackdrop = typeof CSS !== "undefined"
    && (CSS.supports("backdrop-filter", "blur(1px)")
        || CSS.supports("-webkit-backdrop-filter", "blur(1px)"));

document.documentElement.classList.toggle("backdrop-blur", supportsBackdrop);

const rootElement = document.getElementById("root");
if (rootElement)
    createRoot(rootElement).render(
        <StrictMode>
            <LocalizationProvider>
                <App/>
            </LocalizationProvider>
        </StrictMode>
    );
