import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Cambia el número de puerto a 3000.
  },
  base: "https://JoseEduardoTrevizo.github.io/Portafolio",
  optimizeDeps: {
    include: ["pdfjs-dist"],
  },
  build: {
    commonjsOptions: {
      include: [/pdfjs-dist/, /node_modules/],
    },
  },
});
