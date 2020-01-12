import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//引入Home和Login组件
import Home from "./components/home";
import Login from "./components/login";

//创建App组件
export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Router>
    );
  }
}
