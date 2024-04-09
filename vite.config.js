import react from "@vitejs/plugin-react";
import ViteRestart from "vite-plugin-restart";
import viteCompression from "vite-plugin-compression";
import { loadEnv } from "vite";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default ({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: command === "serve" ? "" : "/dist/",
    build: {
      emptyOutDir: true,
      // Create a manifest.json file for production build, needs to go in same spot as outDir
      manifest: "manifest.json", // Where we want the bundled code to be put
      outDir: "./web/dist",
      // sourcemap: true, // Bundle size balloons with this enabled
      // Which files should we be minifying
      rollupOptions: {
        input: {
          app: "/src/js/app.ts",
          // Need css here so we can load the css synchronously before the JS and first render, preventing a flicker.
          css: "/src/scss/main.scss",
          // If we want to use react, have to pull it in
          react: "/src/react/index.tsx",
        },
        output: { sourcemap: true },
      },
    },
    define: {
      "process.env.PRIMARY_SITE_URL": JSON.stringify(env.PRIMARY_SITE_URL),
    },
    server: {
      // Configure local dev server for DDEV
      host: "0.0.0.0",
      port: 3000,
      strictPort: true,
    },
    plugins: [
      react(),
      // Look at templates and js/scss files for changes while running the dev server for HMR
      ViteRestart({
        reload: ["./templates/**/*", "./src/**/*"],
      }),
      // Minify our JS + SCSS
      viteCompression(),
      visualizer(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
};
