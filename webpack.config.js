var path = require('path');
module.exports = {
  entry: {
    one: "./src/one.js",
    two: "./src/two.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  }
};