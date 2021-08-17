const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }, ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};