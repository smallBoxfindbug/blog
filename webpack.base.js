/*
 * @Author: heyouqin@moyi365.com
 * @LastEditors: heyouqin@moyi365.com
 * @Date: 2021-12-06 17:58:29
 * @LastEditTime: 2021-12-08 18:51:41
 * @Descripttion: file content
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPLugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: {
		page1: path.join(__dirname, 'src/modules/page1', 'index.tsx'),
		page2: path.join(__dirname, 'src/modules/page2', 'index.tsx')
		// page2: path.resolve(__dirname, 'src/modules/page2/index.tsx')
	},
	output: {
		path: path.resolve('build'),
		filename: '[name]/[name][hash:5].js',
		chunkFilename: '[name]/[name][hash:5].js',
		environment: {
			arrowFunction: false
		},
		publicPath: '/',
    clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ]
			},
			{
				test: /\.less$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader' ]
			},
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
		new CleanWebpackPlugin(),
		new HTMLWebpackPLugin({
			template: './public/index.html',
			filename: 'page1.html',
			chunks: [ 'page1' ],
			excludeChunks: [ 'page2' ]
		}),
		new HTMLWebpackPLugin({
			template: './public/index.html',
			filename: 'index.html',
			chunks: [ 'page2' ],
			excludeChunks: [ 'page1' ]
		}),

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
	resolve: {
		extensions: [ '.js', '.json', '.jsx', '.ts', '.tsx' ]
	}
};
