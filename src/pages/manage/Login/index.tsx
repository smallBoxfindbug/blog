/*
 * @Author: heyouqin@moyi365.com
 * @LastEditors: heyouqin@moyi365.com
 * @Date: 2021-12-09 11:49:20
 * @LastEditTime: 2021-12-09 17:52:23
 * @Descripttion: file content
 */
import React, { useState } from 'react';
import InputBar from '../../../components/InputBar';
// import login_bg from '../../../asserts/images/login_bg.webp'
import style from './index.module.scss';

export default function Login() {
	const [ oldP, setOld ] = useState('');

	const PASSWORD = {
		placeholder: '请输入密码',
		eyes: true,
		inputVal: (val: string) => {
			setOld(val);
		},
	};
	const USER_NAME = {
		placeholder: '请输入账号',
		inputVal: (val: string) => {
			setOld(val);
		},
		initType: 'text'
	};
	const OLD_PASSWORD = {
		placeholder: '请确认密码',
		eyes: true,
		inputVal: (val: string) => {
			setOld(val);
		}
	};
	return (
		<div className={style.login}>
			<div className={style.loginBox}>
				<p className={style.title}>系统登录</p>
				<InputBar {...USER_NAME} />
				<InputBar {...PASSWORD} />
				<InputBar {...OLD_PASSWORD} />
				<button>登录</button>
			</div>
		</div>
	);
}
