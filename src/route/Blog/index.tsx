/*
 * @Author: heyouqin@moyi365.com
 * @LastEditors: heyouqin@moyi365.com
 * @Date: 2021-12-09 11:20:40
 * @LastEditTime: 2021-12-09 11:43:25
 * @Descripttion: file content
 */


import * as React from 'react';
import {
	HashRouter as Router,
	// Switch,
	Route,
	// Link,
	Redirect
} from 'react-router-dom';
import Blog from './blog';
const rootRouterList = [  Blog ];
export const RootRouter = () => {
	return (
		<Router>
			{rootRouterList}
			<Route exact path="/">
				<Redirect to="/blog" />
			</Route>
		</Router>
	);
};
