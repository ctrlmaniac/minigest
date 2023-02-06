import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const commonConfigs = {
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      ...commonConfigs,
      server: {
        proxy: {
          "/api": {
            target: "http://127.0.0.1:8080",
          },
        },
      },
    };
  } else {
    return {
      ...commonConfigs,
      build: {
        rollupOptions: {
          output: {
            assetFileNames: (assetInfo) => {
              let extType = assetInfo.name.split(".").at(1);
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                extType = "img";
              }
              return `app/assets/${extType}/[name]-[hash][extname]`;
            },
            chunkFileNames: "app/assets/js/[name]-[hash].js",
            entryFileNames: "app/assets/js/[name]-[hash].js",
          },
        },
      },
    };
  }
});