/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const config = require('./webpack.config');

module.exports = Object.assign({}, config, {
  devtool: 'cheap-module-source-map',
  stats: {
    colors: false,
    modules: true,
    reasons: false,
  },
  plugins: config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ]),
});
