/*
 * @Author: heyouqin@moyi365.com
 * @LastEditors: heyouqin@moyi365.com
 * @Date: 2021-12-06 17:58:29
 * @LastEditTime: 2021-12-06 18:55:24
 * @Descripttion: file content
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPLugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
	entry: {
		page1: 'src/pages/managePage/index.tsx',
		page1: 'src/pages/blogPage/index.tsx'
	},
	output: {
		path: path.join(__dirname, './build'),
		filename: '[name]/index.js',
		environment: {
			arrowFunction: false
		},
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|git)$/,
				loader: 'url-loader',
				type: 'javascript/auto',
				options: {
					limit: 8 * 1000,
					esModule: false
				}
			},
			{
				test: /\.css$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ]
			},
			{
				test: /\.scss$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(js|jsx|ts|tsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(ts|tsx)$/i,
				exclude: /node_modules/,
				use: [ 'babel-loader', 'ts-loader' ]
			}
		]
	},
	plugins: [
		new HTMLWebpackPLugin({
			template: './public/managePage/index.html',
			filename: '[name].[hash:8].html'
		}),
		new HTMLWebpackPLugin({
			template: './public/blogPage/index.html',
			filename: '[name].[hash:8].html'
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[hash:8].css'
		}),
		new OptimizeCSSAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorPluginOptions: {
				preset: [ 'default', { discardComments: { removeAll: true } } ]
			},
			canPrint: true
		})
	],
	extensions: [ '.js', '.json', '.jsx', '.ts', '.tsx' ]
};
