
const webpack = require('webpack')
const path = require('path')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'


module.exports = {
	entry: '/main.js',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use : [{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env']
					}
				}]
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'js/bundle.js',
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json'],
	},
}