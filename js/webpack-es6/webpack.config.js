var path = require("path");
module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\js.$/,
      exclude: /(node_modules)/,//除了node_modules文件夹下面的.js文件
      loaders: "babel-loader"
    }]
  }
};