import React from "react";
import { createForm } from "rc-form";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

import { List, InputItem, WhiteSpace, Button, WingBlank } from "antd-mobile";

import styles from "./style.module.less";

@inject("loginStore")
@observer
class RegisterComponent extends React.Component {
  UNSAFE_componentWillMount() {
    const { loginStore } = this.props;
    loginStore.setLoginTitle("注册系统");
  }
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  };

  sendMessage = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
    // console.log("发送验证码:" + e);
  };
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <WingBlank>
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
        <p className={styles.tip}>
          注册代表您同意《注册协议》和《隐私政策条款》
        </p>
        <WhiteSpace />
        <Button type="primary" onClick={this.submit}>
          注册
        </Button>
        <WhiteSpace />
        <Link to="/user/login">
          <p style={{ textAlign: "center", color: "#0af" }}>已有账号登录</p>
        </Link>
      </WingBlank>
    );
  }
}

export default createForm()(RegisterComponent);
