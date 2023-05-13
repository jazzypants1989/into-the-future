import * as esbuild from "esbuild"
import { htmlPlugin } from "@craftamap/esbuild-plugin-html"

await esbuild.build({
  entryPoints: ["src/App.ts"],
  bundle: true,
  outdir: "dist",
  minify: true,
  loader: {
    ".jpg": "file",
  },
  treeShaking: true,
  metafile: true,
  plugins: [
    htmlPlugin({
      files: [
        {
          entryPoints: ["src/App.ts"],
          filename: "index.html",
          htmlTemplate: "index.html",
          favicon: "src/favicon.ico",
        },
      ],
    }),
  ],
})
