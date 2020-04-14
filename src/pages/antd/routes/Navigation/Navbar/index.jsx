import React from "react";
import { NavBar, Icon } from "antd-mobile";
import PageWrapper from "../../../components/pageWrapper";

const NavBarComponent = (props) => {
  return (
    <PageWrapper navBarText="NavBar 导航栏" {...props}>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log("onLeftClick")}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
          <Icon key="1" type="ellipsis" />
        ]}
      >
        NavBar
      </NavBar>

      <NavBar
        mode="dark"
        leftContent="Back"
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
          <Icon key="1" type="ellipsis" />
        ]}
      >
        NavBar
      </NavBar>
    </PageWrapper>
  );
};
export default NavBarComponent;
