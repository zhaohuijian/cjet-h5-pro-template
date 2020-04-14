import React from "react";
import { SegmentedControl, WingBlank } from "antd-mobile";
import PageWrapper from "../../../components/pageWrapper";
import style from "./style.module.css";

class SegmentedControlExample extends React.Component {
  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  };
  onValueChange = (value) => {
    console.log(value);
  };
  render() {
    return (
      <PageWrapper navBarText="SegmentedControl 分段器" {...this.props}>
        <WingBlank size="lg" className={style["sc-example"]}>
          <p className={style["sub-title"]}>Simplest</p>
          <SegmentedControl values={["Segment1", "Segment2"]} />

          <p className={style["sub-title"]}>Disabled</p>
          <SegmentedControl values={["Segment1", "Segment2"]} disabled />

          <p className={style["sub-title"]}>SelectedIndex</p>
          <SegmentedControl
            selectedIndex={1}
            values={["Segment1", "Segment2", "Segment3"]}
          />

          <p className={style["sub-title"]}>TintColor</p>
          <SegmentedControl
            values={["Segment1", "Segment2", "Segment3"]}
            tintColor={"#ff0000"}
            style={{ height: "40px", width: "250px" }}
          />

          <p className={style["sub-title"]}>onChange/onValueChange</p>
          <SegmentedControl
            values={["Segment1", "Segment2", "Segment3"]}
            onChange={this.onChange}
            onValueChange={this.onValueChange}
          />
        </WingBlank>
      </PageWrapper>
    );
  }
}

export default SegmentedControlExample;
