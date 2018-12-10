var path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: {
    one: "./src/one.js",
    two: "./src/two.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",

  },

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
    }
  },
  
  plugins: [

    
  ]
};