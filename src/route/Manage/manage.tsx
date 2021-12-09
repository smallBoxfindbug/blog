/*
 * @Author: heyouqin@moyi365.com
 * @LastEditors: heyouqin@moyi365.com
 * @Date: 2021-12-09 11:42:24
 * @LastEditTime: 2021-12-09 17:10:41
 * @Descripttion: file content
 */
import * as React from 'react';
import { Route } from 'react-router-dom';
import Manage from '../../modules/manage/App';
import Home from '../../pages/manage/Home';
import Footer from '../../pages/manage/Footer';
import Login from '../../pages/manage/Login';
export const MANAG_INDEX = {
	path: '/home',
	name: '管理系统',
	comp: Manage
};
export const MANAGE_FOOTER = {
	path: '/footer',
	name: '管理系统',
	comp: Footer
};
export const MANAGE_HOME = {
	path: '/ccc',
	name: '管理系统',
	comp: Home
};
export const MANAGE_LOGIN = {
	path: '/login',
	name: '登录',
	comp: Login
};

export default (
	<Route key="manage">
		<Route path={MANAGE_HOME.path} exact component={MANAGE_HOME.comp} />
		<Route path={MANAG_INDEX.path} exact component={MANAG_INDEX.comp} />
		<Route path={MANAGE_FOOTER.path} exact component={MANAGE_FOOTER.comp} />
		<Route path={MANAGE_LOGIN.path} exact component={MANAGE_LOGIN.comp} />
	</Route>
);
