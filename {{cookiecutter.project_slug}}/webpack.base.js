/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');

module.exports = {
  devtool: 'debug',
  entry: './src/index.js',
  output: {
    filename: 'static/js/main.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    contentBase: './build',
    port: 3000,
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
          plugins: [
            'transform-object-rest-spread',
            'transform-regenerator',
            'transform-runtime',
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: htmlWebpackTemplate,
      filename: 'index.html',
      title: '{{ cookiecutter.project_name }}',
      appMountId: 'root',
      favicon: 'public/favicon.ico',
      hash: true,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        },
        {
          name: 'theme-color',
          content: '{{ cookiecutter.theme_color }}',
        },
      ],
    }),
  ],
};
