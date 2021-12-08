
/*
 * @Author: heyouqin@moyi365.com
 * @LastEditors: heyouqin@moyi365.com
 * @Date: 2021-12-08 11:10:24
 * @LastEditTime: 2021-12-08 13:38:24
 * @Descripttion: file content
 */
import * as React from 'react';
import { useEffect } from 'react';

export default () => {
  useEffect(()=>{
    document.title="page1"
  })
	return <div>我是page1页面</div>;
};
