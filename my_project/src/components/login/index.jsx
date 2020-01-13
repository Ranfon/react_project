import React, { Component } from "react";
//引入antd库中的表单组件
import { Form, Input, Button } from "antd";
//图片只有被引入才会被webpack打包
import logo from "./logo.png";

export default class Login extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} alt="logo" />
          <h1>React项目：后台管理系统</h1>
        </header>
        <section>
          <h3>用户登录</h3>
          <Form>
            <Form.Item>
              <Input placeholder="用户名" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="密码" />
            </Form.Item>
            <Form.Item>
              <Button>登录</Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}
