import React from "react";
import { NavBar, Icon } from "antd-mobile";
import styles from "./style.module.less";

class PageWrapper extends React.Component {
  onLeftClick = () => {
    const { history } = this.props;
    history.goBack();
  };
  render() {
    const { navBarText, children } = this.props;
    return (
      <div>
        <NavBar
          mode="light"
          className={styles.fixed}
          icon={<Icon type="left" />}
          onLeftClick={this.onLeftClick}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >
          {navBarText}
        </NavBar>
        <div className={styles.fixedContent}>{children}</div>
      </div>
    );
  }
}

export default PageWrapper;
