import {resolve} from "node:path";
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        host: "127.0.0.1",
        port: 3100,
        strictPort: true,
    },
    build: {
        outDir: "build",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve("index.html"),
                share: resolve("share.html"),
            },
        },
    },
});
