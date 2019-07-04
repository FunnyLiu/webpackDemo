const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SriPlugin = require('webpack-subresource-integrity')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  plugins: [
    new SriPlugin({
      hashFuncNames:['sha256']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
      title: 'development'
    })
  ],
};