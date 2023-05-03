import { defineConfig } from "rollup"
import typescript from "@rollup/plugin-typescript"
import css from "rollup-plugin-import-css"
import terser from "@rollup/plugin-terser"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import image from "@rollup/plugin-image"

export default defineConfig({
  input: "src/App.ts",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [typescript(), css(), terser(), nodeResolve(), image()],
})
