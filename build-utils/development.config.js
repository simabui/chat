const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/pug/login.pug" })
    // new HtmlWebpackPlugin({ template: "./src/pug/chat.pug" })
  ],
  devServer: {
    stats: "errors-only"
  }
};
