import * as esbuild from "esbuild"

await esbuild.build({
  entryPoints: ["src/App.ts"],
  bundle: true,
  outdir: "dist",
  minify: true,
  loader: {
    ".jpg": "file",
  },
})
