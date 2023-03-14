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
    };
  }
});
