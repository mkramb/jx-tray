const path = require("path");
const webpack = require("webpack");
const helpers = require("env-var-helpers");
const ExtractPlugin = require("extract-text-webpack-plugin");
const extractCss = new ExtractPlugin("[name].css");

module.exports = {
  mode: helpers.isProd ? "production" : "development",
  devtool: helpers.isProd ? "source-map" : "cheap-module-eval-source-map",
  devServer: {
    overlay: { errors: true, warnings: true },
    historyApiFallback: true,
    host: "0.0.0.0"
  },
  output: {
    path: path.resolve(__dirname, "..", "build")
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: [path.resolve(__dirname, "..", "node_modules")]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$|\.jsx$|\.tsx?$/,
        exclude: /node_modules/,
        use: "tslint-loader"
      },
      {
        test: /\.js$|\.jsx$|\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.css$|\.scss$/,
        use: extractCss.extract({
          use: [
            { loader: "css-loader", options: { import: false, url: false } },
            {
              loader: "postcss-loader",
              options: { plugins: [require("autoprefixer")] }
            },
            "sass-loader"
          ],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [extractCss, new webpack.NoEmitOnErrorsPlugin()]
};
