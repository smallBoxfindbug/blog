/*
 * @Author: heyouqin@moyi365.com
 * @LastEditors: heyouqin@moyi365.com
 * @Date: 2021-12-08 18:53:28
 * @LastEditTime: 2021-12-08 18:58:19
 * @Descripttion: file content
 */
const client = require('scp2');
client.scp(
	'./src',
	{
		host: '124.71.230.178',
		port: 22,
		username: 'root',
		password: '522636Hyq',
		path: '/usr/local/blog/'
	},
	function(err) {
		if (err) console.log(err);
		else console.log('upload successfully.');
	}
);
