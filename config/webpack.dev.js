/*
 * @Author: heyouqin@moyi365.com
 * @LastEditors: heyouqin@moyi365.com
 * @Date: 2021-12-06 17:58:59
 * @LastEditTime: 2021-12-06 19:03:17
 * @Descripttion: file content
 */
const { merge } = require('webpack-merge');
const path = require('path');
const base = require('./webpack.base');
module.exports = merge(base, {
	mode: 'development',
	devtool: 'inline-source-map',
	target: 'web',
	devServer: {
		open: true,
		contentBase: path.join(__dirname, './build'),
		historyApiFallback: true, //不跳转
		inline: true, //实时刷新
		hot: true, // 开启热更新,
		port: 3001
	}
});
