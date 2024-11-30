const path = require("path"); //core node module
const CleanPlugin = require("clean-webpack-plugin"); //core node module

module.exports = {
  entry: "./src/main.ts",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool:false,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins:[
    new CleanPlugin.CleanWebpackPlugin()
  ]

};
