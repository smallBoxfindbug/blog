/*
 * @Author: heyouqin@moyi365.com
 * @LastEditors: heyouqin@moyi365.com
 * @Date: 2021-12-08 10:42:07
 * @LastEditTime: 2021-12-09 17:57:21
 * @Descripttion: file content
 */
import * as React from 'react';
import { useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { RootRouter } from '../../route/Manage';
import './index.scss';
export default function App() {
	useEffect(() => {
		document.title = '博客管理系统';
	});
	return <RootRouter />;
}

ReactDOM.render(<App />, document.getElementById('root'));
