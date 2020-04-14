import React from "react";
/* eslint arrow-body-style: 0 */
import { Range, WingBlank, WhiteSpace } from "antd-mobile";

import PageWrapper from "../../components/pageWrapper";

import style from "./style.module.css";

const RangeComponent = (props) => {
  const log = (name) => {
    return (value) => {
      console.log(`${name}: ${value}`);
    };
  };
  return (
    <PageWrapper navBarText="Range 区域选择" {...props}>
      <div className={style["am-slider-example"]}>
        <WhiteSpace size="lg" />
        <WingBlank>
          <p className={style["sub-title"]}>Basic range</p>
          <Range
            style={{ marginLeft: 30, marginRight: 30 }}
            min={0}
            max={20}
            defaultValue={[3, 10]}
            onChange={log("change")}
            onAfterChange={log("afterChange")}
          />

          <WhiteSpace size="lg" />

          <p className={style["sub-title"]}>Disabled range</p>
          <Range
            style={{ marginLeft: 30, marginRight: 30 }}
            min={0}
            max={20}
            defaultValue={[3, 10]}
            onChange={log("change")}
            onAfterChange={log("afterChange")}
            disabled
          />

          <WhiteSpace size="lg" />

          <p className={style["sub-title"]}>Range with customized style</p>
          <Range
            style={{ marginLeft: 30, marginRight: 30 }}
            min={0}
            max={20}
            defaultValue={[3, 10]}
            onChange={log("change")}
            onAfterChange={log("afterChange")}
            trackStyle={[
              { backgroundColor: "red" },
              { backgroundColor: "green" },
            ]}
            handleStyle={[
              { backgroundColor: "yellow" },
              { backgroundColor: "gray" },
            ]}
            railStyle={{ backgroundColor: "black" }}
          />
        </WingBlank>
      </div>
    </PageWrapper>
  );
};

export default RangeComponent;
