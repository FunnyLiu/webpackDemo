const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    page1: "./page1/script/main.js",
    page2: "./page2/script/main2.js"
  },
  output: {
    filename: "./[name]/build/bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["page1"],
      filename: "./page1/build/index.html"
    }),
    new HtmlWebpackPlugin({
      chunks: ["page2"],
      filename: "./page2/build/index.html"
    })
  ]
};
