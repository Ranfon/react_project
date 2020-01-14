import React, { Component } from "react";

export default function Test() {
  //配置axios拦截器
  /**
   * 拦截器
   *  是一个拦截请求/响应的函数
   *  作用：
   *    作为请求拦截器：设置公共的请求头 / 参数...
   *    作为响应拦截器：
   *  执行流程：
   *    1、执行请求拦截器函数
   *    2、发送请求
   *    3、执行响应拦截器函数（接受到了响应）
   *    4、执行axiosInstance().then()/catch()
   * axios发送POST请求.
   *    默认的content-type：application/json 请求体是json
   *    有可能发送POST请求.需要的Content-type是application/x-www-form-urlencoded
   */
  const handleClick1 = () => {};
  const handleClick2 = () => {};
  const handleClick3 = () => {};
  return (
    <div>
      <button onClick={handleClick1}>按钮1</button>
      <button onClick={handleClick2}>按钮2</button>
      <button onClick={handleClick3}>按钮3</button>
    </div>
  );
}
