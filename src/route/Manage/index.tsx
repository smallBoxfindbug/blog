/*
 * @Author: heyouqin@moyi365.com
 * @LastEditors: heyouqin@moyi365.com
 * @Date: 2021-12-09 11:16:13
 * @LastEditTime: 2021-12-09 17:11:26
 * @Descripttion: file content
 */
import * as React from 'react';
import './index.scss'
import {
	HashRouter as Router,
	Route,
	Redirect
} from 'react-router-dom';
import Manage from './manage';
const rootRouterList = [  Manage ];
export const RootRouter = () => {
	return (
		<Router>
			{rootRouterList}
			<Route exact path="/">
				<Redirect to="/home" />
			</Route>
		</Router>
	);
};
