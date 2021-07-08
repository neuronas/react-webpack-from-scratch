const HtmlWebpackPlugin = require('html-webpack-plugin')
// const PrettierPlugin = require('prettier-webpack-plugin')
// const ESLintPlugin = require('eslint-webpack-plugin')

const path = require('path')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
  // Where webpack outputs the assets and bundles
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/',
  },
  // Customize the webpack build process
  plugins: [
    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      title: 'React Webpack from scrath',
      template: './public/index.html',
    }),

    // // ESLint configuration
    // new ESLintPlugin({
    //   files: ['.', 'src', 'config'],
    //   formatter: 'table',
    // }),

    // // Prettier configuration
    // new PrettierPlugin(),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/,
      //   exclude: /node_modules/,
      //   loader: 'file-loader',
      //   options: {
      //     outputPath: 'images',
      //   }
      // },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
}