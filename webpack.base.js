/*
 * @Author: heyouqin@moyi365.com
 * @LastEditors: heyouqin@moyi365.com
 * @Date: 2021-12-06 17:58:29
 * @LastEditTime: 2021-12-09 15:31:14
 * @Descripttion: file content
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPLugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		blog: path.join(__dirname, 'src/modules/blog', 'index.tsx'),
		manage: path.join(__dirname, 'src/modules/manage', 'index.tsx')
	},
	output: {
		path: path.resolve('build'),
		filename: '[name]/[name][hash:5].js',
		chunkFilename: '[name]/[name][hash:5].js',
		environment: {
			arrowFunction: false
		},
		publicPath: '/',
		clean: true
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
			filename: 'blog.html',
			chunks: [ 'blog' ],
			excludeChunks: [ 'manage' ]
		}),
		new HTMLWebpackPLugin({
			template: './public/index.html',
			filename: 'index.html',
			chunks: [ 'manage' ],
			excludeChunks: [ 'blog' ]
		}),

		new MiniCssExtractPlugin({
			filename: '[name]/[name].[hash:8].css'
		})
	],
	resolve: {
		extensions: [ '.js', '.json', '.jsx', '.ts', '.tsx' ]
	}
};
