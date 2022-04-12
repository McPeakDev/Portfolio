import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import { dependencies } from "./package.json";
function renderChunks(deps: Record<string, string>) {
  const chunks: { [key: string]: string[] } = {};
  Object.keys(deps).forEach((key) => {
    if (["vue"].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue"],
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
