import React from "react";
import { Progress, Button, WingBlank, WhiteSpace } from "antd-mobile";
import PageWrapper from "../../../components/pageWrapper";

import styles from "./style.module.css";

class ProgressComponent extends React.Component {
  state = {
    percent: 50,
  };
  add = () => {
    let p = this.state.percent + 10;
    if (this.state.percent >= 100) {
      p = 0;
    }
    this.setState({ percent: p });
  };
  render() {
    const { percent } = this.state;
    return (
      <PageWrapper navBarText="Progress 进度条" {...this.props}>
        <div className={styles["progress-container"]}>
          <Progress percent={30} position="fixed" />
          <div style={{ height: 18 }} />
          <Progress
            percent={40}
            position="normal"
            unfilled={false}
            appearTransition
          />
          <div>
            <div className={styles["progress"]}>
              <Progress percent={percent} position="normal" />
            </div>
            <div aria-hidden="true">{percent}%</div>
          </div>
          <WhiteSpace size="xl" />
          <WingBlank>
            <Button onClick={this.add}>(+-)10</Button>
          </WingBlank>
        </div>
      </PageWrapper>
    );
  }
}

export default ProgressComponent;
