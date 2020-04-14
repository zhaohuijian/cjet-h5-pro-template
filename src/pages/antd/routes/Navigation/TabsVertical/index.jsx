import React from "react";
import { Tabs, WhiteSpace } from "antd-mobile";
import PageWrapper from "../../../components/pageWrapper";

const tabs = [
  { title: "1 Tab", key: "t1" },
  { title: "2 Tab", key: "t2" },
  { title: "3 Tab", key: "t3" },
];

const TabsVertical = (props) => (
  <PageWrapper navBarText="Tabs 标签页 垂直样式" {...props}>
    <div style={{ height: 200 }}>
      <WhiteSpace />
      <Tabs
        tabs={tabs}
        initialPage={"t2"}
        tabBarPosition="left"
        tabDirection="vertical"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "250px",
            backgroundColor: "#fff",
          }}
        >
          Content of first tab
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "250px",
            backgroundColor: "#fff",
          }}
        >
          Content of second tab
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "250px",
            backgroundColor: "#fff",
          }}
        >
          Content of third tab
        </div>
      </Tabs>
      <WhiteSpace />
    </div>
  </PageWrapper>
);

export default TabsVertical;
