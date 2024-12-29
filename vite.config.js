import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      include: [/vanta/, /node_modules/], // Ensure Vanta.js is processed correctly
    },
  },
});
