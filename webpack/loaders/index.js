const plugins = require("../plugins");

module.exports = {
  Ts: require("./Ts"),
  TsLint: require("./TsLint"),
  Css: require("./Css")(plugins.CssExtract)
};
