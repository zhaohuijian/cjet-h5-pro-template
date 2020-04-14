import React from "react";
import { WingBlank, WhiteSpace } from "antd-mobile";
import style from "./style.module.css";
import PageWrapper from "../../../components/pageWrapper";

const PlaceHolder = ({ className = "", ...restProps }) => (
  <div className={`${className} ${style.placeholder}`} {...restProps}>
    Block
  </div>
);

const WingBlankExample = (props) => {
  return (
    <PageWrapper navBarText=" WingBlank 两翼留白" {...props}>
      <WhiteSpace size="lg" />

      <div style={{ padding: "15px 0" }}>
        <WingBlank>
          <PlaceHolder />
        </WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <PlaceHolder />
        </WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="sm">
          <PlaceHolder />
        </WingBlank>
      </div>
    </PageWrapper>
  );
};

export default WingBlankExample;
