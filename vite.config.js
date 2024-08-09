import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig(config => {
    const viteEnv = loadEnv(config.mode, process.cwd());
    return {
        plugins: [vue()],
        css: {
            postcss: {
                plugins: [tailwind(), autoprefixer()]
            }
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src")
            }
        },
        server: {
            host: "0.0.0.0",
            proxy: {
                "/api/v1": {
                    target: viteEnv.VITE_BASE_API,
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api\/v1/, "")
                }
            }
        }
    };
});
