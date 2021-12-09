/*
 * @Author: heyouqin@moyi365.com
 * @LastEditors: heyouqin@moyi365.com
 * @Date: 2021-11-23 13:50:23
 * @LastEditTime: 2021-12-09 17:44:30
 * @Descripttion: file content
 */
import * as React from 'react';
import { useState } from 'react';
import password from '.././../asserts/images/password.png';
import text from '.././../asserts/images/text.png';
import close from '.././../asserts/images/close.png';
import inputBar from './index.module.scss';

interface InputProps {
	[key: string]: any;
	placeholder: string;
	inputVal: Function;
	eyes?: boolean;
	initType?: string;
}

export default function InputBar({ placeholder, inputVal, eyes = false, initType = 'password' }: InputProps) {
	const [ val, setVal ] = useState('');
	const [ type, setType ] = useState(initType);
	const [ showClean, setShowClean ] = useState(false);
	const [ showText, setShowText ] = useState(false);

	const change = (e: any) => {
		setVal(e.target.value);
		inputVal(e.target.value);
		if (e.target.value.length > 0) {
			setShowClean(true);
			setShowText(true);
		} else {
			setShowText(false);
			setShowClean(false);
		}
	};
	const cleanVal = () => {
		setVal('');
		inputVal('');
		setShowClean(false);
		setShowText(false);
	};
	const showVal = (type: string) => {
		return () => {
			switch (type) {
				case 'password':
					setType('text');
					break;
				case 'text':
					setType('password');
					break;
				default:
					break;
			}
		};
	};

	return (
		<div className={inputBar.inputBar}>
			<input value={val} onChange={change} type={type} placeholder={placeholder} />
			<div>
				<img alt="" style={{ display: showClean ? 'block' : 'none' }} src={close} onClick={cleanVal} />
				{eyes ? (
					<img
						alt=""
						style={{ display: showText ? 'block' : 'none' }}
						src={type === 'password' ? password : text}
						onClick={showVal(type)}
					/>
				) : (
					''
				)}
			</div>
		</div>
	);
}
