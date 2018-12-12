var path = require('path');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');


module.exports = {
  entry: {
    one: "./src/one.js",
    two: "./src/two.js",
    common: ['jquery', 'lodash'],
    react: ['react']    // 用于抽取react
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
          minChunks: Infinity  // 无限次
        },
        react: {
          name: 'react',
          chunks: "initial",
          minChunks: Infinity  // 无限次
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  }
};