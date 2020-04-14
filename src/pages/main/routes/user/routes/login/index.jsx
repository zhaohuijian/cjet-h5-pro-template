import React from "react";
import { createForm } from "rc-form";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

import {
  List,
  InputItem,
  WhiteSpace,
  Button,
  WingBlank,
  Tabs,
  Badge,
} from "antd-mobile";

const tabs = [
  { title: <Badge>短信验证码登录</Badge> },
  { title: <Badge>账号密码登录</Badge> },
];

@inject("loginStore")
@observer
class LoginComponent extends React.Component {
  UNSAFE_componentWillMount() {
    const { loginStore } = this.props;
    loginStore.setLoginTitle("登录系统");
  }

  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  };
  onTabClick = (tab, index) => {
    console.log("onTabClick", index, tab);
    const { history } = this.props;
    if (index === 0) {
      history.push("/user/phone");
    }
  };
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <WingBlank>
        <Tabs
          tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => {
            console.log("onChange", index, tab);
          }}
          onTabClick={this.onTabClick}
        >
          <List>
            <InputItem
              {...getFieldProps("phone", {
                rules: [{ required: true, message: "请输入手机号" }],
              })}
              type="text"
              clear
              placeholder="账号"
            ></InputItem>
            <InputItem
              {...getFieldProps("password", {
                rules: [{ required: true, message: "请输入密码" }],
              })}
              type="password"
              clear
              placeholder="密码"
              extra="找回密码"
            ></InputItem>
          </List>
        </Tabs>
        <WhiteSpace />
        <Button type="primary" onClick={this.submit}>
          登录
        </Button>
        <WhiteSpace />
        <Link to="/user/register">
          <p style={{ textAlign: "center", color: "#0af" }}>新用户注册</p>
        </Link>
      </WingBlank>
    );
  }
}

export default createForm()(LoginComponent);
