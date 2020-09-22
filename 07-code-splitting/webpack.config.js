/**
 *
 * https://webpack.js.org/guides/code-splitting/
 *
 */

const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./index.js",
    another: "./another-module.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  mode: "development",
  module: {
    rules: [],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    }),
    // webpack.optimize.CommonsChunkPlugin has been removed
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "common", // 指定公共 bundle 的名称。
    // }),
  ],
};
