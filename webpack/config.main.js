const path = require("path");
const merge = require("webpack-merge");
const config = require("./config.base");

module.exports = merge({}, config, {
  target: "electron-main",
  entry: { main: path.resolve(__dirname, "..", "app/main/index") },
  output: {
    libraryTarget: "commonjs2",
    filename: "main.js"
  }
});
