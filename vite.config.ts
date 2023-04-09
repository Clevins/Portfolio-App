import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  assetsInclude: ["**/*.jpg", "**/**/*.pdf"],
  resolve: {
    alias: {
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
