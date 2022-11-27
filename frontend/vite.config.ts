import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from "@rollup/plugin-alias";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: "~",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    }),
  ],
  assetsInclude: ["src"],
  server: {
    port: 3000,
  },
});
