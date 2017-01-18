var webpack = require('webpack');
var ExtrackTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: './public'
	},
	module: {
		loaders: [
				{ test:/\.scss$/, loader: ExtrackTextPlugin.extract('style-loader', 'css-loader!sass-loader') }
		]
	},
	plugins: [
		new ExtrackTextPlugin('[name].css')
	]
};
