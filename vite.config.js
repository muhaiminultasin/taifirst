import { Resolve } from "Path";
import { DefineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: Resolve(__dirname, "index.html"),
      },
    },
  },
});
