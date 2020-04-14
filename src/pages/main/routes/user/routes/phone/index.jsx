import React from "react";
import { createForm } from "rc-form";
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

import styles from "./style.module.less";

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
    if (index === 1) {
      history.push("/user/login");
    }
  };
  sendMessage = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  };
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <WingBlank>
        <Tabs
          tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => {
            console.log("onChange", index, tab);
          }}
          onTabClick={this.onTabClick}
        >
          <List>
            <InputItem
              {...getFieldProps("phone")}
              type="phone"
              clear
              placeholder="请输入手机号"
            ></InputItem>
            <InputItem
              {...getFieldProps("ecode")}
              type="number"
              clear
              placeholder="短信验证码"
              extra="发送验证码"
              onExtraClick={this.sendMessage}
            ></InputItem>
          </List>
        </Tabs>
        <p className={styles.tip}>未注册手机验证后自动注册</p>
        <p className={styles.tip}>
          注册代表您同意《注册协议》和《隐私政策条款》
        </p>
        <WhiteSpace />
        <Button type="primary" onClick={this.submit}>
          登录/注册
        </Button>
      </WingBlank>
    );
  }
}

export default createForm()(LoginComponent);
