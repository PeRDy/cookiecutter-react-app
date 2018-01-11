/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const config = require('./webpack.base');

module.exports = Object.assign({}, config, {
  plugins: config.plugins.concat([
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ]),
});
