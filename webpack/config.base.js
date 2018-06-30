const path = require("path");
const webpack = require("webpack");
const helpers = require("env-var-helpers");
const loaders = require("./loaders");
const plugins = require("./plugins");

module.exports = {
  mode: helpers.isProd ? "production" : "development",
  devtool: helpers.isProd ? "source-map" : "cheap-module-eval-source-map",
  devServer: {
    overlay: { errors: true, warnings: true },
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 9000
  },
  output: {
    path: path.resolve(__dirname, "..", "build")
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: [path.resolve(__dirname, "..", "node_modules")]
  },
  module: { rules: [loaders.TsLint, loaders.Ts, loaders.Css] },
  plugins: [plugins.CssExtract, new webpack.NoEmitOnErrorsPlugin()]
};
