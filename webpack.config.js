var path = require('path');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');


module.exports = {
  entry: {
    one: "./src/one.js",
    two: "./src/two.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[chunkhash:8].js",   

  },
  plugins: [
    new WebpackMd5Hash()
  ],

  // 提取公共js
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  }
};