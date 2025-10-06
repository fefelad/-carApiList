import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@hooks": path.resolve(__dirname, "./src/shared/hook"),
      "@types": path.resolve(__dirname, "./src/shared/Types"),
      "@ui": path.resolve(__dirname, "./src/shared/ui"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/shared/resetcss"),
      "@store": path.resolve(__dirname, "./src/store/store"),
    },
  },
});
