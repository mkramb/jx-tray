const path = require("path");
const merge = require("webpack-merge");
const helpers = require("env-var-helpers");
const HtmlPlugin = require("html-webpack-plugin");
const config = require("./config.base");

module.exports = merge(config, {
  target: helpers.isProd ? "electron-renderer" : "web",
  entry: {
    index: [path.resolve(__dirname, "..", "app/renderer/index")]
  },
  output: {
    filename: "renderer.js"
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, "..", "app/renderer/index.html")
    })
  ]
});
