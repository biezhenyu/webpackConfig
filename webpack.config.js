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
  plugins: [

    // 提取公共js
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
    })
  ]
};