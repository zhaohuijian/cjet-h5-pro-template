import React from "react";
import { Icon, Grid } from "antd-mobile";
import PageWrapper from "../../../components/pageWrapper";
const list = [
  "check-circle",
  "check",
  "check-circle-o",
  "cross-circle",
  "cross",
  "cross-circle-o",
  "up",
  "down",
  "left",
  "right",
  "ellipsis",
  "loading",
];

const IconComponent = (props) => {
  const data = list.map((item) => ({
    icon: <Icon type={item} />,
    text: item,
  }));

  const size = ["xxs", "xs", "sm", "md", "lg"];
  const dataSize = size.map((item) => ({
    icon: <Icon type="search" size={item} />,
    text: item,
  }));

  return (
    <PageWrapper navBarText="Icon 图标" {...props}>
      <h3>基本</h3>
      <Grid data={data} columnNum={3} hasLine={false} activeStyle={false} />

      <h3>大小</h3>
      <Grid data={dataSize} columnNum={5} hasLine={false} activeStyle={false} />
    </PageWrapper>
  );
};

export default IconComponent;
