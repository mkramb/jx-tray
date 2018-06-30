const path = require("path");
const merge = require("webpack-merge");
const helpers = require("env-var-helpers");
const config = require("./config.base");
const plugins = require("./plugins");

module.exports = merge(config, {
  entry: {
    index: [path.resolve(__dirname, "..", "app/renderer/index")]
  },
  target: helpers.isProd ? "electron-renderer" : "web",
  output: { filename: "renderer.js" },
  plugins: [
    plugins.Html({
      template: path.resolve(__dirname, "..", "app/renderer/index.html")
    })
  ]
});
