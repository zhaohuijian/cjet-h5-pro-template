import React from "react";
/* eslint arrow-body-style: 0 */
import { Slider, WingBlank, WhiteSpace } from "antd-mobile";

import PageWrapper from "../../components/pageWrapper";

import style from "./style.module.css";

class SliderComponent extends React.Component {
  log = (name) => {
    return (value) => {
      console.log(`${name}: ${value}`);
    };
  };
  render() {
    return (
      <PageWrapper navBarText="Slider 滑动输入条" {...this.props}>
        <div className={style["am-slider-example"]}>
          <WhiteSpace size="lg" />
          <WingBlank size="lg">
            <p className={style["sub-title"]}>Slider</p>
            <Slider
              style={{ marginLeft: 30, marginRight: 30 }}
              defaultValue={26}
              min={0}
              max={30}
              onChange={this.log("change")}
              onAfterChange={this.log("afterChange")}
            />
          </WingBlank>
          <WhiteSpace size="lg" />
          <WingBlank size="lg">
            <p className={style["sub-title"]}>Disabled slider</p>
            <Slider
              style={{ marginLeft: 30, marginRight: 30 }}
              defaultValue={26}
              min={0}
              max={30}
              disabled
              onChange={this.log("change")}
              onAfterChange={this.log("afterChange")}
            />
          </WingBlank>
          <WhiteSpace size="lg" />
          <WingBlank size="lg">
            <p className={style["sub-title"]}>Slider with customized color</p>
            <Slider
              style={{ marginLeft: 30, marginRight: 30 }}
              defaultValue={26}
              min={0}
              max={30}
              trackStyle={{
                backgroundColor: "red",
                height: "5px",
              }}
              railStyle={{
                backgroundColor: "blue",
                height: "5px",
              }}
              handleStyle={{
                borderColor: "blue",
                height: "14px",
                width: "14px",
                marginLeft: "-7px",
                marginTop: "-4.5px",
                backgroundColor: "blue",
              }}
            />
          </WingBlank>
        </div>
      </PageWrapper>
    );
  }
}

export default SliderComponent;
