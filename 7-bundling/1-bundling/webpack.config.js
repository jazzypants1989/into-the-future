import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { fileURLToPath } from "url"

const isProduction = process.env.NODE_ENV == "production"

const stylesHandler = "style-loader"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const srcDir = path.resolve(__dirname, "src")

const config = {
  entry: "./src/App.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
        include: srcDir,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|avif)$/i,
        type: "asset/resource",
        include: srcDir,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
}

export default () => {
  if (isProduction) {
    config.mode = "production"
  } else {
    config.mode = "development"
  }
  return config
}
