const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/*
 * We've enabled commonsChunkPlugin for you. This allows your app to
 * load faster and it splits the modules you provided as entries across
 * different bundles!
 *
 * https://webpack.js.org/plugins/commons-chunk-plugin/
 *
 */

/*
 * We've enabled ExtractTextPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/extract-text-webpack-plugin
 *
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    index: './client/index.js',
    music: './client/song.js',
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, './public/build'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,

        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            query: {
              localIdentName: '[hash:8]',
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [autoprefixer],
            },
          },
        ]),
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJSPlugin(),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
  ],
};