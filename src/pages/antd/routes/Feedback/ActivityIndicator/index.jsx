import React from "react";
import { ActivityIndicator, WingBlank, WhiteSpace, Button } from "antd-mobile";
import PageWrapper from "../../../components/pageWrapper";

import styles from "./style.module.css";

class ActivityIndicatorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
    };
  }
  componentWillUnmount() {
    clearTimeout(this.closeTimer);
  }
  showToast = () => {
    this.setState({ animating: !this.state.animating });
    this.closeTimer = setTimeout(() => {
      this.setState({ animating: !this.state.animating });
    }, 1000);
  };
  render() {
    return (
      <PageWrapper navBarText="ActivityIndicator 活动指示器" {...this.props}>
        <WingBlank>
          <div className={styles["loading-container"]}>
            <p className={styles["sub-title"]}>Without text</p>
            <div className={styles["loading-example"]}>
              <ActivityIndicator animating />
            </div>
            <p className={styles["sub-title"]}>With text</p>
            <div className={styles["loading-example"]}>
              <ActivityIndicator text="Loading..." />
            </div>
            <p className={styles["sub-title"]}>
              With large size and customized text style
            </p>
            <div className={styles["loading-example"]}>
              <div className={styles["align"]}>
                <ActivityIndicator size="large" />
                <span style={{ marginTop: 8 }}>Loading...</span>
              </div>
            </div>
          </div>
          <div className="toast-container">
            <WhiteSpace size="xl" />
            <Button onClick={this.showToast}>click to show Toast</Button>
            <div className="toast-example">
              <ActivityIndicator
                toast
                text="Loading..."
                animating={this.state.animating}
              />
            </div>
          </div>
        </WingBlank>
      </PageWrapper>
    );
  }
}

export default ActivityIndicatorComponent;
