/*
 * @Author: heyouqin@moyi365.com
 * @LastEditors: heyouqin@moyi365.com
 * @Date: 2021-12-09 11:41:34
 * @LastEditTime: 2021-12-09 11:42:10
 * @Descripttion: file content
 */
import * as React from 'react';
import { Route } from 'react-router-dom';
import Blog from '../../modules/manage/App';
export const BLOG_HOME = {
	path: '/blog',
	name: '博客首页',
	comp: Blog
};

export default (
	<Route key="blog">
		<Route path={BLOG_HOME.path} exact component={BLOG_HOME.comp} />
	</Route>
);