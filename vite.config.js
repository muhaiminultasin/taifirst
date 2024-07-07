import { Resolve } from "Path";
import { DefineConfig } from "Vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: Resolve(__dirname, "index.html"),
      },
    },
  },
});
