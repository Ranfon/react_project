import React, { Component } from "react";
//引入antd库中的表单组件
import { Form, Input, Button, Icon } from "antd";
//图片只有被引入才会被webpack打包
import logo from "./logo.png";
//引入less样式文件
import "./index.less";

class Login extends Component {
  validator = (rule, value, callback) => {
    /**
     * 使用rule.field获取表单key
     * value获取表单value
     */
    const name = rule.field === "username" ? "用户名" : "密码";
    const reg = /^\w+$/;
    if (!value) {
      //数据为空
      callback(`${name}不能为空`);
    } else if (value.length < 4) {
      callback(`${name}必须大于四位`);
    } else if (value.length > 15) {
      callback(`${name}必须小于15位`);
    } else if (!reg.test(value)) {
      callback(`${name}只能是数字字母下划线`);
    }
    //必须调用callback，不然会报错。调用不传参，代表成功。传则失败会提示错误
    callback();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>React项目：后台管理系统</h1>
        </header>
        <section className="login-section">
          <h3>用户登录</h3>
          <Form className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  // {
                  //   required: true,
                  //   message: "用户名不能为空"
                  // },
                  // {
                  //   min: 4,
                  //   message: "用户名不能少于4位"
                  // },
                  // {
                  //   max: 16,
                  //   message: "用户名不能大于14位"
                  // },
                  // {
                  //   pattern: /^\w+$/,
                  //   message: "用户名只能包含英文、数字、下划线"
                  // }
                  {
                    validator: this.validator
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    validator: this.validator
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button className="login-form-btn" type="primary">
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}
//Form.create()(login)高阶组件，给Login传form属性
export default Form.create()(Login);
//用装饰器简写:貌似版本还不支持
//export default Login;
