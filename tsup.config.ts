import { defineConfig } from "tsup";

const isDev = process.env.npm_lifecycle_event === "dev";

export default defineConfig({
    entry: ["src/usestubs.ts"],
    target: "esnext",
    format: ["esm"],
    clean: true,
    minify: !isDev,
    onSuccess: isDev ? "node dist/usestubs.js" : undefined,
});
