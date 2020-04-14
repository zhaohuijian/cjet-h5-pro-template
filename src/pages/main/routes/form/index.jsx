import React from "react";
import { createForm } from "rc-form";
import {
  List,
  InputItem,
  WhiteSpace,
  Toast,
  DatePicker,
  Picker,
} from "antd-mobile";

import PageWrapper from "../../components/pageWrapper";

let bankcardnumError = false;
let idcardError = false;
class FormDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bankCardNumber: "",
      IDCard: "",
      hasError: false,
      value: "",
      type: "money",
    };
  }
  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info("Please enter 11 digits");
    }
  };
  phoneonChange = (value) => {
    if (value.replace(/\s/g, "").length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  };
  onChange(value, key) {
    this.props.form.setFieldsValue({
      [key]: value,
    });
    // this.setState({
    //   bankCardNumber: value
    // });
  }

  onChangeSex() {}

  render() {
    let { bankCardNumber, IDCard } = this.state;
    const { getFieldProps } = this.props.form;
    const sexData = [
      { label: "男", value: "男" },
      { label: "女", value: "女" },
    ];
    return (
      <PageWrapper navBarText="表单示例" {...this.props}>
        <WhiteSpace />
        <List renderHeader={() => "表单示例"}>
          <InputItem value="">姓名</InputItem>
          <InputItem
            type="phone"
            placeholder="input your phone"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.phoneonChange}
            value={this.state.value}
          >
            手机号码
          </InputItem>
          <DatePicker
            mode="date"
            title="Select Date"
            extra="请选择"
            value={this.state.date}
            onChange={(date) => this.setState({ date })}
          >
            <List.Item arrow="horizontal">出生日期</List.Item>
          </DatePicker>
          <Picker data={sexData} cols={1} onChange={this.onChangeSex}>
            <List.Item arrow="horizontal">性别</List.Item>
          </Picker>
          <InputItem
            error={idcardError}
            placeholder="请输入收款人身份证号"
            value={IDCard}
            clear
            name="idCard"
            maxLength={18}
            {...getFieldProps("idCard", {
              initialValue: "11204416541220243X",
              onChange: (value) => this.onChange(value, "idCard"),
              validateTrigger: "onBlur",
              rules: [
                {
                  type: "string",
                  required: true,
                  message: "请检查身份证号一栏是否输入",
                },
                {
                  validator(rule, value, callback, source, options) {
                    let errors = [];
                    let regidCard = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

                    if (value === undefined || value === "") {
                      idcardError = true;
                      errors.push("请检查身份证号一栏是否输入");
                    } else if (
                      value !== undefined &&
                      value !== "" &&
                      !regidCard.test(value)
                    ) {
                      idcardError = true;
                      errors.push("请检查身份证号一栏是否输入正确");
                    } else {
                      idcardError = false;
                    }
                    callback(errors);
                  },
                },
              ],
            })}
          >
            身份证号
          </InputItem>

          <InputItem
            error={bankcardnumError}
            placeholder="请输入收款人银行账号"
            value={bankCardNumber}
            clear
            maxLength={23}
            {...getFieldProps("bankCard", {
              initialValue: "8888 8888 8888 8888 888",
              onChange: (value) => this.onChange(value, "bankCard"),
              validateTrigger: "onBlur",
              rules: [
                {
                  type: "string",
                  required: true,
                  message: "请检查银行卡号一栏是否输入",
                },
                {
                  validator(rule, value, callback, source, options) {
                    let errors = [];

                    let regBankCard = /^([1-9]{1})(\d{14}|\d{18})$/;
                    if (value === undefined || value === "") {
                      bankcardnumError = true;
                      errors.push("请检查银行卡号一栏是否输入");
                    } else if (
                      value !== undefined &&
                      value !== "" &&
                      !regBankCard.test(value)
                    ) {
                      bankcardnumError = true;
                      errors.push("请检查银行卡号一栏是否输入正确");
                    } else {
                      bankcardnumError = false;
                    }
                    callback(errors);
                  },
                },
              ],
            })}
            type="bankCard"
          >
            银行卡
          </InputItem>
        </List>

        <WhiteSpace />
      </PageWrapper>
    );
  }
}

export default createForm()(FormDemo);
