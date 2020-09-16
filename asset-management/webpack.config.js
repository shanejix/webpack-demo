/**
 *
 * https://webpack.js.org/guides/asset-management/
 *
 */

const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      },
    ],
  },
  plugins: [],
};
