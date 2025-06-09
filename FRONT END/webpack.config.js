const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "foto", to: "foto" }],
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "About.html",
      template: "./pages/About.html",
    }),
    new HtmlWebpackPlugin({
      filename: "Article.html",
      template: "./pages/Article.html",
    }),
    new HtmlWebpackPlugin({
      filename: "Store.html",
      template: "./pages/Store.html",
    }),
    new HtmlWebpackPlugin({
      filename: "Calculator.html",
      template: "./pages/Calculator.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true,
    port: 3002,
  },
  mode: "development",
};
