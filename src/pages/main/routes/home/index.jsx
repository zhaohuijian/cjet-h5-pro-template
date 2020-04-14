import React from "react";
import { Grid, WhiteSpace } from "antd-mobile";

const data1 = [
  {
    icon: "login-form",
    title: "登录注册",
  },
  {
    icon: "form",
    title: "基础表单",
  },
  {
    icon: "List",
    title: "长列表",
  },
  {
    icon: "chart",
    title: "图表",
  },
];
const HomeComponent = (props) => {
  const gridonClick = (e, index) => {
    const { history } = props;
    switch (index) {
      case 0:
        history.push("/user/login");
        break;
      case 1:
        history.push("/form");
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <h3>系统组件示例</h3>
      <WhiteSpace />
      <Grid
        data={data1}
        onClick={gridonClick}
        columnNum={3}
        renderItem={(dataItem) => (
          <div style={{ padding: "12.5px" }}>
            <svg aria-hidden="true" style={{ width: "75px", height: "75px" }}>
              <use xlinkHref={`#icon-${dataItem.icon}`}></use>
            </svg>
            <div style={{ color: "#888", fontSize: "14px", marginTop: "12px" }}>
              <span>{dataItem.title}</span>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default HomeComponent;
