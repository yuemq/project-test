var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: {
    app: "./app.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //这2个顺序不能乱
        use: ["style-loader", "css-loader"]
      }
    ]
  }
  /* plugins: [
     //webpack 4 升级之后，已经不需要了，
     new webpack.optimize.UglifyJsPlugin()
   ]*/
};