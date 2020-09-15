/**
 *
 * https://webpack.js.org/concepts/
 *
 */

const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
  mode: "production",
  module: {
    rules: [],
  },
  plugins: [],
};
