import React from "react";
import { WhiteSpace } from "antd-mobile";
import PageWrapper from "../../../components/pageWrapper";

import style from "./style.module.css";

const PlaceHolder = ({ className = "", ...restProps }) => (
  <div className={`${className} ${style.placeholder}`} {...restProps}>
    Block
  </div>
);

const WhiteSpaceExample = (props) => {
  return (
    <PageWrapper navBarText=" WhiteSpace 上下留白" {...props}>
      <WhiteSpace size="lg" />

      <div>
        <WhiteSpace size="xs" />
        <PlaceHolder />

        <WhiteSpace size="sm" />
        <PlaceHolder />

        <WhiteSpace />
        <PlaceHolder />

        <WhiteSpace size="lg" />
        <PlaceHolder />

        <WhiteSpace size="xl" />
        <PlaceHolder />
      </div>
    </PageWrapper>
  );
};

export default WhiteSpaceExample;
