var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js',
	},
	module: {
		rules: [
			{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	// resolve: {
 //    extensions: ['*', '.js', '.jsx'],
 //  },
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
			template: './src/index.html'
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'inline-source-map',
	devServer: {
    contentBase: './dist',
    hot: true,
  },
}