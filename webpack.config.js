const webpack = require('webpack')
const rupture = require('rupture')
const postStylus = require('poststylus')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	module: {
		rules: [
			{
				test: [/\.jpg$/, /\.png$/, /\.svg$/, /\.pdf$/],
				use: {
					loader: 'url-loader',
					query: {
						limit: 1000,
						name: 'https://mooners.org/static/[name]-[hash].[ext]'
					}
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /.pug$/,
				use: {
					loader: 'pug-loader',
					query: {}
				}
			},
			{
				test: /.styl$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							hmr: true
						}
					},
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: false,
							sourceMap: true,
							minimize: true,
							discardComments: { removeAll: true }
						}
					},
					{ loader: 'stylus-loader' }
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.pug'
		}),
		new MiniCssExtractPlugin({
			fileName: '[name]-[hash].css'
		}),
		new webpack.LoaderOptionsPlugin({
			test: /\.styl$/,
			stylus: {
				preferPathResolver: 'webpack',
				default: {
					use: [
						postStylus([
							autoprefixer({ browsers: ['ie 10'] }),
							'css-mqpacker'
						]),
						rupture()
					]
				}
			},
			options: {
				context: __dirname
			}
		})
	]
}