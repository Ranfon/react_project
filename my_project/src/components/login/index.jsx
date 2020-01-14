import React, { Component } from "react";
//引入antd库中的表单组件
import { Form, Input, Button, Icon, message } from "antd";
//引入请求组件axios
import axios from "axios";
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
  login = e => {
    e.preventDefault();
    //Form有专门校验表单方法
    this.props.form.validateFields((err, values) => {
      /**
       * err是错误对象
       *  如果表单校验失败就有错误，值是对象
       *  如果表单校验成功就没有错误对象，值是null
       * value
       *  收集的表单的数据
       */
      if (!err) {
        //没有错误就说明表单校验成功
        const { username, password } = values;
        //发送登录请求
        axios
          .post("/api/login", { username, password })
          //then方法代表请求成功，但不是登录成功
          .then(response => {
            //看返回的状态数据判断登录情况
            if (response.data.status === 0) {
              //登陆成功，跳转到home页面(这个方法不行，只能用于render方法中)
              //<Redirect to="/" />;路由连接跳转
              this.props.history.replace("/"); //编程式导航跳转，用push还可以后退回去
            } else {
              //登录失败，需要提示错误
              message.error(response.data.msg);
              //如果错误重新登录一定要清空密码箱
              this.props.form.resetFields(["password"]);
            }
          })
          //catch方法地表请求异常
          .catch(err => {
            //给自己看
            console.log(err);
            //给用户看
            message.error("你的网络有问题");
            //也要清空密码
            this.props.form.resetFields(["password"]);
          });
      }
    });
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
          <Form className="login-form" onSubmit={this.login}>
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
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                className="login-form-btn"
                type="primary"
                htmlType="submit"
              >
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
