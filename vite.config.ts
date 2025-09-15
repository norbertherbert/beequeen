import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import flowbiteReact from "flowbite-react/plugin/vite";
import { defineConfig } from "vite";
// import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    flowbiteReact(),
    // visualizer({
    //   filename: "dist/stats.html",
    //   open: true, // opens in browser after build
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
  ],
  base: "",
  root: "./",
  build: {
    copyPublicDir: true,
    outDir: "./dist",
    emptyOutDir: true,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-icons")) {
              return "vendor-react-icons";
            }
            if (id.includes("flowbite-react")) {
              return "vendor-flowbite";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
