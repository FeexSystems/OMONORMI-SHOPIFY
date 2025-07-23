import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Using regular React plugin instead of SWC
import path from "path";

// Simplified config without SWC
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});