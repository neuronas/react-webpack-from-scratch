const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const path = require('path')
const { merge } = require('webpack-merge')

const isDevelopment = process.env.NODE_ENV !== 'production';
console.log("ENV", process.env.NODE_ENV)

const common = require('./webpack.common.js');

module.exports = merge(common, {
  // It is suggested to run both `react-refresh/babel` and the plugin in the `development` mode only,
  // even though both of them have optimisations in place to do nothing in the `production` mode.
  // If you would like to override Webpack's defaults for modes, you can also use the `none` mode -
  // you then will need to set `forceEnable: true` in the plugin's options.
  mode: 'development',
  module: {
    rules: [
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        // use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: true },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      // React refresh js/ts-x
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          // ... other loaders
          {
            loader: require.resolve('babel-loader'),
            options: {
              // ... other options
              plugins: [
                // ... other plugins
                require.resolve('react-refresh/babel'),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(), // no necesary if set devServer.hot
    new ReactRefreshWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
});