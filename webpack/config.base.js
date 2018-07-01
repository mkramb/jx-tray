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
        test: /\.css$/,
        use: extractCss.extract({
          use: [
            {
              loader: "typings-for-css-modules-loader",
              options: {
                import: false,
                url: false,
                modules: true,
                namedExport: true
              }
            },
            "sass-loader"
          ],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractCss,
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/])
  ]
};
