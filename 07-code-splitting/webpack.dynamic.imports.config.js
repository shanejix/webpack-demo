/**
 *
 * https://webpack.js.org/guides/code-splitting/
 *
 */

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./dynamic-imports.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "[name].bundle.js",
    chunkFilename: '[name].bundle.js',
  },
  mode: "development",
  module: {
    rules: [],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    }),
  ],
};
