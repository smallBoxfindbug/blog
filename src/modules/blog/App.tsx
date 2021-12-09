
/*
 * @Author: heyouqin@moyi365.com
 * @LastEditors: heyouqin@moyi365.com
 * @Date: 2021-12-08 11:10:24
 * @LastEditTime: 2021-12-09 15:27:39
 * @Descripttion: file content
 */
import * as React from 'react';
import { useEffect } from 'react';

export default () => {
  useEffect(()=>{
    document.title="blog"
  })
	return <div>我是blog页面</div>;
};
