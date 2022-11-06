const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    otodojo: "./src/otodojo.js"
  },


  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dev"),
  },
  devServer: {
    static: "./dev",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/otodojo.html',
      inject: true,
      chunks: ['otodojo'],
      filename: 'otodojo.html'
    })
  ],
  module: {
    rules: [{
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    }, ],
  },
}