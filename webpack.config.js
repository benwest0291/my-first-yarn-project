// Webpack 4 default configuration

var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "deployment/js"),
    filename: "bundle.js",
  },
};
