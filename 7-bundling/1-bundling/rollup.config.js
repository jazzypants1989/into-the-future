import { defineConfig, rollup } from "rollup"
import typescript from "@rollup/plugin-typescript"
import css from "rollup-plugin-import-css"
import terser from "@rollup/plugin-terser"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import image from "@rollup/plugin-image"
import html2 from "rollup-plugin-html2"

export default defineConfig({
  input: "src/App.ts",
  treeshake: true,
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [
    typescript(),
    css(),
    terser(),
    nodeResolve(),
    image(),
    html2({
      template: "index.html",
      favicon: "src/favicon.ico",
      minify: true,
      entries: {
        App: {
          type: "module",
        },
      },
    }),
  ],
})
