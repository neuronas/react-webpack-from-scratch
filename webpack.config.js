const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  // It is suggested to run both `react-refresh/babel` and the plugin in the `development` mode only,
  // even though both of them have optimisations in place to do nothing in the `production` mode.
  // If you would like to override Webpack's defaults for modes, you can also use the `none` mode -
  // you then will need to set `forceEnable: true` in the plugin's options.
  mode: isDevelopment ? 'development' : 'production',
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
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
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // isDevelopment && new webpack.HotModuleReplacementPlugin(), // no necesary if set devServer.hot
    isDevelopment && new ReactRefreshWebpackPlugin(),
    isDevelopment && new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Development',
    }),
  ].filter(Boolean),
  // ... other configuration options
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};