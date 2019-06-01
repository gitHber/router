const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const WebpackBar = require("webpackbar");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "eslint-loader"
          }
        ],
        enforce: "pre",
        include: [path.resolve(__dirname, "../src")]
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/"
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new WebpackBar(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new htmlWebpackPlugin({
      template: "public/index.html"
    }),
    new FriendlyErrorsPlugin(),
    new CleanWebpackPlugin()
  ]
};
